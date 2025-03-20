<script setup>
import { ref, onMounted } from "vue";
import { loadNotes } from "../utils/loadNotes";
import navigation from "../json/navigation.json";

const data = ref({
  navigation,
  notes: [],
});

const { logo, navigationFooter, socials, others } = data.value.navigation;

const lastThreeNotes = ref([]);

onMounted(async () => {
  data.value.notes = await loadNotes();
  if (Array.isArray(data.value.notes)) {
    lastThreeNotes.value = data.value.notes.slice(-3).reverse();
  }

  const currentYear = new Date().getFullYear();
  copyrightYear.value.textContent = currentYear;
});

const copyrightYear = ref();
</script>

<template>
  <footer>
    <div class="wrapper-hf">
      <div class="footer-wrapper">
        <div class="footer-top">
          <p class="logo">
            <RouterLink :to="logo.link">{{ logo.title }}</RouterLink>
          </p>
          <div class="socials">
            <ul>
              <li v-for="social in socials" :key="social.link">
                <a :href="social.link" :aria-label="social.alt" target="_blank">
                  <img :src="social.source" :alt="social.alt" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <nav>
            <ul v-for="item in navigationFooter" :key="item.link">
              <li>
                <RouterLink :to="item.link" class="footer-link-title">{{
                  item.title
                }}</RouterLink>
              </li>
              <li v-for="section in item.sections" :key="section.link">
                <RouterLink :to="section.link" class="footer-link">{{
                  section.title
                }}</RouterLink>
              </li>
            </ul>
            <ul>
              <li>
                <RouterLink :to="'/notes'" class="footer-link-title">{{
                  others.notes.label
                }}</RouterLink>
              </li>
              <li v-for="note in lastThreeNotes" :key="note.filename">
                <RouterLink
                  :to="{ name: 'note-detail', params: { id: note.filename } }"
                  class="footer-link"
                  >{{ note.info.headline.substring(0, 12) }}...</RouterLink
                >
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
    <div class="copyright">
      <div class="wrapper">
        <ul>
          <li>
            <RouterLink
              :to="others.privacy.link"
              :aria-label="others.privacy.label"
              target="_self"
              >{{ others.privacy.label }}</RouterLink
            >
          </li>
          <li>
            <RouterLink
              :to="others.cookies.link"
              :aria-label="others.cookies.label"
              target="_self"
              >{{ others.cookies.label }}</RouterLink
            >
          </li>
          <li>
            <p>
              {{ others.copyright.label }} <span ref="copyrightYear"></span>
              {{ others.copyright.name }}
            </p>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../styles/variables.scss";

footer {
  padding: 30px 0 0;
  border-radius: 10px;
  margin-top: 40px;
  overflow: hidden;

  .logo {
    margin-bottom: 0;
    line-height: 1;
  }

  .footer-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    @media only screen and (max-width: $mqMobile) {
      flex-direction: column;
    }
  }

  .footer-top {
    @media only screen and (max-width: $mqMobile) {
      margin-bottom: 40px;
    }

    .logo {
      margin-bottom: 20px;
    }
  }

  .footer-bottom {
    flex-grow: 1;
    padding-left: 100px;

    @media only screen and (max-width: $mqMobile) {
      padding-left: 0;
    }

    nav {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      @media only screen and (max-width: $mqMobile) {
        flex-direction: column;
      }

      ul {
        margin-right: 30px;

        @media only screen and (max-width: $mqTablet) {
          margin-bottom: 40px;
          margin-right: 0;
        }

        &:nth-of-type(1) {
          order: 1;
        }
        &:nth-of-type(2) {
          order: 3;
        }
        &:nth-of-type(3) {
          order: 4;

          @media only screen and (max-width: $mqMobile) {
            margin-bottom: 0;
          }
        }
        &:nth-of-type(4) {
          order: 2;
        }

        &:last-of-type {
          margin-right: 0;
        }

        li {
          margin-bottom: 20px;

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

    .wrapper {
      ul {
        display: flex;
        justify-content: center;
        align-items: center;

        @media only screen and (max-width: $mqMobile) {
          flex-direction: column;
        }

        li {
          &:not(:last-child) {
            @media only screen and (max-width: $mqMobile) {
              margin-bottom: 10px;
            }
          }
          &:not(:last-child)::after {
            @media only screen and (min-width: $mqMobile) {
              content: "|";
              margin: 0 10px;
            }
          }
        }

        a {
          &:hover {
            text-decoration: underline;
          }
        }

        a,
        p {
          font-weight: 500;
          font-size: 16px;
        }
      }
    }
  }
}
</style>
