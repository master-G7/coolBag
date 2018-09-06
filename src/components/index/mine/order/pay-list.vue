<template>
  <div class="pay-list">
    <div class="title">
      我的订单
    </div>
    <div class="count-down">请在{{minute}}分{{second}}秒内完成支付</div>
    <div class="detail ">
      <div class="head h90">请认真核对订单信息</div>
      <div class="room h90">
        <div class="fl">球房：</div>
        <div class="fr roomname">粤美特国际台球俱乐部</div>
      </div>
      <div class="h90">预定详情</div>
      <div class="h210 listDal">
        <div class="top">
          <div class="fl">中式01号桌</div>
          <div class="fr">100.00元</div>
        </div>
        <div class="middle ps">[未预约助教]</div>
        <div class="time">2018-07-13 15:00-16:00</div>
      </div>
      <div class="h210 listDal">
        <div class="top">
          <div class="fl">中式01号桌</div>
          <div class="fr">100.00元</div>
        </div>
        <div class="middle ps">[未预约助教]</div>
        <div class="time">2018-07-13 15:00-16:00</div>
      </div>
      <div class="bottom h90">
        <div class="fr ml20">实付款：
          <div class="red fr">￥100.00</div>
        </div>
        <div class="fr">共3个时段</div>
      </div>
    </div>
    <div class="pay-type">
      <div class="h90 head"> 请选择支付方式</div>
      <div class="h122">
        <div class="left">
          <div class="bgi coolB fl"></div>
          <div class="fl f30">余额支付</div>
          <div class="fr">
            <div class="type">
              <span class="radio" v-show="payType!='coolb'">
              </span>
              <i class="iconfont icon-xuanzhong" v-show="payType=='coolb'"></i>
              <input v-model="payType" value="coolb" class="input-radio" type="radio">
            </div>
          </div>
        </div>
      </div>
      <div class="h122">
        <div class="left">
          <div class="bgi wechat fl"></div>
          <div class="fl f30">微信支付</div>
          <div class="fr">
            <div class="type">
              <span class="radio" v-show="payType!='wechat'">
              </span>
              <i class="iconfont icon-xuanzhong" v-show="payType=='wechat'"></i>
              <input v-model="payType" value="wechat" class="input-radio" type="radio">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="p24">
    <div class="cfmbtn" @click='pay'>
      立即支付
    </div>
    </div>
  </div>
</template>

<script >
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      second: 0,
      minute: 20,
      payType: "coolb"
    };
  },
  methods: {
    countDown() {
      let go = setInterval(() => {
        if (this.second > 0 && this.second < 60) {
          this.second -= 1;
        } else if (this.second == 0) {
          this.second = 60;
          this.second -= 1;
          this.minute -= 1;
          if (this.minute < 0) {
            this.second = 0;
            this.minute = 0;
            clearInterval(go);
          }
        }
      }, 1000);
    },
    pay() {
      MessageBox({
        title: '预订成功',
         message: '商家恭候您准时到店打球!<br>球台最长可延迟30分钟开始计费,<br>请留意您收到的球房预定短信',
         confirmButtonText:'订单列表',
         confirmButtonClass:'cfm-pay',
         cancelButtonText:'返回首页',
         showCancelButton:true,
      }).then(action => {
        if(action=='cancel'){
          this.$router.push({
            path:'/home'
          })
        }
})
    }
  },
  components: {},
  mounted() {
    this.countDown();
  }
};
</script>

<style scoped lang="less">
@import "../../../../common/css/common.less";
.pay-list {
  width: 100%;
  .f30 {
    font-size: 0.4rem;
  }
  .bottom-btn {
    width: 9.36rem;
    height: 1.1733rem;
    color: #fff;
    background-color: #0bc0fe;
    text-align: center;
    line-height: 1.1733rem;
    margin: 0.32rem;
    border-radius: 0.1067rem;
    font-size: 0.4rem;
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
  .count-down {
    width: 100%;
    height: 0.96rem;
    color: #fff;
    text-align: center;
    line-height: 0.96rem;
    background-color: #a9daeb;
  }
  .h90 {
    padding: 0 0.32rem;
    height: 1.2rem;
    line-height: 1.2rem;
    .border-b(#dcdcdc,solid);
  }
  .p24 {
    padding: 0 0.32rem;
  }
  .ml20 {
    margin-left: 0.2667rem;
  }
  .h122 {
    width: 100%;
    padding: 0 0.32rem;
    line-height: 1.6267rem;
    height: 1.6267rem;
    position: relative;
    .border-b(#dcdcdc,solid);
    .bgi {
      width: 0.6667rem;
      height: 0.6667rem;
      border-radius: 0.1067rem;
    }
    .wechat {
      margin-top: 0.4933rem;
      .bg-image("../../assets/pay/wechat");
      background-size: contain;
      margin-right: 0.4rem;
    }
    .coolB {
      margin-top: 0.4933rem;
      .bg-image("../../assets/pay/money");
      background-size: contain;
      margin-right: 0.4rem;
    }
  }
  .h210 {
    width: 100%;
    padding: 0 0.32rem;
    line-height: 2.8rem;
    height: 2.8rem;
    .border-b(#dcdcdc,solid);
  }
  .head {
    font-weight: bold;
  }
  .detail {
    .ps {
      color: #666;
      height: 0.4rem;
      line-height: 0.4rem;
      width: 100%;
      font-size: 0.32rem;
    }
    .red {
      color: #f75657;
    }
    .time {
      font-size: 0.2933rem;
      line-height: 1.0667rem;
      height: 1.0667rem;
      color: #666;
    }
    .top {
      height: 1.2rem;
      line-height: 1.2rem;
      font-size: 0.4rem;
    }
    margin-top: 0.2667rem;
    background-color: #fff;
    .roomname {
      color: #666;
    }
  }
  .pay-type {
    margin-top: 0.2667rem;
    background-color: #fff;
    span.radio {
      color: #333;
      width: 0.4267rem;
      height: 0.4267rem;
      border-radius: 50%;
      border: 0.0133rem solid #333;
      top: 0.0267rem;
      position: absolute;
      right: 0.3333rem;
      top: 0.5733rem;
    }
    .type {
      i {
        font-size: 0.5333rem;
        color: #0bc0fe;
      }
      // margin-left: 0.5067rem;
      display: inline-block;
      .input-radio {
        display: inline-block;
        position: absolute;
        top: 0.1867rem;
        opacity: 0;
        right: 0;
        width: 1.2rem;
        height: 0.8rem;
      }
    }
  }
}
</style>
