import Vue from 'util/vueExt'
import { Component } from 'vue-property-decorator'
import Template from './silder.vue'

@Component({
  mixins: [Template]
})
export default class Silder extends Vue {


  selectMenu(index, indexPath) {
    window.location.href = '#' + indexPath
  }
}
