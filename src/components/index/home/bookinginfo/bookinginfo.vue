<template>
  <div class="bookinginfo">
    <div class="title">
      <router-link to="/home">
        <i class="iconfont icon-fanhui fl"></i>
      </router-link>
      预约信息
    </div>
    <div class="detail">
      <div class="content">
        <div class="info">
          <div class="left fl">
            <img src="../../../../../static/tuomasi.gif" alt="">
          </div>
          <div class="right ">
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
      <div class="bookingdetail">
        <div class="book">

        </div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {};
  },
  components: {}
};
</script>

<style scoped lang="less">
@import "../../../../common/css/common.less";
.bookinginfo {
  .title {
    padding: 0 0.32rem;
    i {
      display: inline-block;
      width: 0.5333rem;
      height: 0.5333rem;
      font-size: 0.5333rem;
      color: #666;
    }
    background-color: #fff;
    height: 1.1733rem;
    text-align: center;
    font-size: 0.4rem;
    color: #666;
    font-weight: bold;
    line-height: 1.1733rem;
  }
  .detail {
    margin-top: 0.32rem;
    height: 100%;
    width: 100%;
    background-color: #fff;
    .content {
      padding: 0 0.3333rem;
      height: 4.1333rem;
      .position {
        padding: 0.2667rem 0 0.5333rem 0;
        color: black;
        i {
          width: 0.4rem;
          height: 0.4rem;
          font-size: 0.3733rem;
          display: inline-block;
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
    .bookingdetail {
      height:12.1333rem;
      background-color: #fff;
      padding: 0 0.32rem;
      .book{
      box-shadow: 0 0 0.2667rem #ccc;
      border-radius: 0.2667rem;
      height: 9.4667rem;
      }

    }
  }
}
</style>
