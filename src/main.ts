import { createApp } from "vue";
import { Vue3Mq } from "vue3-mq";
import App from "./App.vue";
import PrimeVue, { primevueConfig } from "./plugins/primevue";
import "./style.css";
import "primeicons/primeicons.css";

const app = createApp(App);
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
