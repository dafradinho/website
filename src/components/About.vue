<script setup>
import { ref } from "vue";
import { sanitizeHtml } from "../utils/sanitizeHtml";
import about from "../json/about.json";

const data = ref({
  about,
});

const { aboutme, timeline, contact } = data.value.about;
</script>

<template>
  <div class="about wrapper" id="first-component">
    <section class="text content-box" id="intro">
      <div class="headline-highlighted">
        <h2 class="section-headline">
          {{ aboutme.copy.headline }}
        </h2>
      </div>
      <p class="text-highlighted" v-html="sanitizeHtml(aboutme.copy.text)"></p>
      <h2 class="section-headline">{{ aboutme.facts.headline }}</h2>
      <div class="text-facts">
        <div class="text-fact" v-for="fact in aboutme.facts.items">
          <p>{{ fact.text }}</p>
        </div>
      </div>
    </section>
    <section class="about-timeline" id="experience">
      <h2 class="section-headline">{{ timeline.headline }}</h2>
      <div class="about-timeline-items">
        <div class="about-timeline-item" v-for="timeline in timeline.items">
          <div class="about-timeline-year">
            <p>{{ timeline.year }}</p>
          </div>
          <div class="about-timeline-copy">
            <h3>{{ timeline.headline }}</h3>
            <p>{{ timeline.text }}</p>
            <p class="about-timeline-keywords">
              <span v-for="keyword in timeline.keywords">{{ keyword }}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="text content-box" id="contact">
      <h2 class="section-headline">{{ contact.copy.headline }}</h2>
      <p>{{ contact.copy.text }}</p>
      <a
        :href="contact.anchor.link"
        :target="contact.anchor.target"
        :aria-label="contact.anchor.text"
        class="button"
        v-if="contact.anchor.text"
        >{{ contact.anchor.text }}</a
      >
    </section>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/globals.scss";
.about-timeline {
  .about-timeline-items {
    display: flex;
    flex-direction: column-reverse;

    .about-timeline-item {
      position: relative;
      display: flex;
      align-items: flex-start;
      padding-bottom: 30px;

      &:before {
        content: "";
        position: absolute;
        top: 40px;
        left: 154px;
        width: 10px;
        height: 10px;
        border: 4px solid $blue;
        border-radius: 13px;
        transform: translate(0, -50%);
        z-index: 1;

        @media only screen and (max-width: $mqMobile) {
          left: 51px;
        }
      }

      &:after {
        content: "";
        position: absolute;
        top: 0;
        left: 161px;
        width: 4px;
        height: 100%;
        background-color: $blue;

        @media only screen and (max-width: $mqMobile) {
          left: 58px;
        }
      }

      &:first-of-type {
        padding-bottom: 0;

        &:after {
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
        }
      }
      &:last-of-type {
        &:after {
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
      }

      .about-timeline-year {
        width: 160px;
        padding-top: 22px;

        @media only screen and (max-width: $mqMobile) {
          padding-top: 31px;
          width: 40px;
        }

        p {
          font-weight: 700;
          font-size: 26px;
          line-height: 1.3;

          @media only screen and (max-width: $mqMobile) {
            font-size: 16px;
          }
        }
      }

      .about-timeline-copy {
        width: calc(100% - 130px);
        padding: 20px;
        border-radius: 10px;
        margin-left: 40px;

        @media only screen and (max-width: $mqMobile) {
          width: calc(100% - 40px);
        }

        .about-timeline-keywords {
          display: flex;
          flex-wrap: wrap;
          flex-direction: row;
          line-height: 1;

          span {
            padding: 8px 12px;
            border: 2px solid;
            border-radius: 24px;
            margin-right: 10px;
            margin-bottom: 10px;
            font-weight: 700;
            font-size: 14px;

            &:last-of-type {
              margin-right: 0;
            }
          }
        }
      }
    }
  }
}
</style>
