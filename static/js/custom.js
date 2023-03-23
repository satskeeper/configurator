import {
  encryptInheritancePlan, decryptInheritancePlan, checkNetwork,
  updateWarningToast, nextSection, resetTabsHighlight, previousSection,
  highlightTabsWithErrors, classAdded, fakeOnChangeForInputs,
  removePlanID, removeChecksums, importFromSession, ClassWatcher} from './utils.js';
import {CONFIG} from './utils.js';

export let lang = {};

// eslint-disable-next-line
let sessionAnchor; let sessionEditor; let passwordAnchor; let passwordEditor; let uploadAnchor; let uploadEditor; let mainAnchor; let mainEditor; let editors;

// Set theme
JSONEditor.defaults.theme = 'bootstrap4';
JSONEditor.defaults.iconlib = 'bootstrap4';

// Custom upload handler to populate mainEditor with data from json file
JSONEditor.defaults.callbacks.upload = {
  'uploadHandler': function(jseditor, type, file, cbs) {
    const reader = new FileReader();
    reader.addEventListener('load', (event) => {
      try {
        const result = JSON.parse(event.target.result);
        const pwd = uploadEditor.getEditor('upload.password').getValue();
        const decryptedPlan = decryptInheritancePlan(result, pwd);
        // Reomve plan so that new one is auto-generated
        removePlanID(decryptedPlan);
        // Remove checksums so that new one is generated
        removeChecksums(decryptedPlan);
        // Temporarily disabling certain validators
        CONFIG.importing = true;
        mainEditor.setValue(decryptedPlan);
        // Enabling validators again
        CONFIG.importing = false;
        displayNonEmptyCards();
        // Store pw in session so that it can be used to encrypt the file later
        sessionStorage.setItem('pwd', pwd);
        // Jump to the next step
        nextSection('step_import', 'step_configure');
      }
      catch (error) {
        document.getElementById('toast-error').hidden = false;
        console.log(error);
      }
    });
    reader.readAsText(file);
  },
};

// Custom validation
JSONEditor.defaults.custom_validators.push(function(schema, value, path) {
  const errors = [];

  // Mark required fields as required
  if (schema.required && value.length === 0) {
    errors.push({
      path: path,
      property: 'type',
      message: lang.field_required,
    });
  }
  // Password validation
  if (path === 'password.password_repeat') {
    const confPass = value;
    const password = passwordEditor.getEditor('password.password').value;
    // Validate that encryption passwords match
    if (password !== confPass) {
      errors.push({
        path: path,
        property: 'password_repeat',
        message: lang.pw_no_match,
      });
    }
  }

  if (path === 'main.heirs') {
    const heirs = value;
    const shareSum = heirs.reduce((sum, heir) => sum + heir.share, 0);
    if (heirs.length > 0 && shareSum !== 100) {
      errors.push({
        path: path,
        property: '',
        message: lang.heir_sum_100,
      });
    }
  }

  return errors;
});

async function intializeEditors() {
  JSONEditor.defaults.language = CONFIG.lang_code;
  JSONEditor.defaults.languages[CONFIG.lang_code] = lang.editor_controls;
  const {
    sessionFormSchema, passwordFormSchema, uploadFormSchema, mainFormSchema,
  } = await import('./schemas.js');
  // Session form
  sessionAnchor = document.getElementById('session_form');
  if (sessionAnchor) {
    sessionEditor = new JSONEditor(sessionAnchor, sessionFormSchema);
  }


  // Password form
  passwordAnchor = document.getElementById('password_form');
  if (passwordAnchor) {
    passwordEditor = new JSONEditor(passwordAnchor, passwordFormSchema);
  }


  // Upload form
  uploadAnchor = document.getElementById('upload_form');
  if (uploadAnchor) {
    uploadEditor = new JSONEditor(uploadAnchor, uploadFormSchema);
  }

  // Main form
  mainAnchor = document.getElementById('main_form');
  if (mainAnchor) {
    mainEditor = new JSONEditor(mainAnchor, mainFormSchema);
  }


  editors = [sessionEditor, uploadEditor, mainEditor, passwordEditor];
}

function attachCopyPWButtonListener() {
  const copyButton = document.getElementById('copyPW');
  if (copyButton) {
    copyButton.addEventListener(('click'), function(event) {
      const text = document.getElementById('accessPassword').innerHTML;
      navigator.clipboard.writeText(text);
    });
  }
}

