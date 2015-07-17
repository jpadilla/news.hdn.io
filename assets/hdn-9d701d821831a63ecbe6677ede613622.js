define("hdn/adapters/application",["exports","ember-data","hdn/config/environment"],function(e,t,n){"use strict";e["default"]=t["default"].RESTAdapter.extend({host:n["default"].APP.host,namespace:"api",buildURL:function(e,t){var n=this.urlPrefix();return n+"/posts/"}})}),define("hdn/app",["exports","ember","ember/resolver","ember/load-initializers","hdn/config/environment"],function(e,t,n,a,r){"use strict";var d;t["default"].MODEL_FACTORY_INJECTIONS=!0,d=t["default"].Application.extend({modulePrefix:r["default"].modulePrefix,podModulePrefix:r["default"].podModulePrefix,Resolver:n["default"]}),a["default"](d,r["default"].modulePrefix),e["default"]=d}),define("hdn/components/hdn-post",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Component.extend({})}),define("hdn/controllers/array",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("hdn/controllers/object",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Controller}),define("hdn/initializers/export-application-global",["exports","ember","hdn/config/environment"],function(e,t,n){"use strict";function a(e,a){var r=t["default"].String.classify(n["default"].modulePrefix);n["default"].exportApplicationGlobal&&!window[r]&&(window[r]=a)}e.initialize=a,e["default"]={name:"export-application-global",initialize:a}}),define("hdn/instance-initializers/app-version",["exports","hdn/config/environment","ember"],function(e,t,n){"use strict";var a=n["default"].String.classify,r=!1;e["default"]={name:"App Version",initialize:function(e){if(!r){var d=a(e.toString());n["default"].libraries.register(d,t["default"].APP.version),r=!0}}}}),define("hdn/models/post",["exports","ember-data"],function(e,t){"use strict";var n=t["default"].attr;e["default"]=t["default"].Model.extend({url:n(),title:n(),points:n(),author:n(),authorURL:n(),commentsURL:n(),comments:n(),source:n()})}),define("hdn/router",["exports","ember","hdn/config/environment"],function(e,t,n){"use strict";var a=t["default"].Router.extend({location:n["default"].locationType});a.map(function(){}),e["default"]=a}),define("hdn/routes/index",["exports","ember"],function(e,t){"use strict";e["default"]=t["default"].Route.extend({model:function(){return this.store.findAll("post").then(function(e){var t={designerNews:[],hackerNews:[]};return e.forEach(function(e){"designer_news"===e.get("source")?t.designerNews.push(e):t.hackerNews.push(e)}),t})}})}),define("hdn/serializers/application",["exports","ember-data"],function(e,t){"use strict";e["default"]=t["default"].RESTSerializer.extend({extractArray:function(e,t,n,a,r){var d={},l=n.map(function(e){return{id:e.id,title:e.title,url:e.target_url,points:e.likes,author:e.author,authorURL:e.author_url,commentsURL:e.comments_url,comments:e.comments,source:e.source}});return d[t.modelName]=l,this._super(e,t,d,a,r)}})}),define("hdn/templates/application",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"hdn/templates/application.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,0,0,n),e.insertBoundary(t,0),a},statements:[["content","outlet",["loc",[null,[1,0],[1,10]]]]],locals:[],templates:[]}}())}),define("hdn/templates/components/hdn-post",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:12,column:0}},moduleName:"hdn/templates/components/hdn-post.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","row post-row");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","col-xs-11 post-info");var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("a");e.setAttribute(r,"class","post-title"),e.setAttribute(r,"target","_blank");var d=e.createComment("");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","post-meta");var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("span"),l=e.createTextNode("\n        ");e.appendChild(d,l);var l=e.createComment("");e.appendChild(d,l);var l=e.createTextNode(" points by ");e.appendChild(d,l);var l=e.createElement("a");e.setAttribute(l,"taget","_blank");var i=e.createComment("");e.appendChild(l,i),e.appendChild(d,l);var l=e.createTextNode(" |\n        ");e.appendChild(d,l);var l=e.createElement("a");e.setAttribute(l,"target","_blank");var i=e.createComment("");e.appendChild(l,i);var i=e.createTextNode(" comments");e.appendChild(l,i),e.appendChild(d,l);var l=e.createTextNode("\n      ");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[0,1]),r=e.childAt(a,[1]),d=e.childAt(a,[3,1]),l=e.childAt(d,[3]),i=e.childAt(d,[5]),o=new Array(7);return o[0]=e.createAttrMorph(r,"href"),o[1]=e.createMorphAt(r,0,0),o[2]=e.createMorphAt(d,1,1),o[3]=e.createAttrMorph(l,"href"),o[4]=e.createMorphAt(l,0,0),o[5]=e.createAttrMorph(i,"href"),o[6]=e.createMorphAt(i,0,0),o},statements:[["attribute","href",["concat",[["get","post.url",["loc",[null,[3,15],[3,23]]]]]]],["content","post.title",["loc",[null,[3,62],[3,76]]]],["content","post.points",["loc",[null,[6,8],[6,23]]]],["attribute","href",["concat",[["get","post.authorURL",["loc",[null,[6,45],[6,59]]]]]]],["content","post.author",["loc",[null,[6,78],[6,93]]]],["attribute","href",["concat",[["get","post.commentsURL",["loc",[null,[7,19],[7,35]]]]]]],["content","post.comments",["loc",[null,[7,55],[7,72]]]]],locals:[],templates:[]}}())}),define("hdn/templates/index",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){var e=function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:8,column:8},end:{line:10,column:8}},moduleName:"hdn/templates/index.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("          ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["inline","hdn-post",[],["post",["subexpr","@mut",[["get","post",["loc",[null,[9,26],[9,30]]]]],[],[]]],["loc",[null,[9,10],[9,32]]]]],locals:["post"],templates:[]}}(),t=function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:18,column:8},end:{line:20,column:8}},moduleName:"hdn/templates/index.hbs"},arity:1,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createTextNode("          ");e.appendChild(t,n);var n=e.createComment("");e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=new Array(1);return a[0]=e.createMorphAt(t,1,1,n),a},statements:[["inline","hdn-post",[],["post",["subexpr","@mut",[["get","post",["loc",[null,[19,26],[19,30]]]]],[],[]]],["loc",[null,[19,10],[19,32]]]]],locals:["post"],templates:[]}}();return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:37,column:0}},moduleName:"hdn/templates/index.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","container");var a=e.createTextNode("\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","row");var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","col-xs-12 col-sm-6 col-md-6");var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("h1");e.setAttribute(d,"class","source-title hacker-news");var l=e.createTextNode("\n        ");e.appendChild(d,l);var l=e.createElement("a");e.setAttribute(l,"href","https://news.ycombinator.com/"),e.setAttribute(l,"target","_blank");var i=e.createTextNode("Hacker News");e.appendChild(l,i),e.appendChild(d,l);var l=e.createTextNode("\n      ");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("div");e.setAttribute(d,"id","hn-posts");var l=e.createTextNode("\n");e.appendChild(d,l);var l=e.createComment("");e.appendChild(d,l);var l=e.createTextNode("      ");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","col-xs-12 col-sm-6 col-md-6");var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("h1");e.setAttribute(d,"class","source-title designer-news");var l=e.createTextNode("\n        ");e.appendChild(d,l);var l=e.createElement("a");e.setAttribute(l,"href","https://www.designernews.co/"),e.setAttribute(l,"target","_blank");var i=e.createTextNode("Designer News");e.appendChild(l,i),e.appendChild(d,l);var l=e.createTextNode("\n      ");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("div");e.setAttribute(d,"id","dn-posts");var l=e.createTextNode("\n");e.appendChild(d,l);var l=e.createComment("");e.appendChild(d,l);var l=e.createTextNode("      ");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n\n\n  ");e.appendChild(n,a);var a=e.createElement("div");e.setAttribute(a,"class","row");var r=e.createTextNode("\n    ");e.appendChild(a,r);var r=e.createElement("div");e.setAttribute(r,"class","col-xs-12");var d=e.createTextNode("\n      ");e.appendChild(r,d);var d=e.createElement("div");e.setAttribute(d,"class","footer");var l=e.createTextNode("\n        ");e.appendChild(d,l);var l=e.createElement("p");e.setAttribute(l,"class","text-center");var i=e.createTextNode("\n          Check out ");e.appendChild(l,i);var i=e.createElement("a");e.setAttribute(i,"href","http://hdn.io/#issues");var o=e.createTextNode("past issues");e.appendChild(i,o),e.appendChild(l,i);var i=e.createTextNode(". ");e.appendChild(l,i);var i=e.createElement("br");e.appendChild(l,i);var i=e.createTextNode("\n          Hacked together by ");e.appendChild(l,i);var i=e.createElement("a");e.setAttribute(i,"href","http://jpadilla.com");var o=e.createTextNode("José Padilla");e.appendChild(i,o),e.appendChild(l,i);var i=e.createTextNode(". ");e.appendChild(l,i);var i=e.createElement("br");e.appendChild(l,i);var i=e.createTextNode(" ");e.appendChild(l,i);var i=e.createElement("a");e.setAttribute(i,"href","http://hdn.io");var o=e.createTextNode("Subscribe");e.appendChild(i,o),e.appendChild(l,i);var i=e.createTextNode(" to the newsletter.\n        ");e.appendChild(l,i),e.appendChild(d,l);var l=e.createTextNode("\n      ");e.appendChild(d,l),e.appendChild(r,d);var d=e.createTextNode("\n    ");e.appendChild(r,d),e.appendChild(a,r);var r=e.createTextNode("\n  ");e.appendChild(a,r),e.appendChild(n,a);var a=e.createTextNode("\n");e.appendChild(n,a),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(e,t,n){var a=e.childAt(t,[0,1]),r=new Array(2);return r[0]=e.createMorphAt(e.childAt(a,[1,3]),1,1),r[1]=e.createMorphAt(e.childAt(a,[3,3]),1,1),r},statements:[["block","each",[["get","model.hackerNews",["loc",[null,[8,16],[8,32]]]]],[],0,null,["loc",[null,[8,8],[10,17]]]],["block","each",[["get","model.designerNews",["loc",[null,[18,16],[18,34]]]]],[],1,null,["loc",[null,[18,8],[20,17]]]]],locals:[],templates:[e,t]}}())}),define("hdn/templates/loading",["exports"],function(e){"use strict";e["default"]=Ember.HTMLBars.template(function(){return{meta:{revision:"Ember@1.13.3",loc:{source:null,start:{line:1,column:0},end:{line:2,column:0}},moduleName:"hdn/templates/loading.hbs"},arity:0,cachedFragment:null,hasRendered:!1,buildFragment:function(e){var t=e.createDocumentFragment(),n=e.createElement("div");e.setAttribute(n,"class","spinner"),e.appendChild(t,n);var n=e.createTextNode("\n");return e.appendChild(t,n),t},buildRenderNodes:function(){return[]},statements:[],locals:[],templates:[]}}())}),define("hdn/config/environment",["ember"],function(e){var t="hdn";try{var n=t+"/config/environment",a=e["default"].$('meta[name="'+n+'"]').attr("content"),r=JSON.parse(unescape(a));return{"default":r}}catch(d){throw new Error('Could not read config from meta tag with name "'+n+'".')}}),runningTests?require("hdn/tests/test-helper"):require("hdn/app")["default"].create({host:"https://hdn-api.herokuapp.com",name:"hdn",version:"0.0.0+13a43269"});