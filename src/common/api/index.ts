import Api from './services/Api';

const ApiInstance = Api.getInstance();

export {
  // eslint-disable-next-line import/prefer-default-export
  ApiInstance as Api,
};
