/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import { r as registerInstance, d as createEvent, w as writeTask, h, H as Host, f as getElement } from './index-847f2fde.js';
import { startFocusVisible } from './focus-visible-85493433.js';
import { r as raf, d as renderHiddenInput, g as getElementRoot, l as clamp } from './helpers-3379ba19.js';
import { a as printIonError, p as printIonWarning } from './index-595d62c9.js';
import { i as isRTL } from './dir-912e3e13.js';
import { c as createColorClasses, g as getClassMap } from './theme-17531cdf.js';
import { c as chevronBack, o as chevronForward, l as chevronDown, p as caretUpSharp, q as caretDownSharp } from './index-ecfc2c9f.js';
import { b as getIonMode } from './ionic-global-1ef19007.js';
import { g as generateDayAriaLabel, a as getDay, i as isBefore, b as isAfter, c as isSameDay, d as getPreviousMonth, e as getNextMonth, v as validateParts, f as getPartsFromCalendarDay, h as getEndOfWeek, j as getStartOfWeek, k as getPreviousDay, l as getNextDay, m as getPreviousWeek, n as getNextWeek, p as parseMinParts, o as parseMaxParts, q as parseDate, w as warnIfValueOutOfBounds, r as convertToArrayOfNumbers, s as convertDataToISO, t as getToday, u as getClosestValidDate, x as getNumDaysInMonth, y as getCombinedDateColumnData, z as getMonthColumnData, A as getDayColumnData, B as getYearColumnData, C as isMonthFirstLocale, D as getTimeColumnsData, E as isLocaleDayPeriodRTL, F as getDaysOfWeek, G as getMonthAndYear, H as getDaysOfMonth, I as generateMonths, J as is24Hour, K as getLocalizedTime, L as getMonthAndDay, M as formatValue, N as getNextYear, O as getPreviousYear, P as clampDate, Q as parseAmPm, R as calculateHourFromAMPM } from './data-834f9822.js';
import { d as createDelegateController, e as createTriggerController, B as BACKDROP, i as isCancel, j as prepareOverlay, k as setOverlayId, f as present, g as dismiss, h as eventMethod, s as safeCall } from './overlays-c3387ec0.js';
import { c as createAnimation } from './animation-a1d9e088.js';
import { b as hapticSelectionChanged, h as hapticSelectionEnd, a as hapticSelectionStart } from './haptic-6447af60.js';
import './framework-delegate-2b76c681.js';
import './hardware-back-button-39299f84.js';
import './index-7a14ecec.js';
import './capacitor-b4979570.js';

const isYearDisabled = (refYear, minParts, maxParts) => {
  if (minParts && minParts.year > refYear) {
    return true;
  }
  if (maxParts && maxParts.year < refYear) {
    return true;
  }
  return false;
};
/**
 * Returns true if a given day should
 * not be interactive according to its value,
 * or the max/min dates.
 */
const isDayDisabled = (refParts, minParts, maxParts, dayValues) => {
  /**
   * If this is a filler date (i.e. padding)
   * then the date is disabled.
   */
  if (refParts.day === null) {
    return true;
  }
  /**
   * If user passed in a list of acceptable day values
   * check to make sure that the date we are looking
   * at is in this array.
   */
  if (dayValues !== undefined && !dayValues.includes(refParts.day)) {
    return true;
  }
  /**
   * Given a min date, perform the following
   * checks. If any of them are true, then the
   * day should be disabled:
   * 1. Is the current year < the min allowed year?
   * 2. Is the current year === min allowed year,
   * but the current month < the min allowed month?
   * 3. Is the current year === min allowed year, the
   * current month === min allow month, but the current
   * day < the min allowed day?
   */
  if (minParts && isBefore(refParts, minParts)) {
    return true;
  }
  /**
   * Given a max date, perform the following
   * checks. If any of them are true, then the
   * day should be disabled:
   * 1. Is the current year > the max allowed year?
   * 2. Is the current year === max allowed year,
   * but the current month > the max allowed month?
   * 3. Is the current year === max allowed year, the
   * current month === max allow month, but the current
   * day > the max allowed day?
   */
  if (maxParts && isAfter(refParts, maxParts)) {
    return true;
  }
  /**
   * If none of these checks
   * passed then the date should
   * be interactive.
   */
  return false;
};
/**
 * Given a locale, a date, the selected date(s), and today's date,
 * generate the state for a given calendar day button.
 */
const getCalendarDayState = (locale, refParts, activeParts, todayParts, minParts, maxParts, dayValues) => {
  /**
   * activeParts signals what day(s) are currently selected in the datetime.
   * If multiple="true", this will be an array, but the logic in this util
   * is the same whether we have one selected day or many because we're only
   * calculating the state for one button. So, we treat a single activeParts value
   * the same as an array of length one.
   */
  const activePartsArray = Array.isArray(activeParts) ? activeParts : [activeParts];
  /**
   * The day button is active if it is selected, or in other words, if refParts
   * matches at least one selected date.
   */
  const isActive = activePartsArray.find((parts) => isSameDay(refParts, parts)) !== undefined;
  const isToday = isSameDay(refParts, todayParts);
  const disabled = isDayDisabled(refParts, minParts, maxParts, dayValues);
  /**
   * Note that we always return one object regardless of whether activeParts
   * was an array, since we pare down to one value for isActive.
   */
  return {
    disabled,
    isActive,
    isToday,
    ariaSelected: isActive ? 'true' : null,
    ariaLabel: generateDayAriaLabel(locale, isToday, refParts),
    text: refParts.day != null ? getDay(locale, refParts) : null,
  };
};
/**
 * Returns `true` if the month is disabled given the
 * current date value and min/max date constraints.
 */
const isMonthDisabled = (refParts, { minParts, maxParts, }) => {
  // If the year is disabled then the month is disabled.
  if (isYearDisabled(refParts.year, minParts, maxParts)) {
    return true;
  }
  // If the date value is before the min date, then the month is disabled.
  // If the date value is after the max date, then the month is disabled.
  if ((minParts && isBefore(refParts, minParts)) || (maxParts && isAfter(refParts, maxParts))) {
    return true;
  }
  return false;
};
/**
 * Given a working date, an optional minimum date range,
 * and an optional maximum date range; determine if the
 * previous navigation button is disabled.
 */
const isPrevMonthDisabled = (refParts, minParts, maxParts) => {
  const prevMonth = Object.assign(Object.assign({}, getPreviousMonth(refParts)), { day: null });
  return isMonthDisabled(prevMonth, {
    minParts,
    maxParts,
  });
};
/**
 * Given a working date and a maximum date range,
 * determine if the next navigation button is disabled.
 */
const isNextMonthDisabled = (refParts, maxParts) => {
  const nextMonth = Object.assign(Object.assign({}, getNextMonth(refParts)), { day: null });
  return isMonthDisabled(nextMonth, {
    maxParts,
  });
};
/**
 * Given the value of the highlightedDates property
 * and an ISO string, return the styles to use for
 * that date, or undefined if none are found.
 */
const getHighlightStyles = (highlightedDates, dateIsoString, el) => {
  if (Array.isArray(highlightedDates)) {
    const dateStringWithoutTime = dateIsoString.split('T')[0];
    const matchingHighlight = highlightedDates.find((hd) => hd.date === dateStringWithoutTime);
    if (matchingHighlight) {
      return {
        textColor: matchingHighlight.textColor,
        backgroundColor: matchingHighlight.backgroundColor,
      };
    }
  }
  else {
    /**
     * Wrap in a try-catch to prevent exceptions in the user's function
     * from interrupting the calendar's rendering.
     */
    try {
      return highlightedDates(dateIsoString);
    }
    catch (e) {
      printIonError('Exception thrown from provided `highlightedDates` callback. Please check your function and try again.', el, e);
    }
  }
  return undefined;
};

const datetimeIosCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;background:var(--background);overflow:hidden}ion-picker-column-internal{min-width:26px}:host(.datetime-size-fixed){width:auto;height:auto}:host(.datetime-size-fixed:not(.datetime-prefer-wheel)){max-width:350px}:host(.datetime-size-fixed.datetime-prefer-wheel){min-width:350px;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}:host(.datetime-size-cover){width:100%}:host .calendar-body,:host .datetime-year{opacity:0}:host(:not(.datetime-ready)) .datetime-year{position:absolute;pointer-events:none}:host(.datetime-ready) .calendar-body{opacity:1}:host(.datetime-ready) .datetime-year{display:none;opacity:1}:host .wheel-order-year-first .day-column{-ms-flex-order:3;order:3;text-align:end}:host .wheel-order-year-first .month-column{-ms-flex-order:2;order:2;text-align:end}:host .wheel-order-year-first .year-column{-ms-flex-order:1;order:1;text-align:start}:host .datetime-calendar,:host .datetime-year{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-flow:column;flex-flow:column}:host(.show-month-and-year) .datetime-year{display:-ms-flexbox;display:flex}@supports (background: -webkit-named-image(apple-pay-logo-black)) and (not (aspect-ratio: 1/1)){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{position:absolute;visibility:hidden;pointer-events:none}@supports (inset-inline-start: 0){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{inset-inline-start:-99999px}}@supports not (inset-inline-start: 0){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{left:-99999px}:host-context([dir=rtl]):host(.show-month-and-year) .calendar-next-prev,:host-context([dir=rtl]).show-month-and-year .calendar-next-prev,:host-context([dir=rtl]):host(.show-month-and-year) .calendar-days-of-week,:host-context([dir=rtl]).show-month-and-year .calendar-days-of-week,:host-context([dir=rtl]):host(.show-month-and-year) .calendar-body,:host-context([dir=rtl]).show-month-and-year .calendar-body,:host-context([dir=rtl]):host(.show-month-and-year) .datetime-time,:host-context([dir=rtl]).show-month-and-year .datetime-time{left:unset;right:unset;right:-99999px}@supports selector(:dir(rtl)){:host(.show-month-and-year) .calendar-next-prev:dir(rtl),:host(.show-month-and-year) .calendar-days-of-week:dir(rtl),:host(.show-month-and-year) .calendar-body:dir(rtl),:host(.show-month-and-year) .datetime-time:dir(rtl){left:unset;right:unset;right:-99999px}}}}@supports (not (background: -webkit-named-image(apple-pay-logo-black))) or ((background: -webkit-named-image(apple-pay-logo-black)) and (aspect-ratio: 1/1)){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{display:none}}:host(.month-year-picker-open) .datetime-footer{display:none}:host(.datetime-readonly),:host(.datetime-disabled){pointer-events:none}:host(.datetime-disabled){opacity:0.4}:host .datetime-header .datetime-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .datetime-action-buttons.has-clear-button{width:100%}:host .datetime-action-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons ion-item,:host .calendar-action-buttons ion-button{--background:translucent}:host .calendar-action-buttons ion-item ion-label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .calendar-action-buttons ion-item ion-icon{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:0;padding-inline-end:0;padding-top:0;padding-bottom:0}:host .calendar-days-of-week{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}:host .calendar-body{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;overflow-x:scroll;overflow-y:hidden;scrollbar-width:none;outline:none}:host .calendar-body .calendar-month{scroll-snap-align:start;scroll-snap-stop:always;-ms-flex-negative:0;flex-shrink:0;width:100%}:host .calendar-body .calendar-month-disabled{scroll-snap-align:none}:host .calendar-body::-webkit-scrollbar{display:none}:host .calendar-body .calendar-month-grid{display:grid;grid-template-columns:repeat(7, 1fr)}:host .calendar-day{-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:0px;padding-bottom:0px;-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px;margin-top:0px;margin-bottom:0px;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border:none;outline:none;background:none;color:currentColor;font-family:var(--ion-font-family, inherit);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:0}:host .calendar-day[disabled]{pointer-events:none;opacity:0.4}.calendar-day-highlight{border-radius:32px;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:32px;height:32px;z-index:-1}:host .datetime-time{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host(.datetime-presentation-time) .datetime-time{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host ion-popover{--height:200px}:host .time-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .time-body{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;display:-ms-flexbox;display:flex;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host .time-body-active{color:var(--ion-color-base)}:host(.in-item){position:static}:host(.show-month-and-year) .calendar-action-buttons ion-item{--color:var(--ion-color-base)}:host{--background:var(--ion-color-light, #ffffff);--background-rgb:var(--ion-color-light-rgb);--title-color:var(--ion-color-step-600, #666666)}:host(.datetime-presentation-date-time:not(.datetime-prefer-wheel)),:host(.datetime-presentation-time-date:not(.datetime-prefer-wheel)),:host(.datetime-presentation-date:not(.datetime-prefer-wheel)){min-height:350px}:host .datetime-header{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:16px;padding-bottom:16px;border-bottom:0.55px solid var(--ion-color-step-200, #cccccc);font-size:14px}:host .datetime-header .datetime-title{color:var(--title-color)}:host .datetime-header .datetime-selected-date{margin-top:10px}:host .calendar-action-buttons ion-item{--padding-start:16px;--background-hover:transparent;--background-activated:transparent;font-size:16px;font-weight:600}:host .calendar-action-buttons ion-item ion-icon,:host .calendar-action-buttons ion-buttons ion-button{color:var(--ion-color-base)}:host .calendar-action-buttons ion-buttons{padding-left:0;padding-right:0;padding-top:8px;padding-bottom:0}:host .calendar-action-buttons ion-buttons ion-button{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0}:host .calendar-days-of-week{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0;color:var(--ion-color-step-300, #b3b3b3);font-size:12px;font-weight:600;line-height:24px;text-transform:uppercase}:host .calendar-body .calendar-month .calendar-month-grid{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;height:calc(100% - 16px)}:host .calendar-day{font-size:20px}.calendar-day:focus .calendar-day-highlight,.calendar-day.calendar-day-active .calendar-day-highlight{opacity:0.2}.calendar-day.calendar-day-active .calendar-day-highlight{background:var(--ion-color-base)}.calendar-day:focus .calendar-day-highlight{background:var(--ion-color-base) !important}:host .calendar-day.calendar-day-today{color:var(--ion-color-base)}:host .calendar-day.calendar-day-active{color:var(--ion-color-base);font-weight:600}:host .calendar-day.calendar-day-today.calendar-day-active{color:var(--ion-color-contrast)}.calendar-day.calendar-day-today.calendar-day-active .calendar-day-highlight{background:var(--ion-color-base);opacity:1}:host .datetime-time{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:8px;padding-bottom:16px;font-size:16px}:host .datetime-time .time-header{font-weight:600}:host .datetime-buttons{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:8px;padding-bottom:8px;border-top:0.55px solid var(--ion-color-step-200, #cccccc)}:host .datetime-buttons ::slotted(ion-buttons),:host .datetime-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:justify;justify-content:space-between}:host .datetime-action-buttons{width:100%}";

const datetimeMdCss = ":host{display:-ms-flexbox;display:flex;-ms-flex-flow:column;flex-flow:column;background:var(--background);overflow:hidden}ion-picker-column-internal{min-width:26px}:host(.datetime-size-fixed){width:auto;height:auto}:host(.datetime-size-fixed:not(.datetime-prefer-wheel)){max-width:350px}:host(.datetime-size-fixed.datetime-prefer-wheel){min-width:350px;max-width:-webkit-max-content;max-width:-moz-max-content;max-width:max-content}:host(.datetime-size-cover){width:100%}:host .calendar-body,:host .datetime-year{opacity:0}:host(:not(.datetime-ready)) .datetime-year{position:absolute;pointer-events:none}:host(.datetime-ready) .calendar-body{opacity:1}:host(.datetime-ready) .datetime-year{display:none;opacity:1}:host .wheel-order-year-first .day-column{-ms-flex-order:3;order:3;text-align:end}:host .wheel-order-year-first .month-column{-ms-flex-order:2;order:2;text-align:end}:host .wheel-order-year-first .year-column{-ms-flex-order:1;order:1;text-align:start}:host .datetime-calendar,:host .datetime-year{display:-ms-flexbox;display:flex;-ms-flex:1 1 auto;flex:1 1 auto;-ms-flex-flow:column;flex-flow:column}:host(.show-month-and-year) .datetime-year{display:-ms-flexbox;display:flex}@supports (background: -webkit-named-image(apple-pay-logo-black)) and (not (aspect-ratio: 1/1)){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{position:absolute;visibility:hidden;pointer-events:none}@supports (inset-inline-start: 0){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{inset-inline-start:-99999px}}@supports not (inset-inline-start: 0){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{left:-99999px}:host-context([dir=rtl]):host(.show-month-and-year) .calendar-next-prev,:host-context([dir=rtl]).show-month-and-year .calendar-next-prev,:host-context([dir=rtl]):host(.show-month-and-year) .calendar-days-of-week,:host-context([dir=rtl]).show-month-and-year .calendar-days-of-week,:host-context([dir=rtl]):host(.show-month-and-year) .calendar-body,:host-context([dir=rtl]).show-month-and-year .calendar-body,:host-context([dir=rtl]):host(.show-month-and-year) .datetime-time,:host-context([dir=rtl]).show-month-and-year .datetime-time{left:unset;right:unset;right:-99999px}@supports selector(:dir(rtl)){:host(.show-month-and-year) .calendar-next-prev:dir(rtl),:host(.show-month-and-year) .calendar-days-of-week:dir(rtl),:host(.show-month-and-year) .calendar-body:dir(rtl),:host(.show-month-and-year) .datetime-time:dir(rtl){left:unset;right:unset;right:-99999px}}}}@supports (not (background: -webkit-named-image(apple-pay-logo-black))) or ((background: -webkit-named-image(apple-pay-logo-black)) and (aspect-ratio: 1/1)){:host(.show-month-and-year) .calendar-next-prev,:host(.show-month-and-year) .calendar-days-of-week,:host(.show-month-and-year) .calendar-body,:host(.show-month-and-year) .datetime-time{display:none}}:host(.month-year-picker-open) .datetime-footer{display:none}:host(.datetime-readonly),:host(.datetime-disabled){pointer-events:none}:host(.datetime-disabled){opacity:0.4}:host .datetime-header .datetime-title{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}:host .datetime-action-buttons.has-clear-button{width:100%}:host .datetime-action-buttons ion-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host .calendar-action-buttons ion-item,:host .calendar-action-buttons ion-button{--background:translucent}:host .calendar-action-buttons ion-item ion-label{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .calendar-action-buttons ion-item ion-icon{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:0;padding-inline-end:0;padding-top:0;padding-bottom:0}:host .calendar-days-of-week{display:grid;grid-template-columns:repeat(7, 1fr);text-align:center}:host .calendar-body{display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;-webkit-scroll-snap-type:x mandatory;-ms-scroll-snap-type:x mandatory;scroll-snap-type:x mandatory;overflow-x:scroll;overflow-y:hidden;scrollbar-width:none;outline:none}:host .calendar-body .calendar-month{scroll-snap-align:start;scroll-snap-stop:always;-ms-flex-negative:0;flex-shrink:0;width:100%}:host .calendar-body .calendar-month-disabled{scroll-snap-align:none}:host .calendar-body::-webkit-scrollbar{display:none}:host .calendar-body .calendar-month-grid{display:grid;grid-template-columns:repeat(7, 1fr)}:host .calendar-day{-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0px;padding-inline-end:0px;padding-top:0px;padding-bottom:0px;-webkit-margin-start:0px;margin-inline-start:0px;-webkit-margin-end:0px;margin-inline-end:0px;margin-top:0px;margin-bottom:0px;display:-ms-flexbox;display:flex;position:relative;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;border:none;outline:none;background:none;color:currentColor;font-family:var(--ion-font-family, inherit);cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;z-index:0}:host .calendar-day[disabled]{pointer-events:none;opacity:0.4}.calendar-day-highlight{border-radius:32px;-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:4px;padding-bottom:4px;position:absolute;width:32px;height:32px;z-index:-1}:host .datetime-time{display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between}:host(.datetime-presentation-time) .datetime-time{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host ion-popover{--height:200px}:host .time-header{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center}:host .time-body{border-radius:8px;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px;padding-top:6px;padding-bottom:6px;display:-ms-flexbox;display:flex;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none}:host .time-body-active{color:var(--ion-color-base)}:host(.in-item){position:static}:host(.show-month-and-year) .calendar-action-buttons ion-item{--color:var(--ion-color-base)}:host{--background:var(--ion-color-step-100, #ffffff);--title-color:var(--ion-color-contrast)}:host .datetime-header{-webkit-padding-start:20px;padding-inline-start:20px;-webkit-padding-end:20px;padding-inline-end:20px;padding-top:20px;padding-bottom:20px;background:var(--ion-color-base);color:var(--title-color)}:host .datetime-header .datetime-title{font-size:12px;text-transform:uppercase}:host .datetime-header .datetime-selected-date{margin-top:30px;font-size:34px}:host .datetime-calendar .calendar-action-buttons ion-item{--padding-start:20px}:host .calendar-action-buttons ion-item,:host .calendar-action-buttons ion-button{--color:var(--ion-color-step-650, #595959)}:host .calendar-days-of-week{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:0px;padding-bottom:0px;color:var(--ion-color-step-500, gray);font-size:14px;line-height:36px}:host .calendar-body .calendar-month .calendar-month-grid{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:4px;padding-bottom:4px;grid-template-rows:repeat(6, 1fr)}:host .calendar-day{-webkit-padding-start:0px;padding-inline-start:0px;-webkit-padding-end:0;padding-inline-end:0;padding-top:13px;padding-bottom:13px;font-size:14px}.calendar-day:focus .calendar-day-highlight{background:rgba(var(--ion-color-base-rgb), 0.2);-webkit-box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2);box-shadow:0px 0px 0px 4px rgba(var(--ion-color-base-rgb), 0.2)}:host .calendar-day.calendar-day-today{color:var(--ion-color-base)}.calendar-day.calendar-day-today .calendar-day-highlight{border:1px solid var(--ion-color-base)}:host .calendar-day.calendar-day-active{color:var(--ion-color-contrast)}.calendar-day.calendar-day-active .calendar-day-highlight{border:1px solid var(--ion-color-base);background:var(--ion-color-base)}:host .datetime-time{-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px;padding-top:8px;padding-bottom:8px}:host .time-header{color:var(--ion-color-step-650, #595959)}:host(.datetime-presentation-month) .datetime-year,:host(.datetime-presentation-year) .datetime-year,:host(.datetime-presentation-month-year) .datetime-year{margin-top:20px;margin-bottom:20px}:host .datetime-buttons{-webkit-padding-start:10px;padding-inline-start:10px;-webkit-padding-end:10px;padding-inline-end:10px;padding-top:10px;padding-bottom:10px;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:end;justify-content:flex-end}:host .datetime-view-buttons ion-button{color:var(--ion-color-step-800, #333333)}";

const Datetime = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionCancel = createEvent(this, "ionCancel", 7);
    this.ionChange = createEvent(this, "ionChange", 7);
    this.ionValueChange = createEvent(this, "ionValueChange", 7);
    this.ionFocus = createEvent(this, "ionFocus", 7);
    this.ionBlur = createEvent(this, "ionBlur", 7);
    this.ionStyle = createEvent(this, "ionStyle", 7);
    this.ionRender = createEvent(this, "ionRender", 7);
    this.inputId = `ion-dt-${datetimeIds++}`;
    this.prevPresentation = null;
    /**
     * Duplicate reference to `activeParts` that does not trigger a re-render of the component.
     * Allows caching an instance of the `activeParts` in between render cycles.
     */
    this.activePartsClone = [];
    this.warnIfIncorrectValueUsage = () => {
      const { multiple, value } = this;
      if (!multiple && Array.isArray(value)) {
        /**
         * We do some processing on the `value` array so
         * that it looks more like an array when logged to
         * the console.
         * Example given ['a', 'b']
         * Default toString() behavior: a,b
         * Custom behavior: ['a', 'b']
         */
        printIonWarning(`ion-datetime was passed an array of values, but multiple="false". This is incorrect usage and may result in unexpected behaviors. To dismiss this warning, pass a string to the "value" property when multiple="false".

  Value Passed: [${value.map((v) => `'${v}'`).join(', ')}]
`, this.el);
      }
    };
    this.setValue = (value) => {
      this.value = value;
      this.ionChange.emit({ value });
    };
    /**
     * Returns the DatetimePart interface
     * to use when rendering an initial set of
     * data. This should be used when rendering an
     * interface in an environment where the `value`
     * may not be set. This function works
     * by returning the first selected date in
     * "activePartsClone" and then falling back to
     * defaultParts if no active date is selected.
     */
    this.getActivePartsWithFallback = () => {
      var _a;
      const { defaultParts } = this;
      return (_a = this.getActivePart()) !== null && _a !== void 0 ? _a : defaultParts;
    };
    this.getActivePart = () => {
      const { activePartsClone } = this;
      return Array.isArray(activePartsClone) ? activePartsClone[0] : activePartsClone;
    };
    this.closeParentOverlay = () => {
      const popoverOrModal = this.el.closest('ion-modal, ion-popover');
      if (popoverOrModal) {
        popoverOrModal.dismiss();
      }
    };
    this.setWorkingParts = (parts) => {
      this.workingParts = Object.assign({}, parts);
    };
    this.setActiveParts = (parts, removeDate = false) => {
      const { multiple, minParts, maxParts, activePartsClone } = this;
      /**
       * When setting the active parts, it is possible
       * to set invalid data. For example,
       * when updating January 31 to February,
       * February 31 does not exist. As a result
       * we need to validate the active parts and
       * ensure that we are only setting valid dates.
       * Additionally, we need to update the working parts
       * too in the event that the validated parts are different.
       */
      const validatedParts = validateParts(parts, minParts, maxParts);
      this.setWorkingParts(validatedParts);
      if (multiple) {
        /**
         * We read from activePartsClone here because valueChanged() only updates that,
         * so it's the more reliable source of truth. If we read from activeParts, then
         * if you click July 1, manually set the value to July 2, and then click July 3,
         * the new value would be [July 1, July 3], ignoring the value set.
         *
         * We can then pass the new value to activeParts (rather than activePartsClone)
         * since the clone will be updated automatically by activePartsChanged().
         */
        const activePartsArray = Array.isArray(activePartsClone) ? activePartsClone : [activePartsClone];
        if (removeDate) {
          this.activeParts = activePartsArray.filter((p) => !isSameDay(p, validatedParts));
        }
        else {
          this.activeParts = [...activePartsArray, validatedParts];
        }
      }
      else {
        this.activeParts = Object.assign({}, validatedParts);
      }
      const hasSlottedButtons = this.el.querySelector('[slot="buttons"]') !== null;
      if (hasSlottedButtons || this.showDefaultButtons) {
        return;
      }
      this.confirm();
    };
    this.initializeKeyboardListeners = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      const root = this.el.shadowRoot;
      /**
       * Get a reference to the month
       * element we are currently viewing.
       */
      const currentMonth = calendarBodyRef.querySelector('.calendar-month:nth-of-type(2)');
      /**
       * When focusing the calendar body, we want to pass focus
       * to the working day, but other days should
       * only be accessible using the arrow keys. Pressing
       * Tab should jump between bodies of selectable content.
       */
      const checkCalendarBodyFocus = (ev) => {
        var _a;
        const record = ev[0];
        /**
         * If calendar body was already focused
         * when this fired or if the calendar body
         * if not currently focused, we should not re-focus
         * the inner day.
         */
        if (((_a = record.oldValue) === null || _a === void 0 ? void 0 : _a.includes('ion-focused')) || !calendarBodyRef.classList.contains('ion-focused')) {
          return;
        }
        this.focusWorkingDay(currentMonth);
      };
      const mo = new MutationObserver(checkCalendarBodyFocus);
      mo.observe(calendarBodyRef, { attributeFilter: ['class'], attributeOldValue: true });
      this.destroyKeyboardMO = () => {
        mo === null || mo === void 0 ? void 0 : mo.disconnect();
      };
      /**
       * We must use keydown not keyup as we want
       * to prevent scrolling when using the arrow keys.
       */
      calendarBodyRef.addEventListener('keydown', (ev) => {
        const activeElement = root.activeElement;
        if (!activeElement || !activeElement.classList.contains('calendar-day')) {
          return;
        }
        const parts = getPartsFromCalendarDay(activeElement);
        let partsToFocus;
        switch (ev.key) {
          case 'ArrowDown':
            ev.preventDefault();
            partsToFocus = getNextWeek(parts);
            break;
          case 'ArrowUp':
            ev.preventDefault();
            partsToFocus = getPreviousWeek(parts);
            break;
          case 'ArrowRight':
            ev.preventDefault();
            partsToFocus = getNextDay(parts);
            break;
          case 'ArrowLeft':
            ev.preventDefault();
            partsToFocus = getPreviousDay(parts);
            break;
          case 'Home':
            ev.preventDefault();
            partsToFocus = getStartOfWeek(parts);
            break;
          case 'End':
            ev.preventDefault();
            partsToFocus = getEndOfWeek(parts);
            break;
          case 'PageUp':
            ev.preventDefault();
            partsToFocus = ev.shiftKey ? getPreviousYear(parts) : getPreviousMonth(parts);
            break;
          case 'PageDown':
            ev.preventDefault();
            partsToFocus = ev.shiftKey ? getNextYear(parts) : getNextMonth(parts);
            break;
          /**
           * Do not preventDefault here
           * as we do not want to override other
           * browser defaults such as pressing Enter/Space
           * to select a day.
           */
          default:
            return;
        }
        /**
         * If the day we want to move focus to is
         * disabled, do not do anything.
         */
        if (isDayDisabled(partsToFocus, this.minParts, this.maxParts)) {
          return;
        }
        this.setWorkingParts(Object.assign(Object.assign({}, this.workingParts), partsToFocus));
        /**
         * Give view a chance to re-render
         * then move focus to the new working day
         */
        requestAnimationFrame(() => this.focusWorkingDay(currentMonth));
      });
    };
    this.focusWorkingDay = (currentMonth) => {
      /**
       * Get the number of padding days so
       * we know how much to offset our next selector by
       * to grab the correct calenday-day element.
       */
      const padding = currentMonth.querySelectorAll('.calendar-day-padding');
      const { day } = this.workingParts;
      if (day === null) {
        return;
      }
      /**
       * Get the calendar day element
       * and focus it.
       */
      const dayEl = currentMonth.querySelector(`.calendar-day:nth-of-type(${padding.length + day})`);
      if (dayEl) {
        dayEl.focus();
      }
    };
    this.processMinParts = () => {
      const { min, defaultParts } = this;
      if (min === undefined) {
        this.minParts = undefined;
        return;
      }
      this.minParts = parseMinParts(min, defaultParts);
    };
    this.processMaxParts = () => {
      const { max, defaultParts } = this;
      if (max === undefined) {
        this.maxParts = undefined;
        return;
      }
      this.maxParts = parseMaxParts(max, defaultParts);
    };
    this.initializeCalendarListener = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      /**
       * For performance reasons, we only render 3
       * months at a time: The current month, the previous
       * month, and the next month. We have a scroll listener
       * on the calendar body to append/prepend new months.
       *
       * We can do this because Stencil is smart enough to not
       * re-create the .calendar-month containers, but rather
       * update the content within those containers.
       *
       * As an added bonus, WebKit has some troubles with
       * scroll-snap-stop: always, so not rendering all of
       * the months in a row allows us to mostly sidestep
       * that issue.
       */
      const months = calendarBodyRef.querySelectorAll('.calendar-month');
      const startMonth = months[0];
      const workingMonth = months[1];
      const endMonth = months[2];
      const mode = getIonMode(this);
      const needsiOSRubberBandFix = mode === 'ios' && typeof navigator !== 'undefined' && navigator.maxTouchPoints > 1;
      /**
       * Before setting up the scroll listener,
       * scroll the middle month into view.
       * scrollIntoView() will scroll entire page
       * if element is not in viewport. Use scrollLeft instead.
       */
      writeTask(() => {
        calendarBodyRef.scrollLeft = startMonth.clientWidth * (isRTL(this.el) ? -1 : 1);
        const getChangedMonth = (parts) => {
          const box = calendarBodyRef.getBoundingClientRect();
          /**
           * If the current scroll position is all the way to the left
           * then we have scrolled to the previous month.
           * Otherwise, assume that we have scrolled to the next
           * month. We have a tolerance of 2px to account for
           * sub pixel rendering.
           *
           * Check below the next line ensures that we did not
           * swipe and abort (i.e. we swiped but we are still on the current month).
           */
          const month = calendarBodyRef.scrollLeft <= 2 ? startMonth : endMonth;
          /**
           * The edge of the month must be lined up with
           * the edge of the calendar body in order for
           * the component to update. Otherwise, it
           * may be the case that the user has paused their
           * swipe or the browser has not finished snapping yet.
           * Rather than check if the x values are equal,
           * we give it a tolerance of 2px to account for
           * sub pixel rendering.
           */
          const monthBox = month.getBoundingClientRect();
          if (Math.abs(monthBox.x - box.x) > 2)
            return;
          /**
           * From here, we can determine if the start
           * month or the end month was scrolled into view.
           * If no month was changed, then we can return from
           * the scroll callback early.
           */
          if (month === startMonth) {
            return getPreviousMonth(parts);
          }
          else if (month === endMonth) {
            return getNextMonth(parts);
          }
          else {
            return;
          }
        };
        const updateActiveMonth = () => {
          if (needsiOSRubberBandFix) {
            calendarBodyRef.style.removeProperty('pointer-events');
            appliediOSRubberBandFix = false;
          }
          /**
           * If the month did not change
           * then we can return early.
           */
          const newDate = getChangedMonth(this.workingParts);
          if (!newDate)
            return;
          const { month, day, year } = newDate;
          if (isMonthDisabled({ month, year, day: null }, {
            minParts: Object.assign(Object.assign({}, this.minParts), { day: null }),
            maxParts: Object.assign(Object.assign({}, this.maxParts), { day: null }),
          })) {
            return;
          }
          /**
           * Prevent scrolling for other browsers
           * to give the DOM time to update and the container
           * time to properly snap.
           */
          calendarBodyRef.style.setProperty('overflow', 'hidden');
          /**
           * Use a writeTask here to ensure
           * that the state is updated and the
           * correct month is scrolled into view
           * in the same frame. This is not
           * typically a problem on newer devices
           * but older/slower device may have a flicker
           * if we did not do this.
           */
          writeTask(() => {
            this.setWorkingParts(Object.assign(Object.assign({}, this.workingParts), { month, day: day, year }));
            calendarBodyRef.scrollLeft = workingMonth.clientWidth * (isRTL(this.el) ? -1 : 1);
            calendarBodyRef.style.removeProperty('overflow');
          });
        };
        /**
         * When the container finishes scrolling we
         * need to update the DOM with the selected month.
         */
        let scrollTimeout;
        /**
         * We do not want to attempt to set pointer-events
         * multiple times within a single swipe gesture as
         * that adds unnecessary work to the main thread.
         */
        let appliediOSRubberBandFix = false;
        const scrollCallback = () => {
          if (scrollTimeout) {
            clearTimeout(scrollTimeout);
          }
          /**
           * On iOS it is possible to quickly rubber band
           * the scroll area before the scroll timeout has fired.
           * This results in users reaching the end of the scrollable
           * container before the DOM has updated.
           * By setting `pointer-events: none` we can ensure that
           * subsequent swipes do not happen while the container
           * is snapping.
           */
          if (!appliediOSRubberBandFix && needsiOSRubberBandFix) {
            calendarBodyRef.style.setProperty('pointer-events', 'none');
            appliediOSRubberBandFix = true;
          }
          // Wait ~3 frames
          scrollTimeout = setTimeout(updateActiveMonth, 50);
        };
        calendarBodyRef.addEventListener('scroll', scrollCallback);
        this.destroyCalendarListener = () => {
          calendarBodyRef.removeEventListener('scroll', scrollCallback);
        };
      });
    };
    /**
     * Clean up all listeners except for the overlay
     * listener. This is so that we can re-create the listeners
     * if the datetime has been hidden/presented by a modal or popover.
     */
    this.destroyInteractionListeners = () => {
      const { destroyCalendarListener, destroyKeyboardMO } = this;
      if (destroyCalendarListener !== undefined) {
        destroyCalendarListener();
      }
      if (destroyKeyboardMO !== undefined) {
        destroyKeyboardMO();
      }
    };
    this.processValue = (value) => {
      const hasValue = value !== null && value !== undefined;
      const valueToProcess = hasValue ? parseDate(value) : this.defaultParts;
      const { minParts, maxParts } = this;
      this.warnIfIncorrectValueUsage();
      /**
       * Datetime should only warn of out of bounds values
       * if set by the user. If the `value` is undefined,
       * we will default to today's date which may be out
       * of bounds. In this case, the warning makes it look
       * like the developer did something wrong which is
       * not true.
       */
      if (hasValue) {
        warnIfValueOutOfBounds(valueToProcess, minParts, maxParts);
      }
      /**
       * If there are multiple values, pick an arbitrary one to clamp to. This way,
       * if the values are across months, we always show at least one of them. Note
       * that the values don't necessarily have to be in order.
       */
      const singleValue = Array.isArray(valueToProcess) ? valueToProcess[0] : valueToProcess;
      const { month, day, year, hour, minute } = clampDate(singleValue, minParts, maxParts);
      const ampm = parseAmPm(hour);
      this.setWorkingParts({
        month,
        day,
        year,
        hour,
        minute,
        ampm,
      });
      /**
       * Since `activeParts` indicates a value that
       * been explicitly selected either by the
       * user or the app, only update `activeParts`
       * if the `value` property is set.
       */
      if (hasValue) {
        if (Array.isArray(valueToProcess)) {
          this.activeParts = [...valueToProcess];
        }
        else {
          this.activeParts = {
            month,
            day,
            year,
            hour,
            minute,
            ampm,
          };
        }
      }
      else {
        /**
         * Reset the active parts if the value is not set.
         * This will clear the selected calendar day when
         * performing a clear action or using the reset() method.
         */
        this.activeParts = [];
      }
    };
    this.onFocus = () => {
      this.ionFocus.emit();
    };
    this.onBlur = () => {
      this.ionBlur.emit();
    };
    this.hasValue = () => {
      return this.value != null;
    };
    this.nextMonth = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      const nextMonth = calendarBodyRef.querySelector('.calendar-month:last-of-type');
      if (!nextMonth) {
        return;
      }
      const left = nextMonth.offsetWidth * 2;
      calendarBodyRef.scrollTo({
        top: 0,
        left: left * (isRTL(this.el) ? -1 : 1),
        behavior: 'smooth',
      });
    };
    this.prevMonth = () => {
      const calendarBodyRef = this.calendarBodyRef;
      if (!calendarBodyRef) {
        return;
      }
      const prevMonth = calendarBodyRef.querySelector('.calendar-month:first-of-type');
      if (!prevMonth) {
        return;
      }
      calendarBodyRef.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    };
    this.toggleMonthAndYearView = () => {
      this.showMonthAndYear = !this.showMonthAndYear;
    };
    this.showMonthAndYear = false;
    this.activeParts = [];
    this.workingParts = {
      month: 5,
      day: 28,
      year: 2021,
      hour: 13,
      minute: 52,
      ampm: 'pm',
    };
    this.isTimePopoverOpen = false;
    this.color = 'primary';
    this.name = this.inputId;
    this.disabled = false;
    this.readonly = false;
    this.isDateEnabled = undefined;
    this.min = undefined;
    this.max = undefined;
    this.presentation = 'date-time';
    this.cancelText = 'Cancel';
    this.doneText = 'Done';
    this.clearText = 'Clear';
    this.yearValues = undefined;
    this.monthValues = undefined;
    this.dayValues = undefined;
    this.hourValues = undefined;
    this.minuteValues = undefined;
    this.locale = 'default';
    this.firstDayOfWeek = 0;
    this.titleSelectedDatesFormatter = undefined;
    this.multiple = false;
    this.highlightedDates = undefined;
    this.value = undefined;
    this.showDefaultTitle = false;
    this.showDefaultButtons = false;
    this.showClearButton = false;
    this.showDefaultTimeLabel = true;
    this.hourCycle = undefined;
    this.size = 'fixed';
    this.preferWheel = false;
  }
  disabledChanged() {
    this.emitStyle();
  }
  minChanged() {
    this.processMinParts();
  }
  maxChanged() {
    this.processMaxParts();
  }
  yearValuesChanged() {
    this.parsedYearValues = convertToArrayOfNumbers(this.yearValues);
  }
  monthValuesChanged() {
    this.parsedMonthValues = convertToArrayOfNumbers(this.monthValues);
  }
  dayValuesChanged() {
    this.parsedDayValues = convertToArrayOfNumbers(this.dayValues);
  }
  hourValuesChanged() {
    this.parsedHourValues = convertToArrayOfNumbers(this.hourValues);
  }
  minuteValuesChanged() {
    this.parsedMinuteValues = convertToArrayOfNumbers(this.minuteValues);
  }
  activePartsChanged() {
    this.activePartsClone = this.activeParts;
  }
  /**
   * Update the datetime value when the value changes
   */
  valueChanged() {
    const { value, minParts, maxParts, workingParts } = this;
    if (this.hasValue()) {
      this.warnIfIncorrectValueUsage();
      /**
       * Clones the value of the `activeParts` to the private clone, to update
       * the date display on the current render cycle without causing another render.
       *
       * This allows us to update the current value's date/time display without
       * refocusing or shifting the user's display (leaves the user in place).
       */
      const valueDateParts = parseDate(value);
      if (valueDateParts) {
        warnIfValueOutOfBounds(valueDateParts, minParts, maxParts);
        if (Array.isArray(valueDateParts)) {
          this.activePartsClone = [...valueDateParts];
        }
        else {
          const { month, day, year, hour, minute } = valueDateParts;
          const ampm = hour != null ? (hour >= 12 ? 'pm' : 'am') : undefined;
          this.activePartsClone = Object.assign(Object.assign({}, this.activeParts), { month,
            day,
            year,
            hour,
            minute,
            ampm });
          /**
           * The working parts am/pm value must be updated when the value changes, to
           * ensure the time picker hour column values are generated correctly.
           *
           * Note that we don't need to do this if valueDateParts is an array, since
           * multiple="true" does not apply to time pickers.
           */
          this.setWorkingParts(Object.assign(Object.assign({}, workingParts), { ampm }));
        }
      }
      else {
        printIonWarning(`Unable to parse date string: ${value}. Please provide a valid ISO 8601 datetime string.`);
      }
    }
    this.emitStyle();
    this.ionValueChange.emit({ value });
  }
  /**
   * Confirms the selected datetime value, updates the
   * `value` property, and optionally closes the popover
   * or modal that the datetime was presented in.
   */
  async confirm(closeOverlay = false) {
    const { isCalendarPicker, activeParts } = this;
    /**
     * We only update the value if the presentation is not a calendar picker.
     */
    if (activeParts !== undefined || !isCalendarPicker) {
      const activePartsIsArray = Array.isArray(activeParts);
      if (activePartsIsArray && activeParts.length === 0) {
        this.setValue(undefined);
      }
      else {
        this.setValue(convertDataToISO(activeParts));
      }
    }
    if (closeOverlay) {
      this.closeParentOverlay();
    }
  }
  /**
   * Resets the internal state of the datetime but does not update the value.
   * Passing a valid ISO-8601 string will reset the state of the component to the provided date.
   * If no value is provided, the internal state will be reset to the clamped value of the min, max and today.
   */
  async reset(startDate) {
    this.processValue(startDate);
  }
  /**
   * Emits the ionCancel event and
   * optionally closes the popover
   * or modal that the datetime was
   * presented in.
   */
  async cancel(closeOverlay = false) {
    this.ionCancel.emit();
    if (closeOverlay) {
      this.closeParentOverlay();
    }
  }
  get isCalendarPicker() {
    const { presentation } = this;
    return presentation === 'date' || presentation === 'date-time' || presentation === 'time-date';
  }
  connectedCallback() {
    this.clearFocusVisible = startFocusVisible(this.el).destroy;
  }
  disconnectedCallback() {
    if (this.clearFocusVisible) {
      this.clearFocusVisible();
      this.clearFocusVisible = undefined;
    }
  }
  initializeListeners() {
    this.initializeCalendarListener();
    this.initializeKeyboardListeners();
  }
  componentDidLoad() {
    /**
     * If a scrollable element is hidden using `display: none`,
     * it will not have a scroll height meaning we cannot scroll elements
     * into view. As a result, we will need to wait for the datetime to become
     * visible if used inside of a modal or a popover otherwise the scrollable
     * areas will not have the correct values snapped into place.
     */
    const visibleCallback = (entries) => {
      const ev = entries[0];
      if (!ev.isIntersecting) {
        return;
      }
      this.initializeListeners();
      /**
       * TODO FW-2793: Datetime needs a frame to ensure that it
       * can properly scroll contents into view. As a result
       * we hide the scrollable content until after that frame
       * so users do not see the content quickly shifting. The downside
       * is that the content will pop into view a frame after. Maybe there
       * is a better way to handle this?
       */
      writeTask(() => {
        this.el.classList.add('datetime-ready');
      });
    };
    const visibleIO = new IntersectionObserver(visibleCallback, { threshold: 0.01 });
    /**
     * Use raf to avoid a race condition between the component loading and
     * its display animation starting (such as when shown in a modal). This
     * could cause the datetime to start at a visibility of 0, erroneously
     * triggering the `hiddenIO` observer below.
     */
    raf(() => visibleIO === null || visibleIO === void 0 ? void 0 : visibleIO.observe(this.el));
    /**
     * We need to clean up listeners when the datetime is hidden
     * in a popover/modal so that we can properly scroll containers
     * back into view if they are re-presented. When the datetime is hidden
     * the scroll areas have scroll widths/heights of 0px, so any snapping
     * we did originally has been lost.
     */
    const hiddenCallback = (entries) => {
      const ev = entries[0];
      if (ev.isIntersecting) {
        return;
      }
      this.destroyInteractionListeners();
      /**
       * When datetime is hidden, we need to make sure that
       * the month/year picker is closed. Otherwise,
       * it will be open when the datetime re-appears
       * and the scroll area of the calendar grid will be 0.
       * As a result, the wrong month will be shown.
       */
      this.showMonthAndYear = false;
      writeTask(() => {
        this.el.classList.remove('datetime-ready');
      });
    };
    const hiddenIO = new IntersectionObserver(hiddenCallback, { threshold: 0 });
    raf(() => hiddenIO === null || hiddenIO === void 0 ? void 0 : hiddenIO.observe(this.el));
    /**
     * Datetime uses Ionic components that emit
     * ionFocus and ionBlur. These events are
     * composed meaning they will cross
     * the shadow dom boundary. We need to
     * stop propagation on these events otherwise
     * developers will see 2 ionFocus or 2 ionBlur
     * events at a time.
     */
    const root = getElementRoot(this.el);
    root.addEventListener('ionFocus', (ev) => ev.stopPropagation());
    root.addEventListener('ionBlur', (ev) => ev.stopPropagation());
  }
  /**
   * When the presentation is changed, all calendar content is recreated,
   * so we need to re-init behavior with the new elements.
   */
  componentDidRender() {
    const { presentation, prevPresentation, calendarBodyRef, minParts, preferWheel } = this;
    /**
     * TODO(FW-2165)
     * Remove this when https://bugs.webkit.org/show_bug.cgi?id=235960 is fixed.
     * When using `min`, we add `scroll-snap-align: none`
     * to the disabled month so that users cannot scroll to it.
     * This triggers a bug in WebKit where the scroll position is reset.
     * Since the month change logic is handled by a scroll listener,
     * this causes the month to change leading to `scroll-snap-align`
     * changing again, thus changing the scroll position again and causing
     * an infinite loop.
     * This issue only applies to the calendar grid, so we can disable
     * it if the calendar grid is not being used.
     */
    const hasCalendarGrid = !preferWheel && ['date-time', 'time-date', 'date'].includes(presentation);
    if (minParts !== undefined && hasCalendarGrid && calendarBodyRef) {
      const workingMonth = calendarBodyRef.querySelector('.calendar-month:nth-of-type(1)');
      if (workingMonth) {
        calendarBodyRef.scrollLeft = workingMonth.clientWidth * (isRTL(this.el) ? -1 : 1);
      }
    }
    if (prevPresentation === null) {
      this.prevPresentation = presentation;
      return;
    }
    if (presentation === prevPresentation) {
      return;
    }
    this.prevPresentation = presentation;
    this.destroyInteractionListeners();
    this.initializeListeners();
    /**
     * The month/year picker from the date interface
     * should be closed as it is not available in non-date
     * interfaces.
     */
    this.showMonthAndYear = false;
    raf(() => {
      this.ionRender.emit();
    });
  }
  componentWillLoad() {
    const { el, highlightedDates, multiple, presentation, preferWheel } = this;
    if (multiple) {
      if (presentation !== 'date') {
        printIonWarning('Multiple date selection is only supported for presentation="date".', el);
      }
      if (preferWheel) {
        printIonWarning('Multiple date selection is not supported with preferWheel="true".', el);
      }
    }
    if (highlightedDates !== undefined) {
      if (presentation !== 'date' && presentation !== 'date-time' && presentation !== 'time-date') {
        printIonWarning('The highlightedDates property is only supported with the date, date-time, and time-date presentations.', el);
      }
      if (preferWheel) {
        printIonWarning('The highlightedDates property is not supported with preferWheel="true".', el);
      }
    }
    this.processMinParts();
    this.processMaxParts();
    const hourValues = (this.parsedHourValues = convertToArrayOfNumbers(this.hourValues));
    const minuteValues = (this.parsedMinuteValues = convertToArrayOfNumbers(this.minuteValues));
    const monthValues = (this.parsedMonthValues = convertToArrayOfNumbers(this.monthValues));
    const yearValues = (this.parsedYearValues = convertToArrayOfNumbers(this.yearValues));
    const dayValues = (this.parsedDayValues = convertToArrayOfNumbers(this.dayValues));
    const todayParts = (this.todayParts = parseDate(getToday()));
    this.defaultParts = getClosestValidDate(todayParts, monthValues, dayValues, yearValues, hourValues, minuteValues);
    this.processValue(this.value);
    this.emitStyle();
  }
  emitStyle() {
    this.ionStyle.emit({
      interactive: true,
      datetime: true,
      'interactive-disabled': this.disabled,
    });
  }
  /**
   * Universal render methods
   * These are pieces of datetime that
   * are rendered independently of presentation.
   */
  renderFooter() {
    const { showDefaultButtons, showClearButton } = this;
    const hasSlottedButtons = this.el.querySelector('[slot="buttons"]') !== null;
    if (!hasSlottedButtons && !showDefaultButtons && !showClearButton) {
      return;
    }
    const clearButtonClick = () => {
      this.reset();
      this.setValue(undefined);
    };
    /**
     * By default we render two buttons:
     * Cancel - Dismisses the datetime and
     * does not update the `value` prop.
     * OK - Dismisses the datetime and
     * updates the `value` prop.
     */
    return (h("div", { class: "datetime-footer" }, h("div", { class: "datetime-buttons" }, h("div", { class: {
        ['datetime-action-buttons']: true,
        ['has-clear-button']: this.showClearButton,
      } }, h("slot", { name: "buttons" }, h("ion-buttons", null, showDefaultButtons && (h("ion-button", { id: "cancel-button", color: this.color, onClick: () => this.cancel(true) }, this.cancelText)), h("div", null, showClearButton && (h("ion-button", { id: "clear-button", color: this.color, onClick: () => clearButtonClick() }, this.clearText)), showDefaultButtons && (h("ion-button", { id: "confirm-button", color: this.color, onClick: () => this.confirm(true) }, this.doneText)))))))));
  }
  /**
   * Wheel picker render methods
   */
  renderWheelPicker(forcePresentation = this.presentation) {
    /**
     * If presentation="time-date" we switch the
     * order of the render array here instead of
     * manually reordering each date/time picker
     * column with CSS. This allows for additional
     * flexibility if we need to render subsets
     * of the date/time data or do additional ordering
     * within the child render functions.
     */
    const renderArray = forcePresentation === 'time-date'
      ? [this.renderTimePickerColumns(forcePresentation), this.renderDatePickerColumns(forcePresentation)]
      : [this.renderDatePickerColumns(forcePresentation), this.renderTimePickerColumns(forcePresentation)];
    return h("ion-picker-internal", null, renderArray);
  }
  renderDatePickerColumns(forcePresentation) {
    return forcePresentation === 'date-time' || forcePresentation === 'time-date'
      ? this.renderCombinedDatePickerColumn()
      : this.renderIndividualDatePickerColumns(forcePresentation);
  }
  renderCombinedDatePickerColumn() {
    const { defaultParts, workingParts, locale, minParts, maxParts, todayParts, isDateEnabled } = this;
    const activePart = this.getActivePartsWithFallback();
    /**
     * By default, generate a range of 3 months:
     * Previous month, current month, and next month
     */
    const monthsToRender = generateMonths(workingParts);
    const lastMonth = monthsToRender[monthsToRender.length - 1];
    /**
     * Ensure that users can select the entire window of dates.
     */
    monthsToRender[0].day = 1;
    lastMonth.day = getNumDaysInMonth(lastMonth.month, lastMonth.year);
    /**
     * Narrow the dates rendered based on min/max dates (if any).
     * The `min` date is used if the min is after the generated min month.
     * The `max` date is used if the max is before the generated max month.
     * This ensures that the sliding window always stays at 3 months
     * but still allows future dates to be lazily rendered based on any min/max
     * constraints.
     */
    const min = minParts !== undefined && isAfter(minParts, monthsToRender[0]) ? minParts : monthsToRender[0];
    const max = maxParts !== undefined && isBefore(maxParts, lastMonth) ? maxParts : lastMonth;
    const result = getCombinedDateColumnData(locale, todayParts, min, max, this.parsedDayValues, this.parsedMonthValues);
    let items = result.items;
    const parts = result.parts;
    if (isDateEnabled) {
      items = items.map((itemObject, index) => {
        const referenceParts = parts[index];
        let disabled;
        try {
          /**
           * The `isDateEnabled` implementation is try-catch wrapped
           * to prevent exceptions in the user's function from
           * interrupting the calendar rendering.
           */
          disabled = !isDateEnabled(convertDataToISO(referenceParts));
        }
        catch (e) {
          printIonError('Exception thrown from provided `isDateEnabled` function. Please check your function and try again.', e);
        }
        return Object.assign(Object.assign({}, itemObject), { disabled });
      });
    }
    /**
     * If we have selected a day already, then default the column
     * to that value. Otherwise, set it to the default date.
     */
    const todayString = workingParts.day !== null
      ? `${workingParts.year}-${workingParts.month}-${workingParts.day}`
      : `${defaultParts.year}-${defaultParts.month}-${defaultParts.day}`;
    return (h("ion-picker-column-internal", { class: "date-column", color: this.color, items: items, value: todayString, onIonChange: (ev) => {
        // TODO(FW-1823) Remove this when iOS 14 support is dropped.
        // Due to a Safari 14 issue we need to destroy
        // the scroll listener before we update state
        // and trigger a re-render.
        if (this.destroyCalendarListener) {
          this.destroyCalendarListener();
        }
        const { value } = ev.detail;
        const findPart = parts.find(({ month, day, year }) => value === `${year}-${month}-${day}`);
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), findPart));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), findPart));
        // We can re-attach the scroll listener after
        // the working parts have been updated.
        this.initializeCalendarListener();
        ev.stopPropagation();
      } }));
  }
  renderIndividualDatePickerColumns(forcePresentation) {
    const { workingParts, isDateEnabled } = this;
    const shouldRenderMonths = forcePresentation !== 'year' && forcePresentation !== 'time';
    const months = shouldRenderMonths
      ? getMonthColumnData(this.locale, workingParts, this.minParts, this.maxParts, this.parsedMonthValues)
      : [];
    const shouldRenderDays = forcePresentation === 'date';
    let days = shouldRenderDays
      ? getDayColumnData(this.locale, workingParts, this.minParts, this.maxParts, this.parsedDayValues)
      : [];
    if (isDateEnabled) {
      days = days.map((dayObject) => {
        const { value } = dayObject;
        const valueNum = typeof value === 'string' ? parseInt(value) : value;
        const referenceParts = {
          month: workingParts.month,
          day: valueNum,
          year: workingParts.year,
        };
        let disabled;
        try {
          /**
           * The `isDateEnabled` implementation is try-catch wrapped
           * to prevent exceptions in the user's function from
           * interrupting the calendar rendering.
           */
          disabled = !isDateEnabled(convertDataToISO(referenceParts));
        }
        catch (e) {
          printIonError('Exception thrown from provided `isDateEnabled` function. Please check your function and try again.', e);
        }
        return Object.assign(Object.assign({}, dayObject), { disabled });
      });
    }
    const shouldRenderYears = forcePresentation !== 'month' && forcePresentation !== 'time';
    const years = shouldRenderYears
      ? getYearColumnData(this.locale, this.defaultParts, this.minParts, this.maxParts, this.parsedYearValues)
      : [];
    /**
     * Certain locales show the day before the month.
     */
    const showMonthFirst = isMonthFirstLocale(this.locale, { month: 'numeric', day: 'numeric' });
    let renderArray = [];
    if (showMonthFirst) {
      renderArray = [
        this.renderMonthPickerColumn(months),
        this.renderDayPickerColumn(days),
        this.renderYearPickerColumn(years),
      ];
    }
    else {
      renderArray = [
        this.renderDayPickerColumn(days),
        this.renderMonthPickerColumn(months),
        this.renderYearPickerColumn(years),
      ];
    }
    return renderArray;
  }
  renderDayPickerColumn(days) {
    var _a;
    if (days.length === 0) {
      return [];
    }
    const { workingParts } = this;
    const activePart = this.getActivePartsWithFallback();
    return (h("ion-picker-column-internal", { class: "day-column", color: this.color, items: days, value: (_a = (workingParts.day !== null ? workingParts.day : this.defaultParts.day)) !== null && _a !== void 0 ? _a : undefined, onIonChange: (ev) => {
        // TODO(FW-1823) Remove this when iOS 14 support is dropped.
        // Due to a Safari 14 issue we need to destroy
        // the scroll listener before we update state
        // and trigger a re-render.
        if (this.destroyCalendarListener) {
          this.destroyCalendarListener();
        }
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), { day: ev.detail.value }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), { day: ev.detail.value }));
        // We can re-attach the scroll listener after
        // the working parts have been updated.
        this.initializeCalendarListener();
        ev.stopPropagation();
      } }));
  }
  renderMonthPickerColumn(months) {
    if (months.length === 0) {
      return [];
    }
    const { workingParts } = this;
    const activePart = this.getActivePartsWithFallback();
    return (h("ion-picker-column-internal", { class: "month-column", color: this.color, items: months, value: workingParts.month, onIonChange: (ev) => {
        // TODO(FW-1823) Remove this when iOS 14 support is dropped.
        // Due to a Safari 14 issue we need to destroy
        // the scroll listener before we update state
        // and trigger a re-render.
        if (this.destroyCalendarListener) {
          this.destroyCalendarListener();
        }
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), { month: ev.detail.value }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), { month: ev.detail.value }));
        // We can re-attach the scroll listener after
        // the working parts have been updated.
        this.initializeCalendarListener();
        ev.stopPropagation();
      } }));
  }
  renderYearPickerColumn(years) {
    if (years.length === 0) {
      return [];
    }
    const { workingParts } = this;
    const activePart = this.getActivePartsWithFallback();
    return (h("ion-picker-column-internal", { class: "year-column", color: this.color, items: years, value: workingParts.year, onIonChange: (ev) => {
        // TODO(FW-1823) Remove this when iOS 14 support is dropped.
        // Due to a Safari 14 issue we need to destroy
        // the scroll listener before we update state
        // and trigger a re-render.
        if (this.destroyCalendarListener) {
          this.destroyCalendarListener();
        }
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), { year: ev.detail.value }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), { year: ev.detail.value }));
        // We can re-attach the scroll listener after
        // the working parts have been updated.
        this.initializeCalendarListener();
        ev.stopPropagation();
      } }));
  }
  renderTimePickerColumns(forcePresentation) {
    if (['date', 'month', 'month-year', 'year'].includes(forcePresentation)) {
      return [];
    }
    /**
     * If a user has not selected a date,
     * then we should show all times. If the
     * user has selected a date (even if it has
     * not been confirmed yet), we should apply
     * the max and min restrictions so that the
     * time picker shows values that are
     * appropriate for the selected date.
     */
    const activePart = this.getActivePart();
    const userHasSelectedDate = activePart !== undefined;
    const { hoursData, minutesData, dayPeriodData } = getTimeColumnsData(this.locale, this.workingParts, this.hourCycle, userHasSelectedDate ? this.minParts : undefined, userHasSelectedDate ? this.maxParts : undefined, this.parsedHourValues, this.parsedMinuteValues);
    return [
      this.renderHourPickerColumn(hoursData),
      this.renderMinutePickerColumn(minutesData),
      this.renderDayPeriodPickerColumn(dayPeriodData),
    ];
  }
  renderHourPickerColumn(hoursData) {
    const { workingParts } = this;
    if (hoursData.length === 0)
      return [];
    const activePart = this.getActivePartsWithFallback();
    return (h("ion-picker-column-internal", { color: this.color, value: activePart.hour, items: hoursData, numericInput: true, onIonChange: (ev) => {
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), { hour: ev.detail.value }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), { hour: ev.detail.value }));
        ev.stopPropagation();
      } }));
  }
  renderMinutePickerColumn(minutesData) {
    const { workingParts } = this;
    if (minutesData.length === 0)
      return [];
    const activePart = this.getActivePartsWithFallback();
    return (h("ion-picker-column-internal", { color: this.color, value: activePart.minute, items: minutesData, numericInput: true, onIonChange: (ev) => {
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), { minute: ev.detail.value }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), { minute: ev.detail.value }));
        ev.stopPropagation();
      } }));
  }
  renderDayPeriodPickerColumn(dayPeriodData) {
    const { workingParts } = this;
    if (dayPeriodData.length === 0) {
      return [];
    }
    const activePart = this.getActivePartsWithFallback();
    const isDayPeriodRTL = isLocaleDayPeriodRTL(this.locale);
    return (h("ion-picker-column-internal", { style: isDayPeriodRTL ? { order: '-1' } : {}, color: this.color, value: activePart.ampm, items: dayPeriodData, onIonChange: (ev) => {
        const hour = calculateHourFromAMPM(workingParts, ev.detail.value);
        this.setWorkingParts(Object.assign(Object.assign({}, workingParts), { ampm: ev.detail.value, hour }));
        this.setActiveParts(Object.assign(Object.assign({}, activePart), { ampm: ev.detail.value, hour }));
        ev.stopPropagation();
      } }));
  }
  renderWheelView(forcePresentation) {
    const { locale } = this;
    const showMonthFirst = isMonthFirstLocale(locale);
    const columnOrder = showMonthFirst ? 'month-first' : 'year-first';
    return (h("div", { class: {
        [`wheel-order-${columnOrder}`]: true,
      } }, this.renderWheelPicker(forcePresentation)));
  }
  /**
   * Grid Render Methods
   */
  renderCalendarHeader(mode) {
    const expandedIcon = mode === 'ios' ? chevronDown : caretUpSharp;
    const collapsedIcon = mode === 'ios' ? chevronForward : caretDownSharp;
    const prevMonthDisabled = isPrevMonthDisabled(this.workingParts, this.minParts, this.maxParts);
    const nextMonthDisabled = isNextMonthDisabled(this.workingParts, this.maxParts);
    // don't use the inheritAttributes util because it removes dir from the host, and we still need that
    const hostDir = this.el.getAttribute('dir') || undefined;
    return (h("div", { class: "calendar-header" }, h("div", { class: "calendar-action-buttons" }, h("div", { class: "calendar-month-year" }, h("ion-item", { part: "month-year-button", ref: (el) => (this.monthYearToggleItemRef = el), button: true, "aria-label": "Show year picker", detail: false, lines: "none", onClick: () => {
        var _a;
        this.toggleMonthAndYearView();
        /**
         * TODO: FW-3547
         *
         * Currently there is not a way to set the aria-label on the inner button
         * on the `ion-item` and have it be reactive to changes. This is a workaround
         * until we either refactor `ion-item` to a button or Stencil adds a way to
         * have reactive props for built-in properties, such as `aria-label`.
         */
        const { monthYearToggleItemRef } = this;
        if (monthYearToggleItemRef) {
          const btn = (_a = monthYearToggleItemRef.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector('.item-native');
          if (btn) {
            const monthYearAriaLabel = this.showMonthAndYear ? 'Hide year picker' : 'Show year picker';
            btn.setAttribute('aria-label', monthYearAriaLabel);
          }
        }
      } }, h("ion-label", null, getMonthAndYear(this.locale, this.workingParts), h("ion-icon", { "aria-hidden": "true", icon: this.showMonthAndYear ? expandedIcon : collapsedIcon, lazy: false, flipRtl: true })))), h("div", { class: "calendar-next-prev" }, h("ion-buttons", null, h("ion-button", { "aria-label": "Previous month", disabled: prevMonthDisabled, onClick: () => this.prevMonth() }, h("ion-icon", { dir: hostDir, "aria-hidden": "true", slot: "icon-only", icon: chevronBack, lazy: false, flipRtl: true })), h("ion-button", { "aria-label": "Next month", disabled: nextMonthDisabled, onClick: () => this.nextMonth() }, h("ion-icon", { dir: hostDir, "aria-hidden": "true", slot: "icon-only", icon: chevronForward, lazy: false, flipRtl: true }))))), h("div", { class: "calendar-days-of-week", "aria-hidden": "true" }, getDaysOfWeek(this.locale, mode, this.firstDayOfWeek % 7).map((d) => {
      return h("div", { class: "day-of-week" }, d);
    }))));
  }
  renderMonth(month, year) {
    const yearAllowed = this.parsedYearValues === undefined || this.parsedYearValues.includes(year);
    const monthAllowed = this.parsedMonthValues === undefined || this.parsedMonthValues.includes(month);
    const isCalMonthDisabled = !yearAllowed || !monthAllowed;
    const swipeDisabled = isMonthDisabled({
      month,
      year,
      day: null,
    }, {
      // The day is not used when checking if a month is disabled.
      // Users should be able to access the min or max month, even if the
      // min/max date is out of bounds (e.g. min is set to Feb 15, Feb should not be disabled).
      minParts: Object.assign(Object.assign({}, this.minParts), { day: null }),
      maxParts: Object.assign(Object.assign({}, this.maxParts), { day: null }),
    });
    // The working month should never have swipe disabled.
    // Otherwise the CSS scroll snap will not work and the user
    // can free-scroll the calendar.
    const isWorkingMonth = this.workingParts.month === month && this.workingParts.year === year;
    const activePart = this.getActivePartsWithFallback();
    return (h("div", { "aria-hidden": !isWorkingMonth ? 'true' : null, class: {
        'calendar-month': true,
        // Prevents scroll snap swipe gestures for months outside of the min/max bounds
        'calendar-month-disabled': !isWorkingMonth && swipeDisabled,
      } }, h("div", { class: "calendar-month-grid" }, getDaysOfMonth(month, year, this.firstDayOfWeek % 7).map((dateObject, index) => {
      const { day, dayOfWeek } = dateObject;
      const { el, highlightedDates, isDateEnabled, multiple } = this;
      const referenceParts = { month, day, year };
      const isCalendarPadding = day === null;
      const { isActive, isToday, ariaLabel, ariaSelected, disabled, text } = getCalendarDayState(this.locale, referenceParts, this.activePartsClone, this.todayParts, this.minParts, this.maxParts, this.parsedDayValues);
      const dateIsoString = convertDataToISO(referenceParts);
      let isCalDayDisabled = isCalMonthDisabled || disabled;
      if (!isCalDayDisabled && isDateEnabled !== undefined) {
        try {
          /**
           * The `isDateEnabled` implementation is try-catch wrapped
           * to prevent exceptions in the user's function from
           * interrupting the calendar rendering.
           */
          isCalDayDisabled = !isDateEnabled(dateIsoString);
        }
        catch (e) {
          printIonError('Exception thrown from provided `isDateEnabled` function. Please check your function and try again.', el, e);
        }
      }
      let dateStyle = undefined;
      /**
       * Custom highlight styles should not override the style for selected dates,
       * nor apply to "filler days" at the start of the grid.
       */
      if (highlightedDates !== undefined && !isActive && day !== null) {
        dateStyle = getHighlightStyles(highlightedDates, dateIsoString, el);
      }
      return (h("button", { tabindex: "-1", "data-day": day, "data-month": month, "data-year": year, "data-index": index, "data-day-of-week": dayOfWeek, disabled: isCalDayDisabled, class: {
          'calendar-day-padding': isCalendarPadding,
          'calendar-day': true,
          'calendar-day-active': isActive,
          'calendar-day-today': isToday,
        }, style: dateStyle && {
          color: dateStyle.textColor,
        }, "aria-hidden": isCalendarPadding ? 'true' : null, "aria-selected": ariaSelected, "aria-label": ariaLabel, onClick: () => {
          if (isCalendarPadding) {
            return;
          }
          this.setWorkingParts(Object.assign(Object.assign({}, this.workingParts), { month,
            day,
            year }));
          // multiple only needs date info, so we can wipe out other fields like time
          if (multiple) {
            this.setActiveParts({
              month,
              day,
              year,
            }, isActive);
          }
          else {
            this.setActiveParts(Object.assign(Object.assign({}, activePart), { month,
              day,
              year }));
          }
        } }, h("div", { class: "calendar-day-highlight", style: {
          backgroundColor: dateStyle === null || dateStyle === void 0 ? void 0 : dateStyle.backgroundColor,
        } }), text));
    }))));
  }
  renderCalendarBody() {
    return (h("div", { class: "calendar-body ion-focusable", ref: (el) => (this.calendarBodyRef = el), tabindex: "0" }, generateMonths(this.workingParts).map(({ month, year }) => {
      return this.renderMonth(month, year);
    })));
  }
  renderCalendar(mode) {
    return (h("div", { class: "datetime-calendar", key: "datetime-calendar" }, this.renderCalendarHeader(mode), this.renderCalendarBody()));
  }
  renderTimeLabel() {
    const hasSlottedTimeLabel = this.el.querySelector('[slot="time-label"]') !== null;
    if (!hasSlottedTimeLabel && !this.showDefaultTimeLabel) {
      return;
    }
    return h("slot", { name: "time-label" }, "Time");
  }
  renderTimeOverlay() {
    const { hourCycle, isTimePopoverOpen, locale } = this;
    const use24Hour = is24Hour(locale, hourCycle);
    const activePart = this.getActivePartsWithFallback();
    return [
      h("div", { class: "time-header" }, this.renderTimeLabel()),
      h("button", { class: {
          'time-body': true,
          'time-body-active': isTimePopoverOpen,
        }, part: `time-button${isTimePopoverOpen ? ' active' : ''}`, "aria-expanded": "false", "aria-haspopup": "true", onClick: async (ev) => {
          const { popoverRef } = this;
          if (popoverRef) {
            this.isTimePopoverOpen = true;
            popoverRef.present(new CustomEvent('ionShadowTarget', {
              detail: {
                ionShadowTarget: ev.target,
              },
            }));
            await popoverRef.onWillDismiss();
            this.isTimePopoverOpen = false;
          }
        } }, getLocalizedTime(locale, activePart, use24Hour)),
      h("ion-popover", { alignment: "center", translucent: true, overlayIndex: 1, arrow: false, onWillPresent: (ev) => {
          /**
           * Intersection Observers do not consistently fire between Blink and Webkit
           * when toggling the visibility of the popover and trying to scroll the picker
           * column to the correct time value.
           *
           * This will correctly scroll the element position to the correct time value,
           * before the popover is fully presented.
           */
          const cols = ev.target.querySelectorAll('ion-picker-column-internal');
          // TODO (FW-615): Potentially remove this when intersection observers are fixed in picker column
          cols.forEach((col) => col.scrollActiveItemIntoView());
        }, style: {
          '--offset-y': '-10px',
          '--min-width': 'fit-content',
        },
        // Allow native browser keyboard events to support up/down/home/end key
        // navigation within the time picker.
        keyboardEvents: true, ref: (el) => (this.popoverRef = el) }, this.renderWheelPicker('time')),
    ];
  }
  getHeaderSelectedDateText() {
    const { activeParts, multiple, titleSelectedDatesFormatter } = this;
    const isArray = Array.isArray(activeParts);
    let headerText;
    if (multiple && isArray && activeParts.length !== 1) {
      headerText = `${activeParts.length} days`; // default/fallback for multiple selection
      if (titleSelectedDatesFormatter !== undefined) {
        try {
          headerText = titleSelectedDatesFormatter(convertDataToISO(activeParts));
        }
        catch (e) {
          printIonError('Exception in provided `titleSelectedDatesFormatter`: ', e);
        }
      }
    }
    else {
      // for exactly 1 day selected (multiple set or not), show a formatted version of that
      headerText = getMonthAndDay(this.locale, this.getActivePartsWithFallback());
    }
    return headerText;
  }
  renderHeader(showExpandedHeader = true) {
    const hasSlottedTitle = this.el.querySelector('[slot="title"]') !== null;
    if (!hasSlottedTitle && !this.showDefaultTitle) {
      return;
    }
    return (h("div", { class: "datetime-header" }, h("div", { class: "datetime-title" }, h("slot", { name: "title" }, "Select Date")), showExpandedHeader && h("div", { class: "datetime-selected-date" }, this.getHeaderSelectedDateText())));
  }
  /**
   * Render time picker inside of datetime.
   * Do not pass color prop to segment on
   * iOS mode. MD segment has been customized and
   * should take on the color prop, but iOS
   * should just be the default segment.
   */
  renderTime() {
    const { presentation } = this;
    const timeOnlyPresentation = presentation === 'time';
    return (h("div", { class: "datetime-time" }, timeOnlyPresentation ? this.renderWheelPicker() : this.renderTimeOverlay()));
  }
  /**
   * Renders the month/year picker that is
   * displayed on the calendar grid.
   * The .datetime-year class has additional
   * styles that let us show/hide the
   * picker when the user clicks on the
   * toggle in the calendar header.
   */
  renderCalendarViewMonthYearPicker() {
    return h("div", { class: "datetime-year" }, this.renderWheelView('month-year'));
  }
  /**
   * Render entry point
   * All presentation types are rendered from here.
   */
  renderDatetime(mode) {
    const { presentation, preferWheel } = this;
    /**
     * Certain presentation types have separate grid and wheel displays.
     * If preferWheel is true then we should show a wheel picker instead.
     */
    const hasWheelVariant = presentation === 'date' || presentation === 'date-time' || presentation === 'time-date';
    if (preferWheel && hasWheelVariant) {
      return [this.renderHeader(false), this.renderWheelView(), this.renderFooter()];
    }
    switch (presentation) {
      case 'date-time':
        return [
          this.renderHeader(),
          this.renderCalendar(mode),
          this.renderCalendarViewMonthYearPicker(),
          this.renderTime(),
          this.renderFooter(),
        ];
      case 'time-date':
        return [
          this.renderHeader(),
          this.renderTime(),
          this.renderCalendar(mode),
          this.renderCalendarViewMonthYearPicker(),
          this.renderFooter(),
        ];
      case 'time':
        return [this.renderHeader(false), this.renderTime(), this.renderFooter()];
      case 'month':
      case 'month-year':
      case 'year':
        return [this.renderHeader(false), this.renderWheelView(), this.renderFooter()];
      default:
        return [
          this.renderHeader(),
          this.renderCalendar(mode),
          this.renderCalendarViewMonthYearPicker(),
          this.renderFooter(),
        ];
    }
  }
  render() {
    const { name, value, disabled, el, color, readonly, showMonthAndYear, preferWheel, presentation, size } = this;
    const mode = getIonMode(this);
    const isMonthAndYearPresentation = presentation === 'year' || presentation === 'month' || presentation === 'month-year';
    const shouldShowMonthAndYear = showMonthAndYear || isMonthAndYearPresentation;
    const monthYearPickerOpen = showMonthAndYear && !isMonthAndYearPresentation;
    const hasDatePresentation = presentation === 'date' || presentation === 'date-time' || presentation === 'time-date';
    const hasWheelVariant = hasDatePresentation && preferWheel;
    const hasGrid = hasDatePresentation && !preferWheel;
    renderHiddenInput(true, el, name, formatValue(value), disabled);
    return (h(Host, { "aria-disabled": disabled ? 'true' : null, onFocus: this.onFocus, onBlur: this.onBlur, class: Object.assign({}, createColorClasses(color, {
        [mode]: true,
        ['datetime-readonly']: readonly,
        ['datetime-disabled']: disabled,
        'show-month-and-year': shouldShowMonthAndYear,
        'month-year-picker-open': monthYearPickerOpen,
        [`datetime-presentation-${presentation}`]: true,
        [`datetime-size-${size}`]: true,
        [`datetime-prefer-wheel`]: hasWheelVariant,
        [`datetime-grid`]: hasGrid,
      })) }, this.renderDatetime(mode)));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "disabled": ["disabledChanged"],
    "min": ["minChanged"],
    "max": ["maxChanged"],
    "yearValues": ["yearValuesChanged"],
    "monthValues": ["monthValuesChanged"],
    "dayValues": ["dayValuesChanged"],
    "hourValues": ["hourValuesChanged"],
    "minuteValues": ["minuteValuesChanged"],
    "activeParts": ["activePartsChanged"],
    "value": ["valueChanged"]
  }; }
};
let datetimeIds = 0;
Datetime.style = {
  ios: datetimeIosCss,
  md: datetimeMdCss
};

