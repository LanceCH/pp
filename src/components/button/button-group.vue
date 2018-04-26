<template>
  <div class="ihr-operation-btn-wrapper">
    <div class="btn-wrapper">
      <span class="btn-title">档案表-修改</span>
      <!-- <el-button type="primary" @click="confirm">{{confirmLabel}}</el-button> -->
      <!-- <el-button @click="beforeCancel">Cancel</el-button> -->
      <slot name="button"></slot>
      <el-button @click="saveOnly" type="primary">暂存</el-button>
      <el-button @click="submit" type="primary">提交</el-button>
      <el-button @click="code" type="primary">二维码</el-button>
      <el-button @click="beforeCancel" type="primary">关闭</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'button-group',
  props: {
    confirmLabel: {
      type: String,
      default () {
        return 'button.submit'
      }
    },
    cancelLabel: {
      type: String,
      default () {
        return 'button.cancel'
      }
    },
    confirmText: {
      type: String,
      default () {
        return 'position.tipMessage.beforeLeave'
      }
    },
    confirmTitle: {
      type: String,
      default () {
        return 'position.tipMessage.confirmTitle'
      }
    },
    confirmButtonText: {
      type: String,
      default () {
        return 'button.confirm'
      }
    },
    cancelButtonText: {
      type: String,
      default () {
        return 'button.cancel'
      }
    },
    isBack: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {}
  },
  methods: {
    saveOnly () {
      console.log(11)
    },
    submit () {
      console.log(11)
    },
    code () {
      console.log(11)
    },
    beforeCancel () {
      // this.showEdit = false
      this.$emit('close')
    },
    cancel () {
      this.$emit('before-cancel');
      if (this.isBack) {
        history.back();
      }
    }
  }
}
</script>

<style lang="scss" scope>
.ihr-operation-btn-wrapper {
  height: 50px;
  box-shadow: 1px -1px 20px gray;
  position: fixed;
  top: 0px;
  z-index: 100;
  width: 100%;
  text-align: right;
  left: 0;
  background: #BDE1F3;
  // border: 1px dashed blue;
  .btn-wrapper {
    max-width: 1190px;
    height: 50px;
    line-height: 50px;
    margin: 0 auto;
    padding: 0 7px 0 0;
    .btn-title {
      left: 70px;
      position: absolute;
      color: #55a3e3;
      font-size: 14px;
    }
  }
}
</style>
