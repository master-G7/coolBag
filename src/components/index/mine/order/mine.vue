<template>
  <div class="mine">
    <div class="title">
      <router-link to="userinfo">
        <i class="iconfont icon-fanhui1 fl"></i>
      </router-link>
      我的订单
    </div>
    <div class="type-tab clearfix">
      <div class="fl" :class="type=='room'?'active':''" @click="type='room'">球房</div>
      <div class="fl" :class="type=='teach'?'active':''" @click="type='teach'">助教</div>
      <div class="fl" :class="type=='fight'?'active':''" @click="type='fight'">约战</div>
    </div>
    <div class="bill-tab ">
      <div class="fl " :class="biilType=='all'?'active':''" @click="biilType='all'">全部</div>
      <div class="fl " :class="biilType=='waitpay'?'active':''" @click="biilType='waitpay'">代付款</div>
      <div class="fl" :class="biilType=='paying'?'active':''" @click="biilType='paying'">进行中</div>
      <div class="fl" :class="biilType=='comment'?'active':''" @click="biilType='comment'">待评价</div>
    </div>
    <div class="pay-list">
      <detail gameType='room' payType='wait'></detail>
      <detail gameType='fight' payType='paying'></detail>
      <detail gameType='teach' payType='comment'></detail>
    </div>
  </div>
</template>

<script >
import detail from "./list-detail";
export default {
  data() {
    return {
      type: "room",
      biilType: "all"
    };
  },
  components: { detail }
};
</script>

<style scoped lang="less">
@import "../../../../common/css/common.less";
.mine {
  width: 100%;
  padding-bottom: 1.2rem;
  .bgc {
    width: 100%;
    background-color: #fff;
  }
  .title {
    width: 100%;
    padding: 0 0.32rem;
    background-color: #fff;
    height: 1.1733rem;
    text-align: center;
    font-size: 0.4rem;
    color: #666;
    font-weight: bold;
    line-height: 1.1733rem;
  }
  .type-tab {
    padding-left: 1.28rem;
    padding-top: 0.4rem;
    .active {
      color: #0dbbfb;
      .border-all(#0dbbfb,solid);
    }
    div {
      width: 1.9733rem;
      height: 0.64rem;
      line-height: 0.64rem;
      border-radius: 0.4rem;
      background-color: #fff;
      color: #666;
      text-align: center;
      margin-right: 0.7067rem;
      &:before {
        border-radius: 30px;
      }
      .border-all(#dcdcdc,solid);
    }
  }
  .bill-tab {
    padding: 0 0.32rem 0 0.64rem;
    width: 100%;
    line-height: 1.0933rem;
    height: 1.0933rem;
    display: flex;
    justify-content: space-between;
    text-align: center;
    background-color: #fff;
    margin-top: 0.4rem;
    color: #666;
    .active {
      border-bottom: 0.08rem solid #0ccaff;
    }
  }
}
</style>
 