import DS from 'ember-data';

export default DS.Model.extend({
  postedBy: DS.attr(),
  author: DS.attr(),
  title: DS.attr(),
  review: DS.attr(),
  image: DS.attr()
});
