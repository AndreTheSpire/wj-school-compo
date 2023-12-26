<template>
  <v-sheet class="d-flex justify-center">
    <div class="content-page">
      <div class="page-title">INFO BAGI ORANG TUA</div>
      <div class="page-content">
        <p>ini laman untuk memuat info bagi orang tua</p>
      </div>
    </div>
  </v-sheet>
</template>

<script setup>
useHead({
  title:'Info Untuk Orang Tua SDK Wijana Jombang',
  meta: [
    { name: 'description', content: 'semua info untuk orang tua dari SDK Wijana Jombang' }
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