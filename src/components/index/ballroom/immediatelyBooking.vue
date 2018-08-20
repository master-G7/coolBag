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
          <div class="booktext">可预订</div>
        </div>
      </div>
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
    padding: 0.2133rem;
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
}
</style>

