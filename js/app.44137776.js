(function(t){function e(e){for(var r,o,a=e[0],c=e[1],u=e[2],l=0,f=[];l<a.length;l++)o=a[l],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&f.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var a=n[o];0!==i[a]&&(r=!1)}r&&(s.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},i={app:0},s=[];function a(t){return c.p+"js/"+({list:"list",notfound:"notfound",settings:"settings"}[t]||t)+"."+{list:"72a4c8d7",notfound:"bde70ecf",settings:"5e9a5a11"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={list:1,settings:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise((function(e,n){for(var r="css/"+({list:"list",notfound:"notfound",settings:"settings"}[t]||t)+"."+{list:"ae00ee46",notfound:"31d6cfe0",settings:"afd9cf49"}[t]+".css",i=c.p+r,s=document.getElementsByTagName("link"),a=0;a<s.length;a++){var u=s[a],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return e()}var f=document.getElementsByTagName("style");for(a=0;a<f.length;a++){u=f[a],l=u.getAttribute("data-href");if(l===r||l===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||i,s=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete o[t],d.parentNode.removeChild(d),n(s)},d.href=i;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){o[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var s=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=a(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}i[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},1771:function(t,e,n){var r={"./001.png":"b92e","./002.png":"f857","./003.png":"da8b","./alarm.mp3":"a362","./logo.png":"cf05","./yay.mp3":"c7a5"};function o(t){var e=i(t);return n(e)}function i(t){if(!n.o(r,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return r[t]}o.keys=function(){return Object.keys(r)},o.resolve=i,t.exports=o,o.id="1771"},"3e8e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("e792"),n("0cdd");var r=n("2b0e"),o=n("5f5b"),i=n("b1e0");n("ab8b"),n("2dd8");r["default"].use(o["a"]),r["default"].use(i["a"]);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("b-container",[n("h1",{staticClass:"mt-3"},[t._v("トマトの時計")]),n("hr"),n("b-row",[n("b-col",{attrs:{cols:"6"}},[n("Home")],1),n("b-col",{attrs:{cols:"6"}},[n("b-row",[n("b-col",{attrs:{cols:"6"}},[n("b-btn",{staticClass:"btn1 mt-5",attrs:{to:"/list"}},[t._v("Check list")])],1),n("b-col",{attrs:{cols:"6"}},[n("b-btn",{staticClass:"btn2 mt-5",attrs:{to:"/settings"}},[t._v("Daily report")])],1),n("b-col",{attrs:{cols:"12"}},[n("router-view")],1)],1)],1)],1)],1)],1)},a=[],c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"home"}},[r("b-container",[r("b-row",[r("img",{staticClass:"img123",attrs:{src:n("b92e")}}),r("b-col",{staticClass:"text123",attrs:{cols:"12"}},[r("h1",{staticClass:"h1"},[t._v(t._s(t.timeText))]),r("h5",[t._v(t._s(t.currentText))]),1!==t.status?r("b-btn",{staticClass:"mx-1 w-50 start123",attrs:{variant:"dark"},on:{click:t.start}},[t._v("start")]):r("b-btn",{staticClass:"mx-1 w-50 h-100 py-2 pause123",attrs:{variant:"white"},on:{click:t.pause}},[r("b-icon",{attrs:{icon:"pause-fill","font-scale":"2.5"}})],1),r("br"),1===t.status?r("b-btn",{staticClass:"restart123",on:{click:t.restart}},[t._v("Restart")]):t._e()],1)],1)],1)],1)},u=[],l=(n("4d90"),n("d3b7"),n("25f0"),n("99af"),{data:function(){return{status:0,timer:0}},computed:{current:function(){return this.$store.state.current},items:function(){return this.$store.state.items},currentText:function(){return this.current.length>0?this.current:this.items.length>0?"點擊開始":"沒有事項"},timeleft:function(){return this.$store.state.timeleft},timeText:function(){var t=Math.floor(this.timeleft/60).toString().padStart(2,"0"),e=Math.floor(this.timeleft%60).toString().padStart(2,"0");return"".concat(t," : ").concat(e)}},methods:{start:function(){var t=this;0===this.status&&this.items.length>0&&this.$store.commit("start"),this.current.length&&(this.status=1,this.timer=setInterval((function(){t.$store.commit("countdown"),t.timeleft<=-1&&t.finish(!1)}),1e3))},pause:function(){this.status=2,clearInterval(this.timer)},finish:function(t){if(clearInterval(this.timer),this.status=0,this.$store.commit("finish"),!t){var e=new Audio;e.src=n("1771")("./"+this.$store.state.sound),e.play()}this.items.length>0&&this.start()},restart:function(){this.$store.commit("restart"),this.pause()}}}),f=l,d=(n("cccb"),n("2877")),m=Object(d["a"])(f,c,u,!1,null,null,null),p=m.exports,h={name:"App",components:{Home:p}},g=h,v=(n("034f"),Object(d["a"])(g,s,a,!1,null,null,null)),b=v.exports,A=n("9483");Object(A["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("3ca3"),n("ddb0");var w=n("8c4f");r["default"].use(w["a"]);var y=[{path:"/home",name:"Home",component:p,meta:{title:"番茄鐘",keepAlive:!0}},{path:"/settings",name:"Settings",component:function(){return n.e("settings").then(n.bind(null,"26d3"))},meta:{title:"番茄鐘 | 設定"}},{path:"/list",name:"List",component:function(){return n.e("list").then(n.bind(null,"1a33"))},meta:{title:"番茄鐘 | 事項"}},{path:"/404",name:"NotFound",component:function(){return n.e("notfound").then(n.bind(null,"9703"))},meta:{title:"番茄鐘 | 404"}},{path:"*",redirect:"/list"}],C=new w["a"]({routes:y});C.afterEach((function(t){document.title=t.meta.title}));var O=C,k=(n("a434"),n("b0c0"),n("2f62")),E=n("0e44");r["default"].use(k["a"]);var I=parseInt("1500"),S=parseInt("300"),T=new k["a"].Store({state:{sound:"alarm.mp3",items:[],current:"",finished:[],timeleft:I,break:!1},mutations:{selectSound:function(t,e){t.sound=e},additem:function(t,e){t.items.push({name:e,edit:!1,model:e})},edititem:function(t,e){t.items[e].edit=!0},delitem:function(t,e){t.items.splice(e,1)},submitedit:function(t,e){t.items[e].name=t.items[e].model,t.items[e].edit=!1},canceledit:function(t,e){t.items[e].model=t.items[e].name,t.items[e].edit=!1},start:function(t){t.current=t.break?"休息一下":t.items.shift().name},countdown:function(t){t.timeleft--},finish:function(t){t.break||t.finished.push(t.current),t.current="",t.items.length>0&&(t.break=!t.break),t.timeleft=t.break?S:I},delfinish:function(t,e){t.finished.splice(e,1)},restart:function(t){t.timeleft=I}},actions:{},modules:{},plugins:[Object(E["a"])({key:"pomodoro"})]});n("3e8e");r["default"].config.productionTip=!1,new r["default"]({router:O,store:T,render:function(t){return t(b)}}).$mount("#app")},"5ced":function(t,e,n){},"85ec":function(t,e,n){},a362:function(t,e,n){t.exports=n.p+"media/alarm.965b614d.mp3"},b92e:function(t,e,n){t.exports=n.p+"img/001.156e594d.png"},c7a5:function(t,e,n){t.exports=n.p+"media/yay.46c744f5.mp3"},cccb:function(t,e,n){"use strict";n("5ced")},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},da8b:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMwAAAAUCAYAAADBT9KwAAAABHNCSVQICAgIfAhkiAAABJ1JREFUaIHtmz+IHVUUxn+GNPJiJQ9TWIzYySCK4IsuUWHBoMXDSoQFsdtOm4iVCM/KSp4gtm6qYCVmsUslG11ZIcTFSjGdQuqtn8U9Z+fmvHNn7swO2d1xPhhm58693/nueefM/TOzMGLEiBEjRowYMWLEiBHnC7vAduLeCthJ3NuJ2i2BrZ51DQlLOYaCFVCetgiDPjUVhPheybEAJgAXgFvAq06jmZzf18oRplJ+tyeBKnJIQRXjIzkeBQrOhx8LzrbOG8BjwCW5/gRCwtwlBP/UNHgB+Bz4jfXMfV7O+z0KfLZHrv8zzosfz7LO+8Bt+fsI+A74NK5wAGyaRjvAHLguR4yFHIolYXq2LVw6lSvkfin19d4uD0/hllTDnx6p4TWHq4y0xPc2pb62m9GMLadPVt+Magg/IPgrHpXtlGwlbTzutrZj1PmxSWMKVsPM0dCW+6Q6czTVxckO6zGNlHmj3lx4jmETYCpGplRBFsMmmDpgLp2bCJ+2K6S+dlw7WEQcWwmxFk1cS4JDtiItSJsDKqeW5trDNuttNOG0zPJOIw0KL2EOqPwF4ceK/Zxj24PnxxyNKa4++t+nzhxNUB8nasfCGzjASTBLECfJhCp5VEh8jXTKZmzp1LMi5tF1bsI0caUW2Ha0gRCUC6cuVA8N68BNHv5xPF71mY5gXsLU+SvXtgfPjzkaPXgBZJ/mXbm76szRlILGiadPOexopr9LCWENA3APeInqKf0iYTMAwhzuBtW6ZUOuHxjif8z1oZyfisomYlg79kSiYzmo4/rV1C0I/dsz5X9i5qYRtL+3Tfkv0d9lgvcI+IqwDkyhzl85tnPRVaO2+8uU7zt1uvS/i84cTRZenBwBHwNXo3pXCWv2I9P+Xal7CHBRCh8QkmCDsOB5D/gganQHeJ3wA74p121QilGA3wnB8mRLjpNw6U7H3y3sXE6UW4dC8JmH51rY62o7F/cT5U0aU+364G7LtddQJ0ZTnPwEfA18Q/DrG8CXhmMKvA28pQUXo5t3CMmgog6je3vAt8AXhB21zzIEKx4XUQvgh6j85RYciono6Mp1ifyg+7dGg0WB/yP+kWnrJLZzUdBNY6pdH9xduVJ1FDlxsk/w8xXCiHWZ9RH9FUISHc+mLkQ39wjJcA340TTU5HmHsM1cJ9biacIwGgufAB+24FA805HrkKD7Sgtb9+Rs5+Exh/JumDqqqet7qhzbueiqUdvZ7d+ZU6eP/udw5WiC/Di5RZg5XQNuOpp+Br6vE61bcN5OwQJ/sQrpN/0r4DU56/0pYfHlbfnGmwTe01QXw3VcKS26sWEXel5fFd5OlW55nnSXLOUv5cmx7cHzY5+7ZF3636fOHE05cRLXy33FsIbrpHe25qSTqS5hSvz3HwunjSal3XKO0cRV95nOLGq7krpNjsp9D6O8ue9hmhIm17YHz49NGlOwGnQbt03/+9aZoyk35jSRPOyy/kplREvoU6kpaIdme6jwXomM6BEz0k+kIdseIvQBVJyyjsFC58upr7uHantoiL9GOcsfgJ5L6LpO58uP8t8YTtP2kKGfcuWutY7xHz64ymy8JFqDAAAAAElFTkSuQmCC"},f857:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAABHNCSVQICAgIfAhkiAAAAoRJREFUWIW9mL2KE1EUx38ZtlEER9BCLHa2UUHBgJUg7H0Dg0+QzjJ5gSV5BMEXSG2T+AQ7gqWoayGWKawszIBgpZst5lzvmdmZzT0zq3+4zEzu+fjfc7/OyQAbUuAZ4IBMNYBPQAGsgRx4I9+XCgccA1tjOxbd3sgaCKyAqTgYKtmh/DYVGa2zJETOjBGwEUMFMKecmlikolOIjY3YNGFCGM3CSKCJkI7QJFZxqpSmO2TvA7f/gV1GSngcYfy9yD6OJDNW9lunKSOsiZ2MBd9E/k6kPITIbGhZwH53LCINDoBTaQMDEQhrZlnvcITdEbswb4rOdyMJxIffTU53+GjMDcYeis7nDkQQX/5c+svOLyDLNn0iOu86Eqn4TQir13o37MnzT0cihfgEGCWEOcqNhvoS0T5dQvX2/N9EvM8sAfblY92RyO8eRPxSuL5HiIgmMgdmVKfLvxeUI3kg37eAwx0OnTxT4IRwVvmIDCGsXI2F+v2y28uary2wHVBGYh844Pz06JEMa+/XKO+Yn8CHxjgE+OytoIysjsRHyiiR03DCReCe6H016mk4sZEnhCgM26Rb8EueV3oQ8T7XCWovdyRytQcR7zOH7kf8QHROO5I4d8QXwFvpjM1DEAM/hNCNDkS8r8rV4gjJiiUqX0TvrpFESkjCXL2zNVm5ALnoPDUSWVJLATQyQrISO0WvRf65gYRPFQsuqHWsyfMrkX0RSWKs7O+scXTav6sGORK5owgSM2U3elNoMkv6F1h+TZhIeIyoloszI6FUdHTZai45PTKaC+oJ5dVfL8IPpW9Z01nRowjXcA2EYtqKyKvDWhillOF1lCNMgUfSd0L1j5oVhmT8DBGc/wer69VsAAAAAElFTkSuQmCC"}});
//# sourceMappingURL=app.44137776.js.map