<script setup>
import { ref } from "vue";
import newsletter from "../json/newsletter.json";
import { sanitizeHtml } from "../utils/sanitizeHtml";

const data = ref({
  newsletter,
});

const { concept, reason, subscribe } = data.value.newsletter;
</script>

<template>
  <div class="newsletter wrapper">
    <section
      class="text-media content-box"
      id="first-component"
      :direction="concept.config.direction"
    >
      <div class="text-media-item">
        <div class="image">
          <img :src="concept.image.src" :alt="concept.image.alt" />
        </div>
      </div>
      <div class="text-media-item">
        <h2 class="section-headline">
          {{ concept.copy.headline }}
        </h2>
        <h3>
          {{ concept.copy.subline }}
        </h3>
        <p v-html="sanitizeHtml(concept.copy.text)"></p>
      </div>
    </section>
    <section class="text content-box" id="reason">
      <h2 class="section-headline">{{ reason.copy.headline }}</h2>
      <p>{{ reason.copy.text }}</p>
    </section>
    <section class="text content-box" id="subscribe">
      <h2 class="section-headline">{{ subscribe.copy.headline }}</h2>
      <p>{{ subscribe.copy.text }}</p>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/globals.scss";
</style>
