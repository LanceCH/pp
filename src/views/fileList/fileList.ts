import Vue from 'util/vueExt'
import { Component } from 'vue-property-decorator'
import Template from './fileList.vue'

@Component({
  mixins: [Template]
})
export default class FileList extends Vue {
  form = {
    type: '',
    department: '',
    gangwei: ''
  }

  value4 = [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)]

  tableData6 = []
}
