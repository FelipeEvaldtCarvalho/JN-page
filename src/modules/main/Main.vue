<script setup lang="ts">
import Nav from "./components/Nav.vue";
</script>
<template>
  <Nav />
  <div
    class="relative p-4 max-w-[1200px] m-auto selection:bg-blue-400 selection:text-white"
  >
    <RouterView />
  </div>
</template>
