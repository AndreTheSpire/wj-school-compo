<template>
  <v-sheet class="d-flex justify-center">
    <div class="content-page">
      <div class="page-title">SDK PENDAFTARAN</div>
      <div class="page-content">
        <p>Pendaftaran langsung melalui:</p>
        <p>Google Form https://www.google.com</p>
        <p>Atau melalui WhatsApp:</p>
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
@media (max-width: 40em) {
}
</style>