<template>
  <div class="w-full p-8">
    <div
      class="relative w-fit h-fit m-auto rounded-2xl border-4 border-[#F7EBE3] p-1 bg-[#F7EBE3]"
    >
      <video
        ref="videoRef"
        class="cursor-pointer max-h-[80vh] rounded-lg"
        autoplay
        loop
        playsinline
        muted
        @click="toggleMute"
      >
        <source src="/video.mp4" type="video/mp4" />
        Seu navegador não suporta vídeo HTML5.
      </video>
      <div
        v-if="isMuted"
        class="absolute top-3 w-[80%] left-1/2 -translate-x-1/2 bg-black/60 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2 pointer-events-none text-center"
      >
        🔇 Vídeo sem som, clique para ativar!
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMuted = ref(true);
const videoRef = ref(null);
let observer = null;

function toggleMute() {
  if (!videoRef.value) return;
  videoRef.value.muted = !videoRef.value.muted;
  isMuted.value = videoRef.value.muted;
}

onMounted(() => {
  const video = videoRef.value;
  if (!video) return;

  video.muted = true;

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          video.play();
        } else {
          video.pause();
        }
      });
    },
    {
      threshold: 0.3,
    }
  );

  observer.observe(video);
});

onUnmounted(() => {
  if (observer && videoRef.value) {
    observer.unobserve(videoRef.value);
  }
});
</script>
