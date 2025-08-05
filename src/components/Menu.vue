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
  <div
    class="flex w-full fixed top-0 left-0 z-30 text-[#32302F] bg-[#FFD4C1]/30 backdrop-blur-md border border-white/30 shadow-md shadow-white/20"
  >
    <nav
      class="p-4 flex justify-between items-center w-full max-w-[1400px] mx-auto"
    >
      <img src="/logo.svg" alt="Logo Jaqueline da Nova" />
      <ul class="hidden lg:flex gap-6 items-center text-lg">
        <template v-for="({ label, href }, index) in links" :key="index">
          <li>
            <a
              :href="href"
              class="relative group inline-block !text-[#445937] text-base font-semibold"
            >
              {{ label }}
              <span
                class="absolute left-0 -bottom-1 w-full h-0.5 bg-[#445937] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              ></span>
            </a>
          </li>
        </template>
      </ul>
      <a
        href="https://wa.me/5551984561140"
        target="_blank"
        class="w-fit flex items-center justify-center gap-2 rounded-lg bg-[#445937] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#546e43]"
      >
        <span class="!text-white">Agendar</span>
      </a>
      <i class="pi pi-bars !text-3xl lg:!hidden" @click="visible = true"></i>
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
