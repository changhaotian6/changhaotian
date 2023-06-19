<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-15 23:00:06
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-19 22:38:28
 * @FilePath: \project\src\views\Myself\components\PersonalData\PersonalWorkAside.vue
-->
<template>
  <AsideContainer>
    <div class="aside-wrap" v-show="!isDetail">
      <div class="aside-title"></div>
      <div
        class="compony-info"
        v-for="item in workInfo"
        :key="item.id"
        @click.stop="handleDetail(item)"
      >
        <SvgIcon iconName="icon-jinru1" class="enter"></SvgIcon>
        <img class="compony-logo" :src="item.img" />
        <div class="compony-desc">
          <div class="compony-desc-item">{{ item.date }}{{ isDetail }}</div>
          <div class="compony-desc-item">{{ item.name }}</div>
          <div class="compony-desc-item">{{ item.jobPosition }}</div>
          <!-- <span class="compony-detail" >
            查看详情
          </span> -->
        </div>
      </div>
    </div>
    <PersonalWorkAsideDetail
      :compony-info="currentComponyInfo"
      v-show="isDetail"
      @on-back="isDetail = false"
    />
  </AsideContainer>

</template>

<script setup>
import AsideContainer from "@/components/content/AsideContainer/index.vue";
import PersonalWorkAsideDetail from "./PersonalWorkAsideDetail.vue";
import { inject, reactive, ref } from "vue";
let isDetail = ref(false);
let currentComponyInfo = reactive({});
const workInfos = inject("workInfos");
const workInfo = reactive([]);
// 按时间倒叙
workInfos.forEach((item) => workInfo.unshift(item));

const handleDetail = (info) => {
  isDetail.value = true;
  currentComponyInfo = info;
};
</script>

<style lang="scss" scoped>
.aside-wrap {
  padding: 12px 0;
}
.aside-title {
  width: 100%;
  height: 42px;
  background-image: url(@/assets/images/work.png);
  background-size: 190% 100%;
  background-position: center center;
}
.compony-info {
  position: relative;
  display: flex;
  margin: 10px 16px;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 5px;
  cursor: pointer;
  transition: all .2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.3);
    .enter {
      display: block;
    }
  }
}
.compony-logo {
  margin-right: 15px;
  width: 40px;
  height: 40px;
}
.compony-desc {
}
.compony-desc-item {
  margin-bottom: 10px;
  line-height: 1;
  font-size: 14px;
  color: $descColor;

  &:last-child {
    margin-bottom: 0;
  }
}
.compony-detail {
  font-size: 14px;
  text-decoration: underline;
  color: $linkColor;
  cursor: pointer;
}

.enter {
  position: absolute;
  top: 50%;
  right: 8px;
  margin-top: -8px;
  transition: all .2s;
}
</style>
