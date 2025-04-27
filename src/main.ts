import { createApp } from "vue";
import App from "./App.vue";
import router from "./router.ts";
import PrimeVue, { primevueConfig } from "./plugins/primevue";
import { Vue3Mq } from "vue3-mq";
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
app.use(Vue3Mq, {
  global: true,
  preset: "tailwind",
});
app.mount("#app");
