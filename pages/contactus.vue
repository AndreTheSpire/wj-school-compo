<template>
  <v-sheet class="d-flex justify-center">
    <div class="content-page">
      <div class="page-title">CONTACT US</div>

       
      <div class="page-content">
        <!-- <div>{{pageData}}</div> -->
        <v-form class="w-100" ref="formcontact" v-model="valid">
          <InputsTextField
            v-model="name"
            label="Name"
            type="field"
            name="Name"
            placeholder="Your Name"
          />
          <InputsTextField
            v-model="email"
            label="Your Email"
            type="field"
            name="email"
            placeholder="Your Email Adress"
          />
          <InputsTextField
            v-model="selectedemail"
            :selectitems="itemsemail"
            type="selected"
            label="sent to email"
            name="selectedemail"
            placeholder=""
          />
          <InputsTextField
            v-model="phone"
            label="Phone"
            name="phone"
            type="field"
            placeholder="Your Phone Number"
          />
          <InputsTextField
            v-model="upload"
            label="upload"
            name="upload"
            type="upload"
            placeholder="Upload File"
          />
          <InputsTextField
            v-model="message"
            label="message"
            name="message"
            type="areafield"
            placeholder="Your message"
          />
          <v-btn block color="green" @click="validateform()"
            >Submit
            <v-icon>mdi-email-fast-outline</v-icon>
          </v-btn>
        </v-form>
      </div>
    </div>
  </v-sheet>
</template>


<script setup >
import { TransitionStore } from "../stores/transition";
const transition=TransitionStore();

useHead({
  title:'Contact Us',
  meta: [
    { name: 'description', content: 'contact sekolah wijana jombang' }
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

import { reactive, ref,onMounted } from "vue";
let valid=ref(true);
let name=ref("");
let email=ref("");
let phone=ref("");
let message=ref("");
let upload=ref("");
let selectedemail=ref("");
let pageData=ref(undefined);
const formcontact = ref();
const itemsemail=
    [
      { state: "admin@smpk.wijana.sch.id", value: "admin@smpk.wijana.sch.id" },
      { state: "admin@sdk.wijana.sch.id", value: "admin@sdk.wijana.sch.id" },
      { state: "admin@tkk.wijana.sch.id", value: "admin@tkk.wijana.sch.id" },
    ];

// Assign the form reference to the ref
  async function fetch() {
      let payload = null;
      console.log("masuk fetch isievaluasi");
      try {
        payload = await $fetch("/.netlify/functions/test-view");
      } catch (error) {
        console.log("gagal total");
      }
      console.log("payload ini");
      console.log(payload);
      pageData.value = payload;
      console.log("berhasil gak nih?");
      console.log(pageData.value);
    }

    function validateform() {
      console.log(valid);
      if (formcontact.value.validate()) {
        console.log("berhasil");
      } else {
        console.log("gagal");
      }
      console.log(valid);
    }
    onMounted(() => {
    console.log(transition.default);
    fetch();
  })

</script>


<style lang="scss" scoped>
.content-page {
  padding: 2rem 1rem 5rem;
  min-height: 70vh;
  max-width: 1080px;
  min-width: 640px;
  margin: auto;
  padding-top: 90px;
  @include phone{
     min-width: auto;
  }
}
.page-title {
  color: #666;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  font-size: 3rem;
  margin-bottom: 0.5rem;
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

</style>