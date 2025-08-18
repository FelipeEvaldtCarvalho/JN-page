<script setup>
import Drawer from "primevue/drawer";
import Logo from "./Logo.vue";
import { ref, computed } from "vue";
import { useMq } from "vue3-mq";
import { links } from "../texts/menu.js";

const isMobile = computed(() => {
  const mobileSizes = ["sm", "xs", "md"];
  return mobileSizes.includes(mq["current"]);
});
const mq = useMq();

const visible = ref(false);

const smoothScroll = (event, href) => {
  event.preventDefault();
  
  const targetId = href.substring(1);
  const targetElement = document.getElementById(targetId);
  
  if (targetElement) {
    const headerHeight = 80;
    const targetPosition = targetElement.offsetTop - headerHeight;
    
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  }
  
  if (visible.value) {
    visible.value = false;
  }
};
</script>
<template>
  <header
    class="flex w-full fixed top-0 left-0 z-30 text-[#32302F] bg-[#FFD4C1]/30 backdrop-blur-md border border-white/30 shadow-md shadow-white/20"
    role="banner"
  >
    <nav
      class="p-4 flex justify-between items-center w-full max-w-[1400px] mx-auto"
      role="navigation"
      aria-label="Menu principal"
    >
      <Logo class="h-12 w-fit" />
      <ul class="hidden lg:flex gap-6 items-center text-lg" role="menubar">
        <template v-for="({ label, href }, index) in links" :key="index">
          <li role="none">
            <a
              :href="href"
              @click="smoothScroll($event, href)"
              class="relative group inline-block !text-[#445937] text-base font-semibold"
              role="menuitem"
              :aria-label="`Navegar para seção ${label}`"
            >
              {{ label }}
              <span
                class="absolute left-0 -bottom-1 w-full h-0.5 bg-[#445937] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
                aria-hidden="true"
              ></span>
            </a>
          </li>
        </template>
      </ul>
      <a
        href="https://wa.me/5551984561140"
        target="_blank"
        rel="noopener"
        class="w-fit flex items-center justify-center gap-2 rounded-lg bg-[#445937] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#546e43]"
        aria-label="Agendar consulta via WhatsApp"
      >
        <span class="!text-white">Agendar</span>
      </a>
      <button
        class="pi pi-bars !text-3xl lg:!hidden cursor-pointer"
        @click="visible = true"
        aria-label="Abrir menu de navegação"
        aria-expanded="false"
        aria-controls="mobile-menu"
      ></button>
    </nav>
  </header>
  <Drawer
    v-if="isMobile"
    v-model:visible="visible"
    header=" "
    position="full"
    class="!bg-[#FFD4C1]"
    blockScroll
    id="mobile-menu"
    role="dialog"
    aria-modal="true"
    aria-label="Menu de navegação móvel"
  >
    <nav role="navigation" aria-label="Menu móvel">
      <ul
        class="flex flex-col gap-12 w-full h-full justify-center items-center text-3xl"
        role="menu"
      >
        <template v-for="({ label, href }, index) in links" :key="index">
          <li role="none">
            <a 
              :href="href" 
              @click="smoothScroll($event, href)"
              role="menuitem"
              :aria-label="`Navegar para seção ${label}`"
            >{{ label }}</a>
          </li>
        </template>
      </ul>
    </nav>
  </Drawer>
</template>
