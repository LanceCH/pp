<template>
  <div class="applicationContent">
    <div class="left-nav">
      <el-tree :data="navData" node-key="id" @node-drag-start="handleDragStart" @node-drag-enter="handleDragEnter" @node-drag-leave="handleDragLeave" @node-drag-over="handleDragOver" @node-drag-end="handleDragEnd" @node-drop="handleDrop" draggable :allow-drop="allowDrop">
      </el-tree>
    </div>
    <div class="right-content">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '#/application' }">应用管理</el-breadcrumb-item>
        <el-breadcrumb-item>{{getAppDetail.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
  </div>
</template>
<style src="./applicationContent.scss" lang="scss" scoped></style>