function getPlanID() {
  const plan = JSON.parse(sessionStorage.getItem('encrypted_plan'));
  return plan.start.planID;
}

function getPassword() {
  return sessionStorage.getItem('pwd');
}

function removePwd() {
  sessionStorage.removeItem('pwd');
}

function getOrGeneratePassword() {
  let pwd = getPassword();
  if (!pwd) {
    pwd = self.crypto.randomUUID();
    sessionStorage.setItem('pwd', pwd);
  }
  return pwd;
}

function showPassword() {
  const pwd = getOrGeneratePassword();
  const accessPassword = document.getElementById('accessPassword');
  if (accessPassword) {
    accessPassword.textContent = pwd;
  }
}

function attachChooseOwnPasswordHandler() {
  const btn = document.getElementById('ownPasswordButton');
  const pwForm = document.getElementById('password_form');
  if (btn) {
    btn.addEventListener(('click'), function() {
      if (pwForm.hidden) {
        pwForm.hidden = false;
      }
      else {
        pwForm.hidden = true;
      }
    });
  }
}

function setPasswordButton() {
  const pwForm = document.getElementById('password_form');
  const userPW = passwordEditor.getEditor('password.password').getValue();
  const sessionPW = getOrGeneratePassword();
  const errors = passwordEditor.validate();
  if (userPW) {
    if (errors.length !== 0) {
      fakeOnChangeForInputs(pwForm);
    }
    else {
      if (userPW && userPW !== sessionPW) {
        sessionStorage.setItem('pwd', userPW);
        nextSection('step_create_password', 'step_configure');
      }
    }
  }
  else {
    nextSection('step_create_password', 'step_configure');
  }
}

function validatePlan() {
  resetTabsHighlight();
  const mainForm = document.getElementById('main_form');
  fakeOnChangeForInputs(mainForm);
  const errors = mainEditor.validate();
  if (errors.length > 0) {
    highlightTabsWithErrors(errors);
    throw new Error(lang.invalid_form);
  }
  return errors;
}

function finalisePlan() {
  const errors = validatePlan();
  if (errors.length == 0) {
    savePlanInSession();
  }
}

function onlineRequiredWarning() {
  if (!CONFIG.devmode) {
    updateWarningToast(true,
        lang.enable_internet_warning,
    );
  }
}

function destroyEditors() {
  editors.forEach((editor, _) => {
    editor.destroy();
  });
}

function proceedButtonContext() {
  const tabs = document.querySelectorAll('.card-header-tabs a');
  tabs.forEach((tab, _) => {
    new ClassWatcher(tab, 'active', classAdded);
  });
}

function proceedSubStep() {
  const currentTab = document.querySelector('.nav-link.active');
  if (currentTab) {
    const nextTab = currentTab.parentElement.nextSibling;
    currentTab.classList.remove('active');
    nextTab.classList.add('active');
    nextTab.click();
  }
}

function prepareForUpload() {
  // Before going online: remove PW from session
  removePwd();
  // Delete editors to clear all data
  destroyEditors();
  // Now the plan is encrypted so being offline isn't required anymore
  CONFIG.require_offline = false;
  // Show warning that you need to be online to save the plan in your account
  onlineRequiredWarning();
  nextSection('step_save', 'step_redirect');
}

function redirectToSatskeeper() {
  // Redirect to receive-plan page in satskeeper platform
  if (CONFIG.lang_code == 'de') {
    window.location.href = '/de/app/plan/receive-plan/';
  }
  else {
    window.location.href = '/app/plan/receive-plan/';
  }
}

function serialize(object) {
  if (Array.isArray(object)) {
    return JSON.stringify(object.map((i) => serialize(i)));
  }
  else if (typeof object === 'object' && object !== null) {
    return Object.keys(object)
        .sort()
        .map((key) => `${key}:${serialize(object[key])}`)
        .join('|');
  }
  return object;
}

function calculateChecksums(obj) {
  const checksums = {
    "total": calculateChecksum(obj)
  }
  Object.keys(obj).forEach((key, _) => {
    checksums[key] = calculateChecksum(obj[key]);
  });
  return checksums;
}

function calculateChecksum(plan) {
  const serialised = serialize(plan);
  // eslint-disable-next-line new-cap
  return CryptoJS.SHA256(serialised).toString();
}

function savePlanInSession() {
  const plan = mainEditor.getValue();
  const pwd = getPassword();
  const encryptedPlan = encryptInheritancePlan(plan, pwd);
  encryptedPlan['checksums'] = calculateChecksums(encryptedPlan);
  const jsonPlan = JSON.stringify(encryptedPlan);
  sessionStorage.setItem('encrypted_plan', jsonPlan);
}

