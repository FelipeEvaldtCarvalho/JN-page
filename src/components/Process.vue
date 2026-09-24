<script setup>
import { pillars, cycle } from "../texts/elo.js";

const radius = 38;
const point = (deg) => {
  const rad = (deg * Math.PI) / 180;
  return [50 + radius * Math.cos(rad), 50 + radius * Math.sin(rad)];
};

const nodes = cycle.map((label, index) => {
  const [x, y] = point(-90 + index * 90);
  return { label, x, y };
});

const arcs = cycle.map((_, index) => {
  const start = -90 + index * 90 + 24;
  const [x1, y1] = point(start);
  const [x2, y2] = point(start + 42);
  return `M${x1} ${y1} A${radius} ${radius} 0 0 1 ${x2} ${y2}`;
});
</script>

<template>
  <section class="bg-white py-16 md:py-24">
    <div v-reveal class="wrap grid items-center gap-14 lg:grid-cols-2">
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
      <div
        class="blob mx-auto w-full max-w-[460px] bg-warm p-4 [animation-duration:26s] sm:p-6"
      >
        <div class="relative aspect-square" role="img" :aria-label="`${cycle.join(', ')}, e o ciclo recomeça`">
          <svg
            viewBox="0 0 100 100"
            class="absolute inset-0 h-full w-full"
            fill="none"
            aria-hidden="true"
          >
            <defs>
              <marker
                id="cycle-arrow"
                viewBox="0 0 10 10"
                refX="6"
                refY="5"
                markerWidth="4"
                markerHeight="4"
                orient="auto"
              >
                <path d="M0 0 L10 5 L0 10 z" fill="#d4989b" />
              </marker>
            </defs>
            <path
              v-for="d in arcs"
              :key="d"
              :d="d"
              stroke="#d4989b"
              stroke-width="1"
              stroke-linecap="round"
              marker-end="url(#cycle-arrow)"
            />
          </svg>
          <div
            v-for="{ label, x, y } in nodes"
            :key="label"
            class="absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-white px-3 py-2 text-[13px] font-bold text-wine shadow-[0_6px_20px_rgba(72,21,34,0.1)] sm:px-5 sm:py-3 sm:text-base"
            :style="{ left: `${x}%`, top: `${y}%` }"
          >
            {{ label }}
          </div>
          <p
            class="absolute inset-0 m-auto h-fit w-[34%] text-center font-serif text-sm italic text-muted sm:text-base"
          >
            …e o ciclo recomeça.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
