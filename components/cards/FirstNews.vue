<template>
  <v-hover v-slot="{ isHovering, props }">
    <v-card
      class="mx-auto card-news"
      width="100%"
      :elevation="isHovering ? 10 : 0"
      v-bind="props"
    >
      <NuxtLink :to="`/news/${news.slug}`">
        <v-card-title class="d-flex justify-space-between news-head">
          <div class="news-tag">Pengumuman</div>
          <div class="news-date d-flex align-center">
            {{ news.date }}
          </div>
        </v-card-title>
        <v-divider thickness="4" color="red"> </v-divider>
        <v-img :src="news.imageLink" height="200px" cover></v-img>
        <div class="news-content">
          <v-card-text class="news-title">
            {{ news.title }}
          </v-card-text>

          <v-card-text class="news-detail">
            <!-- <p v-dompurify-html="news.content"></p> -->
            <div class="text-content" v-dompurify-html="news.content"></div>
          </v-card-text>
          <v-card-subtitle class="news-read-more"> Lihat </v-card-subtitle>
        </div>
      </NuxtLink>
    </v-card>
  </v-hover>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const autoplay = reactive({
  delay: 4000,
  disableOnInteraction: false,
});
const props = defineProps({
  news: Object,
});
</script>

<style lang="scss" scoped>
.text-content {
  overflow: hidden;
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}
.news-head {
  padding: 0.15rem 0.25rem 0.25rem;
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
  word-break: normal;
}
.news-detail {
  font-size: 0.875rem;
  color: #666;
  font-style: italic;
  line-height: 1.2;
  word-break: normal;
}
.news-read-more {
  font-size: 0.875rem;
  color: $primary-color;
  font-style: italic;
  line-height: 1.2;
  word-break: break-word;
  text-align: right;
}
.news-date {
  font-style: italic;
  color: #999;
  padding-right: 0.25rem;
  font-weight: normal;
  font-size: 0.875rem;
  line-height: 1.2;
}
.content-news {
  padding: 2rem 1rem 5rem;
  min-height: 70vh;
  max-width: 1080px;
  margin: auto;
  background-color: #f7f7f7;
}
</style>
