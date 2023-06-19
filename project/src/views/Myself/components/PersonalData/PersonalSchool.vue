<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-17 12:22:30
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-19 21:07:07
 * @FilePath: \project\src\views\Myself\components\PersonalData\PersonalSchool.vue
-->
<template>
  <OverlayHtml
    :position="schoolItem.position"
    :pixelOffsetPosition="['left', 'bottom']"
    :pixelOffset="[-12, 10]"
    v-for="schoolItem in schoolInfos"
    :key="schoolItem.id"
  >
    <div class="school-window">
      <!-- <svg-icon
        iconName="icon-guanbi"
        close
        style="position: absolute; right: 40px; top: 46px; cursor: pointer"
        @click="handleClick"
      /> -->
      <img
        class="school-avatar"
        :style="{ height: schoolItem.imageHeight }"
        :src="schoolItem.img"
        :alt="schoolItem.name"
      />
      <ul class="school-detail">
        <li
          class="school-detail-item"
          v-for="item in schoolItem.schoolInfo"
          :key="item.label"
        >
          <span>{{ item.label }}：</span>
          <span>{{ item.value }}</span>
        </li>
      </ul>
    </div>
  </OverlayHtml>
  <PersonalSchoolAside />
</template>

<script setup>
import OverlayHtml from "@/components/common/OverlayHtml/index.vue";
import PersonalSchoolAside from "./PersonalSchoolAside.vue";

import { onMounted, reactive, getCurrentInstance, onBeforeUnmount } from "vue";
import { usePersonalStore } from "@/store/modules/personal.js";
import PlottingShanguangdian from "@/cht3d/Plotting/PlottingShanguangdian/index.js";
import { mockSchoolInfos } from "@/mock/index.js";

const { proxy } = getCurrentInstance();

const personalStore = usePersonalStore();

let schoolInfos = reactive(mockSchoolInfos);

// 创建闪光点
const shanguangdianList = schoolInfos.map((item) => {
  return new PlottingShanguangdian(proxy.$cht3d, {
    id: item.id,
    name: item.name,
    position: item.position,
    color: item.color,
    collectionName: "cht",
    maxVisibleHeight: 20000000,
    time: 1,
  });
});

const handleClick = () => {
  personalStore.setActiveMenu("");
};

onMounted(() => {});

onBeforeUnmount(() => {
  // 移除闪光点
  shanguangdianList.forEach((item) => item.destroy());
});
</script>

<style lang="scss" scoped>
.school-window {
  display: flex;
  padding: 50px 0 0 108px;
  width: 480px;
  height: 326px;
  background-image: url(@/assets/images/popup_2.png);
  background-size: 100% 100%;
}

.school-avatar {
  width: 80px;
  height: 80px;
  margin-right: 15px;
}

.school-detail {
  flex: 1;
  margin-top: -5px;
}

.school-detail-item {
  line-height: 26px;
  font-size: 14px;
  color: #fff;
}
</style>
