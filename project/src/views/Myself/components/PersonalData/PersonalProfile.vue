<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-15 23:00:06
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-18 19:39:11
 * @FilePath: \project\src\views\Myself\components\PersonalData\PersonalProfile.vue
-->
<template>
  <OverlayHtml
    :position="position"
    :pixelOffsetPosition="['left', 'bottom']"
    :pixelOffset="[-8, 8]"
  >
    <div class="profile-window">
      <svg-icon
        iconName="icon-guanbi"
        close
        style="position: absolute; right: 18px; top: 26px; cursor: pointer"
        @click="handleClick"
      />
      <img class="profile-avatar" src="~@/assets/images/cht.png" alt="常浩田" />
      <ul class="profile-detail">
        <li
          class="profile-detail-item"
          v-for="item in profileInfo"
          :key="item.label"
        >
          <span>{{ item.label }}：</span>
          <span>{{ item.value }}</span>
        </li>
      </ul>
    </div>
  </OverlayHtml>

  <PersonalProfileAside />
</template>

<script setup>
import OverlayHtml from "@/components/common/OverlayHtml/index.vue";
import PersonalProfileAside from "./PersonalProfileAside.vue";

import { onBeforeUnmount, reactive, ref, getCurrentInstance } from "vue";
import { usePersonalStore } from "@/store/modules/personal.js";
import PlottingShanguangdian from "@/cht3d/Plotting/PlottingShanguangdian/index.js";
const { proxy } = getCurrentInstance();

const shanguangdian = new PlottingShanguangdian(proxy.$cht3d, {
  id: "jining",
  name: "山东济宁",
  position: [116.598213, 35.401114],
  color: "rgb(3,255,255)",
  collectionName: "cht",
  maxVisibleHeight: 20000000,
  time: 1,
});

const personalStore = usePersonalStore();

// 济宁经纬度
const JiNing = [116.598213, 35.401114];
let position = reactive(JiNing);

const profileInfo = ref([
  {
    label: "姓名",
    value: "常浩田",
  },
  {
    label: "生日",
    value: "1996年8月",
  },
  {
    label: "籍贯",
    value: "山东省济宁市",
  },
  {
    label: "工作年限",
    value: "5年",
  },
  {
    label: "邮箱",
    value: "changhaotian6@163.com",
  },
]);

// 清楚菜单选中状态
const handleClick = () => {
  personalStore.setActiveMenu("");
};

onBeforeUnmount(() => {
  shanguangdian.destroy();
});
</script>

<style lang="scss" scoped>
.profile-window {
  display: flex;
  padding: 35px 0 0 75px;
  width: 435px;
  height: 264px;
  background-image: url(@/assets/images/popup_1.png);
  background-size: 100% 100%;
  background-position: -10px 10px;
}

.profile-avatar {
  width: 80px;
  height: 100px;
  margin-right: 15px;
}

.profile-detail {
  flex: 1;
  margin-top: -5px;
}

.profile-detail-item {
  line-height: 26px;
  font-size: 14px;
  color: #fff;
}
</style>
