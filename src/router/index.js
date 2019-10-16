import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: '登录',
      component: '../view/jiumo/login.vue'
    },
    {
      path: '/jmform',
      name: '表单',
      component: '../view/jiumo/jiumoform.vue'
    },
    {
      path: '/loanContract',
      name: '借款合同',
      component: '../view/jiumo/LoanContract.vue'
    }
  ]
})
