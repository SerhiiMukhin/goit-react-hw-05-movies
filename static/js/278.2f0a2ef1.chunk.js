"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{278:function(t,n,e){e.r(n);var r=e(439),a=e(87),u=e(689),c=e(937),i=e(791),o=e(184);n.default=function(){var t,n=(0,a.lr)(),e=(0,r.Z)(n,2),s=e[0],p=e[1],f=(0,i.useState)([]),l=(0,r.Z)(f,2),h=l[0],d=l[1],v=(0,u.TH)(),m=null!==(t=s.get("query"))&&void 0!==t?t:"";return(0,i.useEffect)((function(){(0,c.Wf)(m).then((function(t){d(t.results)})).catch((function(t){return console.log(t)}))}),[m]),(0,o.jsxs)("div",{children:[(0,o.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=t.target;p({query:t.target.query.value.trim()}),n.reset()},children:[(0,o.jsx)("input",{type:"text",name:"query"}),(0,o.jsx)("button",{type:"submit",children:"Submit"})]}),""!==m&&(0,o.jsx)("ul",{children:h.map((function(t){return(0,o.jsx)("li",{children:(0,o.jsx)(a.rU,{to:"".concat(t.id),state:{from:v},children:t.title||t.name})},t.id)}))})]})}},937:function(t,n,e){e.d(n,{Df:function(){return s},Pg:function(){return f},Wf:function(){return y},tx:function(){return v},zv:function(){return h}});var r=e(861),a=e(757),u=e.n(a),c=e(243),i="https://api.themoviedb.org/3/",o="a59dfea75e9e40e203f0819879862061";function s(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"trending/movie/day?api_key=").concat(o));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"movie/").concat(n,"?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function y(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"search/movie?api_key=").concat(o,"&language=en-US&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=278.2f0a2ef1.chunk.js.map