import {todaysDate, removeDescriptionFromSchema} from './utils.js';
import {lang} from './custom.js';

export const sessionFormSchema = {
  disable_edit_json: true,
  disable_properties: true,
  disable_collapse: true,
  disable_array_delete_last_row: true,
  form_name_root: 'session',
  schema: {
    type: 'object',
    compact: true,
    title: lang.editors.session.editorTitle,
    properties: {
      password: {
        type: 'string',
        title: lang.editors.session.password_title,
        format: 'password',
        required: true,
      },
    },
  },
};

export const passwordFormSchema = {
  disable_edit_json: true,
  disable_properties: true,
  disable_collapse: true,
  disable_array_delete_last_row: true,
  form_name_root: 'password',
  schema: {
    type: 'object',
    compact: true,
    properties: {
      password: {
        title: lang.editors.password.password_title,
        type: 'string',
        format: 'password',
        minLength: 8,
      },
      password_repeat: {
        title: lang.editors.password.password_repeat_title,
        type: 'string',
        format: 'password',
        minLength: 8,
      },
    },
  },
};

export const uploadFormSchema = {
  disable_edit_json: true,
  disable_properties: true,
  disable_collapse: true,
  disable_array_delete_last_row: true,
  form_name_root: 'upload',
  schema: {
    type: 'object',
    compact: true,
    title: lang.editors.upload.editorTitle,
    properties: {
      password: {
        type: 'string',
        title: lang.editors.upload.password_title,
        format: 'password',
        required: true,
      },
      file: {
        type: 'string',
        title: lang.editors.upload.file_title,
        format: 'url',
        options: {
          dependencies: {
            'password': '',
          },
          upload: {
            upload_handler: 'uploadHandler',
          },
        },
        links: [
          {
            'href': '{{self}}',
          },
        ],
      },
    },
  },
};

