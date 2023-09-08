/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
let e,t,n,l=!1,o=!1,s=!1,i=!1,c=!1;const r={isDev:!1,isBrowser:!0,isServer:!1,isTesting:!1},f=e=>{const t=new URL(e,De.t);return t.origin!==Te.location.origin?t.href:t.pathname},a="s-id",u="sty-id",$="c-id",d="http://www.w3.org/1999/xlink",h={},m=e=>"object"==(e=typeof e)||"function"===e;function p(e){var t,n,l;return null!==(l=null===(n=null===(t=e.head)||void 0===t?void 0:t.querySelector('meta[name="csp-nonce"]'))||void 0===n?void 0:n.getAttribute("content"))&&void 0!==l?l:void 0}const y=(e,t,...n)=>{let l=null,o=null,s=null,i=!1,c=!1;const r=[],f=t=>{for(let n=0;n<t.length;n++)l=t[n],Array.isArray(l)?f(l):null!=l&&"boolean"!=typeof l&&((i="function"!=typeof e&&!m(l))&&(l+=""),i&&c?r[r.length-1].l+=l:r.push(i?v(null,l):l),c=i)};if(f(n),t){t.key&&(o=t.key),t.name&&(s=t.name);{const e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter((t=>e[t])).join(" "))}}if("function"==typeof e)return e(null===t?{}:t,r,w);const a=v(e,null);return a.o=t,r.length>0&&(a.i=r),a.u=o,a.$=s,a},v=(e,t)=>({h:0,m:e,l:t,p:null,i:null,o:null,u:null,$:null}),b={},w={forEach:(e,t)=>e.map(g).forEach(t),map:(e,t)=>e.map(g).map(t).map(k)},g=e=>({vattrs:e.o,vchildren:e.i,vkey:e.u,vname:e.$,vtag:e.m,vtext:e.l}),k=e=>{if("function"==typeof e.vtag){const t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),y(e.vtag,t,...e.vchildren||[])}const t=v(e.vtag,e.vtext);return t.o=e.vattrs,t.i=e.vchildren,t.u=e.vkey,t.$=e.vname,t},j=(e,t,n,l,o,s,i)=>{let c,r,f,a;if(1===s.nodeType){for(c=s.getAttribute($),c&&(r=c.split("."),r[0]!==i&&"0"!==r[0]||(f={h:0,v:r[0],g:r[1],k:r[2],j:r[3],m:s.tagName.toLowerCase(),p:s,o:null,i:null,u:null,$:null,l:null},t.push(f),s.removeAttribute($),e.i||(e.i=[]),e.i[f.j]=f,e=f,l&&"0"===f.k&&(l[f.j]=f.p))),a=s.childNodes.length-1;a>=0;a--)j(e,t,n,l,o,s.childNodes[a],i);if(s.shadowRoot)for(a=s.shadowRoot.childNodes.length-1;a>=0;a--)j(e,t,n,l,o,s.shadowRoot.childNodes[a],i)}else if(8===s.nodeType)r=s.nodeValue.split("."),r[1]!==i&&"0"!==r[1]||(c=r[0],f={h:0,v:r[1],g:r[2],k:r[3],j:r[4],p:s,o:null,i:null,u:null,$:null,m:null,l:null},"t"===c?(f.p=s.nextSibling,f.p&&3===f.p.nodeType&&(f.l=f.p.textContent,t.push(f),s.remove(),e.i||(e.i=[]),e.i[f.j]=f,l&&"0"===f.k&&(l[f.j]=f.p))):f.v===i&&("s"===c?(f.m="slot",s["s-sn"]=r[5]?f.$=r[5]:"",s["s-sr"]=!0,l&&(f.p=Le.createElement(f.m),f.$&&f.p.setAttribute("name",f.$),s.parentNode.insertBefore(f.p,s),s.remove(),"0"===f.k&&(l[f.j]=f.p)),n.push(f),e.i||(e.i=[]),e.i[f.j]=f):"r"===c&&(l?s.remove():(o["s-cr"]=s,s["s-cn"]=!0))));else if(e&&"style"===e.m){const t=v(null,s.textContent);t.p=s,t.j="0",e.i=[t]}},S=(e,t)=>{if(1===e.nodeType){let n=0;for(;n<e.childNodes.length;n++)S(e.childNodes[n],t);if(e.shadowRoot)for(n=0;n<e.shadowRoot.childNodes.length;n++)S(e.shadowRoot.childNodes[n],t)}else if(8===e.nodeType){const n=e.nodeValue.split(".");"o"===n[0]&&(t.set(n[1]+"."+n[2],e),e.nodeValue="",e["s-en"]=n[3])}},O=e=>Pe.push(e),x=e=>ke(e).S,M=e=>ke(e).O,C=(e,t,n)=>{const l=M(e);return{emit:e=>R(l,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e})}},R=(e,t,n)=>{const l=De.ce(t,n);return e.dispatchEvent(l),l},P=new WeakMap,T=(e,t,n)=>{let l=Re.get(e);Ue&&n?(l=l||new CSSStyleSheet,"string"==typeof l?l=t:l.replaceSync(t)):l=t,Re.set(e,l)},L=(e,t,n)=>{var l;const o=D(t,n),s=Re.get(o);if(e=11===e.nodeType?e:Le,s)if("string"==typeof s){let t,n=P.get(e=e.head||e);if(n||P.set(e,n=new Set),!n.has(o)){if(e.host&&(t=e.querySelector(`[${u}="${o}"]`)))t.innerHTML=s;else{t=Le.createElement("style"),t.innerHTML=s;const n=null!==(l=De.M)&&void 0!==l?l:p(Le);null!=n&&t.setAttribute("nonce",n),e.insertBefore(t,e.querySelector("link"))}n&&n.add(o)}}else e.adoptedStyleSheets.includes(s)||(e.adoptedStyleSheets=[...e.adoptedStyleSheets,s]);return o},D=(e,t)=>"sc-"+(t&&32&e.h?e.C+"-"+t:e.C),E=e=>e.replace(/\/\*!@([^\/]+)\*\/[^\{]+\{/g,"$1{"),I=(e,t,n,l,o,s)=>{if(n!==l){let i=Oe(e,t),c=t.toLowerCase();if("class"===t){const t=e.classList,o=U(n),s=U(l);t.remove(...o.filter((e=>e&&!s.includes(e)))),t.add(...s.filter((e=>e&&!o.includes(e))))}else if("style"===t){for(const t in n)l&&null!=l[t]||(t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(const t in l)n&&l[t]===n[t]||(t.includes("-")?e.style.setProperty(t,l[t]):e.style[t]=l[t])}else if("key"===t);else if("ref"===t)l&&l(e);else if(i||"o"!==t[0]||"n"!==t[1]){const r=m(l);if((i||r&&null!==l)&&!o)try{if(e.tagName.includes("-"))e[t]=l;else{const o=null==l?"":l;"list"===t?i=!1:null!=n&&e[t]==o||(e[t]=o)}}catch(e){}let f=!1;c!==(c=c.replace(/^xlink\:?/,""))&&(t=c,f=!0),null==l||!1===l?!1===l&&""!==e.getAttribute(t)||(f?e.removeAttributeNS(d,t):e.removeAttribute(t)):(!i||4&s||o)&&!r&&(l=!0===l?"":l,f?e.setAttributeNS(d,t,l):e.setAttribute(t,l))}else t="-"===t[2]?t.slice(3):Oe(Te,c)?c.slice(2):c[2]+t.slice(3),n&&De.rel(e,t,n,!1),l&&De.ael(e,t,l,!1)}},N=/\s/,U=e=>e?e.split(N):[],W=(e,t,n,l)=>{const o=11===t.p.nodeType&&t.p.host?t.p.host:t.p,s=e&&e.o||h,i=t.o||h;for(l in s)l in i||I(o,l,s[l],void 0,n,t.h);for(l in i)I(o,l,s[l],i[l],n,t.h)},F=(o,c,r,f)=>{const a=c.i[r];let u,$,d,h=0;if(l||(s=!0,"slot"===a.m&&(e&&f.classList.add(e+"-s"),a.h|=a.i?2:1)),null!==a.l)u=a.p=Le.createTextNode(a.l);else if(1&a.h)u=a.p=Le.createTextNode("");else{if(i||(i="svg"===a.m),u=a.p=Le.createElementNS(i?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",2&a.h?"slot-fb":a.m),i&&"foreignObject"===a.m&&(i=!1),W(null,a,i),null!=e&&u["s-si"]!==e&&u.classList.add(u["s-si"]=e),a.i)for(h=0;h<a.i.length;++h)$=F(o,a,h,u),$&&u.appendChild($);"svg"===a.m?i=!1:"foreignObject"===u.tagName&&(i=!0)}return u["s-hn"]=n,3&a.h&&(u["s-sr"]=!0,u["s-cr"]=t,u["s-sn"]=a.$||"",d=o&&o.i&&o.i[r],d&&d.m===a.m&&o.p&&A(o.p,!1)),u},A=(e,t)=>{De.h|=1;const l=e.childNodes;for(let e=l.length-1;e>=0;e--){const o=l[e];o["s-hn"]!==n&&o["s-ol"]&&(_(o).insertBefore(o,V(o)),o["s-ol"].remove(),o["s-ol"]=void 0,s=!0),t&&A(o,t)}De.h&=-2},B=(e,t,l,o,s,i)=>{let c,r=e["s-cr"]&&e["s-cr"].parentNode||e;for(r.shadowRoot&&r.tagName===n&&(r=r.shadowRoot);s<=i;++s)o[s]&&(c=F(null,l,s,e),c&&(o[s].p=c,r.insertBefore(c,V(t))))},H=(e,t,n)=>{for(let l=t;l<=n;++l){const t=e[l];if(t){const e=t.p;X(t),e&&(o=!0,e["s-ol"]?e["s-ol"].remove():A(e,!0),e.remove())}}},q=(e,t)=>e.m===t.m&&("slot"===e.m?e.$===t.$:e.u===t.u),V=e=>e&&e["s-ol"]||e,_=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,z=(e,t)=>{const n=t.p=e.p,l=e.i,o=t.i,s=t.m,c=t.l;let r;null===c?(i="svg"===s||"foreignObject"!==s&&i,"slot"===s||W(e,t,i),null!==l&&null!==o?((e,t,n,l)=>{let o,s,i=0,c=0,r=0,f=0,a=t.length-1,u=t[0],$=t[a],d=l.length-1,h=l[0],m=l[d];for(;i<=a&&c<=d;)if(null==u)u=t[++i];else if(null==$)$=t[--a];else if(null==h)h=l[++c];else if(null==m)m=l[--d];else if(q(u,h))z(u,h),u=t[++i],h=l[++c];else if(q($,m))z($,m),$=t[--a],m=l[--d];else if(q(u,m))"slot"!==u.m&&"slot"!==m.m||A(u.p.parentNode,!1),z(u,m),e.insertBefore(u.p,$.p.nextSibling),u=t[++i],m=l[--d];else if(q($,h))"slot"!==u.m&&"slot"!==m.m||A($.p.parentNode,!1),z($,h),e.insertBefore($.p,u.p),$=t[--a],h=l[++c];else{for(r=-1,f=i;f<=a;++f)if(t[f]&&null!==t[f].u&&t[f].u===h.u){r=f;break}r>=0?(s=t[r],s.m!==h.m?o=F(t&&t[c],n,r,e):(z(s,h),t[r]=void 0,o=s.p),h=l[++c]):(o=F(t&&t[c],n,c,e),h=l[++c]),o&&_(u.p).insertBefore(o,V(u.p))}i>a?B(e,null==l[d+1]?null:l[d+1].p,n,l,c,d):c>d&&H(t,i,a)})(n,l,t,o):null!==o?(null!==e.l&&(n.textContent=""),B(n,null,t,o,0,o.length-1)):null!==l&&H(l,0,l.length-1),i&&"svg"===s&&(i=!1)):(r=n["s-cr"])?r.parentNode.textContent=c:e.l!==c&&(n.data=c)},G=e=>{const t=e.childNodes;let n,l,o,s,i,c;for(l=0,o=t.length;l<o;l++)if(n=t[l],1===n.nodeType){if(n["s-sr"])for(i=n["s-sn"],n.hidden=!1,s=0;s<o;s++)if(c=t[s].nodeType,t[s]["s-hn"]!==n["s-hn"]||""!==i){if(1===c&&i===t[s].getAttribute("slot")){n.hidden=!0;break}}else if(1===c||3===c&&""!==t[s].textContent.trim()){n.hidden=!0;break}G(n)}},J=[],K=e=>{let t,n,l,s,i,c,r=0;const f=e.childNodes,a=f.length;for(;r<a;r++){if(t=f[r],t["s-sr"]&&(n=t["s-cr"])&&n.parentNode)for(l=n.parentNode.childNodes,s=t["s-sn"],c=l.length-1;c>=0;c--)n=l[c],n["s-cn"]||n["s-nr"]||n["s-hn"]===t["s-hn"]||(Q(n,s)?(i=J.find((e=>e.R===n)),o=!0,n["s-sn"]=n["s-sn"]||s,i?i.P=t:J.push({P:t,R:n}),n["s-sr"]&&J.map((e=>{Q(e.R,n["s-sn"])&&(i=J.find((e=>e.R===n)),i&&!e.P&&(e.P=i.P))}))):J.some((e=>e.R===n))||J.push({R:n}));1===t.nodeType&&K(t)}},Q=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,X=e=>{e.o&&e.o.ref&&e.o.ref(null),e.i&&e.i.map(X)},Y=(e,t)=>{t&&!e.T&&t["s-p"]&&t["s-p"].push(new Promise((t=>e.T=t)))},Z=(e,t)=>{if(e.h|=16,!(4&e.h))return Y(e,e.L),_e((()=>ee(e,t)));e.h|=512},ee=(e,t)=>{const n=e.D;let l;return t&&(e.h|=256,e.I&&(e.I.map((([e,t])=>re(n,e,t))),e.I=void 0),l=re(n,"componentWillLoad")),l=te(l,(()=>re(n,"componentWillRender"))),te(l,(()=>le(e,n,t)))},te=(e,t)=>ne(e)?e.then(t):t(),ne=e=>e instanceof Promise||e&&e.then&&"function"==typeof e.then,le=async(e,t,n)=>{var l;const o=e.O,s=o["s-rc"];n&&(e=>{const t=e.N,n=e.O,l=t.h,o=L(n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.S);10&l&&(n["s-sc"]=o,n.classList.add(o+"-h"),2&l&&n.classList.add(o+"-s"))})(e);oe(e,t,o,n),s&&(s.map((e=>e())),o["s-rc"]=void 0);{const t=null!==(l=o["s-p"])&&void 0!==l?l:[],n=()=>se(e);0===t.length?n():(Promise.all(t).then(n),e.h|=4,t.length=0)}},oe=(i,c,r,f)=>{try{c=c.render&&c.render(),i.h&=-17,i.h|=2,((i,c,r=!1)=>{const f=i.O,a=i.N,u=i.U||v(null,null),$=(e=>e&&e.m===b)(c)?c:y(null,null,c);if(n=f.tagName,a.W&&($.o=$.o||{},a.W.map((([e,t])=>$.o[t]=f[e]))),r&&$.o)for(const e of Object.keys($.o))f.hasAttribute(e)&&!["key","ref","style","class"].includes(e)&&($.o[e]=f[e]);if($.m=null,$.h|=4,i.U=$,$.p=u.p=f.shadowRoot||f,e=f["s-sc"],t=f["s-cr"],l=0!=(1&a.h),o=!1,z(u,$),De.h|=1,s){let e,t,n,l,o,s;K($.p);let i=0;for(;i<J.length;i++)e=J[i],t=e.R,t["s-ol"]||(n=Le.createTextNode(""),n["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=n,t));for(i=0;i<J.length;i++)if(e=J[i],t=e.R,e.P){for(l=e.P.parentNode,o=e.P.nextSibling,n=t["s-ol"];n=n.previousSibling;)if(s=n["s-nr"],s&&s["s-sn"]===t["s-sn"]&&l===s.parentNode&&(s=s.nextSibling,!s||!s["s-nr"])){o=s;break}(!o&&l!==t.parentNode||t.nextSibling!==o)&&t!==o&&(!t["s-hn"]&&t["s-ol"]&&(t["s-hn"]=t["s-ol"].parentNode.nodeName),l.insertBefore(t,o))}else 1===t.nodeType&&(t.hidden=!0)}o&&G($.p),De.h&=-2,J.length=0})(i,c,f)}catch(e){xe(e,i.O)}return null},se=e=>{const t=e.O,n=e.D,l=e.L;re(n,"componentDidRender"),64&e.h?re(n,"componentDidUpdate"):(e.h|=64,fe(t),re(n,"componentDidLoad"),e.F(t),l||ce()),e.A(t),e.T&&(e.T(),e.T=void 0),512&e.h&&qe((()=>Z(e,!1))),e.h&=-517},ie=e=>{{const t=ke(e),n=t.O.isConnected;return n&&2==(18&t.h)&&Z(t,!1),n}},ce=()=>{fe(Le.documentElement),qe((()=>R(Te,"appload",{detail:{namespace:"ionic"}})))},re=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){xe(e)}},fe=e=>e.classList.add("hydrated"),ae=(e,t,n)=>{if(t.B){e.watchers&&(t.H=e.watchers);const l=Object.entries(t.B),o=e.prototype;if(l.map((([e,[l]])=>{31&l||2&n&&32&l?Object.defineProperty(o,e,{get(){return((e,t)=>ke(this).q.get(t))(0,e)},set(n){((e,t,n,l)=>{const o=ke(e),s=o.O,i=o.q.get(t),c=o.h,r=o.D;if(n=((e,t)=>null==e||m(e)?e:4&t?"false"!==e&&(""===e||!!e):2&t?parseFloat(e):1&t?e+"":e)(n,l.B[t][0]),(!(8&c)||void 0===i)&&n!==i&&(!Number.isNaN(i)||!Number.isNaN(n))&&(o.q.set(t,n),r)){if(l.H&&128&c){const e=l.H[t];e&&e.map((e=>{try{r[e](n,i,t)}catch(e){xe(e,s)}}))}2==(18&c)&&Z(o,!1)}})(this,e,n,t)},configurable:!0,enumerable:!0}):1&n&&64&l&&Object.defineProperty(o,e,{value(...t){const n=ke(this);return n.V.then((()=>n.D[e](...t)))}})})),1&n){const n=new Map;o.attributeChangedCallback=function(e,t,l){De.jmp((()=>{const t=n.get(e);if(this.hasOwnProperty(t))l=this[t],delete this[t];else if(o.hasOwnProperty(t)&&"number"==typeof this[t]&&this[t]==l)return;this[t]=(null!==l||"boolean"!=typeof this[t])&&l}))},e.observedAttributes=l.filter((([e,t])=>15&t[0])).map((([e,l])=>{const o=l[1]||e;return n.set(o,e),512&l[0]&&t.W.push([e,o]),o}))}}return e},ue=e=>{re(e,"connectedCallback")},$e=e=>{if(0==(1&De.h)){const t=ke(e),n=t.N,l=()=>{};if(1&t.h)pe(e,t,n._),(null==t?void 0:t.D)?ue(t.D):(null==t?void 0:t.G)&&t.G.then((()=>ue(t.D)));else{let l;if(t.h|=1,l=e.getAttribute(a),l){if(1&n.h){const t=L(e.shadowRoot,n,e.getAttribute("s-mode"));e.classList.remove(t+"-h",t+"-s")}((e,t,n,l)=>{const o=e.shadowRoot,s=[],i=o?[]:null,c=l.U=v(t,null);De.J||S(Le.body,De.J=new Map),e[a]=n,e.removeAttribute(a),j(c,s,[],i,e,e,n),s.map((e=>{const n=e.v+"."+e.g,l=De.J.get(n),s=e.p;l&&Ie&&""===l["s-en"]&&l.parentNode.insertBefore(s,l.nextSibling),o||(s["s-hn"]=t,l&&(s["s-ol"]=l,s["s-ol"]["s-nr"]=s)),De.J.delete(n)})),o&&i.map((e=>{e&&o.appendChild(e)}))})(e,n.C,l,t)}l||12&n.h&&de(e);{let n=e;for(;n=n.parentNode||n.host;)if(1===n.nodeType&&n.hasAttribute("s-id")&&n["s-p"]||n["s-p"]){Y(t,t.L=n);break}}n.B&&Object.entries(n.B).map((([t,[n]])=>{if(31&n&&e.hasOwnProperty(t)){const n=e[t];delete e[t],e[t]=n}})),(async(e,t,n,l,o)=>{if(0==(32&t.h)){t.h|=32;{if((o=Ce(n)).then){const e=()=>{};o=await o,e()}o.isProxied||(n.H=o.watchers,ae(o,n,2),o.isProxied=!0);const e=()=>{};t.h|=8;try{new o(t)}catch(e){xe(e)}t.h&=-9,t.h|=128,e(),ue(t.D)}if(o.style){let l=o.style;"string"!=typeof l&&(l=l[t.S=(e=>Pe.map((t=>t(e))).find((e=>!!e)))(e)]);const s=D(n,t.S);if(!Re.has(s)){const e=()=>{};T(s,l,!!(1&n.h)),e()}}}const s=t.L,i=()=>Z(t,!0);s&&s["s-rc"]?s["s-rc"].push(i):i()})(e,t,n)}l()}},de=e=>{const t=e["s-cr"]=Le.createComment("");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},he=e=>{re(e,"disconnectedCallback")},me=(e,t={})=>{var n;const l=[],o=t.exclude||[],s=Te.customElements,i=Le.head,c=i.querySelector("meta[charset]"),r=Le.createElement("style"),f=[],a=Le.querySelectorAll(`[${u}]`);let $,d=!0,h=0;for(Object.assign(De,t),De.t=new URL(t.resourcesUrl||"./",Le.baseURI).href,De.h|=2;h<a.length;h++)T(a[h].getAttribute(u),E(a[h].innerHTML),!0);e.map((e=>{e[1].map((t=>{const n={h:t[0],C:t[1],B:t[2],_:t[3]};n.B=t[2],n._=t[3],n.W=[],n.H={};const i=n.C,c=class extends HTMLElement{constructor(e){super(e),Se(e=this,n),1&n.h&&e.attachShadow({mode:"open",delegatesFocus:!!(16&n.h)})}connectedCallback(){$&&(clearTimeout($),$=null),d?f.push(this):De.jmp((()=>$e(this)))}disconnectedCallback(){De.jmp((()=>(async()=>{if(0==(1&De.h)){const e=ke(this);e.K&&(e.K.map((e=>e())),e.K=void 0),(null==e?void 0:e.D)?he(e.D):(null==e?void 0:e.G)&&e.G.then((()=>he(e.D)))}})()))}componentOnReady(){return ke(this).G}};n.X=e[0],o.includes(i)||s.get(i)||(l.push(i),s.define(i,ae(c,n,1)))}))}));{r.innerHTML=l+"{visibility:hidden}.hydrated{visibility:inherit}",r.setAttribute("data-styles","");const e=null!==(n=De.M)&&void 0!==n?n:p(Le);null!=e&&r.setAttribute("nonce",e),i.insertBefore(r,c?c.nextSibling:i.firstChild)}d=!1,f.length?f.map((e=>e.connectedCallback())):De.jmp((()=>$=setTimeout(ce,30)))},pe=(e,t,n)=>{n&&n.map((([n,l,o])=>{const s=ve(e,n),i=ye(t,o),c=be(n);De.ael(s,l,i,c),(t.K=t.K||[]).push((()=>De.rel(s,l,i,c)))}))},ye=(e,t)=>n=>{try{256&e.h?e.D[t](n):(e.I=e.I||[]).push([t,n])}catch(e){xe(e)}},ve=(e,t)=>4&t?Le:8&t?Te:16&t?Le.body:e,be=e=>0!=(2&e),we=e=>De.M=e,ge=new WeakMap,ke=e=>ge.get(e),je=(e,t)=>ge.set(t.D=e,t),Se=(e,t)=>{const n={h:0,O:e,N:t,q:new Map};return n.V=new Promise((e=>n.A=e)),n.G=new Promise((e=>n.F=e)),e["s-p"]=[],e["s-rc"]=[],pe(e,n,t._),ge.set(e,n)},Oe=(e,t)=>t in e,xe=(e,t)=>(0,console.error)(e,t),Me=new Map,Ce=e=>{const t=e.C.replace(/-/g,"_"),n=e.X,l=Me.get(n);return l?l[t]:import(`./${n}.entry.js`).then((e=>(Me.set(n,e),e[t])),xe)
/*!__STENCIL_STATIC_IMPORT_SWITCH__*/},Re=new Map,Pe=[],Te="undefined"!=typeof window?window:{},Le=Te.document||{head:{}},De={h:0,t:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,l)=>e.addEventListener(t,n,l),rel:(e,t,n,l)=>e.removeEventListener(t,n,l),ce:(e,t)=>new CustomEvent(e,t)},Ee=e=>{Object.assign(De,e)},Ie=!0,Ne=e=>Promise.resolve(e),Ue=(()=>{try{return new CSSStyleSheet,"function"==typeof(new CSSStyleSheet).replaceSync}catch(e){}return!1})(),We=[],Fe=[],Ae=(e,t)=>n=>{e.push(n),c||(c=!0,t&&4&De.h?qe(He):De.raf(He))},Be=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){xe(e)}e.length=0},He=()=>{Be(We),Be(Fe),(c=We.length>0)&&De.raf(He)},qe=e=>Ne().then(e),Ve=Ae(We,!1),_e=Ae(Fe,!0);export{r as B,b as H,Ee as a,me as b,O as c,C as d,Ve as e,M as f,x as g,y as h,ie as i,f as j,Ne as p,je as r,we as s,_e as w}