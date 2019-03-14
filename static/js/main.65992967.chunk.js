(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,n,t){e.exports=t(32)},29:function(e,n,t){},30:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(16),i=t.n(a),c=t(10),s=t(7),l=t(18),u=t(19),h=(t(29),t(2)),d=t(3),f=t(5),b=t(4),p=t(6),g=function(){return function(e){var n;e({type:"REQUEST_ROBOTS_PENDING"}),(n="https://jsonplaceholder.typicode.com/users",fetch(n).then(function(e){return e.json()})).then(function(n){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:n})}).catch(function(n){return e({type:"REQUEST_ROBOTS_FAILED",payload:n})})}},m=function(e){function n(){return Object(h.a)(this,n),Object(f.a)(this,Object(b.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(d.a)(n,[{key:"shouldComponentUpdate",value:function(e,n){return!1}},{key:"render",value:function(){return o.a.createElement("h1",{className:"f1"},"RoboFriends")}}]),n}(r.Component),E=function(e){var n=e.name,t=e.email,r=e.id;return o.a.createElement("div",{className:"bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},o.a.createElement("img",{src:"https://robohash.org/".concat(r,"?200x200"),alt:"robot"}),o.a.createElement("div",null,o.a.createElement("h2",null,n),o.a.createElement("p",null,t)))},v=function(e){var n=e.robots;return o.a.createElement("div",null,n.map(function(e,t){return o.a.createElement(E,{key:t,id:n[t].id,name:n[t].name,email:n[t].email})}))},w=function(e){e.searchfield;var n=e.searchChange;return o.a.createElement("div",{className:"pa2"},o.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search Robots...",onChange:n}))},O=function(e){return o.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"700px"}},e.children)},y=function(e){function n(e){var t;return Object(h.a)(this,n),(t=Object(f.a)(this,Object(b.a)(n).call(this))).state={hasError:!1},t}return Object(p.a)(n,e),Object(d.a)(n,[{key:"componentDidCatch",value:function(e,n){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?o.a.createElement("h1",null,"Something went wrong!"):this.props.children}}]),n}(r.Component),j=(t(30),function(e){function n(){return Object(h.a)(this,n),Object(f.a)(this,Object(b.a)(n).apply(this,arguments))}return Object(p.a)(n,e),Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,n=e.searchField,t=e.onSearchChange,r=e.robots,a=e.isPending,i=r.filter(function(e){return e.name.toLowerCase().includes(n.toLowerCase())});return o.a.createElement("div",{className:"tc"},o.a.createElement(m,null),o.a.createElement(w,{searchChange:t}),o.a.createElement(O,null,a?o.a.createElement("h1",null,"Loading"):o.a.createElement(y,null,o.a.createElement(v,{robots:i}))))}}]),n}(r.Component)),R=Object(c.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending}},function(e){return{onSearchChange:function(n){return e({type:"CHANGE_SEARCH_FIELD",payload:n.target.value})},onRequestRobots:function(){return e(g())}}})(j),S=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e,n){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var k={searchField:""},_={isPending:!1,robots:[],error:""},T=(t(31),Object(l.createLogger)()),N=Object(s.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:n.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(n.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:n.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:n.payload,isPending:!1});default:return e}}}),U=Object(s.d)(N,Object(s.a)(u.a,T));i.a.render(o.a.createElement(c.a,{store:U},o.a.createElement(R,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/robofriends-with-redux",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var n="".concat("/robofriends-with-redux","/service-worker.js");S?(function(e,n){fetch(e).then(function(t){var r=t.headers.get("content-type");404===t.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e,n)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(n,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):C(n,e)})}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.65992967.chunk.js.map