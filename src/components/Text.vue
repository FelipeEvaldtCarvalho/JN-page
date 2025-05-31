<script setup>
import Button from "./Button.vue";
import { computed } from "vue";
const props = defineProps({
  title: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  color: {
    type: Boolean,
    default: false,
  },
  btn: {
    type: Boolean,
    default: false,
  },
});

const textClass = computed(() => {
  return props.title
    ? "lg:text-xl text-gray-700 leading-relaxed"
    : "text-xl lg:text-3xl leading-relaxed";
});
</script>
<template>
  <section class="text-center px-8 py-15" :class="{ 'bg-[#FFD4C1]': color }">
    <div class="w-full max-w-[1400px] mx-auto flex flex-col items-center gap-8">
      <div v-if="title" class="flex items-center justify-center gap-4 mb-4">
        <div class="w-24 h-px bg-gray-400" />
        <h2 class="text-2xl lg:text-4xl">
          {{ title }}
        </h2>
        <div class="w-24 h-px bg-gray-400" />
      </div>
      <p :class="textClass" v-html="description" />
      <Button v-if="btn" />
    </div>
  </section>
</template>
