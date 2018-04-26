<template>
    <div class="jurisdiction">
        <div class="left-list">
            <div class="li" v-for="(v, i) in listData.data" :key="i" @click="activeId = i" :class="{'active': activeId === i}">{{v.title}}</div>
        </div>
        <div class="right-content">
            <div class="header">
                <el-row class="control">
                    <el-button type="primary">新建角色</el-button>
                    <el-button type="primary">复制角色</el-button>
                    <el-button type="primary">保存</el-button>
                </el-row>
                <div class="search-box">
                    <el-input
                        placeholder="搜索角色"
                        v-model="input23">
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </div>
            </div>
            <div class="tab-container">
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="角色权限设置" name="first">
                    <div class="table-box">
                    <el-table
                        :data="tableData3"
                        height="250"
                        border>
                        <el-table-column
                            prop="date"
                            label="应用权限"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="name"
                            label="全选"
                            width="180">
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            label="表单权限">
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            label="列表权限">
                        </el-table-column>
                        <el-table-column
                            prop="address"
                            label="数据权限">
                        </el-table-column>
                        </el-table>
                        </div>
                </el-tab-pane>
                <el-tab-pane label="角色成员管理" name="second">
                    <div class="control">
                        <el-button type="primary" @click="addMember">添加成员</el-button>
                    </div>
                    <div class="table-box">
                        <el-table
                            :data="roleManageTable"
                            height="250"
                            border>
                            <el-table-column
                                prop="date"
                                label="姓名"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="name"
                                label="手机"
                                width="180">
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="所属部门">
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="服务部门">
                            </el-table-column>
                            <el-table-column
                                prop="address"
                                label="操作">
                            </el-table-column>
                            </el-table>
                    </div>
                </el-tab-pane>
            </el-tabs>
            </div>
        </div>
          <!-- 新建成员 -->
            <el-dialog
                title="新建成员"
                :visible.sync="addMemberDialogVisible"
                width="30%"
                :before-close="handleClose">
            <el-form :inline="true" :model="addMemberForm" class="demo-form-inline">
                <el-form-item label="请选择成员">
                    <el-select v-model="addMemberForm.member" placeholder="请选择成员">
                    <el-option label="张三" value="zs"></el-option>
                    <el-option label="李四" value="ls"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="服务部门">
                    <el-select v-model="addMemberForm.department" placeholder="服务部门">
                    <el-option label="人事部门" value="rs"></el-option>
                    <el-option label="财务部门" value="cw"></el-option>
                    </el-select>
                </el-form-item>               
                <el-form-item label="手机号码">
                    <el-input v-model="addMemberForm.handset" placeholder="分组名称"></el-input>
                </el-form-item>
            </el-form>
                <span slot="footer" class="dialog-footer">
                <el-button @click="reset">重置</el-button>
                <el-button type="primary" @click="submit">提交</el-button>
                </span>
            </el-dialog>
    </div>
</template>
<style src="./jurisdiction.scss" lang="scss" scoped></style>
