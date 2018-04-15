import Vue from 'util/vueExt'
import { Component } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import Template from './appHeader.vue'

@Component({
  mixins: [Template]
})
export default class AppHeader extends Vue {
  activeIndex: string = '1'

  handleSelect(v) {
    this.activeIndex = v
    if (Number(v) === 1) {
      window.location.href = '#/appManage'
    } else if(Number(v) === 2) {
      window.location.href = '#/organization'
    }
  }
}
