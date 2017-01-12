import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about-me');
  this.route('contact');
  this.route('book', {path: '/book/:book_id'});
});

export default Router;
