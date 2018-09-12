<template>
    <div class="teachInfo">
        <myTitle text='助教信息' backRoute='myService'></myTitle>
        <div class="no-psot" v-if='hasSent'>
            <div class="box">
                <div class="head">请填写助教信息</div>
                <div class="cell mt60">
                    <div class="left fl">球技水平</div>
                    <div class="right ">
                        <div class="level fl mr60 ml10">
                            <i class="iconfont icon-xuanzhong fl " v-if="level=='master'"></i>
                            <span class="yuan" v-else></span>
                            <input type="radio" name='leavel' value='master' v-model='level'>大师
                        </div>
                        <div class="level fl mr60 ">
                            <i class="iconfont icon-xuanzhong fl" v-if="level=='super'"></i>
                            <span class="yuan" v-else></span>
                            <input type="radio" name='leavel' value='super' v-model='level'>高手
                        </div>
                        <div class="level fl">
                            <i class="iconfont icon-xuanzhong fl " v-if="level=='rookie'"></i>
                            <span class="yuan" v-else></span>
                            <input type="radio" name='leavel' value='rookie' v-model='level'>菜鸟
                        </div>

                    </div>
                </div>
                <div class="cell">
                    <div class="left fl">
                        地&emsp;&emsp; 区
                    </div>
                    <div class="right">
                        <div class="province fl" @click='provinceVb=true'>
                            <i class=" iconfont icon-xialajiantou"></i>
                            {{province}}
                        </div>
                        <div class="province fl city" @click='provinceVb = true'>
                            <i class=" iconfont icon-xialajiantou"></i>
                            {{city}}
                        </div>
                    </div>
                </div>
                <div class="cell">
                    <div class="left fl">
                        球&emsp;&emsp; 房
                    </div>
                    <div class="right">
                        <div class="choosePlace fl" @click='provinceVb=true'>
                            <i class=" iconfont icon-xialajiantou"></i>
                            {{choosePlace}}
                        </div>
                    </div>
                </div>
                <div class="cell">
                    <div class="left fl">
                        循环周期
                    </div>
                    <div class="right">
                        <div class="cycle fl">
                            <input type="text" v-model='cycle' placeholder="请输入循环周期">
                        </div>
                    </div>
                </div>
                <div class="cell">
                    <div class="left fl">
                        服务时段
                    </div>
                    <div class="right">
                        <div class="choosePlace fl" @click='provinceVb=true'>
                            <i class=" iconfont icon-xialajiantou"></i>
                            请选择服务时段
                        </div>
                    </div>
                </div>
                <div class="cell">
                    <div class="left fl">
                        服务时长
                    </div>
                    <div class="right">
                        <div class="picktime fl ">
                            <span class='br' @click='subTime'>－</span>
                            <span class='time br'>{{serviceTime}}</span>
                            <span @click='addTime' class='add'>＋</span>
                        </div>
                    </div>
                </div>
                <div class="cell">
                    <div class="left fl">
                        自&ensp;定&ensp;义
                    </div>
                    <div class="right">
                    </div>
                </div>
            </div>
            <div class="cfmbtn">发布</div>
        </div>
        <div class="sent" v-else>
            <router-link to="teachInfoDetail">
                <div class="cell">
                    <div class="img fl">
                        <div class="triangle"></div>
                        <div class="text">A+</div>
                        <img src="../../../../assets/daima.jpg" alt="">
                    </div>
                    <div class="right">
                        <div class="head">
                            <div class="fl">粤美特大厦</div>
                            <div class="fr">￥120/时</div>
                        </div>
                        <div class="when">
                            周天-下午 15:00-1:00
                        </div>
                        <div class="position">
                            <i class="iconfont icon-dingwei"></i>
                            <div class="far">深圳市南山区粤美特桌球俱乐部(&lt; 500m)</div>
                        </div>
                    </div>
                </div>
            </router-link>
        </div>
        <mt-popup v-model="provinceVb" position="bottom">
            <mt-picker :slots="provinceSlots" @change="provinceChange"></mt-picker>
        </mt-popup>
    </div>
</template>

<script >
import myTitle from "../../../title/title";
import myaddress from "../../home/bookinginfo/joinUs/pca.json";
import { Picker } from "mint-ui";
export default {
  data() {
    return {
      hasSent: false,
      level: "rookie",
      province: "请选择省",
      city: "请选择城市",
      provinceVb: false,
      provinceSlots: [
        {
          flex: 1,
          values: Object.keys(myaddress),
          className: "shen",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: [],
          className: "city",
          textAlign: "center"
        }
      ],
      choosePlace: "请选择打球场馆(选填)",
      cycle: "",
      serviceTime: 1
    };
  },
  methods: {
    provinceChange(picker, values) {
      picker.setSlotValues(1, Object.keys(myaddress[values[0]]));
      this.province = values[0];
      this.city = values[1];
    },
    addTime() {
      if (this.serviceTime >= 24) {
        return;
      } else {
        this.serviceTime++;
      }
    },
    subTime() {
      if (this.serviceTime <= 1) {
        return;
      } else {
        this.serviceTime--;
      }
    }
  },
  components: {
    myTitle
  }
};
</script>

