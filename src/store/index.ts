import Vue, {PluginObject} from 'vue'
import Vuex from 'vuex'
import * as types from './types'
import * as api from '../util/api'

import state from './state'
import getters from './getters'
import actions from './actions'
import headerModule from './modules/header'
import appDetailModule from './modules/application'

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
    header: headerModule,
    appDetail: appDetailModule
  },
  plugins
})

export default store
