<template>
  <PartsHeaderCarousel
    :headerimg="data.headerimg"
    logo="/img/icon/logo-sdk-glow.png"
  ></PartsHeaderCarousel>

  <PartsDepartmentNavigation
    :navigations="data.navigations"
    :navigatepage="navigatepage"
  ></PartsDepartmentNavigation>

  <v-sheet class="d-flex justify-center">
    <div class="content-news">
       <PartsBlockText :blocktext="data.blocktext"></PartsBlockText>
      <div class="section-page" v-if="data.news.size > 0">
        <div class="section-title">Berita Terkini</div>
        <template v-for="(content, index) in data.news" :key="index">
          <CardsFirstNews v-if="index == 0" :news="content"></CardsFirstNews>
          <CardsNews v-else :news="content"></CardsNews>
          <br />
        </template>
      </div>
      <div class="section-page">
        <div class="gukar-title">Daftar Guru & Karyawan</div>
        <div class="d-flex align-center justify-center">
          <PartsGukarCarousel :items="data.gukar" />
        </div>
      </div>
    </div>
  </v-sheet>
</template>

<script setup>
useHead({
  title:'SDK Wijana Jombang',
  meta: [
    { name: 'description', content: 'SDK Wijana Jombang' }
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
//       window.scrollTo({ top: 0 });
//     },
//   },
// });
import { reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const data = reactive({
  blocktext:
    "SDK Wijana adalah lembaga pendidikan dasar dengan sejarah 60 tahun lebih mendidik anak-anak Jombang menjadi kader Gereja dan masyarakat.",
  urlimg: "/img/media/slidehome/slide2.jpg",
  profile: ProfileStore().profile,

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
  gukar: [
    {
      nama: "ANISA PURWANINGSIH, S.Pd",
      jabatan: "GURU KELAS V-A",
      imgurl: "/img/gukar/sdk/Anisa_Purwaningsih_S_pd.jpg",
    },
    {
      nama: "ARIES KRISTYANTO, S.Pd",
      jabatan: "Kepala Sekolah",
      imgurl: "/img/gukar/sdk/Aries_Kristyanto_SPd.jpg",
    },
    {
      nama: "ARIS SETIYAWAN.",
      jabatan: "STAFF TATA USAHA",
      imgurl: "/img/gukar/sdk/Aris_Setiyawan.jpg",
    },
    {
      nama: "BENEDICTA BANJARIANI, S.Pd",
      jabatan: "GURU KELAS II",
      imgurl: "/img/gukar/sdk/Benedicta_Banjariani_S_pd_0mCaWmt.jpg",
    },
    {
      nama: "BETTY APPRIN ANDARI",
      jabatan: "PEMBANTU UMUM",
      imgurl: "/img/gukar/sdk/BM_Pujiani.jpg",
    },
    {
      nama: "C.B SAMIDI",
      jabatan: "GURU BAHASA JAWA",
      imgurl: "/img/gukar/sdk/CB_Samidi.jpg",
    },
    {
      nama: "FITA RINA SURYANI",
      jabatan: "STAFF TATA USAHA",
      imgurl: "/img/gukar/sdk/Fita_Rina_Suryani.jpg",
    },
    {
      nama: "KUSHARYANTI",
      jabatan: "PETUGAS UKS",
      imgurl: "/img/gukar/sdk/Kusharyanti.jpg",
    },
    {
      nama: "MUJIB HARIADI, S.Pd",
      jabatan: "GURU KELAS IV",
      imgurl: "/img/gukar/sdk/Mujib_Hariadi_S_pd.jpg",
    },
    {
      nama: "NANING WINARSIH",
      jabatan: "PETUGAS PERPUSTAKAAN",
      imgurl: "/img/gukar/sdk/Naning_Winarsih.jpg",
    },
    {
      nama: "PRASOJO ADI WIBOWO, S.Pd",
      jabatan: "GURU PENDIDIKAN AGAMA",
      imgurl: "/img/gukar/sdk/Prasojo_Adi_Wibowo_S_pd.jpg",
    },
    {
      nama: "SANTHA NUGRAHENI, S.Pd",
      jabatan: "GURU KELAS 3-B",
      imgurl: "/img/gukar/sdk/Santha_Nugraheni_S_pd.jpg",
    },
    {
      nama: "SULISWANTO, S.Pd",
      jabatan: "GURU KELAS V-B",
      imgurl: "/img/gukar/sdk/Suliswanto_S_pd.jpg",
    },
    {
      nama: "VINA ANDERITA, S.Pd",
      jabatan: "GURU KELAS VI",
      imgurl: "/img/gukar/sdk/Vina_Anderita_S_pd.jpg",
    },
    {
      nama: "YOHANES AGUS PRASETYO, S.Pd",
      jabatan: "GURU PENJASKES",
      imgurl: "/img/gukar/sdk/Yohanes_Agus_Prasetyo_S_pd_RfbCH91.jpg",
    },
  ],
  news: [],
  navigations: [
    {
      text: "TENTANG KAMI",
      url: "/department/sdk/about",
    },
    {
      text: "PROGRAM",
      url: "/department/sdk/program",
    },
    {
      text: "PENDAFTARAN",
      url: "/department/sdk/pendaftaran",
    },
    {
      text: "UNTUK ORANG TUA",
      url: "/department/sdk/orangtua",
    },
    {
      text: "BERITA",
      url: "/department/sdk",
    },
  ],
});

function navigatepage(url) {
  router.push({
    path: url, // Replace 123 with the actual value you want to pass
  });
}
onMounted(()=>{
    window.scrollTo({ top: 0});
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