import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import register from '@/views/register/index'
import info from '@/views/info/index'
import setInfo from '@/views/setInfo/index'
Vue.use(Router)

export default new Router({
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
    ,
    {
      path: '/info',
      name: 'info',
      component: info
    },
    ,
    {
      path: '/setInfo',
      name: 'setInfo',
      component: setInfo
    },
    {
      path: '/register',
      name: 'register',
      component: register
    }
  ]
})
