<template>
    <div id="index-bottom">
        <mt-tabbar v-model="selected" fixed>
            <mt-tab-item  id="index">
                <img v-show="path !== 'index'" slot="icon" src="../../../static/icon-index/tab-icon/home@3x.png"> 首页
                <img v-show="path == 'index'" slot="icon" src="../../../static/icon-index/tab-icon/home-blue@3x.png">
            </mt-tab-item>
            <mt-tab-item  id="room">
                <img v-show="path !== 'room'" slot="icon" src="../../../static/icon-index/tab-icon/ballroom@3x.png"> 球房
                <img v-show="path == 'room'" slot="icon" src="../../../static/icon-index/tab-icon/ballroom-blue@3x.png">
            </mt-tab-item>
            <mt-tab-item  id="community">
                <img v-show="path !== 'community'" slot="icon" src="../../../static/icon-index/tab-icon/community@3x.png"> 社区
                <img v-show="path == 'community'" slot="icon" src="../../../static/icon-index/tab-icon/community-blue@3x.png">
            </mt-tab-item>
            <mt-tab-item  id="user">
                <img v-show="path !== 'user'" slot="icon" src="../../../static/icon-index/tab-icon/mine@3x.png"> 我的
                <img v-show="path == 'user'" slot="icon" src="../../../static/icon-index/tab-icon/mine-blue@3x.png">
            </mt-tab-item>
        </mt-tabbar>
    </div>
</template>

<script >
export default {
  data() {
    return {
        path:'index',
      selected: "index"
    };
  },
  components: {},
  methods: {
  },
  watch: {
    selected: function(val, oldVal) {
      switch (val) {
        case "index":
          this.$router.push("/home");
          this.path="index"
          break;
        case "room":
          this.$router.push("/ballroom");
          this.path="room"
          break;
        case "community":
          this.$router.push("/shequ");
          this.path="community"
          break;
        case "user":
          this.$router.push("/mine");
          this.path="user"
          break;
      }
    }
  }
};
</script>
<style lang='less'>
@import "../../common/css/common.less";

#index-bottom {
  .mint-tabbar > .mint-tab-item.is-selected {
    background-color: rgba(0,0,0,0);
    color: #26a2ff;
}
  .mint-tab-item-icon {
    width: 38px;
    height: 38px;
  }
  .mint-tab-item-label {
    font-size: 20px;
    margin-top: 10px;
    -webkit-user-select: none;

    -moz-user-select: none;

    -ms-user-select: none;

    user-select: none;
  }
  .mint-tabbar {
    height: 90px;
    .mint-tab-item {
      padding: 10px 0;
      img {
        width: 38px;
        height: 38px;
      }
    }
  }
}
</style>

