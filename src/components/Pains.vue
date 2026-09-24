<script setup>
import { pains } from "../texts/elo.js";
</script>

<template>
  <section id="jornada" class="py-16 md:py-24">
    <div v-reveal class="wrap">
      <div class="eyebrow">Antes de pensar em quem está certo</div>
      <h2 class="section-title">
        Talvez vocês não tenham perdido a relação. Talvez tenham perdido a forma
        de se encontrar dentro dela.
      </h2>
      <p class="text-muted">
        Quando a relação começa a pesar, histórias, feridas, necessidades não
        ditas e padrões de reação podem se acumular até que pequenas situações
        ganhem um peso enorme.
      </p>
      <div class="mt-8 grid grid-cols-2 gap-3.5 md:grid-cols-4">
        <div
          v-for="pain in pains"
          :key="pain"
          class="flex min-h-[130px] items-end rounded-[22px] bg-rose p-6 md:p-7"
        >
          <span class="font-serif text-[1.35rem] font-semibold text-deep">
            {{ pain }}
          </span>
        </div>
      </div>
      <blockquote
        class="relative mt-9 overflow-hidden rounded-2xl bg-white py-7 pr-7 pl-9 font-serif text-[1.35rem] italic text-deep shadow-[0_8px_32px_rgba(72,21,34,0.08)]"
      >
        <span
          class="absolute inset-y-0 left-0 w-1 bg-wine"
          aria-hidden="true"
        />
        “Amar não significa automaticamente saber se relacionar.”
      </blockquote>
    </div>
  </section>
</template>
