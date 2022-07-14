/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import Vue from 'vue';
import {
  configure,
  extend,
  setInteractionMode,
  ValidationObserver,
  ValidationProvider,
} from 'vee-validate';
import {
  required,
  email,
  is,
  integer,
} from 'vee-validate/dist/rules';
import zxcvbn from 'zxcvbn';
import i18n from './i18n';

// Rules
extend('email', email);
extend('required', required);
extend('is', is);
extend('integer', integer);
extend('password_strength', {
  validate: (value, { min }) => zxcvbn(value).score >= min,
  params: ['min'],
});

setInteractionMode('lazy');

configure({

  defaultMessage: (field, values) => {
    values._field_ = i18n.t(`fields.${field}`);
    return i18n.t(`validations.messages.${values._rule_}`, values);
  },
});

Vue.component('ValidationObserver', ValidationObserver);
Vue.component('ValidationProvider', ValidationProvider);
