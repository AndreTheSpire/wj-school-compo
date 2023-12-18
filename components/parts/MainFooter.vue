<template>
  <v-footer class="d-flex flex-column justify-center footer-component">
    <v-row class="d-flex justify-center footer-content">
      <v-col cols="6" sm="6" md="3" lg="3" class="footer-content-item">
        <div class="footer-item-header">Yayasan Yohanes Gabriel</div>
        <div class="footer-item-text">
          Lorem ipsum dolor, sit, amet consectetur adipisicing elit. Impedit
          commodi, placeat molestiae veritatis quod, eligendi, voluptatem dolore
          voluptatibus fuga quaerat harum corrupti porro est. Perspiciatis
          soluta officiis illum, animi consequuntur. Lebih lanjut
        </div>
      </v-col>
      <v-col cols="6" sm="6" md="3" lg="3" class="footer-content-item">
        <div class="footer-item-header">Tautan Cepat</div>
        <div class="footer-item-text">
          <NuxtLink class="tautan-cepat-item" :to="'/department/tkk'"
            >TKK</NuxtLink
          >
          <br />
          <NuxtLink class="tautan-cepat-item" :to="'/department/sdk'"
            >SDK</NuxtLink
          >
          <br />
          <NuxtLink class="tautan-cepat-item" :to="'/department/smpk'"
            >SMPK</NuxtLink
          >
          <br />
          <NuxtLink class="tautan-cepat-item" :to="'/contactus'"
            >Hubungi Kami</NuxtLink
          >
          <br />
          <span class="tautan-cepat-item" @click="navigatefooter(4)"
            >Kebijakan Kerahasiaan</span
          >
          <br />
          <span class="tautan-cepat-item" @click="navigatefooter(5)">
            Peraturan Penggunaan </span
          ><br />
        </div>
      </v-col>
      <v-col cols="6" sm="6" md="3" lg="3" class="footer-content-item">
        <div class="footer-item-header">YHubungi Kami</div>
        <div class="footer-item-text">
          <span class="weight--700 mb-8">Alamat </span><br />
          <p class="mb-4">
            Jl. KH. Wahid Hasyim 38<br />
            Jombang, Jawa Timur <br />
            Indonesia
          </p>
          <span class="weight--700 mb-8">Telepon </span><br />
          <span><a href="tel:+623198349834">(62) 321 861-930 </a></span>
        </div>
      </v-col>
      <v-col cols="6" sm="6" md="3" lg="3" class="footer-content-item">
        <div class="footer-item-header">Media Sosial</div>
        <div class="footer-item-text">
          <div class="pa-1">
            <a href="https://www.instagram.com/instagram">
              <v-icon>mdi-instagram</v-icon>
              Instagram
            </a>
          </div>
          <div class="pa-1">
            <a href="https://www.facebook.com/facebook">
              <v-icon>mdi-facebook</v-icon>
              Facebook
            </a>
          </div>
        </div>
      </v-col>
    </v-row>
    <div class="bottom-footer">
      <v-divider
        :thickness="2"
        class="border-opacity-100"
        color="yellow"
      ></v-divider>
      <div class="text-right footer-item-text pt-5">
        ©2023 Sekolah Wijana. All rights reserved.
      </div>
    </div>
  </v-footer>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();
const data = reactive({});
function navigatefooter(index) {
  if (index == 0) {
    router.push("/department/tkk");
  } else if (index == 1) {
    router.push("/department/sdk");
  } else if (index == 2) {
    router.push("/department/smpk");
  } else if (index == 3) {
    router.push("/contactus");
  }
}
</script>

<style lang="scss" scoped>
a {
  color: #ffe100;
  text-decoration: none;
}
.tautan-cepat-item:hover {
  cursor: grab;
}
.footer-component {
  padding: 3rem 2rem 6rem;
  // margin-top: 3rem;
  background-image: url("/img/media/slidehome/slide2.jpg");
  border-top: solid 10px green;
  background-color: rgba(0, 0, 0, 0.6);
  background-size: cover;
  background-attachment: fixed;
  background-position: center 50%;
}
.footer-content {
  max-width: 1200px;
}
.footer-content-item {
  min-height: 270px;
  padding: 15px;
}
.bottom-footer {
  max-width: 1200px;
  width: 100%;
}
.footer-item-header {
  color: #ffe100;
  font-size: 19.2px;
  margin-bottom: 8px;
  font-weight: 700;
}
.footer-item-text {
  color: #ffe100;
  font-size: 16px;
}
@media (max-width: 40em) {
  .footer-content-item {
    padding: 10px;
  }
}
</style>
