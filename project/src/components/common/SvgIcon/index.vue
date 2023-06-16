<template>
  <svg :class="svgClass" aria-hidden="true" :style="style" @click="handleClick">
    <use :xlink:href="iconClassName" :fill="props.color" />
  </svg>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
  iconName: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: "",
  },
  close: {
    type: Boolean,
    default: false,
  },
  //自定义颜色
  color: {
    type: String,
    default: "#ffffff",
  },
  style: {
    type: [String, Object],
    default: "",
  },
});

// 图标在 iconfont 中的名字

const iconClassName = computed(() => {
  return `#${props.iconName}`;
});

// 给图标添加上类名

const svgClass = computed(() => {
  console.log(props.className)
  if (props.className) {
    return `svg-icon ${props.className} ${props.close ? "close" : ""}`;
  }

  return `svg-icon ${props.close ? "close" : ""}`;
});

const emits = defineEmits(["click"]);
const handleClick = () => {
  emits("click");
};
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 16px;
  height: 16px;
  position: relative;
}

.close {
  opacity: 0.8;
  &:hover {
    opacity: 1;
  }
}
</style>
