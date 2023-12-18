<template>
  <Head>
    <Title>About TKK Wijana Jombang</Title>
    <Meta name="description" content="semua tentang TKK Wijana Jombang" />
  </Head>
  <v-sheet class="d-flex justify-center">
    <div class="content-page">
      <div class="page-title">TKK TENTANG</div>
      <div class="page-content">
        <p><strong>Sejarah TK Katolik Wijana&nbsp;</strong></p>

        <p>&nbsp;</p>

        <p><img alt="" src="/img/media/contents/tk_wijana4.jpeg" /></p>

        <p>
          <strong
            >Didirikan pada tanggal 8 Januari 1968, sejarah berdirinya TK
            Katolik Wijana Jombang ini diawali dari inisiatif sekelompok ibu-ibu
            yang berkeinginan untuk memberikan tempat belajar, bermain dan
            menimba pengetahuan dasar tentang agama Katolik terutama saat masih
            di usia dini. Mereka ini adalah para ibu yang tergabung dalam
            WKRI&nbsp; (Wanita Katolik Republik Indonesia), GOW Jombang.
            Diantaranya, Margaretha Mariatun (wakil ketua), Ana Fransisca
            Sundari (ketua WKRI), C. Soetilah, Ny. Eddy Sudjiman dan Ibu C.
            Susilo.&nbsp;</strong
          >
        </p>

        <p>
          <strong
            >Bak gayung bersambut, ide ini kemudian ditindaklanjuti oleh Suster
            Lidwina dari Mojokerto. Dan dengan bantuannya, maka ide kemudian
            disampaikan kepada Romo J. Mensvoort untuk merealisasikan keinginan
            ibu-ibu untuk pendirian sekolah itu.</strong
          >
        </p>

        <p><img alt="" src="/img/media/contents/tk_wijana5_KUngBzH.jpeg" /></p>

        <p>
          <strong
            >Namun, memang bukanlah perjalanan mudah. Karena untuk itu masih
            dibutuhkan banyak dana agar pelaksanaan ide itu bisa
            diwujudnyatakan.&nbsp; Maka, tindakan pertama yang dilakukan untuk
            menyambung gagasan tersebut itu adalah dengan mengadakan
            penggalangan dana. Mereka mengadakan bazar, yang menjual aneka macam
            kue dan masakan hasil karya dari mereka sendiri. Salah satu yang
            menjadi andalannya adalah ayam panggang.&nbsp;</strong
          >
        </p>

        <p>
          <strong
            >Selain mengumpulkan uang lewat bazar itu, juga diusahakan meminta
            donasi dari kenalan masing-masing, baik yang berdomisili di Jombang
            maupun Surabaya. Dana yang sudah terkumpul itu diserahkan kepada
            Romo J. Mensvoort, sebagai pengelola dana dan pendamping ibu-ibu
            WKRI dalam proses pendirian TK.&nbsp;</strong
          >
        </p>

        <p>
          <strong
            >Semula, lokasi TK Katolik Wijana adalah berdampingan langsung
            dengan kantor pemerintahan Kabupaten Jombang. Lokasi yang sangat
            strategis, karena berada di jalan protokol tengah kota. Selain itu,
            bangunan tempat berdirinya TK. Katolik Wijana ini jadi satu dengan
            Komplek SD dan SMPK Wijana serta Gereja Katolik Santa Maria
            Jombang.</strong
          >
        </p>

        <p>
          <strong
            ><img alt="" src="/img/media/contents/TK_Wijana01_1_iPmmryd.jpg"
          /></strong>
        </p>

        <p>
          <strong
            >Seiring dengan makin berkembangnya waktu, TKK Wijana ini makin
            diminati oleh para orang tua murid di Jombang. Untuk itulah, dalam
            rangka pengembangan dan perluasan area belajar dan bermain
            anak-anak, sejak Januari 2020 lalu menempati gedung baru di Jl. Cak
            Durasim 1, Jombang.&nbsp;</strong
          >
        </p>

        <p>
          <strong
            ><img alt="" src="/img/media/contents/tk_wijana2.jpeg"
          /></strong>
        </p>
      </div>
    </div>
  </v-sheet>
</template>

<script setup>
useHead({
  title:'About TKK Wijana Jombang',
  meta: [
    { name: 'description', content: 'semua tentang TKK Wijana Jombang' }
  ],
  bodyAttrs: {
    class: 'test'
  },
})

definePageMeta({
  pageTransition: {
    name: "page",
    mode: "out-in",
    onBeforeEnter: (el) => {
      window.scrollTo({ top: 0 });
    },
  },
});
</script>

<style lang="scss" scoped>
p {
  margin-bottom: 1rem;
  font-size: inherit;
  line-height: 1.6;
  text-rendering: optimizeLegibility;
}
img {
  @include phone {
    height: auto;
    width: 90vw;
    object-fit: cover;
  }
}
</style>
