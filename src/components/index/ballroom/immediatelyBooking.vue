<template>
  <div class="immediatelyBooking">
    <div class="title">
      <router-link to="/ballroominfo">
        <i class="iconfont icon-fanhui1 fl"></i>
      </router-link>
      球房预定
    </div>
    <div class="roomAdd">
      <div class="left">
        <div class="addTitle">粤美特国际台球俱乐部</div>
        <div class="addDetail">深圳市南山区玉美特桌球俱乐部5层562号</div>
      </div>
      <div class="right">
        <i class="iconfont icon-dingwei"></i>
      </div>
    </div>
    <div class="chosebox">
      <div class="chooseDay">
        <div class="chooseSwipe">
          <div class="day fl" @click="pickdate(item.date)" v-for='item in dateArr' :key="item.index" :class="item.date==datepick?'current':''">
            {{item.day}}</div>
        </div>
      </div>
    </div>
    <!-- gametype-->
    <div class="chooseType">
      <div class="chn fl" @click="gametypeTab('chn')" :class="gameTyep=='chn'?'active':''">中式</div>
      <div class="usa fl" @click="gametypeTab('sua')" :class="gameTyep=='sua'?'active':''">美式</div>
      <div class="snk fl" @click="gametypeTab('snk')" :class="gameTyep=='snk'?'active':''">斯诺克</div>
    </div>
    <!--table plan  -->
    <div class="bookingbox">
      <div class="bookingtype ">
        <div class="typebox fl">
          <div class="appointment fl"></div>
          <div class="booktext">可预订</div>
        </div>
        <div class="typebox fl">
          <div class="reserved fl"></div>
          <div class="booktext">已预订</div>
        </div>
        <div class="typebox fl">
          <div class="mypick fl"></div>
          <div class="booktext">我选中</div>
        </div>
      </div>
    </div>
    <!-- pick table -->
    <div class="pickplace clearfix">
      <div class="left fl ">
        <div class="texttime">开始时间</div>
        <div class="time">10:00</div>
        <div class="time">11:00</div>
        <div class="time">12:00</div>
        <div class="time">13:00</div>
        <div class="time">14:00</div>
        <div class="time">15:00</div>
        <div class="time">16:00</div>
        <div class="time">17:00</div>
        <div class="time">18:00</div>
        <div class="time">19:00</div>
        <div class="time">20:00</div>
        <div class="time">21:00</div>
        <div class="time">22:00</div>
      </div>
      <div class="right fl">
        <div class="picktable">
          <div class="placehold fl"></div>
          <div class="tableswipe ">
            <div class="tablenum ">
              <div class="num fl">1号桌</div>
              <div class="num fl">2号桌</div>
              <div class="num fl">3号桌</div>
              <div class="num fl">4号桌</div>
              <div class="num fl">5号桌</div>
              <div class="num fl">6号桌</div>
              <div class="num fl">7号桌</div>
              <div class="num fl">8号桌</div>
            </div>
            <div class="pick fl">
              <div class="picking">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
              <div class="picking">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
            </div>
            <div class="pick fl">
              <div class="picking">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
              <div class="picking">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
            </div>
            <div class="pick fl">
              <div class="picking">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
              <div class="picking">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
            </div>
            <div class="pick fl">
              <div class="picking">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
              <div class="picking">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
            </div>
            <div class="pick fl">
              <div class="picking">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
              <div class="picking">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
            </div>
            <div class="pick fl">
              <div class="picking">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
              <div class="picking">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
            </div>
            <div class="pick fl">
              <div class="picking">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
              <div class="picking">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
            </div>
            <div class="pick fl">
              <div class="picking">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
              <div class="picking">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
            </div>
            <div class="pick fl">
              <div class="picking">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
              <div class="picking">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
            </div>
            <div class="pick fl">
              <div class="picking">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
              <div class="picking">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
            </div>
            <div class="pick fl">
              <div class="picking">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
              <div class="picking">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
            </div>
            <div class="pick fl">
              <div class="picking">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
              <div class="picking">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
            </div>
            <div class="pick fl">
              <div class="picking">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
              <div class="picking">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
              <div class="picked">￥50.00</div>
              <div class="mypick">￥50.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pickedlab">
      <div class="mypickbox">
        <div class="time">10:00-11:00</div>
        <div class="tabnum">01</div>
      </div>
    </div>
    <div class="confirm">
      90.00元 提交订单
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      dataArr: [],
      tabNmu: 0,
      daySelected: 0,
      gameTyep: "chn",
      datepick: ""
    };
  },
  components: {},
  created() {
    this.getDate();
  },
  methods: {
    getDate() {
      let dateObj = {
        day: null
      };
      let dateArr = [];
      for (let index = 0; index < 7; index++) {
        let dateObj = {
          day: this.$dayjs()
            .add(index, "day")
            .format("MM-DD"),
          date: this.$dayjs()
            .add(index, "day")
            .format("YYYY-MM-DD"),
          week: this.$dayjs()
            .add(index, "day")
            .day(),
          index
        };
        dateArr.push(dateObj);
      }
      for (let i = 0; i < dateArr.length; i++) {
        switch (dateArr[i].index) {
          case 0:
            dateArr[i].day = `今天${dateArr[i].day}`;
            break;
          case 1:
            dateArr[i].day = `明天${dateArr[i].day}`;
            break;
          case 2:
            dateArr[i].day = `后天${dateArr[i].day}`;
            break;
          case 3:
            switch (dateArr[i].week) {
              case 0:
                dateArr[i].day = `星期天${dateArr[i].day}`;
                break;
              case 1:
                dateArr[i].day = `星期一${dateArr[i].day}`;
                break;
              case 2:
                dateArr[i].day = `星期二${dateArr[i].day}`;
                break;
              case 3:
                dateArr[i].day = `星期三${dateArr[i].day}`;
                break;
              case 4:
                dateArr[i].day = `星期四${dateArr[i].day}`;
                break;
              case 5:
                dateArr[i].day = `星期五${dateArr[i].day}`;
                break;
              case 6:
                dateArr[i].day = `星期六${dateArr[i].day}`;
                break;
            }
            break;
          case 4:
            switch (dateArr[i].week) {
              case 0:
                dateArr[i].day = `星期天${dateArr[i].day}`;
                break;
              case 1:
                dateArr[i].day = `星期一${dateArr[i].day}`;
                break;
              case 2:
                dateArr[i].day = `星期二${dateArr[i].day}`;
                break;
              case 3:
                dateArr[i].day = `星期三${dateArr[i].day}`;
                break;
              case 4:
                dateArr[i].day = `星期四${dateArr[i].day}`;
                break;
              case 5:
                dateArr[i].day = `星期五${dateArr[i].day}`;
                break;
              case 6:
                dateArr[i].day = `星期六${dateArr[i].day}`;
                break;
            }
            break;
          case 5:
            switch (dateArr[i].week) {
              case 0:
                dateArr[i].day = `星期天${dateArr[i].day}`;
                break;
              case 1:
                dateArr[i].day = `星期一${dateArr[i].day}`;
                break;
              case 2:
                dateArr[i].day = `星期二${dateArr[i].day}`;
                break;
              case 3:
                dateArr[i].day = `星期三${dateArr[i].day}`;
                break;
              case 4:
                dateArr[i].day = `星期四${dateArr[i].day}`;
                break;
              case 5:
                dateArr[i].day = `星期五${dateArr[i].day}`;
                break;
              case 6:
                dateArr[i].day = `星期六${dateArr[i].day}`;
                break;
            }
            break;
          case 6:
            switch (dateArr[i].week) {
              case 0:
                dateArr[i].day = `星期天${dateArr[i].day}`;
                break;
              case 1:
                dateArr[i].day = `星期一${dateArr[i].day}`;
                break;
              case 2:
                dateArr[i].day = `星期二${dateArr[i].day}`;
                break;
              case 3:
                dateArr[i].day = `星期三${dateArr[i].day}`;
                break;
              case 4:
                dateArr[i].day = `星期四${dateArr[i].day}`;
                break;
              case 5:
                dateArr[i].day = `星期五${dateArr[i].day}`;
                break;
              case 6:
                dateArr[i].day = `星期六${dateArr[i].day}`;
                break;
            }
            break;
        }
      }
      this.dateArr = dateArr;
      this.datepick = this.dateArr[0].date;
    },
    gametypeTab(type) {
      this.gameTyep = type;
    },
    pickdate(date) {
      this.datepick = date;
    }
  }
};
</script>

