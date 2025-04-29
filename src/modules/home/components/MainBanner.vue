<script setup lang="ts">
import Carousel from "primevue/carousel";
import { ref } from "vue";

const banners = ref([
  {
    id: "1",
    url: "https://instagram.com",
    image: "bamboo-watch.jpg",
  },
  {
    id: "2",
    url: "https://google.com.br",
    image: "black-watch.jpg",
  },
  {
    id: "1",
    url: "https://instagram.com",
    image: "bracelet.jpg",
  },
]);
</script>
<template>
  <div class="flex flex-col gap-8 mb-5">
    <h1 class="font-medium text-3xl text-center">
      Cupons de desconto em + de 1.224 lojas!
    </h1>
    <Carousel
      :value="banners"
      circular
      :autoplayInterval="8000"
      :showNavigators="false"
    >
      <template #item="slotProps">
        <a :href="slotProps.data.url" target="_blank">
          <img
            class="rounded w-full"
            :src="`https://primefaces.org/cdn/primevue/images/product/${slotProps.data.image}`"
          />
        </a>
      </template>
    </Carousel>
  </div>
</template>
