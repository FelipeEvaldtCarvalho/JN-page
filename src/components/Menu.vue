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
  <div class="flex w-full fixed top-0 left-0 bg-[#FFD4C1] z-30 text-[#32302F]">
    <nav
      class="p-4 flex justify-between items-center w-full max-w-[1400px] mx-auto"
    >
      <img src="/logo.svg" alt="Logo Jaqueline da Nova" />
      <i class="pi pi-bars !text-3xl lg:!hidden" @click="visible = true"></i>
      <ul class="hidden lg:flex gap-6 items-center text-lg">
        <template v-for="({ label, href }, index) in links" :key="index">
          <li>
            <a :href="href" class="relative group inline-block">
              {{ label }}
              <span
                class="absolute left-0 bottom-0 w-full h-0.5 bg-[#32302F] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              ></span>
            </a>
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
      class="flex flex-col gap-12 w-full h-full justify-center items-center text-3xl"
    >
      <template v-for="({ label, href }, index) in links" :key="index">
        <li>
          <a :href="href" @click="visible = false">{{ label }}</a>
        </li>
      </template>
    </ul>
  </Drawer>
</template>
