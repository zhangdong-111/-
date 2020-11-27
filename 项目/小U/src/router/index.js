import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/index',
      component:()=>import('../components/一级/index'),
      children:[
        {  
          path:'/car',
          component:()=>import('../components/二级/car'),
        },
        {
          path:'/home',
          component:()=>import('../components/二级/home'),
        },
        {
          path:'/mine',
          component:()=>import('../components/二级/mine'),
        },
        {
          path:'',
          redirect:'/home'
        }
      ]
    },
    {
      path:'/cart',
      component:()=>import('../components/一级/cart'),
    },
    {
      path:'/personal',
      component:()=>import('../components/一级/personal'),
    },
    {
      path:'/order',
      component:()=>import('../components/一级/order'),
    },
    {
      path:'/prolist',
      component:()=>import('../components/一级/prolist'),
    },
    {
      path:'/list',
      component:()=>import('../components/一级/list'),
    },
    {
      path:'/login',
      component:()=>import('../components/一级/login'),
    },
    {
      path:'/zhuce',
      component:()=>import('../components/一级/zhuce'),
    },
    {
      path:'/datails',
      component:()=>import('../components/一级/datails'),
    },
    {
      path:'*',
      redirect:'/index'
    }
  ]
})
