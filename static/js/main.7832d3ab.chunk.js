(this.webpackJsonptimer=this.webpackJsonptimer||[]).push([[0],[,,,,function(e,t,n){e.exports=n(12)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(3),o=n.n(r),i=(n(9),n(1)),u=(n(10),n(11),function(e){return e>9?e.toString():"0".concat(e.toString())}),l=function(e){var t=e.initialTimeSeconds,n=e.currentTimeSeconds,r=Object(c.useMemo)((function(){if(0!==t)return 0===n?a.a.createElement("div",null,"Time\u2019s up!"):n<=t/2?a.a.createElement("div",null,"More than halfway there!"):void 0}),[n,t]),o=Object(c.useMemo)((function(){return 0===t?"":n<=10&&n>0?"blinking":n<=20?"warning":""}),[n,t]),i=Object(c.useMemo)((function(){var e=u(parseInt(n/60)),t=u(n%60);return a.a.createElement("div",{className:"clock ".concat(o)},e,":",t)}),[o,n]);return a.a.createElement("div",null,r,i)};var s=function(){var e=Object(c.useState)(1),t=Object(i.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)(!1),u=Object(i.a)(o,2),s=u[0],m=u[1],b=Object(c.useState)(0),f=Object(i.a)(b,2),d=f[0],v=f[1],j=Object(c.useState)(0),O=Object(i.a)(j,2),E=O[0],h=O[1],p=Object(c.useCallback)((function(e){var t=60*parseInt(e.target.value);v(t),h(t)}),[]),k=Object(c.useCallback)((function(){m((function(e){return!e}))}),[]),g=Object(c.useCallback)((function(){h(d),m(!0)}),[d]),w=Object(c.useMemo)((function(){return 1e3/n}),[n]),C=Object(c.useMemo)((function(){return E<=0}),[E]),S=Object(c.useMemo)((function(){return s?a.a.createElement("button",{id:"playBtn",onClick:k},"Pause"):a.a.createElement("button",{id:"playBtn",onClick:k,disabled:C},"Play")}),[k,C,s]),M=Object(c.useMemo)((function(){return a.a.createElement("button",{onClick:g,disabled:E===d},"Reset")}),[E,g,d]),x=Object(c.useMemo)((function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement("button",{id:"btn1x",onClick:function(){return r(1)},className:1===n?"selected":void 0},"1x"),a.a.createElement("button",{id:"btn1_5x",onClick:function(){return r(1.5)},className:1.5===n?"selected":void 0},"1.5x"),a.a.createElement("button",{id:"btn2x",onClick:function(){return r(2)},className:2===n?"selected":void 0},"2x"))}),[n]);return Object(c.useEffect)((function(){if(s){var e=setInterval((function(){h((function(t){var n=t-1>0?t-1:0;return n<=0&&clearInterval(e),n}))}),w);return function(){return clearInterval(e)}}}),[w,s]),Object(c.useEffect)((function(){E<=0&&m(!1)}),[E]),a.a.createElement("div",{className:"App"},a.a.createElement("label",{htmlFor:"minutes"},"Countdown: "),a.a.createElement("input",{id:"minutes",placeholder:"(min)",onChange:p,type:"number",value:d/60,min:0,max:59}),a.a.createElement(l,{currentTimeSeconds:E,initialTimeSeconds:d}),S,M,x)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(s,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[4,1,2]]]);
//# sourceMappingURL=main.7832d3ab.chunk.js.map