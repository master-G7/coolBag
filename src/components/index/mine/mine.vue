<template>
  <div class="mine">
    <div class="title">
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
      <div class="wait-pay bgc">
        <div class="head h90">订单编号 1149512312
          <div class="type fr">待付款</div>
        </div>
        <div class="roomName h90">
          <span class="type-room border-type">球房</span>粤美特国际台球俱乐部</div>
        <div class="list-content h210">
          <div class="tableNum fl">中式1号桌
            <div class="list-price fr ">100.00元</div>
          </div>
          <div class="list-state fl">[未预约助教]</div>
          <div class="list-time fl">2018-07-13 15:00-16:00</div>
        </div>
        <div class="bottom-time h90 ">
          <div class='fr'>共3个时段, 实付款：￥150.00</div>
        </div>
        <div class="bootom h90">
          <div class="button-b fr">立即支付</div>
          <router-link to="comment">
            <div class="button-w fr">查看详情</div>
          </router-link>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      type: "room",
      biilType: "all"
    };
  },
  components: {},
};
</script>

<style scoped lang="less">
@import "../../../common/css/common.less";
.mine {
  width: 100%;
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
    margin-bottom: 0.2133rem;
    color: #666;
    .active {
      border-bottom: 0.08rem solid #0ccaff;
    }
  }
  .pay-list {
    width: 100%;
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
}
</style>
 