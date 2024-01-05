<template>
  <div class="swiper-container">
    <swiper
      :slidesPerView="4"
      :spaceBetween="2"
      navigation
      :autoplay="autoplay"
      :breakpoints="{
        300: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        500: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        750: {
          slidesPerView: 3,
          spaceBetween: 0,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
        1920: {
          slidesPerView: 4,
          spaceBetween: 0,
        },
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide v-for="(images, index) in items" :key="index">
        <div class="swiper-div d-flex flex-column align-center">
          <img class="img-swiper" :src="images.imgurl" />
          <div style="margin-top: 16px">
            <p class="gukar-name text-center">{{ images.nama }}</p>
            <p class="gukar-role text-center">{{ images.jabatan }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide, useSwiper } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

// import required modules
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const autoplay = reactive({
  delay: 4000,
  disableOnInteraction: false,
});
const props = defineProps({
  items: Array,
});
const wiper = useSwiper();
const modules = [Pagination, Navigation, Autoplay];
</script>

<style>
.gukar-name {
  font-weight: 700 !important;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: normal;
  font-style: bold;
  color: #0a0a0a;
  word-wrap: break-word;
}
.gukar-role {
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: normal;
  font-style: italic;
  color: #0a0a0a;
}

.swiper-button-prev:after,
.swiper-button-next:after {
  /* font-family: swiper-icons; */
  font-size: 20px;
  background-color: green;
  text-transform: none !important;
  font-weight: 700;
  letter-spacing: 0;
  font-variant: initial;
  color: white;
  line-height: 1;
  border-radius: 50%;
  padding: 12px 18px;
}
.swiper-container {
  width: 92vw;
  overflow: hidden;
}
.swiper {
  width: 100%;
  height: 100%;
  margin: 8px;
}

.swiper-slide {
  text-align: center;
  height: 100%;

  /* Center slide text vertically */
}
.swiper-div {
  width: 100%;
}

.swiper-slide img {
  display: block;
  width: 80%;
  object-fit: cover;
}
.mySwiper {
  width: 100%;
  margin: 0px;
}
.img-swiper {
  height: 300px;
}
@media screen and (max-width: 599px) {
  .swiper {
    width: 100vw;
  }
  .swiper-slide img {
    display: inline-block;
    width: 95%;
    height: 100%;
    object-fit: cover;
    margin: 5px;
  }
  .mySwiper {
    width: 100%;
  }
}
.swiper-pagination {
  position: static;
  margin-top: 16px;
}
</style>
