(this.webpackJsonptodo_redux=this.webpackJsonptodo_redux||[]).push([[0],{29:function(e){e.exports=JSON.parse('{"domain":"dev-6nrcob3m.auth0.com","clientId":"UCRFiDVKMmDweVXATiLVSWRzPNlX2zAD"}')},41:function(e,t,n){e.exports=n(55)},55:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(21),c=n.n(o),l=n(16),i=n(22),u=n(20),s=n(10),d=function(e){var t=e.createTodo,n=Object(a.useState)({name:""}),o=Object(s.a)(n,2),c=o[0],l=o[1];return r.a.createElement("div",null,r.a.createElement("h2",null,"Add a Todo!"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c.name.length>=1&&t([Object(u.a)(Object(u.a)({},c),{},{isComplete:!1})]),l({name:""})}},r.a.createElement("div",null,r.a.createElement("label",null,"Todo: "),r.a.createElement("input",{type:"text",name:"name",value:c.name,onChange:function(e){return l(Object(u.a)(Object(u.a)({},c),{},Object(i.a)({},e.target.name,e.target.value)))}})),r.a.createElement("button",{type:"submit"},"Submit")))},m=Object(l.b)(null,{createTodo:function(e){return console.log("Creating Todo - Action"),{type:"CREATE_TODO",payload:e}}})(d),p=n(12),f=n(13),g=n(57);function h(){var e=Object(p.a)(["\n  background: ",";\n  color: white;\n"]);return h=function(){return e},e}var E=f.a.div(h(),(function(e){return e.props?"green":"red"})),b=function(e){var t=e.todos,n=e.toggleTodo,a=e.deleteTodo;return r.a.createElement("div",null,void 0!==t?t.map((function(e,t){return r.a.createElement("div",{key:Object(g.a)()},r.a.createElement(E,{props:e.isComplete,onClick:function(){n({itemInfo:e,index:t})}},r.a.createElement("h4",null,e.name)),r.a.createElement("button",{onClick:function(){return a(e)}},"X"))})):null)},O=Object(l.b)((function(e){return{todos:e.todo.todos}}),{toggleTodo:function(e){return console.log("Toggle Todo - Action"),{type:"TOGGLE_TODOS",payload:e}},deleteTodo:function(e){return console.log("Deleting Todo - Action"),{type:"DELETE_TODO",payload:e}}})(b),v=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Todos:"),r.a.createElement(m,null),r.a.createElement(O,null))},j=n(7),y=n.n(j),T=n(17),w=n(24),x=n(37),k=function(){return window.history.replaceState({},document.title,window.location.pathname)},S=r.a.createContext(),C=function(){return Object(a.useContext)(S)},_=function(e){var t=e.children,n=e.onRedirectCallback,o=void 0===n?k:n,c=Object(w.a)(e,["children","onRedirectCallback"]),l=Object(a.useState)(),i=Object(s.a)(l,2),u=i[0],d=i[1],m=Object(a.useState)(),p=Object(s.a)(m,2),f=p[0],g=p[1],h=Object(a.useState)(),E=Object(s.a)(h,2),b=E[0],O=E[1],v=Object(a.useState)(!0),j=Object(s.a)(v,2),C=j[0],_=j[1],D=Object(a.useState)(!1),R=Object(s.a)(D,2),A=R[0],I=R[1];Object(a.useEffect)((function(){(function(){var e=Object(T.a)(y.a.mark((function e(){var t,n,a,r,l;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(x.a)(c);case 2:if(t=e.sent,O(t),!window.location.search.includes("code=")||!window.location.search.includes("state=")){e.next=10;break}return e.next=7,t.handleRedirectCallback();case 7:n=e.sent,a=n.appState,o(a);case 10:return e.next=12,t.isAuthenticated();case 12:if(r=e.sent,d(r),!r){e.next=19;break}return e.next=17,t.getUser();case 17:l=e.sent,g(l);case 19:_(!1);case 20:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var L=function(){var e=Object(T.a)(y.a.mark((function e(){var t,n,a=arguments;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:{},I(!0),e.prev=2,e.next=5,b.loginWithPopup(t);case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.error(e.t0);case 10:return e.prev=10,I(!1),e.finish(10);case 13:return e.next=15,b.getUser();case 15:n=e.sent,g(n),d(!0);case 18:case"end":return e.stop()}}),e,null,[[2,7,10,13]])})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(T.a)(y.a.mark((function e(){var t;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(!0),e.next=3,b.handleRedirectCallback();case 3:return e.next=5,b.getUser();case 5:t=e.sent,_(!1),d(!0),g(t);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement(S.Provider,{value:{isAuthenticated:u,user:f,loading:C,popupOpen:A,loginWithPopup:L,handleRedirectCallback:W,getIdTokenClaims:function(){return b.getIdTokenClaims.apply(b,arguments)},loginWithRedirect:function(){return b.loginWithRedirect.apply(b,arguments)},getTokenSilently:function(){return b.getTokenSilently.apply(b,arguments)},getTokenWithPopup:function(){return b.getTokenWithPopup.apply(b,arguments)},logout:function(){return b.logout.apply(b,arguments)}}},t)},D=function(){var e=C(),t=e.loading,n=e.user;return t?r.a.createElement("div",null,"Loading..."):(console.log(n),r.a.createElement("div",null,!n&&r.a.createElement("h1",null,"Welcome Home"),n&&r.a.createElement("h1",null,"Welcome Back ",n.name,"!")))},R=function(){var e=C(),t=e.loading,n=e.user;return t||!n?r.a.createElement("div",null,"Loading..."):r.a.createElement(a.Fragment,null,r.a.createElement("img",{src:n.picture,alt:"Profile"}),r.a.createElement("h2",null,n.name),r.a.createElement("p",null,n.email),r.a.createElement("code",null,JSON.stringify(n,null,2)))},A=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"404"),r.a.createElement("h1",null,"Sorry that page does not exist..."))},I=n(18),L=n(2),W=function(e){var t=e.component,n=e.path,o=Object(w.a)(e,["component","path"]),c=C(),l=c.loading,i=c.isAuthenticated,u=c.loginWithRedirect;Object(a.useEffect)((function(){l||i||function(){var e=Object(T.a)(y.a.mark((function e(){return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u({appState:{targetUrl:window.location.pathname}});case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[l,i,u,n]);return r.a.createElement(L.b,Object.assign({path:n,render:function(e){return!0===i?r.a.createElement(t,e):null}},o))};function N(){var e=Object(p.a)(["\n  color: white;\n  text-decoration: none;\n  font-family: sans-serif;\n"]);return N=function(){return e},e}function P(){var e=Object(p.a)(["\n  width: 75px;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return P=function(){return e},e}function U(){var e=Object(p.a)(["\n  width: 80%;\n  height: 100%;\n  margin: auto 0;\n  display: flex;\n  list-style-type: none;\n  justify-content: center;\n"]);return U=function(){return e},e}function X(){var e=Object(p.a)(["\n  width: 100vw;\n  background: lightgray;\n  color: white;\n  height: 5vh;\n"]);return X=function(){return e},e}var J=f.a.nav(X()),V=f.a.ul(U()),G=f.a.li(P()),z=Object(f.a)(I.b)(N()),B=function(){var e=C(),t=e.isAuthenticated,n=e.loginWithRedirect,a=e.logout;return r.a.createElement(J,null,r.a.createElement(V,null,r.a.createElement(G,null,r.a.createElement(z,{to:"/"},"Home")),r.a.createElement(G,null,r.a.createElement(z,{to:"/local-list"},"Quick List")),t&&r.a.createElement(G,null,r.a.createElement(z,{to:"/profile"},"My Profile")),r.a.createElement(G,null,!t&&r.a.createElement("button",{onClick:function(){return n({})}},"Log in"),t&&r.a.createElement("button",{onClick:function(){return a()}},"Log out"))))},F=n(4),H=Object(F.a)(),M=function(){return C().loading?r.a.createElement("div",null,"Loading..."):r.a.createElement(I.a,{history:H},r.a.createElement(B,null),r.a.createElement(L.d,null,r.a.createElement(L.b,{path:"/",exact:!0,component:D}),r.a.createElement(L.b,{path:"/local-list",exact:!0,component:v}),r.a.createElement(L.b,{path:"/404",component:A}),r.a.createElement(W,{path:"/profile",exact:!0,component:R}),r.a.createElement(L.a,{from:"*",to:"/404"})))},K=n(9),Q=n(38),q=n(40),Y={todos:[]},Z=function(e,t,n){var a=e.slice(0);return a[t]=n,a},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TOGGLE_TODOS":var n=Z(e.todos,t.payload.index,{name:t.payload.itemInfo.name,isComplete:!t.payload.itemInfo.isComplete});return{todos:n};case"CREATE_TODO":return console.log("Adding Post - Reducer"),{todos:[t.payload[0]].concat(Object(q.a)(e.todos))};case"DELETE_TODO":console.log("Deleting Todo- Reducer");var a=e.todos.filter((function(e){return e.name===t.payload.name?(console.log("Deleted Todo"),null):e}));return{todos:a};default:return e}},ee=Object(K.c)({todo:$}),te=n(39),ne=function(e){try{return localStorage.getItem("state")?JSON.parse(localStorage.getItem("state")):{}}catch(t){return{}}}(),ae=[Q.a],re=Object(K.e)(ee,ne,Object(K.d)(K.a.apply(void 0,ae),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}));re.subscribe(Object(te.throttle)((function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){console.log(n)}}(re.getState())})),1e3);var oe=re,ce=n(29);c.a.render(r.a.createElement(_,{domain:ce.domain,client_id:ce.clientId,redirect_uri:window.location.origin,onRedirectCallback:function(e){H.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}},r.a.createElement(l.a,{store:oe},r.a.createElement(M,null))),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.30ce6f27.chunk.js.map