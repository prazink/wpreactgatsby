(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{157:function(e,n,t){"use strict";t.r(n);t(98),t(179);var a=t(0),r=t.n(a),i=t(167),o=t(162),l=t(161),u=l.b.div.withConfig({displayName:"blogPostList__Pagination",componentId:"sc-1eo7bqt-0"})(["display:flex;justify-content:flex-end;"]),c=l.b.div.withConfig({displayName:"blogPostList__PageNumberWrapper",componentId:"sc-1eo7bqt-1"})(["border:1px solid #eee;background:",";"],function(e){return e.isCurrentPage?"#eee":"white"}),s=Object(l.b)(o.a).withConfig({displayName:"blogPostList__PageNumber",componentId:"sc-1eo7bqt-2"})(["display:block;padding:8px 16px;"]);n.default=function(e){var n=e.pageContext;return r.a.createElement(i.a,null,n.posts.map(function(e){return r.a.createElement("div",{key:e.node.wordpress_id},r.a.createElement("h3",{dangerouslySetInnerHTML:{__html:e.node.title}}),r.a.createElement("small",null,e.node.date),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.node.excerpt}}),r.a.createElement("div",null,r.a.createElement(o.a,{to:"/post/"+e.node.slug},"Read more")))}),r.a.createElement(u,null,Array.from({length:n.numberOfPages}).map(function(e,t){return r.a.createElement(c,{key:t,isCurrentPage:t+1===n.currentPage},r.a.createElement(s,{to:0===t?"/blog":"/blog/"+(t+1)},t+1))})))}},162:function(e,n,t){"use strict";t.d(n,"b",function(){return d});var a=t(0),r=t.n(a),i=t(5),o=t.n(i),l=t(40),u=t.n(l);t.d(n,"a",function(){return u.a});t(163);var c=r.a.createContext({});function s(e){var n=e.staticQueryData,t=e.data,a=e.query,i=e.render,o=t?t.data:n[a]&&n[a].data;return r.a.createElement(r.a.Fragment,null,o&&i(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var n=e.data,t=e.query,a=e.render,i=e.children;return r.a.createElement(c.Consumer,null,function(e){return r.a.createElement(s,{data:n,query:t,render:a||i,staticQueryData:e})})};d.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},163:function(e,n,t){var a;e.exports=(a=t(165))&&a.default||a},164:function(e){e.exports={data:{allWordpressWpApiMenusMenusItems:{edges:[{node:{name:"main menu",items:[{title:"Home",object_slug:"home"},{title:"Portfolio",object_slug:"portfolio"},{title:"Blog",object_slug:"blog"}]}}]}}}},165:function(e,n,t){"use strict";t.r(n);t(41);var a=t(0),r=t.n(a),i=t(5),o=t.n(i),l=t(64),u=function(e){var n=e.location,t=e.pageResources;return t?r.a.createElement(l.a,Object.assign({location:n,pageResources:t},t.json)):null};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=u},166:function(e){e.exports={data:{allWordpressSiteMetadata:{edges:[{node:{name:"pktechie",description:"Web and App Development"}}]}}}},167:function(e,n,t){"use strict";var a=t(168),r=t.n(a),i=t(0),o=t.n(i),l=t(164),u=t(162),c=t(161),s=(t(169),t(166)),d=c.b.div.withConfig({displayName:"SiteInfo__SiteInfoWrapper",componentId:"sc-15964tp-0"})(["flex-grow:1;color:white;margin:auto 0;"]),p=c.b.div.withConfig({displayName:"SiteInfo__SiteTitle",componentId:"sc-15964tp-1"})(["font-weight:bold;"]),m=function(){return o.a.createElement(u.b,{query:"1730324527",render:function(e){return o.a.createElement(d,null,o.a.createElement(p,null,e.allWordpressSiteMetadata.edges[0].node.name),o.a.createElement("div",null,e.allWordpressSiteMetadata.edges[0].node.description))},data:s})},f=c.b.div.withConfig({displayName:"MainMenu__MainMenuWrapper",componentId:"sc-3u0erf-0"})(["display:flex;background-color:rgb(3,27,77);"]),g=c.b.div.withConfig({displayName:"MainMenu__MainMenuInner",componentId:"sc-3u0erf-1"})(["max-width:960px;margin:0 auto;display:flex;width:960px;height:100%;"]),b=Object(c.b)(u.a).withConfig({displayName:"MainMenu__MenuItem",componentId:"sc-3u0erf-2"})(["color:white;display:block;padding:16px 16px;"]),y=function(){return o.a.createElement(u.b,{query:"867293748",render:function(e){return o.a.createElement(f,null,o.a.createElement(g,null,o.a.createElement(m,null),e.allWordpressWpApiMenusMenusItems.edges[0].node.items.map(function(e){return o.a.createElement(b,{to:"/"+e.object_slug,key:e.title},e.title)})))},data:l})};function h(){var e=r()(["\n@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i&display=swap');\n\n  body, html{\n    font-family: 'Open Sans', sans-serif;\n    margin: 0 !important;\n    padding: 0 !important;\n  }\n"]);return h=function(){return e},e}var v=Object(c.a)(h()),w=c.b.div.withConfig({displayName:"layout__LayoutWrapper",componentId:"ii2kc2-0"})(["max-width:960px;width:100%;margin:0 auto;"]);n.a=function(e){var n=e.children;return o.a.createElement("div",null,o.a.createElement(v,null),o.a.createElement(y,null),o.a.createElement(w,null,n))}},179:function(e,n,t){"use strict";var a=t(19),r=t(9),i=t(32),o=t(95),l=t(96),u=t(17),c=t(180),s=t(97);r(r.S+r.F*!t(65)(function(e){Array.from(e)}),"Array",{from:function(e){var n,t,r,d,p=i(e),m="function"==typeof this?this:Array,f=arguments.length,g=f>1?arguments[1]:void 0,b=void 0!==g,y=0,h=s(p);if(b&&(g=a(g,f>2?arguments[2]:void 0,2)),null==h||m==Array&&l(h))for(t=new m(n=u(p.length));n>y;y++)c(t,y,b?g(p[y],y):p[y]);else for(d=h.call(p),t=new m;!(r=d.next()).done;y++)c(t,y,b?o(d,g,[r.value,y],!0):r.value);return t.length=y,t}})},180:function(e,n,t){"use strict";var a=t(12),r=t(31);e.exports=function(e,n,t){n in e?a.f(e,n,r(0,t)):e[n]=t}}}]);
//# sourceMappingURL=component---src-templates-blog-post-list-js-e1eaea6e842187f435c6.js.map