<template>
  <div class="all">
    <!-- 搜索栏 -->
    <div class="top">
      <div class="search">
        <span class="position">深圳</span>
        <i class="el-icon-arrow-down"></i>
        <input type="text" id="search_info">
      </div>
    </div>
    <!-- 轮播图 -->
    <div class="slide">
      <mt-swipe :auto="2000" :speed='500'>
        <mt-swipe-item v-for="item in slides" :key="item.id">
          <a :href="item.href" rel="external nofollow">
            <img :src="item.src">
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 分类 -->
    <div class="sort">
      <div class="rival">
        <span></span>
        <i>找对手</i>
      </div>
      <div class="assistant">
        <span></span>
        <i>找助教</i>
      </div>
      <div class="room">
        <span></span>
        <i>找球房</i>
      </div>
      <div class="join">
        <span></span>
        <i>球房加盟</i>
      </div>
    </div>
  </div>
</template>

<script >
export default {
  data() {
    return {
      slides: [
        {
          src: "http://192.168.2.128:8081/static/banner03.png",
          href: "JavaScript:void(0)"
        },
        {
          src: "http://192.168.2.128:8081/static/banner02.png",
          href: "JavaScript:void(0)"
        },
        {
          src: "http://192.168.2.128:8081/static/banner04.png",
          href: "JavaScript:void(0)"
        }
      ]
    };
  }
};
</script>

<style scoped lang="less">
@import "../../common/css/common.less";
.top {
  background-color: #fff;
  height: 80px;
}
.search {
  padding: 12px 30px 10px 30px;
  height: 40px;
  span,
  i {
    font-size: 30px;
    color: #666;
  }
  #search_info {
    border: none;
    background-color: @bgc;
    width: 580px;
    height: 60px;
    font-size: 28px;
    border-radius: 29px;
    text-indent: 10px;
  }
}
.slide {
  width: 100%;
  height: 240px;
  img {
    width: 100%;
    height: 240px;
  }
}
.sort {
  display: flex;
  display: -moz-box;  /* Firefox */ 
  display: -ms-flexbox;    /* IE10 */ 
  display: -webkit-box;    /* Safari */  
  display: -webkit-flex;    /* Chrome, WebKit */ 
  display: box;  
  display: flexbox;    
  height: 190px;
  background-color: #fff;
  div {
    width: 100%;
    height: 190px;
    span {
      display: block;
      height: 100px;
      width: 100px;
      background-repeat: no-repeat;
      background-size: 100%;
      margin: 20px auto;
    }
    i {
      display: block;
      font-size: 24px;
      text-align: center;
    }
  }
  .rival {
    span {
      .bg-image("../../../static/icon-index/sort-icon/duishou");
    }
  }
  .assistant {
    span {
      .bg-image("../../../static/icon-index/sort-icon/zhujiao");
    }
  }
  .room {
    span {
      .bg-image("../../../static/icon-index/sort-icon/qiufang");
    }
  }
  .join {
    span {
      .bg-image("../../../static/icon-index/sort-icon/jiameng");
    }
  }
}
</style>
