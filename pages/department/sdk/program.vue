<template>
  <v-sheet class="d-flex justify-center">
    <div class="content-page">
      <div class="page-title">PROGRAM SDK</div>
      <div class="page-content">
        <p>program yang ada di SDK</p>
      </div>
    </div>
  </v-sheet>
</template>

<script setup>
useHead({
  title:'Program SDK Wijana Jombang',
  meta: [
    { name: 'description', content: 'semua tentang program-program di SDK Wijana Jombang' }
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