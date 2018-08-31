<template>
  <div class="lits-detail">
    <div class="pay-list">
      <div class="wait-pay bgc">
        <div class="head h90">订单编号 1149512312
          <div class="type fr" v-if="payType=='wait'">待付款</div>
          <div class="type fr" v-else-if="payType=='paying'">进行中</div>
          <div class="type fr" v-else-if="payType=='comment'">待评价</div>
        </div>
        <div class="roomName h90">
          <span class="type-room border-type" v-if="gameType == 'room'">球房</span>
          <span class="type-teach border-type" v-else-if="gameType == 'teach'">助教</span>
          <span class="type-fight border-type" v-else-if="gameType == 'fight'">球手</span>
          粤美特国际台球俱乐部</div>
        <div class="list-content h210" v-if="gameType == 'room'">
          <div class="tableNum fl">中式1号桌
            <div class="list-price fr ">100.00元</div>
          </div>
          <div class="list-state fl" v-if="isteache == false">[未预约助教]</div>
          <div class="list-state fl" v-else>助教:丁俊晖</div>
          <div class="list-time fl">2018-07-13 15:00-16:00</div>
        </div>
        <div class="list-content h210" v-if="gameType == 'teach'">
          <div class="tableNum fl">中式1号桌
          </div>
          <div class="list-state fl">粤美特国际桌球俱乐部</div>
          <div class="list-time fl">2018-07-13 15:00-16:00</div>
        </div>
        <div class="list-content h210" v-if="gameType == 'fight'">
          <div class="tableNum fl">中式1号桌
            <div class="list-price fr ">(输家付)100.00元</div>
          </div>
          <div class="list-state fl">粤美特国际桌球俱乐部</div>
          <div class="list-time fl">2018-07-13 15:00-16:00</div>
        </div>
        <div class="bottom-time h90 ">
          <div class='fr'>共3个时段, 实付款：￥150.00</div>
        </div>
        <div class="bootom h90" v-if="payType=='wait'">
          <router-link to="pay">
            <div class="button-b fr">立即支付</div>
          </router-link>
          <div class="button-w fr">查看详情</div>
        </div>
        <div class="bootom h90" v-if="payType=='comment'">
          <router-link to="comment">
            <div class="button-b fr">评价晒单</div>
          </router-link>
          <div class="button-w fr">查看详情</div>
        </div>
        <div class="bootom h90" v-if="payType=='paying'">
          <div class="button-b fr">确认完成</div>
          <div class="button-w fr">查看详情</div>
        </div>

      </div>
    </div>
  </div>
</template>

<script >
export default {
  props: {
    gameType: String,
    payType: String,
    isteache: Boolean
  },
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
@import "../../../common/css/common.less";
.bgc {
  width: 100%;
  background-color: #fff;
}
.pay-list {
  margin-top: 0.2133rem;
  width: 100%;
  .type {
    color: #0cbfff;
  }
  .h90 {
    padding: 0 0.32rem;
    height: 1.2rem;
    line-height: 1.2rem;
    .border-b(#dcdcdc,solid);
  }
  .h210 {
    width: 100%;
    padding: 0 0.32rem;
    line-height: 2.8rem;
    height: 2.8rem;
    .border-b(#dcdcdc,solid);
  }

  .border-type {
    display: inline-block;
    width: 0.8rem;
    height: 0.4rem;
    border-radius: 0.1067rem;
    text-align: center;
    font-size: 0.2933rem;
    line-height: 0.44rem;
    margin-right: 0.1333rem;
    &:before {
      border-radius: 8px;
    }
  }
  .type-room {
    color: #fb5b44;
    .border-all( #fb5b44,solid);
  }
  .type-teach {
    color: #ff9120;
    .border-all( #ff9120   ,solid);
  }
  .type-fight {
    color: #0cbfff;
    .border-all( #0cbfff,solid);
  }
  .list-content {
    .tableNum {
      width: 100%;
      height: 1.3333rem;
      line-height: 1.3333rem;
    }
  }
  .list-state {
    color: #666;
    height: 0.4rem;
    line-height: 0.4rem;
    width: 100%;
    font-size: 0.3733rem;
  }
  .list-time {
    font-size: 0.2933rem;
    line-height: 1.0667rem;
    height: 1.0667rem;
    color: #666;
  }
  .button-w {
    width: 2rem;
    margin-top: 0.2133rem;
    height: 0.7467rem;
    line-height: 0.7467rem;
    text-align: center;
    background-color: #fff;
    color: #0ccaff;
    margin-left: 0.2667rem;
    &:before {
      border-radius: 8px;
    }
    .border-all(#0ccaff,solid);
  }
  .button-b {
    width: 2rem;
    margin-top: 0.2133rem;
    height: 0.7467rem;
    line-height: 0.7467rem;
    text-align: center;
    background-color: #0ccaff;
    color: #fff;
    margin-left: 0.2667rem;
    border-radius: 0.1067rem;
  }
}
</style>
