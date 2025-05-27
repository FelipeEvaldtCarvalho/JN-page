<script setup>
import Menu from "./components/Menu.vue";
import TopBanner from "./components/TopBanner.vue";
import Text from "./components/Text.vue";
import Video from "./components/Video.vue";
import About from "./components/About.vue";

import { aboutTrg, whyTrgWorks } from "./texts/texts.js";
</script>

<template>
  <Menu />
  <TopBanner />
  <Text v-bind="aboutTrg" />
  <Video />
  <About />
  <Text v-bind="whyTrgWorks" color />
</template>
<style>
* {
  font-family: "Montserrat", sans-serif;
}
</style>
