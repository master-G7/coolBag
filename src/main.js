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
import './common/css/icon_font/iconfont.css'
import dayjs from 'dayjs'
Vue.prototype.$dayjs = dayjs
//axios相关
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.withCredentials = true

// 引入vue-amap
import AMap from 'vue-amap';
Vue.use(AMap);
// 初始化vue-amap
AMap.initAMapApiLoader({
  key: '956afd3a9fc6b868bd3ae30c6a766acf',
  plugin: ['AMap.Geolocation', 'AMap.CitySearch']
});
fastclick.attach(document.body)
Vue.config.productionTip = false                             
Vue.use(MintUI)
Vue.use(VueRouter)
//如由相关在这里
import ballroom from './components/index/ballroom/room.vue'
import shequ from './components/index/shequ/shequ.vue'
import mine from './components/index/mine/mine.vue'
import home from './components/index/home/home.vue'
import bottom from './components/index-bottom/index-bottom.vue'
import bookinginfo from './components/index/home/bookinginfo/bookinginfo.vue'
// import index from './components/index/index.vue'
// const router = new VueRouter({
//   routes:[
//     {path: '/', redirect: '/home'},
//     {path:'/ballroom',component:ballroom},
//     {path:'/shequ',component:shequ},
//     {path:'/mine',component:mine},
//     {path:'/home',component:home},
//   ]
// })
const router = new VueRouter({
  routes: [{
      path: '/',
      redirect: '/home',
      component: bottom,
      children: [{
          path: '/',
          redirect: '/home'
        },
        {
          path: '/ballroom',
          component: ballroom,
          meta:{index:2}
        },
        {
          path: '/shequ',
          component: shequ,
          meta:{index:3}
        },
        {
          path: '/mine',
          component: mine,
          meta:{index:4}
        },
        {
          path: '/home',
          component: home,
          meta:{index:1}
        },
      ]
    },
    {
      path: '/bookinginfo',
      component: bookinginfo,
      
    },
  ]
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
