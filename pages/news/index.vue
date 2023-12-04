<template>
  <v-sheet class="d-flex justify-center">
    <div class="news-page">
      <div class="pb-4">
        <ul class="breadcrumbs">
          <li><a href="/">HOME</a></li>
          <li><a> / </a></li>
          <li><b>NEWS</b></li>
        </ul>
      </div>
      <div class="page-title">NEWS</div>
      <div class="page-content">
        <v-row class="pa-4">
          <v-col>
            <InputsTextField
              v-model="data.category"
              :selectitems="data.categoryitem"
              label="Category"
              name="selectedcategory"
              type="selected"
              placeholder=""
            />
          </v-col>
          <v-col>
            <InputsTextField
              v-model="data.Sort"
              :selectitems="data.sortitem"
              label="Sort"
              name="selectedsort"
              type="selected"
              :inputfunc="sortnews"
              placeholder=""
            />
          </v-col>
          <v-col>
            <InputsTextField
              v-model="data.Search"
              label="Search"
              name="search"
              type="field"
              placeholder="ketik Untuk Mencari"
              :inputfunc="searchnews"
            />
          </v-col>
        </v-row>
        <div class="pa-4 listnews">
          <template v-for="(content, index) in data.filterednews" :key="index">
            <CardsNews :news="content"></CardsNews>
            <br />
          </template>
        </div>
      </div>
    </div>
  </v-sheet>
</template>

<script setup>
import { reactive, ref } from "vue";

const data = reactive({
  category: "",
  Sort: "",
  Search: "",
  categoryitem: [
    { state: "All Category", value: 1 },
    { state: "Pencapaian", value: 2 },
    { state: "Kejadian", value: 3 },
    { state: "Pengumuman", value: 4 },
  ],
  sortitem: [
    { state: "Title A-Z", value: 1 },
    { state: "Title Z-A", value: 2 },
    { state: "Latest Date", value: 3 },
    { state: "Oldest Date", value: 4 },
  ],
  filterednews: [
    {
        id: "UWD1",
        type: "TKK",
        date: "11 May 2022",
        imgurl: "/img/news/tkk/ppdb_tk_wijana.jpg",
        header: "PPDB 2022",
        slug:"ppdb-2022",
        detail: "Menerima Peserta Didik Baru 2022",
      },
      {
        id: "UWD2",
        type: "TKK",
        date: "14 Jan 2021",
        imgurl: "/img/news/general/IMG-20201014-WA0010.jpg",
        header: "PPDB PENERIMAAN SISWA BARU",
        slug:"ppdb-penerimaan-siswa-baru",
        detail: "Penerimaan Pendaftaran tahun ajaran baru 2021",
      },
      {
        id: "UWD3",
        type: "SMPK",
        date: "10 Nov 2020",
        imgurl: "/img/news/smpk/Screen_Shot_2020-11-10_at_185650.jpg",
        header: "Selamat kepada Nathan Philbert Ngo",
        slug:"selamat-kepada-nathan-philbert-ngo",
        detail:
          "Selamat atas keberhasilannya mendapatakn MERIT AWARD pada Global Business Mathematics Olympiad 2020",
      },
  ],
  allnews: [
   {
        id: "UWD1",
        type: "TKK",
        date: "11 May 2022",
        imgurl: "/img/news/tkk/ppdb_tk_wijana.jpg",
        header: "PPDB 2022",
       slug:"ppdb-2022",
        detail: "Menerima Peserta Didik Baru 2022",
      },
      {
        id: "UWD2",
        type: "TKK",
        date: "14 Jan 2021",
        imgurl: "/img/news/general/IMG-20201014-WA0010.jpg",
        header: "PPDB PENERIMAAN SISWA BARU",
        slug:"ppdb-penerimaan-siswa-baru",
        detail: "Penerimaan Pendaftaran tahun ajaran baru 2021",
      },
      {
        id: "UWD3",
        type: "SMPK",
        date: "10 Nov 2020",
        imgurl: "/img/news/smpk/Screen_Shot_2020-11-10_at_185650.jpg",
        header: "Selamat kepada Nathan Philbert Ngo",
        slug:"selamat-kepada-nathan-philbert-ngo",
        detail:
          "Selamat atas keberhasilannya mendapatakn MERIT AWARD pada Global Business Mathematics Olympiad 2020",
      },
  ],
});
function searchnews(word) {
  //--------Search
  data.filterednews = data.allnews.filter(function (item) {
    return item.header.toLowerCase().includes(word.toLowerCase());
  });
}
function sortnews(selected) {
  console.log(selected);
  if (selected) {
    if (selected.value == 1) {
      data.filterednews.sort(function (a, b) {
        var nameA = a.header.toLowerCase(),
          nameB = b.header.toLowerCase();
        if (nameA < nameB)
          //sort string ascending
          return -1;
        if (nameA > nameB) return 1;
        return 0; //default return value (no sorting)
      });
    } else if (selected.value == 2) {
      data.filterednews.sort(function (a, b) {
        var nameA = a.header.toLowerCase(),
          nameB = b.header.toLowerCase();
        if (nameA > nameB)
          //sort string ascending
          return -1;
        if (nameA < nameB) return 1;
        return 0; //default return value (no sorting)
      });
    } else if (selected.value == 3) {
      data.filterednews.sort(function (a, b) {
        var dateA = new Date(a.date),
          dateB = new Date(b.date);
        return dateA - dateB; //sort by date ascending
      });
    } else if (selected.value == 4) {
      data.filterednews.sort(function (a, b) {
        var dateA = new Date(a.date),
          dateB = new Date(b.date);
        return dateB - dateA; //sort by date ascending
      });
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  font-weight: normal;
  color: $primary-color;
  text-decoration: none;
  font-size: 11px;
}
b {
  font-weight: normal;
  color: #0a0a0a;
  text-decoration: none;
  font-size: 11px;
}
.listnews {
  background-color: rgba(0, 0, 0, 0.05);
}

li {
  display: inline;
  padding: 8px;
}
.news-page {
  padding: 2rem 1rem 5rem;
  min-height: 70vh;
  max-width: 960px;
  margin: auto;
  padding-top: 90px;
  width: 100vw;
}
.page-title {
  color: #666;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  font-size: 3rem;
  margin-bottom: 0.5rem;
}
.page-content {
  font-weight: normal;
  line-height: 1.5;
  color: #0a0a0a;
  font-size: 1rem;
}
p {
  margin-bottom: 1rem;
  font-size: inherit;
  line-height: 1.6;
  text-rendering: optimizeLegibility;
}
@media (max-width: 40em) {
  img {
    height: auto;
    width: 90vw;
    object-fit: cover;
  }

  .page-title {
    font-size: 1.5rem;
  }
}
</style>

     