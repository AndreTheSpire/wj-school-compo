<template>
  <v-sheet class="d-flex justify-center">
    <div class="content-page">
      <div class="page-title">TKK PENDAFTARAN</div>
    </div>
  </v-sheet>
</template>

<script>
// useHead({
//   title:'Pendaftaran TKK Wijana Jombang',
//   meta: [
//     { name: 'description', content: 'semua tentang pendaftaran di TKK Wijana Jombang' }
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
      window.scrollTo({ top: 0 });
    },
  },
});
</script>

<style lang="scss" scoped>
.p {
  margin-bottom: 1rem;
  font-size: inherit;
  line-height: 1.6;
  text-rendering: optimizeLegibility;
}
</style>
