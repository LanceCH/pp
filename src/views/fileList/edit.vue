<template>
    <div class="file-container">
        <el-form ref="form" :inline="true" :model="form" label-width="150px">
            <div class="line">
                <el-form-item label="人员多选">
                    <el-select style="width: 220px;" multiple v-model="form.personMultiple" v-popover:multiplePersonPop></el-select>
                </el-form-item>
                <el-form-item label="人员单选">
                    <el-input style="width: 220px;" v-model="form.personSingle" v-popover:singlePersonPop></el-input>
                </el-form-item>
            </div>
            <div class="line">
                <el-form-item label="入职时间">
                    <el-date-picker
                        v-model="dateValue"
                        type="date"
                        placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="多选部门">
                    <el-select style="width: 220px;" multiple v-model="form.deptMultiple" v-popover:mutipleDeptPop></el-select>
                </el-form-item>
            </div>
            <div class="line">
                <el-form-item label="单选部门">
                    <el-input style="width: 220px;" v-model="form.deptSingle" v-popover:singleDeptPop></el-input>
                </el-form-item>
                <el-form-item label="当月薪资">
                    <el-input placeholder="0.00" v-model="form.salary" style="width: 220px;"></el-input>
                </el-form-item>
            </div>
            <div class="line">
                <el-form-item label="HR准备事项">
                    <el-checkbox-group v-model="form.hr">
                    <el-checkbox label="待入职人员简历" ></el-checkbox>
                    <el-checkbox label="面试/入职登记表" ></el-checkbox>
                    <el-checkbox label="笔试面试评价及录用审批表" ></el-checkbox>
                    <el-checkbox label="录用通知书" ></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
            </div>
            <div class="line">
                <el-form-item label="面试记录">
                    <el-input type="textarea" v-model="form.recode"></el-input>
                </el-form-item>
            </div>
            <hr />
            <div class="line" style="margin: 10px;">
                <el-form-item label="家庭成员信息">
                    <el-table border :data="tableData" style="width: 100%">
                        <el-table-column
                            label="序号"
                            type="index"
                            width="50">
                        </el-table-column>
                        <el-table-column
                            prop="relative"
                            label="关系"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="姓名"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="job"
                            label="职务"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="company"
                            label="单位名称"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            label="家庭住址"
                            width="180">
                        </el-table-column>
                    </el-table>
                </el-form-item>
            </div>
            <div class="line">
                <el-form-item label="合同类型">
                    <el-radio-group v-model="form.hetongtype">
                    <el-radio label="固定期限"></el-radio>
                    <el-radio label="无固定期限"></el-radio>
                    </el-radio-group>
                </el-form-item>
            </div>
            <div class="line">
                <el-form-item label="组合单选框">
                    <el-table border :data="radioTableData" style="width: 100%">
                        <el-table-column
                            label="序号"
                            type="index"
                            width="50">
                        </el-table-column>
                        <el-table-column
                            prop="tag1"
                            label="列标签1"
                            width="100">
                            <template slot-scope="scope">
                                <el-radio v-model="radio" :label="scope.row.tag1">{{scope.row.tag1}}</el-radio>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="tag2"
                            label="列标签2"
                            width="100">
                            <template slot-scope="scope">
                                <el-radio v-model="radio" :label="scope.row.tag2">{{scope.row.tag2}}</el-radio>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="tag3"
                            label="列标签3"
                            width="100">
                            <template slot-scope="scope">
                                <el-radio v-model="radio" :label="scope.row.tag3">{{scope.row.tag3}}</el-radio>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="tag4"
                            label="列标签4"
                            width="100">
                            <template slot-scope="scope">
                                <el-radio v-model="radio" :label="scope.row.tag4">{{scope.row.tag4}}</el-radio>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="tag5"
                            label="列标签5"
                            width="100">
                            <template slot-scope="scope">
                                <el-radio v-model="radio" :label="scope.row.tag5">{{scope.row.tag5}}</el-radio>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="tag6"
                            label="列标签6"
                            width="100">
                            <template slot-scope="scope">
                                <el-radio v-model="radio" :label="scope.row.tag6">{{scope.row.tag6}}</el-radio>
                            </template>
                        </el-table-column>
                        <el-table-column
                            prop="tag7"
                            label="列标签7"
                            width="100">
                            <template slot-scope="scope">
                                <el-radio v-model="radio" :label="scope.row.tag7">{{scope.row.tag7}}</el-radio>
                            </template>
                        </el-table-column>
                    </el-table>
                </el-form-item>
            </div>
            <div class="line">
                <el-form-item label="地址">
                    <v-distpicker class="distpicker" province="广东省" city="广州市" area="番禺区"></v-distpicker>
                    <el-input type="textarea" placeholder="请输入详细地址"></el-input>
                </el-form-item>
            </div>
            <div class="line">
                <el-form-item label="分组标题">
                    <el-input placeholder="这里是分组标题说明"></el-input>
                </el-form-item>
            </div>
            <div class="line">
                <el-form-item label="详细简历文件">
                    <el-upload
                    class="upload-demo"
                    drag
                    action="https://jsonplaceholder.typicode.com/posts/"
                    multiple>
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                    <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
                    </el-upload>
                </el-form-item>
            </div>
            <div class="line">
                <el-form-item label="图片控件">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
            </div>
            <div class="line">
                <el-form-item label="视频控件">
                    <el-upload
                        class="avatar-uploader"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload">
                        <img v-if="imageUrl" :src="imageUrl" class="avatar">
                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                    </el-upload>
                </el-form-item>
            </div>
            <div class="line">
                <el-form-item label="网址控件">
                    <el-input placeholder="请输入内容">
                        <template slot="prepend">Http://</template>
                    </el-input>
                </el-form-item>
            </div>
            <div class="line">
                <el-form-item label="位置控件">
                </el-form-item>
            </div>
        </el-form>
        <amap />
        <el-popover
            ref="multiplePersonPop"
            show-checkbox
            placement="bottom"
            title="用户"
            width="300"
            trigger="click">
            <el-tree
                class="multiple-tree"
                :data="navData"
                node-key="id"
                @node-drag-start="handleDragStart"
                @node-drag-enter="handleDragEnter"
                @node-drag-leave="handleDragLeave"
                @node-drag-over="handleDragOver"
                @node-drag-end="handleDragEnd"
                @node-drop="handleDrop"
                :allow-drop="allowDrop"
                @node-click="handleNodeClick">
            </el-tree>
            <el-tree
                class="multiple-tree"
                show-checkbox
                :data="personData"
                node-key="id"
                @node-drag-start="handleDragStart"
                @node-drag-enter="handleDragEnter"
                @node-drag-leave="handleDragLeave"
                @node-drag-over="handleDragOver"
                @node-drag-end="handleDragEnd"
                @node-drop="handleDrop"
                :allow-drop="allowDrop"
                @node-click="handleNodeClick">
            </el-tree>
        </el-popover>
        <el-popover
            ref="singlePersonPop"
            placement="bottom"
            title="用户"
            width="300"
            trigger="click">
            <el-tree
                class="multiple-tree"
                :data="navData"
                node-key="id"
                @node-drag-start="handleDragStart"
                @node-drag-enter="handleDragEnter"
                @node-drag-leave="handleDragLeave"
                @node-drag-over="handleDragOver"
                @node-drag-end="handleDragEnd"
                @node-drop="handleDrop"
                :allow-drop="allowDrop"
                @node-click="handleNodeClick">
            </el-tree>
            <el-tree
                class="multiple-tree"
                :data="personData"
                node-key="id"
                @node-drag-start="handleDragStart"
                @node-drag-enter="handleDragEnter"
                @node-drag-leave="handleDragLeave"
                @node-drag-over="handleDragOver"
                @node-drag-end="handleDragEnd"
                @node-drop="handleDrop"
                :allow-drop="allowDrop"
                @node-click="handleNodeClick">
            </el-tree>
        </el-popover>
        <el-popover
            ref="mutipleDeptPop"
            show-checkbox
            placement="bottom"
            title="部门"
            width="300"
            trigger="click">
            <el-tree
                class="multiple-tree"
                :data="navData"
                show-checkbox
                node-key="id"
                @node-drag-start="handleDragStart"
                @node-drag-enter="handleDragEnter"
                @node-drag-leave="handleDragLeave"
                @node-drag-over="handleDragOver"
                @node-drag-end="handleDragEnd"
                @node-drop="handleDrop"
                :allow-drop="allowDrop"
                @node-click="handleNodeClick">
            </el-tree>
        </el-popover>
        <el-popover
            ref="singleDeptPop"
            placement="bottom"
            title="部门"
            width="300"
            trigger="click">
            <el-tree
                :data="navData"
                node-key="id"
                @node-drag-start="handleDragStart"
                @node-drag-enter="handleDragEnter"
                @node-drag-leave="handleDragLeave"
                @node-drag-over="handleDragOver"
                @node-drag-end="handleDragEnd"
                @node-drop="handleDrop"
                :allow-drop="allowDrop"
                @node-click="handleNodeClick">
            </el-tree>
        </el-popover>
        <button-group @close="this.close"></button-group>
    </div>
