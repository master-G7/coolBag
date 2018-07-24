<template>
  <div class="ballroominfo">
    <!-- 轮播图 -->
    <div class="slide">
      <div class="fixed">
        <router-link to="ballroom">
          <i class="iconfont icon-fanhui1 fl"></i>
        </router-link>
        <i class="iconfont icon-zhuanfa fr" @click='repeat'></i>
        
      </div>
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
      <div class="roomtitle ">
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
      <div class="left">
        <span class="location">
          <i class="iconfont icon-dingwei"></i>
          <!-- <span class="add">地址：</span> -->
        </span>
        <span class="add">陈晓满爱吃酱香饼,鳕鱼排,肉包,菜包,豆沙包,榴莲鸡,陈晓满爱吃酱香饼,鳕鱼排,肉包,菜包,豆沙包,榴莲鸡,陈晓满爱吃酱香饼,鳕鱼排,肉包,菜包,豆沙包,榴莲鸡,</span>
      </div>
      <div class="phone">
        <div class="border">
          <a href="tel:15918798195"><i class="iconfont icon-dianhua"></i></a>
        </div>
      </div>
    </div>
    <!-- 人气助教 -->
    <div class="hotTeach">
      <div class="title">
        <span class='teacher fl'>人气助教</span>
        <span class='more fr'>查看更多&gt;</span>
      </div>
      <div class="list">
        <div class="scrool">
          <div class="teacherList">
            <div class="img"><img src="../../../../static/konglong.png" alt=""></div>
            <div class="name">陈晓满</div>
            <div class="price">250元/小时</div>
          </div>
          <div class="teacherList">
            <div class="img"><img src="../../../../static/konglong.png" alt=""></div>
            <div class="name">陈晓满</div>
            <div class="price">250元/小时</div>
          </div>
          <div class="teacherList">
            <div class="img"><img src="../../../../static/konglong.png" alt=""></div>
            <div class="name">陈晓满</div>
            <div class="price">250元/小时</div>
          </div>
          <div class="teacherList">
            <div class="img"><img src="../../../../static/konglong.png" alt=""></div>
            <div class="name">陈晓满</div>
            <div class="price">250元/小时</div>
          </div>
          <div class="teacherList">
            <div class="img"><img src="../../../../static/konglong.png" alt=""></div>
            <div class="name">陈晓满</div>
            <div class="price">250元/小时</div>
          </div>
          <div class="teacherList">
            <div class="img"><img src="../../../../static/konglong.png" alt=""></div>
            <div class="name">陈晓满</div>
            <div class="price">250元/小时</div>
          </div>
          <div class="teacherList">
            <div class="img"><img src="../../../../static/konglong.png" alt=""></div>
            <div class="name">陈晓满</div>
            <div class="price">250元/小时</div>
          </div>
          <div class="teacherList">
            <div class="img"><img src="../../../../static/konglong.png" alt=""></div>
            <div class="name">陈晓满</div>
            <div class="price">250元/小时</div>
          </div>
        </div>

      </div>
      <!-- <div class="list">
        <div class="teacherList">
          <div class="img"><img src="../../../../static/konglong.png" alt=""></div>
          <div class="name">陈晓满</div>
          <div class="price">250元/小时</div>
        </div>
        <div class="teacherList">
          <div class="img"><img src="../../../../static/konglong.png" alt=""></div>
          <div class="name">陈晓满</div>
          <div class="price">250元/小时</div>
        </div>
        <div class="teacherList">
          <div class="img"><img src="../../../../static/konglong.png" alt=""></div>
          <div class="name">陈晓满</div>
          <div class="price">250元/小时</div>
        </div>
        <div class="teacherList">
          <div class="img"><img src="../../../../static/konglong.png" alt=""></div>
          <div class="name">陈晓满</div>
          <div class="price">250元/小时</div>
        </div>
        <div class="teacherList">
          <div class="img"><img src="../../../../static/konglong.png" alt=""></div>
          <div class="name">陈晓满</div>
          <div class="price">250元/小时</div>
        </div>
        <div class="teacherList">
          <div class="img"><img src="../../../../static/konglong.png" alt=""></div>
          <div class="name">陈晓满</div>
          <div class="price">250元/小时</div>
        </div>
      </div> -->
    </div>
    <!-- 详情 & 评价 tab 切换 -->
    <div class="detailTab">
      <div class="box" @click='isselect=true'>
        <div class='text' :class="isselect ? 'active': ''">详情</div>
      </div>
      <div class="box" @click='isselect=false'>
        <div class="comment" :class="!isselect ? 'active': ''">评价</div>
      </div>
    </div>
    <!-- 详情展示 -->
    <div class="detail">
      <div class="time">
        <div class="dtitle">营业时间</div>
        <div class="dshow">营业时长：24小时</div>
      </div>
      <div class="rprice">
        <div class="dtitle">参考价</div>
        <div class="dshow">中 式 ：￥50/小时</div>
        <div class="dshow">美 式 ：￥50/小时</div>
        <div class="dshow">斯诺克：￥50/小时</div>
      </div>
      <div class="dev">
        <div class="dtitle">营业时间</div>
        <div class="dshow">营业时长：24小时</div>
      </div>
      <div class="service">
        <div class="dtitle">设施</div>
        <div class="dshow">棋牌室、禁烟区、WIFI、充电宝停车位棋牌室、禁烟区、WIFI、充电宝停车位棋牌室、禁烟区、WIFI、充电宝停车位</div>
      </div>
      <div class="introduct">
        <div class="dtitle">简介</div>
        <div class="dshowInt">测试文字100行,测试文字100行,测试文字100行,测试文字100行,测试文字100行,测试文字100行,测试文字100行,测试文字100行,测试文字100行,测试文字100行,测试文字100行,测试文字100行,测试文字100行,测试文字100行,测试文字100行,测试文字100行,测试文字100行,测试文字100行,测试文字100行,测试文字100行,测试文字100行,测试文字100行,测试文字100行,测试文字100行,测试文字100行,测试文字100行,测试文字100行,测试文字100行,</div>
      </div>
    </div>
    <!-- 底部 -->
    <div class="bottom fl">
      <div class="repeat" @click='repeat'>
        <i class="iconfont icon-zhuanfa"></i>
      </div>
      <div class="levelMessage">
        <i class="iconfont icon-xiaoxi"></i>
      </div>
      <router-link to="/immediatelyBooking"><div class="booking">立即预约</div></router-link>
    </div>
    <!-- 分享弹出层 -->
    <mt-popup v-model="share" position="bottom" lockScroll='true'>
      <div class="zhuanfa">
        <div class="top">
          <div class="text">分享</div>
        </div>
        <div class="centerIcon">
          <div class="share">
            <div class="imgWechat"></div>
            <div class="text">微信</div>
          </div>
          <div class="share">
            <div class="imgFriend"></div>
            <div class="text">朋友圈</div>
          </div>
          <div class="share">
            <div class="imgWeibo"></div>
            <div class="text">微薄</div>
          </div>
          <div class="share">
            <div class="imgQ"></div>
            <div class="text">QQ</div>
          </div>
        </div>
        <div class="shareBottom">
          <i class="iconfont icon-quxiaoshibai" @click="cancelShare"></i>
        </div>
      </div>
    </mt-popup>
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
      shoucan: true,
      isselect: true,
      share: false,
    };
  },
  components: {},
  methods: {
    clickshoucan() {
      this.shoucan = !this.shoucan;
    },
    repeat() {
      this.share = true;
    },
    cancelShare(){
      this.share = false;
    }
  }
};
</script>

