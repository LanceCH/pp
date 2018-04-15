<template>
  <div class="silder">
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @select="selectMenu">
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/fileList">
        <i class="el-icon-tickets"></i>
        <span slot="title">档案列表</span>
      </el-menu-item>
      <el-menu-item index="/reportList">
        <i class="el-icon-document"></i>
        <span slot="title">报表设计</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<style src="./silder.scss" lang="scss" scoped></style>
