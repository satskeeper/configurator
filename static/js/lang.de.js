export const lang = {
  pw_no_match: 'Passwörter stimmen nicht überein',
  field_required:  'Dies ist ein Pflichtfeld',
  heir_sum_100: 'Summe der Erbeanteile muss 100% ergeben.',
  invalid_form: 'Formular ungültig. Bitte prüfe die markierten Felder.',
  enable_internet_warning: `Bitte aktiviere jezt wieder deine Internetverbindung,\
  damit die verschlüsselte Datei in dein Satskeeper Konto importiert werden kann.`,
  exit_page_message: 'Bist du dir sicher?',
  editor_non_existent_disable: 'Editor kann nicht deaktiviert werden, da er nicht mehr existiert.',
  editor_non_existent_enable: 'Editor kann nicht aktiviert werden, da er nicht mehr existiert.',
  offline_required_warning: `Bitte deaktiviere deine Internetverbindung oder aktiviere Flugmodus.\
  Dieser Nachlassplan-Konfigurator kann nur offline verwendet werden um Malware vorzubeugen.\
  Sobald du offline bist wird diese Warnung verschwinden und du kannst fortfahren.`,
  incorrect_decryption_password: 'Zugangspasswort falsch',
  main_title: 'Nachlassplan-Konfigurator',
  main_title_viewer: 'Nachlassplan-Viewer',
  viewer_title: 'Nachlassplan anzeigen',
  create_plan_button: 'Plan erstellen',
  create_plan_title: 'Neuen Nachlassplan erstellen',
  create_plan_text: 'Willkommen! Wenn du zum ersten Mal einen Bitcoin-Nachlassplan erstellst, klicke unten auf "Plan erstellen". Wir werden dich dann durch den Konfigurator führen, um sicherzustellen, dass du einen Erbschaftsplan erstellst, auf den sich deine Erben verlassen können.',
  import_plan_title: 'Existierenden Nachlassplan importieren',
  import_plan_text: 'Hast du bereits einen Bitcoin-Nachlassplan mit diesem Konfigurator erstellt? Prima! Wenn du ein Satskeeper-Konto hast, dann kann dein Nachlassplan automatisch importiert werden, wenn nicht, kannst du die verschlüsselte Datei importieren.',
  import_plan_button: 'Plan importieren',
  open_source_text: 'Dieser Nachlassplan-Konfigurator ist <a target="_blank" href="https://github.com/satskeeper/configurator">open-source</a>',
  password_page_title: 'Zugangspasswort wählen',
  password_page_text1: 'Bitte bewahre dein Zugangspasswort sicher auf. Du brauchst es, um deinen Nachlassplan in der Zukunft zu bearbeiten und einzusehen.',
  password_page_text2: 'Lokal generiertes Zugangspasswort',
  password_page_text3: 'Alternativ kannst du auch dein eigenes Zugangspasswort wählen',
  password_page_choose_button: 'Eigenes wählen',
  password_page_continue_button: 'Weiter',
  import_account_title: 'Von Konto importieren',
  import_account_text: 'Ein verschlüsselter Nachlassplan existiert bereits in deinem Satskeeper-Konto. Um diesen zu importieren, gib dein Zugangspasswort ein und klicke auf "Plan importieren"',
  import_account_button: 'Plan importieren',
  import_file_title: 'Von Datei importieren',
  import_file_text: 'Um einen Nachlassplan von einer verschlüsselten Datei zu importieren, gib dein Zugangspasswort ein und wähle die Datei aus.',
  configure_title: "Nachlassplan erstellen",
  configure_continue_button: 'Weiter',
  configure_encrypt_button: 'Plan verschlüsseln und weiter',
  download_title: 'Dateien herunterladen',
  download_text: 'Fertig! Dein Nachlassplan wurde verschlüsselt. Jetzt ist es Zeit, deine Zugangsdatei herunterzuladen. Optional kannst du auch den verschlüsselten Nachlassplan herunterladen.',
  download_access_file_title: 'Zugangsdatei herunterladen',
  download_access_file_text: 'Bitte lade deine Zugangsdatei herunter. Diese wird benötigt, um deinen Nachlassplan zu bearbeiten und einzusehen. Alle Erben brauchen eine Kopie dieser Zugangsdatei.',
  download_access_file_button: 'Zugangsdatei herunterladen',
  download_plan_title: 'Nachlassplan herunterladen (optional)',
  download_plan_text: 'Optional kannst du deinen verschlüsselten Nachlassplan herunterladen.',
  download_plan_button: 'Nachlassplan herunterladen',
  download_continue_button: 'Weiter',
  save_plan_title: 'In Satskeeper-Konto speichern',
  save_plan_text: 'Fertig! Klicke jetzt auf "In meinem Konto speichern", um deinen verschlüsselten Nachlassplan in deinem Satskeeper-Konto zu speichern',
  save_plan_button: 'In meinem Konto speichern',
  does_page_title1: 'Machen',
  does_page_title2: 'Nicht machen',
  does_page_do1: 'Dokumentiere, wie deine Erben auf Wallets zugreifen.',
  does_page_do2: 'Dokumentiere, wie deine Erben auf Konten zugreifen.',
  does_page_dont1: 'Gib KEINE private Schlüssel ein.',
  does_page_dont2: 'Gib KEINE Wiederherstellungswörter ein.',
  does_page_dont3: 'Gib KEINE Passwörter ein.',
  continue_button: 'Weiter',
  editors: {
    session: {
      editorTitle: 'Plan von Satskeeper-Konto importieren',
      password_title: 'Zugangspasswort'
    },
    upload: {
      editorTitle: 'Plan von Datei importieren',
      password_title: 'Zugangspasswort',
      file_title: 'Datei auswählen',
    },
    password: {
      password_title: 'Zugangspasswort',
      password_repeat_title: 'Zugangspasswort wiederholen',
    },
    main: {
      editorTitle: 'Plan editor',
      start: {
        title: 'Start',
        descripton: `Willkommen. Wir werden dich jetzt durch den Erstellungsprozess
        deines Nachlassplans führen. Alle Informationen die du hier eingibst werden
        nur temporär in deinem Browser gespeichert, bis sie verschlüsselt sind.
        Nachdem dein Nachlassplan verschlüsselt wurde kannst du ihn in deinem
        Satskeeper-Konto speichern und/oder herunterladen.`
      },
      exchanges: {
        title: 'Custodian',
        title_singlular: 'Custodian',
        descripton: `Gib alle Konten bei Custodians an, auf die deine Erben nach deinem Tod zugreifen
          sollen. Ein Konto bei einem Custodian kann zum Beispiel ein Konto bei einer Börse, einer Crypto-Bank oder jeder anderen Institution, die Coins für dich verwahrt, sein.
          Falls du keine Coins auf Börsen hälst, überspringe diese Sektion.`,
        alias_title: 'Name',
        comment_title: 'Optionaler Kommentar',
        access_material_title: 'Zugangsinformationen',
        access_material_description: `Bitte dokumentiere, welche Zungangsinformationen benötigt werden, um auf die ses Konto zuzugreifen. Erstelle einen Eintrag für jede
        Zugangsinformation, die benötigt wird, um auf dieses Konto zuzugreifen. Gib keine geheimen Informationen an.`,
        access_material_title_2: 'Material',
        access_material_type_title: 'Type',
        access_material_type_option1: 'Emailadresse',
        access_material_type_option2: 'Passwort',
        access_material_type_option3: '2FA code(s)',
        access_material_type_option4: 'Andere (in Kommentarfeld spezifizieren)',
        access_material_location_title: 'Ort',
        access_material_comment_title: 'Optionaler Kommentar'
      },
      wallets: {
        title: 'Wallets',
        title_singlular: 'Wallet',
        descripton: `Gib alle Wallets an, auf die deine Erben nach deinem Tod zugreifen
          sollen. Stelle sicher, dass du keine geheimen Informationen, z.B. Wiederherstellungswörter
          hier einträgst. Trage nur ein, wo sich diese Informationen finden lassen.`,
        wallet_alias_title: 'Wallet-Name',
        wallet_comment_title: 'Optionaler Kommentar',
        wallet_material_title: 'Backupmaterial',
        wallet_material_title2: 'Material',
        wallet_material_description: `Erstelle einen Eintrag für jedes
        Backupmaterial, das benötigt wird, um auf dieses Wallet zuzugreifen. Dokumentiere den Typ des Backupmaterials und wo es gefunden werden kann.`,
        wallet_material_type_title: 'Typ',
        wallet_material_type_option1: 'Wallet-Wiederherstellungswörter',
        wallet_material_type_option2: 'Wallet-Passphrase',
        wallet_material_type_option3: 'Raw private key',
        wallet_material_type_option4: '2FA code(s)',
        wallet_material_type_option5: 'Andere (in Kommentarfeld spezifizieren)',
        wallet_material_location_title: 'Ort',
        wallet_material_comment_title: 'Optionaler Kommentar'
      },
      devices: {
        title: 'Geräte',
        title_singlular: 'Gerät',
        descripton: `Gib alle Geräte an, die du für deine Wallets verwendest.
        Zum Beispiel: Hardware Wallets, Handy, Computer etc.
        Dies erlaubt deinen Erben, das gleiche Gerät zu verwenden, wenn sie deine Wallets
        wiederherstellen. Wir führen ein umfangreiches Wiki mit Wiederherstellungs-Anleitungen
        für eine Vielzahl von Geräten & Wallets.`,
        device_alias_title: 'Gerätebezeichnung',
        device_location_title: 'Ort',
        device_comment_title: 'Optionaler Kommentar',
        device_selected_wallets_title: 'Auf das Gerät geladene Wallets:',
        device_selected_wallets_description: 'Bitte wähle aus, welche der auf der Seite "Wallets" dokumentierten Wallets auf diesem Gerät geladen sind. Wenn es sich bei dem Gerät beispielsweise um ein Hardware-Wallet handelt, könnten zum Beispiel zwei Wallets darauf geladen sein. Eine Wallet, die nur 24 Seed-Wörter benötigt und eine zweite Wallet, die 24 Seed-Wörter plus eine Passphrase benötigt. Um weitere Wallets zu dokumentieren, gehe zurück zur "Wallets" Seite.',
        device_selected_wallets_title2: 'Wallets',
        device_selected_wallets_title2: 'Wallets',
        access_material_title: 'Zugangsinformationen',
        access_material_description: `Dokumentiere welche Zugangsinformation benötigt werden, um dieses Gerät zu verwenden. Erstelle einen Eintrag für jede
        Zugangsinformation, die benötigt wird, um dieses Gerät zu verwenden. Dokumentiere den Typ der Zugangsinformation und wo sie gefunden werden kann. Gib keine Geheimnisse an.`,
        access_material_title_2: 'Material',
        access_material_type_title: 'Typ',
        access_material_type_option1: 'Gerätepasswort',
        access_material_type_option2: 'Andere (in Kommentarfeld spezifizieren)',
        access_material_location_title: 'Ort',
        access_material_comment_title: 'Optionaler Kommentar'
      },
      heirs: {
        title: 'Erben',
        title_singlular: 'Erbe',
        descripton: `Gib deine Erben an und welchen Anteil der wiederhergestellten
        Coins jedem Erben zusteht. Die Summe aller Anteile muss 100% ergeben.
        Achtung: Die Namen der Erben werden nicht verschlüsselt.`,
        first_name_title: 'Vorname (nicht verschlüsselt)',
        last_name_title: 'Nachname (nicht verschlüsselt)',
        share_title:  'Anteil %',
        location_title: 'Wohnort (Land & Stadt)',
        birthday_title: 'Geburtstag',
        relationship_title: 'Verhältnis zum Erben',
        relationship_placeholder: 'Beispiel: Gatte, Kind, Enkel, Neffe etc.',
        comment_title: 'Optionaler Kommentar'
      },
      finish: {
        title: 'Ziel',
        descripton: `Gut gemacht! Bitte prüfe, dass das heutige Datum korrekt ist
        und trage optional weitere Informationen für deine Erben ein.`,
        date_title: 'Nachlassplan-Erstelldatum',
        comment_title: 'Kommentar und weitere Informationen für Erben'
      }
    }
  },
  access_file: {
    file_name: 'satskeeper-zugangsdatei.pdf',
    title: 'Nachlassplan-Zugangsdatei',
    note: `Wichtig: Dieses Dokument enthält eine Seite pro Erbe.
Bitte drucke dieses Dokument aus und gib jedem Erben die Seite mit dessen Namen.`,
    name_of_heir: 'Name des Erben:',
    main_body: `Lieber Erbe,\n
Dein Verwandter hat einen Nachlassplan mit Satskeeper erstellt.
Wir unterstützen deinen Verwandten dabei, einen reibungslosen Übergang seines
Vermögens auf die rechtmäßigen Erben zu gewährleisten.\n
Dein Verwandter hat dich als einen der rechtmäßigen Erben angegeben.\n
Dieses Dokument enthält wichtige Informationen, die du benötigst, um nach dem
Tod deines Verwandten Zugang auf dessen Nachlassplan zu erhalten.\n
Bitte bewahre dieses Dokument an einem sicheren Ort auf. Du wirst es
nach dem Tod deines Verwandten benötigen.`,
    pwd_line: 'Zugangspasswort:',
    plan_id_line: 'Nachlassplan ID:',
    support_line: 'Bei Fragen wende dich an: support@satskeeper.com'
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
    "button_save": "Speichern",
    "button_copy": "Kopieren",
    "button_cancel": "Abbrechen",
    "button_add": "Hinzufügen",
    "button_delete_all": "Alle",
    "button_delete_all_title": "Alle löschen",
    "button_delete_last": "Letzte {{0}}",
    "button_delete_last_title": "Letzte {{0}} löschen",
    "button_add_row_title": "{{0}} hinzufügen",
    "button_move_down_title": "Nach oben verschieben",
    "button_move_up_title": "Nach unten verschieben",
    "button_properties": "Properties",
    "button_object_properties": "Object Properties",
    "button_copy_row_title": "{{0}} kopieren",
    "button_delete_row_title": "{{0}} löschen",
    "button_delete_row_title_short": "Löschen",
    "button_copy_row_title_short": "Kopieren",
    "button_collapse": "Kollabieren",
    "button_expand": "Expandieren",
    "button_edit_json": "JSON bearbeiten",
    "button_upload": "Importieren",
    "flatpickr_toggle_button": "Umschalten",
    "flatpickr_clear_button": "Entfernen",
    "choices_placeholder_text": "Start typing to add value",
    "default_array_item_title": "item",
    "button_delete_node_warning": "Bist du sicher, dass du das ausgewählte Object löschen möchtest?"
  }
}
