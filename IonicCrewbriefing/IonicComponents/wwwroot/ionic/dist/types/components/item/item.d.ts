import type { ComponentInterface } from '../../stencil-public-runtime';
import type { AnchorInterface, ButtonInterface } from "../../utils/element-interface";
import type { AnimationBuilder, Color, StyleEventDetail } from '../../interface';
import type { InputInputEventDetail } from '../input/input-interface';
import type { RouterDirection } from '../router/utils/interface';
import type { CounterFormatter } from './item-interface';
/**
 * @virtualProp {"ios" | "md"} mode - The mode determines which platform styles to use.
 *
 * @slot - Content is placed between the named slots if provided without a slot.
 * @slot start - Content is placed to the left of the item text in LTR, and to the right in RTL.
 * @slot end - Content is placed to the right of the item text in LTR, and to the left in RTL.
 * @slot helper - Content is placed under the item and displayed when no error is detected. **DEPRECATED** Use the "helperText" property on ion-input or ion-textarea instead.
 * @slot error - Content is placed under the item and displayed when an error is detected. **DEPRECATED** Use the "errorText" property on ion-input or ion-textarea instead.
 *
 * @part native - The native HTML button, anchor or div element that wraps all child elements.
 * @part detail-icon - The chevron icon for the item. Only applies when `detail="true"`.
 */
export declare class Item implements ComponentInterface, AnchorInterface, ButtonInterface {
  private labelColorStyles;
  private itemStyles;
  private inheritedAriaAttributes;
  el: HTMLIonItemElement;
  multipleInputs: boolean;
  focusable: boolean;
  /**
   * The color to use from your application's color palette.
   * Default options are: `"primary"`, `"secondary"`, `"tertiary"`, `"success"`, `"warning"`, `"danger"`, `"light"`, `"medium"`, and `"dark"`.
   * For more information on colors, see [theming](/docs/theming/basics).
   */
  color?: Color;
  /**
   * If `true`, a button tag will be rendered and the item will be tappable.
   */
  button: boolean;
  /**
   * If `true`, a detail arrow will appear on the item. Defaults to `false` unless the `mode`
   * is `ios` and an `href` or `button` property is present.
   */
  detail?: boolean;
  /**
   * The icon to use when `detail` is set to `true`.
   */
  detailIcon: string;
  /**
   * If `true`, the user cannot interact with the item.
   */
  disabled: boolean;
  /**
   * This attribute instructs browsers to download a URL instead of navigating to
   * it, so the user will be prompted to save it as a local file. If the attribute
   * has a value, it is used as the pre-filled file name in the Save prompt
   * (the user can still change the file name if they want).
   */
  download: string | undefined;
  /**
   * The fill for the item. If `"solid"` the item will have a background. If
   * `"outline"` the item will be transparent with a border. Only available in `md` mode.
   */
  fill?: 'outline' | 'solid';
  /**
   * The shape of the item. If "round" it will have increased
   * border radius.
   */
  shape?: 'round';
  /**
   * Contains a URL or a URL fragment that the hyperlink points to.
   * If this property is set, an anchor tag will be rendered.
   */
  href: string | undefined;
  /**
   * Specifies the relationship of the target object to the link object.
   * The value is a space-separated list of [link types](https://developer.mozilla.org/en-US/docs/Web/HTML/Link_types).
   */
  rel: string | undefined;
  /**
   * How the bottom border should be displayed on the item.
   */
  lines?: 'full' | 'inset' | 'none';
  /**
   * If `true`, a character counter will display the ratio of characters used and the total character limit. Only applies when the `maxlength` property is set on the inner `ion-input` or `ion-textarea`.
   * @deprecated Use the `counter` property on `ion-input` or `ion-textarea` instead.
   */
  counter: boolean;
  /**
   * When using a router, it specifies the transition animation when navigating to
   * another page using `href`.
   */
  routerAnimation: AnimationBuilder | undefined;
  /**
   * When using a router, it specifies the transition direction when navigating to
   * another page using `href`.
   */
  routerDirection: RouterDirection;
  /**
   * Specifies where to display the linked URL.
   * Only applies when an `href` is provided.
   * Special keywords: `"_blank"`, `"_self"`, `"_parent"`, `"_top"`.
   */
  target: string | undefined;
  /**
   * The type of the button. Only used when an `onclick` or `button` property is present.
   */
  type: 'submit' | 'reset' | 'button';
  /**
   * A callback used to format the counter text.
   * By default the counter text is set to "itemLength / maxLength".
   * @deprecated Use the `counterFormatter` property on `ion-input` or `ion-textarea` instead.
   */
  counterFormatter?: CounterFormatter;
  counterString: string | null | undefined;
  counterFormatterChanged(): void;
  handleIonInput(ev: CustomEvent<InputInputEventDetail>): void;
  labelColorChanged(ev: CustomEvent<string>): void;
  itemStyle(ev: CustomEvent<StyleEventDetail>): void;
  connectedCallback(): void;
  componentWillLoad(): void;
  componentDidLoad(): void;
  private setMultipleInputs;
  private hasCover;
  private isClickable;
  private canActivate;
  private isFocusable;
  private getFirstInput;
  private updateCounterOutput;
  private defaultCounterFormatter;
  private hasStartEl;
  render(): any;
}
