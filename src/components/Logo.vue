<script setup>
defineOptions({
  name: "Logo",
});
defineProps({
  primary: {
    type: String,
    default: "#5e2233",
  },
  secondary: {
    type: String,
    default: "#d4989b",
  },
});

const wave =
  "M10 55 C41.2 4.3 65.5 4.3 96.7 55 C127.9 105.7 152.2 105.7 183.3 55 C214.5 4.3 238.8 4.3 270 55";
const inverted =
  "M10 55 C41.2 105.7 65.5 105.7 96.7 55 C127.9 4.3 152.2 4.3 183.3 55 C214.5 105.7 238.8 105.7 270 55";
const clipId = `logo-cross-${Math.random().toString(36).slice(2, 8)}`;
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 280 110"
    fill="none"
    stroke-width="12"
    stroke-linecap="round"
    role="img"
    aria-label="Jaqueline da Nova"
  >
    <defs>
      <clipPath :id="clipId">
        <rect x="165" y="0" width="37" height="110" />
      </clipPath>
    </defs>
    <path :d="inverted" :stroke="secondary" />
    <path :d="wave" :stroke="primary" />
    <path :d="inverted" :stroke="secondary" :clip-path="`url(#${clipId})`" />
  </svg>
</template>
