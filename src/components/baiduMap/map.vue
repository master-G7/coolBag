<template>
    <div class="mine">
        <el-amap vid="amap" :plugin="plugin" class="amap-demo" :center="center">
        </el-amap>
    </div>
</template>

  <style>
.mine{
    display: none;
}
</style>

  <script>
module.exports = {
  data() {
    let self = this;
    return {
      center: [121.59996, 31.197646],
      lng: 0,
      lat: 0,
      loaded: false,
      plugin: [
        {
          pName: "Geolocation",
          events: {
            init(o) {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                let location = result.addressComponent.city
                 sessionStorage.setItem('location',location)
              });
            }
          }
        }
      ]
    };
  },
  methods: {
      getlocation:function () { 
          if(this.location!=''){
               this.$emit('location', this.location)
          }
       }
  }
};
</script>

