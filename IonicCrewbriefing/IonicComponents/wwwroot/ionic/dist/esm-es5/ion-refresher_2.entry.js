import{__awaiter,__generator}from"tslib";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */import{w as writeTask,r as registerInstance,d as createEvent,e as readTask,h,f as getElement,H as Host}from"./index-847f2fde.js";import{g as getTimeGivenProgression}from"./cubic-bezier-66542bc5.js";import{I as ION_CONTENT_CLASS_SELECTOR,b as ION_CONTENT_ELEMENT_SELECTOR,p as printIonContentErrorMsg,g as getScrollElement}from"./index-746a238e.js";import{t as transitionEndAsync,c as componentOnReady,l as clamp,g as getElementRoot,r as raf}from"./helpers-3379ba19.js";import{d as hapticImpact,I as ImpactStyle}from"./haptic-6447af60.js";import{a as isPlatform,b as getIonMode,c as config}from"./ionic-global-1ef19007.js";import{c as createAnimation}from"./animation-a1d9e088.js";import{E as ENABLE_HTML_CONTENT_DEFAULT,a as sanitizeDOMString}from"./config-96c9ace3.js";import{h as caretBackSharp,i as arrowDown}from"./index-ecfc2c9f.js";import{S as SPINNERS}from"./spinner-configs-d09fbbbb.js";import"./index-595d62c9.js";import"./capacitor-b4979570.js";import"./index-7a14ecec.js";var getRefresherAnimationType=function(e){var r=e.previousElementSibling;var t=r!==null&&r.tagName==="ION-HEADER";return t?"translate":"scale"};var createPullingAnimation=function(e,r,t){return e==="scale"?createScaleAnimation(r,t):createTranslateAnimation(r,t)};var createBaseAnimation=function(e){var r=e.querySelector("ion-spinner");var t=r.shadowRoot.querySelector("circle");var n=e.querySelector(".spinner-arrow-container");var i=e.querySelector(".arrow-container");var s=i?i.querySelector("ion-icon"):null;var o=createAnimation().duration(1e3).easing("ease-out");var a=createAnimation().addElement(n).keyframes([{offset:0,opacity:"0.3"},{offset:.45,opacity:"0.3"},{offset:.55,opacity:"1"},{offset:1,opacity:"1"}]);var l=createAnimation().addElement(t).keyframes([{offset:0,strokeDasharray:"1px, 200px"},{offset:.2,strokeDasharray:"1px, 200px"},{offset:.55,strokeDasharray:"100px, 200px"},{offset:1,strokeDasharray:"100px, 200px"}]);var f=createAnimation().addElement(r).keyframes([{offset:0,transform:"rotate(-90deg)"},{offset:1,transform:"rotate(210deg)"}]);if(i&&s){var h=createAnimation().addElement(i).keyframes([{offset:0,transform:"rotate(0deg)"},{offset:.3,transform:"rotate(0deg)"},{offset:.55,transform:"rotate(280deg)"},{offset:1,transform:"rotate(400deg)"}]);var c=createAnimation().addElement(s).keyframes([{offset:0,transform:"translateX(2px) scale(0)"},{offset:.3,transform:"translateX(2px) scale(0)"},{offset:.55,transform:"translateX(-1.5px) scale(1)"},{offset:1,transform:"translateX(-1.5px) scale(1)"}]);o.addAnimation([h,c])}return o.addAnimation([a,l,f])};var createScaleAnimation=function(e,r){var t=r.clientHeight;var n=createAnimation().addElement(e).keyframes([{offset:0,transform:"scale(0) translateY(-".concat(t,"px)")},{offset:1,transform:"scale(1) translateY(100px)"}]);return createBaseAnimation(e).addAnimation([n])};var createTranslateAnimation=function(e,r){var t=r.clientHeight;var n=createAnimation().addElement(e).keyframes([{offset:0,transform:"translateY(-".concat(t,"px)")},{offset:1,transform:"translateY(100px)"}]);return createBaseAnimation(e).addAnimation([n])};var createSnapBackAnimation=function(e){return createAnimation().duration(125).addElement(e).fromTo("transform","translateY(var(--ion-pulling-refresher-translate, 100px))","translateY(0px)")};var setSpinnerOpacity=function(e,r){e.style.setProperty("opacity",r.toString())};var handleScrollWhilePulling=function(e,r,t){var n=1;writeTask((function(){e.forEach((function(e,i){var s=i*(n/r);var o=n-s;var a=t-s;var l=clamp(0,a/o,1);e.style.setProperty("opacity",l.toString())}))}))};var handleScrollWhileRefreshing=function(e,r){writeTask((function(){e.style.setProperty("--refreshing-rotation-duration",r>=1?"0.5s":"2s");e.style.setProperty("opacity","1")}))};var translateElement=function(e,r,t){if(t===void 0){t=200}if(!e){return Promise.resolve()}var n=transitionEndAsync(e,t);writeTask((function(){e.style.setProperty("transition","".concat(t,"ms all ease-out"));if(r===undefined){e.style.removeProperty("transform")}else{e.style.setProperty("transform","translate3d(0px, ".concat(r,", 0px)"))}}));return n};var shouldUseNativeRefresher=function(e,r){return __awaiter(void 0,void 0,void 0,(function(){var t,n,i;return __generator(this,(function(s){switch(s.label){case 0:t=e.querySelector("ion-refresher-content");if(!t){return[2,Promise.resolve(false)]}return[4,new Promise((function(e){return componentOnReady(t,e)}))];case 1:s.sent();n=e.querySelector("ion-refresher-content .refresher-pulling ion-spinner");i=e.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");return[2,n!==null&&i!==null&&(r==="ios"&&isPlatform("mobile")&&e.style.webkitOverflowScrolling!==undefined||r==="md")]}}))}))};var refresherIosCss="ion-refresher{top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}@supports (inset-inline-start: 0){ion-refresher{inset-inline-start:0}}@supports not (inset-inline-start: 0){ion-refresher{left:0}:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}[dir=rtl] ion-refresher{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){ion-refresher:dir(rtl){left:unset;right:unset;right:0}}}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){.refresher-pulling-icon:dir(rtl),.refresher-refreshing-icon:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-ios .refresher-pulling-icon,.refresher-ios .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-ios .refresher-pulling-text,.refresher-ios .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-lines-ios line,.refresher-ios .refresher-refreshing .spinner-lines-small-ios line,.refresher-ios .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-ios .refresher-refreshing .spinner-bubbles circle,.refresher-ios .refresher-refreshing .spinner-circles circle,.refresher-ios .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0}.refresher-native .refresher-refreshing ion-spinner{--refreshing-rotation-duration:2s;display:none;-webkit-animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards;animation:var(--refreshing-rotation-duration) ease-out refresher-rotate forwards}.refresher-native .refresher-refreshing{display:none;-webkit-animation:250ms linear refresher-pop forwards;animation:250ms linear refresher-pop forwards}.refresher-native ion-spinner{width:32px;height:32px;color:var(--ion-color-step-450, #747577)}.refresher-native.refresher-refreshing .refresher-pulling ion-spinner,.refresher-native.refresher-completing .refresher-pulling ion-spinner{display:none}.refresher-native.refresher-refreshing .refresher-refreshing ion-spinner,.refresher-native.refresher-completing .refresher-refreshing ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-pulling ion-spinner{display:block}.refresher-native.refresher-pulling .refresher-refreshing ion-spinner{display:none}.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0) rotate(180deg);transform:scale(0) rotate(180deg);-webkit-transition:300ms;transition:300ms}@-webkit-keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes refresher-pop{0%{-webkit-transform:scale(1);transform:scale(1);-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}50%{-webkit-transform:scale(1.2);transform:scale(1.2);-webkit-animation-timing-function:ease-out;animation-timing-function:ease-out}100%{-webkit-transform:scale(1);transform:scale(1)}}@-webkit-keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}@keyframes refresher-rotate{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(180deg);transform:rotate(180deg)}}";var refresherMdCss="ion-refresher{top:0;display:none;position:absolute;width:100%;height:60px;pointer-events:none;z-index:-1}@supports (inset-inline-start: 0){ion-refresher{inset-inline-start:0}}@supports not (inset-inline-start: 0){ion-refresher{left:0}:host-context([dir=rtl]) ion-refresher{left:unset;right:unset;right:0}[dir=rtl] ion-refresher{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){ion-refresher:dir(rtl){left:unset;right:unset;right:0}}}ion-refresher.refresher-active{display:block}ion-refresher-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;height:100%}.refresher-pulling,.refresher-refreshing{display:none;width:100%}.refresher-pulling-icon,.refresher-refreshing-icon{-webkit-transform-origin:center;transform-origin:center;-webkit-transition:200ms;transition:200ms;font-size:30px;text-align:center}:host-context([dir=rtl]) .refresher-pulling-icon,:host-context([dir=rtl]) .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}[dir=rtl] .refresher-pulling-icon,[dir=rtl] .refresher-refreshing-icon{-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}@supports selector(:dir(rtl)){.refresher-pulling-icon:dir(rtl),.refresher-refreshing-icon:dir(rtl){-webkit-transform-origin:calc(100% - center);transform-origin:calc(100% - center)}}.refresher-pulling-text,.refresher-refreshing-text{font-size:16px;text-align:center}ion-refresher-content .arrow-container{display:none}.refresher-pulling ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling{display:block}.refresher-ready ion-refresher-content .refresher-pulling-icon{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.refresher-refreshing ion-refresher-content .refresher-refreshing{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling{display:block}.refresher-cancelling ion-refresher-content .refresher-pulling-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-completing ion-refresher-content .refresher-refreshing{display:block}.refresher-completing ion-refresher-content .refresher-refreshing-icon{-webkit-transform:scale(0);transform:scale(0)}.refresher-native .refresher-pulling-text,.refresher-native .refresher-refreshing-text{display:none}.refresher-md .refresher-pulling-icon,.refresher-md .refresher-refreshing-icon{color:var(--ion-text-color, #000)}.refresher-md .refresher-pulling-text,.refresher-md .refresher-refreshing-text{color:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-lines-md line,.refresher-md .refresher-refreshing .spinner-lines-small-md line,.refresher-md .refresher-refreshing .spinner-crescent circle{stroke:var(--ion-text-color, #000)}.refresher-md .refresher-refreshing .spinner-bubbles circle,.refresher-md .refresher-refreshing .spinner-circles circle,.refresher-md .refresher-refreshing .spinner-dots circle{fill:var(--ion-text-color, #000)}ion-refresher.refresher-native{display:block;z-index:1}ion-refresher.refresher-native ion-spinner{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;width:24px;height:24px;color:var(--ion-color-primary, #3880ff)}ion-refresher.refresher-native .spinner-arrow-container{display:inherit}ion-refresher.refresher-native .arrow-container{display:block;position:absolute;width:24px;height:24px}ion-refresher.refresher-native .arrow-container ion-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;left:0;right:0;bottom:-4px;position:absolute;color:var(--ion-color-primary, #3880ff);font-size:12px}ion-refresher.refresher-native.refresher-pulling ion-refresher-content .refresher-pulling,ion-refresher.refresher-native.refresher-ready ion-refresher-content .refresher-pulling{display:-ms-flexbox;display:flex}ion-refresher.refresher-native.refresher-refreshing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-completing ion-refresher-content .refresher-refreshing,ion-refresher.refresher-native.refresher-cancelling ion-refresher-content .refresher-refreshing{display:-ms-flexbox;display:flex}ion-refresher.refresher-native .refresher-pulling-icon{-webkit-transform:translateY(calc(-100% - 10px));transform:translateY(calc(-100% - 10px))}ion-refresher.refresher-native .refresher-pulling-icon,ion-refresher.refresher-native .refresher-refreshing-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;border-radius:100%;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;display:-ms-flexbox;display:flex;border:1px solid var(--ion-color-step-200, #ececec);background:var(--ion-color-step-250, #ffffff);-webkit-box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1);box-shadow:0px 1px 6px rgba(0, 0, 0, 0.1)}";var Refresher=function(){function e(e){registerInstance(this,e);this.ionRefresh=createEvent(this,"ionRefresh",7);this.ionPull=createEvent(this,"ionPull",7);this.ionStart=createEvent(this,"ionStart",7);this.appliedStyles=false;this.didStart=false;this.progress=0;this.pointerDown=false;this.needsCompletion=false;this.didRefresh=false;this.lastVelocityY=0;this.animations=[];this.nativeRefresher=false;this.state=1;this.pullMin=60;this.pullMax=this.pullMin+60;this.closeDuration="280ms";this.snapbackDuration="280ms";this.pullFactor=1;this.disabled=false}e.prototype.disabledChanged=function(){if(this.gesture){this.gesture.enable(!this.disabled)}};e.prototype.checkNativeRefresher=function(){return __awaiter(this,void 0,void 0,(function(){var e,r;return __generator(this,(function(t){switch(t.label){case 0:return[4,shouldUseNativeRefresher(this.el,getIonMode(this))];case 1:e=t.sent();if(e&&!this.nativeRefresher){r=this.el.closest("ion-content");this.setupNativeRefresher(r)}else if(!e){this.destroyNativeRefresher()}return[2]}}))}))};e.prototype.destroyNativeRefresher=function(){if(this.scrollEl&&this.scrollListenerCallback){this.scrollEl.removeEventListener("scroll",this.scrollListenerCallback);this.scrollListenerCallback=undefined}this.nativeRefresher=false};e.prototype.resetNativeRefresher=function(e,r){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:this.state=r;if(!(getIonMode(this)==="ios"))return[3,2];return[4,translateElement(e,undefined,300)];case 1:t.sent();return[3,4];case 2:return[4,transitionEndAsync(this.el.querySelector(".refresher-refreshing-icon"),200)];case 3:t.sent();t.label=4;case 4:this.didRefresh=false;this.needsCompletion=false;this.pointerDown=false;this.animations.forEach((function(e){return e.destroy()}));this.animations=[];this.progress=0;this.state=1;return[2]}}))}))};e.prototype.setupiOSNativeRefresher=function(e,r){return __awaiter(this,void 0,void 0,(function(){var t,n,i,s;var o=this;return __generator(this,(function(a){switch(a.label){case 0:this.elementToTransform=this.scrollEl;t=e.shadowRoot.querySelectorAll("svg");n=this.scrollEl.clientHeight*.16;i=t.length;writeTask((function(){return t.forEach((function(e){return e.style.setProperty("animation","none")}))}));this.scrollListenerCallback=function(){if(!o.pointerDown&&o.state===1){return}readTask((function(){var e=o.scrollEl.scrollTop;var s=o.el.clientHeight;if(e>0){if(o.state===8){var a=clamp(0,e/(s*.5),1);writeTask((function(){return setSpinnerOpacity(r,1-a)}));return}return}if(o.pointerDown){if(!o.didStart){o.didStart=true;o.ionStart.emit()}if(o.pointerDown){o.ionPull.emit()}}var l=o.didStart?30:0;var f=o.progress=clamp(0,(Math.abs(e)-l)/n,1);var h=o.state===8||f===1;if(h){if(o.pointerDown){handleScrollWhileRefreshing(r,o.lastVelocityY)}if(!o.didRefresh){o.beginRefresh();o.didRefresh=true;hapticImpact({style:ImpactStyle.Light});if(!o.pointerDown){translateElement(o.elementToTransform,"".concat(s,"px"))}}}else{o.state=2;handleScrollWhilePulling(t,i,f)}}))};this.scrollEl.addEventListener("scroll",this.scrollListenerCallback);s=this;return[4,import("./index-ff313b19.js")];case 1:s.gesture=a.sent().createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,onStart:function(){o.pointerDown=true;if(!o.didRefresh){translateElement(o.elementToTransform,"0px")}if(n===0){n=o.scrollEl.clientHeight*.16}},onMove:function(e){o.lastVelocityY=e.velocityY},onEnd:function(){o.pointerDown=false;o.didStart=false;if(o.needsCompletion){o.resetNativeRefresher(o.elementToTransform,32);o.needsCompletion=false}else if(o.didRefresh){readTask((function(){return translateElement(o.elementToTransform,"".concat(o.el.clientHeight,"px"))}))}}});this.disabledChanged();return[2]}}))}))};e.prototype.setupMDNativeRefresher=function(e,r,t){return __awaiter(this,void 0,void 0,(function(){var n,i,s,o;var a=this;return __generator(this,(function(l){switch(l.label){case 0:n=getElementRoot(r).querySelector("circle");i=this.el.querySelector("ion-refresher-content .refresher-pulling-icon");s=getElementRoot(t).querySelector("circle");if(n!==null&&s!==null){writeTask((function(){n.style.setProperty("animation","none");t.style.setProperty("animation-delay","-655ms");s.style.setProperty("animation-delay","-655ms")}))}o=this;return[4,import("./index-ff313b19.js")];case 1:o.gesture=l.sent().createGesture({el:this.scrollEl,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:5,canStart:function(){return a.state!==8&&a.state!==32&&a.scrollEl.scrollTop===0},onStart:function(e){a.progress=0;e.data={animation:undefined,didStart:false,cancelled:false}},onMove:function(r){if(r.velocityY<0&&a.progress===0&&!r.data.didStart||r.data.cancelled){r.data.cancelled=true;return}if(!r.data.didStart){r.data.didStart=true;a.state=2;var t=a.scrollEl;var n=t.matches(ION_CONTENT_CLASS_SELECTOR)?"overflow":"--overflow";writeTask((function(){return t.style.setProperty(n,"hidden")}));var s=getRefresherAnimationType(e);var o=createPullingAnimation(s,i,a.el);r.data.animation=o;o.progressStart(false,0);a.ionStart.emit();a.animations.push(o);return}a.progress=clamp(0,r.deltaY/180*.5,1);r.data.animation.progressStep(a.progress);a.ionPull.emit()},onEnd:function(e){if(!e.data.didStart){return}a.gesture.enable(false);var r=a.scrollEl;var t=r.matches(ION_CONTENT_CLASS_SELECTOR)?"overflow":"--overflow";writeTask((function(){return r.style.removeProperty(t)}));if(a.progress<=.4){e.data.animation.progressEnd(0,a.progress,500).onFinish((function(){a.animations.forEach((function(e){return e.destroy()}));a.animations=[];a.gesture.enable(true);a.state=1}));return}var n=getTimeGivenProgression([0,0],[0,0],[1,1],[1,1],a.progress)[0];var s=createSnapBackAnimation(i);a.animations.push(s);writeTask((function(){return __awaiter(a,void 0,void 0,(function(){return __generator(this,(function(r){switch(r.label){case 0:i.style.setProperty("--ion-pulling-refresher-translate","".concat(n*100,"px"));e.data.animation.progressEnd();return[4,s.play()];case 1:r.sent();this.beginRefresh();e.data.animation.destroy();this.gesture.enable(true);return[2]}}))}))}))}});this.disabledChanged();return[2]}}))}))};e.prototype.setupNativeRefresher=function(e){return __awaiter(this,void 0,void 0,(function(){var r,t;return __generator(this,(function(n){if(this.scrollListenerCallback||!e||this.nativeRefresher||!this.scrollEl){return[2]}this.setCss(0,"",false,"");this.nativeRefresher=true;r=this.el.querySelector("ion-refresher-content .refresher-pulling ion-spinner");t=this.el.querySelector("ion-refresher-content .refresher-refreshing ion-spinner");if(getIonMode(this)==="ios"){this.setupiOSNativeRefresher(r,t)}else{this.setupMDNativeRefresher(e,r,t)}return[2]}))}))};e.prototype.componentDidUpdate=function(){this.checkNativeRefresher()};e.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var e;var r=this;return __generator(this,(function(t){if(this.el.getAttribute("slot")!=="fixed"){console.error('Make sure you use: <ion-refresher slot="fixed">');return[2]}e=this.el.closest(ION_CONTENT_ELEMENT_SELECTOR);if(!e){printIonContentErrorMsg(this.el);return[2]}componentOnReady(e,(function(){return __awaiter(r,void 0,void 0,(function(){var r,t,n,i;var s=this;return __generator(this,(function(o){switch(o.label){case 0:r=e.querySelector(ION_CONTENT_CLASS_SELECTOR);t=this;return[4,getScrollElement(r!==null&&r!==void 0?r:e)];case 1:t.scrollEl=o.sent();n=this;return[4,e.getBackgroundElement()];case 2:n.backgroundContentEl=o.sent();return[4,shouldUseNativeRefresher(this.el,getIonMode(this))];case 3:if(!o.sent())return[3,4];this.setupNativeRefresher(e);return[3,6];case 4:i=this;return[4,import("./index-ff313b19.js")];case 5:i.gesture=o.sent().createGesture({el:e,gestureName:"refresher",gesturePriority:31,direction:"y",threshold:20,passive:false,canStart:function(){return s.canStart()},onStart:function(){return s.onStart()},onMove:function(e){return s.onMove(e)},onEnd:function(){return s.onEnd()}});this.disabledChanged();o.label=6;case 6:return[2]}}))}))}));return[2]}))}))};e.prototype.disconnectedCallback=function(){this.destroyNativeRefresher();this.scrollEl=undefined;if(this.gesture){this.gesture.destroy();this.gesture=undefined}};e.prototype.complete=function(){return __awaiter(this,void 0,void 0,(function(){var e=this;return __generator(this,(function(r){if(this.nativeRefresher){this.needsCompletion=true;if(!this.pointerDown){raf((function(){return raf((function(){return e.resetNativeRefresher(e.elementToTransform,32)}))}))}}else{this.close(32,"120ms")}return[2]}))}))};e.prototype.cancel=function(){return __awaiter(this,void 0,void 0,(function(){var e=this;return __generator(this,(function(r){if(this.nativeRefresher){if(!this.pointerDown){raf((function(){return raf((function(){return e.resetNativeRefresher(e.elementToTransform,16)}))}))}}else{this.close(16,"")}return[2]}))}))};e.prototype.getProgress=function(){return Promise.resolve(this.progress)};e.prototype.canStart=function(){if(!this.scrollEl){return false}if(this.state!==1){return false}if(this.scrollEl.scrollTop>0){return false}return true};e.prototype.onStart=function(){this.progress=0;this.state=1;this.memoizeOverflowStyle()};e.prototype.onMove=function(e){if(!this.scrollEl){return}var r=e.event;if(r.touches!==undefined&&r.touches.length>1){return}if((this.state&56)!==0){return}var t=Number.isNaN(this.pullFactor)||this.pullFactor<0?1:this.pullFactor;var n=e.deltaY*t;if(n<=0){this.progress=0;this.state=1;if(this.appliedStyles){this.setCss(0,"",false,"");return}return}if(this.state===1){var i=this.scrollEl.scrollTop;if(i>0){this.progress=0;return}this.state=2}if(r.cancelable){r.preventDefault()}this.setCss(n,"0ms",true,"");if(n===0){this.progress=0;return}var s=this.pullMin;this.progress=n/s;if(!this.didStart){this.didStart=true;this.ionStart.emit()}this.ionPull.emit();if(n<s){this.state=2;return}if(n>this.pullMax){this.beginRefresh();return}this.state=4;return};e.prototype.onEnd=function(){if(this.state===4){this.beginRefresh()}else if(this.state===2){this.cancel()}else if(this.state===1){this.restoreOverflowStyle()}};e.prototype.beginRefresh=function(){this.state=8;this.setCss(this.pullMin,this.snapbackDuration,true,"");this.ionRefresh.emit({complete:this.complete.bind(this)})};e.prototype.close=function(e,r){var t=this;setTimeout((function(){t.state=1;t.progress=0;t.didStart=false;t.setCss(0,"0ms",false,"",true)}),600);this.state=e;this.setCss(0,this.closeDuration,true,r)};e.prototype.setCss=function(e,r,t,n,i){var s=this;if(i===void 0){i=false}if(this.nativeRefresher){return}this.appliedStyles=e>0;writeTask((function(){if(s.scrollEl&&s.backgroundContentEl){var o=s.scrollEl.style;var a=s.backgroundContentEl.style;o.transform=a.transform=e>0?"translateY(".concat(e,"px) translateZ(0px)"):"";o.transitionDuration=a.transitionDuration=r;o.transitionDelay=a.transitionDelay=n;o.overflow=t?"hidden":""}if(i){s.restoreOverflowStyle()}}))};e.prototype.memoizeOverflowStyle=function(){if(this.scrollEl){var e=this.scrollEl.style,r=e.overflow,t=e.overflowX,n=e.overflowY;this.overflowStyles={overflow:r!==null&&r!==void 0?r:"",overflowX:t!==null&&t!==void 0?t:"",overflowY:n!==null&&n!==void 0?n:""}}};e.prototype.restoreOverflowStyle=function(){if(this.overflowStyles!==undefined&&this.scrollEl!==undefined){var e=this.overflowStyles,r=e.overflow,t=e.overflowX,n=e.overflowY;this.scrollEl.style.overflow=r;this.scrollEl.style.overflowX=t;this.scrollEl.style.overflowY=n;this.overflowStyles=undefined}};e.prototype.render=function(){var e;var r=getIonMode(this);return h(Host,{slot:"fixed",class:(e={},e[r]=true,e["refresher-".concat(r)]=true,e["refresher-native"]=this.nativeRefresher,e["refresher-active"]=this.state!==1,e["refresher-pulling"]=this.state===2,e["refresher-ready"]=this.state===4,e["refresher-refreshing"]=this.state===8,e["refresher-cancelling"]=this.state===16,e["refresher-completing"]=this.state===32,e)})};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{disabled:["disabledChanged"]}},enumerable:false,configurable:true});return e}();Refresher.style={ios:refresherIosCss,md:refresherMdCss};var RefresherContent=function(){function e(e){registerInstance(this,e);this.customHTMLEnabled=config.get("innerHTMLTemplatesEnabled",ENABLE_HTML_CONTENT_DEFAULT);this.pullingIcon=undefined;this.pullingText=undefined;this.refreshingSpinner=undefined;this.refreshingText=undefined}e.prototype.componentWillLoad=function(){if(this.pullingIcon===undefined){var e=getIonMode(this);var r=this.el.style.webkitOverflowScrolling!==undefined?"lines":arrowDown;this.pullingIcon=config.get("refreshingIcon",e==="ios"&&isPlatform("mobile")?config.get("spinner",r):"circular")}if(this.refreshingSpinner===undefined){var e=getIonMode(this);this.refreshingSpinner=config.get("refreshingSpinner",config.get("spinner",e==="ios"?"lines":"circular"))}};e.prototype.renderPullingText=function(){var e=this,r=e.customHTMLEnabled,t=e.pullingText;if(r){return h("div",{class:"refresher-pulling-text",innerHTML:sanitizeDOMString(t)})}return h("div",{class:"refresher-pulling-text"},t)};e.prototype.renderRefreshingText=function(){var e=this,r=e.customHTMLEnabled,t=e.refreshingText;if(r){return h("div",{class:"refresher-refreshing-text",innerHTML:sanitizeDOMString(t)})}return h("div",{class:"refresher-refreshing-text"},t)};e.prototype.render=function(){var e=this.pullingIcon;var r=e!=null&&SPINNERS[e]!==undefined;var t=getIonMode(this);return h(Host,{class:t},h("div",{class:"refresher-pulling"},this.pullingIcon&&r&&h("div",{class:"refresher-pulling-icon"},h("div",{class:"spinner-arrow-container"},h("ion-spinner",{name:this.pullingIcon,paused:true}),t==="md"&&this.pullingIcon==="circular"&&h("div",{class:"arrow-container"},h("ion-icon",{icon:caretBackSharp,"aria-hidden":"true"})))),this.pullingIcon&&!r&&h("div",{class:"refresher-pulling-icon"},h("ion-icon",{icon:this.pullingIcon,lazy:false,"aria-hidden":"true"})),this.pullingText!==undefined&&this.renderPullingText()),h("div",{class:"refresher-refreshing"},this.refreshingSpinner&&h("div",{class:"refresher-refreshing-icon"},h("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText!==undefined&&this.renderRefreshingText()))};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();export{Refresher as ion_refresher,RefresherContent as ion_refresher_content};