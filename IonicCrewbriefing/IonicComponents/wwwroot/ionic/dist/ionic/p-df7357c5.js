/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{l as t}from"./p-63eb0acd.js";import{i as o}from"./p-6dbfe5d4.js";import{createGesture as r}from"./p-8b1be026.js";import"./p-e0b06b65.js";const e=(e,s,n,a,c)=>{const p=e.ownerDocument.defaultView;let i=o(e);const m=t=>i?-t.deltaX:t.deltaX;return r({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:t=>(i=o(e),(t=>{const{startX:o}=t;return i?o>=p.innerWidth-50:o<=50})(t)&&s()),onStart:n,onMove:t=>{const o=m(t);a(o/p.innerWidth)},onEnd:o=>{const r=m(o),e=p.innerWidth,s=r/e,n=(t=>i?-t.velocityX:t.velocityX)(o),a=n>=0&&(n>.2||r>e/2),b=(a?1-s:s)*e;let d=0;if(b>5){const t=b/Math.abs(n);d=Math.min(t,540)}c(a,s<=0?.01:t(0,s,.9999),d)}})};export{e as createSwipeBackGesture}