<template>
    <div class="ballroom">
        <backtop></backtop>
        <div class="title">
            球房
        </div>
        <div class="sort">
            <p>全部</p>
            <p>价格</p>
            <p>距离</p>
        </div>
        <div class="content">
            <div class="left fl">
                <img src="../../../../static/tiaosheng.gif" alt="">
            </div>
            <div class="right">
                <div class="roomtitle fl">粤美特国际台球俱乐部
                    <span class="price fr">￥120/时</span>
                </div>
                <div class="star fl">
                    星星在这里
                    <span>人气 998</span>
                </div>
                <div class="position fl">
                    深圳市南山区粤美特桌球俱乐部(&lt;250m)
                </div>
            </div>
        </div>
        <div class="content">
            <div class="left fl">
                <img src="../../../../static/gogogo.gif" alt="">
            </div>
            <div class="right">
                <div class="roomtitle fl">粤美特国际台球俱乐部
                    <span class="price fr">￥120/时</span>
                </div>
                <div class="star fl">
                    星星在这里
                    <span>人气 998</span>
                </div>
                <div class="position fl">
                    深圳市南山区粤美特桌球俱乐部(&lt;250m)
                </div>
            </div>
        </div>
        <div class="content">
            <div class="left fl">
                <img src="../../../../static/konglong.png" alt="">
            </div>
            <div class="right">
                <div class="roomtitle fl">粤美特国际台球俱乐部
                    <span class="price fr">￥120/时</span>
                </div>
                <div class="star fl">
                    星星在这里
                    <span>人气 998</span>
                </div>
                <div class="position fl">
                    深圳市南山区粤美特桌球俱乐部(&lt;250m)
                </div>
            </div>
        </div>
        <div class="content">
            <div class="left fl">
                <img src="../../../../static/tiaowu.gif" alt="">
            </div>
            <div class="right">
                <div class="roomtitle fl">粤美特国际台球俱乐部
                    <span class="price fr">￥120/时</span>
                </div>
                <div class="star fl">
                    星星在这里
                    <span>人气 998</span>
                </div>
                <div class="position fl">
                    深圳市南山区粤美特桌球俱乐部(&lt;250m)
                </div>
            </div>
        </div>
        <div class="content">
            <div class="left fl">
                <img src="../../../../static/xuexi.gif" alt="">
            </div>
            <div class="right">
                <div class="roomtitle fl">粤美特国际台球俱乐部
                    <span class="price fr">￥120/时</span>
                </div>
                <div class="star fl">
                    星星在这里
                    <span>人气 998</span>
                </div>
                <div class="position fl">
                    深圳市南山区粤美特桌球俱乐部(&lt;250m)
                </div>
            </div>
        </div>
        <div class="content">
            <div class="left fl">
                <img src="../../../../static/daima.jpg" alt="">
            </div>
            <div class="right">
                <div class="roomtitle fl">粤美特国际台球俱乐部
                    <span class="price fr">￥120/时</span>
                </div>
                <div class="star fl">
                    星星在这里
                    <span>人气 998</span>
                </div>
                <div class="position fl">
                    深圳市南山区粤美特桌球俱乐部(&lt;250m)
                </div>
            </div>
        </div>
        <div class="content">
            <div class="left fl">
                <img src="../../../../static/daima2.gif" alt="">
            </div>
            <div class="right">
                <div class="roomtitle fl">粤美特国际台球俱乐部
                    <span class="price fr">￥120/时</span>
                </div>
                <div class="star fl">
                    星星在这里
                    <span>人气 998</span>
                </div>
                <div class="position fl">
                    深圳市南山区粤美特桌球俱乐部(&lt;250m)
                </div>
            </div>
        </div>
    </div>
</template>

<script >
import backtop from "../../../components/backto-top/backToTop.vue";
export default {
  data() {
    return {};
  },
  components: {
    backtop
  }
};
</script>

<style scoped lang="less">
@import "../../../common/css/common.less";

.ballroom {
  .title {
    background-color: #fff;
    height: 88px;
    text-align: center;
    font-size: 30px;
    color: #666;
    font-weight: bold;
    line-height: 88px;
  }
  .sort {
    margin-top: 20px;
    height: 80px;
    background-color: #fff;
    display: flex;
    .border-1pxTop(#dcdcdc,solid);
    p {
      width: 100%;
      text-align: center;
      line-height: 80px;
      font-size: 28px;
    }
  }
  .content {
    height: 200px;
    padding: 40px 24px;
    background-color: #fff;
    border-top: 1px solid #dcdcdc;
    .left {
      width: 120px;
      height: 120px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 6px;
      }
    }
    .right {
      margin-left: 140px;
      .roomtitle {
        width: 100%;
        font-size: 32px;
        font-weight: bold;
        color: #333;
        .price {
          color: #fd3d39;
          font-size: 34px;
          font-weight: normal;
        }
      }
      .star {
        width: 100%;
        height: 100%;
        color: #999;
      }
      .position {
        font-size: 28px;
        width: 100%;
        color: #999;
      }
    }
  }
}
</style>
