/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from "@stencil/core";
import { findClosestIonContent, disableContentScrollY, resetContentScrollY } from "../../utils/content/index";
import { createLegacyFormController } from "../../utils/forms/index";
import { inheritAriaAttributes, clamp, debounceEvent, getAriaLabel, renderHiddenInput } from "../../utils/helpers";
import { printIonWarning } from "../../utils/logging/index";
import { isRTL } from "../../utils/rtl/index";
import { createColorClasses, hostContext } from "../../utils/theme";
import { getIonMode } from "../../global/ionic-global";
import { roundToMaxDecimalPlaces } from "../../utils/floating-point";
// TODO(FW-2832): types
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @slot label - The label text to associate with the range. Use the "labelPlacement" property to control where the label is placed relative to the range.
 * @slot start - Content is placed to the left of the range slider in LTR, and to the right in RTL.
 * @slot end - Content is placed to the right of the range slider in LTR, and to the left in RTL.
 *
 * @part tick - An inactive tick mark.
 * @part tick-active - An active tick mark.
 * @part pin - The counter that appears above a knob.
 * @part knob - The handle that is used to drag the range.
 * @part bar - The inactive part of the bar.
 * @part bar-active - The active part of the bar.
 */
export class Range {
  constructor() {
    this.rangeId = `ion-r-${rangeIds++}`;
    this.didLoad = false;
    this.noUpdate = false;
    this.hasFocus = false;
    this.inheritedAttributes = {};
    this.contentEl = null;
    this.initialContentScrollY = true;
    // This flag ensures we log the deprecation warning at most once.
    this.hasLoggedDeprecationWarning = false;
    this.clampBounds = (value) => {
      return clamp(this.min, value, this.max);
    };
    this.ensureValueInBounds = (value) => {
      if (this.dualKnobs) {
        return {
          lower: this.clampBounds(value.lower),
          upper: this.clampBounds(value.upper),
        };
      }
      else {
        return this.clampBounds(value);
      }
    };
    this.setupGesture = async () => {
      const rangeSlider = this.rangeSlider;
      if (rangeSlider) {
        this.gesture = (await import('../../utils/gesture')).createGesture({
          el: rangeSlider,
          gestureName: 'range',
          gesturePriority: 100,
          threshold: 0,
          onStart: (ev) => this.onStart(ev),
          onMove: (ev) => this.onMove(ev),
          onEnd: (ev) => this.onEnd(ev),
        });
        this.gesture.enable(!this.disabled);
      }
    };
    this.handleKeyboard = (knob, isIncrease) => {
      const { ensureValueInBounds } = this;
      let step = this.step;
      step = step > 0 ? step : 1;
      step = step / (this.max - this.min);
      if (!isIncrease) {
        step *= -1;
      }
      if (knob === 'A') {
        this.ratioA = clamp(0, this.ratioA + step, 1);
      }
      else {
        this.ratioB = clamp(0, this.ratioB + step, 1);
      }
      this.ionKnobMoveStart.emit({ value: ensureValueInBounds(this.value) });
      this.updateValue();
      this.emitValueChange();
      this.ionKnobMoveEnd.emit({ value: ensureValueInBounds(this.value) });
    };
    this.onBlur = () => {
      if (this.hasFocus) {
        this.hasFocus = false;
        this.ionBlur.emit();
        this.emitStyle();
      }
    };
    this.onFocus = () => {
      if (!this.hasFocus) {
        this.hasFocus = true;
        this.ionFocus.emit();
        this.emitStyle();
      }
    };
    this.ratioA = 0;
    this.ratioB = 0;
    this.pressedKnob = undefined;
    this.color = undefined;
    this.debounce = undefined;
    this.name = this.rangeId;
    this.label = undefined;
    this.dualKnobs = false;
    this.min = 0;
    this.max = 100;
    this.pin = false;
    this.pinFormatter = (value) => Math.round(value);
    this.snaps = false;
    this.step = 1;
    this.ticks = true;
    this.activeBarStart = undefined;
    this.disabled = false;
    this.value = 0;
    this.labelPlacement = 'start';
    this.legacy = undefined;
  }
  debounceChanged() {
    const { ionInput, debounce, originalIonInput } = this;
    /**
     * If debounce is undefined, we have to manually revert the ionInput emitter in case
     * debounce used to be set to a number. Otherwise, the event would stay debounced.
     */
    this.ionInput = debounce === undefined ? originalIonInput !== null && originalIonInput !== void 0 ? originalIonInput : ionInput : debounceEvent(ionInput, debounce);
  }
  minChanged() {
    if (!this.noUpdate) {
      this.updateRatio();
    }
  }
  maxChanged() {
    if (!this.noUpdate) {
      this.updateRatio();
    }
  }
  activeBarStartChanged() {
    const { activeBarStart } = this;
    if (activeBarStart !== undefined) {
      if (activeBarStart > this.max) {
        printIonWarning(`Range: The value of activeBarStart (${activeBarStart}) is greater than the max (${this.max}). Valid values are greater than or equal to the min value and less than or equal to the max value.`, this.el);
        this.activeBarStart = this.max;
      }
      else if (activeBarStart < this.min) {
        printIonWarning(`Range: The value of activeBarStart (${activeBarStart}) is less than the min (${this.min}). Valid values are greater than or equal to the min value and less than or equal to the max value.`, this.el);
        this.activeBarStart = this.min;
      }
    }
  }
  disabledChanged() {
    if (this.gesture) {
      this.gesture.enable(!this.disabled);
    }
    this.emitStyle();
  }
  valueChanged() {
    if (!this.noUpdate) {
      this.updateRatio();
    }
  }
  componentWillLoad() {
    /**
     * If user has custom ID set then we should
     * not assign the default incrementing ID.
     */
    if (this.el.hasAttribute('id')) {
      this.rangeId = this.el.getAttribute('id');
    }
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }
  componentDidLoad() {
    this.originalIonInput = this.ionInput;
    this.setupGesture();
    this.didLoad = true;
  }
  connectedCallback() {
    const { el } = this;
    this.legacyFormController = createLegacyFormController(el);
    this.updateRatio();
    this.debounceChanged();
    this.disabledChanged();
    this.activeBarStartChanged();
    /**
     * If we have not yet rendered
     * ion-range, then rangeSlider is not defined.
     * But if we are moving ion-range via appendChild,
     * then rangeSlider will be defined.
     */
    if (this.didLoad) {
      this.setupGesture();
    }
    this.contentEl = findClosestIonContent(this.el);
  }
  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
  }
  getValue() {
    var _a;
    const value = (_a = this.value) !== null && _a !== void 0 ? _a : 0;
    if (this.dualKnobs) {
      if (typeof value === 'object') {
        return value;
      }
      return {
        lower: 0,
        upper: value,
      };
    }
    else {
      if (typeof value === 'object') {
        return value.upper;
      }
      return value;
    }
  }
  // TODO FW-2997 remove this
  emitStyle() {
    if (this.legacyFormController.hasLegacyControl()) {
      this.ionStyle.emit({
        interactive: true,
        'interactive-disabled': this.disabled,
      });
    }
  }
  /**
   * Emits an `ionChange` event.
   *
   * This API should be called for user committed changes.
   * This API should not be used for external value changes.
   */
  emitValueChange() {
    this.value = this.ensureValueInBounds(this.value);
    this.ionChange.emit({ value: this.value });
  }
  onStart(detail) {
    const { contentEl } = this;
    if (contentEl) {
      this.initialContentScrollY = disableContentScrollY(contentEl);
    }
    const rect = (this.rect = this.rangeSlider.getBoundingClientRect());
    const currentX = detail.currentX;
    // figure out which knob they started closer to
    let ratio = clamp(0, (currentX - rect.left) / rect.width, 1);
    if (isRTL(this.el)) {
      ratio = 1 - ratio;
    }
    this.pressedKnob = !this.dualKnobs || Math.abs(this.ratioA - ratio) < Math.abs(this.ratioB - ratio) ? 'A' : 'B';
    this.setFocus(this.pressedKnob);
    // update the active knob's position
    this.update(currentX);
    this.ionKnobMoveStart.emit({ value: this.ensureValueInBounds(this.value) });
  }
  onMove(detail) {
    this.update(detail.currentX);
  }
  onEnd(detail) {
    const { contentEl, initialContentScrollY } = this;
    if (contentEl) {
      resetContentScrollY(contentEl, initialContentScrollY);
    }
    this.update(detail.currentX);
    this.pressedKnob = undefined;
    this.emitValueChange();
    this.ionKnobMoveEnd.emit({ value: this.ensureValueInBounds(this.value) });
  }
  update(currentX) {
    // figure out where the pointer is currently at
    // update the knob being interacted with
    const rect = this.rect;
    let ratio = clamp(0, (currentX - rect.left) / rect.width, 1);
    if (isRTL(this.el)) {
      ratio = 1 - ratio;
    }
    if (this.snaps) {
      // snaps the ratio to the current value
      ratio = valueToRatio(ratioToValue(ratio, this.min, this.max, this.step), this.min, this.max);
    }
    // update which knob is pressed
    if (this.pressedKnob === 'A') {
      this.ratioA = ratio;
    }
    else {
      this.ratioB = ratio;
    }
    // Update input value
    this.updateValue();
  }
  get valA() {
    return ratioToValue(this.ratioA, this.min, this.max, this.step);
  }
  get valB() {
    return ratioToValue(this.ratioB, this.min, this.max, this.step);
  }
  get ratioLower() {
    if (this.dualKnobs) {
      return Math.min(this.ratioA, this.ratioB);
    }
    const { activeBarStart } = this;
    if (activeBarStart == null) {
      return 0;
    }
    return valueToRatio(activeBarStart, this.min, this.max);
  }
  get ratioUpper() {
    if (this.dualKnobs) {
      return Math.max(this.ratioA, this.ratioB);
    }
    return this.ratioA;
  }
  updateRatio() {
    const value = this.getValue();
    const { min, max } = this;
    if (this.dualKnobs) {
      this.ratioA = valueToRatio(value.lower, min, max);
      this.ratioB = valueToRatio(value.upper, min, max);
    }
    else {
      this.ratioA = valueToRatio(value, min, max);
    }
  }
  updateValue() {
    this.noUpdate = true;
    const { valA, valB } = this;
    this.value = !this.dualKnobs
      ? valA
      : {
        lower: Math.min(valA, valB),
        upper: Math.max(valA, valB),
      };
    this.ionInput.emit({ value: this.value });
    this.noUpdate = false;
  }
  setFocus(knob) {
    if (this.el.shadowRoot) {
      const knobEl = this.el.shadowRoot.querySelector(knob === 'A' ? '.range-knob-a' : '.range-knob-b');
      if (knobEl) {
        knobEl.focus();
      }
    }
  }
  // TODO FW-2997 remove this
  renderLegacyRange() {
    if (!this.hasLoggedDeprecationWarning) {
      printIonWarning(`ion-range now requires providing a label with either the label slot or the "aria-label" attribute. To migrate, remove any usage of "ion-label" and pass the label text to either the component or the "aria-label" attribute.

Example: <ion-range><div slot="label">Volume</div></ion-range>
Example with aria-label: <ion-range aria-label="Volume"></ion-range>

Developers can use the "legacy" property to continue using the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.`, this.el);
      if (this.legacy) {
        printIonWarning(`ion-range is being used with the "legacy" property enabled which will forcibly enable the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.

Developers can dismiss this warning by removing their usage of the "legacy" property and using the new range syntax.`, this.el);
      }
      this.hasLoggedDeprecationWarning = true;
    }
    const { el, pressedKnob, disabled, pin, rangeId } = this;
    const mode = getIonMode(this);
    renderHiddenInput(true, el, this.name, JSON.stringify(this.getValue()), disabled);
    return (h(Host, { onFocusin: this.onFocus, onFocusout: this.onBlur, id: rangeId, class: createColorClasses(this.color, {
        [mode]: true,
        'in-item': hostContext('ion-item', el),
        'range-disabled': disabled,
        'range-pressed': pressedKnob !== undefined,
        'range-has-pin': pin,
        'legacy-range': true,
      }) }, h("slot", { name: "start" }), this.renderRangeSlider(), h("slot", { name: "end" })));
  }
  renderRange() {
    const { disabled, el, rangeId, pin, pressedKnob, labelPlacement, label } = this;
    const mode = getIonMode(this);
    renderHiddenInput(true, el, this.name, JSON.stringify(this.getValue()), disabled);
    return (h(Host, { onFocusin: this.onFocus, onFocusout: this.onBlur, id: rangeId, class: createColorClasses(this.color, {
        [mode]: true,
        'in-item': hostContext('ion-item', el),
        'range-disabled': disabled,
        'range-pressed': pressedKnob !== undefined,
        'range-has-pin': pin,
        [`range-label-placement-${labelPlacement}`]: true,
      }) }, h("label", { class: "range-wrapper", id: "range-label" }, h("div", { class: {
        'label-text-wrapper': true,
        'label-text-wrapper-hidden': !this.hasLabel,
      } }, label !== undefined ? h("div", { class: "label-text" }, label) : h("slot", { name: "label" })), h("div", { class: "native-wrapper" }, h("slot", { name: "start" }), this.renderRangeSlider(), h("slot", { name: "end" })))));
  }
  get hasLabel() {
    return this.label !== undefined || this.el.querySelector('[slot="label"]') !== null;
  }
  renderRangeSlider() {
    var _a;
    const { min, max, step, el, handleKeyboard, pressedKnob, disabled, pin, ratioLower, ratioUpper, inheritedAttributes, rangeId, pinFormatter, } = this;
    /**
     * Look for external label, ion-label, or aria-labelledby.
     * If none, see if user placed an aria-label on the host
     * and use that instead.
     */
    let { labelText } = getAriaLabel(el, rangeId);
    if (labelText === undefined || labelText === null) {
      labelText = inheritedAttributes['aria-label'];
    }
    let barStart = `${ratioLower * 100}%`;
    let barEnd = `${100 - ratioUpper * 100}%`;
    const rtl = isRTL(this.el);
    const start = rtl ? 'right' : 'left';
    const end = rtl ? 'left' : 'right';
    const tickStyle = (tick) => {
      return {
        [start]: tick[start],
      };
    };
    if (this.dualKnobs === false) {
      /**
       * When the value is less than the activeBarStart or the min value,
       * the knob will display at the start of the active bar.
       */
      if (this.valA < ((_a = this.activeBarStart) !== null && _a !== void 0 ? _a : this.min)) {
        /**
         * Sets the bar positions relative to the upper and lower limits.
         * Converts the ratio values into percentages, used as offsets for left/right styles.
         *
         * The ratioUpper refers to the knob position on the bar.
         * The ratioLower refers to the end position of the active bar (the value).
         */
        barStart = `${ratioUpper * 100}%`;
        barEnd = `${100 - ratioLower * 100}%`;
      }
      else {
        /**
         * Otherwise, the knob will display at the end of the active bar.
         *
         * The ratioLower refers to the start position of the active bar (the value).
         * The ratioUpper refers to the knob position on the bar.
         */
        barStart = `${ratioLower * 100}%`;
        barEnd = `${100 - ratioUpper * 100}%`;
      }
    }
    const barStyle = {
      [start]: barStart,
      [end]: barEnd,
    };
    const ticks = [];
    if (this.snaps && this.ticks) {
      for (let value = min; value <= max; value += step) {
        const ratio = valueToRatio(value, min, max);
        const ratioMin = Math.min(ratioLower, ratioUpper);
        const ratioMax = Math.max(ratioLower, ratioUpper);
        const tick = {
          ratio,
          /**
           * Sets the tick mark as active when the tick is between the min bounds and the knob.
           * When using activeBarStart, the tick mark will be active between the knob and activeBarStart.
           */
          active: ratio >= ratioMin && ratio <= ratioMax,
        };
        tick[start] = `${ratio * 100}%`;
        ticks.push(tick);
      }
    }
    let labelledBy;
    if (!this.legacyFormController.hasLegacyControl() && this.hasLabel) {
      labelledBy = 'range-label';
    }
    return (h("div", { class: "range-slider", ref: (rangeEl) => (this.rangeSlider = rangeEl) }, ticks.map((tick) => (h("div", { style: tickStyle(tick), role: "presentation", class: {
        'range-tick': true,
        'range-tick-active': tick.active,
      }, part: tick.active ? 'tick-active' : 'tick' }))), h("div", { class: "range-bar-container" }, h("div", { class: "range-bar", role: "presentation", part: "bar" }), h("div", { class: {
        'range-bar': true,
        'range-bar-active': true,
        'has-ticks': ticks.length > 0,
      }, role: "presentation", style: barStyle, part: "bar-active" })), renderKnob(rtl, {
      knob: 'A',
      pressed: pressedKnob === 'A',
      value: this.valA,
      ratio: this.ratioA,
      pin,
      pinFormatter,
      disabled,
      handleKeyboard,
      min,
      max,
      labelText,
      labelledBy,
    }), this.dualKnobs &&
      renderKnob(rtl, {
        knob: 'B',
        pressed: pressedKnob === 'B',
        value: this.valB,
        ratio: this.ratioB,
        pin,
        pinFormatter,
        disabled,
        handleKeyboard,
        min,
        max,
        labelText,
        labelledBy,
      })));
  }
  render() {
    const { legacyFormController } = this;
    return legacyFormController.hasLegacyControl() ? this.renderLegacyRange() : this.renderRange();
  }
  static get is() { return "ion-range"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "ios": ["range.ios.scss"],
      "md": ["range.md.scss"]
    };
  }
  static get styleUrls() {
    return {
      "ios": ["range.ios.css"],
      "md": ["range.md.css"]
    };
  }
  static get properties() {
    return {
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Color",
          "resolved": "\"danger\" | \"dark\" | \"light\" | \"medium\" | \"primary\" | \"secondary\" | \"success\" | \"tertiary\" | \"warning\" | string & Record<never, never> | undefined",
          "references": {
            "Color": {
              "location": "import",
              "path": "../../interface",
              "id": "src/interface.d.ts::Color"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The color to use from your application's color palette.\nDefault options are: `\"primary\"`, `\"secondary\"`, `\"tertiary\"`, `\"success\"`, `\"warning\"`, `\"danger\"`, `\"light\"`, `\"medium\"`, and `\"dark\"`.\nFor more information on colors, see [theming](/docs/theming/basics)."
        },
        "attribute": "color",
        "reflect": true
      },
      "debounce": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "How long, in milliseconds, to wait to trigger the\n`ionInput` event after each change in the range value."
        },
        "attribute": "debounce",
        "reflect": false
      },
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The name of the control, which is submitted with the form data."
        },
        "attribute": "name",
        "reflect": false,
        "defaultValue": "this.rangeId"
      },
      "label": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The text to display as the control's label. Use this over the `label` slot if\nyou only need plain text. The `label` property will take priority over the\n`label` slot if both are used."
        },
        "attribute": "label",
        "reflect": false
      },
      "dualKnobs": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Show two knobs."
        },
        "attribute": "dual-knobs",
        "reflect": false,
        "defaultValue": "false"
      },
      "min": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Minimum integer value of the range."
        },
        "attribute": "min",
        "reflect": false,
        "defaultValue": "0"
      },
      "max": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Maximum integer value of the range."
        },
        "attribute": "max",
        "reflect": false,
        "defaultValue": "100"
      },
      "pin": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true`, a pin with integer value is shown when the knob\nis pressed."
        },
        "attribute": "pin",
        "reflect": false,
        "defaultValue": "false"
      },
      "pinFormatter": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "PinFormatter",
          "resolved": "(value: number) => string | number",
          "references": {
            "PinFormatter": {
              "location": "import",
              "path": "./range-interface",
              "id": "src/components/range/range-interface.ts::PinFormatter"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "A callback used to format the pin text.\nBy default the pin text is set to `Math.round(value)`."
        },
        "defaultValue": "(value: number): number => Math.round(value)"
      },
      "snaps": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true`, the knob snaps to tick marks evenly spaced based\non the step property value."
        },
        "attribute": "snaps",
        "reflect": false,
        "defaultValue": "false"
      },
      "step": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Specifies the value granularity."
        },
        "attribute": "step",
        "reflect": false,
        "defaultValue": "1"
      },
      "ticks": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true`, tick marks are displayed based on the step value.\nOnly applies when `snaps` is `true`."
        },
        "attribute": "ticks",
        "reflect": false,
        "defaultValue": "true"
      },
      "activeBarStart": {
        "type": "number",
        "mutable": true,
        "complexType": {
          "original": "number",
          "resolved": "number | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The start position of the range active bar. This feature is only available with a single knob (dualKnobs=\"false\").\nValid values are greater than or equal to the min value and less than or equal to the max value."
        },
        "attribute": "active-bar-start",
        "reflect": false
      },
      "disabled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true`, the user cannot interact with the range."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "value": {
        "type": "number",
        "mutable": true,
        "complexType": {
          "original": "RangeValue",
          "resolved": "number | { lower: number; upper: number; }",
          "references": {
            "RangeValue": {
              "location": "import",
              "path": "./range-interface",
              "id": "src/components/range/range-interface.ts::RangeValue"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "the value of the range."
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "0"
      },
      "labelPlacement": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'start' | 'end' | 'fixed'",
          "resolved": "\"end\" | \"fixed\" | \"start\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Where to place the label relative to the range.\n`\"start\"`: The label will appear to the left of the range in LTR and to the right in RTL.\n`\"end\"`: The label will appear to the right of the range in LTR and to the left in RTL.\n`\"fixed\"`: The label has the same behavior as `\"start\"` except it also has a fixed width. Long text will be truncated with ellipses (\"...\")."
        },
        "attribute": "label-placement",
        "reflect": false,
        "defaultValue": "'start'"
      },
      "legacy": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Set the `legacy` property to `true` to forcibly use the legacy form control markup.\nIonic will only opt components in to the modern form markup when they are\nusing either the `aria-label` attribute or the `label` property. As a result,\nthe `legacy` property should only be used as an escape hatch when you want to\navoid this automatic opt-in behavior.\nNote that this property will be removed in an upcoming major release\nof Ionic, and all form components will be opted-in to using the modern form markup."
        },
        "attribute": "legacy",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "ratioA": {},
      "ratioB": {},
      "pressedKnob": {}
    };
  }
  static get events() {
    return [{
        "method": "ionChange",
        "name": "ionChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "The `ionChange` event is fired for `<ion-range>` elements when the user\nmodifies the element's value:\n- When the user releases the knob after dragging;\n- When the user moves the knob with keyboard arrows\n\n`ionChange` is not fired when the value is changed programmatically."
        },
        "complexType": {
          "original": "RangeChangeEventDetail",
          "resolved": "RangeChangeEventDetail",
          "references": {
            "RangeChangeEventDetail": {
              "location": "import",
              "path": "./range-interface",
              "id": "src/components/range/range-interface.ts::RangeChangeEventDetail"
            }
          }
        }
      }, {
        "method": "ionInput",
        "name": "ionInput",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "The `ionInput` event is fired for `<ion-range>` elements when the value\nis modified. Unlike `ionChange`, `ionInput` is fired continuously\nwhile the user is dragging the knob."
        },
        "complexType": {
          "original": "RangeChangeEventDetail",
          "resolved": "RangeChangeEventDetail",
          "references": {
            "RangeChangeEventDetail": {
              "location": "import",
              "path": "./range-interface",
              "id": "src/components/range/range-interface.ts::RangeChangeEventDetail"
            }
          }
        }
      }, {
        "method": "ionStyle",
        "name": "ionStyle",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [{
              "name": "internal",
              "text": undefined
            }],
          "text": "Emitted when the styles change."
        },
        "complexType": {
          "original": "StyleEventDetail",
          "resolved": "StyleEventDetail",
          "references": {
            "StyleEventDetail": {
              "location": "import",
              "path": "../../interface",
              "id": "src/interface.d.ts::StyleEventDetail"
            }
          }
        }
      }, {
        "method": "ionFocus",
        "name": "ionFocus",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the range has focus."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }, {
        "method": "ionBlur",
        "name": "ionBlur",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the range loses focus."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }, {
        "method": "ionKnobMoveStart",
        "name": "ionKnobMoveStart",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the user starts moving the range knob, whether through\nmouse drag, touch gesture, or keyboard interaction."
        },
        "complexType": {
          "original": "RangeKnobMoveStartEventDetail",
          "resolved": "RangeKnobMoveStartEventDetail",
          "references": {
            "RangeKnobMoveStartEventDetail": {
              "location": "import",
              "path": "./range-interface",
              "id": "src/components/range/range-interface.ts::RangeKnobMoveStartEventDetail"
            }
          }
        }
      }, {
        "method": "ionKnobMoveEnd",
        "name": "ionKnobMoveEnd",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the user finishes moving the range knob, whether through\nmouse drag, touch gesture, or keyboard interaction."
        },
        "complexType": {
          "original": "RangeKnobMoveEndEventDetail",
          "resolved": "RangeKnobMoveEndEventDetail",
          "references": {
            "RangeKnobMoveEndEventDetail": {
              "location": "import",
              "path": "./range-interface",
              "id": "src/components/range/range-interface.ts::RangeKnobMoveEndEventDetail"
            }
          }
        }
      }];
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "debounce",
        "methodName": "debounceChanged"
      }, {
        "propName": "min",
        "methodName": "minChanged"
      }, {
        "propName": "max",
        "methodName": "maxChanged"
      }, {
        "propName": "activeBarStart",
        "methodName": "activeBarStartChanged"
      }, {
        "propName": "disabled",
        "methodName": "disabledChanged"
      }, {
        "propName": "value",
        "methodName": "valueChanged"
      }];
  }
}
const renderKnob = (rtl, { knob, value, ratio, min, max, disabled, pressed, pin, handleKeyboard, labelText, labelledBy, pinFormatter, }) => {
  const start = rtl ? 'right' : 'left';
  const knobStyle = () => {
    const style = {};
    style[start] = `${ratio * 100}%`;
    return style;
  };
  return (h("div", { onKeyDown: (ev) => {
      const key = ev.key;
      if (key === 'ArrowLeft' || key === 'ArrowDown') {
        handleKeyboard(knob, false);
        ev.preventDefault();
        ev.stopPropagation();
      }
      else if (key === 'ArrowRight' || key === 'ArrowUp') {
        handleKeyboard(knob, true);
        ev.preventDefault();
        ev.stopPropagation();
      }
    }, class: {
      'range-knob-handle': true,
      'range-knob-a': knob === 'A',
      'range-knob-b': knob === 'B',
      'range-knob-pressed': pressed,
      'range-knob-min': value === min,
      'range-knob-max': value === max,
      'ion-activatable': true,
      'ion-focusable': true,
    }, style: knobStyle(), role: "slider", tabindex: disabled ? -1 : 0, "aria-label": labelledBy === undefined ? labelText : null, "aria-labelledby": labelledBy !== undefined ? labelledBy : null, "aria-valuemin": min, "aria-valuemax": max, "aria-disabled": disabled ? 'true' : null, "aria-valuenow": value }, pin && (h("div", { class: "range-pin", role: "presentation", part: "pin" }, pinFormatter(value))), h("div", { class: "range-knob", role: "presentation", part: "knob" })));
};
const ratioToValue = (ratio, min, max, step) => {
  let value = (max - min) * ratio;
  if (step > 0) {
    // round to nearest multiple of step, then add min
    value = Math.round(value / step) * step + min;
  }
  const clampedValue = clamp(min, value, max);
  return roundToMaxDecimalPlaces(clampedValue, min, max, step);
};
const valueToRatio = (value, min, max) => {
  return clamp(0, (value - min) / (max - min), 1);
};
let rangeIds = 0;
