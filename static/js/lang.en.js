export const lang = {
  pw_no_match: 'The passwords don\'t match',
  field_required:  'This field is required',
  heir_sum_100: 'Sum of percentages must be 100.',
  invalid_form: 'Form invalid. Please check all highlighted fields.',
  enable_internet_warning: `Please now enable your internet connection again so that the encrypted\
  file can be saved to your Satskeeper account.`,
  exit_page_message: 'Are you sure to leave the page?',
  editor_non_existent_disable: 'Can\'t disable editor as it does not exist anymore.',
  editor_non_existent_enable: 'Can\'t enable editor as it does not exist anymore.',
  offline_required_warning: `Please disable your internet connection or enable\
  flight mode. If you are using a VPN, you might also need to disconnect.\
  This inheritance plan configurator can only be used when\
  offline in order to protect against malware on your computer.\
  Once you are offline, this message will disapear and the buttons below\
  will become clickable.`,
  incorrect_decryption_password: 'Incorrect access password',
  editors: {
    session: {
      editorTitle: 'Import plan from session (optional)',
      password_title: 'Access password'
    },
    upload: {
      editorTitle: 'Import plan from file (optional)',
      password_title: 'Access password',
      file_title: 'Select file',
    },
    password: {
      password_title: 'Access password',
      password_repeat_title: 'Repeat access password',
    },
    main: {
      editorTitle: 'Plan editor',
      start: {
        title: 'Start',
        descripton: `Welcome. We will now guide you through the process of
          configuring your inheritance plan. All information you enter is only
          temporarily stored in your browser until it has been encrypted.
          After your inheritance plan has been encrypted you can save it to
          your Satskeeper account and/or download it.`
      },
      exchanges: {
        title: 'Custodians',
        title_singlular: 'Custodian',
        descripton: `Specify all custodial accounts that you are using which
          your heirs should be able access after your death. A custoidal account
          could be an exchange account, an account at a digital asset bank or any similiar
          institution that is safekeeping coins on your behalf. If you are not
          storing coins on any custodial accounts, skip this section.`,
        alias_title: 'Name',
        alias_info: 'The name of the company you have a custodial account with.',
        comment_title: 'Optional comment',
        access_material_title: 'Access material',
        access_material_description: `Please specify what access material is required in order to access this account. Create one entry for each piece of access material
          that is required in order to access this account. Specify the type of the access material and where it can be found. Do not include secret information.`,
        access_material_title_2: 'Material',
        access_material_type_title: 'Type',
        access_material_type_option1: 'Email address',
        access_material_type_option2: 'Password',
        access_material_type_option3: '2FA code(s)',
        access_material_type_option4: 'Other (specify in comment)',
        access_material_location_title: 'Location',
        access_material_comment_title: 'Optional comment'
      },
      wallets: {
        title: 'Wallets',
        title_singlular: 'Wallet',
        descripton: `Specify all wallets that your heirs should be able to
          recover after your death. Make sure to list all requried backup
          materials in order to restore each wallet. Please do NOT include
          secret information such as your seed words in this inheritance plan.
          Only the information on where this information can be found should
          be included.`,
        wallet_alias_title: 'Wallet name/alias',
        wallet_alias_info: 'A user chosen name to identify this wallet. Example: "Main savings", "Mixed coins" etc.',
        wallet_comment_title: 'Optional comment',
        wallet_material_title: 'Backup material',
        wallet_material_title2: 'Material',
        wallet_material_description: `Create one entry for each piece of backup material
          that is required in order to access this wallet. Specify the type of backup
          material and where it can be found.`,
        wallet_material_type_title: 'Type',
        wallet_material_type_option1: 'Wallet seed words',
        wallet_material_type_option2: 'Wallet passphrase',
        wallet_material_type_option3: 'Raw private key',
        wallet_material_type_option4: '2FA code(s)',
        wallet_material_type_option5: 'Other (specify in comment)',
        wallet_material_location_title: 'Location',
        wallet_material_comment_title: 'Optional comment'
      },
      devices: {
        title: 'Devices',
        title_singlular: 'Device',
        descripton: `Specify all devices you are using to interact with your
          wallets. This will allow your heirs to use those same devices or at
          least make sure they are using the same kind of device when restoring
          your wallet. We maintain an extensive wiki containing recovery
          instructions for a wide range of devices which your heirs will have
          access to in order to help them restore.`,
        device_alias_title: 'Device name',
        device_alias_info: 'The offical name of the device you are using. Example: "BitBox02 hardware wallet",  "Apple iPhone 12" etc.',
        device_location_title: 'Location',
        device_location_info: 'Explain where your heirs can find this device.',
        device_comment_title: 'Optional comment',
        device_selected_wallets_title: 'Wallets loaded onto this device:',
        device_selected_wallets_title2: 'Wallets',
        device_selected_wallets_description: `Please select which of the wallets you documented on the "Wallets" page are loaded on this specific device. For example if this device is a hardware wallet you might have two wallets loaded on it. One wallet that just requires 24 seed words and a second wallet that requires 24 seed words plus a passphrase. To document additional wallets, go back to the "Wallets" page`,
        access_material_title: 'Access material',
        access_material_description: `Please specify what access material is required in order to use this device. Create one entry for each piece of access material
          that is required in order to access this specific device. Specify the type of the access material and where it can be found. Do not include secret information.`,
        access_material_title_2: 'Material',
        access_material_type_title: 'Type',
        access_material_type_option1: 'Device password',
        access_material_type_option2: 'Other (specify in comment)',
        access_material_location_title: 'Location',
        access_material_comment_title: 'Optional comment'
      },
      heirs: {
        title: 'Heirs',
        title_singlular: 'Heir',
        descripton: `Secify all your heirs and what percentage of the
          recovered funds they are entitled to. The total must sum to 100%.`,
        first_name_title: 'First name',
        last_name_title: 'Last name',
        share_title:  'Share %',
        share_info: 'Specify what percentage of all recovered coins this heir is entitled to.',
        birthday_title: 'Birthday',
        birthday_info: 'Please provide the birthday of this heir.',
        relationship_title: 'Relationship to heir',
        relationship_placeholder: 'Example: Spouse, Child, Grandchild, Nephew etc',
        relationship_info: 'Please explain what your relationship to this heir is.',
        location_title: 'Country & city of residence',
        location_info: 'Please speify the current city & country this heir is living in.',
        comment_title: 'Optional comment'
      },
      finish: {
        title: 'Finish',
        descripton: `Well done! Please verify that today\'s date is accurate
          and enter any additional information you want your heirs to receive
          in the comment field.`,
        date_title: 'Plan creation date',
        comment_title: 'Comments and additional informations for your heirs'
      }
    }
  },
  access_file: {
    file_name: 'satskeeper-access-file.pdf',
    title: 'Inheritance plan access file',
    note: `Important: This document contains one page for each heir.
Please print this document and provide each heir with his/her corresponding page.`,
    name_of_heir: 'Name of heir:',
    main_body: `Dear heir,\n
Your relative has set up an inheritance plan with Satskeeper.
We are assisting your relative to ensure that their is a smooth transition of \
his/her assets to the legitimate heirs.\n
Your relative listed you as one of the legitimate heirs.\n
This document contains important information required in order to get access \
to the inheritance plan of your relative.\n
Please keep this document in a safe place. You will need it once your \
relative has passed away.`,
    pwd_line: 'Access password:',
    plan_id_line: 'Inheritance plan ID:',
    support_line: 'For questions contact: support@satskeeper.com'
  },
  editor_controls: {
    "error_notset": "Property must be set",
    "error_notempty": "Value required",
    "error_enum": "Value must be one of the enumerated values",
    "error_const": "Value must be the constant value",
    "error_anyOf": "Value must validate against at least one of the provided schemas",
    "error_oneOf": "Value must validate against exactly one of the provided schemas. It currently validates against {{0}} of the schemas.",
    "error_not": "Value must not validate against the provided schema",
    "error_type_union": "Value must be one of the provided types",
    "error_type": "Value must be of type {{0}}",
    "error_disallow_union": "Value must not be one of the provided disallowed types",
    "error_disallow": "Value must not be of type {{0}}",
    "error_multipleOf": "Value must be a multiple of {{0}}",
    "error_maximum_excl": "Value must be less than {{0}}",
    "error_maximum_incl": "Value must be at most {{0}}",
    "error_minimum_excl": "Value must be greater than {{0}}",
    "error_minimum_incl": "Value must be at least {{0}}",
    "error_maxLength": "Value must be at most {{0}} characters long",
    "error_minLength": "Value must be at least {{0}} characters long",
    "error_pattern": "Value must match the pattern {{0}}",
    "error_additionalItems": "No additional items allowed in this array",
    "error_maxItems": "Value must have at most {{0}} items",
    "error_minItems": "Value must have at least {{0}} items",
    "error_uniqueItems": "Array must have unique items",
    "error_maxProperties": "Object must have at most {{0}} properties",
    "error_minProperties": "Object must have at least {{0}} properties",
    "error_required": "Object is missing the required property '{{0}}'",
    "error_additional_properties": "No additional properties allowed, but property {{0}} is set",
    "error_property_names_exceeds_maxlength": "Property name {{0}} exceeds maxLength",
    "error_property_names_enum_mismatch": "Property name {{0}} does not match any enum values",
    "error_property_names_const_mismatch": "Property name {{0}} does not match the const value",
    "error_property_names_pattern_mismatch": "Property name {{0}} does not match pattern",
    "error_property_names_false": "Property name {{0}} fails when propertyName is false",
    "error_property_names_maxlength": "Property name {{0}} cannot match invalid maxLength",
    "error_property_names_enum": "Property name {{0}} cannot match invalid enum",
    "error_property_names_pattern": "Property name {{0}} cannot match invalid pattern",
    "error_property_names_unsupported": "Unsupported propertyName {{0}}",
    "error_dependency": "Must have property {{0}}",
    "error_date": "Date must be in the format {{0}}",
    "error_time": "Time must be in the format {{0}}",
    "error_datetime_local": "Datetime must be in the format {{0}}",
    "error_invalid_epoch": "Date must be greater than 1 January 1970",
    "error_ipv4": "Value must be a valid IPv4 address in the form of 4 numbers between 0 and 255, separated by dots",
    "error_ipv6": "Value must be a valid IPv6 address",
    "error_hostname": "The hostname has the wrong format",
    "button_save": "Save",
    "button_copy": "Copy",
    "button_cancel": "Cancel",
    "button_add": "Add",
    "button_delete_all": "All",
    "button_delete_all_title": "Delete All",
    "button_delete_last": "Last {{0}}",
    "button_delete_last_title": "Delete Last {{0}}",
    "button_add_row_title": "Add {{0}}",
    "button_move_down_title": "Move down",
    "button_move_up_title": "Move up",
    "button_properties": "Properties",
    "button_object_properties": "Object Properties",
    "button_copy_row_title": "Copy {{0}}",
    "button_delete_row_title": "Delete {{0}}",
    "button_delete_row_title_short": "❌",
    "button_copy_row_title_short": "Copy",
    "button_collapse": "Collapse",
    "button_expand": "Expand",
    "button_edit_json": "Edit JSON",
    "button_upload": "Import from file",
    "flatpickr_toggle_button": "Toggle",
    "flatpickr_clear_button": "Clear",
    "choices_placeholder_text": "Start typing to add value",
    "default_array_item_title": "item",
    "button_delete_node_warning": "Are you sure you want to remove this item?"
  }
}