<style scoped lang="less">
@import "../../../../src/common/css/common.less";
.immediatelyBooking {
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
  .active {
    color: #26a2ff;
  }
  .roomAdd {
    width: 100%;
    height: 1.9733rem;
    background-color: #fff;
    padding: 0.4rem 0 0.4rem 0.32rem;
    .border-t(#dcdcdc,solid);
    .border-b(#dcdcdc,solid);
    .left {
      float: left;
      .border-r(#dcdcdc,solid);
      width: 7.8rem;
      height: 1.1733rem;
      .addTitle {
        font-size: 0.4533rem;
        color: #333;
        font-weight: bold;
      }
      .addDetail {
        width: 7.1333rem;
        font-size: 0.3467rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .right {
      float: right;
      width: 1.8667rem;
      height: 100%;
      padding: 0.24rem 0.6667rem;
      i {
        display: block;
        margin: 0 auto;
        font-size: 0.64rem;
      }
    }
  }
  .chosebox {
    background-color: #fff;
    width: 100%;
    height: 1.1733rem;
    position: relative;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
  }
  .chooseDay {
    position: relative;
    overflow: hidden;
    height: 100%+18px;
    overflow-x: scroll;
    overflow-y: hidden;

    .chooseSwipe {
      display: flex;
      position: absolute;
      left: 0;
      justify-content: space-between;
      width: 200%;
      height: 100%;
      height: 1.1733rem;
      padding: 0 0.32rem;
      .current {
        border-bottom: 0.08rem solid #26a2ff;
      }
      .day {
        margin-right: 0.9733rem;
        line-height: 1.2rem;
        height: 100%;
      }
    }
  }
  .chooseType {
    padding: 0 0.3rem 0 1.92rem;
    height: 0.9333rem;
    background-color: #fff;
    width: 100%;
    line-height: 0.9333rem;
    .border-b(#dcdcdc,solid);
    .border-t(#dcdcdc,solid);
    div {
      margin-right: 1.84rem;
      height: 0.9333rem;
      text-align: center;
    }
  }
  .bookingbox {
    height: 100%;
    width: 100%;
    .bookingtype {
      height: 0.8rem;
      width: 100%;
      padding-left: 2.1867rem;
      padding-top: 0.2133rem;
      .typebox {
        width: 1.7333rem;
        .appointment {
          width: 0.4rem;
          height: 0.4rem;
          &:before {
            border-radius: 34%;
          }
          .border-all(#0cbfff,solid);
        }
        .reserved {
          background-color: #fff;
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 34%;
          &:before {
            border-radius: 34%;
          }
          .border-all(#d5d5d5,solid);
        }
        .mypick {
          background-color: #0cbfff;
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 34%;
        }
        .booktext {
          line-height: 0.4533rem;
          margin-left: 0.5333rem;
        }
      }
    }
  }
  .pickplace {
    position: relative;
    width: 100%;
    padding-left: 0.2667rem;
    overflow: auto;
    .left {
      position: relative;
      z-index: 20;
      .time:last-child {
        margin-bottom: 0;
      }
      padding-bottom: 0.48rem;
      // min-height: 13.2267rem;
      width: 1.12rem;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 0.16rem;
      font-size: 0.32rem;
      .texttime {
        padding: 0.24rem 0.24rem 0.2933rem 0.2133rem;
      }
      .time {
        text-align: center;
        margin-bottom: 0.6667rem;
        line-height: 0.32rem;
      }
    }
    .right {
      height: 100%;
      .placehold {
        width: 1.3334rem;
        height: 100%;
      }
      width: 100%;
      padding-top: 0.3201rem;
      // margin-left: 0.2667rem;
      position: absolute;
      // left: 1.4133rem;
      overflow: hidden;
      -webkit-overflow-scrolling: touch;
      .picktable {
        position: relative;
        overflow: hidden;
        height: 100%+18px;
        overflow-x: scroll;
        overflow-y: hidden;
      }
      .tableswipe {
        width: 200%;
        height: 100%;
        .tablenum {
          .num {
            margin-right: 0.2667rem;
            width: 1.7333rem;
            height: 0.8rem;
            line-height: 0.8rem;
            color: #b5b5b5;
            text-align: center;
          }
        }
        .pick {
          div {
            float: left;
            width: 1.7333rem;
            height: 0.8rem;
            line-height: 0.8rem;
            text-align: center;
            margin-top: 0.1067rem;
            margin-bottom: 0.1rem;
            margin-right: 0.2667rem;
            border-radius: 0.1066rem;
            &:before {
              border-radius: 8.0025px;
            }
            background-color: #fff;
          }
          .picking {
            color: #0cbfff;
            .border-all(#0cbfff,solid);
          }
          .picked {
            color: #666;
            .border-all(#ccc,solid);
          }
          .mypick {
            background-color: #0cbfff;
            color: #fff;
          }
        }
      }
    }
  }
  .pickedlab {
    margin-top: 0.9333rem;
    padding-left: 0.32rem;

    width: 100%;
    .mypickbox {
      width: 2.2rem;
      height: 1.32rem;
      .time {
        border-top-left-radius: 0.1067rem;
        border-top-right-radius: 0.1067rem;
        width: 101%;
        height: 49%;
        text-align: center;
        color: #fff;
        background-color: #0abffd;
        line-height: 0.6667rem;
      }
      .tabnum {
        text-align: center;
        height: 49%;
        line-height: 0.6667rem;
        background-color: #fff;
        color: #0cbfff;
      }
      &:before {
        border-radius: 8px;
      }
      .border-all(#0abffd,solid);
    }
  }
  .confirm {
    font-size: 0.3467rem;
    width: 100%;
    background-color: #0bc0fe;
    color: #fff;
    text-align: center;
    line-height: 1.4667rem;
    height: 1.4667rem;
    margin: 0.5067rem 0;
  }
}
</style>

