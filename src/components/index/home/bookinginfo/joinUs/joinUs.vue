<template>
    <div class="joinUs">
        <div class="title">
            <router-link to="home">
                <i class="iconfont icon-fanhui1 fl"></i>
            </router-link>
            球房加盟
        </div>
    </div>
</template>

<script >
export default {
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>

<style scoped lang="less">
@import "../../../../../common/css/common.less";
.joinUs {
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
}
</style>
