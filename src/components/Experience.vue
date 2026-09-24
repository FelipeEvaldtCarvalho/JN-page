<script setup>
import { experience } from "../texts/elo.js";
</script>

<template>
  <section class="bg-deep py-16 md:py-24 text-white">
    <div class="wrap">
      <div class="eyebrow !text-champ">A experiência</div>
      <h2 class="section-title !text-white">
        Vocês não recebem apenas sessões. Vivenciam um processo.
      </h2>
      <p class="text-[#eadde0]">
        O ELO foi pensado para que cada encontro tenha um propósito dentro da
        jornada, e para que a história de vocês seja o ponto de partida.
      </p>
      <div class="mt-8 grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
        <div
          v-for="{ title, text } in experience"
          :key="title"
          class="rounded-[20px] border border-white/15 bg-white/5 p-6 transition-transform duration-300 hover:-translate-y-1"
        >
          <h3 class="mb-3 text-[1.35rem] !text-white">{{ title }}</h3>
          <p class="text-[#eadde0]">{{ text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
