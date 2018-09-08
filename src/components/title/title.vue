<template>
 <div class="title-c">
    <div class="title">
      <router-link :to="backRoute">
        <i class="iconfont icon-fanhui1 fl"></i>
      </router-link>
      {{text}}
    </div>
 </div>
</template>

<script >
export default {
    props: {
      text: String,
      backRoute: String,
    },
 data() {
 return {
 }
 },
 methods: {

 },
 components: {

 }
}
</script>

<style scoped lang="less">
.title-c{
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
  }
}
</style>
