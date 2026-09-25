<script setup>
import Menu from "../components/Menu.vue";
import Hero from "../components/Hero.vue";
import Pains from "../components/Pains.vue";
import Process from "../components/Process.vue";
import Journey from "../components/Journey.vue";
import Experience from "../components/Experience.vue";
import About from "../components/About.vue";
import Testimonials from "../components/Testimonials.vue";
import Outcomes from "../components/Outcomes.vue";
import Investment from "../components/Investment.vue";
import Faq from "../components/Faq.vue";
import ContactForm from "../components/ContactForm.vue";
import Footer from "../components/Footer.vue";
import WFloat from "../components/WFloat.vue";
import MobileCta from "../components/MobileCta.vue";
</script>

<template>
  <Menu />
  <main>
    <Hero />
    <Pains />
    <Process />
    <Journey />
    <Experience />
    <Outcomes />
    <About />
    <Testimonials />
    <Investment />
    <Faq />
    <ContactForm />
  </main>
  <Footer />
  <WFloat />
  <MobileCta />
</template>
