<template>
    <div class="home">
        <top></top>
        <list></list>
        <div @click='backTop' v-if='isshow' class="totop"></div>
    </div>
</template>
<script >
import top from "../../../components/top-position/top.vue";
import list from "../../../components/index-list/list.vue";

export default {
  data() {
    return {
      isshow: false,
      scrollTop: ""
    };
  },
  components: {
    top,
    list
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
  methods: {
    scrollToTop() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      this.scrollTop = scrollTop;
    },
    backTop() {
      let height = this.scrollTop;
      let interval = setInterval(() => {
        height -= 50;
        document.body.scrollTop -= 50;
        document.documentElement.scrollTop -= 50;
        if (height <= 0) {
          clearInterval(interval);
        }
      }, 30);
      //   document.documentElement.scrollTop = 0;
    }
  },
  watch: {
    scrollTop: function(v, o) {
      if (v >= 350) {
        this.isshow = true;
      } else {
        this.isshow = false;
      }
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
    backTop()
  }
};
</script>

<style scoped lang="less">
@import "../../../common/css/common.less";
.totop {
  position: fixed;
  bottom: 150px;
  right: 50px;
  .bg-image("/static/float/totop");
  width: 136px;
  height: 136px;
  background-size: 100%;
  display: block;
}
</style>
