<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-15 23:00:06
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-20 14:30:41
 * @FilePath: \project\src\components\content\AsideDescriptionParagraph\index.vue
-->
<template>
  <div class="aside-paragraph">
    <p
      class="aside-paragraph-item"
      v-for="content in paragraphInfoArr"
      :key="content"
      v-html="content"
    >
    </p>
  </div>
</template>

<script setup>
import { defineProps, reactive, ref } from "vue";
import { uuid } from "@/utils/utils";
/** Example **/
// const paragraphInfo = reactive([
//   "1、具备团队合作意识，能积极主动的配合其他同事完成工作，有较强的责任心和学习能力。",
//   "2、对于自己的发展，有长期明确的职业规划，善于在工作中学习，总结，不断进步。 ",
//   "3、对于新技术新事物有较强的接受能力，愿意主动学习其他领域值得探索的技术，不断完善提高自己。",
//   "4、期待挑战，不具困难。宝剑锋从磨砺出，梅花香自苦寒来。",
// ]);

const { paragraphInfo, keywords } = defineProps({
  paragraphInfo: {
    type: Array,
    default: [],
  },
  keywords: {
    type: Array,
    default: [],
  },
});

let paragraphInfoArr = reactive(paragraphInfo);

/**
 * 替换关键字
 * @param {string} str 任意字符串
 * @param {string} keyword 关键字
 * */
const replaceKeyword = (str, keyword) => {
  var reg = new RegExp(`(${keyword})`, "gi");
  var replace = '<span style="color:#03ffff;">$1</span>';
  // var replace = '<span style="color:#03ffff;">$1</span>';
  return str.replace(reg, replace);
};

/**
 * 获取替换关键字后的段落数据
 * @param {array} paragraphInfoArr 段落数组["str1", "str2"]
 * @param {array} keywords 关键字数组 ["keyword1", "keyword2"]
 * @return {array} 返回替换关键字后的数据
 * */
const getAfterReplaceKeywordParagraph = (paragraphInfoArr, keywords) => {
  // 唯一分隔符
  const separator = uuid();
  // 转字符串
  let paragraphInfoStr = paragraphInfoArr.join(separator);

  for (let i = 0, len = keywords.length; i < len; i++) {
    const keyword = keywords[i];
    paragraphInfoStr = replaceKeyword(paragraphInfoStr, keyword);
  }
  // 返回替换关键字后的数据
  return paragraphInfoStr.split(separator);
};

if (keywords.length) {
  paragraphInfoArr = getAfterReplaceKeywordParagraph(
    paragraphInfoArr,
    keywords
  );
}
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
  &:last-child {
    padding-bottom: 0;
  }
}
</style>
