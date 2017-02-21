webpackJsonp([8,6],{0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var u=n(67),r=o(u),a=n(31),i=o(a),f=n(68),c=o(f),s=n(101),d=o(s),l=n(159),p=o(l),v=n(160),h=o(v),m=n(157),g=o(m),y=n(50),_=o(y);n(85),n(87),n(86);var b=n(158),w=o(b);i.default.use(d.default),i.default.use(_.default);var E=new d.default({routes:p.default});i.default.prototype.isIPhone=function(){return window.navigator.userAgent.indexOf("iPhone")>-1},i.default.prototype.isAndroid=function(){return window.navigator.userAgent.indexOf("Android")>-1},i.default.prototype.$const=function(e){return w.default[e]},i.default.prototype.loading=function(e){i.default.prototype._currentLoading=_.default.Indicator.open({text:e,spinnerType:"snake"})},i.default.prototype.loaded=function(e){i.default.nextTick(function(e){return _.default.Indicator.close()})},i.default.prototype.$messageBox=_.default.MessageBox,i.default.prototype.$message=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.length/4*1e3;return _.default.Toast({message:e,position:"bottom",duration:t})},E.beforeEach(function(e,t,n){if(i.default.prototype.loading("连接中..."),i.default.prototype.$webSocket)n();else{var o=g.default.init({path:"ws://118.190.4.119:9001",open:function(){var e=h.default.getters.user;o.request(e,"login").then(function(e){h.default.dispatch("login",e),e.inGame&&E.replace({name:"begin",params:{id:e.currentRoomId}}),n()})}});i.default.prototype.$webSocket=o}}),E.afterEach(function(){i.default.prototype.loaded()}),i.default.mixin({created:function(){var e=this,t=this.socketEvents;t&&(0,r.default)(t).forEach(function(n){e.$webSocket.on(n,t[n].bind(e))})},beforeDestory:function(){var e=this,t=this.socketEvents;t&&(0,r.default)(t).forEach(function(n){e.$webSocket.off(n,t[n].bind(e))})},methods:{$execute:function(e,t){"function"==typeof this[e]&&this[e](t)},send:function(e,t){}}}),new i.default({el:"#app",store:h.default,router:E,render:function(e){return e(c.default)}}),document.addEventListener("touchmove",function(e){e.preventDefault()},!1)},68:function(e,t,n){var o,u;n(91),o=n(162);var r=n(184);u=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(u=o=o.default),"function"==typeof u&&(u=u.options),u.render=r.render,u.staticRenderFns=r.staticRenderFns,e.exports=o},85:function(e,t){},86:function(e,t){},87:function(e,t){},91:function(e,t){},157:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var u=n(153),r=o(u),a=n(66),i=o(a),f=n(20),c=o(f);t.init=function(e){function t(){if(s.length){var e=s.shift();n(e),t()}}function n(e){a?d.send((0,i.default)(e)):s.push(e)}function o(e,t){var n=f[e];n&&n.forEach(function(e){return e(t)})}var u=this,a=!1,f={},s=[],d="",l=function(){u._ws=new window.WebSocket(e.path),d=u._ws,u._ws.onopen=function(t){a=!0,e._open(),e.open.call(u,t)},u._ws.onmessage=function(e){var t=e.data,n=JSON.parse(t);o("message",n),n.id?o(n.id,n):o(n.type,n.data)},u._ws.onclose=function(t){a=!1,e._close(),e.close.call(u,t)},u._ws.onerror=function(t){e.error.call(u,t)}},p={open:function(){},_open:function(){t()},_close:function(){setTimeout(l,5e3)},close:function(){},message:function(){},error:function(){}};return e=(0,c.default)({},p,e),this.send=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1,o={data:e,type:t};n(o)},this.request=function(e,t){return new r.default(function(o,r){try{var a=t+"_"+(new Date).getTime(),i={data:e,type:t,id:a};u.on(a,function(e){var t=e.data,n=e.error;n===!0&&r(t),o(t),delete f[a]}),n(i)}catch(e){r(e)}})},this.on=function(e,t){"function"==typeof t&&(f[e]||(f[e]=[]),f[e].push(t))},this.off=function(e,t){var n=f[e];n&&n.every(function(e){return e!==t||(n.splice(n.indexOf(e),1),!1)})},l(),this}},158:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={RoomType:{1:"公开",2:"私密 (不在游戏大厅显示)"},RoomStatus:{1:"准备中",2:"已开始"}}},159:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(68),r=o(u);t.default=[{path:"/",component:r.default},{path:"/no-page/:message",name:"no-page",component:function(e){return n.e(4,function(t){var n=[t(175)];e.apply(null,n)}.bind(this))}},{path:"/index",name:"index",component:function(e){return n.e(2,function(t){var n=[t(174)];e.apply(null,n)}.bind(this))}},{path:"/room/:id",name:"room",component:function(e){return n.e(1,function(t){var n=[t(179)];e.apply(null,n)}.bind(this))}},{path:"/begin/:id",name:"begin",component:function(e){return n.e(0,function(t){var n=[t(176)];e.apply(null,n)}.bind(this))}},{path:"/create-room",name:"create-room",component:function(e){return n.e(3,function(t){var n=[t(178)];e.apply(null,n)}.bind(this))}}]},160:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var u=n(20),r=o(u),a=n(31),i=o(a),f=n(100),c=o(f),s=n(161),d=o(s);i.default.use(c.default),t.default=new c.default.Store({state:{user:null},mutations:{SAVE_USER:function(e,t){e.user=t,d.default.put("user",t)}},actions:{login:function(e,t){var n=e.commit;e.state;n("SAVE_USER",t)},"change-user":function(e,t){var n=e.commit,o=e.state,u=o.user;n("SAVE_USER",(0,r.default)({},u,t))}},getters:{user:function(e){return e.user||d.default.get("user")||{}}}})},161:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function u(e){return p[e]||p.default}Object.defineProperty(t,"__esModule",{value:!0});var r=n(156),a=o(r),i=n(66),f=o(i),c=n(150),s=o(c),d=window.localStorage,l="@",p={number:{save:function(e){return e},parse:function(e){return s.default}},object:{save:function(e){return(0,f.default)(e)},parse:function(e){return JSON.parse(e)}},default:{save:function(e){return e},parse:function(e){return e}}};t.default={get:function(e){var t=d.getItem(e);if(t){var n=t.indexOf(l),o=t.substr(0,n),r=t.substr(n+1);return r=u(o).parse(r)}return null},put:function(e,t){var n="undefined"==typeof t?"undefined":(0,a.default)(t),o=u(n);t=n+l+o.save(t),d.setItem(e,t)},clear:function(){d.clear()}}},162:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app",created:function(){this.isIPhone()&&n.e(5,function(e){var t=n(99);t.attach(document.body)})},methods:{getParams:function(){var e=window.location.search;e=e&&e.substr(1);var t=e.split("&"),n={};return t.forEach(function(e){var t=e.split("=");return n[t[0]]=t[1],n}),n}},beforeRouteEnter:function(e,t,n){n(function(e){var t=e.getParams();e.$router.replace({path:"/"+(t.page||"index")})})}}},184:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},191:function(e,t){}});
//# sourceMappingURL=app.fbde75844e22f963d055.js.map