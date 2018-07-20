<template>
  <div class="bookinginfo">
    <div class="title">
      <router-link to="/home">
        <i class="iconfont icon-fanhui1 fl"></i>
      </router-link>
      预约信息
    </div>
    <div class="detail">
      <div class="content">
        <div class="info">
          <div class="left fl">
            <img src="../../../../../static/tuomasi.gif" alt="">
          </div>
          <div class="right ">
            <div class="roomtitle fl">{{teacher}}
              <span class='fr'>助教</span>
            </div>
            <div class="star fl">星星在这里
              <span>229m|1天前</span>
            </div>
            <div class="priceinfo fl">
              <div class="pay fl">【台费支付】发起人付</div>
              <div class="price fr">￥{{price}}/时</div>
            </div>
          </div>
        </div>
        <div class="position fl">
          <div class="time fl">
            <i class="iconfont icon-shijian"></i>
            &nbsp;打球时间：2018-06-25 19:00-21:00
            <span class="tip fr">已有一人应约</span>
          </div>
          <div class="place fl">
            <i class="iconfont icon-dingwei"></i>
            &nbsp;打球场馆：粤美特桌球俱乐部
          </div>
        </div>
      </div>
      <div class="bookingdetail">
        <div class="book">
          <div class="booktitle">
            请填写预约信息
          </div>
          <div class="form">
            <div class="name">
              <span>球房名称</span>
              <div class="roomname">{{roomview}}</div>
              <div class="changeroom fr" @click='showpicker'>选择其他球房</div>
              <mt-popup v-model="roonmageshow" position="bottom" lockScroll='true'>
                <div class="confirm">
                  <span class='fr' @click='cfmroom'>确认</span>
                  <span class='fl' @click='closetbaleroom'>取消</span>
                </div>
                <mt-picker :slots="roomname" @change="onroomChange">
                </mt-picker>
              </mt-popup>
            </div>
            <div class="gametype">
              <span>玩法类型</span>
              <div class="type" v-for="(item,index) in gametypes" :key="item.id">
                <span class="radio" v-if='! item.isChecked'>
                </span>
                <i class="iconfont icon-xuanzhong" v-if='item.isChecked'></i>
                <input v-model="gtyperadio" :value="item.value" class="input-radio" :checked='item.isChecked' @click="check(index)" type="radio">{{item.label}}
              </div>
            </div>
            <div class="tablenum">
              <span>球台编号</span>
              <div class="balltable" @click="showtablenums">{{tablenumvalue}}号桌</div>
              <mt-popup v-model="showtablenum" position="bottom" lockScroll='true'>
                <div class="confirm">
                  <span class='fr' @click='cfmroomnum'>确认</span>
                  <span class='fl' @click='closetbalenum'>取消</span>
                </div>
                <mt-picker :slots="tablenums" @change="ontableChange"></mt-picker>
              </mt-popup>
            </div>
            <div class="beginTime">
              <span>开始时间</span>
              <div class="time" @click="timeopen">
                {{bookingview}}
              </div>
              <mt-datetime-picker ref="bookingTime" v-model="bookingtimeDate" type="datetime" year-format="{value} " month-format="{value} 月" date-format="{value} 日" :startDate="bookingbegintime" :endDate="bookingendtime" @confirm="booktime">
              </mt-datetime-picker>
            </div>
            <div class="durition">
              <span>持续时长</span>
              <div class="time" @click="showduritionTime">{{duritionTimeView}}小时</div>
              <mt-popup v-model="showdurition" position="bottom" lockScroll='true'>
                <div class="confirm">
                  <span class='fr' @click='duritionConfirm'>确认</span>
                  <span class='fl' @click='duritionCancel'>取消</span>
                </div>
                <mt-picker :slots="duritionNum" @change="onTimeChange"></mt-picker>
              </mt-popup>
            </div>
            <div class="message">
              <span>添加留言</span>
              <div class="info">
                <input type="text" v-model='message' placeholder="选填">
              </div>
            </div>
          </div>
        </div>
        <router-link to='/infoConfirm'>
          <div class="confirmButton" @click="confirmSubmit">立即预约</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script >
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      //留言
      message: "",
      type: "中式",
      price: 120,
      teacher: "超级无敌小可爱",
      //游戏类型选择
      gtyperadio: "chn",
      gametypes: [
        {
          label: "中式",
          value: "chn",
          isChecked: true
        },
        {
          label: "美式",
          value: "usa",
          isChecked: false
        },
        {
          label: "斯诺克",
          value: "snk",
          isChecked: false
        }
      ],
      //球房选择
      roonmageshow: false,
      roomview: "江南七怪柯正恶 ",
      room: "",
      roomname: [
        {
          values: [
            "江南七怪柯正恶",
            "无情杀手尹志平",
            "全真教主丘处机",
            "翡翠白玉洪七公",
            "独孤九剑令狐冲",
            "六脉神剑段正淳"
          ]
        }
      ],
      //球桌号码
      tablenum: 1,
      tablenumvalue: 1,
      showtablenum: false,
      tablenums: [
        {
          values: [1, 2, 3, 4, 5, 6, 7]
        }
      ],
      //预定时间
      bookingtime: " ",
      bookingtimeDate: new Date(),
      bookingview: this.$dayjs().format("YYYY-MM-DD HH:mm"),
      bookingbegintime: new Date(this.$dayjs().format("YYYY/MM/DD HH:mm")),
      bookingendtime: new Date(this.$dayjs().add(14, "day")),
      picktime: "",
      //持续时长
      duritionTime: 1,
      duritionTimeView: 1,
      showdurition: false,
      duritionNum: [
        {
          values: []
        }
      ]
    };
  },
  components: {},
  created() {
    this.countTime();
  },
  methods: {
    //显示下拉
    showpicker() {
      this.roonmageshow = true;
    },
    //显示桌号
    showtablenums() {
      this.showtablenum = true;
    },
    closetbalenum() {
      this.showtablenum = false;
    },
    cfmroomnum() {
      this.tablenumvalue = this.tablenum;
      this.showtablenum = false;
    },
    //球房更改
    onroomChange(picker, values) {
      this.room = values[0];
    },
    closetbaleroom() {
      this.roonmageshow = false;
    },
    cfmroom() {
      this.roomview = this.room;
      this.roonmageshow = false;
    },
    //单选框
    check(index) {
      this.gametypes.forEach(item => {
        item.isChecked = false;
      });
      this.gtyperadio = this.gametypes[index].value;
      this.gametypes[index].isChecked = true;
      this.type = this.gametypes[index].label;
      console.log(this.gtyperadio);
      console.log(this.gametypes[index].label);
    },
    //球桌选择
    ontableChange(picker, values) {
      this.tablenum = values[0];
    },
    //预约时间
    timeopen() {
      this.$refs.bookingTime.open();
      console.log("open");
      console.log(this.bookingbegintime);
    },
    booktime(value) {
      console.log(value);
      this.picktime = value;
      const time = this.$dayjs(value).format("YYYY年MM月DD日 HH时mm分");
      console.log(time);
      this.bookingview = time;

      Toast({
        message: `预约时间为：${time}` ,
        position: "middle",
        duration: 1000
      });
    },
    //持续时间
    showduritionTime() {
      this.showdurition = true;
    },
    duritionConfirm() {
      this.duritionTimeView = this.duritionTime;
      this.showdurition = false;
    },
    onTimeChange(picker, values) {
      this.duritionTime = values[0];
    },
    duritionCancel() {
      this.showdurition = false;
    },
    //确认提交
    confirmSubmit() {
      this.$store.state.bookinginfo.message = this.message;
      let nowtime = this.$dayjs(this.picktime)
        .add(this.duritionTimeView, "hour")
        .format("HH:mm");
      let oldtest = this.bookingview;
      let viewtime = `${oldtest} - ${nowtime}`;
      this.$store.state.bookinginfo.time = viewtime;
      this.$store.state.bookinginfo.table = this.tablenumvalue;
      this.$store.state.bookinginfo.type = this.type;
      this.$store.state.bookinginfo.roomname = this.roomview;
      this.$store.state.bookinginfo.price = this.price;
      this.$store.state.bookinginfo.totalPrice = this.price * this.duritionTimeView;
      this.$store.state.bookinginfo.teacher = this.teacher;
      console.log(this.message);
      console.log(this.$store.state.bookinginfo.message);
      console.log(this.$store.state.bookinginfo);
    },
    //计算时间联动
    countTime() {
      let nowTime = this.$dayjs().format("HH");
      let subTime = 24 - nowTime;
      let timearr = [];
      for (let i = 1; i <= subTime; i++) {
        timearr.push(i);
      }
      this.duritionNum[0].values = timearr;
      this.picktime = this.$dayjs();
    }
  },
  watch: {
    bookingview: function() {
      let hour = this.$dayjs(this.picktime).format("HH");
      let subTime = 24 - hour;
      let timearr = [];
      for (let i = 1; i <= subTime; i++) {
        timearr.push(i);
      }
      this.duritionNum[0].values = timearr;
    }
  }
};
</script>

