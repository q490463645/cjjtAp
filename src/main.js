// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
//全局引用组件
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Mint);
//配置路由
import router from './router/index.js';
//引用store
import store from './store/index.js';

FastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  router,store,
  render: h => h(App)
}).$mount('#app-box')
