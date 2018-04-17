<template>
  <div class="report-list">
    <grid :draggable="true" :sortable="true" :items="items" :cellHeight="240" :cellWidth="240">
      <template slot="cell" scope="props">
        <div class="box">
          <div class="control" v-if="!!props.item.id">
            <div class="edit" @click="dialogVisible = true" :style="`background-image:url(${require('images/cz.png')})`"></div>
            <el-popover ref="popover2" placement="bottom" title="移动端首页报表配置" width="200" trigger="click">
              <div>
                <el-button type="text">发布到钉钉</el-button>
                <el-button type="text">发布到其他企业</el-button>
              </div>
            </el-popover>
            <div class="delete" @click="deleteHandle(props)" :style="`background-image:url(${require('images/cz1.png')})`"></div>
            <div v-popover:popover2 class="setting" :style="`background-image:url(${require('images/cz2.png')})`"></div>
          </div>
          <div class="img-box" @click="handleApp(props.item.id)" :style="`background-image:url(${require('images/1.png')})`"></div>
          <div class="title">{{props.item.text}}</div>
        </div>
      </template>
    </grid>
    <!-- 修改 / 新增-->
    <el-dialog :title="title" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <el-form label-position="right" label-width="80px" :model="formLabelAlign">
        <el-form-item label="名称">
          <el-input v-model="formLabelAlign.name"></el-input>
        </el-form-item>
      </el-form>
      <el-upload class="upload-demo" action="https://jsonplaceholder.typicode.com/posts/" :on-preview="handlePreview" :on-remove="handleRemove" :file-list="fileList" :auto-upload="false" list-type="picture">
        <el-button size="small" type="primary">点击上传</el-button>
      </el-upload>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<style src="./application.scss" lang="scss" scoped></style>
