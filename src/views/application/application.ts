import Vue from 'util/vueExt'
import { Component } from 'vue-property-decorator'
import Template from './application.vue'
import { AppDetailAction } from 'store/bindHelpers'
import IconBox from 'components/iconBox'
@Component({
  mixins: [Template],
  components: {
    IconBox
  }
})
export default class Application extends Vue {

  items = [
    { text: '流程中心', imgUrl: 'images/1.png', id: 1 },
    { text: '人员设定', imgUrl: 'images/2.png', id: 2 },
    { text: '人事管理', imgUrl: 'images/3.png', id: 3 },
    { text: '我的自定', imgUrl: 'images/4.png', id: 4 },
    { text: '新建应用', imgUrl: 'images/5.png', id: 0 }
  ]
  dialogVisible: boolean = false
  formLabelAlign = {
    name: ''
  }
  title: string = ''
  fileList = []
  iconList: string[] = ['all', 'calendar', 'cart', 'email', 'gifts', 'set']
  selectIcon: string = 'all' // 选中的icon，默认all

  handleRemove(file, fileList) {
    console.log(file, fileList)
  }
  handlePreview(file) {
    console.log(file)
  }
  handleClose() {
    this.dialogVisible = false
  }
  handleClick() {}
  /**
   * 获取选择的icon名
   */
  selectIconFun(v) {
    this.selectIcon = v
  }
  /**
   * 保存
   */
  submit() {
    this.dialogVisible = false
    console.log({
      title: this.formLabelAlign.name,
      iconName: this.selectIcon,
    })
  }
  /**
   * 打开应用 / 新增
   */
  handleApp(title, id) {
    if (!!id) {
      sessionStorage.setItem('app',JSON.stringify({id,title}))
      window.location.href = '#/applicationContent'
    } else {
      // 新增
      this.title = '新增'
      this.dialogVisible = true
    }
  }
  /**
   * 删除应用
   */
  deleteHandle({ index }) {
    this.$confirm('确认删除?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    })
      .then(() => {
        this.items.splice(index, 1)
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      })
      .catch(() => {})
  }
}
