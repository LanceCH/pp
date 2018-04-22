<template>
  <div class="silder">
    <el-menu :default-active="key" class="el-menu-vertical-demo" @select="selectMenu">
      <el-submenu index="1">
        <template slot="title">
          <span>菜单一</span>
        </template>
        <el-submenu index="1-4">
          <template slot="title">菜单二</template>
          <el-menu-item index="/">
            <i class="el-icon-menu" :class="{'is-active': key === 1}"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-menu-item index="/fileList">
            <i class="el-icon-tickets" :class="{'is-active': key === 2}"></i>
            <span slot="title">档案列表</span>
          </el-menu-item>
          <!-- <el-menu-item index="/reportList">
            <i class="el-icon-document" :class="{'is-active': key === 3}"></i>
            <span slot="title">报表设计</span>
          </el-menu-item> -->
        </el-submenu>
      </el-submenu>
    </el-menu>
  </div>
</template>
<style src="./silder.scss" lang="scss" scoped></style>
