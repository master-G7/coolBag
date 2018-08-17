<template>
  <div class="all">
    <!-- 搜索栏 -->
    <div class="toptop">
      <div class="search">
        <div class="city">
          <span>{{location}}</span>
          <i class="iconfont icon-xuandizhixiala"></i>
        </div>
        <i class="iconfont icon-sousuo"></i>
        <form action="">
          <input type="search" id="search_info">
        </form>
        
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
    <div class="map">
      <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center">
      </el-amap>
    </div>
  </div>

</template>

<script >
export default {
  data() {
    var that = this;
    return {
      location: sessionStorage.getItem("city"),
      isshow: false,
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
      ],
      center: [121.59996, 31.197646],
      lng: 0,
      lat: 0,
      plugin: [
        {
          pName: "Geolocation",
          events: {
            init(o) {
              o.getCurrentPosition((status, result) => {
                var str = result.addressComponent.city;
                var city = str.split("市").join("");
                sessionStorage.setItem("city", city);
                that.location = sessionStorage.getItem("city");
              });
            }
          }
        }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped lang="less">
@import "../../common/css/common.less";
.city {
  display: inline-block;
}
.toptop {
  background-color: #fff;
  height: 1.2rem;
  padding: 0.2134rem 0.4rem 0.16rem 0.4rem;
}
.search {
  form{
    display: inline;
  }
  position: relative;
  height: 0.6667rem;
  i.icon-sousuo {
    position: absolute;
    right: 7.1733rem;
    top: 0.2133rem;
  }
  span {
    font-size: 0.4rem;
    color: #666;
  }
  i {
    font-size: 0.32rem;
    color: #666;
  }
  #search_info {
    border: none;
    background-color: @bgc;
    width: 7.68rem;
    height: 0.8rem;
    font-size: 0.3733rem;
    border-radius: 0.3867rem;
    text-indent: 0.8533rem;
  }
}
.slide {
  width: 100%;
  height: 3.2rem;
  img {
    width: 100%;
    height: 3.2rem;
  }
}
.sort {
  display: flex;
  display: -moz-box; /* Firefox */
  display: -ms-flexbox; /* IE10 */
  display: -webkit-box; /* Safari */
  display: -webkit-flex; /* Chrome, WebKit */
  display: box;
  display: flexbox;
  height: 2.5333rem;
  background-color: #fff;
  div {
    width: 100%;
    height: 2.5333rem;
    span {
      display: block;
      height: 1.3333rem;
      width: 1.3333rem;
      background-repeat: no-repeat;
      background-size: 100%;
      margin: 0.2667rem auto;
    }
    i {
      display: block;
      font-size: 0.32rem;
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
.map {
  display: none;
}
</style>
