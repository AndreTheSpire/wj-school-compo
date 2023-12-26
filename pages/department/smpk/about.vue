<template>
  <v-sheet class="d-flex justify-center">
    <div class="content-page">
      <div class="page-title">SMPK TENTANG</div>
      <div class="page-content">
        <p>asd fasdfafsda sda sdf</p>
      </div>
    </div>
  </v-sheet>
</template>

<script setup>
useHead({
  title:'About SMPK Wijana Jombang',
  meta: [
    { name: 'description', content: 'semua tentang SMPK Wijana Jombang' }
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
img{
  @include phone{
    img {
        height: auto;
        width: 90vw;
        object-fit: cover;
      }
      }
}

</style>

     