/**
 * iOS Picker Enter Animation
 */
const iosEnterAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  backdropAnimation
    .addElement(baseEl.querySelector('ion-backdrop'))
    .fromTo('opacity', 0.01, 'var(--backdrop-opacity)')
    .beforeStyles({
    'pointer-events': 'none',
  })
    .afterClearStyles(['pointer-events']);
  wrapperAnimation
    .addElement(baseEl.querySelector('.picker-wrapper'))
    .fromTo('transform', 'translateY(100%)', 'translateY(0%)');
  return baseAnimation
    .addElement(baseEl)
    .easing('cubic-bezier(.36,.66,.04,1)')
    .duration(400)
    .addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * iOS Picker Leave Animation
 */
const iosLeaveAnimation = (baseEl) => {
  const baseAnimation = createAnimation();
  const backdropAnimation = createAnimation();
  const wrapperAnimation = createAnimation();
  backdropAnimation
    .addElement(baseEl.querySelector('ion-backdrop'))
    .fromTo('opacity', 'var(--backdrop-opacity)', 0.01);
  wrapperAnimation
    .addElement(baseEl.querySelector('.picker-wrapper'))
    .fromTo('transform', 'translateY(0%)', 'translateY(100%)');
  return baseAnimation
    .addElement(baseEl)
    .easing('cubic-bezier(.36,.66,.04,1)')
    .duration(400)
    .addAnimation([backdropAnimation, wrapperAnimation]);
};

