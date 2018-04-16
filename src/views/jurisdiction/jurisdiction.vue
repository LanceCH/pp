<template>
    <div class="jurisdiction">
        <div class="header">
            <el-row class="control">
                <el-button type="primary">新建角色</el-button>
                <el-button type="primary">复制角色</el-button>
                <el-button type="primary">调整顺序</el-button>
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
        <div class="table-box">
          <el-table
              :data="tableData3"
              height="250"
              border
              style="width: 100%">
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
    </div>
</template>
<style src="./jurisdiction.scss" lang="scss" scoped></style>
