<script setup>
import { computed } from "vue";

const currentYear = computed(() => {
  return new Date().getFullYear();
});

const footerText = computed(() => {
  return `© ${currentYear.value} Jaqueline da Nova Terapeuta Emocional. Todos os direitos reservados.`;
});
</script>

<template>
  <section class="text-center px-8 py-15 bg-[#FFD4C1] text-[#32302F]">
    <div class="w-full max-w-[1400px] mx-auto flex flex-col items-center gap-8">
      <img src="/footer-logo.png" alt="" />

      <div class="flex flex-col items-center gap-4">
        <a
          class="flex gap-1 items-center cursor-pointer"
          href="https://wa.me/5551984561140"
          target="_blank"
        >
          <i class="pi pi-whatsapp" />
          (51) 984.561.140
        </a>
        <a
          class="flex gap-1 items-center"
          target="_blank"
          href="https://www.instagram.com/jaquelinedanova/"
        >
          <i class="pi pi-instagram" />
          @jaquelinedanova
        </a>
      </div>
      <p>
        {{ footerText }}
      </p>
    </div>
  </section>
</template>
