/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h, readTask } from "@stencil/core";
import { createButtonActiveGesture } from "../../utils/gesture/button-active";
import { raf } from "../../utils/helpers";
import { BACKDROP, createDelegateController, createTriggerController, dismiss, eventMethod, isCancel, prepareOverlay, present, safeCall, setOverlayId, } from "../../utils/overlays";
import { getClassMap } from "../../utils/theme";
import { getIonMode } from "../../global/ionic-global";
import { iosEnterAnimation } from "./animations/ios.enter";
import { iosLeaveAnimation } from "./animations/ios.leave";
import { mdEnterAnimation } from "./animations/md.enter";
import { mdLeaveAnimation } from "./animations/md.leave";
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
export class ActionSheet {
  constructor() {
    this.delegateController = createDelegateController(this);
    this.triggerController = createTriggerController();
    this.presented = false;
    this.onBackdropTap = () => {
      this.dismiss(undefined, BACKDROP);
    };
    this.dispatchCancelHandler = (ev) => {
      const role = ev.detail.role;
      if (isCancel(role)) {
        const cancelButton = this.getButtons().find((b) => b.role === 'cancel');
        this.callButtonHandler(cancelButton);
      }
    };
    this.overlayIndex = undefined;
    this.delegate = undefined;
    this.hasController = false;
    this.keyboardClose = true;
    this.enterAnimation = undefined;
    this.leaveAnimation = undefined;
    this.buttons = [];
    this.cssClass = undefined;
    this.backdropDismiss = true;
    this.header = undefined;
    this.subHeader = undefined;
    this.translucent = false;
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
  /**
   * Present the action sheet overlay after it has been created.
   */
  async present() {
    /**
     * When using an inline action sheet
     * and dismissing a action sheet it is possible to
     * quickly present the action sheet while it is
     * dismissing. We need to await any current
     * transition to allow the dismiss to finish
     * before presenting again.
     */
    if (this.currentTransition !== undefined) {
      await this.currentTransition;
    }
    await this.delegateController.attachViewToDom();
    this.currentTransition = present(this, 'actionSheetEnter', iosEnterAnimation, mdEnterAnimation);
    await this.currentTransition;
    this.currentTransition = undefined;
  }
  /**
   * Dismiss the action sheet overlay after it has been presented.
   *
   * @param data Any data to emit in the dismiss events.
   * @param role The role of the element that is dismissing the action sheet.
   * This can be useful in a button handler for determining which button was
   * clicked to dismiss the action sheet.
   * Some examples include: ``"cancel"`, `"destructive"`, "selected"`, and `"backdrop"`.
   */
  async dismiss(data, role) {
    this.currentTransition = dismiss(this, data, role, 'actionSheetLeave', iosLeaveAnimation, mdLeaveAnimation);
    const dismissed = await this.currentTransition;
    if (dismissed) {
      this.delegateController.removeViewFromDom();
    }
    return dismissed;
  }
  /**
   * Returns a promise that resolves when the action sheet did dismiss.
   */
  onDidDismiss() {
    return eventMethod(this.el, 'ionActionSheetDidDismiss');
  }
  /**
   * Returns a promise that resolves when the action sheet will dismiss.
   *
   */
  onWillDismiss() {
    return eventMethod(this.el, 'ionActionSheetWillDismiss');
  }
  async buttonClick(button) {
    const role = button.role;
    if (isCancel(role)) {
      return this.dismiss(button.data, role);
    }
    const shouldDismiss = await this.callButtonHandler(button);
    if (shouldDismiss) {
      return this.dismiss(button.data, button.role);
    }
    return Promise.resolve();
  }
  async callButtonHandler(button) {
    if (button) {
      // a handler has been provided, execute it
      // pass the handler the values from the inputs
      const rtn = await safeCall(button.handler);
      if (rtn === false) {
        // if the return value of the handler is false then do not dismiss
        return false;
      }
    }
    return true;
  }
  getButtons() {
    return this.buttons.map((b) => {
      return typeof b === 'string' ? { text: b } : b;
    });
  }
  connectedCallback() {
    prepareOverlay(this.el);
    this.triggerChanged();
  }
  disconnectedCallback() {
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
    this.triggerController.removeClickListener();
  }
  componentWillLoad() {
    setOverlayId(this.el);
  }
  componentDidLoad() {
    /**
     * Only create gesture if:
     * 1. A gesture does not already exist
     * 2. App is running in iOS mode
     * 3. A wrapper ref exists
     * 4. A group ref exists
     */
    const { groupEl, wrapperEl } = this;
    if (!this.gesture && getIonMode(this) === 'ios' && wrapperEl && groupEl) {
      readTask(() => {
        const isScrollable = groupEl.scrollHeight > groupEl.clientHeight;
        if (!isScrollable) {
          this.gesture = createButtonActiveGesture(wrapperEl, (refEl) => refEl.classList.contains('action-sheet-button'));
          this.gesture.enable(true);
        }
      });
    }
    /**
     * If action sheet was rendered with isOpen="true"
     * then we should open action sheet immediately.
     */
    if (this.isOpen === true) {
      raf(() => this.present());
    }
  }
  render() {
    const { header, htmlAttributes, overlayIndex } = this;
    const mode = getIonMode(this);
    const allButtons = this.getButtons();
    const cancelButton = allButtons.find((b) => b.role === 'cancel');
    const buttons = allButtons.filter((b) => b.role !== 'cancel');
    const headerID = `action-sheet-${overlayIndex}-header`;
    return (h(Host, Object.assign({ role: "dialog", "aria-modal": "true", "aria-labelledby": header !== undefined ? headerID : null, tabindex: "-1" }, htmlAttributes, { style: {
        zIndex: `${20000 + this.overlayIndex}`,
      }, class: Object.assign(Object.assign({ [mode]: true }, getClassMap(this.cssClass)), { 'overlay-hidden': true, 'action-sheet-translucent': this.translucent }), onIonActionSheetWillDismiss: this.dispatchCancelHandler, onIonBackdropTap: this.onBackdropTap }), h("ion-backdrop", { tappable: this.backdropDismiss }), h("div", { tabindex: "0" }), h("div", { class: "action-sheet-wrapper ion-overlay-wrapper", ref: (el) => (this.wrapperEl = el) }, h("div", { class: "action-sheet-container" }, h("div", { class: "action-sheet-group", ref: (el) => (this.groupEl = el) }, header !== undefined && (h("div", { id: headerID, class: {
        'action-sheet-title': true,
        'action-sheet-has-sub-title': this.subHeader !== undefined,
      } }, header, this.subHeader && h("div", { class: "action-sheet-sub-title" }, this.subHeader))), buttons.map((b) => (h("button", Object.assign({}, b.htmlAttributes, { type: "button", id: b.id, class: buttonClass(b), onClick: () => this.buttonClick(b) }), h("span", { class: "action-sheet-button-inner" }, b.icon && h("ion-icon", { icon: b.icon, "aria-hidden": "true", lazy: false, class: "action-sheet-icon" }), b.text), mode === 'md' && h("ion-ripple-effect", null))))), cancelButton && (h("div", { class: "action-sheet-group action-sheet-group-cancel" }, h("button", Object.assign({}, cancelButton.htmlAttributes, { type: "button", class: buttonClass(cancelButton), onClick: () => this.buttonClick(cancelButton) }), h("span", { class: "action-sheet-button-inner" }, cancelButton.icon && (h("ion-icon", { icon: cancelButton.icon, "aria-hidden": "true", lazy: false, class: "action-sheet-icon" })), cancelButton.text), mode === 'md' && h("ion-ripple-effect", null)))))), h("div", { tabindex: "0" })));
  }
  static get is() { return "ion-action-sheet"; }
  static get encapsulation() { return "scoped"; }
  static get originalStyleUrls() {
    return {
      "ios": ["action-sheet.ios.scss"],
      "md": ["action-sheet.md.scss"]
    };
  }
  static get styleUrls() {
    return {
      "ios": ["action-sheet.ios.css"],
      "md": ["action-sheet.md.css"]
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
          "text": "Animation to use when the action sheet is presented."
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
          "text": "Animation to use when the action sheet is dismissed."
        }
      },
      "buttons": {
        "type": "unknown",
        "mutable": false,
        "complexType": {
          "original": "(ActionSheetButton | string)[]",
          "resolved": "(string | ActionSheetButton<any>)[]",
          "references": {
            "ActionSheetButton": {
              "location": "import",
              "path": "./action-sheet-interface",
              "id": "src/components/action-sheet/action-sheet-interface.ts::ActionSheetButton"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "An array of buttons for the action sheet."
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
          "text": "If `true`, the action sheet will be dismissed when the backdrop is clicked."
        },
        "attribute": "backdrop-dismiss",
        "reflect": false,
        "defaultValue": "true"
      },
      "header": {
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
          "text": "Title for the action sheet."
        },
        "attribute": "header",
        "reflect": false
      },
      "subHeader": {
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
          "text": "Subtitle for the action sheet."
        },
        "attribute": "sub-header",
        "reflect": false
      },
      "translucent": {
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
          "text": "If `true`, the action sheet will be translucent.\nOnly applies when the mode is `\"ios\"` and the device supports\n[`backdrop-filter`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter#Browser_compatibility)."
        },
        "attribute": "translucent",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "If `true`, the action sheet will animate."
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
          "text": "Additional attributes to pass to the action sheet."
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
          "text": "If `true`, the action sheet will open. If `false`, the action sheet will close.\nUse this if you need finer grained control over presentation, otherwise\njust use the actionSheetController or the `trigger` property.\nNote: `isOpen` will not automatically be set back to `false` when\nthe action sheet dismisses. You will need to do that in your code."
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
          "text": "An ID corresponding to the trigger element that\ncauses the action sheet to open when clicked."
        },
        "attribute": "trigger",
        "reflect": false
      }
    };
  }
  static get events() {
    return [{
        "method": "didPresent",
        "name": "ionActionSheetDidPresent",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted after the action sheet has presented."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }, {
        "method": "willPresent",
        "name": "ionActionSheetWillPresent",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted before the action sheet has presented."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }, {
        "method": "willDismiss",
        "name": "ionActionSheetWillDismiss",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted before the action sheet has dismissed."
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
        "name": "ionActionSheetDidDismiss",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted after the action sheet has dismissed."
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
          "text": "Emitted after the action sheet has presented.\nShorthand for ionActionSheetWillDismiss."
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
          "text": "Emitted before the action sheet has presented.\nShorthand for ionActionSheetWillPresent."
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
          "text": "Emitted before the action sheet has dismissed.\nShorthand for ionActionSheetWillDismiss."
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
          "text": "Emitted after the action sheet has dismissed.\nShorthand for ionActionSheetDidDismiss."
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
          "text": "Present the action sheet overlay after it has been created.",
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
                  "text": "role The role of the element that is dismissing the action sheet.\nThis can be useful in a button handler for determining which button was\nclicked to dismiss the action sheet.\nSome examples include: ``\"cancel\"`, `\"destructive\"`, \"selected\"`, and `\"backdrop\"`."
                }],
              "text": "The role of the element that is dismissing the action sheet.\nThis can be useful in a button handler for determining which button was\nclicked to dismiss the action sheet.\nSome examples include: ``\"cancel\"`, `\"destructive\"`, \"selected\"`, and `\"backdrop\"`."
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
          "text": "Dismiss the action sheet overlay after it has been presented.",
          "tags": [{
              "name": "param",
              "text": "data Any data to emit in the dismiss events."
            }, {
              "name": "param",
              "text": "role The role of the element that is dismissing the action sheet.\nThis can be useful in a button handler for determining which button was\nclicked to dismiss the action sheet.\nSome examples include: ``\"cancel\"`, `\"destructive\"`, \"selected\"`, and `\"backdrop\"`."
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
          "text": "Returns a promise that resolves when the action sheet did dismiss.",
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
          "text": "Returns a promise that resolves when the action sheet will dismiss.",
          "tags": []
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
const buttonClass = (button) => {
  return Object.assign({ 'action-sheet-button': true, 'ion-activatable': true, 'ion-focusable': true, [`action-sheet-${button.role}`]: button.role !== undefined }, getClassMap(button.cssClass));
};
