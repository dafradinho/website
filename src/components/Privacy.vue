<script setup>
import { ref } from "vue";
import privacy from "../json/privacy.json";
import { sanitizeHtml } from "../utils/sanitizeHtml";

const data = ref({
  privacy,
});

const { text } = data.value.privacy;
</script>

<template>
  <div class="privacy wrapper">
    <section class="text">
      <h2 class="section-headline">{{ text.copy.headline }}</h2>
      <p v-html="sanitizeHtml(text.copy.text)"></p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/globals.scss";
</style>
