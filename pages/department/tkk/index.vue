<template>
  <PartsHeaderCarousel
    :headerimg="headerimg"
    logo="/img/icon/logo-tkk-glow.png"
  ></PartsHeaderCarousel>

  <PartsDepartmentNavigation
    :navigations="navigations"
    :navigatepage="navigatepage"
  ></PartsDepartmentNavigation>

  <v-sheet class="d-flex justify-center">
    <div class="content-news">
      <PartsBlockText :blocktext="blocktext"></PartsBlockText>
      <div class="section-page">
        <div class="section-title">Berita Terkini</div>
        <template v-for="(content, index) in news" :key="content.slug">
          <CardsFirstNews v-if="index == 0" :news="content"></CardsFirstNews>
          <CardsNews v-else :news="content"></CardsNews>
          <br />
        </template>
      </div>
      <div class="section-page">
        <div class="gukar-title">Daftar Guru & Karyawan</div>
        <div class="d-flex align-center justify-center">
          <PartsGukarCarousel :items="gukar" />
        </div>
      </div>
    </div>
  </v-sheet>
</template>

<script setup>
useHead({
  title: "TKK Wijana Jombang",
  meta: [{ name: "description", content: "TKK Wijana Jombang" }],
  bodyAttrs: {
    class: "test",
  },
});

// definePageMeta({
//   pageTransition: {
//     name: "page",
//     mode: "out-in",
//     onBeforeEnter: (el) => {
//       window.scrollTo({ top: 0 });
//     },
//   },
// });
import { reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { NewsStore } from "../stores/newsstore";
const newsstore = NewsStore();
const router = useRouter();
const route = useRoute();
const blocktext =
  "SDK Wijana adalah lembaga pendidikan dasar dengan sejarah 60 tahun lebih mendidik anak-anak Jombang menjadi kader Gereja dan masyarakat.";
const headerimg = [
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
];
const gukar = [
  {
    nama: "ANTIKA PRIMANINGRUM",
    jabatan: "GURU KELAS",
    imgurl: "/img/gukar/tkk/antika.jpg",
  },
  {
    nama: "BEDJO",
    jabatan: "TUKANG KEBUN",
    imgurl: "/img/gukar/tkk/bedjo.jpg",
  },
  {
    nama: "VALENTINA SUWITIN. S.P.D",
    jabatan: "KEPALA SEKOLAH",
    imgurl: "/img/gukar/tkk/valentina.jpg",
  },
  {
    nama: "DWI WIJI RAHAYI",
    jabatan: "GURU KELAS",
    imgurl: "/img/gukar/tkk/dwi.jpg",
  },
  {
    nama: "MONICA AGUS TININGSIH",
    jabatan: "GURU KELAS",
    imgurl: "/img/gukar/tkk/monica.jpg",
  },
  {
    nama: "SHINTA NOVIANA",
    jabatan: "GURU KELAS",
    imgurl: "/img/gukar/tkk/shinta.jpg",
  },
  {
    nama: "SOELISTYONINGSIH",
    jabatan: "GURU KELAS",
    imgurl: "/img/gukar/tkk/soel.jpg",
  },
];
const navigations = [
  {
    text: "TENTANG KAMI",
    url: "/department/tkk/about",
  },
  {
    text: "PROGRAM",
    url: "/department/tkk/program",
  },
  {
    text: "PENDAFTARAN",
    url: "/department/tkk/pendaftaran",
  },
  {
    text: "UNTUK ORANG TUA",
    url: "/department/tkk/orangtua",
  },
  {
    text: "BERITA",
    url: "/department/tkk",
  },
];
let news = computed(() => {
  const getCurrentNews = newsstore.news.filter((x) => {
    return x.type.toLowerCase().includes("smpk");
  });

  return getCurrentNews;
});
function navigatepage(url) {
  router.push({
    path: url, // Replace 123 with the actual value you want to pass
  });
}
onMounted(() => {
  window.scrollTo({ top: 0 });
  console.log(headerimg);
});
</script>

<style lang="scss" scoped>
.gukar-title {
  font-size: 2rem;
  margin: 0 auto;
  padding-bottom: 1rem;
  font-weight: 700;
  font-style: normal;
}
.section-page {
  padding-bottom: 3rem;
}
.content-news {
  padding: 2rem 1rem 5rem;
  min-height: 70vh;
  max-width: 1080px;
  margin: auto;
  background-color: #f7f7f7;
}
.section-title {
  font-size: 2rem;
  margin: 0 auto;
  padding-bottom: 1rem;
  font-weight: 700;
  line-height: 1.4;
  font-style: normal;
}
</style>
