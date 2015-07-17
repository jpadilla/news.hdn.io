define("hdn/adapters/application",["exports","ember-data","hdn/config/environment"],function(e,t,a){"use strict";e["default"]=t["default"].RESTAdapter.extend({host:a["default"].APP.host,namespace:"api",buildURL:function(e,t){var a=this.urlPrefix();return a+"/posts/"}})}),define("hdn/app",["exports","ember","ember/resolver","ember/load-initializers","hdn/config/environment"],function(e,t,a,n,r){"use strict";var d;t["default"].MODEL_FACTORY_INJECTIONS=!0,d=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:a["default"]}),n["default"](d,r["default"].modulePrefix),e["default"]=d}),define("hdn/components/hdn-post",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Component.extend({})}),define("hdn/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("hdn/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("hdn/initializers/export-application-global",["exports","ember","hdn/config/environment"],function(e,t,a){"use strict";function n(e,n){var r=t["default"].String.classify(a["default"].modulePrefix);a["default"].exportApplicationGlobal&&!window[r]&&(window[r]=n)}e.initialize=n,e["default"]={name:"export-application-global",initialize:n}}),define("hdn/instance-initializers/app-version",["exports","hdn/config/environment","ember"],function(e,t,a){"use strict";var n=a["default"].String.classify,r=!1;e["default"]={name:"App Version",initialize:function(e){if(!r){var d=n(e.toString());a["default"].libraries.register(d,t["default"].APP.version),r=!0}}}}),define("hdn/models/post",["exports","ember-data"],function(e,t){"use strict";var a=t["default"].attr;e["default"]=t["default"].Model.extend({url:a(),title:a(),points:a(),author:a(),authorURL:a(),commentsURL:a(),comments:a(),source:a()})}),define("hdn/router",["exports","ember","hdn/config/environment"],function(e,t,a){"use strict";var n=t["default"].Router.extend({location:a["default"].locationType});n.map(function(){}),e["default"]=n}),define("hdn/routes/index",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({model:function(){return this.store.findAll("post").then(function(e){var t={designerNews:[],hackerNews:[]};return e.forEach(function(e){"designer_news"===e.get("source")?t.designerNews.push(e):t.hackerNews.push(e)}),t})}})}),define("hdn/serializers/application",["exports","ember-data"],function(e,t){"use strict";e["default"]=t["default"].RESTSerializer.extend({extractArray:function(e,t,a,n,r){var d={},l=a.map(function(e){return{id:e.id,title:e.title,url:e.target_url,points:e.likes,author:e.author,authorURL:e.author_url,commentsURL:e.comments_url,comments:e.comments,source:e.source}});return d[t.modelName]=l,this._super(e,t,d,n,r)}})}),define("hdn/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:16,column:0}},moduleName:"hdn/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","container");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createComment("");e.appendChild(a,n);var n=e.createTextNode("\n\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","row");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","col-xs-12");var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("div");e.setAttribute(d,"class","footer");var l=e.createTextNode("\n        ");e.appendChild(d,l);var l=e.createElement("p");e.setAttribute(l,"class","text-center");var i=e.createTextNode("\n          Check out ");e.appendChild(l,i);var i=e.createElement("a");e.setAttribute(i,"href","http://hdn.io/#issues");var o=e.createTextNode("past issues");e.appendChild(i,o),e.appendChild(l,i);var i=e.createTextNode(". ");e.appendChild(l,i);var i=e.createElement("br");e.appendChild(l,i);var i=e.createTextNode("\n          Hacked together by ");e.appendChild(l,i);var i=e.createElement("a");e.setAttribute(i,"href","http://jpadilla.com");var o=e.createTextNode("José Padilla");e.appendChild(i,o),e.appendChild(l,i);var i=e.createTextNode(". ");e.appendChild(l,i);var i=e.createElement("br");e.appendChild(l,i);var i=e.createTextNode(" ");e.appendChild(l,i);var i=e.createElement("a");e.setAttribute(i,"href","http://hdn.io");var o=e.createTextNode("Subscribe");e.appendChild(i,o),e.appendChild(l,i);var i=e.createTextNode(" to the newsletter. ");e.appendChild(l,i);var i=e.createElement("br");e.appendChild(l,i);var i=e.createTextNode(" ");e.appendChild(l,i);var i=e.createElement("span");e.setAttribute(i,"class","last-updated");var o=e.createTextNode("Last updated ");e.appendChild(i,o);var o=e.createElement("span");e.setAttribute(o,"class","last-updated-minutes");var c=e.createTextNode("some time");e.appendChild(o,c),e.appendChild(i,o);var o=e.createTextNode(" ago.");e.appendChild(i,o),e.appendChild(l,i);var i=e.createTextNode("\n        ");e.appendChild(l,i),e.appendChild(d,l);var l=e.createTextNode("\n      ");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(e.childAt(t,[0]),1,1),n},statements:[["content","outlet",["loc",[null,[2,2],[2,12]]]]],locals:[],templates:[]}}())}),define("hdn/templates/components/hdn-post",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:12,column:0}},moduleName:"hdn/templates/components/hdn-post.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","row post-row");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","col-xs-11 post-info");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("a");e.setAttribute(r,"class","post-title"),e.setAttribute(r,"target","_blank");var d=e.createComment("");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"class","post-meta");var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("span"),l=e.createTextNode("\n        ");e.appendChild(d,l);var l=e.createComment("");e.appendChild(d,l);var l=e.createTextNode(" points by ");e.appendChild(d,l);var l=e.createElement("a");e.setAttribute(l,"taget","_blank");var i=e.createComment("");e.appendChild(l,i),e.appendChild(d,l);var l=e.createTextNode(" |\n        ");e.appendChild(d,l);var l=e.createElement("a");e.setAttribute(l,"target","_blank");var i=e.createComment("");e.appendChild(l,i);var i=e.createTextNode(" comments");e.appendChild(l,i),e.appendChild(d,l);var l=e.createTextNode("\n      ");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[0,1]),r=e.childAt(n,[1]),d=e.childAt(n,[3,1]),l=e.childAt(d,[3]),i=e.childAt(d,[5]),o=new Array(7);return o[0]=e.createAttrMorph(r,"href"),o[1]=e.createMorphAt(r,0,0),o[2]=e.createMorphAt(d,1,1),o[3]=e.createAttrMorph(l,"href"),o[4]=e.createMorphAt(l,0,0),o[5]=e.createAttrMorph(i,"href"),o[6]=e.createMorphAt(i,0,0),o},statements:[["attribute","href",["concat",[["get","post.url",["loc",[null,[3,15],[3,23]]]]]]],["content","post.title",["loc",[null,[3,62],[3,76]]]],["content","post.points",["loc",[null,[6,8],[6,23]]]],["attribute","href",["concat",[["get","post.authorURL",["loc",[null,[6,45],[6,59]]]]]]],["content","post.author",["loc",[null,[6,78],[6,93]]]],["attribute","href",["concat",[["get","post.commentsURL",["loc",[null,[7,19],[7,35]]]]]]],["content","post.comments",["loc",[null,[7,55],[7,72]]]]],locals:[],templates:[]}}())}),define("hdn/templates/index",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:7,column:6},end:{line:9,column:6}},moduleName:"hdn/templates/index.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("        ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,1,1,a),n},statements:[["inline","hdn-post",[],["post",["subexpr","@mut",[["get","post",["loc",[null,[8,24],[8,28]]]]],[],[]]],["loc",[null,[8,8],[8,30]]]]],locals:["post"],templates:[]}}(),t=function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:17,column:6},end:{line:19,column:6}},moduleName:"hdn/templates/index.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createTextNode("        ");e.appendChild(t,a);var a=e.createComment("");e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=new Array(1);return n[0]=e.createMorphAt(t,1,1,a),n},statements:[["inline","hdn-post",[],["post",["subexpr","@mut",[["get","post",["loc",[null,[18,24],[18,28]]]]],[],[]]],["loc",[null,[18,8],[18,30]]]]],locals:["post"],templates:[]}}();return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:23,column:0}},moduleName:"hdn/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),a=e.createElement("div");e.setAttribute(a,"class","row");var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","col-xs-12 col-sm-6 col-md-6");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("h1");e.setAttribute(r,"class","source-title hacker-news");var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("a");e.setAttribute(d,"href","https://news.ycombinator.com/"),e.setAttribute(d,"target","_blank");var l=e.createTextNode("Hacker News");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"id","hn-posts");var d=e.createTextNode("\n");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n  ");e.appendChild(a,n);var n=e.createElement("div");e.setAttribute(n,"class","col-xs-12 col-sm-6 col-md-6");var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("h1");e.setAttribute(r,"class","source-title designer-news");var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("a");e.setAttribute(d,"href","https://www.designernews.co/"),e.setAttribute(d,"target","_blank");var l=e.createTextNode("Designer News");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n    ");e.appendChild(n,r);var r=e.createElement("div");e.setAttribute(r,"id","dn-posts");var d=e.createTextNode("\n");e.appendChild(r,d);var d=e.createComment("");e.appendChild(r,d);var d=e.createTextNode("    ");e.appendChild(r,d),e.appendChild(n,r);var r=e.createTextNode("\n  ");e.appendChild(n,r),e.appendChild(a,n);var n=e.createTextNode("\n");e.appendChild(a,n),e.appendChild(t,a);var a=e.createTextNode("\n");return e.appendChild(t,a),t},buildRenderNodes:function(e,t,a){var n=e.childAt(t,[0]),r=new Array(2);return r[0]=e.createMorphAt(e.childAt(n,[1,3]),1,1),r[1]=e.createMorphAt(e.childAt(n,[3,3]),1,1),r},statements:[["block","each",[["get","model.hackerNews",["loc",[null,[7,14],[7,30]]]]],[],0,null,["loc",[null,[7,6],[9,15]]]],["block","each",[["get","model.designerNews",["loc",[null,[17,14],[17,32]]]]],[],1,null,["loc",[null,[17,6],[19,15]]]]],locals:[],templates:[e,t]}}())}),define("hdn/config/environment",["ember"],function(e){var t="hdn";try{var a=t+"/config/environment",n=e["default"].$('meta[name="'+a+'"]').attr("content"),r=JSON.parse(unescape(n));return{"default":r}}catch(d){throw new Error('Could not read config from meta tag with name "'+a+'".')}}),runningTests?require("hdn/tests/test-helper"):require("hdn/app")["default"].create({host:"https://hdn-api.herokuapp.com",name:"hdn",version:"0.0.0+e2acbd17"});