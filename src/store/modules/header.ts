/**
 * 头部
 * @module
 **/

import {
  Commit,
  MutationTree,
  Mutation,
  Getter,
  GetterTree,
  Action,
  ActionTree,
  ActionContext
} from 'vuex'

const types = {
  SET_HEADERSHOWNAV: 'SET_HEADERSHOWNAV',
}

const state: IState = {
  showNav: false
}

type IState = StoreState.headerStates
type IRootState = StoreState.IRootState

const getters: GetterTree<IState, IRootState> = {
  getHeaderNavVisible(state, getters) {
      return state.showNav
  }
}

const mutations: MutationTree<IState> = {
  [types.SET_HEADERSHOWNAV](state: IState, payload: StoreState.headerStates) {
      state.showNav = payload.showNav
  }
}

const actions: ActionTree<StoreState.headerStates, any> = {
  selectBatchAutoPullGroup({ commit }, boo) {
    commit(types.SET_HEADERSHOWNAV, {showNav: boo})
}
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
