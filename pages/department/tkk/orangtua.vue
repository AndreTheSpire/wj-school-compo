<template>
  <v-sheet class="d-flex justify-center">
    <div class="content-page">
      <div class="page-title">INFO BAGI ORANG TUA TKK WIJANA</div>
      <div class="page-content">
        <p>buku pedoman bisa di download disini</p>
      </div>
    </div>
  </v-sheet>
</template>

<script setup>
useHead({
  title:'Info Untuk Orang Tua TKK Wijana Jombang',
  meta: [
    { name: 'description', content: 'semua info untuk orang tua dari TKK Wijana Jombang' }
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