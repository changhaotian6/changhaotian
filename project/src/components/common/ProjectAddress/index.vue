<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-21 13:37:06
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-21 13:56:29
 * @FilePath: \project\src\components\common\ProjectAddress\index.vue
-->
<template>
  <div class="project-address">查看本项目源码: <span class="project-address-link" @click="goGithub">https://github.com/changhaotian6/changhaotian</span></div>
</template>

<script setup>
import { ref } from "vue";
const goGithub = () => {
  window.open('https://github.com/changhaotian6/changhaotian')
}
</script>

<style lang="scss" scoped>
.project-address {
  position: fixed;
  top: 0;
  right: 10px;
  z-index: 999;
  padding: 0 5px;
  background-color: rgba(0,0,0,.5);
  line-height: 60px;
  font-size: 20px;
  color: #fff;
}

.project-address-link{
  text-decoration: underline;cursor: pointer;
  &:hover {
    color: $activeColor;
  }
}

</style>
