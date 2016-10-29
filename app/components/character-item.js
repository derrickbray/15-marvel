import ShowsDescription from './shows-description';

export default ShowsDescription.extend({
  props: ['character'],
  template: `
  <div class="comic">
    <div class="modal" v-if="modalDescription">
      <div class="modal__card">
        <button class="modal__close" v-on:click="hideDescription">X</button>
        <div class="grid">
          <div class="grid__item">
            <div class="square">
            <img v-bind:src="character.thumbnail.path + '.' + character.thumbnail.extension" alt="" class="square__pic">
            </div>
          </div>
          <div class="grid__item">
            <p class="modal__description" v-if="character.description">{{ character.description }}</p>
            <p class="modal__description" v-else>No description found...</p>
          </div>
        </div>
      </div>
    </div>
    <div class="comic__content">
      <div class="square">
        <img v-bind:src="character.thumbnail.path + '.' + character.thumbnail.extension" alt="" class="square__pic">
      </div>
      <p class="right-col__character">{{ character.name }}</p>
    </div>
    <button class="right-col__button" v-on:click="showDescription">Read More</button>
  </div>`,
});
