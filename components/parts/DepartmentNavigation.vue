<template>
  <v-sheet class="d-flex justify-center">
    <div class="nav-content d-flex align-center justify-center">
      <template v-for="(item, index) in navigations" :key="index">
        <div class="nav-content-item" @click="navigate(item.url)">
          {{ item.text }}
        </div>
      </template>
    </div>
  </v-sheet>
</template>

<script setup>
const props = defineProps({
  navigations: Array,
  navigatepage: Function,
});
function navigate(url) {
  props.navigatepage(url);
}
</script>

<style lang="scss" scoped>
.nav-content {
  width: 100%;
  background-color: $primary-color;
  padding: 16px;
  flex-wrap: wrap;
}
.nav-content-item {
  color: white;
  text-align: center;
  font-style: normal;
  font-size: 16px;
  padding: 0.7rem 1rem;
  font-weight: 700;
}
.nav-content-item:hover {
  cursor: grab;
  border-bottom: 2px white solid;
  transform: transform 0.2s;
}
</style>
