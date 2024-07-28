<script setup>
import { ref } from "vue";
import json from "../json/home.json";

const data = ref({
  json,
});
</script>

<template>
  <div class="home wrapper">
    <h1>{{ data.json.title }}</h1>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/globals.scss";

.home {
  h1 {
    font-size: 22px;
  }
}
</style>
