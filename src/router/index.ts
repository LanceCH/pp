import Vue from 'vue'
import Router from 'vue-router'
import * as VueCookie from 'vue-cookie'
Vue.use(Router)

let routes = []

function addRoute(path: string, name: string, component: any) {
  routes.push({
    path: path,
    name: name,
    component: component
  })
  return addRoute
}

addRoute
  (
  '/', 'Home',
  (r) => require.ensure([], () => r(require('views/home')['default']), 'Home')
  )
  // (
  // '*', 'defaultView',
  // (r) => require.ensure([], () => r(require('views/login')['default']), 'Home')
  // )

const router = new Router({
  routes: routes
})



// router.beforeEach((to, from, next) => {
//   if (to.path === '/login') return next()
//   if (!VueCookie.get('token')) {
//     return next('/login')
//   }
//   const staffInfo = JSON.parse(localStorage.getItem('staffInfo'))
//   // if (!staffInfo || (to.meta.authId && staffInfo.allow_api_ids.indexOf(to.meta.authId) < 0 && to.path !== '/')) return next('/deny');
//   return next()
// })

export default router
