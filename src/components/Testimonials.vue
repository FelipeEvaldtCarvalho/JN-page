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
  <section class="w-full" id="depoimentos">
    <div
      class="flex flex-col gap-4 w-full max-w-[1400px] mx-auto mt-6 text-center"
    >
      <h2 class="text-2xl lg:text-4xl font-bold">Depoimentos</h2>
      <p class="lg:text-xl text-gray-700 leading-relaxed">
        O que os pacientes estão dizendo sobre meu trabalho com TRG
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
        <div class="mx-4 h-full" itemscope itemtype="https://schema.org/Review">
          <Card
            class="!bg-[#FFD4C1] rounded-2xl relative overflow-hidden w-full p-1 sm:p-4 h-full"
          >
            <template #header>
              <p
                class="absolute h-fit -top-10 left-0 text-[10rem] p-1 opacity-20"
                aria-hidden="true"
              >
                ❝
              </p>
              <p
                class="absolute h-fit -bottom-25 right-0 text-[10rem] p-1 opacity-20"
                aria-hidden="true"
              >
                ❞
              </p>
            </template>
            <template #title>
              <h3 class="text-lg font-semibold text-center z-10" itemprop="author">
                {{ data.title }}
              </h3>
            </template>
            <template #content>
              <p class="text-gray-600 text-center" itemprop="reviewBody">
                {{ data.description }}
              </p>
              <meta itemprop="reviewRating" content="5" />
            </template>
          </Card>
        </div>
      </template>
    </Carousel>
  </section>
</template>
