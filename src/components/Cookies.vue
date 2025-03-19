<script setup>
import { ref } from "vue";
import cookies from "../json/cookies.json";
import { sanitizeHtml } from "../utils/sanitizeHtml";

const data = ref({
  cookies,
});

const { text } = data.value.cookies;
</script>

<template>
  <div class="cookies wrapper">
    <section class="text">
      <h2 class="section-headline">{{ text.copy.headline }}</h2>
      <p v-html="sanitizeHtml(text.copy.text)"></p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/globals.scss";
</style>