const pickerIosCss = ".sc-ion-picker-ios-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}@supports (inset-inline-start: 0){.sc-ion-picker-ios-h{inset-inline-start:0}}@supports not (inset-inline-start: 0){.sc-ion-picker-ios-h{left:0}[dir=rtl].sc-ion-picker-ios-h,[dir=rtl] .sc-ion-picker-ios-h{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.sc-ion-picker-ios-h:dir(rtl){left:unset;right:unset;right:0}}}.overlay-hidden.sc-ion-picker-ios-h{display:none}.picker-wrapper.sc-ion-picker-ios{border-radius:var(--border-radius);left:0;right:0;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}.picker-toolbar.sc-ion-picker-ios{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-ios{border:0;font-family:inherit}.picker-button.sc-ion-picker-ios:active,.picker-button.sc-ion-picker-ios:focus{outline:none}.picker-columns.sc-ion-picker-ios{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;overflow:hidden}.picker-above-highlight.sc-ion-picker-ios,.picker-below-highlight.sc-ion-picker-ios{display:none;pointer-events:none}.sc-ion-picker-ios-h{--background:var(--ion-background-color, #fff);--border-width:1px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-ios{display:-ms-flexbox;display:flex;height:44px;border-bottom:0.55px solid var(--border-color)}.picker-toolbar-button.sc-ion-picker-ios{-ms-flex:1;flex:1;text-align:end}.picker-toolbar-button.sc-ion-picker-ios:last-child .picker-button.sc-ion-picker-ios{font-weight:600}.picker-toolbar-button.sc-ion-picker-ios:first-child{font-weight:normal;text-align:start}.picker-button.sc-ion-picker-ios,.picker-button.ion-activated.sc-ion-picker-ios{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:1em;padding-inline-start:1em;-webkit-padding-end:1em;padding-inline-end:1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #3880ff);font-size:16px}.picker-columns.sc-ion-picker-ios{height:215px;-webkit-perspective:1000px;perspective:1000px}.picker-above-highlight.sc-ion-picker-ios{top:0;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:81px;border-bottom:1px solid var(--border-color);background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to bottom, var(--background, var(--ion-background-color, #fff)) 20%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:10}@supports (inset-inline-start: 0){.picker-above-highlight.sc-ion-picker-ios{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-above-highlight.sc-ion-picker-ios{left:0}[dir=rtl].sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios,[dir=rtl] .sc-ion-picker-ios-h .picker-above-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}[dir=rtl].sc-ion-picker-ios .picker-above-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-above-highlight.sc-ion-picker-ios:dir(rtl){left:unset;right:unset;right:0}}}.picker-below-highlight.sc-ion-picker-ios{top:115px;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);display:block;position:absolute;width:100%;height:119px;border-top:1px solid var(--border-color);background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--background, var(--ion-background-color, #fff))), to(rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8)));background:linear-gradient(to top, var(--background, var(--ion-background-color, #fff)) 30%, rgba(var(--background-rgb, var(--ion-background-color-rgb, 255, 255, 255)), 0.8) 100%);z-index:11}@supports (inset-inline-start: 0){.picker-below-highlight.sc-ion-picker-ios{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-below-highlight.sc-ion-picker-ios{left:0}[dir=rtl].sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios,[dir=rtl] .sc-ion-picker-ios-h .picker-below-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}[dir=rtl].sc-ion-picker-ios .picker-below-highlight.sc-ion-picker-ios{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-below-highlight.sc-ion-picker-ios:dir(rtl){left:unset;right:unset;right:0}}}";

