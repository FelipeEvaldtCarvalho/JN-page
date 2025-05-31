<script setup>
import Card from "primevue/card";
import Carousel from "primevue/carousel";
import { ref, computed } from "vue";
import { testimonials } from "../texts/cards.js";
import { useMq } from "vue3-mq";

const mq = useMq();

const isMobile = computed(() => {
  const mobileSizes = ["sm", "xs", "md"];
  return mobileSizes.includes(mq["current"]);
});

const numVisible = computed(() => {
  return isMobile.value ? 1 : 2;
});

const use = computed(() => {
  return isMobile.value ? 1 : 2;
});
</script>
<template>
  <div
    class="flex flex-col gap-4 w-full max-w-[1400px] mx-auto mt-6 text-center"
  >
    <p class="text-2xl lg:text-4xl">Depoimentos</p>
    <p class="lg:text-xl text-gray-700 leading-relaxed">
      O que os pacientes estão dizendo sobre mim
    </p>
  </div>
  <Carousel
    :value="testimonials"
    class="w-full max-w-[1400px] mx-auto my-6"
    circular
    :numVisible="numVisible"
    :key="numVisible"
    :showNavigators="!isMobile"
  >
    <template #item="{ data }">
      <div class="mx-4 h-full">
        <Card
          class="!bg-[#FFD4C1] rounded-2xl relative overflow-hidden w-full p-1 sm:p-4 h-full"
        >
          <template #header>
            <p
              class="absolute h-fit -top-10 left-0 text-[10rem] p-1 opacity-20"
            >
              ❝
            </p>
            <p
              class="absolute h-fit -bottom-25 right-0 text-[10rem] p-1 opacity-20"
            >
              ❞
            </p>
          </template>
          <template #title>
            <h3 class="text-lg font-semibold text-center z-10">
              {{ data.title }}
            </h3>
          </template>
          <template #content>
            <p class="text-gray-600 text-center">
              {{ data.description }}
            </p>
          </template>
        </Card>
      </div>
    </template>
  </Carousel>
</template>
