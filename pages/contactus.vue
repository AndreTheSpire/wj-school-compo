<template>
  <v-sheet class="d-flex justify-center">
    <div class="content-page">
      <div class="page-title">CONTACT US</div>
      <div class="page-content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid id,
        esse perspiciatis libero consequatur illum fugiat excepturi sunt modi,
        tempora harum labore deserunt, incidunt quam suscipit architecto.
        Soluta, impedit amet! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Obcaecati et sed corporis, optio laudantium, dolorum ut
        perspiciatis asperiores explicabo ratione unde quo soluta sint
        voluptatum amet necessitatibus consequuntur sunt voluptatem. lorem Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Eos aperiam fuga
        animi magnam commodi tempora autem. Natus maxime modi, consectetur
        inventore recusandae quas perspiciatis, voluptatibus ipsa maiores fuga
        enim cupiditate.
        <!-- <v-form class="w-100" ref="formcontact" v-model="valid">
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
        </v-form> -->
      </div>
    </div>
  </v-sheet>
</template>


<script setup>
definePageMeta({
  pageTransition: {
    name: "page",
    mode: "out-in",
  },
});
</script>

<style lang="scss" scoped>
.content-page {
  padding: 2rem 1rem 5rem;
  min-height: 70vh;
  max-width: 1080px;
  min-width: 640px;
  margin: auto;
  padding-top: 90px;
}
.page-title {
  color: #666;
  text-transform: uppercase;
  text-align: center;
  font-weight: 700;
  font-size: 3rem;
  margin-bottom: 0.5rem;
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
@media (max-width: 40em) {
  .page-title {
    font-size: 1.5rem;
  }
  .content-page {
    min-width: auto;
  }
}
</style>