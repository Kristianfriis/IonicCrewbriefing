/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-484b1104.js');
const config = require('./config-d5882735.js');
const helpers = require('./helpers-ea4ccbcb.js');
const index$1 = require('./index-cc7dfb7c.js');
const overlays = require('./overlays-0ea06fcb.js');
const theme = require('./theme-fbc56b3b.js');
const ionicGlobal = require('./ionic-global-f81d8b73.js');
const animation = require('./animation-2bb33618.js');
require('./framework-delegate-e8174951.js');
require('./hardware-back-button-b67c8e75.js');
require('./index-306a7476.js');

/**
 * iOS Toast Enter Animation
 */
const iosEnterAnimation = (baseEl, position) => {
  const baseAnimation = animation.createAnimation();
  const wrapperAnimation = animation.createAnimation();
  const root = helpers.getElementRoot(baseEl);
  const wrapperEl = root.querySelector('.toast-wrapper');
  const bottom = `calc(-10px - var(--ion-safe-area-bottom, 0px))`;
  const top = `calc(10px + var(--ion-safe-area-top, 0px))`;
  wrapperAnimation.addElement(wrapperEl);
  switch (position) {
    case 'top':
      wrapperAnimation.fromTo('transform', 'translateY(-100%)', `translateY(${top})`);
      break;
    case 'middle':
      const topPosition = Math.floor(baseEl.clientHeight / 2 - wrapperEl.clientHeight / 2);
      wrapperEl.style.top = `${topPosition}px`;
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      break;
    default:
      wrapperAnimation.fromTo('transform', 'translateY(100%)', `translateY(${bottom})`);
      break;
  }
  return baseAnimation.easing('cubic-bezier(.155,1.105,.295,1.12)').duration(400).addAnimation(wrapperAnimation);
};

/**
 * iOS Toast Leave Animation
 */
const iosLeaveAnimation = (baseEl, position) => {
  const baseAnimation = animation.createAnimation();
  const wrapperAnimation = animation.createAnimation();
  const root = helpers.getElementRoot(baseEl);
  const wrapperEl = root.querySelector('.toast-wrapper');
  const bottom = `calc(-10px - var(--ion-safe-area-bottom, 0px))`;
  const top = `calc(10px + var(--ion-safe-area-top, 0px))`;
  wrapperAnimation.addElement(wrapperEl);
  switch (position) {
    case 'top':
      wrapperAnimation.fromTo('transform', `translateY(${top})`, 'translateY(-100%)');
      break;
    case 'middle':
      wrapperAnimation.fromTo('opacity', 0.99, 0);
      break;
    default:
      wrapperAnimation.fromTo('transform', `translateY(${bottom})`, 'translateY(100%)');
      break;
  }
  return baseAnimation.easing('cubic-bezier(.36,.66,.04,1)').duration(300).addAnimation(wrapperAnimation);
};

/**
 * MD Toast Enter Animation
 */
const mdEnterAnimation = (baseEl, position) => {
  const baseAnimation = animation.createAnimation();
  const wrapperAnimation = animation.createAnimation();
  const root = helpers.getElementRoot(baseEl);
  const wrapperEl = root.querySelector('.toast-wrapper');
  const bottom = `calc(8px + var(--ion-safe-area-bottom, 0px))`;
  const top = `calc(8px + var(--ion-safe-area-top, 0px))`;
  wrapperAnimation.addElement(wrapperEl);
  switch (position) {
    case 'top':
      wrapperEl.style.top = top;
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      break;
    case 'middle':
      const topPosition = Math.floor(baseEl.clientHeight / 2 - wrapperEl.clientHeight / 2);
      wrapperEl.style.top = `${topPosition}px`;
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      break;
    default:
      wrapperEl.style.bottom = bottom;
      wrapperAnimation.fromTo('opacity', 0.01, 1);
      break;
  }
  return baseAnimation.easing('cubic-bezier(.36,.66,.04,1)').duration(400).addAnimation(wrapperAnimation);
};

/**
 * md Toast Leave Animation
 */
