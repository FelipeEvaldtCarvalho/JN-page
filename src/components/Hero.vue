<script setup>
import Logo from "./Logo.vue";
</script>

<template>
  <section
    id="inicio"
    class="grid items-center py-14 lg:min-h-[calc(100svh-72px)] lg:py-10"
    style="
      background: radial-gradient(
        circle at 80% 20%,
        #d8c5b044,
        transparent 30%
      );
    "
  >
    <div class="wrap grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
      <div>
        <div class="eyebrow">ELO · Jornada Estruturada para Casais</div>
        <h1
          class="mt-5 mb-6 text-[clamp(2.3rem,min(4.6vw,7.4vh),4.75rem)] text-balance"
        >
          O relacionamento pode mudar quando vocês entendem o que está
          acontecendo entre vocês.
        </h1>
        <p class="max-w-[600px] text-[clamp(1rem,2.1vh,1.15rem)] text-muted">
          Uma experiência terapêutica 100% online para casais cansados dos
          mesmos conflitos, da distância e dos ciclos que se repetem, e que
          querem construir uma nova forma de se relacionar.
        </p>
        <div class="mt-7 flex flex-wrap gap-3">
          <a class="btn w-full text-center sm:w-auto" href="#contato">
            Quero saber se o ELO é para nós
          </a>
          <a class="btn btn-outline w-full text-center sm:w-auto" href="#jornada">
            Conhecer a jornada
          </a>
        </div>
        <p class="mt-4 text-[0.82rem] text-muted">
          Um processo estruturado. Personalizado para a história de vocês.
          Conduzido passo a passo.
        </p>
      </div>
      <div class="relative mx-auto w-full max-w-[min(480px,86vw)] lg:max-w-[min(480px,62vh)]">
        <div
          class="blob absolute inset-0 translate-x-4 translate-y-5 bg-blush/35 [animation-delay:-6s]"
          aria-hidden="true"
        />
        <div
          class="blob relative grid aspect-[1/1.05] place-items-center overflow-hidden bg-gradient-to-br from-deep to-wine shadow-[0_30px_60px_-20px_rgba(72,21,34,0.45)]"
        >
          <span
            class="blob absolute h-[72%] w-[72%] border border-white/15 [animation-delay:-4s]"
            aria-hidden="true"
          />
          <span
            class="blob absolute h-[92%] w-[92%] border border-white/10 [animation-delay:-9s]"
            aria-hidden="true"
          />
          <div class="relative text-center">
            <Logo class="mx-auto mb-6 h-9 w-auto lg:h-10" primary="#f4e6e8" />
            <div
              class="font-serif text-[clamp(4.5rem,22vw,6.5rem)] leading-[0.8] text-white lg:text-[clamp(5rem,13vh,8rem)]"
            >
              ELO
            </div>
            <div
              class="mt-8 px-4 text-[10px] whitespace-nowrap uppercase tracking-[0.14em] text-[#eadde0] sm:text-[11px]"
            >
              Compreender · Transformar · Construir
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
