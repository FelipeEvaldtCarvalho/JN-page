<script setup>
import { faq } from "../texts/elo.js";
</script>

<template>
  <section class="py-16 md:py-24">
    <div v-reveal class="wrap">
      <div class="text-center">
        <div class="eyebrow">Antes de começar</div>
        <h2 class="section-title">O que vocês precisam saber</h2>
      </div>
      <div class="mx-auto max-w-[850px]">
        <details
          v-for="{ question, answer } in faq"
          :key="question"
          class="group my-2.5 rounded-2xl border border-wine/15 bg-white p-5 transition-colors open:border-wine/30"
        >
          <summary
            class="flex cursor-pointer list-none items-center justify-between gap-4 rounded-md font-bold text-deep [&::-webkit-details-marker]:hidden"
          >
            {{ question }}
            <i
              class="pi pi-plus text-sm text-wine transition-transform duration-200 group-open:rotate-45"
              aria-hidden="true"
            />
          </summary>
          <p class="mt-3 text-muted">{{ answer }}</p>
        </details>
      </div>
    </div>
  </section>
</template>