function downloadPlan() {
  const plan = sessionStorage.getItem('encrypted_plan');
  const blob = new Blob([plan], {type: 'application/json;charset=utf-8'});
  saveAs(blob, 'my_inheritance_plan.json');
}

function translatePage() {
  document.querySelectorAll('[data-i18n-key]').forEach((element) => {
    const key = element.getAttribute('data-i18n-key');
    const translation = lang[key];
    if (CONFIG.lang_code !== 'en') {
      if (!translation) {
        console.log(`translation missing for key: ${key}`);
      }
      else {
        element.innerHTML = translation;
      }
    }
  });
}

async function setLanguage() {
  const paramsString = window.location.search;
  const searchParams = new URLSearchParams(paramsString);
  const langCode = searchParams.get('lang') || 'en';
  CONFIG.lang_code = langCode;
  if (CONFIG.lang_code == 'de') {
    const mod = await import('./lang.de.js');
    lang = mod.lang;
  }
  else {
    const mod = await import('./lang.en.js');
    lang = mod.lang;
  }
  if (CONFIG.lang !== 'en') {
    translatePage();
  }
}

function checkDevMode() {
  const paramsString = window.location.search;
  const searchParams = new URLSearchParams(paramsString);
  if (searchParams.get('dev') === 'true') {
    CONFIG.devmode = true;
  }
}

async function checkSampleMode() {
  const paramsString = window.location.search;
  const searchParams = new URLSearchParams(paramsString);
  if (searchParams.get('sample') === 'true') {
    const {sampleData} = await import('./sample_data.js');
    // Temporarily disabling certain validators
    CONFIG.importing = true;
    mainEditor.setValue(sampleData);
    CONFIG.importing = false;
  }
}

function checkSatskeeperMode() {
  const paramsString = window.location.search;
  const searchParams = new URLSearchParams(paramsString);
  if (searchParams.get('satskeeper') === 'true') {
    CONFIG.satskeeper = true;
  }
}

function initialSessionImport() {
  const plan = sessionStorage.getItem('encrypted_plan');
  if (plan) {
    const section = document.getElementById('sessionPlan');
    section.hidden = false;
  }
}


function attachNewHeirListener() {
  mainEditor.on('addRow', (_) => {
    if (!CONFIG.importing) {
      const heirsEditor = mainEditor.getEditor('main.heirs');
      const heirs = heirsEditor.value;
      const shareSum = heirs.reduce((sum, heir) => sum + heir.share, 0);
      if (heirs.length > 0) {
        if (heirs.length === 1) {
          heirs[0].share = 100;
        }
        else {
          if (shareSum === 100) {
            heirs[heirs.length-1].share = 0;
          }
          else {
            const newShares = 100 - shareSum;
            if (newShares < 0) {
              heirs[heirs.length-1].share = 0;
            }
            else {
              heirs[heirs.length-1].share = newShares;
            }
          }
        }
        heirsEditor.setValue(heirs);
      }
    }
  });
}

function attachDisplayCardListener() {
  const addButtons = document.querySelectorAll(
      '.tab-pane .json-editor-btntype-add',
  );
  addButtons.forEach((button, _) => {
    button.addEventListener(('click'), function(event) {
      const btn = event.target;
      const card = btn.closest('.row').querySelector('.card');
      card.hidden = false;
    });
  });
}

function hideEmptyCards() {
  const cards = document.querySelectorAll('.tab-pane .card');
  cards.forEach((card, _) => {
    const rows = card.querySelectorAll('.row');
    if (rows.length === 0) {
      card.hidden = true;
    }
  });
}

function displayNonEmptyCards() {
  const cards = document.querySelectorAll('.tab-pane .card');
  cards.forEach((card, _) => {
    const rows = card.querySelectorAll('.row');
    if (rows.length !== 0) {
      card.hidden = false;
    }
  });
}

function attachTooltips() {
  mainEditor.on('change',() => {
    const tooltipTriggerList = [].slice.call(
      document.querySelectorAll('[data-toggle="tooltip"]')
    );
    const tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl, {trigger : 'hover'})
    })
  });
}

