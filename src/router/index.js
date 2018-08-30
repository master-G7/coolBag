import Vue from 'vue'
import Router from 'vue-router'
//如由相关在这里
import ballroom from '../components/index/ballroom/room.vue'
import shequ from '../components/index/shequ/shequ.vue'
import mine from '../components/index/mine/mine.vue'
import home from '../components/index/home/home.vue'
import bottom from '../components/index-bottom/index-bottom.vue'
import bookinginfo from '../components/index/home/bookinginfo/bookinginfo.vue'
import infoConfirm from '../components/index/home/bookinginfo/infoConfirm.vue'
import ballroominfo from '../components/index/ballroom/ballRoomInfo.vue'
import immediatelyBooking from '../components/index/ballroom/immediatelyBooking.vue'
import comment from '../components/index/mine/comment.vue'

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
  ]
})