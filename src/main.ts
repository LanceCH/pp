import 'styles/app.scss'
import Vue from 'vue'
import * as ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from 'store'
import router from 'router'
import App from './App.vue'
import svgicon = require('vue-svgicon')
import * as Cookie from 'vue-cookie'
import VueAnalytics from 'vue-analytics'


// import all icons

Vue.use(svgicon, {
  tagName: 'svgicon'
})
Vue.use(ElementUI)

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
