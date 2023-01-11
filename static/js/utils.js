import {lang} from './custom.js';

export const PLAINTEXTKEYS = [
  'date', 'version', 'first', 'last', 'planID', 'materialID', 'exchangeID',
  'walletID', 'deviceID', 'heirID',
];
export const EXCLUDEKEYS = ['password', 'password_repeat', 'checksums'];
export const CONFIG = {
  devmode: false,
  require_offline: true,
  initialNetworkCheck: true,
  isConnected: false,
  satskeeper: false,
  importing: false,
  lang_code: 'en',
};

export class ClassWatcher {
  constructor(
      targetNode, classToWatch, classAddedCallback, classRemovedCallback,
  ) {
    this.targetNode = targetNode;
    this.classToWatch = classToWatch;
    this.classAddedCallback = classAddedCallback;
    this.classRemovedCallback = classRemovedCallback;
    this.observer = null;
    this.lastClassState = targetNode.classList.contains(this.classToWatch);

    this.init();
  }

  init() {
    this.observer = new MutationObserver(this.mutationCallback);
    this.observe();
  }

  observe() {
    this.observer.observe(this.targetNode, {attributes: true});
  }

  disconnect() {
    this.observer.disconnect();
  }

  mutationCallback = (mutationsList) => {
    for (const mutation of mutationsList) {
      if (
        mutation.type === 'attributes' &&
        mutation.attributeName === 'class'
      ) {
        const currentClassState = mutation.target.classList.contains(
            this.classToWatch,
        );
        if (this.lastClassState !== currentClassState) {
          this.lastClassState = currentClassState;
          if (currentClassState) {
            this.classAddedCallback(this.targetNode);
          }
          else {
            if (this.classRemovedCallback) {
              this.classRemovedCallback(this.targetNode);
            }
          }
        }
      }
    }
  };
}

export function removePlanID(plan) {
  delete plan['start']['planID'];
}

export function removeChecksums(plan) {
  delete plan['checksums'];
}

export function fakeOnChangeForInputs(form) {
  const ev = new Event('change');
  const inputs = form.querySelectorAll('input');
  inputs.forEach((input, _) => {
    input.dispatchEvent(ev);
  });
}

export function classAdded(tab) {
  // Last substep tab
  const subStepButton = document.getElementById('subStepButton');
  const validationButton = document.getElementById('validationButton');
  if (subStepButton && validationButton) {
    if (tab.href.includes('details')) {
      subStepButton.classList.add('d-none');
      validationButton.classList.remove('d-none');
    }
    else {
      subStepButton.classList.remove('d-none');
      validationButton.classList.add('d-none');
    }
  }
}

export function resetTabsHighlight() {
  const tabs = document.querySelectorAll('.card-header-tabs a');
  tabs.forEach((tab, _) => {
    tab.style.background = 'unset';
  });
}

export function highlightTabsWithErrors(errors) {
  errors.forEach((error, _) => {
    const tabHref = error.path.split('.')[1];
    const searchString = `a[href*=${tabHref}]`;
    const tab = document.querySelector(searchString);
    tab.style.background = '#fa7c73';
  });
}

function isConnected() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.timeout = 2000;
    xhr.onload = () => resolve(true);
    xhr.onerror = (error) => reject(error);
    xhr.onabort = (error) => reject(error);

    if (
      location.hostname === 'localhost' ||
      location.hostname.includes('127.0.0')
    ) {
      const PROXY_URL = 'https://cors-anywhere.herokuapp.com/';
      xhr.open('GET', PROXY_URL + 'https://satskeeper.com', true);
    }
    else {
      xhr.open('GET', 'https://satskeeper.com', true);
    }
    xhr.send();
  });
}

function isOnline(editors, onlineRequiredButtons, offlineRequiredButtons) {
  editors.forEach((editor, i) => {
    try {
      editor.disable();
    }
    catch {
      console.log(lang.editor_non_existent_disable);
    }
  });
  onlineRequiredButtons.forEach((btn, _) => {
    btn.disabled = false;
  });
  offlineRequiredButtons.forEach((btn, _) => {
    btn.disabled = true;
  });
  if (CONFIG.require_offline) {
    updateWarningToast(true,
        lang.offline_required_warning,
    );
  }
  else {
    updateWarningToast(false);
  }
}


function isOffline(editors, onlineRequiredButtons, offlineRequiredButtons) {
  editors.forEach((editor, i) => {
    try {
      editor.enable();
    }
    catch {
      console.log(lang.editor_non_existent_enable);
    }
  });
  onlineRequiredButtons.forEach((btn, _) => {
    btn.disabled = true;
  });
  offlineRequiredButtons.forEach((btn, _) => {
    btn.disabled = false;
  });
  updateWarningToast(false);
}

