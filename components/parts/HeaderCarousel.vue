<template>
  <v-sheet class="d-flex justify-center">
    <v-carousel cycle fade v-model="data.slidepage" height="80vh" hide-delimiters show-arrows="hover">
      <v-carousel-item
        v-for="(img, i) in props.headerimg"
        class="header-style"
        :key="i"
        :src="img.urlimg"
        cover
        transition="scale"
        reverse-transition="fade"
      >
        <div class="d-flex justify-center align-center h-100">
          <img :class="
                data.load == true
                  ? 'logo-img animate'
                  : 'logo-img'
              " :src="props.logo" />
        </div>
      </v-carousel-item>
    </v-carousel>
  </v-sheet>
</template>

<script setup>
const props = defineProps({
  logo: {
    type: String,
    default: null,
  },
  headerimg: Array,
});

const data = reactive({
  load: true,
  slidepage: 0,
})
watch(
  () => data.slidepage,
  () => {
    data.load = false;
  }
);
</script>

<style lang="scss" scoped>
@keyframes floating {
  from {
    transform: translate(-10%, 0px);
    opacity: 0;
  }
  to {
    transform: translate(0%, 0px);
    opacity: 1;
  }
}
.animate {
  animation-name: floating;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
}
.header-style {
  margin-bottom: 10px;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-items: center;
  align-items: center;
}
.logo-img {
  max-width: 180px;
}
</style>