import Vue from 'util/vueExt'
import { Component } from 'vue-property-decorator'
import Template from './jurisdiction.vue'

@Component({
    mixins: [Template]
})
export default class Jurisdiction extends Vue {
  tableData3 = []
  input23 = ''
}