// Once whole document has loaded
window.addEventListener('load', function() {
  setLanguage().then(() => {
    intializeEditors().then(() => {
      checkDevMode();
      checkSampleMode();
      checkSatskeeperMode();
      initialSessionImport();
      attachNewHeirListener();
      attachCopyPWButtonListener();
      hideEmptyCards();
      showPassword();
      attachChooseOwnPasswordHandler();
      attachDisplayCardListener();
      attachTooltips();
      setTimeout(() => {
        proceedButtonContext();
      }, 1000);
      setInterval(() => {
        checkNetwork(editors);
      }, 1000);
    });
  });
});


// Attach EventListeners to all buttons
document.addEventListener('click', function(event) {
  const errorToastText = document.getElementById('toast-error-text');
  const errorToast = document.getElementById('toast-error');
  errorToast.hidden = true;

  try {
    const isButton = event.target.nodeName === 'BUTTON';
    const button = event.target;
    if (isButton) {
      const previousStepId = button.getAttribute('data-previous-step');
      const thisStepId = button.getAttribute('data-this-step');
      const nextStepId = button.getAttribute('data-next-step');
      const functionName = button.getAttribute('data-function');

      // Import plan from sessionStorage
      if (functionName && functionName === 'importFromSession') {
        importFromSession(sessionEditor, mainEditor);
        displayNonEmptyCards();
      }

      // Proceed to next sub step
      else if (functionName && functionName === 'proceedSubStep') {
        validatePlan();
        proceedSubStep();
      }

      // Validate plan and store in session
      else if (functionName && functionName === 'finalisePlan') {
        finalisePlan();
      }

      // Set inheritance plan access password
      else if (functionName && functionName === 'setPasswordButton') {
        setPasswordButton();
      }

      // Download plan as json
      else if (functionName && functionName === 'downloadPlan') {
        downloadPlan();
      }

      // Download access file
      else if (functionName && functionName === 'downloadAccessFile') {
        const plan = mainEditor.getValue();
        downloadAccessFile(plan.heirs);
      }

      // Prepare for file upload and redirect to next page
      else if (functionName && functionName === 'prepareForUpload') {
        prepareForUpload();
      }

      // Redirect to Satskeeper plan
      else if (functionName && functionName === 'redirectToSatskeeper') {
        redirectToSatskeeper();
      }

      // Jump to next step
      if (thisStepId && nextStepId) {
        nextSection(thisStepId, nextStepId);
      }

      if (thisStepId && previousStepId) {
        previousSection(thisStepId, previousStepId);
      }
    }
  }
  catch (error) {
    errorToastText.innerText = error;
    errorToast.hidden = false;
    console.log(error); // keep
  }
});


const myEvent = window.attachEvent || window.addEventListener;
const chkevent = window.attachEvent ? 'onbeforeunload' : 'beforeunload';

myEvent(chkevent, function(e) { // For >=IE7, Chrome, Firefox
  e.preventDefault();
  const confirmationMessage = lang.exit_page_message;
  (e || window.event).returnValue = confirmationMessage;
  return confirmationMessage;
});

window.addEventListener('unload', function() {
  removePwd(); // remove PW from session when leaving/reloading the configurator
});

function enableContinueButton() {
  const btn = document.getElementById('continue-to-redirect');
  btn.disabled = false;
}


function downloadAccessFile(heirs) {
  window.jsPDF = window.jspdf.jsPDF;
  const pwd = getPassword();
  const planID = getPlanID();
  // eslint-disable-next-line new-cap
  const doc = new jsPDF({orientation: 'p', lineHeight: 1.5});
  doc.setProperties({title: lang.access_file.file_name});
  heirs.forEach((heir, i) => {
    if (i > 0) {
      doc.addPage();
    }
    doc.setFontSize(20);
    doc.text(20, 20, lang.access_file.title);
    doc.setFontSize(10);
    doc.text(20, 30, lang.access_file.note);
    doc.setFontSize(12);
    doc.text(20, 55, `${lang.access_file.name_of_heir} ${heir.first} ${heir.last}`); // eslint-disable-line
    doc.setFontSize(10);
    doc.text(20, 65, lang.access_file.main_body, {maxWidth: 170});
    doc.setFontSize(14);
    doc.text(20, 140, `${lang.access_file.pwd_line} ${pwd}`);
    doc.setFontSize(12);
    doc.text(20, 150, `${lang.access_file.plan_id_line} ${planID}`);
    doc.text(20, 160, lang.access_file.support_line);
  });
  doc.save(lang.access_file.file_name);
  doc.output('dataurlnewwindow');
  enableContinueButton();
}
