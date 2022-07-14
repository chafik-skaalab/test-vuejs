/* eslint-disable camelcase */
import actions from './common/actions.json';
import errors from './common/errors.json';
import fields from './common/fields.json';
import notifications from './common/notifications.json';
import validations from './common/validations';

export default {
  message: 'hello i18n !!',

  // Validation messages
  validations: validations.en,

  // Common
  actions: actions.en,
  errors: errors.en,
  fields: fields.en,
  notifications: notifications.en,

  // Components
};
