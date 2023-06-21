<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-21 12:38:30
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-21 13:19:58
 * @FilePath: \project\src\components\common\Image\index.vue
-->
<template>
  <div :style="style">
    <img class="image" :src="src" ref="img" v-show="visible" />
    <div
      class="placeholder"
      style="background-color: #eee"
      v-show="!visible"
    ><SvgIcon className="svgicon" icon-name="icon-icon_xinyong_xianxing_jijin-239" color="#ccc"/></div>
  </div>
</template>

<script setup>
import SvgIcon from '@/components/common/SvgIcon/index.vue'
import { defineProps, ref, computed, onMounted } from "vue";
const props = defineProps({
  src: {
    type: [String, Object],
    default: "",
  },
  
  className: {
    type: String,
    default: "",
  },
});

const img = ref();
const visible = ref(false);

onMounted(() => {
  img.value.onload = () => {
    visible.value = true;
  };
})
</script>

<style lang="scss" scoped>
.image,
.placeholder {
  display: block;
  width: 100%;
  height: 100%;
}

.placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
}
.svgicon {
  width: 30px;
  height: 30px;
  opacity: .2;
}
</style>
