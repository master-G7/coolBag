<template>
  <div id="index-bottom">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="/home">
        <img v-show="path !== '/home'" slot="icon" src="../../../static/icon-index/tab-icon/home@3x.png"> 首页
        <img v-show="path == '/home'" slot="icon" src="../../../static/icon-index/tab-icon/home-blue@3x.png">
      </mt-tab-item>
      <mt-tab-item id="/ballroom">
        <img v-show="path !== '/ballroom'" slot="icon" src="../../../static/icon-index/tab-icon/ballroom@3x.png"> 球房
        <img v-show="path == '/ballroom'" slot="icon" src="../../../static/icon-index/tab-icon/ballroom-blue@3x.png">
      </mt-tab-item>
      <mt-tab-item id="/shequ">
        <img v-show="path !== '/shequ'" slot="icon" src="../../../static/icon-index/tab-icon/community@3x.png"> 社区
        <img v-show="path == '/shequ'" slot="icon" src="../../../static/icon-index/tab-icon/community-blue@3x.png">
      </mt-tab-item>
      <mt-tab-item id="/mine">
        <img v-show="path !== '/mine'" slot="icon" src="../../../static/icon-index/tab-icon/mine@3x.png"> 我的
        <img v-show="path == '/mine'" slot="icon" src="../../../static/icon-index/tab-icon/mine-blue@3x.png">
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script >
export default {
  data() {
    return {
      path: sessionStorage.getItem("tabpath"),
      selected: sessionStorage.getItem("tabpath"),
      transitionName: "slide-left"
    };
  },
  components: {},
  methods: {},
  watch: {
    selected: function(val, oldVal) {
      switch (val) {
        case "/home":
          sessionStorage.setItem("tabpath", "/home");
          this.path = sessionStorage.getItem("tabpath");
          this.$router.push("/home");
          break;
        case "/ballroom":
          sessionStorage.setItem("tabpath", "/ballroom");
          this.path = sessionStorage.getItem("tabpath");
          this.$router.push("/ballroom");
          break;
        case "/shequ":
          sessionStorage.setItem("tabpath", "/shequ");
          this.path = sessionStorage.getItem("tabpath");
          this.$router.push("/shequ");
          break;
        case "/mine":
          sessionStorage.setItem("tabpath", "/mine");
          this.path = sessionStorage.getItem("tabpath");
          this.$router.push("/mine");
          break;
      }
    },
    $route(to, from) {
      this.path = to.path;
      this.selected = to.path;
      if (to.meta.index > from.meta.index) {
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    }
  }
};
</script>
<style scoped>
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>
<style lang='less'>
@import "../../common/css/common.less";

#index-bottom {
  .mint-tabbar > .mint-tab-item.is-selected {
    background-color: rgba(0, 0, 0, 0);
    .mint-tab-item-label{

      color: #26a2ff 
    }
  }
  .mint-tab-item-icon {
    width: 0.5067rem;
    height: 0.5067rem;
  }
  .mint-tab-item-label {
    font-size: 0.2667rem;
    margin-top: 0.1333rem;
    color: #ccc;
    -webkit-user-select: none;

    -moz-user-select: none;

    -ms-user-select: none;

    user-select: none;
  }
  .mint-tabbar {
    height: 1.2rem;
    .mint-tab-item {
      padding: 0.1333rem 0;
      img {
        width: 0.5067rem;
        height: 0.5067rem;
      }
    }
  }
}
</style>

