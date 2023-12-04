import { defineStore } from 'pinia';

export const TransitionStore = defineStore('transition', {
  state: () => ({
      default:{
        name: "slide",
        mode: "out-in",
        onBeforeEnter: (el) => {
        console.log('Before enter...');
        window.scrollTo({ top: 0, behavior: 'smooth' });
        },
        onEnter: (el, done) => {console.log("enterrrrr")},
        onAfterEnter: (el) => {},
      }

  }),
  mutations:{
   
    
  },
  actions: {
    
  },
});
