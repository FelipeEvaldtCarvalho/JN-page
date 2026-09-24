<script setup>
import { whatsappUrl, reportConversion } from "../texts/contact.js";
</script>
<template>
  <a
    :href="whatsappUrl()"
    target="_blank"
    rel="noopener"
    @click="reportConversion"
    class="fixed bottom-3 right-3 z-50 hidden h-12 w-12 items-center justify-center rounded-full border border-white bg-wine shadow-lg transition-transform hover:scale-110 sm:flex md:h-16 md:w-16"
    aria-label="Falar pelo WhatsApp"
  >
    <i class="pi pi-whatsapp !text-2xl text-white md:!text-4xl"></i>
  </a>
</template>
