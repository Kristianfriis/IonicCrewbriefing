/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from "@stencil/core";
import { createLegacyFormController } from "../../utils/forms/index";
import { getAriaLabel, inheritAriaAttributes, renderHiddenInput } from "../../utils/helpers";
import { printIonWarning } from "../../utils/logging/index";
import { createColorClasses, hostContext } from "../../utils/theme";
import { getIonMode } from "../../global/ionic-global";
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @slot - The label text to associate with the checkbox. Use the "labelPlacement" property to control where the label is placed relative to the checkbox.
 *
 * @part container - The container for the checkbox mark.
 * @part mark - The checkmark used to indicate the checked state.
 */
export class Checkbox {
  constructor() {
    this.inputId = `ion-cb-${checkboxIds++}`;
    this.inheritedAttributes = {};
    // TODO(FW-3100): remove this
    // This flag ensures we log the deprecation warning at most once.
    this.hasLoggedDeprecationWarning = false;
    /**
     * Sets the checked property and emits
     * the ionChange event. Use this to update the
     * checked state in response to user-generated
     * actions such as a click.
     */
    this.setChecked = (state) => {
      const isChecked = (this.checked = state);
      this.ionChange.emit({
        checked: isChecked,
        value: this.value,
      });
    };
    this.toggleChecked = (ev) => {
      ev.preventDefault();
      this.setFocus();
      this.setChecked(!this.checked);
      this.indeterminate = false;
    };
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.color = undefined;
    this.name = this.inputId;
    this.checked = false;
    this.indeterminate = false;
    this.disabled = false;
    this.value = 'on';
    this.labelPlacement = 'start';
    this.justify = 'space-between';
    this.legacy = undefined;
  }
  // TODO(FW-3100): remove this
  connectedCallback() {
    this.legacyFormController = createLegacyFormController(this.el);
  }
  componentWillLoad() {
    this.emitStyle();
    // TODO(FW-3100): remove check
    if (!this.legacyFormController.hasLegacyControl()) {
      this.inheritedAttributes = Object.assign({}, inheritAriaAttributes(this.el));
    }
  }
  styleChanged() {
    this.emitStyle();
  }
  emitStyle() {
    const style = {
      'interactive-disabled': this.disabled,
    };
    // TODO(FW-3100): remove this
    if (this.legacyFormController.hasLegacyControl()) {
      style['checkbox-checked'] = this.checked;
    }
    this.ionStyle.emit(style);
  }
  setFocus() {
    if (this.focusEl) {
      this.focusEl.focus();
    }
  }
  // TODO(FW-3100): run contents of renderCheckbox directly instead
  render() {
    const { legacyFormController } = this;
    return legacyFormController.hasLegacyControl() ? this.renderLegacyCheckbox() : this.renderCheckbox();
  }
  renderCheckbox() {
    const { color, checked, disabled, el, getSVGPath, indeterminate, inheritedAttributes, inputId, justify, labelPlacement, name, value, } = this;
    const mode = getIonMode(this);
    const path = getSVGPath(mode, indeterminate);
    renderHiddenInput(true, el, name, checked ? value : '', disabled);
    return (h(Host, { class: createColorClasses(color, {
        [mode]: true,
        'in-item': hostContext('ion-item', el),
        'checkbox-checked': checked,
        'checkbox-disabled': disabled,
        'checkbox-indeterminate': indeterminate,
        interactive: true,
        [`checkbox-justify-${justify}`]: true,
        [`checkbox-label-placement-${labelPlacement}`]: true,
      }) }, h("label", { class: "checkbox-wrapper" }, h("input", Object.assign({ type: "checkbox", checked: checked ? true : undefined, disabled: disabled, id: inputId, onChange: this.toggleChecked, onFocus: () => this.onFocus(), onBlur: () => this.onBlur(), ref: (focusEl) => (this.focusEl = focusEl) }, inheritedAttributes)), h("div", { class: {
        'label-text-wrapper': true,
        'label-text-wrapper-hidden': el.textContent === '',
      } }, h("slot", null)), h("div", { class: "native-wrapper" }, h("svg", { class: "checkbox-icon", viewBox: "0 0 24 24", part: "container" }, path)))));
  }
  // TODO(FW-3100): remove this
  renderLegacyCheckbox() {
    if (!this.hasLoggedDeprecationWarning) {
      printIonWarning(`ion-checkbox now requires providing a label with either the default slot or the "aria-label" attribute. To migrate, remove any usage of "ion-label" and pass the label text to either the component or the "aria-label" attribute.

Example: <ion-checkbox>Label</ion-checkbox>
Example with aria-label: <ion-checkbox aria-label="Label"></ion-checkbox>

Developers can use the "legacy" property to continue using the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.`, this.el);
      if (this.legacy) {
        printIonWarning(`ion-checkbox is being used with the "legacy" property enabled which will forcibly enable the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.
Developers can dismiss this warning by removing their usage of the "legacy" property and using the new checkbox syntax.`, this.el);
      }
      this.hasLoggedDeprecationWarning = true;
    }
    const { color, checked, disabled, el, getSVGPath, indeterminate, inputId, name, value } = this;
    const mode = getIonMode(this);
    const { label, labelId, labelText } = getAriaLabel(el, inputId);
    const path = getSVGPath(mode, indeterminate);
    renderHiddenInput(true, el, name, checked ? value : '', disabled);
    return (h(Host, { "aria-labelledby": label ? labelId : null, "aria-checked": `${checked}`, "aria-hidden": disabled ? 'true' : null, role: "checkbox", class: createColorClasses(color, {
        [mode]: true,
        'in-item': hostContext('ion-item', el),
        'checkbox-checked': checked,
        'checkbox-disabled': disabled,
        'checkbox-indeterminate': indeterminate,
        'legacy-checkbox': true,
        interactive: true,
      }) }, h("svg", { class: "checkbox-icon", viewBox: "0 0 24 24", part: "container" }, path), h("label", { htmlFor: inputId }, labelText), h("input", { type: "checkbox", "aria-checked": `${checked}`, disabled: disabled, id: inputId, onChange: this.toggleChecked, onFocus: () => this.onFocus(), onBlur: () => this.onBlur(), ref: (focusEl) => (this.focusEl = focusEl) })));
  }
  getSVGPath(mode, indeterminate) {
    let path = indeterminate ? (h("path", { d: "M6 12L18 12", part: "mark" })) : (h("path", { d: "M5.9,12.5l3.8,3.8l8.8-8.8", part: "mark" }));
    if (mode === 'md') {
      path = indeterminate ? (h("path", { d: "M2 12H22", part: "mark" })) : (h("path", { d: "M1.73,12.91 8.1,19.28 22.79,4.59", part: "mark" }));
    }
    return path;
  }
  static get is() { return "ion-checkbox"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "ios": ["checkbox.ios.scss"],
      "md": ["checkbox.md.scss"]
    };
  }
  static get styleUrls() {
    return {
      "ios": ["checkbox.ios.css"],
      "md": ["checkbox.md.css"]
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
      "checked": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true`, the checkbox is selected."
        },
        "attribute": "checked",
        "reflect": false,
        "defaultValue": "false"
      },
      "indeterminate": {
        "type": "boolean",
        "mutable": true,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "If `true`, the checkbox will visually appear as indeterminate."
        },
        "attribute": "indeterminate",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "If `true`, the user cannot interact with the checkbox."
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
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The value of the checkbox does not mean if it's checked or not, use the `checked`\nproperty for that.\n\nThe value of a checkbox is analogous to the value of an `<input type=\"checkbox\">`,\nit's only used when the checkbox participates in a native `<form>`."
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "'on'"
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
          "text": "Where to place the label relative to the checkbox.\n`\"start\"`: The label will appear to the left of the checkbox in LTR and to the right in RTL.\n`\"end\"`: The label will appear to the right of the checkbox in LTR and to the left in RTL.\n`\"fixed\"`: The label has the same behavior as `\"start\"` except it also has a fixed width. Long text will be truncated with ellipses (\"...\")."
        },
        "attribute": "label-placement",
        "reflect": false,
        "defaultValue": "'start'"
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
          "text": "How to pack the label and checkbox within a line.\n`\"start\"`: The label and checkbox will appear on the left in LTR and\non the right in RTL.\n`\"end\"`: The label and checkbox will appear on the right in LTR and\non the left in RTL.\n`\"space-between\"`: The label and checkbox will appear on opposite\nends of the line with space between the two elements."
        },
        "attribute": "justify",
        "reflect": false,
        "defaultValue": "'space-between'"
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
          "text": "Set the `legacy` property to `true` to forcibly use the legacy form control markup.\nIonic will only opt checkboxes in to the modern form markup when they are\nusing either the `aria-label` attribute or have text in the default slot. As a result,\nthe `legacy` property should only be used as an escape hatch when you want to\navoid this automatic opt-in behavior.\n\nNote that this property will be removed in an upcoming major release\nof Ionic, and all form components will be opted-in to using the modern form markup."
        },
        "attribute": "legacy",
        "reflect": false
      }
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
          "text": "Emitted when the checked property has changed\nas a result of a user action such as a click.\nThis event will not emit when programmatically\nsetting the checked property."
        },
        "complexType": {
          "original": "CheckboxChangeEventDetail",
          "resolved": "CheckboxChangeEventDetail<any>",
          "references": {
            "CheckboxChangeEventDetail": {
              "location": "import",
              "path": "./checkbox-interface",
              "id": "src/components/checkbox/checkbox-interface.ts::CheckboxChangeEventDetail"
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
          "text": "Emitted when the checkbox has focus."
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
          "text": "Emitted when the checkbox loses focus."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
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
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "checked",
        "methodName": "styleChanged"
      }, {
        "propName": "disabled",
        "methodName": "styleChanged"
      }];
  }
}
let checkboxIds = 0;