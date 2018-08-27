<template>
    <div class="hotList">
        <div class="title">
            <span>全部
                <i class="iconfont icon-xialajiantou"></i>
            </span>
            <span>类型
                <i class="iconfont icon-xialajiantou"></i>
            </span>
            <span>发布时间
                <i class="iconfont icon-xialajiantou"></i>
            </span>
            <span>距离
                <i class="iconfont icon-xialajiantou"></i>
            </span>
        </div>
        <router-link :to='{path:"/bookinginfo"}'>
            <div class="content">
                <div class="info">
                    <div class="left fl">
                        <img src="../../../static/tuomasi.gif" alt="">
                    </div>
                    <div class="right">
                        <div class="roomtitle fl">超级无敌厉害的桌球小可爱
                            <span class='fr'>助教</span>
                        </div>
                        <div class="star fl">
                            <div class="fl instar"><star :size='24' :score='3.9'></star></div>
                            <span>229m|1天前</span>
                        </div>
                        <div class="priceinfo fl">
                            <div class="pay fl">【台费支付】发起人付</div>
                            <div class="price fr">￥120/时</div>
                        </div>
                    </div>
                </div>
                <div class="position fl">
                    <div class="time fl">
                        <i class="iconfont icon-shijian"></i>
                        打球时间：2018-06-25 19:00-21:00
                        <span class="tip fr">已有一人应约</span>
                    </div>
                    <div class="place fl">
                        <i class="iconfont icon-dingwei"></i>
                        打球场馆：粤美特桌球俱乐部
                    </div>
                </div>
            </div>
        </router-link>
        <div class="content">
            <div class="info">
                <div class="left fl">
                    <img src="../../../static/tuomasi.gif" alt="">
                </div>
                <div class="right">
                    <div class="roomtitle fl">超级无敌厉害的桌球小可爱
                        <span class='fr'>助教</span>
                    </div>
                    <div class="star fl"><div class="fl instar"><star :size='24' :score='4.9'></star></div>
                        <span>229m|1天前</span>
                    </div>
                    <div class="priceinfo fl">
                        <div class="pay fl">【台费支付】发起人付</div>
                        <div class="price fr">￥120/时</div>
                    </div>
                </div>
            </div>
            <div class="position fl">
                <div class="time fl">
                    <i class="iconfont icon-shijian"></i>
                    &nbsp;打球时间：2018-06-25 19:00-21:00
                    <span class="tip fr">已有一人应约</span>
                </div>
                <div class="place fl">
                    <i class="iconfont icon-dingwei"></i>
                    &nbsp;打球场馆：粤美特桌球俱乐部
                </div>
            </div>
        </div>
        <div class="content">
            <div class="info">
                <div class="left fl">
                    <img src="../../../static/xuexi.gif" alt="">
                </div>
                <div class="right">
                    <div class="roomtitle fl">超级无敌厉害的桌球小可爱
                        <span class='fr'>助教</span>
                    </div>
                    <div class="star fl"><div class="fl instar"><star :size='24' :score='2.9'></star></div>
                        <span>229m|1天前</span>
                    </div>
                    <div class="priceinfo fl">
                        <div class="pay fl">【台费支付】发起人付</div>
                        <div class="price fr">￥120/时</div>
                    </div>
                </div>
            </div>
            <div class="position fl">
                <div class="time fl">打球时间：2018-06-25 19:00-21:00
                    <span class="tip fr">已有一人应约</span>
                </div>
                <div class="place fl">打球场馆：粤美特桌球俱乐部</div>
            </div>
        </div>
        <div class="content">
            <div class="info">
                <div class="left fl">
                    <img src="../../../static/konglong.png" alt="">
                </div>
                <div class="right">
                    <div class="roomtitle fl">超级无敌厉害的桌球小可爱
                        <span class='fr'>助教</span>
                    </div>
                    <div class="star fl"><div class="fl instar"><star :size='24' :score='1.9'></star></div>
                        <span>229m|1天前</span>
                    </div>
                    <div class="priceinfo fl">
                        <div class="pay fl">【台费支付】发起人付</div>
                        <div class="price fr">￥120/时</div>
                    </div>
                </div>
            </div>
            <div class="position fl">
                <div class="time fl">打球时间：2018-06-25 19:00-21:00
                    <span class="tip fr">已有一人应约</span>
                </div>
                <div class="place fl">打球场馆：粤美特桌球俱乐部</div>
            </div>
        </div>
        <div class="content">
            <div class="info">
                <div class="left fl">
                    <img src="../../../static/tiaowu.gif" alt="">
                </div>
                <div class="right">
                    <div class="roomtitle fl">超级无敌厉害的桌球小可爱
                        <span class='fr'>助教</span>
                    </div>
                    <div class="star fl"><div class="fl instar"><star :size='24' :score='5'></star></div>
                        <span>229m|1天前</span>
                    </div>
                    <div class="priceinfo fl">
                        <div class="pay fl">【台费支付】发起人付</div>
                        <div class="price fr">￥120/时</div>
                    </div>
                </div>
            </div>
            <div class="position fl">
                <div class="time fl">打球时间：2018-06-25 19:00-21:00
                    <span class="tip fr">已有一人应约</span>
                </div>
                <div class="place fl">打球场馆：粤美特桌球俱乐部</div>
            </div>
        </div>
        <div class="content">
            <div class="info">
                <div class="left fl">
                    <img src="../../../static/daima2.gif" alt="">
                </div>
                <div class="right">
                    <div class="roomtitle fl">超级无敌厉害的桌球小可爱
                        <span class='fr'>助教</span>
                    </div>
                    <div class="star fl">星星在这里
                        <span>229m|1天前</span>
                    </div>
                    <div class="priceinfo fl">
                        <div class="pay fl">【台费支付】发起人付</div>
                        <div class="price fr">￥120/时</div>
                    </div>
                </div>
            </div>
            <div class="position fl">
                <div class="time fl">打球时间：2018-06-25 19:00-21:00
                    <span class="tip fr">已有一人应约</span>
                </div>
                <div class="place fl">打球场馆：粤美特桌球俱乐部</div>
            </div>
        </div>
        <div class="content">
            <div class="info">
                <div class="left fl">
                    <img src="../../../static/gogogo.gif" alt="">
                </div>
                <div class="right">
                    <div class="roomtitle fl">超级无敌厉害的桌球小可爱
                        <span class='fr'>助教</span>
                    </div>
                    <div class="star fl">星星在这里
                        <span>229m|1天前</span>
                    </div>
                    <div class="priceinfo fl">
                        <div class="pay fl">【台费支付】发起人付</div>
                        <div class="price fr">￥120/时</div>
                    </div>
                </div>
            </div>
            <div class="position fl">
                <div class="time fl">打球时间：2018-06-25 19:00-21:00
                    <span class="tip fr">已有一人应约</span>
                </div>
                <div class="place fl">打球场馆：粤美特桌球俱乐部</div>
            </div>
        </div>
        <div class="content">
            <div class="info">
                <div class="left fl">
                    <img src="../../../static/daima.jpg" alt="">
                </div>
                <div class="right">
                    <div class="roomtitle fl">超级无敌厉害的桌球小可爱
                        <span class='fr'>助教</span>
                    </div>
                    <div class="star fl">星星在这里
                        <span>229m|1天前</span>
                    </div>
                    <div class="priceinfo fl">
                        <div class="pay fl">【台费支付】发起人付</div>
                        <div class="price fr">￥120/时</div>
                    </div>
                </div>
            </div>
            <div class="position fl">
                <div class="time fl">打球时间：2018-06-25 19:00-21:00
                    <span class="tip fr">已有一人应约</span>
                </div>
                <div class="place fl">打球场馆：粤美特桌球俱乐部</div>
            </div>
        </div>
    </div>
