import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import modules from './modules/index';
import { RootState } from './types';

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

/**
 * Setup Vuex store with Typescript support.
 * @see https://codeburst.io/vuex-and-typescript-3427ba78cfa8
 */
export default new Vuex.Store<RootState>({
  state: {
    version: process.env.VUE_APP_GIT_HASH || '',
  },
  modules,
  strict: debug,
  plugins: [createPersistedState()],
});
