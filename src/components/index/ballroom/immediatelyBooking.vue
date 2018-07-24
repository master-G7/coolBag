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
    <div class="chooseDay">
      <div class="chooseSwipe">
        <div class="day" @click="getDate" v-for='item in dateArr' :key="item.index" :class="{dateActive:index == num}">{{item.day}}</div>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      dataArr: [],
      tabNmu: 0
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
      console.log(this.dateArr);
    },
    tabDate(index) {}
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
  .roomAdd {
    width: 100%;
    height: 1.9733rem;
    background-color: #fff;
    padding: 0.4rem 0 0.4rem 0.32rem;
    .border-t(#dcdcdc,solid);
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
  .chooseDay {
    background-color: #fff;
    height: 1.1733rem;
    .border-t(#dcdcdc,solid);
    padding: 0 0.32rem;
    width: 100%;
    -webkit-overflow-scrolling: touch;
    overflow-x: scroll;
    overflow-y: hidden;
    .chooseSwipe {
      width: 200%;
      height: 100%;
    }
    .dateActive {
      color: #0dbbfb;
      border-bottom: 0.0533rem solid #0dbbfb;
    }
    .day {
      float: left;
      line-height: 1.1733rem;
      font-size: 0.32rem;
      color: 666;
      width: 2.6133rem;
    }
  }
}
</style>
