// https://nuxt.com/docs/api/configuration/nuxt-config
// import { NewsStore } from "./stores/newsstore";

interface News {
  slug: string;
}

const useLocal = process.env.USE_LOCAL
let activeurl=""
if(useLocal==='false'){
  activeurl="https://wijana.netlify.app";
}else{
  activeurl="http://localhost:3001"
}

export default defineNuxtConfig({
  
  app: {
    head: {
      title: 'Sekolah Wijana Jombang',
      meta: [
        { name: 'description', content: 'Website dari Sekolah Wijana Jombang' },
        { name:"google-site-verification",content:"vRnUy77AhYqAB8odewZk1cfYkEOJeOO89ng2hc83mrg"},
        {
          hid: 'og:title',
          name: 'og:title',
          content: 'Sekolah Wijana Jombang',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `/slide1.jpg`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: 'Website dari Sekolah Wijana Jombang',
        },
        
      ],
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      script: [
        {
          hid: "breadcrumbs-json-ld",
          type: "application/ld+json",
          textContent: JSON.stringify({
            "@context": "https://wijana.netlify.app",
            "@type": "BreadcrumbList",
            "itemListElement": [{
              "@type": "ListItem",
              "position": 1,
              "name": "TKK Wijana",
              "item": "https://wijana.netlify.app/department/tkk"
            }, {
              "@type": "ListItem",
              "position": 2,
              "name": "SDK Wijana",
              "item": "https://wijana.netlify.app/department/sdk"
            }, {
              "@type": "ListItem",
              "position": 3,
              "name": "SMPK Wijana",
              "item": "https://wijana.netlify.app/department/smpk"
          }, {
            "@type": "ListItem",
            "position": 4,
            "name": "News",
            "item": "https://wijana.netlify.app/news"
          }]
          })
        }
      ]
    }
  },
  devtools: { enabled: true },
  ssr:true,
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
  }], '@pinia/nuxt','nuxt-simple-sitemap'],
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
  runtimeConfig: {
    APP_ID: process.env.APP_ID,
    APP_SECRET: process.env.APP_SECRET,
    PARTNER: process.env.PARTNER,
    public:{
      baseURL:activeurl
    }
  },
  site: {
    url: activeurl,
  },
  hooks: {
    async 'nitro:config'(nitroConfig) {
      nitroConfig.prerender = nitroConfig.prerender || {};
      nitroConfig.prerender.routes = nitroConfig.prerender.routes || [];

      if (nitroConfig.dev) {
        return;
      }
      try {

        const response = await fetch('https://api.imavi.org/imavi/news/get-all', {
          headers: {
            Id: '6163b0c663bd513e8b3b8553',
            Secret: '2213be40-3625-4111-9b52-e828b5d335d8',
            partner: 'cim',
          },
        });

          // const news =[
          //   {
          //       id: "UWD1",
          //       type: "TKK",
          //       date: "11 May 2022",
          //       imgurl: "/img/news/tkk/ppdb_tk_wijana.jpg",
          //       header: "PPDB 2022",
          //       slug:"ppdb-2022",
          //       detail: "Menerima Peserta Didik Baru 2022",
          //     },
          //     {
          //       id: "UWD2",
          //       type: "umum",
          //       date: "14 Jan 2021",
          //       imgurl: "/img/news/general/IMG-20201014-WA0010.jpg",
          //       header: "PPDB PENERIMAAN SISWA BARU",
          //       slug:"ppdb-penerimaan-siswa-baru",
          //       detail: "Penerimaan Pendaftaran tahun ajaran baru 2021",
          //     },
          //     {
          //       id: "UWD3",
          //       type: "SMPK",
          //       date: "10 Nov 2020",
          //       imgurl: "/img/news/smpk/Screen_Shot_2020-11-10_at_185650.jpg",
          //       header: "Selamat kepada Nathan Philbert Ngo",
          //       slug:"selamat-kepada-nathan-philbert-ngo",
          //       detail:
          //         "Selamat atas keberhasilannya mendapatakn MERIT AWARD pada Global Business Mathematics Olympiad 2020",
          //     },
          // ];
          if (response.ok) {
            
            const news: News[] = await response.json();
            // console.log(news);
            const routes2 = news.map((news) => `/news/${news.slug}`);
            nitroConfig.prerender.routes.push(...routes2);
  
            // console.log('ini routes2', routes2);
          } else {
            console.error('Error fetching data:', response.statusText);
          }
          // console.log(news);
          // const routes = news.map((news) => `/news/${news.slug}`);
          // nitroConfig.prerender.routes.push(...routes);

          // console.log('ini routes', routes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
})
