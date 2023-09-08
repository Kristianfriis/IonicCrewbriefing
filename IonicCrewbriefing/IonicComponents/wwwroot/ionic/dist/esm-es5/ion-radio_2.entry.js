import{__awaiter,__generator}from"tslib";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */import{r as registerInstance,d as createEvent,h,H as Host,f as getElement}from"./index-847f2fde.js";import{c as createLegacyFormController}from"./form-controller-ed77647a.js";import{a as addEventListener,b as removeEventListener,e as getAriaLabel,d as renderHiddenInput}from"./helpers-3379ba19.js";import{p as printIonWarning}from"./index-595d62c9.js";import{h as hostContext,c as createColorClasses}from"./theme-17531cdf.js";import{b as getIonMode}from"./ionic-global-1ef19007.js";var radioIosCss=':host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;min-height:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(:not(.legacy-radio)){cursor:pointer}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host(.legacy-radio) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}@supports (inset-inline-start: 0){:host(.legacy-radio) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-radio) label{left:0}:host-context([dir=rtl]):host(.legacy-radio) label,:host-context([dir=rtl]).legacy-radio label{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.legacy-radio) label:dir(rtl){left:unset;right:unset;right:0}}}:host(.legacy-radio) label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host(.in-item:not(.legacy-radio)){width:100%;height:100%}:host([slot=start]:not(.legacy-radio)),:host([slot=end]:not(.legacy-radio)){width:auto}.radio-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;cursor:inherit}.label-text-wrapper{pointer-events:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item:not(.legacy-radio)) .label-text-wrapper{margin-top:10px;margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between) .radio-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.radio-justify-start) .radio-wrapper{-ms-flex-pack:start;justify-content:start}:host(.radio-justify-end) .radio-wrapper{-ms-flex-pack:end;justify-content:end}:host(.radio-label-placement-start) .radio-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.radio-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-end) .radio-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.radio-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px}:host{--color-checked:var(--ion-color-primary, #3880ff)}:host(.legacy-radio){width:15px;height:24px}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{-webkit-margin-start:0;margin-inline-start:0}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:"";opacity:0.2}@supports (inset-inline-start: 0){:host(.ion-focused) .radio-icon::after{inset-inline-start:-9px}}@supports not (inset-inline-start: 0){:host(.ion-focused) .radio-icon::after{left:-9px}:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after,:host-context([dir=rtl]).ion-focused .radio-icon::after{left:unset;right:unset;right:-9px}@supports selector(:dir(rtl)){:host(.ion-focused) .radio-icon::after:dir(rtl){left:unset;right:unset;right:-9px}}}:host(.in-item.legacy-radio){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:11px;margin-inline-end:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}:host(.in-item.legacy-radio[slot=start]){-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px;margin-top:8px;margin-bottom:8px}.native-wrapper .radio-icon{width:15px;height:24px}';var radioMdCss=':host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;min-height:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(:not(.legacy-radio)){cursor:pointer}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host(.legacy-radio) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}@supports (inset-inline-start: 0){:host(.legacy-radio) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-radio) label{left:0}:host-context([dir=rtl]):host(.legacy-radio) label,:host-context([dir=rtl]).legacy-radio label{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.legacy-radio) label:dir(rtl){left:unset;right:unset;right:0}}}:host(.legacy-radio) label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host(.in-item:not(.legacy-radio)){width:100%;height:100%}:host([slot=start]:not(.legacy-radio)),:host([slot=end]:not(.legacy-radio)){width:auto}.radio-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;cursor:inherit}.label-text-wrapper{pointer-events:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item:not(.legacy-radio)) .label-text-wrapper{margin-top:10px;margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between) .radio-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.radio-justify-start) .radio-wrapper{-ms-flex-pack:start;justify-content:start}:host(.radio-justify-end) .radio-wrapper{-ms-flex-pack:end;justify-content:end}:host(.radio-label-placement-start) .radio-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.radio-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-end) .radio-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.radio-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px}:host{--color:rgb(var(--ion-text-color-rgb, 0, 0, 0), 0.6);--color-checked:var(--ion-color-primary, #3880ff);--border-width:2px;--border-style:solid;--border-radius:50%}:host(.legacy-radio){width:20px;height:20px}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:var(--inner-border-radius);width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}:host(.legacy-radio.radio-disabled),:host(.radio-disabled) .label-text-wrapper{opacity:0.38}:host(.radio-disabled) .native-wrapper{opacity:0.63}:host(.ion-focused.legacy-radio) .radio-icon::after{top:-12px}@supports (inset-inline-start: 0){:host(.ion-focused.legacy-radio) .radio-icon::after{inset-inline-start:-12px}}@supports not (inset-inline-start: 0){:host(.ion-focused.legacy-radio) .radio-icon::after{left:-12px}:host-context([dir=rtl]):host(.ion-focused.legacy-radio) .radio-icon::after,:host-context([dir=rtl]).ion-focused.legacy-radio .radio-icon::after{left:unset;right:unset;right:-12px}@supports selector(:dir(rtl)){:host(.ion-focused.legacy-radio) .radio-icon::after:dir(rtl){left:unset;right:unset;right:-12px}}}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:"";opacity:0.2}:host(.in-item.legacy-radio){margin-left:0;margin-right:0;margin-top:9px;margin-bottom:9px;display:block;position:static}:host(.in-item.legacy-radio[slot=start]){-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px;margin-top:11px;margin-bottom:10px}.native-wrapper .radio-icon{width:20px;height:20px}';var Radio=function(){function e(e){var t=this;registerInstance(this,e);this.ionStyle=createEvent(this,"ionStyle",7);this.ionFocus=createEvent(this,"ionFocus",7);this.ionBlur=createEvent(this,"ionBlur",7);this.inputId="ion-rb-".concat(radioButtonIds++);this.radioGroup=null;this.hasLoggedDeprecationWarning=false;this.updateState=function(){if(t.radioGroup){t.checked=t.radioGroup.value===t.value}};this.onClick=function(){var e=t,i=e.radioGroup,r=e.checked;if(t.legacyFormController.hasLegacyControl()){t.checked=t.nativeInput.checked;return}if(r&&(i===null||i===void 0?void 0:i.allowEmptySelection)){t.checked=false}else{t.checked=true}};this.onFocus=function(){t.ionFocus.emit()};this.onBlur=function(){t.ionBlur.emit()};this.checked=false;this.buttonTabindex=-1;this.color=undefined;this.name=this.inputId;this.disabled=false;this.value=undefined;this.labelPlacement="start";this.legacy=undefined;this.justify="space-between"}e.prototype.valueChanged=function(){this.updateState()};e.prototype.setFocus=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){e.stopPropagation();e.preventDefault();this.el.focus();return[2]}))}))};e.prototype.setButtonTabindex=function(e){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){this.buttonTabindex=e;return[2]}))}))};e.prototype.connectedCallback=function(){this.legacyFormController=createLegacyFormController(this.el);if(this.value===undefined){this.value=this.inputId}var e=this.radioGroup=this.el.closest("ion-radio-group");if(e){this.updateState();addEventListener(e,"ionValueChange",this.updateState)}};e.prototype.disconnectedCallback=function(){var e=this.radioGroup;if(e){removeEventListener(e,"ionValueChange",this.updateState);this.radioGroup=null}};e.prototype.componentWillLoad=function(){this.emitStyle()};e.prototype.styleChanged=function(){this.emitStyle()};e.prototype.emitStyle=function(){var e={"interactive-disabled":this.disabled};if(this.legacyFormController.hasLegacyControl()){e["radio-checked"]=this.checked}this.ionStyle.emit(e)};Object.defineProperty(e.prototype,"hasLabel",{get:function(){return this.el.textContent!==""},enumerable:false,configurable:true});e.prototype.renderRadioControl=function(){return h("div",{class:"radio-icon",part:"container"},h("div",{class:"radio-inner",part:"mark"}),h("div",{class:"radio-ripple"}))};e.prototype.render=function(){var e=this.legacyFormController;return e.hasLegacyControl()?this.renderLegacyRadio():this.renderRadio()};e.prototype.renderRadio=function(){var e;var t=this,i=t.checked,r=t.disabled,o=t.color,a=t.el,n=t.justify,s=t.labelPlacement,l=t.hasLabel,d=t.buttonTabindex;var c=getIonMode(this);var p=hostContext("ion-item",a);return h(Host,{onFocus:this.onFocus,onBlur:this.onBlur,onClick:this.onClick,class:createColorClasses(o,(e={},e[c]=true,e["in-item"]=p,e["radio-checked"]=i,e["radio-disabled"]=r,e["radio-justify-".concat(n)]=true,e["radio-label-placement-".concat(s)]=true,e["ion-activatable"]=!p,e["ion-focusable"]=!p,e)),role:"radio","aria-checked":i?"true":"false","aria-disabled":r?"true":null,tabindex:d},h("label",{class:"radio-wrapper"},h("div",{class:{"label-text-wrapper":true,"label-text-wrapper-hidden":!l}},h("slot",null)),h("div",{class:"native-wrapper"},this.renderRadioControl())))};e.prototype.renderLegacyRadio=function(){var e;var t=this;if(!this.hasLoggedDeprecationWarning){printIonWarning('ion-radio now requires providing a label with either the default slot or the "aria-label" attribute. To migrate, remove any usage of "ion-label" and pass the label text to either the component or the "aria-label" attribute.\n\nExample: <ion-radio>Option Label</ion-radio>\nExample with aria-label: <ion-radio aria-label="Option Label"></ion-radio>\n\nDevelopers can use the "legacy" property to continue using the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.',this.el);if(this.legacy){printIonWarning('ion-radio is being used with the "legacy" property enabled which will forcibly enable the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.\n\nDevelopers can dismiss this warning by removing their usage of the "legacy" property and using the new radio syntax.',this.el)}this.hasLoggedDeprecationWarning=true}var i=this,r=i.inputId,o=i.disabled,a=i.checked,n=i.color,s=i.el,l=i.buttonTabindex;var d=getIonMode(this);var c=getAriaLabel(s,r),p=c.label,u=c.labelId,b=c.labelText;return h(Host,{"aria-checked":"".concat(a),"aria-hidden":o?"true":null,"aria-labelledby":p?u:null,role:"radio",tabindex:l,onFocus:this.onFocus,onBlur:this.onBlur,onClick:this.onClick,class:createColorClasses(n,(e={},e[d]=true,e["in-item"]=hostContext("ion-item",s),e.interactive=true,e["radio-checked"]=a,e["radio-disabled"]=o,e["legacy-radio"]=true,e))},this.renderRadioControl(),h("label",{htmlFor:r},b),h("input",{type:"radio",checked:a,disabled:o,tabindex:"-1",id:r,ref:function(e){return t.nativeInput=e}}))};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{value:["valueChanged"],checked:["styleChanged"],color:["styleChanged"],disabled:["styleChanged"]}},enumerable:false,configurable:true});return e}();var radioButtonIds=0;Radio.style={ios:radioIosCss,md:radioMdCss};var RadioGroup=function(){function e(e){var t=this;registerInstance(this,e);this.ionChange=createEvent(this,"ionChange",7);this.ionValueChange=createEvent(this,"ionValueChange",7);this.inputId="ion-rg-".concat(radioGroupIds++);this.labelId="".concat(this.inputId,"-lbl");this.setRadioTabindex=function(e){var i=t.getRadios();var r=i.find((function(e){return!e.disabled}));var o=i.find((function(t){return t.value===e&&!t.disabled}));if(!r&&!o){return}var a=o||r;for(var n=0,s=i;n<s.length;n++){var l=s[n];var d=l===a?0:-1;l.setButtonTabindex(d)}};this.onClick=function(e){e.preventDefault();var i=e.target&&e.target.closest("ion-radio");if(i){var r=t.value;var o=i.value;if(o!==r){t.value=o;t.emitValueChange(e)}else if(t.allowEmptySelection){t.value=undefined;t.emitValueChange(e)}}};this.allowEmptySelection=false;this.name=this.inputId;this.value=undefined}e.prototype.valueChanged=function(e){this.setRadioTabindex(e);this.ionValueChange.emit({value:e})};e.prototype.componentDidLoad=function(){this.setRadioTabindex(this.value)};e.prototype.connectedCallback=function(){return __awaiter(this,void 0,void 0,(function(){var e,t;return __generator(this,(function(i){e=this.el.querySelector("ion-list-header")||this.el.querySelector("ion-item-divider");if(e){t=this.label=e.querySelector("ion-label");if(t){this.labelId=t.id=this.name+"-lbl"}}return[2]}))}))};e.prototype.getRadios=function(){return Array.from(this.el.querySelectorAll("ion-radio"))};e.prototype.emitValueChange=function(e){var t=this.value;this.ionChange.emit({value:t,event:e})};e.prototype.onKeydown=function(e){var t=!!this.el.closest("ion-select-popover");if(e.target&&!this.el.contains(e.target)){return}var i=this.getRadios().filter((function(e){return!e.disabled}));if(e.target&&i.includes(e.target)){var r=i.findIndex((function(t){return t===e.target}));var o=i[r];var a=void 0;if(["ArrowDown","ArrowRight"].includes(e.key)){a=r===i.length-1?i[0]:i[r+1]}if(["ArrowUp","ArrowLeft"].includes(e.key)){a=r===0?i[i.length-1]:i[r-1]}if(a&&i.includes(a)){a.setFocus(e);if(!t){this.value=a.value;this.emitValueChange(e)}}if([" "].includes(e.key)){var n=this.value;this.value=this.allowEmptySelection&&this.value!==undefined?undefined:o.value;if(n!==this.value||this.allowEmptySelection){this.emitValueChange(e)}e.preventDefault()}}};e.prototype.render=function(){var e=this,t=e.label,i=e.labelId,r=e.el,o=e.name,a=e.value;var n=getIonMode(this);renderHiddenInput(true,r,o,a,false);return h(Host,{role:"radiogroup","aria-labelledby":t?i:null,onClick:this.onClick,class:n})};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(e,"watchers",{get:function(){return{value:["valueChanged"]}},enumerable:false,configurable:true});return e}();var radioGroupIds=0;export{Radio as ion_radio,RadioGroup as ion_radio_group};