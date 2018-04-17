import Vue, {PluginObject} from 'vue'
import Vuex from 'vuex'
import * as types from './types'
import * as api from '../util/api'

import state from './state'
import getters from './getters'
import actions from './actions'
import headerModule from './modules/header'

Vue.use(Vuex)

const plugins = [
    store => {}
]
const store = new Vuex.Store({
  strict: process.env.NODE_ENV === 'development',
  state,
  getters,
  actions,
  modules: {
    header: headerModule
  },
  plugins
})

export default store
