/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-484b1104.js');
const formController = require('./form-controller-5e223b54.js');
const helpers = require('./helpers-ea4ccbcb.js');
const index$1 = require('./index-cc7dfb7c.js');
const theme = require('./theme-fbc56b3b.js');
const ionicGlobal = require('./ionic-global-f81d8b73.js');

const radioIosCss = ":host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;min-height:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(:not(.legacy-radio)){cursor:pointer}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host(.legacy-radio) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}@supports (inset-inline-start: 0){:host(.legacy-radio) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-radio) label{left:0}:host-context([dir=rtl]):host(.legacy-radio) label,:host-context([dir=rtl]).legacy-radio label{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.legacy-radio) label:dir(rtl){left:unset;right:unset;right:0}}}:host(.legacy-radio) label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host(.in-item:not(.legacy-radio)){width:100%;height:100%}:host([slot=start]:not(.legacy-radio)),:host([slot=end]:not(.legacy-radio)){width:auto}.radio-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;cursor:inherit}.label-text-wrapper{pointer-events:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item:not(.legacy-radio)) .label-text-wrapper{margin-top:10px;margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between) .radio-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.radio-justify-start) .radio-wrapper{-ms-flex-pack:start;justify-content:start}:host(.radio-justify-end) .radio-wrapper{-ms-flex-pack:end;justify-content:end}:host(.radio-label-placement-start) .radio-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.radio-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-end) .radio-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.radio-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px}:host{--color-checked:var(--ion-color-primary, #3880ff)}:host(.legacy-radio){width:15px;height:24px}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{-webkit-margin-start:0;margin-inline-start:0}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{-webkit-transform:rotate(45deg);transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:\"\";opacity:0.2}@supports (inset-inline-start: 0){:host(.ion-focused) .radio-icon::after{inset-inline-start:-9px}}@supports not (inset-inline-start: 0){:host(.ion-focused) .radio-icon::after{left:-9px}:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after,:host-context([dir=rtl]).ion-focused .radio-icon::after{left:unset;right:unset;right:-9px}@supports selector(:dir(rtl)){:host(.ion-focused) .radio-icon::after:dir(rtl){left:unset;right:unset;right:-9px}}}:host(.in-item.legacy-radio){-webkit-margin-start:8px;margin-inline-start:8px;-webkit-margin-end:11px;margin-inline-end:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}:host(.in-item.legacy-radio[slot=start]){-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px;margin-top:8px;margin-bottom:8px}.native-wrapper .radio-icon{width:15px;height:24px}";

const radioMdCss = ":host{--inner-border-radius:50%;display:inline-block;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box;max-width:100%;min-height:inherit;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(:not(.legacy-radio)){cursor:pointer}:host(.radio-disabled){pointer-events:none}.radio-icon{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{-webkit-box-sizing:border-box;box-sizing:border-box}:host(.legacy-radio) label{top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;opacity:0}@supports (inset-inline-start: 0){:host(.legacy-radio) label{inset-inline-start:0}}@supports not (inset-inline-start: 0){:host(.legacy-radio) label{left:0}:host-context([dir=rtl]):host(.legacy-radio) label,:host-context([dir=rtl]).legacy-radio label{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){:host(.legacy-radio) label:dir(rtl){left:unset;right:unset;right:0}}}:host(.legacy-radio) label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host(.in-item:not(.legacy-radio)){width:100%;height:100%}:host([slot=start]:not(.legacy-radio)),:host([slot=end]:not(.legacy-radio)){width:auto}.radio-wrapper{display:-ms-flexbox;display:flex;position:relative;-ms-flex-positive:1;flex-grow:1;-ms-flex-align:center;align-items:center;height:inherit;min-height:inherit;cursor:inherit}.label-text-wrapper{pointer-events:none;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host(.in-item:not(.legacy-radio)) .label-text-wrapper{margin-top:10px;margin-bottom:10px}.label-text-wrapper-hidden{display:none}.native-wrapper{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host(.radio-justify-space-between) .radio-wrapper{-ms-flex-pack:justify;justify-content:space-between}:host(.radio-justify-start) .radio-wrapper{-ms-flex-pack:start;justify-content:start}:host(.radio-justify-end) .radio-wrapper{-ms-flex-pack:end;justify-content:end}:host(.radio-label-placement-start) .radio-wrapper{-ms-flex-direction:row;flex-direction:row}:host(.radio-label-placement-start) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-end) .radio-wrapper{-ms-flex-direction:row-reverse;flex-direction:row-reverse}:host(.radio-label-placement-end) .label-text-wrapper{-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}:host(.radio-label-placement-fixed) .label-text-wrapper{-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}:host(.radio-label-placement-fixed) .label-text-wrapper{-ms-flex:0 0 100px;flex:0 0 100px;width:100px;min-width:100px}:host{--color:rgb(var(--ion-text-color-rgb, 0, 0, 0), 0.6);--color-checked:var(--ion-color-primary, #3880ff);--border-width:2px;--border-style:solid;--border-radius:50%}:host(.legacy-radio){width:20px;height:20px}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:var(--inner-border-radius);width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));-webkit-transform:scale3d(0, 0, 0);transform:scale3d(0, 0, 0);-webkit-transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:-webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1), -webkit-transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{-webkit-transform:scale3d(1, 1, 1);transform:scale3d(1, 1, 1)}:host(.legacy-radio.radio-disabled),:host(.radio-disabled) .label-text-wrapper{opacity:0.38}:host(.radio-disabled) .native-wrapper{opacity:0.63}:host(.ion-focused.legacy-radio) .radio-icon::after{top:-12px}@supports (inset-inline-start: 0){:host(.ion-focused.legacy-radio) .radio-icon::after{inset-inline-start:-12px}}@supports not (inset-inline-start: 0){:host(.ion-focused.legacy-radio) .radio-icon::after{left:-12px}:host-context([dir=rtl]):host(.ion-focused.legacy-radio) .radio-icon::after,:host-context([dir=rtl]).ion-focused.legacy-radio .radio-icon::after{left:unset;right:unset;right:-12px}@supports selector(:dir(rtl)){:host(.ion-focused.legacy-radio) .radio-icon::after:dir(rtl){left:unset;right:unset;right:-12px}}}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:\"\";opacity:0.2}:host(.in-item.legacy-radio){margin-left:0;margin-right:0;margin-top:9px;margin-bottom:9px;display:block;position:static}:host(.in-item.legacy-radio[slot=start]){-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px;margin-top:11px;margin-bottom:10px}.native-wrapper .radio-icon{width:20px;height:20px}";

