import type { KeyboardResizeOptions } from '@capacitor/keyboard';
export declare const enableScrollAssist: (componentEl: HTMLElement, inputEl: HTMLInputElement | HTMLTextAreaElement, contentEl: HTMLElement | null, footerEl: HTMLIonFooterElement | null, keyboardHeight: number, enableScrollPadding: boolean, keyboardResize: KeyboardResizeOptions | undefined, disableClonedInput?: boolean) => () => void;
