<script setup>
import Logo from "./Logo.vue";
import { whatsappUrl } from "../texts/contact.js";

const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="bg-night pt-10 pb-28 sm:pb-10 text-[13px] text-[#d8c8cc]">
    <div class="wrap flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
      <div>
        <Logo class="mb-3 h-6 w-auto" primary="#f4e6e8" />
        <b class="text-white">Jaqueline da Nova · Terapeuta de Casal</b>
        <p class="text-[#bfaeb2]">ELO · Jornada Estruturada para Casais</p>
      </div>
      <div class="flex flex-col gap-2">
        <a
          class="flex items-center gap-2 hover:text-white"
          :href="whatsappUrl()"
          target="_blank"
          rel="noopener"
        >
          <i class="pi pi-whatsapp" /> (51) 98456-1140
        </a>
        <a
          class="flex items-center gap-2 hover:text-white"
          href="https://www.instagram.com/jaquelinedanova/"
          target="_blank"
          rel="noopener"
        >
          <i class="pi pi-instagram" /> @jaquelinedanova
        </a>
      </div>
    </div>
    <div class="wrap mt-8 border-t border-white/10 pt-6">
      <small class="block">
        Este site apresenta uma proposta de processo terapêutico e não
        constitui promessa de reconciliação ou de resultado específico.
      </small>
      <small class="mt-2 block text-[#bfaeb2]">
        © {{ currentYear }} Jaqueline da Nova. Todos os direitos reservados.
      </small>
    </div>
  </footer>
</template>
