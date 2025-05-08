<script setup lang="ts">
import Carousel from "primevue/carousel";
import { banners } from "../store/banners";
</script>
<template>
  <div class="flex flex-col gap-8 my-5">
    <div class="flex flex-col gap-2 text-center w-[375px] lg:w-auto m-auto">
      <h1 class="font-bold text-3xl lg:text-4xl">
        Cupons de desconto em + de 1.224 lojas!
      </h1>
      <p class="hidden lg:block text-2xl mt-2 mb-5 text-gray-600">
        Economize na sua compra usando os melhores Cupons Gratuitos!
      </p>
    </div>
    <Carousel
      :value="banners"
      circular
      :autoplayInterval="8000"
      :showNavigators="false"
    >
      <template #item="slotProps">
        <a :href="slotProps.data.url" target="_blank" class="h-full">
          <img
            class="rounded w-full h-[170px] lg:h-[500px] object-cover"
            :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`"
          />
        </a>
      </template>
    </Carousel>
  </div>
</template>
