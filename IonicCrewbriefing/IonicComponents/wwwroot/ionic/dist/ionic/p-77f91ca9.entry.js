/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{r as i,d as n,w as t,e,h as s,f as o,H as l}from"./p-156967ec.js";import{f as r,p as c,g as a}from"./p-b24aa895.js";import{b as d,c as h}from"./p-b22ee0dc.js";import{E as p,a as f}from"./p-7b021525.js";import"./p-63eb0acd.js";import"./p-1b8e1d03.js";const m=class{constructor(t){i(this,t),this.ionInfinite=n(this,"ionInfinite",7),this.thrPx=0,this.thrPc=0,this.didFire=!1,this.isBusy=!1,this.onScroll=()=>{const i=this.scrollEl;if(!i||!this.canStart())return 1;const n=this.el.offsetHeight;if(0===n)return 2;const t=i.scrollTop,e=i.offsetHeight,s=0!==this.thrPc?e*this.thrPc:this.thrPx;if(("bottom"===this.position?i.scrollHeight-n-t-s-e:t-n-s)<0){if(!this.didFire)return this.isLoading=!0,this.didFire=!0,this.ionInfinite.emit(),3}else this.didFire=!1;return 4},this.isLoading=!1,this.threshold="15%",this.disabled=!1,this.position="bottom"}thresholdChanged(){const i=this.threshold;i.lastIndexOf("%")>-1?(this.thrPx=0,this.thrPc=parseFloat(i)/100):(this.thrPx=parseFloat(i),this.thrPc=0)}disabledChanged(){const i=this.disabled;i&&(this.isLoading=!1,this.isBusy=!1),this.enableScrollEvents(!i)}async connectedCallback(){const i=r(this.el);i?(this.scrollEl=await a(i),this.thresholdChanged(),this.disabledChanged(),"top"===this.position&&t((()=>{this.scrollEl&&(this.scrollEl.scrollTop=this.scrollEl.scrollHeight-this.scrollEl.clientHeight)}))):c(this.el)}disconnectedCallback(){this.enableScrollEvents(!1),this.scrollEl=void 0}async complete(){const i=this.scrollEl;if(this.isLoading&&i&&(this.isLoading=!1,"top"===this.position)){this.isBusy=!0;const n=i.scrollHeight-i.scrollTop;requestAnimationFrame((()=>{e((()=>{const e=i.scrollHeight-n;requestAnimationFrame((()=>{t((()=>{i.scrollTop=e,this.isBusy=!1}))}))}))}))}}canStart(){return!(this.disabled||this.isBusy||!this.scrollEl||this.isLoading)}enableScrollEvents(i){this.scrollEl&&(i?this.scrollEl.addEventListener("scroll",this.onScroll):this.scrollEl.removeEventListener("scroll",this.onScroll))}render(){const i=d(this);return s(l,{class:{[i]:!0,"infinite-scroll-loading":this.isLoading,"infinite-scroll-enabled":!this.disabled}})}get el(){return o(this)}static get watchers(){return{threshold:["thresholdChanged"],disabled:["disabledChanged"]}}};m.style="ion-infinite-scroll{display:none;width:100%}.infinite-scroll-enabled{display:block}";const g=class{constructor(n){i(this,n),this.customHTMLEnabled=h.get("innerHTMLTemplatesEnabled",p),this.loadingSpinner=void 0,this.loadingText=void 0}componentDidLoad(){if(void 0===this.loadingSpinner){const i=d(this);this.loadingSpinner=h.get("infiniteLoadingSpinner",h.get("spinner","ios"===i?"lines":"crescent"))}}renderLoadingText(){const{customHTMLEnabled:i,loadingText:n}=this;return i?s("div",{class:"infinite-loading-text",innerHTML:f(n)}):s("div",{class:"infinite-loading-text"},this.loadingText)}render(){const i=d(this);return s(l,{class:{[i]:!0,[`infinite-scroll-content-${i}`]:!0}},s("div",{class:"infinite-loading"},this.loadingSpinner&&s("div",{class:"infinite-loading-spinner"},s("ion-spinner",{name:this.loadingSpinner})),void 0!==this.loadingText&&this.renderLoadingText()))}};g.style={ios:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-ios .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-lines-small-ios line,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-ios .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-ios .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}",md:"ion-infinite-scroll-content{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;min-height:84px;text-align:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.infinite-loading{margin-left:0;margin-right:0;margin-top:0;margin-bottom:32px;display:none;width:100%}.infinite-loading-text{-webkit-margin-start:32px;margin-inline-start:32px;-webkit-margin-end:32px;margin-inline-end:32px;margin-top:4px;margin-bottom:0}.infinite-scroll-loading ion-infinite-scroll-content>.infinite-loading{display:block}.infinite-scroll-content-md .infinite-loading-text{color:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-lines-small-md line,.infinite-scroll-content-md .infinite-loading-spinner .spinner-crescent circle{stroke:var(--ion-color-step-600, #666666)}.infinite-scroll-content-md .infinite-loading-spinner .spinner-bubbles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-circles circle,.infinite-scroll-content-md .infinite-loading-spinner .spinner-dots circle{fill:var(--ion-color-step-600, #666666)}"};export{m as ion_infinite_scroll,g as ion_infinite_scroll_content}