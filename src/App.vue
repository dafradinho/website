<script setup>
import Header from "./components/Header.vue";
import CookiesBanner from "./components/CookiesBanner.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <div class="container">
    <CookiesBanner />
    <Header />
    <RouterView />
    <Footer />
  </div>
</template>

<style>
@import "styles/globals.scss";

.container {
  width: calc(100% - 20px);
  max-width: 1200px;
  padding: 10px 0;
  margin: auto;
}
</style>
