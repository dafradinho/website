import { createMemoryHistory, createRouter } from "vue-router";

import Home from "./components/Home.vue";
import About from "./components/About.vue";
import Notes from "./components/Notes.vue";
import Projects from "./components/Projects.vue";
import Podcast from "./components/Podcast.vue";
import Newsletter from "./components/Newsletter.vue";

const routes = [
  { path: "/", component: Home, meta: { title: "Fradinho - Homepage" } },
  { path: "/about", component: About, meta: { title: "Fradinho - About" } },
  { path: "/notes", component: Notes, meta: { title: "Fradinho - Notes" } },
  {
    path: "/projects",
    component: Projects,
    meta: { title: "Fradinho - Projects" },
  },
  {
    path: "/podcast",
    component: Podcast,
    meta: { title: "Fradinho - Podcast" },
  },
  {
    path: "/newsletter",
    component: Newsletter,
    meta: { title: "Fradinho - Newsletter" },
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
