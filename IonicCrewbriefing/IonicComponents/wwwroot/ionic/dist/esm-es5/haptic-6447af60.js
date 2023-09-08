/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{g as getCapacitor}from"./capacitor-b4979570.js";var ImpactStyle;(function(i){i["Heavy"]="HEAVY";i["Medium"]="MEDIUM";i["Light"]="LIGHT"})(ImpactStyle||(ImpactStyle={}));var NotificationType;(function(i){i["Success"]="SUCCESS";i["Warning"]="WARNING";i["Error"]="ERROR"})(NotificationType||(NotificationType={}));var HapticEngine={getEngine:function(){var i=window.TapticEngine;if(i){return i}var t=getCapacitor();if(t===null||t===void 0?void 0:t.isPluginAvailable("Haptics")){return t.Plugins.Haptics}return undefined},available:function(){var i=this.getEngine();if(!i){return false}var t=getCapacitor();if((t===null||t===void 0?void 0:t.getPlatform())==="web"){return typeof navigator!=="undefined"&&navigator.vibrate!==undefined}return true},isCordova:function(){return window.TapticEngine!==undefined},isCapacitor:function(){return getCapacitor()!==undefined},impact:function(i){var t=this.getEngine();if(!t){return}var e=this.isCapacitor()?i.style:i.style.toLowerCase();t.impact({style:e})},notification:function(i){var t=this.getEngine();if(!t){return}var e=this.isCapacitor()?i.type:i.type.toLowerCase();t.notification({type:e})},selection:function(){var i=this.isCapacitor()?ImpactStyle.Light:"light";this.impact({style:i})},selectionStart:function(){var i=this.getEngine();if(!i){return}if(this.isCapacitor()){i.selectionStart()}else{i.gestureSelectionStart()}},selectionChanged:function(){var i=this.getEngine();if(!i){return}if(this.isCapacitor()){i.selectionChanged()}else{i.gestureSelectionChanged()}},selectionEnd:function(){var i=this.getEngine();if(!i){return}if(this.isCapacitor()){i.selectionEnd()}else{i.gestureSelectionEnd()}}};var hapticAvailable=function(){return HapticEngine.available()};var hapticSelection=function(){hapticAvailable()&&HapticEngine.selection()};var hapticSelectionStart=function(){hapticAvailable()&&HapticEngine.selectionStart()};var hapticSelectionChanged=function(){hapticAvailable()&&HapticEngine.selectionChanged()};var hapticSelectionEnd=function(){hapticAvailable()&&HapticEngine.selectionEnd()};var hapticImpact=function(i){hapticAvailable()&&HapticEngine.impact(i)};export{ImpactStyle as I,hapticSelectionStart as a,hapticSelectionChanged as b,hapticSelection as c,hapticImpact as d,hapticSelectionEnd as h};