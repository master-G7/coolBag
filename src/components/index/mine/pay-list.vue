<template>
    <div class="pay-list">
        <div class="title">
            我的订单
        </div>
        <div class="count-down">请在{{minute}}分{{second}}秒内完成支付</div>
    </div>
</template>

<script >
export default {
  data() {
    return {
      second: 0,
      minute: 20
    };
  },
  methods: {
    countDown() {
      let go = setInterval(() => {
        if (this.second > 0 && this.second < 60) {
          this.second -= 1;
        } else if (this.second == 0) {
          this.second = 60;
          this.second -= 1;
          this.minute -= 1;
          if(this.minute<0){
              this.second=0
              this.minute=0
              clearInterval(go);
          }
        }
      }, 1000);
    }
  },
  components: {},
  mounted() {
    this.countDown();
  }
};
</script>

<style scoped lang="less">
.pay-list {
  width: 100%;
  .title {
    width: 100%;
    padding: 0 0.32rem;
    background-color: #fff;
    height: 1.1733rem;
    text-align: center;
    font-size: 0.4rem;
    color: #666;
    font-weight: bold;
    line-height: 1.1733rem;
  }
  .count-down {
    width: 100%;
    height: 0.96rem;
    color: #fff;
    text-align: center;
    line-height: 0.96rem;
    background-color: #a9daeb;
  }
}
</style>
