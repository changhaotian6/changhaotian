<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-21 13:37:06
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-21 13:41:18
 * @FilePath: \project\src\components\common\SiteTips\index.vue
-->
<template>
  <div class="tips-container">云服务器配置较低，资源加载稍慢</div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style lang="scss" scoped>
.tips-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  pointer-events: none;
  animation: tips 3s linear 3s;
  animation-fill-mode: forwards;
  z-index: 999;
  color: #fff;
  font-size: 28px;
  font-weight: 600;
}

@keyframes tips {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
