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
          <template v-for="(content, index) in filterednews" :key="index">
            <CardsNews :news="content"></CardsNews>
            <br />
          </template>
        </div>
      </div>
    </div>
  </v-sheet>
</template>

<script>
import { NewsStore } from "../stores/newsstore";
// useHead({
//   title: "News",
//   meta: [
//     {
//       name: "description",
//       content: "Berita Terikini di sekolah wijana jombang",
//     },
//   ],
//   bodyAttrs: {
//     class: "test",
//   },
// });

definePageMeta({
  pageTransition: {
    name: "slide",
    mode: "out-in",
    onBeforeEnter: (el) => {
      window.scrollTo({ top: 0 });
    },
  },
});
export default {
  data: () => ({
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
    filterednews: NewsStore().news,
  }),
  computed: {
    // isSSR() {
    //   console.log(process.server);
    //   return process.server;
    // },
  },
  methods: {
    searchnews(word) {
      //--------Search

      this.filterednews = NewsStore().news.filter(function (item) {
        return item.header.toLowerCase().includes(word.toLowerCase());
      });
    },
    sortnews(selected) {
      console.log(selected);
      if (selected) {
        if (selected.value == 1) {
          this.filterednews.sort(function (a, b) {
            var nameA = a.header.toLowerCase(),
              nameB = b.header.toLowerCase();
            if (nameA < nameB)
              //sort string ascending
              return -1;
            if (nameA > nameB) return 1;
            return 0; //default return value (no sorting)
          });
        } else if (selected.value == 2) {
          this.filterednews.sort(function (a, b) {
            var nameA = a.header.toLowerCase(),
              nameB = b.header.toLowerCase();
            if (nameA > nameB)
              //sort string ascending
              return -1;
            if (nameA < nameB) return 1;
            return 0; //default return value (no sorting)
          });
        } else if (selected.value == 3) {
          this.filterednews.sort(function (a, b) {
            var dateA = new Date(a.date),
              dateB = new Date(b.date);
            return dateA - dateB; //sort by date ascending
          });
        } else if (selected.value == 4) {
          this.filterednews.sort(function (a, b) {
            var dateA = new Date(a.date),
              dateB = new Date(b.date);
            return dateB - dateA; //sort by date ascending
          });
        }
      }
    },
  },
};
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
