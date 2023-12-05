<template>
  <v-sheet class="d-flex justify-center">
    <div class="content-page">
      <div class="page-title">SDK PENDAFTARAN</div>
      <div class="page-content">
        <p>Pendaftaran langsung melalui:</p>
        <p>Google Form https://www.google.com</p>
        <p>Atau melalui WhatsApp:</p>
      </div>
    </div>
  </v-sheet>
</template>

<script setup>
useHead({
  title:'Pendaftaran SDK Wijana Jombang',
  meta: [
    { name: 'description', content: 'semua tentang pendaftaran di SDK Wijana Jombang' }
  ],
  bodyAttrs: {
    class: 'test'
  },
})

definePageMeta({
  pageTransition: {
    name: "page",
    mode: "out-in",
    onBeforeEnter: (el) => {
      window.scrollTo({ top: 0});
    },
  },
});
import { reactive, ref } from "vue";
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 1rem;
  font-size: inherit;
  line-height: 1.6;
  text-rendering: optimizeLegibility;
}

</style>