<template>
  <v-sheet class="d-flex justify-center">
    <div class="content-page">
      <div class="page-title">SMPK PENDAFTARAN</div>
      <div class="page-content">
        <p>Untuk pendaftaran silahkan hubungi nomor WhatsApp...</p>
      </div>
    </div>
  </v-sheet>
</template>

<script>
// useHead({
//   title:'Pendaftaran SMPK Wijana Jombang',
//   meta: [
//     { name: 'description', content: 'semua tentang pendaftaran di SMPK Wijana Jombang' }
//   ],
//   bodyAttrs: {
//     class: 'test'
//   },
// })

definePageMeta({
  pageTransition: {
    name: "page",
    mode: "out-in",
    onBeforeEnter: (el) => {
      window.scrollTo({ top: 0});
    },
  },
});
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 1rem;
  font-size: inherit;
  line-height: 1.6;
  text-rendering: optimizeLegibility;
}

</style>