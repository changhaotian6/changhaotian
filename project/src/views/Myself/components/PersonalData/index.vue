<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-15 22:14:17
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-17 18:27:22
 * @FilePath: \project\src\views\Myself\components\PersonalData\index.vue
-->
<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-15 22:14:17
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-15 23:01:09
 * @FilePath: \project\src\views\Myself\components\PersonalData\index.vue
-->
<template>
  <div class="personal-container">
    <PersonalMenu :menuList="menuList"/>
    <PersonalProfile v-if="personalStore.activeMenu === 'profile'" />
    <PersonalSchool v-if="personalStore.activeMenu === 'school'" />
    <PersonalWork v-if="personalStore.activeMenu === 'work'"/>
  </div>
</template>

<script setup>
import PersonalMenu from "./PersonalMenu.vue";
import PersonalProfile from "./PersonalProfile.vue";
import PersonalSchool from "./PersonalSchool.vue";
import PersonalWork from "./PersonalWork.vue";
import { usePersonalStore } from "@/store/modules/personal.js";
import { ref, defineProps, toRefs, computed, watch, reactive } from "vue";

const personalStore = usePersonalStore();


const menuList = reactive([
  {
    name: "个人简介",
    key: "profile",
  },
  {
    name: "教育经历",
    key: "school",
  },
  {
    name: "工作经历",
    key: "work",
  },
  {
    name: "技能特长",
    key: "skill",
  },
]);

</script>

<style lang="scss" scoped>
.personal-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;

  // &::before {
  //   content: "";
  //   opacity: 0.3;

  //   position: absolute;
  //   top: 0;
  //   left: 0;
  //   width: 50%;
  //   height: 100%;
  //   background-image: url(@/assets/images/bg@1x.png);
  //   background-size: 100% 100%;
  // }
}
</style>
