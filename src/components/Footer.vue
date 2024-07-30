<script setup>
import { ref, onMounted } from "vue";
import json from "../json/navigation.json";

const data = ref({
  json,
});

const copyrightYear = ref();

onMounted(() => {
  const currentYear = new Date().getFullYear();
  copyrightYear.value.textContent = currentYear;
});
</script>

<template>
  <footer>
    <div class="wrapper">
      <div class="footer-top">
        <p class="logo">
          <RouterLink :to="data.json.logo.link">{{
            data.json.logo.title
          }}</RouterLink>
        </p>
        <div class="socials">
          <ul>
            <li v-for="social in data.json.socials">
              <a :href="social.link"
                ><img :src="social.source" :alt="social.alt"
              /></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <nav>
          <ul v-for="item in data.json.navigation">
            <li>
              <RouterLink :to="item.link" class="footer-link-title">{{
                item.title
              }}</RouterLink>
            </li>
            <li v-for="section in item.sections">
              <RouterLink :to="section.link" class="footer-link">{{
                section.title
              }}</RouterLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="copyright">
      <div class="wrapper">
        <p>© Copyright <span ref="copyrightYear"></span>, Fradinho.</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../styles/variables.scss";

footer {
  padding: 30px 0 0;
  border-radius: 10px;
  margin-top: 30px;
  overflow: hidden;

  .footer-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    .logo {
      @media only screen and (max-width: $mqMobile) {
        display: none;
      }
    }

    .socials {
      ul {
        display: flex;

        li {
          margin-right: 10px;

          &:last-of-type {
            margin-right: 0;
          }

          a {
            display: block;

            img {
              width: 30px;
            }
          }
        }
      }
    }
  }

  .footer-bottom {
    nav {
      display: flex;
      justify-content: space-between;

      @media only screen and (max-width: $mqMobile) {
        flex-direction: column;
      }

      ul {
        @media only screen and (max-width: $mqMobile) {
          margin-bottom: 50px;
        }

        &:last-of-type {
          @media only screen and (max-width: $mqMobile) {
            margin-bottom: 0;
          }
        }

        li {
          margin-bottom: 16px;

          &:last-of-type {
            margin-bottom: 0;
          }

          .footer-link-title {
            padding-bottom: 2px;
            border-bottom: 2px solid transparent;
            margin-bottom: 16px;
            font-weight: 500;
            font-size: 18px;
          }

          .footer-link {
            padding-bottom: 1px;
            border-bottom: 1px solid transparent;
          }
        }
      }
    }
  }

  .copyright {
    padding: 10px 0;
    margin-top: 30px;
    text-align: center;

    p {
      font-weight: 500;
      font-size: 14px;
    }
  }
}
</style>
