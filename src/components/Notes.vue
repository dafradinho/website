<script setup>
import { ref, onMounted, computed } from "vue";
import { loadNotes } from "../utils/loadNotes";
import notesCopy from "../json/notes.json";

const data = ref({
  notesCopy,
});
const notes = ref([]);
const { others } = data.value.notesCopy;

onMounted(async () => {
  notes.value = await loadNotes();
});

const reversedNotes = computed(() => {
  return [...notes.value].reverse();
});
</script>

<template>
  <section class="notes wrapper" id="first-component">
    <h2 class="section-headline">Notes</h2>
    <div class="notes-cards">
      <router-link
        :to="{ name: 'note-detail', params: { id: note.filename } }"
        class="notes-card"
        v-for="note in reversedNotes"
        :key="note.filename"
      >
        <div class="notes-image">
          <img loading="lazy" :src="note.image.src" :alt="note.image.alt" />
        </div>
        <div class="notes-copy">
          <h3>{{ note.info.headline }}</h3>
          <p>{{ note.info.date }}</p>
          <p class="notes-keywords">
            <span v-for="keyword in note.info.keywords">{{ keyword }}</span>
          </p>
          <p>{{ note.copy.texts[0].content.substring(0, 150) }}...</p>
          <div class="notes-reading">
            <p>{{ others.continue }}</p>
          </div>
        </div>
      </router-link>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../styles/globals.scss";
</style>
