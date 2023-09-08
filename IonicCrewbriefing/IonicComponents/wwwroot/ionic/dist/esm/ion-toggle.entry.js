/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, d as createEvent, h, H as Host, f as getElement } from './index-847f2fde.js';
import { c as createLegacyFormController } from './form-controller-ed77647a.js';
import { i as inheritAriaAttributes, d as renderHiddenInput, e as getAriaLabel } from './helpers-3379ba19.js';
import { p as printIonWarning } from './index-595d62c9.js';
import { c as hapticSelection } from './haptic-6447af60.js';
import { i as isRTL } from './dir-912e3e13.js';
import { c as createColorClasses, h as hostContext } from './theme-17531cdf.js';
import { f as checkmarkOutline, r as removeOutline, g as ellipseOutline } from './index-ecfc2c9f.js';
import { c as config, b as getIonMode } from './ionic-global-1ef19007.js';
import './capacitor-b4979570.js';
import './index-7a14ecec.js';

const toggleIosCss = ":host{-webkit-box-sizing:content-box !important;box-sizing:content-box !important;display:inline-block;position:relative;max-width:100%;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.in-item:not(.legacy-toggle)){width:100%;height:100%}:host([slot=start]:not(.legacy-toggle)),:host([slot=end]:not(.legacy-toggle)){width:auto}:host(.legacy-toggle){contain:content;-ms-touch-action:none;touch-action:none}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}:host(.legacy-toggle) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0;pointer-events:none}@supports (inset-inline-start: 0){:host(.legacy-toggle) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-toggle) label{left:0}:host-context([dir=rtl]):host(.legacy-toggle) label,:host-context([dir=rtl]).legacy-toggle label{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.legacy-toggle) label:dir(rtl){left:unset;right:unset;right:0}}}:host(.legacy-toggle) label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.toggle-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;cursor:inherit}.label-text-wrapper{pointer-events:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item:not(.legacy-toggle)) .label-text-wrapper{margin-top:10px;margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.toggle-justify-space-between) .toggle-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.toggle-justify-start) .toggle-wrapper{-ms-flex-pack:start;justify-content:start}:host(.toggle-justify-end) .toggle-wrapper{-ms-flex-pack:end;justify-content:end}:host(.toggle-label-placement-start) .toggle-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.toggle-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.toggle-label-placement-end) .toggle-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.toggle-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.toggle-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.toggle-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.toggle-icon-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;-webkit-transition:var(--handle-transition);transition:var(--handle-transition);will-change:transform}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;background:var(--track-background);overflow:inherit}:host(.toggle-checked) .toggle-icon{background:var(--track-background-checked)}.toggle-inner{border-radius:var(--handle-border-radius);position:absolute;left:var(--handle-spacing);width:var(--handle-width);height:var(--handle-height);max-height:var(--handle-max-height);-webkit-transition:var(--handle-transition);transition:var(--handle-transition);background:var(--handle-background);-webkit-box-shadow:var(--handle-box-shadow);box-shadow:var(--handle-box-shadow);contain:strict}:host(.toggle-ltr) .toggle-inner{left:var(--handle-spacing)}:host(.toggle-rtl) .toggle-inner{right:var(--handle-spacing)}:host(.toggle-ltr.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width)), 0, 0);transform:translate3d(calc(100% - var(--handle-width)), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width)), 0, 0);transform:translate3d(calc(-100% + var(--handle-width)), 0, 0)}:host(.toggle-checked) .toggle-inner{background:var(--handle-background-checked)}:host(.toggle-ltr.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0)}:host{--track-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.088);--track-background-checked:var(--ion-color-primary, #3880ff);--border-radius:16px;--handle-background:#ffffff;--handle-background-checked:#ffffff;--handle-border-radius:25.5px;--handle-box-shadow:0 3px 12px rgba(0, 0, 0, 0.16), 0 3px 1px rgba(0, 0, 0, 0.1);--handle-height:calc(32px - (2px * 2));--handle-max-height:calc(100% - var(--handle-spacing) * 2);--handle-width:calc(32px - (2px * 2));--handle-spacing:2px;--handle-transition:transform 300ms, width 120ms ease-in-out 80ms, left 110ms ease-in-out 80ms, right 110ms ease-in-out 80ms}:host(.legacy-toggle){width:51px;height:32px;contain:strict;overflow:hidden}.native-wrapper .toggle-icon{width:51px;height:32px;overflow:hidden}:host(.ion-color.toggle-checked) .toggle-icon{background:var(--ion-color-base)}:host(.toggle-activated) .toggle-switch-icon{opacity:0}.toggle-icon{-webkit-transform:translate3d(0, 0, 0);transform:translate3d(0, 0, 0);-webkit-transition:background-color 300ms;transition:background-color 300ms}.toggle-inner{will-change:transform}.toggle-switch-icon{position:absolute;top:50%;width:11px;height:11px;-webkit-transform:translateY(-50%);transform:translateY(-50%);-webkit-transition:opacity 300ms, color 300ms;transition:opacity 300ms, color 300ms}.toggle-switch-icon{position:absolute;color:var(--ion-color-dark)}:host(.toggle-ltr) .toggle-switch-icon{right:6px}:host(.toggle-rtl) .toggle-switch-icon{right:initial;left:6px;}:host(.toggle-checked) .toggle-switch-icon.toggle-switch-icon-checked{color:var(--ion-color-contrast, #fff)}:host(.toggle-checked) .toggle-switch-icon:not(.toggle-switch-icon-checked){opacity:0}.toggle-switch-icon-checked{position:absolute;width:15px;height:15px;-webkit-transform:translateY(-50%) rotate(90deg);transform:translateY(-50%) rotate(90deg)}:host(.toggle-ltr) .toggle-switch-icon-checked{right:initial;left:4px;}:host(.toggle-rtl) .toggle-switch-icon-checked{right:4px}:host(.toggle-activated) .toggle-icon::before,:host(.toggle-checked) .toggle-icon::before{-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0)}:host(.toggle-activated.toggle-checked) .toggle-inner::before{-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0)}:host(.toggle-activated) .toggle-inner{width:calc(var(--handle-width) + 6px)}:host(.toggle-ltr.toggle-activated.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width) - 6px), 0, 0);transform:translate3d(calc(100% - var(--handle-width) - 6px), 0, 0)}:host(.toggle-rtl.toggle-activated.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width) + 6px), 0, 0);transform:translate3d(calc(-100% + var(--handle-width) + 6px), 0, 0)}:host(.toggle-disabled){opacity:0.3}:host(.in-item.legacy-toggle){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:0;padding-inline-end:0;padding-top:6px;padding-bottom:5px}:host(.in-item.legacy-toggle[slot=start]){-webkit-padding-start:0;padding-inline-start:0;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:6px;padding-bottom:5px}";

