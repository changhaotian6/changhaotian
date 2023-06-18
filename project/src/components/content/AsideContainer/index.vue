<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-18 19:31:49
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-18 19:54:35
 * @FilePath: \project\src\components\content\AsideContainer\index.vue
-->
<template>
  <div class="aside-container event" :style="style">
    <slot></slot>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  style: {
    type: [String, Object],
    default: "",
  },
});
</script>

<style lang="scss" scoped>
.aside-container {
  position: absolute;
  left: 40px;
  top: 155px;
  padding: 48px 16px 45px;
  width: 366px;
  height: 650px;
  background-color: rgba(0, 0, 0, 0.6);
  background-image: url(@/assets/images/popup_3.png);
  background-size: 100% 100%;
  border-radius: 10px;
}
</style>
