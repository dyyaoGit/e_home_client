import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录'
      },
      component: () => import("@/views/login"),
      hiddenTabs: true
    },
    {
      path: "/map",
      name: "bdmap",
      meta: {
        title: "流动党员找组织",
      },
      hidden: true,
      component: () => import("@/views/map")
    },
    {
      path: '/test',
      name: "test",
      component: () => import("@/views/test")
    },
    {
      path: "/ajaxUp",
      name: "up",
      component: () => import("@/views/ajaxUp")
    },
    {
      path: "/qiniuSDK",
      name: "SDK",
      component: ()=> import("@/views/qiniuSDK")
    }
  ]
})
