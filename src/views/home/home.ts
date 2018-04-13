import Vue from 'util/vueExt'
import { Component } from 'vue-property-decorator'
import Template from './home.vue'

@Component({
  mixins: [Template]
})
export default class Home extends Vue {
  apps = [
    {
      text: '应用1'
    },
    {
      text: '应用2'
    },
    {
      text: '应用3'
    },
    {
      text: '应用4'
    },
    {
      text: '应用5'
    },
    {
      text: '应用6'
    }
  ]
}
