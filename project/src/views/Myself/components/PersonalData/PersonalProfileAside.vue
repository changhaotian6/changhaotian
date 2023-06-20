<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-15 23:00:06
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-20 13:37:22
 * @FilePath: \project\src\views\Myself\components\PersonalData\PersonalProfileAside.vue
-->
<template>
  <AsideContainer>
    <div class="aside-wrap">
      <div class="aside-title"></div>
      <!-- 基础信息 -->
      <AsideDescriptionTitle> 基础信息 </AsideDescriptionTitle>
      <div class="aside-basic">
        <img class="aside-basic-avatar" src="@/assets/images/cht.png" />
        <ul class="aside-basic-content">
          <li
            class="aside-basic-content-item"
            v-for="profileItem in profileInfo"
            :key="profileItem.label"
          >
            <span class="content-label">{{ profileItem.label }}：</span>
            <span class="content-desc">{{ profileItem.value }}</span>
          </li>
        </ul>
      </div>
      <!-- 自我评价 -->
      <AsideDescriptionTitle> 自我评价 </AsideDescriptionTitle>
      <AsideDescriptionParagraph :paragraph-info="evaluationInfo" />
    </div>
  </AsideContainer>
</template>

<script setup>
import AsideContainer from "@/components/content/AsideContainer/index.vue";
import AsideDescriptionTitle from "@/components/content/AsideDescriptionTitle/index.vue";
import AsideDescriptionParagraph from "@/components/content/AsideDescriptionParagraph/index.vue";

import { reactive, ref } from "vue";
import { mockEvaluationInfo } from "@/mock/index.js";

const profileInfo = reactive([
  {
    label: "姓名",
    value: "常浩田",
  },
  {
    label: "生日",
    value: "1996年8月",
  },
  {
    label: "工作年限",
    value: "5年",
  },
  {
    label: "邮箱",
    value: "changhaotian6@163.com",
  },
]);

const evaluationInfo = reactive(mockEvaluationInfo);
</script>

<style lang="scss" scoped>
.aside-wrap {
  padding: 12px 0;
}
.aside-title {
  width: 100%;
  height: 42px;
  background-image: url(@/assets/images/profile.png);
  background-size: 190% 100%;
  background-position: center center;
}

.aside-basic {
  display: flex;
  padding: 15px;
}
.aside-basic-avatar {
  margin-right: 10px;
  width: 80px;
  height: 100px;
}
.aside-basic-content {
  flex: 1;
}
.aside-basic-content-item {
  margin-bottom: 15px;
  font-size: 14px;
  color: $descColor;
  &:last-child {
    margin-bottom: 0;
  }
}

.divider {
  margin: 0 auto;
  width: calc(100% - 30px);
  height: 1px;
  background-color: $linkColor;
}
</style>
