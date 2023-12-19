<template>
  <v-sheet class="d-flex justify-center">
    <div class="news-page">
      <div class="pb-4">
        <ul class="breadcrumbs">
          <li><NuxtLink :to="`/`">HOME</NuxtLink></li>
          <li><a> / </a></li>
          <li><b>NEWS</b></li>
        </ul>
      </div>
      <div class="page-title">NEWS</div>
      <div class="page-content">
        <v-row class="pa-4">
          <v-col>
            <InputsTextField
              v-model="category"
              :selectitems="categoryitem"
              label="Category"
              name="selectedcategory"
              type="selected"
              placeholder=""
            />
          </v-col>
          <v-col>
            <InputsTextField
              v-model="Sort"
              :selectitems="sortitem"
              label="Sort"
              name="selectedsort"
              type="selected"
              :inputfunc="sortnews"
              placeholder=""
            />
          </v-col>
          <v-col>
            <InputsTextField
              v-model="Search"
              label="Search"
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
import { NewsStore } from "../stores/newsstore";

const newsstore = NewsStore();
const router = useRouter();
const route = useRoute();
const runTimeConfig = useRuntimeConfig();
const posts = await fetch("/.netlify/functions/test-view", {
  lazy: true,
});
const datapost = ref(await posts.json());
let filterpost = ref(datapost.value);
console.log("post");
console.log(filterpost);
let currentPage = ref(1);
let category = ref("");
let Sort = ref("");
let Search = ref("");
const categoryitem = [
  { state: "All Category", value: 1 },
  { state: "Pencapaian", value: 2 },
  { state: "Kejadian", value: 3 },
  { state: "Pengumuman", value: 4 },
];
const sortitem = [
  { state: "Title A-Z", value: 1 },
  { state: "Title Z-A", value: 2 },
  { state: "Latest Date", value: 3 },
  { state: "Oldest Date", value: 4 },
];
let datafetch = ref(false);
let dataheader = reactive({
  title: "Error! News Doesnt Found",
  desc: "Error! News Doesnt Found",
});
let news = computed(() => {
  const getCurrentNews = newsstore.news.find((x) => {
    return x.slug === route.params.slug;
  });

  return getCurrentNews;
});
let rows = computed(() => {
  return Math.ceil(filterpost.value.length / 5);
});
let showpost = computed(() => {
  const indexMin = (currentPage.value - 1) * 5;
  const indexMax = indexMin + 5;

  return filterpost.value.slice(indexMin, indexMax);
});
console.log("show");
console.log(showpost);

function searchnews(word) {
  //--------Search
  console.log("masuk" + word);
  filterpost.value = datapost.value.filter(function (item) {
    return item.title.toLowerCase().includes(word.toLowerCase());
  });
  console.log(filterpost.value);
  console.log(showpost);
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
    // const indexMin = (this.currentPage - 1) * 5;
    // const indexMax = indexMin + 5;
    // this.showpost = this.filterpost.filter(
    //   (x, index) => index >= indexMin && index < indexMax
    // );
    // this.currentPage = 1;
    console.log(showpost);
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

definePageMeta({
  pageTransition: false,
});
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
