<script setup>
import { pillars, cycle } from "../texts/elo.js";
</script>

<template>
  <section class="bg-white py-16 md:py-24">
    <div class="wrap grid items-center gap-14 lg:grid-cols-2">
      <div>
        <div class="eyebrow">O que torna o ELO diferente</div>
        <h2 class="section-title">
          Não começamos pela briga. Começamos por vocês.
        </h2>
        <p class="text-muted">
          O ELO tem uma ordem porque uma relação é formada por duas histórias.
          Primeiro, cada pessoa compreende a própria história e o que leva para
          o amor. Depois, vocês olham para o ciclo que se forma entre os dois.
          Só então partimos para novas formas de funcionar juntos.
        </p>
        <p v-for="{ title, text } in pillars" :key="title" class="mt-4 text-muted">
          <b class="text-ink">{{ title }}</b> {{ text }}
        </p>
      </div>
      <div class="rounded-[28px] bg-warm p-7">
        <template v-for="(step, index) in cycle" :key="step">
          <div
            class="rounded-xl bg-white p-4 text-center font-bold text-wine"
          >
            {{ step }}
          </div>
          <div
            v-if="index < cycle.length - 1"
            class="py-2 text-center font-bold text-wine"
            aria-hidden="true"
          >
            ↓
          </div>
        </template>
        <p class="mt-4 text-center text-muted">…e o ciclo recomeça.</p>
      </div>
    </div>
  </section>
</template>
