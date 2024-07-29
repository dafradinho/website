import { createApp } from "vue";
import "./styles/reset.css";
import "./styles/globals.css";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).mount("#app");
