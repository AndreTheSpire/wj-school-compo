<template>
  <PartsHeaderCarousel
    :headerimg="headerimg"
    logo="/img/icon/logo-smpk-glow.png"
  ></PartsHeaderCarousel>

  <PartsDepartmentNavigation
    :navigations="navigations"
    :navigatepage="navigatepage"
  ></PartsDepartmentNavigation>

  <v-sheet class="d-flex justify-center">
    <div class="content-news">
      <PartsBlockText :blocktext="blocktext"></PartsBlockText>

      <div class="section-page">
        <div class="page-subtitle">Berita Terkini</div>
        <template v-for="(content, index) in news" :key="content.slug">
          <CardsFirstNews v-if="index == 0" :news="content"></CardsFirstNews>
          <CardsNews v-else :news="content"></CardsNews>
          <br />
        </template>
      </div>
      <div class="section-page">
        <div class="page-subtitle">Daftar Guru & Karyawan</div>
        <div class="d-flex align-center justify-center">
          <PartsGukarCarousel :items="gukar" />
        </div>
      </div>
    </div>
  </v-sheet>
</template>

<script setup>
useHead({
  title: "SMPK Wijana Jombang",
  meta: [{ name: "description", content: "SMPK Wijana Jombang" }],
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
    nama: "AGUSTINUS VERDIANTO",
    jabatan: "STAFF TATA USAHA",
    imgurl: "/img/gukar/smpk/Agustinus_Verdianto.jpg",
  },
  {
    nama: "AV. NINUK DWI SULISTYOWATI, S.H.",
    jabatan: "PERPUSTAKAAN",
    imgurl: "/img/gukar/smpk/AV_Ninuk_Dwi_Sulistyowati_SH.jpg",
  },
  {
    nama: "CORNELLIUS EKO ARIANTO, S.Pd.",
    jabatan: "GURU AGAMA, PJOK",
    imgurl: "/img/gukar/smpk/Cornellius_Eko_Arianto_SPd.jpg",
  },
  {
    nama: "dra. ENDAH PURWANI, M.Pd.",
    jabatan: "KEPALA SEKOLAH",
    imgurl: "/img/gukar/smpk/Dra_Endah_Purwani_MPd.jpg",
  },
  {
    nama: "DWI RETNO RUTH DAMAYANTI, S.Pd.",
    jabatan: "GURU MATEMATIKA",
    imgurl: "/img/gukar/smpk/Dwi_Retno_Ruth_Damayanti_SPd.jpg",
  },
  {
    nama: "EKO KRISTINA RAHAYU, S.Sn.",
    jabatan: "GURU PPKn, SENI BUDAYAS",
    imgurl: "/img/gukar/smpk/Eko_Kristina_Rahayu_SSn.jpg",
  },
  {
    nama: "IMELDA KURNIAWAN",
    jabatan: "STAFF TATA USAHA",
    imgurl: "/img/gukar/smpk/Imelda_Kurniawan.jpg",
  },
  {
    nama: "KUSWARI",
    jabatan: "PESURUH",
    imgurl: "/img/gukar/smpk/kuswari.jpg",
  },
  {
    nama: "PRISKA YULIA WARDANI, S.Psi",
    jabatan: "BIMBINGAN KONSELING",
    imgurl: "/img/gukar/smpk/Priska_Yulia_Wardani_SPsi.jpg",
  },
  {
    nama: "ROBBYANAL AGUNG NUGROHO, S.Pd.",
    jabatan: "GURU IPA, PRAKARYA",
    imgurl: "/img/gukar/smpk/Robbyanal_Agung_Nugroho_SPd.jpg",
  },
  {
    nama: "SOFIA FITRI IKA VERAWATI, S.E.",
    jabatan: "BENDAHARA SEKOLAH",
    imgurl: "/img/gukar/smpk/Sofia_Fitri_Ika_Verawati_SE.jpg",
  },
];
const navigations = [
  {
    text: "TENTANG KAMI",
    url: "/department/smpk/about",
  },
  {
    text: "PROGRAM",
    url: "/department/smpk/program",
  },
  {
    text: "PENDAFTARAN",
    url: "/department/smpk/pendaftaran",
  },
  {
    text: "UNTUK ORANG TUA",
    url: "/department/smpk/orangtua",
  },
  {
    text: "BERITA",
    url: "/department/smpk",
  },
];
const runTimeConfig = useRuntimeConfig();
const { data: posts } = await useFetch(
  "https://api.imavi.org/imavi/news/get-all",
  {
    headers: {
      Id: runTimeConfig.APP_ID,
      Secret: runTimeConfig.APP_SECRET,
      partner: runTimeConfig.PARTNER,
    },
  }
);

let news = computed(() => {
  const getCurrentNews = posts.value;
  const indexMin = 0;
  const indexMax = 3;
  return getCurrentNews.filter(
    (x, index) => index >= indexMin && index < indexMax
  );
});
// let news = computed(() => {
//   const getCurrentNews = newsstore.news.filter((x) => {
//     return x.type.toLowerCase().includes("smpk");
//   });

//   return getCurrentNews;
// });
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
<style lang="scss" scoped></style>
