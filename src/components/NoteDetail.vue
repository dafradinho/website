<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { loadNotes } from "../utils/loadNotes";
import { sanitizeHtml } from "../utils/sanitizeHtml";
import notesCopy from "../json/notes.json";
import navigation from "../json/navigation.json";

const data = ref({
  notesCopy,
  navigation,
});
const note = ref(null);
const notes = ref([]);

const route = useRoute();

const { bio, others } = data.value.notesCopy;
const { socials } = data.value.navigation;

onMounted(async () => {
  notes.value = await loadNotes();
  note.value = notes.value.find((n) => n.filename === route.params.id);
});

const lastTwoNotes = computed(() => {
  return notes.value.slice(-2).reverse();
});
</script>

<template>
  <section class="note wrapper" id="first-component">
    <div class="note-wrapper" v-if="note">
      <div class="note-inner">
        <div class="note-header">
          <div class="notes-image">
            <img :src="note.image.src" :alt="note.image.alt" />
          </div>
          <h1>{{ note.info.headline }}</h1>
          <p>{{ note.info.date }}</p>
          <p class="notes-keywords">
            <span v-for="keyword in note.info.keywords">{{ keyword }}</span>
          </p>
        </div>
        <div class="note-content">
          <div v-for="item in note.copy.texts" :key="item.id">
            <p
              v-if="item.type === 'text'"
              v-html="sanitizeHtml(item.content)"
            ></p>
            <img
              v-else-if="item.type === 'image'"
              :src="item.content"
              :alt="item.alt"
            />
          </div>
        </div>
      </div>
      <div class="bio">
        <div class="bio-image">
          <img :src="bio.image.src" :alt="bio.image.alt" />
        </div>
        <div class="bio-copy">
          <p>{{ bio.text }}</p>
          <div class="socials">
            <ul>
              <li v-for="social in socials" :key="social.link">
                <a
                  :href="social.link"
                  :aria-label="social.source"
                  target="_blank"
                  ><img :src="social.source" :alt="social.alt"
                /></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="notes-last">
        <div class="last-header">
          <h2>{{ others.recent }}</h2>
          <a
            :href="others.explore.link"
            :target="others.explore.target"
            :aria-label="others.explore.text"
            class="button"
            v-if="others.explore.text"
            >{{ others.explore.text }}</a
          >
        </div>
        <div class="notes-cards">
          <router-link
            :to="{ name: 'note-detail', params: { id: lastNote.filename } }"
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
    </div>
    <div class="not-found" v-else>
      <img src="/src/assets/error/empty-state.png" alt="" />
      <p>Note not found</p>
      <a
        :href="others.explore.link"
        :target="others.explore.target"
        :aria-label="others.explore.text"
        class="button"
        v-if="others.explore.text"
        >{{ others.explore.text }}</a
      >
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "../styles/globals.scss";

.note {
  .note-inner {
    max-width: 700px;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  .note-header {
    margin-bottom: 30px;

    h1 {
      margin-bottom: 6px;
    }
  }
  .note-content {
    div {
      margin-bottom: 20px;

      &:last-of-type {
        margin-bottom: 0;
      }
    }

    img {
      max-width: 100%;
      border-radius: 10px;
    }
  }
}

.bio {
  display: flex;
  flex-wrap: wrap;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 40px;

  @media screen and (min-width: $mqTablet) {
    align-items: center;
  }
  @media screen and (max-width: $mqMobile) {
    flex-direction: column;
  }

  .bio-image {
    position: relative;
    width: 200px;
    height: 200px;
    border-radius: 10px;
    overflow: hidden;

    @media screen and (max-width: $mqMobile) {
      margin-bottom: 20px;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .bio-copy {
    @media screen and (min-width: $mqMobile) {
      width: calc(100% - 230px);
      padding-left: 30px;
    }

    p {
      font-size: 20px;
    }
  }
}

.last-notes {
  margin-top: 40px;

  .last-note {
    margin-bottom: 20px;

    h3 {
      margin-bottom: 6px;
    }
  }
}
</style>
