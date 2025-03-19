import { createWebHashHistory, createRouter } from "vue-router";

import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Notes from "./components/Notes.vue";
import NoteDetail from "./components/NoteDetail.vue";
import Resources from "./components/Resources.vue";
import Newsletter from "./components/Newsletter.vue";
import Privacy from "./components/Privacy.vue";
import Cookies from "./components/Cookies.vue";
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
  { path: "/privacy-policy", component: Privacy },
  { path: "/cookies-policy", component: Cookies },
  { path: "/:pathMatch(.*)*", name: "not-found", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, savedPosition) {
    if (to.name === "note-detail") {
      return { top: 0 };
    } else if (to.hash) {
      return {
        el: to.hash,
        top: 20,
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
