<script setup>
import { reactive, ref } from "vue";
import { whatsappUrl, reportConversion } from "../texts/contact.js";

const form = reactive({
  partnerOne: "",
  partnerTwo: "",
  phone: "",
  together: "",
  reason: "",
  change: "",
});

const fields = [
  { key: "partnerOne", label: "Nome do parceiro 1", required: true },
  { key: "partnerTwo", label: "Nome do parceiro 2", required: true },
  { key: "phone", label: "WhatsApp", required: true, type: "tel" },
  { key: "together", label: "Há quanto tempo estão juntos?" },
  { key: "reason", label: "O que fez vocês procurarem ajuda?", textarea: true },
  { key: "change", label: "O que vocês gostariam de transformar?", textarea: true },
];

const sent = ref(false);

const submit = () => {
  const lines = [
    "Olá, Jaqueline! Queremos saber se o ELO faz sentido para nós.",
    "",
    ...fields
      .filter(({ key }) => form[key].trim())
      .map(({ key, label }) => `*${label}:* ${form[key].trim()}`),
  ];

  reportConversion();
  window.open(whatsappUrl(lines.join("\n")), "_blank", "noopener");
  sent.value = true;
};
</script>

<template>
  <section id="contato" class="bg-rose py-16 md:py-24 text-center">
    <div class="wrap">
      <div class="eyebrow">Próximo passo</div>
      <h2 class="section-title mx-auto max-w-[850px]">
        Se vocês chegaram até aqui, talvez esteja na hora de olhar para a
        relação de um jeito diferente.
      </h2>
      <p class="mx-auto max-w-[720px] text-muted">
        Preencha o formulário. Eu vou conhecer um pouco do momento de vocês e,
        se o ELO fizer sentido, o próximo passo será uma conversa com os dois
        parceiros.
      </p>
      <form
        class="mx-auto mt-9 grid max-w-[720px] gap-3.5 rounded-3xl bg-white p-6 text-left shadow-[0_20px_50px_-20px_rgba(72,21,34,0.25)] sm:grid-cols-2 sm:p-8"
        @submit.prevent="submit"
      >
        <label
          v-for="field in fields"
          :key="field.key"
          class="text-[13px] font-bold text-deep"
          :class="{ 'sm:col-span-2': field.textarea }"
        >
          {{ field.label }}
          <textarea
            v-if="field.textarea"
            v-model="form[field.key]"
            class="field min-h-[96px]"
          />
          <input
            v-else
            v-model="form[field.key]"
            :type="field.type || 'text'"
            :required="field.required"
            class="field"
          />
        </label>
        <button
          type="submit"
          class="btn w-full cursor-pointer sm:col-span-2"
        >
          Quero saber se o ELO faz sentido para nós
        </button>
        <p
          v-if="sent"
          class="text-center text-sm font-semibold text-wine sm:col-span-2"
          role="status"
        >
          Abrimos o WhatsApp com as respostas de vocês. É só enviar a mensagem.
        </p>
      </form>
    </div>
  </section>
</template>
