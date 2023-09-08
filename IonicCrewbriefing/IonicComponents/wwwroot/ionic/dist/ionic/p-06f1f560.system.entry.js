var __awaiter=this&&this.__awaiter||function(t,e,n,r){function o(t){return t instanceof n?t:new n((function(e){e(t)}))}return new(n||(n=Promise))((function(n,i){function a(t){try{l(r.next(t))}catch(t){i(t)}}function s(t){try{l(r["throw"](t))}catch(t){i(t)}}function l(t){t.done?n(t.value):o(t.value).then(a,s)}l((r=r.apply(t,e||[])).next())}))};var __generator=this&&this.__generator||function(t,e){var n={label:0,sent:function(){if(i[0]&1)throw i[1];return i[1]},trys:[],ops:[]},r,o,i,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(e){return l([t,e])}}function l(s){if(r)throw new TypeError("Generator is already executing.");while(a&&(a=0,s[0]&&(n=0)),n)try{if(r=1,o&&(i=s[0]&2?o["return"]:s[0]?o["throw"]||((i=o["return"])&&i.call(o),0):o.next)&&!(i=i.call(o,s[1])).done)return i;if(o=0,i)s=[s[0]&2,i.value];switch(s[0]){case 0:case 1:i=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;o=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(i=n.trys,i=i.length>0&&i[i.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!i||s[1]>i[0]&&s[1]<i[3])){n.label=s[1];break}if(s[0]===6&&n.label<i[1]){n.label=i[1];i=s;break}if(i&&n.label<i[2]){n.label=i[2];n.ops.push(s);break}if(i[2])n.ops.pop();n.trys.pop();continue}s=e.call(t,n)}catch(t){s=[6,t];o=0}finally{r=i=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register(["./p-5b553dc0.system.js","./p-2b89ea1b.system.js","./p-815c2fba.system.js","./p-479cdbf8.system.js","./p-81b46714.system.js","./p-44bc8b45.system.js","./p-7b16490a.system.js","./p-6b2641f6.system.js","./p-8d9475b5.system.js","./p-8c15eda7.system.js","./p-0e94957a.system.js"],(function(t){"use strict";var e,n,r,o,i,a,s,l,d,c,u,p,h,f,b,g,m,v,x,w,y,k,T,C;return{setters:[function(t){e=t.r;n=t.d;r=t.h;o=t.H;i=t.f},function(t){a=t.E;s=t.a},function(t){l=t.g;d=t.r},function(t){c=t.p},function(t){u=t.d;p=t.e;h=t.i;f=t.j;b=t.k;g=t.f;m=t.g;v=t.h;x=t.s},function(t){w=t.g;y=t.c},function(t){k=t.c;T=t.b},function(t){C=t.c},function(){},function(){},function(){}],execute:function(){var _=function(t,e){var n=C();var r=C();var o=l(t);var i=o.querySelector(".toast-wrapper");var a="calc(-10px - var(--ion-safe-area-bottom, 0px))";var s="calc(10px + var(--ion-safe-area-top, 0px))";r.addElement(i);switch(e){case"top":r.fromTo("transform","translateY(-100%)","translateY(".concat(s,")"));break;case"middle":var d=Math.floor(t.clientHeight/2-i.clientHeight/2);i.style.top="".concat(d,"px");r.fromTo("opacity",.01,1);break;default:r.fromTo("transform","translateY(100%)","translateY(".concat(a,")"));break}return n.easing("cubic-bezier(.155,1.105,.295,1.12)").duration(400).addAnimation(r)};var j=function(t,e){var n=C();var r=C();var o=l(t);var i=o.querySelector(".toast-wrapper");var a="calc(-10px - var(--ion-safe-area-bottom, 0px))";var s="calc(10px + var(--ion-safe-area-top, 0px))";r.addElement(i);switch(e){case"top":r.fromTo("transform","translateY(".concat(s,")"),"translateY(-100%)");break;case"middle":r.fromTo("opacity",.99,0);break;default:r.fromTo("transform","translateY(".concat(a,")"),"translateY(100%)");break}return n.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(r)};var D=function(t,e){var n=C();var r=C();var o=l(t);var i=o.querySelector(".toast-wrapper");var a="calc(8px + var(--ion-safe-area-bottom, 0px))";var s="calc(8px + var(--ion-safe-area-top, 0px))";r.addElement(i);switch(e){case"top":i.style.top=s;r.fromTo("opacity",.01,1);break;case"middle":var d=Math.floor(t.clientHeight/2-i.clientHeight/2);i.style.top="".concat(d,"px");r.fromTo("opacity",.01,1);break;default:i.style.bottom=a;r.fromTo("opacity",.01,1);break}return n.easing("cubic-bezier(.36,.66,.04,1)").duration(400).addAnimation(r)};var z=function(t){var e=C();var n=C();var r=l(t);var o=r.querySelector(".toast-wrapper");n.addElement(o).fromTo("opacity",.99,0);return e.easing("cubic-bezier(.36,.66,.04,1)").duration(300).addAnimation(n)};var H=":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host:dir(rtl){left:unset;right:unset;right:0}}}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}@supports (inset-inline-start: 0){.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}}@supports not (inset-inline-start: 0){.toast-wrapper{left:var(--start);right:var(--end)}:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}@supports selector(:dir(rtl)){.toast-wrapper:dir(rtl){left:unset;right:unset;left:var(--end);right:var(--start)}}}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}:host(.ion-color.toast-translucent) .toast-wrapper{background:rgba(var(--ion-color-base-rgb), 0.8)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-content{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:15px;padding-bottom:15px}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}";var S=":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host:dir(rtl){left:unset;right:unset;right:0}}}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}@supports (inset-inline-start: 0){.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}}@supports not (inset-inline-start: 0){.toast-wrapper{left:var(--start);right:var(--end)}:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}@supports selector(:dir(rtl)){.toast-wrapper:dir(rtl){left:unset;right:unset;left:var(--end);right:var(--start)}}}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, #333333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-50, #f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}.toast-content{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:14px;padding-bottom:14px}.toast-header{margin-bottom:2px;font-weight:500;line-height:20px}.toast-message{line-height:20px}.toast-layout-baseline .toast-button-group-start{-webkit-margin-start:8px;margin-inline-start:8px}.toast-layout-stacked .toast-button-group-start{-webkit-margin-end:8px;margin-inline-end:8px;margin-top:8px}.toast-layout-baseline .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px}.toast-layout-stacked .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px;margin-bottom:8px}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}.toast-button-cancel{color:var(--ion-color-step-100, #e6e6e6)}.toast-button-icon-only{border-radius:50%;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}";var O=t("ion_toast",function(){function t(t){var r=this;e(this,t);this.didPresent=n(this,"ionToastDidPresent",7);this.willPresent=n(this,"ionToastWillPresent",7);this.willDismiss=n(this,"ionToastWillDismiss",7);this.didDismiss=n(this,"ionToastDidDismiss",7);this.didPresentShorthand=n(this,"didPresent",7);this.willPresentShorthand=n(this,"willPresent",7);this.willDismissShorthand=n(this,"willDismiss",7);this.didDismissShorthand=n(this,"didDismiss",7);this.delegateController=u(this);this.triggerController=p();this.customHTMLEnabled=k.get("innerHTMLTemplatesEnabled",a);this.presented=false;this.dispatchCancelHandler=function(t){var e=t.detail.role;if(h(e)){var n=r.getButtons().find((function(t){return t.role==="cancel"}));r.callButtonHandler(n)}};this.revealContentToScreenReader=false;this.overlayIndex=undefined;this.delegate=undefined;this.hasController=false;this.color=undefined;this.enterAnimation=undefined;this.leaveAnimation=undefined;this.cssClass=undefined;this.duration=k.getNumber("toastDuration",0);this.header=undefined;this.layout="baseline";this.message=undefined;this.keyboardClose=false;this.position="bottom";this.buttons=undefined;this.translucent=false;this.animated=true;this.icon=undefined;this.htmlAttributes=undefined;this.isOpen=false;this.trigger=undefined}t.prototype.onIsOpenChange=function(t,e){if(t===true&&e===false){this.present()}else if(t===false&&e===true){this.dismiss()}};t.prototype.triggerChanged=function(){var t=this,e=t.trigger,n=t.el,r=t.triggerController;if(e){r.addClickListener(n,e)}};t.prototype.connectedCallback=function(){f(this.el);this.triggerChanged()};t.prototype.disconnectedCallback=function(){this.triggerController.removeClickListener()};t.prototype.componentWillLoad=function(){b(this.el)};t.prototype.componentDidLoad=function(){var t=this;if(this.isOpen===true){d((function(){return t.present()}))}};t.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var t=this;return __generator(this,(function(e){switch(e.label){case 0:if(!(this.currentTransition!==undefined))return[3,2];return[4,this.currentTransition];case 1:e.sent();e.label=2;case 2:return[4,this.delegateController.attachViewToDom()];case 3:e.sent();this.currentTransition=g(this,"toastEnter",_,D,this.position);return[4,this.currentTransition];case 4:e.sent();this.revealContentToScreenReader=true;this.currentTransition=undefined;if(this.duration>0){this.durationTimeout=setTimeout((function(){return t.dismiss(undefined,"timeout")}),this.duration)}return[2]}}))}))};t.prototype.dismiss=function(t,e){return __awaiter(this,void 0,void 0,(function(){var n;return __generator(this,(function(r){switch(r.label){case 0:if(this.durationTimeout){clearTimeout(this.durationTimeout)}this.currentTransition=m(this,t,e,"toastLeave",j,z,this.position);return[4,this.currentTransition];case 1:n=r.sent();if(n){this.delegateController.removeViewFromDom();this.revealContentToScreenReader=false}return[2,n]}}))}))};t.prototype.onDidDismiss=function(){return v(this.el,"ionToastDidDismiss")};t.prototype.onWillDismiss=function(){return v(this.el,"ionToastWillDismiss")};t.prototype.getButtons=function(){var t=this.buttons?this.buttons.map((function(t){return typeof t==="string"?{text:t}:t})):[];return t};t.prototype.buttonClick=function(t){return __awaiter(this,void 0,void 0,(function(){var e,n;return __generator(this,(function(r){switch(r.label){case 0:e=t.role;if(h(e)){return[2,this.dismiss(undefined,e)]}return[4,this.callButtonHandler(t)];case 1:n=r.sent();if(n){return[2,this.dismiss(undefined,e)]}return[2,Promise.resolve()]}}))}))};t.prototype.callButtonHandler=function(t){return __awaiter(this,void 0,void 0,(function(){var e,n;return __generator(this,(function(r){switch(r.label){case 0:if(!(t===null||t===void 0?void 0:t.handler))return[3,4];r.label=1;case 1:r.trys.push([1,3,,4]);return[4,x(t.handler)];case 2:e=r.sent();if(e===false){return[2,false]}return[3,4];case 3:n=r.sent();console.error(n);return[3,4];case 4:return[2,true]}}))}))};t.prototype.renderButtons=function(t,e){var n;var o=this;if(t.length===0){return}var i=T(this);var a=(n={"toast-button-group":true},n["toast-button-group-".concat(e)]=true,n);return r("div",{class:a},t.map((function(t){return r("button",Object.assign({},t.htmlAttributes,{type:"button",class:P(t),tabIndex:0,onClick:function(){return o.buttonClick(t)},part:E(t)}),r("div",{class:"toast-button-inner"},t.icon&&r("ion-icon",{"aria-hidden":"true",icon:t.icon,slot:t.text===undefined?"icon-only":undefined,class:"toast-button-icon"}),t.text),i==="md"&&r("ion-ripple-effect",{type:t.icon!==undefined&&t.text===undefined?"unbounded":"bounded"}))})))};t.prototype.renderToastMessage=function(t,e){if(e===void 0){e=null}var n=this,o=n.customHTMLEnabled,i=n.message;if(o){return r("div",{key:t,"aria-hidden":e,class:"toast-message",part:"message",innerHTML:s(i)})}return r("div",{key:t,"aria-hidden":e,class:"toast-message",part:"message"},i)};t.prototype.renderHeader=function(t,e){if(e===void 0){e=null}return r("div",{key:t,class:"toast-header","aria-hidden":e,part:"header"},this.header)};t.prototype.render=function(){var t,e;var n=this,i=n.layout,a=n.el,s=n.revealContentToScreenReader,l=n.header,d=n.message;var u=this.getButtons();var p=u.filter((function(t){return t.side==="start"}));var h=u.filter((function(t){return t.side!=="start"}));var f=T(this);var b=(t={"toast-wrapper":true},t["toast-".concat(this.position)]=true,t["toast-layout-".concat(i)]=true,t);if(i==="stacked"&&p.length>0&&h.length>0){c("This toast is using start and end buttons with the stacked toast layout. We recommend following the best practice of using either start or end buttons with the stacked toast layout.",a)}return r(o,Object.assign({tabindex:"-1"},this.htmlAttributes,{style:{zIndex:"".concat(6e4+this.overlayIndex)},class:y(this.color,Object.assign(Object.assign((e={},e[f]=true,e),w(this.cssClass)),{"overlay-hidden":true,"toast-translucent":this.translucent})),onIonToastWillDismiss:this.dispatchCancelHandler}),r("div",{class:b},r("div",{class:"toast-container",part:"container"},this.renderButtons(p,"start"),this.icon!==undefined&&r("ion-icon",{class:"toast-icon",part:"icon",icon:this.icon,lazy:false,"aria-hidden":"true"}),r("div",{class:"toast-content",role:"status","aria-atomic":"true","aria-live":"polite"},!s&&l!==undefined&&this.renderHeader("oldHeader","true"),!s&&d!==undefined&&this.renderToastMessage("oldMessage","true"),s&&l!==undefined&&this.renderHeader("header"),s&&d!==undefined&&this.renderToastMessage("header")),this.renderButtons(h,"end"))))};Object.defineProperty(t.prototype,"el",{get:function(){return i(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"]}},enumerable:false,configurable:true});return t}());var P=function(t){var e;return Object.assign((e={"toast-button":true,"toast-button-icon-only":t.icon!==undefined&&t.text===undefined},e["toast-button-".concat(t.role)]=t.role!==undefined,e["ion-focusable"]=true,e["ion-activatable"]=true,e),w(t.cssClass))};var E=function(t){return h(t.role)?"button cancel":"button"};O.style={ios:H,md:S}}}}));