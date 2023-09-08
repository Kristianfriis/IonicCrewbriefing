/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
var sanitizeDOMString=function(e){try{if(e instanceof IonicSafeString){return e.value}if(!isSanitizerEnabled()||typeof e!=="string"||e===""){return e}if(e.includes("onload=")){return""}var n=document.createDocumentFragment();var r=document.createElement("div");n.appendChild(r);r.innerHTML=e;blockedTags.forEach((function(e){var r=n.querySelectorAll(e);for(var t=r.length-1;t>=0;t--){var i=r[t];if(i.parentNode){i.parentNode.removeChild(i)}else{n.removeChild(i)}var a=getElementChildren(i);for(var o=0;o<a.length;o++){sanitizeElement(a[o])}}}));var t=getElementChildren(n);for(var i=0;i<t.length;i++){sanitizeElement(t[i])}var a=document.createElement("div");a.appendChild(n);var o=a.querySelector("div");return o!==null?o.innerHTML:a.innerHTML}catch(e){console.error(e);return""}};var sanitizeElement=function(e){if(e.nodeType&&e.nodeType!==1){return}if(typeof NamedNodeMap!=="undefined"&&!(e.attributes instanceof NamedNodeMap)){e.remove();return}for(var n=e.attributes.length-1;n>=0;n--){var r=e.attributes.item(n);var t=r.name;if(!allowedAttributes.includes(t.toLowerCase())){e.removeAttribute(t);continue}var i=r.value;var a=e[t];if(i!=null&&i.toLowerCase().includes("javascript:")||a!=null&&a.toLowerCase().includes("javascript:")){e.removeAttribute(t)}}var o=getElementChildren(e);for(var n=0;n<o.length;n++){sanitizeElement(o[n])}};var getElementChildren=function(e){return e.children!=null?e.children:e.childNodes};var isSanitizerEnabled=function(){var e;var n=window;var r=(e=n===null||n===void 0?void 0:n.Ionic)===null||e===void 0?void 0:e.config;if(r){if(r.get){return r.get("sanitizerEnabled",true)}else{return r.sanitizerEnabled===true||r.sanitizerEnabled===undefined}}return true};var allowedAttributes=["class","id","href","src","name","slot"];var blockedTags=["script","style","iframe","meta","link","object","embed"];var IonicSafeString=function(){function e(e){this.value=e}return e}();var setupConfig=function(e){var n=window;var r=n.Ionic;if(r&&r.config&&r.config.constructor.name!=="Object"){return}n.Ionic=n.Ionic||{};n.Ionic.config=Object.assign(Object.assign({},n.Ionic.config),e);return n.Ionic.config};var getMode=function(){var e;var n=window;var r=(e=n===null||n===void 0?void 0:n.Ionic)===null||e===void 0?void 0:e.config;if(r){if(r.mode){return r.mode}else{return r.get("mode")}}return"md"};var ENABLE_HTML_CONTENT_DEFAULT=false;export{ENABLE_HTML_CONTENT_DEFAULT as E,IonicSafeString as I,sanitizeDOMString as a,getMode as g,setupConfig as s};