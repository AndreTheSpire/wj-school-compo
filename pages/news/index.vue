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
  pageTransition: false,
});
export default {
  async setup() {
    const runTimeConfig = useRuntimeConfig();
    const posts = await fetch("https://api.imavi.org/imavi/news/get-all", {
      headers: {
        Id: runTimeConfig.public.APP_ID,
        Secret: runTimeConfig.public.APP_SECRET,
        partner: runTimeConfig.public.PARTNER,
      },
      lazy: true,
    });
    const datapost = await posts.json();
    const indexMin = 0;
    const indexMax = 5;
    console.log(datapost);
    return { posts, datapost };
  },
  data: () => ({
    category: "",
    Sort: "",
    Search: "",
    currentPage: 1,
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
    filterpost: [],
    filterednews: NewsStore().news,
  }),
  computed: {
    rows() {
      return Math.ceil(this.filterpost.length / 5);
    },
    showpost() {
      const indexMin = (this.currentPage - 1) * 5;
      const indexMax = indexMin + 5;
      return this.filterpost.filter(
        (x, index) => index >= indexMin && index < indexMax
      );
    },
  },
  methods: {
    searchnews(word) {
      //--------Search

      this.filterpost = this.datapost.filter(function (item) {
        return item.title.toLowerCase().includes(word.toLowerCase());
      });
    },
    sortnews(selected) {
      if (selected) {
        if (selected.value == 1) {
          this.filterpost.sort(function (a, b) {
            var nameA = a.title.toLowerCase(),
              nameB = b.title.toLowerCase();
            if (nameA < nameB)
              //sort string ascending
              return -1;
            if (nameA > nameB) return 1;
            return 0; //default return value (no sorting)
          });
        } else if (selected.value == 2) {
          this.filterpost.sort(function (a, b) {
            var nameA = a.title.toLowerCase(),
              nameB = b.title.toLowerCase();
            if (nameA > nameB)
              //sort string ascending
              return -1;
            if (nameA < nameB) return 1;
            return 0; //default return value (no sorting)
          });
        } else if (selected.value == 3) {
          this.filterpost.sort(function (a, b) {
            var dateA = new Date(a.publishDate),
              dateB = new Date(b.publishDate);
            return dateB - dateA; //sort by date ascending
          });
        } else if (selected.value == 4) {
          this.filterpost.sort(function (a, b) {
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
        console.log(this.showpost);
      }
    },
  },
  watch: {},
  mounted() {
    this.filterpost = this.datapost;
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
