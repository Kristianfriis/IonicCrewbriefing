import{__awaiter,__generator}from"tslib";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */import{r as registerInstance,d as createEvent,i as forceUpdate,h,H as Host,f as getElement}from"./index-847f2fde.js";import{j as debounceEvent,r as raf}from"./helpers-3379ba19.js";import{i as isRTL}from"./dir-912e3e13.js";import{c as createColorClasses}from"./theme-17531cdf.js";import{a as arrowBackSharp,b as closeCircle,d as closeSharp,s as searchOutline,e as searchSharp}from"./index-ecfc2c9f.js";import{c as config,b as getIonMode}from"./ionic-global-1ef19007.js";var searchbarIosCss=".sc-ion-searchbar-ios-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:0.6;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-ios-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios,.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.ion-color.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{color:inherit}.searchbar-search-icon.sc-ion-searchbar-ios{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-ios{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-ios{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);display:block;width:100%;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-ios::-webkit-search-cancel-button,.searchbar-input.sc-ion-searchbar-ios::-ms-clear{display:none}.searchbar-cancel-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-ios>div.sc-ion-searchbar-ios{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-clear-button.sc-ion-searchbar-ios:focus{opacity:0.5}.searchbar-has-value.searchbar-should-show-clear.sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios{display:block}.searchbar-disabled.sc-ion-searchbar-ios-h{cursor:default;opacity:0.4;pointer-events:none}.sc-ion-searchbar-ios-h{--background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.07);--border-radius:10px;--box-shadow:none;--cancel-button-color:var(--ion-color-primary, #3880ff);--clear-button-color:var(--ion-color-step-600, #666666);--color:var(--ion-text-color, #000);--icon-color:var(--ion-color-step-600, #666666);-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:12px;padding-bottom:12px;height:60px;contain:strict}.searchbar-input-container.sc-ion-searchbar-ios{height:36px}.searchbar-search-icon.sc-ion-searchbar-ios{-webkit-margin-start:calc(50% - 60px);margin-inline-start:calc(50% - 60px);top:0;position:absolute;width:22px;height:100%;contain:strict}@supports (inset-inline-start: 0){.searchbar-search-icon.sc-ion-searchbar-ios{inset-inline-start:5px}}@supports not (inset-inline-start: 0){.searchbar-search-icon.sc-ion-searchbar-ios{left:5px}[dir=rtl].sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,[dir=rtl] .sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{left:unset;right:unset;right:5px}[dir=rtl].sc-ion-searchbar-ios .searchbar-search-icon.sc-ion-searchbar-ios{left:unset;right:unset;right:5px}@supports selector(:dir(rtl)){.searchbar-search-icon.sc-ion-searchbar-ios:dir(rtl){left:unset;right:unset;right:5px}}}.searchbar-input.sc-ion-searchbar-ios{-webkit-padding-start:28px;padding-inline-start:28px;-webkit-padding-end:28px;padding-inline-end:28px;padding-top:0;padding-bottom:0;height:100%;font-size:17px;font-weight:400;contain:strict}.searchbar-clear-button.sc-ion-searchbar-ios{top:0;background-position:center;position:absolute;width:30px;height:100%;border:0;background-color:transparent}@supports (inset-inline-start: 0){.searchbar-clear-button.sc-ion-searchbar-ios{inset-inline-end:0}}@supports not (inset-inline-start: 0){.searchbar-clear-button.sc-ion-searchbar-ios{right:0}[dir=rtl].sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios,[dir=rtl] .sc-ion-searchbar-ios-h .searchbar-clear-button.sc-ion-searchbar-ios{left:unset;right:unset;left:0}[dir=rtl].sc-ion-searchbar-ios .searchbar-clear-button.sc-ion-searchbar-ios{left:unset;right:unset;left:0}@supports selector(:dir(rtl)){.searchbar-clear-button.sc-ion-searchbar-ios:dir(rtl){left:unset;right:unset;left:0}}}.searchbar-clear-icon.sc-ion-searchbar-ios{width:18px;height:100%}.searchbar-cancel-button.sc-ion-searchbar-ios{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:0;padding-inline-end:0;padding-top:0;padding-bottom:0;-ms-flex-negative:0;flex-shrink:0;background-color:transparent;font-size:16px}.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{-webkit-margin-start:0;margin-inline-start:0}.searchbar-left-aligned.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{-webkit-padding-start:30px;padding-inline-start:30px}.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-should-show-cancel.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{display:block}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios{-webkit-transition:all 300ms ease;transition:all 300ms ease}.searchbar-animated.searchbar-has-focus.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios,.searchbar-animated.searchbar-should-show-cancel.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{opacity:1;pointer-events:auto}.searchbar-animated.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{-webkit-margin-end:-100%;margin-inline-end:-100%;-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0);-webkit-transition:all 300ms ease;transition:all 300ms ease;opacity:0;pointer-events:none}.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-input.sc-ion-searchbar-ios,.searchbar-no-animate.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{-webkit-transition-duration:0ms;transition-duration:0ms}.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios{color:var(--ion-color-base)}@media (any-hover: hover){.ion-color.sc-ion-searchbar-ios-h .searchbar-cancel-button.sc-ion-searchbar-ios:hover{color:var(--ion-color-tint)}}ion-toolbar.sc-ion-searchbar-ios-h,ion-toolbar .sc-ion-searchbar-ios-h{padding-top:1px;padding-bottom:15px;height:52px}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color),ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color){color:inherit}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-cancel-button.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-cancel-button.sc-ion-searchbar-ios{color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h .searchbar-search-icon.sc-ion-searchbar-ios{color:currentColor;opacity:0.5}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-input.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-input.sc-ion-searchbar-ios{background:rgba(var(--ion-color-contrast-rgb), 0.07);color:currentColor}ion-toolbar.ion-color.sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-clear-button.sc-ion-searchbar-ios,ion-toolbar.ion-color .sc-ion-searchbar-ios-h:not(.ion-color) .searchbar-clear-button.sc-ion-searchbar-ios{color:currentColor;opacity:0.5}";var searchbarMdCss=".sc-ion-searchbar-md-h{--placeholder-color:initial;--placeholder-font-style:initial;--placeholder-font-weight:initial;--placeholder-opacity:0.6;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;color:var(--color);font-family:var(--ion-font-family, inherit);-webkit-box-sizing:border-box;box-sizing:border-box}.ion-color.sc-ion-searchbar-md-h{color:var(--ion-color-contrast)}.ion-color.sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md{background:var(--ion-color-base)}.ion-color.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md,.ion-color.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md,.ion-color.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{color:inherit}.searchbar-search-icon.sc-ion-searchbar-md{color:var(--icon-color);pointer-events:none}.searchbar-input-container.sc-ion-searchbar-md{display:block;position:relative;-ms-flex-negative:1;flex-shrink:1;width:100%}.searchbar-input.sc-ion-searchbar-md{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);display:block;width:100%;border:0;outline:none;background:var(--background);font-family:inherit;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-input.sc-ion-searchbar-md::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-moz-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.searchbar-input.sc-ion-searchbar-md::-webkit-search-cancel-button,.searchbar-input.sc-ion-searchbar-md::-ms-clear{display:none}.searchbar-cancel-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;display:none;height:100%;border:0;outline:none;color:var(--cancel-button-color);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-cancel-button.sc-ion-searchbar-md>div.sc-ion-searchbar-md{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%}.searchbar-clear-button.sc-ion-searchbar-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:none;min-height:0;outline:none;color:var(--clear-button-color);-webkit-appearance:none;-moz-appearance:none;appearance:none}.searchbar-clear-button.sc-ion-searchbar-md:focus{opacity:0.5}.searchbar-has-value.searchbar-should-show-clear.sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md{display:block}.searchbar-disabled.sc-ion-searchbar-md-h{cursor:default;opacity:0.4;pointer-events:none}.sc-ion-searchbar-md-h{--background:var(--ion-background-color, #fff);--border-radius:2px;--box-shadow:0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12);--cancel-button-color:var(--ion-color-step-900, #1a1a1a);--clear-button-color:initial;--color:var(--ion-color-step-850, #262626);--icon-color:var(--ion-color-step-600, #666666);-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;background:inherit}.searchbar-search-icon.sc-ion-searchbar-md{top:11px;width:21px;height:21px}@supports (inset-inline-start: 0){.searchbar-search-icon.sc-ion-searchbar-md{inset-inline-start:16px}}@supports not (inset-inline-start: 0){.searchbar-search-icon.sc-ion-searchbar-md{left:16px}[dir=rtl].sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md,[dir=rtl] .sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{left:unset;right:unset;right:16px}[dir=rtl].sc-ion-searchbar-md .searchbar-search-icon.sc-ion-searchbar-md{left:unset;right:unset;right:16px}@supports selector(:dir(rtl)){.searchbar-search-icon.sc-ion-searchbar-md:dir(rtl){left:unset;right:unset;right:16px}}}.searchbar-cancel-button.sc-ion-searchbar-md{top:0;background-color:transparent;font-size:1.6em}@supports (inset-inline-start: 0){.searchbar-cancel-button.sc-ion-searchbar-md{inset-inline-start:5px}}@supports not (inset-inline-start: 0){.searchbar-cancel-button.sc-ion-searchbar-md{left:5px}[dir=rtl].sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md,[dir=rtl] .sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md{left:unset;right:unset;right:5px}[dir=rtl].sc-ion-searchbar-md .searchbar-cancel-button.sc-ion-searchbar-md{left:unset;right:unset;right:5px}@supports selector(:dir(rtl)){.searchbar-cancel-button.sc-ion-searchbar-md:dir(rtl){left:unset;right:unset;right:5px}}}.searchbar-search-icon.sc-ion-searchbar-md,.searchbar-cancel-button.sc-ion-searchbar-md{position:absolute}.searchbar-search-icon.ion-activated.sc-ion-searchbar-md,.searchbar-cancel-button.ion-activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-input.sc-ion-searchbar-md{-webkit-padding-start:55px;padding-inline-start:55px;-webkit-padding-end:55px;padding-inline-end:55px;padding-top:6px;padding-bottom:6px;background-position:left 8px center;height:auto;font-size:16px;font-weight:400;line-height:30px}[dir=rtl].sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md,[dir=rtl] .sc-ion-searchbar-md-h .searchbar-input.sc-ion-searchbar-md{background-position:right 8px center}[dir=rtl].sc-ion-searchbar-md .searchbar-input.sc-ion-searchbar-md{background-position:right 8px center}@supports selector(:dir(rtl)){.searchbar-input.sc-ion-searchbar-md:dir(rtl){background-position:right 8px center}}.searchbar-clear-button.sc-ion-searchbar-md{top:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;position:absolute;height:100%;border:0;background-color:transparent}@supports (inset-inline-start: 0){.searchbar-clear-button.sc-ion-searchbar-md{inset-inline-end:13px}}@supports not (inset-inline-start: 0){.searchbar-clear-button.sc-ion-searchbar-md{right:13px}[dir=rtl].sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md,[dir=rtl] .sc-ion-searchbar-md-h .searchbar-clear-button.sc-ion-searchbar-md{left:unset;right:unset;left:13px}[dir=rtl].sc-ion-searchbar-md .searchbar-clear-button.sc-ion-searchbar-md{left:unset;right:unset;left:13px}@supports selector(:dir(rtl)){.searchbar-clear-button.sc-ion-searchbar-md:dir(rtl){left:unset;right:unset;left:13px}}}.searchbar-clear-button.ion-activated.sc-ion-searchbar-md{background-color:transparent}.searchbar-clear-icon.sc-ion-searchbar-md{width:22px;height:100%}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-search-icon.sc-ion-searchbar-md{display:block}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md,.searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md{display:block}.searchbar-has-focus.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md+.searchbar-search-icon.sc-ion-searchbar-md,.searchbar-should-show-cancel.sc-ion-searchbar-md-h .searchbar-cancel-button.sc-ion-searchbar-md+.searchbar-search-icon.sc-ion-searchbar-md{display:none}ion-toolbar.sc-ion-searchbar-md-h,ion-toolbar .sc-ion-searchbar-md-h{-webkit-padding-start:7px;padding-inline-start:7px;-webkit-padding-end:7px;padding-inline-end:7px;padding-top:3px;padding-bottom:3px}";var Searchbar=function(){function r(r){var a=this;registerInstance(this,r);this.ionInput=createEvent(this,"ionInput",7);this.ionChange=createEvent(this,"ionChange",7);this.ionCancel=createEvent(this,"ionCancel",7);this.ionClear=createEvent(this,"ionClear",7);this.ionBlur=createEvent(this,"ionBlur",7);this.ionFocus=createEvent(this,"ionFocus",7);this.ionStyle=createEvent(this,"ionStyle",7);this.isCancelVisible=false;this.shouldAlignLeft=true;this.inputId="ion-searchbar-".concat(searchbarIds++);this.onClearInput=function(r){return __awaiter(a,void 0,void 0,(function(){var a=this;return __generator(this,(function(e){this.ionClear.emit();return[2,new Promise((function(e){setTimeout((function(){var o=a.getValue();if(o!==""){a.value="";a.emitInputChange();if(r&&!a.focused){a.setFocus();a.focusedValue=o}}e()}),16*4)}))]}))}))};this.onCancelSearchbar=function(r){return __awaiter(a,void 0,void 0,(function(){var a,e;return __generator(this,(function(o){switch(o.label){case 0:if(r){r.preventDefault();r.stopPropagation()}this.ionCancel.emit();a=this.getValue();e=this.focused;return[4,this.onClearInput()];case 1:o.sent();if(a&&!e){this.emitValueChange(r)}if(this.nativeInput){this.nativeInput.blur()}return[2]}}))}))};this.onInput=function(r){var e=r.target;if(e){a.value=e.value}a.emitInputChange(r)};this.onChange=function(r){a.emitValueChange(r)};this.onBlur=function(r){a.focused=false;a.ionBlur.emit();a.positionElements();if(a.focusedValue!==a.value){a.emitValueChange(r)}a.focusedValue=undefined};this.onFocus=function(){a.focused=true;a.focusedValue=a.value;a.ionFocus.emit();a.positionElements()};this.focused=false;this.noAnimate=true;this.color=undefined;this.animated=false;this.autocomplete="off";this.autocorrect="off";this.cancelButtonIcon=config.get("backButtonIcon",arrowBackSharp);this.cancelButtonText="Cancel";this.clearIcon=undefined;this.debounce=undefined;this.disabled=false;this.inputmode=undefined;this.enterkeyhint=undefined;this.name=this.inputId;this.placeholder="Search";this.searchIcon=undefined;this.showCancelButton="never";this.showClearButton="always";this.spellcheck=false;this.type="search";this.value=""}r.prototype.debounceChanged=function(){var r=this,a=r.ionInput,e=r.debounce,o=r.originalIonInput;this.ionInput=e===undefined?o!==null&&o!==void 0?o:a:debounceEvent(a,e)};r.prototype.valueChanged=function(){var r=this.nativeInput;var a=this.getValue();if(r&&r.value!==a){r.value=a}};r.prototype.showCancelButtonChanged=function(){var r=this;requestAnimationFrame((function(){r.positionElements();forceUpdate(r)}))};r.prototype.connectedCallback=function(){this.emitStyle()};r.prototype.componentDidLoad=function(){var r=this;this.originalIonInput=this.ionInput;this.positionElements();this.debounceChanged();setTimeout((function(){r.noAnimate=false}),300)};r.prototype.emitStyle=function(){this.ionStyle.emit({searchbar:true})};r.prototype.setFocus=function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(r){if(this.nativeInput){this.nativeInput.focus()}return[2]}))}))};r.prototype.getInputElement=function(){return Promise.resolve(this.nativeInput)};r.prototype.emitValueChange=function(r){var a=this.value;var e=a==null?a:a.toString();this.focusedValue=e;this.ionChange.emit({value:e,event:r})};r.prototype.emitInputChange=function(r){var a=this.value;this.ionInput.emit({value:a,event:r})};r.prototype.positionElements=function(){var r=this.getValue();var a=this.shouldAlignLeft;var e=getIonMode(this);var o=!this.animated||r.trim()!==""||!!this.focused;this.shouldAlignLeft=o;if(e!=="ios"){return}if(a!==o){this.positionPlaceholder()}if(this.animated){this.positionCancelButton()}};r.prototype.positionPlaceholder=function(){var r=this.nativeInput;if(!r){return}var a=isRTL(this.el);var e=(this.el.shadowRoot||this.el).querySelector(".searchbar-search-icon");if(this.shouldAlignLeft){r.removeAttribute("style");e.removeAttribute("style")}else{var o=document;var t=o.createElement("span");t.innerText=this.placeholder||"";o.body.appendChild(t);raf((function(){var o=t.offsetWidth;t.remove();var i="calc(50% - "+o/2+"px)";var n="calc(50% - "+(o/2+30)+"px)";if(a){r.style.paddingRight=i;e.style.marginRight=n}else{r.style.paddingLeft=i;e.style.marginLeft=n}}))}};r.prototype.positionCancelButton=function(){var r=isRTL(this.el);var a=(this.el.shadowRoot||this.el).querySelector(".searchbar-cancel-button");var e=this.shouldShowCancelButton();if(a!==null&&e!==this.isCancelVisible){var o=a.style;this.isCancelVisible=e;if(e){if(r){o.marginLeft="0"}else{o.marginRight="0"}}else{var t=a.offsetWidth;if(t>0){if(r){o.marginLeft=-t+"px"}else{o.marginRight=-t+"px"}}}}};r.prototype.getValue=function(){return this.value||""};r.prototype.hasValue=function(){return this.getValue()!==""};r.prototype.shouldShowCancelButton=function(){if(this.showCancelButton==="never"||this.showCancelButton==="focus"&&!this.focused){return false}return true};r.prototype.shouldShowClearButton=function(){if(this.showClearButton==="never"||this.showClearButton==="focus"&&!this.focused){return false}return true};r.prototype.render=function(){var r;var a=this;var e=this.cancelButtonText;var o=this.animated&&config.getBoolean("animated",true);var t=getIonMode(this);var i=this.clearIcon||(t==="ios"?closeCircle:closeSharp);var n=this.searchIcon||(t==="ios"?searchOutline:searchSharp);var s=this.shouldShowCancelButton();var c=this.showCancelButton!=="never"&&h("button",{"aria-label":e,"aria-hidden":s?undefined:"true",type:"button",tabIndex:t==="ios"&&!s?-1:undefined,onMouseDown:this.onCancelSearchbar,onTouchStart:this.onCancelSearchbar,class:"searchbar-cancel-button"},h("div",{"aria-hidden":"true"},t==="md"?h("ion-icon",{"aria-hidden":"true",mode:t,icon:this.cancelButtonIcon,lazy:false}):e));return h(Host,{role:"search","aria-disabled":this.disabled?"true":null,class:createColorClasses(this.color,(r={},r[t]=true,r["searchbar-animated"]=o,r["searchbar-disabled"]=this.disabled,r["searchbar-no-animate"]=o&&this.noAnimate,r["searchbar-has-value"]=this.hasValue(),r["searchbar-left-aligned"]=this.shouldAlignLeft,r["searchbar-has-focus"]=this.focused,r["searchbar-should-show-clear"]=this.shouldShowClearButton(),r["searchbar-should-show-cancel"]=this.shouldShowCancelButton(),r))},h("div",{class:"searchbar-input-container"},h("input",{"aria-label":"search text",disabled:this.disabled,ref:function(r){return a.nativeInput=r},class:"searchbar-input",inputMode:this.inputmode,enterKeyHint:this.enterkeyhint,name:this.name,onInput:this.onInput,onChange:this.onChange,onBlur:this.onBlur,onFocus:this.onFocus,placeholder:this.placeholder,type:this.type,value:this.getValue(),autoComplete:this.autocomplete,autoCorrect:this.autocorrect,spellcheck:this.spellcheck}),t==="md"&&c,h("ion-icon",{"aria-hidden":"true",mode:t,icon:n,lazy:false,class:"searchbar-search-icon"}),h("button",{"aria-label":"reset",type:"button","no-blur":true,class:"searchbar-clear-button",onPointerDown:function(r){r.preventDefault()},onClick:function(){return a.onClearInput(true)}},h("ion-icon",{"aria-hidden":"true",mode:t,icon:i,lazy:false,class:"searchbar-clear-icon"}))),t==="ios"&&c)};Object.defineProperty(r.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});Object.defineProperty(r,"watchers",{get:function(){return{debounce:["debounceChanged"],value:["valueChanged"],showCancelButton:["showCancelButtonChanged"]}},enumerable:false,configurable:true});return r}();var searchbarIds=0;Searchbar.style={ios:searchbarIosCss,md:searchbarMdCss};export{Searchbar as ion_searchbar};