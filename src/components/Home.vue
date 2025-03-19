<script setup>
import { ref, onMounted, computed } from "vue";
import { sanitizeHtml } from "../utils/sanitizeHtml";
import { loadNotes } from "../utils/loadNotes";
import home from "../json/home.json";
import notesCopy from "../json/notes.json";
import resources from "../json/resources.json";

const data = ref({
  home,
  notesCopy,
  resources,
});
const notes = ref([]);

const { intro } = data.value.home;
const { others } = data.value.notesCopy;
const { overlays, general } = data.value.resources;

onMounted(async () => {
  notes.value = await loadNotes();
});

const lastTwoNotes = computed(() => {
  return notes.value.slice(-2).reverse();
});
</script>

<template>
  <div class="home wrapper" id="first-component">
    <div class="content-box">
      <section class="text-media" :direction="intro.config.direction">
        <div class="text-media-item">
          <div class="image">
            <img :src="intro.image.src" :alt="intro.image.alt" />
          </div>
        </div>
        <div class="text-media-item">
          <h2 class="section-headline">
            {{ intro.copy.headline }}
          </h2>
          <h3>
            {{ intro.copy.subline }}
          </h3>
          <p v-html="sanitizeHtml(intro.copy.text)"></p>
          <a
            :href="intro.anchor.link"
            :target="intro.anchor.target"
            :aria-label="intro.anchor.text"
            class="button"
            v-if="intro.anchor.text"
            >{{ intro.anchor.text }}</a
          >
        </div>
      </section>
    </div>
    <section class="notes">
      <div class="notes-last">
        <div class="last-header">
          <h2>{{ others.recent }}</h2>
          <a
            :href="others.explore.link"
            :target="others.explore.target"
            :aira-label="others.explore.text"
            class="button"
            v-if="others.explore.text"
            >{{ others.explore.text }}</a
          >
        </div>
        <div class="notes-cards">
          <router-link
            :to="{ name: 'note-detail', params: { id: lastNote.filename } }"
            :aria-label="lastNote.info.headline"
            class="notes-card"
            v-for="lastNote in lastTwoNotes"
            :key="lastNote.filename"
          >
            <div class="notes-image">
              <img
                loading="lazy"
                :src="lastNote.image.src"
                :alt="lastNote.image.alt"
              />
            </div>
            <div class="notes-copy">
              <h3>{{ lastNote.info.headline }}</h3>
              <p>{{ lastNote.info.date }}</p>
              <p class="notes-keywords">
                <span v-for="keyword in lastNote.info.keywords">{{
                  keyword
                }}</span>
              </p>
              <p>{{ lastNote.copy.texts[0].content.substring(0, 150) }}...</p>
              <div class="notes-reading">
                <p>{{ others.continue }}</p>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </section>
    <section class="resource">
      <div class="last-header">
        <h2>{{ general.recent }}</h2>
        <a
          :href="general.explore.link"
          :target="general.explore.target"
          :aria-label="general.explore.text"
          class="button"
          v-if="general.explore.text"
          >{{ general.explore.text }}</a
        >
      </div>
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
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/globals.scss";
</style>
