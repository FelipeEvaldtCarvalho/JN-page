<script setup>
import { stages } from "../texts/elo.js";
</script>

<template>
  <section id="etapas" class="py-16 md:py-24">
    <div class="wrap">
      <div class="eyebrow">A jornada ELO</div>
      <h2 class="section-title">
        Quatro etapas. Uma experiência construída para fazer sentido na vida
        real.
      </h2>
      <p class="text-muted">
        Cada etapa abre espaço para a próxima: do “eu” ao “nós”, do padrão à
        mudança e da mudança ao futuro.
      </p>
      <div class="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="stage in stages"
          :key="stage.title"
          class="flex min-h-[315px] flex-col rounded-[22px] border border-wine/15 bg-white p-7 shadow-[0_8px_32px_rgba(72,21,34,0.06)] transition-transform duration-300 hover:-translate-y-1"
        >
          <span class="text-[11px] font-bold tracking-[0.13em] text-wine">
            {{ stage.num }}
          </span>
          <h3 class="my-4 text-[2rem]">{{ stage.title }}</h3>
          <b class="text-ink">{{ stage.focus }}</b>
          <p class="mt-3 mb-6 text-sm text-muted">{{ stage.text }}</p>
          <span class="mt-auto text-[13px] font-bold text-wine">
            {{ stage.count }}
          </span>
        </article>
      </div>
    </div>
  </section>
</template>
