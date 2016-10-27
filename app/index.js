import 'whatwg-fetch';
import Vue from 'vue/dist/vue';

const app = new Vue({
  el: '.full-page',

  // data() {
  //   return {
  //     name: '',
  //     data: null,
  //     currentSelection: null,
  //     loading: false,
  //   };
  // },


  // mounted() {
  //   this.loading = true;
  //   fetch('http://gateway.marvel.com:80/v1/public/series/9856?apikey=580e9250da79b2e0d0fc5f62790e6557')
  //     .then((r) => r.json())
  //     .then((data) => {
  //       this.loading = false;
  //       this.data = data.results;
  //
  //       this.chooseSeries(data.results[0]);
  //     });
  // },

  methods: {
    searchSeries(data) {
      this.loading = true;
      fetch('http://gateway.marvel.com/v1/public/series?limit=1&titleStartsWith=data&apikey=580e9250da79b2e0d0fc5f62790e6557')
       .then((r) => r.json())
       .then((data) => {
         this.loading = false;
         this.currentSelection = data;
       });
    },
  },
});
