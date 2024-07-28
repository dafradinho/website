<script setup>
import Header from "./components/Header.vue";
import Home from "./components/Home.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="container">
    <Header />
    <Home />
    <Footer />
  </div>
</template>

<style>
@import "styles/globals.scss";

.container {
  width: calc(100% - 20px);
  max-width: 1320px;
  padding: 10px 0;
  margin: auto;
}
</style>
