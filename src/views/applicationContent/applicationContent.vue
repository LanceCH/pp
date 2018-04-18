<template>
    <div class="applicationContent">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '#/application' }">应用管理</el-breadcrumb-item>
        <el-breadcrumb-item>{{getAppDetail.title}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
</template>
<style src="./applicationContent.scss" lang="scss" scoped></style>
