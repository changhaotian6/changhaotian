<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-17 17:39:39
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-18 21:29:34
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
      <div class="work-buttons">
        <div class="work-buttons-item">工作经验</div>
        <div class="work-buttons-item">项目经历</div>
      </div>
      <div class="work-window-footer"></div>
    </div>
  </OverlayHtml>
  <PersonalWorkAside :work-infos="workInfos"/>
</template>

<script setup>
import OverlayHtml from "@/components/common/OverlayHtml/index.vue";
import PersonalWorkAside from "./PersonalWorkAside.vue";
import { onMounted, reactive, getCurrentInstance, onBeforeUnmount } from "vue";
import { usePersonalStore } from "@/store/modules/personal.js";
import { getAssetURL, uuid } from "@/utils/utils";

const { proxy } = getCurrentInstance();

const personalStore = usePersonalStore();

let workInfos = reactive([
  {
    id: "bochuang",
    name: "威海博创软件科技有限公司",
    img: getAssetURL('bochuang.png'),
    position: [122.131526, 37.504885],
    date: '2018.01~2020.01',
    workInfo: [
      {
        label: "在职时间",
        value: "2018.01~2020.01",
      },
      {
        label: "任职岗位",
        value: "前端开发工程师",
      },
    ],
  },
  {
    id: "duandian",
    name: "广东端点科技有限公司",
    img: getAssetURL('duandian.png'),
    position: [113.549854, 22.136295],
    date: '2020.04~2021.05',
    workInfo: [
      {
        label: "在职时间",
        value: "2020.04~2021.05",
      },
      {
        label: "任职岗位",
        value: "前端开发工程师",
      },
    ],
  },
  {
    id: "huarong",
    name: "华戎信息产业有限公司",
    img: getAssetURL('huarong.png'),
    position: [117.135163, 36.660995],
    date: '2021.07~2023.02',
    workInfo: [
      {
        label: "在职时间",
        value: "2021.07~2023.02",
      },
      {
        label: "任职岗位",
        value: "前端开发工程师",
      },
    ],
  },
]);

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
  height: 210px;
  background-image: url(@/assets/images/popup_3.png);
  background-size: 100% 170px;
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
  color: #00e5e5;
  text-decoration: underline;
  cursor: pointer;
  transition: color 0.3s;
  &:hover {
    // font-weight: 600;
    color: #00e5e5;
  }
}
</style>
