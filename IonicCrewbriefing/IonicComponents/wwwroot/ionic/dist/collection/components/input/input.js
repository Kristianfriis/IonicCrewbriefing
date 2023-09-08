/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Build, Host, forceUpdate, h } from "@stencil/core";
import { createLegacyFormController, createNotchController } from "../../utils/forms/index";
import { inheritAriaAttributes, debounceEvent, findItemLabel, inheritAttributes } from "../../utils/helpers";
import { printIonWarning } from "../../utils/logging/index";
import { createSlotMutationController } from "../../utils/slot-mutation-controller";
import { createColorClasses, hostContext } from "../../utils/theme";
import { closeCircle, closeSharp } from "ionicons/icons";
import { getIonMode } from "../../global/ionic-global";
import { getCounterText } from "./input.utils";
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @slot label - The label text to associate with the input. Use the `labelPlacement` property to control where the label is placed relative to the input. Use this if you need to render a label with custom HTML. (EXPERIMENTAL)
 */
export class Input {
  constructor() {
    this.inputId = `ion-input-${inputIds++}`;
    this.inheritedAttributes = {};
    this.isComposing = false;
    // This flag ensures we log the deprecation warning at most once.
    this.hasLoggedDeprecationWarning = false;
    /**
     * `true` if the input was cleared as a result of the user typing
     * with `clearOnEdit` enabled.
     *
     * Resets when the input loses focus.
     */
    this.didInputClearOnEdit = false;
    this.onInput = (ev) => {
      const input = ev.target;
      if (input) {
        this.value = input.value || '';
      }
      this.emitInputChange(ev);
    };
    this.onChange = (ev) => {
      this.emitValueChange(ev);
    };
    this.onBlur = (ev) => {
      this.hasFocus = false;
      this.emitStyle();
      if (this.focusedValue !== this.value) {
        /**
         * Emits the `ionChange` event when the input value
         * is different than the value when the input was focused.
         */
        this.emitValueChange(ev);
      }
      this.didInputClearOnEdit = false;
      this.ionBlur.emit(ev);
    };
    this.onFocus = (ev) => {
      this.hasFocus = true;
      this.focusedValue = this.value;
      this.emitStyle();
      this.ionFocus.emit(ev);
    };
    this.onKeydown = (ev) => {
      this.checkClearOnEdit(ev);
    };
    this.onCompositionStart = () => {
      this.isComposing = true;
    };
    this.onCompositionEnd = () => {
      this.isComposing = false;
    };
    this.clearTextInput = (ev) => {
      if (this.clearInput && !this.readonly && !this.disabled && ev) {
        ev.preventDefault();
        ev.stopPropagation();
        // Attempt to focus input again after pressing clear button
        this.setFocus();
      }
      this.value = '';
      this.emitInputChange(ev);
    };
    this.hasFocus = false;
    this.color = undefined;
    this.accept = undefined;
    this.autocapitalize = 'off';
    this.autocomplete = 'off';
    this.autocorrect = 'off';
    this.autofocus = false;
    this.clearInput = false;
    this.clearOnEdit = undefined;
    this.counter = false;
    this.counterFormatter = undefined;
    this.debounce = undefined;
    this.disabled = false;
    this.enterkeyhint = undefined;
    this.errorText = undefined;
    this.fill = undefined;
    this.inputmode = undefined;
    this.helperText = undefined;
    this.label = undefined;
    this.labelPlacement = 'start';
    this.legacy = undefined;
    this.max = undefined;
    this.maxlength = undefined;
    this.min = undefined;
    this.minlength = undefined;
    this.multiple = undefined;
    this.name = this.inputId;
    this.pattern = undefined;
    this.placeholder = undefined;
    this.readonly = false;
    this.required = false;
    this.shape = undefined;
    this.spellcheck = false;
    this.step = undefined;
    this.size = undefined;
    this.type = 'text';
    this.value = '';
  }
  debounceChanged() {
    const { ionInput, debounce, originalIonInput } = this;
    /**
     * If debounce is undefined, we have to manually revert the ionInput emitter in case
     * debounce used to be set to a number. Otherwise, the event would stay debounced.
     */
    this.ionInput = debounce === undefined ? originalIonInput !== null && originalIonInput !== void 0 ? originalIonInput : ionInput : debounceEvent(ionInput, debounce);
  }
  disabledChanged() {
    this.emitStyle();
  }
  /**
   * Update the item classes when the placeholder changes
   */
  placeholderChanged() {
    this.emitStyle();
  }
  /**
   * Update the native input element when the value changes
   */
  valueChanged() {
    const nativeInput = this.nativeInput;
    const value = this.getValue();
    if (nativeInput && nativeInput.value !== value && !this.isComposing) {
      /**
       * Assigning the native input's value on attribute
       * value change, allows `ionInput` implementations
       * to override the control's value.
       *
       * Used for patterns such as input trimming (removing whitespace),
       * or input masking.
       */
      nativeInput.value = value;
    }
    this.emitStyle();
  }
  componentWillLoad() {
    this.inheritedAttributes = Object.assign(Object.assign({}, inheritAriaAttributes(this.el)), inheritAttributes(this.el, ['tabindex', 'title', 'data-form-type']));
  }
  connectedCallback() {
    const { el } = this;
    this.legacyFormController = createLegacyFormController(el);
    this.slotMutationController = createSlotMutationController(el, 'label', () => forceUpdate(this));
    this.notchController = createNotchController(el, () => this.notchSpacerEl, () => this.labelSlot);
    this.emitStyle();
    this.debounceChanged();
    if (Build.isBrowser) {
      document.dispatchEvent(new CustomEvent('ionInputDidLoad', {
        detail: this.el,
      }));
    }
  }
  componentDidLoad() {
    this.originalIonInput = this.ionInput;
  }
  componentDidRender() {
    var _a;
    (_a = this.notchController) === null || _a === void 0 ? void 0 : _a.calculateNotchWidth();
  }
  disconnectedCallback() {
    if (Build.isBrowser) {
      document.dispatchEvent(new CustomEvent('ionInputDidUnload', {
        detail: this.el,
      }));
    }
    if (this.slotMutationController) {
      this.slotMutationController.destroy();
      this.slotMutationController = undefined;
    }
    if (this.notchController) {
      this.notchController.destroy();
      this.notchController = undefined;
    }
  }
  /**
   * Sets focus on the native `input` in `ion-input`. Use this method instead of the global
   * `input.focus()`.
   *
   * Developers who wish to focus an input when a page enters
   * should call `setFocus()` in the `ionViewDidEnter()` lifecycle method.
   *
   * Developers who wish to focus an input when an overlay is presented
   * should call `setFocus` after `didPresent` has resolved.
   */
  async setFocus() {
    if (this.nativeInput) {
      this.nativeInput.focus();
    }
  }
  /**
   * Returns the native `<input>` element used under the hood.
   */
  getInputElement() {
    return Promise.resolve(this.nativeInput);
  }
  /**
   * Emits an `ionChange` event.
   *
   * This API should be called for user committed changes.
   * This API should not be used for external value changes.
   */
  emitValueChange(event) {
    const { value } = this;
    // Checks for both null and undefined values
    const newValue = value == null ? value : value.toString();
    // Emitting a value change should update the internal state for tracking the focused value
    this.focusedValue = newValue;
    this.ionChange.emit({ value: newValue, event });
  }
  /**
   * Emits an `ionInput` event.
   */
  emitInputChange(event) {
    const { value } = this;
    // Checks for both null and undefined values
    const newValue = value == null ? value : value.toString();
    this.ionInput.emit({ value: newValue, event });
  }
  shouldClearOnEdit() {
    const { type, clearOnEdit } = this;
    return clearOnEdit === undefined ? type === 'password' : clearOnEdit;
  }
  getValue() {
    return typeof this.value === 'number' ? this.value.toString() : (this.value || '').toString();
  }
  emitStyle() {
    if (this.legacyFormController.hasLegacyControl()) {
      this.ionStyle.emit({
        interactive: true,
        input: true,
        'has-placeholder': this.placeholder !== undefined,
        'has-value': this.hasValue(),
        'has-focus': this.hasFocus,
        'interactive-disabled': this.disabled,
      });
    }
  }
  checkClearOnEdit(ev) {
    if (!this.shouldClearOnEdit()) {
      return;
    }
    /**
     * Clear the input if the control has not been previously cleared during focus.
     * Do not clear if the user hitting enter to submit a form.
     */
    if (!this.didInputClearOnEdit && this.hasValue() && ev.key !== 'Enter') {
      this.value = '';
      this.emitInputChange(ev);
    }
    this.didInputClearOnEdit = true;
  }
  hasValue() {
    return this.getValue().length > 0;
  }
  /**
   * Renders the helper text or error text values
   */
  renderHintText() {
    const { helperText, errorText } = this;
    return [h("div", { class: "helper-text" }, helperText), h("div", { class: "error-text" }, errorText)];
  }
  renderCounter() {
    const { counter, maxlength, counterFormatter, value } = this;
    if (counter !== true || maxlength === undefined) {
      return;
    }
    return h("div", { class: "counter" }, getCounterText(value, maxlength, counterFormatter));
  }
  /**
   * Responsible for rendering helper text,
   * error text, and counter. This element should only
   * be rendered if hint text is set or counter is enabled.
   */
  renderBottomContent() {
    const { counter, helperText, errorText, maxlength } = this;
    /**
     * undefined and empty string values should
     * be treated as not having helper/error text.
     */
    const hasHintText = !!helperText || !!errorText;
    const hasCounter = counter === true && maxlength !== undefined;
    if (!hasHintText && !hasCounter) {
      return;
    }
    return (h("div", { class: "input-bottom" }, this.renderHintText(), this.renderCounter()));
  }
  renderLabel() {
    const { label } = this;
    return (h("div", { class: {
        'label-text-wrapper': true,
        'label-text-wrapper-hidden': !this.hasLabel,
      } }, label === undefined ? h("slot", { name: "label" }) : h("div", { class: "label-text" }, label)));
  }
  /**
   * Gets any content passed into the `label` slot,
   * not the <slot> definition.
   */
  get labelSlot() {
    return this.el.querySelector('[slot="label"]');
  }
  /**
   * Returns `true` if label content is provided
   * either by a prop or a content. If you want
   * to get the plaintext value of the label use
   * the `labelText` getter instead.
   */
  get hasLabel() {
    return this.label !== undefined || this.labelSlot !== null;
  }
  /**
   * Renders the border container
   * when fill="outline".
   */
  renderLabelContainer() {
    const mode = getIonMode(this);
    const hasOutlineFill = mode === 'md' && this.fill === 'outline';
    if (hasOutlineFill) {
      /**
       * The outline fill has a special outline
       * that appears around the input and the label.
       * Certain stacked and floating label placements cause the
       * label to translate up and create a "cut out"
       * inside of that border by using the notch-spacer element.
       */
      return [
        h("div", { class: "input-outline-container" }, h("div", { class: "input-outline-start" }), h("div", { class: {
            'input-outline-notch': true,
            'input-outline-notch-hidden': !this.hasLabel,
          } }, h("div", { class: "notch-spacer", "aria-hidden": "true", ref: (el) => (this.notchSpacerEl = el) }, this.label)), h("div", { class: "input-outline-end" })),
        this.renderLabel(),
      ];
    }
    /**
     * If not using the outline style,
     * we can render just the label.
     */
    return this.renderLabel();
  }
  renderInput() {
    const { disabled, fill, readonly, shape, inputId, labelPlacement } = this;
    const mode = getIonMode(this);
    const value = this.getValue();
    const inItem = hostContext('ion-item', this.el);
    const shouldRenderHighlight = mode === 'md' && fill !== 'outline' && !inItem;
    return (h(Host, { class: createColorClasses(this.color, {
        [mode]: true,
        'has-value': this.hasValue(),
        'has-focus': this.hasFocus,
        [`input-fill-${fill}`]: fill !== undefined,
        [`input-shape-${shape}`]: shape !== undefined,
        [`input-label-placement-${labelPlacement}`]: true,
        'in-item': inItem,
        'in-item-color': hostContext('ion-item.ion-color', this.el),
        'input-disabled': disabled,
      }) }, h("label", { class: "input-wrapper" }, this.renderLabelContainer(), h("div", { class: "native-wrapper" }, h("input", Object.assign({ class: "native-input", ref: (input) => (this.nativeInput = input), id: inputId, disabled: disabled, accept: this.accept, autoCapitalize: this.autocapitalize, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, autoFocus: this.autofocus, enterKeyHint: this.enterkeyhint, inputMode: this.inputmode, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, multiple: this.multiple, name: this.name, pattern: this.pattern, placeholder: this.placeholder || '', readOnly: readonly, required: this.required, spellcheck: this.spellcheck, step: this.step, size: this.size, type: this.type, value: value, onInput: this.onInput, onChange: this.onChange, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeydown, onCompositionstart: this.onCompositionStart, onCompositionend: this.onCompositionEnd }, this.inheritedAttributes)), this.clearInput && !readonly && !disabled && (h("button", { "aria-label": "reset", type: "button", class: "input-clear-icon", onPointerDown: (ev) => {
        /**
         * This prevents mobile browsers from
         * blurring the input when the clear
         * button is activated.
         */
        ev.preventDefault();
      }, onClick: this.clearTextInput }, h("ion-icon", { "aria-hidden": "true", icon: mode === 'ios' ? closeCircle : closeSharp })))), shouldRenderHighlight && h("div", { class: "input-highlight" })), this.renderBottomContent()));
  }
  // TODO FW-2764 Remove this
  renderLegacyInput() {
    if (!this.hasLoggedDeprecationWarning) {
      printIonWarning(`ion-input now requires providing a label with either the "label" property or the "aria-label" attribute. To migrate, remove any usage of "ion-label" and pass the label text to either the "label" property or the "aria-label" attribute.

Example: <ion-input label="Email"></ion-input>
Example with aria-label: <ion-input aria-label="Email"></ion-input>

For inputs that do not render the label immediately next to the input, developers may continue to use "ion-label" but must manually associate the label with the input by using "aria-labelledby".

Developers can use the "legacy" property to continue using the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.`, this.el);
      if (this.legacy) {
        printIonWarning(`ion-input is being used with the "legacy" property enabled which will forcibly enable the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.

Developers can dismiss this warning by removing their usage of the "legacy" property and using the new input syntax.`, this.el);
      }
      this.hasLoggedDeprecationWarning = true;
    }
    const mode = getIonMode(this);
    const value = this.getValue();
    const labelId = this.inputId + '-lbl';
    const label = findItemLabel(this.el);
    if (label) {
      label.id = labelId;
    }
    return (h(Host, { "aria-disabled": this.disabled ? 'true' : null, class: createColorClasses(this.color, {
        [mode]: true,
        'has-value': this.hasValue(),
        'has-focus': this.hasFocus,
        'legacy-input': true,
        'in-item-color': hostContext('ion-item.ion-color', this.el),
      }) }, h("input", Object.assign({ class: "native-input", ref: (input) => (this.nativeInput = input), "aria-labelledby": label ? label.id : null, disabled: this.disabled, accept: this.accept, autoCapitalize: this.autocapitalize, autoComplete: this.autocomplete, autoCorrect: this.autocorrect, autoFocus: this.autofocus, enterKeyHint: this.enterkeyhint, inputMode: this.inputmode, min: this.min, max: this.max, minLength: this.minlength, maxLength: this.maxlength, multiple: this.multiple, name: this.name, pattern: this.pattern, placeholder: this.placeholder || '', readOnly: this.readonly, required: this.required, spellcheck: this.spellcheck, step: this.step, size: this.size, type: this.type, value: value, onInput: this.onInput, onChange: this.onChange, onBlur: this.onBlur, onFocus: this.onFocus, onKeyDown: this.onKeydown }, this.inheritedAttributes)), this.clearInput && !this.readonly && !this.disabled && (h("button", { "aria-label": "reset", type: "button", class: "input-clear-icon", onPointerDown: (ev) => {
        /**
         * This prevents mobile browsers from
         * blurring the input when the clear
         * button is activated.
         */
        ev.preventDefault();
      }, onClick: this.clearTextInput }, h("ion-icon", { "aria-hidden": "true", icon: mode === 'ios' ? closeCircle : closeSharp })))));
  }
  render() {
    const { legacyFormController } = this;
    return legacyFormController.hasLegacyControl() ? this.renderLegacyInput() : this.renderInput();
  }
  static get is() { return "ion-input"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "ios": ["input.ios.scss"],
      "md": ["input.md.scss"]
    };
  }
  static get styleUrls() {
    return {
      "ios": ["input.ios.css"],
      "md": ["input.md.css"]
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
      "accept": {
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
          "tags": [{
              "name": "deprecated",
              "text": undefined
            }],
          "text": "This attribute is ignored."
        },
        "attribute": "accept",
        "reflect": false
      },
      "autocapitalize": {
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
          "text": "Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.\nAvailable options: `\"off\"`, `\"none\"`, `\"on\"`, `\"sentences\"`, `\"words\"`, `\"characters\"`."
        },
        "attribute": "autocapitalize",
        "reflect": false,
        "defaultValue": "'off'"
      },
      "autocomplete": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "AutocompleteTypes",
          "resolved": "\"name\" | \"email\" | \"tel\" | \"url\" | \"on\" | \"off\" | \"honorific-prefix\" | \"given-name\" | \"additional-name\" | \"family-name\" | \"honorific-suffix\" | \"nickname\" | \"username\" | \"new-password\" | \"current-password\" | \"one-time-code\" | \"organization-title\" | \"organization\" | \"street-address\" | \"address-line1\" | \"address-line2\" | \"address-line3\" | \"address-level4\" | \"address-level3\" | \"address-level2\" | \"address-level1\" | \"country\" | \"country-name\" | \"postal-code\" | \"cc-name\" | \"cc-given-name\" | \"cc-additional-name\" | \"cc-family-name\" | \"cc-number\" | \"cc-exp\" | \"cc-exp-month\" | \"cc-exp-year\" | \"cc-csc\" | \"cc-type\" | \"transaction-currency\" | \"transaction-amount\" | \"language\" | \"bday\" | \"bday-day\" | \"bday-month\" | \"bday-year\" | \"sex\" | \"tel-country-code\" | \"tel-national\" | \"tel-area-code\" | \"tel-local\" | \"tel-extension\" | \"impp\" | \"photo\"",
          "references": {
            "AutocompleteTypes": {
              "location": "import",
              "path": "../../interface",
              "id": "src/interface.d.ts::AutocompleteTypes"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Indicates whether the value of the control can be automatically completed by the browser."
        },
        "attribute": "autocomplete",
        "reflect": false,
        "defaultValue": "'off'"
      },
      "autocorrect": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'on' | 'off'",
          "resolved": "\"off\" | \"on\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Whether auto correction should be enabled when the user is entering/editing the text value."
        },
        "attribute": "autocorrect",
        "reflect": false,
        "defaultValue": "'off'"
      },
      "autofocus": {
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
          "text": "This Boolean attribute lets you specify that a form control should have input focus when the page loads."
        },
        "attribute": "autofocus",
        "reflect": false,
        "defaultValue": "false"
      },
      "clearInput": {
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
          "text": "If `true`, a clear icon will appear in the input when there is a value. Clicking it clears the input."
        },
        "attribute": "clear-input",
        "reflect": false,
        "defaultValue": "false"
      },
      "clearOnEdit": {
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
          "text": "If `true`, the value will be cleared after focus upon edit. Defaults to `true` when `type` is `\"password\"`, `false` for all other types."
        },
        "attribute": "clear-on-edit",
        "reflect": false
      },
      "counter": {
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
          "text": "If `true`, a character counter will display the ratio of characters used and the total character limit. Developers must also set the `maxlength` property for the counter to be calculated correctly."
        },
        "attribute": "counter",
        "reflect": false,
        "defaultValue": "false"
      },
      "counterFormatter": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "(inputLength: number, maxLength: number) => string",
          "resolved": "((inputLength: number, maxLength: number) => string) | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "A callback used to format the counter text.\nBy default the counter text is set to \"itemLength / maxLength\"."
        }
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
          "text": "Set the amount of time, in milliseconds, to wait to trigger the `ionInput` event after each keystroke."
        },
        "attribute": "debounce",
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
          "text": "If `true`, the user cannot interact with the input."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "enterkeyhint": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send'",
          "resolved": "\"done\" | \"enter\" | \"go\" | \"next\" | \"previous\" | \"search\" | \"send\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "A hint to the browser for which enter key to display.\nPossible values: `\"enter\"`, `\"done\"`, `\"go\"`, `\"next\"`,\n`\"previous\"`, `\"search\"`, and `\"send\"`."
        },
        "attribute": "enterkeyhint",
        "reflect": false
      },
      "errorText": {
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
          "text": "Text that is placed under the input and displayed when an error is detected."
        },
        "attribute": "error-text",
        "reflect": false
      },
      "fill": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'outline' | 'solid'",
          "resolved": "\"outline\" | \"solid\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The fill for the item. If `\"solid\"` the item will have a background. If\n`\"outline\"` the item will be transparent with a border. Only available in `md` mode."
        },
        "attribute": "fill",
        "reflect": false
      },
      "inputmode": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search'",
          "resolved": "\"decimal\" | \"email\" | \"none\" | \"numeric\" | \"search\" | \"tel\" | \"text\" | \"url\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "A hint to the browser for which keyboard to display.\nPossible values: `\"none\"`, `\"text\"`, `\"tel\"`, `\"url\"`,\n`\"email\"`, `\"numeric\"`, `\"decimal\"`, and `\"search\"`."
        },
        "attribute": "inputmode",
        "reflect": false
      },
      "helperText": {
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
          "text": "Text that is placed under the input and displayed when no error is detected."
        },
        "attribute": "helper-text",
        "reflect": false
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
          "text": "The visible label associated with the input.\n\nUse this if you need to render a plaintext label.\n\nThe `label` property will take priority over the `label` slot if both are used."
        },
        "attribute": "label",
        "reflect": false
      },
      "labelPlacement": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'start' | 'end' | 'floating' | 'stacked' | 'fixed'",
          "resolved": "\"end\" | \"fixed\" | \"floating\" | \"stacked\" | \"start\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Where to place the label relative to the input.\n`\"start\"`: The label will appear to the left of the input in LTR and to the right in RTL.\n`\"end\"`: The label will appear to the right of the input in LTR and to the left in RTL.\n`\"floating\"`: The label will appear smaller and above the input when the input is focused or it has a value. Otherwise it will appear on top of the input.\n`\"stacked\"`: The label will appear smaller and above the input regardless even when the input is blurred or has no value.\n`\"fixed\"`: The label has the same behavior as `\"start\"` except it also has a fixed width. Long text will be truncated with ellipses (\"...\")."
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
      },
      "max": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "string | number",
          "resolved": "number | string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The maximum value, which must not be less than its minimum (min attribute) value."
        },
        "attribute": "max",
        "reflect": false
      },
      "maxlength": {
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
          "text": "If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the maximum number of characters that the user can enter."
        },
        "attribute": "maxlength",
        "reflect": false
      },
      "min": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "string | number",
          "resolved": "number | string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The minimum value, which must not be greater than its maximum (max attribute) value."
        },
        "attribute": "min",
        "reflect": false
      },
      "minlength": {
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
          "text": "If the value of the type attribute is `text`, `email`, `search`, `password`, `tel`, or `url`, this attribute specifies the minimum number of characters that the user can enter."
        },
        "attribute": "minlength",
        "reflect": false
      },
      "multiple": {
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
          "text": "If `true`, the user can enter more than one value. This attribute applies when the type attribute is set to `\"email\"`, otherwise it is ignored."
        },
        "attribute": "multiple",
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
        "defaultValue": "this.inputId"
      },
      "pattern": {
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
          "text": "A regular expression that the value is checked against. The pattern must match the entire value, not just some subset. Use the title attribute to describe the pattern to help the user. This attribute applies when the value of the type attribute is `\"text\"`, `\"search\"`, `\"tel\"`, `\"url\"`, `\"email\"`, `\"date\"`, or `\"password\"`, otherwise it is ignored. When the type attribute is `\"date\"`, `pattern` will only be used in browsers that do not support the `\"date\"` input type natively. See https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/date for more information."
        },
        "attribute": "pattern",
        "reflect": false
      },
      "placeholder": {
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
          "text": "Instructional text that shows before the input has a value.\nThis property applies only when the `type` property is set to `\"email\"`,\n`\"number\"`, `\"password\"`, `\"search\"`, `\"tel\"`, `\"text\"`, or `\"url\"`, otherwise it is ignored."
        },
        "attribute": "placeholder",
        "reflect": false
      },
      "readonly": {
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
          "text": "If `true`, the user cannot modify the value."
        },
        "attribute": "readonly",
        "reflect": false,
        "defaultValue": "false"
      },
      "required": {
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
          "text": "If `true`, the user must fill in a value before submitting a form."
        },
        "attribute": "required",
        "reflect": false,
        "defaultValue": "false"
      },
      "shape": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'round'",
          "resolved": "\"round\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The shape of the input. If \"round\" it will have an increased border radius."
        },
        "attribute": "shape",
        "reflect": false
      },
      "spellcheck": {
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
          "text": "If `true`, the element will have its spelling and grammar checked."
        },
        "attribute": "spellcheck",
        "reflect": false,
        "defaultValue": "false"
      },
      "step": {
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
          "text": "Works with the min and max attributes to limit the increments at which a value can be set.\nPossible values are: `\"any\"` or a positive floating point number."
        },
        "attribute": "step",
        "reflect": false
      },
      "size": {
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
          "text": ""
        },
        "attribute": "size",
        "reflect": false
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "TextFieldTypes",
          "resolved": "\"date\" | \"datetime-local\" | \"email\" | \"month\" | \"number\" | \"password\" | \"search\" | \"tel\" | \"text\" | \"time\" | \"url\" | \"week\"",
          "references": {
            "TextFieldTypes": {
              "location": "import",
              "path": "../../interface",
              "id": "src/interface.d.ts::TextFieldTypes"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The type of control to display. The default type is text."
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "'text'"
      },
      "value": {
        "type": "any",
        "mutable": true,
        "complexType": {
          "original": "string | number | null",
          "resolved": "null | number | string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The value of the input."
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "''"
      }
    };
  }
  static get states() {
    return {
      "hasFocus": {}
    };
  }
  static get events() {
    return [{
        "method": "ionInput",
        "name": "ionInput",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "The `ionInput` event is fired each time the user modifies the input's value.\nUnlike the `ionChange` event, the `ionInput` event is fired for each alteration\nto the input's value. This typically happens for each keystroke as the user types.\n\nFor elements that accept text input (`type=text`, `type=tel`, etc.), the interface\nis [`InputEvent`](https://developer.mozilla.org/en-US/docs/Web/API/InputEvent); for others,\nthe interface is [`Event`](https://developer.mozilla.org/en-US/docs/Web/API/Event). If\nthe input is cleared on edit, the type is `null`."
        },
        "complexType": {
          "original": "InputInputEventDetail",
          "resolved": "InputInputEventDetail",
          "references": {
            "InputInputEventDetail": {
              "location": "import",
              "path": "./input-interface",
              "id": "src/components/input/input-interface.ts::InputInputEventDetail"
            }
          }
        }
      }, {
        "method": "ionChange",
        "name": "ionChange",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "The `ionChange` event is fired when the user modifies the input's value.\nUnlike the `ionInput` event, the `ionChange` event is only fired when changes\nare committed, not as the user types.\n\nDepending on the way the users interacts with the element, the `ionChange`\nevent fires at a different moment:\n- When the user commits the change explicitly (e.g. by selecting a date\nfrom a date picker for `<ion-input type=\"date\">`, pressing the \"Enter\" key, etc.).\n- When the element loses focus after its value has changed: for elements\nwhere the user's interaction is typing."
        },
        "complexType": {
          "original": "InputChangeEventDetail",
          "resolved": "InputChangeEventDetail",
          "references": {
            "InputChangeEventDetail": {
              "location": "import",
              "path": "./input-interface",
              "id": "src/components/input/input-interface.ts::InputChangeEventDetail"
            }
          }
        }
      }, {
        "method": "ionBlur",
        "name": "ionBlur",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the input loses focus."
        },
        "complexType": {
          "original": "FocusEvent",
          "resolved": "FocusEvent",
          "references": {
            "FocusEvent": {
              "location": "global",
              "id": "global::FocusEvent"
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
          "text": "Emitted when the input has focus."
        },
        "complexType": {
          "original": "FocusEvent",
          "resolved": "FocusEvent",
          "references": {
            "FocusEvent": {
              "location": "global",
              "id": "global::FocusEvent"
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
      }];
  }
  static get methods() {
    return {
      "setFocus": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global",
              "id": "global::Promise"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "Sets focus on the native `input` in `ion-input`. Use this method instead of the global\n`input.focus()`.\n\nDevelopers who wish to focus an input when a page enters\nshould call `setFocus()` in the `ionViewDidEnter()` lifecycle method.\n\nDevelopers who wish to focus an input when an overlay is presented\nshould call `setFocus` after `didPresent` has resolved.",
          "tags": []
        }
      },
      "getInputElement": {
        "complexType": {
          "signature": "() => Promise<HTMLInputElement>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global",
              "id": "global::Promise"
            },
            "HTMLInputElement": {
              "location": "global",
              "id": "global::HTMLInputElement"
            }
          },
          "return": "Promise<HTMLInputElement>"
        },
        "docs": {
          "text": "Returns the native `<input>` element used under the hood.",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "debounce",
        "methodName": "debounceChanged"
      }, {
        "propName": "disabled",
        "methodName": "disabledChanged"
      }, {
        "propName": "placeholder",
        "methodName": "placeholderChanged"
      }, {
        "propName": "value",
        "methodName": "valueChanged"
      }];
  }
}
let inputIds = 0;
