import Vue from 'util/vueExt'
import { Component } from 'vue-property-decorator'
import Template from './organization.vue'

@Component({
    mixins: [Template]
})
export default class Organization extends Vue {

    input23 = ''
    tableData6 = []

    navData = []

    defaultProps = {
        children: 'children',
        label: 'label'
    }

    mounted() {
        this.organizationTree()
      }

  /**
   * 选中树
   */
  handleNodeClick(data) {
    console.log(data)
    if(!data.children) {
    
    }
  }

  /**
   * 获取树
   */
  organizationTree() {
    this.api.organizationTree({}).then(res => {
      console.log(res)
      this.navData = res.data
    })
  }
}
