/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
System.register(["./p-0e94957a.system.js","./p-815c2fba.system.js"],(function(e){"use strict";var t,n,r;return{setters:[function(e){t=e.d},function(e){n=e.u;r=e.v}],execute:function(){var a=e("startTapClick",(function(e){if(t===undefined){return}var a=-v*10;var d=0;var l;var p;var m;var L=e.getBoolean("animated",true)&&e.getBoolean("rippleEffect",true);var h=new WeakMap;var w=function(e){a=n(e);b(e)};var E=function(e){a=n(e);R(e)};var g=function(e){if(e.button===2){return}var t=n(e)-v;if(a<t){b(e)}};var y=function(e){var t=n(e)-v;if(a<t){R(e)}};var T=function(){if(m)clearTimeout(m);m=undefined;if(l){q(false);l=undefined}};var b=function(e){if(l){return}S(i(e),e)};var R=function(e){S(undefined,e)};var S=function(e,t){if(e&&e===l){return}if(m)clearTimeout(m);m=undefined;var n=r(t),a=n.x,i=n.y;if(l){if(h.has(l)){throw new Error("internal error")}if(!l.classList.contains(f)){j(l,a,i)}q(true)}if(e){var u=h.get(e);if(u){clearTimeout(u);h.delete(e)}e.classList.remove(f);var c=function(){j(e,a,i);m=undefined};if(o(e)){c()}else{m=setTimeout(c,s)}}l=e};var j=function(e,t,n){d=Date.now();e.classList.add(f);if(!L)return;var r=u(e);if(r!==null){k();p=r.addRipple(t,n)}};var k=function(){if(p!==undefined){p.then((function(e){return e()}));p=undefined}};var q=function(e){k();var t=l;if(!t){return}var n=c-Date.now()+d;if(e&&n>0&&!o(t)){var r=setTimeout((function(){t.classList.remove(f);h.delete(t)}),c);h.set(t,r)}else{t.classList.remove(f)}};t.addEventListener("ionGestureCaptured",T);t.addEventListener("touchstart",w,true);t.addEventListener("touchcancel",E,true);t.addEventListener("touchend",E,true);t.addEventListener("pointercancel",T,true);t.addEventListener("mousedown",g,true);t.addEventListener("mouseup",y,true)}));var i=function(e){if(e.composedPath!==undefined){var t=e.composedPath();for(var n=0;n<t.length-2;n++){var r=t[n];if(!(r instanceof ShadowRoot)&&r.classList.contains("ion-activatable")){return r}}}else{return e.target.closest(".ion-activatable")}};var o=function(e){return e.classList.contains("ion-activatable-instant")};var u=function(e){if(e.shadowRoot){var t=e.shadowRoot.querySelector("ion-ripple-effect");if(t){return t}}return e.querySelector("ion-ripple-effect")};var f="ion-activated";var s=100;var c=150;var v=2500}}}));