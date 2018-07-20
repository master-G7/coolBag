<template>
    <div class="ballroominfo">
        <!-- 轮播图 -->
        <div class="slide">
            <mt-swipe :auto="2000" :speed='500'>
                <mt-swipe-item v-for="item in slides" :key="item.id">
                    <a :href="item.href" rel="external nofollow">
                        <img :src="item.src">
                    </a>
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <!-- 球房名 -->
        <div class="roomelse">
            <div class="roomtitle">
                <div class="title">粤美特国际台球俱乐部</div>
                <div class="star">
                    星星在这里
                    <span>人气1998</span>
                </div>
                <div class="heart" @click='clickshoucan'>
                    <i v-show='shoucan' class="iconfont icon-shoucang"></i>
                    <i v-show='!shoucan' class="iconfont icon-yishoucang"></i>
                </div>
            </div>
        </div>
        <!-- 球房地址 -->
        <div class="roomaddress ">
            <i class="iconfont icon-dingwei"></i>
            <span class="add">地址:：</span>
        </div>
    </div>
</template>

<script >
export default {
  data() {
    return {
      slides: [
        {
          src: "http://192.168.2.128:8081/static/banner03.png",
          href: "JavaScript:void(0)"
        },
        {
          src: "http://192.168.2.128:8081/static/banner02.png",
          href: "JavaScript:void(0)"
        },
        {
          src: "http://192.168.2.128:8081/static/banner04.png",
          href: "JavaScript:void(0)"
        }
      ],
      shoucan: true
    };
  },
  components: {},
  methods: {
    clickshoucan() {
      this.shoucan = !this.shoucan;
    }
  }
};
</script>

<style scoped lang="less">
@import "../../../common/css/common.less";
@import '~vux/src/styles/1px.less';
.ballroominfo {
  width: 100%;
  height: 100%;
  .slide {
    width: 100%;
    height: 6.4rem;
    img {
      width: 100%;
      height: 6.4rem;
    }
  }
  .roomelse {
    width: 100%;
    background-color: black;
    padding: 0 0.32rem;
    .border-l(#dcdcdc,dashed);
    // .border-1pxTop(#dcdcdc,solid);
    .roomtitle {
      height: 1.6667rem;
      position: relative;
      .border-l(#ccc,dashed);
      .title {
        color: #333;
        font-size: 0.4267rem;
        line-height: 0.9867rem;
        height: 0.9867rem;
        font-weight: bold;
      }
      .star {
        span {
          font-size: 0.32rem;
          color: #999;
        }
      }
      .heart {
        width: 0.6667rem;
        height: 0.6667rem;
        position: absolute;
        right: 0.5333rem;
        top: 0.4267rem;
        i {
          font-size: 0.5333rem;
        }
        .icon-yishoucang {
          color: #ff6633;
        }
      }
    }
  }
}
</style>
