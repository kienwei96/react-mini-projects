(this.webpackJsonpsimplified_cra_starter_code=this.webpackJsonpsimplified_cra_starter_code||[]).push([[0],{23:function(e,t,c){},34:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c(14),s=c.n(i),a=c(18),o=c(2),r=c(7),j=(c(23),c(0));function l(){return Object(j.jsx)("h1",{children:"TV Maze App"})}var m=c(12),b=c.n(m),h=c(15);function u(e){var t=Object(n.useRef)();function c(){return(c=Object(h.a)(b.a.mark((function t(c){var n,i;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch("https://api.tvmaze.com/search/shows?q=".concat(c));case 3:return n=t.sent,t.next=6,n.json();case 6:i=t.sent,e.setMovie(i),console.log(i),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.log(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("input",{placeholder:"Enter movie title...",type:"text",ref:t}),Object(j.jsx)(r.b,{to:"/result",children:Object(j.jsx)("input",{value:"Search",type:"submit",onClick:function(){!function(e){c.apply(this,arguments)}(t.current.value.replace(/\s/,"+"))}})})]})}function d(e){return console.log(e.movie),Object(j.jsx)(r.b,{to:"/movieDetails/".concat(e.movie.id),children:Object(j.jsx)("div",{className:"movie",children:e.movie.image?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("img",{src:e.movie.image.medium,alt:e.movie.name}),Object(j.jsx)("p",{children:e.movie.name})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("img",{className:"noImage",src:"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",alt:e.movie.name}),Object(j.jsx)("p",{children:e.movie.name})]})})})}var x=function(e){var t=Object(o.g)();console.log(t);var c=e.movie.filter((function(e){return e.show.id.toString()===t.id}));return console.log(c),Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"MovieName: ".concat(c[0].show.name," ")}),Object(j.jsx)("h3",{children:"Rating: ".concat(c[0].score," ")}),Object(j.jsx)("h3",{children:"Language: ".concat(c[0].show.language," ")}),c[0].show.image?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("img",{className:"infoImg",src:c[0].show.image.original,alt:c[0].name}),Object(j.jsx)("p",{children:c[0].name})]}):Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("img",{className:"noImage",src:"https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg",alt:e.movie.name}),Object(j.jsx)("p",{children:e.movie.name})]})]})};var O=function(){var e=Object(n.useState)([]),t=Object(a.a)(e,2),c=t[0],i=t[1],s=c.map((function(e,t){return Object(j.jsx)(d,{movie:e.show},t)}));return console.log(c),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(l,{}),Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{exact:!0,path:"/",children:Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault()},children:Object(j.jsx)(u,{movie:c,setMovie:i})})}),Object(j.jsxs)(o.b,{exact:!0,path:"/result",children:[Object(j.jsx)(r.b,{to:"/",children:Object(j.jsx)("button",{onClick:function(){i([])},children:" Back to home "})}),Object(j.jsx)("div",{className:"display",children:s})]}),Object(j.jsxs)(o.b,{path:"/movieDetails/:id",children:[Object(j.jsx)(x,{movie:c}),Object(j.jsx)(r.b,{to:"/result",children:Object(j.jsx)("button",{children:" Back to previous page "})})]}),Object(j.jsx)(o.a,{to:"/"})]})]})};s.a.render(Object(j.jsx)(r.a,{children:Object(j.jsx)(O,{})}),document.getElementById("root"))}},[[34,1,2]]]);
//# sourceMappingURL=main.01966863.chunk.js.map