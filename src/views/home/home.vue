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
        <grid
        :draggable="true"
        :sortable="true"
        :items="apps"
        :cellWidth="140"
        :cellHeight="140"
        class="list-ul">
        <template slot="cell" scope="props">
          <div class="app">
            <div class="img-box"></div>
            <div class="title">{{props.item.text}}</div>
          </div>
        </template>
        </grid>
      </div>
    </div>
    <div class="charts">
      <div class="content">
        <div class="header">
          <h1>销售额类别占比</h1>
          <el-tabs v-model="activeName1" @tab-click="handleClick">
            <el-tab-pane label="全部渠道" name="1"></el-tab-pane>
            <el-tab-pane label="门店" name="2"></el-tab-pane>
            <el-tab-pane label="线上" name="3"></el-tab-pane>
          </el-tabs>
        </div>
        <div class="echartContainer" id="echartContainer"></div>
      </div>
      <div class="content">
          <div class="header">
            <h1>销售额排名一览</h1>
            <el-tabs v-model="activeName2" @tab-click="handleClickTable">
              <el-tab-pane label="全部渠道" name="1"></el-tab-pane>
              <el-tab-pane label="门店" name="2"></el-tab-pane>
              <el-tab-pane label="线上" name="3"></el-tab-pane>
            </el-tabs>
          </div>
          <div class="table">
            <el-table
                :data="tableData"
                stripe
                style="width: 100%">
                <el-table-column
                  prop="name"
                  label="产品名称"
                  width="180">
                </el-table-column>
                <el-table-column
                  prop="num"
                  label="访问量">
                </el-table-column>
                <el-table-column
                  prop="date"
                  label="日期"
                  width="180">
                </el-table-column>
              </el-table>
              <el-pagination
                layout="prev, pager, next"
                :total="50">
              </el-pagination>
          </div>
      </div>
    </div>
  </div>
</template>
<style src="./home.scss" lang="scss" scoped></style>
