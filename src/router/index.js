import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("@/components/home/home")
    }, {
      path: '/businessSector',
      name: 'businessSector',
      component: () => import("@/components/businessSector/businessSector")
    }, {
      path: '/dataAnalysis',
      name: 'dataAnalysis',
      component: () => import("@/components/dataAnalysis/dataAnalysis")
    }, {
      path: '/my',
      name: 'my',
      component: () => import("@/components/my/my")
    }
  ]
})
