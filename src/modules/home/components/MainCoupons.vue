<script setup lang="ts">
import Panel from "primevue/panel";

const coupons = [
  {
    id: "1",
    url: "https://instagram.com",
    image: "https://tm.ibxk.com.br/2021/08/17/17133222407223.jpg?ims=750x",
    name: "Aliexpress",
    number: 1,
  },
  {
    id: "2",
    url: "https://google.com.br",
    image:
      "https://logodownload.org/wp-content/uploads/2018/10/mercado-libre-logo-1.png",
    name: "Mercado Livre",
    number: 19,
  },
  {
    id: "3",
    url: "https://instagram.com",
    image:
      "https://storage.googleapis.com/taqe-storage/production/public/vacancies/covers/66f17a280dae1bae38b2e2fc_13-01-2025-17-27-18-180_T.png",
    name: "Shopee",
    number: 20,
  },
  {
    id: "4",
    url: "https://google.com.br",
    image:
      "https://blu365.com.br/blog/wp-content/uploads/sites/4/2020/10/logo-magalu-azul.png",
    name: "Magalu",
    number: 21,
  },
  {
    id: "5",
    url: "https://instagram.com",
    image:
      "https://iguatemi.com.br/praiadebelas/sites/praiadebelasshopping/files/2018-04/iPlace.png",
    name: "IPlace",
    number: 12,
  },
  {
    id: "6",
    url: "https://google.com.br",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Samsung_Galaxy_Store_logo.svg/1024px-Samsung_Galaxy_Store_logo.svg.png",
    name: "Samsung",
    number: 3,
  },
  {
    id: "7",
    url: "https://instagram.com",
    image:
      "https://somarcasguarulhos.com.br/wp-content/uploads/2022/06/Adidas.png",
    name: "Adidas outlet store",
    number: 24,
  },
  {
    id: "8",
    url: "https://google.com.br",
    image: "https://cdn.worldvectorlogo.com/logos/nike-factory-store.svg",
    name: "Nike Factory Store",
    number: 15,
  },
];

const couponsLabel = (value: number) => {
  return value > 1 ? `${value} Cupons` : `${value} Cupom`;
};
</script>
<template>
  <div class="grid grid-cols-2 gap-4">
    <a
      v-for="coupon in coupons"
      :href="coupon.url"
      :key="coupon.id"
      target="_blank"
    >
      <Panel
        class="w-full mb-4"
        pt:root:class="!flex !flex-col !p-4 !gap-4"
        pt:header:class="!justify-center !p-0"
        pt:content:class="!p-0"
      >
        <template #header>
          <img :src="coupon.image" class="max-h-[40px]" />
        </template>

        <p class="font-bold text-sm">{{ coupon.name }}</p>
        <p class="text-sm">{{ couponsLabel(coupon.number) }}</p>
      </Panel>
    </a>
  </div>
</template>
