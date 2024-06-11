<script setup></script>

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
        <p>© Copyright 2024, Fradinho.</p>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import "../styles/globals.scss";

footer {
  padding: 30px 0 0;
  border-radius: 10px;
  margin-top: 60px;
  overflow: hidden;
  background-color: $black;

  .footer-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    .logo {
      a {
        font-weight: 900;
        font-size: 24px;
        color: white;
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
              filter: invert(100%) sepia(100%) saturate(100%) hue-rotate(90deg)
                brightness(100%) contrast(100%);
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
            color: white;
          }

          .footer-link {
            color: $grey-light;
          }
        }
      }
    }
  }

  .copyright {
    padding: 10px 0;
    margin-top: 30px;
    background-color: $grey;
    text-align: center;

    p {
      font-weight: 500;
      font-size: 14px;
      color: white;
    }
  }
}
</style>
