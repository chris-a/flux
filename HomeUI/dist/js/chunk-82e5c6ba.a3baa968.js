(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-82e5c6ba"],{"205f":function(e,t,r){"use strict";r.d(t,"a",(function(){return z}));var n=r("2b0e"),a=r("b42e"),o=r("c637"),c=r("a723"),i=r("9b76"),s=r("8690"),b=r("365c"),u=r("d82f"),l=r("cf75"),d=r("d580"),f=r("6197"),p=r("b885");function O(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function g(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?O(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var j=Object(l["d"])(Object(u["m"])(g(g({},Object(l["a"])(d["a"],l["f"].bind(null,"footer"))),{},{footer:Object(l["c"])(c["t"]),footerClass:Object(l["c"])(c["e"]),footerHtml:Object(l["c"])(c["t"])})),o["l"]),h=n["default"].extend({name:o["l"],functional:!0,props:j,render:function(e,t){var r,n=t.props,o=t.data,c=t.children,i=n.footerBgVariant,b=n.footerBorderVariant,u=n.footerTextVariant;return e(n.footerTag,Object(a["a"])(o,{staticClass:"card-footer",class:[n.footerClass,(r={},m(r,"bg-".concat(i),i),m(r,"border-".concat(b),b),m(r,"text-".concat(u),u),r)],domProps:c?{}:Object(s["a"])(n.footerHtml,n.footer)}),c)}}),v=r("4918");function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){P(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function P(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var x=Object(l["d"])(Object(u["m"])(w(w({},Object(u["k"])(v["b"],["src","alt","width","height","left","right"])),{},{bottom:Object(l["c"])(c["g"],!1),end:Object(l["c"])(c["g"],!1),start:Object(l["c"])(c["g"],!1),top:Object(l["c"])(c["g"],!1)})),o["n"]),k=n["default"].extend({name:o["n"],functional:!0,props:x,render:function(e,t){var r=t.props,n=t.data,o=r.src,c=r.alt,i=r.width,s=r.height,b="card-img";return r.top?b+="-top":r.right||r.end?b+="-right":r.bottom?b+="-bottom":(r.left||r.start)&&(b+="-left"),e("img",Object(a["a"])(n,{class:b,attrs:{src:o,alt:c,width:i,height:s}}))}});function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function D(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){S(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var T=Object(l["a"])(x,l["f"].bind(null,"img"));T.imgSrc.required=!1;var B=Object(l["d"])(Object(u["m"])(D(D(D(D(D(D({},f["b"]),p["b"]),j),T),d["a"]),{},{align:Object(l["c"])(c["t"]),noBody:Object(l["c"])(c["g"],!1)})),o["j"]),z=n["default"].extend({name:o["j"],functional:!0,props:B,render:function(e,t){var r,n=t.props,o=t.data,c=t.slots,u=t.scopedSlots,d=n.imgSrc,O=n.imgLeft,g=n.imgRight,m=n.imgStart,v=n.imgEnd,y=n.imgBottom,w=n.header,P=n.headerHtml,x=n.footer,C=n.footerHtml,D=n.align,B=n.textVariant,z=n.bgVariant,H=n.borderVariant,V=u||{},I=c(),E={},N=e(),_=e();if(d){var R=e(k,{props:Object(l["e"])(T,n,l["h"].bind(null,"img"))});y?_=R:N=R}var L=e(),A=Object(b["a"])(i["p"],V,I);(A||w||P)&&(L=e(p["a"],{props:Object(l["e"])(p["b"],n),domProps:A?{}:Object(s["a"])(P,w)},Object(b["b"])(i["p"],E,V,I)));var Z=Object(b["b"])(i["h"],E,V,I);n.noBody||(Z=e(f["a"],{props:Object(l["e"])(f["b"],n)},Z),n.overlay&&d&&(Z=e("div",{staticClass:"position-relative"},[N,Z,_]),N=e(),_=e()));var M=e(),$=Object(b["a"])(i["o"],V,I);return($||x||C)&&(M=e(h,{props:Object(l["e"])(j,n),domProps:A?{}:Object(s["a"])(C,x)},Object(b["b"])(i["o"],E,V,I))),e(n.tag,Object(a["a"])(o,{staticClass:"card",class:(r={"flex-row":O||m,"flex-row-reverse":(g||v)&&!(O||m)},S(r,"text-".concat(D),D),S(r,"bg-".concat(z),z),S(r,"border-".concat(H),H),S(r,"text-".concat(B),B),r)}),[N,L,Z,M,_])}})},3828:function(e,t,r){"use strict";r.d(t,"a",(function(){return v}));var n=r("2b0e"),a=r("c637"),o=r("0056"),c=r("a723"),i=r("9b76"),s=r("cf75"),b=r("b4ae"),u=r("8df8"),l=r("7b1e"),d=r("df44"),f=n["default"].extend({name:a["lb"],extends:d["a"],computed:{templateType:function(){return"popover"}},methods:{renderTemplate:function(e){var t=this.title,r=this.content,n=Object(l["e"])(t)?t({}):t,a=Object(l["e"])(r)?r({}):r,o=this.html&&!Object(l["e"])(t)?{innerHTML:t}:{},c=this.html&&!Object(l["e"])(r)?{innerHTML:r}:{};return e("div",{staticClass:"popover b-popover",class:this.templateClasses,attrs:this.templateAttributes,on:this.templateListeners},[e("div",{staticClass:"arrow",ref:"arrow"}),Object(l["o"])(n)||""===n?e():e("h3",{staticClass:"popover-header",domProps:o},[n]),Object(l["o"])(a)||""===a?e():e("div",{staticClass:"popover-body",domProps:c},[a])])}}}),p=n["default"].extend({name:a["kb"],extends:u["a"],computed:{templateType:function(){return"popover"}},methods:{getTemplate:function(){return f}}}),O=r("d82f");function g(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?g(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):g(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var h=Object(s["d"])(Object(O["m"])(m(m({},b["b"]),{},{content:Object(s["c"])(c["t"]),placement:Object(s["c"])(c["t"],"right"),triggers:Object(s["c"])(c["f"],o["f"])})),a["jb"]),v=n["default"].extend({name:a["jb"],extends:b["a"],inheritAttrs:!1,props:h,methods:{getComponent:function(){return p},updateContent:function(){this.setContent(this.normalizeSlot()||this.content),this.setTitle(this.normalizeSlot(i["O"])||this.title)}}})},4968:function(e,t,r){"use strict";r.d(t,"b",(function(){return b})),r.d(t,"a",(function(){return u}));var n=r("2b0e"),a=r("b42e"),o=r("c637"),c=r("a723"),i=r("cf75"),s=r("fa73"),b=Object(i["d"])({title:Object(i["c"])(c["t"]),titleTag:Object(i["c"])(c["t"],"h4")},o["q"]),u=n["default"].extend({name:o["q"],functional:!0,props:b,render:function(e,t){var r=t.props,n=t.data,o=t.children;return e(r.titleTag,Object(a["a"])(n,{staticClass:"card-title"}),o||Object(s["g"])(r.title))}})},6076:function(e,t,r){"use strict";r("99af");var n=r("b4c0");t["a"]={help:function(){return Object(n["a"])().get("/daemon/help")},helpSpecific:function(e){return Object(n["a"])().get("/daemon/help/".concat(e))},getInfo:function(){return Object(n["a"])().get("/daemon/getinfo")},getZelNodeStatus:function(){return Object(n["a"])().get("/daemon/getzelnodestatus")},getRawTransaction:function(e,t){return Object(n["a"])().get("/daemon/getrawtransaction/".concat(e,"/").concat(t))},listZelNodes:function(){return Object(n["a"])().get("/daemon/listzelnodes")},viewDeterministicZelNodeList:function(){return Object(n["a"])().get("/daemon/viewdeterministiczelnodelist")},getZelNodeCount:function(){return Object(n["a"])().get("/daemon/getzelnodecount")},getStartList:function(){return Object(n["a"])().get("/daemon/getstartlist")},getDOSList:function(){return Object(n["a"])().get("/daemon/getdoslist")},fluxCurrentWinner:function(){return Object(n["a"])().get("/daemon/fluxcurrentwinner")},getBenchmarks:function(){return Object(n["a"])().get("/daemon/getbenchmarks")},getBenchStatus:function(){return Object(n["a"])().get("/daemon/getbenchstatus")},startBenchmark:function(e){return Object(n["a"])().get("/daemon/startbenchmark",{headers:{zelidauth:e}})},stopBenchmark:function(e){return Object(n["a"])().get("/daemon/stopbenchmark",{headers:{zelidauth:e}})},getBlockchainInfo:function(){return Object(n["a"])().get("/daemon/getblockchaininfo")},getMiningInfo:function(){return Object(n["a"])().get("/daemon/getmininginfo")},getNetworkInfo:function(){return Object(n["a"])().get("/daemon/getnetworkinfo")},validateAddress:function(e,t){return Object(n["a"])().get("/daemon/validateaddress/".concat(t),{headers:{zelidauth:e}})},getWalletInfo:function(e){return Object(n["a"])().get("/daemon/getwalletinfo",{headers:{zelidauth:e}})},listZelNodeConf:function(e){return Object(n["a"])().get("/daemon/listzelnodeconf",{headers:{zelidauth:e}})},start:function(e){return Object(n["a"])().get("/daemon/start",{headers:{zelidauth:e}})},restart:function(e){return Object(n["a"])().get("/daemon/restart",{headers:{zelidauth:e}})},stopDaemon:function(e){return Object(n["a"])().get("/daemon/stop",{headers:{zelidauth:e}})},rescanDaemon:function(e,t){return Object(n["a"])().get("/daemon/rescanblockchain/".concat(t),{headers:{zelidauth:e}})},getBlock:function(e,t){return Object(n["a"])().get("/daemon/getblock/".concat(e,"/").concat(t))},tailDaemonDebug:function(e){return Object(n["a"])().get("/flux/taildaemondebug",{headers:{zelidauth:e}})},justAPI:function(){return Object(n["a"])()},cancelToken:function(){return n["b"]}}},6197:function(e,t,r){"use strict";r.d(t,"b",(function(){return O})),r.d(t,"a",(function(){return g}));var n=r("2b0e"),a=r("b42e"),o=r("c637"),c=r("a723"),i=r("d82f"),s=r("cf75"),b=r("d580"),u=r("4968"),l=r("ba06");function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function f(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var O=Object(s["d"])(Object(i["m"])(f(f(f(f({},u["b"]),l["b"]),Object(s["a"])(b["a"],s["f"].bind(null,"body"))),{},{bodyClass:Object(s["c"])(c["e"]),overlay:Object(s["c"])(c["g"],!1)})),o["k"]),g=n["default"].extend({name:o["k"],functional:!0,props:O,render:function(e,t){var r,n=t.props,o=t.data,c=t.children,i=n.bodyBgVariant,b=n.bodyBorderVariant,d=n.bodyTextVariant,f=e();n.title&&(f=e(u["a"],{props:Object(s["e"])(u["b"],n)}));var O=e();return n.subTitle&&(O=e(l["a"],{props:Object(s["e"])(l["b"],n),class:["mb-2"]})),e(n.bodyTag,Object(a["a"])(o,{staticClass:"card-body",class:[(r={"card-img-overlay":n.overlay},p(r,"bg-".concat(i),i),p(r,"border-".concat(b),b),p(r,"text-".concat(d),d),r),n.bodyClass]}),[f,O,c])}})},"7bb2":function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-card",[r("div",[r("label",{staticClass:"mr-1",attrs:{for:"sb-inline"}},[e._v("Block Height")]),r("b-form-spinbutton",{attrs:{id:"sb-inline",min:"0",max:e.blockHeight,"repeat-step-multiplier":"100",inline:""},model:{value:e.rescanDaemonHeight,callback:function(t){e.rescanDaemonHeight=t},expression:"rescanDaemonHeight"}}),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"ml-1",attrs:{id:"rescan-daemon",disabled:0===e.blockHeight,variant:"outline-primary",size:"md"}},[e._v(" Rescan Daemon ")]),r("b-popover",{ref:"popover",attrs:{target:"rescan-daemon",triggers:"click",show:e.popoverShow,placement:"auto",container:"my-container"},on:{"update:show":function(t){e.popoverShow=t}},scopedSlots:e._u([{key:"title",fn:function(){return[r("div",{staticClass:"d-flex justify-content-between align-items-center"},[r("span",[e._v("Are You Sure?")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"close",attrs:{variant:"transparent","aria-label":"Close"},on:{click:e.onClose}},[r("span",{staticClass:"d-inline-block text-white",attrs:{"aria-hidden":"true"}},[e._v("×")])])],1)]},proxy:!0}])},[r("div",[r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],staticClass:"mr-1",attrs:{size:"sm",variant:"danger"},on:{click:e.onClose}},[e._v(" Cancel ")]),r("b-button",{directives:[{name:"ripple",rawName:"v-ripple.400",value:"rgba(255, 255, 255, 0.15)",expression:"'rgba(255, 255, 255, 0.15)'",modifiers:{400:!0}}],attrs:{size:"sm",variant:"primary"},on:{click:e.onOk}},[e._v(" Rescan Blockchain ")])],1)]),r("b-modal",{attrs:{id:"modal-center",centered:"",title:"Blockchain Rescanning","ok-only":"","ok-title":"OK"},model:{value:e.modalShow,callback:function(t){e.modalShow=t},expression:"modalShow"}},[r("b-card-text",[e._v(" The daemon will now start rescanning the blockchain. This will take up to an hour. ")])],1)],1)])},a=[],o=r("1da1"),c=(r("96cf"),r("205f")),i=r("93aa"),s=r("1947"),b=r("3828"),u=r("6aac"),l=r("d6e4"),d=r("b307"),f=r("e009"),p=r("6076"),O={components:{BCard:c["a"],BFormSpinbutton:i["a"],BButton:s["a"],BPopover:b["a"],BModal:u["a"],BCardText:l["a"],ToastificationContent:d["a"]},directives:{Ripple:f["a"]},data:function(){return{blockHeight:0,rescanDaemonHeight:0,popoverShow:!1,modalShow:!1}},mounted:function(){this.daemonGetInfo()},methods:{daemonGetInfo:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p["a"].getInfo();case 2:r=t.sent,"error"===r.data.status?e.$toast({component:d["a"],props:{title:r.data.data.message||r.data.data,icon:"InfoIcon",variant:"danger"}}):e.blockHeight=r.data.data.blocks;case 4:case"end":return t.stop()}}),t)})))()},onClose:function(){this.popoverShow=!1},onOk:function(){var e=this;this.popoverShow=!1,this.modalShow=!0;var t=localStorage.getItem("zelidauth"),r=this.rescanDaemonHeight>0?this.rescanDaemonHeight:0;p["a"].rescanDaemon(t,r).then((function(t){e.$toast({component:d["a"],props:{title:t.data.data.message||t.data.data,icon:"InfoIcon",variant:"success"}})})).catch((function(){e.$toast({component:d["a"],props:{title:"Error while trying to rescan Daemon",icon:"InfoIcon",variant:"danger"}})}))}}},g=O,m=r("2877"),j=Object(m["a"])(g,n,a,!1,null,null,null);t["default"]=j.exports},b885:function(e,t,r){"use strict";r.d(t,"b",(function(){return p})),r.d(t,"a",(function(){return O}));var n=r("2b0e"),a=r("b42e"),o=r("c637"),c=r("a723"),i=r("8690"),s=r("d82f"),b=r("cf75"),u=r("d580");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p=Object(b["d"])(Object(s["m"])(d(d({},Object(b["a"])(u["a"],b["f"].bind(null,"header"))),{},{header:Object(b["c"])(c["t"]),headerClass:Object(b["c"])(c["e"]),headerHtml:Object(b["c"])(c["t"])})),o["m"]),O=n["default"].extend({name:o["m"],functional:!0,props:p,render:function(e,t){var r,n=t.props,o=t.data,c=t.children,s=n.headerBgVariant,b=n.headerBorderVariant,u=n.headerTextVariant;return e(n.headerTag,Object(a["a"])(o,{staticClass:"card-header",class:[n.headerClass,(r={},f(r,"bg-".concat(s),s),f(r,"border-".concat(b),b),f(r,"text-".concat(u),u),r)],domProps:c?{}:Object(i["a"])(n.headerHtml,n.header)}),c)}})},ba06:function(e,t,r){"use strict";r.d(t,"b",(function(){return b})),r.d(t,"a",(function(){return u}));var n=r("2b0e"),a=r("b42e"),o=r("c637"),c=r("a723"),i=r("cf75"),s=r("fa73"),b=Object(i["d"])({subTitle:Object(i["c"])(c["t"]),subTitleTag:Object(i["c"])(c["t"],"h6"),subTitleTextVariant:Object(i["c"])(c["t"],"muted")},o["o"]),u=n["default"].extend({name:o["o"],functional:!0,props:b,render:function(e,t){var r=t.props,n=t.data,o=t.children;return e(r.subTitleTag,Object(a["a"])(n,{staticClass:"card-subtitle",class:[r.subTitleTextVariant?"text-".concat(r.subTitleTextVariant):null]}),o||Object(s["g"])(r.subTitle))}})},d580:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("2b0e"),a=r("c637"),o=r("a723"),c=r("cf75"),i=Object(c["d"])({bgVariant:Object(c["c"])(o["t"]),borderVariant:Object(c["c"])(o["t"]),tag:Object(c["c"])(o["t"],"div"),textVariant:Object(c["c"])(o["t"])},a["j"]);n["default"].extend({props:i})},d6e4:function(e,t,r){"use strict";r.d(t,"a",(function(){return b}));var n=r("2b0e"),a=r("b42e"),o=r("c637"),c=r("a723"),i=r("cf75"),s=Object(i["d"])({textTag:Object(i["c"])(c["t"],"p")},o["p"]),b=n["default"].extend({name:o["p"],functional:!0,props:s,render:function(e,t){var r=t.props,n=t.data,o=t.children;return e(r.textTag,Object(a["a"])(n,{staticClass:"card-text"}),o)}})}}]);
//# sourceMappingURL=chunk-82e5c6ba.a3baa968.js.map