<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-15 23:00:06
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-18 20:39:21
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
        <div class="divider"></div>
      </div>
    </div>
  </AsideContainer>
</template>

<script setup>
import AsideContainer from "@/components/content/AsideContainer/index.vue";
import AsideDescriptionTitle from "@/components/content/AsideDescriptionTitle/index.vue";

import { reactive, ref } from "vue";
import { getAssetURL, uuid } from "@/utils/utils";

let schoolInfos = reactive([
  {
    id: "威海职业学院",
    name: "威海职业学院",
    img: getAssetURL("weizhi.png"),
    imageHeight: "100px",
    schoolInfo: [
      {
        label: "学校名称",
        value: "威海职业学院",
      },
      {
        label: "专业",
        value: "软件技术",
      },
      {
        label: "层次",
        value: "专科",
      },
      {
        label: "学习形式",
        value: "全日制",
      },
    ],
  },
  {
    id: "山东科技大学",
    name: "山东科技大学",
    img: getAssetURL("shanke.png"),
    imageHeight: "80px",
    schoolInfo: [
      {
        label: "学校名称",
        value: "山东科技大学",
      },
      {
        label: "专业",
        value: "软件技术",
      },
      {
        label: "层次",
        value: "本科",
      },
      {
        label: "学习形式",
        value: "函授",
      },
    ],
  },
]);
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
  padding: 16px 15px;
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
  margin-bottom: 15px;
  font-size: 14px;
  color: #eee;
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
  background-color: #00e5e5;
}

.aside-evaluation {
  padding: 15px;
}
.aside-evaluation-item {
  padding-bottom: 8px;
  line-height: 22px;
  font-size: 14px;
  color: #eee;
}
</style>
