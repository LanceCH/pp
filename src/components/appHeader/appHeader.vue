<template>
  <header>
    <img width="120" :src="require('../../images/logo.png')">
    <el-menu background-color="#72bcef" text-color="#fff" active-text-color="#fff" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <a href="#/appManage">系统设置</a>
      </el-menu-item>
      <!-- <el-menu-item index="2">
        <a href="#/organizational">组织架构</a>
      </el-menu-item>
      <el-menu-item index="3">
        <a href="#/权限">权限管理</a>
      </el-menu-item>
      <el-menu-item index="4">
        <a href="#/system">系统集成</a>
      </el-menu-item>
      <el-menu-item index="5">
        <a href="#/version">版本信息</a>
      </el-menu-item> -->
    </el-menu>
  </header>
</template>
<style src="./appHeader.scss" lang="scss"></style>
