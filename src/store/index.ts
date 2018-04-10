import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'
import * as api from '../util/api'
import plugins from './plugins'
import {PlainObject} from 'types/interface'

Vue.use(Vuex)

const initState: PlainObject = {
  test: 0
}

const store = new Vuex.Store({
  state: {
    ...initState
  },

  getters: {
    getTest (state) {
      return state.test
    }
  },

  mutations: {
    [types.TEST] (state, num) {
      state.test = num
    }
  },

  actions: {
    GET_TEST ({ commit }, param) {
        commit(types.TEST, param.num)
      }
    },
  plugins: [plugins]
})

export default store
