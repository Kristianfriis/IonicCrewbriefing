import type { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import type { GestureDetail } from "../../utils/gesture/index";
import type { Color, StyleEventDetail } from '../../interface';
import type { SegmentChangeEventDetail, SegmentValue } from './segment-interface';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 */
export declare class Segment implements ComponentInterface {
  private gesture?;
  private valueBeforeGesture?;
  el: HTMLIonSegmentElement;
  activated: boolean;
  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  color?: Color;
  protected colorChanged(value?: Color, oldValue?: Color): void;
  /**
   * If `true`, the user cannot interact with the segment.
   */
  disabled: boolean;
  /**
   * If `true`, the segment buttons will overflow and the user can swipe to see them.
   * In addition, this will disable the gesture to drag the indicator between the buttons
   * in order to swipe to see hidden buttons.
   */
  scrollable: boolean;
  /**
   * If `true`, users will be able to swipe between segment buttons to activate them.
   */
  swipeGesture: boolean;
  swipeGestureChanged(): void;
  /**
   * the value of the segment.
   */
  value?: SegmentValue;
  protected valueChanged(value: SegmentValue | undefined): void;
  /**
   * If `true`, navigating to an `ion-segment-button` with the keyboard will focus and select the element.
   * If `false`, keyboard navigation will only focus the `ion-segment-button` element.
   */
  selectOnFocus: boolean;
  /**
   * Emitted when the value property has changed and any
   * dragging pointer has been released from `ion-segment`.
   */
  ionChange: EventEmitter<SegmentChangeEventDetail>;
  /**
   * Emitted when the value of the segment changes from user committed actions
   * or from externally assigning a value.
   *
   * @internal
   */
  ionSelect: EventEmitter<SegmentChangeEventDetail>;
  /**
   * Emitted when the styles change.
   * @internal
   */
  ionStyle: EventEmitter<StyleEventDetail>;
  disabledChanged(): void;
  private gestureChanged;
  connectedCallback(): void;
  componentWillLoad(): void;
  componentDidLoad(): Promise<void>;
  onStart(detail: GestureDetail): void;
  onMove(detail: GestureDetail): void;
  onEnd(detail: GestureDetail): void;
  /**
   * Emits an `ionChange` event.
   *
   * This API should be called for user committed changes.
   * This API should not be used for external value changes.
   */
  private emitValueChange;
  private getButtons;
  private get checked();
  private setActivated;
  private activate;
  private getIndicator;
  private checkButton;
  private setCheckedClasses;
  private setNextIndex;
  private emitStyle;
  private onClick;
  private getSegmentButton;
  onKeyDown(ev: KeyboardEvent): void;
  render(): any;
}