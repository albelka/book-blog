import Ember from 'ember';

export default Ember.Component.extend({
  actions: {

    update(book, params) {
      this.sendAction('update', book, params);
    },

    delete(book) {
      if(confirm('Are you sure you want to delete this post?')) {
        this.sendAction('destroyBook', book);
      }
    }
  }
});
