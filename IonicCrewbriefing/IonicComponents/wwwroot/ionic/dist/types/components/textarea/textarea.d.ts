import type { ComponentInterface, EventEmitter } from '../../stencil-public-runtime';
import type { Color, StyleEventDetail } from '../../interface';
import type { TextareaChangeEventDetail, TextareaInputEventDetail } from './textarea-interface';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @slot label - The label text to associate with the textarea. Use the `labelPlacement` property to control where the label is placed relative to the textarea. Use this if you need to render a label with custom HTML. (EXPERIMENTAL)
 */
export declare class Textarea implements ComponentInterface {
  private nativeInput?;
  private inputId;
  /**
   * `true` if the textarea was cleared as a result of the user typing
   * with `clearOnEdit` enabled.
   *
   * Resets when the textarea loses focus.
   */
  private didTextareaClearOnEdit;
  private textareaWrapper?;
  private inheritedAttributes;
  private originalIonInput?;
  private legacyFormController;
  private notchSpacerEl;
  private slotMutationController?;
  private notchController?;
  private hasLoggedDeprecationWarning;
  /**
   * The value of the textarea when the textarea is focused.
   */
  private focusedValue?;
  el: HTMLIonTextareaElement;
  hasFocus: boolean;
  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  color?: Color;
  /**
   * Indicates whether and how the text value should be automatically capitalized as it is entered/edited by the user.
   * Available options: `"off"`, `"none"`, `"on"`, `"sentences"`, `"words"`, `"characters"`.
   */
  autocapitalize: string;
  /**
   * This Boolean attribute lets you specify that a form control should have input focus when the page loads.
   */
  autofocus: boolean;
  /**
   * If `true`, the value will be cleared after focus upon edit.
   */
  clearOnEdit: boolean;
  /**
   * Set the amount of time, in milliseconds, to wait to trigger the `ionInput` event after each keystroke.
   */
  debounce?: number;
  protected debounceChanged(): void;
  /**
   * If `true`, the user cannot interact with the textarea.
   */
  disabled: boolean;
  protected disabledChanged(): void;
  /**
   * The fill for the item. If `"solid"` the item will have a background. If
   * `"outline"` the item will be transparent with a border. Only available in `md` mode.
   */
  fill?: 'outline' | 'solid';
  /**
   * A hint to the browser for which keyboard to display.
   * Possible values: `"none"`, `"text"`, `"tel"`, `"url"`,
   * `"email"`, `"numeric"`, `"decimal"`, and `"search"`.
   */
  inputmode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
  /**
   * A hint to the browser for which enter key to display.
   * Possible values: `"enter"`, `"done"`, `"go"`, `"next"`,
   * `"previous"`, `"search"`, and `"send"`.
   */
  enterkeyhint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
  /**
   * This attribute specifies the maximum number of characters that the user can enter.
   */
  maxlength?: number;
  /**
   * This attribute specifies the minimum number of characters that the user can enter.
   */
  minlength?: number;
  /**
   * The name of the control, which is submitted with the form data.
   */
  name: string;
  /**
   * Instructional text that shows before the input has a value.
   */
  placeholder?: string;
  /**
   * If `true`, the user cannot modify the value.
   */
  readonly: boolean;
  /**
   * If `true`, the user must fill in a value before submitting a form.
   */
  required: boolean;
  /**
   * If `true`, the element will have its spelling and grammar checked.
   */
  spellcheck: boolean;
  /**
   * The visible width of the text control, in average character widths. If it is specified, it must be a positive integer.
   */
  cols?: number;
  /**
   * The number of visible text lines for the control.
   */
  rows?: number;
  /**
   * Indicates how the control wraps text.
   */
  wrap?: 'hard' | 'soft' | 'off';
  /**
   * If `true`, the textarea container will grow and shrink based
   * on the contents of the textarea.
   */
  autoGrow: boolean;
  /**
   * The value of the textarea.
   */
  value?: string | null;
  /**
   * If `true`, a character counter will display the ratio of characters used and the total character limit.
   * Developers must also set the `maxlength` property for the counter to be calculated correctly.
   */
  counter: boolean;
  /**
   * A callback used to format the counter text.
   * By default the counter text is set to "itemLength / maxLength".
   */
  counterFormatter?: (inputLength: number, maxLength: number) => string;
  /**
   * Text that is placed under the textarea and displayed when an error is detected.
   */
  errorText?: string;
  /**
   * Text that is placed under the textarea and displayed when no error is detected.
   */
  helperText?: string;
  /**
   * The visible label associated with the textarea.
   *
   * Use this if you need to render a plaintext label.
   *
   * The `label` property will take priority over the `label` slot if both are used.
   */
  label?: string;
  /**
   * Where to place the label relative to the textarea.
   * `"start"`: The label will appear to the left of the textarea in LTR and to the right in RTL.
   * `"end"`: The label will appear to the right of the textarea in LTR and to the left in RTL.
   * `"floating"`: The label will appear smaller and above the textarea when the textarea is focused or it has a value. Otherwise it will appear on top of the textarea.
   * `"stacked"`: The label will appear smaller and above the textarea regardless even when the textarea is blurred or has no value.
   * `"fixed"`: The label has the same behavior as `"start"` except it also has a fixed width. Long text will be truncated with ellipses ("...").
   */
  labelPlacement: 'start' | 'end' | 'floating' | 'stacked' | 'fixed';
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
   * The shape of the textarea. If "round" it will have an increased border radius.
   */
  shape?: 'round';
  /**
   * Update the native input element when the value changes
   */
  protected valueChanged(): void;
  /**
   * The `ionChange` event is fired when the user modifies the textarea's value.
   * Unlike the `ionInput` event, the `ionChange` event is fired when
   * the element loses focus after its value has been modified.
   */
  ionChange: EventEmitter<TextareaChangeEventDetail>;
  /**
   * The `ionInput` event is fired each time the user modifies the textarea's value.
   * Unlike the `ionChange` event, the `ionInput` event is fired for each alteration
   * to the textarea's value. This typically happens for each keystroke as the user types.
   *
   * When `clearOnEdit` is enabled, the `ionInput` event will be fired when
   * the user clears the textarea by performing a keydown event.
   */
  ionInput: EventEmitter<TextareaInputEventDetail>;
  /**
   * Emitted when the styles change.
   * @internal
   */
  ionStyle: EventEmitter<StyleEventDetail>;
  /**
   * Emitted when the input loses focus.
   */
  ionBlur: EventEmitter<FocusEvent>;
  /**
   * Emitted when the input has focus.
   */
  ionFocus: EventEmitter<FocusEvent>;
  connectedCallback(): void;
  disconnectedCallback(): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  componentDidRender(): void;
  /**
   * Sets focus on the native `textarea` in `ion-textarea`. Use this method instead of the global
   * `textarea.focus()`.
   */
  setFocus(): Promise<void>;
  /**
   * Returns the native `<textarea>` element used under the hood.
   */
  getInputElement(): Promise<HTMLTextAreaElement>;
  private emitStyle;
  /**
   * Emits an `ionChange` event.
   *
   * This API should be called for user committed changes.
   * This API should not be used for external value changes.
   */
  private emitValueChange;
  /**
   * Emits an `ionInput` event.
   */
  private emitInputChange;
  private runAutoGrow;
  /**
   * Check if we need to clear the text input if clearOnEdit is enabled
   */
  private checkClearOnEdit;
  private focusChange;
  private hasValue;
  private getValue;
  private onInput;
  private onChange;
  private onFocus;
  private onBlur;
  private onKeyDown;
  private renderLegacyTextarea;
  private renderLabel;
  /**
   * Gets any content passed into the `label` slot,
   * not the <slot> definition.
   */
  private get labelSlot();
  /**
   * Returns `true` if label content is provided
   * either by a prop or a content. If you want
   * to get the plaintext value of the label use
   * the `labelText` getter instead.
   */
  private get hasLabel();
  /**
   * Renders the border container when fill="outline".
   */
  private renderLabelContainer;
  /**
   * Renders the helper text or error text values
   */
  private renderHintText;
  private renderCounter;
  /**
   * Responsible for rendering helper text,
   * error text, and counter. This element should only
   * be rendered if hint text is set or counter is enabled.
   */
  private renderBottomContent;
  private renderTextarea;
  render(): any;
}
