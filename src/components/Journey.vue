<script setup>
import { stages, journeySummary } from "../texts/elo.js";
</script>

<template>
  <section id="etapas" class="py-16 md:py-24">
    <div v-reveal class="wrap">
      <div class="eyebrow">A jornada ELO</div>
      <h2 class="section-title">
        Quatro etapas. Uma experiência construída para fazer sentido na vida
        real.
      </h2>
      <p class="text-muted">
        Cada etapa abre espaço para a próxima: do “eu” ao “nós”, do padrão à
        mudança e da mudança ao futuro.
      </p>
      <ol class="relative mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <span
          class="absolute top-[46px] right-[12%] left-[12%] hidden h-px bg-wine/25 lg:block"
          aria-hidden="true"
        />
        <li
          v-for="(stage, index) in stages"
          :key="stage.title"
          class="relative flex min-h-[315px] flex-col rounded-[22px] border border-wine/15 bg-white p-7 shadow-[0_8px_32px_rgba(72,21,34,0.06)] transition-transform duration-300 hover:-translate-y-1"
        >
          <span
            class="mb-5 grid h-9 w-9 place-items-center rounded-full bg-wine text-sm font-bold text-white"
            aria-hidden="true"
          >
            {{ index + 1 }}
          </span>
          <span class="text-[11px] font-bold tracking-[0.13em] text-wine">
            {{ stage.tag }}
          </span>
          <h3 class="my-4 text-[2rem]">{{ stage.title }}</h3>
          <b class="text-ink">{{ stage.focus }}</b>
          <p class="mt-3 mb-6 text-sm text-muted">{{ stage.text }}</p>
          <span class="mt-auto text-[13px] font-bold text-wine">
            {{ stage.count }}
          </span>
        </li>
      </ol>
      <dl
        class="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-[22px] border border-wine/15 bg-wine/15 lg:grid-cols-4"
      >
        <div
          v-for="{ value, label } in journeySummary"
          :key="label"
          class="bg-rose/50 px-6 py-5 text-center"
        >
          <dt class="sr-only">{{ label }}</dt>
          <dd class="font-serif text-3xl text-deep">{{ value }}</dd>
          <dd class="text-sm text-muted" aria-hidden="true">{{ label }}</dd>
        </div>
      </dl>
    </div>
  </section>
</template>
