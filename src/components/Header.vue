<script setup>
import { ref } from "vue";
import json from "../json/navigation.json";

const data = ref({
  json,
});
</script>

<template>
  <header>
    <div class="wrapper">
      <div class="header-content">
        <p class="logo">
          <RouterLink :to="data.json.logo.link">{{
            data.json.logo.title
          }}</RouterLink>
        </p>
        <nav>
          <ul>
            <li v-for="item in data.json.navigation">
              <RouterLink :to="item.link">{{ item.title }}</RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  padding: 20px 0;
  border-radius: 10px;
  margin-bottom: 30px;

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    ul {
      display: flex;

      li {
        margin-right: 20px;

        &:last-of-type {
          margin-right: 0;
        }

        a {
          padding-bottom: 2px;
          border-bottom: 2px solid transparent;
          font-weight: 500;
          font-size: 18px;
        }
      }
    }
  }
}
</style>
