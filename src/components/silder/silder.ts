import Vue from 'util/vueExt'
import { Component, Watch } from 'vue-property-decorator'
import Template from './silder.vue'

@Component({
  mixins: [Template]
})
export default class Silder extends Vue {
  selectMenu(index, indexPath) {
    window.location.href = '#' + index
  }
  key = ''
  @Watch('$route.path')
  changeRoute(v) {
    if (v === 'Home') {
      this.key = '/'
    } else if (v === 'fileList') {
      this.key = v
    } else {
      this.key = v
    }
  }

  mounted() {
    const { fullPath } = this.$route
    if (fullPath.includes('fileList')) {
      this.key = fullPath
    } else if (fullPath.includes('application')) {
      this.key = fullPath
    } else {
      this.key = '/'
    }
  }
}
