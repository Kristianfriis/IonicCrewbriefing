/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from "@stencil/core";
import { raf } from "../../utils/helpers";
import { createDelegateController, createTriggerController, BACKDROP, dismiss, eventMethod, isCancel, prepareOverlay, present, safeCall, setOverlayId, } from "../../utils/overlays";
import { getClassMap } from "../../utils/theme";
import { getIonMode } from "../../global/ionic-global";
import { iosEnterAnimation } from "./animations/ios.enter";
import { iosLeaveAnimation } from "./animations/ios.leave";
// TODO(FW-2832): types
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
export class Picker {
  constructor() {
    this.delegateController = createDelegateController(this);
    this.triggerController = createTriggerController();
    this.onBackdropTap = () => {
      this.dismiss(undefined, BACKDROP);
    };
    this.dispatchCancelHandler = (ev) => {
      const role = ev.detail.role;
      if (isCancel(role)) {
        const cancelButton = this.buttons.find((b) => b.role === 'cancel');
        this.callButtonHandler(cancelButton);
      }
    };
    this.presented = false;
    this.overlayIndex = undefined;
    this.delegate = undefined;
    this.hasController = false;
    this.keyboardClose = true;
    this.enterAnimation = undefined;
    this.leaveAnimation = undefined;
    this.buttons = [];
    this.columns = [];
    this.cssClass = undefined;
    this.duration = 0;
    this.showBackdrop = true;
    this.backdropDismiss = true;
    this.animated = true;
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
    prepareOverlay(this.el);
    this.triggerChanged();
  }
  disconnectedCallback() {
    this.triggerController.removeClickListener();
  }
  componentWillLoad() {
    setOverlayId(this.el);
  }
  componentDidLoad() {
    /**
     * If picker was rendered with isOpen="true"
     * then we should open picker immediately.
     */
    if (this.isOpen === true) {
      raf(() => this.present());
    }
  }
  /**
   * Present the picker overlay after it has been created.
   */
  async present() {
    /**
     * When using an inline picker
     * and dismissing an picker it is possible to
     * quickly present the picker while it is
     * dismissing. We need to await any current
     * transition to allow the dismiss to finish
     * before presenting again.
     */
    if (this.currentTransition !== undefined) {
      await this.currentTransition;
    }
    await this.delegateController.attachViewToDom();
    this.currentTransition = present(this, 'pickerEnter', iosEnterAnimation, iosEnterAnimation, undefined);
    await this.currentTransition;
    this.currentTransition = undefined;
    if (this.duration > 0) {
      this.durationTimeout = setTimeout(() => this.dismiss(), this.duration);
    }
  }
  /**
   * Dismiss the picker overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the picker.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the picker.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   */
  async dismiss(data, role) {
    if (this.durationTimeout) {
      clearTimeout(this.durationTimeout);
    }
    this.currentTransition = dismiss(this, data, role, 'pickerLeave', iosLeaveAnimation, iosLeaveAnimation);
    const dismissed = await this.currentTransition;
    if (dismissed) {
      this.delegateController.removeViewFromDom();
    }
    return dismissed;
  }
  /**
   * Returns a promise that resolves when the picker did dismiss.
   */
  onDidDismiss() {
    return eventMethod(this.el, 'ionPickerDidDismiss');
  }
  /**
   * Returns a promise that resolves when the picker will dismiss.
   */
  onWillDismiss() {
    return eventMethod(this.el, 'ionPickerWillDismiss');
  }
  /**
   * Get the column that matches the specified name.
   *
   * @param name The name of the column.
   */
  getColumn(name) {
    return Promise.resolve(this.columns.find((column) => column.name === name));
  }
  async buttonClick(button) {
    const role = button.role;
    if (isCancel(role)) {
      return this.dismiss(undefined, role);
    }
    const shouldDismiss = await this.callButtonHandler(button);
    if (shouldDismiss) {
      return this.dismiss(this.getSelected(), button.role);
    }
    return Promise.resolve();
  }
  async callButtonHandler(button) {
    if (button) {
      // a handler has been provided, execute it
      // pass the handler the values from the inputs
      const rtn = await safeCall(button.handler, this.getSelected());
      if (rtn === false) {
        // if the return value of the handler is false then do not dismiss
        return false;
      }
    }
    return true;
  }
  getSelected() {
    const selected = {};
    this.columns.forEach((col, index) => {
      const selectedColumn = col.selectedIndex !== undefined ? col.options[col.selectedIndex] : undefined;
      selected[col.name] = {
        text: selectedColumn ? selectedColumn.text : undefined,
        value: selectedColumn ? selectedColumn.value : undefined,
        columnIndex: index,
      };
    });
    return selected;
  }
  render() {
    const { htmlAttributes } = this;
    const mode = getIonMode(this);
    return (h(Host, Object.assign({ "aria-modal": "true", tabindex: "-1" }, htmlAttributes, { style: {
        zIndex: `${20000 + this.overlayIndex}`,
      }, class: Object.assign({ [mode]: true,
        // Used internally for styling
        [`picker-${mode}`]: true, 'overlay-hidden': true }, getClassMap(this.cssClass)), onIonBackdropTap: this.onBackdropTap, onIonPickerWillDismiss: this.dispatchCancelHandler }), h("ion-backdrop", { visible: this.showBackdrop, tappable: this.backdropDismiss }), h("div", { tabindex: "0" }), h("div", { class: "picker-wrapper ion-overlay-wrapper", role: "dialog" }, h("div", { class: "picker-toolbar" }, this.buttons.map((b) => (h("div", { class: buttonWrapperClass(b) }, h("button", { type: "button", onClick: () => this.buttonClick(b), class: buttonClass(b) }, b.text))))), h("div", { class: "picker-columns" }, h("div", { class: "picker-above-highlight" }), this.presented && this.columns.map((c) => h("ion-picker-column", { col: c })), h("div", { class: "picker-below-highlight" }))), h("div", { tabindex: "0" })));
  }
  static get is() { return "ion-picker"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "ios": ["picker.ios.scss"],
      "md": ["picker.md.scss"]
    };
  }
  static get styleUrls() {
    return {
      "ios": ["picker.ios.css"],
      "md": ["picker.md.css"]
    };
  }
  static get properties() {
    return {
      "overlayIndex": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [{
              "name": "internal",
              "text": undefined
            }],
          "text": ""
        },
        "attribute": "overlay-index",
        "reflect": false
      },
      "delegate": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "FrameworkDelegate",
          "resolved": "FrameworkDelegate | undefined",
          "references": {
            "FrameworkDelegate": {
              "location": "import",
              "path": "../../interface",
              "id": "src/interface.d.ts::FrameworkDelegate"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [{
              "name": "internal",
              "text": undefined
            }],
          "text": ""
        }
      },
      "hasController": {
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
          "tags": [{
              "name": "internal",
              "text": undefined
            }],
          "text": ""
        },
        "attribute": "has-controller",
        "reflect": false,
        "defaultValue": "false"
      },
      "keyboardClose": {
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
          "text": "If `true`, the keyboard will be automatically dismissed when the overlay is presented."
        },
        "attribute": "keyboard-close",
        "reflect": false,
        "defaultValue": "true"
      },
      "enterAnimation": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "AnimationBuilder",
          "resolved": "((baseEl: any, opts?: any) => Animation) | undefined",
          "references": {
            "AnimationBuilder": {
              "location": "import",
              "path": "../../interface",
              "id": "src/interface.d.ts::AnimationBuilder"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Animation to use when the picker is presented."
        }
      },
      "leaveAnimation": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "AnimationBuilder",
          "resolved": "((baseEl: any, opts?: any) => Animation) | undefined",
          "references": {
            "AnimationBuilder": {
              "location": "import",
              "path": "../../interface",
              "id": "src/interface.d.ts::AnimationBuilder"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Animation to use when the picker is dismissed."
        }
      },
      "buttons": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "PickerButton[]",
          "resolved": "PickerButton[]",
          "references": {
            "PickerButton": {
              "location": "import",
              "path": "./picker-interface",
              "id": "src/components/picker/picker-interface.ts::PickerButton"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Array of buttons to be displayed at the top of the picker."
        },
        "defaultValue": "[]"
      },
      "columns": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "PickerColumn[]",
          "resolved": "PickerColumn[]",
          "references": {
            "PickerColumn": {
              "location": "import",
              "path": "./picker-interface",
              "id": "src/components/picker/picker-interface.ts::PickerColumn"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Array of columns to be displayed in the picker."
        },
        "defaultValue": "[]"
      },
      "cssClass": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | string[]",
          "resolved": "string | string[] | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Additional classes to apply for custom CSS. If multiple classes are\nprovided they should be separated by spaces."
        },
        "attribute": "css-class",
        "reflect": false
      },
      "duration": {
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
          "text": "Number of milliseconds to wait before dismissing the picker."
        },
        "attribute": "duration",
        "reflect": false,
        "defaultValue": "0"
      },
      "showBackdrop": {
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
          "text": "If `true`, a backdrop will be displayed behind the picker."
        },
        "attribute": "show-backdrop",
        "reflect": false,
        "defaultValue": "true"
      },
      "backdropDismiss": {
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
          "text": "If `true`, the picker will be dismissed when the backdrop is clicked."
        },
        "attribute": "backdrop-dismiss",
        "reflect": false,
        "defaultValue": "true"
      },
      "animated": {
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
          "text": "If `true`, the picker will animate."
        },
        "attribute": "animated",
        "reflect": false,
        "defaultValue": "true"
      },
      "htmlAttributes": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "{ [key: string]: any }",
          "resolved": "undefined | { [key: string]: any; }",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Additional attributes to pass to the picker."
        }
      },
      "isOpen": {
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
          "text": "If `true`, the picker will open. If `false`, the picker will close.\nUse this if you need finer grained control over presentation, otherwise\njust use the pickerController or the `trigger` property.\nNote: `isOpen` will not automatically be set back to `false` when\nthe picker dismisses. You will need to do that in your code."
        },
        "attribute": "is-open",
        "reflect": false,
        "defaultValue": "false"
      },
      "trigger": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | undefined",
          "resolved": "string | undefined",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "An ID corresponding to the trigger element that\ncauses the picker to open when clicked."
        },
        "attribute": "trigger",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "presented": {}
    };
  }
  static get events() {
    return [{
        "method": "didPresent",
        "name": "ionPickerDidPresent",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted after the picker has presented."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }, {
        "method": "willPresent",
        "name": "ionPickerWillPresent",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted before the picker has presented."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }, {
        "method": "willDismiss",
        "name": "ionPickerWillDismiss",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted before the picker has dismissed."
        },
        "complexType": {
          "original": "OverlayEventDetail",
          "resolved": "OverlayEventDetail<any>",
          "references": {
            "OverlayEventDetail": {
              "location": "import",
              "path": "../../utils/overlays-interface",
              "id": "src/utils/overlays-interface.ts::OverlayEventDetail"
            }
          }
        }
      }, {
        "method": "didDismiss",
        "name": "ionPickerDidDismiss",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted after the picker has dismissed."
        },
        "complexType": {
          "original": "OverlayEventDetail",
          "resolved": "OverlayEventDetail<any>",
          "references": {
            "OverlayEventDetail": {
              "location": "import",
              "path": "../../utils/overlays-interface",
              "id": "src/utils/overlays-interface.ts::OverlayEventDetail"
            }
          }
        }
      }, {
        "method": "didPresentShorthand",
        "name": "didPresent",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted after the picker has presented.\nShorthand for ionPickerWillDismiss."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }, {
        "method": "willPresentShorthand",
        "name": "willPresent",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted before the picker has presented.\nShorthand for ionPickerWillPresent."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }, {
        "method": "willDismissShorthand",
        "name": "willDismiss",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted before the picker has dismissed.\nShorthand for ionPickerWillDismiss."
        },
        "complexType": {
          "original": "OverlayEventDetail",
          "resolved": "OverlayEventDetail<any>",
          "references": {
            "OverlayEventDetail": {
              "location": "import",
              "path": "../../utils/overlays-interface",
              "id": "src/utils/overlays-interface.ts::OverlayEventDetail"
            }
          }
        }
      }, {
        "method": "didDismissShorthand",
        "name": "didDismiss",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted after the picker has dismissed.\nShorthand for ionPickerDidDismiss."
        },
        "complexType": {
          "original": "OverlayEventDetail",
          "resolved": "OverlayEventDetail<any>",
          "references": {
            "OverlayEventDetail": {
              "location": "import",
              "path": "../../utils/overlays-interface",
              "id": "src/utils/overlays-interface.ts::OverlayEventDetail"
            }
          }
        }
      }];
  }
  static get methods() {
    return {
      "present": {
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
          "text": "Present the picker overlay after it has been created.",
          "tags": []
        }
      },
      "dismiss": {
        "complexType": {
          "signature": "(data?: any, role?: string) => Promise<boolean>",
          "parameters": [{
              "tags": [{
                  "name": "param",
                  "text": "data Any data to emit in the dismiss events."
                }],
              "text": "Any data to emit in the dismiss events."
            }, {
              "tags": [{
                  "name": "param",
                  "text": "role The role of the element that is dismissing the picker.\nThis can be useful in a button handler for determining which button was\nclicked to dismiss the picker.\nSome examples include: ``\"cancel\"`, `\"destructive\"`, \"selected\"`, and `\"backdrop\"`."
                }],
              "text": "The role of the element that is dismissing the picker.\nThis can be useful in a button handler for determining which button was\nclicked to dismiss the picker.\nSome examples include: ``\"cancel\"`, `\"destructive\"`, \"selected\"`, and `\"backdrop\"`."
            }],
          "references": {
            "Promise": {
              "location": "global",
              "id": "global::Promise"
            }
          },
          "return": "Promise<boolean>"
        },
        "docs": {
          "text": "Dismiss the picker overlay after it has been presented.",
          "tags": [{
              "name": "param",
              "text": "data Any data to emit in the dismiss events."
            }, {
              "name": "param",
              "text": "role The role of the element that is dismissing the picker.\nThis can be useful in a button handler for determining which button was\nclicked to dismiss the picker.\nSome examples include: ``\"cancel\"`, `\"destructive\"`, \"selected\"`, and `\"backdrop\"`."
            }]
        }
      },
      "onDidDismiss": {
        "complexType": {
          "signature": "<T = any>() => Promise<OverlayEventDetail<T>>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global",
              "id": "global::Promise"
            },
            "OverlayEventDetail": {
              "location": "import",
              "path": "../../utils/overlays-interface",
              "id": "src/utils/overlays-interface.ts::OverlayEventDetail"
            },
            "T": {
              "location": "global",
              "id": "global::T"
            }
          },
          "return": "Promise<OverlayEventDetail<T>>"
        },
        "docs": {
          "text": "Returns a promise that resolves when the picker did dismiss.",
          "tags": []
        }
      },
      "onWillDismiss": {
        "complexType": {
          "signature": "<T = any>() => Promise<OverlayEventDetail<T>>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global",
              "id": "global::Promise"
            },
            "OverlayEventDetail": {
              "location": "import",
              "path": "../../utils/overlays-interface",
              "id": "src/utils/overlays-interface.ts::OverlayEventDetail"
            },
            "T": {
              "location": "global",
              "id": "global::T"
            }
          },
          "return": "Promise<OverlayEventDetail<T>>"
        },
        "docs": {
          "text": "Returns a promise that resolves when the picker will dismiss.",
          "tags": []
        }
      },
      "getColumn": {
        "complexType": {
          "signature": "(name: string) => Promise<PickerColumn | undefined>",
          "parameters": [{
              "tags": [{
                  "name": "param",
                  "text": "name The name of the column."
                }],
              "text": "The name of the column."
            }],
          "references": {
            "Promise": {
              "location": "global",
              "id": "global::Promise"
            },
            "PickerColumn": {
              "location": "import",
              "path": "./picker-interface",
              "id": "src/components/picker/picker-interface.ts::PickerColumn"
            }
          },
          "return": "Promise<PickerColumn | undefined>"
        },
        "docs": {
          "text": "Get the column that matches the specified name.",
          "tags": [{
              "name": "param",
              "text": "name The name of the column."
            }]
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "isOpen",
        "methodName": "onIsOpenChange"
      }, {
        "propName": "trigger",
        "methodName": "triggerChanged"
      }];
  }
}
const buttonWrapperClass = (button) => {
  return {
    [`picker-toolbar-${button.role}`]: button.role !== undefined,
    'picker-toolbar-button': true,
  };
};
const buttonClass = (button) => {
  return Object.assign({ 'picker-button': true, 'ion-activatable': true }, getClassMap(button.cssClass));
};
