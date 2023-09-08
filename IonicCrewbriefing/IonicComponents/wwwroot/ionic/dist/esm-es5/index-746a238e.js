import{__awaiter,__generator}from"tslib";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */import{c as componentOnReady}from"./helpers-3379ba19.js";import{b as printRequiredElementError}from"./index-595d62c9.js";var ION_CONTENT_TAG_NAME="ION-CONTENT";var ION_CONTENT_ELEMENT_SELECTOR="ion-content";var ION_CONTENT_CLASS_SELECTOR=".ion-content-scroll-host";var ION_CONTENT_SELECTOR="".concat(ION_CONTENT_ELEMENT_SELECTOR,", ").concat(ION_CONTENT_CLASS_SELECTOR);var isIonContent=function(r){return r.tagName===ION_CONTENT_TAG_NAME};var getScrollElement=function(r){return __awaiter(void 0,void 0,void 0,(function(){return __generator(this,(function(n){switch(n.label){case 0:if(!isIonContent(r))return[3,2];return[4,new Promise((function(n){return componentOnReady(r,n)}))];case 1:n.sent();return[2,r.getScrollElement()];case 2:return[2,r]}}))}))};var findIonContent=function(r){var n=r.querySelector(ION_CONTENT_CLASS_SELECTOR);if(n){return n}return r.querySelector(ION_CONTENT_SELECTOR)};var findClosestIonContent=function(r){return r.closest(ION_CONTENT_SELECTOR)};var scrollToTop=function(r,n){if(isIonContent(r)){var o=r;return o.scrollToTop(n)}return Promise.resolve(r.scrollTo({top:0,left:0,behavior:n>0?"smooth":"auto"}))};var scrollByPoint=function(r,n,o,t){if(isIonContent(r)){var e=r;return e.scrollByPoint(n,o,t)}return Promise.resolve(r.scrollBy({top:o,left:n,behavior:t>0?"smooth":"auto"}))};var printIonContentErrorMsg=function(r){return printRequiredElementError(r,ION_CONTENT_ELEMENT_SELECTOR)};var disableContentScrollY=function(r){if(isIonContent(r)){var n=r;var o=n.scrollY;n.scrollY=false;return o}else{r.style.setProperty("overflow","hidden");return true}};var resetContentScrollY=function(r,n){if(isIonContent(r)){r.scrollY=n}else{r.style.removeProperty("overflow")}};export{ION_CONTENT_CLASS_SELECTOR as I,findIonContent as a,ION_CONTENT_ELEMENT_SELECTOR as b,scrollByPoint as c,disableContentScrollY as d,findClosestIonContent as f,getScrollElement as g,isIonContent as i,printIonContentErrorMsg as p,resetContentScrollY as r,scrollToTop as s};