const mdLeaveAnimation = (baseEl) => {
  const baseAnimation = animation.createAnimation();
  const wrapperAnimation = animation.createAnimation();
  const root = helpers.getElementRoot(baseEl);
  const wrapperEl = root.querySelector('.toast-wrapper');
  wrapperAnimation.addElement(wrapperEl).fromTo('opacity', 0.99, 0);
  return baseAnimation.easing('cubic-bezier(.36,.66,.04,1)').duration(300).addAnimation(wrapperAnimation);
};

const toastIosCss = ":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host:dir(rtl){left:unset;right:unset;right:0}}}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}@supports (inset-inline-start: 0){.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}}@supports not (inset-inline-start: 0){.toast-wrapper{left:var(--start);right:var(--end)}:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}@supports selector(:dir(rtl)){.toast-wrapper:dir(rtl){left:unset;right:unset;left:var(--end);right:var(--start)}}}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-50, #f2f2f2);--border-radius:14px;--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-850, #262626);--max-width:700px;--start:10px;--end:10px;font-size:14px}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;z-index:10}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.toast-translucent) .toast-wrapper{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}:host(.ion-color.toast-translucent) .toast-wrapper{background:rgba(var(--ion-color-base-rgb), 0.8)}}.toast-wrapper.toast-top{-webkit-transform:translate3d(0,  -100%,  0);transform:translate3d(0,  -100%,  0);top:0}.toast-wrapper.toast-middle{opacity:0.01}.toast-wrapper.toast-bottom{-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);bottom:0}.toast-content{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:15px;padding-bottom:15px}.toast-header{margin-bottom:2px;font-weight:500}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;height:44px;-webkit-transition:background-color, opacity 100ms linear;transition:background-color, opacity 100ms linear;border:0;background-color:transparent;font-family:var(--ion-font-family);font-size:17px;font-weight:500;overflow:hidden}.toast-button.ion-activated{opacity:0.4}@media (any-hover: hover){.toast-button:hover{opacity:0.6}}";

const toastMdCss = ":host{--border-width:0;--border-style:none;--border-color:initial;--box-shadow:none;--min-width:auto;--width:auto;--min-height:auto;--height:auto;--max-height:auto;--white-space:normal;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;color:var(--color);font-family:var(--ion-font-family, inherit);contain:strict;z-index:1001;pointer-events:none}@supports (inset-inline-start: 0){:host{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host{left:0}:host-context([dir=rtl]){left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host:dir(rtl){left:unset;right:unset;right:0}}}:host(.overlay-hidden){display:none}:host(.ion-color){--button-color:inherit;color:var(--ion-color-contrast)}:host(.ion-color) .toast-button-cancel{color:inherit}:host(.ion-color) .toast-wrapper{background:var(--ion-color-base)}.toast-wrapper{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow)}@supports (inset-inline-start: 0){.toast-wrapper{inset-inline-start:var(--start);inset-inline-end:var(--end)}}@supports not (inset-inline-start: 0){.toast-wrapper{left:var(--start);right:var(--end)}:host-context([dir=rtl]) .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}[dir=rtl] .toast-wrapper{left:unset;right:unset;left:var(--end);right:var(--start)}@supports selector(:dir(rtl)){.toast-wrapper:dir(rtl){left:unset;right:unset;left:var(--end);right:var(--start)}}}.toast-container{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;pointer-events:auto;height:inherit;min-height:inherit;max-height:inherit;contain:content}.toast-layout-stacked .toast-container{-ms-flex-wrap:wrap;flex-wrap:wrap}.toast-layout-baseline .toast-content{display:-ms-flexbox;display:flex;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center}.toast-icon{-webkit-margin-start:16px;margin-inline-start:16px}.toast-message{-ms-flex:1;flex:1;white-space:var(--white-space)}.toast-button-group{display:-ms-flexbox;display:flex}.toast-layout-stacked .toast-button-group{-ms-flex-pack:end;justify-content:end;width:100%}.toast-button{border:0;outline:none;color:var(--button-color);z-index:0}.toast-icon,.toast-button-icon{font-size:1.4em}.toast-button-inner{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}@media (any-hover: hover){.toast-button:hover{cursor:pointer}}:host{--background:var(--ion-color-step-800, #333333);--border-radius:4px;--box-shadow:0 3px 5px -1px rgba(0, 0, 0, 0.2), 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);--button-color:var(--ion-color-primary, #3880ff);--color:var(--ion-color-step-50, #f2f2f2);--max-width:700px;--start:8px;--end:8px;font-size:14px}.toast-wrapper{-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;display:block;position:absolute;opacity:0.01;z-index:10}.toast-content{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:14px;padding-bottom:14px}.toast-header{margin-bottom:2px;font-weight:500;line-height:20px}.toast-message{line-height:20px}.toast-layout-baseline .toast-button-group-start{-webkit-margin-start:8px;margin-inline-start:8px}.toast-layout-stacked .toast-button-group-start{-webkit-margin-end:8px;margin-inline-end:8px;margin-top:8px}.toast-layout-baseline .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px}.toast-layout-stacked .toast-button-group-end{-webkit-margin-end:8px;margin-inline-end:8px;margin-bottom:8px}.toast-button{-webkit-padding-start:15px;padding-inline-start:15px;-webkit-padding-end:15px;padding-inline-end:15px;padding-top:10px;padding-bottom:10px;position:relative;background-color:transparent;font-family:var(--ion-font-family);font-size:14px;font-weight:500;letter-spacing:0.84px;text-transform:uppercase;overflow:hidden}.toast-button-cancel{color:var(--ion-color-step-100, #e6e6e6)}.toast-button-icon-only{border-radius:50%;-webkit-padding-start:9px;padding-inline-start:9px;-webkit-padding-end:9px;padding-inline-end:9px;padding-top:9px;padding-bottom:9px;width:36px;height:36px}@media (any-hover: hover){.toast-button:hover{background-color:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.08)}.toast-button-cancel:hover{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.08)}}";

