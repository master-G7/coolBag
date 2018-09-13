<template>
    <div class="signing">
        <myTitle text='签约球房' backRoute='myService'></myTitle>
        <div class="body">
            <div class="choosetitle">
                <span>全部
                    <i class="iconfont icon-xialajiantou"></i>
                </span>
                <span>类型
                    <i class="iconfont icon-xialajiantou"></i>
                </span>
                <span>发布时间
                    <i class="iconfont icon-xialajiantou"></i>
                </span>
                <span>距离
                    <i class="iconfont icon-xialajiantou"></i>
                </span>
            </div>
            <div class="box">
                <div class="btn fr">
                    已申请
                </div>
                <div class="img">
                    <img src="../../../../assets/daima2.gif" alt="">
                </div>
                <div class="right">
                    <div class="head">粤美特国际台球俱乐部</div>
                    <div class="star">
                        <div class="fl">人气999</div>
                        <star :size='24' :score='3'></star>
                    </div>
                    <div class="position">
                        <i class="iconfont icon-dingwei"></i>
                        <div class="far">深圳市南山区粤美特桌球俱乐部( &lt; 500m )</div>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="apply fr">
                    申请签约
                </div>
                <div class="img">
                    <img src="../../../../assets/daima2.gif" alt="">
                </div>
                <div class="right">
                    <div class="head">粤美特国际台球俱乐部</div>
                    <div class="star">
                        <star :size='24' score='3'></star>
                        <div class="fl">人气999</div>
                    </div>
                    <div class="position">
                        <i class="iconfont icon-dingwei"></i>
                        <div class="far">深圳市南山区粤美特桌球俱乐部( &lt; 500m )</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
import myTitle from "../../../title/title";
import star from "../../../star/star";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    myTitle,
    star
  }
};
</script>

<style scoped lang="less">
@import "../../../../common/css/common.less";
.signing {
  width: 100%;
  .body {
    background-color: #fff;
    width: 100%;
    height: 100%;
    position: fixed;
    margin-top: 0.2667rem;
    .choosetitle {
      height: 1.0667rem;
      display: flex;
      .border-1pxTop(#dcdcdc,solid);
      span {
        width: 100%;
        text-align: center;
        line-height: 1.0667rem;
        display: block;
        i {
          color: #999;
          position: relative;
          top: -0.0267rem;
          font-size: 0.2133rem;
        }
      }
    }
    .box {
      padding: 0.5333rem 0.32rem;
      .img {
        float: left;
        width: 1.5733rem;
        height: 1.5733rem;
        border-radius: 0.1067rem;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .right {
        margin-left: 1.867rem;
        color: #999;
        .head {
          color: #000;
          font-size: 0.4533rem;
          height: 0.4533rem;
        }
        .star {
          margin-top: 0.2667rem;
          height: 0.32rem;
          font-size: 0.32rem;
          position: relative;
          .fl {
            position: absolute;
            left: 2.1333rem;
            top: 0;
          }
        }
        .position {
          position: relative;
          i {
            position: absolute;
            top: 0rem;
            font-size: 0.3733rem;
            left: -0.0267rem;
          }
          .far {
            margin-left: 0.4rem;
          }
          margin-top: 0.2933rem;
          font-weight: 0.4267rem;
          height: 0.4267rem;
          line-height: 0.3733rem;
        }
      }
      .btn {
        color: #999;
        text-align: center;
        line-height: 0.72rem;
        width: 1.9733rem;
        height: 0.72rem;
        border-radius: 0.1067rem;
        &::before {
          border-radius: 0.1067rem;
        }
        .border-all(#999,solid);
      }
      .apply {
        color: #0dc0fe;
        text-align: center;
        line-height: 0.72rem;
        width: 1.9733rem;
        height: 0.72rem;
        border-radius: 0.1067rem;
        &::before {
          border-radius: 0.1067rem;
        }
        .border-all(#0dc0fe,solid);
      }
      .border-b(#dcdcdc,solid);
    }
  }
}
</style>
