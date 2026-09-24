import PrimeVue from "primevue/config";
import { definePreset } from "@primeuix/themes";
import Aura from "@primeuix/themes/aura";

export const primevueConfig = definePreset(Aura, {
  semantic: {
    primary: {
      50: "#fbf3f4",
      100: "#f4e6e8",
      200: "#e8d5d8",
      300: "#d4989b",
      400: "#b0606c",
      500: "#651f32",
      600: "#5a1c2d",
      700: "#481522",
      800: "#3a111c",
      900: "#2c0d15",
      950: "#1d080e",
    },
  },
});

export default PrimeVue;
