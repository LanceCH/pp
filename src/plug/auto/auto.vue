<template>
   <div class="progress" v-show="$store.state.autoLecNatioan.percent && autoLecControl.isAutoRun">
    <div class="progress-percent">
      <div class="control row">
        <div class="flex-4" @click="miniPause">{{autoLecControl.isPause ? '继续' : '暂停'}}</div>
        <el-popover placement="top" width="200" v-model="showStopPop" popper-class="auto-stop-pop">
          <p style="margin-bottom: 8px; height: 30px; line-height: 30px; font-size: 12px; color: #333;"><svgicon icon="notice" width="18" height="18" color="#F7BA2A"></svgicon><span style="margin-left: 10px;">是否结束本次讲课？</span></p>
          <div style="text-align: right; margin: 0">
            <el-button @click="showStopPop = false">取消</el-button>
            <el-button type="primary" @click="miniStop">确定</el-button>
          </div>
          <div class="flex-4" slot="reference">结束</div>
        </el-popover>
        <div class="flex-4"><a href="#/classroom">讲课室</a></div>
      </div>
      <div class="num">讲课进度 {{$store.state.autoLecNatioan.percent || 0}}%</div>
      <div class="percent" :class="'w'+ $store.state.autoLecNatioan.percent"></div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .progress {
    width: 160px;
    color: #fff;
    position: fixed;
    bottom: 40px;
    right: 50%;
    margin-right: -620px;
    z-index: 4;
    clear: fix;

    .progress-percent {
      width: 160px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background: #fcfcfc;
      box-shadow: 0 0 8px #ddd;
      border: 1px solid #3eff24;
      // overflow: hidden;
      color: #000;
      position: relative;

      .control {
        width: 160px;
        height: 20px;
        line-height: 18px;
        position: absolute;
        top: -21px;
        right: -1px;
        border: 1px solid #3eff24;
        border-bottom: 0;

        .flex-4 {
          background: #fff;
          cursor: pointer;

          &:hover {
            color: #3eff24 - #888;
          }

          &:last-child {
            border-left: 1px solid #3eff24;
          }

          &.disabled {
            color: #ccc;
          }
        }
      }

      .num {
        width: 100%;
        height: 100%;
        font-size: 12px;
        position: absolute;
        z-index: 2;
      }

      .percent {
        height: 100%;
        position: absolute;
        background: #3eff24;
        box-shadow: 0 0 8px #3eff24;
        left: 0;
        bottom: 0;

        @for $i from 0 through 100 {
          &.w#{$i} {
            width: $i * 1%;
          }
        }
      }
    }
  }
  .auto-stop-pop {
    .el-button {
      font-size: 12px;
      padding: 5px 8px;
    }
  }
</style>
