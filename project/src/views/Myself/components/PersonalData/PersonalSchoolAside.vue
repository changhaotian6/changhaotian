<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-15 23:00:06
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-19 22:46:01
 * @FilePath: \project\src\views\Myself\components\PersonalData\PersonalSchoolAside.vue
-->
<template>
  <AsideContainer>
    <div class="aside-wrap">
      <div class="aside-title"></div>
      <div
        class="aside-basic"
        v-for="schoolItem in schoolInfos"
        :key="schoolItem.id"
      >
        <img
          class="aside-basic-avatar"
          :src="schoolItem.img"
          :style="{ height: schoolItem.imageHeight }"
        />
        <ul class="aside-basic-content">
          <li
            class="aside-basic-content-item"
            v-for="item in schoolItem.schoolInfo"
            :key="item.label"
          >
            <span class="content-label">{{ item.label }}：</span>
            <span class="content-desc">{{ item.value }}</span>
          </li>
        </ul>
      </div>
    </div>
  </AsideContainer>
</template>

<script setup>
import AsideContainer from "@/components/content/AsideContainer/index.vue";
import { reactive, ref } from "vue";
import { mockSchoolInfosAside } from "@/mock/index";
let schoolInfos = reactive(mockSchoolInfosAside);
</script>

<style lang="scss" scoped>
.aside-wrap {
  padding: 12px 0;
}
.aside-title {
  width: 100%;
  height: 42px;
  background-image: url(@/assets/images/school.png);
  background-size: 190% 100%;
  background-position: center center;
}

.aside-basic {
  position: relative;
  display: flex;
  align-items: center;
  margin: 10px 16px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
}
.aside-basic-avatar {
  margin-right: 10px;
  width: 80px;
  height: 100px;
}
.aside-basic-content {
  flex: 1;
}
.aside-basic-content-item {
  margin-bottom: 10px;
  font-size: 14px;
  color: $descColor;
  &:last-child {
    margin-bottom: 0;
  }
}

.divider {
  position: absolute;
  bottom: 0;
  left: 50%;
  margin-left: -100px;
  width: 200px;
  height: 1px;
  background-color: $linkColor;
}

.aside-evaluation {
  padding: 15px;
}
.aside-evaluation-item {
  padding-bottom: 8px;
  line-height: 22px;
  font-size: 14px;
  color: $descColor;
}
</style>
