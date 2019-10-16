// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
//axios并不像ajax或者vue-resource那样，它默认post是以Request Payload这种形式来传输的
import axios from './axios';
import 'element-ui/lib/theme-chalk/index.css'
//引入vuex
import store from './store'

Vue.config.productionTip = false
// 跳转后返回顶部
router.afterEach((to,from,next) => {
    window.scrollTo(0,0);
});
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,//使用store
  axios,
  components: { App },
  template: '<App/>'
})
