<template>
  <div class="myself-container">
    <Visual />
    <PersonalData />
    <ProjectAddress/>
    <SiteTips/>
  </div>
</template>

<script setup>
import ProjectAddress from "@/components/common/ProjectAddress/index.vue";
import SiteTips from "@/components/common/SiteTips/index.vue";
import PersonalData from "./components/PersonalData/index.vue";
import Visual from "./components/Visual/index.vue";
</script>

<style lang="scss" scoped>
.myself-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
</style>
