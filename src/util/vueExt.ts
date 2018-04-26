import Vue from 'vue'
import * as api from './api'
import store from 'store'

export default class VueExt extends Vue {

  state = store.state

  $message: any
  $cookie: any
  $confirm: any
  $auto: any
  $socketPlugin: any
  $prompt: any

  get api() {
    return api
  }

  /**
   * Check obj is Error instance
   * @param {*} obj
   * @returns {boolean}
   *
   * @memberOf VueExt
   */
  isError(obj: any): boolean {
    return obj instanceof Error
  }
}
