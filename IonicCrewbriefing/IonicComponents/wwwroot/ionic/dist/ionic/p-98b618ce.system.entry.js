var __awaiter=this&&this.__awaiter||function(e,t,n,o){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,a){function r(e){try{s(o.next(e))}catch(e){a(e)}}function l(e){try{s(o["throw"](e))}catch(e){a(e)}}function s(e){e.done?n(e.value):i(e.value).then(r,l)}s((o=o.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},o,i,a,r;return r={next:l(0),throw:l(1),return:l(2)},typeof Symbol==="function"&&(r[Symbol.iterator]=function(){return this}),r;function l(e){return function(t){return s([e,t])}}function s(l){if(o)throw new TypeError("Generator is already executing.");while(r&&(r=0,l[0]&&(n=0)),n)try{if(o=1,i&&(a=l[0]&2?i["return"]:l[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,l[1])).done)return a;if(i=0,a)l=[l[0]&2,a.value];switch(l[0]){case 0:case 1:a=l;break;case 4:n.label++;return{value:l[1],done:false};case 5:n.label++;i=l[1];l=[0];continue;case 7:l=n.ops.pop();n.trys.pop();continue;default:if(!(a=n.trys,a=a.length>0&&a[a.length-1])&&(l[0]===6||l[0]===2)){n=0;continue}if(l[0]===3&&(!a||l[1]>a[0]&&l[1]<a[3])){n.label=l[1];break}if(l[0]===6&&n.label<a[1]){n.label=a[1];a=l;break}if(a&&n.label<a[2]){n.label=a[2];n.ops.push(l);break}if(a[2])n.ops.pop();n.trys.pop();continue}l=t.call(e,n)}catch(e){l=[6,e];i=0}finally{o=a=0}if(l[0]&5)throw l[1];return{value:l[0]?l[1]:void 0,done:true}}};
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */System.register(["./p-5b553dc0.system.js","./p-3d726a67.system.js","./p-815c2fba.system.js","./p-479cdbf8.system.js","./p-14d7b7e2.system.js","./p-819ff3b9.system.js","./p-44bc8b45.system.js","./p-8985b268.system.js","./p-7b16490a.system.js","./p-ccdcb022.system.js","./p-0e94957a.system.js"],(function(e,t){"use strict";var n,o,i,a,r,l,s,g,c,d,h,p,u,b,f,m,w,x,k;return{setters:[function(e){n=e.r;o=e.d;i=e.h;a=e.H;r=e.f},function(e){l=e.c},function(e){s=e.i;g=e.d;c=e.e},function(e){d=e.p},function(e){h=e.c},function(e){p=e.i},function(e){u=e.c;b=e.h},function(e){f=e.f;m=e.r;w=e.g},function(e){x=e.c;k=e.b},function(){},function(){}],execute:function(){var v=":host{-webkit-box-sizing:content-box !important;box-sizing:content-box !important;display:inline-block;position:relative;max-width:100%;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.in-item:not(.legacy-toggle)){width:100%;height:100%}:host([slot=start]:not(.legacy-toggle)),:host([slot=end]:not(.legacy-toggle)){width:auto}:host(.legacy-toggle){contain:content;-ms-touch-action:none;touch-action:none}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}:host(.legacy-toggle) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0;pointer-events:none}@supports (inset-inline-start: 0){:host(.legacy-toggle) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-toggle) label{left:0}:host-context([dir=rtl]):host(.legacy-toggle) label,:host-context([dir=rtl]).legacy-toggle label{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.legacy-toggle) label:dir(rtl){left:unset;right:unset;right:0}}}:host(.legacy-toggle) label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.toggle-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;cursor:inherit}.label-text-wrapper{pointer-events:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item:not(.legacy-toggle)) .label-text-wrapper{margin-top:10px;margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.toggle-justify-space-between) .toggle-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.toggle-justify-start) .toggle-wrapper{-ms-flex-pack:start;justify-content:start}:host(.toggle-justify-end) .toggle-wrapper{-ms-flex-pack:end;justify-content:end}:host(.toggle-label-placement-start) .toggle-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.toggle-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.toggle-label-placement-end) .toggle-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.toggle-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.toggle-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.toggle-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.toggle-icon-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;-webkit-transition:var(--handle-transition);transition:var(--handle-transition);will-change:transform}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;background:var(--track-background);overflow:inherit}:host(.toggle-checked) .toggle-icon{background:var(--track-background-checked)}.toggle-inner{border-radius:var(--handle-border-radius);position:absolute;left:var(--handle-spacing);width:var(--handle-width);height:var(--handle-height);max-height:var(--handle-max-height);-webkit-transition:var(--handle-transition);transition:var(--handle-transition);background:var(--handle-background);-webkit-box-shadow:var(--handle-box-shadow);box-shadow:var(--handle-box-shadow);contain:strict}:host(.toggle-ltr) .toggle-inner{left:var(--handle-spacing)}:host(.toggle-rtl) .toggle-inner{right:var(--handle-spacing)}:host(.toggle-ltr.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width)), 0, 0);transform:translate3d(calc(100% - var(--handle-width)), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width)), 0, 0);transform:translate3d(calc(-100% + var(--handle-width)), 0, 0)}:host(.toggle-checked) .toggle-inner{background:var(--handle-background-checked)}:host(.toggle-ltr.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0)}:host{--track-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.088);--track-background-checked:var(--ion-color-primary, #3880ff);--border-radius:16px;--handle-background:#ffffff;--handle-background-checked:#ffffff;--handle-border-radius:25.5px;--handle-box-shadow:0 3px 12px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.1);--handle-height:calc(32px - (2px * 2));--handle-max-height:calc(100% - var(--handle-spacing) * 2);--handle-width:calc(32px - (2px * 2));--handle-spacing:2px;--handle-transition:transform 300ms, width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms}:host(.legacy-toggle){width:51px;height:32px;contain:strict;overflow:hidden}.native-wrapper .toggle-icon{width:51px;height:32px;overflow:hidden}:host(.ion-color.toggle-checked) .toggle-icon{background:var(--ion-color-base)}:host(.toggle-activated) .toggle-switch-icon{opacity:0}.toggle-icon{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transition:background-color 300ms;transition:background-color 300ms}.toggle-inner{will-change:transform}.toggle-switch-icon{position:absolute;top:50%;width:11px;height:11px;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:opacity 300ms, color 300ms;transition:opacity 300ms, color 300ms}.toggle-switch-icon{position:absolute;color:var(--ion-color-dark)}:host(.toggle-ltr) .toggle-switch-icon{right:6px}:host(.toggle-rtl) .toggle-switch-icon{right:initial;left:6px;}:host(.toggle-checked) .toggle-switch-icon.toggle-switch-icon-checked{color:var(--ion-color-contrast, #fff)}:host(.toggle-checked) .toggle-switch-icon:not(.toggle-switch-icon-checked){opacity:0}.toggle-switch-icon-checked{position:absolute;width:15px;height:15px;-webkit-transform:translateY(-50%) rotate(90deg);transform:translateY(-50%) rotate(90deg)}:host(.toggle-ltr) .toggle-switch-icon-checked{right:initial;left:4px;}:host(.toggle-rtl) .toggle-switch-icon-checked{right:4px}:host(.toggle-activated) .toggle-icon::before,:host(.toggle-checked) .toggle-icon::before{-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0)}:host(.toggle-activated.toggle-checked) .toggle-inner::before{-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0)}:host(.toggle-activated) .toggle-inner{width:calc(var(--handle-width) + 6px)}:host(.toggle-ltr.toggle-activated.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width) - 6px), 0, 0);transform:translate3d(calc(100% - var(--handle-width) - 6px), 0, 0)}:host(.toggle-rtl.toggle-activated.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width) + 6px), 0, 0);transform:translate3d(calc(-100% + var(--handle-width) + 6px), 0, 0)}:host(.toggle-disabled){opacity:0.3}:host(.in-item.legacy-toggle){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:0;padding-inline-end:0;padding-top:6px;padding-bottom:5px}:host(.in-item.legacy-toggle[slot=start]){-webkit-padding-start:0;padding-inline-start:0;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:6px;padding-bottom:5px}";var y=":host{-webkit-box-sizing:content-box !important;box-sizing:content-box !important;display:inline-block;position:relative;max-width:100%;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.in-item:not(.legacy-toggle)){width:100%;height:100%}:host([slot=start]:not(.legacy-toggle)),:host([slot=end]:not(.legacy-toggle)){width:auto}:host(.legacy-toggle){contain:content;-ms-touch-action:none;touch-action:none}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}:host(.legacy-toggle) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0;pointer-events:none}@supports (inset-inline-start: 0){:host(.legacy-toggle) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-toggle) label{left:0}:host-context([dir=rtl]):host(.legacy-toggle) label,:host-context([dir=rtl]).legacy-toggle label{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.legacy-toggle) label:dir(rtl){left:unset;right:unset;right:0}}}:host(.legacy-toggle) label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.toggle-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;cursor:inherit}.label-text-wrapper{pointer-events:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item:not(.legacy-toggle)) .label-text-wrapper{margin-top:10px;margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.toggle-justify-space-between) .toggle-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.toggle-justify-start) .toggle-wrapper{-ms-flex-pack:start;justify-content:start}:host(.toggle-justify-end) .toggle-wrapper{-ms-flex-pack:end;justify-content:end}:host(.toggle-label-placement-start) .toggle-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.toggle-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.toggle-label-placement-end) .toggle-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.toggle-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.toggle-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.toggle-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.toggle-icon-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;-webkit-transition:var(--handle-transition);transition:var(--handle-transition);will-change:transform}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;background:var(--track-background);overflow:inherit}:host(.toggle-checked) .toggle-icon{background:var(--track-background-checked)}.toggle-inner{border-radius:var(--handle-border-radius);position:absolute;left:var(--handle-spacing);width:var(--handle-width);height:var(--handle-height);max-height:var(--handle-max-height);-webkit-transition:var(--handle-transition);transition:var(--handle-transition);background:var(--handle-background);-webkit-box-shadow:var(--handle-box-shadow);box-shadow:var(--handle-box-shadow);contain:strict}:host(.toggle-ltr) .toggle-inner{left:var(--handle-spacing)}:host(.toggle-rtl) .toggle-inner{right:var(--handle-spacing)}:host(.toggle-ltr.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width)), 0, 0);transform:translate3d(calc(100% - var(--handle-width)), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width)), 0, 0);transform:translate3d(calc(-100% + var(--handle-width)), 0, 0)}:host(.toggle-checked) .toggle-inner{background:var(--handle-background-checked)}:host(.toggle-ltr.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0)}:host{--track-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.39);--track-background-checked:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.5);--border-radius:14px;--handle-background:#ffffff;--handle-background-checked:var(--ion-color-primary, #3880ff);--handle-border-radius:50%;--handle-box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);--handle-width:20px;--handle-height:20px;--handle-max-height:calc(100% + 6px);--handle-spacing:0;--handle-transition:transform 160ms cubic-bezier(0.4, 0, 0.2, 1), background-color 160ms cubic-bezier(0.4, 0, 0.2, 1)}:host(.legacy-toggle){-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:12px;padding-bottom:12px;width:36px;height:14px;contain:strict}.native-wrapper .toggle-icon{width:36px;height:14px}:host(.ion-color.toggle-checked) .toggle-icon{background:rgba(var(--ion-color-base-rgb), 0.5)}:host(.ion-color.toggle-checked) .toggle-inner{background:var(--ion-color-base)}:host(.toggle-checked) .toggle-inner{color:var(--ion-color-contrast, #fff)}.toggle-icon{-webkit-transition:background-color 160ms;transition:background-color 160ms}.toggle-inner{will-change:background-color, transform;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:#000}.toggle-inner .toggle-switch-icon{-webkit-padding-start:1px;padding-inline-start:1px;-webkit-padding-end:1px;padding-inline-end:1px;padding-top:1px;padding-bottom:1px;width:100%;height:100%}:host(.toggle-disabled){opacity:0.38}:host(.in-item.legacy-toggle){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:0;padding-inline-end:0;padding-top:12px;padding-bottom:12px;cursor:pointer}:host(.in-item.legacy-toggle[slot=start]){-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:18px;padding-inline-end:18px;padding-top:12px;padding-bottom:12px}";var j=e("ion_toggle",function(){function e(e){var i=this;n(this,e);this.ionChange=o(this,"ionChange",7);this.ionFocus=o(this,"ionFocus",7);this.ionBlur=o(this,"ionBlur",7);this.ionStyle=o(this,"ionStyle",7);this.inputId="ion-tg-".concat(L++);this.lastDrag=0;this.inheritedAttributes={};this.didLoad=false;this.hasLoggedDeprecationWarning=false;this.setupGesture=function(){return __awaiter(i,void 0,void 0,(function(){var e,n;var o=this;return __generator(this,(function(i){switch(i.label){case 0:e=this.toggleTrack;if(!e)return[3,2];n=this;return[4,t.import("./p-fa8d4788.system.js")];case 1:n.gesture=i.sent().createGesture({el:e,gestureName:"toggle",gesturePriority:100,threshold:5,passive:false,onStart:function(){return o.onStart()},onMove:function(e){return o.onMove(e)},onEnd:function(e){return o.onEnd(e)}});this.disabledChanged();i.label=2;case 2:return[2]}}))}))};this.onClick=function(e){e.preventDefault();if(i.lastDrag+300<Date.now()){i.toggleChecked()}};this.onFocus=function(){i.ionFocus.emit()};this.onBlur=function(){i.ionBlur.emit()};this.getSwitchLabelIcon=function(e,t){if(e==="md"){return t?f:m}return t?m:w};this.activated=false;this.color=undefined;this.name=this.inputId;this.checked=false;this.disabled=false;this.value="on";this.enableOnOffLabels=x.get("toggleOnOffLabels");this.labelPlacement="start";this.legacy=undefined;this.justify="space-between"}e.prototype.disabledChanged=function(){this.emitStyle();if(this.gesture){this.gesture.enable(!this.disabled)}};e.prototype.toggleChecked=function(){var e=this,t=e.checked,n=e.value;var o=!t;this.checked=o;this.ionChange.emit({checked:o,value:n})};e.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(e){this.legacyFormController=l(this.el);if(this.didLoad){this.setupGesture()}return[2]}))}))};e.prototype.componentDidLoad=function(){this.setupGesture();this.didLoad=true};e.prototype.disconnectedCallback=function(){if(this.gesture){this.gesture.destroy();this.gesture=undefined}};e.prototype.componentWillLoad=function(){this.emitStyle();if(!this.legacyFormController.hasLegacyControl()){this.inheritedAttributes=Object.assign({},s(this.el))}};e.prototype.emitStyle=function(){if(this.legacyFormController.hasLegacyControl()){this.ionStyle.emit({"interactive-disabled":this.disabled})}};e.prototype.onStart=function(){this.activated=true;this.setFocus()};e.prototype.onMove=function(e){if(C(p(this.el),this.checked,e.deltaX,-10)){this.toggleChecked();h()}};e.prototype.onEnd=function(e){this.activated=false;this.lastDrag=Date.now();e.event.preventDefault();e.event.stopImmediatePropagation()};e.prototype.getValue=function(){return this.value||""};e.prototype.setFocus=function(){if(this.focusEl){this.focusEl.focus()}};e.prototype.renderOnOffSwitchLabels=function(e,t){var n=this.getSwitchLabelIcon(e,t);return i("ion-icon",{class:{"toggle-switch-icon":true,"toggle-switch-icon-checked":t},icon:n,"aria-hidden":"true"})};e.prototype.renderToggleControl=function(){var e=this;var t=k(this);var n=this,o=n.enableOnOffLabels,a=n.checked;return i("div",{class:"toggle-icon",part:"track",ref:function(t){return e.toggleTrack=t}},o&&t==="ios"&&[this.renderOnOffSwitchLabels(t,true),this.renderOnOffSwitchLabels(t,false)],i("div",{class:"toggle-icon-wrapper"},i("div",{class:"toggle-inner",part:"handle"},o&&t==="md"&&this.renderOnOffSwitchLabels(t,a))))};Object.defineProperty(e.prototype,"hasLabel",{get:function(){return this.el.textContent!==""},enumerable:false,configurable:true});e.prototype.render=function(){var e=this.legacyFormController;return e.hasLegacyControl()?this.renderLegacyToggle():this.renderToggle()};e.prototype.renderToggle=function(){var e;var t=this;var n=this,o=n.activated,r=n.color,l=n.checked,s=n.disabled,c=n.el,d=n.justify,h=n.labelPlacement,f=n.inputId,m=n.name;var w=k(this);var x=this.getValue();var v=p(c)?"rtl":"ltr";g(true,c,m,l?x:"",s);return i(a,{onClick:this.onClick,class:u(r,(e={},e[w]=true,e["in-item"]=b("ion-item",c),e["toggle-activated"]=o,e["toggle-checked"]=l,e["toggle-disabled"]=s,e["toggle-justify-".concat(d)]=true,e["toggle-label-placement-".concat(h)]=true,e["toggle-".concat(v)]=true,e))},i("label",{class:"toggle-wrapper"},i("input",Object.assign({type:"checkbox",role:"switch","aria-checked":"".concat(l),checked:l,disabled:s,id:f,onFocus:function(){return t.onFocus()},onBlur:function(){return t.onBlur()},ref:function(e){return t.focusEl=e}},this.inheritedAttributes)),i("div",{class:{"label-text-wrapper":true,"label-text-wrapper-hidden":!this.hasLabel}},i("slot",null)),i("div",{class:"native-wrapper"},this.renderToggleControl())))};e.prototype.renderLegacyToggle=function(){var e;var t=this;if(!this.hasLoggedDeprecationWarning){d('ion-toggle now requires providing a label with either the default slot or the "aria-label" attribute. To migrate, remove any usage of "ion-label" and pass the label text to either the component or the "aria-label" attribute.\n\nExample: <ion-toggle>Email</ion-toggle>\nExample with aria-label: <ion-toggle aria-label="Email"></ion-toggle>\n\nDevelopers can use the "legacy" property to continue using the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.',this.el);if(this.legacy){d('ion-toggle is being used with the "legacy" property enabled which will forcibly enable the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.\n\nDevelopers can dismiss this warning by removing their usage of the "legacy" property and using the new toggle syntax.',this.el)}this.hasLoggedDeprecationWarning=true}var n=this,o=n.activated,r=n.color,l=n.checked,s=n.disabled,h=n.el,f=n.inputId,m=n.name;var w=k(this);var x=c(h,f),v=x.label,y=x.labelId,j=x.labelText;var C=this.getValue();var L=p(h)?"rtl":"ltr";g(true,h,m,l?C:"",s);return i(a,{onClick:this.onClick,"aria-labelledby":v?y:null,"aria-checked":"".concat(l),"aria-hidden":s?"true":null,role:"switch",class:u(r,(e={},e[w]=true,e["in-item"]=b("ion-item",h),e["toggle-activated"]=o,e["toggle-checked"]=l,e["toggle-disabled"]=s,e["legacy-toggle"]=true,e.interactive=true,e["toggle-".concat(L)]=true,e))},this.renderToggleControl(),i("label",{htmlFor:f},j),i("input",{type:"checkbox",role:"switch","aria-checked":"".concat(l),disabled:s,id:f,onFocus:function(){return t.onFocus()},onBlur:function(){return t.onBlur()},ref:function(e){return t.focusEl=e}}))};Object.defineProperty(e.prototype,"el",{get:function(){return r(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{disabled:["disabledChanged"]}},enumerable:false,configurable:true});return e}());var C=function(e,t,n,o){if(t){return!e&&o>n||e&&-o<n}else{return!e&&-o<n||e&&o>n}};var L=0;j.style={ios:v,md:y}}}}));