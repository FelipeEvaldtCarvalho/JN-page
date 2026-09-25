<template>
  <section id="sobre" class="bg-white py-16 md:py-24">
    <div
      v-reveal
      class="wrap grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
    >
      <div class="relative mx-auto w-full max-w-[380px]">
        <div
          class="blob absolute inset-0 -translate-x-4 translate-y-4 bg-rose"
          aria-hidden="true"
        />
        <div
          class="blob relative aspect-[4/5] overflow-hidden bg-warm shadow-[0_30px_60px_-25px_rgba(72,21,34,0.4)] [animation-delay:-5s]"
        >
          <img
            src="/jaqueline.jpg"
            alt="Jaqueline da Nova, terapeuta de casal"
            class="h-full w-full object-cover object-[50%_30%]"
            loading="lazy"
            width="800"
            height="1066"
          />
        </div>
      </div>
      <div>
        <div class="eyebrow">Quem conduz o ELO</div>
        <h2 class="section-title">Olá, eu sou a Jaqueline da Nova.</h2>
        <p class="text-muted">
          Sou terapeuta e criei o ELO para casais que se amam, mas se perderam
          nos mesmos conflitos. Ao longo dos atendimentos, percebi que muitos
          casais não precisam de mais uma conversa difícil: precisam entender o
          que cada um carrega para a relação e o ciclo que se forma entre os
          dois.
        </p>
        <p class="mt-4 text-muted">
          Meu trabalho é oferecer um espaço seguro e acolhedor, com uma ordem
          clara, para que vocês possam compreender, transformar e construir uma
          nova forma de estar juntos.
        </p>
        <p class="mt-6 font-serif text-xl italic text-wine">
          “Cada relação é formada por duas histórias. É por elas que a gente
          começa.”
        </p>
      </div>
    </div>
  </section>
</template>
