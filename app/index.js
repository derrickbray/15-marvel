import 'whatwg-fetch';
import Vue from 'vue/dist/vue';

const app = new Vue({
  el: '.full-page',

  data() {
    return { title: '' };
  },

  mounted() {
    fetch('http://gateway.marvel.com:80/v1/public/series/9856?apikey=580e9250da79b2e0d0fc5f62790e6557')
        .then((r) => r.json())
        .then((data) => {
          this.series = data.results;

          this.searchSeries(data.results[0]);
        });
  },

  methods: {
    searchSeries(series) {
      fetch('http://gateway.marvel.com:80/v1/public/series/9856?apikey=580e9250da79b2e0d0fc5f62790e6557')
            .then((r) => r.json())
            .then((data) => {
              this.currentSelection = data.results[0];
            });
      return app;
    },
  },
});
