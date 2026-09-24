<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import { whatsappUrl, reportConversion } from "../texts/contact.js";

const visible = ref(true);
let observer;

onMounted(() => {
  const contact = document.getElementById("contato");
  if (!contact || typeof IntersectionObserver === "undefined") return;

  observer = new IntersectionObserver(([entry]) => {
    visible.value = !entry.isIntersecting;
  });
  observer.observe(contact);
});

onBeforeUnmount(() => observer?.disconnect());
</script>

<template>
  <div
    class="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-wine/10 bg-cream/95 p-3 backdrop-blur-md transition-transform duration-300 sm:hidden"
    :class="visible ? 'translate-y-0' : 'translate-y-full'"
    :aria-hidden="!visible"
  >
    <a
      class="btn flex-1 text-center"
      href="#contato"
      :tabindex="visible ? 0 : -1"
    >
      Quero saber se o ELO é para nós
    </a>
    <a
      class="btn grid w-12 shrink-0 place-items-center !px-0"
      :href="whatsappUrl()"
      target="_blank"
      rel="noopener"
      aria-label="Falar pelo WhatsApp"
      :tabindex="visible ? 0 : -1"
      @click="reportConversion"
    >
      <i class="pi pi-whatsapp text-lg" />
    </a>
  </div>
</template>
