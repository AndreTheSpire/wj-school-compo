<template>
  <v-sheet class="d-flex justify-center">
    <div class="content-page">
      <div class="page-title">INFO BAGI ORANG TUA</div>
      <div class="page-content">
        <p>info yang relevan bagi orang tua murid</p>
      </div>
    </div>
  </v-sheet>
</template>

<script setup>
useHead({
  title:'Info Untuk Orang Tua SMPK Wijana Jombang',
  meta: [
    { name: 'description', content: 'semua info untuk orang tua dari SMPK Wijana Jombang' }
  ],
  bodyAttrs: {
    class: 'test'
  },
})

// definePageMeta({
//   pageTransition: {
//     name: "page",
//     mode: "out-in",
//     onBeforeEnter: (el) => {
//       window.scrollTo({ top: 0});
//     },
//   },
// });
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 1rem;
  font-size: inherit;
  line-height: 1.6;
  text-rendering: optimizeLegibility;
}

</style>