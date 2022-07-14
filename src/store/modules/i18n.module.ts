/* eslint-disable no-shadow */
import { ActionTree, MutationTree } from 'vuex';
import i18n from '@/plugins/i18n';
import { localeChanged } from 'vee-validate';
import { RootState } from '../types';
import { I18nState } from './types';

/**
 * Handle i18n accross the application.
 * @see https://blog.logrocket.com/advanced-localization-techniques-vue-js/
 */

const state: I18nState = {
  locale: i18n.locale,
};

const mutations: MutationTree<I18nState> = {
  updateLocale(state, newLocale: string): void {
    state.locale = newLocale;
  },
};

const actions: ActionTree<I18nState, RootState> = {
  changeLocale({ commit }, newLocale): void {
    i18n.locale = newLocale;
    localeChanged();
    commit('updateLocale', newLocale);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
