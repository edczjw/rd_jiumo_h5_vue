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
      // 登陆页面
      path: '/login',
      name: '登录页面',
      component: require('../view/jiumo/login.vue').default,
      meta: {
        title: '登录'
      }
    },
    {
      // 填写表单页面
      path: '/form1',
      name: '表单页面',
      component: require('../view/jiumo/jiumoform.vue').default,
      meta: {
        title: '个人信息'
      }
    },
    {
      // 借款合同页面
      path: '/loanContract',
      name: '借款合同',
      component: require('../view/jiumo/LoanContract.vue').default,
      meta: {
        title: '借款合同'
      }
    },
  ]
})
