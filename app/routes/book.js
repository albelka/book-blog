import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('book', params.book_id);
  },
  actions: {
    update(book, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key]!=="") {
          book.set(key,params[key]);
        }
        console.log(book);
      });
      book.save();
      this.transitionTo('index');
    },

    destroyBook(book) {
      book.destroyRecord();
      this.transitionTo('index');
    }
  }
});
