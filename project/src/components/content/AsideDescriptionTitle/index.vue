<template>
  <!-- 基础信息 -->
  <div class="descriptions-title">
    <span>
      <slot></slot>
    </span>
  </div>
</template>

<script setup>
import { ref } from "vue";
</script>

<style lang="scss" scoped>
.descriptions-title {
  padding: 0 15px;
}
.descriptions-title > span {
  display: inline-block;
  line-height: 26px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  border-bottom: 2px solid $linkColor;
}
</style>
