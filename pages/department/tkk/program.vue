<template>
  <v-sheet class="d-flex justify-center">
    <div class="content-page">
      <div class="page-title">PROGRAM-PROGRAM DI TKK WIJANA</div>
      <div class="page-content">
        <p>&nbsp;</p>
        <p>daftar program bisa dibuat disini</p>

        <p>Ini dicopas dari semacam <strong>MS Word&nbsp;</strong></p>
      </div>
    </div>
  </v-sheet>
</template>

<script setup>
useHead({
  title:'Program TKK Wijana Jombang',
  meta: [
    { name: 'description', content: 'semua tentang program-program di TKK Wijana Jombang' }
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