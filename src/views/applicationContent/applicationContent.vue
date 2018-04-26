<template>
  <div class="applicationContent">
    <div class="left-nav">
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
    </div>
    <div class="right-content">
      <div class="header">
        <el-breadcrumb separator-class="el-icon-arrow-right">
          <el-breadcrumb-item :to="{ path: '/application' }">应用管理</el-breadcrumb-item>
          <el-breadcrumb-item>{{appDetail.title}}</el-breadcrumb-item>
          <el-breadcrumb-item v-if="fileTitle">{{fileTitle}}</el-breadcrumb-item>
        </el-breadcrumb>
        <el-button @click="addGroup" type="primary" v-if="fileTitle">新建分组</el-button>
      </div>
      <div class="add-flie-container">
        <div class="add-box"  v-if="fileTitle">
          <img :src="require('../../images/yy2_03.png')" width="148" height="170">
          <div class="title-box">
            <p>新建表单</p>
            <span>表单可用于数据采集和数据上报</span>
          </div>
        </div>
        <div class="add-box"  v-if="fileTitle">
          <img :src="require('../../images/yy2_07.png')" width="148" height="170">
          <div class="title-box">
            <p>新建报表</p>
            <span>报表可用于数据汇总与数据展示</span>
          </div>
        </div>
        <div  v-if="!fileTitle" class="no-select">
          请选择表单或报表
        </div>
      </div>
    </div>
  <!-- 新建分组 -->
  <el-dialog
    title="新建分组"
    :visible.sync="addGroupDialogVisible"
    width="30%"
    :before-close="handleClose">
<el-form :inline="true" :model="addGroupForm" class="demo-form-inline">
  <el-form-item label="分组名称">
    <el-input v-model="addGroupForm.groupName" placeholder="分组名称"></el-input>
  </el-form-item>
</el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="addGroupForm.groupName = ''">重置</el-button>
      <el-button type="primary" @click="submit">确 定</el-button>
    </span>
</el-dialog>
  </div>
</template>
<style src="./applicationContent.scss" lang="scss" scoped></style>
