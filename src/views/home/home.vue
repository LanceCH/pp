<template>
  <div class="container">
    <div class="soft-list">
      <div class="header">
        <h1>你好</h1>
        <p class="header-p">下面是我们比较常用的软件
          <el-button type="text">自定义+</el-button>
        </p>
      </div>
      <div class="list">
        <ul class="list-ul">
          <li v-for="(app,i) of apps" :key="i" v-dragging="{ item: app, list: apps, group: 'app' }" class="list-li"><img :src="require('../../images/soft.png')" />
            <div class="title">{{app.text}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style src="./home.scss" lang="scss" scoped></style>
