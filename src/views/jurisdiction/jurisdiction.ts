import Vue from 'util/vueExt'
import { Component } from 'vue-property-decorator'
import Template from './jurisdiction.vue'

@Component({
    mixins: [Template]
})
export default class Jurisdiction extends Vue {
  tableData3 = []
  input23 = ''
  listData = []
  activeId = 0
  activeName = 'first'
  addMemberDialogVisible = false

  addMemberForm = {
    member: '',
    department: '',
    handset: ''
  }

  mounted() {
    this.jurisdictionTree()
  }

  async jurisdictionTree() {
    this.listData = await this.api.jurisdictionTree({})
  }

  handleClick(v) {
    console.log(v)
  }

  /**
   * 添加成员
   */
  addMember() {
    this.addMemberDialogVisible = true
  }
  /**
   *重置 
  */
  reset() {
    this.addMemberForm = {
      member: '',
      department: '',
      handset: ''
    }
  }
  /**
   * 提交
  */
  submit() {
    const {member,department,handset} = this.addMemberForm
    if(!member || !department || !handset) {
      return this.$message({
        message:'请将信息填写完整',
        type: 'error'
      })
    }
    this.addMemberDialogVisible = false
    console.log({...this.addMemberForm})
  }
  handleClose(){
    this.addMemberDialogVisible = false
  }

  // 角色成员设置
  roleManageTable = []
}
