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
import { reactive, ref } from "vue";
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

     