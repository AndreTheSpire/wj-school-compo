<template>
  <v-sheet class="d-flex justify-center">
    <!-- <FetchStateHandler
      v-if="pending || error"
      :fetchpending="pending"
      :fetcherror="error"
      :fetchfunction="refresh"
    /> -->
    <Transition name="slide-fade" mode="out-in" appear>
      <div class="content-page" v-if="animate">
        <div class="page-title">CONTACT US</div>
        <div class="page-content">
          <!-- <div>{{posts}}</div> -->

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
    </Transition>
  </v-sheet>
</template>

<script>
definePageMeta({
  pageTransition: false,
});
export default {
  data: () => ({
    valid: true,
    name: "",
    email: "",
    animate: true,
    phone: "",
    message: "",
    upload: null,
    selectedemail: "",
    itemsemail: [
      { state: "admin@smpk.wijana.sch.id", value: "admin@smpk.wijana.sch.id" },
      { state: "admin@sdk.wijana.sch.id", value: "admin@sdk.wijana.sch.id" },
      { state: "admin@tkk.wijana.sch.id", value: "admin@tkk.wijana.sch.id" },
    ],
  }),
  methods: {
    validateform() {
      console.log(this.valid);

      if (this.$refs.formcontact.validate()) {
        console.log("berhasil");
      } else {
        console.log("gagal");
      }
      console.log(this.valid);
    },
  },
};
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.content-page {
  padding: 2rem 1rem 5rem;
  min-height: 70vh;
  max-width: 1080px;
  min-width: 640px;
  margin: auto;
  padding-top: 90px;
  @include phone {
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
</style>
