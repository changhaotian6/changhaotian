<template>
  <ul class="personal-menu-container">
    <li
      class="personal-menu-item event"
      :class="{ active: personalStore.activeMenu === item.key }"
      v-for="item in menuList"
      :key="item.key"
      @click="handleClickMenu(item.key)"
    >
      {{ item.name }}
    </li>
  </ul>
</template>

<script setup>
import { defineProps, ref } from "vue";
import { flyTo } from "@/utils/cesium.js";
import { usePersonalStore } from "@/store/modules/personal.js";

const personalStore = usePersonalStore();

const { menuList } = defineProps({
  menuList: {
    type: Array,
    default: [],
  },
});


// 查看济宁市视角
const handleProfile = () => {
  flyTo({
    lat: 117.0595974,
    lon: 31.3104769,
    height: 258471.93,
    heading: 355.3,
    pitch: -27.5,
    roll: 0,
    duration: 2,
  });
};

// 查看学校视角
const handleSchool = () => {
  flyTo({
    lat: 120.5309333,
    lon: 30.5685520,
    height: 337866.29,
    heading:354.0,
    pitch: -28.6,
    roll: 0,
    duration: 2,
  });
};

// 查看工作经历视角
const handleWork = () => {
  flyTo({
    lat: 120.1792802,
    lon: 15.1073184,
    height: 1471114.38,
    heading:353.1,
    pitch: -48.8,
    roll: 0,
    duration: 2,
  });
};

const methods = new Map([
  ["profile", handleProfile],
  ["school", handleSchool],
  ["work", handleWork],
]);

const handleClickMenu = (key) => {
  personalStore.setActiveMenu(key);
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
