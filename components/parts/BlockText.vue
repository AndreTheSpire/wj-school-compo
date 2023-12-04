<template>
  <div class="block-section">
    <div class="block-news">{{ props.blocktext }}</div>
  </div>
</template>
<script setup>
const props = defineProps({
  blocktext: {
    type: String,
    default: null,
  },
});
</script>


<style lang="scss" scoped>
.block-section {
  padding: 2rem 2rem 3rem 2rem;
}
.block-news {
  border-radius: 10px;
  padding: 4rem 2rem;
  background-color: $primary-color;
  font-size: 1.2rem;
  text-align: center;
  color: #fff;
  font-weight: 700;
  display: block;
}
</style>