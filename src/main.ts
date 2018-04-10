import 'styles/app.scss'
import Vue from 'vue'
import * as ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import store from 'store'
import router from 'router'
import App from './App.vue'
import svgicon = require('vue-svgicon')
import * as Cookie from 'vue-cookie'
import Auto from './plug'
import UiAuto from './plug/auto'
import VueAnalytics from 'vue-analytics'


// import all icons

Vue.use(svgicon, {
  tagName: 'svgicon'
})
Vue.component('Auto', UiAuto)
Vue.use(ElementUI)
Vue.use(Cookie)
Vue.use(Auto)

if (process.env.APP_ENV === 'prod') {
  Vue.use(VueAnalytics, {
    id: 'UA-105253274-2',
    router
  })
}

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
