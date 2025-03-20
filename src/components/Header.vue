<script setup>
import { ref, computed } from "vue";
import router from "./../router";
import navigation from "../json/navigation.json";

const data = ref({
  navigation,
});

const { logo, navigationHeader, others } = data.value.navigation;

const refreshPage = () => {
  router.go();
};

const setCookie = (name, value, days) => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const secureFlag = location.protocol === "https:" ? ";Secure" : "";
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/${secureFlag}`;
};

const getCookie = (name) => {
  const nameEQ = `${name}=`;
  const cookies = document.cookie.split(";");
  for (let cookie of cookies) {
    cookie = cookie.trim();
    if (cookie.startsWith(nameEQ)) {
      return cookie.substring(nameEQ.length);
    }
  }
  return null;
};

const savedTheme = getCookie("userTheme");
const currentTheme = ref(
  savedTheme || document.body.getAttribute("data-theme") || "light"
);

document.body.setAttribute("data-theme", currentTheme.value);

const themeImage = computed(() => {
  return currentTheme.value === "dark"
    ? "/src/assets/icons/sun.svg"
    : "/src/assets/icons/moon.png";
});

const updateTheme = () => {
  const newTheme = currentTheme.value === "dark" ? "light" : "dark";
  document.body.setAttribute("data-theme", newTheme);
  currentTheme.value = newTheme;

  setCookie("userTheme", newTheme, 365);
};

const scrollToContent = (event) => {
  const target = document.querySelector("#first-component");
  if (target) {
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  event.target.blur();
};
</script>

<template>
  <header>
    <div class="skip-to-content" :aria-label="others.skip.label">
      <a href="#first-component" @click.prevent="scrollToContent">{{
        others.skip.label
      }}</a>
    </div>
    <div class="wrapper-hf">
      <div class="header-content">
        <p class="logo">
          <RouterLink :to="logo.link">{{ logo.title }}</RouterLink>
        </p>
        <nav role="navigation">
          <div class="header-menu">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>

            <ul class="menu">
              <li v-for="item in navigationHeader" @click="refreshPage">
                <RouterLink :to="item.link">{{ item.title }}</RouterLink>
              </li>
            </ul>
          </div>
          <div class="theme-button">
            <button @click="updateTheme">
              <img :src="themeImage" alt="Toggle Theme" />
            </button>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import "../styles/variables.scss";

header {
  position: relative;
  padding: 20px 0;
  border-radius: 10px;
  margin-bottom: 40px;

  .skip-to-content {
    &:focus-within {
      a {
        left: 0;
      }
    }
    a {
      position: absolute;
      top: 12px;
      left: -100%;
      padding: 12px 18px;
      border: 2px solid $grey;
      border-radius: 26px;
      background: $grey;
      font-weight: 900;
      font-size: 16px;
    }
  }

  .logo {
    margin-bottom: 0;
    line-height: 1;
  }

  .header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav {
      display: flex;
      align-items: center;

      @media only screen and (max-width: $mqTablet) {
        flex-direction: row-reverse;
      }

      .header-menu {
        position: relative;
        margin-right: 20px;

        @media only screen and (max-width: $mqTablet) {
          margin-right: 0;
          margin-left: 20px;
        }

        input {
          display: none;

          @media only screen and (max-width: $mqTablet) {
            position: absolute;
            display: block;
            top: 0;
            right: 0;
            width: 36px;
            height: 30px;
            margin: 0;
            opacity: 0;
            z-index: 2;
            cursor: pointer;
          }
        }

        span {
          @media only screen and (max-width: $mqTablet) {
            display: block;
            width: 34px;
            height: 4px;
            margin-bottom: 6px;
            position: relative;
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
            top: 46px;
            right: 0;
            width: 160px;
            padding: 20px;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
            margin: auto;
            list-style-type: none;
            -webkit-font-smoothing: antialiased;
            z-index: 2;
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
      .theme-button {
        button {
          width: 24px;
          height: 24px;
          padding: 0;
          border: none;
          color: inherit;
          background: none;
          cursor: pointer;

          img {
            width: 24px;
            height: 24px;
            margin-top: 2px;
          }
        }
      }
    }
  }
}
</style>
