/**
 * 应用相关
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
  SET_APPDETAIL: 'SET_APPDETAIL'
}

const state: IState = {
  title: '',
  id: 0
}

type IState = StoreState.appDetailStates
type IRootState = StoreState.IRootState

const getters: GetterTree<IState, IRootState> = {
  getAppDetail(state, getters) {
    return { title: state.title, id: state.id }
  }
}

const mutations: MutationTree<IState> = {
  [types.SET_APPDETAIL](state: IState, payload: StoreState.appDetailStates) {
    state.title = payload.title
    state.id = payload.id
  }
}

const actions: ActionTree<StoreState.appDetailStates, any> = {
  selectAppDetail(
    { commit },
    boo: {
      name: string
      id: number
    }
  ) {
    commit(types.SET_APPDETAIL, boo)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
