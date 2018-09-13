<template>
  <div class="userinfo">
    <div class="top">
      <div class="userimg"><img src="../../../../static/konglong.png" alt=""></div>
      <div class="username ">陈小皮的幸福生活</div>
    </div>
    <div class="userTab clearfix">
      <div class="w33 fl br">
        <div class="remaining">200000.00元</div>
        <div class="sort">余额</div>
      </div>
      <div class="w33 fl br">
        <div class="remaining">9800.56个</div>
        <div class="sort">酷币</div>
      </div>
      <div class="w33 fl">
        <div class="remaining">3张</div>
        <div class="sort">优惠券</div>
      </div>
    </div>
    <div class="alltab">
      <div class="tab-row">
        <div class="w25 fl">
          <img src="../../../assets/userinfo/bangding.png" alt="">
          <div class="text">绑定手机</div>
        </div>
        <div class="w25 fl">
          <img src="../../../assets/userinfo/chongzhi.png" alt="">
          <div class="text">余额充值</div>
        </div>
        <div class="w25 fl">
          <img src="../../../assets/userinfo/tixian.png" alt="">
          <div class="text">余额提现</div>
        </div>
        <div class="w25 fl">
          <img src="../../../assets/userinfo/yinghangka.png" alt="">
          <div class="text">银行卡</div>
        </div>
      </div>
      <div class="tab-row">
        <div class="w25 fl">
          <img src="../../../assets/userinfo/shouzhi.png" alt="">
          <div class="text">收支记录</div>
        </div>
        <router-link to="mybook">
          <div class="w25 fl">
            <img src="../../../assets/userinfo/yuyue.png" alt="">
            <div class="text">我的预约</div>
          </div>
        </router-link>
        <router-link to="order">
          <div class="w25 fl">
            <img src="../../../assets/userinfo/dingdan.png" alt="">
            <div class="text">我的订单</div>
          </div>
        </router-link>
        <div class="w25 fl">
          <img src="../../../assets/userinfo/tuikuan.png" alt="">
          <div class="text">退款/售后</div>
        </div>
      </div>
      <div class="tab-row">
        <router-link to="myService">
          <div class="w25 fl">
            <img src="../../../assets/userinfo/fuwu.png" alt="">
            <div class="text">我的服务</div>
          </div>
        </router-link>
        <router-link to="mylike">
          <div class="w25 fl">
            <img src="../../../assets/userinfo/shoucang.png" alt="">
            <div class="text">我的收藏</div>
          </div>
        </router-link>
        <router-link to="myFollow">
        <div class="w25 fl">
          <img src="../../../assets/userinfo/guanzhu.png" alt="">
          <div class="text">我的关注</div>
        </div>
        </router-link>
        <div class="w25 fl">
          <img src="../../../assets/userinfo/qiufang.png" alt="">
          <div class="text">球房管理</div>
        </div>
      </div>
      <div class="tab-row">
        <div class="w25 fl">
          <img src="../../../assets/userinfo/xiugai.png" alt="">
          <div class="text">修改资料</div>
        </div>
        <div class="w25 fl">
          <img src="../../../assets/userinfo/kefu.png" alt="">
          <div class="text">联系客服</div>
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
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
@import "../../../common/css/common.less";
.userinfo {
  width: 100%;
  padding-bottom: 1.2rem;
  .top {
    position: relative;
    height: 4.64rem;
    background-image: url("../../../assets/userinfo/my_bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding-top: 0.8rem;
    .userimg {
      img {
        display: block;
        width: 1.7333rem;
        margin: 0 auto;
        height: 1.7333rem;
        border-radius: 50%;
      }
    }
    .username {
      margin-top: 0.4667rem;
      color: #ffffff;
      font-size: 0.4rem;
      text-align: center;
    }
  }
  .w33 {
    width: 33.333%;
    height: 100%;
  }
  .w25 {
    width: 25%;
    text-align: center;
  }
  .br {
    .border-r(#dcdcdc,solid);
  }
  .userTab {
    width: 100%;
    margin-top: 0.2667rem;
    background-color: #fff;
    height: 1.9333rem;
    padding: 0.3733rem 0;
    text-align: center;
    color: #333;
    .remaining {
      margin-bottom: 0.4rem;
      font-size: 0.32rem;
    }
  }
  .alltab {
    margin-top: 0.2667rem;
    background-color: #fff;
    .tab-row {
      height: 1.8667rem;
      padding-top: 0.3733rem;
      .w25 {
        img {
          width: 0.6667rem;
          height: 0.6667rem;
          display: block;
          margin: 0 auto;
        }
        .text {
          margin-top: 0.2rem;
          font-size: 0.32rem;
          color: #333;
        }
      }
    }
  }
}
</style>
