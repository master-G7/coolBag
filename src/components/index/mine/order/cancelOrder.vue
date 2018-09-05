<template>
    <div class="cancelOrder">
        <div class="title">
            <router-link to="userinfo">
                <i class="iconfont icon-fanhui1 fl"></i>
            </router-link>
            退款申请
        </div>
        <div class="h90">
            <div class="fl">球房名称：</div>
            <div class="fr">粤美特俱乐部</div>
        </div>
        <div class="w210">
        </div>
        <div class="w210">
            <div class="head clearfix">
                <div class="fl">中式01号桌</div>
                <div class="fr">100.00元</div>
            </div>
            <div class="middle">[未预约助教]</div>
            <div class="bottom">2018-07-13 15:00-16:00</div>
        </div>
        <div class="h90">
            <div class="fl">退款金额</div>
            <div class="celPic fr">￥100.00</div>
        </div>
        <div class="word">
            <div class="head-title">
                退款原因
            </div>
            <div class="comment">
                <div class="strNum">{{msgNum}}</div>
                <textarea v-model='msg' maxlength=500 placeholder="建议您说说您的感受,对其他小伙伴帮组很大喔~" cols="30" rows="10"></textarea>
            </div>
        </div>
        <div class="apply">
            <div class="abtn fr" @click='apply'>申请退款</div>
        </div>
    </div>
</template>

<script >
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      msg: "",
      msgNum: 500
    };
  },
  methods: {
    apply() {
      Toast({
        message: "成功提交",
        iconClass: "iconfont icon-chenggong",
        duration: 2500,
        className: "cfmcomment"
      });
    }
  },
  components: {},
  watch: {
    msg() {
      this.msgNum = 500 - this.msg.length;
    }
  }
};
</script>

<style scoped lang="less">
@import "../../../../common/css/common.less";
.cancelOrder {
  width: 100%;
  .title {
    width: 100%;
    padding: 0 0.32rem;
    background-color: #fff;
    text-align: center;
    height: 1.1733rem;
    line-height: 1.1733rem;
    font-size: 0.4rem;
    color: #666;
    font-weight: bold;
    i {
      display: inline-block;
      width: 0.5333rem;
      height: 0.5333rem;
      font-size: 0.5333rem;
      color: #666;
    }
  }
  .h90 {
    height: 1.2rem;
    line-height: 1.2rem;
    padding: 0 0.32rem;
    background-color: #fff;
    .celPic {
      color: #fc3f36;
    }
    .border-t(#dcdcdc,solid);
  }
  .w210 {
    padding-top: 0.5067rem;
    height: 2.8rem;
    padding: 0.5067rem 0.32rem 0 0.32rem;
    background-color: #fff;
    .head {
      width: 100%;
      div {
        height: 0.48rem;
        font-size: 0.48rem;
      }
    }
    .middle {
      margin-top: 0.48rem;
      height: 0.3733rem;
      color: #666;
    }
    .bottom {
      margin-top: 0.3733rem;
      font-size: 0.2933rem;
      color: #666;
    }
    .border-t(#dcdcdc,solid);
  }
  .word {
    background-color: #fff;
    padding: 0 0.32rem;
    height: 4.6134rem;
    .comment {
      background-color: #fff;
      position: relative;
      .strNum {
        position: absolute;
        color: #999;
        right: 0.2667rem;
        bottom: 0.4133rem;
      }
      textarea {
        border-radius: 0.1333rem;
        padding: 0.32rem;
        height: 3.0667rem;
        width: 100%;
        background-color: #f4f4f4;
        border: 0;
        color: #999;
        font-size: 0.32rem;
      }
    }
    .head-title {
      height: 1.2rem;
      line-height: 1.2rem;
    }
    .border-t(#dcdcdc,solid);
  }
  .apply {
    height: 1.3333rem;
    background-color: #fff;
    margin-top: 0.2666rem;
    padding: 0.1867rem 0.32rem;
    .abtn {
      border-radius: 0.1067rem;
      background-color: #0bc0fe;
      color: #fff;
      width: 2.1867rem;
      height: 0.96rem;
      text-align: center;
      line-height: 0.96rem;
    }
  }
}
</style>
