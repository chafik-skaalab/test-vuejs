import validationMessagesEn from 'vee-validate/dist/locale/en.json';
import validationMessagesFr from 'vee-validate/dist/locale/fr.json';

export default {
  en: {
    messages: {
      ...validationMessagesEn.messages,
      is: 'The {_field_} field does not match its counterpart',
      password_strength: 'The {_field_} is too simple, the minimum required complexity is {min}',
    },
  },
  fr: {
    messages: {
      ...validationMessagesFr.messages,
      is: 'Le champ {_field_} n\'est pas égal à son homologue',
      password_strength: 'Le {_field_} est trop simple, la complexité minimum requise est de {min}',
    },
  },
};
