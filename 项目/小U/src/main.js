// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
import './assets/js/remScale'
import './assets/css/reset.css'
import './assets/js/vue'

//引入Ul框架
import VantUI from 'vant'
Vue.use(VantUI)  
import 'vant/lib/index.css'

// 在vue原型上挂载一个服务器地址
Vue.prototype.$imgUrl='http://localhost:3000'
// 全局导航守卫
router.beforeEach((to,from,next)=>{
  console.log(to,'从哪来');
  // console.log(from,'到哪去');
  // next()
  if(to.path=='/login'){
    next() 
    return
  }
  if(localStorage.getItem('islogin')){
    next()
    return
  }
  next('/login')
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
