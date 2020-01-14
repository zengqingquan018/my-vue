import Vue from 'vue';
import Router from 'vue-router';
import login from '@/components/login';
import HelloWorld from '@/components/HelloWorld';
import * as Utils from '@/utils'
 
Vue.use(Router);
 
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
});
 
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach(async (to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token =await  Utils.getCookie('JSESSIONID');
 console.log(token,'<<<<<<')
    if (!token) {
      next('/login');
    } else {
      next();
    }
  }
});
 
export default router;