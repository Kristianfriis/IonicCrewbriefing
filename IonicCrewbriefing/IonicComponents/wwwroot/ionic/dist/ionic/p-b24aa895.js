/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
import{c as o}from"./p-63eb0acd.js";import{b as s}from"./p-1b8e1d03.js";const a="ion-content",t=".ion-content-scroll-host",e=`${a}, ${t}`,r=o=>"ION-CONTENT"===o.tagName,i=async s=>r(s)?(await new Promise((a=>o(s,a))),s.getScrollElement()):s,n=o=>o.querySelector(t)||o.querySelector(e),c=o=>o.closest(e),m=(o,s)=>r(o)?o.scrollToTop(s):Promise.resolve(o.scrollTo({top:0,left:0,behavior:s>0?"smooth":"auto"})),f=(o,s,a,t)=>r(o)?o.scrollByPoint(s,a,t):Promise.resolve(o.scrollBy({top:a,left:s,behavior:t>0?"smooth":"auto"})),p=o=>s(o,a),b=o=>{if(r(o)){const s=o.scrollY;return o.scrollY=!1,s}return o.style.setProperty("overflow","hidden"),!0},h=(o,s)=>{r(o)?o.scrollY=s:o.style.removeProperty("overflow")};export{t as I,n as a,a as b,f as c,b as d,c as f,i as g,r as i,p,h as r,m as s}