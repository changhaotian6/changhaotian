<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-15 23:00:06
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-16 23:21:48
 * @FilePath: \project\src\views\Myself\components\PersonalData\PersonalProfile.vue
-->
<template>
  <div>
    <OverlayHtml :position="position" :pixelOffsetPosition="['left', 'bottom']">
      <div class="profile-window">
        <svg-icon
          iconName="icon-guanbi"
          close
          style="position: absolute; right: 12px; top: 18px; cursor: pointer"
          @click="handleClick"
        />
        <img
          class="profile-avatar"
          src="~@/assets/images/cht.png"
          alt="常浩田"
        />
        <ul class="profile-detail">
          <li
            class="profile-detail-item"
            v-for="item in profileInfo"
            :key="item.description"
          >
            <span>{{ item.description }}：</span>
            <span>{{ item.value }}</span>
          </li>
        </ul>
      </div>
    </OverlayHtml>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import OverlayHtml from "@/components/common/OverlayHtml/index.vue";
import { useProfileStore } from "@/store/modules/profile.js";
const profileStore = useProfileStore();

// 济宁经纬度
const JiNing = [116.598213, 35.401114];
let position = reactive(JiNing);

const profileInfo = ref([
  {
    description: "姓名",
    value: "常浩田",
  },
  {
    description: "生日",
    value: "1996年8月",
  },
  {
    description: "籍贯",
    value: "山东省济宁市",
  },
  {
    description: "工作年限",
    value: "5年",
  },
  {
    description: "邮箱",
    value: "changhaotian6@163.com",
  },
]);

const handleClick = () => {
  profileStore.setActiveMenu("");
};
</script>

<style lang="scss" scoped>
.profile-window {
  display: flex;
  padding: 35px 0 0 75px;
  width: 435px;
  height: 264px;
  background-image: url(@/assets/images/popup_1.png);
  background-size: 100% 100%;
}

.profile-avatar {
  width: 80px;
  height: 100px;
  margin-right: 15px;
}

.profile-detail {
  flex: 1;
  margin-top: -5px;
}

.profile-detail-item {
  line-height: 26px;
  font-size: 14px;
  color: #fff;
}
</style>
