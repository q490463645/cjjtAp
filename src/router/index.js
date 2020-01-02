import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
  	
    {
    	//首页
      path: '/',
      name: 'home',
      component: () => import("@/components/home/home")
    }, {
    	//业务板块
      path: '/businessSector',
      name: 'businessSector',
      component: () => import("@/components/businessSector/businessSector")
    }, {
    	//数据分析
      path: '/dataAnalysis',
      name: 'dataAnalysis',
      component: () => import("@/components/dataAnalysis/dataAnalysis")
    }, {
    	//我的
      path: '/my',
      name: 'my',
      component: () => import("@/components/my/my")
    },{
    	//合同信息
    		//合同信息列表
    	path: '/contractAnalyze',
      name: 'contractAnalyze',
      component: () => import("@/components/dataAnalysis/contractAnalyze/contractAnalyze")
    },{
    		//合同动态信息
    	path: '/contractDynamicAnalysis',
      name: 'contractDynamicAnalysis',
      component: () => import("@/components/dataAnalysis/contractAnalyze/contractDynamicAnalysis")
    },{
    	//合同信息分析
    	path: '/contractInformationAnalysis',
      name: 'contractInformationAnalysis',
      component: () => import("@/components/dataAnalysis/contractAnalyze/contractInformationAnalysis")
    }
  ]
})
