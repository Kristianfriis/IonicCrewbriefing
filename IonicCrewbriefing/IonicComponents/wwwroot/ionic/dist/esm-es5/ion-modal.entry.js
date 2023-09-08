import{__awaiter,__generator,__spreadArray}from"tslib";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */import{r as registerInstance,d as createEvent,w as writeTask,h,H as Host,f as getElement}from"./index-847f2fde.js";import{f as findClosestIonContent,i as isIonContent,d as disableContentScrollY,r as resetContentScrollY,a as findIonContent,p as printIonContentErrorMsg}from"./index-746a238e.js";import{C as CoreDelegate,a as attachComponent,d as detachComponent}from"./framework-delegate-2b76c681.js";import{g as getElementRoot,l as clamp,r as raf,k as inheritAttributes,m as hasLazyBuild}from"./helpers-3379ba19.js";import{p as printIonWarning}from"./index-595d62c9.js";import{g as getCapacitor}from"./capacitor-b4979570.js";import{G as GESTURE,e as createTriggerController,B as BACKDROP,j as prepareOverlay,k as setOverlayId,f as present,n as activeAnimations,g as dismiss,h as eventMethod}from"./overlays-c3387ec0.js";import{g as getClassMap}from"./theme-17531cdf.js";import{e as deepReady,w as waitForMount}from"./index-6391de89.js";import{b as getIonMode,c as config}from"./ionic-global-1ef19007.js";import{KEYBOARD_DID_OPEN}from"./keyboard-b551279d.js";import{c as createAnimation}from"./animation-a1d9e088.js";import{g as getTimeGivenProgression}from"./cubic-bezier-66542bc5.js";import{createGesture}from"./index-ff313b19.js";import{w as win}from"./index-7a14ecec.js";import"./hardware-back-button-39299f84.js";import"./keyboard-b063f012.js";import"./gesture-controller-0fa396c4.js";var Style;(function(e){e["Dark"]="DARK";e["Light"]="LIGHT";e["Default"]="DEFAULT"})(Style||(Style={}));var StatusBar={getEngine:function(){var e=getCapacitor();if(e===null||e===void 0?void 0:e.isPluginAvailable("StatusBar")){return e.Plugins.StatusBar}return undefined},supportsDefaultStatusBarStyle:function(){var e=getCapacitor();return!!(e===null||e===void 0?void 0:e.PluginHeaders)},setStyle:function(e){var t=this.getEngine();if(!t){return}t.setStyle(e)},getStyle:function(){return __awaiter(this,void 0,void 0,(function(){var e,t;return __generator(this,(function(r){switch(r.label){case 0:e=this.getEngine();if(!e){return[2,Style.Default]}return[4,e.getInfo()];case 1:t=r.sent().style;return[2,t]}}))}))}};var getBackdropValueForSheet=function(e,t){if(t===1){return 0}var r=1/(1-t);var a=-(t*r);return e*r+a};var setCardStatusBarDark=function(){if(!win||win.innerWidth>=768||!StatusBar.supportsDefaultStatusBarStyle()){return}StatusBar.setStyle({style:Style.Dark})};var setCardStatusBarDefault=function(e){if(e===void 0){e=Style.Default}if(!win||win.innerWidth>=768||!StatusBar.supportsDefaultStatusBarStyle()){return}StatusBar.setStyle({style:e})};var handleCanDismiss=function(e,t){return __awaiter(void 0,void 0,void 0,(function(){var r;return __generator(this,(function(a){switch(a.label){case 0:if(typeof e.canDismiss!=="function"){return[2]}return[4,e.canDismiss(undefined,GESTURE)];case 1:r=a.sent();if(!r){return[2]}if(t.isRunning()){t.onFinish((function(){e.dismiss(undefined,"handler")}),{oneTimeCallback:true})}else{e.dismiss(undefined,"handler")}return[2]}}))}))};var calculateSpringStep=function(e){return.00255275*Math.pow(2.71828,-14.9619*e)-1.00255*Math.pow(2.71828,-.0380968*e)+1};var SwipeToCloseDefaults={MIN_PRESENTING_SCALE:.93};var createSwipeToCloseGesture=function(e,t,r,a){var n=.5;var i=e.offsetHeight;var o=false;var s=false;var d=null;var l=null;var c=.2;var p=true;var u=0;var f=function(){if(d&&isIonContent(d)){return d.scrollY}else{return true}};var h=function(e){var t=e.event.target;if(t===null||!t.closest){return true}d=findClosestIonContent(t);if(d){if(isIonContent(d)){var r=getElementRoot(d);l=r.querySelector(".inner-scroll")}else{l=d}var a=!!d.querySelector("ion-refresher");return!a&&l.scrollTop===0}var n=t.closest("ion-footer");if(n===null){return true}return false};var m=function(r){var a=r.deltaY;p=f();s=e.canDismiss!==undefined&&e.canDismiss!==true;if(a>0&&d){disableContentScrollY(d)}t.progressStart(true,o?1:0)};var v=function(e){var a=e.deltaY;if(a>0&&d){disableContentScrollY(d)}var o=e.deltaY/i;var l=o>=0&&s;var p=l?c:.9999;var f=l?calculateSpringStep(o/p):o;var h=clamp(1e-4,f,p);t.progressStep(h);if(h>=n&&u<n){setCardStatusBarDefault(r)}else if(h<n&&u>=n){setCardStatusBarDark()}u=h};var b=function(r){var l=r.velocityY;var u=r.deltaY/i;var f=u>=0&&s;var h=f?c:.9999;var m=f?calculateSpringStep(u/h):u;var v=clamp(1e-4,m,h);var b=(r.deltaY+l*1e3)/i;var y=!f&&b>=n;var k=y?-.001:.001;if(!y){t.easing("cubic-bezier(1, 0, 0.68, 0.28)");k+=getTimeGivenProgression([0,0],[1,0],[.68,.28],[1,1],v)[0]}else{t.easing("cubic-bezier(0.32, 0.72, 0, 1)");k+=getTimeGivenProgression([0,0],[.32,.72],[0,1],[1,1],v)[0]}var w=y?computeDuration(u*i,l):computeDuration((1-v)*i,l);o=y;g.enable(false);if(d){resetContentScrollY(d,p)}t.onFinish((function(){if(!y){g.enable(true)}})).progressEnd(y?1:0,k,w);if(f&&v>h/4){handleCanDismiss(e,t)}else if(y){a()}};var g=createGesture({el:e,gestureName:"modalSwipeToClose",gesturePriority:39,direction:"y",threshold:10,canStart:h,onStart:m,onMove:v,onEnd:b});return g};var computeDuration=function(e,t){return clamp(400,e/Math.abs(t*1.1),500)};var createSheetEnterAnimation=function(e){var t=e.currentBreakpoint,r=e.backdropBreakpoint;var a=r===undefined||r<t;var n=a?"calc(var(--backdrop-opacity) * ".concat(t,")"):"0";var i=createAnimation("backdropAnimation").fromTo("opacity",0,n);if(a){i.beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"])}var o=createAnimation("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(100%)"},{offset:1,opacity:1,transform:"translateY(".concat(100-t*100,"%)")}]);return{wrapperAnimation:o,backdropAnimation:i}};var createSheetLeaveAnimation=function(e){var t=e.currentBreakpoint,r=e.backdropBreakpoint;var a="calc(var(--backdrop-opacity) * ".concat(getBackdropValueForSheet(t,r),")");var n=[{offset:0,opacity:a},{offset:1,opacity:0}];var i=[{offset:0,opacity:a},{offset:r,opacity:0},{offset:1,opacity:0}];var o=createAnimation("backdropAnimation").keyframes(r!==0?i:n);var s=createAnimation("wrapperAnimation").keyframes([{offset:0,opacity:1,transform:"translateY(".concat(100-t*100,"%)")},{offset:1,opacity:1,transform:"translateY(100%)"}]);return{wrapperAnimation:s,backdropAnimation:o}};var createEnterAnimation$1=function(){var e=createAnimation().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);var t=createAnimation().fromTo("transform","translateY(100vh)","translateY(0vh)");return{backdropAnimation:e,wrapperAnimation:t}};var iosEnterAnimation=function(e,t){var r=t.presentingEl,a=t.currentBreakpoint;var n=getElementRoot(e);var i=a!==undefined?createSheetEnterAnimation(t):createEnterAnimation$1(),o=i.wrapperAnimation,s=i.backdropAnimation;s.addElement(n.querySelector("ion-backdrop"));o.addElement(n.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});var d=createAnimation("entering-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(500).addAnimation(o);if(r){var l=window.innerWidth<768;var c=r.tagName==="ION-MODAL"&&r.presentingElement!==undefined;var p=getElementRoot(r);var u=createAnimation().beforeStyles({transform:"translateY(0)","transform-origin":"top center",overflow:"hidden"});var f=document.body;if(l){var h=!CSS.supports("width","max(0px, 1px)")?"30px":"max(30px, var(--ion-safe-area-top))";var m=c?"-10px":h;var v=SwipeToCloseDefaults.MIN_PRESENTING_SCALE;var b="translateY(".concat(m,") scale(").concat(v,")");u.afterStyles({transform:b}).beforeAddWrite((function(){return f.style.setProperty("background-color","black")})).addElement(r).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"},{offset:1,filter:"contrast(0.85)",transform:b,borderRadius:"10px 10px 0 0"}]);d.addAnimation(u)}else{d.addAnimation(s);if(!c){o.fromTo("opacity","0","1")}else{var v=c?SwipeToCloseDefaults.MIN_PRESENTING_SCALE:1;var b="translateY(-10px) scale(".concat(v,")");u.afterStyles({transform:b}).addElement(p.querySelector(".modal-wrapper")).keyframes([{offset:0,filter:"contrast(1)",transform:"translateY(0) scale(1)"},{offset:1,filter:"contrast(0.85)",transform:b}]);var g=createAnimation().afterStyles({transform:b}).addElement(p.querySelector(".modal-shadow")).keyframes([{offset:0,opacity:"1",transform:"translateY(0) scale(1)"},{offset:1,opacity:"0",transform:b}]);d.addAnimation([u,g])}}}else{d.addAnimation(s)}return d};var createLeaveAnimation$1=function(){var e=createAnimation().fromTo("opacity","var(--backdrop-opacity)",0);var t=createAnimation().fromTo("transform","translateY(0vh)","translateY(100vh)");return{backdropAnimation:e,wrapperAnimation:t}};var iosLeaveAnimation=function(e,t,r){if(r===void 0){r=500}var a=t.presentingEl,n=t.currentBreakpoint;var i=getElementRoot(e);var o=n!==undefined?createSheetLeaveAnimation(t):createLeaveAnimation$1(),s=o.wrapperAnimation,d=o.backdropAnimation;d.addElement(i.querySelector("ion-backdrop"));s.addElement(i.querySelectorAll(".modal-wrapper, .modal-shadow")).beforeStyles({opacity:1});var l=createAnimation("leaving-base").addElement(e).easing("cubic-bezier(0.32,0.72,0,1)").duration(r).addAnimation(s);if(a){var c=window.innerWidth<768;var p=a.tagName==="ION-MODAL"&&a.presentingElement!==undefined;var u=getElementRoot(a);var f=createAnimation().beforeClearStyles(["transform"]).afterClearStyles(["transform"]).onFinish((function(e){if(e!==1){return}a.style.setProperty("overflow","");var t=Array.from(h.querySelectorAll("ion-modal:not(.overlay-hidden)")).filter((function(e){return e.presentingElement!==undefined})).length;if(t<=1){h.style.setProperty("background-color","")}}));var h=document.body;if(c){var m=!CSS.supports("width","max(0px, 1px)")?"30px":"max(30px, var(--ion-safe-area-top))";var v=p?"-10px":m;var b=SwipeToCloseDefaults.MIN_PRESENTING_SCALE;var g="translateY(".concat(v,") scale(").concat(b,")");f.addElement(a).keyframes([{offset:0,filter:"contrast(0.85)",transform:g,borderRadius:"10px 10px 0 0"},{offset:1,filter:"contrast(1)",transform:"translateY(0px) scale(1)",borderRadius:"0px"}]);l.addAnimation(f)}else{l.addAnimation(d);if(!p){s.fromTo("opacity","1","0")}else{var b=p?SwipeToCloseDefaults.MIN_PRESENTING_SCALE:1;var g="translateY(-10px) scale(".concat(b,")");f.addElement(u.querySelector(".modal-wrapper")).afterStyles({transform:"translate3d(0, 0, 0)"}).keyframes([{offset:0,filter:"contrast(0.85)",transform:g},{offset:1,filter:"contrast(1)",transform:"translateY(0) scale(1)"}]);var y=createAnimation().addElement(u.querySelector(".modal-shadow")).afterStyles({transform:"translateY(0) scale(1)"}).keyframes([{offset:0,opacity:"0",transform:g},{offset:1,opacity:"1",transform:"translateY(0) scale(1)"}]);l.addAnimation([f,y])}}}else{l.addAnimation(d)}return l};var createEnterAnimation=function(){var e=createAnimation().fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);var t=createAnimation().keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]);return{backdropAnimation:e,wrapperAnimation:t}};var mdEnterAnimation=function(e,t){var r=t.currentBreakpoint;var a=getElementRoot(e);var n=r!==undefined?createSheetEnterAnimation(t):createEnterAnimation(),i=n.wrapperAnimation,o=n.backdropAnimation;o.addElement(a.querySelector("ion-backdrop"));i.addElement(a.querySelector(".modal-wrapper"));return createAnimation().addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).addAnimation([o,i])};var createLeaveAnimation=function(){var e=createAnimation().fromTo("opacity","var(--backdrop-opacity)",0);var t=createAnimation().keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]);return{backdropAnimation:e,wrapperAnimation:t}};var mdLeaveAnimation=function(e,t){var r=t.currentBreakpoint;var a=getElementRoot(e);var n=r!==undefined?createSheetLeaveAnimation(t):createLeaveAnimation(),i=n.wrapperAnimation,o=n.backdropAnimation;o.addElement(a.querySelector("ion-backdrop"));i.addElement(a.querySelector(".modal-wrapper"));return createAnimation().easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([o,i])};var createSheetGesture=function(e,t,r,a,n,i,o,s,d,l){if(o===void 0){o=[]}var c=[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1,opacity:.01}];var p=[{offset:0,opacity:"var(--backdrop-opacity)"},{offset:1-n,opacity:0},{offset:1,opacity:0}];var u={WRAPPER_KEYFRAMES:[{offset:0,transform:"translateY(0%)"},{offset:1,transform:"translateY(100%)"}],BACKDROP_KEYFRAMES:n!==0?p:c};var f=e.querySelector("ion-content");var h=r.clientHeight;var m=a;var v=0;var b=false;var g=.95;var y=i.childAnimations.find((function(e){return e.id==="wrapperAnimation"}));var k=i.childAnimations.find((function(e){return e.id==="backdropAnimation"}));var w=o[o.length-1];var x=o[0];var S=function(){e.style.setProperty("pointer-events","auto");t.style.setProperty("pointer-events","auto");e.classList.remove("ion-disable-focus-trap")};var A=function(){e.style.setProperty("pointer-events","none");t.style.setProperty("pointer-events","none");e.classList.add("ion-disable-focus-trap")};if(y&&k){y.keyframes(__spreadArray([],u.WRAPPER_KEYFRAMES,true));k.keyframes(__spreadArray([],u.BACKDROP_KEYFRAMES,true));i.progressStart(true,1-m);var E=m>n;if(E){S()}else{A()}}if(f&&m!==w){f.scrollY=false}var C=function(e){var t=e.event.target.closest("ion-content");m=s();if(m===1&&t){return false}return true};var D=function(){b=e.canDismiss!==undefined&&e.canDismiss!==true&&x===0;if(f){f.scrollY=false}raf((function(){e.focus()}));i.progressStart(true,1-m)};var B=function(e){var t=1-m;var r=o.length>1?1-o[1]:undefined;var a=t+e.deltaY/h;var n=r!==undefined&&a>=r&&b;var s=n?g:.9999;var d=n&&r!==undefined?r+calculateSpringStep((a-r)/(s-r)):a;v=clamp(1e-4,d,s);i.progressStep(v)};var _=function(e){var t=e.velocityY;var r=(e.deltaY+t*350)/h;var a=m-r;var n=o.reduce((function(e,t){return Math.abs(t-a)<Math.abs(e-a)?t:e}));T({breakpoint:n,breakpointOffset:v,canDismiss:b,animated:true})};var T=function(t){var r=t.breakpoint,a=t.canDismiss,s=t.breakpointOffset,c=t.animated;var p=a&&r===0;var h=p?m:r;var v=h!==0;m=0;if(y&&k){y.keyframes([{offset:0,transform:"translateY(".concat(s*100,"%)")},{offset:1,transform:"translateY(".concat((1-h)*100,"%)")}]);k.keyframes([{offset:0,opacity:"calc(var(--backdrop-opacity) * ".concat(getBackdropValueForSheet(1-s,n),")")},{offset:1,opacity:"calc(var(--backdrop-opacity) * ".concat(getBackdropValueForSheet(h,n),")")}]);i.progressStep(0)}M.enable(false);if(p){handleCanDismiss(e,i)}else if(!v){d()}return new Promise((function(e){i.onFinish((function(){if(v){if(y&&k){raf((function(){y.keyframes(__spreadArray([],u.WRAPPER_KEYFRAMES,true));k.keyframes(__spreadArray([],u.BACKDROP_KEYFRAMES,true));i.progressStart(true,1-h);m=h;l(m);if(f&&m===o[o.length-1]){f.scrollY=true}var t=m>n;if(t){S()}else{A()}M.enable(true);e()}))}else{M.enable(true);e()}}else{e()}}),{oneTimeCallback:true}).progressEnd(1,0,c?500:0)}))};var M=createGesture({el:r,gestureName:"modalSheet",gesturePriority:40,direction:"y",threshold:10,canStart:C,onStart:D,onMove:B,onEnd:_});return{gesture:M,moveSheetToBreakpoint:T}};var modalIosCss=':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.4)}:host(.modal-card),:host(.modal-sheet){--border-radius:10px}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:10px}}.modal-wrapper{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0)}@media screen and (max-width: 767px){@supports (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - max(30px, var(--ion-safe-area-top)) - 10px)}}@supports not (width: max(0px, 1px)){:host(.modal-card){--height:calc(100% - 40px)}}:host(.modal-card) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-card) .modal-wrapper,:host-context([dir=rtl]).modal-card .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.modal-card) .modal-wrapper:dir(rtl){border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}}:host(.modal-card){--backdrop-opacity:0;--width:100%;-ms-flex-align:end;align-items:flex-end}:host(.modal-card) .modal-shadow{display:none}:host(.modal-card) ion-backdrop{pointer-events:none}}@media screen and (min-width: 768px){:host(.modal-card){--width:calc(100% - 120px);--height:calc(100% - (120px + var(--ion-safe-area-top) + var(--ion-safe-area-bottom)));--max-width:720px;--max-height:1000px;--backdrop-opacity:0;--box-shadow:0px 0px 30px 10px rgba(0, 0, 0, 0.1);-webkit-transition:all 0.5s ease-in-out;transition:all 0.5s ease-in-out}:host(.modal-card) .modal-wrapper{-webkit-box-shadow:none;box-shadow:none}:host(.modal-card) .modal-shadow{-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}}:host(.modal-sheet) .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}:host-context([dir=rtl]):host(.modal-sheet) .modal-wrapper,:host-context([dir=rtl]).modal-sheet .modal-wrapper{border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}@supports selector(:dir(rtl)){:host(.modal-sheet) .modal-wrapper:dir(rtl){border-top-left-radius:var(--border-radius);border-top-right-radius:var(--border-radius);border-bottom-right-radius:0;border-bottom-left-radius:0}}';var modalMdCss=':host{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color, #fff);--box-shadow:none;--backdrop-opacity:0;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);contain:strict}.modal-wrapper,ion-backdrop{pointer-events:auto}:host(.overlay-hidden){display:none}.modal-wrapper,.modal-shadow{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}.modal-shadow{position:absolute;background:transparent}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}@media only screen and (min-width: 768px) and (min-height: 768px){:host{--width:600px;--height:600px}}.modal-handle{left:0px;right:0px;top:5px;border-radius:8px;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;position:absolute;width:36px;height:5px;-webkit-transform:translateZ(0);transform:translateZ(0);border:0;background:var(--ion-color-step-350, #c0c0be);cursor:pointer;z-index:11}.modal-handle::before{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:36px;height:5px;-webkit-transform:translate(-50%, -50%);transform:translate(-50%, -50%);content:""}:host(.modal-sheet){--height:calc(100% - (var(--ion-safe-area-top) + 10px))}:host(.modal-sheet) .modal-wrapper,:host(.modal-sheet) .modal-shadow{position:absolute;bottom:0}:host{--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}@media only screen and (min-width: 768px) and (min-height: 600px){:host{--border-radius:2px;--box-shadow:0 28px 48px rgba(0, 0, 0, 0.4)}}.modal-wrapper{-webkit-transform:translate3d(0,  40px,  0);transform:translate3d(0,  40px,  0);opacity:0.01}';var Modal=function(){function e(e){var t=this;registerInstance(this,e);this.didPresent=createEvent(this,"ionModalDidPresent",7);this.willPresent=createEvent(this,"ionModalWillPresent",7);this.willDismiss=createEvent(this,"ionModalWillDismiss",7);this.didDismiss=createEvent(this,"ionModalDidDismiss",7);this.ionBreakpointDidChange=createEvent(this,"ionBreakpointDidChange",7);this.didPresentShorthand=createEvent(this,"didPresent",7);this.willPresentShorthand=createEvent(this,"willPresent",7);this.willDismissShorthand=createEvent(this,"willDismiss",7);this.didDismissShorthand=createEvent(this,"didDismiss",7);this.ionMount=createEvent(this,"ionMount",7);this.triggerController=createTriggerController();this.coreDelegate=CoreDelegate();this.isSheetModal=false;this.inheritedAttributes={};this.inline=false;this.gestureAnimationDismissing=false;this.onHandleClick=function(){var e=t,r=e.sheetTransition,a=e.handleBehavior;if(a!=="cycle"||r!==undefined){return}t.moveToNextBreakpoint()};this.onBackdropTap=function(){var e=t.sheetTransition;if(e!==undefined){return}t.dismiss(undefined,BACKDROP)};this.onLifecycle=function(e){var r=t.usersElement;var a=LIFECYCLE_MAP[e.type];if(r&&a){var n=new CustomEvent(a,{bubbles:false,cancelable:false,detail:e.detail});r.dispatchEvent(n)}};this.presented=false;this.hasController=false;this.overlayIndex=undefined;this.delegate=undefined;this.keyboardClose=true;this.enterAnimation=undefined;this.leaveAnimation=undefined;this.breakpoints=undefined;this.initialBreakpoint=undefined;this.backdropBreakpoint=0;this.handle=undefined;this.handleBehavior="none";this.component=undefined;this.componentProps=undefined;this.cssClass=undefined;this.backdropDismiss=true;this.showBackdrop=true;this.animated=true;this.presentingElement=undefined;this.htmlAttributes=undefined;this.isOpen=false;this.trigger=undefined;this.keepContentsMounted=false;this.canDismiss=true}e.prototype.onIsOpenChange=function(e,t){if(e===true&&t===false){this.present()}else if(e===false&&t===true){this.dismiss()}};e.prototype.triggerChanged=function(){var e=this,t=e.trigger,r=e.el,a=e.triggerController;if(t){a.addClickListener(r,t)}};e.prototype.breakpointsChanged=function(e){if(e!==undefined){this.sortedBreakpoints=e.sort((function(e,t){return e-t}))}};e.prototype.connectedCallback=function(){var e=this.el;prepareOverlay(e);this.triggerChanged()};e.prototype.disconnectedCallback=function(){this.triggerController.removeClickListener()};e.prototype.componentWillLoad=function(){var e=this,t=e.breakpoints,r=e.initialBreakpoint,a=e.el;var n=this.isSheetModal=t!==undefined&&r!==undefined;this.inheritedAttributes=inheritAttributes(a,["aria-label","role"]);if(n){this.currentBreakpoint=this.initialBreakpoint}if(t!==undefined&&r!==undefined&&!t.includes(r)){printIonWarning("Your breakpoints array must include the initialBreakpoint value.")}setOverlayId(a)};e.prototype.componentDidLoad=function(){var e=this;if(this.isOpen===true){raf((function(){return e.present()}))}this.breakpointsChanged(this.breakpoints)};e.prototype.getDelegate=function(e){if(e===void 0){e=false}if(this.workingDelegate&&!e){return{delegate:this.workingDelegate,inline:this.inline}}var t=this.el.parentNode;var r=this.inline=t!==null&&!this.hasController;var a=this.workingDelegate=r?this.delegate||this.coreDelegate:this.delegate;return{inline:r,delegate:a}};e.prototype.checkCanDismiss=function(e,t){return __awaiter(this,void 0,void 0,(function(){var r;return __generator(this,(function(a){r=this.canDismiss;if(typeof r==="function"){return[2,r(e,t)]}return[2,r]}))}))};e.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,r,a,n,i,o,s,d;var l=this;return __generator(this,(function(c){switch(c.label){case 0:if(this.presented){return[2]}e=this,t=e.presentingElement,r=e.el;if(!(this.currentTransition!==undefined))return[3,2];return[4,this.currentTransition];case 1:c.sent();c.label=2;case 2:this.currentBreakpoint=this.initialBreakpoint;a=this.getDelegate(true),n=a.inline,i=a.delegate;o=this;return[4,attachComponent(i,r,this.component,["ion-page"],this.componentProps,n)];case 3:o.usersElement=c.sent();this.ionMount.emit();if(!hasLazyBuild(r))return[3,5];return[4,deepReady(this.usersElement)];case 4:c.sent();return[3,7];case 5:if(!!this.keepContentsMounted)return[3,7];return[4,waitForMount()];case 6:c.sent();c.label=7;case 7:writeTask((function(){return l.el.classList.add("show-modal")}));this.currentTransition=present(this,"modalEnter",iosEnterAnimation,mdEnterAnimation,{presentingEl:t,currentBreakpoint:this.initialBreakpoint,backdropBreakpoint:this.backdropBreakpoint});if(typeof window!=="undefined"){this.keyboardOpenCallback=function(){if(l.gesture){l.gesture.enable(false);raf((function(){if(l.gesture){l.gesture.enable(true)}}))}};window.addEventListener(KEYBOARD_DID_OPEN,this.keyboardOpenCallback)}s=t!==undefined;if(!(s&&getIonMode(this)==="ios"))return[3,9];d=this;return[4,StatusBar.getStyle()];case 8:d.statusBarStyle=c.sent();setCardStatusBarDark();c.label=9;case 9:return[4,this.currentTransition];case 10:c.sent();if(this.isSheetModal){this.initSheetGesture()}else if(s){this.initSwipeToClose()}this.currentTransition=undefined;return[2]}}))}))};e.prototype.initSwipeToClose=function(){var e=this;var t;if(getIonMode(this)!=="ios"){return}var r=this.el;var a=this.leaveAnimation||config.get("modalLeave",iosLeaveAnimation);var n=this.animation=a(r,{presentingEl:this.presentingElement});var i=findIonContent(r);if(!i){printIonContentErrorMsg(r);return}var o=(t=this.statusBarStyle)!==null&&t!==void 0?t:Style.Default;this.gesture=createSwipeToCloseGesture(r,n,o,(function(){e.gestureAnimationDismissing=true;e.animation.onFinish((function(){return __awaiter(e,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:return[4,this.dismiss(undefined,GESTURE)];case 1:e.sent();this.gestureAnimationDismissing=false;return[2]}}))}))}))}));this.gesture.enable(true)};e.prototype.initSheetGesture=function(){var e=this;var t=this,r=t.wrapperEl,a=t.initialBreakpoint,n=t.backdropBreakpoint;if(!r||a===undefined){return}var i=this.enterAnimation||config.get("modalEnter",iosEnterAnimation);var o=this.animation=i(this.el,{presentingEl:this.presentingElement,currentBreakpoint:a,backdropBreakpoint:n});o.progressStart(true,1);var s=createSheetGesture(this.el,this.backdropEl,r,a,n,o,this.sortedBreakpoints,(function(){var t;return(t=e.currentBreakpoint)!==null&&t!==void 0?t:0}),(function(){return e.sheetOnDismiss()}),(function(t){if(e.currentBreakpoint!==t){e.currentBreakpoint=t;e.ionBreakpointDidChange.emit({breakpoint:t})}})),d=s.gesture,l=s.moveSheetToBreakpoint;this.gesture=d;this.moveSheetToBreakpoint=l;this.gesture.enable(true)};e.prototype.sheetOnDismiss=function(){var e=this;this.gestureAnimationDismissing=true;this.animation.onFinish((function(){return __awaiter(e,void 0,void 0,(function(){return __generator(this,(function(e){switch(e.label){case 0:this.currentBreakpoint=0;this.ionBreakpointDidChange.emit({breakpoint:this.currentBreakpoint});return[4,this.dismiss(undefined,GESTURE)];case 1:e.sent();this.gestureAnimationDismissing=false;return[2]}}))}))}))};e.prototype.dismiss=function(e,t){return __awaiter(this,void 0,void 0,(function(){var r,a,n,i,o,s,d;var l=this;return __generator(this,(function(c){switch(c.label){case 0:if(this.gestureAnimationDismissing&&t!==GESTURE){return[2,false]}a=t!=="handler";if(!a)return[3,2];return[4,this.checkCanDismiss(e,t)];case 1:a=!c.sent();c.label=2;case 2:if(a){return[2,false]}n=this.presentingElement;i=n!==undefined;if(i&&getIonMode(this)==="ios"){setCardStatusBarDefault(this.statusBarStyle)}if(typeof window!=="undefined"&&this.keyboardOpenCallback){window.removeEventListener(KEYBOARD_DID_OPEN,this.keyboardOpenCallback);this.keyboardOpenCallback=undefined}if(!(this.currentTransition!==undefined))return[3,4];return[4,this.currentTransition];case 3:c.sent();c.label=4;case 4:o=activeAnimations.get(this)||[];this.currentTransition=dismiss(this,e,t,"modalLeave",iosLeaveAnimation,mdLeaveAnimation,{presentingEl:n,currentBreakpoint:(r=this.currentBreakpoint)!==null&&r!==void 0?r:this.initialBreakpoint,backdropBreakpoint:this.backdropBreakpoint});return[4,this.currentTransition];case 5:s=c.sent();if(!s)return[3,7];d=this.getDelegate().delegate;return[4,detachComponent(d,this.usersElement)];case 6:c.sent();writeTask((function(){return l.el.classList.remove("show-modal")}));if(this.animation){this.animation.destroy()}if(this.gesture){this.gesture.destroy()}o.forEach((function(e){return e.destroy()}));c.label=7;case 7:this.currentBreakpoint=undefined;this.currentTransition=undefined;this.animation=undefined;return[2,s]}}))}))};e.prototype.onDidDismiss=function(){return eventMethod(this.el,"ionModalDidDismiss")};e.prototype.onWillDismiss=function(){return eventMethod(this.el,"ionModalWillDismiss")};e.prototype.setCurrentBreakpoint=function(e){return __awaiter(this,void 0,void 0,(function(){var t,r,a,n,i,o;return __generator(this,(function(s){switch(s.label){case 0:if(!this.isSheetModal){printIonWarning("setCurrentBreakpoint is only supported on sheet modals.");return[2]}if(!this.breakpoints.includes(e)){printIonWarning("Attempted to set invalid breakpoint value ".concat(e,". Please double check that the breakpoint value is part of your defined breakpoints."));return[2]}t=this,r=t.currentBreakpoint,a=t.moveSheetToBreakpoint,n=t.canDismiss,i=t.breakpoints,o=t.animated;if(r===e){return[2]}if(!a)return[3,2];this.sheetTransition=a({breakpoint:e,breakpointOffset:1-r,canDismiss:n!==undefined&&n!==true&&i[0]===0,animated:o});return[4,this.sheetTransition];case 1:s.sent();this.sheetTransition=undefined;s.label=2;case 2:return[2]}}))}))};e.prototype.getCurrentBreakpoint=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){return[2,this.currentBreakpoint]}))}))};e.prototype.moveToNextBreakpoint=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,r,a,n,i,o;return __generator(this,(function(s){switch(s.label){case 0:e=this,t=e.breakpoints,r=e.currentBreakpoint;if(!t||r==null){return[2,false]}a=t.filter((function(e){return e!==0}));n=a.indexOf(r);i=(n+1)%a.length;o=a[i];return[4,this.setCurrentBreakpoint(o)];case 1:s.sent();return[2,true]}}))}))};e.prototype.render=function(){var e;var t=this;var r=this,a=r.handle,n=r.isSheetModal,i=r.presentingElement,o=r.htmlAttributes,s=r.handleBehavior,d=r.inheritedAttributes;var l=a!==false&&n;var c=getIonMode(this);var p=i!==undefined&&c==="ios";var u=s==="cycle";return h(Host,Object.assign({"no-router":true,tabindex:"-1"},o,{style:{zIndex:"".concat(2e4+this.overlayIndex)},class:Object.assign((e={},e[c]=true,e["modal-default"]=!p&&!n,e["modal-card"]=p,e["modal-sheet"]=n,e["overlay-hidden"]=true,e),getClassMap(this.cssClass)),onIonBackdropTap:this.onBackdropTap,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle}),h("ion-backdrop",{ref:function(e){return t.backdropEl=e},visible:this.showBackdrop,tappable:this.backdropDismiss,part:"backdrop"}),c==="ios"&&h("div",{class:"modal-shadow"}),h("div",Object.assign({role:"dialog"},d,{"aria-modal":"true",class:"modal-wrapper ion-overlay-wrapper",part:"content",ref:function(e){return t.wrapperEl=e}}),l&&h("button",{class:"modal-handle",tabIndex:!u?-1:0,"aria-label":"Activate to adjust the size of the dialog overlaying the screen",onClick:u?this.onHandleClick:undefined,part:"handle"}),h("slot",null)))};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}},enumerable:false,configurable:true});return e}();var LIFECYCLE_MAP={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"};Modal.style={ios:modalIosCss,md:modalMdCss};export{Modal as ion_modal};