/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h, forceUpdate } from "@stencil/core";
import { createLegacyFormController, createNotchController } from "../../utils/forms/index";
import { findItemLabel, focusElement, getAriaLabel, renderHiddenInput, inheritAttributes } from "../../utils/helpers";
import { printIonWarning } from "../../utils/logging/index";
import { actionSheetController, alertController, popoverController } from "../../utils/overlays";
import { isRTL } from "../../utils/rtl/index";
import { createColorClasses, hostContext } from "../../utils/theme";
import { watchForOptions } from "../../utils/watch-options";
import { caretDownSharp, chevronExpand } from "ionicons/icons";
import { getIonMode } from "../../global/ionic-global";
// TODO(FW-2832): types
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @slot label - The label text to associate with the select. Use the `labelPlacement` property to control where the label is placed relative to the select. Use this if you need to render a label with custom HTML.
 *
 * @part placeholder - The text displayed in the select when there is no value.
 * @part text - The displayed value of the select.
 * @part icon - The select icon container.
 * @part container - The container for the selected text or placeholder.
 * @part label - The label text describing the select.
 */
export class Select {
  constructor() {
    this.inputId = `ion-sel-${selectIds++}`;
    this.inheritedAttributes = {};
    // This flag ensures we log the deprecation warning at most once.
    this.hasLoggedDeprecationWarning = false;
    this.onClick = (ev) => {
      this.setFocus();
      this.open(ev);
    };
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.isExpanded = false;
    this.cancelText = 'Cancel';
    this.color = undefined;
    this.compareWith = undefined;
    this.disabled = false;
    this.fill = undefined;
    this.interface = 'alert';
    this.interfaceOptions = {};
    this.justify = 'space-between';
    this.label = undefined;
    this.labelPlacement = 'start';
    this.legacy = undefined;
    this.multiple = false;
    this.name = this.inputId;
    this.okText = 'OK';
    this.placeholder = undefined;
    this.selectedText = undefined;
    this.toggleIcon = undefined;
    this.expandedIcon = undefined;
    this.shape = undefined;
    this.value = undefined;
  }
  styleChanged() {
    this.emitStyle();
  }
  setValue(value) {
    this.value = value;
    this.ionChange.emit({ value });
  }
  componentWillLoad() {
    this.inheritedAttributes = inheritAttributes(this.el, ['aria-label']);
  }
  async connectedCallback() {
    const { el } = this;
    this.legacyFormController = createLegacyFormController(el);
    this.notchController = createNotchController(el, () => this.notchSpacerEl, () => this.labelSlot);
    this.updateOverlayOptions();
    this.emitStyle();
    this.mutationO = watchForOptions(this.el, 'ion-select-option', async () => {
      this.updateOverlayOptions();
      /**
       * We need to re-render the component
       * because one of the new ion-select-option
       * elements may match the value. In this case,
       * the rendered selected text should be updated.
       */
      forceUpdate(this);
    });
  }
  disconnectedCallback() {
    if (this.mutationO) {
      this.mutationO.disconnect();
      this.mutationO = undefined;
    }
    if (this.notchController) {
      this.notchController.destroy();
      this.notchController = undefined;
    }
  }
  /**
   * Open the select overlay. The overlay is either an alert, action sheet, or popover,
   * depending on the `interface` property on the `ion-select`.
   *
   * @param event The user interface event that called the open.
   */
  async open(event) {
    if (this.disabled || this.isExpanded) {
      return undefined;
    }
    this.isExpanded = true;
    const overlay = (this.overlay = await this.createOverlay(event));
    overlay.onDidDismiss().then(() => {
      this.overlay = undefined;
      this.isExpanded = false;
      this.ionDismiss.emit();
      this.setFocus();
    });
    await overlay.present();
    // focus selected option for popovers
    if (this.interface === 'popover') {
      let indexOfSelected = this.childOpts.map((o) => o.value).indexOf(this.value);
      indexOfSelected = indexOfSelected > -1 ? indexOfSelected : 0; // default to first option if nothing selected
      const selectedItem = overlay.querySelector(`.select-interface-option:nth-child(${indexOfSelected + 1})`);
      if (selectedItem) {
        focusElement(selectedItem);
        /**
         * Browsers such as Firefox do not
         * correctly delegate focus when manually
         * focusing an element with delegatesFocus.
         * We work around this by manually focusing
         * the interactive element.
         * ion-radio and ion-checkbox are the only
         * elements that ion-select-popover uses, so
         * we only need to worry about those two components
         * when focusing.
         */
        const interactiveEl = selectedItem.querySelector('ion-radio, ion-checkbox');
        if (interactiveEl) {
          interactiveEl.focus();
        }
      }
    }
    return overlay;
  }
  createOverlay(ev) {
    let selectInterface = this.interface;
    if (selectInterface === 'action-sheet' && this.multiple) {
      console.warn(`Select interface cannot be "${selectInterface}" with a multi-value select. Using the "alert" interface instead.`);
      selectInterface = 'alert';
    }
    if (selectInterface === 'popover' && !ev) {
      console.warn(`Select interface cannot be a "${selectInterface}" without passing an event. Using the "alert" interface instead.`);
      selectInterface = 'alert';
    }
    if (selectInterface === 'action-sheet') {
      return this.openActionSheet();
    }
    if (selectInterface === 'popover') {
      return this.openPopover(ev);
    }
    return this.openAlert();
  }
  updateOverlayOptions() {
    const overlay = this.overlay;
    if (!overlay) {
      return;
    }
    const childOpts = this.childOpts;
    const value = this.value;
    switch (this.interface) {
      case 'action-sheet':
        overlay.buttons = this.createActionSheetButtons(childOpts, value);
        break;
      case 'popover':
        const popover = overlay.querySelector('ion-select-popover');
        if (popover) {
          popover.options = this.createPopoverOptions(childOpts, value);
        }
        break;
      case 'alert':
        const inputType = this.multiple ? 'checkbox' : 'radio';
        overlay.inputs = this.createAlertInputs(childOpts, inputType, value);
        break;
    }
  }
  createActionSheetButtons(data, selectValue) {
    const actionSheetButtons = data.map((option) => {
      const value = getOptionValue(option);
      // Remove hydrated before copying over classes
      const copyClasses = Array.from(option.classList)
        .filter((cls) => cls !== 'hydrated')
        .join(' ');
      const optClass = `${OPTION_CLASS} ${copyClasses}`;
      return {
        role: isOptionSelected(selectValue, value, this.compareWith) ? 'selected' : '',
        text: option.textContent,
        cssClass: optClass,
        handler: () => {
          this.setValue(value);
        },
      };
    });
    // Add "cancel" button
    actionSheetButtons.push({
      text: this.cancelText,
      role: 'cancel',
      handler: () => {
        this.ionCancel.emit();
      },
    });
    return actionSheetButtons;
  }
  createAlertInputs(data, inputType, selectValue) {
    const alertInputs = data.map((option) => {
      const value = getOptionValue(option);
      // Remove hydrated before copying over classes
      const copyClasses = Array.from(option.classList)
        .filter((cls) => cls !== 'hydrated')
        .join(' ');
      const optClass = `${OPTION_CLASS} ${copyClasses}`;
      return {
        type: inputType,
        cssClass: optClass,
        label: option.textContent || '',
        value,
        checked: isOptionSelected(selectValue, value, this.compareWith),
        disabled: option.disabled,
      };
    });
    return alertInputs;
  }
  createPopoverOptions(data, selectValue) {
    const popoverOptions = data.map((option) => {
      const value = getOptionValue(option);
      // Remove hydrated before copying over classes
      const copyClasses = Array.from(option.classList)
        .filter((cls) => cls !== 'hydrated')
        .join(' ');
      const optClass = `${OPTION_CLASS} ${copyClasses}`;
      return {
        text: option.textContent || '',
        cssClass: optClass,
        value,
        checked: isOptionSelected(selectValue, value, this.compareWith),
        disabled: option.disabled,
        handler: (selected) => {
          this.setValue(selected);
          if (!this.multiple) {
            this.close();
          }
        },
      };
    });
    return popoverOptions;
  }
  async openPopover(ev) {
    const { fill, labelPlacement } = this;
    const interfaceOptions = this.interfaceOptions;
    const mode = getIonMode(this);
    const showBackdrop = mode === 'md' ? false : true;
    const multiple = this.multiple;
    const value = this.value;
    let event = ev;
    let size = 'auto';
    if (this.legacyFormController.hasLegacyControl()) {
      const item = this.el.closest('ion-item');
      // If the select is inside of an item containing a floating
      // or stacked label then the popover should take up the
      // full width of the item when it presents
      if (item && (item.classList.contains('item-label-floating') || item.classList.contains('item-label-stacked'))) {
        event = Object.assign(Object.assign({}, ev), { detail: {
            ionShadowTarget: item,
          } });
        size = 'cover';
      }
    }
    else {
      const hasFloatingOrStackedLabel = labelPlacement === 'floating' || labelPlacement === 'stacked';
      /**
       * The popover should take up the full width
       * when using a fill in MD mode or if the
       * label is floating/stacked.
       */
      if (hasFloatingOrStackedLabel || (mode === 'md' && fill !== undefined)) {
        size = 'cover';
        /**
         * Otherwise the popover
         * should be positioned relative
         * to the native element.
         */
      }
      else {
        event = Object.assign(Object.assign({}, ev), { detail: {
            ionShadowTarget: this.nativeWrapperEl,
          } });
      }
    }
    const popoverOpts = Object.assign(Object.assign({ mode,
      event, alignment: 'center', size,
      showBackdrop }, interfaceOptions), { component: 'ion-select-popover', cssClass: ['select-popover', interfaceOptions.cssClass], componentProps: {
        header: interfaceOptions.header,
        subHeader: interfaceOptions.subHeader,
        message: interfaceOptions.message,
        multiple,
        value,
        options: this.createPopoverOptions(this.childOpts, value),
      } });
    /**
     * Workaround for Stencil to autodefine
     * ion-select-popover and ion-popover when
     * using Custom Elements build.
     */
    // eslint-disable-next-line
    if (false) {
      // eslint-disable-next-line
      // @ts-ignore
      document.createElement('ion-select-popover');
      document.createElement('ion-popover');
    }
    return popoverController.create(popoverOpts);
  }
  async openActionSheet() {
    const mode = getIonMode(this);
    const interfaceOptions = this.interfaceOptions;
    const actionSheetOpts = Object.assign(Object.assign({ mode }, interfaceOptions), { buttons: this.createActionSheetButtons(this.childOpts, this.value), cssClass: ['select-action-sheet', interfaceOptions.cssClass] });
    /**
     * Workaround for Stencil to autodefine
     * ion-action-sheet when
     * using Custom Elements build.
     */
    // eslint-disable-next-line
    if (false) {
      // eslint-disable-next-line
      // @ts-ignore
      document.createElement('ion-action-sheet');
    }
    return actionSheetController.create(actionSheetOpts);
  }
  async openAlert() {
    /**
     * TODO FW-3194
     * Remove legacyFormController logic.
     * Remove label and labelText vars
     * Pass `this.labelText` instead of `labelText`
     * when setting the header.
     */
    let label;
    let labelText;
    if (this.legacyFormController.hasLegacyControl()) {
      label = this.getLabel();
      labelText = label ? label.textContent : null;
    }
    else {
      labelText = this.labelText;
    }
    const interfaceOptions = this.interfaceOptions;
    const inputType = this.multiple ? 'checkbox' : 'radio';
    const mode = getIonMode(this);
    const alertOpts = Object.assign(Object.assign({ mode }, interfaceOptions), { header: interfaceOptions.header ? interfaceOptions.header : labelText, inputs: this.createAlertInputs(this.childOpts, inputType, this.value), buttons: [
        {
          text: this.cancelText,
          role: 'cancel',
          handler: () => {
            this.ionCancel.emit();
          },
        },
        {
          text: this.okText,
          handler: (selectedValues) => {
            this.setValue(selectedValues);
          },
        },
      ], cssClass: [
        'select-alert',
        interfaceOptions.cssClass,
        this.multiple ? 'multiple-select-alert' : 'single-select-alert',
      ] });
    /**
     * Workaround for Stencil to autodefine
     * ion-alert when
     * using Custom Elements build.
     */
    // eslint-disable-next-line
    if (false) {
      // eslint-disable-next-line
      // @ts-ignore
      document.createElement('ion-alert');
    }
    return alertController.create(alertOpts);
  }
  /**
   * Close the select interface.
   */
  close() {
    if (!this.overlay) {
      return Promise.resolve(false);
    }
    return this.overlay.dismiss();
  }
  // TODO FW-3194 Remove this
  getLabel() {
    return findItemLabel(this.el);
  }
  hasValue() {
    return this.getText() !== '';
  }
  get childOpts() {
    return Array.from(this.el.querySelectorAll('ion-select-option'));
  }
  /**
   * Returns any plaintext associated with
   * the label (either prop or slot).
   * Note: This will not return any custom
   * HTML. Use the `hasLabel` getter if you
   * want to know if any slotted label content
   * was passed.
   */
  get labelText() {
    const { label } = this;
    if (label !== undefined) {
      return label;
    }
    const { labelSlot } = this;
    if (labelSlot !== null) {
      return labelSlot.textContent;
    }
    return;
  }
  getText() {
    const selectedText = this.selectedText;
    if (selectedText != null && selectedText !== '') {
      return selectedText;
    }
    return generateText(this.childOpts, this.value, this.compareWith);
  }
  setFocus() {
    if (this.focusEl) {
      this.focusEl.focus();
    }
  }
  emitStyle() {
    const { disabled } = this;
    const style = {
      'interactive-disabled': disabled,
    };
    if (this.legacyFormController.hasLegacyControl()) {
      style['interactive'] = true;
      style['select'] = true;
      style['select-disabled'] = disabled;
      style['has-placeholder'] = this.placeholder !== undefined;
      style['has-value'] = this.hasValue();
      style['has-focus'] = this.isExpanded;
    }
    this.ionStyle.emit(style);
  }
  renderLabel() {
    const { label } = this;
    return (h("div", { class: {
        'label-text-wrapper': true,
        'label-text-wrapper-hidden': !this.hasLabel,
      }, part: "label" }, label === undefined ? h("slot", { name: "label" }) : h("div", { class: "label-text" }, label)));
  }
  componentDidRender() {
    var _a;
    (_a = this.notchController) === null || _a === void 0 ? void 0 : _a.calculateNotchWidth();
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
       * that appears around the select and the label.
       * Certain stacked and floating label placements cause the
       * label to translate up and create a "cut out"
       * inside of that border by using the notch-spacer element.
       */
      return [
        h("div", { class: "select-outline-container" }, h("div", { class: "select-outline-start" }), h("div", { class: {
            'select-outline-notch': true,
            'select-outline-notch-hidden': !this.hasLabel,
          } }, h("div", { class: "notch-spacer", "aria-hidden": "true", ref: (el) => (this.notchSpacerEl = el) }, this.label)), h("div", { class: "select-outline-end" })),
        this.renderLabel(),
      ];
    }
    /**
     * If not using the outline style,
     * we can render just the label.
     */
    return this.renderLabel();
  }
  renderSelect() {
    const { disabled, el, isExpanded, expandedIcon, labelPlacement, justify, placeholder, fill, shape, name, value } = this;
    const mode = getIonMode(this);
    const hasFloatingOrStackedLabel = labelPlacement === 'floating' || labelPlacement === 'stacked';
    const justifyEnabled = !hasFloatingOrStackedLabel;
    const rtl = isRTL(el) ? 'rtl' : 'ltr';
    const inItem = hostContext('ion-item', this.el);
    const shouldRenderHighlight = mode === 'md' && fill !== 'outline' && !inItem;
    renderHiddenInput(true, el, name, parseValue(value), disabled);
    return (h(Host, { onClick: this.onClick, class: createColorClasses(this.color, {
        [mode]: true,
        'in-item': inItem,
        'in-item-color': hostContext('ion-item.ion-color', el),
        'select-disabled': disabled,
        'select-expanded': isExpanded,
        'has-expanded-icon': expandedIcon !== undefined,
        'has-value': this.hasValue(),
        'has-placeholder': placeholder !== undefined,
        'ion-focusable': true,
        [`select-${rtl}`]: true,
        [`select-fill-${fill}`]: fill !== undefined,
        [`select-justify-${justify}`]: justifyEnabled,
        [`select-shape-${shape}`]: shape !== undefined,
        [`select-label-placement-${labelPlacement}`]: true,
      }) }, h("label", { class: "select-wrapper", id: "select-label" }, this.renderLabelContainer(), h("div", { class: "native-wrapper", ref: (el) => (this.nativeWrapperEl = el), part: "container" }, this.renderSelectText(), !hasFloatingOrStackedLabel && this.renderSelectIcon(), this.renderListbox()), hasFloatingOrStackedLabel && this.renderSelectIcon(), shouldRenderHighlight && h("div", { class: "select-highlight" }))));
  }
  // TODO FW-3194 - Remove this
  renderLegacySelect() {
    if (!this.hasLoggedDeprecationWarning) {
      printIonWarning(`ion-select now requires providing a label with either the "label" property or the "aria-label" attribute. To migrate, remove any usage of "ion-label" and pass the label text to either the "label" property or the "aria-label" attribute.

Example: <ion-select label="Favorite Color">...</ion-select>
Example with aria-label: <ion-select aria-label="Favorite Color">...</ion-select>

Developers can use the "legacy" property to continue using the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.`, this.el);
      if (this.legacy) {
        printIonWarning(`ion-select is being used with the "legacy" property enabled which will forcibly enable the legacy form markup. This property will be removed in an upcoming major release of Ionic where this form control will use the modern form markup.
    Developers can dismiss this warning by removing their usage of the "legacy" property and using the new select syntax.`, this.el);
      }
      this.hasLoggedDeprecationWarning = true;
    }
    const { disabled, el, inputId, isExpanded, expandedIcon, name, placeholder, value } = this;
    const mode = getIonMode(this);
    const { labelText, labelId } = getAriaLabel(el, inputId);
    renderHiddenInput(true, el, name, parseValue(value), disabled);
    const displayValue = this.getText();
    let selectText = displayValue;
    if (selectText === '' && placeholder !== undefined) {
      selectText = placeholder;
    }
    // If there is a label then we need to concatenate it with the
    // current value (or placeholder) and a comma so it separates
    // nicely when the screen reader announces it, otherwise just
    // announce the value / placeholder
    const displayLabel = labelText !== undefined ? (selectText !== '' ? `${selectText}, ${labelText}` : labelText) : selectText;
    return (h(Host, { onClick: this.onClick, role: "button", "aria-haspopup": "listbox", "aria-disabled": disabled ? 'true' : null, "aria-label": displayLabel, class: {
        [mode]: true,
        'in-item': hostContext('ion-item', el),
        'in-item-color': hostContext('ion-item.ion-color', el),
        'select-disabled': disabled,
        'select-expanded': isExpanded,
        'has-expanded-icon': expandedIcon !== undefined,
        'legacy-select': true,
      } }, this.renderSelectText(), this.renderSelectIcon(), h("label", { id: labelId }, displayLabel), this.renderListbox()));
  }
  /**
   * Renders either the placeholder
   * or the selected values based on
   * the state of the select.
   */
  renderSelectText() {
    const { placeholder } = this;
    const displayValue = this.getText();
    let addPlaceholderClass = false;
    let selectText = displayValue;
    if (selectText === '' && placeholder !== undefined) {
      selectText = placeholder;
      addPlaceholderClass = true;
    }
    const selectTextClasses = {
      'select-text': true,
      'select-placeholder': addPlaceholderClass,
    };
    const textPart = addPlaceholderClass ? 'placeholder' : 'text';
    return (h("div", { "aria-hidden": "true", class: selectTextClasses, part: textPart }, selectText));
  }
  /**
   * Renders the chevron icon
   * next to the select text.
   */
  renderSelectIcon() {
    const mode = getIonMode(this);
    const { isExpanded, toggleIcon, expandedIcon } = this;
    let icon;
    if (isExpanded && expandedIcon !== undefined) {
      icon = expandedIcon;
    }
    else {
      const defaultIcon = mode === 'ios' ? chevronExpand : caretDownSharp;
      icon = toggleIcon !== null && toggleIcon !== void 0 ? toggleIcon : defaultIcon;
    }
    return h("ion-icon", { class: "select-icon", part: "icon", "aria-hidden": "true", icon: icon });
  }
  get ariaLabel() {
    var _a, _b;
    const { placeholder, el, inputId, inheritedAttributes } = this;
    const displayValue = this.getText();
    const { labelText } = getAriaLabel(el, inputId);
    const definedLabel = (_b = (_a = this.labelText) !== null && _a !== void 0 ? _a : inheritedAttributes['aria-label']) !== null && _b !== void 0 ? _b : labelText;
    /**
     * If developer has specified a placeholder
     * and there is nothing selected, the selectText
     * should have the placeholder value.
     */
    let renderedLabel = displayValue;
    if (renderedLabel === '' && placeholder !== undefined) {
      renderedLabel = placeholder;
    }
    /**
     * If there is a developer-defined label,
     * then we need to concatenate the developer label
     * string with the current current value.
     * The label for the control should be read
     * before the values of the control.
     */
    if (definedLabel !== undefined) {
      renderedLabel = renderedLabel === '' ? definedLabel : `${definedLabel}, ${renderedLabel}`;
    }
    return renderedLabel;
  }
  renderListbox() {
    const { disabled, inputId, isExpanded } = this;
    return (h("button", { disabled: disabled, id: inputId, "aria-label": this.ariaLabel, "aria-haspopup": "listbox", "aria-expanded": `${isExpanded}`, onFocus: this.onFocus, onBlur: this.onBlur, ref: (focusEl) => (this.focusEl = focusEl) }));
  }
  render() {
    const { legacyFormController } = this;
    return legacyFormController.hasLegacyControl() ? this.renderLegacySelect() : this.renderSelect();
  }
  static get is() { return "ion-select"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "ios": ["select.ios.scss"],
      "md": ["select.md.scss"]
    };
  }
  static get styleUrls() {
    return {
      "ios": ["select.ios.css"],
      "md": ["select.md.css"]
    };
  }
  static get properties() {
    return {
      "cancelText": {
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
          "text": "The text to display on the cancel button."
        },
        "attribute": "cancel-text",
        "reflect": false,
        "defaultValue": "'Cancel'"
      },
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
          "text": "The color to use from your application's color palette.\nDefault options are: `\"primary\"`, `\"secondary\"`, `\"tertiary\"`, `\"success\"`, `\"warning\"`, `\"danger\"`, `\"light\"`, `\"medium\"`, and `\"dark\"`.\nFor more information on colors, see [theming](/docs/theming/basics).\n\nThis property is only available when using the modern select syntax."
        },
        "attribute": "color",
        "reflect": true
      },
      "compareWith": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | SelectCompareFn | null",
          "resolved": "((currentValue: any, compareValue: any) => boolean) | null | string | undefined",
          "references": {
            "SelectCompareFn": {
              "location": "import",
              "path": "./select-interface",
              "id": "src/components/select/select-interface.ts::SelectCompareFn"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "A property name or function used to compare object values"
        },
        "attribute": "compare-with",
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
          "text": "If `true`, the user cannot interact with the select."
        },
        "attribute": "disabled",
        "reflect": false,
        "defaultValue": "false"
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
      "interface": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "SelectInterface",
          "resolved": "\"action-sheet\" | \"alert\" | \"popover\"",
          "references": {
            "SelectInterface": {
              "location": "import",
              "path": "./select-interface",
              "id": "src/components/select/select-interface.ts::SelectInterface"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The interface the select should use: `action-sheet`, `popover` or `alert`."
        },
        "attribute": "interface",
        "reflect": false,
        "defaultValue": "'alert'"
      },
      "interfaceOptions": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Any additional options that the `alert`, `action-sheet` or `popover` interface\ncan take. See the [ion-alert docs](./alert), the\n[ion-action-sheet docs](./action-sheet) and the\n[ion-popover docs](./popover) for the\ncreate options for each interface.\n\nNote: `interfaceOptions` will not override `inputs` or `buttons` with the `alert` interface."
        },
        "attribute": "interface-options",
        "reflect": false,
        "defaultValue": "{}"
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
          "text": "How to pack the label and select within a line.\n`justify` does not apply when the label and select\nare on different lines when `labelPlacement` is set to\n`\"floating\"` or `\"stacked\"`.\n`\"start\"`: The label and select will appear on the left in LTR and\non the right in RTL.\n`\"end\"`: The label and select will appear on the right in LTR and\non the left in RTL.\n`\"space-between\"`: The label and select will appear on opposite\nends of the line with space between the two elements."
        },
        "attribute": "justify",
        "reflect": false,
        "defaultValue": "'space-between'"
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
          "text": "The visible label associated with the select.\n\nUse this if you need to render a plaintext label.\n\nThe `label` property will take priority over the `label` slot if both are used."
        },
        "attribute": "label",
        "reflect": false
      },
      "labelPlacement": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "'start' | 'end' | 'floating' | 'stacked' | 'fixed'",
          "resolved": "\"end\" | \"fixed\" | \"floating\" | \"stacked\" | \"start\" | undefined",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Where to place the label relative to the select.\n`\"start\"`: The label will appear to the left of the select in LTR and to the right in RTL.\n`\"end\"`: The label will appear to the right of the select in LTR and to the left in RTL.\n`\"floating\"`: The label will appear smaller and above the select when the select is focused or it has a value. Otherwise it will appear on top of the select.\n`\"stacked\"`: The label will appear smaller and above the select regardless even when the select is blurred or has no value.\n`\"fixed\"`: The label has the same behavior as `\"start\"` except it also has a fixed width. Long text will be truncated with ellipses (\"...\").\nWhen using `\"floating\"` or `\"stacked\"` we recommend initializing the select with either a `value` or a `placeholder`."
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
      "multiple": {
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
          "text": "If `true`, the select can accept multiple values."
        },
        "attribute": "multiple",
        "reflect": false,
        "defaultValue": "false"
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
      "okText": {
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
          "text": "The text to display on the ok button."
        },
        "attribute": "ok-text",
        "reflect": false,
        "defaultValue": "'OK'"
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
          "text": "The text to display when the select is empty."
        },
        "attribute": "placeholder",
        "reflect": false
      },
      "selectedText": {
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
          "text": "The text to display instead of the selected option's value."
        },
        "attribute": "selected-text",
        "reflect": false
      },
      "toggleIcon": {
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
          "text": "The toggle icon to use. Defaults to `chevronExpand` for `ios` mode,\nor `caretDownSharp` for `md` mode."
        },
        "attribute": "toggle-icon",
        "reflect": false
      },
      "expandedIcon": {
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
          "text": "The toggle icon to show when the select is open. If defined, the icon\nrotation behavior in `md` mode will be disabled. If undefined, `toggleIcon`\nwill be used for when the select is both open and closed."
        },
        "attribute": "expanded-icon",
        "reflect": false
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
          "text": "The shape of the select. If \"round\" it will have an increased border radius."
        },
        "attribute": "shape",
        "reflect": false
      },
      "value": {
        "type": "any",
        "mutable": true,
        "complexType": {
          "original": "any | null",
          "resolved": "any",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The value of the select."
        },
        "attribute": "value",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "isExpanded": {}
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
          "text": "Emitted when the value has changed."
        },
        "complexType": {
          "original": "SelectChangeEventDetail",
          "resolved": "SelectChangeEventDetail<any>",
          "references": {
            "SelectChangeEventDetail": {
              "location": "import",
              "path": "./select-interface",
              "id": "src/components/select/select-interface.ts::SelectChangeEventDetail"
            }
          }
        }
      }, {
        "method": "ionCancel",
        "name": "ionCancel",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the selection is cancelled."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }, {
        "method": "ionDismiss",
        "name": "ionDismiss",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the overlay is dismissed."
        },
        "complexType": {
          "original": "void",
          "resolved": "void",
          "references": {}
        }
      }, {
        "method": "ionFocus",
        "name": "ionFocus",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the select has focus."
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
          "text": "Emitted when the select loses focus."
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
  static get methods() {
    return {
      "open": {
        "complexType": {
          "signature": "(event?: UIEvent) => Promise<any>",
          "parameters": [{
              "tags": [{
                  "name": "param",
                  "text": "event The user interface event that called the open."
                }],
              "text": "The user interface event that called the open."
            }],
          "references": {
            "Promise": {
              "location": "global",
              "id": "global::Promise"
            },
            "UIEvent": {
              "location": "global",
              "id": "global::UIEvent"
            },
            "HTMLElement": {
              "location": "global",
              "id": "global::HTMLElement"
            }
          },
          "return": "Promise<any>"
        },
        "docs": {
          "text": "Open the select overlay. The overlay is either an alert, action sheet, or popover,\ndepending on the `interface` property on the `ion-select`.",
          "tags": [{
              "name": "param",
              "text": "event The user interface event that called the open."
            }]
        }
      }
    };
  }
  static get elementRef() { return "el"; }
  static get watchers() {
    return [{
        "propName": "disabled",
        "methodName": "styleChanged"
      }, {
        "propName": "isExpanded",
        "methodName": "styleChanged"
      }, {
        "propName": "placeholder",
        "methodName": "styleChanged"
      }, {
        "propName": "value",
        "methodName": "styleChanged"
      }];
  }
}
const isOptionSelected = (currentValue, compareValue, compareWith) => {
  if (currentValue === undefined) {
    return false;
  }
  if (Array.isArray(currentValue)) {
    return currentValue.some((val) => compareOptions(val, compareValue, compareWith));
  }
  else {
    return compareOptions(currentValue, compareValue, compareWith);
  }
};
const getOptionValue = (el) => {
  const value = el.value;
  return value === undefined ? el.textContent || '' : value;
};
const parseValue = (value) => {
  if (value == null) {
    return undefined;
  }
  if (Array.isArray(value)) {
    return value.join(',');
  }
  return value.toString();
};
const compareOptions = (currentValue, compareValue, compareWith) => {
  if (typeof compareWith === 'function') {
    return compareWith(currentValue, compareValue);
  }
  else if (typeof compareWith === 'string') {
    return currentValue[compareWith] === compareValue[compareWith];
  }
  else {
    return Array.isArray(compareValue) ? compareValue.includes(currentValue) : currentValue === compareValue;
  }
};
const generateText = (opts, value, compareWith) => {
  if (value === undefined) {
    return '';
  }
  if (Array.isArray(value)) {
    return value
      .map((v) => textForValue(opts, v, compareWith))
      .filter((opt) => opt !== null)
      .join(', ');
  }
  else {
    return textForValue(opts, value, compareWith) || '';
  }
};
const textForValue = (opts, value, compareWith) => {
  const selectOpt = opts.find((opt) => {
    return compareOptions(value, getOptionValue(opt), compareWith);
  });
  return selectOpt ? selectOpt.textContent : null;
};
let selectIds = 0;
const OPTION_CLASS = 'select-interface-option';
