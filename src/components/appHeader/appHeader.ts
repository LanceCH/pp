import Vue from 'util/vueExt'
import { Component } from 'vue-property-decorator'
import { Getter } from 'vuex-class'
import Template from './appHeader.vue'

@Component({
  mixins: [Template]
})
export default class AppHeader extends Vue {
  activeIndex: number = 1

  handleSelect(v) {
    this.activeIndex = v
  }
}
