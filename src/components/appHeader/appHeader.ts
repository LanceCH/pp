import Vue from 'util/vueExt'
import { Component, Watch} from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import Template from './appHeader.vue'

import {HeaderGetter, HeaderAction} from 'store/bindHelpers'
@Component({
  mixins: [Template]
})
export default class AppHeader extends Vue {
  activeIndex: string = '1'
  keyword: string = ''
  navVisible: boolean = false
  
  mounted() {
    if(this.$route.path === '/' || this.$route.path.includes('fileList') ||  this.$route.path.includes('reportList')){
      this.navVisible = false
    } else {
      this.navVisible = true
    }
    if(location.href.includes('jurisdiction')) {
      this.activeIndex = '3'
    } else if(location.href.includes('organization')) {
      this.activeIndex = '2'
    }
  }

  @Watch('$route.path')
  routeChange(r) {
  if(r === '/' || r.includes('fileList') || r.includes('reportList')){
    this.navVisible = false
  } else {
    this.navVisible = true
  }
}
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
   * 回首页
  */
  toHome() {
    this.navVisible = false
    window.location.href = '#/'
  }

  /**
   * 下拉
   */
  handleCommand(v) {
    this.navVisible = true
    window.location.href = '#/' + v
  }
}
