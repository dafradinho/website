<script setup>
import { ref } from "vue";
import notesCopy from "../json/notes.json";

const data = ref({
  notesCopy,
});

const { others } = data.value.notesCopy;
</script>

<template>
  <div>
    <div class="wrapper not-found">
      <img src="/src/assets/error/empty-state.png" alt="" />
      <p>
        404 - Page Not Found<br />
        The page you are looking for does not exist.
      </p>
      <a
        :href="others.homepage.link"
        :target="others.homepage.target"
        :aria-label="others.homepage.text"
        class="button"
        v-if="others.homepage.text"
        >{{ others.homepage.text }}</a
      >
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
