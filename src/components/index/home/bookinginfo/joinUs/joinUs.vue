<template>
  <div class="joinUs">
    <div class="title">
      <router-link to="home">
        <i class="iconfont icon-fanhui1 fl"></i>
      </router-link>
      球房加盟
    </div>
    <div class="content">
      <div class="h90">
        <div class="fl">球房名称</div>
        <div class="text">粤美特国际台球俱乐部</div>
      </div>
      <div class="h90">
        <div class="fl">所在地区</div>
        <div class="text" v-show='!isSelectArea' @click='areaSelectVb = true;isSelectArea=true'>
          <span class="c66">请选择</span>&nbsp;省&nbsp;
          <span class="c66">请选择</span>&nbsp;市&nbsp;
          <span class="c66">请选择</span>&nbsp;区</div>
        <div class="text" v-show='isSelectArea' @click='areaSelectVb = true'>
          <span class="c66">{{Province}}</span>&nbsp;-&nbsp;
          <span class="c66">{{city}}</span>&nbsp;-&nbsp;
          <span class="c66">{{region}}</span>&nbsp;</div>
      </div>
      <div class="h90">
        <div class="fl">详细地址</div>
        <div class="text">
          <input type="text" v-model='addressDetail' placeholder="请输入球房详细地址">
        </div>
      </div>
      <div class="h90">
        <div class="fl">球房电话</div>
        <div class="text">
          <input type="text" v-model='addressDetail' placeholder="请输入球房电话" ref="upimg">
        </div>
      </div>
      <div class="h90">
        <div class="fl">营业时间</div>
        <div class="text" @click='timeSelectVb = true'>
          <span class="c66">{{starHour}}:{{starMin}}</span>&nbsp; 至 &nbsp;
          <span class="c66">{{endHour}}:{{endMin}}</span>
        </div>
      </div>
      <div class="uploadImg">
        <div class="fl">营业执照</div>
        <div class="img" @click='upimgClick'>
          <img :src="src" alt="">
          <input type="file" class='uploadInput' @change="fileChange($event)" ref='upimg'>
          <i class="iconfont icon-jia" @click='upimgClick'></i>
        </div>
      </div>
      <div class="h90">
        <div class="fl">注册手机</div>
        <div class="text"><input type="text" placeholder="请输入手机号码"></div>
      </div>
      <div class="h90">
        <div class="fl tar">验证码</div>
        <div class="text"><input type="text" placeholder="请输入验证码"></div>
      </div>
      <div class="h90">
        <div class="fl ">登录密码</div>
        <div class="text"><input type="password" placeholder="请输入密码"></div>
      </div>
    </div>
    <div class="end" @click='doduty'>
      <div class="fl yuan">
        <i class="iconfont icon-chenggong" v-if='responsibility'></i>
      </div>
      <div class="text">本申请表格锁填内容正确无误,如因本人提交的资料有误而造成的一切后果及责任由本人承担。</div>
    </div>
    <div class="p24">
      <div class="cfmbtn" @click='apply'>立即申请</div>
    </div>
    <div class="bottom">
      <mt-popup v-model="areaSelectVb" position="bottom">
        <mt-picker :slots="addressSlots" @change="addressChange"></mt-picker>
      </mt-popup>
      <mt-popup v-model="timeSelectVb" position="bottom">
        <mt-picker :slots="timeSelectSlots" @change="timeChange"></mt-picker>
      </mt-popup>
    </div>
  </div>

</template>