export const mainFormSchema = {
  disable_edit_json: true,
  disable_properties: true,
  disable_array_reorder: true,
  disable_collapse: true,
  disable_array_delete_last_row: true,
  disable_array_delete_all_rows: true,
  prompt_before_delete: true,
  form_name_root: 'main',
  show_errors: 'interaction',
  schema: {
    type: 'object',
    format: 'categories',
    title: lang.editors.main.editorTitle,
    properties: {
      start: {
        type: 'object',
        title: lang.editors.main.start.title,
        description: lang.editors.main.start.descripton,
        properties: {
          planID: {
            type: 'string',
            format: 'uuid',
            required: true,
            options: {
              hidden: true,
            },
          },
          version: {
            type: 'string',
            default: '1.0',
            required: true,
            options: {
              hidden: true,
            },
          },
        },
      },
      exchanges: {
        type: 'array',
        title: lang.editors.main.exchanges.title,
        format: 'tabs-top',
        description: lang.editors.main.exchanges.descripton,
        uniqueItems: true,
        items: {
          title: lang.editors.main.exchanges.title_singlular,
          properties: {
            exchangeID: {
              type: 'string',
              format: 'uuid',
              options: {
                hidden: true,
              },
            },
            alias: {
              title: lang.editors.main.exchanges.alias_title,
              type: 'string',
              required: true,
            },
            comment: {
              title: lang.editors.main.exchanges.comment_title,
              type: 'string',
              format: 'textarea',
            },
            materials: {
              type: 'array',
              format: 'table',
              title: lang.editors.main.exchanges.access_material_title,
              description: lang.editors.main.exchanges.access_material_description, // eslint-disable-line
              uniqueItems: true,
              items: {
                type: 'object',
                title: lang.editors.main.exchanges.access_material_title_2,
                properties: {
                  materialID: {
                    type: 'string',
                    format: 'uuid',
                    options: {
                      hidden: true,
                    },
                  },
                  material_type: {
                    title: lang.editors.main.exchanges.access_material_type_title, // eslint-disable-line
                    type: 'string',
                    enum: [
                      lang.editors.main.exchanges.access_material_type_option1,
                      lang.editors.main.exchanges.access_material_type_option2,
                      lang.editors.main.exchanges.access_material_type_option3,
                      lang.editors.main.exchanges.access_material_type_option4,
                    ],
                  },
                  location: {
                    title: lang.editors.main.exchanges.access_material_location_title, // eslint-disable-line
                    type: 'string',
                    required: true,
                  },
                  comment: {
                    title: lang.editors.main.exchanges.access_material_comment_title, // eslint-disable-line
                    type: 'string',
                  },
                },
              },
            },
          },
        },
      },
      wallets: {
        type: 'array',
        title: lang.editors.main.wallets.title,
        format: 'tabs-top',
        description: lang.editors.main.wallets.descripton,
        uniqueItems: true,
        items: {
          title: lang.editors.main.wallets.title_singlular,
          properties: {
            walletID: {
              type: 'string',
              format: 'uuid',
              options: {
                hidden: true,
              },
            },
            alias: {
              title: lang.editors.main.wallets.wallet_alias_title,
              type: 'string',
              required: true,
            },
            comment: {
              title: lang.editors.main.wallets.wallet_comment_title,
              type: 'string',
              format: 'textarea',
            },
            materials: {
              type: 'array',
              format: 'table',
              title: lang.editors.main.wallets.wallet_material_title,
              description: lang.editors.main.wallets.wallet_material_description, // eslint-disable-line
              uniqueItems: true,
              items: {
                type: 'object',
                title: lang.editors.main.wallets.wallet_material_title2,
                properties: {
                  materialID: {
                    type: 'string',
                    format: 'uuid',
                    options: {
                      hidden: true,
                    },
                  },
                  material_type: {
                    title: lang.editors.main.wallets.wallet_material_type_title,
                    type: 'string',
                    enum: [
                      lang.editors.main.wallets.wallet_material_type_option1,
                      lang.editors.main.wallets.wallet_material_type_option2,
                      lang.editors.main.wallets.wallet_material_type_option3,
                      lang.editors.main.wallets.wallet_material_type_option4,
                      lang.editors.main.wallets.wallet_material_type_option5,
                    ],
                  },
                  location: {
                    title: lang.editors.main.wallets.wallet_material_location_title, // eslint-disable-line
                    type: 'string',
                    required: true,
                  },
                  comment: {
                    title: lang.editors.main.wallets.wallet_material_comment_title, // eslint-disable-line
                    type: 'string',
                  },
                },
              },
            },
          },
        },
      },
      devices: {
        type: 'array',
        title: lang.editors.main.devices.title,
        format: 'tabs-top',
        description: lang.editors.main.devices.descripton,
        uniqueItems: true,
        items: {
          title: lang.editors.main.devices.title_singlular,
          properties: {
            deviceID: {
              type: 'string',
              format: 'uuid',
              options: {
                hidden: true,
              },
            },
            alias: {
              title: lang.editors.main.devices.device_alias_title,
              type: 'string',
              required: true,
            },
            location: {
              title: lang.editors.main.devices.device_location_title,
              type: 'string',
              required: true,
            },
            comment: {
              title: lang.editors.main.devices.device_comment_title,
              type: 'string',
              format: 'textarea',
            },
            selected_wallets: {
              type: 'array',
              format: 'table',
              title: lang.editors.main.devices.device_selected_wallets_title,
              uniqueItems: true,
              items: {
                type: 'string',
                title: lang.editors.main.devices.device_selected_wallets_title2,
                enumSource: [{
                  source: 'wallets_source',
                  value: '{{item.alias}}',
                }],
                watch: {
                  wallets_source: 'main.wallets',
                },
              },
            },
            materials: {
              type: 'array',
              format: 'table',
              title: lang.editors.main.devices.access_material_title,
              description: lang.editors.main.devices.access_material_description, // eslint-disable-line
              uniqueItems: true,
              items: {
                type: 'object',
                title: lang.editors.main.devices.access_material_title_2,
                properties: {
                  materialID: {
                    type: 'string',
                    format: 'uuid',
                    options: {
                      hidden: true,
                    },
                  },
                  material_type: {
                    title: lang.editors.main.devices.access_material_type_title,
                    type: 'string',
                    enum: [
                      lang.editors.main.devices.access_material_type_option1,
                      lang.editors.main.devices.access_material_type_option2,
                    ],
                  },
                  location: {
                    title: lang.editors.main.devices.access_material_location_title, // eslint-disable-line
                    type: 'string',
                    required: true,
                  },
                  comment: {
                    title: lang.editors.main.devices.access_material_comment_title, // eslint-disable-line
                    type: 'string',
                  },
                },
              },
            },
          },
        },
      },
      heirs: {
        type: 'array',
        format: 'tabs-top',
        title: lang.editors.main.heirs.title,
        description: lang.editors.main.heirs.descripton,
        uniqueItems: true,
        items: {
          title: lang.editors.main.heirs.title_singlular,
          properties: {
            heirID: {
              type: 'string',
              format: 'uuid',
              options: {
                hidden: true,
              },
            },
            first: {
              title: lang.editors.main.heirs.first_name_title,
              type: 'string',
              required: true,
            },
            last: {
              title: lang.editors.main.heirs.last_name_title,
              type: 'string',
              required: true,
            },
            share: {
              title: lang.editors.main.heirs.share_title,
              type: 'number',
              required: true,
              minimum: 0,
              maximum: 100,
            },
            location: {
              title: lang.editors.main.heirs.location_title,
              type: 'string',
              required: true,
            },
            birthday: {
              title: lang.editors.main.heirs.birthday_title,
              type: 'string',
              format: 'date',
              default: todaysDate(),
              options: {
                flatpickr: {},
              },
            },
            relationship: {
              title: lang.editors.main.heirs.relationship_title,
              type: 'string',
              options: {
                inputAttributes: {
                  placeholder: lang.editors.main.heirs.relationship_placeholder,
                },
              },
            },
            comment: {
              title: lang.editors.main.heirs.comment_title,
              type: 'string',
              format: 'textarea',
            },
          },
        },
      },
      details: {
        type: 'object',
        format: 'table',
        title: lang.editors.main.finish.title,
        description: lang.editors.main.finish.descripton,
        properties: {
          date: {
            title: lang.editors.main.finish.date_title,
            type: 'string',
            format: 'date',
            default: todaysDate(),
            options: {
              flatpickr: {},
            },
          },
          comment: {
            title: lang.editors.main.finish.comment_title,
            type: 'string',
            format: 'textarea',
            options: {
              input_height: '5rem',
            },
          },
        },
      },
    },
  },
};

