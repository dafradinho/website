<script setup>
import { ref, onMounted } from "vue";

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
        <h1 class="logo"><a href="#">Fradinho</a></h1>
        <div class="socials">
          <ul>
            <li>
              <a href="#"
                ><img src="../assets/github.svg" alt="GitHub Logo"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="../assets/linkedin.svg" alt="LinkedIn Logo"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="../assets/youtube.svg" alt="YouTube Logo"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="../assets/instagram.svg" alt="Instagram Logo"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="../assets/twitterx.svg" alt="Twitter Logo"
              /></a>
            </li>
            <li>
              <a href="#"
                ><img src="../assets/twitch.svg" alt="Twitch Logo"
              /></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <nav>
          <ul>
            <li><p class="footer-title">About</p></li>
            <li><a href="#" class="footer-link">Intro</a></li>
            <li><a href="#" class="footer-link">Experience</a></li>
            <li><a href="#" class="footer-link">Contact</a></li>
          </ul>
          <ul>
            <li><p class="footer-title">Notes</p></li>
          </ul>
          <ul>
            <li><p class="footer-title">Projects</p></li>
          </ul>
          <ul>
            <li><p class="footer-title">Podcast</p></li>
            <li><a href="#" class="footer-link">Concept</a></li>
            <li><a href="#" class="footer-link">When</a></li>
          </ul>
          <ul>
            <li><p class="footer-title">Newsletter</p></li>
            <li><a href="#" class="footer-link">Why</a></li>
            <li><a href="#" class="footer-link">Subscribe</a></li>
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

      ul {
        li {
          margin-bottom: 16px;

          &:last-of-type {
            margin-bottom: 0;
          }

          .footer-title {
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