const Radio = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ionStyle = index.createEvent(this, "ionStyle", 7);
    this.ionFocus = index.createEvent(this, "ionFocus", 7);
    this.ionBlur = index.createEvent(this, "ionBlur", 7);
    this.inputId = `ion-rb-${radioButtonIds++}`;
    this.radioGroup = null;
    // This flag ensures we log the deprecation warning at most once.
    this.hasLoggedDeprecationWarning = false;
    this.updateState = () => {
      if (this.radioGroup) {
        this.checked = this.radioGroup.value === this.value;
      }
    };
    this.onClick = () => {
      const { radioGroup, checked } = this;
      /**
       * The legacy control uses a native input inside
       * of the radio host, so we can set this.checked
       * to the state of the nativeInput. RadioGroup
       * will prevent the native input from checking if
       * allowEmptySelection="false" by calling ev.preventDefault().
       */
      if (this.legacyFormController.hasLegacyControl()) {
        this.checked = this.nativeInput.checked;
        return;
      }
      /**
       * The modern control does not use a native input
       * inside of the radio host, so we cannot rely on the
       * ev.preventDefault() behavior above. If the radio
       * is checked and the parent radio group allows for empty
       * selection, then we can set the checked state to false.
       * Otherwise, the checked state should always be set
       * to true because the checked state cannot be toggled.
       */
      if (checked && (radioGroup === null || radioGroup === void 0 ? void 0 : radioGroup.allowEmptySelection)) {
        this.checked = false;
      }
      else {
        this.checked = true;
      }
    };
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.checked = false;
    this.buttonTabindex = -1;
    this.color = undefined;
    this.name = this.inputId;
    this.disabled = false;
    this.value = undefined;
    this.labelPlacement = 'start';
    this.legacy = undefined;
    this.justify = 'space-between';
  }
  valueChanged() {
    /**
     * The new value of the radio may
     * match the radio group's value,
     * so we see if it should be checked.
     */
    this.updateState();
  }
  /** @internal */
  async setFocus(ev) {
    // TODO(FW-2832): type (using Event triggers a build error due to conflict with Stencil Event import)
    ev.stopPropagation();
    ev.preventDefault();
    this.el.focus();
  }
  /** @internal */
  async setButtonTabindex(value) {
    this.buttonTabindex = value;
  }
  connectedCallback() {
    this.legacyFormController = formController.createLegacyFormController(this.el);
    if (this.value === undefined) {
      this.value = this.inputId;
    }
    const radioGroup = (this.radioGroup = this.el.closest('ion-radio-group'));
    if (radioGroup) {
      this.updateState();
      helpers.addEventListener(radioGroup, 'ionValueChange', this.updateState);
    }
  }
  disconnectedCallback() {
    const radioGroup = this.radioGroup;
    if (radioGroup) {
      helpers.removeEventListener(radioGroup, 'ionValueChange', this.updateState);
      this.radioGroup = null;
    }
  }
  componentWillLoad() {
    this.emitStyle();
  }
  styleChanged() {
    this.emitStyle();
  }
  emitStyle() {
    const style = {
      'interactive-disabled': this.disabled,
    };
    if (this.legacyFormController.hasLegacyControl()) {
      style['radio-checked'] = this.checked;
    }
    this.ionStyle.emit(style);
  }
  get hasLabel() {
    return this.el.textContent !== '';
  }
  renderRadioControl() {
    return (index.h("div", { class: "radio-icon", part: "container" }, index.h("div", { class: "radio-inner", part: "mark" }), index.h("div", { class: "radio-ripple" })));
  }
  render() {
    const { legacyFormController } = this;
    return legacyFormController.hasLegacyControl() ? this.renderLegacyRadio() : this.renderRadio();
  }
  renderRadio() {
    const { checked, disabled, color, el, justify, labelPlacement, hasLabel, buttonTabindex } = this;
    const mode = ionicGlobal.getIonMode(this);
    const inItem = theme.hostContext('ion-item', el);
    return (index.h(index.Host, { onFocus: this.onFocus, onBlur: this.onBlur, onClick: this.onClick, class: theme.createColorClasses(color, {
        [mode]: true,
        'in-item': inItem,
        'radio-checked': checked,
        'radio-disabled': disabled,
        [`radio-justify-${justify}`]: true,
        [`radio-label-placement-${labelPlacement}`]: true,
        // Focus and active styling should not apply when the radio is in an item
        'ion-activatable': !inItem,
        'ion-focusable': !inItem,
      }), role: "radio", "aria-checked": checked ? 'true' : 'false', "aria-disabled": disabled ? 'true' : null, tabindex: buttonTabindex }, index.h("label", { class: "radio-wrapper" }, index.h("div", { class: {
        'label-text-wrapper': true,
        'label-text-wrapper-hidden': !hasLabel,
      } }, index.h("slot", null)), index.h("div", { class: "native-wrapper" }, this.renderRadioControl()))));
  }
  renderLegacyRadio() {
    if (!this.hasLoggedDeprecationWarning) {
      index$1.printIonWarning(`ion-radio now requires providing a label with either the default slot or the "aria-label" attribute. To migrate, remove any usage of "ion-label" and pass the label text to either the component or the "aria-label" attribute.

Example: <ion-radio>Option Label</ion-radio>
Example with aria-label: <ion-radio aria-label="Option Label"></ion-radio>

Developers can use the "legacy" property to continue using the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.`, this.el);
      if (this.legacy) {
        index$1.printIonWarning(`ion-radio is being used with the "legacy" property enabled which will forcibly enable the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.

Developers can dismiss this warning by removing their usage of the "legacy" property and using the new radio syntax.`, this.el);
      }
      this.hasLoggedDeprecationWarning = true;
    }
    const { inputId, disabled, checked, color, el, buttonTabindex } = this;
    const mode = ionicGlobal.getIonMode(this);
    const { label, labelId, labelText } = helpers.getAriaLabel(el, inputId);
    return (index.h(index.Host, { "aria-checked": `${checked}`, "aria-hidden": disabled ? 'true' : null, "aria-labelledby": label ? labelId : null, role: "radio", tabindex: buttonTabindex, onFocus: this.onFocus, onBlur: this.onBlur, onClick: this.onClick, class: theme.createColorClasses(color, {
        [mode]: true,
        'in-item': theme.hostContext('ion-item', el),
        interactive: true,
        'radio-checked': checked,
        'radio-disabled': disabled,
        'legacy-radio': true,
      }) }, this.renderRadioControl(), index.h("label", { htmlFor: inputId }, labelText), index.h("input", { type: "radio", checked: checked, disabled: disabled, tabindex: "-1", id: inputId, ref: (nativeEl) => (this.nativeInput = nativeEl) })));
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "value": ["valueChanged"],
    "checked": ["styleChanged"],
    "color": ["styleChanged"],
    "disabled": ["styleChanged"]
  }; }
};
let radioButtonIds = 0;
Radio.style = {
  ios: radioIosCss,
  md: radioMdCss
};

