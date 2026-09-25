<script setup>
import { included } from "../texts/elo.js";
</script>

<template>
  <section id="investimento" class="bg-white py-16 md:py-24">
    <div v-reveal class="wrap">
      <div
        class="grid gap-12 rounded-[32px] bg-gradient-to-br from-deep to-wine p-8 text-white md:p-12 lg:grid-cols-[1fr_0.55fr]"
      >
        <div>
          <div class="eyebrow !text-champ">ELO · Jornada completa</div>
          <h2 class="section-title !text-white">
            Uma jornada para o casal se reencontrar, se compreender e construir
            um novo caminho juntos.
          </h2>
          <p class="text-[#eadde0]">
            21 sessões + 1 acompanhamento estratégico. 100% online. Jornada
            personalizada.
          </p>
          <ul class="mt-6 grid gap-2.5">
            <li
              v-for="item in included"
              :key="item"
              class="flex items-start gap-3 text-[#f4e6e8]"
            >
              <i class="pi pi-check mt-1 text-sm text-champ" aria-hidden="true" />
              {{ item }}
            </li>
          </ul>
        </div>
        <div class="self-center">
          <small
            class="block text-xs uppercase tracking-[0.15em] text-champ"
          >
            Investimento
          </small>
          <div class="font-serif text-[3.5rem] leading-tight md:text-[4.5rem]">
            R$ 3.290
          </div>
          <p class="mb-6 text-[#eadde0]">À vista ou parcelado em até 10× de R$ 417,74.</p>
          <a class="btn btn-light" href="#contato">Quero conhecer o ELO</a>
        </div>
      </div>
    </div>
  </section>
</template>
