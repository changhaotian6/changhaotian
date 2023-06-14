<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-14 12:56:40
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-14 13:29:32
 * @FilePath: \project\src\App.vue
-->
<template>
  <div id="cesiumContainer" class="h-full"></div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import * as Cesium from 'cesium';

let viewer;
onMounted(() => {
  viewer = new Cesium.Viewer('cesiumContainer');
  viewer.entities.add({
      position: Cesium.Cartesian3.fromDegrees(-75.59777, 40.03883),
      point: {
          pixelSize: 10,
          color: Cesium.Color.BLUE,
      },
  });
});
</script>

<style>

.effect06 {
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: 2px #d6d6d6;
    background: url(http://www.pencilscoop.com/demos/CSS_Text_Effects/images/galaxy.jpg);
    background-size: cover;
}

#cesiumContainer {
  height: 100vh;
  width: 100vw;
}
</style>
