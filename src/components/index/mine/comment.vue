<template>
  <div class="comment">
    <div class="title">
      <router-link to="mine">
        <i class="iconfont icon-fanhui1 fl"></i>
      </router-link>
      评价晒单
    </div>
    <div class="room-title p24">
      <img src="../../../assets/daima.jpg" alt=""> 粤美特国际俱乐部
    </div>
    <div class="p24">
      <div class="comment-box">
        <div class="comment-title">球房评价</div>
        <div class="cmt">
          <div class="text fl">描述相符</div>
          <Rate custom-icon="iconfont icon-xingxing" v-model="des"></Rate>
        </div>
        <div class="cmt">
          <div class="text fl">球房环境</div>
          <Rate custom-icon="iconfont icon-xingxing" v-model="environment"></Rate>
        </div>
        <div class="cmt">
          <div class="text fl">服务态度</div>
          <Rate custom-icon="iconfont icon-xingxing" v-model="service"></Rate>
        </div>
        <div class="comment-area">
          <div class="strNum">{{msgNum}}</div>
          <textarea v-model='msg' maxlength=500 placeholder="建议您说说您的感受,对其他小伙伴帮组很大喔~" cols="30" rows="10"></textarea>
        </div>
      </div>
    </div>
    <div class="p24">
      <div class="cfmBtn" @click="cfmcomment">提交评价</div>
    </div>
  </div>
</template>

<script >
import { Rate } from "iview";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      des: null,
      environment: null,
      service: null,
      msg: null,
      msgNum: 500
    };
  },
  methods: {
    keyboardUp() {
      // let element = document.querySelector(".comment-box");
      // element.scrollIntoView();
      // element.scrollIntoView(false);
      // element.scrollIntoView({ block: "end" });
      // element.scrollIntoView({ block: "end", behavior: "smooth" });
    },
    cfmcomment() {
      console.log(this.des);
      
      Toast({
        message: "成功提交评价",
        iconClass: "iconfont icon-chenggong",
        duration: 2500,
        className:'cfmcomment',
      });
    }
  },
  components: { Rate },
  watch: {
    msg() {
      this.msgNum =500- this.msg.length;
    }
  }
};
</script>

<style scoped lang="less">
.comment {
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
  .room-title {
    padding-top: 0.4rem;
    height: 1.7067rem;
    line-height: 1.0667rem;
    font-size: 0.4rem;
    img {
      width: 1.0667rem;
      height: 1.0667rem;
      border-radius: 0.1067rem;
      margin-right: 0.2667rem;
    }
  }
  .comment-box {
    padding: 0 0.32rem;
    background-color: #fff;
    height: 10rem;
    border-radius: 0.1067rem;
    .comment-title {
      padding-top: 0.8rem;
      margin-bottom: 0.6667rem;
      text-align: center;
      font-size: 0.4rem;
      font-weight: bold;
    }
    .cmt {
      margin-left: 1.68rem;
      margin-top: 0.1333rem;
    }
    .text {
      margin-top: 0.1334rem;
      display: inline-block;
      margin-right: 0.3733rem;
    }
    .comment-area {
      width: 8.8rem;
      height: 4.4267rem;
      background-color: #f4f4f4;
      border-radius: 0.1333rem;
      margin-top: 0.9334rem;
      padding: 0.3733rem 0.1867rem 0.32rem 0.2933rem;
      position: relative;
      .strNum {
        position: absolute;
        color: #999;
        right: 0.2667rem;
        bottom: 0.2667rem;
      }
      textarea {
        width: 100%;
        background-color: #f4f4f4;
        border: 0;
        color: #999;
        font-size: 0.32rem;
      }
    }
  }
  .cfmBtn {
    width: 9.36rem;
    height: 1.2rem;
    text-align: center;
    margin-top: 0.5333rem;
    color: #fff;
    background-color: #0bc0fe;
    line-height: 1.2rem;
    border-radius: 0.1067rem;
    font-size: 0.4267rem;
  }
}
</style>
<style lang="less">
  .cfmcomment {
    .iconfont{
      font-size: 1.0667rem !important;
      color: #fff;
    }
  }
.comment {

  .comment-box {
    .iconfont {
      font-size: 0.56rem;
    }
    .ivu-rate-star-chart {
      margin-right: 0.32rem;
    }
  }
}
</style>