const Toast = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.didPresent = index.createEvent(this, "ionToastDidPresent", 7);
    this.willPresent = index.createEvent(this, "ionToastWillPresent", 7);
    this.willDismiss = index.createEvent(this, "ionToastWillDismiss", 7);
    this.didDismiss = index.createEvent(this, "ionToastDidDismiss", 7);
    this.didPresentShorthand = index.createEvent(this, "didPresent", 7);
    this.willPresentShorthand = index.createEvent(this, "willPresent", 7);
    this.willDismissShorthand = index.createEvent(this, "willDismiss", 7);
    this.didDismissShorthand = index.createEvent(this, "didDismiss", 7);
    this.delegateController = overlays.createDelegateController(this);
    this.triggerController = overlays.createTriggerController();
    this.customHTMLEnabled = ionicGlobal.config.get('innerHTMLTemplatesEnabled', config.ENABLE_HTML_CONTENT_DEFAULT);
    this.presented = false;
    this.dispatchCancelHandler = (ev) => {
      const role = ev.detail.role;
      if (overlays.isCancel(role)) {
        const cancelButton = this.getButtons().find((b) => b.role === 'cancel');
        this.callButtonHandler(cancelButton);
      }
    };
    this.revealContentToScreenReader = false;
    this.overlayIndex = undefined;
    this.delegate = undefined;
    this.hasController = false;
    this.color = undefined;
    this.enterAnimation = undefined;
    this.leaveAnimation = undefined;
    this.cssClass = undefined;
    this.duration = ionicGlobal.config.getNumber('toastDuration', 0);
    this.header = undefined;
    this.layout = 'baseline';
    this.message = undefined;
    this.keyboardClose = false;
    this.position = 'bottom';
    this.buttons = undefined;
    this.translucent = false;
    this.animated = true;
    this.icon = undefined;
    this.htmlAttributes = undefined;
    this.isOpen = false;
    this.trigger = undefined;
  }
  onIsOpenChange(newValue, oldValue) {
    if (newValue === true && oldValue === false) {
      this.present();
    }
    else if (newValue === false && oldValue === true) {
      this.dismiss();
    }
  }
  triggerChanged() {
    const { trigger, el, triggerController } = this;
    if (trigger) {
      triggerController.addClickListener(el, trigger);
    }
  }
  connectedCallback() {
    overlays.prepareOverlay(this.el);
    this.triggerChanged();
  }
  disconnectedCallback() {
    this.triggerController.removeClickListener();
  }
  componentWillLoad() {
    overlays.setOverlayId(this.el);
  }
  componentDidLoad() {
    /**
     * If toast was rendered with isOpen="true"
     * then we should open toast immediately.
     */
    if (this.isOpen === true) {
      helpers.raf(() => this.present());
    }
  }
  /**
   * Present the toast overlay after it has been created.
   */
  async present() {
    /**
     * When using an inline toast
     * and dismissing a toast it is possible to
     * quickly present the toast while it is
     * dismissing. We need to await any current
     * transition to allow the dismiss to finish
     * before presenting again.
     */
    if (this.currentTransition !== undefined) {
      await this.currentTransition;
    }
    await this.delegateController.attachViewToDom();
    this.currentTransition = overlays.present(this, 'toastEnter', iosEnterAnimation, mdEnterAnimation, this.position);
    await this.currentTransition;
    /**
     * Content is revealed to screen readers after
     * the transition to avoid jank since this
     * state updates will cause a re-render.
     */
    this.revealContentToScreenReader = true;
    this.currentTransition = undefined;
    if (this.duration > 0) {
      this.durationTimeout = setTimeout(() => this.dismiss(undefined, 'timeout'), this.duration);
    }
  }
  /**
   * Dismiss the toast overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the toast.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the toast.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   */
  async dismiss(data, role) {
    if (this.durationTimeout) {
      clearTimeout(this.durationTimeout);
    }
    this.currentTransition = overlays.dismiss(this, data, role, 'toastLeave', iosLeaveAnimation, mdLeaveAnimation, this.position);
    const dismissed = await this.currentTransition;
    if (dismissed) {
      this.delegateController.removeViewFromDom();
      this.revealContentToScreenReader = false;
    }
    return dismissed;
  }
  /**
   * Returns a promise that resolves when the toast did dismiss.
   */
  onDidDismiss() {
    return overlays.eventMethod(this.el, 'ionToastDidDismiss');
  }
  /**
   * Returns a promise that resolves when the toast will dismiss.
   */
  onWillDismiss() {
    return overlays.eventMethod(this.el, 'ionToastWillDismiss');
  }
  getButtons() {
    const buttons = this.buttons
      ? this.buttons.map((b) => {
        return typeof b === 'string' ? { text: b } : b;
      })
      : [];
    return buttons;
  }
  async buttonClick(button) {
    const role = button.role;
    if (overlays.isCancel(role)) {
      return this.dismiss(undefined, role);
    }
    const shouldDismiss = await this.callButtonHandler(button);
    if (shouldDismiss) {
      return this.dismiss(undefined, role);
    }
    return Promise.resolve();
  }
  async callButtonHandler(button) {
    if (button === null || button === void 0 ? void 0 : button.handler) {
      // a handler has been provided, execute it
      // pass the handler the values from the inputs
      try {
        const rtn = await overlays.safeCall(button.handler);
        if (rtn === false) {
          // if the return value of the handler is false then do not dismiss
          return false;
        }
      }
      catch (e) {
        console.error(e);
      }
    }
    return true;
  }
  renderButtons(buttons, side) {
    if (buttons.length === 0) {
      return;
    }
    const mode = ionicGlobal.getIonMode(this);
    const buttonGroupsClasses = {
      'toast-button-group': true,
      [`toast-button-group-${side}`]: true,
    };
    return (index.h("div", { class: buttonGroupsClasses }, buttons.map((b) => (index.h("button", Object.assign({}, b.htmlAttributes, { type: "button", class: buttonClass(b), tabIndex: 0, onClick: () => this.buttonClick(b), part: buttonPart(b) }), index.h("div", { class: "toast-button-inner" }, b.icon && (index.h("ion-icon", { "aria-hidden": "true", icon: b.icon, slot: b.text === undefined ? 'icon-only' : undefined, class: "toast-button-icon" })), b.text), mode === 'md' && (index.h("ion-ripple-effect", { type: b.icon !== undefined && b.text === undefined ? 'unbounded' : 'bounded' })))))));
  }
  /**
   * Render the `message` property.
   * @param key - A key to give the element a stable identity. This is used to improve compatibility with screen readers.
   * @param ariaHidden - If "true" then content will be hidden from screen readers.
   */
  renderToastMessage(key, ariaHidden = null) {
    const { customHTMLEnabled, message } = this;
    if (customHTMLEnabled) {
      return (index.h("div", { key: key, "aria-hidden": ariaHidden, class: "toast-message", part: "message", innerHTML: config.sanitizeDOMString(message) }));
    }
    return (index.h("div", { key: key, "aria-hidden": ariaHidden, class: "toast-message", part: "message" }, message));
  }
  /**
   * Render the `header` property.
   * @param key - A key to give the element a stable identity. This is used to improve compatibility with screen readers.
   * @param ariaHidden - If "true" then content will be hidden from screen readers.
   */
  renderHeader(key, ariaHidden = null) {
    return (index.h("div", { key: key, class: "toast-header", "aria-hidden": ariaHidden, part: "header" }, this.header));
  }
  render() {
    const { layout, el, revealContentToScreenReader, header, message } = this;
    const allButtons = this.getButtons();
    const startButtons = allButtons.filter((b) => b.side === 'start');
    const endButtons = allButtons.filter((b) => b.side !== 'start');
    const mode = ionicGlobal.getIonMode(this);
    const wrapperClass = {
      'toast-wrapper': true,
      [`toast-${this.position}`]: true,
      [`toast-layout-${layout}`]: true,
    };
    /**
     * Stacked buttons are only meant to be
     *  used with one type of button.
     */
    if (layout === 'stacked' && startButtons.length > 0 && endButtons.length > 0) {
      index$1.printIonWarning('This toast is using start and end buttons with the stacked toast layout. We recommend following the best practice of using either start or end buttons with the stacked toast layout.', el);
    }
    return (index.h(index.Host, Object.assign({ tabindex: "-1" }, this.htmlAttributes, { style: {
        zIndex: `${60000 + this.overlayIndex}`,
      }, class: theme.createColorClasses(this.color, Object.assign(Object.assign({ [mode]: true }, theme.getClassMap(this.cssClass)), { 'overlay-hidden': true, 'toast-translucent': this.translucent })), onIonToastWillDismiss: this.dispatchCancelHandler }), index.h("div", { class: wrapperClass }, index.h("div", { class: "toast-container", part: "container" }, this.renderButtons(startButtons, 'start'), this.icon !== undefined && (index.h("ion-icon", { class: "toast-icon", part: "icon", icon: this.icon, lazy: false, "aria-hidden": "true" })), index.h("div", { class: "toast-content", role: "status", "aria-atomic": "true", "aria-live": "polite" }, !revealContentToScreenReader && header !== undefined && this.renderHeader('oldHeader', 'true'), !revealContentToScreenReader && message !== undefined && this.renderToastMessage('oldMessage', 'true'), revealContentToScreenReader && header !== undefined && this.renderHeader('header'), revealContentToScreenReader && message !== undefined && this.renderToastMessage('header')), this.renderButtons(endButtons, 'end')))));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "isOpen": ["onIsOpenChange"],
    "trigger": ["triggerChanged"]
  }; }
};
const buttonClass = (button) => {
  return Object.assign({ 'toast-button': true, 'toast-button-icon-only': button.icon !== undefined && button.text === undefined, [`toast-button-${button.role}`]: button.role !== undefined, 'ion-focusable': true, 'ion-activatable': true }, theme.getClassMap(button.cssClass));
};
const buttonPart = (button) => {
  return overlays.isCancel(button.role) ? 'button cancel' : 'button';
};
Toast.style = {
  ios: toastIosCss,
  md: toastMdCss
};

exports.ion_toast = Toast;
