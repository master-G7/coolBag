    <template>
    <div class="bdMap">
        <div class="title">
            <router-link to="bookinfo">
                <i class="iconfont icon-fanhui1 fl"></i>
            </router-link>
            球房导航
        </div>
        <div class="content">
            <div class="info">
                <div class="left fl">
                    <img src="../../../static/xuexi.gif" alt="">
                </div>
                <div class="right">
                    <div class="roomtitle fl">超级无敌厉害的桌球小可爱
                        <span class='fr'>助教</span>
                    </div>
                    <div class="star fl">
                        <div class="fl instar">
                            <star :size='24' :score='2.9'></star>
                        </div>
                        <span>229m|1天前</span>
                    </div>
                    <div class="priceinfo fl">
                        <div class="pay fl">【台费支付】发起人付</div>
                        <div class="price fr">￥120/时</div>
                    </div>
                </div>
            </div>
            <div class="position fl">
                <div class="time fl">打球时间：2018-06-25 19:00-21:00
                    <span class="tip fr">已有一人应约</span>
                </div>
                <div class="place fl">打球场馆：粤美特桌球俱乐部</div>
            </div>
        </div>
        <div id="bmap"></div>
        <div class="p24">
            <div class="cfmbtn">上报到店</div>
        </div>
    </div>
</template>
    
    <script >
import { baiduMap } from "./map.js";
import star from '../star/star'
export default {
  data() {
    return {
      bmp: null,
      mapinit: null
    };
  },
  methods: {
    mapInit() {
      baiduMap("rGzuw8CUOotZ69CrmqrO3k1H6veMsg4Z").then(BMap => {
	// 百度地图API功能
	var map = new BMap.Map("bmap");    // 创建Map实例
	map.centerAndZoom(new BMap.Point(116.404, 39.915), 16);  // 初始化地图,设置中心点坐标和地图级别
	//添加地图类型控件
	map.addControl(new BMap.MapTypeControl({
		mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
        ]}));	  
	map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
	map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
      });
    }
  },
  components: {star,},
  created() {
      this.mapInit()
  },
};
</script>
    
<style scoped lang="less">
@import "../../common/css/common.less";
.bdMap {
  width: 100%;
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
  .content {
    .position {
      padding: 0.2667rem 0 0.5333rem 0;
      color: black;
      i {
        font-size: 0.3733rem;
        display: inline-block;
        position: relative;
        top: 0.0267rem;
      }
      height: 1.68rem;
      .time {
        width: 100%;
      }
      .tip {
        font-size: 0.2667rem;
      }
    }
    background-color: #fff;
    padding: 0 0.3333rem;
    height: 4.1333rem;
    .info {
      height: 2.4rem;
      padding: 0.5333rem 0 0.2667rem 0;
      // border-bottom: 0.0133rem dashed #dcdcdc;
      .border-1pxTop(#dcdcdc,dashed);
      .left {
        width: 1.6rem;
        height: 1.6rem;
        position: relative;
        .triangle {
          position: absolute;
          top: 0;
          right: 0;
          width: 0;
          height: 0;
          border-top-right-radius: 0.08rem;
          border-style: solid;
          border-width: 0 0.6667rem 0.5334rem 0;
          border-color: transparent #fa5c41 transparent transparent;
        }
        .text {
          position: absolute;
          top: 0.04rem;
          right: 0;
          font-weight: bold;
          color: #fff;
          font-size: 0.2133rem;
          z-index: 1;
          -webkit-transform: rotate(38deg);
          -moz-transform: rotate(38deg);
        }
        img {
          border-radius: 0.08rem;
          width: 100%;
          height: 100%;
        }
      }
      .right {
        margin-left: 1.8667rem;
        .roomtitle {
          font-size: 0.4267rem;
          font-weight: bold;
          color: #333;
          span {
            border: 0.0133rem solid #ff9120;
            width: 0.8rem;
            height: 0.4rem;
            text-align: center;
            line-height: 0.4rem;
            font-size: 0.2933rem;
            font-weight: normal;
            color: #ff9120;
            margin-left: 0.16rem;
            border-radius: 0.08rem;
          }
        }
        .star {
          width: 100%;
          height: 100%;
          color: #999;
          .instar {
            margin-right: 0.1333rem;
          }
          span {
            font-size: 0.2667rem;
            margin-left: 0.1333rem;
          }
        }
        .priceinfo {
          width: 100%;
          color: #999;
          font-size: 0.32rem;
          text-indent: -0.1067rem;
          .price {
            color: #fd3d39;
            font-size: 0.4533rem;
          }
        }
      }
    }
    .border-t(#dcdcdc,solid);
  }
  #bmap{
      margin-top: 0.2667rem;
      width: 100%;
      height:9rem ;
      .border-t(#dcdcdc,solid)
  }
}
</style>
    