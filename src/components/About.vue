<script setup>
import Button from "./Button.vue";
</script>
<template>
  <section class="p-8 my-8">
    <div
      class="flex flex-col lg:flex-row items-center w-full max-w-[1400px] mx-auto gap-[80px]"
    >
      <img
        src="/about.png"
        alt="Foto da Jaqueline"
        class="max-w-[390px] w-[90%]"
      />
      <div class="w-full flex flex-col gap-6 lg:gap-10">
        <h1 class="text-gray-800 text-center text-2xl lg:text-4xl">
          Olá, Sou Jaqueline Ferreira da Nova
        </h1>
        <p class="text-gray-700 lg:text-xl leading-relaxed">
          Sou terapeuta emocional especializada em Terapia de Reprocessamento
          Generativo (TRG) — uma abordagem profunda e transformadora que auxilia
          no desbloqueio de padrões emocionais limitantes, promovendo bem-estar
          e autonomia.
        </p>
        <p class="text-gray-700 lg:text-xl leading-relaxed">
          Acredito que cada pessoa carrega dentro de si o potencial para viver
          com mais leveza, autenticidade e propósito. Meu trabalho é oferecer um
          espaço seguro e acolhedor para que você possa acessar, compreender e
          transformar experiências que ainda impactam sua vida, mesmo que
          inconscientemente.
        </p>
        <p class="lg:text-xl font-bold text-[#445938]">
          Se você sente que está pronto para se libertar de padrões que limitam
          sua felicidade, será um prazer caminhar ao seu lado nesse processo.
          Vamos juntos?
        </p>

        <Button />
      </div>
    </div>
  </section>
</template>
