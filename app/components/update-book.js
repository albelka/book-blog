import Ember from 'ember';

export default Ember.Component.extend({
  updateBookForm: false,

  actions: {
    updateBookForm() {
      this.set('updateBookForm', true);
    },
    update(book) {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        image: this.get('image') ? this.get('image') : "",
        postedBy: this.get('postedBy') ? this.get('postedBy') : "",
        review: this.get('review') ? this.get('review') : "",
        title: this.get('title') ? this.get('title') : "",
      };
      this.set('updateBookForm', false);
      this.sendAction('update', book, params);
    }
  }
});