export function checkNetwork(editors) {
  const onlineRequiredButtons = document.querySelectorAll(
      '[data-offline-required=\'false\']',
  );
  const offlineRequiredButtons = document.querySelectorAll(
      '[data-offline-required=\'true\']',
  );
  if (!CONFIG.devmode) {
    isConnected()
        .then(() => {
          if (CONFIG.initialNetworkCheck || !CONFIG.isConnected) {
            isOnline(editors, onlineRequiredButtons, offlineRequiredButtons);
            CONFIG.isConnected = true;
            CONFIG.initialNetworkCheck = false;
          }
        })
        .catch((error) => {
          console.log(error);
          if (CONFIG.initialNetworkCheck || CONFIG.isConnected) {
            isOffline(editors, onlineRequiredButtons, offlineRequiredButtons);
            CONFIG.isConnected = false;
            CONFIG.initialNetworkCheck = false;
          }
        });
  }
  else {
    // Enable buttons in dev mode
    offlineRequiredButtons.forEach((btn, _) => {
      btn.disabled = false;
    });
  }
}

export function todaysDate() {
  const today = new Date();
  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // January is 0!
  const year = today.getFullYear();
  return `${year}-${month}-${day}`;
}

export function nextSection(thisStepId, nextStepId) {
  const thisStep = document.getElementById(thisStepId);
  const nextStep = document.getElementById(nextStepId);
  thisStep.hidden = !thisStep.hidden;
  nextStep.hidden = !nextStep.hidden;
}

export function previousSection(thisStepId, previousStepId) {
  const thisStep = document.getElementById(thisStepId);
  const previousStep = document.getElementById(previousStepId);
  thisStep.hidden = !thisStep.hidden;
  previousStep.hidden = !previousStep.hidden;
}

export function updateWarningToast(display, message) {
  const toast = document.getElementById('toast-warning');
  const toastText = document.getElementById('toast-warning-text');
  if (display) {
    toastText.innerText = message;
    toast.hidden = false;
  }
  else {
    toast.hidden = true;
  }
}

export function importFromSession(sessionEditor, mainEditor) {
  const encryptedPlan = sessionStorage.getItem('encrypted_plan');
  const jsonPlan = JSON.parse(encryptedPlan);
  const pwd = sessionEditor.getEditor('session.password').getValue();
  const decryptedPlan = decryptInheritancePlan(jsonPlan, pwd);
  // Remove plan ID so that new one is generated
  removePlanID(decryptedPlan);
  // Remove checksums so that new one is generated
  removeChecksums(decryptedPlan);
  // Store pw in session so that it can be used for encrypting the file later
  sessionStorage.setItem('pwd', pwd);
  // Temporarily disabling certain validators
  CONFIG.importing = true;
  mainEditor.setValue(decryptedPlan);
  // Enabling validators again
  CONFIG.importing = false;
}


function* iter(obj) {
  for (const [key, value] of Object.entries(obj)) {
    if (Object(value) !== value) {
      yield [obj, key, value];
    }
    else {
      yield* iter(value);
    }
  }
}


function encrypt(data, secret) {
  if (typeof data === 'string') {
    return CryptoJS.AES.encrypt(data, secret).toString();
  }
  else {
    return CryptoJS.AES.encrypt(data.toString(), secret).toString();
  }
}

function decrypt(data, secret) {
  try {
    const bytes = CryptoJS.AES.decrypt(data, secret);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
  catch {
    throw new Error(lang.incorrect_decryption_password);
  }
}

export function encryptInheritancePlan(plan, secret) {
  const planCopy = structuredClone(plan);

  for (const [obj, key, value] of iter(planCopy)) {
    if (EXCLUDEKEYS.includes(key)) {
      delete obj[key];
      continue;
    }
    if (value && !PLAINTEXTKEYS.includes(key)) {
      obj[key] = encrypt(value, secret);
    }
  }
  return planCopy;
}

export function decryptInheritancePlan(encryptedPlan, secret) {
  const planCopy = structuredClone(encryptedPlan);

  for (const [obj, key, value] of iter(planCopy)) {
    if (value && !PLAINTEXTKEYS.includes(key)) {
      obj[key] = decrypt(value, secret);
    }
  }
  return planCopy;
}


export function removeDescriptionFromSchema(schema) {
  for (const [obj, key] of iter(schema)) {
    if (key == 'description') {
      delete obj[key];
    }
  }
}