<style scoped lang="less">
@import "../../../common/css/common.less";
.ballroominfo {
  background-color: #fff;
  width: 100%;
  height: 100%;
  .mint-popup-bottom {
    width: 100%;
  }
  .zhuanfa {
    width: 100%;
    height: 6.2rem;
    background-color: #f5f5f5;
    position: relative;
    .top {
      width: 100%;
      position: absolute;
      text-align: center;
      height: 1.6rem;
      .text {
        height: 1.6rem;
        line-height: 1.6rem;
        vertical-align: middle;
        color: #333;
        font-size: 0.4rem;
        font-weight: bold;
        &:after{
          left: 0;
        }
         &:before{
           right: 0
         }
        &:after,
        &:before {
          background: #dcdcdc;
          content: " ";
          height: 0.0133rem;
          position: absolute;
          top: 50%;
          width: 40%;
          // border-top: 1px #dcdcdc solid;

        }
      }
    }
    .centerIcon{
      display: flex;
      position: absolute;
      top: 1.8rem;
      width: 100%;
      flex-direction: row;
      justify-content:space-around;
      height: 3.0667rem;
      .imgWechat{
        .bg-image('/static/icon-index/share/weixin');
        width: 1.6rem;
        height: 1.6rem;
            background-size: 100%;
      }
      .imgFriend{
        .bg-image('/static/icon-index/share/pengyouquan');
        width: 1.6rem;
        height: 1.6rem;
            background-size: 100%;
      }
      .imgWeibo{
        .bg-image('/static/icon-index/share/weibo');
        width: 1.6rem;
        height: 1.6rem;
            background-size: 100%;
      }
      .imgQ{
        .bg-image('/static/icon-index/share/qq');
        width: 1.6rem;
        height: 1.6rem;
            background-size: 100%;
      }
      .text{
        margin-top: 0.2667rem;
        text-align: center;
      }
    }
    .shareBottom{
      position: absolute;
      height: 1.2667rem;
      top: 4.9333rem;
      .border-t(#dcdcdc,solid);
      width: 100%;
      i{
        margin-left:4.6667rem;
        display: inline-block;
        width: 100%;
        line-height:1.28rem ;
        font-size: 0.6933rem;
        color: #ccc;
      }
    }
  }
  .slide {
    width: 100%;
    height: 6.4rem;
    position: relative;
    .fixed{
      width: 100%;
      padding: 0 0.32rem;
      top: 0.3467rem;
      position: absolute;
      color: #fff;
      z-index: 10;
      i{
      color: #fff;
        font-size: 0.5333rem;
      }

    }
    img {
      width: 100%;
      height: 6.4rem;
    }
  }
  .roomelse {
    width: 100%;
    padding: 0 0.32rem;
    .roomtitle {
      padding-top: 0.08rem;
      height: 1.6667rem;
      position: relative;
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
        right: 0.1867rem;
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
  .roomaddress {
    height: 1.7067rem;
    width: 100%;
    padding: 0 0.32rem;
    .border-t(#dcdcdc,solid);
    .left {
      float: left;
      padding: 0.2933rem 0.4rem 0.2933rem 0;
      line-height: 0.5333rem;
      height: 100%;
      width: 8rem;
      font-size: 0.32rem;
      .location {
        width: 0.8rem;
        float: left;
        height: 100%;
        position: relative;
        span.add {
          top: 0.2133rem;
          position: absolute;
          left: 0.48rem;
        }
        i {
          position: absolute;
          top: 0.2667rem; 
          // left: 0.3734rem;
          font-size: 0.5333rem;
        }
      }
      .add {
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
    .phone {
      height: 100%;
      margin-left: 8rem;
      width: 1.6rem;
      padding: 0.5067rem 0;
      .border {
        // border-left: 0.0267rem solid #dcdcdc;
        .border-l(#999,solid);
        height: 100%;
        position: relative;
      }
      i {
        width: 1.6rem;
        display: inline-block;
        color: #0dbbfb;
        font-size: 0.5067rem;
        text-align: center;
        position: absolute;
        top: 0.1067rem;
        // line-height:1.7067rem;
      }
    }
  }
  .hotTeach {
    width: 100%;
    height: 5.0667rem;
    background-color: #fff;
    padding: 0.5067rem 0 0.5067rem 0;
    .border-t(#dcdcdc,solid);
    .title {
      padding-left: 0.32rem;
      height: 0.48rem;
      .teacher {
        font-size: 0.3733rem;
        font-weight: bold;
      }
      .more {
        font-size: 0.3467rem;
        color: #0dbbfb;
        margin-right: 0.32rem;
      }
    }
    .list {
      -webkit-overflow-scrolling: touch;
      overflow-x: scroll;
      overflow-y: hidden;
      height: 4.1333rem;
      width: 100%;
      padding-bottom: 0.2667rem;
      .scrool {
        padding: 0.4rem 0 0.32rem 0.4rem;
        height: 100%;
        width: 217.5%;
      }
      .teacherList {
        box-shadow: 0 0 0.16rem #ccc;
        height: 3.2rem;
        margin-right: 0.32rem;
        width: 2.3333rem;
        border-radius: 0.16rem;
        float: left;
        .img {
          margin-top: 0.3733rem;
          margin: 0.3733rem auto 0.3467rem auto;
          width: 1.36rem;
          height: 1.36rem;
          border-radius: 50%;
          overflow: hidden;
          img {
            width: 1.36rem;
            height: 1.36rem;
          }
        }
        .name {
          text-align: center;
          color: #666;
          font-size: 0.32rem;
        }
        .price {
          text-align: center;
          color: #666;
          font-size: 0.2667rem;
        }
      }
    }
  }
  .detailTab {
    .border-t(#dcdcdc,solid);
    height: 1.1733rem;
    .box {
      height: 100%;
      width: 49%;
      display: inline-block;
      font-size: 0.4rem;
      text-align: center;
      padding: 0 2rem 0.2667rem 2rem;
      font-weight: bold;
    }
    .text,
    .comment {
      margin-top: 0.4rem;
      height: 0.7467rem;
    }
    .active {
      color: #0dbbfb;
      border-bottom: 0.0533rem solid #0dbbfb;
    }
  }
  .detail {
    width: 100%;
    height: 100%;
    background-color: #fff;
    padding: 0 0.32rem 0.8rem 0.32rem;
    .border-t(#dcdcdc,solid);
    .time,
    .rprice,
    .dev,
    .service,
    .introduct {
      margin-top: 0.64rem;
      font-weight: normal;
    }
    overflow: hidden;
    .dtitle {
      width: 2.4rem;
      color: #333;
      font-size: 0.3733rem;
      padding-bottom: 0.1333rem;
      .border-b(black;solid);
    }
    .dshow {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      margin-top: 0.5333rem;
      color: #666;
      font-size: 0.32rem;
    }
    .dshowInt {
      display: -webkit-box;
      margin-top: 0.5333rem;
      color: #666;
      font-size: 0.32rem;
      text-overflow: -o-ellipsis-lastline;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 6;
      -webkit-box-orient: vertical;
    }
  }
  .bottom {
    div {
      float: left;
    }
    .border-t(#dcdcdc,solid);
    width: 100%;
    height: 1.3333rem;
    background-color: #fff;
    .repeat,
    .levelMessage {
      width: 20%;
      height: 100%;
      text-align: center;
      line-height: 1.32rem;
      text-align: center;
      font-size: 0.4rem;
    }
    .booking {
      font-size: 0.4rem;
      width: 60%;
      line-height: 1.32rem;
      color: #fff;
      text-align: center;
      background: -webkit-gradient(
        linear,
        left top,
        right top,
        from(#0cd0ff),
        to(#0caefe)
      );
      background: linear-gradient(to right, #0cd0ff, #0caefe);
    }
  }
}
</style>
