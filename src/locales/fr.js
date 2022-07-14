/* eslint-disable camelcase */
import actions from './common/actions.json';
import errors from './common/errors.json';
import fields from './common/fields.json';
import notifications from './common/notifications.json';
import validations from './common/validations';

export default {
  message: 'bienvenue i18n !!',

  // Validation messages
  validations: validations.fr,

  // Common
  actions: actions.fr,
  errors: errors.fr,
  fields: fields.fr,
  notifications: notifications.fr,

  // Components
};
