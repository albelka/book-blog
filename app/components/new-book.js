import Ember from 'ember';

export default Ember.Component.extend({
  addNewBook: false,
  actions: {
    bookFormShow() {
      this.set('addNewBook', true);
    },

    saveBook1() {
      var params = {
        author: this.get('author') ? this.get('author') : "",
        image: this.get('image') ? this.get('image') : "",
        postedBy: this.get('postedBy') ? this.get('postedBy') : "",
        review: this.get('review') ? this.get('review') : "",
        title: this.get('title') ? this.get('title') : "",
      };
      this.set('addNewBook', false);
      this.sendAction('saveBook2', params);
    }
  }
});
