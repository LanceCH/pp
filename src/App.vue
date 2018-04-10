<template>
  <div id="app" class="container">
    <transition name="component-fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Auto></Auto>
  </div>
</template>
<style lang="scss">
.component-fade-enter-active {
  // transition: opacity .3s ease;
  -webkit-animation: scaleUp .3s ease both;
  animation: scaleUp .3s ease both;
}
.component-fade-leave-active {
  -webkit-animation: scaleDown .3s ease both;
  animation: scaleDown .3s ease both;
}

@-webkit-keyframes scaleUp {
  from { opacity: 0; -webkit-transform: scale(.9); }
}
@keyframes scaleUp {
  from { opacity: 0; -webkit-transform: scale(.9); transform: scale(.9); }
}

@-webkit-keyframes scaleDown {
  from { }
  to { opacity: 0; -webkit-transform: scale(.9); }
}
@keyframes scaleDown {
  from { }
  to { opacity: 0; -webkit-transform: scale(.9); transform: scale(.9); }
}

#app {
  min-height: 100%;
  height: 100%;
}
.tankuang{
  position: fixed;
  z-index: 1000;
  top: 10px;
  left: 50%;
  background:#fff;
  box-shadow:0px 0px 5px #ccc;
  width:250px;
  min-height:160px;
  padding:20px;
}
.tankuang-header{
  position: absolute;
  top: 5px;
  right: 10px;
  cursor: pointer;
}
</style>
<script>
  export default {}
</script>
