<script setup>
import Button from "./Button.vue";
import { topBanner } from "../texts/topBanner.js";

const { title, description, buttonText } = topBanner;
</script>
<template>
  <header class="mt-[80px] w-full bg-[#FFE6DB] relative lg:flex lg:min-h-auto">
    <img src="/corner.svg" class="absolute z-[1] lg:h-[544px]" />
    <div
      class="z-10 relative p-8 flex flex-col gap-6 items-center lg:flex-row max-w-[1400px] mx-auto"
    >
      <div class="flex flex-col gap-6 lg:gap-10">
        <p class="text-2xl lg:text-4xl">
          {{ title }}
        </p>
        <p class="lg:text-xl">
          {{ description }}
        </p>
        <p class="lg:text-xl font-bold text-[#445938]">
          {{ buttonText }}
        </p>
        <Button />
      </div>
      <img
        class="lg:h-[480px] w-[440px]"
        src="/banner-img.png"
        alt="Jaqueline da Nova"
      />
    </div>
  </header>
</template>
