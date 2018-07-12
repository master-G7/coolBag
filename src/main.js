// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import fastclick from 'fastclick'
import 'lib-flexible/flexible.js'
import '@/common/css/reset.css'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//axios相关
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.withCredentials = true

fastclick.attach(document.body)
Vue.config.productionTip = false
Vue.use(MintUI)
Vue.use(VueRouter)
//如有相关在这里
import ballroom from './components/index/ballroom/room.vue'
import shequ from './components/index/shequ/shequ.vue'
import mine from './components/index/mine/mine.vue'
import home from './components/index/home/home.vue'
const router = new VueRouter({
  routes:[
    {path: '/', redirect: '/home'},
    {path:'/ballroom',component:ballroom},
    {path:'/shequ',component:shequ},
    {path:'/mine',component:mine},
    {path:'/home',component:home},
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
