/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{K as Keyboard}from"./keyboard-b063f012.js";import"./capacitor-b4979570.js";import"./index-7a14ecec.js";var KEYBOARD_DID_OPEN="ionKeyboardDidShow";var KEYBOARD_DID_CLOSE="ionKeyboardDidHide";var KEYBOARD_THRESHOLD=150;var previousVisualViewport={};var currentVisualViewport={};var keyboardOpen=false;var resetKeyboardAssist=function(){previousVisualViewport={};currentVisualViewport={};keyboardOpen=false};var startKeyboardAssist=function(e){var r=Keyboard.getEngine();if(r){startNativeListeners(e)}else{if(!e.visualViewport){return}currentVisualViewport=copyVisualViewport(e.visualViewport);e.visualViewport.onresize=function(){trackViewportChanges(e);if(keyboardDidOpen()||keyboardDidResize(e)){setKeyboardOpen(e)}else if(keyboardDidClose(e)){setKeyboardClose(e)}}}};var startNativeListeners=function(e){e.addEventListener("keyboardDidShow",(function(r){return setKeyboardOpen(e,r)}));e.addEventListener("keyboardDidHide",(function(){return setKeyboardClose(e)}))};var setKeyboardOpen=function(e,r){fireKeyboardOpenEvent(e,r);keyboardOpen=true};var setKeyboardClose=function(e){fireKeyboardCloseEvent(e);keyboardOpen=false};var keyboardDidOpen=function(){var e=(previousVisualViewport.height-currentVisualViewport.height)*currentVisualViewport.scale;return!keyboardOpen&&previousVisualViewport.width===currentVisualViewport.width&&e>KEYBOARD_THRESHOLD};var keyboardDidResize=function(e){return keyboardOpen&&!keyboardDidClose(e)};var keyboardDidClose=function(e){return keyboardOpen&&currentVisualViewport.height===e.innerHeight};var fireKeyboardOpenEvent=function(e,r){var t=r?r.keyboardHeight:e.innerHeight-currentVisualViewport.height;var i=new CustomEvent(KEYBOARD_DID_OPEN,{detail:{keyboardHeight:t}});e.dispatchEvent(i)};var fireKeyboardCloseEvent=function(e){var r=new CustomEvent(KEYBOARD_DID_CLOSE);e.dispatchEvent(r)};var trackViewportChanges=function(e){previousVisualViewport=Object.assign({},currentVisualViewport);currentVisualViewport=copyVisualViewport(e.visualViewport)};var copyVisualViewport=function(e){return{width:Math.round(e.width),height:Math.round(e.height),offsetTop:e.offsetTop,offsetLeft:e.offsetLeft,pageTop:e.pageTop,pageLeft:e.pageLeft,scale:e.scale}};export{KEYBOARD_DID_CLOSE,KEYBOARD_DID_OPEN,copyVisualViewport,keyboardDidClose,keyboardDidOpen,keyboardDidResize,resetKeyboardAssist,setKeyboardClose,setKeyboardOpen,startKeyboardAssist,trackViewportChanges};