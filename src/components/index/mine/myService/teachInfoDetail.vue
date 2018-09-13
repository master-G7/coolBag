<template>
    <div class="teachInfoDetail">
        <myTitle text='预约信息' backRoute='trainerInfo'></myTitle>
        <div class="content">
            <div class="info">
                <div class="left fl">
                    <div class="text">高手</div>
                    <div class="triangle">
                    </div>
                    <img src="../../../../assets/daima.jpg" alt="">
                </div>
                <div class="right">
                    <div class="roomtitle fl">超级无敌厉害的桌球小可爱
                        <span class='fr'>助教</span>
                    </div>
                    <div class="star fl">
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
        <div class="choosebox">
            <div class="head">1人已应约</div>
            <div class="box">
                <div class="left">
                    <img src="../../../../assets/daima2.gif" alt="">
                </div>
                <div class="right">
                    <div class="up">
                        <div class="fl">
                            桌球哈巴狗
                            <div class="name">球手</div>
                        </div>
                        <div class="fr">200m | 两天前 </div>
                    </div>
                    <div class="middle">彭于晏 13888888888</div>
                    <div class="msg">我是彭于晏,我最帅。</div>
                    <div class="chooseBtn">选择</div>
                </div>
            </div>
        </div>
        <div class="choosebox">
            <div class="head">1人已应约</div>
            <div class="box">
                <div class="left">
                    <img src="../../../../assets/daima2.gif" alt="">
                </div>
                <div class="right">
                    <div class="up">
                        <div class="fl">
                            桌球哈巴狗
                            <div class="name">球手</div>
                        </div>
                        <div class="fr">200m | 两天前 </div>
                    </div>
                    <div class="middle">彭于晏 13888888888</div>
                    <div class="msg">我是彭于晏,我最帅。</div>
                    <div class="choosed ">已选择</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
import myTitle from "../../../title/title";
import list from "../../../index-list/list";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    myTitle,
    list
  }
};
</script>

<style scoped lang="less">
@import "../../../../common/css/common.less";
.teachInfoDetail {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #fff;
  .content {
    padding: 0 0.3333rem;
    height: 4.1333rem;
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
        position: relative;
        .triangle {
          position: absolute;
          top: 0;
          right: 0;
          width: 0;
          height: 0;
          border-top-right-radius: 0.08rem;
          border-style: solid;
          border-width: 0 0.6667rem 0.5334rem 0;
          border-color: transparent #fa5c41 transparent transparent;
        }
        .text {
          position: absolute;
          top: 0.04rem;
          right: 0;
          font-weight: bold;
          color: #fff;
          font-size: 0.2133rem;
          z-index: 1;
          -webkit-transform: rotate(38deg);
          -moz-transform: rotate(38deg);
        }
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
          .instar {
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
  .choosebox {
    padding: 0 0.32rem 0.5333rem 0.32rem;
    background-color: #fff;
    .head {
      color: #666;
      font-size: 0.3467rem;
    }
    .box {
      margin-top: 0.2667rem;
      box-shadow: 0 0 0.1733rem #ccc;
      width: 100%;
      height: 2.5333rem;
      padding: 0.3733rem 0.32rem;
      position: relative;
      color: #666;
      .left {
        float: left;
        img {
          width: 1.04rem;
          height: 1.04rem;
          border-radius: 50%;
        }
      }
      .right {
        margin-left: 1.4134rem;
        .up {
          height: 0.4533rem;
          .fl {
            color: black;
            font-size: 0.4rem;
            .name {
              display: inline-block;
              text-align: center;
              color: #0cbffd;
              width: 0.7733rem;
              height: 0.3733rem;
              font-size: 0.2667rem;
              border-radius: 0.1067rem;
              &::before {
                border-radius: 0.1067rem;
              }
              .border-all(#0cbffd,solid);
            }
          }
          .fr {
            font-size: 0.2667rem;
            color: #999;
          }
        }
        .middle {
          margin-top: 0.2667rem;
          height: 0.32rem;
          font-size: 0.32rem;
        }
        .msg {
          margin-top: 0.2667rem;
          font-size: 0.32rem;
        }
        .chooseBtn {
          position: absolute !important;
          right: 0.32rem;
          bottom: 0.4rem;
          width: 1.5733rem;
          height: 0.72rem;
          color: #0cbffd;
          border-radius: 0.1067rem;
          text-align: center;
          line-height: 0.72rem;
          &::before {
            border-radius: 0.1067rem;
          }
          .border-all(#0cbffd,solid);
        }
        .choosed {
          position: absolute !important;
          right: 0.32rem;
          bottom: 0.4rem;
          width: 1.5733rem;
          height: 0.72rem;
          color: #999;
          border-radius: 0.1067rem;
          text-align: center;
          line-height: 0.72rem;
          &::before {
            border-radius: 0.1067rem;
          }
          .border-all(#999,solid);
        }
      }
    }
  }
}
</style>

