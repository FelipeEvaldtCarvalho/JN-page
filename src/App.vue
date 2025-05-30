<script setup>
import Menu from "./components/Menu.vue";
import TopBanner from "./components/TopBanner.vue";
import Text from "./components/Text.vue";
import Video from "./components/Video.vue";
import About from "./components/About.vue";
import TrgBenefits from "./components/TrgBenefits.vue";

import { aboutTrg, whyTrgWorks, sessionInfo } from "./texts/texts.js";
</script>

<template>
  <Menu />
  <TopBanner />
  <Text v-bind="aboutTrg" />
  <Video />
  <About />
  <Text v-bind="whyTrgWorks" color />
  <TrgBenefits />
  <Text v-bind="sessionInfo" />
</template>
<style>
* {
  font-family: "Montserrat", sans-serif;
}
</style>
