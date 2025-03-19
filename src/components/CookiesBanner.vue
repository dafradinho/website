<script setup>
import { ref } from "vue";

const showBanner = ref(true);
const showConsentMenu = ref(false);
const necessaryCookies = ref(true);
const functionalityCookies = ref(false);
const trackingPerformance = ref(false);

const acceptCookies = () => {
  setCookie("cookieConsent", "acceptedAll", 365);
  showBanner.value = false;
  document.body.classList.remove("no-scroll");
};

const toggleConsentMenu = () => {
  showConsentMenu.value = !showConsentMenu.value;
};

const savePreferences = () => {
  setCookie("necessaryCookies", necessaryCookies.value, 365);
  setCookie("functionalityCookies", functionalityCookies.value, 365);
  setCookie("trackingPerformance", trackingPerformance.value, 365);
  setCookie("cookieConsent", "preferencesSaved", 365);
  showConsentMenu.value = false;
  showBanner.value = false;
  document.body.classList.remove("no-scroll");
};

const goBackToBanner = () => {
  showConsentMenu.value = false;
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

if (
  getCookie("cookieConsent") === "acceptedAll" ||
  getCookie("cookieConsent") === "preferencesSaved"
) {
  showBanner.value = false;
} else {
  document.body.classList.add("no-scroll");
}
</script>

<template>
  <div class="cookie-layer" v-if="showBanner"></div>
  <div class="cookie-banner" v-if="showBanner">
    <template v-if="!showConsentMenu">
      <div class="cookie-text">
        <p>
          This website uses cookies and other tracking technologies to improve
          your browsing experience for the following purposes: to enable basic
          functionality of the website, to provide a better experience on the
          website.
        </p>
      </div>
      <div class="cookie-buttons">
        <button class="button button-secondary" @click="toggleConsentMenu">
          Preferences
        </button>
        <button class="button" @click="acceptCookies">Accept All</button>
      </div>
    </template>
    <template v-else>
      <div class="cookie-options">
        <h2>Manage Cookies</h2>
        <div class="cookie-option">
          <label for="necessary-cookies">
            <input
              id="necessary-cookies"
              type="checkbox"
              checked
              disabled
              aria-label="Necessary Cookies"
            />
            Necessary Cookies <span>(used to remember your theme choice)</span>
          </label>
        </div>
        <div class="cookie-option">
          <label for="functionality-cookies">
            <input
              id="functionality-cookies"
              type="checkbox"
              v-model="functionalityCookies"
              aria-label="Functionality Cookies"
              title="Enable or disable functionality cookies"
            />
            Functionality Cookies
            <span>(as of now, none exist)</span>
          </label>
        </div>
        <div class="cookie-option">
          <label for="tracking-performance">
            <input
              id="tracking-performance"
              type="checkbox"
              v-model="trackingPerformance"
              aria-label="Tracking and Performance Cookies"
              title="Enable or disable tracking and performance cookies"
            />
            Tracking and Performance Cookies
            <span>(as of now, none exist)</span>
          </label>
        </div>
      </div>
      <div class="cookie-buttons">
        <button class="button button-secondary" @click="goBackToBanner">
          Back
        </button>
        <button class="button" @click="savePreferences">
          Save Preferences
        </button>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/globals.scss";

.cookie-layer {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba($grey-dark, 0.8);
  z-index: 2;
}

.cookie-banner {
  position: fixed;
  display: flex;
  align-items: center;
  bottom: 10px;
  left: 50%;
  width: 90%;
  max-width: 1160px;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  color: $white;
  background-color: $grey-dark;
  transform: translate(-50%, 0);
  z-index: 2;

  @media only screen and (max-width: $mqMobile) {
    flex-direction: column;
  }

  .cookie-text,
  .cookie-options {
    text-align: left;

    @media only screen and (min-width: $mqMobile) {
      width: calc(100% - 210px);
    }
  }

  .cookie-options {
    .cookie-option {
      margin-bottom: 10px;

      label {
        font-size: 18px;
        line-height: 1.2;

        span {
          font-size: 16px;
        }
      }
    }
  }

  .cookie-buttons {
    @media only screen and (min-width: $mqMobile) {
      width: 210px;
      padding-left: 20px;
    }
    @media only screen and (max-width: $mqMobile) {
      padding: 20px 0 0;
    }

    .button {
      display: block;
      width: 100%;
      margin-bottom: 16px;
      cursor: pointer;

      &:last-child {
        margin-bottom: 0;
      }
    }
  }
}
</style>
