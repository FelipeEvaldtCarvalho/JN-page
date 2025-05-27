<script setup>
import Drawer from "primevue/drawer";
import { ref, computed } from "vue";
import { useMq } from "vue3-mq";
import { links } from "../texts/menu.js";

const isMobile = computed(() => {
  const mobileSizes = ["sm", "xs", "md"];
  return mobileSizes.includes(mq["current"]);
});
const mq = useMq();

const visible = ref(false);
</script>
<template>
  <div class="flex w-full fixed top-0 left-0 bg-[#FFD4C1] z-30">
    <nav
      class="p-4 flex justify-between items-center w-full max-w-[1400px] mx-auto"
    >
      <img src="/logo.svg" alt="Logo Jaqueline da Nova" />
      <i class="pi pi-bars !text-3xl lg:!hidden" @click="visible = true"></i>
      <ul class="hidden lg:flex gap-6 items-center text-lg">
        <template v-for="({ label, href }, index) in links" :key="index">
          <li>
            <a :href="href">{{ label }}</a>
          </li>
        </template>
      </ul>
    </nav>
  </div>
  <Drawer
    v-if="isMobile"
    v-model:visible="visible"
    header=" "
    position="full"
    class="!bg-[#FFD4C1]"
  >
    <ul
      class="flex flex-col gap-6 w-full h-full justify-center items-center text-2xl"
    >
      <template v-for="({ label, href }, index) in links" :key="index">
        <li>
          <a :href="href">{{ label }}</a>
        </li>
      </template>
    </ul>
  </Drawer>
</template>
