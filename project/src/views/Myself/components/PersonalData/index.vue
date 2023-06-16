<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-15 22:14:17
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-16 23:23:48
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
    <PersonalMenu />
    <PersonalProfile v-if="profileStore.activeMenu === 'profile'" />
  </div>
</template>

<script setup>
import PersonalProfile from "./PersonalProfile.vue";
import PersonalMenu from "./PersonalMenu.vue";
import { ref, defineProps, toRefs, computed, watch } from "vue";
import { useProfileStore } from "@/store/modules/profile.js";

const profileStore = useProfileStore();
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
