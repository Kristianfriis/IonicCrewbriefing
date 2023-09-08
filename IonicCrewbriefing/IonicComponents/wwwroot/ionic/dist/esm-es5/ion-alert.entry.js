import{__awaiter,__generator}from"tslib";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */import{r as registerInstance,d as createEvent,i as forceUpdate,h,H as Host,f as getElement}from"./index-847f2fde.js";import{E as ENABLE_HTML_CONTENT_DEFAULT,a as sanitizeDOMString}from"./config-96c9ace3.js";import{c as createButtonActiveGesture}from"./button-active-2da0f611.js";import{r as raf}from"./helpers-3379ba19.js";import{d as createDelegateController,e as createTriggerController,B as BACKDROP,i as isCancel,j as prepareOverlay,k as setOverlayId,f as present,g as dismiss,h as eventMethod,s as safeCall}from"./overlays-c3387ec0.js";import{g as getClassMap}from"./theme-17531cdf.js";import{c as config,b as getIonMode}from"./ionic-global-1ef19007.js";import{c as createAnimation}from"./animation-a1d9e088.js";import"./haptic-6447af60.js";import"./capacitor-b4979570.js";import"./index-7a14ecec.js";import"./index-ff313b19.js";import"./gesture-controller-0fa396c4.js";import"./framework-delegate-2b76c681.js";import"./hardware-back-button-39299f84.js";import"./index-595d62c9.js";var iosEnterAnimation=function(t){var e=createAnimation();var r=createAnimation();var i=createAnimation();r.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);i.addElement(t.querySelector(".alert-wrapper")).keyframes([{offset:0,opacity:"0.01",transform:"scale(1.1)"},{offset:1,opacity:"1",transform:"scale(1)"}]);return e.addElement(t).easing("ease-in-out").duration(200).addAnimation([r,i])};var iosLeaveAnimation=function(t){var e=createAnimation();var r=createAnimation();var i=createAnimation();r.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);i.addElement(t.querySelector(".alert-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]);return e.addElement(t).easing("ease-in-out").duration(200).addAnimation([r,i])};var mdEnterAnimation=function(t){var e=createAnimation();var r=createAnimation();var i=createAnimation();r.addElement(t.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]);i.addElement(t.querySelector(".alert-wrapper")).keyframes([{offset:0,opacity:"0.01",transform:"scale(0.9)"},{offset:1,opacity:"1",transform:"scale(1)"}]);return e.addElement(t).easing("ease-in-out").duration(150).addAnimation([r,i])};var mdLeaveAnimation=function(t){var e=createAnimation();var r=createAnimation();var i=createAnimation();r.addElement(t.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0);i.addElement(t.querySelector(".alert-wrapper")).fromTo("opacity",.99,0);return e.addElement(t).easing("ease-in-out").duration(150).addAnimation([r,i])};var alertIosCss=".sc-ion-alert-ios-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-alert-ios-h{display:none}.alert-top.sc-ion-alert-ios-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-weight:normal}.alert-message.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:auto;overscroll-behavior-y:contain}.alert-checkbox-group.sc-ion-alert-ios::-webkit-scrollbar,.alert-radio-group.sc-ion-alert-ios::-webkit-scrollbar,.alert-message.sc-ion-alert-ios::-webkit-scrollbar{display:none}.alert-input.sc-ion-alert-ios{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-ios{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;border:0;font-size:14px;line-height:20px;z-index:0}.alert-button.ion-focused.sc-ion-alert-ios,.alert-tappable.ion-focused.sc-ion-alert-ios{background:var(--ion-color-step-100, #e6e6e6)}.alert-button-inner.sc-ion-alert-ios{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit}.alert-input-disabled.sc-ion-alert-ios,.alert-checkbox-button-disabled.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios,.alert-radio-button-disabled.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios{cursor:default;opacity:0.5;pointer-events:none}.alert-tappable.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;width:100%;border:0;background:transparent;font-size:inherit;line-height:initial;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;contain:content}.alert-button.sc-ion-alert-ios,.alert-checkbox.sc-ion-alert-ios,.alert-input.sc-ion-alert-ios,.alert-radio.sc-ion-alert-ios{outline:none}.alert-radio-icon.sc-ion-alert-ios,.alert-checkbox-icon.sc-ion-alert-ios,.alert-checkbox-inner.sc-ion-alert-ios{-webkit-box-sizing:border-box;box-sizing:border-box}textarea.alert-input.sc-ion-alert-ios{min-height:37px;resize:none}.sc-ion-alert-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);font-size:14px}.alert-wrapper.sc-ion-alert-ios{border-radius:13px;-webkit-box-shadow:none;box-shadow:none;overflow:hidden}.alert-button.sc-ion-alert-ios .alert-button-inner.sc-ion-alert-ios{pointer-events:none}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.alert-translucent.sc-ion-alert-ios-h .alert-wrapper.sc-ion-alert-ios{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.9);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.alert-head.sc-ion-alert-ios{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:12px;padding-bottom:7px;text-align:center}.alert-title.sc-ion-alert-ios{margin-top:8px;color:var(--ion-text-color, #000);font-size:17px;font-weight:600}.alert-sub-title.sc-ion-alert-ios{color:var(--ion-color-step-600, #666666);font-size:14px}.alert-message.sc-ion-alert-ios,.alert-input-group.sc-ion-alert-ios{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:0;padding-bottom:21px;color:var(--ion-text-color, #000);font-size:13px;text-align:center}.alert-message.sc-ion-alert-ios{max-height:240px}.alert-message.sc-ion-alert-ios:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:12px}.alert-input.sc-ion-alert-ios{border-radius:4px;margin-top:10px;-webkit-padding-start:6px;padding-inline-start:6px;-webkit-padding-end:6px;padding-inline-end:6px;padding-top:6px;padding-bottom:6px;border:0.55px solid var(--ion-color-step-250, #bfbfbf);background-color:var(--ion-background-color, #fff);-webkit-appearance:none;-moz-appearance:none;appearance:none}.alert-input.sc-ion-alert-ios::-webkit-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-moz-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios:-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-ios::-ms-clear{display:none}.alert-radio-group.sc-ion-alert-ios,.alert-checkbox-group.sc-ion-alert-ios{-ms-scroll-chaining:none;overscroll-behavior:contain;max-height:240px;border-top:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);overflow-y:auto;-webkit-overflow-scrolling:touch}.alert-tappable.sc-ion-alert-ios{min-height:44px}.alert-radio-label.sc-ion-alert-ios{-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;-ms-flex-order:0;order:0;color:var(--ion-text-color, #000)}[aria-checked=true].sc-ion-alert-ios .alert-radio-label.sc-ion-alert-ios{color:var(--ion-color-primary, #3880ff)}.alert-radio-icon.sc-ion-alert-ios{position:relative;-ms-flex-order:1;order:1;min-width:30px}[aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{top:-7px;position:absolute;width:6px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary, #3880ff)}@supports (inset-inline-start: 0){[aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{inset-inline-start:7px}}@supports not (inset-inline-start: 0){[aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{left:7px}[dir=rtl].sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios,[dir=rtl] .sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{left:unset;right:unset;right:7px}[dir=rtl].sc-ion-alert-ios [aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios{left:unset;right:unset;right:7px}@supports selector(:dir(rtl)){[aria-checked=true].sc-ion-alert-ios .alert-radio-inner.sc-ion-alert-ios:dir(rtl){left:unset;right:unset;right:7px}}}.alert-checkbox-label.sc-ion-alert-ios{-webkit-padding-start:13px;padding-inline-start:13px;-webkit-padding-end:13px;padding-inline-end:13px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-text-color, #000)}.alert-checkbox-icon.sc-ion-alert-ios{border-radius:50%;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:6px;margin-inline-end:6px;margin-top:10px;margin-bottom:10px;position:relative;width:24px;height:24px;border-width:1px;border-style:solid;border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));background-color:var(--ion-item-background, var(--ion-background-color, #fff));contain:strict}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-icon.sc-ion-alert-ios{border-color:var(--ion-color-primary, #3880ff);background-color:var(--ion-color-primary, #3880ff)}[aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{top:4px;position:absolute;width:5px;height:12px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:1px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-background-color, #fff)}@supports (inset-inline-start: 0){[aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{inset-inline-start:9px}}@supports not (inset-inline-start: 0){[aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{left:9px}[dir=rtl].sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios,[dir=rtl] .sc-ion-alert-ios-h [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{left:unset;right:unset;right:9px}[dir=rtl].sc-ion-alert-ios [aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios{left:unset;right:unset;right:9px}@supports selector(:dir(rtl)){[aria-checked=true].sc-ion-alert-ios .alert-checkbox-inner.sc-ion-alert-ios:dir(rtl){left:unset;right:unset;right:9px}}}.alert-button-group.sc-ion-alert-ios{-webkit-margin-end:-0.55px;margin-inline-end:-0.55px;-ms-flex-wrap:wrap;flex-wrap:wrap}.alert-button.sc-ion-alert-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:0;-ms-flex:1 1 auto;flex:1 1 auto;min-width:50%;height:44px;border-top:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2);background-color:transparent;color:var(--ion-color-primary, #3880ff);font-size:17px;overflow:hidden}[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child,[dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:first-child{border-right:0}[dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:first-child{border-right:0}@supports selector(:dir(rtl)){.alert-button.sc-ion-alert-ios:first-child:dir(rtl){border-right:0}}.alert-button.sc-ion-alert-ios:last-child{border-right:0;font-weight:bold}[dir=rtl].sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child,[dir=rtl] .sc-ion-alert-ios-h .alert-button.sc-ion-alert-ios:last-child{border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}[dir=rtl].sc-ion-alert-ios .alert-button.sc-ion-alert-ios:last-child{border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}@supports selector(:dir(rtl)){.alert-button.sc-ion-alert-ios:last-child:dir(rtl){border-right:0.55px solid rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.2)}}.alert-button.ion-activated.sc-ion-alert-ios{background-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.1)}.alert-button-role-destructive.sc-ion-alert-ios,.alert-button-role-destructive.ion-activated.sc-ion-alert-ios,.alert-button-role-destructive.ion-focused.sc-ion-alert-ios{color:var(--ion-color-danger, #eb445a)}";var alertMdCss=".sc-ion-alert-md-h{--min-width:250px;--width:auto;--min-height:auto;--height:auto;--max-height:90%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-alert-md-h{display:none}.alert-top.sc-ion-alert-md-h{padding-top:50px;-ms-flex-align:start;align-items:flex-start}.alert-wrapper.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:content;opacity:0;z-index:10}.alert-title.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-sub-title.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;font-weight:normal}.alert-message.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-overflow-scrolling:touch;overflow-y:auto;overscroll-behavior-y:contain}.alert-checkbox-group.sc-ion-alert-md::-webkit-scrollbar,.alert-radio-group.sc-ion-alert-md::-webkit-scrollbar,.alert-message.sc-ion-alert-md::-webkit-scrollbar{display:none}.alert-input.sc-ion-alert-md{padding-left:0;padding-right:0;padding-top:10px;padding-bottom:10px;width:100%;border:0;background:inherit;font:inherit;-webkit-box-sizing:border-box;box-sizing:border-box}.alert-button-group.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;width:100%}.alert-button-group-vertical.sc-ion-alert-md{-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.alert-button.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:block;border:0;font-size:14px;line-height:20px;z-index:0}.alert-button.ion-focused.sc-ion-alert-md,.alert-tappable.ion-focused.sc-ion-alert-md{background:var(--ion-color-step-100, #e6e6e6)}.alert-button-inner.sc-ion-alert-md{display:-ms-flexbox;display:flex;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;min-height:inherit}.alert-input-disabled.sc-ion-alert-md,.alert-checkbox-button-disabled.sc-ion-alert-md .alert-button-inner.sc-ion-alert-md,.alert-radio-button-disabled.sc-ion-alert-md .alert-button-inner.sc-ion-alert-md{cursor:default;opacity:0.5;pointer-events:none}.alert-tappable.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:-ms-flexbox;display:flex;width:100%;border:0;background:transparent;font-size:inherit;line-height:initial;text-align:start;-webkit-appearance:none;-moz-appearance:none;appearance:none;contain:content}.alert-button.sc-ion-alert-md,.alert-checkbox.sc-ion-alert-md,.alert-input.sc-ion-alert-md,.alert-radio.sc-ion-alert-md{outline:none}.alert-radio-icon.sc-ion-alert-md,.alert-checkbox-icon.sc-ion-alert-md,.alert-checkbox-inner.sc-ion-alert-md{-webkit-box-sizing:border-box;box-sizing:border-box}textarea.alert-input.sc-ion-alert-md{min-height:37px;resize:none}.sc-ion-alert-md-h{--background:var(--ion-overlay-background-color, var(--ion-background-color, #fff));--max-width:280px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);font-size:14px}.alert-wrapper.sc-ion-alert-md{border-radius:4px;-webkit-box-shadow:0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12);box-shadow:0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12)}.alert-head.sc-ion-alert-md{-webkit-padding-start:23px;padding-inline-start:23px;-webkit-padding-end:23px;padding-inline-end:23px;padding-top:20px;padding-bottom:15px;text-align:start}.alert-title.sc-ion-alert-md{color:var(--ion-text-color, #000);font-size:20px;font-weight:500}.alert-sub-title.sc-ion-alert-md{color:var(--ion-text-color, #000);font-size:16px}.alert-message.sc-ion-alert-md,.alert-input-group.sc-ion-alert-md{-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px;padding-top:20px;padding-bottom:20px;color:var(--ion-color-step-550, #737373)}.alert-message.sc-ion-alert-md{max-height:266px;font-size:16px}.alert-message.sc-ion-alert-md:empty{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}.alert-head.sc-ion-alert-md+.alert-message.sc-ion-alert-md{padding-top:0}.alert-input.sc-ion-alert-md{margin-left:0;margin-right:0;margin-top:5px;margin-bottom:5px;border-bottom:1px solid var(--ion-color-step-150, #d9d9d9);color:var(--ion-text-color, #000)}.alert-input.sc-ion-alert-md::-webkit-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-moz-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md:-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-ms-input-placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::placeholder{color:var(--ion-placeholder-color, var(--ion-color-step-400, #999999));font-family:inherit;font-weight:inherit}.alert-input.sc-ion-alert-md::-ms-clear{display:none}.alert-input.sc-ion-alert-md:focus{margin-bottom:4px;border-bottom:2px solid var(--ion-color-primary, #3880ff)}.alert-radio-group.sc-ion-alert-md,.alert-checkbox-group.sc-ion-alert-md{position:relative;max-height:266px;border-top:1px solid var(--ion-color-step-150, #d9d9d9);border-bottom:1px solid var(--ion-color-step-150, #d9d9d9);overflow:auto}.alert-tappable.sc-ion-alert-md{position:relative;min-height:48px}.alert-radio-label.sc-ion-alert-md{-webkit-padding-start:52px;padding-inline-start:52px;-webkit-padding-end:26px;padding-inline-end:26px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-color-step-850, #262626);font-size:16px}.alert-radio-icon.sc-ion-alert-md{top:0;border-radius:50%;display:block;position:relative;width:20px;height:20px;border-width:2px;border-style:solid;border-color:var(--ion-color-step-550, #737373)}@supports (inset-inline-start: 0){.alert-radio-icon.sc-ion-alert-md{inset-inline-start:26px}}@supports not (inset-inline-start: 0){.alert-radio-icon.sc-ion-alert-md{left:26px}[dir=rtl].sc-ion-alert-md-h .alert-radio-icon.sc-ion-alert-md,[dir=rtl] .sc-ion-alert-md-h .alert-radio-icon.sc-ion-alert-md{left:unset;right:unset;right:26px}[dir=rtl].sc-ion-alert-md .alert-radio-icon.sc-ion-alert-md{left:unset;right:unset;right:26px}@supports selector(:dir(rtl)){.alert-radio-icon.sc-ion-alert-md:dir(rtl){left:unset;right:unset;right:26px}}}.alert-radio-inner.sc-ion-alert-md{top:3px;border-radius:50%;position:absolute;width:10px;height:10px;-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background-color:var(--ion-color-primary, #3880ff)}@supports (inset-inline-start: 0){.alert-radio-inner.sc-ion-alert-md{inset-inline-start:3px}}@supports not (inset-inline-start: 0){.alert-radio-inner.sc-ion-alert-md{left:3px}[dir=rtl].sc-ion-alert-md-h .alert-radio-inner.sc-ion-alert-md,[dir=rtl] .sc-ion-alert-md-h .alert-radio-inner.sc-ion-alert-md{left:unset;right:unset;right:3px}[dir=rtl].sc-ion-alert-md .alert-radio-inner.sc-ion-alert-md{left:unset;right:unset;right:3px}@supports selector(:dir(rtl)){.alert-radio-inner.sc-ion-alert-md:dir(rtl){left:unset;right:unset;right:3px}}}[aria-checked=true].sc-ion-alert-md .alert-radio-label.sc-ion-alert-md{color:var(--ion-color-step-850, #262626)}[aria-checked=true].sc-ion-alert-md .alert-radio-icon.sc-ion-alert-md{border-color:var(--ion-color-primary, #3880ff)}[aria-checked=true].sc-ion-alert-md .alert-radio-inner.sc-ion-alert-md{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}.alert-checkbox-label.sc-ion-alert-md{-webkit-padding-start:53px;padding-inline-start:53px;-webkit-padding-end:26px;padding-inline-end:26px;padding-top:13px;padding-bottom:13px;-ms-flex:1;flex:1;color:var(--ion-color-step-850, #262626);font-size:16px}.alert-checkbox-icon.sc-ion-alert-md{top:0;border-radius:2px;position:relative;width:16px;height:16px;border-width:2px;border-style:solid;border-color:var(--ion-color-step-550, #737373);contain:strict}@supports (inset-inline-start: 0){.alert-checkbox-icon.sc-ion-alert-md{inset-inline-start:26px}}@supports not (inset-inline-start: 0){.alert-checkbox-icon.sc-ion-alert-md{left:26px}[dir=rtl].sc-ion-alert-md-h .alert-checkbox-icon.sc-ion-alert-md,[dir=rtl] .sc-ion-alert-md-h .alert-checkbox-icon.sc-ion-alert-md{left:unset;right:unset;right:26px}[dir=rtl].sc-ion-alert-md .alert-checkbox-icon.sc-ion-alert-md{left:unset;right:unset;right:26px}@supports selector(:dir(rtl)){.alert-checkbox-icon.sc-ion-alert-md:dir(rtl){left:unset;right:unset;right:26px}}}[aria-checked=true].sc-ion-alert-md .alert-checkbox-icon.sc-ion-alert-md{border-color:var(--ion-color-primary, #3880ff);background-color:var(--ion-color-primary, #3880ff)}[aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{top:0;position:absolute;width:6px;height:10px;-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--ion-color-primary-contrast, #fff)}@supports (inset-inline-start: 0){[aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{inset-inline-start:3px}}@supports not (inset-inline-start: 0){[aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{left:3px}[dir=rtl].sc-ion-alert-md-h [aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md,[dir=rtl] .sc-ion-alert-md-h [aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{left:unset;right:unset;right:3px}[dir=rtl].sc-ion-alert-md [aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md{left:unset;right:unset;right:3px}@supports selector(:dir(rtl)){[aria-checked=true].sc-ion-alert-md .alert-checkbox-inner.sc-ion-alert-md:dir(rtl){left:unset;right:unset;right:3px}}}.alert-button-group.sc-ion-alert-md{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;-webkit-box-sizing:border-box;box-sizing:border-box;-ms-flex-wrap:wrap-reverse;flex-wrap:wrap-reverse;-ms-flex-pack:end;justify-content:flex-end}.alert-button.sc-ion-alert-md{border-radius:2px;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px;margin-top:0;margin-bottom:0;-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;color:var(--ion-color-primary, #3880ff);font-weight:500;text-align:end;text-transform:uppercase;overflow:hidden}.alert-button-inner.sc-ion-alert-md{-ms-flex-pack:end;justify-content:flex-end}";var Alert=function(){function t(t){var e=this;registerInstance(this,t);this.didPresent=createEvent(this,"ionAlertDidPresent",7);this.willPresent=createEvent(this,"ionAlertWillPresent",7);this.willDismiss=createEvent(this,"ionAlertWillDismiss",7);this.didDismiss=createEvent(this,"ionAlertDidDismiss",7);this.didPresentShorthand=createEvent(this,"didPresent",7);this.willPresentShorthand=createEvent(this,"willPresent",7);this.willDismissShorthand=createEvent(this,"willDismiss",7);this.didDismissShorthand=createEvent(this,"didDismiss",7);this.delegateController=createDelegateController(this);this.triggerController=createTriggerController();this.customHTMLEnabled=config.get("innerHTMLTemplatesEnabled",ENABLE_HTML_CONTENT_DEFAULT);this.processedInputs=[];this.processedButtons=[];this.presented=false;this.onBackdropTap=function(){e.dismiss(undefined,BACKDROP)};this.dispatchCancelHandler=function(t){var r=t.detail.role;if(isCancel(r)){var i=e.processedButtons.find((function(t){return t.role==="cancel"}));e.callButtonHandler(i)}};this.overlayIndex=undefined;this.delegate=undefined;this.hasController=false;this.keyboardClose=true;this.enterAnimation=undefined;this.leaveAnimation=undefined;this.cssClass=undefined;this.header=undefined;this.subHeader=undefined;this.message=undefined;this.buttons=[];this.inputs=[];this.backdropDismiss=true;this.translucent=false;this.animated=true;this.htmlAttributes=undefined;this.isOpen=false;this.trigger=undefined}t.prototype.onIsOpenChange=function(t,e){if(t===true&&e===false){this.present()}else if(t===false&&e===true){this.dismiss()}};t.prototype.triggerChanged=function(){var t=this,e=t.trigger,r=t.el,i=t.triggerController;if(e){i.addClickListener(r,e)}};t.prototype.onKeydown=function(t){var e=new Set(this.processedInputs.map((function(t){return t.type})));if(!e.has("radio")||t.target&&!this.el.contains(t.target)||t.target.classList.contains("alert-button")){return}var r=this.el.querySelectorAll(".alert-radio");var i=Array.from(r).filter((function(t){return!t.disabled}));var o=i.findIndex((function(e){return e.id===t.target.id}));var n;if(["ArrowDown","ArrowRight"].includes(t.key)){n=o===i.length-1?i[0]:i[o+1]}if(["ArrowUp","ArrowLeft"].includes(t.key)){n=o===0?i[i.length-1]:i[o-1]}if(n&&i.includes(n)){var a=this.processedInputs.find((function(t){return t.id===(n===null||n===void 0?void 0:n.id)}));if(a){this.rbClick(a);n.focus()}}};t.prototype.buttonsChanged=function(){var t=this.buttons;this.processedButtons=t.map((function(t){return typeof t==="string"?{text:t,role:t.toLowerCase()==="cancel"?"cancel":undefined}:t}))};t.prototype.inputsChanged=function(){var t=this;var e=this.inputs;var r=e.find((function(t){return!t.disabled}));var i=e.find((function(t){return t.checked&&!t.disabled}));var o=i||r;var n=new Set(e.map((function(t){return t.type})));if(n.has("checkbox")&&n.has("radio")){console.warn("Alert cannot mix input types: ".concat(Array.from(n.values()).join("/"),". Please see alert docs for more info."))}this.inputType=n.values().next().value;this.processedInputs=e.map((function(e,r){var i;return{type:e.type||"text",name:e.name||"".concat(r),placeholder:e.placeholder||"",value:e.value,label:e.label,checked:!!e.checked,disabled:!!e.disabled,id:e.id||"alert-input-".concat(t.overlayIndex,"-").concat(r),handler:e.handler,min:e.min,max:e.max,cssClass:(i=e.cssClass)!==null&&i!==void 0?i:"",attributes:e.attributes||{},tabindex:e.type==="radio"&&e!==o?-1:0}}))};t.prototype.connectedCallback=function(){prepareOverlay(this.el);this.triggerChanged()};t.prototype.componentWillLoad=function(){setOverlayId(this.el);this.inputsChanged();this.buttonsChanged()};t.prototype.disconnectedCallback=function(){this.triggerController.removeClickListener();if(this.gesture){this.gesture.destroy();this.gesture=undefined}};t.prototype.componentDidLoad=function(){var t=this;if(!this.gesture&&getIonMode(this)==="ios"&&this.wrapperEl){this.gesture=createButtonActiveGesture(this.wrapperEl,(function(t){return t.classList.contains("alert-button")}));this.gesture.enable(true)}if(this.isOpen===true){raf((function(){return t.present()}))}};t.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(t){switch(t.label){case 0:if(!(this.currentTransition!==undefined))return[3,2];return[4,this.currentTransition];case 1:t.sent();t.label=2;case 2:return[4,this.delegateController.attachViewToDom()];case 3:t.sent();this.currentTransition=present(this,"alertEnter",iosEnterAnimation,mdEnterAnimation);return[4,this.currentTransition];case 4:t.sent();this.currentTransition=undefined;return[2]}}))}))};t.prototype.dismiss=function(t,e){return __awaiter(this,void 0,void 0,(function(){var r;return __generator(this,(function(i){switch(i.label){case 0:this.currentTransition=dismiss(this,t,e,"alertLeave",iosLeaveAnimation,mdLeaveAnimation);return[4,this.currentTransition];case 1:r=i.sent();if(r){this.delegateController.removeViewFromDom()}return[2,r]}}))}))};t.prototype.onDidDismiss=function(){return eventMethod(this.el,"ionAlertDidDismiss")};t.prototype.onWillDismiss=function(){return eventMethod(this.el,"ionAlertWillDismiss")};t.prototype.rbClick=function(t){for(var e=0,r=this.processedInputs;e<r.length;e++){var i=r[e];i.checked=i===t;i.tabindex=i===t?0:-1}this.activeId=t.id;safeCall(t.handler,t);forceUpdate(this)};t.prototype.cbClick=function(t){t.checked=!t.checked;safeCall(t.handler,t);forceUpdate(this)};t.prototype.buttonClick=function(t){return __awaiter(this,void 0,void 0,(function(){var e,r,i;return __generator(this,(function(o){switch(o.label){case 0:e=t.role;r=this.getValues();if(isCancel(e)){return[2,this.dismiss({values:r},e)]}return[4,this.callButtonHandler(t,r)];case 1:i=o.sent();if(i!==false){return[2,this.dismiss(Object.assign({values:r},i),t.role)]}return[2,false]}}))}))};t.prototype.callButtonHandler=function(t,e){return __awaiter(this,void 0,void 0,(function(){var r;return __generator(this,(function(i){switch(i.label){case 0:if(!(t===null||t===void 0?void 0:t.handler))return[3,2];return[4,safeCall(t.handler,e)];case 1:r=i.sent();if(r===false){return[2,false]}if(typeof r==="object"){return[2,r]}i.label=2;case 2:return[2,{}]}}))}))};t.prototype.getValues=function(){if(this.processedInputs.length===0){return undefined}if(this.inputType==="radio"){var t=this.processedInputs.find((function(t){return!!t.checked}));return t?t.value:undefined}if(this.inputType==="checkbox"){return this.processedInputs.filter((function(t){return t.checked})).map((function(t){return t.value}))}var e={};this.processedInputs.forEach((function(t){e[t.name]=t.value||""}));return e};t.prototype.renderAlertInputs=function(){switch(this.inputType){case"checkbox":return this.renderCheckbox();case"radio":return this.renderRadio();default:return this.renderInput()}};t.prototype.renderCheckbox=function(){var t=this;var e=this.processedInputs;var r=getIonMode(this);if(e.length===0){return null}return h("div",{class:"alert-checkbox-group"},e.map((function(e){return h("button",{type:"button",onClick:function(){return t.cbClick(e)},"aria-checked":"".concat(e.checked),id:e.id,disabled:e.disabled,tabIndex:e.tabindex,role:"checkbox",class:Object.assign(Object.assign({},getClassMap(e.cssClass)),{"alert-tappable":true,"alert-checkbox":true,"alert-checkbox-button":true,"ion-focusable":true,"alert-checkbox-button-disabled":e.disabled||false})},h("div",{class:"alert-button-inner"},h("div",{class:"alert-checkbox-icon"},h("div",{class:"alert-checkbox-inner"})),h("div",{class:"alert-checkbox-label"},e.label)),r==="md"&&h("ion-ripple-effect",null))})))};t.prototype.renderRadio=function(){var t=this;var e=this.processedInputs;if(e.length===0){return null}return h("div",{class:"alert-radio-group",role:"radiogroup","aria-activedescendant":this.activeId},e.map((function(e){return h("button",{type:"button",onClick:function(){return t.rbClick(e)},"aria-checked":"".concat(e.checked),disabled:e.disabled,id:e.id,tabIndex:e.tabindex,class:Object.assign(Object.assign({},getClassMap(e.cssClass)),{"alert-radio-button":true,"alert-tappable":true,"alert-radio":true,"ion-focusable":true,"alert-radio-button-disabled":e.disabled||false}),role:"radio"},h("div",{class:"alert-button-inner"},h("div",{class:"alert-radio-icon"},h("div",{class:"alert-radio-inner"})),h("div",{class:"alert-radio-label"},e.label)))})))};t.prototype.renderInput=function(){var t=this.processedInputs;if(t.length===0){return null}return h("div",{class:"alert-input-group"},t.map((function(t){var e,r,i,o;if(t.type==="textarea"){return h("div",{class:"alert-input-wrapper"},h("textarea",Object.assign({placeholder:t.placeholder,value:t.value,id:t.id,tabIndex:t.tabindex},t.attributes,{disabled:(r=(e=t.attributes)===null||e===void 0?void 0:e.disabled)!==null&&r!==void 0?r:t.disabled,class:inputClass(t),onInput:function(e){var r;t.value=e.target.value;if((r=t.attributes)===null||r===void 0?void 0:r.onInput){t.attributes.onInput(e)}}})))}else{return h("div",{class:"alert-input-wrapper"},h("input",Object.assign({placeholder:t.placeholder,type:t.type,min:t.min,max:t.max,value:t.value,id:t.id,tabIndex:t.tabindex},t.attributes,{disabled:(o=(i=t.attributes)===null||i===void 0?void 0:i.disabled)!==null&&o!==void 0?o:t.disabled,class:inputClass(t),onInput:function(e){var r;t.value=e.target.value;if((r=t.attributes)===null||r===void 0?void 0:r.onInput){t.attributes.onInput(e)}}})))}})))};t.prototype.renderAlertButtons=function(){var t=this;var e=this.processedButtons;var r=getIonMode(this);var i={"alert-button-group":true,"alert-button-group-vertical":e.length>2};return h("div",{class:i},e.map((function(e){return h("button",Object.assign({},e.htmlAttributes,{type:"button",id:e.id,class:buttonClass(e),tabIndex:0,onClick:function(){return t.buttonClick(e)}}),h("span",{class:"alert-button-inner"},e.text),r==="md"&&h("ion-ripple-effect",null))})))};t.prototype.renderAlertMessage=function(t){var e=this,r=e.customHTMLEnabled,i=e.message;if(r){return h("div",{id:t,class:"alert-message",innerHTML:sanitizeDOMString(i)})}return h("div",{id:t,class:"alert-message"},i)};t.prototype.render=function(){var t;var e=this;var r=this,i=r.overlayIndex,o=r.header,n=r.subHeader,a=r.message,s=r.htmlAttributes;var l=getIonMode(this);var d="alert-".concat(i,"-hdr");var c="alert-".concat(i,"-sub-hdr");var p="alert-".concat(i,"-msg");var u=this.inputs.length>0||this.buttons.length>0?"alertdialog":"alert";var b=o?d:n?c:null;return h(Host,Object.assign({role:u,"aria-modal":"true","aria-labelledby":b,"aria-describedby":a!==undefined?p:null,tabindex:"-1"},s,{style:{zIndex:"".concat(2e4+i)},class:Object.assign(Object.assign({},getClassMap(this.cssClass)),(t={},t[l]=true,t["overlay-hidden"]=true,t["alert-translucent"]=this.translucent,t)),onIonAlertWillDismiss:this.dispatchCancelHandler,onIonBackdropTap:this.onBackdropTap}),h("ion-backdrop",{tappable:this.backdropDismiss}),h("div",{tabindex:"0"}),h("div",{class:"alert-wrapper ion-overlay-wrapper",ref:function(t){return e.wrapperEl=t}},h("div",{class:"alert-head"},o&&h("h2",{id:d,class:"alert-title"},o),n&&h("h2",{id:c,class:"alert-sub-title"},n)),this.renderAlertMessage(p),this.renderAlertInputs(),this.renderAlertButtons()),h("div",{tabindex:"0"}))};Object.defineProperty(t.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(t,"watchers",{get:function(){return{isOpen:["onIsOpenChange"],trigger:["triggerChanged"],buttons:["buttonsChanged"],inputs:["inputsChanged"]}},enumerable:false,configurable:true});return t}();var inputClass=function(t){var e,r,i;return Object.assign(Object.assign({"alert-input":true,"alert-input-disabled":((r=(e=t.attributes)===null||e===void 0?void 0:e.disabled)!==null&&r!==void 0?r:t.disabled)||false},getClassMap(t.cssClass)),getClassMap(t.attributes?(i=t.attributes.class)===null||i===void 0?void 0:i.toString():""))};var buttonClass=function(t){var e;return Object.assign((e={"alert-button":true,"ion-focusable":true,"ion-activatable":true},e["alert-button-role-".concat(t.role)]=t.role!==undefined,e),getClassMap(t.cssClass))};Alert.style={ios:alertIosCss,md:alertMdCss};export{Alert as ion_alert};