<template>
  <v-sheet class="d-flex justify-center">
    <!-- <div class="news-page" v-if="!datafetch">
      <div class="page-title">Tidak ada news yang sesuai</div>
    </div> -->
    <!-- Jangan lupa kasih jarak antar elemen -->

    <div class="news-page">
      <div class="pb-4">
        <ul class="breadcrumbs">
          <li><a href="/" to="/">HOME</a></li>
          <li><a> / </a></li>
          <li><a href="/news">BERITA</a></li>
          <li><a> / </a></li>
          <li>
            <b>{{ NewsDetail.title }}</b>
          </li>
        </ul>
      </div>

      <div class="page-title">
        {{ NewsDetail.title }}
      </div>
      <div class="page-content">
        <v-card class="mx-auto card-news" width="100%" flat>
          <div class="d-flex justify-space-between news-head pb-4">
            <div class="news-tag">Pengumuman</div>
            <div class="news-date d-flex align-center">
              {{ formatDate(NewsDetail.publishDate) }}
            </div>
          </div>
          <div class="d-flex flex-column justify-center align-center">
            <v-divider thickness="4" color="red"> </v-divider>
            <FancyBox :options="{}">
              <a :href="NewsDetail.imageLink" data-fancybox>
                <img
                  :src="NewsDetail.imageLink"
                  max-width="768px"
                  cover
                  style="
                    max-height: 300px;
                    max-width: 960px;
                    width: 100vw;
                    object-fit: cover;
                  "
                /><img />
              </a>
            </FancyBox>
          </div>
          <div class="news-content">
            <div
              class="news-detail"
              v-dompurify-html="NewsDetail.content"
            ></div>
          </div>
        </v-card>
      </div>
      <div class="d-flex flex-column justify-center align-center">
        <div class="share-header">Share</div>

        <div class="pb-4">
          <ul class="breadcrumbs">
            <li>
              <a :href="linkfb" target="_blank"
                ><v-icon class="shareicon" size="40">mdi-facebook</v-icon></a
              >
            </li>
            <li>
              <a :href="linkemail" target="_blank"
                ><v-icon class="shareicon" size="40">mdi-email</v-icon>
              </a>
            </li>
            <li>
              <a :href="linkwa" target="_blank"
                ><v-icon class="shareicon" size="40"> mdi-whatsapp</v-icon></a
              >
            </li>
          </ul>
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

// const nuxtApp = useNuxtApp();
// if (nuxtApp.payload) {
//   console.log("ada data dari payload");
//   console.log(nuxtApp.payload);
// } else {
//   console.log("gada data di payload");
// }
const endpoint = "https://api.imavi.org/imavi/news/view/" + route.params.slug;
const { data: News } = await useFetch(endpoint, {
  headers: {
    Id: runTimeConfig.APP_ID,
    Secret: runTimeConfig.APP_SECRET,
    partner: runTimeConfig.PARTNER,
  },
});
// const { data: News, error } = await useAsyncData(
//   `${route.params.slug}`,
//   () =>
//     $fetch(endpoint, {
//       headers: {
//         Id: runTimeConfig.public.APP_ID,
//         Secret: runTimeConfig.public.APP_SECRET,
//         partner: runTimeConfig.public.PARTNER,
//       },
//     }).catch((error) => error.data)
//   // {
//   //   transform: (resData) => {
//   //     return resData.length ? resData[0] : {};
//   //   },
//   // }
// );
// console.log(News);

const url = runTimeConfig.public.baseURL;
NewsDetail = News.value;

const linkwa =
  "https://wa.me/?text=" +
  NewsDetail.title +
  " " +
  url +
  "/news/" +
  route.params.slug;
const linkfb =
  "https://www.facebook.com/sharer.php?u=" + url + "/news/" + route.params.slug;
const linkemail =
  "mailto:?subject=" +
  NewsDetail.title +
  "&body=" +
  url +
  "/news/" +
  route.params.slug;
console.log(NewsDetail);
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

datafetch.value = false;
if (NewsDetail) {
  datafetch.value = true;
  dataheader.title = NewsDetail.title;
  dataheader.desc = NewsDetail.excerpt;
  dataheader.img = NewsDetail.imageLink;
}
const formatDate = (dateString) => {
  const dateObject = new Date(dateString);
  const day = dateObject.getDate();
  const month = formatMonthName(dateObject.getMonth() + 1);
  const year = dateObject.getFullYear();

  return `${day < 10 ? "0" : ""}${day} ${
    month < 10 ? "0" : ""
  }${month}, ${year}`;
};

const formatMonthName = (monthNumber) => {
  const monthNames = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];
  return monthNames[monthNumber - 1] || "";
};

useHead({
  title: dataheader.title,
  meta: [
    { hid: "og:title", name: "og:title", content: dataheader.title },
    { hid: "description", name: "description", content: dataheader.desc },
    { hid: "og:description", name: "og:description", content: dataheader.desc },
    { hid: "og:image", name: "og:image", content: dataheader.img },
    { hid: "image", name: "image", content: dataheader.img },
    { hid: "og:ImageUrl", name: "og:ImageUrl", content: dataheader.img },
  ],
  bodyAttrs: {
    class: "test",
  },
});
// definePageMeta({
//   pageTransition: {
//     name: "slide",
//     mode: "out-in",
//     onBeforeEnter: (el) => {
//       window.scrollTo({ top: 0 });
//     },
//   },
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
.share-header {
  text-transform: capitalize;
  font-weight: 700;
  font-size: 31px;
  color: black;
}
.shareicon {
  color: #be272c;
  height: 31px;
}
.shareicon:hover {
  color: #f0282f;
  cursor: grab;
}
.news-date {
  font-style: italic;
  color: black;
  padding-right: 0.25rem;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.2;
}
.news-tag {
  display: inline-block;
  padding: 0.33333rem 0.5rem;
  border-radius: 0;
  font-size: 0.8rem;
  line-height: 1;
  white-space: nowrap;
  cursor: default;
  background: $primary-color;
  color: #fefefe;
  font-style: italic;
  font-weight: normal;
}
.news-content {
  padding: 8px 0px;
}
.news-title {
  text-transform: capitalize;
  font-weight: 700;
  font-size: 1.2rem;
  color: $primary-color;
}
.news-detail {
  font-size: 1rem;
  color: black;
  font-weight: normal;
  line-height: 1.2;
  word-break: break-word;
  padding-bottom: 4rem;
  padding-top: 2rem;
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
  line-height: 1.4;
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
    height: auto;
    width: 90vw;
    object-fit: cover;
  }
}
</style>
