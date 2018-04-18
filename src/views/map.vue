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
        var map = new BMap.Map("bd");    // 创建Map实例
        map.centerAndZoom(new BMap.Point(108.394767,22.794653), 15);  // 初始化地图,设置中心点坐标和地图级别
        //添加地图类型控件
        map.addControl(new BMap.MapTypeControl({
          mapTypes:[
            BMAP_NORMAL_MAP,
            BMAP_HYBRID_MAP
          ]}));
        map.setCurrentCity("北京");          // 设置地图显示的城市 此项是必须设置的
        map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
        var top_right_navigation = new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_ZOOM, offset: new BMap.Size(20, 60)});
        var marker = new BMap.Marker(new BMap.Point(108.394767,22.794653));
        map.addOverlay(marker);              // 将标注添加到地图中
        var label = new BMap.Label("我是文字标注哦",{offset:new BMap.Size(20,-10)});
        marker.setLabel(label);
        var geolocationControl = new BMap.GeolocationControl();
        map.addControl(geolocationControl)
        map.addControl(top_right_navigation);
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
