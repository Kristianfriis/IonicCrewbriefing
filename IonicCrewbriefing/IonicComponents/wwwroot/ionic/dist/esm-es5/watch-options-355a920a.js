/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var watchForOptions=function(e,r,t){if(typeof MutationObserver==="undefined"){return}var n=new MutationObserver((function(e){t(getSelectedOption(e,r))}));n.observe(e,{childList:true,subtree:true});return n};var getSelectedOption=function(e,r){var t;e.forEach((function(e){for(var n=0;n<e.addedNodes.length;n++){t=findCheckedOption(e.addedNodes[n],r)||t}}));return t};var findCheckedOption=function(e,r){if(e.nodeType!==1){return undefined}var t=e.tagName===r.toUpperCase()?[e]:Array.from(e.querySelectorAll(r));return t.find((function(r){return r.value===e.value}))};export{watchForOptions as w};