const toggleMdCss = ":host{-webkit-box-sizing:content-box !important;box-sizing:content-box !important;display:inline-block;position:relative;max-width:100%;outline:none;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.in-item:not(.legacy-toggle)){width:100%;height:100%}:host([slot=start]:not(.legacy-toggle)),:host([slot=end]:not(.legacy-toggle)){width:auto}:host(.legacy-toggle){contain:content;-ms-touch-action:none;touch-action:none}:host(.ion-focused) input{border:2px solid #5e9ed6}:host(.toggle-disabled){pointer-events:none}:host(.legacy-toggle) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0;pointer-events:none}@supports (inset-inline-start: 0){:host(.legacy-toggle) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-toggle) label{left:0}:host-context([dir=rtl]):host(.legacy-toggle) label,:host-context([dir=rtl]).legacy-toggle label{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.legacy-toggle) label:dir(rtl){left:unset;right:unset;right:0}}}:host(.legacy-toggle) label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.toggle-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;-webkit-transition:background-color 15ms linear;transition:background-color 15ms linear;cursor:inherit}.label-text-wrapper{pointer-events:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item:not(.legacy-toggle)) .label-text-wrapper{margin-top:10px;margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.toggle-justify-space-between) .toggle-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.toggle-justify-start) .toggle-wrapper{-ms-flex-pack:start;justify-content:start}:host(.toggle-justify-end) .toggle-wrapper{-ms-flex-pack:end;justify-content:end}:host(.toggle-label-placement-start) .toggle-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.toggle-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.toggle-label-placement-end) .toggle-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.toggle-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.toggle-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.toggle-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px;max-width:200px}.toggle-icon-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;width:100%;height:100%;-webkit-transition:var(--handle-transition);transition:var(--handle-transition);will-change:transform}.toggle-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;background:var(--track-background);overflow:inherit}:host(.toggle-checked) .toggle-icon{background:var(--track-background-checked)}.toggle-inner{border-radius:var(--handle-border-radius);position:absolute;left:var(--handle-spacing);width:var(--handle-width);height:var(--handle-height);max-height:var(--handle-max-height);-webkit-transition:var(--handle-transition);transition:var(--handle-transition);background:var(--handle-background);-webkit-box-shadow:var(--handle-box-shadow);box-shadow:var(--handle-box-shadow);contain:strict}:host(.toggle-ltr) .toggle-inner{left:var(--handle-spacing)}:host(.toggle-rtl) .toggle-inner{right:var(--handle-spacing)}:host(.toggle-ltr.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(100% - var(--handle-width)), 0, 0);transform:translate3d(calc(100% - var(--handle-width)), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-icon-wrapper{-webkit-transform:translate3d(calc(-100% + var(--handle-width)), 0, 0);transform:translate3d(calc(-100% + var(--handle-width)), 0, 0)}:host(.toggle-checked) .toggle-inner{background:var(--handle-background-checked)}:host(.toggle-ltr.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * -2), 0, 0)}:host(.toggle-rtl.toggle-checked) .toggle-inner{-webkit-transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0);transform:translate3d(calc(var(--handle-spacing) * 2), 0, 0)}:host{--track-background:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.39);--track-background-checked:rgba(var(--ion-color-primary-rgb, 56, 128, 255), 0.5);--border-radius:14px;--handle-background:#ffffff;--handle-background-checked:var(--ion-color-primary, #3880ff);--handle-border-radius:50%;--handle-box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);--handle-width:20px;--handle-height:20px;--handle-max-height:calc(100% + 6px);--handle-spacing:0;--handle-transition:transform 160ms cubic-bezier(0.4, 0, 0.2, 1), background-color 160ms cubic-bezier(0.4, 0, 0.2, 1)}:host(.legacy-toggle){-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:12px;padding-bottom:12px;width:36px;height:14px;contain:strict}.native-wrapper .toggle-icon{width:36px;height:14px}:host(.ion-color.toggle-checked) .toggle-icon{background:rgba(var(--ion-color-base-rgb), 0.5)}:host(.ion-color.toggle-checked) .toggle-inner{background:var(--ion-color-base)}:host(.toggle-checked) .toggle-inner{color:var(--ion-color-contrast, #fff)}.toggle-icon{-webkit-transition:background-color 160ms;transition:background-color 160ms}.toggle-inner{will-change:background-color, transform;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;color:#000}.toggle-inner .toggle-switch-icon{-webkit-padding-start:1px;padding-inline-start:1px;-webkit-padding-end:1px;padding-inline-end:1px;padding-top:1px;padding-bottom:1px;width:100%;height:100%}:host(.toggle-disabled){opacity:0.38}:host(.in-item.legacy-toggle){margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:0;padding-inline-end:0;padding-top:12px;padding-bottom:12px;cursor:pointer}:host(.in-item.legacy-toggle[slot=start]){-webkit-padding-start:2px;padding-inline-start:2px;-webkit-padding-end:18px;padding-inline-end:18px;padding-top:12px;padding-bottom:12px}";

