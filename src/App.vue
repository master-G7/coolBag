<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view></router-view>
    </transition>

  </div>
</template>
<script>
sessionStorage.setItem("tabpath", "/home");
export default {
  data() {
    return {
      transitionName: "slide-left"
    };
  },
  mounted() {},
  methods: {},
  components: {},
  watch: {
    $route(to, from) {
      if (to.path == sessionStorage.getItem("historypath")) {
        this.transitionName = "slide-right";
      } else {
        this.transitionName = "slide-left";
        sessionStorage.setItem("historypath", from.path);
      }
      console.log(sessionStorage.getItem("historypath") + "---" + to.path);
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


