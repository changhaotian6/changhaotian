<template>
  <div class="myself-container">
    <Visual />
    <PersonalData/>
  </div>
</template>

<script setup>
import PersonalData from "./components/PersonalData/index.vue";
import Visual from "./components/Visual/index.vue";
import { ref, reactive } from "vue";

</script>

<style lang="scss" scoped>
.myself-container {
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #000;
}
</style>
