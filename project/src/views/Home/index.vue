<!--
 * @Description: 
 * @version: 1.0.0
 * @Author: changhaotian6@163.com
 * @Date: 2023-06-14 12:56:40
 * @LastEditors: changhaotian6@163.com
 * @LastEditTime: 2023-06-20 22:39:25
 * @FilePath: \project\src\views\Home\index.vue
-->
<template>
  <div class="word-container">
    <Loading v-if="state.loading" />

    <video
      style="width: 100%; height: 100%; display: block"
      src="@/assets/videos/map.mp4"
      poster="@/assets/images/map.png"
      :controls="false"
      autoplay
      muted
      loop
      preload
      ref="videoRef"
      v-show="!state.loading"
    ></video>

    <template v-if="!state.loading">
      <div class="word-title" id="wordTitle">欢迎来到常浩田的个人空间</div>
      <div class="word-button" @click.stop="handleEnterSite">
        <span>点我进入</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import Loading from "@/components/common/Loading/index.vue";
import { ref, reactive, onMounted, getCurrentInstance, nextTick } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
// 视频加载状态
const state = reactive({ loading: true });
// 视频元素
const videoRef = ref();
// 点击进入事件
const handleEnterSite = () => {
  // 跳转到个人简历页面
  router.push("/myself");
};

// 加载文字标题内容
const loadWordTitle = () => {
  // 标题元素
  const revealText = document.querySelector('#wordTitle');
  const delay = 0.3;
  const letters = revealText.textContent.split("");
  revealText.textContent = "";
  const middle = letters.filter((e) => e !== " ").length / 2;
  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${delay + Math.abs(i - middle) * 0.1}s`;
    revealText.append(span);
  });
};

// 监听视频可以流程播放
const listenVideoCanplaythrough = () => {
  //已经可以流畅的播放
  videoRef.value.addEventListener("canplaythrough", function (e) {
    if (!state.loading) {
      return;
    }
    state.loading = false;
    // 加载文字标题内容
    nextTick(loadWordTitle);
  });
};

onMounted(() => {
  // 监听视频可以流程播放
  listenVideoCanplaythrough();
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
  padding: 5px;
  width: 150px;
  height: auto;
  background-color: transparent;
  border: none;
  text-align: center;
  cursor: pointer;
  opacity: 0;
  animation: wordButton 1.5s linear 3s;
  animation-fill-mode: forwards;
}

@keyframes wordButton {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
 
}
</style>
