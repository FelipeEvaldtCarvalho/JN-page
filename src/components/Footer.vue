<script setup>
import { computed } from "vue";
import { links } from "../texts/menu.js";
import Logo from "./Logo.vue";
import { isFeatureEnabled } from "../config/featureFlags.js";

// Feature flags
const isBlogEnabled = isFeatureEnabled('BLOG_ENABLED');

const currentYear = computed(() => {
  return new Date().getFullYear();
});

const footerText = computed(() => {
  return `© ${currentYear.value} Jaqueline da Nova Terapeuta Emocional. Todos os direitos reservados.`;
});
</script>

<template>
  <section class="text-center px-8 py-15 bg-[#1d2518] text-[#32302F]">
    <div
      class="w-full max-w-[1400px] mx-auto flex flex-col items-center gap-8 lg:grid lg:grid-cols-4"
    >
      <div class="flex flex-col items-center lg:items-start lg:col-span-1">
        <Logo class="h-12 w-fit" color="#FFE6DB" />
        <p class="!text-[#FFE6DB] text-2xl font-light">Jaqueline</p>
        <p class="!text-[#FFE6DB] text-2xl font-light">da Nova</p>
        <p class="!text-[#FFE6DB] text-xs font-light">Terapeuta Emocional</p>
      </div>
      <ul
        class="hidden lg:flex flex-col lg:flex-row gap-6 items-center text-base lg:h-full lg:items-start lg:justify-end lg:col-span-3"
      >
        <li>
          <router-link
            to="/"
            class="relative group inline-block !text-[#FFE6DB]"
          >
            Início
            <span
              class="absolute left-0 -bottom-1 w-full h-0.5 bg-[#FFE6DB] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
            ></span>
          </router-link>
        </li>

        <template v-for="({ label, href }, index) in links" :key="index">
          <li>
            <a :href="href" class="relative group inline-block !text-[#FFE6DB]">
              {{ label }}
              <span
                class="absolute left-0 -bottom-1 w-full h-0.5 bg-[#FFE6DB] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
              ></span>
            </a>
          </li>
        </template>
        <li v-if="isBlogEnabled">
          <router-link
            to="/blog"
            class="relative group inline-block !text-[#FFE6DB]"
          >
            Blog
            <span
              class="absolute left-0 -bottom-1 w-full h-0.5 bg-[#FFE6DB] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"
            ></span>
          </router-link>
        </li>
      </ul>
      <div
        class="flex flex-col items-center gap-4 lg:col-span-4 lg:w-fit lg:items-start lg:!text-xl"
      >
        <a
          class="flex gap-1 items-center cursor-pointer !text-[#FFE6DB]"
          href="https://wa.me/5551984561140"
          target="_blank"
        >
          <i class="pi pi-whatsapp !text-[#FFE6DB]" />
          (51) 984.561.140
        </a>
        <a
          class="flex gap-1 items-center cursor-pointer !text-[#FFE6DB]"
          target="_blank"
          href="https://www.instagram.com/jaquelinedanova/"
        >
          <i class="pi pi-instagram !text-[#FFE6DB]" />
          @jaquelinedanova
        </a>
      </div>
      <p class="lg:col-span-4 !text-[#FFE6DB]">
        {{ footerText }}
      </p>
    </div>
  </section>
</template>
