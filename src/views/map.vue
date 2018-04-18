<template>
  <div class="map-wrap">
    <div id="bd"></div>
  </div>
</template>

<script>
  export default {
    name: "bdmap",
    data() {
      return {
        map: null
      }
    },
    methods: {
      initMap() {
        this.map = new BMap.Map('bd');
// 创建地图实例
        var point = new BMap.Point(116.404, 39.915);
// 创建点坐标
        this.map.centerAndZoom(point, 7);
// 初始化地图， 设置中心点坐标和地图级别
      }
    },
    created() {
      this.$nextTick(() => {
        this.initMap();
      })
    }
  }
</script>

<style scoped>
  html {height: 100%;}
  body{height: 100%; margin: 0px; padding: 0px;}

.map-wrap {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  width: 100%;
}
  #bd {
    z-index: 999;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
  }
</style>
