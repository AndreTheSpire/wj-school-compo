// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  
  app: {
    pageTransition: { name: 'page', mode: 'out-in'},
    head: {
      title: 'Sekolah Wijana Jombang ',
      meta: [
        { name: 'description', content: 'My amazing site.' }
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  },
  
  devtools: { enabled: true },
  css: ['vuetify/lib/styles/main.sass','@mdi/font/css/materialdesignicons.min.css'],
  build: {
    transpile: ['vuetify'],
  },
  modules: [['@nuxtjs/google-fonts', {
    families: {
      "Times New Roman":true,
      Figtree:true,
      'Lusitana':true,
      'Open+Sans': true,
      'Work+Sans': true,
      Poppins:true,
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    },display: 'swap' 
}], '@pinia/nuxt'],
 
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/main.scss" as *;'
        }
      }
    }
  },
})
