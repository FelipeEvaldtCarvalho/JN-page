<script setup>
import Menu from "./components/Menu.vue";
import TopBanner from "./components/TopBanner.vue";
import Text from "./components/Text.vue";

import { aboutTrg } from "./texts/texts.js";
</script>

<template>
  <Menu />
  <TopBanner />
  <Text v-bind="aboutTrg" />
</template>
<style>
* {
  font-family: "Montserrat", sans-serif;
}
</style>
