<template>
    <div class="bookinfo">
        <div class="title">
            <router-link to="mybook">
                <i class="iconfont icon-fanhui1 fl"></i>
            </router-link>
            发布详情
        </div>
        <div class="h90">
            <div class="fl">应约转态：</div>
            <div class="fr">
                <div class="blue">未接单</div>
            </div>
        </div>
        <div class="h90">
            <div class="fl">预约时间：</div>
            <div class="fr">2018-09-19(周六) 15:00-18:00</div>
        </div>
        <div class="h90">
            <div class="fl">预约球房：</div>
            <div class="fr">粤美特国际台区俱乐部 中式-01</div>
        </div>
        <div class="h90">
            <div class="fl">球房位置：</div>
            <div class="fr">广东深圳市南山区高新南七道1号</div>
        </div>
        <div class="h90 mt20">
            <div class="fl">支付费用：</div>
            <div class="fr red">￥100.00</div>
        </div>
        <div class="h90">
            <div class="fl">付费用户：</div>
            <div class="fr">丁俊晖</div>
        </div>
        <div class="h90">
            <div class="fl">手机号码：</div>
            <div class="fr"> 138****8888
                <span class="blue">[打电话]</span>
            </div>
        </div>
        <div class="textarea">
            <div class="head">备注：</div>
            <textarea maxlength="100" cols="30" rows="10" v-model="msg" placeholder="请在此输入您的备注"></textarea>
        </div>
        <div class="h90 mt20">
            <div class="fl c66">订单编号：5891955244</div>
        </div>
        <div class="h90 ">
            <div class="fl c66">发起时间：2018-07-10 15:24</div>
        </div>
        <div class="p24">
            <router-link to="gotobook">
                <div class="cfmbtn">
                    立即赴约
                </div>
            </router-link>
        </div>

    </div>
</template>

<script >
export default {
  data() {
    return {
      msg: ""
    };
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
@import "../../../../common/css/common.less";
.bookinfo {
  width: 100%;
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
  .c66 {
    color: #666;
  }
  .mt20 {
    margin-top: 0.2667rem;
  }
  .h90 {
    padding: 0 0.32rem;
    height: 1.2rem;
    line-height: 1.2rem;
    background-color: #fff;
    font-size: 0.4rem;
    .blue {
      color: #0abfff;
    }
    .red {
      color: #ff3f38;
    }
    .border-t(#dcdcdc,solid);
  }
  .textarea {
    background-color: #fff;
    width: 100%;
    height: 3.1333rem;
    padding: 0 0.32rem;
    .head {
      height: 1.1733rem;
      line-height: 1.1733rem;
    }
    textarea {
      height: 1.6533rem;
      width: 9.36rem;
      background-color: #f8f8f8;
      padding: 0.3467rem;
      border: 0;
      border-radius: 0.1067rem;
    }
  }
}
</style>
