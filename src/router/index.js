import Vue from 'vue'
import Router from 'vue-router'
//如由相关在这里
import ballroom from '../components/index/ballroom/room.vue'
import shequ from '../components/index/shequ/shequ.vue'
import mine from '../components/index/mine/order/mine.vue'
import home from '../components/index/home/home.vue'
import bottom from '../components/index-bottom/index-bottom.vue'
import bookinginfo from '../components/index/home/bookinginfo/bookinginfo.vue'
import infoConfirm from '../components/index/home/bookinginfo/infoConfirm.vue'
import ballroominfo from '../components/index/ballroom/ballRoomInfo.vue'
import immediatelyBooking from '../components/index/ballroom/immediatelyBooking.vue'
import comment from '../components/index/mine/order/comment.vue'
import pay from '../components/index/mine/order/pay-list.vue'
import cancelOrder from '../components/index/mine/order/cancelOrder.vue'
import userinfo from '../components/index/mine/userinfo'
import mybook from '../components/index/mine/mybook/mybook.vue'
Vue.use(Router)

export default new Router({
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
          path: '/userinfo',
          component: userinfo,
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
      meta:{index:5}
    },
    {
      path: '/infoConfirm',
      component: infoConfirm,
      meta:{index:6}
    },
    {
      path: '/ballroominfo',
      component: ballroominfo,
      meta:{index:7}
    },
    {
      path: '/immediatelyBooking',
      component: immediatelyBooking,
      meta:{index:8}
    },
    {
      path: '/comment',
      component: comment,
      meta:{index:9}
    },
    {
      path: '/pay',
      component: pay,
      meta:{index:10}
    },
    {
      path: '/cancelOrder',
      component: cancelOrder,
      meta:{index:11}
    },
    {
      path: '/order',
      component: mine,
      meta:{index:10}
    },
    {
      path: '/mybook',
      component: mybook,
      meta:{index:10}
    },
  ]
})