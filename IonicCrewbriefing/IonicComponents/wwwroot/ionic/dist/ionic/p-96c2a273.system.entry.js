var __awaiter=this&&this.__awaiter||function(t,o,r,i){function n(t){return t instanceof r?t:new r((function(o){o(t)}))}return new(r||(r=Promise))((function(r,e){function a(t){try{c(i.next(t))}catch(t){e(t)}}function s(t){try{c(i["throw"](t))}catch(t){e(t)}}function c(t){t.done?r(t.value):n(t.value).then(a,s)}c((i=i.apply(t,o||[])).next())}))};var __generator=this&&this.__generator||function(t,o){var r={label:0,sent:function(){if(e[0]&1)throw e[1];return e[1]},trys:[],ops:[]},i,n,e,a;return a={next:s(0),throw:s(1),return:s(2)},typeof Symbol==="function"&&(a[Symbol.iterator]=function(){return this}),a;function s(t){return function(o){return c([t,o])}}function c(s){if(i)throw new TypeError("Generator is already executing.");while(a&&(a=0,s[0]&&(r=0)),r)try{if(i=1,n&&(e=s[0]&2?n["return"]:s[0]?n["throw"]||((e=n["return"])&&e.call(n),0):n.next)&&!(e=e.call(n,s[1])).done)return e;if(n=0,e)s=[s[0]&2,e.value];switch(s[0]){case 0:case 1:e=s;break;case 4:r.label++;return{value:s[1],done:false};case 5:r.label++;n=s[1];s=[0];continue;case 7:s=r.ops.pop();r.trys.pop();continue;default:if(!(e=r.trys,e=e.length>0&&e[e.length-1])&&(s[0]===6||s[0]===2)){r=0;continue}if(s[0]===3&&(!e||s[1]>e[0]&&s[1]<e[3])){r.label=s[1];break}if(s[0]===6&&r.label<e[1]){r.label=e[1];e=s;break}if(e&&r.label<e[2]){r.label=e[2];r.ops.push(s);break}if(e[2])r.ops.pop();r.trys.pop();continue}s=o.call(t,r)}catch(t){s=[6,t];n=0}finally{i=e=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register(["./p-5b553dc0.system.js","./p-7b16490a.system.js","./p-815c2fba.system.js","./p-44bc8b45.system.js","./p-8985b268.system.js"],(function(t){"use strict";var o,r,i,n,e,a,s,c,l,d,b;return{setters:[function(t){o=t.r;r=t.h;i=t.H;n=t.f;e=t.d},function(t){a=t.b},function(t){s=t.i},function(t){c=t.h;l=t.o;d=t.c},function(t){b=t.t}],execute:function(){var f=":host{position:absolute;z-index:999}:host(.fab-horizontal-center){-webkit-margin-start:-28px;margin-inline-start:-28px}@supports (inset-inline-start: 0){:host(.fab-horizontal-center){inset-inline-start:50%}}@supports not (inset-inline-start: 0){:host(.fab-horizontal-center){left:50%}:host-context([dir=rtl]):host(.fab-horizontal-center),:host-context([dir=rtl]).fab-horizontal-center{left:unset;right:unset;right:50%}@supports selector(:dir(rtl)){:host(.fab-horizontal-center):dir(rtl){left:unset;right:unset;right:50%}}}@supports (inset-inline-start: 0){:host(.fab-horizontal-start){inset-inline-start:calc(10px + var(--ion-safe-area-left, 0px))}}@supports not (inset-inline-start: 0){:host(.fab-horizontal-start){left:calc(10px + var(--ion-safe-area-left, 0px))}:host-context([dir=rtl]):host(.fab-horizontal-start),:host-context([dir=rtl]).fab-horizontal-start{left:unset;right:unset;right:calc(10px + var(--ion-safe-area-left, 0px))}@supports selector(:dir(rtl)){:host(.fab-horizontal-start):dir(rtl){left:unset;right:unset;right:calc(10px + var(--ion-safe-area-left, 0px))}}}@supports (inset-inline-start: 0){:host(.fab-horizontal-end){inset-inline-end:calc(10px + var(--ion-safe-area-right, 0px))}}@supports not (inset-inline-start: 0){:host(.fab-horizontal-end){right:calc(10px + var(--ion-safe-area-right, 0px))}:host-context([dir=rtl]):host(.fab-horizontal-end),:host-context([dir=rtl]).fab-horizontal-end{left:unset;right:unset;left:calc(10px + var(--ion-safe-area-right, 0px))}@supports selector(:dir(rtl)){:host(.fab-horizontal-end):dir(rtl){left:unset;right:unset;left:calc(10px + var(--ion-safe-area-right, 0px))}}}:host(.fab-vertical-top){top:10px}:host(.fab-vertical-top.fab-edge){top:-28px}:host(.fab-vertical-bottom){bottom:10px}:host(.fab-vertical-bottom.fab-edge){bottom:-28px}:host(.fab-vertical-center){margin-top:-28px;top:50%}";var u=t("ion_fab",function(){function t(t){o(this,t);this.horizontal=undefined;this.vertical=undefined;this.edge=false;this.activated=false}t.prototype.activatedChanged=function(){var t=this.activated;var o=this.getFab();if(o){o.activated=t}Array.from(this.el.querySelectorAll("ion-fab-list")).forEach((function(o){o.activated=t}))};t.prototype.componentDidLoad=function(){if(this.activated){this.activatedChanged()}};t.prototype.close=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.activated=false;return[2]}))}))};t.prototype.getFab=function(){return this.el.querySelector("ion-fab-button")};t.prototype.toggle=function(){return __awaiter(this,void 0,void 0,(function(){var t;return __generator(this,(function(o){t=!!this.el.querySelector("ion-fab-list");if(t){this.activated=!this.activated}return[2]}))}))};t.prototype.render=function(){var t;var o=this,n=o.horizontal,e=o.vertical,s=o.edge;var c=a(this);return r(i,{class:(t={},t[c]=true,t["fab-horizontal-".concat(n)]=n!==undefined,t["fab-vertical-".concat(e)]=e!==undefined,t["fab-edge"]=s,t)},r("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{activated:["activatedChanged"]}},enumerable:false,configurable:true});return t}());u.style=f;var p=':host{--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--background-hover:var(--ion-color-primary-contrast, #fff);--background-hover-opacity:.08;--transition:background-color, opacity 100ms linear;--ripple-color:currentColor;--border-radius:50%;--border-width:0;--border-style:none;--border-color:initial;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:56px;height:56px;font-size:14px;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transform:var(--transform);transform:var(--transform);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);background-clip:padding-box;color:var(--color);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:strict;cursor:pointer;overflow:hidden;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-icon){line-height:1}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{left:0;right:0;top:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transition:all ease-in-out 300ms;transition:all ease-in-out 300ms;-webkit-transition-property:opacity, -webkit-transform;transition-property:opacity, -webkit-transform;transition-property:transform, opacity;transition-property:transform, opacity, -webkit-transform;z-index:1}:host(.fab-button-disabled){cursor:default;opacity:0.5;pointer-events:none}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.ion-activated) .button-native{color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}::slotted(ion-icon){line-height:1}:host(.fab-button-small){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:8px;margin-bottom:8px;width:40px;height:40px}.close-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;left:0;right:0;top:0;position:absolute;height:100%;-webkit-transform:scale(0.4) rotateZ(-45deg);transform:scale(0.4) rotateZ(-45deg);-webkit-transition:all ease-in-out 300ms;transition:all ease-in-out 300ms;-webkit-transition-property:opacity, -webkit-transform;transition-property:opacity, -webkit-transform;transition-property:transform, opacity;transition-property:transform, opacity, -webkit-transform;font-size:var(--close-icon-font-size);opacity:0;z-index:1}:host(.fab-button-close-active) .close-icon{-webkit-transform:scale(1) rotateZ(0deg);transform:scale(1) rotateZ(0deg);opacity:1}:host(.fab-button-close-active) .button-inner{-webkit-transform:scale(0.4) rotateZ(45deg);transform:scale(0.4) rotateZ(45deg);opacity:0}ion-ripple-effect{color:var(--ripple-color)}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.fab-button-translucent) .button-native{-webkit-backdrop-filter:var(--backdrop-filter);backdrop-filter:var(--backdrop-filter)}}:host(.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{--background:var(--ion-color-primary, #3880ff);--background-activated:var(--ion-color-primary-shade, #3171e0);--background-focused:var(--ion-color-primary-shade, #3171e0);--background-hover:var(--ion-color-primary-tint, #4c8dff);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1;--color:var(--ion-color-primary-contrast, #fff);--box-shadow:0 4px 16px rgba(0, 0, 0, 0.12);--transition:0.2s transform cubic-bezier(0.25, 1.11, 0.78, 1.59);--close-icon-font-size:28px}:host(.ion-activated){--box-shadow:0 4px 16px rgba(0, 0, 0, 0.12);--transform:scale(1.1);--transition:0.2s transform ease-out}::slotted(ion-icon){font-size:28px}:host(.fab-button-in-list){--background:var(--ion-color-light, #f4f5f8);--background-activated:var(--ion-color-light-shade, #d7d8da);--background-focused:var(--background-activated);--background-hover:var(--ion-color-light-tint, #f5f6f9);--color:var(--ion-color-light-contrast, #000);--color-activated:var(--ion-color-light-contrast, #000);--color-focused:var(--color-activated);--transition:transform 200ms ease 10ms, opacity 200ms ease 10ms}:host(.fab-button-in-list) ::slotted(ion-icon){font-size:18px}:host(.ion-color.ion-focused) .button-native::after{background:var(--ion-color-shade)}:host(.ion-color.ion-focused) .button-native,:host(.ion-color.ion-activated) .button-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-focused) .button-native::after,:host(.ion-color.ion-activated) .button-native::after{background:var(--ion-color-shade)}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-contrast)}:host(.ion-color:hover) .button-native::after{background:var(--ion-color-tint)}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.fab-button-translucent){--background:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.9);--background-hover:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.8);--background-focused:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.82);--backdrop-filter:saturate(180%) blur(20px)}:host(.fab-button-translucent-in-list){--background:rgba(var(--ion-color-light-rgb, 244, 245, 248), 0.9);--background-hover:rgba(var(--ion-color-light-rgb, 244, 245, 248), 0.8);--background-focused:rgba(var(--ion-color-light-rgb, 244, 245, 248), 0.82)}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){@media (any-hover: hover){:host(.fab-button-translucent.ion-color:hover) .button-native{background:rgba(var(--ion-color-base-rgb), 0.8)}}:host(.ion-color.fab-button-translucent) .button-native{background:rgba(var(--ion-color-base-rgb), 0.9)}:host(.ion-color.ion-focused.fab-button-translucent) .button-native,:host(.ion-color.ion-activated.fab-button-translucent) .button-native{background:var(--ion-color-base)}}';var h=':host{--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--background-hover:var(--ion-color-primary-contrast, #fff);--background-hover-opacity:.08;--transition:background-color, opacity 100ms linear;--ripple-color:currentColor;--border-radius:50%;--border-width:0;--border-style:none;--border-color:initial;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;width:56px;height:56px;font-size:14px;text-align:center;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transform:var(--transform);transform:var(--transform);-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);background-clip:padding-box;color:var(--color);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:strict;cursor:pointer;overflow:hidden;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;-webkit-box-sizing:border-box;box-sizing:border-box}::slotted(ion-icon){line-height:1}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}.button-inner{left:0;right:0;top:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-transition:all ease-in-out 300ms;transition:all ease-in-out 300ms;-webkit-transition-property:opacity, -webkit-transform;transition-property:opacity, -webkit-transform;transition-property:transform, opacity;transition-property:transform, opacity, -webkit-transform;z-index:1}:host(.fab-button-disabled){cursor:default;opacity:0.5;pointer-events:none}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}:host(.ion-activated) .button-native{color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}::slotted(ion-icon){line-height:1}:host(.fab-button-small){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:8px;margin-bottom:8px;width:40px;height:40px}.close-icon{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;left:0;right:0;top:0;position:absolute;height:100%;-webkit-transform:scale(0.4) rotateZ(-45deg);transform:scale(0.4) rotateZ(-45deg);-webkit-transition:all ease-in-out 300ms;transition:all ease-in-out 300ms;-webkit-transition-property:opacity, -webkit-transform;transition-property:opacity, -webkit-transform;transition-property:transform, opacity;transition-property:transform, opacity, -webkit-transform;font-size:var(--close-icon-font-size);opacity:0;z-index:1}:host(.fab-button-close-active) .close-icon{-webkit-transform:scale(1) rotateZ(0deg);transform:scale(1) rotateZ(0deg);opacity:1}:host(.fab-button-close-active) .button-inner{-webkit-transform:scale(0.4) rotateZ(45deg);transform:scale(0.4) rotateZ(45deg);opacity:0}ion-ripple-effect{color:var(--ripple-color)}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.fab-button-translucent) .button-native{-webkit-backdrop-filter:var(--backdrop-filter);backdrop-filter:var(--backdrop-filter)}}:host(.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host{--background:var(--ion-color-primary, #3880ff);--background-activated:transparent;--background-focused:currentColor;--background-hover:currentColor;--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--color:var(--ion-color-primary-contrast, #fff);--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1), background-color 280ms cubic-bezier(0.4, 0, 0.2, 1), color 280ms cubic-bezier(0.4, 0, 0.2, 1), opacity 15ms linear 30ms, transform 270ms cubic-bezier(0, 0, 0.2, 1) 0ms;--close-icon-font-size:24px}:host(.ion-activated){--box-shadow:0 7px 8px -4px rgba(0, 0, 0, 0.2), 0 12px 17px 2px rgba(0, 0, 0, 0.14), 0 5px 22px 4px rgba(0, 0, 0, 0.12)}::slotted(ion-icon){font-size:24px}:host(.fab-button-in-list){--color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54);--color-activated:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.54);--color-focused:var(--color-activated);--background:var(--ion-color-light, #f4f5f8);--background-activated:transparent;--background-focused:var(--ion-color-light-shade, #d7d8da);--background-hover:var(--ion-color-light-tint, #f5f6f9)}:host(.fab-button-in-list) ::slotted(ion-icon){font-size:18px}:host(.ion-color.ion-focused) .button-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast)}:host(.ion-color.ion-activated) .button-native{color:var(--ion-color-contrast)}:host(.ion-color.ion-activated) .button-native::after{background:transparent}@media (any-hover: hover){:host(.ion-color:hover) .button-native{color:var(--ion-color-contrast)}:host(.ion-color:hover) .button-native::after{background:var(--ion-color-contrast)}}';var g=t("ion_fab_button",function(){function t(t){var r=this;o(this,t);this.ionFocus=e(this,"ionFocus",7);this.ionBlur=e(this,"ionBlur",7);this.fab=null;this.inheritedAttributes={};this.onFocus=function(){r.ionFocus.emit()};this.onBlur=function(){r.ionBlur.emit()};this.onClick=function(){var t=r.fab;if(!t){return}t.toggle()};this.color=undefined;this.activated=false;this.disabled=false;this.download=undefined;this.href=undefined;this.rel=undefined;this.routerDirection="forward";this.routerAnimation=undefined;this.target=undefined;this.show=false;this.translucent=false;this.type="button";this.size=undefined;this.closeIcon=b}t.prototype.connectedCallback=function(){this.fab=this.el.closest("ion-fab")};t.prototype.componentWillLoad=function(){this.inheritedAttributes=s(this.el)};t.prototype.render=function(){var t;var o=this;var n=this,e=n.el,s=n.disabled,b=n.color,f=n.href,u=n.activated,p=n.show,h=n.translucent,g=n.size,v=n.inheritedAttributes;var m=c("ion-fab-list",e);var x=a(this);var k=f===undefined?"button":"a";var y=k==="button"?{type:this.type}:{download:this.download,href:f,rel:this.rel,target:this.target};return r(i,{onClick:this.onClick,"aria-disabled":s?"true":null,class:d(b,(t={},t[x]=true,t["fab-button-in-list"]=m,t["fab-button-translucent-in-list"]=m&&h,t["fab-button-close-active"]=u,t["fab-button-show"]=p,t["fab-button-disabled"]=s,t["fab-button-translucent"]=h,t["ion-activatable"]=true,t["ion-focusable"]=true,t["fab-button-".concat(g)]=g!==undefined,t))},r(k,Object.assign({},y,{class:"button-native",part:"native",disabled:s,onFocus:this.onFocus,onBlur:this.onBlur,onClick:function(t){return l(f,t,o.routerDirection,o.routerAnimation)}},v),r("ion-icon",{"aria-hidden":"true",icon:this.closeIcon,part:"close-icon",class:"close-icon",lazy:false}),r("span",{class:"button-inner"},r("slot",null)),x==="md"&&r("ion-ripple-effect",null)))};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});return t}());g.style={ios:p,md:h};var v=":host{margin-left:0;margin-right:0;margin-top:66px;margin-bottom:66px;display:none;position:absolute;top:0;-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;min-width:56px;min-height:56px}:host(.fab-list-active){display:-ms-flexbox;display:flex}::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:8px;margin-bottom:8px;width:40px;height:40px;-webkit-transform:scale(0);transform:scale(0);opacity:0;visibility:hidden}:host(.fab-list-side-top) ::slotted(.fab-button-in-list),:host(.fab-list-side-bottom) ::slotted(.fab-button-in-list){margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px}:host(.fab-list-side-start) ::slotted(.fab-button-in-list),:host(.fab-list-side-end) ::slotted(.fab-button-in-list){-webkit-margin-start:5px;margin-inline-start:5px;-webkit-margin-end:5px;margin-inline-end:5px;margin-top:0;margin-bottom:0}::slotted(.fab-button-in-list.fab-button-show){-webkit-transform:scale(1);transform:scale(1);opacity:1;visibility:visible}:host(.fab-list-side-top){top:auto;bottom:0;-ms-flex-direction:column-reverse;flex-direction:column-reverse}:host(.fab-list-side-start){-webkit-margin-start:66px;margin-inline-start:66px;-webkit-margin-end:66px;margin-inline-end:66px;margin-top:0;margin-bottom:0;-ms-flex-direction:row-reverse;flex-direction:row-reverse}@supports (inset-inline-start: 0){:host(.fab-list-side-start){inset-inline-end:0}}@supports not (inset-inline-start: 0){:host(.fab-list-side-start){right:0}:host-context([dir=rtl]):host(.fab-list-side-start),:host-context([dir=rtl]).fab-list-side-start{left:unset;right:unset;left:0}@supports selector(:dir(rtl)){:host(.fab-list-side-start):dir(rtl){left:unset;right:unset;left:0}}}:host(.fab-list-side-end){-webkit-margin-start:66px;margin-inline-start:66px;-webkit-margin-end:66px;margin-inline-end:66px;margin-top:0;margin-bottom:0;-ms-flex-direction:row;flex-direction:row}@supports (inset-inline-start: 0){:host(.fab-list-side-end){inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.fab-list-side-end){left:0}:host-context([dir=rtl]):host(.fab-list-side-end),:host-context([dir=rtl]).fab-list-side-end{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.fab-list-side-end):dir(rtl){left:unset;right:unset;right:0}}}";var m=t("ion_fab_list",function(){function t(t){o(this,t);this.activated=false;this.side="bottom"}t.prototype.activatedChanged=function(t){var o=Array.from(this.el.querySelectorAll("ion-fab-button"));var r=t?30:0;o.forEach((function(o,i){setTimeout((function(){return o.show=t}),i*r)}))};t.prototype.render=function(){var t;var o=a(this);return r(i,{class:(t={},t[o]=true,t["fab-list-active"]=this.activated,t["fab-list-side-".concat(this.side)]=true,t)},r("slot",null))};Object.defineProperty(t.prototype,"el",{get:function(){return n(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{activated:["activatedChanged"]}},enumerable:false,configurable:true});return t}());m.style=v}}}));