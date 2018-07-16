<template>
  <div class="bookinginfo">
    <div class="title">
      <router-link to="/home">
        <i class="iconfont icon-fanhui fl"></i>
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
            <div class="roomtitle fl">超级无敌厉害的桌球小可爱
              <span class='fr'>助教</span>
            </div>
            <div class="star fl">星星在这里
              <span>229m|1天前</span>
            </div>
            <div class="priceinfo fl">
              <div class="pay fl">【台费支付】发起人付</div>
              <div class="price fr">￥120/时</div>
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
              <div class="roomname">{{room}}</div>
              <div class="changeroom fr" @click='showpicker'>选择其他球房</div>
              <mt-popup v-model="roonmageshow" position="bottom">
                <mt-picker :slots="roomname" @change="onValuesChange"></mt-picker>
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
              <div class="balltable">{{tablenum}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script >
import { PopupPicker, Group } from "vux";
export default {
  data() {
    return {
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
      room: " ",
      roomname: [
        {
          values: [
            "梦幻女孩陈晓满",
            "无情杀手尹志平",
            "全真教主丘处机",
            "翡翠白玉洪七公",
            "独孤九剑令狐冲",
            "六脉神剑段正淳"
          ]
        }
      ],
      //球桌号码
      tablenum: "1",
      showtablenum:'false'
    };
  },
  components: {
    PopupPicker,
    Group
  },
  methods: {
    //显示下拉
    showpicker() {
      this.roonmageshow = true;
    },
    //显示桌号
    showtablenum(){
      this.showtablenum = false;
    },
    //球房更改
    onValuesChange(picker, values) {
      this.room = values[0];
    },
    //单选框
    check(index) {
      this.gametypes.forEach(item => {
        item.isChecked = false;
      });
      this.gtyperadio = this.gametypes[index].value;
      this.gametypes[index].isChecked = true;
      console.log(this.gtyperadio);
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
          .name {
            line-height: 1.2rem;
            span {
              color: #333;
            }
            .border-1pxTop(#dcdcdc,solid);
            height: 1.2rem;
            .roomname {
              color: #666;
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
              color: #999;
              display: inline-block;
              margin-left: 0.5067rem;
            }
          }
        }
      }
    }
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

