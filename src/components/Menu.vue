<script setup>
import Logo from "./Logo.vue";
import { links } from "../texts/menu.js";
</script>

<template>
  <header
    class="sticky top-0 z-30 border-b border-wine/10 bg-cream/90 backdrop-blur-md"
  >
    <div class="wrap flex h-[72px] items-center justify-between gap-4">
      <router-link
        to="/"
        class="flex min-w-0 items-center gap-2 sm:gap-3"
        aria-label="Jaqueline da Nova, Terapia de casal"
      >
        <Logo class="h-5 w-auto shrink-0 sm:h-6" />
        <span class="leading-tight">
          <span class="block whitespace-nowrap font-brand text-[17px] text-ink sm:text-xl">Jaqueline da Nova</span>
          <span class="block text-[11px] tracking-wide text-blush">
            Terapia de casal
          </span>
        </span>
      </router-link>
      <nav
        class="hidden gap-6 text-sm text-muted md:flex"
        aria-label="Menu principal"
      >
        <a
          v-for="{ label, href } in links"
          :key="href"
          :href="href"
          class="transition-colors hover:text-wine"
        >
          {{ label }}
        </a>
      </nav>
      <a class="btn shrink-0 whitespace-nowrap !px-4 !py-2.5 text-[13px] sm:!px-5 sm:text-sm" href="#contato">Conhecer o ELO</a>
    </div>
  </header>
</template>
