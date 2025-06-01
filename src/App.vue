<script setup>
import Menu from "./components/Menu.vue";
import TopBanner from "./components/TopBanner.vue";
import Text from "./components/Text.vue";
import Video from "./components/Video.vue";
import About from "./components/About.vue";
import TrgBenefits from "./components/TrgBenefits.vue";
import Testimonials from "./components/Testimonials.vue";
import Footer from "./components/Footer.vue";

import { aboutTrg, whyTrgWorks, sessionInfo, final } from "./texts/texts.js";
</script>

<template>
  <Menu />
  <TopBanner />
  <Text v-bind="aboutTrg" id="trg" />
  <Video />
  <About />
  <Text v-bind="whyTrgWorks" color id="porque-funciona" />
  <TrgBenefits />
  <Text v-bind="sessionInfo" />
  <Testimonials />
  <Text v-bind="final" />
  <Footer />
</template>
<style>
* {
  font-family: "Montserrat", sans-serif;
  color: #333;
}
</style>
