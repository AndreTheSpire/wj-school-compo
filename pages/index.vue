<template>
  <v-sheet class="d-flex justify-center">
    <!-- Responsivitas mobile sudah oke overall -->
    <v-carousel
      cycle
      fade
      :height="$vuetify.display.smAndDown ? '40vh' : '90vh'"
      v-model="slidepage"
      hide-delimiters
      @mouseenter="hovered = true"
      @mouseleave="hovered = false"
      show-arrows="hover"
    >
      <!-- $vuetify.display.smAndDown dan hovered ini tujuannya apa ya? -->
      <template v-slot:prev="{ props }">
        <v-btn
          v-show="hovered"
          variant="elevated"
          color="success"
          @click="props.onClick"
          icon="mdi-chevron-left"
        ></v-btn>
      </template>

      <!-- Sering"-in kasih jarak antar elemen agar gak kelihatan berdempetan -->
      <template v-slot:next="{ props }">
        <v-btn
          v-show="hovered"
          variant="elevated"
          color="success"
          @click="props.onClick"
          icon="mdi-chevron-right"
        ></v-btn>
      </template>

      <!-- hindari menggunakan i saja sebagai index
        jauh lebih baik menggunakan index sebagai nama -->
      <v-carousel-item
        v-for="(img, i) in headerimg"
        class="header-style"
        :key="i"
        :src="img.urlimg"
        cover
        transition="scale"
        reverse-transition="fade"
      >
        <div class="d-flex justify-center align-center h-100">
          <v-row
            class="d-flex align-center justify-center"
            v-if="$vuetify.display.smAndDown"
          >
            <v-col
              cols="4"
              :class="
                load == true
                  ? 'header-item animate1 d-flex align-center flex-column justify-center'
                  : 'header-item d-flex align-center flex-column justify-center'
              "
              @click="navigate(1)"
            >
              <img
                class="header-item-img"
                src="/img/icon/logo-sdk.png"
                alt=""
              />
              <div class="header-item-text weight--700">TKK</div>
            </v-col>

            <v-col
              cols="4"
              :class="
                load == true
                  ? 'header-item animate2 d-flex align-center flex-column justify-center'
                  : 'header-item d-flex align-center flex-column justify-center'
              "
              @click="navigate(2)"
            >
              <img
                class="header-item-img"
                src="/img/icon/logo-sdk.png"
                alt=""
              />
              <div class="header-item-text weight--700">SDK</div>
            </v-col>
            <v-col
              cols="4"
              :class="
                load == true
                  ? 'header-item animate3 d-flex align-center flex-column justify-center'
                  : 'header-item d-flex align-center flex-column justify-center'
              "
              @click="navigate(3)"
            >
              <img
                class="header-item-img"
                src="/img/icon/logo-smpk.png"
                alt=""
              />
              <div class="header-item-text weight--700">SMPK</div>
            </v-col>
          </v-row>
          <div
            class="d-flex flex-column align-center justify-center"
            v-else-if="$vuetify.display.mdAndDown"
          >
            <div
              :class="
                load == true
                  ? 'header-item animate1 d-flex align-center justify-center pa-4'
                  : 'header-item d-flex align-center justify-center pa-4'
              "
            >
              <img src="/img/icon/logo-sdk.png" alt="" class="header-img-md" />
              <div class="header-item-text weight--700 ml-2">TKK</div>
            </div>
            <div
              :class="
                load == true
                  ? 'header-item animate1 d-flex align-center justify-center pa-4'
                  : 'header-item d-flex align-center justify-center pa-4'
              "
            >
              <img
                src="/img/icon/logo-sdk.png"
                alt=""
                class="header-img-md"
                height="90px"
              />
              <div class="header-item-text weight--700 ml-2">SDK</div>
            </div>
            <div
              :class="
                load == true
                  ? 'header-item animate1 d-flex align-center justify-center pa-4'
                  : 'header-item d-flex align-center justify-center pa-4'
              "
            >
              <img
                src="/img/icon/logo-smpk.png"
                alt=""
                class="header-img-md"
                height="90px"
              />
              <div class="header-item-text weight--700 ml-2">SMPK</div>
            </div>
          </div>
          <div class="d-flex align-center justify-center animate" v-else>
            <div
              transition="slide-x-transition"
              :class="load == true ? 'header-item animate1' : 'header-item'"
              @click="navigate(1)"
            >
              <img class="header-item-img" src="/img/home/tkk3.png" alt="" />
              <div class="header-item-text weight--700">TKK</div>
            </div>

            <div
              transition="slide-x-transition"
              :class="load == true ? 'header-item animate2' : 'header-item'"
              @click="navigate(2)"
            >
              <img class="header-item-img" src="/img/home/sdk3.png" alt="" />
              <div class="header-item-text weight--700">SDK</div>
            </div>
            <div
              transition="slide-x-transition"
              :class="load == true ? 'header-item animate3' : 'header-item'"
              @click="navigate(3)"
            >
              <img class="header-item-img" src="/img/home/smpk3.png" alt="" />
              <div class="header-item-text weight--700">SMPK</div>
            </div>
          </div>
        </div>
      </v-carousel-item>
    </v-carousel>
  </v-sheet>

  <v-sheet class="d-flex justify-center">
    <div class="content-page d-flex flex-column align-center justify-center">
      <div class="text-center text-content-header">
        GROW WITH <br />
        CARE & LOVE
      </div>
    </div>
  </v-sheet>

  <!-- Jarak antara line 184 dan 195 terlalu besar
  Jangan terlalu sering pakai v-sheet -->

  <v-sheet class="d-flex justify-center news-page">
    <!-- Alasannya apa widthnya dispesifikkan begini, apakah pengaruh ke responsivenya juga? -->
    <v-card width="1024px" flat>
      <div class="section-page">
        <div class="section-title">Berita Utama</div>
        <template v-for="(content, index) in news" :key="index">
          <CardsFirstNews v-if="index == 0" :news="content"></CardsFirstNews>
          <CardsNews v-else :news="content"></CardsNews>
          <br />
        </template>
      </div>
    </v-card>
  </v-sheet>
