import Vue from 'util/vueExt'
import { Component } from 'vue-property-decorator'
import Template from './reportList.vue'
@Component({
    mixins: [Template]
})
export default class ReportList extends Vue {

    items = [
       {text:'流程中心',imgUrl:'images/1.png'},
       {text:'人员设定',imgUrl:'images/2.png'},
       {text:'人事管理',imgUrl:'images/3.png'},
       {text:'我的自定',imgUrl:'images/4.png'},
       {text:'新建应用',imgUrl:'images/5.png'},
    ]

    dialogVisible: boolean = false
    formLabelAlign = {
        name: ''
    }

    handleClose() {
        
    }

    handleRemove(file, fileList) {
        console.log(file, fileList);
    }
    handlePreview(file) {
        console.log(file);
    }
    fileList2 = []

    deleteHandle({index}) {
        this.$confirm('确认删除?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        })
            .then(() => {
            this.items.splice(index,1)
            this.$message({
                type: 'success',
                message: '删除成功!'
            })
            })
            .catch(() => {})
    }
}
