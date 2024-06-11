<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="container">
    <Header />
    <Footer />
  </div>
</template>

<style scoped>
.container {
  width: calc(100% - 20px);
  max-width: 1500px;
  margin: 10px auto;
}
</style>
