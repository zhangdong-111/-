// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引入vuex
import store from './store'
// 引入重置样式
import './assets/css/reset.css'
// 全局引入elementui
import ElementUI from 'element-ui'
//引入elementUIcss样式
import 'element-ui/lib/theme-chalk/index.css'   

//给vue原型挂载一个服务器地址
Vue.prototype.$imgUrl = 'http://localhost:3000'

//调用插件
Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
