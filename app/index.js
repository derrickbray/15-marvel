import 'whatwg-fetch';
import Vue from 'vue/dist/vue';

const apiKey = '580e9250da79b2e0d0fc5f62790e6557';

const app = new Vue({
  el: '.full-page',

  data() {
    return { seriesData: null,
            characters: null,
    };
  },

  mounted() {
    this.searchSeries('Spider-Man');
  },

  methods: {
    searchSeries(series) {
      fetch(`http://gateway.marvel.com/v1/public/series?limit=1&titleStartsWith=${series}&apikey=${apiKey}`)
            .then((r) => r.json())
            .then((data) => {
              this.seriesData = data.data.results[0];

              this.searchCharacters(this.seriesData.id);
            });
    },

    searchCharacters(seriesId) {
      fetch(`http://gateway.marvel.com/v1/public/series/${seriesId}/characters?apikey=${apiKey}`)
        .then((r) => r.json())
        .then((data) => {
          this.characters = data.data.results;
        });
    },
  },
});
