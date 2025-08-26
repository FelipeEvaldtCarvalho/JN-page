<script setup>
import Menu from "../components/Menu.vue";
import Footer from "../components/Footer.vue";
import WFloat from "../components/WFloat.vue";
</script>

<template>
  <Menu />

  <main class="min-h-screen py-20 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header do Blog -->
      <header class="text-center mb-16">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          Blog da Jaqueline
        </h1>
        <p class="text-lg text-gray-600 max-w-2xl mx-auto">
          Artigos sobre saúde mental, terapia TRG, desenvolvimento pessoal e
          bem-estar emocional.
        </p>
      </header>

      <!-- Lista de Posts -->
      <section class="space-y-8">
        <!-- Post em destaque -->
        <article
          class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
        >
          <div class="md:flex">
            <div class="md:w-1/3">
              <img
                src="/about.png"
                alt="Post em destaque"
                class="w-full h-48 md:h-full object-cover"
              />
            </div>
            <div class="p-6 md:w-2/3">
              <div class="text-sm text-purple-600 font-semibold mb-2">
                ARTIGO EM DESTAQUE
              </div>
              <h2 class="text-2xl font-bold text-gray-800 mb-3">
                Como a Terapia TRG Pode Transformar Sua Vida
              </h2>
              <p class="text-gray-600 mb-4">
                Descubra como a Terapia de Reprocessamento Generativo funciona e
                por que ela é tão eficaz no tratamento de traumas, fobias e
                padrões limitantes...
              </p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">15 de agosto, 2025</span>
                <button
                  class="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  Ler Mais
                </button>
              </div>
            </div>
          </div>
        </article>

        <!-- Posts regulares -->
        <div class="grid md:grid-cols-2 gap-8">
          <article
            class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src="/banner-img.png"
              alt="Post 1"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-3">
                5 Sinais de que Você Precisa de Terapia
              </h3>
              <p class="text-gray-600 mb-4">
                Reconhecer quando precisamos de ajuda profissional é o primeiro
                passo para uma vida mais equilibrada...
              </p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">10 de agosto, 2025</span>
                <button
                  class="text-purple-600 hover:text-purple-800 font-semibold"
                >
                  Ler Mais →
                </button>
              </div>
            </div>
          </article>

          <article
            class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src="/about.png"
              alt="Post 2"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-3">
                Entendendo a Ansiedade: Causas e Tratamentos
              </h3>
              <p class="text-gray-600 mb-4">
                A ansiedade é uma das condições mais comuns da atualidade. Saiba
                como identificar e tratar...
              </p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">5 de agosto, 2025</span>
                <button
                  class="text-purple-600 hover:text-purple-800 font-semibold"
                >
                  Ler Mais →
                </button>
              </div>
            </div>
          </article>

          <article
            class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src="/banner-img.png"
              alt="Post 3"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-3">
                Técnicas de Respiração para Controlar o Pânico
              </h3>
              <p class="text-gray-600 mb-4">
                Aprenda exercícios simples e eficazes para gerenciar crises de
                pânico no dia a dia...
              </p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">1 de agosto, 2025</span>
                <button
                  class="text-purple-600 hover:text-purple-800 font-semibold"
                >
                  Ler Mais →
                </button>
              </div>
            </div>
          </article>

          <article
            class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <img
              src="/about.png"
              alt="Post 4"
              class="w-full h-48 object-cover"
            />
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-3">
                O Poder da Autocompaixão na Cura Emocional
              </h3>
              <p class="text-gray-600 mb-4">
                Desenvolver uma relação mais gentil consigo mesmo é fundamental
                para o processo de cura...
              </p>
              <div class="flex items-center justify-between">
                <span class="text-sm text-gray-500">28 de julho, 2025</span>
                <button
                  class="text-purple-600 hover:text-purple-800 font-semibold"
                >
                  Ler Mais →
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>

      <!-- Newsletter -->
      <section
        class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg p-8 mt-16 text-center text-white"
      >
        <h3 class="text-2xl font-bold mb-4">Receba nossos artigos por email</h3>
        <p class="mb-6">
          Inscreva-se na nossa newsletter e receba conteúdos exclusivos sobre
          saúde mental e bem-estar.
        </p>
        <div class="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Seu melhor email"
            class="flex-1 px-4 py-3 rounded-lg text-gray-800"
          />
          <button
            class="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Inscrever
          </button>
        </div>
      </section>
    </div>
  </main>

  <Footer />
  <WFloat />
</template>