</template>
<style src="./edit.scss" lang="scss"></style>
<script lang="ts">
import Vue from 'util/vueExt'
import { Component, Watch, Prop } from 'vue-property-decorator'
import Amap from 'components/amap'
import * as VDistpicker from 'v-distpicker'
import buttonGroup from 'components/button'
Vue.use(VDistpicker)
@Component({
        components: {
        VDistpicker,
        Amap,
        buttonGroup
    }
})
export default class Edit extends Vue {
  @Prop() close: () => void

    form = {
        hr: [],
        personMultiple: [],
        personSingle: '',
        deptMultiple: [],
        deptSingle: '',
        salary: '',
        recode: '',
        hetongtype: ''
    }
    imageUrl = ''
    dateValue = ''
    radio = '1'
    radioTableData = [{
        tag1: '1',
        tag2: '2',
        tag3: '3',
        tag4: '4',
        tag5: '5',
        tag6: '6',
        tag7: '7'
    }, {
        tag1: '1',
        tag2: '2',
        tag3: '3',
        tag4: '4',
        tag5: '5',
        tag6: '6',
        tag7: '7'
    }]
    tableData = []
    personData = []
    navData = []
    mounted() {
        this.getTree()
        this.getTable()
    }
    getTree() {
        this.api.getDept({}).then(res => {
            console.log(res)
            this.navData = res.data
        })
        this.api.getPerson({}).then(res => {
            this.personData = res.data
        })
    }
    getTable() {
        this.api.getFamily({}).then(res => {
            this.tableData = res.data
            console.log(this.tableData)
        })
    }
    handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
    }
    beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
            this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
            this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
    }
    handleDragStart(node, ev) {
    //  console.log('drag start', node)
    this.dragLevel = node.level
    console.log(node)
    }
    handleDragEnter(draggingNode, dropNode, ev) {
        // console.log('tree drag enter: ', dropNode.label)
    }
    handleDragLeave(draggingNode, dropNode, ev) {
        // console.log('tree drag leave: ', dropNode.label)
    }
    handleDragOver(draggingNode, dropNode, ev) {
        // console.log('tree drag over: ', dropNode.label)
    }
    handleDragEnd(draggingNode, dropNode, dropType, ev) {
        // console.log('tree drag end: ', dropNode && dropNode.label, dropType)
    }
    handleDrop(draggingNode, dropNode, dropType, ev) {
        // console.log('tree drop: ', dropNode.label, dropType)
        console.log(dropNode.level)
    }
    allowDrop(draggingNode, dropNode) {
        console.log(111)
    }
    handleNodeClick(data) {
        console.log(data)
        if(!data.children) {
        this.fileTitle = data.label
        }
    }
}
</script>