const pickerMdCss = ".sc-ion-picker-md-h{--border-radius:0;--border-style:solid;--min-width:auto;--width:100%;--max-width:500px;--min-height:auto;--max-height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;top:0;display:block;position:absolute;width:100%;height:100%;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}@supports (inset-inline-start: 0){.sc-ion-picker-md-h{inset-inline-start:0}}@supports not (inset-inline-start: 0){.sc-ion-picker-md-h{left:0}[dir=rtl].sc-ion-picker-md-h,[dir=rtl] .sc-ion-picker-md-h{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.sc-ion-picker-md-h:dir(rtl){left:unset;right:unset;right:0}}}.overlay-hidden.sc-ion-picker-md-h{display:none}.picker-wrapper.sc-ion-picker-md{border-radius:var(--border-radius);left:0;right:0;bottom:0;-webkit-margin-start:auto;margin-inline-start:auto;-webkit-margin-end:auto;margin-inline-end:auto;margin-top:auto;margin-bottom:auto;-webkit-transform:translate3d(0,  100%,  0);transform:translate3d(0,  100%,  0);display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);contain:strict;overflow:hidden;z-index:10}.picker-toolbar.sc-ion-picker-md{width:100%;background:transparent;contain:strict;z-index:1}.picker-button.sc-ion-picker-md{border:0;font-family:inherit}.picker-button.sc-ion-picker-md:active,.picker-button.sc-ion-picker-md:focus{outline:none}.picker-columns.sc-ion-picker-md{display:-ms-flexbox;display:flex;position:relative;-ms-flex-pack:center;justify-content:center;margin-bottom:var(--ion-safe-area-bottom, 0);contain:strict;overflow:hidden}.picker-above-highlight.sc-ion-picker-md,.picker-below-highlight.sc-ion-picker-md{display:none;pointer-events:none}.sc-ion-picker-md-h{--background:var(--ion-background-color, #fff);--border-width:0.55px 0 0;--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));--height:260px;--backdrop-opacity:var(--ion-backdrop-opacity, 0.26);color:var(--ion-item-color, var(--ion-text-color, #000))}.picker-toolbar.sc-ion-picker-md{display:-ms-flexbox;display:flex;-ms-flex-pack:end;justify-content:flex-end;height:44px}.picker-button.sc-ion-picker-md,.picker-button.ion-activated.sc-ion-picker-md{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-padding-start:1.1em;padding-inline-start:1.1em;-webkit-padding-end:1.1em;padding-inline-end:1.1em;padding-top:0;padding-bottom:0;height:44px;background:transparent;color:var(--ion-color-primary, #3880ff);font-size:14px;font-weight:500;text-transform:uppercase;-webkit-box-shadow:none;box-shadow:none}.picker-columns.sc-ion-picker-md{height:216px;-webkit-perspective:1800px;perspective:1800px}.picker-above-highlight.sc-ion-picker-md{top:0;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:81px;border-bottom:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));background:-webkit-gradient(linear, left top, left bottom, color-stop(20%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to bottom, var(--ion-background-color, #fff) 20%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:10}@supports (inset-inline-start: 0){.picker-above-highlight.sc-ion-picker-md{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-above-highlight.sc-ion-picker-md{left:0}[dir=rtl].sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md,[dir=rtl] .sc-ion-picker-md-h .picker-above-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}[dir=rtl].sc-ion-picker-md .picker-above-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-above-highlight.sc-ion-picker-md:dir(rtl){left:unset;right:unset;right:0}}}.picker-below-highlight.sc-ion-picker-md{top:115px;-webkit-transform:translate3d(0,  0,  90px);transform:translate3d(0,  0,  90px);position:absolute;width:100%;height:119px;border-top:1px solid var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));background:-webkit-gradient(linear, left bottom, left top, color-stop(30%, var(--ion-background-color, #fff)), to(rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8)));background:linear-gradient(to top, var(--ion-background-color, #fff) 30%, rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8) 100%);z-index:11}@supports (inset-inline-start: 0){.picker-below-highlight.sc-ion-picker-md{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-below-highlight.sc-ion-picker-md{left:0}[dir=rtl].sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md,[dir=rtl] .sc-ion-picker-md-h .picker-below-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}[dir=rtl].sc-ion-picker-md .picker-below-highlight.sc-ion-picker-md{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-below-highlight.sc-ion-picker-md:dir(rtl){left:unset;right:unset;right:0}}}";

