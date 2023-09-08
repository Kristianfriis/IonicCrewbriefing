/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{r as t,d as i,h as e,H as n,f as o}from"./p-156967ec.js";import{g as s}from"./p-7c2bac85.js";import{d as r}from"./p-b347cfd1.js";import{G as a}from"./p-e0b06b65.js";import{p as h,i as d,o as l,l as u}from"./p-63eb0acd.js";import{m as c}from"./p-778460f7.js";import{q as p}from"./p-5ef91692.js";import{c as m,b}from"./p-b22ee0dc.js";import{c as g,h as f}from"./p-1d072d3d.js";import{u as v,v as x}from"./p-0a87858b.js";import"./p-185e427e.js";import"./p-94a4ce40.js";import"./p-b34c1ae1.js";import"./p-1b8e1d03.js";const w='[tabindex]:not([tabindex^="-"]), input:not([type=hidden]):not([tabindex^="-"]), textarea:not([tabindex^="-"]), button:not([tabindex^="-"]), select:not([tabindex^="-"]), .ion-focusable:not([tabindex^="-"])',y=class{constructor(e){t(this,e),this.ionWillOpen=i(this,"ionWillOpen",7),this.ionWillClose=i(this,"ionWillClose",7),this.ionDidOpen=i(this,"ionDidOpen",7),this.ionDidClose=i(this,"ionDidClose",7),this.ionMenuChange=i(this,"ionMenuChange",7),this.lastOnEnd=0,this.blocker=a.createBlocker({disableScroll:!0}),this.isAnimating=!1,this._isOpen=!1,this.inheritedAttributes={},this.handleFocus=t=>{const i=p(document);i&&!i.contains(this.el)||this.trapKeyboardFocus(t,document)},this.isPaneVisible=!1,this.isEndSide=!1,this.contentId=void 0,this.menuId=void 0,this.type=void 0,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}typeChanged(t,i){const e=this.contentEl;e&&(void 0!==i&&e.classList.remove(`menu-content-${i}`),e.classList.add(`menu-content-${t}`),e.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0}disabledChanged(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})}sideChanged(){this.isEndSide=h(this.side),this.animation=void 0}swipeGestureChanged(){this.updateState()}async connectedCallback(){"undefined"!=typeof customElements&&null!=customElements&&await customElements.whenDefined("ion-menu"),void 0===this.type&&(this.type=m.get("menuType","overlay"));const t=void 0!==this.contentId?document.getElementById(this.contentId):null;null!==t?(this.el.contains(t)&&console.error('Menu: "contentId" should refer to the main view\'s ion-content, not the ion-content inside of the ion-menu.'),this.contentEl=t,t.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),c._register(this),this.gesture=(await import("./p-8b1be026.js")).createGesture({el:document,gestureName:"menu-swipe",gesturePriority:30,threshold:10,blurOnStart:!0,canStart:t=>this.canStart(t),onWillStart:()=>this.onWillStart(),onStart:()=>this.onStart(),onMove:t=>this.onMove(t),onEnd:t=>this.onEnd(t)}),this.updateState()):console.error('Menu: must have a "content" element to listen for drag events on.')}componentWillLoad(){this.inheritedAttributes=d(this.el)}async componentDidLoad(){this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen}),this.updateState()}async disconnectedCallback(){await this.close(!1),this.blocker.destroy(),c._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0),this.animation=void 0,this.contentEl=void 0}onSplitPaneChanged(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()}onBackdropClick(t){this._isOpen&&this.lastOnEnd<t.timeStamp-100&&t.composedPath&&!t.composedPath().includes(this.menuInnerEl)&&(t.preventDefault(),t.stopPropagation(),this.close())}onKeydown(t){"Escape"===t.key&&this.close()}isOpen(){return Promise.resolve(this._isOpen)}isActive(){return Promise.resolve(this._isActive())}open(t=!0){return this.setOpen(!0,t)}close(t=!0){return this.setOpen(!1,t)}toggle(t=!0){return this.setOpen(!this._isOpen,t)}setOpen(t,i=!0){return c._setOpen(this,t,i)}focusFirstDescendant(){const{el:t}=this,i=t.querySelector(w);i?i.focus():t.focus()}focusLastDescendant(){const{el:t}=this,i=Array.from(t.querySelectorAll(w)),e=i.length>0?i[i.length-1]:null;e?e.focus():t.focus()}trapKeyboardFocus(t,i){const e=t.target;e&&(this.el.contains(e)?this.lastFocus=e:(this.focusFirstDescendant(),this.lastFocus===i.activeElement&&this.focusLastDescendant()))}async _setOpen(t,i=!0){return!(!this._isActive()||this.isAnimating||t===this._isOpen||(this.beforeAnimation(t),await this.loadAnimation(),await this.startAnimation(t,i),this.afterAnimation(t),0))}async loadAnimation(){const t=this.menuInnerEl.offsetWidth,i=h(this.side);t===this.width&&void 0!==this.animation&&i===this.isEndSide||(this.width=t,this.isEndSide=i,this.animation&&(this.animation.destroy(),this.animation=void 0),this.animation=await c._createAnimation(this.type,this),m.getBoolean("animated",!0)||this.animation.duration(0),this.animation.fill("both"))}async startAnimation(t,i){const e=!t,n=b(this),o="ios"===n?"cubic-bezier(0.32,0.72,0,1)":"cubic-bezier(0.0,0.0,0.2,1)",s="ios"===n?"cubic-bezier(1, 0, 0.68, 0.28)":"cubic-bezier(0.4, 0, 0.6, 1)",r=this.animation.direction(e?"reverse":"normal").easing(e?s:o).onFinish((()=>{"reverse"===r.getDirection()&&r.direction("normal")}));i?await r.play():r.play({sync:!0})}_isActive(){return!this.disabled&&!this.isPaneVisible}canSwipe(){return this.swipeGesture&&!this.isAnimating&&this._isActive()}canStart(t){return!(document.querySelector("ion-modal.show-modal")||!this.canSwipe())&&(!!this._isOpen||!c._getOpenSync()&&z(window,t.currentX,this.isEndSide,this.maxEdgeStart))}onWillStart(){return this.beforeAnimation(!this._isOpen),this.loadAnimation()}onStart(){this.isAnimating&&this.animation?this.animation.progressStart(!0,this._isOpen?1:0):l(!1,"isAnimating has to be true")}onMove(t){if(!this.isAnimating||!this.animation)return void l(!1,"isAnimating has to be true");const i=k(t.deltaX,this._isOpen,this.isEndSide)/this.width;this.animation.progressStep(this._isOpen?1-i:i)}onEnd(t){if(!this.isAnimating||!this.animation)return void l(!1,"isAnimating has to be true");const i=this._isOpen,e=this.isEndSide,n=k(t.deltaX,i,e),o=this.width,r=n/o,a=t.velocityX,h=o/2,d=a>=0&&(a>.2||t.deltaX>h),c=a<=0&&(a<-.2||t.deltaX<-h),p=i?e?d:c:e?c:d;let m=!i&&p;i&&!p&&(m=!0),this.lastOnEnd=t.currentTime;let b=p?.001:-.001;b+=s([0,0],[.4,0],[.6,1],[1,1],u(0,r<0?.01:r,.9999))[0]||0;const g=this._isOpen?!p:p;this.animation.easing("cubic-bezier(0.4, 0.0, 0.6, 1)").onFinish((()=>this.afterAnimation(m)),{oneTimeCallback:!0}).progressEnd(g?1:0,this._isOpen?1-b:b,300)}beforeAnimation(t){l(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(C),this.el.setAttribute("tabindex","0"),this.backdropEl&&this.backdropEl.classList.add(j),this.contentEl&&(this.contentEl.classList.add(A),this.contentEl.setAttribute("aria-hidden","true")),this.blocker.block(),this.isAnimating=!0,t?this.ionWillOpen.emit():this.ionWillClose.emit()}afterAnimation(t){var i;l(this.isAnimating,"_before() should be called while animating"),this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),t?(this.ionDidOpen.emit(),(null===(i=document.activeElement)||void 0===i?void 0:i.closest("ion-menu"))!==this.el&&this.el.focus(),document.addEventListener("focus",this.handleFocus,!0)):(this.el.classList.remove(C),this.el.removeAttribute("tabindex"),this.contentEl&&(this.contentEl.classList.remove(A),this.contentEl.removeAttribute("aria-hidden")),this.backdropEl&&this.backdropEl.classList.remove(j),this.animation&&this.animation.stop(),this.ionDidClose.emit(),document.removeEventListener("focus",this.handleFocus,!0))}updateState(){const t=this._isActive();this.gesture&&this.gesture.enable(t&&this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),(null==r?void 0:r.contains(this.el))&&(this.disabled||c._setActiveMenu(this)),l(!this.isAnimating,"can not be animating")}forceClosing(){l(this._isOpen,"menu cannot be closed"),this.isAnimating=!0,this.animation.direction("reverse").play({sync:!0}),this.afterAnimation(!1)}render(){const{type:t,disabled:i,isPaneVisible:o,inheritedAttributes:s,side:r}=this,a=b(this);return e(n,{role:"navigation","aria-label":s["aria-label"]||"menu",class:{[a]:!0,[`menu-type-${t}`]:!0,"menu-enabled":!i,[`menu-side-${r}`]:!0,"menu-pane-visible":o}},e("div",{class:"menu-inner",part:"container",ref:t=>this.menuInnerEl=t},e("slot",null)),e("ion-backdrop",{ref:t=>this.backdropEl=t,class:"menu-backdrop",tappable:!1,stopPropagation:!1,part:"backdrop"}))}get el(){return o(this)}static get watchers(){return{type:["typeChanged"],disabled:["disabledChanged"],side:["sideChanged"],swipeGesture:["swipeGestureChanged"]}}},k=(t,i,e)=>Math.max(0,i!==e?-t:t),z=(t,i,e,n)=>e?i>=t.innerWidth-n:i<=n,C="show-menu",j="show-backdrop",A="menu-content-open";y.style={ios:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}@supports (inset-inline-start: 0){:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}}@supports not (inset-inline-start: 0){:host(.menu-side-start) .menu-inner{left:0;right:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{left:unset;right:unset;left:auto;right:0}@supports selector(:dir(rtl)){:host(.menu-side-start) .menu-inner:dir(rtl){left:unset;right:unset;left:auto;right:0}}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}@supports (inset-inline-start: 0){:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}}@supports not (inset-inline-start: 0){:host(.menu-side-end) .menu-inner{left:auto;right:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{left:unset;right:unset;left:0;right:auto}@supports selector(:dir(rtl)){:host(.menu-side-end) .menu-inner:dir(rtl){left:unset;right:unset;left:0;right:auto}}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-push){z-index:1000}:host(.menu-type-push) .show-backdrop{display:block}",md:":host{--width:304px;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}:host(.show-menu){display:block}.menu-inner{-webkit-transform:translateX(-9999px);transform:translateX(-9999px);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);contain:strict}:host(.menu-side-start) .menu-inner{--ion-safe-area-right:0px;top:0;bottom:0}@supports (inset-inline-start: 0){:host(.menu-side-start) .menu-inner{inset-inline-start:0;inset-inline-end:auto}}@supports not (inset-inline-start: 0){:host(.menu-side-start) .menu-inner{left:0;right:auto}:host-context([dir=rtl]):host(.menu-side-start) .menu-inner,:host-context([dir=rtl]).menu-side-start .menu-inner{left:unset;right:unset;left:auto;right:0}@supports selector(:dir(rtl)){:host(.menu-side-start) .menu-inner:dir(rtl){left:unset;right:unset;left:auto;right:0}}}:host(.menu-side-end) .menu-inner{--ion-safe-area-left:0px;top:0;bottom:0}@supports (inset-inline-start: 0){:host(.menu-side-end) .menu-inner{inset-inline-start:auto;inset-inline-end:0}}@supports not (inset-inline-start: 0){:host(.menu-side-end) .menu-inner{left:auto;right:0}:host-context([dir=rtl]):host(.menu-side-end) .menu-inner,:host-context([dir=rtl]).menu-side-end .menu-inner{left:unset;right:unset;left:0;right:auto}@supports selector(:dir(rtl)){:host(.menu-side-end) .menu-inner:dir(rtl){left:unset;right:unset;left:0;right:auto}}}ion-backdrop{display:none;opacity:0.01;z-index:-1}@media (max-width: 340px){.menu-inner{--width:264px}}:host(.menu-type-reveal){z-index:0}:host(.menu-type-reveal.show-menu) .menu-inner{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}:host(.menu-type-overlay){z-index:1000}:host(.menu-type-overlay) .show-backdrop{display:block;cursor:pointer}:host(.menu-pane-visible){width:var(--width);min-width:var(--min-width);max-width:var(--max-width)}:host(.menu-pane-visible) .menu-inner{left:0;right:0;width:auto;-webkit-transform:none !important;transform:none !important;-webkit-box-shadow:none !important;box-shadow:none !important}:host(.menu-pane-visible) ion-backdrop{display:hidden !important;}:host(.menu-type-overlay) .menu-inner{-webkit-box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18);box-shadow:4px 0px 16px rgba(0, 0, 0, 0.18)}"};const S=async t=>{const i=await c.get(t);return!(!i||!await i.isActive())},_=class{constructor(i){t(this,i),this.inheritedAttributes={},this.onClick=async()=>c.toggle(this.menu),this.visible=!1,this.color=void 0,this.disabled=!1,this.menu=void 0,this.autoHide=!0,this.type="button"}componentWillLoad(){this.inheritedAttributes=d(this.el)}componentDidLoad(){this.visibilityChanged()}async visibilityChanged(){this.visible=await S(this.menu)}render(){const{color:t,disabled:i,inheritedAttributes:o}=this,s=b(this),r=m.get("menuIcon","ios"===s?v:x),a=this.autoHide&&!this.visible,h={type:this.type},d=o["aria-label"]||"menu";return e(n,{onClick:this.onClick,"aria-disabled":i?"true":null,"aria-hidden":a?"true":null,class:g(t,{[s]:!0,button:!0,"menu-button-hidden":a,"menu-button-disabled":i,"in-toolbar":f("ion-toolbar",this.el),"in-toolbar-color":f("ion-toolbar[color]",this.el),"ion-activatable":!0,"ion-focusable":!0})},e("button",Object.assign({},h,{disabled:i,class:"button-native",part:"native","aria-label":d}),e("span",{class:"button-inner"},e("slot",null,e("ion-icon",{part:"icon",icon:r,mode:s,lazy:!1,"aria-hidden":"true"}))),"md"===s&&e("ion-ripple-effect",{type:"unbounded"})))}get el(){return o(this)}};_.style={ios:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.1;--border-radius:4px;--color:var(--ion-color-primary, #3880ff);--padding-start:5px;--padding-end:5px;height:32px;font-size:31px}:host(.ion-activated){opacity:0.4}@media (any-hover: hover){:host(:hover){opacity:0.6}}',md:':host{--background:transparent;--color-focused:currentColor;--border-radius:initial;--padding-top:0;--padding-bottom:0;color:var(--color);text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}.button-native{border-radius:var(--border-radius);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;border:0;outline:none;background:var(--background);line-height:1;cursor:pointer;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}ion-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;pointer-events:none}:host(.menu-button-hidden){display:none}:host(.menu-button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.ion-focused) .button-native{color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}@media (any-hover: hover){:host(:hover) .button-native{color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity, 0)}}:host(.ion-color) .button-native{color:var(--ion-color-base)}:host(.in-toolbar:not(.in-toolbar-color)){color:var(--ion-toolbar-color, var(--color))}:host{--background-focused:currentColor;--background-focused-opacity:.12;--background-hover:currentColor;--background-hover-opacity:.04;--border-radius:50%;--color:initial;--padding-start:8px;--padding-end:8px;width:48px;height:48px;font-size:24px}:host(.ion-color.ion-focused)::after{background:var(--ion-color-base)}@media (any-hover: hover){:host(.ion-color:hover) .button-native::after{background:var(--ion-color-base)}}'};const O=class{constructor(i){t(this,i),this.onClick=()=>c.toggle(this.menu),this.visible=!1,this.menu=void 0,this.autoHide=!0}connectedCallback(){this.visibilityChanged()}async visibilityChanged(){this.visible=await S(this.menu)}render(){const t=b(this),i=this.autoHide&&!this.visible;return e(n,{onClick:this.onClick,"aria-hidden":i?"true":null,class:{[t]:!0,"menu-toggle-hidden":i}},e("slot",null))}};O.style=":host(.menu-toggle-hidden){display:none}";export{y as ion_menu,_ as ion_menu_button,O as ion_menu_toggle}