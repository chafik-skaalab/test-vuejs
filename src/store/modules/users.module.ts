/* eslint-disable no-shadow */
import { ActionTree, GetterTree, MutationTree } from 'vuex';
import { Api } from '@/common/api';
import { RootState } from '../types';

/**
 * Users module.
 */

interface UsersState {
  users: Array<Record<string, unknown>>;
  needUpdate: boolean;
}

const state: UsersState = {
  users: [],
  needUpdate: false,
};

const mutations: MutationTree<UsersState> = {
  setUsers(state, payload) {
    state.users = payload;
  },

  setNeedUpdate(state, payload) {
    state.needUpdate = payload;
  },
};

const actions: ActionTree<UsersState, RootState> = {
  async getUsers({ commit }) {
    const result = await Api.get('users');
    commit('setUsers', result.data);
  },
};

const getters: GetterTree<UsersState, RootState> = {
  users(state) {
    return state.users;
  },

  userByUuid: (state) => (userUuid: string) => state.users.find(
    (user) => user.uuid === userUuid,
  ),
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
