<script setup>
import { outcomes } from "../texts/elo.js";
</script>

<template>
  <section class="py-16 md:py-24">
    <div v-reveal class="wrap">
      <div class="eyebrow">O que vocês podem construir</div>
      <h2 class="section-title">O objetivo não é voltar ao que vocês eram.</h2>
      <p class="text-muted">
        É compreender o que aconteceu, transformar o que precisa mudar e
        construir uma relação que faça sentido para quem vocês são hoje.
      </p>
      <div class="mt-8 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="[less, more] in outcomes"
          :key="less"
          class="flex min-h-[130px] flex-col justify-end gap-1 rounded-[22px] border border-wine/15 bg-white p-6 shadow-[0_8px_32px_rgba(72,21,34,0.06)] md:p-7"
        >
          <span class="text-sm text-muted">{{ less }}</span>
          <span class="font-serif text-[1.25rem] font-semibold text-wine md:text-[1.35rem]">
            {{ more }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
