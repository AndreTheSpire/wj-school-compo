<template>
  <v-sheet class="d-flex justify-center">
    <div class="news-page">
      <div class="pb-4">
        <ul class="breadcrumbs">
          <li><NuxtLink :to="`/`">HOME</NuxtLink></li>
          <li><a> / </a></li>
          <li><b>BERITA</b></li>
        </ul>
      </div>

      <div class="page-title">BERITA</div>

      <div class="page-content">
        <v-row class="pa-4">
          <v-col cols="6" sm="4">
            <InputsTextField
              v-model="category"
              :selectitems="categoryitem"
              label="Kategori"
              name="selectedcategory"
              type="selected"
              placeholder=""
            />
          </v-col>

          <v-col cols="6" sm="4">
            <InputsTextField
              v-model="Sort"
              :selectitems="sortitem"
              label="Urutan"
              name="selectedsort"
              type="selected"
              :inputfunc="sortnews"
              placeholder=""
            />
          </v-col>

          <v-col cols="12" sm="4">
            <InputsTextField
              v-model="Search"
              label="Cari"
              name="search"
              type="field"
              placeholder="ketik Untuk Mencari"
              :inputfunc="searchnews"
            />
          </v-col>
        </v-row>
        <div class="pa-4 listnews">
          <template v-for="content in showpost" :key="content.slug">
            <CardsNews :news="content"></CardsNews>
            <br />
          </template>

          <v-pagination v-model="currentPage" :length="rows"></v-pagination>
        </div>
      </div>
    </div>
  </v-sheet>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
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

console.log("data ini nongol ga ya ");

const datapost = ref(posts.value);
let filterpost = ref(posts.value);

let currentPage = ref(1);
let category = ref("");
let Sort = ref("");
let Search = ref("");
const categoryitem = [
  { state: "Semua Category", value: 1 },
  { state: "Pencapaian", value: 2 },
  { state: "Kejadian", value: 3 },
  { state: "Pengumuman", value: 4 },
];
const sortitem = [
  { state: "judul A-Z", value: 1 },
  { state: "Judul Z-A", value: 2 },
  { state: "Terbaru", value: 3 },
  { state: "Terlama", value: 4 },
];

let rows = computed(() => {
  return Math.ceil(filterpost.value.length / 5);
});
let showpost = computed(() => {
  const indexMin = (currentPage.value - 1) * 5;
  const indexMax = indexMin + 5;
  return filterpost.value.filter(
    (x, index) => index >= indexMin && index < indexMax
  );
});
// console.log("show");
// console.log(showpost);

function searchnews(word) {
  filterpost.value = datapost.value.filter(function (item) {
    return item.title.toLowerCase().includes(word.toLowerCase());
  });
}
function sortnews(selected) {
  if (selected) {
    if (selected.value == 1) {
      filterpost.value.sort(function (a, b) {
        var nameA = a.title.toLowerCase(),
          nameB = b.title.toLowerCase();
        if (nameA < nameB)
          //sort string ascending
          return -1;
        if (nameA > nameB) return 1;
        return 0; //default return value (no sorting)
      });
    } else if (selected.value == 2) {
      filterpost.value.sort(function (a, b) {
        var nameA = a.title.toLowerCase(),
          nameB = b.title.toLowerCase();
        if (nameA > nameB)
          //sort string ascending
          return -1;
        if (nameA < nameB) return 1;
        return 0; //default return value (no sorting)
      });
    } else if (selected.value == 3) {
      filterpost.value.sort(function (a, b) {
        var dateA = new Date(a.publishDate),
          dateB = new Date(b.publishDate);
        return dateB - dateA; //sort by date ascending
      });
    } else if (selected.value == 4) {
      filterpost.value.sort(function (a, b) {
        var dateA = new Date(a.publishDate),
          dateB = new Date(b.publishDate);
        return dateA - dateB; //sort by date ascending
      });
    }
  }
}

useHead({
  title: "NEWS",
  meta: [
    { name: "description", content: "daftar news di Sekolah Wijana Jombang" },
  ],
  bodyAttrs: {
    class: "test",
  },
});

// definePageMeta({
//   pageTransition: false,
// });
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
  @include phone {
    font-size: 1.5rem;
  }
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
img {
  @include phone {
    weight: auto;
    width: 90vw;
    object-fit: cover;
  }
}
</style>
