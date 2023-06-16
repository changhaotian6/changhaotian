<template>
  <ul class="personal-menu-container">
    <li
      class="personal-menu-item event"
      :class="{ active: profileStore.activeMenu === item.key }"
      v-for="item in menuList"
      :key="item.key"
      @click="handleClickMenu(item.key)"
    >
      {{ item.name }}
    </li>
  </ul>
</template>

<script setup>
import { reactive, ref } from "vue";
import { flyTo } from "@/utils/cesium.js";
import { useProfileStore } from "@/store/modules/profile.js";

const profileStore = useProfileStore();

const menuList = reactive([
  {
    name: "个人简介",
    key: "profile",
  },
  {
    name: "教育经历",
    key: "education",
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

const handleProfile = () => {
  // 济宁市视角
  flyTo({
    lat: 117.0595974,
    lon: 31.3104769,
    height: 258471.93,
    heading: 355.3,
    pitch: -27.5,
    roll: 0,
    duration: 3,
  });
};

const methods = new Map([["profile", handleProfile]]);

const handleClickMenu = (key) => {
  profileStore.setActiveMenu(key);
  const func = methods.get(key);
  if (typeof func === "function") {
    func();
  }
};
</script>

<style lang="scss" scoped>
.personal-menu-container {
  display: flex;
  margin: 30px 36px;
}

.personal-menu-item {
  position: relative;
  margin-right: 20px;
  padding: 10px;
  width: 120px;
  height: 46px;
  background-color: rgba(0, 0, 0, 0.6);
  background-clip: content-box;
  line-height: 26px;
  text-align: center;
  font-size: 16px;
  color: #aaa;
  cursor: pointer;
  transition: all 0.3s;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-image: url(@/assets/images/border_1.png);
    background-size: 100% 100%;
    transition: all 0.3s;
  }

  &:hover,
  &.active {
    color: #03ffff;
    &::before {
      content: "";
      background-image: url(@/assets/images/border_2.png);
    }
  }
}
</style>
