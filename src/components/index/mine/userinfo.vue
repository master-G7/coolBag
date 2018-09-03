<template>
    <div class="userinfo">
        <div class="top">
            <div class="userimg"><img src="../../../../static/konglong.png" alt=""></div>
            <div class="username ">陈小皮的幸福生活</div>
            <div class=""></div>
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
.userinfo {
  width: 100%;
  .top {
    width: 100%;
    position: relative;
    height: 4.64rem;
    background-image: url("../../../assets/userinfo/my_bg.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding-top: 0.8rem;
    .userimg {
      width: 100%;
      img {
        display: block;
        width: 1.7333rem;
        margin: 0 auto;
        height: 1.7333rem;
        border-radius: 50%;
      }
    }
    .username {
      margin-top: 0.4667rem;
      color: #fff;
      font-size: 0.4rem;
      text-align: center;
    }
  }
}
</style>
