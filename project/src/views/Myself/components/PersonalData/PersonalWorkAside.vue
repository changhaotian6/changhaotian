<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-15 23:00:06
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-18 21:35:26
 * @FilePath: \project\src\views\Myself\components\PersonalData\PersonalWorkAside.vue
-->
<template>
  <AsideContainer>
    <div class="aside-wrap">
      <div class="aside-title"></div>
      <div class="compony-info" v-for="item in workInfo" :key="item.id">
        <img class="compony-logo" :src="item.img" />
        <div class="compony-desc">
          <div class="compony-date">{{ item.date }}</div>
          <div class="compony-name">{{ item.name }}</div>
          <div class="compony-detail">查看详情</div>
        </div>
      </div>
    </div>
  </AsideContainer>
</template>

<script setup>
import AsideContainer from "@/components/content/AsideContainer/index.vue";

import { defineProps, reactive, ref } from "vue";

const { workInfos } = defineProps({
  workInfos: {
    type: Array,
    default: [],
  },
});

const workInfo = reactive([]);
// 按时间倒叙
workInfos.forEach((item) => workInfo.unshift(item));
</script>

<style lang="scss" scoped>
.aside-wrap {
  padding: 12px 0;
}
.aside-title {
  width: 100%;
  height: 42px;
  background-image: url(@/assets/images/work.png);
  background-size: 190% 100%;
  background-position: center center;
}
// .compony-name {
//   font-weight: 600;
//   font-size: 16px;
//   text-decoration: underline;
//   color: #00e5e5;
// }
.compony-info {
  display: flex;
  padding: 16px;
}
.compony-logo {
  margin-right: 15px;
  width: 40px;
  height: 40px;
}
.compony-desc {
}
.compony-date,
.compony-name {
  margin-bottom: 12px;
  line-height: 1;
  font-size: 14px;
  color: #eee;
}
.compony-name {
}
.compony-detail {
  font-size: 14px;
  text-decoration: underline;
  color: #00e5e5;
  cursor: pointer;
}
</style>
