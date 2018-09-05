<template>
    <div class="mybook">
        <div class="title">
            <router-link to="userinfo">
                <i class="iconfont icon-fanhui1 fl"></i>
            </router-link>
            <router-link to="userinfo">
                <i class="iconfont icon-sousuo fr"></i>
            </router-link>
            <div class="tt">我发布的<div class="bd"></div></div>
            <div class="tt">我应约的<div class="bd"></div></div>
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
@import "../../../../common/css/common.less";
.mybook {
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
    .tt{
        font-size: 0.3733rem;
        display: inline-block;
        margin-left: 0.5334rem;
        position: relative;
        .bd{
            position: absolute;
            bottom: 0;
            left: 0.4666rem;
            width: 0.5333rem;
            height: 0.1066rem;
            background-color: #0ec2fe;
            border-radius: 0.1067rem;
        }
    }
  }
}
</style>
