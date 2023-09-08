/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from "@stencil/core";
import { createLegacyFormController } from "../../utils/forms/index";
import { getAriaLabel, renderHiddenInput, inheritAriaAttributes } from "../../utils/helpers";
import { printIonWarning } from "../../utils/logging/index";
import { hapticSelection } from "../../utils/native/haptic";
import { isRTL } from "../../utils/rtl/index";
import { createColorClasses, hostContext } from "../../utils/theme";
import { checkmarkOutline, removeOutline, ellipseOutline } from "ionicons/icons";
import { config } from "../../global/config";
import { getIonMode } from "../../global/ionic-global";
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @slot - The label text to associate with the toggle. Use the "labelPlacement" property to control where the label is placed relative to the toggle.
 *
 * @part track - The background track of the toggle.
 * @part handle - The toggle handle, or knob, used to change the checked state.
 */
export class Toggle {
  constructor() {
    this.inputId = `ion-tg-${toggleIds++}`;
    this.lastDrag = 0;
    this.inheritedAttributes = {};
    this.didLoad = false;
    // This flag ensures we log the deprecation warning at most once.
    this.hasLoggedDeprecationWarning = false;
    this.setupGesture = async () => {
      const { toggleTrack } = this;
      if (toggleTrack) {
        this.gesture = (await import('../../utils/gesture')).createGesture({
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
  static get is() { return "ion-toggle"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "ios": ["toggle.ios.scss"],
      "md": ["toggle.md.scss"]
    };
  }
  static get styleUrls() {
    return {
      "ios": ["toggle.ios.css"],
      "md": ["toggle.md.css"]
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
          "text": "If `true`, the toggle is selected."
        },
        "attribute": "checked",
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
          "text": "If `true`, the user cannot interact with the toggle."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
      },
      "value": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | null",
          "resolved": "null | string | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The value of the toggle does not mean if it's checked or not, use the `checked`\nproperty for that.\n\nThe value of a toggle is analogous to the value of a `<input type=\"checkbox\">`,\nit's only used when the toggle participates in a native `<form>`."
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "'on'"
      },
      "enableOnOffLabels": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean | undefined",
          "resolved": "boolean | undefined",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Enables the on/off accessibility switch labels within the toggle."
        },
        "attribute": "enable-on-off-labels",
        "reflect": false,
        "defaultValue": "config.get('toggleOnOffLabels')"
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
          "text": "Where to place the label relative to the input.\n`\"start\"`: The label will appear to the left of the toggle in LTR and to the right in RTL.\n`\"end\"`: The label will appear to the right of the toggle in LTR and to the left in RTL.\n`\"fixed\"`: The label has the same behavior as `\"start\"` except it also has a fixed width. Long text will be truncated with ellipses (\"...\")."
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
          "text": "How to pack the label and toggle within a line.\n`\"start\"`: The label and toggle will appear on the left in LTR and\non the right in RTL.\n`\"end\"`: The label and toggle will appear on the right in LTR and\non the left in RTL.\n`\"space-between\"`: The label and toggle will appear on opposite\nends of the line with space between the two elements."
        },
        "attribute": "justify",
        "reflect": false,
        "defaultValue": "'space-between'"
      }
    };
  }
  static get states() {
    return {
      "activated": {}
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
          "text": "Emitted when the user switches the toggle on or off. Does not emit\nwhen programmatically changing the value of the `checked` property."
        },
        "complexType": {
          "original": "ToggleChangeEventDetail",
          "resolved": "ToggleChangeEventDetail<any>",
          "references": {
            "ToggleChangeEventDetail": {
              "location": "import",
              "path": "./toggle-interface",
              "id": "src/components/toggle/toggle-interface.ts::ToggleChangeEventDetail"
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
          "text": "Emitted when the toggle has focus."
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
          "text": "Emitted when the toggle loses focus."
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
        "propName": "disabled",
        "methodName": "disabledChanged"
      }];
  }
}
const shouldToggle = (rtl, checked, deltaX, margin) => {
  if (checked) {
    return (!rtl && margin > deltaX) || (rtl && -margin < deltaX);
  }
  else {
    return (!rtl && -margin < deltaX) || (rtl && margin > deltaX);
  }
};
let toggleIds = 0;
