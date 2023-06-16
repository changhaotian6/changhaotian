<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-14 12:56:40
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-15 23:07:19
 * @FilePath: \project\src\views\Myself\components\Visual\index.vue
-->
<template>
  <div class="visual-container">
    <CesiumInstance />
  </div>
</template>

<script setup>
import CesiumInstance from "./CesiumInstance.vue";
</script>

<style lang="scss" scoped>
.visual-container {
  position: absolute;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  // &:after {
  //   content: "";
  //   position: absolute;
  //   right: 0;
  //   top: 0;
  //   width: 50%;
  //   height: 100%;
  //   background-color: rgba(0,0,0,.3);
  //   pointer-events: none;
  // }
}
</style>
