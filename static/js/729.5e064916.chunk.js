"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[729],{729:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var r=t(439),c=t(689),a=t(791),i=t(87),u=t(937),o=t(184),s=function(n){var e=n.info,t=e.title,r=e.name,c=e.poster_path,a=e.release_date,i=e.overview,u=e.genres;return(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(c),alt:t,title:t}),(0,o.jsx)("h1",{children:t||r}),(0,o.jsx)("p",{children:a.slice(0,4)}),(0,o.jsx)("h2",{children:"Overview"}),(0,o.jsx)("p",{children:i}),(0,o.jsx)("h2",{children:"Genres"}),(0,o.jsx)("ul",{children:0===u.length?(0,o.jsx)("li",{children:"No genres"}):(0,o.jsx)("li",{children:u.map((function(n){return n.name})).join(", ")})})]})},p=function(){var n,e,t=(0,c.UO)().movieId,p=(0,c.TH)(),l=(0,a.useState)(null),f=(0,r.Z)(l,2),h=f[0],d=f[1],v=(0,a.useRef)(null!==(n=null===(e=p.state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/");return(0,a.useEffect)((function(){(0,u.Pg)(t).then(d).catch((function(n){return console.log(n)}))}),[]),console.log(h),(0,o.jsxs)("div",{children:[(0,o.jsx)(i.rU,{to:v.current,children:"Go back"}),(0,o.jsx)("div",{children:h?(0,o.jsx)("div",{children:(0,o.jsx)(s,{info:h})}):(0,o.jsx)("h2",{children:"Loading..."})}),(0,o.jsx)("h2",{children:"Additional information"}),(0,o.jsx)(i.rU,{to:"cast",children:"Cast"}),(0,o.jsx)(i.rU,{to:"reviews",children:"Reviews"}),(0,o.jsx)(c.j3,{})]})}},937:function(n,e,t){t.d(e,{Df:function(){return s},Pg:function(){return l},Wf:function(){return g},tx:function(){return v},zv:function(){return h}});var r=t(861),c=t(757),a=t.n(c),i=t(243),u="https://api.themoviedb.org/3/",o="a59dfea75e9e40e203f0819879862061";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"trending/movie/day?api_key=").concat(o));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function l(n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"movie/").concat(e,"?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function v(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function g(n){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i.Z.get("".concat(u,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=729.5e064916.chunk.js.map