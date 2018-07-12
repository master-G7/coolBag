<template>
  <div id="app">
    <router-view></router-view>
    <bottom></bottom>
  </div>
</template>
<script>
import bottom from './components/index-bottom/index-bottom'
import top from './components/top-position/top.vue'
import list from './components/index-list/list.vue'
export default {
  components:{
    bottom,
  }
}
</script>
<style scoped>

</style>

