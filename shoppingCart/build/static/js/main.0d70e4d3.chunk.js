(this.webpackJsonpsimplified_cra_starter_code=this.webpackJsonpsimplified_cra_starter_code||[]).push([[0],{14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),r=c(9),a=c.n(r),s=c(2),o=c(7),l=(c(14),Object(n.createContext)()),u=c(0);var p=function(e){var t=Object(n.useContext)(l),c=Object(s.a)(t,2),i=(c[0],c[1]);return Object(u.jsxs)("div",{className:"AllTheThings",children:[Object(u.jsx)("h2",{children:"Put these in your cart!"}),Object(u.jsx)("ul",{children:e.product.map((function(e){return Object(u.jsx)("li",{onClick:function(){return i({type:"ADD",value:e})},children:"".concat(e.name," - $").concat(e.price)})}))})]})};var d=function(e){var t=Object(n.useContext)(l),c=Object(s.a)(t,2),i=c[0],r=c[1];return Object(u.jsxs)("div",{className:"MyShoppingCart",children:[Object(u.jsx)("h2",{children:"Your Cart!"}),Object(u.jsx)("ul",{children:i.map((function(e,t){return Object(u.jsx)("li",{onClick:function(){return r({type:"REMOVE",value:t})},children:"".concat(e.name," - $").concat(e.price)})}))})]})},j=c(4),b=c(3),m=Object(n.createContext)();var O=function(e){var t=Object(n.useContext)(m),c=Object(s.a)(t,2),i=c[0],r=c[1],a=Object(n.useState)({name:"",price:"",description:""}),l=Object(s.a)(a,2),p=l[0],d=l[1],O=Object(n.useState)(!1),h=Object(s.a)(O,2),f=h[0],v=h[1],g=Object(n.useState)(!1),x=Object(s.a)(g,2),y=x[0],k=x[1],C=Object(n.useState)(!1),S=Object(s.a)(C,2),N=S[0],w=S[1],A=Object(n.useState)(!0),D=Object(s.a)(A,2),E=D[0],_=D[1];return Object(u.jsx)("div",{className:"wrapper",children:Object(u.jsxs)("div",{className:"form-signin",children:[Object(u.jsx)("h2",{className:"form-signin-heading",children:e.title}),Object(u.jsx)("div",{className:"instruction",children:f&&y&&N?"":Object(u.jsxs)("p",{children:["Please enter a valid: ",f?"":"(name)"," ",y?"":"(price)"," ",N?"":"(description)"]})}),Object(u.jsx)("input",{className:"form-control",value:p.name,type:"text",name:"name",placeholder:"name, for etc: chocolate",onChange:function(e){d(Object(b.a)(Object(b.a)({},p),{},Object(j.a)({},e.target.name,e.target.value)))},onBlur:function(){var e,t=(e=p.name,/^[A-Za-z]+$/.test(String(e)));if(v(t),y&&N)return _(!1),E}}),Object(u.jsx)("input",{className:"form-control",value:p.price,type:"number",name:"price",placeholder:"price, for etc: 10.95",onChange:function(e){d(Object(b.a)(Object(b.a)({},p),{},Object(j.a)({},e.target.name,e.target.value)))},onBlur:function(){var e,t=(e=p.price,/^\d+\.\d{2}$/.test(String(e)));if(k(t),f&&N)return _(!1),E}}),Object(u.jsx)("input",{className:"form-control",value:p.description,type:"text",name:"description",placeholder:"description, for etc: food",onChange:function(e){d(Object(b.a)(Object(b.a)({},p),{},Object(j.a)({},e.target.name,e.target.value)))},onBlur:function(){var e,t=(e=p.description,/^[A-Za-z]+$/.test(String(e)));if(w(t),y&&f)return _(!1),E}}),Object(u.jsx)("input",{className:"button",type:"submit",onClick:function(){!function(e){r([e].concat(Object(o.a)(i)))}(p),d({name:"",price:"",description:""}),v(!1),k(!1),w(!1),_(!0)},disabled:E})]})})},h=[{name:"allen wrench",price:2.99,description:"handy tool"},{name:"cornucopia",price:5.99,description:"festive holiday decoration"},{name:"banana",price:.99,description:"full of potassium"},{name:"guillotine (cigar)",price:10.59,description:"behead your stub"},{name:"jack-o-lantern",price:3.99,description:"spooky seasonal fun"},{name:"doggie treat (box)",price:5.99,description:"fido loves 'em"},{name:"egg separator",price:3.99,description:"it separates yolks from whites"},{name:"LED lightbulb",price:6.55,description:"It's super-efficient!"},{name:"owl pellets",price:3.99,description:"Don't ask what they used to be."},{name:"flag",price:5.99,description:"catches the breeze"},{name:"hair brush",price:6.99,description:"fine boar bristles"},{name:"iridium (one gram)",price:19.36,description:"corrosion-resistant metal"},{name:"quark",price:.01,description:"Very small"},{name:"turtleneck",price:19.99,description:"available in black and slightly-darker black"},{name:"kaleidoscope",price:8.25,description:"tube with moving plastic pieces inside"},{name:"mitt (leather)",price:15,description:"regulation sized"},{name:"nothing",price:10,description:"Hey, if you pay us, we won't ask any questions."},{name:"violin",price:2e3,description:"Talk about a JS fiddle..."},{name:"yoyo",price:1,description:"We had to pull some strings to get this one in."},{name:"pincushion",price:1.99,description:"You'll get 'stuck' on it"}],f=function(e,t){switch(t.type){case"ADD":return[].concat(Object(o.a)(e),[t.value]);case"REMOVE":return e.filter((function(e,c){return c!==t.value}));default:return e}};function v(){var e=Object(n.useState)(h),t=Object(s.a)(e,2),c=t[0],i=t[1],r=Object(n.useReducer)(f,[]),a=Object(s.a)(r,2),o=a[0],j=a[1];return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Big Time Shopping"}),Object(u.jsx)(m.Provider,{value:[c,i],children:Object(u.jsx)(O,{})}),Object(u.jsx)("div",{className:"products",children:Object(u.jsxs)(l.Provider,{value:[o,j],children:[Object(u.jsx)(p,{product:c}),Object(u.jsx)(d,{})]})})]})}var g=document.getElementById("root");a.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(v,{})}),g)}},[[16,1,2]]]);
//# sourceMappingURL=main.0d70e4d3.chunk.js.map