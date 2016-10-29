
import ShowsDescription from './shows-description';

export default ShowsDescription.extend({
  props: ['comic'],
  template: `
  <div class="grid__item">
    <div class="modal" v-if="modalDescription">
      <div class="modal__card">
        <button class="modal__close" v-on:click="hideDescription">X</button>
        <div class="grid">
          <div class="grid__item">
            <div class="square">
            <img v-bind:src="comic.thumbnail.path + '.' + comic.thumbnail.extension" alt="" class="square__pic">
            </div>
          </div>
          <div class="grid__item">
            <p class="modal__description" v-if="comic.description">{{ comic.description }}</p>
            <p class="modal__description" v-else>No description found...</p>
          </div>
        </div>
      </div>
    </div>
    <div class="comic">
      <div class="square square--tall">
        <img v-bind:src="comic.thumbnail.path + '.' + comic.thumbnail.extension" class="square__pic">
      </div>
      <div class="comic__content">
        <p class="right-col__character">#{{comic.issueNumber}}</p>
        <p class="right-col__character">{{comic.title}}</p>
      </div>
      <button class="right-col__button" v-on:click="showDescription(comic.description)">Read More</button>
    </div>
  </div>`,
});
