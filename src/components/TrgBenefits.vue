<script setup>
import Card from "primevue/card";
import { benefits } from "../texts/cards.js";
</script>
<template>
  <section class="w-full flex p-8 my-8">
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1400px] mx-auto gridzada"
    >
      <Card
        v-for="(item, index) in benefits"
        :key="index"
        class="p-4 shadow-md border-[#FFD4C1] border-3 rounded-2xl relative overflow-hidden"
      >
        <template #header>
          <div
            class="flex justify-center mb-2 absolute -top-2 -right-2 p-5 aspect-square rounded-bl-full bg-[#FFD4C1]"
          >
            <span class="relative -top-2 -right-2 material-icons !text-4xl">{{
              item.icon
            }}</span>
          </div>
        </template>
        <template #title>
          <h3 class="text-lg font-semibold text-center !mt-2">
            {{ item.title }}
          </h3>
        </template>
        <template #content>
          <p class="text-sm text-gray-600 text-center">
            {{ item.description }}
          </p>
        </template>
      </Card>
    </div>
  </section>
</template>
<style>
@media (min-width: 640px) and (max-width: 1023.98px) {
  .gridzada > :last-child {
    grid-column: span 2 / span 2;
    margin: 0 25%;
  }
}
</style>
