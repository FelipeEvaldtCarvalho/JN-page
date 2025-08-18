<script setup>
import Button from "./Button.vue";
import { topBanner } from "../texts/topBanner.js";

const { title, description, buttonText } = topBanner;
</script>
<template>
  <header
    class="w-full bg-[#FFE6DB] relative min-h-screen flex items-center justify-center"
  >
    <img src="/corner.svg" class="absolute z-[1] lg:h-[100%] top-0 left-0" alt="Elemento decorativo" />
    <div
      class="z-10 relative p-8 flex flex-col gap-6 items-center lg:flex-row max-w-[1400px] mx-auto mt-20"
    >
      <div class="flex flex-col gap-6 lg:gap-10">
        <h1 class="text-2xl lg:text-4xl font-bold">
          {{ title }}
        </h1>
        <p class="lg:text-xl leading-relaxed" v-html="description" />
        <p class="lg:text-xl font-bold text-[#445938]">
          {{ buttonText }}
        </p>
        <Button />
      </div>
      <img
        class="lg:h-[480px] w-[440px]"
        src="/banner-img.png"
        alt="Jaqueline da Nova - Terapeuta especializada em TRG (Terapia de Reprocessamento Generativo)"
        loading="eager"
      />
    </div>
  </header>
</template>
