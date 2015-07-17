import DS from 'ember-data';

let attr = DS.attr;

export default DS.Model.extend({
  url: attr(),
  title: attr(),
  points: attr(),
  author: attr(),
  authorURL: attr(),
  commentsURL: attr(),
  comments: attr(),
  source: attr()
});
