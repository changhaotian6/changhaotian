<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-15 23:00:06
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-19 14:45:59
 * @FilePath: \project\src\components\content\AsideDescriptionParagraph\index.vue
-->
<template>
  <div class="aside-paragraph">
    <p
      class="aside-paragraph-item"
      v-for="content in paragraphInfo"
      :key="content"
    >
      {{ content }}
    </p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
/** Example **/
// const paragraphInfo = reactive([
//   "1、具备团队合作意识，能积极主动的配合其他同事完成工作，有较强的责任心和学习能力。",
//   "2、对于自己的发展，有长期明确的职业规划，善于在工作中学习，总结，不断进步。 ",
//   "3、对于新技术新事物有较强的接受能力，愿意主动学习其他领域值得探索的技术，不断完善提高自己。",
//   "4、期待挑战，不具困难。宝剑锋从磨砺出，梅花香自苦寒来。",
// ]);

defineProps({
  paragraphInfo: {
    type: Array,
    default: [],
  },
});
</script>

<style lang="scss" scoped>
.aside-paragraph {
  padding: 15px;
}
.aside-paragraph-item {
  padding-bottom: 8px;
  line-height: 22px;
  font-size: 14px;
  color: $descColor;
}
</style>
