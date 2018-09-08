<template>
    <div class="apply">
        <headT text="球房加盟" backRoute='home'></headT>
        <div class="title p24">申请进度</div>
        <div class="p24">
            <div class="applybox">
                <ul class="line-content">
                    <li>
                        <div class="text">已提交申请</div>
                        <div class="yuan">
                            <div class="yuanxin"></div>
                        </div>
                        <div class="time">2018-04-19 13:10 </div>
                    </li>
                    <li>
                        <div class="text">等待审核</div>
                        <div class="yuan">
                            <div class="yuanxin"></div>
                        </div>
                    </li>
                    <li class='nopasst'>
                        <div class="text">审核不通过</div>
                        <div class="yuan">
                            <div class="yuanxin"></div>
                        </div>
                        <div class="time">2018-04-19 13:10 </div>
                        <div class="tip">提示：请上传真实的营业执照 </div>
                    </li>
                    <!-- <li class='pass'>
                        <div class="text">审核通过</div>
                        <div class="yuan">
                            <div class="yuanxin"></div>
                        </div>
                        <div class="time">2018-04-19 13:10 </div>
                    </li> -->
                </ul>
            </div>
        </div>
        <div class="p24 h60">
            <div class="h60">
                <div class="fl">球房名称</div>
                <div class="fr">粤美特国际台球俱乐部</div>
            </div>
        </div>
        <div class="p24 h60">
            <div class="h60">
                <div class="fl">注册手机号</div>
                <div class="fr">15918798195</div>
            </div>
        </div>
        <div class="p24 un">
            <div class="cfmbtn">返回</div>
        </div>
    </div>
</template>

<script >
import headT from "../../../../title/title";
export default {
  data() {
    return {};
  },
  methods: {},
  components: { headT }
};
</script>

<style scoped lang="less">
.apply {
  width: 100%;
  height: 100%;
  background-color: #fff;
  .title {
    line-height: 1.3333rem;
    height: 1.3333rem;
    font-size: 0.48rem;
    color: black;
  }
  .p24 {
    padding-bottom: 0.5333rem;
  }
  .mt30 {
    margin-top: 0.4rem;
  }
  .applybox {
    box-shadow: 0 0 0.1733rem #ccc;
    width: 100%;
    height: 7.1333rem;
    border-radius: 0.1067rem;
    .line-content {
      width: 100%;
      height: 100%;
      padding-left: 1.12rem;
      position: relative;
      overflow: hidden;
      padding-top: 0.9333rem;
      .pass {
        .text {
          color: #0bc0fe;
        }
      }
      li {
        line-height: 0.2667rem;
        position: relative;
        padding-left: 0.8533rem;
        height: 2.32rem;
        .tip {
          padding-top: 0.1334rem;
          color: #f8785e;
          font-size: 0.32rem;
        }
        .text {
          font-size: 0.4533rem;
          color: #000;
        }
        .time {
          padding-top: 0.2667rem;
          font-size: 0.2667rem;
          color: #666;
        }
        .yuan {
          background-color: #fff;
          position: absolute;
          top: 0rem;
          left: -0.2rem;
          width: 0.4rem;
          height: 0.4rem;
          border-radius: 50%;
          border: 0.0667rem solid #dbe9fc;
          z-index: 3;
          .yuanxin {
            position: absolute;
            top: 0.0533rem;
            left: 0.0533rem;
            width: 0.16rem;
            height: 0.16rem;
            border-radius: 50%;
            background-color: #0084ff;
          }
        }
      }
      .nopass {
        &:before {
          content: " ";
          border-left: 0.0267rem solid #ccc;
          position: absolute;
          left: 0;
          top: 0;
          width: 0.0133rem;
          bottom: 0;
          color: #ccc;
          z-index: 1;
        }
      }
      &:before {
        content: " ";
        border-left: 0.0267rem solid #0cbfff;
        position: absolute;
        left: 1.12rem;
        top: 0;
        width: 0.0133rem;
        bottom: 0;
        color: #0cbfff;
        z-index: 0;
      }
    }
  }
  .h60 {
    height: 0.8rem;
    color: black;
  }
  .un {
    padding-top: 1.5333rem;
    padding-bottom: 3.0667rem;
  }
}
</style>
