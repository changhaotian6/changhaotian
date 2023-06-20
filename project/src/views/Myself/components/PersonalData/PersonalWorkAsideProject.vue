<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-15 23:00:06
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-20 13:25:29
 * @FilePath: \project\src\views\Myself\components\PersonalData\PersonalWorkAsideProject.vue
-->
<template>
  <div
    class="modal-container event"
    v-show="isVisible"
    v-if="currentProjectInfo"
  >
    <div class="modal-content">
      <SvgIcon
        iconName="icon-guanbi"
        class="close-modal"
        close
        @click="handleClose"
      ></SvgIcon>
      <div class="modal-title">
        {{ currentProjectInfo.name }}
      </div>
      <div class="modal-block">
        <AsideDescriptionTitle>项目描述</AsideDescriptionTitle>
        <div class="modal-block-desc">
          <p>
            {{ currentProjectInfo.description }}
          </p>
        </div>
      </div>
      <div class="modal-block">
        <AsideDescriptionTitle>技术栈</AsideDescriptionTitle>
        <div class="modal-block-desc">
          <p>
            {{ currentProjectInfo.stack }}
          </p>
        </div>
      </div>
      <div class="modal-block">
        <AsideDescriptionTitle>输出内容</AsideDescriptionTitle>
        <div class="modal-block-desc">
          <p v-for="item in currentProjectInfo.content" :key="item">
            {{ item }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import AsideDescriptionTitle from "@/components/content/AsideDescriptionTitle/index.vue";
import { defineEmits, defineProps, reactive, ref, watch } from "vue";
import { projects } from "@/mock/index.js";

const props = defineProps({
  visible: {
    type: Boolean,
    default: false,
  },
  projectInfo: {
    type: Object,
    default: {},
  },
});

const emit = defineEmits(["close"]);

const isVisible = ref(props.visible);

let currentProjectInfo = reactive({});
watch(
  () => props.visible,
  (val) => {
    isVisible.value = val;
  }
);

watch(
  () => props.projectInfo.id,
  (val) => {
    currentProjectInfo = projects[val];
  }
);

const handleClose = () => {
  isVisible.value = false;
  emit("close");
};
</script>

<style lang="scss" scoped>
.modal-container {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.8);
}

.modal-content {
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);
  width: 850px;
  min-height: 350px;
  background: url(@/assets/images/modal.png) center no-repeat;
  background-size: 100% 100%;
}
.modal-title {
  width: 100%;
  height: 56px;
  text-align: center;
  line-height: 56px;
  font-size: 20px;
  font-weight: 600;
  color: $activeColor;
  letter-spacing: 2px;
}

.modal-block {
  padding: 8px 20px 0;
  &:last-child {
    margin-bottom: 25px;
  }
}
.modal-block-desc {
  margin: 12px 15px;
  padding: 12px;
  background-color: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border-radius: 8px;
  line-height: 22px;
  font-size: 14px;
  color: #eee;
  text-indent: 2em;
  & > p {
    margin-bottom: 8px;
    &:last-child {
      margin-bottom: 0;
    }
  }
}
.close-modal {
  position: absolute;
  top: 20px;
  right: 30px;
  width: 20px;
  height: 20px;
  cursor: pointer;
}
</style>
