<template>
    <div class="teacherRecord">
        <myTitle text='助教记录' backRoute='myService'></myTitle>
        <div class="h210">
            <div class="up">
                <div class="fl">粤美特国际台球俱乐部</div>
                <div class="fr">+100.00元</div>
            </div>
            <div class="middle">
                中式-08
            </div>
            <div class="down">
                2018-07-13 15:00-16:00
            </div>
        </div>
        <div class="h210">
            <div class="up">
                <div class="fl">粤美特国际台球俱乐部</div>
                <div class="fr">+100.00元</div>
            </div>
            <div class="middle">
                中式-08
            </div>
            <div class="down">
                2018-07-13 15:00-16:00
            </div>
        </div>
    </div>
</template>

<script >
import myTitle from "../../../title/title";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    myTitle
  }
};
</script>

<style scoped lang="less">
@import "../../../../common/css/common.less";
.teacherRecord {
  width: 100%;
  .h210 {
      background-color: #fff;
    height: 2.8rem;
    padding: 0.5333rem 0.32rem 0.4rem 0.32rem;
    // line-height: 0;
    .up{
        height: 0.4rem;
        font-size: 0.4rem;
        .fr{
            font-weight: bold;
        }
    }
    .middle{
        margin-top: 0.4rem;
        color: #666;
        // font-size: 0.32rem;
        height: 0.32rem;
    }
    .down{
        color: #999;
        height: 0.2667rem;
        font-size: 0.2667rem;
        margin-top: 0.4rem;
    }
    .border-t(#dcdcdc,solid);
  }
}
</style>