</template>

<script >
import star from '../star/star'
export default {
  data() {
    return {};
  },
  components: {
      star
  }
};
</script>

<style scoped lang="less">
@import "../../common/css/common.less";
.hotList {
  box-sizing: border-box;
  margin-top: 0.2667rem;
  height: 100%;
  background-color: #fff;
  .title {
    height: 1.0667rem;
    display: flex;
    .border-1pxTop(#dcdcdc,solid);
    span {
      width: 100%;
      text-align: center;
      line-height: 1.0667rem;
      display: block;
      i {
        color: #999;
        position: relative;
        top: -0.0267rem;
        font-size: 0.2133rem;
      }
    }
  }
  .content {
    padding: 0 0.3333rem;
    height: 4.1333rem;
    // border-top: 0.0133rem solid #dcdcdc;/*no*/
    .border-1pxTop(#dcdcdc,solid);
  }
  .position {
    padding: 0.2667rem 0 0.5333rem 0;
    color: black;
    i {
      font-size: 0.3733rem;
      display: inline-block;
      position: relative;
      top: 0.0267rem;
    }
    height: 1.68rem;
    .time {
      width: 100%;
    }
    .tip {
      font-size: 0.2667rem;
    }
  }
  .info {
    height: 2.4rem;
    padding: 0.5333rem 0 0.2667rem 0;
    // border-bottom: 0.0133rem dashed #dcdcdc;
    .border-1pxTop(#dcdcdc,dashed);
    .left {
      width: 1.6rem;
      height: 1.6rem;
      img {
        border-radius: 0.08rem;
        width: 100%;
        height: 100%;
      }
    }
    .right {
      margin-left: 1.8667rem;
      .roomtitle {
        font-size: 0.4267rem;
        font-weight: bold;
        color: #333;
        span {
          border: 0.0133rem solid #ff9120;
          width: 0.8rem;
          height: 0.4rem;
          text-align: center;
          line-height: 0.4rem;
          font-size: 0.2933rem;
          font-weight: normal;
          color: #ff9120;
          margin-left: 0.16rem;
          border-radius: 0.08rem;
        }
      }
      .star {
        width: 100%;
        height: 100%;
        color: #999;
        .instar{
            margin-right: 0.1333rem;
        }
        span {
          font-size: 0.2667rem;
          margin-left: 0.1333rem;
        }
      }
      .priceinfo {
        width: 100%;
        color: #999;
        font-size: 0.32rem;
        text-indent: -0.1067rem;
        .price {
          color: #fd3d39;
          font-size: 0.4533rem;
        }
      }
    }
  }
}
</style>
