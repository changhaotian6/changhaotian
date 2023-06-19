<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-15 23:00:06
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-19 15:52:30
 * @FilePath: \project\src\components\content\Tabs\index.vue
-->
<template>
  <div class="tabs-container">
    <div
      class="tabs-item"
      :class="{ active: activeTabsId === tabsItem.id }"
      v-for="tabsItem in tabsList"
      :key="tabsItem.id"
      @click.stop="handleChangeTabs(tabsItem)"
    >
      {{ tabsItem.name }}
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";

const { tabsList } = defineProps({
  tabsList: {
    type: Array,
    default: [],
  },
});

const emit = defineEmits(["on-change"]);

// 当前选中项id
let activeTabsId = ref(tabsList[0].id);

// 切换tabs事件
const handleChangeTabs = (tabsItem) => {
  // 修改选中项
  activeTabsId.value = tabsItem.id;
  // 触发自定义监听事件
  emit("on-change", tabsItem);
};
</script>

<style lang="scss" scoped>
.tabs-container {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 42px;
}

.tabs-item {
  position: relative;
  line-height: 46px;
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: $linkColor;
  }
  &::after {
    content: "";
    position: absolute;
    bottom: 3px;
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 2px;
    background-color: $linkColor;
    transition: width 0.3s;
  }

  &.active::after {
    width: 100%;
  }
}
</style>
