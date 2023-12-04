<template>
  <PartsHeaderCarousel
    :headerimg="data.headerimg"
    logo="/img/icon/logo-smpk-glow.png"
  ></PartsHeaderCarousel>

  <PartsDepartmentNavigation
    :navigations="data.navigations"
    :navigatepage="navigatepage"
  ></PartsDepartmentNavigation>

  <v-sheet class="d-flex justify-center">
    <div class="content-news">
      <PartsBlockText :blocktext="data.blocktext"></PartsBlockText>

      <div class="section-page">
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
import { reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const data = reactive({
  blocktext:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam aspernatur tempore ducimus nemo voluptas, omnis, optio! Illo unde enim odio tempora deserunt provident autem repellat voluptatum distinctio architecto! Animi, veritatis.",
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
  ],
  news: [
    {
      id: "UWD2",
      type: "SMPK",
      date: "10 Nov 2020",
      imgurl: "/img/news/smpk/Screen_Shot_2020-11-10_at_185650.jpg",
      header: "Selamat kepada Nathan Philbert Ngo",
      slug:"selamat-kepada-nathan-philbert-ngo",
      detail:
        "Selamat atas keberhasilannya mendapatakn MERIT AWARD pada Global Business Mathematics Olympiad 2020",
    },
  ],
  navigations: [
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
  ],
});
function navigatepage(url) {
  router.push({
    path: url, // Replace 123 with the actual value you want to pass
  });
}
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