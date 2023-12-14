<template>
  <div class="content-page">
    <div v-if="fetchpending" class="ma-auto error-text">
      <div class="d-flex flex-column justify-center ">
        <h3 class="text-center">
          <v-progress-circular
            :size="70"
            :width="7"
            color="green"
            indeterminate
            ></v-progress-circular>
        </h3>
      </div>
    </div>
    <div v-else-if="fetcherror" class="ma-auto error-text">
      <div class="d-flex flex-column">
        <h3 class="text-center">
          Telah terjadi kesalahan, silahkan coba lagi
        </h3>
        <b-button
          pill
          variant="none"
          class="bg-primary mt-3 mx-auto"
          size="lg"
          @click="fetchfunction"
        >
          <b style="color:white">Muat Ulang</b>
        </b-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    fetcherror: Object,
    fetchpending: Boolean,
    fetchfunction: Function,
    fetchingMessage: {
      type: String,
      default () {
        return 'fetchingMessage'
      }
    },
    errorMessage: {
      type: String,
      default () {
        return 'errorMessage'
      }
    },
    reloadMessage: {
      type: String,
      default () {
        return 'reloadMessage'
      }
    }
  }
}
</script>
