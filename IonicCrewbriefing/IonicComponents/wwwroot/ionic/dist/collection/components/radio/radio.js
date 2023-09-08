/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from "@stencil/core";
import { createLegacyFormController } from "../../utils/forms/index";
import { addEventListener, getAriaLabel, removeEventListener } from "../../utils/helpers";
import { printIonWarning } from "../../utils/logging/index";
import { createColorClasses, hostContext } from "../../utils/theme";
import { getIonMode } from "../../global/ionic-global";
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @slot - The label text to associate with the radio. Use the "labelPlacement" property to control where the label is placed relative to the radio.
 *
 * @part container - The container for the radio mark.
 * @part mark - The checkmark or dot used to indicate the checked state.
 */
export class Radio {
  constructor() {
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
    this.legacyFormController = createLegacyFormController(this.el);
    if (this.value === undefined) {
      this.value = this.inputId;
    }
    const radioGroup = (this.radioGroup = this.el.closest('ion-radio-group'));
    if (radioGroup) {
      this.updateState();
      addEventListener(radioGroup, 'ionValueChange', this.updateState);
    }
  }
  disconnectedCallback() {
    const radioGroup = this.radioGroup;
    if (radioGroup) {
      removeEventListener(radioGroup, 'ionValueChange', this.updateState);
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
    return (h("div", { class: "radio-icon", part: "container" }, h("div", { class: "radio-inner", part: "mark" }), h("div", { class: "radio-ripple" })));
  }
  render() {
    const { legacyFormController } = this;
    return legacyFormController.hasLegacyControl() ? this.renderLegacyRadio() : this.renderRadio();
  }
  renderRadio() {
    const { checked, disabled, color, el, justify, labelPlacement, hasLabel, buttonTabindex } = this;
    const mode = getIonMode(this);
    const inItem = hostContext('ion-item', el);
    return (h(Host, { onFocus: this.onFocus, onBlur: this.onBlur, onClick: this.onClick, class: createColorClasses(color, {
        [mode]: true,
        'in-item': inItem,
        'radio-checked': checked,
        'radio-disabled': disabled,
        [`radio-justify-${justify}`]: true,
        [`radio-label-placement-${labelPlacement}`]: true,
        // Focus and active styling should not apply when the radio is in an item
        'ion-activatable': !inItem,
        'ion-focusable': !inItem,
      }), role: "radio", "aria-checked": checked ? 'true' : 'false', "aria-disabled": disabled ? 'true' : null, tabindex: buttonTabindex }, h("label", { class: "radio-wrapper" }, h("div", { class: {
        'label-text-wrapper': true,
        'label-text-wrapper-hidden': !hasLabel,
      } }, h("slot", null)), h("div", { class: "native-wrapper" }, this.renderRadioControl()))));
  }
  renderLegacyRadio() {
    if (!this.hasLoggedDeprecationWarning) {
      printIonWarning(`ion-radio now requires providing a label with either the default slot or the "aria-label" attribute. To migrate, remove any usage of "ion-label" and pass the label text to either the component or the "aria-label" attribute.

Example: <ion-radio>Option Label</ion-radio>
Example with aria-label: <ion-radio aria-label="Option Label"></ion-radio>

Developers can use the "legacy" property to continue using the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.`, this.el);
      if (this.legacy) {
        printIonWarning(`ion-radio is being used with the "legacy" property enabled which will forcibly enable the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.

Developers can dismiss this warning by removing their usage of the "legacy" property and using the new radio syntax.`, this.el);
      }
      this.hasLoggedDeprecationWarning = true;
    }
    const { inputId, disabled, checked, color, el, buttonTabindex } = this;
    const mode = getIonMode(this);
    const { label, labelId, labelText } = getAriaLabel(el, inputId);
    return (h(Host, { "aria-checked": `${checked}`, "aria-hidden": disabled ? 'true' : null, "aria-labelledby": label ? labelId : null, role: "radio", tabindex: buttonTabindex, onFocus: this.onFocus, onBlur: this.onBlur, onClick: this.onClick, class: createColorClasses(color, {
        [mode]: true,
        'in-item': hostContext('ion-item', el),
        interactive: true,
        'radio-checked': checked,
        'radio-disabled': disabled,
        'legacy-radio': true,
      }) }, this.renderRadioControl(), h("label", { htmlFor: inputId }, labelText), h("input", { type: "radio", checked: checked, disabled: disabled, tabindex: "-1", id: inputId, ref: (nativeEl) => (this.nativeInput = nativeEl) })));
  }
  static get is() { return "ion-radio"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "ios": ["radio.ios.scss"],
      "md": ["radio.md.scss"]
    };
  }
  static get styleUrls() {
    return {
      "ios": ["radio.ios.css"],
      "md": ["radio.md.css"]
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
          "text": "If `true`, the user cannot interact with the radio."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "value": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "any | null",
          "resolved": "any",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "the value of the radio."
        },
        "attribute": "value",
        "reflect": false
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
          "text": "Where to place the label relative to the radio.\n`\"start\"`: The label will appear to the left of the radio in LTR and to the right in RTL.\n`\"end\"`: The label will appear to the right of the radio in LTR and to the left in RTL.\n`\"fixed\"`: The label has the same behavior as `\"start\"` except it also has a fixed width. Long text will be truncated with ellipses (\"...\")."
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
          "text": "Set the `legacy` property to `true` to forcibly use the legacy form control markup.\nIonic will only opt components in to the modern form markup when they are\nusing either the `aria-label` attribute or the default slot that contains\nthe label text. As a result, the `legacy` property should only be used as\nan escape hatch when you want to avoid this automatic opt-in behavior.\nNote that this property will be removed in an upcoming major release\nof Ionic, and all form components will be opted-in to using the modern form markup."
        },
        "attribute": "legacy",
        "reflect": false
      },
      "justify": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'start' | 'end' | 'space-between'",
          "resolved": "\"end\" | \"space-between\" | \"start\"",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "How to pack the label and radio within a line.\n`\"start\"`: The label and radio will appear on the left in LTR and\non the right in RTL.\n`\"end\"`: The label and radio will appear on the right in LTR and\non the left in RTL.\n`\"space-between\"`: The label and radio will appear on opposite\nends of the line with space between the two elements."
        },
        "attribute": "justify",
        "reflect": false,
        "defaultValue": "'space-between'"
      }
    };
  }
  static get states() {
    return {
      "checked": {},
      "buttonTabindex": {}
    };
  }
  static get events() {
    return [{
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
          "text": "Emitted when the radio button has focus."
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
          "text": "Emitted when the radio button loses focus."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "setFocus": {
        "complexType": {
          "signature": "(ev: any) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global",
              "id": "global::Promise"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": [{
              "name": "internal",
              "text": undefined
            }]
        }
      },
      "setButtonTabindex": {
        "complexType": {
          "signature": "(value: number) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global",
              "id": "global::Promise"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": [{
              "name": "internal",
              "text": undefined
            }]
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "value",
        "methodName": "valueChanged"
      }, {
        "propName": "checked",
        "methodName": "styleChanged"
      }, {
        "propName": "color",
        "methodName": "styleChanged"
      }, {
        "propName": "disabled",
        "methodName": "styleChanged"
      }];
  }
}
let radioButtonIds = 0;
