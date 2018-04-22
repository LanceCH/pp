<template>
  <div class="container">
    <div class="control">
      <el-button type="primary">新增</el-button>
      <el-button type="primary">删除</el-button>
      <el-button type="primary">导入</el-button>
      <el-button type="primary">导出</el-button>
      <el-button type="primary">打印</el-button>
    </div>
    <div class="table">
      <div class="header">档案表</div>
      <div class="filter">
        <el-form ref="form" :model="form" label-width="80px" :inline="true" size="mini">
          <el-form-item label="员工类型">
            <el-select v-model="form.type" placeholder="请选择员工姓名">
              <el-option label="管理员" value="admin"></el-option>
              <el-option label="经理" value="manage"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="入职部门">
            <el-select v-model="form.department" placeholder="请选择活动区域">
              <el-option label="人事" value="hr"></el-option>
              <el-option label="财务" value="kuaiji"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="岗位名称">
            <el-select v-model="form.gangwei" placeholder="请选择活动区域">
              <el-option label="员工" value="staff"></el-option>
              <el-option label="经理" value="manage"></el-option>
              <el-option label="总经理" value="bigmanage"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="入职时间">
            <el-date-picker v-model="value4" type="datetimerange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
        </el-form>
      </div>
      <div class="table-box">
        <el-table :data="tableData6" border style="width: 100%">
          <el-table-column type="selection" width="55">
          </el-table-column>
          <el-table-column prop="id" label="序号" width="80">
          </el-table-column>
          <el-table-column prop="name" label="名称">
          </el-table-column>
          <el-table-column prop="depart" width="150" sortable label="入职部门">
          </el-table-column>
          <el-table-column prop="gangwei" sortable label="岗位">
          </el-table-column>
          <el-table-column prop="ruzhiTime" width="150" sortable label="入职时间">
          </el-table-column>
          <el-table-column prop="createTime" width="150" sortable label="创建时间">
          </el-table-column>
          <el-table-column prop="editTime" width="150" sortable label="修改时间">
          </el-table-column>
          <el-table-column prop="control" width="150" sortable label="流程状态">
          </el-table-column>
          <el-table-column fixed="right" width="150" label="操作">
            <template slot-scope="scope">
              <el-button size="mini" @click="handleRead">查看</el-button>
              <el-button size="mini" @click="handleEdit">编辑</el-button>
              <el-button size="mini" type="danger" @click="handleDelete">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<style src="./fileList.scss" lang="scss" scoped></style>
