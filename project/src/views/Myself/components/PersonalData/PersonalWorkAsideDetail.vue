<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-15 23:00:06
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-20 13:30:44
 * @FilePath: \project\src\views\Myself\components\PersonalData\PersonalWorkAsideDetail.vue
-->
<template>
  <div class="aside-wrap detail">
    <div class="aside-wrap-bg" :style="asideWrapBgStyle"></div>
    <div class="aside-title">{{ componyInfo.name }}</div>
    <Tabs :tabs-list="tabsList" @on-change="handleChangeTabs" />
    <!-- 基础信息 -->
    <div class="work-basic-wrap" v-show="showModuleId === 'basic'">
      <div
        class="work-basic-item"
        v-for="item in componyInfo.workInfo"
        :key="item.id"
      >
        <span class="work-basic-label">{{ item.label }}：</span>
        <span class="work-basic-value">{{ item.value }}</span>
      </div>
    </div>

    <!-- 工作描述 -->
    <AsideDescriptionParagraph
      :paragraph-info="componyInfo.workDescriptionInfo"
      v-show="showModuleId === 'description'"
    />

    <!-- 项目经历 -->
    <div class="work-project-list" v-show="showModuleId === 'project'">
      <div
        class="work-project-item"
        v-for="projectInfoItem in componyInfo.workProjectInfo"
        :key="projectInfoItem.name"
        @click="handleOpenProjectModal(projectInfoItem)"
      >
        <SvgIcon iconName="icon-jinru1" class="enter"></SvgIcon>

        <div class="work-project-row">
          <span class="work-project-label">名称：</span>
          <span class="work-project-value active">{{
            projectInfoItem.name
          }}</span>
        </div>
        <div class="work-project-row">
          <span class="work-project-label">简述：</span>
          <span class="work-project-value">{{
            projectInfoItem.description
          }}</span>
        </div>
      </div>
    </div>

    <div class="go-back" @click="handleGoBack">返回上一级</div>
    <PersonalWorkAsideProject
      :projectInfo="currentProjectInfoItem"
      :visible="showProjectModal"
      @close="handleCloseProjectModal"
    />
  </div>
</template>

<script setup>
import AsideDescriptionParagraph from "@/components/content/AsideDescriptionParagraph/index.vue";
import PersonalWorkAsideProject from "./PersonalWorkAsideProject.vue";

import Tabs from "@/components/content/Tabs/index.vue";

import { defineProps, reactive, ref, watch } from "vue";
import { getAssetURL } from "@/utils/utils";

const tabsList = reactive([
  {
    id: "basic",
    name: "基础信息",
  },
  {
    id: "description",
    name: "工作描述",
  },
  {
    id: "project",
    name: "项目经历",
  },
]);


const props = defineProps({
  componyInfo: {
    typeof: Object,
    default: {},
  },
});
const emit = defineEmits(["on-back"]);

let asideWrapBgStyle = reactive({});

let showProjectModal = ref(false);

let currentProjectInfoItem = reactive({});


let showModuleId = ref(tabsList[0].id);

watch(
  () => props.componyInfo,
  (val) => {
    asideWrapBgStyle = {
      backgroundImage: `url(${getAssetURL(val.id + ".png")})`,
    };
  }
);

const handleChangeTabs = (tabsItem) => {
  showModuleId.value = tabsItem.id;
};

const handleGoBack = () => {
  emit("on-back");
};

const handleOpenProjectModal = (projectInfo) => {
  currentProjectInfoItem = projectInfo;
  showProjectModal.value = true;
};

const handleCloseProjectModal = () => {
  showProjectModal.value = false;
};
</script>

<style lang="scss" scoped>
.aside-wrap.detail {
  position: relative;
  padding: 12px 15px;
  height: 550px;
}

.aside-wrap-bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 280px 280px;
  pointer-events: none;
  opacity: 0.08;
}

// 公司名称
.aside-title {
  position: relative;
  margin-bottom: 5px;
  width: 100%;
  height: 42px;
  text-align: center;
  line-height: 40px;
  font-weight: 600;
  font-size: 18px;
  color: $linkColor;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border-bottom: 1px solid $linkColor;
  }
}

// 基础信息
.work-basic-wrap {
  padding: 10px 15px;
}
.work-basic-item {
  display: flex;
}
.work-basic-label,
.work-basic-value {
  line-height: 26px;
  font-size: 14px;
  color: $descColor;
}

.go-back {
  position: absolute;
  right: 18px;
  bottom: 10px;
  line-height: 26px;
  font-size: 14px;
  color: $linkColor;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: $activeColor;
  }
}

// 项目经历
.work-project-list {
  padding: 12px 0;
}
.work-project-item {
  position: relative;
  margin-bottom: 10px;
  padding: 8px 10px;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    .enter {
      display: block;
    }
  }
}
.work-project-row {
}
.work-project-label,
.work-project-value {
  color: $descColor;
  font-size: 14px;
  line-height: 26px;
  &.active {
    color: $linkColor;
    cursor: pointer;
  }
}

.enter {
  position: absolute;
  top: 50%;
  right: 8px;
  margin-top: -8px;
  transition: all 0.2s;
}
</style>
