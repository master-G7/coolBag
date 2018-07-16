<template>
    <div class="backtotop">
        <div @click='backTop' v-if='isshow' class="totop"></div>
    </div>
</template>

<script >
export default {
  data() {
    return {
      isshow: false,
      scrollTop: ""
    };
  },
  components: {},
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
  }
};
</script>

<style scoped lang="less">
@import '../../../src/common/css/common.less';
.totop {
  position: fixed;
  bottom: 2rem;
  right: 0.6667rem;
  .bg-image("/static/float/totop");
  width: 1.8133rem;
  height: 1.8133rem;
  background-size: 100%;
  display: block;
}
</style>