const Picker = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.didPresent = createEvent(this, "ionPickerDidPresent", 7);
    this.willPresent = createEvent(this, "ionPickerWillPresent", 7);
    this.willDismiss = createEvent(this, "ionPickerWillDismiss", 7);
    this.didDismiss = createEvent(this, "ionPickerDidDismiss", 7);
    this.didPresentShorthand = createEvent(this, "didPresent", 7);
    this.willPresentShorthand = createEvent(this, "willPresent", 7);
    this.willDismissShorthand = createEvent(this, "willDismiss", 7);
    this.didDismissShorthand = createEvent(this, "didDismiss", 7);
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
  get el() { return getElement(this); }
  static get watchers() { return {
    "isOpen": ["onIsOpenChange"],
    "trigger": ["triggerChanged"]
  }; }
};
const buttonWrapperClass = (button) => {
  return {
    [`picker-toolbar-${button.role}`]: button.role !== undefined,
    'picker-toolbar-button': true,
  };
};
const buttonClass = (button) => {
  return Object.assign({ 'picker-button': true, 'ion-activatable': true }, getClassMap(button.cssClass));
};
Picker.style = {
  ios: pickerIosCss,
  md: pickerMdCss
};

const pickerColumnIosCss = ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}@supports (inset-inline-start: 0){.picker-opt{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-opt{left:0}:host-context([dir=rtl]) .picker-opt{left:unset;right:unset;right:0}[dir=rtl] .picker-opt{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-opt:dir(rtl){left:unset;right:unset;right:0}}}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{-webkit-padding-start:4px;padding-inline-start:4px;-webkit-padding-end:4px;padding-inline-end:4px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:20px;line-height:42px;pointer-events:none}.picker-opt{padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;-webkit-transform-origin:center center;transform-origin:center center;height:46px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:20px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}:host-context([dir=rtl]) .picker-opt{-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}[dir=rtl] .picker-opt{-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}@supports selector(:dir(rtl)){.picker-opt:dir(rtl){-webkit-transform-origin:calc(100% - center) center;transform-origin:calc(100% - center) center}}";

const pickerColumnMdCss = ".picker-col{display:-ms-flexbox;display:flex;position:relative;-ms-flex:1;flex:1;-ms-flex-pack:center;justify-content:center;height:100%;-webkit-box-sizing:content-box;box-sizing:content-box;contain:content}.picker-opts{position:relative;-ms-flex:1;flex:1;max-width:100%}.picker-opt{top:0;display:block;position:absolute;width:100%;border:0;text-align:center;text-overflow:ellipsis;white-space:nowrap;contain:strict;overflow:hidden;will-change:transform}@supports (inset-inline-start: 0){.picker-opt{inset-inline-start:0}}@supports not (inset-inline-start: 0){.picker-opt{left:0}:host-context([dir=rtl]) .picker-opt{left:unset;right:unset;right:0}[dir=rtl] .picker-opt{left:unset;right:unset;right:0}@supports selector(:dir(rtl)){.picker-opt:dir(rtl){left:unset;right:unset;right:0}}}.picker-opt.picker-opt-disabled{pointer-events:none}.picker-opt-disabled{opacity:0}.picker-opts-left{-ms-flex-pack:start;justify-content:flex-start}.picker-opts-right{-ms-flex-pack:end;justify-content:flex-end}.picker-opt:active,.picker-opt:focus{outline:none}.picker-prefix{position:relative;-ms-flex:1;flex:1;text-align:end;white-space:nowrap}.picker-suffix{position:relative;-ms-flex:1;flex:1;text-align:start;white-space:nowrap}.picker-col{-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px;padding-top:0;padding-bottom:0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.picker-prefix,.picker-suffix,.picker-opts{top:77px;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;color:inherit;font-size:22px;line-height:42px;pointer-events:none}.picker-opt{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;height:43px;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;background:transparent;color:inherit;font-size:22px;line-height:42px;-webkit-backface-visibility:hidden;backface-visibility:hidden;pointer-events:auto}.picker-prefix,.picker-suffix,.picker-opt.picker-opt-selected{color:var(--ion-color-primary, #3880ff)}";

const PickerColumnCmp = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.ionPickerColChange = createEvent(this, "ionPickerColChange", 7);
    this.optHeight = 0;
    this.rotateFactor = 0;
    this.scaleFactor = 1;
    this.velocity = 0;
    this.y = 0;
    this.noAnimate = true;
    // `colDidChange` is a flag that gets set when the column is changed
    // dynamically. When this flag is set, the column will refresh
    // after the component re-renders to incorporate the new column data.
    // This is necessary because `this.refresh` queries for the option elements,
    // so it needs to wait for the latest elements to be available in the DOM.
    // Ex: column is created with 3 options. User updates the column data
    // to have 5 options. The column will still think it only has 3 options.
    this.colDidChange = false;
    this.col = undefined;
  }
  colChanged() {
    this.colDidChange = true;
  }
  async connectedCallback() {
    let pickerRotateFactor = 0;
    let pickerScaleFactor = 0.81;
    const mode = getIonMode(this);
    if (mode === 'ios') {
      pickerRotateFactor = -0.46;
      pickerScaleFactor = 1;
    }
    this.rotateFactor = pickerRotateFactor;
    this.scaleFactor = pickerScaleFactor;
    this.gesture = (await import('./index-ff313b19.js')).createGesture({
      el: this.el,
      gestureName: 'picker-swipe',
      gesturePriority: 100,
      threshold: 0,
      passive: false,
      onStart: (ev) => this.onStart(ev),
      onMove: (ev) => this.onMove(ev),
      onEnd: (ev) => this.onEnd(ev),
    });
    this.gesture.enable();
    // Options have not been initialized yet
    // Animation must be disabled through the `noAnimate` flag
    // Otherwise, the options will render
    // at the top of the column and transition down
    this.tmrId = setTimeout(() => {
      this.noAnimate = false;
      // After initialization, `refresh()` will be called
      // At this point, animation will be enabled. The options will
      // animate as they are being selected.
      this.refresh(true);
    }, 250);
  }
  componentDidLoad() {
    this.onDomChange();
  }
  componentDidUpdate() {
    // Options may have changed since last update.
    if (this.colDidChange) {
      // Animation must be disabled through the `onDomChange` parameter.
      // Otherwise, the recently added options will render
      // at the top of the column and transition down
      this.onDomChange(true, false);
      this.colDidChange = false;
    }
  }
  disconnectedCallback() {
    if (this.rafId !== undefined)
      cancelAnimationFrame(this.rafId);
    if (this.tmrId)
      clearTimeout(this.tmrId);
    if (this.gesture) {
      this.gesture.destroy();
      this.gesture = undefined;
    }
  }
  emitColChange() {
    this.ionPickerColChange.emit(this.col);
  }
  setSelected(selectedIndex, duration) {
    // if there is a selected index, then figure out it's y position
    // if there isn't a selected index, then just use the top y position
    const y = selectedIndex > -1 ? -(selectedIndex * this.optHeight) : 0;
    this.velocity = 0;
    // set what y position we're at
    if (this.rafId !== undefined)
      cancelAnimationFrame(this.rafId);
    this.update(y, duration, true);
    this.emitColChange();
  }
  update(y, duration, saveY) {
    if (!this.optsEl) {
      return;
    }
    // ensure we've got a good round number :)
    let translateY = 0;
    let translateZ = 0;
    const { col, rotateFactor } = this;
    const prevSelected = col.selectedIndex;
    const selectedIndex = (col.selectedIndex = this.indexForY(-y));
    const durationStr = duration === 0 ? '' : duration + 'ms';
    const scaleStr = `scale(${this.scaleFactor})`;
    const children = this.optsEl.children;
    for (let i = 0; i < children.length; i++) {
      const button = children[i];
      const opt = col.options[i];
      const optOffset = i * this.optHeight + y;
      let transform = '';
      if (rotateFactor !== 0) {
        const rotateX = optOffset * rotateFactor;
        if (Math.abs(rotateX) <= 90) {
          translateY = 0;
          translateZ = 90;
          transform = `rotateX(${rotateX}deg) `;
        }
        else {
          translateY = -9999;
        }
      }
      else {
        translateZ = 0;
        translateY = optOffset;
      }
      const selected = selectedIndex === i;
      transform += `translate3d(0px,${translateY}px,${translateZ}px) `;
      if (this.scaleFactor !== 1 && !selected) {
        transform += scaleStr;
      }
      // Update transition duration
      if (this.noAnimate) {
        opt.duration = 0;
        button.style.transitionDuration = '';
      }
      else if (duration !== opt.duration) {
        opt.duration = duration;
        button.style.transitionDuration = durationStr;
      }
      // Update transform
      if (transform !== opt.transform) {
        opt.transform = transform;
      }
      button.style.transform = transform;
      /**
       * Ensure that the select column
       * item has the selected class
       */
      opt.selected = selected;
      if (selected) {
        button.classList.add(PICKER_OPT_SELECTED);
      }
      else {
        button.classList.remove(PICKER_OPT_SELECTED);
      }
    }
    this.col.prevSelected = prevSelected;
    if (saveY) {
      this.y = y;
    }
    if (this.lastIndex !== selectedIndex) {
      // have not set a last index yet
      hapticSelectionChanged();
      this.lastIndex = selectedIndex;
    }
  }
  decelerate() {
    if (this.velocity !== 0) {
      // still decelerating
      this.velocity *= DECELERATION_FRICTION;
      // do not let it go slower than a velocity of 1
      this.velocity = this.velocity > 0 ? Math.max(this.velocity, 1) : Math.min(this.velocity, -1);
      let y = this.y + this.velocity;
      if (y > this.minY) {
        // whoops, it's trying to scroll up farther than the options we have!
        y = this.minY;
        this.velocity = 0;
      }
      else if (y < this.maxY) {
        // gahh, it's trying to scroll down farther than we can!
        y = this.maxY;
        this.velocity = 0;
      }
      this.update(y, 0, true);
      const notLockedIn = Math.round(y) % this.optHeight !== 0 || Math.abs(this.velocity) > 1;
      if (notLockedIn) {
        // isn't locked in yet, keep decelerating until it is
        this.rafId = requestAnimationFrame(() => this.decelerate());
      }
      else {
        this.velocity = 0;
        this.emitColChange();
        hapticSelectionEnd();
      }
    }
    else if (this.y % this.optHeight !== 0) {
      // needs to still get locked into a position so options line up
      const currentPos = Math.abs(this.y % this.optHeight);
      // create a velocity in the direction it needs to scroll
      this.velocity = currentPos > this.optHeight / 2 ? 1 : -1;
      this.decelerate();
    }
  }
  indexForY(y) {
    return Math.min(Math.max(Math.abs(Math.round(y / this.optHeight)), 0), this.col.options.length - 1);
  }
  onStart(detail) {
    // We have to prevent default in order to block scrolling under the picker
    // but we DO NOT have to stop propagation, since we still want
    // some "click" events to capture
    if (detail.event.cancelable) {
      detail.event.preventDefault();
    }
    detail.event.stopPropagation();
    hapticSelectionStart();
    // reset everything
    if (this.rafId !== undefined)
      cancelAnimationFrame(this.rafId);
    const options = this.col.options;
    let minY = options.length - 1;
    let maxY = 0;
    for (let i = 0; i < options.length; i++) {
      if (!options[i].disabled) {
        minY = Math.min(minY, i);
        maxY = Math.max(maxY, i);
      }
    }
    this.minY = -(minY * this.optHeight);
    this.maxY = -(maxY * this.optHeight);
  }
  onMove(detail) {
    if (detail.event.cancelable) {
      detail.event.preventDefault();
    }
    detail.event.stopPropagation();
    // update the scroll position relative to pointer start position
    let y = this.y + detail.deltaY;
    if (y > this.minY) {
      // scrolling up higher than scroll area
      y = Math.pow(y, 0.8);
      this.bounceFrom = y;
    }
    else if (y < this.maxY) {
      // scrolling down below scroll area
      y += Math.pow(this.maxY - y, 0.9);
      this.bounceFrom = y;
    }
    else {
      this.bounceFrom = 0;
    }
    this.update(y, 0, false);
  }
  onEnd(detail) {
    if (this.bounceFrom > 0) {
      // bounce back up
      this.update(this.minY, 100, true);
      this.emitColChange();
      return;
    }
    else if (this.bounceFrom < 0) {
      // bounce back down
      this.update(this.maxY, 100, true);
      this.emitColChange();
      return;
    }
    this.velocity = clamp(-MAX_PICKER_SPEED, detail.velocityY * 23, MAX_PICKER_SPEED);
    if (this.velocity === 0 && detail.deltaY === 0) {
      const opt = detail.event.target.closest('.picker-opt');
      if (opt === null || opt === void 0 ? void 0 : opt.hasAttribute('opt-index')) {
        this.setSelected(parseInt(opt.getAttribute('opt-index'), 10), TRANSITION_DURATION);
      }
    }
    else {
      this.y += detail.deltaY;
      if (Math.abs(detail.velocityY) < 0.05) {
        const isScrollingUp = detail.deltaY > 0;
        const optHeightFraction = (Math.abs(this.y) % this.optHeight) / this.optHeight;
        if (isScrollingUp && optHeightFraction > 0.5) {
          this.velocity = Math.abs(this.velocity) * -1;
        }
        else if (!isScrollingUp && optHeightFraction <= 0.5) {
          this.velocity = Math.abs(this.velocity);
        }
      }
      this.decelerate();
    }
  }
  refresh(forceRefresh, animated) {
    var _a;
    let min = this.col.options.length - 1;
    let max = 0;
    const options = this.col.options;
    for (let i = 0; i < options.length; i++) {
      if (!options[i].disabled) {
        min = Math.min(min, i);
        max = Math.max(max, i);
      }
    }
    /**
     * Only update selected value if column has a
     * velocity of 0. If it does not, then the
     * column is animating might land on
     * a value different than the value at
     * selectedIndex
     */
    if (this.velocity !== 0) {
      return;
    }
    const selectedIndex = clamp(min, (_a = this.col.selectedIndex) !== null && _a !== void 0 ? _a : 0, max);
    if (this.col.prevSelected !== selectedIndex || forceRefresh) {
      const y = selectedIndex * this.optHeight * -1;
      const duration = animated ? TRANSITION_DURATION : 0;
      this.velocity = 0;
      this.update(y, duration, true);
    }
  }
  onDomChange(forceRefresh, animated) {
    const colEl = this.optsEl;
    if (colEl) {
      // DOM READ
      // We perfom a DOM read over a rendered item, this needs to happen after the first render or after the the column has changed
      this.optHeight = colEl.firstElementChild ? colEl.firstElementChild.clientHeight : 0;
    }
    this.refresh(forceRefresh, animated);
  }
  render() {
    const col = this.col;
    const mode = getIonMode(this);
    return (h(Host, { class: Object.assign({ [mode]: true, 'picker-col': true, 'picker-opts-left': this.col.align === 'left', 'picker-opts-right': this.col.align === 'right' }, getClassMap(col.cssClass)), style: {
        'max-width': this.col.columnWidth,
      } }, col.prefix && (h("div", { class: "picker-prefix", style: { width: col.prefixWidth } }, col.prefix)), h("div", { class: "picker-opts", style: { maxWidth: col.optionsWidth }, ref: (el) => (this.optsEl = el) }, col.options.map((o, index) => (h("button", { "aria-label": o.ariaLabel, class: { 'picker-opt': true, 'picker-opt-disabled': !!o.disabled }, "opt-index": index }, o.text)))), col.suffix && (h("div", { class: "picker-suffix", style: { width: col.suffixWidth } }, col.suffix))));
  }
  get el() { return getElement(this); }
  static get watchers() { return {
    "col": ["colChanged"]
  }; }
};
const PICKER_OPT_SELECTED = 'picker-opt-selected';
const DECELERATION_FRICTION = 0.97;
const MAX_PICKER_SPEED = 90;
const TRANSITION_DURATION = 150;
PickerColumnCmp.style = {
  ios: pickerColumnIosCss,
  md: pickerColumnMdCss
};

export { Datetime as ion_datetime, Picker as ion_picker, PickerColumnCmp as ion_picker_column };