// Create copy of the main schema with changes required when viewing the plan
export const mainFormSchemaView = structuredClone(mainFormSchema);
mainFormSchemaView.schema.format = '';
mainFormSchemaView.show_errors = 'never';
delete mainFormSchemaView.schema.properties.details.properties.password;
delete mainFormSchemaView.schema.properties.details.properties.password_repeat;
removeDescriptionFromSchema(mainFormSchemaView);

mainFormSchemaView.schema.properties.start.description =
  `Welcome. Below you can find the inheritance plan that the plan owner created
  before his death. It contains information on how to access the Bitcoin
  inheritance and how it should be divided among the heirs.`;
mainFormSchemaView.schema.properties.exchanges.description =
  `This section lists all exchange accounts the plan owner has and which
  access information is required in order to access that exchange account.`;
mainFormSchemaView.schema.properties.wallets.description =
  `This section lists all wallets the plan owner has and which access/backup
  information is required in order to restore that wallet.`;
mainFormSchemaView.schema.properties.devices.description =
  `This section lists all devices the plan owner was using to interact with
  his wallets and which wallets are loaded onto the device.`;
mainFormSchemaView.schema.properties.heirs.description =
  `This section lists all heirs the plan owner specified and the share of the
  recovered funds they are entitled to.`;
mainFormSchemaView.schema.properties.details.description =
  `This section contains the date the plan was created on and any optional
  comments the plan owner wanted to include.`;
