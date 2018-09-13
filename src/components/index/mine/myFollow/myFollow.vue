<template>
    <div class="myFollow">
        <myTitle text=关注助教 backRoute='userinfo'></myTitle>
        <div class="body">
            <div class="box">
                <div class="btn fr">
                    取消关注
                </div>
                <div class="img">
                    <div class="text">A+</div>
                    <div class="triangle"></div>
                    <img src="../../../../assets/daima2.gif" alt="">
                </div>
                <div class="right">
                    <div class="head">粤美特的大助教</div>
                    <div class="star">
                        周末-下午 15:00 - 18:00
                    </div>
                    <div class="position">
                        <i class="iconfont icon-dingwei"></i>
                        <div class="far">深圳市南山区粤美特桌球俱乐部( &lt; 500m )</div>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="follow fr"> 
                    关注
                </div>
                <div class="img">
                    <div class="text">B+</div>
                    <div class="triangle"></div>
                    <img src="../../../../assets/daima2.gif" alt="">
                </div>
                <div class="right">
                    <div class="head">粤美特的大助教</div>
                    <div class="star">
                        周末-下午 15:00 - 18:00
                    </div>
                    <div class="position">
                        <i class="iconfont icon-dingwei"></i>
                        <div class="far">深圳市南山区粤美特桌球俱乐部( &lt; 500m )</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
import myTitle from "../../../title/title";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    myTitle
  }
};
</script>

<style scoped lang="less">
@import "../../../../common/css/common.less";
.myFollow {
  width: 100%;
  .body {
    background-color: #fff;
    margin-top: 0.2667rem;
    .box {
      padding: 0.5333rem 0.32rem;
      .img {
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
        position: relative;
        float: left;
        width: 1.5733rem;
        height: 1.5733rem;
        border-radius: 0.1067rem;
        overflow: hidden;
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

        img {
          width: 100%;
          height: 100%;
        }
      }
      .right {
        margin-left: 1.867rem;
        color: #999;
        .head {
          color: #000;
          font-size: 0.4533rem;
          height: 0.4533rem;
        }
        .star {
          margin-top: 0.2667rem;
          height: 0.32rem;
          font-size: 0.32rem;
          position: relative;
          .fl {
            position: absolute;
            left: 2.1333rem;
            top: 0;
          }
        }
        .position {
          position: relative;
          i {
            position: absolute;
            top: 0rem;
            font-size: 0.3733rem;
            left: -0.0267rem;
          }
          .far {
            margin-left: 0.4rem;
          }
          margin-top: 0.2933rem;
          font-weight: 0.4267rem;
          height: 0.4267rem;
          line-height: 0.3733rem;
        }
      }
      .right2 {
        margin-left: 2.6937rem;
        color: #999;
        .head {
          color: #000;
          font-size: 0.4533rem;
          height: 0.4533rem;
        }
        .star {
          margin-top: 0.2667rem;
          height: 0.32rem;
          font-size: 0.32rem;
          position: relative;
          .fl {
            position: absolute;
            left: 2.1333rem;
            top: 0;
          }
        }
        .position {
          position: relative;
          i {
            position: absolute;
            top: 0rem;
            font-size: 0.3733rem;
            left: -0.0267rem;
          }
          .far {
            margin-left: 0.4rem;
          }
          margin-top: 0.2933rem;
          font-weight: 0.4267rem;
          height: 0.4267rem;
          line-height: 0.3733rem;
        }
      }
      .btn {
        border-radius: 0.1067rem;
        &::before {
          border-radius: 0.1067rem;
        }
        text-align: center;
        background-color: #fff;
        color: #0ac2fd;
        text-align: center;
        height: 0.72rem;
        line-height: 0.72rem;
        width: 1.9733rem;
        font-size: 0.3733rem;
        .border-all(#0ac2fd,solid);
      }
      .follow {
        overflow: hidden;
        border-radius: 0.1067rem;
        &::before {
          border-radius: 0.1067rem;
        }
        text-align: center;
        background-color: #0ac2fd;
        color: #fff;
        text-align: center;
        height: 0.72rem;
        line-height: 0.72rem;
        width: 1.9733rem;
        font-size: 0.3733rem;
      }
      .border-b(#dcdcdc,solid);
    }
  }
}
</style>
