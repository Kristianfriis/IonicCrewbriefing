import{__awaiter,__generator}from"tslib";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */import{r as registerInstance,d as createEvent,h,H as Host,f as getElement}from"./index-847f2fde.js";import{g as getElementRoot}from"./helpers-3379ba19.js";var pickerInternalIosCss=":host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:1;pointer-events:none}:host .picker-before{top:0;height:83px}@supports (inset-inline-start: 0){:host .picker-before{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host .picker-before{left:0}:host-context([dir=rtl]) .picker-before{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host .picker-before:dir(rtl){left:unset;right:unset;right:0}}}:host .picker-after{top:116px;height:84px}@supports (inset-inline-start: 0){:host .picker-after{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host .picker-after{left:0}:host-context([dir=rtl]) .picker-after{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host .picker-after:dir(rtl){left:unset;right:unset;right:0}}}:host .picker-highlight{border-radius:8px;left:0;right:0;top:50%;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;-webkit-transform:translateY(-50%);transform:translateY(-50%);background:var(--wheel-highlight-background);z-index:-1}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column-internal:first-of-type){text-align:start}:host ::slotted(ion-picker-column-internal:last-of-type){text-align:end}:host ::slotted(ion-picker-column-internal:only-child){text-align:center}:host .picker-before{background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1)), to(rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8)));background:linear-gradient(to bottom, rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 20%, rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8) 100%)}:host .picker-after{background:-webkit-gradient(linear, left bottom, left top, color-stop(20%, rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1)), to(rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8)));background:linear-gradient(to top, rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 20%, rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0.8) 100%)}:host .picker-highlight{background:var(--wheel-highlight-background, var(--ion-color-step-150, #eeeeef))}";var pickerInternalMdCss=":host{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:200px;direction:ltr;z-index:0}:host .picker-before,:host .picker-after{position:absolute;width:100%;-webkit-transform:translateZ(0);transform:translateZ(0);z-index:1;pointer-events:none}:host .picker-before{top:0;height:83px}@supports (inset-inline-start: 0){:host .picker-before{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host .picker-before{left:0}:host-context([dir=rtl]) .picker-before{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host .picker-before:dir(rtl){left:unset;right:unset;right:0}}}:host .picker-after{top:116px;height:84px}@supports (inset-inline-start: 0){:host .picker-after{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host .picker-after{left:0}:host-context([dir=rtl]) .picker-after{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host .picker-after:dir(rtl){left:unset;right:unset;right:0}}}:host .picker-highlight{border-radius:8px;left:0;right:0;top:50%;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:0;margin-bottom:0;position:absolute;width:calc(100% - 16px);height:34px;-webkit-transform:translateY(-50%);transform:translateY(-50%);background:var(--wheel-highlight-background);z-index:-1}:host input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host ::slotted(ion-picker-column-internal:first-of-type){text-align:start}:host ::slotted(ion-picker-column-internal:last-of-type){text-align:end}:host ::slotted(ion-picker-column-internal:only-child){text-align:center}:host .picker-before{background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1)), color-stop(90%, rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0)));background:linear-gradient(to bottom, rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 20%, rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0) 90%)}:host .picker-after{background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1)), color-stop(90%, rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0)));background:linear-gradient(to top, rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 1) 30%, rgba(var(--wheel-fade-background-rgb, var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255))), 0) 90%)}";var PickerInternal=function(){function e(e){var t=this;registerInstance(this,e);this.ionInputModeChange=createEvent(this,"ionInputModeChange",7);this.useInputMode=false;this.isInHighlightBounds=function(e){var r=t.highlightEl;if(!r){return false}var n=r.getBoundingClientRect();var i=e.clientX<n.left||e.clientX>n.right;var o=e.clientY<n.top||e.clientY>n.bottom;if(i||o){return false}return true};this.onFocusOut=function(e){var r=e.relatedTarget;if(!r||r.tagName!=="ION-PICKER-COLUMN-INTERNAL"&&r!==t.inputEl){t.exitInputMode()}};this.onFocusIn=function(e){var r=e.target;if(r.tagName!=="ION-PICKER-COLUMN-INTERNAL"){return}if(!t.actionOnClick){var n=r;var i=n.numericInput;if(i){t.enterInputMode(n,false)}else{t.exitInputMode()}}};this.onClick=function(){var e=t.actionOnClick;if(e){e();t.actionOnClick=undefined}};this.onPointerDown=function(e){var r=t,n=r.useInputMode,i=r.inputModeColumn,o=r.el;if(t.isInHighlightBounds(e)){if(n){if(e.target.tagName==="ION-PICKER-COLUMN-INTERNAL"){if(i&&i===e.target){t.actionOnClick=function(){t.enterInputMode()}}else{t.actionOnClick=function(){t.enterInputMode(e.target)}}}else{t.actionOnClick=function(){t.exitInputMode()}}}else{var a=o.querySelectorAll("ion-picker-column-internal.picker-column-numeric-input");var s=a.length===1?e.target:undefined;t.actionOnClick=function(){t.enterInputMode(s)}}return}t.actionOnClick=function(){t.exitInputMode()}};this.enterInputMode=function(e,r){if(r===void 0){r=true}var n=t,i=n.inputEl,o=n.el;if(!i){return}var a=o.querySelector("ion-picker-column-internal.picker-column-numeric-input");if(!a){return}t.useInputMode=true;t.inputModeColumn=e;if(r){if(t.destroyKeypressListener){t.destroyKeypressListener();t.destroyKeypressListener=undefined}i.focus()}else{o.addEventListener("keypress",t.onKeyPress);t.destroyKeypressListener=function(){o.removeEventListener("keypress",t.onKeyPress)}}t.emitInputModeChange()};this.onKeyPress=function(e){var r=t.inputEl;if(!r){return}var n=parseInt(e.key,10);if(!Number.isNaN(n)){r.value+=e.key;t.onInputChange()}};this.selectSingleColumn=function(){var e=t,r=e.inputEl,n=e.inputModeColumn,i=e.singleColumnSearchTimeout;if(!r||!n){return}var o=n.items.filter((function(e){return e.disabled!==true}));if(i){clearTimeout(i)}t.singleColumnSearchTimeout=setTimeout((function(){r.value="";t.singleColumnSearchTimeout=undefined}),1e3);if(r.value.length>=3){var a=r.value.length-2;var s=r.value.substring(a);r.value=s;t.selectSingleColumn();return}var l=o.find((function(e){var t=e.text;var n=t.replace(/^0+(?=[1-9])|0+(?=0$)/,"");return n===r.value}));if(l){n.setValue(l.value);return}if(r.value.length===2){var u=r.value.substring(r.value.length-1);r.value=u;t.selectSingleColumn()}};this.searchColumn=function(e,t,r){if(r===void 0){r="start"}var n=r==="start"?/^0+/:/0$/;var i=e.items.find((function(e){var r=e.text,i=e.disabled;return i!==true&&r.replace(n,"")===t}));if(i){e.setValue(i.value)}};this.selectMultiColumn=function(){var e=t,r=e.inputEl,n=e.el;if(!r){return}var i=Array.from(n.querySelectorAll("ion-picker-column-internal")).filter((function(e){return e.numericInput}));var o=i[0];var a=i[1];var s=r.value;var l;switch(s.length){case 1:t.searchColumn(o,s);break;case 2:var u=r.value.substring(0,1);s=u==="0"||u==="1"?r.value:u;t.searchColumn(o,s);if(s.length===1){l=r.value.substring(r.value.length-1);t.searchColumn(a,l,"end")}break;case 3:var c=r.value.substring(0,1);s=c==="0"||c==="1"?r.value.substring(0,2):c;t.searchColumn(o,s);l=s.length===1?r.value.substring(1):r.value.substring(2);t.searchColumn(a,l,"end");break;case 4:var g=r.value.substring(0,1);s=g==="0"||g==="1"?r.value.substring(0,2):g;t.searchColumn(o,s);var d=s.length===1?r.value.substring(1,r.value.length):r.value.substring(2,r.value.length);t.searchColumn(a,d,"end");break;default:var p=r.value.length-4;var h=r.value.substring(p);r.value=h;t.selectMultiColumn();break}};this.onInputChange=function(){var e=t,r=e.useInputMode,n=e.inputEl,i=e.inputModeColumn;if(!r||!n){return}if(i){t.selectSingleColumn()}else{t.selectMultiColumn()}};this.emitInputModeChange=function(){var e=t,r=e.useInputMode,n=e.inputModeColumn;t.ionInputModeChange.emit({useInputMode:r,inputModeColumn:n})}}e.prototype.preventTouchStartPropagation=function(e){e.stopPropagation()};e.prototype.componentWillLoad=function(){getElementRoot(this.el).addEventListener("focusin",this.onFocusIn);getElementRoot(this.el).addEventListener("focusout",this.onFocusOut)};e.prototype.exitInputMode=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,r;return __generator(this,(function(n){e=this,t=e.inputEl,r=e.useInputMode;if(!r||!t){return[2]}this.useInputMode=false;this.inputModeColumn=undefined;t.blur();t.value="";if(this.destroyKeypressListener){this.destroyKeypressListener();this.destroyKeypressListener=undefined}this.emitInputModeChange();return[2]}))}))};e.prototype.render=function(){var e=this;return h(Host,{onPointerDown:function(t){return e.onPointerDown(t)},onClick:function(){return e.onClick()}},h("input",{"aria-hidden":"true",tabindex:-1,inputmode:"numeric",type:"number",ref:function(t){return e.inputEl=t},onInput:function(){return e.onInputChange()},onBlur:function(){return e.exitInputMode()}}),h("div",{class:"picker-before"}),h("div",{class:"picker-after"}),h("div",{class:"picker-highlight",ref:function(t){return e.highlightEl=t}}),h("slot",null))};Object.defineProperty(e.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return e}();PickerInternal.style={ios:pickerInternalIosCss,md:pickerInternalMdCss};export{PickerInternal as ion_picker_internal};