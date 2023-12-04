<template>
<v-sheet class="d-flex justify-center">
   
    <v-carousel cycle fade height="80vh"  
    hide-delimiters
    show-arrows="hover">
      <v-carousel-item  v-for="(img, i) in headerimg"
      class="header-style"
      :key="i"
      :src="img.urlimg"
      cover
      transition="scale"
      reverse-transition="fade"
      >
      <div class="d-flex justify-center align-center h-100">
      <img class="logo-img" :src="logo">

      </div>
      </v-carousel-item>
    </v-carousel>


</v-sheet>
</template>

<script>
    export default {
        props:{
            logo: {
            type: String,
            default: null
            },
            headerimg:Array,
        }
    }
</script>

<style lang="scss" scoped>
.header-style{
  margin-bottom: 10px;
  width: 100%;
  height: 80vh;
  display: flex;
  justify-items: center;
  align-items: center;
 
}
.logo-img{
    max-width: 180px
}
</style>