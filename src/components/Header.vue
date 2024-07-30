<script setup>
import { ref } from "vue";
import router from "./../router";
import json from "../json/navigation.json";

const data = ref({
  json,
});

const refreshPage = () => {
  router.go();
};
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
        <nav role="navigation">
          <div class="header-menu">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>

            <ul class="menu">
              <li v-for="item in data.json.navigation" @click="refreshPage">
                <RouterLink :to="item.link">{{ item.title }}</RouterLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../styles/variables.scss";

header {
  padding: 20px 0;
  border-radius: 10px;
  margin-bottom: 30px;

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
      .header-menu {
        input {
          display: none;

          @media only screen and (max-width: $mqTablet) {
            display: block;
            width: 36px;
            height: 30px;
            position: absolute;
            top: 24px;
            right: 6%;
            cursor: pointer;
            opacity: 0;
            z-index: 2;

            cursor: pointer;

            opacity: 0;
            z-index: 2;

            -webkit-touch-callout: none;
          }
        }

        span {
          @media only screen and (max-width: $mqTablet) {
            display: block;
            width: 34px;
            height: 4px;
            margin-bottom: 6px;
            position: relative;

            background: #cdcdcd;
            border-radius: 3px;

            z-index: 1;

            @include animation;
          }

          &:last-of-type {
            @media only screen and (max-width: $mqTablet) {
              margin-bottom: 0;
            }
          }
        }

        input:checked ~ span {
          @media only screen and (max-width: $mqTablet) {
            width: 24px;
          }
        }
        input:checked ~ span:nth-last-child(3) {
          @media only screen and (max-width: $mqTablet) {
            width: 34px;
          }
        }
        input:checked ~ .menu {
          @media only screen and (max-width: $mqTablet) {
            display: flex;
            transform: none;
          }
        }

        .menu {
          display: flex;

          @media only screen and (max-width: $mqTablet) {
            display: none;
            position: absolute;
            flex-direction: column;
            align-items: flex-end;
            top: 84px;
            right: 10px;
            width: 160px;
            padding: 20px;
            border-radius: 10px;
            margin: auto;

            background: $grey-dark;
            list-style-type: none;
            -webkit-font-smoothing: antialiased;
          }

          li {
            margin-right: 20px;

            @media only screen and (max-width: $mqTablet) {
              margin-right: 0;
              margin-bottom: 20px;
            }

            &:last-of-type {
              margin-right: 0;

              @media only screen and (max-width: $mqTablet) {
                margin-bottom: 0;
              }
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
  }
}
</style>
