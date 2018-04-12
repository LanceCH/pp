<template>
  <div id="app" class="container">
    <div class="wrapper">
      <app-header></app-header>
      <div class="box">
        <silder></silder>
        <transition name="component-fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.component-fade-enter-active {
  // transition: opacity .3s ease;
  -webkit-animation: scaleUp 0.3s ease both;
  animation: scaleUp 0.3s ease both;
}
.component-fade-leave-active {
  -webkit-animation: scaleDown 0.3s ease both;
  animation: scaleDown 0.3s ease both;
}

@-webkit-keyframes scaleUp {
  from {
    opacity: 0;
    -webkit-transform: scale(0.9);
  }
}
@keyframes scaleUp {
  from {
    opacity: 0;
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}

@-webkit-keyframes scaleDown {
  from {
  }
  to {
    opacity: 0;
    -webkit-transform: scale(0.9);
  }
}
@keyframes scaleDown {
  from {
  }
  to {
    opacity: 0;
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
}

#app {
  min-height: 100%;
  height: 100%;
  display: flex;

.wrapper{
  flex: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.box{
  position: relative;
  display: flex;
  flex: 1;
}

}
.tankuang {
  position: fixed;
  z-index: 1000;
  top: 10px;
  left: 50%;
  background: #fff;
  box-shadow: 0px 0px 5px #ccc;
  width: 250px;
  min-height: 160px;
  padding: 20px;
}
.tankuang-header {
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
}
</style>
<script lang="ts">
import AppHeader from 'components/appHeader'
import Silder from 'components/silder'

export default {
  components: {
    AppHeader,
    Silder
  }
}
</script>
