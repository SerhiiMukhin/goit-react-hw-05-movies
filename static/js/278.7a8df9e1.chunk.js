"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{278:function(t,e,n){n.r(e);var r=n(439),c=n(87),a=n(689),u=n(937),o=n(791),i=n(184);e.default=function(){var t,e=(0,c.lr)(),n=(0,r.Z)(e,2),s=n[0],p=n[1],f=(0,o.useState)([]),l=(0,r.Z)(f,2),h=l[0],v=l[1],d=(0,a.TH)(),m=null!==(t=s.get("query"))&&void 0!==t?t:"";return(0,o.useEffect)((function(){(0,u.Wf)(m).then((function(t){v(t.results)})).catch((function(t){return console.log(t)}))}),[m]),(0,i.jsxs)("div",{children:[(0,i.jsxs)("form",{onSubmit:function(t){t.preventDefault();var e=t.target;p({query:t.target.query.value.trim()}),e.reset()},children:[(0,i.jsx)("input",{type:"text",name:"query"}),(0,i.jsx)("button",{type:"submit",children:"Submit"})]}),""!==m&&(0,i.jsx)("ul",{children:h.map((function(t){return(0,i.jsx)("li",{children:(0,i.jsx)(c.rU,{to:"".concat(t.id),state:{from:d},children:t.title||t.name})},t.id)}))})]})}},937:function(t,e,n){n.d(e,{Df:function(){return s},Pg:function(){return f},Wf:function(){return y},tx:function(){return d},zv:function(){return h}});var r=n(861),c=n(757),a=n.n(c),u=n(243),o="https://api.themoviedb.org/3/",i="a59dfea75e9e40e203f0819879862061";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(a().mark((function t(){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(o,"trending/movie/day?api_key=").concat(i));case 3:return e=t.sent,t.abrupt("return",e.data);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(o,"movie/").concat(e,"?api_key=").concat(i,"&language=en-US"));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function h(t){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(o,"movie/").concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function d(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(o,"movie/").concat(e,"/reviews?api_key=").concat(i,"&language=en-US"));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}function y(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function t(e){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,u.Z.get("".concat(o,"search/movie?api_key=").concat(i,"&language=en-US&query=").concat(e));case 3:return n=t.sent,t.abrupt("return",n.data);case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}}}]);
//# sourceMappingURL=278.7a8df9e1.chunk.js.map