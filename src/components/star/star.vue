 <template>
    <div class="five-star">
        <div class="star" :class='starType'>
            <span class="star-item" v-for='item in starClass' :key='item.id' :class='item'></span>
        </div>
    </div>
</template>
 
 <script >
const LENGTH = 5;
const STAR_ON = "on";
const STAR_OFF = "off";
const STAR_HALF = "half";
export default {
  props: {
    size: Number,
    score: Number
  },
  data() {
    return {};
  },
  methods: {},
  components: {},
  computed: {
    starType() {
      return "star-" + this.size;
    },
    starClass() {
      let result = [];
      let score = Math.floor(this.score * 2) / 2;
      let haspoint = score % 1 != 0;
      let integer = Math.floor(score);
      for (let i = 0; i < integer; i++) {
        result.push(STAR_ON);
      }
      if (haspoint) {
        result.push(STAR_HALF);
      }
      while (result.length < LENGTH) {
        result.push(STAR_OFF);
      }
      return result;
    }
  }
};
</script>
 
 <style scoped lang="less">
@import "../../common/css/common.less";
.star {
  font-size: 0;
  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }
  &.star-24 {
    .star-item {
      width: 0.32rem;
      height: 0.32rem;
      margin-right: 0.0801rem;
      background-size: 0.32rem 0.32rem;
    }
    &:last-child {
      margin-right: 0;
    }
    .on {
      .bg-image("../../assets/star/star-all24");
    }
    .off {
      .bg-image("../../assets/star/star-off24");
    }
    .half {
      .bg-image("../../assets/star/star-half24");
    }
  }
}
</style>
 