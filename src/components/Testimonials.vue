<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { testimonials } from "../texts/elo.js";

const track = ref(null);
const active = ref(0);
const perView = ref(1);
const paused = ref(false);
let timer;
let resizeObserver;

const pages = computed(() => Math.max(1, testimonials.length - perView.value + 1));

const slideWidth = () => {
  const [first, second] = track.value?.children ?? [];
  if (!first) return 0;
  return second ? second.offsetLeft - first.offsetLeft : first.offsetWidth;
};

const measure = () => {
  const width = slideWidth();
  if (!width) return;
  perView.value = Math.max(1, Math.round(track.value.clientWidth / width));
  onScroll();
};

const onScroll = () => {
  const width = slideWidth();
  if (!width) return;
  active.value = Math.min(pages.value - 1, Math.round(track.value.scrollLeft / width));
};

const goTo = (index) => {
  const target = (index + pages.value) % pages.value;
  track.value?.scrollTo({ left: target * slideWidth(), behavior: "smooth" });
};

const prefersReducedMotion = () =>
  window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

onMounted(() => {
  measure();
  resizeObserver = new ResizeObserver(measure);
  resizeObserver.observe(track.value);

  if (prefersReducedMotion()) return;
  timer = setInterval(() => {
    if (!paused.value && !document.hidden) goTo(active.value + 1);
  }, 6000);
});

onBeforeUnmount(() => {
  clearInterval(timer);
  resizeObserver?.disconnect();
});
</script>

<template>
  <section id="depoimentos" class="overflow-hidden py-16 md:py-24">
    <div v-reveal class="wrap">
      <div class="flex flex-wrap items-end justify-between gap-6">
        <div>
          <div class="eyebrow">Quem já fez a jornada</div>
          <h2 class="section-title !mb-0">O que os casais contam</h2>
        </div>
        <div class="hidden gap-2 sm:flex">
          <button
            type="button"
            class="carousel-arrow"
            aria-label="Depoimento anterior"
            @click="goTo(active - 1)"
          >
            <i class="pi pi-arrow-left" aria-hidden="true" />
          </button>
          <button
            type="button"
            class="carousel-arrow"
            aria-label="Próximo depoimento"
            @click="goTo(active + 1)"
          >
            <i class="pi pi-arrow-right" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div
        ref="track"
        class="carousel-track -mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-5 py-4 sm:-mx-4 sm:px-4"
        role="region"
        aria-roledescription="carrossel"
        aria-label="Depoimentos de casais"
        @scroll.passive="onScroll"
        @mouseenter="paused = true"
        @mouseleave="paused = false"
        @focusin="paused = true"
        @focusout="paused = false"
        @touchstart.passive="paused = true"
      >
        <figure
          v-for="({ quote, author }, index) in testimonials"
          :key="quote"
          class="relative flex w-[85%] shrink-0 snap-start flex-col overflow-hidden rounded-[26px] border border-wine/12 bg-white p-8 transition-colors duration-300 hover:border-wine/30 sm:w-[calc(50%-8px)] lg:w-[calc((100%-32px)/3)]"
          role="group"
          aria-roledescription="depoimento"
          :aria-label="`${index + 1} de ${testimonials.length}`"
        >
          <span
            class="pointer-events-none absolute top-4 right-6 font-serif text-[6rem] leading-[0.8] text-rose"
            aria-hidden="true"
            >”</span
          >
          <blockquote
            class="relative mt-10 mb-8 font-serif text-[1.15rem] leading-relaxed text-deep italic"
          >
            {{ quote }}
          </blockquote>
          <figcaption
            class="mt-auto flex items-center gap-3 text-sm font-semibold text-wine"
          >
            <span class="h-px w-8 bg-blush" aria-hidden="true" />
            {{ author }}
          </figcaption>
        </figure>
      </div>

      <div class="mt-6 flex items-center justify-center gap-2">
        <button
          v-for="page in pages"
          :key="page"
          type="button"
          class="h-2 cursor-pointer rounded-full transition-all duration-300"
          :class="active === page - 1 ? 'w-8 bg-wine' : 'w-2 bg-wine/25 hover:bg-wine/50'"
          :aria-label="`Ir para o depoimento ${page}`"
          :aria-current="active === page - 1"
          @click="goTo(page - 1)"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.carousel-track {
  scrollbar-width: none;
  scroll-padding-inline: 1.25rem;
}

.carousel-track::-webkit-scrollbar {
  display: none;
}

.carousel-arrow {
  display: grid;
  place-items: center;
  width: 48px;
  height: 48px;
  border-radius: 999px;
  border: 1px solid color-mix(in srgb, var(--color-wine) 30%, transparent);
  color: var(--color-wine);
  cursor: pointer;
  transition:
    background 0.2s,
    color 0.2s;
}

.carousel-arrow:hover {
  background: var(--color-wine);
  color: #fff;
}

.carousel-arrow:focus-visible {
  outline: 2px solid var(--color-wine);
  outline-offset: 3px;
}

@media (min-width: 640px) {
  .carousel-track {
    scroll-padding-inline: 1rem;
  }
}
</style>
