<template>
  <header>
    <img class="logo" width="120" :src="require('../../images/logo.png')">
    <el-menu v-if="navVisible" background-color="#72bcef" text-color="#fff" active-text-color="#fff" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        系统设置
      </el-menu-item>
      <el-menu-item index="2">
        组织架构
      </el-menu-item>
      <el-menu-item index="3">
        权限管理
      </el-menu-item>
      <!--  <el-menu-item index="4">
        <a href="#/system">系统集成</a>
      </el-menu-item>
      <el-menu-item index="5">
        <a href="#/version">版本信息</a>
      </el-menu-item> -->
    </el-menu>
    <div class="right-part">
      <div class="search">
        <el-input placeholder="请输入搜索内容" prefix-icon="el-icon-search" v-model="keyword">
        </el-input>
      </div>
      <el-badge :value="12" class="item">
        <img class="bell" :src="require('../../images/bell.png')" width="30" height="30" />
      </el-badge>
      <el-dropdown @command="handleCommand" trigger="click">
        <span class="el-dropdown-link">
          <div class="avatar"><img :src="require('../../images/avatar.png')" width="30" height="30"/></div>
          小可爱<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="application">应用管理</el-dropdown-item>
          <el-dropdown-item command="baseMsg">基本资料</el-dropdown-item>
          <el-dropdown-item command="logout">登出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>
<style src="./appHeader.scss" lang="scss"></style>
