import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('post').then(function(posts) {
      let model = {
        designerNews: [],
        hackerNews: []
      };

      posts.forEach(function(post) {
        if (post.get('source') === 'designer_news') {
          model.designerNews.push(post);
        } else {
          model.hackerNews.push(post);
        }
      });

      return model;
    });
  }
});
