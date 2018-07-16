<template>
  <div class="home">
    <top></top>
    <list></list>
    <backToTop></backToTop>
    <!-- <bottom></bottom> -->
  </div>
</template>
<script >
import top from "../../../components/top-position/top.vue";
import list from "../../../components/index-list/list.vue";
import backToTop from "../../../components/backto-top/backToTop.vue";
import location from "../../../components/baiduMap/map.vue";
import bottom from '../../../components/index-bottom/index-bottom'
export default {
  data() {
    return {
      center: [121.59996, 31.197646],
      lng: 0,
      lat: 0,
      loaded: false,
      plugin: [
        {
          pName: "Geolocation",
          events: {
            init(o) {
              o.getCurrentPosition((status, result) => {
                let location = result.addressComponent.city;
                sessionStorage.setItem("location", location);
              });
            }
          }
        }
      ]
    };
  },
  components: {
    top,
    list,
    backToTop,
    location,
    bottom
  },
  methods: {
  },
  mounted() {}
};
</script>

<style  scoped lang="less">
@import "../../../common/css/common.less";
.home {
  margin-bottom: 1.2rem;
}
</style>

