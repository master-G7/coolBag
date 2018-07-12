<template>
    <div class="home">
        <top></top>
        <list></list>
        <backToTop></backToTop>
    </div>
</template>
<script >
import top from "../../../components/top-position/top.vue";
import list from "../../../components/index-list/list.vue";
import backToTop from '../../../components/backto-top/backToTop.vue'
export default {
  data() {
    return {

    };
  },
  components: {
    top,
    list,
    backToTop
  },


};
</script>

<style scoped lang="less">
@import "../../../common/css/common.less";

</style>
