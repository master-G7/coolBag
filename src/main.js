// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import Es6Promise from 'es6-promise'
Es6Promise.polyfill()
import App from './App'
import router  from './router/index.js'
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

//vuex 
import store from './store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})