const RadioGroup = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.ionChange = index.createEvent(this, "ionChange", 7);
    this.ionValueChange = index.createEvent(this, "ionValueChange", 7);
    this.inputId = `ion-rg-${radioGroupIds++}`;
    this.labelId = `${this.inputId}-lbl`;
    this.setRadioTabindex = (value) => {
      const radios = this.getRadios();
      // Get the first radio that is not disabled and the checked one
      const first = radios.find((radio) => !radio.disabled);
      const checked = radios.find((radio) => radio.value === value && !radio.disabled);
      if (!first && !checked) {
        return;
      }
      // If an enabled checked radio exists, set it to be the focusable radio
      // otherwise we default to focus the first radio
      const focusable = checked || first;
      for (const radio of radios) {
        const tabindex = radio === focusable ? 0 : -1;
        radio.setButtonTabindex(tabindex);
      }
    };
    this.onClick = (ev) => {
      ev.preventDefault();
      /**
       * The Radio Group component mandates that only one radio button
       * within the group can be selected at any given time. Since `ion-radio`
       * is a shadow DOM component, it cannot natively perform this behavior
       * using the `name` attribute.
       */
      const selectedRadio = ev.target && ev.target.closest('ion-radio');
      if (selectedRadio) {
        const currentValue = this.value;
        const newValue = selectedRadio.value;
        if (newValue !== currentValue) {
          this.value = newValue;
          this.emitValueChange(ev);
        }
        else if (this.allowEmptySelection) {
          this.value = undefined;
          this.emitValueChange(ev);
        }
      }
    };
    this.allowEmptySelection = false;
    this.name = this.inputId;
    this.value = undefined;
  }
  valueChanged(value) {
    this.setRadioTabindex(value);
    this.ionValueChange.emit({ value });
  }
  componentDidLoad() {
    this.setRadioTabindex(this.value);
  }
  async connectedCallback() {
    // Get the list header if it exists and set the id
    // this is used to set aria-labelledby
    const header = this.el.querySelector('ion-list-header') || this.el.querySelector('ion-item-divider');
    if (header) {
      const label = (this.label = header.querySelector('ion-label'));
      if (label) {
        this.labelId = label.id = this.name + '-lbl';
      }
    }
  }
  getRadios() {
    return Array.from(this.el.querySelectorAll('ion-radio'));
  }
  /**
   * Emits an `ionChange` event.
   *
   * This API should be called for user committed changes.
   * This API should not be used for external value changes.
   */
  emitValueChange(event) {
    const { value } = this;
    this.ionChange.emit({ value, event });
  }
  onKeydown(ev) {
    const inSelectPopover = !!this.el.closest('ion-select-popover');
    if (ev.target && !this.el.contains(ev.target)) {
      return;
    }
    // Get all radios inside of the radio group and then
    // filter out disabled radios since we need to skip those
    const radios = this.getRadios().filter((radio) => !radio.disabled);
    // Only move the radio if the current focus is in the radio group
    if (ev.target && radios.includes(ev.target)) {
      const index = radios.findIndex((radio) => radio === ev.target);
      const current = radios[index];
      let next;
      // If hitting arrow down or arrow right, move to the next radio
      // If we're on the last radio, move to the first radio
      if (['ArrowDown', 'ArrowRight'].includes(ev.key)) {
        next = index === radios.length - 1 ? radios[0] : radios[index + 1];
      }
      // If hitting arrow up or arrow left, move to the previous radio
      // If we're on the first radio, move to the last radio
      if (['ArrowUp', 'ArrowLeft'].includes(ev.key)) {
        next = index === 0 ? radios[radios.length - 1] : radios[index - 1];
      }
      if (next && radios.includes(next)) {
        next.setFocus(ev);
        if (!inSelectPopover) {
          this.value = next.value;
          this.emitValueChange(ev);
        }
      }
      // Update the radio group value when a user presses the
      // space bar on top of a selected radio
      if ([' '].includes(ev.key)) {
        const previousValue = this.value;
        this.value = this.allowEmptySelection && this.value !== undefined ? undefined : current.value;
        if (previousValue !== this.value || this.allowEmptySelection) {
          /**
           * Value change should only be emitted if the value is different,
           * such as selecting a new radio with the space bar or if
           * the radio group allows for empty selection and the user
           * is deselecting a checked radio.
           */
          this.emitValueChange(ev);
        }
        // Prevent browsers from jumping
        // to the bottom of the screen
        ev.preventDefault();
      }
    }
  }
  render() {
    const { label, labelId, el, name, value } = this;
    const mode = ionicGlobal.getIonMode(this);
    helpers.renderHiddenInput(true, el, name, value, false);
    return index.h(index.Host, { role: "radiogroup", "aria-labelledby": label ? labelId : null, onClick: this.onClick, class: mode });
  }
  get el() { return index.getElement(this); }
  static get watchers() { return {
    "value": ["valueChanged"]
  }; }
};
let radioGroupIds = 0;

exports.ion_radio = Radio;
exports.ion_radio_group = RadioGroup;
