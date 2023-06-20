<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-15 23:00:06
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-20 14:37:48
 * @FilePath: \project\src\views\Myself\components\PersonalData\PersonalSkillAside.vue
-->
<template>
  <AsideContainer>
    <div class="aside-wrap">
      <div class="aside-title"></div>
      <div class="skill-overview"></div>
      <div class="skill-description">
        <AsideDescriptionParagraph
          :paragraph-info="skillInfo"
          :keywords="keywords"
        />
      </div>
    </div>
  </AsideContainer>
</template>

<script setup>
import AsideContainer from "@/components/content/AsideContainer/index.vue";
import AsideDescriptionParagraph from "@/components/content/AsideDescriptionParagraph/index.vue";

import { reactive } from "vue";
import { mockSkillInfo } from "@/mock/index";

const skillInfo = reactive(mockSkillInfo);
const keywords = reactive([
  "Vue2",
  "Vue3",
  "ElementUI",
  "AntDesign",
  "iview",
  "JS",
  "ES6",
  "HTML5",
  "CSS3",
  "Echarts",
  "AntV",
  "Cesium",
  "ThreeJS",
  "设计模式",
  "webpack",
  "Less",
  "Sass",
  "uni-app",
  "NodeJS",
  "Express",
  "koa",
  "微前端",
]);
</script>

<style lang="scss" scoped>
.aside-wrap {
  position: relative;
  padding: 12px 0;
}
.aside-title {
  width: 100%;
  height: 42px;
  background-image: url(@/assets/images/skill.png);
  background-size: 190% 100%;
  background-position: center center;
}

.skill-overview {
  position: absolute;
  left: 15px;
  right: 15px;
  top: 55px;
  bottom: 0;
  background-image: url(@/assets/images/skill_all.png);
  background-size: 100% 100%;
  opacity: 0.25;
}
.skill-description {
  margin: 10px 15px 0;
  // background-color: rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(2px);
  border-radius: 10px;
}
</style>
