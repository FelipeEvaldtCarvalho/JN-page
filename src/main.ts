import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.ts";
import PrimeVue, { primevueConfig } from "./plugins/primevue";
import "./style.css";
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: primevueConfig,
    options: {
      darkModeSelector: false || "none",
    },
  },
});
app.mount("#app");
