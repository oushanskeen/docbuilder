(this.webpackJsonpdoccon=this.webpackJsonpdoccon||[]).push([[0],[,,,,function(e,t,n){e.exports=n(11)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(3),r=n.n(o),s=(n(9),n(1)),c=(n(10),function(e,t){return"guest"===e&&"guest"===t?"read":"admin"===e&&"admin"===t?"read & write":"nothing"}),u=function(e,t,n){return i.a.createElement("div",{contentEditable:n,onInput:function(e){return t(e.currentTarget.textContent)}},e)},l=function(e){return i.a.createElement("div",{className:"header"},i.a.createElement("h1",null,"Hello ",e.name," I'm a doc builder!"))},d=function(e){return i.a.createElement("div",{className:"login"},u("YOURNAME",e.setLogin,"true"),u("YOURWORD",e.setPassword,"true"),"You are allowed to: ",i.a.createElement("h3",null,c(e.login,e.password)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement((function(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)("userpassword"),m=Object(s.a)(r,2),p=m[0],E=m[1],g=Object(a.useState)("ONE"),b=Object(s.a)(g,2),f=b[0],v=b[1],h={login:n,setLogin:o,password:p,setPassword:E},w={name:n};return i.a.createElement("div",{className:"wrapper"},i.a.createElement(l,w),i.a.createElement(d,h),"nothing"===c(n,p)?"":"read"===c(n,p)?i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"sidebar"},"VARIABLES:",u("ONE",v,"false")),i.a.createElement("div",{className:"content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",f," incididunt ut labore et dolore magna aliqua. Ut enim ad minim ",f,", quis nostrud exercitation",f," laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ",f," velit esse cillum dolore eu fugiat nulla ",f,". Excepteur sint occaecat ",f," non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")):i.a.createElement("div",{className:"content"},i.a.createElement("div",{className:"sidebar"},"VARIABLES:",u("ONE",v,"true")),i.a.createElement("div",{className:"content"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ",f," incididunt ut labore et dolore magna aliqua. Ut enim ad minim ",f,", quis nostrud exercitation",f," laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in ",f," velit esse cillum dolore eu fugiat nulla ",f,". Excepteur sint occaecat ",f," non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[4,1,2]]]);
//# sourceMappingURL=main.22d9d8e4.chunk.js.map