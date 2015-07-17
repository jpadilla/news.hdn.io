import DS from 'ember-data';
import ENV from '../config/environment';

export default DS.RESTAdapter.extend({
  host: ENV.APP.host,
  namespace: 'api',

  buildURL: function(type, id) {
    let prefix = this.urlPrefix();

    return `${prefix}/posts/`;
  }
});
