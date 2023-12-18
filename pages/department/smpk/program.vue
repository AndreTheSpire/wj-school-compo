<template>
  <v-sheet class="d-flex justify-center">
    <div class="content-page">
      <div class="page-title">PROGRAM SMPK</div>
      <div class="page-content">
        <p>Program-program yang ada di smpk ini</p>
      </div>
    </div>
  </v-sheet>
</template>

<script setup>
useHead({
  title:'Program SMPK Wijana Jombang',
  meta: [
    { name: 'description', content: 'semua tentang program-program di SMPK Wijana Jombang' }
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
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 1rem;
  font-size: inherit;
  line-height: 1.6;
  text-rendering: optimizeLegibility;
}

</style>