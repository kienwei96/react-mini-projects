(this.webpackJsonpsimplified_cra_starter_code=this.webpackJsonpsimplified_cra_starter_code||[]).push([[0],{27:function(e,t,c){},28:function(e,t,c){"use strict";c.r(t);c(0);var n,i=c(6),r=c.n(i),a=c(7),s=c(8),l=c(3),o=c(1);var u,b=Object(l.b)((function(e){return e}),(function(e){return{handleClick:function(t){e({type:t.action})},handleReset:function(){e({type:"RESET"})}}}))((function(e){var t=e.lightValues.map((function(t,c){return Object(o.jsx)("button",{onClick:function(){return e.handleClick(t)},children:t.name},c)})),c=s.a.div(n||(n=Object(a.a)(["\n    margin: 20px;\n  "])));return Object(o.jsxs)("div",{children:[Object(o.jsx)(c,{children:t}),Object(o.jsxs)("p",{children:["Number of clicks: ",e.numberOfClicks]}),Object(o.jsx)("button",{className:"reset",onClick:function(){return e.handleReset()},children:"Reset"})]})}));var O=Object(l.b)((function(e){return e}))((function(e){console.log("Lights - props",e);var t=s.a.div(u||(u=Object(a.a)(["\n    width: 100px;\n    height: 100px;\n    border-radius: 50%;\n    border: '1px solid';\n    color:white;\n    background:"," ;\n  "])),e.activeLight.color);return Object(o.jsx)(t,{})})),h=c(2),j={lightValues:[{name:"off",color:"rgba(0,0,0,1)",action:"SET_OFF"},{name:"low",color:"rgba(0,0,0,.6)",action:"SET_LOW"},{name:"med",color:"rgba(0,0,0,.4)",action:"SET_MED"},{name:"high",color:"rgba(0,0,0,.1)",action:"SET_HIGH"}],activeLight:{name:"off",color:"rgba(0,0,0,1)"},numberOfClicks:0},f=function(e,t){switch(t.type){case"SET_OFF":return Object(h.a)(Object(h.a)({},e),{},{activeLight:e.lightValues[0],numberOfClicks:e.numberOfClicks+=1});case"SET_LOW":return Object(h.a)(Object(h.a)({},e),{},{activeLight:e.lightValues[1],numberOfClicks:e.numberOfClicks+=1});case"SET_MED":return Object(h.a)(Object(h.a)({},e),{},{activeLight:e.lightValues[2],numberOfClicks:e.numberOfClicks+=1});case"SET_HIGH":return Object(h.a)(Object(h.a)({},e),{},{activeLight:e.lightValues[3],numberOfClicks:e.numberOfClicks+=1});case"RESET":return Object(h.a)(Object(h.a)({},e),{},{activeLight:e.lightValues[0],numberOfClicks:e.numberOfClicks=0});default:return Object(h.a)(Object(h.a)({},e),{},{activeLight:e.lightValues[0],numberOfClicks:e.numberOfClicks})}},g=c(14),d=Object(g.a)(f,j);var m=function(){return console.log(d.getState().activeLight.color),Object(o.jsx)(l.a,{store:d,children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(b,{}),Object(o.jsx)(O,{})]})})},k=(c(27),document.getElementById("root"));r.a.render(Object(o.jsx)(m,{}),k)}},[[28,1,2]]]);
//# sourceMappingURL=main.1ecd83a8.chunk.js.map