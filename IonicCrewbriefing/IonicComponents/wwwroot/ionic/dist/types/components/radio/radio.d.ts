import type { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import type { Color, StyleEventDetail } from '../../interface';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @slot - The label text to associate with the radio. Use the "labelPlacement" property to control where the label is placed relative to the radio.
 *
 * @part container - The container for the radio mark.
 * @part mark - The checkmark or dot used to indicate the checked state.
 */
export declare class Radio implements ComponentInterface {
  private inputId;
  private radioGroup;
  private nativeInput;
  private legacyFormController;
  private hasLoggedDeprecationWarning;
  el: HTMLIonRadioElement;
  /**
   * If `true`, the radio is selected.
   */
  checked: boolean;
  /**
   * The tabindex of the radio button.
   * @internal
   */
  buttonTabindex: number;
  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  color?: Color;
  /**
   * The name of the control, which is submitted with the form data.
   */
  name: string;
  /**
   * If `true`, the user cannot interact with the radio.
   */
  disabled: boolean;
  /**
   * the value of the radio.
   */
  value?: any | null;
  valueChanged(): void;
  /**
   * Where to place the label relative to the radio.
   * `"start"`: The label will appear to the left of the radio in LTR and to the right in RTL.
   * `"end"`: The label will appear to the right of the radio in LTR and to the left in RTL.
   * `"fixed"`: The label has the same behavior as `"start"` except it also has a fixed width. Long text will be truncated with ellipses ("...").
   */
  labelPlacement: 'start' | 'end' | 'fixed';
  /**
   * Set the `legacy` property to `true` to forcibly use the legacy form control markup.
   * Ionic will only opt components in to the modern form markup when they are
   * using either the `aria-label` attribute or the default slot that contains
   * the label text. As a result, the `legacy` property should only be used as
   * an escape hatch when you want to avoid this automatic opt-in behavior.
   * Note that this property will be removed in an upcoming major release
   * of Ionic, and all form components will be opted-in to using the modern form markup.
   */
  legacy?: boolean;
  /**
   * How to pack the label and radio within a line.
   * `"start"`: The label and radio will appear on the left in LTR and
   * on the right in RTL.
   * `"end"`: The label and radio will appear on the right in LTR and
   * on the left in RTL.
   * `"space-between"`: The label and radio will appear on opposite
   * ends of the line with space between the two elements.
   */
  justify: 'start' | 'end' | 'space-between';
  /**
   * Emitted when the styles change.
   * @internal
   */
  ionStyle: EventEmitter<StyleEventDetail>;
  /**
   * Emitted when the radio button has focus.
   */
  ionFocus: EventEmitter<void>;
  /**
   * Emitted when the radio button loses focus.
   */
  ionBlur: EventEmitter<void>;
  /** @internal */
  setFocus(ev: any): Promise<void>;
  /** @internal */
  setButtonTabindex(value: number): Promise<void>;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentWillLoad(): void;
  protected styleChanged(): void;
  private emitStyle;
  private updateState;
  private onClick;
  private onFocus;
  private onBlur;
  private get hasLabel();
  private renderRadioControl;
  render(): any;
  private renderRadio;
  private renderLegacyRadio;
}
