<template>
    <div class="mylike">
        <div class="bianji" @click='editor'>{{isEditor?'取消':'编辑'}}</div>
        <myTitle backRoute='userinfo' text='我的收藏'></myTitle>
        <div class="body">
            <div class="box">
                <div class="btn fr">
                    ￥120/时
                </div>
                <div class="yuan" v-show='isEditor'>
                    <input type="checkbox" class='checkbox' v-model="ischeck" value='1' id="my1">
                    <label for="my1"></label>
                    <!-- <i class='iconfont icon-xuanzhong'></i> -->
                </div>
                <div class="img">
                    <img src="../../../../assets/daima2.gif" alt="">
                </div>
                <div :class="isEditor? 'right2':'right'">
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
                <div class="btn fr">
                    ￥120/时
                </div>
                <div class="yuan" v-show='isEditor'>
                    <input type="checkbox" class='checkbox' v-model="ischeck" value='2' id="my2">
                    <label for="my2"></label>
                    <!-- <i class='iconfont icon-xuanzhong'></i> -->
                </div>
                <div class="img">
                    <img src="../../../../assets/daima2.gif" alt="">
                </div>
                <div :class="isEditor? 'right2':'right'">
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
        </div>
        <div class="bottom" v-show='isEditor'>
            <div class="bottom2">
                <div class="left clearfix" @click='selectitemAll'>
                    <div class="yuan fl" v-if="!selectAll"></div>
                    <i class="iconfont icon-xuanzhong fl" v-else></i>
                    <span class='fl text'>全选</span>
                </div>
                <div class="right ">
                    删除
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
    return {
      isEditor: false,
      ischeck: [],
      selectAll: false
    };
  },
  methods: {
    editor() {
      this.isEditor = !this.isEditor;
    },
    selectitemAll() {
      this.selectAll = !this.selectAll;
    }
  },
  components: {
    myTitle,
    star
  }
};
</script>

<style scoped lang="less">
@import "../../../../common/css/common.less";
.mylike {
  width: 100%;
  height: 100%;
  .bianji {
    top: 0.32rem;
    right: 0.32rem;
    position: absolute;
    color: #666;
    font-size: 0.3733rem;
  }
  .checkbox {
    position: absolute;
    width: 0.5333rem;
    height: 0.5333rem;
    top: 1.0667rem;
    left: 0.24rem;
    opacity: 0;
    & + label {
      float: left;
      margin-top: 0.5334rem;
      margin-right: 0.32rem;
      width: 0.4267rem;
      height: 0.4267rem;
      border-radius: 50%;
      &::before {
        border-radius: 50%;
      }
      .border-all(#999,solid);
    }
    &:checked + label {
      background: url("/static/select.png") no-repeat;
      background-size: 100%;
      &::before {
        border: 0;
      }
    }
  }

  .body {
    margin-top: 0.2667rem;
    height: 100%;
    width: 100%;
    background-color: #fff;
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
      .right2 {
        margin-left: 2.6937rem;
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
        color: #ff3d31;
        text-align: center;
        height: 0.4rem;
        font-size: 0.4rem;
      }
      .border-b(#dcdcdc,solid);
    }
  }
  .bottom {
    width: 100%;
    height: 1.3067rem !important;
    position: fixed !important;
    bottom: 0rem;
    .bottom2 {
      width: 100%;
      .left {
        width: 20%;
        height: 100%;
      }
      .right {
          font-size: 0.4533rem; 
        position: absolute;
        right: 0;
        top: 0;
        line-height:1.3067rem ;
        height: 1.3067rem;
        width: 3.3333rem;
        background-color: #0bc0fe;
        color: #fff;
        text-align: center;
      }

      background-color: #fff;
      .border-t(#dcdcdc,solid);
      padding: 0.4267rem 0 0.4267rem 0.32rem;
      position: fixed;
      height: 100%;
      .yuan {
        height: 0.4533rem;
        width: 0.4533rem;
        height: 0.4533rem;
        border-radius: 50%;
        &::before {
          border-radius: 50%;
        }

        .border-all(#999,solid);
      }
      .text {
        line-height: 0.5333rem;
        margin-left: 0.2667rem;
      }
      .icon-xuanzhong {
        font-size: 0.4933rem;

        color: #0bc0fe;
      }
    }
  }
}
</style>
