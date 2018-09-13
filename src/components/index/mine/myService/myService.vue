<template>
  <div class="myService">
    <myTitle text='我的服务' backRoute='userinfo'></myTitle>
    <div class="bg">
      <div class="userimg "><img class='fl' src="../../../../../static/konglong.png" alt="">
        <div class="text">
          <div class="username">陈小皮的幸福生活</div>
          <div class="hot">人气：998</div>
        </div>
      </div>
    </div>
    <div class="statistics">
      <div class="half fl br">
        <div class="up">助教次数</div>
        <div class="down">530</div>
      </div>
      <div class="half fl">
        <div class="up">总收入(元)</div>
        <div class="down">6698800.00</div>
      </div>
    </div>
    <div class="colTab">
      <div class="cell">
        <router-link to="trainerRecord">
          <div class="icon fl rcd"></div>
          <div class="text">助教记录</div>
        </router-link>
      </div>
      <router-link to="trainerInfo">
        <div class="cell">
          <div class="icon fl pub"></div>
          <div class="text">发布服务</div>
        </div>
      </router-link>
      <router-link to="signing">
        <div class="cell">
          <div class="icon fl sign"></div>
          <div class="text">签约球房</div>
        </div>
      </router-link>
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
.myService {
  width: 100%;
  .bg {
    padding: 0 0.32rem;
    padding-top: 0.6667rem;
    width: 100%;
    height: 2.9333rem;
    background-image: url("../../../../assets/userinfo/my_bg.png");
    background-repeat: no-repeat;
    background-size: cover;
    .userimg {
      img {
        width: 1.7333rem;
        height: 1.7333rem;
        border-radius: 50%;
      }
      .text {
        padding-top: 0.5066rem;
        padding-left: 2.0667rem;
        color: #fff;
        .hot {
          margin-top: 0.1867rem;
          font-size: 0.2933rem;
        }
      }
    }
  }
  .statistics {
    background-color: #fff;
    height: 1.9333rem;
    padding: 0.3733rem 0.32rem;
    text-align: center;
    .br {
      .border-r(#dcdcdc,solid);
    }
    .half {
      width: 50%;
      .down {
        margin-top: 0.3733rem;
        font-weight: bold;
        font-size: 0.32rem;
      }
    }
  }
  .colTab {
    margin-top: 0.2667rem;
    background-color: #fff;
    .cell {
      padding: 0.32rem;
      line-height: 1.0134rem;
      height: 1.6rem;
      .rcd {
        .bg-image("../../assets/service/zhujiao");
      }
      .pub {
        .bg-image("../../assets/service/fabufuwu");
      }
      .sign {
        .bg-image("../../assets/service/qiufang");
      }
      .icon {
        background-repeat: no-repeat;
        background-size: cover;
        width: 0.9867rem;
        height: 0.9867rem;
        border-radius: 50%;
        overflow: hidden;
      }
      .text {
        margin-left: 1.2rem;
      }
      .border-b(#dcdcdc,solid);
    }
  }
}
</style>
