<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-14 12:56:40
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-16 21:25:15
 * @FilePath: \project\src\views\Myself\components\Visual\CesiumInstance.vue
-->
<template>
  <div id="cesiumContainer"></div>
</template>

<script setup>
import { onMounted, getCurrentInstance } from "vue";
import * as Cesium from "cesium";
import cesiumConfig from "@/config/cesium.config.js";
const { proxy } = getCurrentInstance();
let viewer;
/**
 * 初始化viewer
 * */
const initCesiumViewer = () => {
  viewer = new Cesium.Viewer("cesiumContainer", {
    infoBox: false, // 获取信息框
    // 底图设置成夜晚模式
    baseLayer: new Cesium.ImageryLayer.fromProviderAsync(
      Cesium.IonImageryProvider.fromAssetId(3812)
    ),
  });
  
  // 初始化3d公共方法
  proxy.$cht3d.init(viewer);

  console.log(proxy.$cht3d);

  // 挂载到全局
  window.CesiumViewer = viewer;
};

/**
 * viewer基础配置
 * */
const handleViewerConfig = (viewer) => {
  //  设置地球无图层时颜色
  viewer.scene.globe.baseColor = Cesium.Color.GRAY;
  //隐藏动画控件
  viewer.animation.container.style.display = "none";
  //隐藏时间线控件
  viewer.timeline.container.style.display = "none";
  //隐藏地名查找控件
  viewer.geocoder.container.style.display = "none";
  //隐藏cesium标识
  viewer.cesiumWidget.creditContainer.style.display = "none";
  // 显示帧数（FPS）
  viewer.scene.debugShowFramesPerSecond = true;
};

/**
 * 设置影像注记
 * */
const handleViewerServiceImagery = (viewer) => {
  let cia = new Cesium.WebMapTileServiceImageryProvider({
    //调用影响中文注记服务
    url: cesiumConfig.TDT_VECTOR_ANNOTATION,
    layer: "cia_w", // WMTS请求的层名称
    style: "default", // WMTS请求的样式名称
    format: "tiles", // 要从服务器检索的图像的MIME类型
    tileMatrixSetID: "GoogleMapsCompatible", // 用于WMTS请求的TileMatrixSet的标识符
    subdomains: ["t0", "t1", "t2", "t3", "t4", "t5", "t6", "t7"], //天地图8个服务器
    minimumLevel: 0, // 图像提供商所支持的最低详细程度
    maximumLevel: 18, // 图像提供者支持的最大详细程度，如果没有限制，则未定义
  });

  viewer.imageryLayers.addImageryProvider(cia); //添加到cesium图层上
  // 初始视角位置
  viewer.scene.camera.flyTo({
    destination: new Cesium.Cartesian3.fromDegrees(
      101.2865328,
      35.6261185,
      20000000.1
    ),
    orientation: {
      heading: Cesium.Math.toRadians(360), //方位角
      pitch: Cesium.Math.toRadians(-90), //俯仰角
      roll: Cesium.Math.toRadians(0), //滚动角
    },
    duration: 5,
  });
};

/**
 * 添加边界高亮
 * */
const handleBoundaryHighlighting = (viewer) => {
  // 添加边界高亮
  let chinaJSON = Cesium.GeoJsonDataSource.load(
    "/cesium/geojson/CHN.geo.json",
    {
      stroke: Cesium.Color.AQUA,
      fill: Cesium.Color.PALETURQUOISE.withAlpha(0), //填充区域设置为透明
      strokeWidth: 10, //在这里设置线宽度无效，所以在下边单独进行了线条样式设置
      markerSymbol: "?",
    }
  );

  //使用 entity.polygon.hierarchy._value.positions设置线条的颜色
  chinaJSON.then((dataSource) => {
    let entities = dataSource.entities.values;
    for (let i = 0; i < entities.length; i++) {
      let entity = entities[i];
      let positions = entity.polygon.hierarchy._value.positions;
      entity.polyline = {
        positions: positions,
        width: 2,
        material: Cesium.Color.fromBytes(3, 255, 255),
      };
    }
  });
  viewer.dataSources.add(chinaJSON);
};
//
onMounted(() => {
  initCesiumViewer();
  handleViewerConfig(viewer);
  handleViewerServiceImagery(viewer);
  handleBoundaryHighlighting(viewer);
});
</script>

<style>
#cesiumContainer {
  height: 100vh;
  width: 100vw;
}

/* 不占据空间，无法点击 */
.cesium-viewer-toolbar,             /* 右上角按钮组 */
.cesium-viewer-animationContainer,  /* 左下角动画控件 */
.cesium-viewer-timelineContainer,   /* 时间线 */
.cesium-viewer-bottom               /* logo信息 */ {
  display: none;
}
.cesium-viewer-fullscreenContainer  /* 全屏按钮 */ {
  position: absolute;
  top: -999em;
}
</style>
