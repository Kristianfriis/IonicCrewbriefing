var __awaiter=this&&this.__awaiter||function(e,n,t,r){function i(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,o){function a(e){try{s(r.next(e))}catch(e){o(e)}}function u(e){try{s(r["throw"](e))}catch(e){o(e)}}function s(e){e.done?t(e.value):i(e.value).then(a,u)}s((r=r.apply(e,n||[])).next())}))};var __generator=this&&this.__generator||function(e,n){var t={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,a;return a={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function u(e){return function(n){return s([e,n])}}function s(u){if(r)throw new TypeError("Generator is already executing.");while(a&&(a=0,u[0]&&(t=0)),t)try{if(r=1,i&&(o=u[0]&2?i["return"]:u[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,u[1])).done)return o;if(i=0,o)u=[u[0]&2,o.value];switch(u[0]){case 0:case 1:o=u;break;case 4:t.label++;return{value:u[1],done:false};case 5:t.label++;i=u[1];u=[0];continue;case 7:u=t.ops.pop();t.trys.pop();continue;default:if(!(o=t.trys,o=o.length>0&&o[o.length-1])&&(u[0]===6||u[0]===2)){t=0;continue}if(u[0]===3&&(!o||u[1]>o[0]&&u[1]<o[3])){t.label=u[1];break}if(u[0]===6&&t.label<o[1]){t.label=o[1];o=u;break}if(o&&t.label<o[2]){t.label=o[2];t.ops.push(u);break}if(o[2])t.ops.pop();t.trys.pop();continue}u=n.call(e,t)}catch(e){u=[6,e];i=0}finally{r=o=0}if(u[0]&5)throw u[1];return{value:u[0]?u[1]:void 0,done:true}}};var __spreadArray=this&&this.__spreadArray||function(e,n,t){if(t||arguments.length===2)for(var r=0,i=n.length,o;r<i;r++){if(o||!(r in n)){if(!o)o=Array.prototype.slice.call(n,0,r);o[r]=n[r]}}return e.concat(o||Array.prototype.slice.call(n))};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register(["./p-7b16490a.system.js","./p-8d9475b5.system.js","./p-8c15eda7.system.js","./p-815c2fba.system.js","./p-479cdbf8.system.js"],(function(e){"use strict";var n,t,r,i,o,a,u,s,l,c;return{setters:[function(e){n=e.b;t=e.c},function(e){r=e.C},function(e){i=e.OVERLAY_BACK_BUTTON_PRIORITY},function(e){o=e.c;a=e.f;u=e.a;s=e.b;l=e.g},function(e){c=e.p}],execute:function(){var d=this;var f=0;var v=0;var m=e("n",new WeakMap);var h=function(e){return{create:function(n){return x(e,n)},dismiss:function(n,t,r){return j(document,n,t,e,r)},getTop:function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(n){return[2,O(document,e)]}))}))}}};var p=e("a",h("ion-alert"));var y=e("b",h("ion-action-sheet"));var b=e("l",h("ion-loading"));var w=e("m",h("ion-modal"));var g=e("p",h("ion-picker"));var _=e("c",h("ion-popover"));var k=e("t",h("ion-toast"));var A=e("j",(function(e){if(typeof document!=="undefined"){F(document)}var n=f++;e.overlayIndex=n}));var E=e("k",(function(e){if(!e.hasAttribute("id")){e.id="ion-overlay-".concat(++v)}return e.id}));var x=function(e,n){if(typeof window!=="undefined"&&typeof window.customElements!=="undefined"){return window.customElements.whenDefined(e).then((function(){var t=document.createElement(e);t.classList.add("overlay-hidden");Object.assign(t,Object.assign(Object.assign({},n),{hasController:true}));V(document).appendChild(t);return new Promise((function(e){return o(t,e)}))}))}return Promise.resolve()};var S='[tabindex]:not([tabindex^="-"]):not([hidden]):not([disabled]), input:not([type=hidden]):not([tabindex^="-"]):not([hidden]):not([disabled]), textarea:not([tabindex^="-"]):not([hidden]):not([disabled]), button:not([tabindex^="-"]):not([hidden]):not([disabled]), select:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable:not([tabindex^="-"]):not([hidden]):not([disabled]), .ion-focusable[disabled="false"]:not([tabindex^="-"]):not([hidden])';var D=e("o",(function(e,n){var t=e.querySelector(S);var r=t===null||t===void 0?void 0:t.shadowRoot;if(r){t=r.querySelector(S)||t}if(t){a(t)}else{n.focus()}}));var L=function(e){return e.classList.contains("overlay-hidden")};var P=function(e,n){var t=Array.from(e.querySelectorAll(S));var r=t.length>0?t[t.length-1]:null;var i=r===null||r===void 0?void 0:r.shadowRoot;if(i){r=i.querySelector(S)||r}if(r){r.focus()}else{n.focus()}};var q=function(e,n){var t=O(n,"ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover");var r=e.target;if(!t||!r){return}if(t.classList.contains("ion-disable-focus-trap")){return}var i=function(){if(t===r){t.lastFocus=undefined}else{var e=l(t);if(!e.contains(r)){return}var i=e.querySelector(".ion-overlay-wrapper");if(!i){return}if(i.contains(r)||r===e.querySelector("ion-backdrop")){t.lastFocus=r}else{var o=t.lastFocus;D(i,t);if(o===n.activeElement){P(i,t)}t.lastFocus=n.activeElement}}};var o=function(){if(t.contains(r)){t.lastFocus=r}else{var e=t.lastFocus;D(t,t);if(e===n.activeElement){P(t,t)}t.lastFocus=n.activeElement}};if(t.shadowRoot){o()}else{i()}};var F=function(e){if(f===0){f=1;e.addEventListener("focus",(function(n){q(n,e)}),true);e.addEventListener("ionBackButton",(function(n){var t=O(e);if(t===null||t===void 0?void 0:t.backdropDismiss){n.detail.register(i,(function(){return t.dismiss(undefined,K)}))}}));e.addEventListener("keydown",(function(n){if(n.key==="Escape"){var t=O(e);if(t===null||t===void 0?void 0:t.backdropDismiss){t.dismiss(undefined,K)}}}))}};var j=function(e,n,t,r,i){var o=O(e,r,i);if(!o){return Promise.reject("overlay does not exist")}return o.dismiss(n,t)};var C=function(e,n){if(n===undefined){n="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"}return Array.from(e.querySelectorAll(n)).filter((function(e){return e.overlayIndex>0}))};var O=e("q",(function(e,n,t){var r=C(e,n).filter((function(e){return!L(e)}));return t===undefined?r[r.length-1]:r.find((function(e){return e.id===t}))}));var T=function(e){if(e===void 0){e=false}var n=V(document);var t=n.querySelector("ion-router-outlet, ion-nav, #ion-view-container-root");if(!t){return}if(e){t.setAttribute("aria-hidden","true")}else{t.removeAttribute("aria-hidden")}};var B=e("f",(function(e,r,i,o,a){return __awaiter(d,void 0,void 0,(function(){var u,s,l,c,d;return __generator(this,(function(f){switch(f.label){case 0:if(e.presented){return[2]}T(true);e.presented=true;e.willPresent.emit();(u=e.willPresentShorthand)===null||u===void 0?void 0:u.emit();l=n(e);c=e.enterAnimation?e.enterAnimation:t.get(r,l==="ios"?i:o);return[4,N(e,c,e.el,a)];case 1:d=f.sent();if(d){e.didPresent.emit();(s=e.didPresentShorthand)===null||s===void 0?void 0:s.emit()}if(e.el.tagName!=="ION-TOAST"){I(e.el)}if(e.keyboardClose&&(document.activeElement===null||!e.el.contains(document.activeElement))){e.el.focus()}return[2]}}))}))}));var I=function(e){return __awaiter(d,void 0,void 0,(function(){var n,t;return __generator(this,(function(r){switch(r.label){case 0:n=document.activeElement;if(!n){return[2]}t=n===null||n===void 0?void 0:n.shadowRoot;if(t){n=t.querySelector(S)||n}return[4,e.onDidDismiss()];case 1:r.sent();n.focus();return[2]}}))}))};var R=e("g",(function(e,r,i,o,a,u,s){return __awaiter(d,void 0,void 0,(function(){var l,c,d,f,v;return __generator(this,(function(h){switch(h.label){case 0:if(!e.presented){return[2,false]}T(false);e.presented=false;h.label=1;case 1:h.trys.push([1,4,,5]);e.el.style.setProperty("pointer-events","none");e.willDismiss.emit({data:r,role:i});(l=e.willDismissShorthand)===null||l===void 0?void 0:l.emit({data:r,role:i});d=n(e);f=e.leaveAnimation?e.leaveAnimation:t.get(o,d==="ios"?a:u);if(!(i!==U))return[3,3];return[4,N(e,f,e.el,s)];case 2:h.sent();h.label=3;case 3:e.didDismiss.emit({data:r,role:i});(c=e.didDismissShorthand)===null||c===void 0?void 0:c.emit({data:r,role:i});m.delete(e);e.el.classList.add("overlay-hidden");e.el.style.removeProperty("pointer-events");if(e.el.lastFocus!==undefined){e.el.lastFocus=undefined}return[3,5];case 4:v=h.sent();console.error(v);return[3,5];case 5:e.el.remove();return[2,true]}}))}))}));var V=function(e){return e.querySelector("ion-app")||e.body};var N=function(e,n,r,i){return __awaiter(d,void 0,void 0,(function(){var o,a,u;return __generator(this,(function(s){switch(s.label){case 0:r.classList.remove("overlay-hidden");o=e.el;a=n(o,i);if(!e.animated||!t.getBoolean("animated",true)){a.duration(0)}if(e.keyboardClose){a.beforeAddWrite((function(){var e=r.ownerDocument.activeElement;if(e===null||e===void 0?void 0:e.matches("input,ion-input, ion-textarea")){e.blur()}}))}u=m.get(e)||[];m.set(e,__spreadArray(__spreadArray([],u,true),[a],false));return[4,a.play()];case 1:s.sent();return[2,true]}}))}))};var G=e("h",(function(e,n){var t;var r=new Promise((function(e){return t=e}));M(e,n,(function(e){t(e.detail)}));return r}));var M=function(e,n,t){var r=function(i){s(e,n,r);t(i)};u(e,n,r)};var W=e("i",(function(e){return e==="cancel"||e===K}));var Y=function(e){return e()};var z=e("s",(function(e,n){if(typeof e==="function"){var r=t.get("_zoneGate",Y);return r((function(){try{return e(n)}catch(e){throw e}}))}return undefined}));var K=e("B","backdrop");var U=e("G","gesture");var H=e("d",(function(e){var n=false;var t;var i=r();var o=function(r){if(r===void 0){r=false}if(t&&!r){return{delegate:t,inline:n}}var o=e.el,a=e.hasController,u=e.delegate;var s=o.parentNode;n=s!==null&&!a;t=n?u||i:u;return{inline:n,delegate:t}};var a=function(n){return __awaiter(d,void 0,void 0,(function(){var t,r;return __generator(this,(function(i){switch(i.label){case 0:t=o(true).delegate;if(!t)return[3,2];return[4,t.attachViewToDom(e.el,n)];case 1:return[2,i.sent()];case 2:r=e.hasController;if(r&&n!==undefined){throw new Error("framework delegate is missing")}return[2,null]}}))}))};var u=function(){var n=o().delegate;if(n&&e.el!==undefined){n.removeViewFromDom(e.el.parentElement,e.el)}};return{attachViewToDom:a,removeViewFromDom:u}}));var J=e("e",(function(){var e;var n=function(){if(e){e();e=undefined}};var t=function(t,r){n();var i=r!==undefined?document.getElementById(r):null;if(!i){c('A trigger element with the ID "'.concat(r,'" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on an overlay component.'),t);return}var o=function(e,n){var t=function(){n.present()};e.addEventListener("click",t);return function(){e.removeEventListener("click",t)}};e=o(i,t)};return{addClickListener:t,removeClickListener:n}}))}}}));