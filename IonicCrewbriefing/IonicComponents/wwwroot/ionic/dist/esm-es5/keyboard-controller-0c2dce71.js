import{__awaiter,__generator}from"tslib";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */import{w as win,d as doc}from"./index-7a14ecec.js";import{K as Keyboard,a as KeyboardResize}from"./keyboard-b063f012.js";var getResizeContainer=function(e){if(doc===undefined||e===KeyboardResize.None||e===undefined){return null}var n=doc.querySelector("ion-app");return n!==null&&n!==void 0?n:doc.body};var getResizeContainerHeight=function(e){var n=getResizeContainer(e);return n===null?0:n.clientHeight};var createKeyboardController=function(e){return __awaiter(void 0,void 0,void 0,(function(){var n,i,r,t,o,a,d,u,s;return __generator(this,(function(l){switch(l.label){case 0:o=function(){return __awaiter(void 0,void 0,void 0,(function(){var e,o;return __generator(this,(function(d){switch(d.label){case 0:return[4,Keyboard.getResizeMode()];case 1:e=d.sent();o=e===undefined?undefined:e.mode;n=function(){if(t===undefined){t=getResizeContainerHeight(o)}r=true;a(r,o)};i=function(){r=false;a(r,o)};win===null||win===void 0?void 0:win.addEventListener("keyboardWillShow",n);win===null||win===void 0?void 0:win.addEventListener("keyboardWillHide",i);return[2]}}))}))};a=function(n,i){if(e){e(n,d(i))}};d=function(e){if(t===0||t===getResizeContainerHeight(e)){return}var n=getResizeContainer(e);if(n===null){return}return new Promise((function(e){var i=function(){if(n.clientHeight===t){r.disconnect();e()}};var r=new ResizeObserver(i);r.observe(n)}))};u=function(){win===null||win===void 0?void 0:win.removeEventListener("keyboardWillShow",n);win===null||win===void 0?void 0:win.removeEventListener("keyboardWillHide",i);n=i=undefined};s=function(){return r};return[4,o()];case 1:l.sent();return[2,{init:o,destroy:u,isKeyboardVisible:s}]}}))}))};export{createKeyboardController as c};