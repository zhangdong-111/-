import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
export let indexRoutes = [
  {
    path: '/menu',
    component: () => import('../two/menu/menu'),
    name: '菜单管理'
  },
  {
    path: '/role',
    component: () => import('../two/role/role'),
    name: '角色管理'
  },
  {
    path: '/user',
    component: () => import('../two/user/user'),
    name: '管理员管理'
  },
  {
    path: '/cate',
    component: () => import('../two/cate/cate'),
    name: '商品分类'
  },
  {
    path: "/specs",
    component: () => import("../two/specs/specs"),
    name: "商品规格"
  },
  {
    path: "/goods",
    component: () => import("../two/goods/goods"),
    name: "商品管理"
  },
  {
    path: "/seck",
    component: () => import("../two/seck/seck"),
    name: "秒杀活动"
  },
  {
    path: "/banner",
    component: () => import("../two/banner/banner"),
    name: "轮播"
  },
  {
    path: "/member",
    component: () => import("../two/member/member"),
    name: "会员"
  },
];
// console.log(...indexRoutes,'展开'); 
export default new Router({
  routes: [
    {
      path: '/login',
      component: () => import('../one/login')
    },
    {
      path: '/index',
      component: () => import('../one/index'),
      children: [
        {
          path: '/home',
          component: () => import('../two/home')
        },
        ...indexRoutes,
        {//二级路由重定向
          path: '',
          redirect: '/menu'
        }
      ]
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})
