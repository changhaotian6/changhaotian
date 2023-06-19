<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-17 17:39:39
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-19 22:25:33
 * @FilePath: \project\src\views\Myself\components\PersonalData\PersonalWork.vue
-->

<template>
  <OverlayHtml
    :position="workItem.position"
    :pixelOffsetPosition="['left', 'bottom']"
    :pixelOffset="[-133, 5]"
    v-for="workItem in workInfos"
    :key="workItem.id"
  >
    <div class="work-window">
      <div class="compony-name">{{ workItem.name }}</div>
      <ul class="work-detail">
        <li
          class="work-detail-item"
          v-for="item in workItem.workInfo"
          :key="item.label"
        >
          <span>{{ item.label }}：</span>
          <span>{{ item.value }}</span>
        </li>
      </ul>
      <!-- <div class="work-buttons">
        <div class="work-buttons-item">工作经验</div>
        <div class="work-buttons-item">项目经历</div>
      </div> -->
      <div class="work-window-footer"></div>
    </div>
  </OverlayHtml>
  <PersonalWorkAside />
</template>

<script setup>
import OverlayHtml from "@/components/common/OverlayHtml/index.vue";
import PersonalWorkAside from "./PersonalWorkAside.vue";
import {
  onMounted,
  reactive,
  provide,
  getCurrentInstance,
  onBeforeUnmount,
} from "vue";
import { usePersonalStore } from "@/store/modules/personal.js";
import { mockWorkInfos } from "@/mock/index";

const { proxy } = getCurrentInstance();

const personalStore = usePersonalStore();

let workInfos = reactive(mockWorkInfos);

provide("workInfos", workInfos);

const handleClick = () => {
  personalStore.setActiveMenu("");
};

onMounted(() => {});

onBeforeUnmount(() => {});
</script>

<style lang="scss" scoped>
.work-window {
  position: relative;
  padding: 20px;
  width: 266px;
  height: 180px;
  background-image: url(@/assets/images/popup_3.png);
  background-size: 100% 140px;
  background-repeat: no-repeat;
  background-color: rgba(0, 0, 0, 0.3);
}
.compony-name {
  width: 100%;
  height: 30px;
  background-image: url(@/assets/images/title_bg.png);
  background-size: 100% 100%;
  line-height: 30px;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  color: #fff;
}

.work-window-footer {
  position: absolute;
  bottom: -10px;
  left: 50%;
  margin-left: -24px;
  width: 50px;
  height: 60px;
  background-image: url(@/assets/images/base_2.png);
  background-size: 100% 100%;
}

.work-avatar {
  width: 80px;
  height: 80px;
  margin-right: 15px;
}

.work-detail {
  padding: 8px 18px;
}

.work-detail-item {
  line-height: 26px;
  font-size: 14px;
  color: #fff;
}

.work-buttons {
  display: flex;
  justify-content: space-between;
  padding: 5px 18px;
  width: 100%;
}
.work-buttons-item {
  font-size: 14px;
  color: $linkColor;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    // font-weight: 600;
    color: $linkColor;
  }
}
</style>
