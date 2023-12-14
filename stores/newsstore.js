import { defineStore } from 'pinia';

export const NewsStore = defineStore('news', {
  state: () => ({
    news: [
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
            type: "umum",
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
      ],
    alreadyfetch:true,
  }),
  mutations:{
    SET_NEWS (state, payload) {
        state.news=[];
        state.news=payload;
    }
  },
  actions: {
    async callNewsAPI ({ commit }) {
        const payload = await useFetch("/.netlify/functions/test-view", {
            lazy: true
          })
        commit('SET_NEWS', payload)
    }
  },
});
