import Vue from 'util/vueExt'
import { Component } from 'vue-property-decorator'
import Template from './fileList.vue'
import Edit from './edit.vue'

@Component({
  mixins: [Template],
  components:{
    Edit
  }
})
export default class FileList extends Vue {
  form = {
    type: '',
    department: '',
    gangwei: ''
  }

  showEdit: boolean = false

  value4 = [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)]

  tableData6 = [
    {
      id: '1',
      name: '王小虎',
      depart: '人事部',
      gangwei: '前台',
      ruzhiTime: '2018/01/01',
      createTime: '2018/01/02',
      editTime: '2018/01/03',
      control: '处理中'
    }
  ]
  /**
   * 删除
  */
  handleDelete() {
    this.$confirm('确认删除?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {
        this.tableData6 = []
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      })
      .catch(() => {})
  }
  /**
   * 查看
  */
  handleRead() {
    this.showEdit = true
  }
  /**
   * 编辑
  */
  handleEdit() {
    this.showEdit = true
  }
}
