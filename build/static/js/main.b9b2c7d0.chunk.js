(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(t,e,n){t.exports=n(50)},27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},30:function(t,e,n){},33:function(t,e,n){"use strict";n.r(e),n.d(e,"getData",function(){return i}),n.d(e,"sendData",function(){return c});var o=n(8),a=n.n(o);function i(){var t=Object({NODE_ENV:"production",PUBLIC_URL:""}).toDoListAPIURL||"http://localhost:8080/api/todolist";return a.a.get(t).then(function(t){return t.data}).catch(function(t){return console.log(t)})}function c(t){var e=Object({NODE_ENV:"production",PUBLIC_URL:""}).toDoListAPIURL||"http://localhost:8080/api/todolist";a.a.post(e,t).then(function(t){console.log(t)})}},50:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(19),c=n.n(i),r=n(21),l=n(2),s=n(3),u=n(5),d=n(4),p=n(6),f=(n(27),function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return a.a.createElement("div",{className:"toDoList"},a.a.createElement("form",{action:"submit",onSubmit:this.props.addItem},a.a.createElement("input",{type:"text",placeholder:"fix fence",ref:this.props.inputElement,value:this.props.currentItem.text,onChange:this.props.handleInputField}),a.a.createElement("button",{type:"submit"},"Add Task")))}}]),e}(a.a.Component)),m=(n(28),function(t){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(s.a)(e,[{key:"render",value:function(){var t=this,e=this.props.itemsArray.map(function(e){return a.a.createElement("li",{key:e.key,onClick:function(){return t.props.deleteItem(e.key)}},a.a.createElement("div",{className:"list-item-checkbox"}),e.title)});return a.a.createElement("ul",{className:"list-item"},e)}}]),e}(a.a.Component)),h=(n(29),n(30),n(20)),g=n(33),v=function(t){function e(){var t;return Object(l.a)(this,e),(t=Object(u.a)(this,Object(d.a)(e).call(this))).updateAppState=function(e){t.setState({items:e})},t.handleInputField=function(e){console.log("input received");var n=e.target.value,o={key:Date.now(),title:n,category:"placeholder",lat:"00.000000",long:"00.000000",location:"placeholder",details:"placeholder"};t.setState({currentItem:o})},t.addItem=function(e){e.preventDefault();var n=t.state.currentItem;console.log("adding new item to state: ".concat(n.title));var o=[].concat(Object(r.a)(t.state.items),[n]);t.setState({items:o,currentItem:{text:"",key:""}})},t.deleteItem=function(e){console.log("item (".concat(e,") removed"));var n=t.state.items.filter(function(t){return t.key!==e});t.setState({items:n})},t.state={items:[],currentItem:{text:"",key:""}},t}return Object(p.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){var t=this,e=new h.a("famappLocal");e.version(1).stores({todolist:"++id, title, category, details, location, lat, long"}),e.open().catch(function(t){return console.error("Open failed: ".concat(t))}),e.todolist.add({title:"derp",category:"a",details:"none",location:"melb",lat:3,long:5}),g.getData().then(function(n){t.updateAppState(n),console.log(n[0]),e.todolist.add(n)}).catch(function(t){return console.log(t)})}},{key:"getCurrentGPSPosition",value:function(){"geolocation"in navigator?navigator.geolocation.getCurrentPosition(function(t){console.log("lat: ".concat(t.coords.latitude)),console.log("long: ".concat(t.coords.longitude))}):console.log("geolocation is not enabled")}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(f,{addItem:this.addItem,inputElement:this.inputElement,handleInputField:this.handleInputField,currentItem:this.state.currentItem}),a.a.createElement(m,{itemsArray:this.state.items,deleteItem:this.deleteItem}))}}]),e}(a.a.Component),b=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(t,e){navigator.serviceWorker.register(t).then(function(t){t.onupdatefound=function(){var n=t.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(t)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(t)))})}}).catch(function(t){console.error("Error during service worker registration:",t)})}c.a.render(a.a.createElement(v,null),document.getElementById("root")),function(t){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");b?(function(t,e){fetch(t).then(function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then(function(t){t.unregister().then(function(){window.location.reload()})}):w(t,e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e,t),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):w(e,t)})}}()}},[[22,1,2]]]);
//# sourceMappingURL=main.b9b2c7d0.chunk.js.map