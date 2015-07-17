import DS from 'ember-data';

export default DS.RESTSerializer.extend({
  extractArray: function(store, typeClass, arrayPayload, id, requestType) {
    let normalizedPayload = {};
    let posts = arrayPayload.map(function(p) {
      return {
        id: p.id,
        title: p.title,
        url: p.target_url,
        points: p.likes,
        author: p.author,
        authorURL: p.author_url,
        commentsURL: p.comments_url,
        comments: p.comments,
        source: p.source
      };
    });

    normalizedPayload[typeClass.modelName] = posts;

    return this._super(store, typeClass, normalizedPayload, id, requestType);
  }
});
