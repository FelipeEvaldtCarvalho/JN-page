import { createApp } from "vue";
import { Vue3Mq } from "vue3-mq";
import App from "./App.vue";
import router from "./router";
import PrimeVue, { primevueConfig } from "./plugins/primevue";
import "./style.css";
import "primeicons/primeicons.css";
import { debugFeatureFlags, featureFlags } from "./config/featureFlags.js";

// Debug das feature flags no console (baseado na variável de ambiente)
if (featureFlags.DEBUG_MODE) {
  debugFeatureFlags();
}

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