const Toggle = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionChange = createEvent(this, "ionChange", 7);
    this.ionFocus = createEvent(this, "ionFocus", 7);
    this.ionBlur = createEvent(this, "ionBlur", 7);
    this.ionStyle = createEvent(this, "ionStyle", 7);
    this.inputId = `ion-tg-${toggleIds++}`;
    this.lastDrag = 0;
    this.inheritedAttributes = {};
    this.didLoad = false;
    // This flag ensures we log the deprecation warning at most once.
    this.hasLoggedDeprecationWarning = false;
    this.setupGesture = async () => {
      const { toggleTrack } = this;
      if (toggleTrack) {
        this.gesture = (await import('./index-ff313b19.js')).createGesture({
          el: toggleTrack,
          gestureName: 'toggle',
          gesturePriority: 100,
          threshold: 5,
          passive: false,
          onStart: () => this.onStart(),
          onMove: (ev) => this.onMove(ev),
          onEnd: (ev) => this.onEnd(ev),
        });
        this.disabledChanged();
      }
    };
    this.onClick = (ev) => {
      ev.preventDefault();
      if (this.lastDrag + 300 < Date.now()) {
        this.toggleChecked();
      }
    };
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.getSwitchLabelIcon = (mode, checked) => {
      if (mode === 'md') {
        return checked ? checkmarkOutline : removeOutline;
      }
      return checked ? removeOutline : ellipseOutline;
    };
    this.activated = false;
    this.color = undefined;
    this.name = this.inputId;
    this.checked = false;
    this.disabled = false;
    this.value = 'on';
    this.enableOnOffLabels = config.get('toggleOnOffLabels');
    this.labelPlacement = 'start';
    this.legacy = undefined;
    this.justify = 'space-between';
  }
  disabledChanged() {
    this.emitStyle();
    if (this.gesture) {
      this.gesture.enable(!this.disabled);
    }
  }
  toggleChecked() {
    const { checked, value } = this;
    const isNowChecked = !checked;
    this.checked = isNowChecked;
    this.ionChange.emit({
      checked: isNowChecked,
      value,
    });
  }
  async connectedCallback() {
    this.legacyFormController = createLegacyFormController(this.el);
    /**
     * If we have not yet rendered
     * ion-toggle, then toggleTrack is not defined.
     * But if we are moving ion-toggle via appendChild,
     * then toggleTrack will be defined.
     */
    if (this.didLoad) {
      this.setupGesture();
    }
  }
  componentDidLoad() {
    this.setupGesture();
    this.didLoad = true;
  }
  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
  }
  componentWillLoad() {
    this.emitStyle();
    if (!this.legacyFormController.hasLegacyControl()) {
      this.inheritedAttributes = Object.assign({}, inheritAriaAttributes(this.el));
    }
  }
  emitStyle() {
    if (this.legacyFormController.hasLegacyControl()) {
      this.ionStyle.emit({
        'interactive-disabled': this.disabled,
      });
    }
  }
  onStart() {
    this.activated = true;
    // touch-action does not work in iOS
    this.setFocus();
  }
  onMove(detail) {
    if (shouldToggle(isRTL(this.el), this.checked, detail.deltaX, -10)) {
      this.toggleChecked();
      hapticSelection();
    }
  }
  onEnd(ev) {
    this.activated = false;
    this.lastDrag = Date.now();
    ev.event.preventDefault();
    ev.event.stopImmediatePropagation();
  }
  getValue() {
    return this.value || '';
  }
  setFocus() {
    if (this.focusEl) {
      this.focusEl.focus();
    }
  }
  renderOnOffSwitchLabels(mode, checked) {
    const icon = this.getSwitchLabelIcon(mode, checked);
    return (h("ion-icon", { class: {
        'toggle-switch-icon': true,
        'toggle-switch-icon-checked': checked,
      }, icon: icon, "aria-hidden": "true" }));
  }
  renderToggleControl() {
    const mode = getIonMode(this);
    const { enableOnOffLabels, checked } = this;
    return (h("div", { class: "toggle-icon", part: "track", ref: (el) => (this.toggleTrack = el) }, enableOnOffLabels &&
      mode === 'ios' && [this.renderOnOffSwitchLabels(mode, true), this.renderOnOffSwitchLabels(mode, false)], h("div", { class: "toggle-icon-wrapper" }, h("div", { class: "toggle-inner", part: "handle" }, enableOnOffLabels && mode === 'md' && this.renderOnOffSwitchLabels(mode, checked)))));
  }
  get hasLabel() {
    return this.el.textContent !== '';
  }
  render() {
    const { legacyFormController } = this;
    return legacyFormController.hasLegacyControl() ? this.renderLegacyToggle() : this.renderToggle();
  }
  renderToggle() {
    const { activated, color, checked, disabled, el, justify, labelPlacement, inputId, name } = this;
    const mode = getIonMode(this);
    const value = this.getValue();
    const rtl = isRTL(el) ? 'rtl' : 'ltr';
    renderHiddenInput(true, el, name, checked ? value : '', disabled);
    return (h(Host, { onClick: this.onClick, class: createColorClasses(color, {
        [mode]: true,
        'in-item': hostContext('ion-item', el),
        'toggle-activated': activated,
        'toggle-checked': checked,
        'toggle-disabled': disabled,
        [`toggle-justify-${justify}`]: true,
        [`toggle-label-placement-${labelPlacement}`]: true,
        [`toggle-${rtl}`]: true,
      }) }, h("label", { class: "toggle-wrapper" }, h("input", Object.assign({ type: "checkbox", role: "switch", "aria-checked": `${checked}`, checked: checked, disabled: disabled, id: inputId, onFocus: () => this.onFocus(), onBlur: () => this.onBlur(), ref: (focusEl) => (this.focusEl = focusEl) }, this.inheritedAttributes)), h("div", { class: {
        'label-text-wrapper': true,
        'label-text-wrapper-hidden': !this.hasLabel,
      } }, h("slot", null)), h("div", { class: "native-wrapper" }, this.renderToggleControl()))));
  }
  renderLegacyToggle() {
    if (!this.hasLoggedDeprecationWarning) {
      printIonWarning(`ion-toggle now requires providing a label with either the default slot or the "aria-label" attribute. To migrate, remove any usage of "ion-label" and pass the label text to either the component or the "aria-label" attribute.

Example: <ion-toggle>Email</ion-toggle>
Example with aria-label: <ion-toggle aria-label="Email"></ion-toggle>

Developers can use the "legacy" property to continue using the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.`, this.el);
      if (this.legacy) {
        printIonWarning(`ion-toggle is being used with the "legacy" property enabled which will forcibly enable the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.

Developers can dismiss this warning by removing their usage of the "legacy" property and using the new toggle syntax.`, this.el);
      }
      this.hasLoggedDeprecationWarning = true;
    }
    const { activated, color, checked, disabled, el, inputId, name } = this;
    const mode = getIonMode(this);
    const { label, labelId, labelText } = getAriaLabel(el, inputId);
    const value = this.getValue();
    const rtl = isRTL(el) ? 'rtl' : 'ltr';
    renderHiddenInput(true, el, name, checked ? value : '', disabled);
    return (h(Host, { onClick: this.onClick, "aria-labelledby": label ? labelId : null, "aria-checked": `${checked}`, "aria-hidden": disabled ? 'true' : null, role: "switch", class: createColorClasses(color, {
        [mode]: true,
        'in-item': hostContext('ion-item', el),
        'toggle-activated': activated,
        'toggle-checked': checked,
        'toggle-disabled': disabled,
        'legacy-toggle': true,
        interactive: true,
        [`toggle-${rtl}`]: true,
      }) }, this.renderToggleControl(), h("label", { htmlFor: inputId }, labelText), h("input", { type: "checkbox", role: "switch", "aria-checked": `${checked}`, disabled: disabled, id: inputId, onFocus: () => this.onFocus(), onBlur: () => this.onBlur(), ref: (focusEl) => (this.focusEl = focusEl) })));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "disabled": ["disabledChanged"]
  }; }
};
const shouldToggle = (rtl, checked, deltaX, margin) => {
  if (checked) {
    return (!rtl && margin > deltaX) || (rtl && -margin < deltaX);
  }
  else {
    return (!rtl && -margin < deltaX) || (rtl && margin > deltaX);
  }
};
let toggleIds = 0;
Toggle.style = {
  ios: toggleIosCss,
  md: toggleMdCss
};

export { Toggle as ion_toggle };
