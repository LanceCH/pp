<template>
    <div class="organization">
        <div class="left-list">
            <el-tree 
                :data="navData" 
                node-key="id" 
                @node-click="handleNodeClick">
            </el-tree>
        </div>
        <div class="right-content">
            <div class="header">
                <el-row class="control">
                    <el-button type="primary">手工从钉钉同步组织机构</el-button>
                    <el-button type="primary">任务交接</el-button>
                    <el-button type="primary">设置部门经理</el-button>
                    <el-button type="primary">部门调整</el-button>
                    <el-button type="primary">角色授权</el-button>
                </el-row>
                <div class="search-box">
                    <el-input
                        placeholder="搜索角色"
                        v-model="input23">
                        <i slot="prefix" class="el-input__icon el-icon-search"></i>
                    </el-input>
                </div>
            </div>
            <div class="table-box">
                <el-table :data="tableData6" border style="width: 100%">
                <el-table-column type="selection" width="55">
                </el-table-column>
                <el-table-column prop="id" label="序号" width="80">
                </el-table-column>
                <el-table-column prop="name" label="姓名">
                </el-table-column>
                <el-table-column prop="cell" label="手机">
                </el-table-column>
                <el-table-column prop="email" label="邮箱">
                </el-table-column>
                </el-table>
            </div>
        </div>
    </div>
</template>
<style src="./organization.scss" lang="scss" scoped></style>
