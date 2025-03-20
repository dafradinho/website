import { createWebHashHistory, createRouter } from "vue-router";

import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Notes from "./components/Notes.vue";
import NoteDetail from "./components/NoteDetail.vue";
import Resources from "./components/Resources.vue";
import Newsletter from "./components/Newsletter.vue";
import PrivacyPolice from "./components/Privacy.vue";
import CookiesPolice from "./components/Cookies.vue";
import NotFound from "./components/NotFound.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/notes", component: Notes },
  {
    path: "/notes/:id",
    name: "note-detail",
    component: NoteDetail,
    props: true,
  },
  { path: "/resources", component: Resources },
  { path: "/newsletter", component: Newsletter },
  { path: "/privacy-policy", component: PrivacyPolice },
  { path: "/cookies-policy", component: CookiesPolice },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, savedPosition) {
    if (to.name === "note-detail") {
      return { top: 0 };
    } else if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            top: 20, // Add some offset if needed
            behavior: "smooth", // Optional: Smooth scrolling
          });
        }, 300); // Delay to ensure the element is rendered
      });
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