<style scoped lang="less">
@import "../../../../common/css/common.less";
.bookinginfo {
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
    background-color: #fff;
    .content {
      padding: 0 0.3333rem;
      height: 4.1333rem;
      .position {
        padding: 0.2667rem 0 0.5333rem 0;
        color: black;
        i {
          width: 0.4rem;
          height: 0.4rem;
          font-size: 0.3733rem;
          display: inline-block;
        }
        height: 1.68rem;
        .time {
          width: 100%;
        }
        .tip {
          font-size: 0.2667rem;
        }
      }
      .info {
        height: 2.4rem;
        padding: 0.5333rem 0 0.2667rem 0;
        .border-1pxTop(#dcdcdc,dashed);
        .left {
          width: 1.6rem;
          height: 1.6rem;
          img {
            border-radius: 0.08rem;
            width: 100%;
            height: 100%;
          }
        }
        .right {
          margin-left: 1.8667rem;
          .roomtitle {
            font-size: 0.4267rem;
            font-weight: bold;
            color: #333;
            span {
              border: 0.0133rem solid #ff9120;
              width: 0.8rem;
              height: 0.4rem;
              text-align: center;
              line-height: 0.4rem;
              font-size: 0.2933rem;
              font-weight: normal;
              color: #ff9120;
              margin-left: 0.16rem;
              border-radius: 0.08rem;
            }
          }
          .star {
            width: 100%;
            height: 100%;
            color: #999;
            span {
              font-size: 0.2667rem;
              margin-left: 0.1333rem;
            }
          }
          .priceinfo {
            width: 100%;
            color: #999;
            font-size: 0.32rem;
            text-indent: -0.1067rem;
            .price {
              color: #fd3d39;
              font-size: 0.4533rem;
            }
          }
        }
      }
    }
    .bookingdetail {
      height: 12.1333rem;
      background-color: #fff;
      padding: 0 0.32rem;
      .book {
        box-shadow: 0 0 0.2667rem #ccc;
        border-radius: 0.2667rem;
        height: 9.4667rem;
        padding: 0.3733rem 0.48rem 0 0.48rem;
        .booktitle {
          font-size: 0.4rem;
          color: #333;
          font-weight: bold;
          .border-1pxTop(#dcdcdc,solid);
          height: 1.2rem;
          line-height: 1.2rem;
        }
        .form {
          font-size: 0.4rem;
          .confirm {
            padding: 0 1.2rem;
            .border-1pxTop(#dcdcdc,solid);
            height: 1rem;
            span {
              color: #0bc0fe !important;
              display: inline-block;
              line-height: 1rem;
            }
          }
          .name {
            line-height: 1.2rem;
            span {
              color: #333;
            }
            .border-1pxTop(#dcdcdc,solid);
            height: 1.2rem;
            .roomname {
              color: #999;
              display: inline-block;
              margin-left: 0.5067rem;
            }
            .changeroom {
              font-size: 0.32rem;
              color: #0bc0fe;
            }
          }
          .gametype {
            .border-1pxTop(#dcdcdc,solid);
            height: 1.2rem;
            line-height: 1.2rem;
            .type {
              color: #999;
            }
            span.radio {
              display: inline-block;
              color: #333;
              line-height: 1.2rem;
              width: 0.4267rem;
              height: 0.4267rem;
              border-radius: 50%;
              border: 0.0133rem solid #333;
              position: relative;
              top: 2px;
            }
            .type {
              i {
                font-size: 0.48rem;
                color: #0bc0fe;
              }
              margin-left: 0.5067rem;
              display: inline-block;
              .input-radio {
                display: inline-block;
                position: absolute;
                top: 0.1867rem;
                opacity: 0;
                width: 1.2rem;
                height: 0.8rem;
              }
            }
          }
          .tablenum {
            .border-1pxTop(#dcdcdc,solid);
            height: 1.2rem;
            line-height: 1.2rem;
            .balltable {
              width: 70%;
              color: #999;
              display: inline-block;
              margin-left: 0.5067rem;
            }
          }
          .beginTime {
            .border-1pxTop(#dcdcdc,solid);
            height: 1.2rem;
            line-height: 1.2rem;
            .time {
              color: #999;
              display: inline-block;
              margin-left: 0.5067rem;
            }
          }
          .durition {
            .border-1pxTop(#dcdcdc,solid);
            height: 1.2rem;
            line-height: 1.2rem;
            .time {
              color: #999;
              display: inline-block;
              margin-left: 0.5067rem;
              width: 70%;
            }
          }
          .message {
            .border-1pxTop(#dcdcdc,solid);
            height: 1.2rem;
            line-height: 1.2rem;
            .info {
              color: #999;
              display: inline-block;
              margin-left: 0.5067rem;
              width: 70%;
              input {
                border: none;
                height: 0.9333rem;
                font-size: 0.4rem;
                color: #999;
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
  .confirmButton {
    margin-top: 0.7067rem;
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
<style lang="less">
.bookinginfo {
  .form {
    .mint-popup-bottom {
      width: 100%;
      .picker-slot-center {
        width: 100%;
      }
    }
    .mint-cell {
      float: left;
    }
  }
}
</style>

