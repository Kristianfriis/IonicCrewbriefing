/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { Host, h } from "@stencil/core";
import { componentOnReady, addEventListener } from "../../utils/helpers";
import { printIonError } from "../../utils/logging/index";
import { createColorClasses } from "../../utils/theme";
import { getIonMode } from "../../global/ionic-global";
import { getToday } from "../datetime/utils/data";
import { getMonthAndYear, getMonthDayAndYear, getLocalizedDateTime, getLocalizedTime } from "../datetime/utils/format";
import { is24Hour } from "../datetime/utils/helpers";
import { parseDate } from "../datetime/utils/parse";
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @slot date-target - Content displayed inside of the date button.
 * @slot time-target - Content displayed inside of the time button.
 *
 * @part native - The native HTML button that wraps the slotted text.
 */
export class DatetimeButton {
  constructor() {
    this.datetimeEl = null;
    this.overlayEl = null;
    /**
     * Accepts one or more string values and converts
     * them to DatetimeParts. This is done so datetime-button
     * can work with an array internally and not need
     * to keep checking if the datetime value is `string` or `string[]`.
     */
    this.getParsedDateValues = (value) => {
      if (value === undefined || value === null) {
        return [];
      }
      if (Array.isArray(value)) {
        return value;
      }
      return [value];
    };
    /**
     * Check the value property on the linked
     * ion-datetime and then format it according
     * to the locale specified on ion-datetime.
     */
    this.setDateTimeText = () => {
      const { datetimeEl, datetimePresentation } = this;
      if (!datetimeEl) {
        return;
      }
      const { value, locale, hourCycle, preferWheel, multiple, titleSelectedDatesFormatter } = datetimeEl;
      const parsedValues = this.getParsedDateValues(value);
      /**
       * Both ion-datetime and ion-datetime-button default
       * to today's date and time if no value is set.
       */
      const parsedDatetimes = parseDate(parsedValues.length > 0 ? parsedValues : [getToday()]);
      /**
       * If developers incorrectly use multiple="true"
       * with non "date" datetimes, then just select
       * the first value so the interface does
       * not appear broken. Datetime will provide a
       * warning in the console.
       */
      const firstParsedDatetime = parsedDatetimes[0];
      const use24Hour = is24Hour(locale, hourCycle);
      this.dateText = this.timeText = undefined;
      switch (datetimePresentation) {
        case 'date-time':
        case 'time-date':
          const dateText = getMonthDayAndYear(locale, firstParsedDatetime);
          const timeText = getLocalizedTime(locale, firstParsedDatetime, use24Hour);
          if (preferWheel) {
            this.dateText = `${dateText} ${timeText}`;
          }
          else {
            this.dateText = dateText;
            this.timeText = timeText;
          }
          break;
        case 'date':
          if (multiple && parsedValues.length !== 1) {
            let headerText = `${parsedValues.length} days`; // default/fallback for multiple selection
            if (titleSelectedDatesFormatter !== undefined) {
              try {
                headerText = titleSelectedDatesFormatter(parsedValues);
              }
              catch (e) {
                printIonError('Exception in provided `titleSelectedDatesFormatter`: ', e);
              }
            }
            this.dateText = headerText;
          }
          else {
            this.dateText = getMonthDayAndYear(locale, firstParsedDatetime);
          }
          break;
        case 'time':
          this.timeText = getLocalizedTime(locale, firstParsedDatetime, use24Hour);
          break;
        case 'month-year':
          this.dateText = getMonthAndYear(locale, firstParsedDatetime);
          break;
        case 'month':
          this.dateText = getLocalizedDateTime(locale, firstParsedDatetime, { month: 'long' });
          break;
        case 'year':
          this.dateText = getLocalizedDateTime(locale, firstParsedDatetime, { year: 'numeric' });
          break;
      }
    };
    /**
     * Waits for the ion-datetime to re-render.
     * This is needed in order to correctly position
     * a popover relative to the trigger element.
     */
    this.waitForDatetimeChanges = async () => {
      const { datetimeEl } = this;
      if (!datetimeEl) {
        return Promise.resolve();
      }
      return new Promise((resolve) => {
        addEventListener(datetimeEl, 'ionRender', resolve, { once: true });
      });
    };
    this.handleDateClick = async (ev) => {
      const { datetimeEl, datetimePresentation } = this;
      if (!datetimeEl) {
        return;
      }
      let needsPresentationChange = false;
      /**
       * When clicking the date button,
       * we need to make sure that only a date
       * picker is displayed. For presentation styles
       * that display content other than a date picker,
       * we need to update the presentation style.
       */
      switch (datetimePresentation) {
        case 'date-time':
        case 'time-date':
          const needsChange = datetimeEl.presentation !== 'date';
          /**
           * The date+time wheel picker
           * shows date and time together,
           * so do not adjust the presentation
           * in that case.
           */
          if (!datetimeEl.preferWheel && needsChange) {
            datetimeEl.presentation = 'date';
            needsPresentationChange = true;
          }
          break;
      }
      /**
       * Track which button was clicked
       * so that it can have the correct
       * activated styles applied when
       * the modal/popover containing
       * the datetime is opened.
       */
      this.selectedButton = 'date';
      this.presentOverlay(ev, needsPresentationChange, this.dateTargetEl);
    };
    this.handleTimeClick = (ev) => {
      const { datetimeEl, datetimePresentation } = this;
      if (!datetimeEl) {
        return;
      }
      let needsPresentationChange = false;
      /**
       * When clicking the time button,
       * we need to make sure that only a time
       * picker is displayed. For presentation styles
       * that display content other than a time picker,
       * we need to update the presentation style.
       */
      switch (datetimePresentation) {
        case 'date-time':
        case 'time-date':
          const needsChange = datetimeEl.presentation !== 'time';
          if (needsChange) {
            datetimeEl.presentation = 'time';
            needsPresentationChange = true;
          }
          break;
      }
      /**
       * Track which button was clicked
       * so that it can have the correct
       * activated styles applied when
       * the modal/popover containing
       * the datetime is opened.
       */
      this.selectedButton = 'time';
      this.presentOverlay(ev, needsPresentationChange, this.timeTargetEl);
    };
    /**
     * If the datetime is presented in an
     * overlay, the datetime and overlay
     * should be appropriately sized.
     * These classes provide default sizing values
     * that developers can customize.
     * The goal is to provide an overlay that is
     * reasonably sized with a datetime that
     * fills the entire container.
     */
    this.presentOverlay = async (ev, needsPresentationChange, triggerEl) => {
      const { overlayEl } = this;
      if (!overlayEl) {
        return;
      }
      if (overlayEl.tagName === 'ION-POPOVER') {
        /**
         * When the presentation on datetime changes,
         * we need to wait for the component to re-render
         * otherwise the computed width/height of the
         * popover content will be wrong, causing
         * the popover to not align with the trigger element.
         */
        if (needsPresentationChange) {
          await this.waitForDatetimeChanges();
        }
        /**
         * We pass the trigger button element
         * so that the popover aligns with the individual
         * button that was clicked, not the component container.
         */
        overlayEl.present(Object.assign(Object.assign({}, ev), { detail: {
            ionShadowTarget: triggerEl,
          } }));
      }
      else {
        overlayEl.present();
      }
    };
    this.datetimePresentation = 'date-time';
    this.dateText = undefined;
    this.timeText = undefined;
    this.datetimeActive = false;
    this.selectedButton = undefined;
    this.color = 'primary';
    this.disabled = false;
    this.datetime = undefined;
  }
  async componentWillLoad() {
    const { datetime } = this;
    if (!datetime) {
      printIonError('An ID associated with an ion-datetime instance is required for ion-datetime-button to function properly.', this.el);
      return;
    }
    const datetimeEl = (this.datetimeEl = document.getElementById(datetime));
    if (!datetimeEl) {
      printIonError(`No ion-datetime instance found for ID '${datetime}'.`, this.el);
      return;
    }
    /**
     * The element reference must be an ion-datetime. Print an error
     * if a non-datetime element was provided.
     */
    if (datetimeEl.tagName !== 'ION-DATETIME') {
      printIonError(`Expected an ion-datetime instance for ID '${datetime}' but received '${datetimeEl.tagName.toLowerCase()}' instead.`, datetimeEl);
      return;
    }
    /**
     * Since the datetime can be used in any context (overlays, accordion, etc)
     * we track when it is visible to determine when it is active.
     * This informs which button is highlighted as well as the
     * aria-expanded state.
     */
    const io = new IntersectionObserver((entries) => {
      const ev = entries[0];
      this.datetimeActive = ev.isIntersecting;
    }, {
      threshold: 0.01,
    });
    io.observe(datetimeEl);
    /**
     * Get a reference to any modal/popover
     * the datetime is being used in so we can
     * correctly size it when it is presented.
     */
    const overlayEl = (this.overlayEl = datetimeEl.closest('ion-modal, ion-popover'));
    /**
     * The .ion-datetime-button-overlay class contains
     * styles that allow any modal/popover to be
     * sized according to the dimensions of the datetime.
     * If developers want a smaller/larger overlay all they need
     * to do is change the width/height of the datetime.
     * Additionally, this lets us avoid having to set
     * explicit widths on each variant of datetime.
     */
    if (overlayEl) {
      overlayEl.classList.add('ion-datetime-button-overlay');
    }
    componentOnReady(datetimeEl, () => {
      const datetimePresentation = (this.datetimePresentation = datetimeEl.presentation || 'date-time');
      /**
       * Set the initial display
       * in the rendered buttons.
       *
       * From there, we need to listen
       * for ionChange to be emitted
       * from datetime so we know when
       * to re-render the displayed
       * text in the buttons.
       */
      this.setDateTimeText();
      addEventListener(datetimeEl, 'ionValueChange', this.setDateTimeText);
      /**
       * Configure the initial selected button
       * in the event that the datetime is displayed
       * without clicking one of the datetime buttons.
       * For example, a datetime could be expanded
       * in an accordion. In this case users only
       * need to click the accordion header to show
       * the datetime.
       */
      switch (datetimePresentation) {
        case 'date-time':
        case 'date':
        case 'month-year':
        case 'month':
        case 'year':
          this.selectedButton = 'date';
          break;
        case 'time-date':
        case 'time':
          this.selectedButton = 'time';
          break;
      }
    });
  }
  render() {
    const { color, dateText, timeText, selectedButton, datetimeActive, disabled } = this;
    const mode = getIonMode(this);
    return (h(Host, { class: createColorClasses(color, {
        [mode]: true,
        [`${selectedButton}-active`]: datetimeActive,
        ['datetime-button-disabled']: disabled,
      }) }, dateText && (h("button", { class: "ion-activatable", id: "date-button", "aria-expanded": datetimeActive ? 'true' : 'false', onClick: this.handleDateClick, disabled: disabled, part: "native", ref: (el) => (this.dateTargetEl = el) }, h("slot", { name: "date-target" }, dateText), mode === 'md' && h("ion-ripple-effect", null))), timeText && (h("button", { class: "ion-activatable", id: "time-button", "aria-expanded": datetimeActive ? 'true' : 'false', onClick: this.handleTimeClick, disabled: disabled, part: "native", ref: (el) => (this.timeTargetEl = el) }, h("slot", { name: "time-target" }, timeText), mode === 'md' && h("ion-ripple-effect", null)))));
  }
  static get is() { return "ion-datetime-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "ios": ["datetime-button.scss"],
      "md": ["datetime-button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "ios": ["datetime-button.css"],
      "md": ["datetime-button.css"]
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
        "reflect": true,
        "defaultValue": "'primary'"
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
          "text": "If `true`, the user cannot interact with the button."
        },
        "attribute": "disabled",
        "reflect": true,
        "defaultValue": "false"
      },
      "datetime": {
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
          "text": "The ID of the `ion-datetime` instance\nassociated with the datetime button."
        },
        "attribute": "datetime",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "datetimePresentation": {},
      "dateText": {},
      "timeText": {},
      "datetimeActive": {},
      "selectedButton": {}
    };
  }
  static get elementRef() { return "el"; }
}
