import Vue from 'util/vueExt'
import { Component } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import Template from './appHeader.vue'

import {HeaderGetter, HeaderAction} from 'store/bindHelpers'
@Component({
  mixins: [Template]
})
export default class AppHeader extends Vue {
  @HeaderGetter('getHeaderNavVisible') navVisible: boolean
  @HeaderAction('selectBatchAutoPullGroup') selectBatchAutoPullGroup: (boo) => void
  activeIndex: string = '1'
  keyword: string = ''
  handleSelect(v) {
    this.activeIndex = v
    if (Number(v) === 1) {
      window.location.href = '#/application'
    } else if (Number(v) === 2) {
      window.location.href = '#/organization'
    } else if (Number(v) === 3) {
      window.location.href = '#/jurisdiction'
    }
  }

  /**
   * 下拉
   */
  handleCommand(v) {
    this.selectBatchAutoPullGroup(true)
    window.location.href = '#/' + v
  }
}