<style scoped lang="less">
@import "../../../../common/css/common.less";
.teachInfo {
  width: 100%;
  .no-psot {
    margin-top: 0.2667rem;
    width: 100%;
    padding: 0 0.32rem;
    height: 11.4667rem;
    .box {
      background-color: #fff;
      width: 100%;
      padding: 0 0.48rem;
      padding-top: 0.7467rem;
      box-shadow: 0 0 0.1733rem #ccc;
      height: 100%;
      border-radius: 0.1067rem;
      color: #666;
      .head {
        font-size: 0.4533rem;
        font-weight: bold;
      }
      .mt60 {
        margin-top: 0.8rem;
      }
      .ml10 {
        margin-left: 0.1333rem;
      }
      .cell {
        margin-top: 0.2667rem;
        font-size: 0.4rem;
        height: 0.8rem;
        line-height: 0.8rem;
        .left {
          width: 1.8666rem;
        }
        .right {
          line-height: 0.8rem;
          height: 0.8rem;
          .mr60 {
            margin-right: 0.8rem;
          }
          margin-left: 1.867rem;
          .level {
            position: relative;
            .icon-xuanzhong {
              font-size: 0.5466rem;
              color: #0bc0fe;
              margin-right: 0.1333rem;
            }
            .yuan {
              position: absolute;
              top: 0.1066rem;
              overflow: hidden;
              display: inline-block;
              border-radius: 50%;
              width: 0.48rem;
              height: 0.48rem;
              &::before {
                border-radius: 50%;
              }
              .border-all(#333,solid);
            }
            input {
              opacity: 0;
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
            }
          }
          .province {
            color: #999;
            display: inline-block;
            padding-left: 0.2133rem;
            padding-right: 0.4533rem;
            width: 3.12rem;
            height: 0.8rem;
            border-radius: 8px;
            position: relative;
            &::before {
              border-radius: 8px;
            }
            i.icon-xialajiantou {
              position: absolute;
              font-size: 0.2666rem;
              color: #999;
              top: 0;
              right: 0.1334rem;
            }
            .border-all(#999,solid);
          }
          .choosePlace,
          .cycle {
            border-radius: 8px;
            color: #999;
            input {
              border: none;
            }
            position: relative;
            padding-left: 0.2133rem;
            padding-right: 0.4533rem;
            width: 6.5333rem;
            height: 0.8rem;
            &::before {
              border-radius: 8px;
            }
            i.icon-xialajiantou {
              position: absolute;
              font-size: 0.2666rem;
              color: #999;
              top: 0;
              right: 0.1334rem;
            }
            .border-all(#999,solid);
          }
          .picktime {
            border-radius: 8px;
            color: #999;
            position: relative;
            width: 2.6667rem;
            height: 0.8rem;
            span {
              color: #666;
              float: left;
              width: 0.84rem;
              height: 100%;
              text-align: center;
            }
            .br {
              .border-r(#999,solid);
            }
            .add {
              position: relative;
            }
            span.time {
              width: 0.92rem;
            }
            &::before {
              border-radius: 8px;
            }
            .border-all(#999,solid);
          }
          .city {
            margin-left: 0.2667rem;
          }
        }
      }
    }
    .cfmbtn {
      margin-top: 0.6667rem;
    }
  }
  .sent {
    .cell {
      height: 2.6667rem;
      width: 100%;
      background-color: #fff;
      padding: 0.5333rem 0.24rem;
      color: #999;
      .right {
        margin-left: 1.8667rem;
        .head {
          font-size: 0.4267rem;
          height: 0.4267rem;
          .fl {
            color: black;
          }
          .fr {
            color: #fa5c41;
            font-weight: bold;
          }
        }
        .when {
          margin-top: 0.32rem;
          height: 0.32rem;
          font-weight: 0.32rem;
        }
        .position {
          position: relative;
          i {
            position: absolute;
            top: 0rem;
            font-size: 0.3733rem;
            left: -0.0267rem;
          }
          .far {
            margin-left: 0.4rem;
          }
          margin-top: 0.2933rem;
          font-weight: 0.4267rem;
          height: 0.4267rem;
          line-height: 0.3733rem;
        }
      }

      .img {
        width: 1.5733rem;
        height: 1.5733rem;
        border-radius: 0.1067rem;
        overflow: hidden;
        position: relative;
        .triangle {
          position: absolute;
          top: 0;
          right: 0;
          width: 0;
          height: 0;
          border-top-right-radius: 0.08rem;
          border-style: solid;
          border-width: 0 0.6667rem 0.5334rem 0;
          border-color: transparent #fa5c41 transparent transparent;
        }
        .text {
          position: absolute;
          top: 0.04rem;
          right: 0;
          font-weight: bold;
          color: #fff;
          font-size: 0.2133rem;
          z-index: 1;
          -webkit-transform: rotate(38deg);
          -moz-transform: rotate(38deg);
        }
        img {
          width: 100%;
          height: 100%;
        }
      }
      .border-t(#dcdcdc,solid);
    }
  }
}
</style>
<style lang="less">
.teachInfo {
  .mint-popup-bottom {
    width: 100%;
  }
}
</style>

