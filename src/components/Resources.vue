<script setup>
import { ref } from "vue";
import resources from "../json/resources.json";
import { sanitizeHtml } from "../utils/sanitizeHtml";

const data = ref({
  resources,
});

const { resourcesInfo, overlays, scripts, various } = data.value.resources;
</script>

<template>
  <div class="resources wrapper">
    <section
      class="text-media content-box"
      id="first-component"
      :direction="resourcesInfo.config.direction"
    >
      <div class="text-media-item">
        <div class="image">
          <img :src="resourcesInfo.image.src" :alt="resourcesInfo.image.alt" />
        </div>
      </div>
      <div class="text-media-item">
        <h2 class="section-headline">
          {{ resourcesInfo.copy.headline }}
        </h2>
        <h3>
          {{ resourcesInfo.copy.subline }}
        </h3>
        <p v-html="sanitizeHtml(resourcesInfo.copy.text)"></p>
      </div>
    </section>
    <section class="resource" id="overlays">
      <h2 class="section-headline">{{ overlays.headline }}</h2>
      <div class="resource-items">
        <div class="resource-item" v-for="item in overlays.items">
          <a
            :href="item.anchor.link"
            :aria-label="item.copy.headline"
            :target="item.anchor.target"
          >
            <div class="resource-copy">
              <h3>{{ item.copy.headline }}</h3>
              <p>{{ item.copy.text.substring(0, 200) }}...</p>
              <div class="resource-get">
                <p>{{ overlays.get }}</p>
              </div>
            </div>
            <div class="resource-image">
              <img :src="item.image.src" :alt="item.image.alt" />
            </div>
          </a>
        </div>
      </div>
    </section>
    <section class="resource" id="scripts">
      <h2 class="section-headline">{{ scripts.headline }}</h2>
      <div class="resource-items">
        <div class="resource-item" v-for="item in scripts.items">
          <a
            :href="item.anchor.link"
            :aria-label="item.copy.headline"
            :target="item.anchor.target"
          >
            <div class="resource-copy">
              <h3>{{ item.copy.headline }}</h3>
              <p>{{ item.copy.text.substring(0, 200) }}...</p>
              <div class="resource-get">
                <p>{{ scripts.get }}</p>
              </div>
            </div>
            <div class="resource-image">
              <img :src="item.image.src" :alt="item.image.alt" />
            </div>
          </a>
        </div>
      </div>
    </section>
    <section class="resource" id="others">
      <h2 class="section-headline">{{ various.headline }}</h2>
      <div class="resource-items">
        <div class="resource-item" v-for="item in various.items">
          <a
            :href="item.anchor.link"
            :aria-label="item.copy.headline"
            :target="item.anchor.target"
          >
            <div class="resource-copy">
              <h3>{{ item.copy.headline }}</h3>
              <p>{{ item.copy.text.substring(0, 200) }}...</p>
              <div class="resource-get">
                <p>{{ various.get }}</p>
              </div>
            </div>
            <div class="resource-image">
              <img :src="item.image.src" :alt="item.image.alt" />
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/globals.scss";
</style>
