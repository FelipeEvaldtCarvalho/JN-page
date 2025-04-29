<script setup lang="ts">
import Panel from "primevue/panel";
import { mainCoupons } from "../store/mainCoupons";

const couponsLabel = (value: number) => {
  return value > 1 ? `${value} Cupons` : `${value} Cupom`;
};
</script>
<template>
  <div class="grid grid-cols-2 gap-4">
    <a
      v-for="coupon in mainCoupons"
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
