/** @format */

import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
]

const router = createRouter({
  history:
    ROUTING_MODE === 'HASH'
      ? createWebHistory(BASE_URL)
      : createWebHashHistory(BASE_URL),
  routes,
})
/**
 * 安装路由
 * @param {*} app
 * @returns
 */
export function installRouter(app) {
  app.use(router)
  guard(router)
  return router
}
/**
 * 守卫
 * @param {*} router
 */
function guard(router) {
  router.beforeEach(async (to, from, next) => {
    // 跳转之前
    next()
  })
  router.afterEach((to) => {
    // 跳转之后
    console.log(to)
  })
}

export default router