</template>

<!-- <script setup>
// Ini fungsinya apa?
definePageMeta({
  pageTransition: {
    name: "page",
    mode: "out-in",
    onBeforeEnter: (el) => {
      window.scrollTo({ top: 0 });
    },
  },
});

import { onMounted, reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { NewsStore } from "../stores/newsstore";

const newsstore = NewsStore();
const router = useRouter();
const route = useRoute();

const props = defineProps({
  foo: { type: String, required: true },
  bar: Number,
});

let slidepage = ref(true);

const data = reactive({
  name: "",
  password: "",
  hovered: false,
  load: true,
  slidepage: 0,
  urlimg: "/img/media/slidehome/slide2.jpg",
  color: "red",
  headerimg: [
    {
      nama: "slide1",
      urlimg: "/img/media/slidehome/slide1.jpg",
    },
    {
      nama: "slide2",
      urlimg: "/img/media/slidehome/slide2.jpg",
    },
    {
      nama: "slide3",
      urlimg: "/img/media/slidehome/slide3.jpg",
    },
    {
      nama: "slide4",
      urlimg: "/img/media/slidehome/slide4.jpg",
    },
    {
      nama: "slide5",
      urlimg: "/img/media/slidehome/slide5.jpg",
    },
    {
      nama: "slide6",
      urlimg: "/img/media/slidehome/slide6.jpg",
    },
  ],
});

if (!newsstore.alreadyfetch) {
  //dispatch function
}
let news = computed(() => {
  const getCurrentNews = newsstore.news;
  return getCurrentNews;
});
// biasakan kasih jarak

function navigate(index) {
  if (index == 1) {
    router.push("/department/tkk");
  } else if (index == 2) {
    router.push("/department/sdk");
  } else if (index == 3) {
    router.push("/department/smpk");
  }
}

watch(
  () => slidepage,
  (count) => {
    load = false;
  }
);

onMounted(() => {
  window.scrollTo({ top: 0 });
});
</script> -->

<!-- format scriptnya harus mengikuti yang ini, karena
penggunaannya yang secara javascript sudah menjadi standar disini -->
<script>
import { NewsStore } from "../stores/newsstore";
export default {
  name: "Home",
  data() {
    return {
      name: "",
      password: "",
      hovered: false,
      load: true,
      slidepage: 0,
      urlimg: "/img/media/slidehome/slide2.jpg",
      color: "red",
      headerimg: [
        {
          nama: "slide1",
          urlimg: "/img/media/slidehome/slide1.jpg",
        },
        {
          nama: "slide2",
          urlimg: "/img/media/slidehome/slide2.jpg",
        },
        {
          nama: "slide3",
          urlimg: "/img/media/slidehome/slide3.jpg",
        },
        {
          nama: "slide4",
          urlimg: "/img/media/slidehome/slide4.jpg",
        },
        {
          nama: "slide5",
          urlimg: "/img/media/slidehome/slide5.jpg",
        },
        {
          nama: "slide6",
          urlimg: "/img/media/slidehome/slide6.jpg",
        },
      ],
    };
  },
  async fetch() {
    // try {
    //   const response = await this.$axios.$get("api/stories/home-contents");
    //   this.banners = response.banners;
    //   this.trendingList = response.trendingList;
    //   this.profVideos = response.profVideos;
    //   this.majorVideos = response.majorVideos;
    //   this.induVideos = response.induVideos;
    //   this.poShowVideos = response.poShowVideos;
    //   this.dualCombinations = response.dualCombinations;
    //   const lang = this.$i18n.locale;
    //   if (this.$cookies.get("story-profile")) {
    //     const response2 = await this.$axios.$get(
    //       "api/stories/profiles/home/recommendations/" + lang,
    //       {
    //         headers: {
    //           Authorization:
    //             "Bearer " + this.$cookies.get("story-profile").profileToken,
    //         },
    //       }
    //     );
    //     // console.log(response2)
    //     this.recommendationList = response2;
    //   }
    // } catch (error) {
    //   console.log(error);
    //   throw error;
    // }
  },
  head() {
    return {
      title: "Home",
    };
  },
  computed: {
    // penggunaan store yang standar akan diajarkan nanti
    news() {
      const getCurrentNews = NewsStore().news;
      return getCurrentNews;
    },
  },
  methods: {
    navigate(index) {
      if (index == 1) {
        this.$router.push("/department/tkk");
      } else if (index == 2) {
        this.$router.push("/department/sdk");
      } else if (index == 3) {
        this.$router.push("/department/smpk");
      }
    },
  },
  mounted() {
    window.scrollTo({ top: 0 });
  },
  // kalau bisa, gak usah pakai watch ini
  //  karena cukup tricky
  // antara dihapus atau coba convert ke computed
  watch: {
    slidepage(count) {
      console.log("masuk");
      this.load = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@keyframes floating {
  from {
    transform: translate(-10%, 0px);
    opacity: 0;
  }
  65% {
    transform: translate(0, 0px);
  }
  to {
    transform: translate(0%, 0px);
    opacity: 1;
  }
}
.animate1 {
  animation-name: floating;
  animation-duration: 2s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
}
.animate2 {
  animation-name: floating;
  animation-duration: 4s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
}
.animate3 {
  animation-name: floating;
  animation-duration: 6s;
  animation-iteration-count: 1;
  animation-timing-function: ease-in-out;
}
.section-page {
  padding: 2rem;
}
.section-title {
  font-size: 2rem;
  margin: 0 auto;
  padding-bottom: 1rem;
  font-weight: 700;
  line-height: 1.4;
  font-style: normal;
  @include phone {
    font-size: 19px;
  }
}
.container-header {
  top: 40%;
}
.header-item {
  padding: 2rem;
  transition: transform 0.2s;
  @include phone {
    padding: 0rem;
    display: flex;
    justify-items: center;
    flex-direction: column;
    align-items: center;
  }
}
.header-item:hover {
  transform: scale(1.1);
  cursor: grabbing;
}
.header-item-img {
  width: 150px;
  @include phone {
    height: 60px;
    width: auto;
  }
}
.header-item-text {
  color: white;
  text-align: center;
  font-style: normal;
  font-size: 40px;
  @include phone {
    font-size: 20px;
  }
}
.header-img-md {
  height: 90px;
}
.content-page {
  background-color: white;
  padding: 48px 0px;
  margin-bottom: 64px;
}
.news-page {
  background-color: white;
  padding: 48px 0px;
}
.text-content-header {
  color: $primary-color;
  font-size: 48px;
  line-height: 1.4;
  font-weight: 700;
  @include phone {
    font-size: 24px;
  }
}
.text-dupe {
  font-family: "Open Sans";
  font-weight: 500;
  font-size: 24px;
  color: black;
}
@media (max-width: 60em) {
  .header-item-img {
    height: 60px;
    width: auto;
  }
}
</style>
