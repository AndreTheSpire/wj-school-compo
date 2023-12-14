<template>
  <v-sheet class="d-flex justify-center">
    <div class="news-page"  v-if="!datafetch">
          <div class="page-title" >
        Tidak ada news yang sesuai
      </div>
    </div>
    <div class="news-page" v-else>
      <div class="pb-4">
        <ul class="breadcrumbs">
          <li><a href="/" to="/">HOME</a></li>
          <li><a> / </a></li>
          <li><a href="/news">NEWS</a></li>
          <li><a> / </a></li>
          <li>
            <b>{{ news.header }}</b>
          </li>
        </ul>
      </div>
      <div class="page-title" >
        {{ news.header }}
      </div>
      <div class="page-content">
        <v-card class="mx-auto card-news" width="100%" flat>
          <v-card-title class="d-flex justify-space-between news-head">
            <div class="news-tag">Pengumuman</div>
            <div class="news-date d-flex align-center">
              {{ news.date }}
            </div>
          </v-card-title>
          <div class="d-flex flex-column justify-center align-center">
            <v-divider thickness="4" color="red"> </v-divider>
            <FancyBox :options="{}">
              <a :href="news.imgurl" data-fancybox>
                <img :src="news.imgurl" max-width="768px" cover /><img />
              </a>
            </FancyBox>
          </div>
          <div class="news-content">
            <v-card-text class="news-detail">
              {{ news.detail }}
            </v-card-text>
          </div>
        </v-card>
      </div>
      <div class="d-flex flex-column justify-center align-center">
        <div class="share-header">Share</div>
        <div class="pb-4">
          <ul class="breadcrumbs">
            <li>
              <a
                href="https://www.facebook.com/sharer.php?u=www.wijana.sch.id/news/ppdb-2022/"
                ><v-icon class="shareicon" size="x-large"
                  >mdi-facebook</v-icon
                ></a
              >
            </li>
            <li>
              <a
                href="/cdn-cgi/l/email-protection#06397573646c6365723b56564244263436343420676b763d6469627f3b71717128716f6c6768672875656e286f62296863717529767662642b3436343429"
                ><v-icon
                  class="shareicon"
                  size="x-large"
                  @click="navigateshare(2)"
                  >mdi-email</v-icon
                >
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/?text=%2APPDB%202022%2A%0A%20_Menerima%20peserta%20didik%20baru%202022_%0A%0Ahttps%3A%2F%2Fwww.wijana.sch.id/news/ppdb-2022/"
                ><v-icon
                  class="shareicon"
                  size="x-large"
                  @click="navigateshare(3)"
                >
                  mdi-whatsapp</v-icon
                ></a
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
const router = useRouter();
const route = useRoute();
let datafetch=ref(false);
let dataheader=reactive({
  title:"Error! News Doesnt Found",
  desc:"Error! News Doesnt Found",
})
const allnews=[
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
    ];
    let news= computed(() => {
      const getCurrentNews = allnews.find((x) => {
        return x.slug === route.params.slug;
      });
      
      return getCurrentNews;
});
// onMounted(() => {
 
//   })
   datafetch.value=false;
    if(news.value){
        datafetch.value=true;
        dataheader.title=news.value.header;
        dataheader.desc=news.value.detail;
    }

useHead({
  title:dataheader.title,
  meta: [
    { name: 'description', content: dataheader.desc }
  ],
  bodyAttrs: {
    class: 'test'
  },
})

definePageMeta({
  pageTransition: {
    name: "slide",
    mode: "out-in",
    onBeforeEnter: (el) => {
      window.scrollTo({ top: 0});
    },
  },
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
  @include phone{
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
img{
  @include phone{
    height: auto;
    width: 90vw;
    object-fit: cover;
  }
}

</style>

     