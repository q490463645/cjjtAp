<template>
  <div class="map-area" :id="mapId"></div>
</template>
<script>
import loadBMap from "./loadBMap.js";
import ajax from "@/http/http.js";
export default {
  data() {
    return {
      mapId: "BMap-" + parseInt(Date.now() + Math.random()),
      myMap: null,
      flag: false,
      zooms: 3,
      obj: {},
      tableData: [{}]
    };
  },

  mounted() {
    this.initMap();
  },
  methods: {
    mapDrawPoint() {
      let that = this;
      // setTimeout(() => {

      // }, 2000); //2秒后放大到14级

      ajax.getMapInfo({}, data => {
        var pointArray = new Array();
        data.map((item, index) => {
          // for (var i = 0; i < data.length; i++) {
          var marker = new BMap.Marker(
            new BMap.Point(item.LONGITUDE, item.LATITUDE)
          ); // 创建点
          this.myMap.addOverlay(marker); //增加点
          pointArray[item] = new BMap.Point(item.LONGITUDE, item.LATITUDE);
          // window.onmousewheel = document.onmousewheel = scrollFunc;
          marker.addEventListener("click", function(e) {
            // for (var i = 0; i < data.length; i++) {
            // console.log("项目名称", data[i]);
            var content = `<hr>项目名称：${item.SSSF}<br/>项目个数：${item.COT}<br/>`;
            var opts = {
              width: 250, // 信息窗口宽度
              height: 100, // 信息窗口高度
              title: "项目信息" // 信息窗口标题
            };
            // }
            let p = e.target;
            let point = new BMap.Point(
              p.getPosition().lng,
              p.getPosition().lat
            );
            var infoWindow = new BMap.InfoWindow(content, opts); // 创建信息窗口对象
            that.myMap.openInfoWindow(infoWindow, point);
          });
          this.myMap.setViewport(pointArray);
        });
      });
      this.myMap.addEventListener("zoomend", e => {
        var ZoomNum = this.myMap.getZoom();
        // console.log("打印缩放级别", ZoomNum);
        if (ZoomNum > 7) {
          ajax.getMap({}, data => {
            console.log("ditu", data);
            var pointArray = new Array();
            data.map((item, index) => {
              // for (var i = 0; i < data.length; i++) {
              var marker = new BMap.Marker(
                new BMap.Point(item.longitude, item.latitude)
              ); // 创建点
              this.myMap.addOverlay(marker); //增加点
              pointArray[item] = new BMap.Point(item.longitude, item.latitude);
              // window.onmousewheel = document.onmousewheel = scrollFunc;
              marker.addEventListener("click", function(e) {
                var pk = item.pk;
                var path = "http://172.16.1.100:8080/datacenter/";
                $.ajax({
                  type: "get",
                  url: path + "/rest/projects/" + pk,
                  dataType: "json",
                  success: function(data) {
                    // console.log("jhcsdkjcdjk", data);
                    var content = `<hr>项目名称：${data.name}<br/>
                     计划开工日期：${data.jgrq}<br/>
                     实施单位：${data.jsdw}<br/>
                     开工日期：${data.kgrq}<br/>
                     实际开工时间：${data.sjkgsj}<br/>
                     所属单位：${data.ssdw}<br/>
                     所属省份：${data.sssf}<br/>
                     工程状态：${data.status}<br/>`;
                    var opts = {
                      width: 250, // 信息窗口宽度
                      height: 250, // 信息窗口高度
                      title: "项目信息" // 信息窗口标题
                    };
                    let p = e.target;
                    let point = new BMap.Point(
                      p.getPosition().lng,
                      p.getPosition().lat
                    );
                    var infoWindow = new BMap.InfoWindow(content, opts); // 创建信息窗口对象
                    that.myMap.openInfoWindow(infoWindow, point);
                  }
                });
              });
              this.myMap.setViewport(pointArray);
            });
          });
          this.myMap.clearOverlays();
        } else if (ZoomNum <= 6) {
          ajax.getMapInfo({}, data => {
            var pointArray = new Array();
            data.map((item, index) => {
              // for (var i = 0; i < data.length; i++) {
              var marker = new BMap.Marker(
                new BMap.Point(item.LONGITUDE, item.LATITUDE)
              ); // 创建点
              this.myMap.addOverlay(marker); //增加点
              pointArray[item] = new BMap.Point(item.LONGITUDE, item.LATITUDE);
              // window.onmousewheel = document.onmousewheel = scrollFunc;
              marker.addEventListener("click", function(e) {
                // for (var i = 0; i < data.length; i++) {
                // console.log("项目名称", data[i]);
                var content = `<hr>项目名称：${item.SSSF}<br/>项目个数：${item.COT}<br/>`;
                var opts = {
                  width: 250, // 信息窗口宽度
                  height: 100, // 信息窗口高度
                  title: "项目信息" // 信息窗口标题
                };
                // }
                let p = e.target;
                let point = new BMap.Point(
                  p.getPosition().lng,
                  p.getPosition().lat
                );
                var infoWindow = new BMap.InfoWindow(content, opts); // 创建信息窗口对象
                that.myMap.openInfoWindow(infoWindow, point);
              });
              this.myMap.setViewport(pointArray);
            });
          });
          this.myMap.clearOverlays();

          console.log("缩小级别", ZoomNum);
        }
      });
    },
    isPoint() {
      let that = this;
      this.mapDrawPoint();
    },
    initMap() {
      loadBMap("3eTI7y0ayDVBKZNMBfm8rb6MRAPyH0Gm")
        .then(() => {
          var that = this;
          // 百度地图API功能
          this.myMap = new BMap.Map(this.mapId); // 创建Map实例
          //添加地图类型控件
          this.myMap.addControl(
            new BMap.MapTypeControl({
              mapTypes: [BMAP_NORMAL_MAP, BMAP_HYBRID_MAP]
            })
          );
          this.myMap.setCurrentCity("北京"); // 设置地图显示的城市 此项是必须设置的
          this.myMap.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
          // this.myMap.enableAutoResize(); //地图的自适应布局
          this.myMap.setMapStyle({ style: "light" }); //地图的自定义样式
          this.myMap.centerAndZoom(new BMap.Point(73, 24.18), 3); // 初始化地图,设置中心点坐标和地图级别
          this.isPoint();
        })
        .catch(err => {
          console.log("地图加载失败");
        });
    }
  }
};
</script>