<script >
import { Picker } from "mint-ui";
import { Toast } from "mint-ui";
import myaddress from "./pca.json";
export default {
  data() {
    return {
      responsibility: false,
      src: "",
      areaSelectVb: false,
      isSelectArea: false,
      timeSelectVb: false,
      Province: "",
      city: "",
      region: "",
      addressDetail: "",
      starHour: "00",
      endHour: "00",
      starMin: "00",
      endMin: "00",
      addressSlots: [
        {
          flex: 1,
          values: Object.keys(myaddress),
          className: "slot1",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: [],
          className: "slot3",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot4"
        },
        {
          flex: 1,
          values: [],
          className: "slot5",
          textAlign: "center"
        }
      ],
      timeSelectSlots: [
        {
          flex: 1,
          values: [
            "00",
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23"
          ],
          className: "slot1",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: ["00", "15", "30", "45"],
          className: "slot3",
          textAlign: "center"
        },
        {
          divider: true,
          content: "至",
          className: "slot2"
        },
        {
          flex: 1,
          values: [
            "00",
            "01",
            "02",
            "03",
            "04",
            "05",
            "06",
            "07",
            "08",
            "09",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23"
          ],
          className: "slot1",
          textAlign: "center"
        },
        {
          divider: true,
          content: "-",
          className: "slot2"
        },
        {
          flex: 1,
          values: ["00", "15", "30", "45"],
          className: "slot3",
          textAlign: "center"
        }
      ]
    };
  },
  methods: {
    doduty() {
      this.responsibility = !this.responsibility;
    },
    addressChange(picker, values) {
      picker.setSlotValues(1, Object.keys(myaddress[values[0]]));
      picker.setSlotValues(2, myaddress[values[0]][values[1]]);
      this.Province = values[0];
      this.city = values[1];
      this.region = values[2];
    },
    timeChange(picker, values) {
      this.starHour = values[0];
      this.starMin = values[1];
      this.endHour = values[2];
      this.endMin = values[3];
    },
    upimgClick() {
      this.$refs.upimg.click();
    },
    fileChange(e) {
      let maxSize = 1024 * 1024 * 3;
      let file = e.target.files[0];
      if (file.type.indexOf("image") == -1) {
        Toast("只接受图片上传");
      } else if (file.size > maxSize) {
        Toast("图片大小必须小于3M");
      } else {
        let reader = new FileReader();
        let _this = this;
        reader.readAsDataURL(file);
        reader.onload = function(e) {
          _this.src = e.target.result;
        };
      }
    },
    apply() {
      if (!this.responsibility) {
        Toast({
          message: "请阅读并勾选免责声明",
          position: "middle",
          duration: 1500
        });
      } else {
        Toast({
          message: "成功发送申请请求",
          position: "middle",
          iconClass: "iconfont icon-chenggong",
          className: "joinUs-icon",
          duration: 2000
        });
        setTimeout(() => {
         this.$router.push({ path: 'apply' })
        }, 1000);
      }
    }
  },
  components: {},
  created() {
    this.isSelectArea = false;
  }
};
</script>

<style scoped lang="less">
@import "../../../../../common/css/common.less";
.joinUs {
  width: 100%;
  overflow-x: hidden;
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
  .tar {
    text-align: end;
  }
  .end {
    padding: 0 0.32rem;
    margin-top: 0.4rem;
    position: relative;
    .text {
      margin-left: 0.6133rem;
      color: #999;
      font-size: 0.32rem;
    }
  }
  .content {
    margin-top: 0.2667rem;
    font-size: 0.3733rem;
    color: #000;
  }
  .yuan {
    position: absolute;
    top: 0.1067rem;
    width: 0.4rem;
    height: 0.4rem;
    overflow: hidden;
    border-radius: 50%;
    i.icon-chenggong {
      color: #0bc0fe;
      font-size: 0.3rem;
      position: absolute;
      left: 0.0599rem;
      bottom: 0.01167rem

    }
    &::before {
      border-radius: 50%;
    }
    .border-all(#999,solid);
  }
  .h90 {
    background-color: #fff;
    padding: 0 0.32rem;
    line-height: 1.2rem;
    height: 1.2rem;
    input {
      width: 100%;
      height: 100%;
      line-height: 100%;
      border: 0;
    }
    .text {
      margin-left: 1.91333rem;
    }
    .border-b(#dcdcdc,solid);
  }
  .h160 {
    padding: 0 0.32rem;
    line-height: 2.1333rem;
    height: 2.1333rem;
    .border-b(#dcdcdc,solid);
  }
  .c66 {
    color: #666;
  }
  .uploadInput {
    opacity: 0;
    //   position: relative;
  }
  .uploadImg {
    background: #fff;
    width: 100%;
    height: 3.0933rem;
    padding: 0.4267rem 0.32rem 0 0.32rem;
    position: relative;
    z-index: 200;
    .img {
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.3);
      img {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: -999;
        top: 0;
        left: 0;
      }
      width: 1.7067rem;
      height: 2.2133rem;
      position: absolute;
      text-align: center;
      line-height: 2.2133rem;
      left: 2.2267rem;
      top: 0.4267rem;
      color: #fff;
      font-size: 0.5067rem;
      .icon-jia {
        position: absolute;
        top: 0;
        left: 0.6666rem;
      }
    }
    .border-b(#dcdcdc,solid);
  }
}
</style>

<style lang="less">
.joinUs-icon {
  .icon-chenggong {
    font-size: 1.0667rem;
  }
}
.joinUs {
  .mint-popup-bottom {
    width: 100%;
  }
}
</style>

