<template>
    <div class="infoConfirm">
        <div class="title">
            <router-link to="/bookinginfo">
                <i class="iconfont icon-fanhui fl"></i>
            </router-link>
            预约详情
        </div>
        <div class="detail ">
            <div class="shadowbox">
                <div class="confirmTitle">请认真核对订单信息</div>
                <div class="left">
                    <span>助教</span>
                    <div class="read">{{teacher}}</div>
                </div>
                <div class="left">
                    <span>单价</span>
                    <div class="read">{{price}}元/小时</div>
                </div>
                <div class="left">
                    <span>球房</span>
                    <div class="read">{{roomname}}</div>
                </div>
                <div class="left">
                    <span>时间</span>
                    <div class="read">{{time}}</div>
                </div>
                <div class="left">
                    <span>球台</span>
                    <div class="read">{{type}}</div>
                </div>
                <div class="left">
                    <span class='liuyan'>留言</span>
                    <div class="message">{{message}}</div>
                </div>
                <div class="totalprice">
                    合计：
                    <span class="color">{{totalprice}}</span> 元
                </div>
            </div>
            <div class="confirmButton" @click='confirmTeach'>立即预约</div>

        </div>
    </div>
</template>

<script >
import { MessageBox } from "mint-ui";
import { log } from "util";
export default {
  data() {
    return {
      tearcher: "",
      price: Number,
      roomname: "",
      time: "",
      type: "",
      message: "",
      totalprice: ""
    };
  },
  components: {},
  methods: {
    //渲染页面
    creatpage() {
      this.teacher = this.$store.state.bookinginfo.teacher;
      this.price = this.$store.state.bookinginfo.price;
      this.roomname = this.$store.state.bookinginfo.roomname;
      this.time = this.$store.state.bookinginfo.time;
      this.type = `${this.$store.state.bookinginfo.type} ${this.$store.state.bookinginfo.table}号桌`;
      this.totalprice = this.$store.state.bookinginfo.totalPrice;
      if (this.$store.state.bookinginfo.message.length <= 0) {
        this.message = '你啥也没说,留言去了南极ヾ(๑╹◡╹)ﾉ"';
      } else {
        this.message = this.$store.state.bookinginfo.message;
      }
    },
    //确认
    confirmTeach() {
      MessageBox.confirm("", {
        title: "提示",
        message: `预约信息已发送给助教,<br/>助教确认接单后完成支付即可`,
        showCancelButton: true,
        confirmButtonClass: "助教信息",
        cancelButtonText: "返回首页"
      })
        .then(action => {
          if (action == "confirm") {
            console.log("我去助教信息啦");
          }
        })
        .catch(err => {
          if (err == "cancel") {
            this.$router.push({
              path: "/home"
            });
          }
        });
    }
  },
  created() {
    this.creatpage();
  }
};
</script>

<style scoped lang="less">
@import "../../../../common/css/common.less";
.infoConfirm {
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
  .detail {
    margin-top: 0.32rem;
    height: 100%;
    width: 100%;
    padding: 0 0.32rem;
    .shadowbox {
      position: relative;
      box-shadow: 0 0 0.2667rem #ccc;
      border-radius: 0.2667rem;
      min-height: 10.1333rem;
      padding: 0.3733rem 0.48rem 0 0.48rem;
      background-color: #fff;
      .totalprice {
        font-size: 0.4267rem;
        color: #333;
        font-weight: bold;
        position: absolute;
        bottom: 0.56rem;
        right: 0.48rem;
        .color {
          color: #fe3a3b;
          font-size: 0.4267rem;
        }
      }
      .confirmTitle {
        font-size: 0.4267rem;
        color: #333;
        font-weight: bold;
        height: 1.2rem;
        line-height: 1.2rem;
      }
      .message {
        font-size: 0.3733rem;
        color: #333;
        margin-left: 1.3333rem;
        display: inline-block;
        height: 100%;
        line-height: 0.6667rem;
      }
    }
  }
  .detail:not(:first-child) {
    height: 1.0667rem;
    line-height: 1.0667rem;
    text-align: start;
    span {
      color: #666;
      font-size: 0.3733rem;
    }
    .left {
      position: relative;
    }
    .liuyan {
      position: absolute;
    }
    .read {
      font-size: 0.3733rem;
      color: #333;
      margin-left: 0.5067rem;
      display: inline-block;
    }
  }
  .confirmButton {
    margin-top: 0.8rem;
    width: 9.36rem;
    height: 1.1733rem;
    border-radius: 0.1067rem;
    line-height: 1.1733rem;
    text-align: center;
    color: #fff;
    font-size: 0.4rem;
    background: -webkit-linear-gradient(
      left,
      #0cd0ff,
      #0caefe
    ); /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(
      right,
      #0cd0ff,
      #0caefe
    ); /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(
      right,
      #0cd0ff,
      #0caefe
    ); /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #0cd0ff, #0caefe); /* 标准的语法 */
  }
}
</style>
