<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-14 12:56:40
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-14 21:57:13
 * @FilePath: \project\src\views\home\index.vue
-->
<template>
  <div class="word-container">
    <video
      style="width: 100%; height: 100%; display: block"
      src="@/assets/videos/map.mp4"
      autoplay
      muted
      loop
    ></video>
    <div class="word-title" ref="wordTitle">欢迎来到常浩田的个人网站</div>
    <div class="word-button" @click.stop="handleEnterSite">
      <span>点我进入</span>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick, toValue } from "vue";
const wordTitle = ref();
const handleEnterSite = () => {};

// 加载文字标题内容
const loadWordTitle = () => {
  let delay = 0.3;
  let revealText = wordTitle.value;
  let letters = revealText.textContent.split("");
  revealText.textContent = "";
  let middle = letters.filter((e) => e !== " ").length / 2;
  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`;
    revealText.append(span);
  });
};

onMounted(() => {
  // 加载文字标题内容
  loadWordTitle();
});
</script>

<style lang="scss">
.word-container {
  position: relative;
  height: 100vh;
  background: #000;
}

.word-title {
  display: flex;
  position: absolute;
  left: 50%;
  top: 33%;
  margin-left: -433px;
  width: 866px;
  color: #fff;
  font-size: 3.6em;
  font-family: Raleway, sans-serif;
  letter-spacing: 3px;
  text-transform: uppercase;
  white-space: pre;
  letter-spacing: 12px;
  text-align: center;
  background: rgba(0, 0, 0, 0.2);
  span {
    opacity: 0;
    transform: scale(0);
    animation: fadeIn 2.4s forwards;
  }
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes slideLeft {
  to {
    left: -6%;
    opacity: 1;
    transform: scale(0.9);
  }
}

@keyframes slideRight {
  to {
    right: -6%;
    opacity: 1;
    transform: scale(0.9);
  }
}

.word-button {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: absolute;
  left: 50%;
  top: 33%;
  margin-left: -75px;
  margin-top: 135px;
  width: 150px;
  height: auto;
  background-color: transparent;
  border: none;
  text-align: center;
  cursor: pointer;
}
.word-button span {
  position: relative;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 2px;
  text-transform: uppercase;
  top: 0;
  left: 0;
  width: 100%;
  padding: 15px 25px;
  transition: 0.3s;
  letter-spacing: 5px;
}
.word-button {
  padding: 5px;
}
.word-button span {
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
}
.word-button::before,
.word-button::after {
  position: absolute;
  content: "";
  background: transparent;
  z-index: 2;
}

.word-button::before,
.word-button::after {
  width: 10%;
  height: 25%;
  transition: 0.35s;
}
.word-button::before {
  top: 0;
  left: 0;
  border-left: 1px solid #fff;
  border-top: 1px solid #fff;
}
.word-button::after {
  bottom: 0;
  right: 0;
  border-right: 1px solid #fff;
  border-bottom: 1px solid #fff;
}
.word-button:hover::before,
.word-button:hover::after {
  width: 99%;
  height: 98%;
}
</style>
