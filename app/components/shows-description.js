import Vue from 'vue/dist/vue';

export default Vue.extend({
  data() {
    return {
      modalDescription: false,
    };
  },

  methods: {
    showDescription() {
      this.modalDescription = true;
    },

    hideDescription() {
      this.modalDescription = false;
    },
  },
});
