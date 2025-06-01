<script setup>
import Button from "primevue/button";

const openWhatsApp = () => {
  window.open("https://wa.me/5551984561140", "_blank");
};
</script>
<template>
  <Button
    label="Entre em contato"
    icon="pi pi-whatsapp"
    class="w-full lg:!w-fit"
    pt:icon="!text-white"
    pt:label="!text-white"
    @click="openWhatsApp"
  />
</template>
