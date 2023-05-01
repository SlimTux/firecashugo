var Da=Object.defineProperty;var Ma=(n,e,t)=>e in n?Da(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var an=(n,e,t)=>(Ma(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function Pr(n,e){if(["link","go"].includes(n))if(e){const t=document.querySelector(e);t?t.scrollIntoView({behavior:"smooth",block:"start"}):window.scrollTo({top:0})}else window.scrollTo({top:0})}function Zn(n){const e=new URL(n||window.location.href).href;return e.endsWith("/")||e.includes(".")||e.includes("#")?e:`${e}/`}function Ua(n){(!window.history.state||window.history.state.url!==n)&&window.history.pushState({url:n},"internalLink",n)}function Fa(n){document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}function za(n){return{type:"popstate",next:Zn()}}function Ba(n){var e;let t;if(n.altKey||n.ctrlKey||n.metaKey||n.shiftKey)return{type:"disqualified"};for(let r=n.target;r.parentNode;r=r.parentNode)if(r.nodeName==="A"){t=r;break}if(t&&t.host!==location.host)return t.target="_blank",{type:"external"};if(t&&"cold"in(t==null?void 0:t.dataset))return{type:"disqualified"};if(t!=null&&t.hasAttribute("href")){const r=t.getAttribute("href"),i=new URL(r,location.href);if(n.preventDefault(),r!=null&&r.startsWith("#"))return Fa(r),{type:"scrolled"};const o=(e=r.match(/#([\w'-]+)\b/g))==null?void 0:e[0],s=Zn(i.href),a=Zn();return{type:"link",next:s,prev:a,scrollId:o}}else return{type:"noop"}}function ja(n){return new DOMParser().parseFromString(n,"text/html")}function Lr(n){document.body.querySelectorAll("[flamethrower-preserve]").forEach(e=>{let t=n.body.querySelector('[flamethrower-preserve][id="'+e.id+'"]');if(t){const r=e.cloneNode(!0);t.replaceWith(r)}}),document.body.replaceWith(n.body)}function $a(n){const e=s=>Array.from(s.querySelectorAll('head>:not([rel="prefetch"]')),t=e(document),r=e(n),{staleNodes:i,freshNodes:o}=Ha(t,r);i.forEach(s=>s.remove()),document.head.append(...o)}function Ha(n,e){const t=[],r=[];let i=0,o=0;for(;i<n.length||o<e.length;){const s=n[i],a=e[o];if(s!=null&&s.isEqualNode(a)){i++,o++;continue}const l=s?r.findIndex(u=>u.isEqualNode(s)):-1;if(l!==-1){r.splice(l,1),i++;continue}const c=a?t.findIndex(u=>u.isEqualNode(a)):-1;if(c!==-1){t.splice(c,1),o++;continue}s&&t.push(s),a&&r.push(a),i++,o++}return{staleNodes:t,freshNodes:r}}function Dr(){document.head.querySelectorAll("[data-reload]").forEach(Mr),document.body.querySelectorAll("script").forEach(Mr)}function Mr(n){const e=document.createElement("script"),t=Array.from(n.attributes);for(const{name:r,value:i}of t)e[r]=i;e.append(n.textContent),n.replaceWith(e)}const Va={log:!1,pageTransitions:!1};class qa{constructor(e){this.opts=e,this.enabled=!0,this.prefetched=new Set,this.opts={...Va,...e!=null?e:{}},window!=null&&window.history?(document.addEventListener("click",t=>this.onClick(t)),window.addEventListener("popstate",t=>this.onPop(t)),this.prefetch()):(console.warn("flamethrower router not supported in this browser or environment"),this.enabled=!1)}go(e){const t=window.location.href,r=new URL(e,location.origin).href;return this.reconstructDOM({type:"go",next:r,prev:t})}back(){window.history.back()}forward(){window.history.forward()}get allLinks(){return Array.from(document.links).filter(e=>e.href.includes(document.location.origin)&&!e.href.includes("#")&&e.href!==(document.location.href||document.location.href+"/")&&!this.prefetched.has(e.href))}log(...e){this.opts.log&&console.log(...e)}prefetch(){if(this.opts.prefetch==="visible")this.prefetchVisible();else if(this.opts.prefetch==="hover")this.prefetchOnHover();else return}prefetchOnHover(){this.allLinks.forEach(e=>{const t=e.getAttribute("href");e.addEventListener("pointerenter",()=>this.createLink(t),{once:!0})})}prefetchVisible(){const e={root:null,rootMargin:"0px",threshold:1};"IntersectionObserver"in window&&(this.observer||(this.observer=new IntersectionObserver((t,r)=>{t.forEach(i=>{const o=i.target.getAttribute("href");if(this.prefetched.has(o)){r.unobserve(i.target);return}i.isIntersecting&&(this.createLink(o),r.unobserve(i.target))})},e)),this.allLinks.forEach(t=>this.observer.observe(t)))}createLink(e){const t=document.createElement("link");t.rel="prefetch",t.href=e,t.as="document",t.onload=()=>this.log("\u{1F329}\uFE0F prefetched",e),t.onerror=r=>this.log("\u{1F915} can't prefetch",e,r),document.head.appendChild(t),this.prefetched.add(e)}onClick(e){this.reconstructDOM(Ba(e))}onPop(e){this.reconstructDOM(za())}async reconstructDOM({type:e,next:t,prev:r,scrollId:i}){if(!this.enabled){this.log("router disabled");return}try{if(this.log("\u26A1",e),["popstate","link","go"].includes(e)&&t!==r){this.opts.log&&console.time("\u23F1\uFE0F"),window.dispatchEvent(new CustomEvent("flamethrower:router:fetch")),e!="popstate"&&Ua(t);const o=await(await fetch(t,{headers:{"X-Flamethrower":"1"}}).then(a=>{const l=a.body.getReader(),c=parseInt(a.headers.get("Content-Length"));let u=0;return new ReadableStream({start(d){function f(){l.read().then(({done:p,value:w})=>{if(p){d.close();return}u+=w.length,window.dispatchEvent(new CustomEvent("flamethrower:router:fetch-progress",{detail:{progress:Number.isNaN(c)?0:u/c*100,received:u,length:c||0}})),d.enqueue(w),f()})}f()}})}).then(a=>new Response(a,{headers:{"Content-Type":"text/html"}}))).text(),s=ja(o);$a(s),this.opts.pageTransitions&&document.createDocumentTransition?document.createDocumentTransition().start(()=>{Lr(s),Dr(),Pr(e,i)}):(Lr(s),Dr(),Pr(e,i)),window.dispatchEvent(new CustomEvent("flamethrower:router:end")),setTimeout(()=>{this.prefetch()},200),this.opts.log&&console.timeEnd("\u23F1\uFE0F")}}catch(o){return window.dispatchEvent(new CustomEvent("flamethrower:router:error",o)),this.opts.log&&console.timeEnd("\u23F1\uFE0F"),console.error("\u{1F4A5} router fetch failed",o),!1}}}const Wa=n=>{const e=new qa(n);if(n.log&&console.log("\u{1F525} flamethrower engaged"),window){const t=window;t.flamethrower=e}return e},Ga="modulepreload",Ka=function(n){return"/"+n},Ur={},lt=function(e,t,r){if(!t||t.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(t.map(o=>{if(o=Ka(o),o in Ur)return;Ur[o]=!0;const s=o.endsWith(".css"),a=s?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const d=i[u];if(d.href===o&&(!s||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const c=document.createElement("link");if(c.rel=s?"stylesheet":Ga,s||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),s)return new Promise((u,d)=>{c.addEventListener("load",u),c.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())};function T(){}function ur(n){return n()}function Fr(){return Object.create(null)}function pe(n){n.forEach(ur)}function hn(n){return typeof n=="function"}function X(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let ln;function Ct(n,e){return ln||(ln=document.createElement("a")),ln.href=e,n===ln.href}function Ya(n){return Object.keys(n).length===0}function cs(n,...e){if(n==null)return T;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function oe(n,e,t){n.$$.on_destroy.push(cs(e,t))}function m(n,e){n.appendChild(e)}function h(n,e,t){n.insertBefore(e,t||null)}function g(n){n.parentNode&&n.parentNode.removeChild(n)}function rt(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function b(n){return document.createElement(n)}function Mn(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function O(n){return document.createTextNode(n)}function S(){return O(" ")}function re(){return O("")}function B(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function Ja(n){return function(e){return e.preventDefault(),n.call(this,e)}}function Xa(n){return function(e){return e.stopPropagation(),n.call(this,e)}}function _(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Ee(n,e,t){e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:_(n,e,t)}function us(n){return n===""?null:+n}function Za(n){return Array.from(n.childNodes)}function H(n,e){e=""+e,n.data!==e&&(n.data=e)}function fe(n,e){n.value=e==null?"":e}function zr(n,e,t,r){t===null?n.style.removeProperty(e):n.style.setProperty(e,t,r?"important":"")}function te(n,e,t){n.classList[t?"add":"remove"](e)}function Q(n){const e={};for(const t of n)e[t.name]=t.value;return e}let Vt;function Bt(n){Vt=n}function Qa(){if(!Vt)throw new Error("Function called outside component initialization");return Vt}function ht(n){Qa().$$.on_mount.push(n)}function el(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(r=>r.call(this,e))}const kt=[],ct=[];let It=[];const Br=[],ds=Promise.resolve();let Qn=!1;function fs(){Qn||(Qn=!0,ds.then(J))}function tl(){return fs(),ds}function er(n){It.push(n)}const Un=new Set;let _t=0;function J(){if(_t!==0)return;const n=Vt;do{try{for(;_t<kt.length;){const e=kt[_t];_t++,Bt(e),nl(e.$$)}}catch(e){throw kt.length=0,_t=0,e}for(Bt(null),kt.length=0,_t=0;ct.length;)ct.pop()();for(let e=0;e<It.length;e+=1){const t=It[e];Un.has(t)||(Un.add(t),t())}It.length=0}while(kt.length);for(;Br.length;)Br.pop()();Qn=!1,Un.clear(),Bt(n)}function nl(n){if(n.fragment!==null){n.update(),pe(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(er)}}function rl(n){const e=[],t=[];It.forEach(r=>n.indexOf(r)===-1?e.push(r):t.push(r)),t.forEach(r=>r()),It=e}const il=new Set;function ol(n,e){n&&n.i&&(il.delete(n),n.i(e))}const ps=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function sl(n,e,t,r){const{fragment:i,after_update:o}=n.$$;i&&i.m(e,t),r||er(()=>{const s=n.$$.on_mount.map(ur).filter(hn);n.$$.on_destroy?n.$$.on_destroy.push(...s):pe(s),n.$$.on_mount=[]}),o.forEach(er)}function al(n,e){const t=n.$$;t.fragment!==null&&(rl(t.after_update),pe(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function ll(n,e){n.$$.dirty[0]===-1&&(kt.push(n),fs(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function ee(n,e,t,r,i,o,s,a=[-1]){const l=Vt;Bt(n);const c=n.$$={fragment:null,ctx:[],props:o,update:T,not_equal:i,bound:Fr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Fr(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};s&&s(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(d,f,...p)=>{const w=p.length?p[0]:f;return c.ctx&&i(c.ctx[d],c.ctx[d]=w)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](w),u&&ll(n,d)),f}):[],c.update(),u=!0,pe(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const d=Za(e.target);c.fragment&&c.fragment.l(d),d.forEach(g)}else c.fragment&&c.fragment.c();e.intro&&ol(n.$$.fragment),sl(n,e.target,e.anchor,e.customElement),J()}Bt(l)}let Z;typeof HTMLElement=="function"&&(Z=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:n}=this.$$;this.$$.on_disconnect=n.map(ur).filter(hn);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(n,e,t){this[n]=t}disconnectedCallback(){pe(this.$$.on_disconnect)}$destroy(){al(this,1),this.$destroy=T}$on(n,e){if(!hn(e))return T;const t=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return t.push(e),()=>{const r=t.indexOf(e);r!==-1&&t.splice(r,1)}}$set(n){this.$$set&&!Ya(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}});const yt=[];function cl(n,e){return{subscribe:Ce(n,e).subscribe}}function Ce(n,e=T){let t;const r=new Set;function i(a){if(X(n,a)&&(n=a,t)){const l=!yt.length;for(const c of r)c[1](),yt.push(c,n);if(l){for(let c=0;c<yt.length;c+=2)yt[c][0](yt[c+1]);yt.length=0}}}function o(a){i(a(n))}function s(a,l=T){const c=[a,l];return r.add(c),r.size===1&&(t=e(i)||T),a(n),()=>{r.delete(c),r.size===0&&t&&(t(),t=null)}}return{set:i,update:o,subscribe:s}}function hs(n,e,t){const r=!Array.isArray(n),i=r?[n]:n,o=e.length<2;return cl(t,s=>{let a=!1;const l=[];let c=0,u=T;const d=()=>{if(c)return;u();const p=e(r?l[0]:l,s);o?s(p):u=hn(p)?p:T},f=i.map((p,w)=>cs(p,v=>{l[w]=v,c&=~(1<<w),a&&d()},()=>{c|=1<<w}));return a=!0,d(),function(){pe(f),u(),a=!1}})}const be=Ce(null);window.addEventListener("flamethrower:router:fetch",n=>{be.set(null)});const Ae=Ce(null),Tn=Ce(null),ul="https://fireship.io";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ms=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},dl=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],s=n[t++],a=n[t++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=n[t++],s=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},gs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],s=i+1<n.length,a=s?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=o>>2,d=(o&3)<<4|a>>4;let f=(a&15)<<2|c>>6,p=c&63;l||(p=64,s||(f=64)),r.push(t[u],t[d],t[f],t[p])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ms(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):dl(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const d=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||a==null||c==null||d==null)throw new fl;const f=o<<2|a>>4;if(r.push(f),c!==64){const p=a<<4&240|c>>2;if(r.push(p),d!==64){const w=c<<6&192|d;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class fl extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pl=function(n){const e=ms(n);return gs.encodeByteArray(e,!0)},mn=function(n){return pl(n).replace(/\./g,"")},bs=function(n){try{return gs.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hl(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ml=()=>hl().__FIREBASE_DEFAULTS__,gl=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},bl=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&bs(n[1]);return e&&JSON.parse(e)},Cn=()=>{try{return ml()||gl()||bl()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},ws=n=>{var e,t;return(t=(e=Cn())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},wg=n=>{const e=ws(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},wl=()=>{var n;return(n=Cn())===null||n===void 0?void 0:n.config},_s=n=>{var e;return(e=Cn())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _g(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[mn(JSON.stringify(t)),mn(JSON.stringify(s)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function yl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ke())}function vl(){var n;const e=(n=Cn())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ys(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function kl(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Il(){const n=ke();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function yg(){return!vl()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function vs(){try{return typeof indexedDB=="object"}catch{return!1}}function ks(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}function El(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tl="FirebaseError";class $e extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Tl,Object.setPrototypeOf(this,$e.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,mt.prototype.create)}}class mt{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?Cl(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new $e(i,a,r)}}function Cl(n,e){return n.replace(Sl,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Sl=/\{\$([^}]+)}/g;function xl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function qt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],s=e[i];if(jr(o)&&jr(s)){if(!qt(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function jr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Mt(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Ut(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Al(n,e){const t=new Rl(n,e);return t.subscribe.bind(t)}class Rl{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Ol(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Fn),i.error===void 0&&(i.error=Fn),i.complete===void 0&&(i.complete=Fn);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Ol(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Fn(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl=1e3,Pl=2,Ll=4*60*60*1e3,Dl=.5;function $r(n,e=Nl,t=Pl){const r=e*Math.pow(t,n),i=Math.round(Dl*r*(Math.random()-.5)*2);return Math.min(Ll,r+i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(n){return n&&n._delegate?n._delegate:n}class Be{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new _l;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Fl(e))try{this.getOrInitializeService({instanceIdentifier:it})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=it){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=it){return this.instances.has(e)}getOptions(e=it){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(!!r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Ul(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=it){return this.component?this.component.multipleInstances?e:it:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ul(n){return n===it?void 0:n}function Fl(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ml(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ae;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ae||(ae={}));const Bl={debug:ae.DEBUG,verbose:ae.VERBOSE,info:ae.INFO,warn:ae.WARN,error:ae.ERROR,silent:ae.SILENT},jl=ae.INFO,$l={[ae.DEBUG]:"log",[ae.VERBOSE]:"log",[ae.INFO]:"info",[ae.WARN]:"warn",[ae.ERROR]:"error"},Hl=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=$l[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class dr{constructor(e){this.name=e,this._logLevel=jl,this._logHandler=Hl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Bl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ae.DEBUG,...e),this._logHandler(this,ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ae.VERBOSE,...e),this._logHandler(this,ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ae.INFO,...e),this._logHandler(this,ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ae.WARN,...e),this._logHandler(this,ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ae.ERROR,...e),this._logHandler(this,ae.ERROR,...e)}}const Vl=(n,e)=>e.some(t=>n instanceof t);let Hr,Vr;function ql(){return Hr||(Hr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Wl(){return Vr||(Vr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Is=new WeakMap,tr=new WeakMap,Es=new WeakMap,zn=new WeakMap,fr=new WeakMap;function Gl(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",s)},o=()=>{t(tt(n.result)),i()},s=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",s)});return e.then(t=>{t instanceof IDBCursor&&Is.set(t,n)}).catch(()=>{}),fr.set(e,n),e}function Kl(n){if(tr.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",s),n.removeEventListener("abort",s)},o=()=>{t(),i()},s=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",s),n.addEventListener("abort",s)});tr.set(n,e)}let nr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return tr.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Es.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return tt(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Yl(n){nr=n(nr)}function Jl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Bn(this),e,...t);return Es.set(r,e.sort?e.sort():[e]),tt(r)}:Wl().includes(n)?function(...e){return n.apply(Bn(this),e),tt(Is.get(this))}:function(...e){return tt(n.apply(Bn(this),e))}}function Xl(n){return typeof n=="function"?Jl(n):(n instanceof IDBTransaction&&Kl(n),Vl(n,ql())?new Proxy(n,nr):n)}function tt(n){if(n instanceof IDBRequest)return Gl(n);if(zn.has(n))return zn.get(n);const e=Xl(n);return e!==n&&(zn.set(n,e),fr.set(e,n)),e}const Bn=n=>fr.get(n);function Ts(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(n,e),a=tt(s);return r&&s.addEventListener("upgradeneeded",l=>{r(tt(s.result),l.oldVersion,l.newVersion,tt(s.transaction))}),t&&s.addEventListener("blocked",()=>t()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Zl=["get","getKey","getAll","getAllKeys","count"],Ql=["put","add","delete","clear"],jn=new Map;function qr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(jn.get(e))return jn.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=Ql.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Zl.includes(t)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return jn.set(e,o),o}Yl(n=>({...n,get:(e,t,r)=>qr(e,t)||n.get(e,t,r),has:(e,t)=>!!qr(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(tc(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function tc(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const rr="@firebase/app",Wr="0.9.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ut=new dr("@firebase/app"),nc="@firebase/app-compat",rc="@firebase/analytics-compat",ic="@firebase/analytics",oc="@firebase/app-check-compat",sc="@firebase/app-check",ac="@firebase/auth",lc="@firebase/auth-compat",cc="@firebase/database",uc="@firebase/database-compat",dc="@firebase/functions",fc="@firebase/functions-compat",pc="@firebase/installations",hc="@firebase/installations-compat",mc="@firebase/messaging",gc="@firebase/messaging-compat",bc="@firebase/performance",wc="@firebase/performance-compat",_c="@firebase/remote-config",yc="@firebase/remote-config-compat",vc="@firebase/storage",kc="@firebase/storage-compat",Ic="@firebase/firestore",Ec="@firebase/firestore-compat",Tc="firebase",Cc="9.19.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gn="[DEFAULT]",Sc={[rr]:"fire-core",[nc]:"fire-core-compat",[ic]:"fire-analytics",[rc]:"fire-analytics-compat",[sc]:"fire-app-check",[oc]:"fire-app-check-compat",[ac]:"fire-auth",[lc]:"fire-auth-compat",[cc]:"fire-rtdb",[uc]:"fire-rtdb-compat",[dc]:"fire-fn",[fc]:"fire-fn-compat",[pc]:"fire-iid",[hc]:"fire-iid-compat",[mc]:"fire-fcm",[gc]:"fire-fcm-compat",[bc]:"fire-perf",[wc]:"fire-perf-compat",[_c]:"fire-rc",[yc]:"fire-rc-compat",[vc]:"fire-gcs",[kc]:"fire-gcs-compat",[Ic]:"fire-fst",[Ec]:"fire-fst-compat","fire-js":"fire-js",[Tc]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bn=new Map,ir=new Map;function xc(n,e){try{n.container.addComponent(e)}catch(t){ut.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Ge(n){const e=n.name;if(ir.has(e))return ut.debug(`There were multiple attempts to register component ${e}.`),!1;ir.set(e,n);for(const t of bn.values())xc(t,n);return!0}function Rt(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function vg(n,e,t=gn){Rt(n,e).clearInstance(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ac={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},nt=new mt("app","Firebase",Ac);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Be("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw nt.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=Cc;function Cs(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:gn,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw nt.create("bad-app-name",{appName:String(i)});if(t||(t=wl()),!t)throw nt.create("no-options");const o=bn.get(i);if(o){if(qt(t,o.options)&&qt(r,o.config))return o;throw nt.create("duplicate-app",{appName:i})}const s=new zl(i);for(const l of ir.values())s.addComponent(l);const a=new Rc(t,r,s);return bn.set(i,a),a}function Oc(n=gn){const e=bn.get(n);if(!e&&n===gn)return Cs();if(!e)throw nt.create("no-app",{appName:n});return e}function Ue(n,e,t){var r;let i=(r=Sc[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ut.warn(a.join(" "));return}Ge(new Be(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nc="firebase-heartbeat-database",Pc=1,Wt="firebase-heartbeat-store";let $n=null;function Ss(){return $n||($n=Ts(Nc,Pc,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Wt)}}}).catch(n=>{throw nt.create("idb-open",{originalErrorMessage:n.message})})),$n}async function Lc(n){try{return(await Ss()).transaction(Wt).objectStore(Wt).get(xs(n))}catch(e){if(e instanceof $e)ut.warn(e.message);else{const t=nt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ut.warn(t.message)}}}async function Gr(n,e){try{const r=(await Ss()).transaction(Wt,"readwrite");return await r.objectStore(Wt).put(e,xs(n)),r.done}catch(t){if(t instanceof $e)ut.warn(t.message);else{const r=nt.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ut.warn(r.message)}}}function xs(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dc=1024,Mc=30*24*60*60*1e3;class Uc{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new zc(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Kr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=Mc}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Kr(),{heartbeatsToSend:t,unsentEntries:r}=Fc(this._heartbeatsCache.heartbeats),i=mn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Kr(){return new Date().toISOString().substring(0,10)}function Fc(n,e=Dc){const t=[];let r=n.slice();for(const i of n){const o=t.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Yr(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Yr(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class zc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return vs()?ks().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Lc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Gr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Yr(n){return mn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bc(n){Ge(new Be("platform-logger",e=>new ec(e),"PRIVATE")),Ge(new Be("heartbeat",e=>new Uc(e),"PRIVATE")),Ue(rr,Wr,n),Ue(rr,Wr,"esm2017"),Ue("fire-js","")}Bc("");var jc="firebase",$c="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ue(jc,$c,"app");function pr(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function As(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hc=As,Rs=new mt("auth","Firebase",As());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jr=new dr("@firebase/auth");function un(n,...e){Jr.logLevel<=ae.ERROR&&Jr.error(`Auth (${Sn}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(n,...e){throw hr(n,...e)}function Fe(n,...e){return hr(n,...e)}function Os(n,e,t){const r=Object.assign(Object.assign({},Hc()),{[e]:t});return new mt("auth","Firebase",r).create(e,{appName:n.name})}function Vc(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Oe(n,"argument-error"),Os(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function hr(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Rs.create(n,...e)}function q(n,e,...t){if(!n)throw hr(e,...t)}function qe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw un(e),new Error(e)}function Ke(n,e){n||qe(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=new Map;function We(n){Ke(n instanceof Function,"Expected a class definition");let e=Xr.get(n);return e?(Ke(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Xr.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(n,e){const t=Rt(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(qt(o,e!=null?e:{}))return i;Oe(i,"already-initialized")}return t.initialize({options:e})}function Wc(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(We);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wn(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Gc(){return Zr()==="http:"||Zr()==="https:"}function Zr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Gc()||ys()||"connection"in navigator)?navigator.onLine:!0}function Yc(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ke(t>e,"Short delay should be less than long delay!"),this.isMobile=yl()||kl()}get(){return Kc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mr(n,e){Ke(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;qe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;qe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;qe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xc=new Qt(3e4,6e4);function en(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ot(n,e,t,r,i={}){return Ps(n,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=Zt(Object.assign({key:n.config.apiKey},s)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Ns.fetch()(Ls(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function Ps(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Jc),e);try{const i=new Zc(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw cn(n,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw cn(n,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw cn(n,"email-already-in-use",s);if(l==="USER_DISABLED")throw cn(n,"user-disabled",s);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Os(n,u,c);Oe(n,u)}}catch(i){if(i instanceof $e)throw i;Oe(n,"network-request-failed",{message:String(i)})}}async function xn(n,e,t,r,i={}){const o=await Ot(n,e,t,r,i);return"mfaPendingCredential"in o&&Oe(n,"multi-factor-auth-required",{_serverResponse:o}),o}function Ls(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?mr(n.config,i):`${n.config.apiScheme}://${i}`}class Zc{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Fe(this.auth,"network-request-failed")),Xc.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function cn(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Fe(n,e,r);return i.customData._tokenResponse=t,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qc(n,e){return Ot(n,"POST","/v1/accounts:delete",e)}async function eu(n,e){return Ot(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jt(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function tu(n,e=!1){const t=Pe(n),r=await t.getIdToken(e),i=gr(r);q(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:jt(Hn(i.auth_time)),issuedAtTime:jt(Hn(i.iat)),expirationTime:jt(Hn(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Hn(n){return Number(n)*1e3}function gr(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return un("JWT malformed, contained fewer than 3 sections"),null;try{const i=bs(t);return i?JSON.parse(i):(un("Failed to decode base64 JWT payload"),null)}catch(i){return un("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function nu(n){const e=gr(n);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gt(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof $e&&ru(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function ru({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=jt(this.lastLoginAt),this.creationTime=jt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _n(n){var e;const t=n.auth,r=await n.getIdToken(),i=await Gt(n,eu(t,{idToken:r}));q(i==null?void 0:i.users.length,t,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?au(o.providerUserInfo):[],a=su(n.providerData,s),l=n.isAnonymous,c=!(n.email&&o.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Ds(o.createdAt,o.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function ou(n){const e=Pe(n);await _n(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function su(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function au(n){return n.map(e=>{var{providerId:t}=e,r=pr(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lu(n,e){const t=await Ps(n,{},async()=>{const r=Zt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,s=Ls(n,i,"/v1/token",`key=${o}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ns.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):nu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await lu(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,s=new Kt;return r&&(q(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(q(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(q(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Kt,this.toJSON())}_performRefresh(){return qe("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(n,e){q(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class at{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=pr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new iu(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Ds(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await Gt(this,this.stsTokenManager.getToken(this.auth,e));return q(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return tu(this,e)}reload(){return ou(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new at(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await _n(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Gt(this,Qc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,s,a,l,c,u;const d=(r=t.displayName)!==null&&r!==void 0?r:void 0,f=(i=t.email)!==null&&i!==void 0?i:void 0,p=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,w=(s=t.photoURL)!==null&&s!==void 0?s:void 0,v=(a=t.tenantId)!==null&&a!==void 0?a:void 0,y=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,I=(c=t.createdAt)!==null&&c!==void 0?c:void 0,E=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:k,emailVerified:C,isAnonymous:$,providerData:N,stsTokenManager:D}=t;q(k&&D,e,"internal-error");const P=Kt.fromJSON(this.name,D);q(typeof k=="string",e,"internal-error"),Xe(d,e.name),Xe(f,e.name),q(typeof C=="boolean",e,"internal-error"),q(typeof $=="boolean",e,"internal-error"),Xe(p,e.name),Xe(w,e.name),Xe(v,e.name),Xe(y,e.name),Xe(I,e.name),Xe(E,e.name);const F=new at({uid:k,auth:e,email:f,emailVerified:C,displayName:d,isAnonymous:$,photoURL:w,phoneNumber:p,tenantId:v,stsTokenManager:P,createdAt:I,lastLoginAt:E});return N&&Array.isArray(N)&&(F.providerData=N.map(z=>Object.assign({},z))),y&&(F._redirectEventId=y),F}static async _fromIdTokenResponse(e,t,r=!1){const i=new Kt;i.updateFromServerResponse(t);const o=new at({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await _n(o),o}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ms{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ms.type="NONE";const Qr=Ms;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(n,e,t){return`firebase:${n}:${e}:${t}`}class Et{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=dn(this.userKey,i.apiKey,o),this.fullPersistenceKey=dn("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?at._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Et(We(Qr),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let o=i[0]||We(Qr);const s=dn(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(s);if(u){const d=at._fromJSON(e,u);c!==o&&(a=d),o=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new Et(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==o)try{await c._remove(s)}catch{}})),new Et(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(zs(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Us(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(js(e))return"Blackberry";if($s(e))return"Webos";if(br(e))return"Safari";if((e.includes("chrome/")||Fs(e))&&!e.includes("edge/"))return"Chrome";if(Bs(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Us(n=ke()){return/firefox\//i.test(n)}function br(n=ke()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Fs(n=ke()){return/crios\//i.test(n)}function zs(n=ke()){return/iemobile/i.test(n)}function Bs(n=ke()){return/android/i.test(n)}function js(n=ke()){return/blackberry/i.test(n)}function $s(n=ke()){return/webos/i.test(n)}function An(n=ke()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function cu(n=ke()){var e;return An(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function uu(){return Il()&&document.documentMode===10}function Hs(n=ke()){return An(n)||Bs(n)||$s(n)||js(n)||/windows phone/i.test(n)||zs(n)}function du(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vs(n,e=[]){let t;switch(n){case"Browser":t=ei(ke());break;case"Worker":t=`${ei(ke())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Sn}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ti(this),this.idTokenSubscription=new ti(this),this.beforeStateQueue=new fu(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Rs,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=We(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Et.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l==null?void 0:l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await _n(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Yc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Pe(e):null;return t&&q(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(We(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new mt("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&We(e)||this._popupRedirectResolver;q(t,this,"argument-error"),this.redirectPersistenceManager=await Et.create(this,[We(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return q(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vs(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function tn(n){return Pe(n)}class ti{constructor(e){this.auth=e,this.observer=null,this.addObserver=Al(t=>this.observer=t)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function hu(n,e,t){const r=tn(n);q(r._canInitEmulator,r,"emulator-config-failed"),q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(t!=null&&t.disableWarnings),o=qs(e),{host:s,port:a}=mu(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||gu()}function qs(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function mu(n){const e=qs(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:ni(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:ni(s)}}}function ni(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function gu(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return qe("not implemented")}_getIdTokenResponse(e){return qe("not implemented")}_linkToIdToken(e,t){return qe("not implemented")}_getReauthenticationResolver(e){return qe("not implemented")}}async function bu(n,e){return Ot(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wu(n,e){return xn(n,"POST","/v1/accounts:signInWithPassword",en(n,e))}async function _u(n,e){return Ot(n,"POST","/v1/accounts:sendOobCode",en(n,e))}async function yu(n,e){return _u(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vu(n,e){return xn(n,"POST","/v1/accounts:signInWithEmailLink",en(n,e))}async function ku(n,e){return xn(n,"POST","/v1/accounts:signInWithEmailLink",en(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt extends wr{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Yt(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Yt(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return wu(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return vu(e,{email:this._email,oobCode:this._password});default:Oe(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return bu(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ku(e,{idToken:t,email:this._email,oobCode:this._password});default:Oe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tt(n,e){return xn(n,"POST","/v1/accounts:signInWithIdp",en(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Iu="http://localhost";class Ye extends wr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ye(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Oe("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=pr(t,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Ye(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Tt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Tt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Tt(e,t)}buildRequest(){const e={requestUri:Iu,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Zt(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eu(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Tu(n){const e=Mt(Ut(n)).link,t=e?Mt(Ut(e)).deep_link_id:null,r=Mt(Ut(n)).deep_link_id;return(r?Mt(Ut(r)).link:null)||r||t||e||n}class Rn{constructor(e){var t,r,i,o,s,a;const l=Mt(Ut(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,d=Eu((i=l.mode)!==null&&i!==void 0?i:null);q(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=Tu(e);try{return new Rn(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(){this.providerId=Nt.PROVIDER_ID}static credential(e,t){return Yt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Rn.parseLink(t);return q(r,"argument-error"),Yt._fromEmailAndCode(e,r.code,r.tenantId)}}Nt.PROVIDER_ID="password";Nt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Nt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends _r{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class $t extends Pt{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return q("providerId"in t&&"signInMethod"in t,"argument-error"),Ye._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return q(e.idToken||e.accessToken,"argument-error"),Ye._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return $t.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return $t.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:o,nonce:s,providerId:a}=e;if(!r&&!i&&!t&&!o||!a)return null;try{return new $t(a)._credential({idToken:t,accessToken:r,nonce:s,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze extends Pt{constructor(){super("facebook.com")}static credential(e){return Ye._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ze.credential(e.oauthAccessToken)}catch{return null}}}Ze.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ze.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends Pt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ye._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Ve.credentialFromTaggedObject(e)}static credentialFromError(e){return Ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Ve.credential(t,r)}catch{return null}}}Ve.GOOGLE_SIGN_IN_METHOD="google.com";Ve.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends Pt{constructor(){super("github.com")}static credential(e){return Ye._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qe.credential(e.oauthAccessToken)}catch{return null}}}Qe.GITHUB_SIGN_IN_METHOD="github.com";Qe.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et extends Pt{constructor(){super("twitter.com")}static credential(e,t){return Ye._fromParams({providerId:et.PROVIDER_ID,signInMethod:et.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return et.credentialFromTaggedObject(e)}static credentialFromError(e){return et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return et.credential(t,r)}catch{return null}}}et.TWITTER_SIGN_IN_METHOD="twitter.com";et.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await at._fromIdTokenResponse(e,r,i),s=ri(r);return new St({user:o,providerId:s,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=ri(r);return new St({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function ri(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends $e{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,yn.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new yn(e,t,r,i)}}function Ws(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?yn._fromErrorAndOperation(n,o,e,r):o})}async function Cu(n,e,t=!1){const r=await Gt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return St._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Su(n,e,t=!1){const{auth:r}=n,i="reauthenticate";try{const o=await Gt(n,Ws(r,i,e,n),t);q(o.idToken,r,"internal-error");const s=gr(o.idToken);q(s,r,"internal-error");const{sub:a}=s;return q(n.uid===a,r,"user-mismatch"),St._forOperation(n,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&Oe(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gs(n,e,t=!1){const r="signIn",i=await Ws(n,r,e),o=await St._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}async function xu(n,e){return Gs(tn(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Au(n,e,t){var r;q(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),q(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(q(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(q(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ru(n,e,t){const r=Pe(n),i={requestType:"EMAIL_SIGNIN",email:e};q(t.handleCodeInApp,r,"argument-error"),t&&Au(r,i,t),await yu(r,i)}function Ou(n,e){const t=Rn.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function Nu(n,e,t){const r=Pe(n),i=Nt.credentialWithLink(e,t||wn());return q(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),xu(r,i)}function Pu(n,e,t,r){return Pe(n).onIdTokenChanged(e,t,r)}function Lu(n,e,t){return Pe(n).beforeAuthStateChanged(e,t)}function Du(n,e,t,r){return Pe(n).onAuthStateChanged(e,t,r)}function Mu(n){return Pe(n).signOut()}const vn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(vn,"1"),this.storage.removeItem(vn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uu(){const n=ke();return br(n)||An(n)}const Fu=1e3,zu=10;class Ys extends Ks{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Uu()&&du(),this.fallbackToPolling=Hs(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const s=this.storage.getItem(r);!t&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);uu()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,zu):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},Fu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ys.type="LOCAL";const Bu=Ys;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Js extends Ks{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Js.type="SESSION";const Xs=Js;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ju(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new On(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async c=>c(t.origin,o)),l=await ju(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}On.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yr(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const c=yr("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(f.data.response);break;default:clearTimeout(u),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ze(){return window}function Hu(n){ze().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zs(){return typeof ze().WorkerGlobalScope<"u"&&typeof ze().importScripts=="function"}async function Vu(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function qu(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Wu(){return Zs()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs="firebaseLocalStorageDb",Gu=1,kn="firebaseLocalStorage",ea="fbase_key";class nn{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Nn(n,e){return n.transaction([kn],e?"readwrite":"readonly").objectStore(kn)}function Ku(){const n=indexedDB.deleteDatabase(Qs);return new nn(n).toPromise()}function or(){const n=indexedDB.open(Qs,Gu);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(kn,{keyPath:ea})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(kn)?e(r):(r.close(),await Ku(),e(await or()))})})}async function ii(n,e,t){const r=Nn(n,!0).put({[ea]:e,value:t});return new nn(r).toPromise()}async function Yu(n,e){const t=Nn(n,!1).get(e),r=await new nn(t).toPromise();return r===void 0?null:r.value}function oi(n,e){const t=Nn(n,!0).delete(e);return new nn(t).toPromise()}const Ju=800,Xu=3;class ta{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await or(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Xu)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Zs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=On._getInstance(Wu()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Vu(),!this.activeServiceWorker)return;this.sender=new $u(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((t=r[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||qu()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await or();return await ii(e,vn,"1"),await oi(e,vn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>ii(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Yu(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>oi(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Nn(i,!1).getAll();return new nn(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ju)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ta.type="LOCAL";const Zu=ta;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qu(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function ed(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=Fe("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",Qu().appendChild(r)})}function td(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new Qt(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function na(n,e){return e?We(e):(q(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr extends wr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Tt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Tt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Tt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function nd(n){return Gs(n.auth,new vr(n),n.bypassAuthState)}function rd(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),Su(t,new vr(n),n.bypassAuthState)}async function id(n){const{auth:e,user:t}=n;return q(t,e,"internal-error"),Cu(t,new vr(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nd;case"linkViaPopup":case"linkViaRedirect":return id;case"reauthViaPopup":case"reauthViaRedirect":return rd;default:Oe(this.auth,"internal-error")}}resolve(e){Ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ke(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const od=new Qt(2e3,1e4);async function ia(n,e,t){const r=tn(n);Vc(n,e,_r);const i=na(r,t);return new ot(r,"signInViaPopup",e,i).executeNotNull()}class ot extends ra{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,ot.currentPopupAction&&ot.currentPopupAction.cancel(),ot.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){Ke(this.filter.length===1,"Popup operations only handle one event");const e=yr();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Fe(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Fe(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ot.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Fe(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,od.get())};e()}}ot.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sd="pendingRedirect",fn=new Map;class ad extends ra{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=fn.get(this.auth._key());if(!e){try{const r=await ld(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}fn.set(this.auth._key(),e)}return this.bypassAuthState||fn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ld(n,e){const t=dd(e),r=ud(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function cd(n,e){fn.set(n._key(),e)}function ud(n){return We(n._redirectPersistence)}function dd(n){return dn(sd,n.config.apiKey,n.name)}async function fd(n,e,t=!1){const r=tn(n),i=na(r,e),s=await new ad(r,i,t).execute();return s&&!t&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pd=10*60*1e3;class hd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!md(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!oa(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Fe(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pd&&this.cachedEventUids.clear(),this.cachedEventUids.has(si(e))}saveEventToCache(e){this.cachedEventUids.add(si(e)),this.lastProcessedEventTime=Date.now()}}function si(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function oa({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function md(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return oa(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gd(n,e={}){return Ot(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bd=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,wd=/^https?/;async function _d(n){if(n.config.emulator)return;const{authorizedDomains:e}=await gd(n);for(const t of e)try{if(yd(t))return}catch{}Oe(n,"unauthorized-domain")}function yd(n){const e=wn(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const s=new URL(n);return s.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&s.hostname===r}if(!wd.test(t))return!1;if(bd.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vd=new Qt(3e4,6e4);function ai(){const n=ze().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function kd(n){return new Promise((e,t)=>{var r,i,o;function s(){ai(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ai(),t(Fe(n,"network-request-failed"))},timeout:vd.get()})}if(!((i=(r=ze().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=ze().gapi)===null||o===void 0)&&o.load)s();else{const a=td("iframefcb");return ze()[a]=()=>{gapi.load?s():t(Fe(n,"network-request-failed"))},ed(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw pn=null,e})}let pn=null;function Id(n){return pn=pn||kd(n),pn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ed=new Qt(5e3,15e3),Td="__/auth/iframe",Cd="emulator/auth/iframe",Sd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},xd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ad(n){const e=n.config;q(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?mr(e,Cd):`https://${n.config.authDomain}/${Td}`,r={apiKey:e.apiKey,appName:n.name,v:Sn},i=xd.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Zt(r).slice(1)}`}async function Rd(n){const e=await Id(n),t=ze().gapi;return q(t,n,"internal-error"),e.open({where:document.body,url:Ad(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Sd,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Fe(n,"network-request-failed"),a=ze().setTimeout(()=>{o(s)},Ed.get());function l(){ze().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Od={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Nd=500,Pd=600,Ld="_blank",Dd="http://localhost";class li{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Md(n,e,t,r=Nd,i=Pd){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Od),{width:r.toString(),height:i.toString(),top:o,left:s}),c=ke().toLowerCase();t&&(a=Fs(c)?Ld:t),Us(c)&&(e=e||Dd,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[p,w])=>`${f}${p}=${w},`,"");if(cu(c)&&a!=="_self")return Ud(e||"",a),new li(null);const d=window.open(e||"",a,u);q(d,n,"popup-blocked");try{d.focus()}catch{}return new li(d)}function Ud(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fd="__/auth/handler",zd="emulator/auth/handler";function ci(n,e,t,r,i,o){q(n.config.authDomain,n,"auth-domain-config-required"),q(n.config.apiKey,n,"invalid-api-key");const s={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Sn,eventId:i};if(e instanceof _r){e.setDefaultLanguage(n.languageCode),s.providerId=e.providerId||"",xl(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(o||{}))s[l]=c}if(e instanceof Pt){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(s.scopes=l.join(","))}n.tenantId&&(s.tid=n.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${Bd(n)}?${Zt(a).slice(1)}`}function Bd({config:n}){return n.emulator?mr(n,zd):`https://${n.authDomain}/${Fd}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vn="webStorageSupport";class jd{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Xs,this._completeRedirectFn=fd,this._overrideRedirectResult=cd}async _openPopup(e,t,r,i){var o;Ke((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=ci(e,t,r,wn(),i);return Md(e,s,yr())}async _openRedirect(e,t,r,i){return await this._originValidation(e),Hu(ci(e,t,r,wn(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(Ke(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await Rd(e),r=new hd(e);return t.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Vn,{type:Vn},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Vn];s!==void 0&&t(!!s),Oe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=_d(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Hs()||br()||An()}}const $d=jd;var ui="@firebase/auth",di="0.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vd(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function qd(n){Ge(new Be("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{q(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),q(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const c={apiKey:o,authDomain:s,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vs(n)},u=new pu(a,l,c);return Wc(u,t),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ge(new Be("auth-internal",e=>{const t=tn(e.getProvider("auth").getImmediate());return(r=>new Hd(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ue(ui,di,Vd(n)),Ue(ui,di,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd=5*60,Gd=_s("authIdTokenMaxAge")||Wd;let fi=null;const Kd=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>Gd)return;const i=t==null?void 0:t.token;fi!==i&&(fi=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Yd(n=Oc()){const e=Rt(n,"auth");if(e.isInitialized())return e.getImmediate();const t=qc(n,{popupRedirectResolver:$d,persistence:[Zu,Bu,Xs]}),r=_s("authTokenSyncURL");if(r){const o=Kd(r);Lu(t,o,()=>o(t.currentUser)),Pu(t,s=>o(s))}const i=ws("auth");return i&&hu(t,`http://${i}`),t}qd("Browser");const sa="@firebase/installations",kr="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aa=1e4,la=`w:${kr}`,ca="FIS_v2",Jd="https://firebaseinstallations.googleapis.com/v1",Xd=60*60*1e3,Zd="installations",Qd="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},dt=new mt(Zd,Qd,ef);function ua(n){return n instanceof $e&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function da({projectId:n}){return`${Jd}/projects/${n}/installations`}function fa(n){return{token:n.token,requestStatus:2,expiresIn:nf(n.expiresIn),creationTime:Date.now()}}async function pa(n,e){const r=(await e.json()).error;return dt.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ha({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function tf(n,{refreshToken:e}){const t=ha(n);return t.append("Authorization",rf(e)),t}async function ma(n){const e=await n();return e.status>=500&&e.status<600?n():e}function nf(n){return Number(n.replace("s","000"))}function rf(n){return`${ca} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function of({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=da(n),i=ha(n),o=e.getImmediate({optional:!0});if(o){const c=await o.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const s={fid:t,authVersion:ca,appId:n.appId,sdkVersion:la},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await ma(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||t,registrationStatus:2,refreshToken:c.refreshToken,authToken:fa(c.authToken)}}else throw await pa("Create Installation",l)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ga(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af=/^[cdef][\w-]{21}$/,sr="";function lf(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=cf(n);return af.test(t)?t:sr}catch{return sr}}function cf(n){return sf(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pn(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=new Map;function wa(n,e){const t=Pn(n);_a(t,e),uf(t,e)}function _a(n,e){const t=ba.get(n);if(!!t)for(const r of t)r(e)}function uf(n,e){const t=df();t&&t.postMessage({key:n,fid:e}),ff()}let st=null;function df(){return!st&&"BroadcastChannel"in self&&(st=new BroadcastChannel("[Firebase] FID Change"),st.onmessage=n=>{_a(n.data.key,n.data.fid)}),st}function ff(){ba.size===0&&st&&(st.close(),st=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf="firebase-installations-database",hf=1,ft="firebase-installations-store";let qn=null;function Ir(){return qn||(qn=Ts(pf,hf,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(ft)}}})),qn}async function In(n,e){const t=Pn(n),i=(await Ir()).transaction(ft,"readwrite"),o=i.objectStore(ft),s=await o.get(t);return await o.put(e,t),await i.done,(!s||s.fid!==e.fid)&&wa(n,e.fid),e}async function ya(n){const e=Pn(n),r=(await Ir()).transaction(ft,"readwrite");await r.objectStore(ft).delete(e),await r.done}async function Ln(n,e){const t=Pn(n),i=(await Ir()).transaction(ft,"readwrite"),o=i.objectStore(ft),s=await o.get(t),a=e(s);return a===void 0?await o.delete(t):await o.put(a,t),await i.done,a&&(!s||s.fid!==a.fid)&&wa(n,a.fid),a}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Er(n){let e;const t=await Ln(n.appConfig,r=>{const i=mf(r),o=gf(n,i);return e=o.registrationPromise,o.installationEntry});return t.fid===sr?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function mf(n){const e=n||{fid:lf(),registrationStatus:0};return va(e)}function gf(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(dt.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=bf(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:wf(n)}:{installationEntry:e}}async function bf(n,e){try{const t=await of(n,e);return In(n.appConfig,t)}catch(t){throw ua(t)&&t.customData.serverCode===409?await ya(n.appConfig):await In(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function wf(n){let e=await pi(n.appConfig);for(;e.registrationStatus===1;)await ga(100),e=await pi(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Er(n);return r||t}return e}function pi(n){return Ln(n,e=>{if(!e)throw dt.create("installation-not-found");return va(e)})}function va(n){return _f(n)?{fid:n.fid,registrationStatus:0}:n}function _f(n){return n.registrationStatus===1&&n.registrationTime+aa<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yf({appConfig:n,heartbeatServiceProvider:e},t){const r=vf(n,t),i=tf(n,t),o=e.getImmediate({optional:!0});if(o){const c=await o.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const s={installation:{sdkVersion:la,appId:n.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await ma(()=>fetch(r,a));if(l.ok){const c=await l.json();return fa(c)}else throw await pa("Generate Auth Token",l)}function vf(n,{fid:e}){return`${da(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tr(n,e=!1){let t;const r=await Ln(n.appConfig,o=>{if(!ka(o))throw dt.create("not-registered");const s=o.authToken;if(!e&&Ef(s))return o;if(s.requestStatus===1)return t=kf(n,e),o;{if(!navigator.onLine)throw dt.create("app-offline");const a=Cf(o);return t=If(n,a),a}});return t?await t:r.authToken}async function kf(n,e){let t=await hi(n.appConfig);for(;t.authToken.requestStatus===1;)await ga(100),t=await hi(n.appConfig);const r=t.authToken;return r.requestStatus===0?Tr(n,e):r}function hi(n){return Ln(n,e=>{if(!ka(e))throw dt.create("not-registered");const t=e.authToken;return Sf(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function If(n,e){try{const t=await yf(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await In(n.appConfig,r),t}catch(t){if(ua(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await ya(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await In(n.appConfig,r)}throw t}}function ka(n){return n!==void 0&&n.registrationStatus===2}function Ef(n){return n.requestStatus===2&&!Tf(n)}function Tf(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Xd}function Cf(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function Sf(n){return n.requestStatus===1&&n.requestTime+aa<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xf(n){const e=n,{installationEntry:t,registrationPromise:r}=await Er(e);return r?r.catch(console.error):Tr(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Af(n,e=!1){const t=n;return await Rf(t),(await Tr(t,e)).token}async function Rf(n){const{registrationPromise:e}=await Er(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Of(n){if(!n||!n.options)throw Wn("App Configuration");if(!n.name)throw Wn("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Wn(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Wn(n){return dt.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ia="installations",Nf="installations-internal",Pf=n=>{const e=n.getProvider("app").getImmediate(),t=Of(e),r=Rt(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},Lf=n=>{const e=n.getProvider("app").getImmediate(),t=Rt(e,Ia).getImmediate();return{getId:()=>xf(t),getToken:i=>Af(t,i)}};function Df(){Ge(new Be(Ia,Pf,"PUBLIC")),Ge(new Be(Nf,Lf,"PRIVATE"))}Df();Ue(sa,kr);Ue(sa,kr,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ar="analytics",Mf="firebase_id",Uf="origin",Ff=60*1e3,zf="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Cr="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Te=new dr("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Re=new mt("analytics","Analytics",Bf);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(n){if(!n.startsWith(Cr)){const e=Re.create("invalid-gtag-resource",{gtagURL:n});return Te.warn(e.message),""}return n}function Ea(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function $f(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function Hf(n,e){const t=$f("firebase-js-sdk-policy",{createScriptURL:jf}),r=document.createElement("script"),i=`${Cr}?l=${n}&id=${e}`;r.src=t?t==null?void 0:t.createScriptURL(i):i,r.async=!0,document.head.appendChild(r)}function Vf(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function qf(n,e,t,r,i,o){const s=r[i];try{if(s)await e[s];else{const l=(await Ea(t)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){Te.error(a)}n("config",i,o)}async function Wf(n,e,t,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await Ea(t);for(const l of s){const c=a.find(d=>d.measurementId===l),u=c&&e[c.appId];if(u)o.push(u);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),n("event",r,i||{})}catch(o){Te.error(o)}}function Gf(n,e,t,r){async function i(o,s,a){try{o==="event"?await Wf(n,e,t,s,a):o==="config"?await qf(n,e,t,r,s,a):o==="consent"?n("consent","update",a):n("set",s)}catch(l){Te.error(l)}}return i}function Kf(n,e,t,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=Gf(o,n,e,t),{gtagCore:o,wrappedGtag:window[i]}}function Yf(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Cr)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jf=30,Xf=1e3;class Zf{constructor(e={},t=Xf){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ta=new Zf;function Qf(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function ep(n){var e;const{appId:t,apiKey:r}=n,i={method:"GET",headers:Qf(r)},o=zf.replace("{app-id}",t),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw Re.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function tp(n,e=Ta,t){const{appId:r,apiKey:i,measurementId:o}=n.options;if(!r)throw Re.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw Re.create("no-api-key")}const s=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new ip;return setTimeout(async()=>{a.abort()},t!==void 0?t:Ff),Ca({appId:r,apiKey:i,measurementId:o},s,a,e)}async function Ca(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=Ta){var o;const{appId:s,measurementId:a}=n;try{await np(r,e)}catch(l){if(a)return Te.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:s,measurementId:a};throw l}try{const l=await ep(n);return i.deleteThrottleMetadata(s),l}catch(l){const c=l;if(!rp(c)){if(i.deleteThrottleMetadata(s),a)return Te.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:a};throw l}const u=Number((o=c==null?void 0:c.customData)===null||o===void 0?void 0:o.httpStatus)===503?$r(t,i.intervalMillis,Jf):$r(t,i.intervalMillis),d={throttleEndTimeMillis:Date.now()+u,backoffCount:t+1};return i.setThrottleMetadata(s,d),Te.debug(`Calling attemptFetch again in ${u} millis`),Ca(n,d,r,i)}}function np(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(o),r(Re.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function rp(n){if(!(n instanceof $e)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class ip{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function op(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const o=await e,s=Object.assign(Object.assign({},r),{send_to:o});n("event",t,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sp(){if(vs())try{await ks()}catch(n){return Te.warn(Re.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return Te.warn(Re.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function ap(n,e,t,r,i,o,s){var a;const l=tp(n);l.then(p=>{t[p.measurementId]=p.appId,n.options.measurementId&&p.measurementId!==n.options.measurementId&&Te.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>Te.error(p)),e.push(l);const c=sp().then(p=>{if(p)return r.getId()}),[u,d]=await Promise.all([l,c]);Yf(o)||Hf(o,u.measurementId),i("js",new Date);const f=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return f[Uf]="firebase",f.update=!0,d!=null&&(f[Mf]=d),i("config",u.measurementId,f),u.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lp{constructor(e){this.app=e}_delete(){return delete Ht[this.app.options.appId],Promise.resolve()}}let Ht={},mi=[];const gi={};let Gn="dataLayer",cp="gtag",bi,Sa,wi=!1;function up(){const n=[];if(ys()&&n.push("This is a browser extension environment."),El()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=Re.create("invalid-analytics-context",{errorInfo:e});Te.warn(t.message)}}function dp(n,e,t){up();const r=n.options.appId;if(!r)throw Re.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Te.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Re.create("no-api-key");if(Ht[r]!=null)throw Re.create("already-exists",{id:r});if(!wi){Vf(Gn);const{wrappedGtag:o,gtagCore:s}=Kf(Ht,mi,gi,Gn,cp);Sa=o,bi=s,wi=!0}return Ht[r]=ap(n,mi,gi,e,bi,Gn,t),new lp(n)}function fp(n,e={}){const t=Rt(n,ar);if(t.isInitialized()){const i=t.getImmediate();if(qt(e,t.getOptions()))return i;throw Re.create("already-initialized")}return t.initialize({options:e})}function xa(n,e,t,r){n=Pe(n),op(Sa,Ht[n.app.options.appId],e,t,r).catch(i=>Te.error(i))}const _i="@firebase/analytics",yi="0.9.5";function pp(){Ge(new Be(ar,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return dp(r,i,t)},"PUBLIC")),Ge(new Be("analytics-internal",n,"PRIVATE")),Ue(_i,yi),Ue(_i,yi,"esm2017");function n(e){try{const t=e.getProvider(ar).getImmediate();return{logEvent:(r,i,o)=>xa(t,r,i,o)}}catch(t){throw Re.create("interop-component-reg-failed",{reason:t})}}}pp();const hp={apiKey:"AIzaSyBns4UUCKIfb_3xOesTSezA9GbEyuIU7XA",authDomain:"fireship-app.firebaseapp.com",databaseURL:"https://fireship-app.firebaseio.com",projectId:"fireship-app",storageBucket:"fireship-app.appspot.com",messagingSenderId:"176605045081",appId:"1:176605045081:web:d87a63bd943e3032",measurementId:"G-VTJV5CVC6K"},Aa=Cs(hp),je=Yd(Aa),mp=fp(Aa);function gp(){xa(mp,"page_view",{page_location:window.location.href})}async function bp(){const n=ia(je,new Ve);return xr(n)}async function wp(){const n=new $t("apple.com"),e=ia(je,n);return xr(e)}async function _p(n,e){const t={url:e!=null?e:`${ul}/dashboard`,handleCodeInApp:!0};let r,i;try{await Ru(je,n,t),window.localStorage.setItem("emailForSignIn",n),r=`Magic signin link sent to ${n}`}catch(o){i=o.message}return{res:r,serverError:i}}async function yp(){if(Ou(je,window.location.href)){let n=window.localStorage.getItem("emailForSignIn");n||(n=window.prompt("Please provide your email for confirmation"));const e=Nu(je,n,window.location.href);return window.localStorage.removeItem("emailForSignIn"),xr(e)}else return{res:null,serverError:"Invalid link"}}async function Sr(){await Mu(je),be.set({icon:"\u{1F44B}",message:"Thanks for hanging out, see ya around!"})}async function xr(n){let e,t;try{e=await n,Ae.set(null),be.set({message:"Access granted! Logged into the mainframe!",type:"success"})}catch(r){t=r.message,console.error(r),be.set({message:t,type:"error"})}return{res:e,serverError:t}}async function we(n){var e;try{if(!je.currentUser){Ae.set("signin"),be.set({message:"You must be signed in first",type:"info"});return}const{getFunctions:t,httpsCallable:r}=await lt(()=>import("./index.esm.b56aa430.js"),[]),i=t();return(await r(i,"userAPI")(n)).data}catch(t){console.log(t),be.set({message:(e=t==null?void 0:t.message)!=null?e:"Unknown Error. Contact hello@fireship.io for help",type:"error"})}}async function Ra(n,e=0){const t=je.currentUser;if(!t){be.set({message:"You must be logged in to track progress",type:"error"});return}const{doc:r,setDoc:i,getFirestore:o}=await lt(()=>import("./index.esm.d9a6bbfe.js"),[]),s=o(),a=r(s,`progress/${t.uid}`);i(a,{[n]:100+e},{merge:!0})}async function vp(n){const e=je.currentUser,{doc:t,setDoc:r,deleteField:i,getFirestore:o}=await lt(()=>import("./index.esm.d9a6bbfe.js"),[]),s=o(),a=t(s,`progress/${e.uid}`);r(a,{[n]:i()},{merge:!0})}function kp(){let n;window.addEventListener("flamethrower:router:fetch",()=>{var e;n=(e=document.getElementById("sidebar"))==null?void 0:e.scrollTop}),window.addEventListener("flamethrower:router:end",()=>{const e=document.getElementById("sidebar");e==null||e.scrollTo({top:n})})}const Ft=Ce(!0),Kn="himom";let vt="";function Ip(n){n.ctrlKey&&n.key==="b"&&(console.log("ctrlb"),n.preventDefault(),Ft.update(e=>!e)),n.key==="Escape"&&Ae.set(null),(n.key==="/"||n.ctrlKey&&n.key==="k")&&(n.preventDefault(),Ae.set("search")),Kn.includes(n.key)?(vt+=n.key,vt===Kn&&(console.log("HI MOM!"),Ae.set("himom"),vt=""),Kn.includes(vt)||(vt="")):vt=""}window.addEventListener("keydown",Ip);function Ep(n){return{c(){this.c=T},m:T,p:T,i:T,o:T,d:T}}function Tp(n,e,t){let{permalink:r}=e,{next:i}=e,{prev:o}=e,{vimeo:s}=e,{youtube:a}=e,{free:l}=e;return ht(()=>{Tn.set({permalink:r,next:i,prev:o,vimeo:s,free:l,youtube:a})}),n.$$set=c=>{"permalink"in c&&t(0,r=c.permalink),"next"in c&&t(1,i=c.next),"prev"in c&&t(2,o=c.prev),"vimeo"in c&&t(3,s=c.vimeo),"youtube"in c&&t(4,a=c.youtube),"free"in c&&t(5,l=c.free)},[r,i,o,s,a,l]}class Cp extends Z{constructor(e){super(),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},Tp,Ep,X,{permalink:0,next:1,prev:2,vimeo:3,youtube:4,free:5},null),e&&(e.target&&h(e.target,this,e.anchor),e.props&&(this.$set(e.props),J()))}static get observedAttributes(){return["permalink","next","prev","vimeo","youtube","free"]}get permalink(){return this.$$.ctx[0]}set permalink(e){this.$$set({permalink:e}),J()}get next(){return this.$$.ctx[1]}set next(e){this.$$set({next:e}),J()}get prev(){return this.$$.ctx[2]}set prev(e){this.$$set({prev:e}),J()}get vimeo(){return this.$$.ctx[3]}set vimeo(e){this.$$set({vimeo:e}),J()}get youtube(){return this.$$.ctx[4]}set youtube(e){this.$$set({youtube:e}),J()}get free(){return this.$$.ctx[5]}set free(e){this.$$set({free:e}),J()}}customElements.define("global-data",Cp);const xt={"react-next-firebase":{id:"react-next-firebase",price:"price_1Lkgo6BF7AptWZlcBFVoputL",amount:20,legacy_sku:"sku_ItHZfVSApb3xkT"},js:{id:"js",price:"price_1M6lsOBF7AptWZlcVCGjrDvX",amount:20},supabase:{id:"supabase",price:"price_1M7tSgBF7AptWZlcKAduj6Gr",amount:20},git:{id:"git",price:"price_1LkgzcBF7AptWZlcF5NJQgKd",amount:10,legacy_sku:"sku_KBHTYbTWv1Hmb7"},angular:{id:"angular",price:"price_1Lkh0WBF7AptWZlcYUEGDHLz",amount:20,legacy_sku:"sku_Fn7Ojng8TLwnC4"},"flutter-firebase":{id:"flutter-firebase",price:"price_1Lkh1TBF7AptWZlcrWJiK3PT",amount:20,legacy_sku:"sku_FJCsh7mvjI83Kz"},dart:{id:"dart",price:"price_1Lkh20BF7AptWZlcqyViQgv0",amount:10,legacy_sku:"sku_KOyOvlrmLikRz8"},"vscode-tricks":{id:"vscode-tricks",price:"price_1Lkh2mBF7AptWZlcR0GhtjwH",amount:10,legacy_sku:"sku_Kf57qdqUerVTUS"},"firestore-data-modeling":{id:"firestore-data-modeling",price:"price_1Lkh3VBF7AptWZlcNiWVmDLI",amount:10,legacy_sku:"sku_FJEdx5Tz9dPrvm"},"firebase-security":{id:"firebase-security",price:"price_1Lkh4EBF7AptWZlcFv4ZvmIR",amount:10,legacy_sku:"sku_IVIjaiCRlivYD3"},"stripe-js":{id:"stripe-js",price:"price_1LnAhnBF7AptWZlc3VgezH7X",amount:20,legacy_sku:"sku_HG8dqucZV4x6F2"},lifetime:{id:"lifetime",price:"price_1LkhByBF7AptWZlcIUg2TjVg",amount:399},enterprise:{id:"enterprise",price:"price_1LkhByBF7AptWZlcx5vOdAnG",amount:299},month:{id:"pro",price:"price_1LkhBxBF7AptWZlcJB2I2IUt",amount:29},quarter:{id:"pro",price:"price_1LkhByBF7AptWZlcg9Zjbmw6",amount:69},year:{id:"pro",price:"price_1LkhByBF7AptWZlcVY5TwKdS",amount:199}};function Sp(n){var e;return(e=Object.values(xt).find(t=>t.legacy_sku===n))==null?void 0:e.id}function Ar(n=window.location.pathname){const e=n.split("/"),t=e.findIndex(r=>r==="courses")+1;return e==null?void 0:e[t]}const Rr=Ce(null),pt=Ce(null),At=Ce(null),lr=Ce(null);let Yn,Jn,Xn;Du(je,async n=>{if(Rr.set(n),n){const{doc:e,onSnapshot:t,getFirestore:r}=await lt(()=>import("./index.esm.d9a6bbfe.js"),[]),i=r(),o=e(i,`users/${n.uid}`),s=e(i,`progress/${n.uid}`),a=e(i,`seats/${n.uid}`);Yn=t(o,l=>{var c;pt.set(l.data()),(c=l.data())!=null&&c.enterprise&&(Xn=t(a,u=>{lr.set(u.data())}))}),Jn=t(s,l=>{At.set(l.data())})}else Yn&&Yn(),Jn&&Jn(),Xn&&Xn(),pt.set(null),At.set(null),lr.set(null)});const Jt=hs([pt,Tn],([n,e])=>{var r,i,o;const t=Ar(e==null?void 0:e.permalink);return!!((n==null?void 0:n.is_pro)||((r=n==null?void 0:n.courses)==null?void 0:r[t])||((o=n==null?void 0:n.products)==null?void 0:o[(i=xt[t])==null?void 0:i.legacy_sku]))});function vi(n,e,t){const r=n.slice();return r[8]=e[t],r}function ki(n){var r;let e=((r=n[4])==null?void 0:r.email)+"",t;return{c(){t=O(e)},m(i,o){h(i,t,o)},p(i,o){var s;o&16&&e!==(e=((s=i[4])==null?void 0:s.email)+"")&&H(t,e)},d(i){i&&g(t)}}}function Ii(n){let e,t,r,i;return{c(){e=b("img"),Ct(e.src,t=n[2])||_(e,"src",t),_(e,"alt","avatar"),_(e,"referrerpolicy","no-referrer"),zr(e,"max-width","100%"),zr(e,"border-radius","9999px")},m(o,s){h(o,e,s),r||(i=B(e,"error",n[6]),r=!0)},p(o,s){s&4&&!Ct(e.src,t=o[2])&&_(e,"src",t)},d(o){o&&g(e),r=!1,i()}}}function Ei(n){var r;let e=((r=n[4])==null?void 0:r.displayName)+"",t;return{c(){t=O(e)},m(i,o){h(i,t,o)},p(i,o){var s;o&16&&e!==(e=((s=i[4])==null?void 0:s.displayName)+"")&&H(t,e)},d(i){i&&g(t)}}}function Ti(n){var r;let e=((r=n[4])==null?void 0:r.uid)+"",t;return{c(){t=O(e)},m(i,o){h(i,t,o)},p(i,o){var s;o&16&&e!==(e=((s=i[4])==null?void 0:s.uid)+"")&&H(t,e)},d(i){i&&g(t)}}}function Ci(n){var r,i;let e=Li((i=(r=n[5])==null?void 0:r.xp)!=null?i:0)+"",t;return{c(){t=O(e)},m(o,s){h(o,t,s)},p(o,s){var a,l;s&32&&e!==(e=Li((l=(a=o[5])==null?void 0:a.xp)!=null?l:0)+"")&&H(t,e)},d(o){o&&g(t)}}}function Si(n){var r,i,o;let e=((o=(i=(r=n[5])==null?void 0:r.xp)==null?void 0:i.toLocaleString())!=null?o:0)+"",t;return{c(){t=O(e)},m(s,a){h(s,t,a)},p(s,a){var l,c,u;a&32&&e!==(e=((u=(c=(l=s[5])==null?void 0:l.xp)==null?void 0:c.toLocaleString())!=null?u:0)+"")&&H(t,e)},d(s){s&&g(t)}}}function xi(n){var r;let e,t=((r=n[1])==null?void 0:r.expires)&&Ai(n);return{c(){t&&t.c(),e=re()},m(i,o){t&&t.m(i,o),h(i,e,o)},p(i,o){var s;(s=i[1])!=null&&s.expires?t?t.p(i,o):(t=Ai(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(i){t&&t.d(i),i&&g(e)}}}function Ai(n){var i;let e,t=Di((i=n[1])==null?void 0:i.expires)+"",r;return{c(){e=O("Your PRO access expires "),r=O(t)},m(o,s){h(o,e,s),h(o,r,s)},p(o,s){var a;s&2&&t!==(t=Di((a=o[1])==null?void 0:a.expires)+"")&&H(r,t)},d(o){o&&g(e),o&&g(r)}}}function Ri(n){var r;let e,t=((r=n[3])==null?void 0:r.length)&&Oi(n);return{c(){t&&t.c(),e=re()},m(i,o){t&&t.m(i,o),h(i,e,o)},p(i,o){var s;(s=i[3])!=null&&s.length?t?t.p(i,o):(t=Oi(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(i){t&&t.d(i),i&&g(e)}}}function Oi(n){let e,t,r,i=n[3],o=[];for(let s=0;s<i.length;s+=1)o[s]=Ni(vi(n,i,s));return{c(){e=b("h3"),e.textContent="Purchased Courses",t=S(),r=b("ul");for(let s=0;s<o.length;s+=1)o[s].c()},m(s,a){h(s,e,a),h(s,t,a),h(s,r,a);for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(r,null)},p(s,a){if(a&8){i=s[3];let l;for(l=0;l<i.length;l+=1){const c=vi(s,i,l);o[l]?o[l].p(c,a):(o[l]=Ni(c),o[l].c(),o[l].m(r,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=i.length}},d(s){s&&g(e),s&&g(t),s&&g(r),rt(o,s)}}}function Ni(n){let e,t,r=n[8]+"",i,o;return{c(){e=b("li"),t=b("a"),i=O(r),_(t,"href",o=`/courses/${n[8]}`)},m(s,a){h(s,e,a),m(e,t),m(t,i)},p(s,a){a&8&&r!==(r=s[8]+"")&&H(i,r),a&8&&o!==(o=`/courses/${s[8]}`)&&_(t,"href",o)},d(s){s&&g(e)}}}function Pi(n){var o,s;let e,t=((s=(o=n[1])==null?void 0:o.pro_status)!=null?s:"basic")+"",r,i;return{c(){var a,l;e=b("span"),r=O(t),_(e,"class",i=(l=(a=n[1])==null?void 0:a.pro_status)!=null?l:"basic")},m(a,l){h(a,e,l),m(e,r)},p(a,l){var c,u,d,f;l&2&&t!==(t=((u=(c=a[1])==null?void 0:c.pro_status)!=null?u:"basic")+"")&&H(r,t),l&2&&i!==(i=(f=(d=a[1])==null?void 0:d.pro_status)!=null?f:"basic")&&_(e,"class",i)},d(a){a&&g(e)}}}function xp(n){let e,t,r,i,o,s,a,l,c,u=n[0]==="email"&&ki(n),d=n[0]==="photoURL"&&Ii(n),f=n[0]==="displayName"&&Ei(n),p=n[0]==="uid"&&Ti(n),w=n[0]==="xp"&&Ci(n),v=n[0]==="xp-raw"&&Si(n),y=n[0]==="expires"&&xi(n),I=n[0]==="courses"&&Ri(n),E=n[0]==="status"&&Pi(n);return{c(){u&&u.c(),e=S(),d&&d.c(),t=S(),f&&f.c(),r=S(),p&&p.c(),i=S(),w&&w.c(),o=S(),v&&v.c(),s=S(),y&&y.c(),a=S(),I&&I.c(),l=S(),E&&E.c(),c=re(),this.c=T},m(k,C){u&&u.m(k,C),h(k,e,C),d&&d.m(k,C),h(k,t,C),f&&f.m(k,C),h(k,r,C),p&&p.m(k,C),h(k,i,C),w&&w.m(k,C),h(k,o,C),v&&v.m(k,C),h(k,s,C),y&&y.m(k,C),h(k,a,C),I&&I.m(k,C),h(k,l,C),E&&E.m(k,C),h(k,c,C)},p(k,[C]){k[0]==="email"?u?u.p(k,C):(u=ki(k),u.c(),u.m(e.parentNode,e)):u&&(u.d(1),u=null),k[0]==="photoURL"?d?d.p(k,C):(d=Ii(k),d.c(),d.m(t.parentNode,t)):d&&(d.d(1),d=null),k[0]==="displayName"?f?f.p(k,C):(f=Ei(k),f.c(),f.m(r.parentNode,r)):f&&(f.d(1),f=null),k[0]==="uid"?p?p.p(k,C):(p=Ti(k),p.c(),p.m(i.parentNode,i)):p&&(p.d(1),p=null),k[0]==="xp"?w?w.p(k,C):(w=Ci(k),w.c(),w.m(o.parentNode,o)):w&&(w.d(1),w=null),k[0]==="xp-raw"?v?v.p(k,C):(v=Si(k),v.c(),v.m(s.parentNode,s)):v&&(v.d(1),v=null),k[0]==="expires"?y?y.p(k,C):(y=xi(k),y.c(),y.m(a.parentNode,a)):y&&(y.d(1),y=null),k[0]==="courses"?I?I.p(k,C):(I=Ri(k),I.c(),I.m(l.parentNode,l)):I&&(I.d(1),I=null),k[0]==="status"?E?E.p(k,C):(E=Pi(k),E.c(),E.m(c.parentNode,c)):E&&(E.d(1),E=null)},i:T,o:T,d(k){u&&u.d(k),k&&g(e),d&&d.d(k),k&&g(t),f&&f.d(k),k&&g(r),p&&p.d(k),k&&g(i),w&&w.d(k),k&&g(o),v&&v.d(k),k&&g(s),y&&y.d(k),k&&g(a),I&&I.d(k),k&&g(l),E&&E.d(k),k&&g(c)}}}function Li(n){return Intl.NumberFormat("en",{notation:"compact"}).format(n)}function Di(n){if(!n)return"never";let e=new Intl.RelativeTimeFormat("en",{numeric:"auto"}),t=-Math.floor((Date.now()-n*1e3)/1e3)/86400;return e.format(Math.floor(t),"day")}function Ap(n,e,t){let r,i,o,s;oe(n,pt,d=>t(1,i=d)),oe(n,Rr,d=>t(4,o=d)),oe(n,At,d=>t(5,s=d));var a;let{field:l}=e,c=(a=o==null?void 0:o.photoURL)!==null&&a!==void 0?a:"/img/ui/avatar.svg";const u=()=>t(2,c="/img/ui/avatar.svg");return n.$$set=d=>{"field"in d&&t(0,l=d.field)},n.$$.update=()=>{n.$$.dirty&2&&t(3,r=[...Object.keys((i==null?void 0:i.courses)||{}),...Object.keys((i==null?void 0:i.products)||{}).map(Sp)].filter(Boolean))},[l,i,c,r,o,s,u]}class Rp extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=`h3{font-family:cubano, sans-serif;font-weight:400;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))
}a{--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity));text-decoration-line:none
}ul{margin-bottom:2.5rem
}.basic{--tw-text-opacity:1;color:rgb(108 121 131 / var(--tw-text-opacity))
}.active{--tw-text-opacity:1;color:rgb(34 197 94 / var(--tw-text-opacity))
}.cancelled{--tw-text-opacity:1;color:rgb(234 179 8 / var(--tw-text-opacity))
}.enterprise{--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity))
}.lifetime{--tw-text-opacity:1;color:rgb(34 197 94 / var(--tw-text-opacity))
}`,this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},Ap,xp,X,{field:0},null),e&&(e.target&&h(e.target,this,e.anchor),e.props&&(this.$set(e.props),J()))}static get observedAttributes(){return["field"]}get field(){return this.$$.ctx[0]}set field(e){this.$$set({field:e}),J()}}customElements.define("user-data",Rp);function Op(n){let e,t,r;return{c(){e=b("button"),e.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)"><path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"></path><path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"></path><path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"></path><path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"></path></g></svg>
    Sign in with Google`,this.c=T},m(i,o){h(i,e,o),t||(r=B(e,"click",bp),t=!0)},p:T,i:T,o:T,d(i){i&&g(e),t=!1,r()}}}class Np extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=`button{margin-top:0.125rem;margin-bottom:0.125rem;display:inline-flex;width:100%;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:1rem;padding-right:1rem;padding-top:0.75rem;padding-bottom:0.75rem;font-family:sofia-pro, sans-serif;font-size:1rem;line-height:1.5rem;--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity));--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}svg{position:relative;top:0.25rem;margin-right:0.5rem;height:1.25rem;width:1.25rem
}`,this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},null,Op,X,{},null),e&&e.target&&h(e.target,this,e.anchor)}}customElements.define("google-signin",Np);function Pp(n){let e,t,r;return{c(){e=b("button"),e.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="814px" height="1000px" viewBox="0 0 814 1000" enable-background="new 0 0 814 1000" xml:space="preserve"><path d="M788.1,340.9c-5.8,4.5-108.2,62.2-108.2,190.5c0,148.4,130.3,200.9,134.2,202.2c-0.6,3.2-20.7,71.9-68.7,141.9  c-42.8,61.6-87.5,123.1-155.5,123.1s-85.5-39.5-164-39.5c-76.5,0-103.7,40.8-165.9,40.8s-105.6-57-155.5-127  C46.7,790.7,0,663,0,541.8c0-194.4,126.4-297.5,250.8-297.5c66.1,0,121.2,43.4,162.7,43.4c39.5,0,101.1-46,176.3-46  C618.3,241.7,720.7,244.3,788.1,340.9z M554.1,159.4c31.1-36.9,53.1-88.1,53.1-139.3c0-7.1-0.6-14.3-1.9-20.1  c-50.6,1.9-110.8,33.7-147.1,75.8c-28.5,32.4-55.1,83.6-55.1,135.5c0,7.8,1.3,15.6,1.9,18.1c3.2,0.6,8.4,1.3,13.6,1.3  C464,230.7,521.1,200.3,554.1,159.4z"></path></svg>
    Sign in with Apple`,this.c=T},m(i,o){h(i,e,o),t||(r=B(e,"click",wp),t=!0)},p:T,i:T,o:T,d(i){i&&g(e),t=!1,r()}}}class Lp extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=`button{margin-top:0.125rem;margin-bottom:0.125rem;display:inline-flex;width:100%;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:1rem;padding-right:1rem;padding-top:0.75rem;padding-bottom:0.75rem;font-family:sofia-pro, sans-serif;font-size:1rem;line-height:1.5rem;--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity));--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}svg{position:relative;top:0.125rem;margin-right:0.5rem;height:1.25rem;width:1.25rem
}`,this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},null,Pp,X,{},null),e&&e.target&&h(e.target,this,e.anchor)}}customElements.define("apple-signin",Lp);function Mi(n){let e,t;return{c(){e=b("p"),t=O(n[5]),_(e,"class","error")},m(r,i){h(r,e,i),m(e,t)},p(r,i){i&32&&H(t,r[5])},d(r){r&&g(e)}}}function Ui(n){let e,t;return{c(){e=b("p"),t=O(n[4]),_(e,"class","success")},m(r,i){h(r,e,i),m(e,t)},p(r,i){i&16&&H(t,r[4])},d(r){r&&g(e)}}}function Dp(n){let e,t,r,i,o,s,a,l,c,u,d,f=n[5]&&Mi(n),p=n[4]&&Ui(n);return{c(){e=b("form"),t=b("label"),t.textContent="Email",r=S(),i=b("input"),o=S(),f&&f.c(),s=S(),p&&p.c(),a=S(),l=b("input"),this.c=T,_(t,"for","email"),_(i,"class","input"),_(i,"type","email"),_(i,"name","email"),i.required=!0,te(i,"touched",n[2]),_(l,"class","btn"),_(l,"type","submit"),l.value=c=n[3]?"sending...":"send",te(l,"disabled",!n[1]||n[3])},m(w,v){h(w,e,v),m(e,t),m(e,r),m(e,i),n[8](i),m(e,o),f&&f.m(e,null),m(e,s),p&&p.m(e,null),m(e,a),m(e,l),u||(d=[B(i,"input",n[6]),B(i,"focus",n[9],{once:!0}),B(e,"submit",Ja(n[7]))],u=!0)},p(w,[v]){v&4&&te(i,"touched",w[2]),w[5]?f?f.p(w,v):(f=Mi(w),f.c(),f.m(e,s)):f&&(f.d(1),f=null),w[4]?p?p.p(w,v):(p=Ui(w),p.c(),p.m(e,a)):p&&(p.d(1),p=null),v&8&&c!==(c=w[3]?"sending...":"send")&&(l.value=c),v&10&&te(l,"disabled",!w[1]||w[3])},i:T,o:T,d(w){w&&g(e),n[8](null),f&&f.d(),p&&p.d(),u=!1,pe(d)}}}function Mp(n,e,t){var r=this&&this.__awaiter||function(w,v,y,I){function E(k){return k instanceof y?k:new y(function(C){C(k)})}return new(y||(y=Promise))(function(k,C){function $(P){try{D(I.next(P))}catch(F){C(F)}}function N(P){try{D(I.throw(P))}catch(F){C(F)}}function D(P){P.done?k(P.value):E(P.value).then($,N)}D((I=I.apply(w,v||[])).next())})};let i,o=!1,s=!1,a=!1,l,c;function u(){t(1,o=i.validity.valid)}function d(w){return r(this,void 0,void 0,function*(){const v=i.value,y=window.location.href;t(3,a=!0);const{res:I,serverError:E}=yield _p(v,y);t(3,a=!1),t(5,c=E),t(4,l=I)})}function f(w){ct[w?"unshift":"push"](()=>{i=w,t(0,i)})}return[i,o,s,a,l,c,u,d,f,()=>t(2,s=!0)]}class Up extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=`.input{display:block;width:100%;border-radius:0px;border-bottom-width:4px;border-top-width:0px;border-right-width:0px;border-left-width:0px;--tw-border-opacity:1;border-bottom-color:rgb(255 255 255 / var(--tw-border-opacity));background-color:rgb(18 24 27 / var(--tw-bg-opacity));--tw-bg-opacity:0.3;padding-top:0.75rem;padding-bottom:0.75rem;padding-left:0.25rem;padding-right:0.25rem;font-size:1.125rem;line-height:1.75rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px
}.input:focus-visible{outline:2px solid transparent;outline-offset:2px
}label{font-weight:700;--tw-text-opacity:1;color:rgb(178 190 205 / var(--tw-text-opacity))
}input[type='email']:valid{--tw-border-opacity:1;border-bottom-color:rgb(34 197 94 / var(--tw-border-opacity))
}.btn{margin-top:0.5rem;margin-bottom:0.5rem;display:inline-block;width:auto;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));padding-left:1rem;padding-right:1rem;padding-top:0.75rem;padding-bottom:0.75rem;text-align:center;font-family:sofia-pro, sans-serif;font-weight:700;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}.btn:hover{--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity))
}.disabled{cursor:not-allowed;opacity:0.5
}.touched{border-bottom-width:4px;--tw-border-opacity:1;border-bottom-color:rgb(59 130 246 / var(--tw-border-opacity))
}.error{font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(239 68 68 / var(--tw-text-opacity))
}.success{font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(34 197 94 / var(--tw-text-opacity))
}`,this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},Mp,Dp,X,{},null),e&&e.target&&h(e.target,this,e.anchor)}}customElements.define("email-signin",Up);function Fp(n){let e,t,r;return{c(){e=b("span"),e.innerHTML="<slot></slot>",this.c=T},m(i,o){h(i,e,o),t||(r=B(e,"click",Sr),t=!0)},p:T,i:T,o:T,d(i){i&&g(e),t=!1,r()}}}class zp extends Z{constructor(e){super(),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},null,Fp,X,{},null),e&&e.target&&h(e.target,this,e.anchor)}}customElements.define("sign-out",zp);function Bp(n){let e;return{c(){e=b("modal-dialog"),e.innerHTML=`<h1>Login</h1> 
  <p>With magic email link:</p> 
  <email-signin></email-signin> 
  <p>Or with account:</p> 
  <google-signin></google-signin> 
  <apple-signin></apple-signin> 
  <p class="footer">By signing up, you agree to Fireship&#39;s Terms of Service &amp; Privacy Policy.</p>`,this.c=T,Ee(e,"name","signin"),Ee(e,"esc","true")},m(t,r){h(t,e,r)},p:T,i:T,o:T,d(t){t&&g(e)}}}class jp extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=`.footer{font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(108 121 131 / var(--tw-text-opacity))
}`,this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},null,Bp,X,{},null),e&&e.target&&h(e.target,this,e.anchor)}}customElements.define("app-signin",jp);function Fi(n){let e;return{c(){e=b("slot"),_(e,"name","pro")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function zi(n){let e;return{c(){e=b("slot"),_(e,"name","basic")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function Bi(n){let e;return{c(){e=b("slot"),_(e,"name","lifetime")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function ji(n){let e;return{c(){e=b("slot"),_(e,"name","enterprise")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function $i(n){let e;return{c(){e=b("slot"),_(e,"name","canceled")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function $p(n){var d,f,p,w,v;let e,t,r,i,o,s=((d=n[0])==null?void 0:d.is_pro)&&Fi(),a=!((f=n[0])!=null&&f.is_pro)&&zi(),l=((p=n[0])==null?void 0:p.pro_status)==="lifetime"&&Bi(),c=((w=n[0])==null?void 0:w.enterprise)&&ji(),u=((v=n[0])==null?void 0:v.pro_status)==="canceled"&&$i();return{c(){s&&s.c(),e=S(),a&&a.c(),t=S(),l&&l.c(),r=S(),c&&c.c(),i=S(),u&&u.c(),o=re(),this.c=T},m(y,I){s&&s.m(y,I),h(y,e,I),a&&a.m(y,I),h(y,t,I),l&&l.m(y,I),h(y,r,I),c&&c.m(y,I),h(y,i,I),u&&u.m(y,I),h(y,o,I)},p(y,[I]){var E,k,C,$,N;(E=y[0])!=null&&E.is_pro?s||(s=Fi(),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),(k=y[0])!=null&&k.is_pro?a&&(a.d(1),a=null):a||(a=zi(),a.c(),a.m(t.parentNode,t)),((C=y[0])==null?void 0:C.pro_status)==="lifetime"?l||(l=Bi(),l.c(),l.m(r.parentNode,r)):l&&(l.d(1),l=null),($=y[0])!=null&&$.enterprise?c||(c=ji(),c.c(),c.m(i.parentNode,i)):c&&(c.d(1),c=null),((N=y[0])==null?void 0:N.pro_status)==="canceled"?u||(u=$i(),u.c(),u.m(o.parentNode,o)):u&&(u.d(1),u=null)},i:T,o:T,d(y){s&&s.d(y),y&&g(e),a&&a.d(y),y&&g(t),l&&l.d(y),y&&g(r),c&&c.d(y),y&&g(i),u&&u.d(y),y&&g(o)}}}function Hp(n,e,t){let r;return oe(n,pt,i=>t(0,r=i)),[r]}class Vp extends Z{constructor(e){super(),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},Hp,$p,X,{},null),e&&e.target&&h(e.target,this,e.anchor)}}customElements.define("if-pro",Vp);function qp(n){let e;return{c(){e=b("slot"),_(e,"name","signed-out")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function Wp(n){let e;return{c(){e=b("slot")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function Gp(n){let e;function t(o,s){return o[0]?Wp:qp}let r=t(n),i=r(n);return{c(){i.c(),e=re(),this.c=T},m(o,s){i.m(o,s),h(o,e,s)},p(o,[s]){r!==(r=t(o))&&(i.d(1),i=r(o),i&&(i.c(),i.m(e.parentNode,e)))},i:T,o:T,d(o){i.d(o),o&&g(e)}}}function Kp(n,e,t){let r;return oe(n,Rr,i=>t(0,r=i)),[r]}class Yp extends Z{constructor(e){super(),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},Kp,Gp,X,{},null),e&&e.target&&h(e.target,this,e.anchor)}}customElements.define("if-user",Yp);function Jp(n){let e;return{c(){e=b("slot"),_(e,"name","denied")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function Xp(n){let e;return{c(){e=b("slot"),_(e,"name","granted")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function Zp(n){let e;function t(o,s){return o[0]||o[1]?Xp:Jp}let r=t(n),i=r(n);return{c(){i.c(),e=re(),this.c=T},m(o,s){i.m(o,s),h(o,e,s)},p(o,[s]){r!==(r=t(o))&&(i.d(1),i=r(o),i&&(i.c(),i.m(e.parentNode,e)))},i:T,o:T,d(o){i.d(o),o&&g(e)}}}function Qp(n,e,t){let r;oe(n,Jt,o=>t(1,r=o));let{free:i=!1}=e;return n.$$set=o=>{"free"in o&&t(0,i=o.free)},[i,r]}class eh extends Z{constructor(e){super(),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},Qp,Zp,X,{free:0},null),e&&(e.target&&h(e.target,this,e.anchor),e.props&&(this.$set(e.props),J()))}static get observedAttributes(){return["free"]}get free(){return this.$$.ctx[0]}set free(e){this.$$set({free:e}),J()}}customElements.define("if-access",eh);function Hi(n){let e;return{c(){e=b("span"),e.textContent="PRO",_(e,"class","label green"),_(e,"title","all access pass")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function Vi(n){let e;return{c(){e=b("span"),e.textContent="Lifer",_(e,"class","label green"),_(e,"title","you are a total chad")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function qi(n){let e;return{c(){e=b("span"),e.textContent="SUDO",_(e,"class","label blue"),_(e,"title","enterprise account")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function Wi(n){let e;return{c(){e=b("span"),e.textContent="Vet",_(e,"class","label orange"),_(e,"title","thank you for being a former member")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function Gi(n){let e;return{c(){e=b("span"),e.textContent="Basic",_(e,"class","label gray"),_(e,"title","upgrade for all access")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function th(n){var I,E,k,C,$,N,D,P;let e,t,r,i,o,s,a,l,c,u=((k=(E=(I=n[1])==null?void 0:I.xp)==null?void 0:E.toLocaleString("en",{notation:"compact"}))!=null?k:0)+"",d,f=((C=n[0])==null?void 0:C.pro_status)==="active"&&Hi(),p=(($=n[0])==null?void 0:$.pro_status)==="lifetime"&&Vi(),w=((N=n[0])==null?void 0:N.pro_status)==="enterprise"&&qi(),v=((D=n[0])==null?void 0:D.pro_status)==="canceled"&&Wi(),y=!((P=n[0])!=null&&P.pro_status)&&Gi();return{c(){e=b("div"),t=b("user-data"),r=S(),f&&f.c(),i=S(),p&&p.c(),o=S(),w&&w.c(),s=S(),v&&v.c(),a=S(),y&&y.c(),l=S(),c=b("span"),d=O(u),this.c=T,Ee(t,"field","photoURL"),_(e,"class","wrap"),_(c,"class","xp"),_(c,"title","experience points")},m(F,z){h(F,e,z),m(e,t),m(e,r),f&&f.m(e,null),m(e,i),p&&p.m(e,null),m(e,o),w&&w.m(e,null),m(e,s),v&&v.m(e,null),m(e,a),y&&y.m(e,null),h(F,l,z),h(F,c,z),m(c,d)},p(F,[z]){var U,M,V,W,ie,he,Se,ue;((U=F[0])==null?void 0:U.pro_status)==="active"?f||(f=Hi(),f.c(),f.m(e,i)):f&&(f.d(1),f=null),((M=F[0])==null?void 0:M.pro_status)==="lifetime"?p||(p=Vi(),p.c(),p.m(e,o)):p&&(p.d(1),p=null),((V=F[0])==null?void 0:V.pro_status)==="enterprise"?w||(w=qi(),w.c(),w.m(e,s)):w&&(w.d(1),w=null),((W=F[0])==null?void 0:W.pro_status)==="canceled"?v||(v=Wi(),v.c(),v.m(e,a)):v&&(v.d(1),v=null),(ie=F[0])!=null&&ie.pro_status?y&&(y.d(1),y=null):y||(y=Gi(),y.c(),y.m(e,null)),z&2&&u!==(u=((ue=(Se=(he=F[1])==null?void 0:he.xp)==null?void 0:Se.toLocaleString("en",{notation:"compact"}))!=null?ue:0)+"")&&H(d,u)},i:T,o:T,d(F){F&&g(e),f&&f.d(),p&&p.d(),w&&w.d(),v&&v.d(),y&&y.d(),F&&g(l),F&&g(c)}}}function nh(n,e,t){let r,i;return oe(n,pt,o=>t(0,r=o)),oe(n,At,o=>t(1,i=o)),[r,i]}class rh extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=`.wrap{position:relative;top:0.25rem;width:3rem;overflow:clip
}.label{position:absolute;bottom:0px;left:50%;margin-left:auto;margin-right:auto;display:block;--tw-translate-x:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));cursor:help;border-radius:0.125rem;padding-left:0.5rem;padding-right:0.5rem;text-align:center;font-family:cubano, sans-serif;font-size:0.75rem;line-height:1rem;--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}.label.green{--tw-bg-opacity:1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))
}.label.gray{--tw-bg-opacity:1;background-color:rgb(42 46 53 / var(--tw-bg-opacity))
}.label.blue{--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity))
}.label.orange{--tw-bg-opacity:1;background-color:rgb(249 115 22 / var(--tw-bg-opacity))
}.xp{position:absolute;top:0px;right:-2rem;min-width:5ch;cursor:help;border-radius:9999px;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity:0.5;padding:0.25rem;text-align:center;font-size:0.875rem;line-height:1.25rem;font-weight:700;--tw-text-opacity:1;color:rgb(34 197 94 / var(--tw-text-opacity));--tw-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}`,this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},nh,th,X,{},null),e&&e.target&&h(e.target,this,e.anchor)}}customElements.define("user-avatar",rh);var ls;const Xt=Ce(JSON.parse((ls=localStorage==null?void 0:localStorage.autoplay)!=null?ls:!0));Xt.subscribe(n=>{localStorage&&(localStorage.autoplay=n)});const Or=Ce(!1);let Oa;window.addEventListener("flamethrower:router:fetch",n=>{Oa=setTimeout(()=>{Or.set(!0)},0)});window.addEventListener("flamethrower:router:end",n=>{clearTimeout(Oa),setTimeout(()=>{Or.set(!1)},400)});const zt=Ce("month"),Na=hs([Tn],([n])=>{const e=Ar(n==null?void 0:n.permalink);return e&&xt[e]});function ih(n){let e,t,r;return{c(){e=b("span"),e.textContent="change email",_(e,"class","info")},m(i,o){h(i,e,o),t||(r=B(e,"click",n[12]),t=!0)},p:T,d(i){i&&g(e),t=!1,r()}}}function oh(n){let e,t,r,i,o,s,a,l;function c(f,p){return f[2]?ah:sh}let u=c(n),d=u(n);return{c(){e=b("input"),t=S(),d.c(),r=S(),i=b("p"),o=O(`Be careful. If you enter the wrong email, you will not be able to access
    your account.
    `),s=b("span"),s.textContent="nevermind",_(e,"type","email"),_(e,"placeholder","new email"),e.required=!0,_(s,"class","info"),_(i,"class","warn")},m(f,p){h(f,e,p),fe(e,n[4]),n[9](e),h(f,t,p),d.m(f,p),h(f,r,p),h(f,i,p),m(i,o),m(i,s),a||(l=[B(e,"input",n[8]),B(e,"input",n[6]),B(s,"click",n[11])],a=!0)},p(f,p){p&16&&e.value!==f[4]&&fe(e,f[4]),u===(u=c(f))&&d?d.p(f,p):(d.d(1),d=u(f),d&&(d.c(),d.m(r.parentNode,r)))},d(f){f&&g(e),n[9](null),f&&g(t),d.d(f),f&&g(r),f&&g(i),a=!1,pe(l)}}}function sh(n){let e,t,r,i,o;return{c(){e=b("button"),t=O("change"),_(e,"class","btn btn-blue"),e.disabled=r=n[0]||!n[3]||!n[4]},m(s,a){h(s,e,a),m(e,t),i||(o=B(e,"click",n[10]),i=!0)},p(s,a){a&25&&r!==(r=s[0]||!s[3]||!s[4])&&(e.disabled=r)},d(s){s&&g(e),i=!1,o()}}}function ah(n){let e,t,r=n[0]?"loading...":"confirm change",i,o,s,a,l=n[0]&&Ki();return{c(){e=b("button"),l&&l.c(),t=S(),i=O(r),_(e,"class","btn btn-blue"),e.disabled=o=n[0]||!n[3]||!n[4]},m(c,u){h(c,e,u),l&&l.m(e,null),m(e,t),m(e,i),s||(a=B(e,"click",n[7]),s=!0)},p(c,u){c[0]?l||(l=Ki(),l.c(),l.m(e,t)):l&&(l.d(1),l=null),u&1&&r!==(r=c[0]?"loading...":"confirm change")&&H(i,r),u&25&&o!==(o=c[0]||!c[3]||!c[4])&&(e.disabled=o)},d(c){c&&g(e),l&&l.d(),s=!1,a()}}}function Ki(n){let e;return{c(){e=b("loading-spinner")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function lh(n){let e;function t(o,s){return o[1]?oh:ih}let r=t(n),i=r(n);return{c(){i.c(),e=re(),this.c=T},m(o,s){i.m(o,s),h(o,e,s)},p(o,[s]){r===(r=t(o))&&i?i.p(o,s):(i.d(1),i=r(o),i&&(i.c(),i.m(e.parentNode,e)))},i:T,o:T,d(o){i.d(o),o&&g(e)}}}function ch(n,e,t){var r=this&&this.__awaiter||function(I,E,k,C){function $(N){return N instanceof k?N:new k(function(D){D(N)})}return new(k||(k=Promise))(function(N,D){function P(U){try{z(C.next(U))}catch(M){D(M)}}function F(U){try{z(C.throw(U))}catch(M){D(M)}}function z(U){U.done?N(U.value):$(U.value).then(P,F)}z((C=C.apply(I,E||[])).next())})};let i=!1,o=!1,s=!1,a=!1,l="",c;function u(){t(3,a=c.validity.valid)}function d(){return r(this,void 0,void 0,function*(){t(0,i=!0),(yield we({fn:"changeEmail",payload:{email:l}}))&&(yield Sr(),be.set({message:"Email updated, please sign back in",type:"success"})),t(0,i=!1)})}function f(){l=this.value,t(4,l)}function p(I){ct[I?"unshift":"push"](()=>{c=I,t(5,c)})}return[i,o,s,a,l,c,u,d,f,p,()=>t(2,s=!0),()=>t(1,o=!1),()=>t(1,o=!0)]}class uh extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=`button{margin-top:0.125rem;margin-bottom:0.125rem;display:inline-flex;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));padding-left:1.25rem;padding-right:1.25rem;padding-top:0.5rem;padding-bottom:0.5rem;text-align:center;font-family:sofia-pro, sans-serif;font-size:0.875rem;line-height:1.25rem;font-weight:700;text-transform:uppercase;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));text-decoration-line:none;--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);outline:2px solid transparent;outline-offset:2px
}button:hover{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))
}button:disabled{cursor:not-allowed;opacity:0.7
}.info{cursor:pointer;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity))
}input{margin-top:1rem;margin-bottom:1rem;margin-right:0.75rem;width:100%;border-style:solid;--tw-border-opacity:1;border-color:rgb(42 46 53 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(18 24 27 / var(--tw-bg-opacity));padding:0.75rem;font-family:sofia-pro, sans-serif;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px
}.warn{font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(234 179 8 / var(--tw-text-opacity))
}`,this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},ch,lh,X,{},null),e&&e.target&&h(e.target,this,e.anchor)}}customElements.define("change-email",uh);function dh(n){let e,t,r;return{c(){e=b("span"),e.textContent="Delete this Account",_(e,"class","info")},m(i,o){h(i,e,o),t||(r=B(e,"click",n[7]),t=!0)},p:T,d(i){i&&g(e),t=!1,r()}}}function fh(n){let e,t,r=(n[1]?"terminating...":n[3])+"",i,o,s,a,l,c=n[1]&&Yi(),u=n[0]&&Ji(n);return{c(){e=b("button"),c&&c.c(),t=S(),i=O(r),o=S(),u&&u.c(),s=re(),_(e,"class","btn btn-red"),e.disabled=n[1]},m(d,f){h(d,e,f),c&&c.m(e,null),m(e,t),m(e,i),h(d,o,f),u&&u.m(d,f),h(d,s,f),a||(l=B(e,"click",n[6]),a=!0)},p(d,f){d[1]?c||(c=Yi(),c.c(),c.m(e,t)):c&&(c.d(1),c=null),f&10&&r!==(r=(d[1]?"terminating...":d[3])+"")&&H(i,r),f&2&&(e.disabled=d[1]),d[0]?u?u.p(d,f):(u=Ji(d),u.c(),u.m(s.parentNode,s)):u&&(u.d(1),u=null)},d(d){d&&g(e),c&&c.d(),d&&g(o),u&&u.d(d),d&&g(s),a=!1,l()}}}function Yi(n){let e;return{c(){e=b("loading-spinner")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function Ji(n){let e,t,r,i,o;return{c(){e=b("p"),t=O(`Final warning! Once you click this button there's no going back. All account data is lost forever. 
            `),r=b("span"),r.textContent="nevermind",_(r,"class","info"),_(e,"class","warn")},m(s,a){h(s,e,a),m(e,t),m(e,r),i||(o=B(r,"click",n[5]),i=!0)},p:T,d(s){s&&g(e),i=!1,o()}}}function ph(n){let e;function t(o,s){return o[2]?fh:dh}let r=t(n),i=r(n);return{c(){i.c(),e=re(),this.c=T},m(o,s){i.m(o,s),h(o,e,s)},p(o,[s]){r===(r=t(o))&&i?i.p(o,s):(i.d(1),i=r(o),i&&(i.c(),i.m(e.parentNode,e)))},i:T,o:T,d(o){i.d(o),o&&g(e)}}}function hh(n,e,t){let r;var i=this&&this.__awaiter||function(f,p,w,v){function y(I){return I instanceof w?I:new w(function(E){E(I)})}return new(w||(w=Promise))(function(I,E){function k(N){try{$(v.next(N))}catch(D){E(D)}}function C(N){try{$(v.throw(N))}catch(D){E(D)}}function $(N){N.done?I(N.value):y(N.value).then(k,C)}$((v=v.apply(f,p||[])).next())})};let o=!1,s=!1,a=!1;function l(){return i(this,void 0,void 0,function*(){t(1,o=!0),(yield we({fn:"deleteAccount",payload:{}}))&&(yield Sr(),be.set({message:"Account terminated, good luck in your future endeavors",type:"success"})),t(1,o=!1)})}function c(){t(2,s=!1),t(0,a=!1)}const u=()=>a?l():t(0,a=!0),d=()=>t(2,s=!0);return n.$$.update=()=>{n.$$.dirty&1&&t(3,r=a?"confirm destruction":"delete account")},[a,o,s,r,l,c,u,d]}class mh extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=`.btn{margin-top:0.125rem;margin-bottom:0.125rem;display:inline-flex;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgb(239 68 68 / var(--tw-bg-opacity));padding-left:1.25rem;padding-right:1.25rem;padding-top:0.5rem;padding-bottom:0.5rem;text-align:center;font-family:sofia-pro, sans-serif;font-size:0.875rem;line-height:1.25rem;font-weight:700;text-transform:uppercase;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));text-decoration-line:none;--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);outline:2px solid transparent;outline-offset:2px
}.btn:hover{--tw-bg-opacity:1;background-color:rgb(185 28 28 / var(--tw-bg-opacity))
}.btn:disabled{cursor:not-allowed;opacity:0.7
}.info{cursor:pointer;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity))
}.warn{font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(234 179 8 / var(--tw-text-opacity))
}`,this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},hh,ph,X,{},null),e&&e.target&&h(e.target,this,e.anchor)}}customElements.define("delete-account",mh);function gh(n){let e,t,r;return{c(){e=b("modal-action"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="svg-sm" viewBox="0 0 448 512"><path fill="currentColor" d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"></path></svg>',t=S(),r=b("span"),r.textContent="locked",Ee(e,"name","signin"),Ee(e,"type","open"),Ee(e,"class","purple"),_(r,"class","msg purple")},m(i,o){h(i,e,o),h(i,t,o),h(i,r,o)},p:T,d(i){i&&g(e),i&&g(t),i&&g(r)}}}function bh(n){let e;function t(o,s){var a;return(a=o[4])!=null&&a[o[0]]?_h:wh}let r=t(n),i=r(n);return{c(){i.c(),e=re()},m(o,s){i.m(o,s),h(o,e,s)},p(o,s){r===(r=t(o))&&i?i.p(o,s):(i.d(1),i=r(o),i&&(i.c(),i.m(e.parentNode,e)))},d(o){i.d(o),o&&g(e)}}}function wh(n){let e,t,r,i=n[1]?"pop quiz":"incomplete",o,s,a;return{c(){e=b("button"),e.innerHTML='<svg viewBox="0 0 512 512"><path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path></svg>',t=S(),r=b("span"),o=O(i),_(e,"class","incomplete"),_(r,"class","msg"),te(r,"pink",n[1])},m(l,c){h(l,e,c),h(l,t,c),h(l,r,c),m(r,o),s||(a=B(e,"click",n[7]),s=!0)},p(l,c){c&2&&i!==(i=l[1]?"pop quiz":"incomplete")&&H(o,i),c&2&&te(r,"pink",l[1])},d(l){l&&g(e),l&&g(t),l&&g(r),s=!1,a()}}}function _h(n){let e,t,r,i,o;return{c(){e=b("button"),e.innerHTML='<svg viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"></path></svg>',t=S(),r=b("span"),r.textContent="done",_(e,"class","complete"),_(r,"class","msg complete")},m(s,a){h(s,e,a),h(s,t,a),h(s,r,a),i||(o=B(e,"click",n[6]),i=!0)},p:T,d(s){s&&g(e),s&&g(t),s&&g(r),i=!1,o()}}}function yh(n){let e;function t(o,s){return o[2]||o[3]?bh:gh}let r=t(n),i=r(n);return{c(){e=b("span"),i.c(),this.c=T,_(e,"class","wrap")},m(o,s){h(o,e,s),i.m(e,null)},p(o,[s]){r===(r=t(o))&&i?i.p(o,s):(i.d(1),i=r(o),i&&(i.c(),i.m(e,null)))},i:T,o:T,d(o){o&&g(e),i.d()}}}function vh(n,e,t){let r,i;oe(n,Jt,f=>t(3,r=f)),oe(n,At,f=>t(4,i=f));var o=this&&this.__awaiter||function(f,p,w,v){function y(I){return I instanceof w?I:new w(function(E){E(I)})}return new(w||(w=Promise))(function(I,E){function k(N){try{$(v.next(N))}catch(D){E(D)}}function C(N){try{$(v.throw(N))}catch(D){E(D)}}function $(N){N.done?I(N.value):y(N.value).then(k,C)}$((v=v.apply(f,p||[])).next())})};let{route:s=window.location.pathname}=e,{quiz:a=!1}=e,{free:l=!1}=e;function c(f){return o(this,void 0,void 0,function*(){if(f){if(a){Ae.set("quiz");return}yield Ra(s)}else yield vp(s)})}const u=()=>c(!1),d=()=>c(!0);return n.$$set=f=>{"route"in f&&t(0,s=f.route),"quiz"in f&&t(1,a=f.quiz),"free"in f&&t(2,l=f.free)},[s,a,l,r,i,c,u,d]}class kh extends Z{constructor(e){super();const t=document.createElement("style");t.textContent="button{background:none;cursor:pointer;border-radius:9999px;border-style:none;outline:2px solid transparent;outline-offset:2px;transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}button:hover{--tw-translate-y:-0.125rem;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}svg{width:2rem}modal-action{cursor:pointer}.svg-sm{width:1.25rem}.msg{position:relative;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgb(234 179 8 / var(--tw-text-opacity))}.pink{--tw-text-opacity:1;color:rgb(236 72 153 / var(--tw-text-opacity))}.purple{--tw-text-opacity:1;color:rgb(168 85 247 / var(--tw-text-opacity))}.incomplete{fill:#b2becd}.incomplete:hover{fill:#22c55e}.complete{fill:#22c55e;--tw-text-opacity:1;color:rgb(34 197 94 / var(--tw-text-opacity))}.wrap{display:flex;min-width:48px;flex-direction:column;align-items:center;justify-content:center}",this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},vh,yh,X,{route:0,quiz:1,free:2},null),e&&(e.target&&h(e.target,this,e.anchor),e.props&&(this.$set(e.props),J()))}static get observedAttributes(){return["route","quiz","free"]}get route(){return this.$$.ctx[0]}set route(e){this.$$set({route:e}),J()}get quiz(){return this.$$.ctx[1]}set quiz(e){this.$$set({quiz:e}),J()}get free(){return this.$$.ctx[2]}set free(e){this.$$set({free:e}),J()}}customElements.define("mark-complete",kh);function Xi(n){let e;return{c(){e=b("span"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16" class="purple"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"></path></svg>',_(e,"class","wrap")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function Zi(n){let e;function t(o,s){var a;return(a=o[3])!=null&&a[o[0]]?Eh:Ih}let r=t(n),i=r(n);return{c(){i.c(),e=re()},m(o,s){i.m(o,s),h(o,e,s)},p(o,s){r!==(r=t(o))&&(i.d(1),i=r(o),i&&(i.c(),i.m(e.parentNode,e)))},d(o){i.d(o),o&&g(e)}}}function Ih(n){let e;return{c(){e=b("span"),e.innerHTML='<svg viewBox="0 0 512 512" width="18" height="18" class="gray"><path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path></svg>',_(e,"class","wrap")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function Eh(n){let e;return{c(){e=b("span"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="green" width="18" height="18"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"></path></svg>',_(e,"class","wrap")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function Th(n){let e,t,r=!n[1]&&!n[2]&&Xi(),i=(n[1]||n[2])&&Zi(n);return{c(){r&&r.c(),e=S(),i&&i.c(),t=re(),this.c=T},m(o,s){r&&r.m(o,s),h(o,e,s),i&&i.m(o,s),h(o,t,s)},p(o,[s]){!o[1]&&!o[2]?r||(r=Xi(),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),o[1]||o[2]?i?i.p(o,s):(i=Zi(o),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null)},i:T,o:T,d(o){r&&r.d(o),o&&g(e),i&&i.d(o),o&&g(t)}}}function Ch(n,e,t){let r,i;oe(n,Jt,a=>t(2,r=a)),oe(n,At,a=>t(3,i=a));let{route:o}=e,{free:s}=e;return n.$$set=a=>{"route"in a&&t(0,o=a.route),"free"in a&&t(1,s=a.free)},[o,s,r,i]}class Sh extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=`svg{margin-right:0.5rem;margin-top:0.25rem
}.wrap{margin-top:auto;margin-bottom:auto;margin-right:0px
}.gray{fill:#454e56
}.green{fill:#22c55e
}.purple{fill:#a855f7
}`,this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},Ch,Th,X,{route:0,free:1},null),e&&(e.target&&h(e.target,this,e.anchor),e.props&&(this.$set(e.props),J()))}static get observedAttributes(){return["route","free"]}get route(){return this.$$.ctx[0]}set route(e){this.$$set({route:e}),J()}get free(){return this.$$.ctx[1]}set free(e){this.$$set({free:e}),J()}}customElements.define("complete-icon",Sh);function Qi(n,e,t){const r=n.slice();return r[17]=e[t],r[19]=t,r}function xh(n){let e,t,r,i,o,s,a;return{c(){e=b("p"),t=b("span"),r=O("+"),i=O(n[4]),o=O(" XP"),s=S(),a=O(n[6]),_(t,"class","gain"),_(e,"class","green")},m(l,c){h(l,e,c),m(e,t),m(t,r),m(t,i),m(t,o),m(e,s),m(e,a)},p(l,c){c&16&&H(i,l[4]),c&64&&H(a,l[6])},d(l){l&&g(e)}}}function Ah(n){let e,t,r,i,o,s=n[2]&&n[2]!==n[0]&&eo(n),a=n[7],l=[];for(let c=0;c<a.length;c+=1)l[c]=to(Qi(n,a,c));return{c(){e=b("p"),s&&s.c(),t=S(),r=b("div"),r.innerHTML="<slot></slot>",i=S(),o=b("div");for(let c=0;c<l.length;c+=1)l[c].c();_(e,"class","red")},m(c,u){h(c,e,u),s&&s.m(e,null),h(c,t,u),h(c,r,u),h(c,i,u),h(c,o,u);for(let d=0;d<l.length;d+=1)l[d]&&l[d].m(o,null)},p(c,u){if(c[2]&&c[2]!==c[0]?s?s.p(c,u):(s=eo(c),s.c(),s.m(e,null)):s&&(s.d(1),s=null),u&645){a=c[7];let d;for(d=0;d<a.length;d+=1){const f=Qi(c,a,d);l[d]?l[d].p(f,u):(l[d]=to(f),l[d].c(),l[d].m(o,null))}for(;d<l.length;d+=1)l[d].d(1);l.length=a.length}},d(c){c&&g(e),s&&s.d(),c&&g(t),c&&g(r),c&&g(i),c&&g(o),rt(l,c)}}}function eo(n){let e;return{c(){e=O(n[5])},m(t,r){h(t,e,r)},p(t,r){r&32&&H(e,t[5])},d(t){t&&g(e)}}}function to(n){let e,t=n[17]+"",r,i,o,s;function a(){return n[12](n[17])}return{c(){e=b("div"),r=O(t),i=S(),_(e,"class","option"),te(e,"correct",n[17]===n[2]&&n[2]===n[0]),te(e,"incorrect",n[17]===n[2]&&n[2]!==n[0])},m(l,c){h(l,e,c),m(e,r),m(e,i),o||(s=B(e,"click",a),o=!0)},p(l,c){n=l,c&133&&te(e,"correct",n[17]===n[2]&&n[2]===n[0]),c&133&&te(e,"incorrect",n[17]===n[2]&&n[2]!==n[0])},d(l){l&&g(e),o=!1,s()}}}function no(n){let e,t,r,i;return{c(){e=b("footer"),t=b("span"),t.textContent="reset quiz",_(t,"class","reset")},m(o,s){h(o,e,s),m(e,t),r||(i=B(t,"click",n[10]),r=!0)},p:T,d(o){o&&g(e),r=!1,i()}}}function Rh(n){let e,t,r,i,o,s;function a(d,f){return d[3]?xh:Ah}let l=a(n),c=l(n),u=n[3]&&no(n);return{c(){e=b("modal-dialog"),t=b("div"),c.c(),r=S(),i=b("img"),s=S(),u&&u.c(),this.c=T,Ct(i.src,o=`/courses/${n[8]}/img/prizes/${n[1]}.webp`)||_(i,"src",o),_(i,"alt","programming meme"),te(i,"show",n[3]),_(t,"class","wrap"),Ee(e,"esc","true"),Ee(e,"name","quiz")},m(d,f){h(d,e,f),m(e,t),c.m(t,null),m(t,r),m(t,i),m(t,s),u&&u.m(t,null)},p(d,[f]){l===(l=a(d))&&c?c.p(d,f):(c.d(1),c=l(d),c&&(c.c(),c.m(t,r))),f&2&&!Ct(i.src,o=`/courses/${d[8]}/img/prizes/${d[1]}.webp`)&&_(i,"src",o),f&8&&te(i,"show",d[3]),d[3]?u?u.p(d,f):(u=no(d),u.c(),u.m(t,null)):u&&(u.d(1),u=null)},i:T,o:T,d(d){d&&g(e),c.d(),u&&u.d()}}}function ro(n){return n[Math.floor(Math.random()*n.length)]}function Oh(n,e,t){var r=this&&this.__awaiter||function(C,$,N,D){function P(F){return F instanceof N?F:new N(function(z){z(F)})}return new(N||(N=Promise))(function(F,z){function U(W){try{V(D.next(W))}catch(ie){z(ie)}}function M(W){try{V(D.throw(W))}catch(ie){z(ie)}}function V(W){W.done?F(W.value):P(W.value).then(U,M)}V((D=D.apply(C,$||[])).next())})};let{answer:i}=e,{options:o}=e,{prize:s}=e;const a=o.split(":");let l,c=!1,u=1,d,f=Ar(),p,w;function v(C){c||(t(2,l=C),C===i?I():y())}function y(){t(5,p=ro(["lol, try Again","Yeah, that ain't it","Nah bro","Not even close","Nooooo!","try harder","you serious?","c'mon man!","I'm disappointed","I blame myself","no prize for you"])),u++}function I(){return r(this,void 0,void 0,function*(){const C=(yield lt(()=>import("./confetti.c65a864a.js"),[])).default;t(6,w=ro(["well done sir","that's legit","crushed it","hella good job","bussin no cap fr","take this fancy prize","the best I can do is this meme","enjoy your winnings","hang this prize on your wall","you earned this!"]));let N=u<=2?50/u:5;t(4,d=100+N),Ra(window.location.pathname,N),C(),t(3,c=!0)})}function E(){t(2,l=null),t(3,c=!1),t(4,d=0)}const k=C=>v(C);return n.$$set=C=>{"answer"in C&&t(0,i=C.answer),"options"in C&&t(11,o=C.options),"prize"in C&&t(1,s=C.prize)},[i,s,l,c,d,p,w,a,f,v,E,o,k]}class Nh extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=`.option{margin-top:0.5rem;margin-bottom:0.5rem;cursor:pointer;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity:0.5;padding:0.75rem
}.option:hover{--tw-bg-opacity:1;background-color:rgb(249 115 22 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))
}.correct{--tw-bg-opacity:1;background-color:rgb(34 197 94 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))
}.incorrect{--tw-bg-opacity:1;background-color:rgb(239 68 68 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))
}.incorrect:hover{--tw-bg-opacity:1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))
}.red{font-family:cubano, sans-serif;--tw-text-opacity:1;color:rgb(239 68 68 / var(--tw-text-opacity))
}.green{font-family:cubano, sans-serif;font-size:1.25rem;line-height:1.75rem;--tw-text-opacity:1;color:rgb(34 197 94 / var(--tw-text-opacity))
}.gain{position:relative;bottom:3px
}@keyframes pulse{50%{opacity:.5
    }}.gain{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;border-radius:0.375rem;--tw-bg-opacity:1;background-color:rgb(34 197 94 / var(--tw-bg-opacity));padding-left:0.5rem;padding-right:0.5rem;padding-top:0.25rem;padding-bottom:0.25rem;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))
}img{margin-top:1.25rem;margin-bottom:1.25rem;margin-left:auto;margin-right:auto;display:block;height:0px;max-height:70vh;width:0px;--tw-rotate:180deg;--tw-scale-x:0;--tw-scale-y:0;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms
}.reset{margin-right:0.75rem;cursor:pointer;border-radius:0.25rem;border-width:1px;border-style:solid;--tw-border-opacity:1;border-color:rgb(59 130 246 / var(--tw-border-opacity));padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.5rem;padding-right:0.5rem;font-size:0.875rem;line-height:1.25rem;line-height:1;--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity));text-decoration-line:none
}.show{height:auto;width:auto;max-width:100%;--tw-rotate:0deg;--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1
}`,this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},Oh,Rh,X,{answer:0,options:11,prize:1},null),e&&(e.target&&h(e.target,this,e.anchor),e.props&&(this.$set(e.props),J()))}static get observedAttributes(){return["answer","options","prize"]}get answer(){return this.$$.ctx[0]}set answer(e){this.$$set({answer:e}),J()}get options(){return this.$$.ctx[11]}set options(e){this.$$set({options:e}),J()}get prize(){return this.$$.ctx[1]}set prize(e){this.$$set({prize:e}),J()}}customElements.define("quiz-modal",Nh);function Ph(n){let e,t,r;return{c(){e=b("span"),e.innerHTML="<slot></slot>",this.c=T},m(i,o){h(i,e,o),t||(r=B(e,"click",n[0]),t=!0)},p:T,i:T,o:T,d(i){i&&g(e),t=!1,r()}}}function Lh(n,e,t){let{type:r="open"}=e,{name:i="default"}=e;function o(){r==="open"&&Ae.set(i),r==="close"&&Ae.set(null)}return n.$$set=s=>{"type"in s&&t(1,r=s.type),"name"in s&&t(2,i=s.name)},[o,r,i]}class Dh extends Z{constructor(e){super(),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},Lh,Ph,X,{type:1,name:2},null),e&&(e.target&&h(e.target,this,e.anchor),e.props&&(this.$set(e.props),J()))}static get observedAttributes(){return["type","name"]}get type(){return this.$$.ctx[1]}set type(e){this.$$set({type:e}),J()}get name(){return this.$$.ctx[2]}set name(e){this.$$set({name:e}),J()}}customElements.define("modal-action",Dh);function io(n){let e,t,r;return{c(){e=b("kbd"),e.textContent="esc",_(e,"class","esc")},m(i,o){h(i,e,o),t||(r=B(e,"click",n[3]),t=!0)},p:T,d(i){i&&g(e),t=!1,r()}}}function Mh(n){let e,t,r,i,o,s,a=n[1]&&io(n);return{c(){e=b("div"),t=b("div"),a&&a.c(),r=S(),i=b("slot"),this.c=T,_(t,"class","inner"),te(t,"inner-show",n[2]===n[0]),_(e,"class","backdrop"),te(e,"show",n[2]===n[0])},m(l,c){h(l,e,c),m(e,t),a&&a.m(t,null),m(t,r),m(t,i),o||(s=[B(t,"click",Xa(n[4])),B(e,"click",n[3])],o=!0)},p(l,[c]){l[1]?a?a.p(l,c):(a=io(l),a.c(),a.m(t,r)):a&&(a.d(1),a=null),c&5&&te(t,"inner-show",l[2]===l[0]),c&5&&te(e,"show",l[2]===l[0])},i:T,o:T,d(l){l&&g(e),a&&a.d(),o=!1,pe(s)}}}function Uh(n,e,t){let r;oe(n,Ae,l=>t(2,r=l));let{name:i="default"}=e,{esc:o=!1}=e;function s(){Ae.set(null)}function a(l){el.call(this,n,l)}return n.$$set=l=>{"name"in l&&t(0,i=l.name),"esc"in l&&t(1,o=l.esc)},[i,o,r,s,a]}class Fh extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=".backdrop{visibility:hidden;position:fixed;inset:0px;z-index:99;display:flex;flex-direction:column;align-items:center;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity:0.9;padding-top:5rem;opacity:0}.show{visibility:visible;opacity:1}.inner{margin-left:1.25rem;margin-right:1.25rem;height:auto;width:75%;max-width:100%;--tw-scale-x:.75;--tw-scale-y:.75;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));overflow-y:auto;border-radius:0.375rem;--tw-bg-opacity:1;background-color:rgb(42 46 53 / var(--tw-bg-opacity));padding-left:2rem;padding-right:2rem;padding-top:3rem;padding-bottom:3rem;opacity:0;--tw-shadow:0 5px 20px rgb(0 0 0 / 90%);--tw-shadow-colored:0 5px 20px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}@media(min-width: 768px){.inner{width:auto}}.inner-show{--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms}.esc{position:absolute;top:1.5rem;right:1.5rem;cursor:pointer;border-radius:0.375rem;border-width:1px;border-style:solid;--tw-border-opacity:1;border-color:rgb(249 115 22 / var(--tw-border-opacity));--tw-bg-opacity:0.5;padding:0.375rem;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgb(178 190 205 / var(--tw-text-opacity));--tw-drop-shadow:drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.esc:hover{--tw-bg-opacity:1;background-color:rgb(249 115 22 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}",this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},Uh,Mh,X,{name:0,esc:1},null),e&&(e.target&&h(e.target,this,e.anchor),e.props&&(this.$set(e.props),J()))}static get observedAttributes(){return["name","esc"]}get name(){return this.$$.ctx[0]}set name(e){this.$$set({name:e}),J()}get esc(){return this.$$.ctx[1]}set esc(e){this.$$set({esc:e}),J()}}customElements.define("modal-dialog",Fh);function zh(n){let e;return{c(){e=b("div"),this.c=T,_(e,"class","gradient-loader"),te(e,"show",n[0])},m(t,r){h(t,e,r)},p(t,[r]){r&1&&te(e,"show",t[0])},i:T,o:T,d(t){t&&g(e)}}}function Bh(n,e,t){let r;return oe(n,Or,i=>t(0,r=i)),[r]}class jh extends Z{constructor(e){super();const t=document.createElement("style");t.textContent="div{position:fixed;top:0px;left:0px;height:0.375rem;width:100%;--tw-translate-x:-100%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.show{--tw-translate-x:0px;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}.gradient-loader{background-image:linear-gradient(to right, var(--tw-gradient-stops));--tw-gradient-from:#f97316 var(--tw-gradient-from-position);--tw-gradient-from-position:  ;--tw-gradient-to:rgb(249 115 22 / 0)  var(--tw-gradient-from-position);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-via-position:  ;--tw-gradient-to:rgb(168 85 247 / 0)  var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from), #a855f7 var(--tw-gradient-via-position), var(--tw-gradient-to);--tw-gradient-to:#ec4899 var(--tw-gradient-to-position);--tw-gradient-to-position:  ;background-size:200% 200%;animation:gradiant-move 1s infinite}@keyframes gradiant-move{0%{background-position:left}50%{background-position:right}100%{background-position:left}}",this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},Bh,zh,X,{},null),e&&e.target&&h(e.target,this,e.anchor)}}customElements.define("route-loader",jh);function oo(n){var f,p;let e,t,r=n[0].message+"",i,o,s,a=((p=n[0].icon)!=null?p:n[3][(f=n[0].type)!=null?f:"info"])+"",l,c,u,d;return{c(){e=b("div"),t=b("div"),i=O(r),o=S(),s=b("div"),l=O(a),_(t,"class","message"),_(s,"class","icon"),_(e,"class",c=`toast ${n[2]}`),te(e,"active",n[1])},m(w,v){h(w,e,v),m(e,t),m(t,i),m(e,o),m(e,s),m(s,l),u||(d=B(e,"click",n[4]),u=!0)},p(w,v){var y,I;v&1&&r!==(r=w[0].message+"")&&H(i,r),v&1&&a!==(a=((I=w[0].icon)!=null?I:w[3][(y=w[0].type)!=null?y:"info"])+"")&&H(l,a),v&4&&c!==(c=`toast ${w[2]}`)&&_(e,"class",c),v&6&&te(e,"active",w[1])},d(w){w&&g(e),u=!1,d()}}}function $h(n){let e,t=n[0]&&oo(n);return{c(){t&&t.c(),e=re(),this.c=T},m(r,i){t&&t.m(r,i),h(r,e,i)},p(r,[i]){r[0]?t?t.p(r,i):(t=oo(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:T,o:T,d(r){t&&t.d(r),r&&g(e)}}}function Hh(n,e,t){let r,i=!1,o,s,a={success:"\u2714\uFE0F",error:"\u2620\uFE0F",info:"\u{1F4A1}"};ht(()=>{be.subscribe(c=>{t(0,o=c),clearTimeout(s),c&&(s=setTimeout(()=>{be.set(null)},(c==null?void 0:c.delay)||1e4),t(1,i=!1),setTimeout(()=>{t(1,i=!0)},200))})});const l=()=>be.set(null);return n.$$.update=()=>{n.$$.dirty&1&&t(2,r=(o==null?void 0:o.type)||"info")},[o,i,r,a,l]}class Vh extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=".toast{border:none;visibility:hidden;position:fixed;bottom:1.5rem;right:1.5rem;z-index:999;margin:1.5rem;display:flex;--tw-translate-x:20rem;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));cursor:pointer;opacity:0;transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.toast.active{visibility:visible;--tw-translate-x:0px;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}.toast .icon{display:grid;width:2.5rem;place-items:center;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity:0.8;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.25rem;padding-bottom:0.25rem;font-family:cubano, sans-serif;font-size:1.125rem;line-height:1.75rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));--tw-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.toast .message{background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity:0.5;padding:1rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));--tw-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.toast .message:hover{text-decoration-line:line-through}.toast.success .message{--tw-text-opacity:1;color:rgb(34 197 94 / var(--tw-text-opacity))}.toast.error .message{--tw-text-opacity:1;color:rgb(239 68 68 / var(--tw-text-opacity))}",this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},Hh,$h,X,{},null),e&&e.target&&h(e.target,this,e.anchor)}}customElements.define("toast-message",Vh);function qh(n){let e,t,r,i,o,s;return{c(){e=b("div"),t=b("span"),t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>',r=S(),i=b("span"),i.innerHTML='<slot name="collapse"></slot>',_(t,"class","btn"),_(e,"class","wrap")},m(a,l){h(a,e,l),m(e,t),h(a,r,l),h(a,i,l),o||(s=[B(t,"click",n[2]),B(i,"click",n[3])],o=!0)},p:T,d(a){a&&g(e),a&&g(r),a&&g(i),o=!1,pe(s)}}}function Wh(n){let e,t,r,i,o,s;return{c(){e=b("div"),t=b("span"),t.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path></svg> 
        <span class="text">ctrl+b</span>`,r=S(),i=b("slot"),_(t,"class","btn"),_(e,"class","wrap")},m(a,l){h(a,e,l),m(e,t),h(a,r,l),h(a,i,l),o||(s=B(t,"click",n[1]),o=!0)},p:T,d(a){a&&g(e),a&&g(r),a&&g(i),o=!1,s()}}}function Gh(n){let e;function t(o,s){return o[0]?Wh:qh}let r=t(n),i=r(n);return{c(){i.c(),e=re(),this.c=T},m(o,s){i.m(o,s),h(o,e,s)},p(o,[s]){r===(r=t(o))&&i?i.p(o,s):(i.d(1),i=r(o),i&&(i.c(),i.m(e.parentNode,e)))},i:T,o:T,d(o){i.d(o),o&&g(e)}}}function Kh(n,e,t){let r;return oe(n,Ft,a=>t(0,r=a)),[r,()=>Ft.set(!1),()=>Ft.set(!0),()=>Ft.set(!0)]}class Yh extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=`.wrap{margin-right:1rem;display:flex;justify-content:space-between;padding:0.5rem
}.btn{display:none;cursor:pointer;border-radius:0.375rem;border-width:1px;border-style:solid;--tw-border-opacity:1;border-color:rgb(108 121 131 / var(--tw-border-opacity));padding:0.25rem;padding-left:0.5rem;padding-right:0.5rem;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))
}@media(min-width: 768px){.btn{display:inline
    }}.btn svg{position:relative;top:1px;margin-left:0.25rem;margin-right:0.25rem;width:0.5rem
}`,this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},Kh,Gh,X,{},null),e&&e.target&&h(e.target,this,e.anchor)}}customElements.define("navbar-toggle",Yh);function so(n){let e,t,r;return{c(){e=b("img"),Ct(e.src,t=n[0])||_(e,"src",t),_(e,"alt","special effect"),_(e,"style",r=`transform: translateX(${n[2]||0}px);`)},m(i,o){h(i,e,o)},p(i,o){o&1&&!Ct(e.src,t=i[0])&&_(e,"src",t),o&4&&r!==(r=`transform: translateX(${i[2]||0}px);`)&&_(e,"style",r)},d(i){i&&g(e)}}}function Jh(n){let e,t,r,i,o,s=n[1]&&so(n);return{c(){e=b("span"),t=b("slot"),r=S(),s&&s.c(),this.c=T,_(e,"class","text")},m(a,l){h(a,e,l),m(e,t),m(e,r),s&&s.m(e,null),i||(o=[B(e,"mouseenter",n[5]),B(e,"mouseleave",n[3]),B(e,"mousemove",n[4])],i=!0)},p(a,[l]){a[1]?s?s.p(a,l):(s=so(a),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i:T,o:T,d(a){a&&g(e),s&&s.d(),i=!1,pe(o)}}}function Xh(n,e,t){let{src:r}=e,i=!1,o=0;function s(){t(1,i=!1),t(2,o=0)}function a(c){t(2,o+=c.movementX)}const l=()=>t(1,i=!0);return n.$$set=c=>{"src"in c&&t(0,r=c.src)},[r,i,o,s,a,l]}class Zh extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=`.text{position:relative
}img{position:absolute;bottom:50%;right:0px;width:13rem
}`,this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},Xh,Jh,X,{src:0},null),e&&(e.target&&h(e.target,this,e.anchor),e.props&&(this.$set(e.props),J()))}static get observedAttributes(){return["src"]}get src(){return this.$$.ctx[0]}set src(e){this.$$set({src:e}),J()}}customElements.define("img-reveal",Zh);function Qh(n){let e,t,r;return{c(){e=b("div"),t=b("slot"),this.c=T,_(e,"class",n[1]),_(e,"style",r=`transition-delay: ${n[0]}ms`),te(e,"visible",n[3])},m(i,o){h(i,e,o),m(e,t),n[5](e)},p(i,[o]){o&2&&_(e,"class",i[1]),o&1&&r!==(r=`transition-delay: ${i[0]}ms`)&&_(e,"style",r),o&10&&te(e,"visible",i[3])},i:T,o:T,d(i){i&&g(e),n[5](null)}}}function em(n,e,t){let{delay:r=200}=e,{start:i="right"}=e,{repeat:o=!0}=e,s,a,l=!1;ht(()=>(s=new IntersectionObserver(u=>{u.forEach(d=>{d.isIntersecting?t(3,l=!0):o&&t(3,l=!1)})}),s.observe(a),()=>{s==null||s.disconnect()}));function c(u){ct[u?"unshift":"push"](()=>{a=u,t(2,a)})}return n.$$set=u=>{"delay"in u&&t(0,r=u.delay),"start"in u&&t(1,i=u.start),"repeat"in u&&t(4,o=u.repeat)},[r,i,a,l,o,c]}class tm extends Z{constructor(e){super();const t=document.createElement("style");t.textContent="@media(prefers-reduced-motion: no-preference){.top{transform:translateY(-20px);filter:hue-rotate(90deg);opacity:0;position:relative;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:500ms}.right{transform:translateX(-20px);filter:hue-rotate(90deg);opacity:0;position:relative;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:500ms}.visible{transform:translateX(0);filter:hue-rotate(0);opacity:1}}",this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},em,Qh,X,{delay:0,start:1,repeat:4},null),e&&(e.target&&h(e.target,this,e.anchor),e.props&&(this.$set(e.props),J()))}static get observedAttributes(){return["delay","start","repeat"]}get delay(){return this.$$.ctx[0]}set delay(e){this.$$set({delay:e}),J()}get start(){return this.$$.ctx[1]}set start(e){this.$$set({start:e}),J()}get repeat(){return this.$$.ctx[4]}set repeat(e){this.$$set({repeat:e}),J()}}customElements.define("scroll-show",tm);function ao(n){let e,t,r,i=n[0].presence_count+"",o,s;return{c(){e=b("span"),e.innerHTML=`<span class="outer"></span> 
            <span class="inner"></span>`,t=S(),r=b("span"),o=O(i),s=O(" members online"),_(e,"class","ping"),_(r,"class","num")},m(a,l){h(a,e,l),h(a,t,l),h(a,r,l),m(r,o),h(a,s,l)},p(a,l){l&1&&i!==(i=a[0].presence_count+"")&&H(o,i)},d(a){a&&g(e),a&&g(t),a&&g(r),a&&g(s)}}}function nm(n){let e,t=n[0]&&ao(n);return{c(){t&&t.c(),e=re(),this.c=T},m(r,i){t&&t.m(r,i),h(r,e,i)},p(r,[i]){r[0]?t?t.p(r,i):(t=ao(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:T,o:T,d(r){t&&t.d(r),r&&g(e)}}}function rm(n,e,t){var r=this&&this.__awaiter||function(o,s,a,l){function c(u){return u instanceof a?u:new a(function(d){d(u)})}return new(a||(a=Promise))(function(u,d){function f(v){try{w(l.next(v))}catch(y){d(y)}}function p(v){try{w(l.throw(v))}catch(y){d(y)}}function w(v){v.done?u(v.value):c(v.value).then(f,p)}w((l=l.apply(o,s||[])).next())})};let i;return ht(()=>r(void 0,void 0,void 0,function*(){let o=yield fetch("https://discord.com/api/guilds/1015095797689360444/widget.json");t(0,i=yield o.json())})),[i]}class im extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=`.ping{position:relative;display:inline-flex;height:0.75rem;width:0.75rem
}.outer{position:absolute;display:inline-flex;height:100%;width:100%
}@keyframes ping{75%,100%{transform:scale(2);opacity:0
    }}.outer{animation:ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(74 222 128 / var(--tw-bg-opacity));opacity:0.75
}.inner{position:relative;display:inline-flex;height:0.75rem;width:0.75rem;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))
}.num{font-family:cubano, sans-serif;font-size:1.125rem;line-height:1.75rem;--tw-text-opacity:1;color:rgb(34 197 94 / var(--tw-text-opacity))
}`,this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},rm,nm,X,{},null),e&&e.target&&h(e.target,this,e.anchor)}}customElements.define("discord-count",im);const{window:om}=ps;function sm(n){let e,t,r;return{c(){e=b("button"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path></svg>',this.c=T,te(e,"show",n[0])},m(i,o){h(i,e,o),t||(r=[B(om,"scroll",n[1]),B(e,"click",am)],t=!0)},p(i,[o]){o&1&&te(e,"show",i[0])},i:T,o:T,d(i){i&&g(e),t=!1,pe(r)}}}function am(){window.scrollTo({top:0,behavior:"smooth"})}function lm(n,e,t){let r=!1;function i(){t(0,r=window.scrollY>250)}return ht(()=>()=>{window.removeEventListener("scroll",i)}),[r,i]}class cm extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=`button{position:fixed;bottom:1.25rem;right:1.25rem;display:grid;height:2.5rem;width:2.5rem;--tw-translate-y:2rem;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));cursor:pointer;place-items:center;border-radius:9999px;border-style:none;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity:0.5;padding:0px;--tw-text-opacity:1;color:rgb(108 121 131 / var(--tw-text-opacity));opacity:0;outline:2px solid transparent;outline-offset:2px;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms
}button:hover{--tw-text-opacity:1;color:rgb(249 115 22 / var(--tw-text-opacity))
}button svg{height:1.25rem;width:1.25rem
}.show{--tw-translate-y:0px;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1
}`,this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},lm,sm,X,{},null),e&&e.target&&h(e.target,this,e.anchor)}}customElements.define("scroll-up",cm);function um(n){let e;return{c(){e=b("modal-dialog"),e.innerHTML=`<h1>Hi Mom!</h1> 
    <img src="/img/himom.gif" alt="hi mom"/>`,this.c=T,Ee(e,"name","himom"),Ee(e,"esc","true")},m(t,r){h(t,e,r)},p:T,i:T,o:T,d(t){t&&g(e)}}}class dm extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=`h1{text-align:center;font-family:cubano, sans-serif;font-size:4.5rem;line-height:1;font-weight:400;--tw-text-opacity:1;color:rgb(236 72 153 / var(--tw-text-opacity))
}img{margin-left:auto;margin-right:auto;width:16rem
}`,this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},null,um,X,{},null),e&&e.target&&h(e.target,this,e.anchor)}}customElements.define("hi-mom",dm);var fm=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function kg(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Pa={exports:{}};/*! algoliasearch-lite.umd.js | 4.17.0 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */(function(n,e){(function(t,r){n.exports=r()})(fm,function(){function t(x,A,R){return A in x?Object.defineProperty(x,A,{value:R,enumerable:!0,configurable:!0,writable:!0}):x[A]=R,x}function r(x,A){var R=Object.keys(x);if(Object.getOwnPropertySymbols){var L=Object.getOwnPropertySymbols(x);A&&(L=L.filter(function(j){return Object.getOwnPropertyDescriptor(x,j).enumerable})),R.push.apply(R,L)}return R}function i(x){for(var A=1;A<arguments.length;A++){var R=arguments[A]!=null?arguments[A]:{};A%2?r(Object(R),!0).forEach(function(L){t(x,L,R[L])}):Object.getOwnPropertyDescriptors?Object.defineProperties(x,Object.getOwnPropertyDescriptors(R)):r(Object(R)).forEach(function(L){Object.defineProperty(x,L,Object.getOwnPropertyDescriptor(R,L))})}return x}function o(x,A){if(x==null)return{};var R,L,j=function(K,Y){if(K==null)return{};var le,de,_e={},xe=Object.keys(K);for(de=0;de<xe.length;de++)le=xe[de],Y.indexOf(le)>=0||(_e[le]=K[le]);return _e}(x,A);if(Object.getOwnPropertySymbols){var G=Object.getOwnPropertySymbols(x);for(L=0;L<G.length;L++)R=G[L],A.indexOf(R)>=0||Object.prototype.propertyIsEnumerable.call(x,R)&&(j[R]=x[R])}return j}function s(x,A){return function(R){if(Array.isArray(R))return R}(x)||function(R,L){if(Symbol.iterator in Object(R)||Object.prototype.toString.call(R)==="[object Arguments]"){var j=[],G=!0,K=!1,Y=void 0;try{for(var le,de=R[Symbol.iterator]();!(G=(le=de.next()).done)&&(j.push(le.value),!L||j.length!==L);G=!0);}catch(_e){K=!0,Y=_e}finally{try{G||de.return==null||de.return()}finally{if(K)throw Y}}return j}}(x,A)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(x){return function(A){if(Array.isArray(A)){for(var R=0,L=new Array(A.length);R<A.length;R++)L[R]=A[R];return L}}(x)||function(A){if(Symbol.iterator in Object(A)||Object.prototype.toString.call(A)==="[object Arguments]")return Array.from(A)}(x)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(x){var A,R="algoliasearch-client-js-".concat(x.key),L=function(){return A===void 0&&(A=x.localStorage||window.localStorage),A},j=function(){return JSON.parse(L().getItem(R)||"{}")};return{get:function(G,K){var Y=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}};return Promise.resolve().then(function(){var le=JSON.stringify(G),de=j()[le];return Promise.all([de||K(),de!==void 0])}).then(function(le){var de=s(le,2),_e=de[0],xe=de[1];return Promise.all([_e,xe||Y.miss(_e)])}).then(function(le){return s(le,1)[0]})},set:function(G,K){return Promise.resolve().then(function(){var Y=j();return Y[JSON.stringify(G)]=K,L().setItem(R,JSON.stringify(Y)),K})},delete:function(G){return Promise.resolve().then(function(){var K=j();delete K[JSON.stringify(G)],L().setItem(R,JSON.stringify(K))})},clear:function(){return Promise.resolve().then(function(){L().removeItem(R)})}}}function c(x){var A=a(x.caches),R=A.shift();return R===void 0?{get:function(L,j){var G=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}},K=j();return K.then(function(Y){return Promise.all([Y,G.miss(Y)])}).then(function(Y){return s(Y,1)[0]})},set:function(L,j){return Promise.resolve(j)},delete:function(L){return Promise.resolve()},clear:function(){return Promise.resolve()}}:{get:function(L,j){var G=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}};return R.get(L,j,G).catch(function(){return c({caches:A}).get(L,j,G)})},set:function(L,j){return R.set(L,j).catch(function(){return c({caches:A}).set(L,j)})},delete:function(L){return R.delete(L).catch(function(){return c({caches:A}).delete(L)})},clear:function(){return R.clear().catch(function(){return c({caches:A}).clear()})}}}function u(){var x=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{serializable:!0},A={};return{get:function(R,L){var j=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}},G=JSON.stringify(R);if(G in A)return Promise.resolve(x.serializable?JSON.parse(A[G]):A[G]);var K=L(),Y=j&&j.miss||function(){return Promise.resolve()};return K.then(function(le){return Y(le)}).then(function(){return K})},set:function(R,L){return A[JSON.stringify(R)]=x.serializable?JSON.stringify(L):L,Promise.resolve(L)},delete:function(R){return delete A[JSON.stringify(R)],Promise.resolve()},clear:function(){return A={},Promise.resolve()}}}function d(x){for(var A=x.length-1;A>0;A--){var R=Math.floor(Math.random()*(A+1)),L=x[A];x[A]=x[R],x[R]=L}return x}function f(x,A){return A&&Object.keys(A).forEach(function(R){x[R]=A[R](x)}),x}function p(x){for(var A=arguments.length,R=new Array(A>1?A-1:0),L=1;L<A;L++)R[L-1]=arguments[L];var j=0;return x.replace(/%s/g,function(){return encodeURIComponent(R[j++])})}var w={WithinQueryParameters:0,WithinHeaders:1};function v(x,A){var R=x||{},L=R.data||{};return Object.keys(R).forEach(function(j){["timeout","headers","queryParameters","data","cacheable"].indexOf(j)===-1&&(L[j]=R[j])}),{data:Object.entries(L).length>0?L:void 0,timeout:R.timeout||A,headers:R.headers||{},queryParameters:R.queryParameters||{},cacheable:R.cacheable}}var y={Read:1,Write:2,Any:3},I=1,E=2,k=3;function C(x){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:I;return i(i({},x),{},{status:A,lastUpdate:Date.now()})}function $(x){return typeof x=="string"?{protocol:"https",url:x,accept:y.Any}:{protocol:x.protocol||"https",url:x.url,accept:x.accept||y.Any}}var N="GET",D="POST";function P(x,A){return Promise.all(A.map(function(R){return x.get(R,function(){return Promise.resolve(C(R))})})).then(function(R){var L=R.filter(function(K){return function(Y){return Y.status===I||Date.now()-Y.lastUpdate>12e4}(K)}),j=R.filter(function(K){return function(Y){return Y.status===k&&Date.now()-Y.lastUpdate<=12e4}(K)}),G=[].concat(a(L),a(j));return{getTimeout:function(K,Y){return(j.length===0&&K===0?1:j.length+3+K)*Y},statelessHosts:G.length>0?G.map(function(K){return $(K)}):A}})}function F(x,A,R,L){var j=[],G=function(ye,De){if(!(ye.method===N||ye.data===void 0&&De.data===void 0)){var ce=Array.isArray(ye.data)?ye.data:i(i({},ye.data),De.data);return JSON.stringify(ce)}}(R,L),K=function(ye,De){var ce=i(i({},ye.headers),De.headers),ve={};return Object.keys(ce).forEach(function(He){var Ne=ce[He];ve[He.toLowerCase()]=Ne}),ve}(x,L),Y=R.method,le=R.method!==N?{}:i(i({},R.data),L.data),de=i(i(i({"x-algolia-agent":x.userAgent.value},x.queryParameters),le),L.queryParameters),_e=0,xe=function ye(De,ce){var ve=De.pop();if(ve===void 0)throw{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",transporterStackTrace:V(j)};var He={data:G,headers:K,method:Y,url:U(ve,R.path,de),connectTimeout:ce(_e,x.timeouts.connect),responseTimeout:ce(_e,L.timeout)},Ne=function(ge){var se={request:He,response:ge,host:ve,triesLeft:De.length};return j.push(se),se},on={onSuccess:function(ge){return function(se){try{return JSON.parse(se.content)}catch(Me){throw function(Je,wt){return{name:"DeserializationError",message:Je,response:wt}}(Me.message,se)}}(ge)},onRetry:function(ge){var se=Ne(ge);return ge.isTimedOut&&_e++,Promise.all([x.logger.info("Retryable failure",W(se)),x.hostsCache.set(ve,C(ve,ge.isTimedOut?k:E))]).then(function(){return ye(De,ce)})},onFail:function(ge){throw Ne(ge),function(se,Me){var Je=se.content,wt=se.status,Dt=Je;try{Dt=JSON.parse(Je).message}catch{}return function(sn,Dn,La){return{name:"ApiError",message:sn,status:Dn,transporterStackTrace:La}}(Dt,wt,Me)}(ge,V(j))}};return x.requester.send(He).then(function(ge){return function(se,Me){return function(Je){var wt=Je.status;return Je.isTimedOut||function(Dt){var sn=Dt.isTimedOut,Dn=Dt.status;return!sn&&~~Dn==0}(Je)||~~(wt/100)!=2&&~~(wt/100)!=4}(se)?Me.onRetry(se):~~(se.status/100)==2?Me.onSuccess(se):Me.onFail(se)}(ge,on)})};return P(x.hostsCache,A).then(function(ye){return xe(a(ye.statelessHosts).reverse(),ye.getTimeout)})}function z(x){var A={value:"Algolia for JavaScript (".concat(x,")"),add:function(R){var L="; ".concat(R.segment).concat(R.version!==void 0?" (".concat(R.version,")"):"");return A.value.indexOf(L)===-1&&(A.value="".concat(A.value).concat(L)),A}};return A}function U(x,A,R){var L=M(R),j="".concat(x.protocol,"://").concat(x.url,"/").concat(A.charAt(0)==="/"?A.substr(1):A);return L.length&&(j+="?".concat(L)),j}function M(x){return Object.keys(x).map(function(A){return p("%s=%s",A,(R=x[A],Object.prototype.toString.call(R)==="[object Object]"||Object.prototype.toString.call(R)==="[object Array]"?JSON.stringify(x[A]):x[A]));var R}).join("&")}function V(x){return x.map(function(A){return W(A)})}function W(x){var A=x.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return i(i({},x),{},{request:i(i({},x.request),{},{headers:i(i({},x.request.headers),A)})})}var ie=function(x){var A=x.appId,R=function(j,G,K){var Y={"x-algolia-api-key":K,"x-algolia-application-id":G};return{headers:function(){return j===w.WithinHeaders?Y:{}},queryParameters:function(){return j===w.WithinQueryParameters?Y:{}}}}(x.authMode!==void 0?x.authMode:w.WithinHeaders,A,x.apiKey),L=function(j){var G=j.hostsCache,K=j.logger,Y=j.requester,le=j.requestsCache,de=j.responsesCache,_e=j.timeouts,xe=j.userAgent,ye=j.hosts,De=j.queryParameters,ce={hostsCache:G,logger:K,requester:Y,requestsCache:le,responsesCache:de,timeouts:_e,userAgent:xe,headers:j.headers,queryParameters:De,hosts:ye.map(function(ve){return $(ve)}),read:function(ve,He){var Ne=v(He,ce.timeouts.read),on=function(){return F(ce,ce.hosts.filter(function(se){return(se.accept&y.Read)!=0}),ve,Ne)};if((Ne.cacheable!==void 0?Ne.cacheable:ve.cacheable)!==!0)return on();var ge={request:ve,mappedRequestOptions:Ne,transporter:{queryParameters:ce.queryParameters,headers:ce.headers}};return ce.responsesCache.get(ge,function(){return ce.requestsCache.get(ge,function(){return ce.requestsCache.set(ge,on()).then(function(se){return Promise.all([ce.requestsCache.delete(ge),se])},function(se){return Promise.all([ce.requestsCache.delete(ge),Promise.reject(se)])}).then(function(se){var Me=s(se,2);return Me[0],Me[1]})})},{miss:function(se){return ce.responsesCache.set(ge,se)}})},write:function(ve,He){return F(ce,ce.hosts.filter(function(Ne){return(Ne.accept&y.Write)!=0}),ve,v(He,ce.timeouts.write))}};return ce}(i(i({hosts:[{url:"".concat(A,"-dsn.algolia.net"),accept:y.Read},{url:"".concat(A,".algolia.net"),accept:y.Write}].concat(d([{url:"".concat(A,"-1.algolianet.com")},{url:"".concat(A,"-2.algolianet.com")},{url:"".concat(A,"-3.algolianet.com")}]))},x),{},{headers:i(i(i({},R.headers()),{"content-type":"application/x-www-form-urlencoded"}),x.headers),queryParameters:i(i({},R.queryParameters()),x.queryParameters)}));return f({transporter:L,appId:A,addAlgoliaAgent:function(j,G){L.userAgent.add({segment:j,version:G})},clearCache:function(){return Promise.all([L.requestsCache.clear(),L.responsesCache.clear()]).then(function(){})}},x.methods)},he=function(x){return function(A,R){return A.method===N?x.transporter.read(A,R):x.transporter.write(A,R)}},Se=function(x){return function(A){var R=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},L={transporter:x.transporter,appId:x.appId,indexName:A};return f(L,R.methods)}},ue=function(x){return function(A,R){var L=A.map(function(j){return i(i({},j),{},{params:M(j.params||{})})});return x.transporter.read({method:D,path:"1/indexes/*/queries",data:{requests:L},cacheable:!0},R)}},Le=function(x){return function(A,R){return Promise.all(A.map(function(L){var j=L.params,G=j.facetName,K=j.facetQuery,Y=o(j,["facetName","facetQuery"]);return Se(x)(L.indexName,{methods:{searchForFacetValues:bt}}).searchForFacetValues(G,K,i(i({},R),Y))}))}},gt=function(x){return function(A,R,L){return x.transporter.read({method:D,path:p("1/answers/%s/prediction",x.indexName),data:{query:A,queryLanguages:R},cacheable:!0},L)}},Lt=function(x){return function(A,R){return x.transporter.read({method:D,path:p("1/indexes/%s/query",x.indexName),data:{query:A},cacheable:!0},R)}},bt=function(x){return function(A,R,L){return x.transporter.read({method:D,path:p("1/indexes/%s/facets/%s/query",x.indexName,A),data:{facetQuery:R},cacheable:!0},L)}},rn=1,Ie=2,ne=3;function me(x,A,R){var L,j={appId:x,apiKey:A,timeouts:{connect:1,read:2,write:30},requester:{send:function(G){return new Promise(function(K){var Y=new XMLHttpRequest;Y.open(G.method,G.url,!0),Object.keys(G.headers).forEach(function(xe){return Y.setRequestHeader(xe,G.headers[xe])});var le,de=function(xe,ye){return setTimeout(function(){Y.abort(),K({status:0,content:ye,isTimedOut:!0})},1e3*xe)},_e=de(G.connectTimeout,"Connection timeout");Y.onreadystatechange=function(){Y.readyState>Y.OPENED&&le===void 0&&(clearTimeout(_e),le=de(G.responseTimeout,"Socket timeout"))},Y.onerror=function(){Y.status===0&&(clearTimeout(_e),clearTimeout(le),K({content:Y.responseText||"Network request failed",status:Y.status,isTimedOut:!1}))},Y.onload=function(){clearTimeout(_e),clearTimeout(le),K({content:Y.responseText,status:Y.status,isTimedOut:!1})},Y.send(G.data)})}},logger:(L=ne,{debug:function(G,K){return rn>=L&&console.debug(G,K),Promise.resolve()},info:function(G,K){return Ie>=L&&console.info(G,K),Promise.resolve()},error:function(G,K){return console.error(G,K),Promise.resolve()}}),responsesCache:u(),requestsCache:u({serializable:!1}),hostsCache:c({caches:[l({key:"".concat("4.17.0","-").concat(x)}),u()]}),userAgent:z("4.17.0").add({segment:"Browser",version:"lite"}),authMode:w.WithinQueryParameters};return ie(i(i(i({},j),R),{},{methods:{search:ue,searchForFacetValues:Le,multipleQueries:ue,multipleSearchForFacetValues:Le,customRequest:he,initIndex:function(G){return function(K){return Se(G)(K,{methods:{search:Lt,searchForFacetValues:bt,findAnswers:gt}})}}}}))}return me.version="4.17.0",me})})(Pa);const pm=Pa.exports,{window:hm}=ps;function lo(n,e,t){const r=n.slice();return r[15]=e[t],r[17]=t,r}function co(n){let e,t,r;return{c(){e=b("input"),_(e,"class","input"),_(e,"name","search"),_(e,"type","text"),e.autofocus=!0,_(e,"placeholder","Search")},m(i,o){h(i,e,o),e.focus(),t||(r=B(e,"input",n[4]),t=!0)},p:T,d(i){i&&g(e),t=!1,r()}}}function uo(n){let e;return{c(){e=b("p"),e.textContent="No results yet",_(e,"class","no-results")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function fo(n){let e,t,r=n[15].title+"",i,o,s,a,l=n[15].type+"",c,u,d,f=n[15]._snippetResult.summary.value+"",p,w,v,y;function I(){return n[9](n[17])}function E(){return n[10](n[17])}return{c(){e=b("a"),t=b("span"),i=O(r),o=S(),s=b("span"),a=O("in "),c=O(l),u=S(),d=b("span"),p=S(),_(t,"class","hit-title"),_(s,"class","hit-type"),_(d,"class","hit-description"),_(e,"class","hit"),_(e,"href",w=n[15].relpermalink),te(e,"active",n[17]===n[2])},m(k,C){h(k,e,C),m(e,t),m(t,i),m(e,o),m(e,s),m(s,a),m(s,c),m(e,u),m(e,d),d.innerHTML=f,m(e,p),v||(y=[B(e,"mouseover",I),B(e,"focus",E)],v=!0)},p(k,C){n=k,C&2&&r!==(r=n[15].title+"")&&H(i,r),C&2&&l!==(l=n[15].type+"")&&H(c,l),C&2&&f!==(f=n[15]._snippetResult.summary.value+"")&&(d.innerHTML=f),C&2&&w!==(w=n[15].relpermalink)&&_(e,"href",w),C&4&&te(e,"active",n[17]===n[2])},d(k){k&&g(e),v=!1,pe(y)}}}function mm(n){var U;let e,t,r,i,o,s,a,l,c,u,d,f,p,w,v,y,I,E,k,C,$,N,D=n[3]==="search"&&co(n),P=!((U=n[0])!=null&&U.nbHits)&&uo(),F=n[1],z=[];for(let M=0;M<F.length;M+=1)z[M]=fo(lo(n,F,M));return{c(){e=b("modal-dialog"),t=b("form"),D&&D.c(),r=S(),i=b("div"),P&&P.c(),o=S();for(let M=0;M<z.length;M+=1)z[M].c();s=S(),a=b("footer"),l=b("kbd"),l.textContent="\u21A9",c=S(),u=b("span"),u.textContent="select",d=S(),f=b("kbd"),f.textContent="\u2191",p=S(),w=b("kbd"),w.textContent="\u2193",v=S(),y=b("span"),y.textContent="navigate",I=S(),E=b("kbd"),E.textContent="esc",k=S(),C=b("span"),C.textContent="leave",this.c=T,_(i,"class","results"),_(u,"class","kbd-text"),_(y,"class","kbd-text"),_(C,"class","kbd-text"),Ee(e,"name","search")},m(M,V){h(M,e,V),m(e,t),D&&D.m(t,null),m(e,r),m(e,i),P&&P.m(i,null),m(i,o);for(let W=0;W<z.length;W+=1)z[W]&&z[W].m(i,null);m(e,s),m(e,a),m(a,l),m(a,c),m(a,u),m(a,d),m(a,f),m(a,p),m(a,w),m(a,v),m(a,y),m(a,I),m(a,E),m(a,k),m(a,C),$||(N=[B(hm,"keydown",n[8]),B(l,"click",n[7]),B(f,"click",n[5]),B(w,"click",n[6]),B(E,"click",n[11])],$=!0)},p(M,[V]){var W;if(M[3]==="search"?D?D.p(M,V):(D=co(M),D.c(),D.m(t,null)):D&&(D.d(1),D=null),(W=M[0])!=null&&W.nbHits?P&&(P.d(1),P=null):P||(P=uo(),P.c(),P.m(i,o)),V&6){F=M[1];let ie;for(ie=0;ie<F.length;ie+=1){const he=lo(M,F,ie);z[ie]?z[ie].p(he,V):(z[ie]=fo(he),z[ie].c(),z[ie].m(i,null))}for(;ie<z.length;ie+=1)z[ie].d(1);z.length=F.length}},i:T,o:T,d(M){M&&g(e),D&&D.d(),P&&P.d(),rt(z,M),$=!1,pe(N)}}}const gm="05VYZFXKNM",bm="a0837b31f4379765240c2753fa141aa2";function wm(n,e,t){let r;oe(n,Ae,E=>t(3,r=E));var i=this&&this.__awaiter||function(E,k,C,$){function N(D){return D instanceof C?D:new C(function(P){P(D)})}return new(C||(C=Promise))(function(D,P){function F(M){try{U($.next(M))}catch(V){P(V)}}function z(M){try{U($.throw(M))}catch(V){P(V)}}function U(M){M.done?D(M.value):N(M.value).then(F,z)}U(($=$.apply(E,k||[])).next())})};const s=pm(gm,bm).initIndex("content");let a,l=[],c=0;ht(()=>()=>{window.removeEventListener("keydown",w)});function u(E){return i(this,void 0,void 0,function*(){const k=E.target.value;t(0,a=yield s.search(k,{hitsPerPage:7,attributesToSnippet:["summary"],highlightPreTag:'<mark class="high">',highlightPostTag:"</mark>"})),t(1,l=a.hits),t(2,c=0)})}function d(){t(2,c=c<=0?c:c-1)}function f(){t(2,c=c>=l.length-1?c:c+1)}function p(){if(l[c]){const E=l[c].relpermalink;cr.go(E),Ae.set(null)}}function w(E){E.key==="ArrowUp"&&d(),E.key==="ArrowDown"&&f(),E.key==="Enter"&&p()}return[a,l,c,r,u,d,f,p,w,E=>t(2,c=E),E=>t(2,c=E),()=>Ae.set(null)]}class _m extends Z{constructor(e){super();const t=document.createElement("style");t.textContent="a,a:hover,a:focus,a:active{text-decoration:none;color:inherit}form{overflow:hidden}.input{margin-right:0.5rem;display:block;width:100%;border-radius:0px;border-width:4px;border-top-width:0px;border-right-width:0px;border-left-width:0px;border-style:solid;--tw-border-opacity:1;border-bottom-color:rgb(168 85 247 / var(--tw-border-opacity));background-color:rgb(18 24 27 / var(--tw-bg-opacity));--tw-bg-opacity:0.5;padding:0.75rem;font-family:sofia-pro, sans-serif;font-size:1.25rem;line-height:1.75rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px}.input:focus-visible{outline:2px solid transparent;outline-offset:2px}@media(min-width: 768px){.input{width:768px}}.results{min-height:200px;max-width:100%}.hit{margin-top:0.5rem;margin-bottom:0.5rem;display:block;border-width:1px;background-color:rgb(18 24 27 / var(--tw-bg-opacity));--tw-bg-opacity:0.5;padding:1rem;font-family:sofia-pro, sans-serif;text-decoration-line:none;--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.hit-description{display:block;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(178 190 205 / var(--tw-text-opacity))}.hit-title{font-size:1.125rem;line-height:1.75rem;font-weight:700}.hit-type{font-weight:300;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.no-results{text-align:center;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(178 190 205 / var(--tw-text-opacity))}.active{--tw-bg-opacity:1;background-color:rgb(249 115 22 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.active .hit-description{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}footer{margin-top:1.5rem;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgb(178 190 205 / var(--tw-text-opacity))}kbd{cursor:pointer;border-radius:0.375rem;border-width:1px;border-style:solid;--tw-border-opacity:1;border-color:rgb(249 115 22 / var(--tw-border-opacity));background-color:transparent;--tw-bg-opacity:0.5;padding:0.375rem;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgb(178 190 205 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}kbd:hover{--tw-bg-opacity:1;background-color:rgb(249 115 22 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.kbd-text{margin-right:0.75rem}",this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},wm,mm,X,{},null),e&&e.target&&h(e.target,this,e.anchor)}}customElements.define("algolia-search",_m);class Nr{constructor(e,t,r){an(this,"vimeoPlayer");an(this,"ytPlayer");an(this,"listener");this.video=e,this.el=t,this.type=r}async setupPlayer(){if(this.type==="youtube"){const e=(await lt(()=>import("./index.593cd389.js").then(t=>t.i),[])).default;this.ytPlayer=e(this.el),this.ytPlayer.cueVideoById(this.video)}else{const e=(await lt(()=>import("./player.es.da321c0d.js"),[])).default;this.vimeoPlayer=new e(this.el,{id:this.video})}}static async create(e,t,r){const i=new Nr(e,t,r);return await i.setupPlayer(),i}play(){this.type==="youtube"?this.ytPlayer.playVideo():this.vimeoPlayer.play()}destroy(){this.type==="youtube"?(this.ytPlayer.off(this.listener),this.ytPlayer.destroy()):(this.vimeoPlayer.off("ended"),this.vimeoPlayer.destroy())}onEnded(e){this.type==="youtube"?this.listener=this.ytPlayer.on("stateChange",t=>{t.data===0&&e()}):this.listener=this.vimeoPlayer.on("ended",e)}}function ym(n){var u;let e,t,r,i,o,s,a,l,c=((u=n[6])==null?void 0:u.price)&&po();return{c(){e=b("div"),t=b("if-user"),r=b("h5"),r.textContent="Permission Denied",i=S(),c&&c.c(),o=S(),s=b("div"),s.innerHTML=`<p><a href="/pro/" class="text-pro">Upgrade to PRO</a></p> 
        <p class="text-light">Unlock all Fireship content &amp;&amp; bonus perks</p>`,a=S(),l=b("modal-action"),l.innerHTML='You must be <span class="hl-blue">signed in</span> to watch.',_(r,"class","denied"),_(s,"class","buy-box green"),Ee(l,"slot","signed-out"),Ee(l,"name","signin"),Ee(l,"type","open"),_(e,"class","upgrade-required")},m(d,f){h(d,e,f),m(e,t),m(t,r),m(t,i),c&&c.m(t,null),m(t,o),m(t,s),m(t,a),m(t,l)},p(d,f){var p;(p=d[6])!=null&&p.price?c||(c=po(),c.c(),c.m(t,o)):c&&(c.d(1),c=null)},d(d){d&&g(e),c&&c.d()}}}function vm(n){let e,t,r,i,o,s,a,l,c,u,d,f,p,w,v,y,I;return{c(){e=b("div"),t=b("div"),r=S(),i=b("div"),o=b("p"),s=O("Autoplaying next video in "),a=b("span"),l=O(n[3]),c=O(" seconds..."),u=S(),d=b("div"),f=b("button"),f.textContent="Cancel",p=S(),w=b("button"),w.textContent="Go",v=S(),_(t,"class","vid"),_(a,"class","big-text"),_(f,"class","btn"),_(w,"class","btn btn-blue"),_(i,"class","autoplay-cover"),te(i,"active",n[2]),_(e,"class","wrapper")},m(E,k){h(E,e,k),m(e,t),n[11](t),m(e,r),m(e,i),m(i,o),m(o,s),m(o,a),m(a,l),m(o,c),m(i,u),m(i,d),m(d,f),m(d,p),m(d,w),m(e,v),y||(I=[B(f,"click",n[7]),B(w,"click",n[12])],y=!0)},p(E,k){k&8&&H(l,E[3]),k&4&&te(i,"active",E[2])},d(E){E&&g(e),n[11](null),y=!1,pe(I)}}}function po(n){let e,t,r;return{c(){e=b("div"),e.innerHTML=`<buy-course></buy-course> 
          <p class="text-light">Lifetime access for a blazingly low price</p>`,t=S(),r=b("h3"),r.textContent="OR",_(e,"class","buy-box")},m(i,o){h(i,e,o),h(i,t,o),h(i,r,o)},d(i){i&&g(e),i&&g(t),i&&g(r)}}}function km(n){let e;function t(o,s){return o[0]||o[5]?vm:ym}let r=t(n),i=r(n);return{c(){i.c(),e=re(),this.c=T},m(o,s){i.m(o,s),h(o,e,s)},p(o,[s]){r===(r=t(o))&&i?i.p(o,s):(i.d(1),i=r(o),i&&(i.c(),i.m(e.parentNode,e)))},i:T,o:T,d(o){i.d(o),o&&g(e)}}}function Im(n,e,t){let r,i,o,s;oe(n,Tn,P=>t(4,r=P)),oe(n,Xt,P=>t(17,i=P)),oe(n,Jt,P=>t(5,o=P)),oe(n,Na,P=>t(6,s=P));var a=this&&this.__awaiter||function(P,F,z,U){function M(V){return V instanceof z?V:new z(function(W){W(V)})}return new(z||(z=Promise))(function(V,W){function ie(ue){try{Se(U.next(ue))}catch(Le){W(Le)}}function he(ue){try{Se(U.throw(ue))}catch(Le){W(Le)}}function Se(ue){ue.done?V(ue.value):M(ue.value).then(ie,he)}Se((U=U.apply(P,F||[])).next())})};let{video:l}=e,{type:c}=e,{free:u=!1}=e,{single:d=!1}=e,f,p,w=!1,v,y,I=10,E;ht(()=>{l||t(8,l=(r==null?void 0:r.vimeo)||(r==null?void 0:r.youtube)),t(9,c=r!=null&&r.vimeo?"vimeo":"youtube");const P=Jt.subscribe(F=>a(void 0,void 0,void 0,function*(){l&&!E&&(F||u)&&(yield tl(),k())}));return()=>{E==null||E.destroy(),v&&clearTimeout(v),y&&clearInterval(y),p&&p(),P()}});function k(){return a(this,void 0,void 0,function*(){E=yield Nr.create(l,f,c);const P=window.location.search.includes("autoplay");p=Xt.subscribe(F=>{F&&P&&E.play()}),E.onEnded(()=>{!d&&i&&(r==null?void 0:r.next)&&(t(2,w=!0),C(),v=setTimeout(()=>{cr.go(r.next+"?autoplay=true")},1e4)),!d&&!(r!=null&&r.next)&&be.set({message:"Well done! You reached the end of this course.",type:"success",icon:"\u{1F370}"})})})}function C(){clearInterval(y),y=setInterval(()=>{t(3,I--,I)},1e3)}function $(){t(2,w=!1),t(3,I=10),clearTimeout(v),clearInterval(y)}function N(P){ct[P?"unshift":"push"](()=>{f=P,t(1,f)})}const D=()=>cr.go(r.next+"?autoplay=true");return n.$$set=P=>{"video"in P&&t(8,l=P.video),"type"in P&&t(9,c=P.type),"free"in P&&t(0,u=P.free),"single"in P&&t(10,d=P.single)},[u,f,w,I,r,o,s,$,l,c,d,N,D]}class Em extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=`.wrapper{position:relative;aspect-ratio:16 / 9;width:100%;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity:0.5
}.autoplay-cover{position:absolute;inset:0px;display:none;flex-direction:column;align-items:center;justify-content:center;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity:0.95;font-size:1.125rem;line-height:1.75rem
}.active{display:flex
}.btn{margin-left:0.25rem;margin-right:0.25rem;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgb(239 68 68 / var(--tw-bg-opacity));padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;font-family:cubano, sans-serif;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px
}.btn-blue{--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity))
}.upgrade-required{display:flex;aspect-ratio:16 / 9
}@keyframes pulse{50%{opacity:.5
    }}.upgrade-required{animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;flex-direction:column;align-items:center;justify-content:center;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity:0.75;text-align:center;font-size:1.25rem;line-height:1.75rem
}.hl-blue{cursor:pointer;font-family:cubano, sans-serif;--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity))
}.denied{display:none;--tw-text-opacity:1;color:rgb(239 68 68 / var(--tw-text-opacity))
}@media(min-width: 768px){.denied{display:block
    }}.big-text{font-family:cubano, sans-serif;font-size:2.25rem;line-height:2.5rem
}.buy-box{margin-left:auto;margin-right:auto;max-width:24rem;border-radius:0.5rem;border-width:1px;border-style:solid;--tw-border-opacity:1;border-color:rgb(59 130 246 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(18 24 27 / var(--tw-bg-opacity));padding:1.5rem;--tw-shadow:0 5px 20px rgb(0 0 0 / 30%);--tw-shadow-colored:0 5px 20px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}.buy-box.green{margin-top:1rem;--tw-border-opacity:1;border-color:rgb(34 197 94 / var(--tw-border-opacity))
}.buy-box p{margin-top:0px;margin-bottom:0px
}.text-light{margin-top:0px;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(108 121 131 / var(--tw-text-opacity))
}.text-pro{font-family:cubano, sans-serif;font-size:1.25rem;line-height:1.75rem;--tw-text-opacity:1;color:rgb(34 197 94 / var(--tw-text-opacity));text-decoration-line:none
}h3{display:none;font-family:cubano, sans-serif;--tw-text-opacity:1;color:rgb(108 121 131 / var(--tw-text-opacity))
}@media(min-width: 768px){h3{display:block
    }}iframe{position:absolute;top:0px;left:0px;height:100%;width:100%
}`,this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},Im,km,X,{video:8,type:9,free:0,single:10},null),e&&(e.target&&h(e.target,this,e.anchor),e.props&&(this.$set(e.props),J()))}static get observedAttributes(){return["video","type","free","single"]}get video(){return this.$$.ctx[8]}set video(e){this.$$set({video:e}),J()}get type(){return this.$$.ctx[9]}set type(e){this.$$set({type:e}),J()}get free(){return this.$$.ctx[0]}set free(e){this.$$set({free:e}),J()}get single(){return this.$$.ctx[10]}set single(e){this.$$set({single:e}),J()}}customElements.define("video-player",Em);function Tm(n){let e,t,r,i,o,s;return{c(){e=b("label"),t=b("input"),r=S(),i=b("span"),this.c=T,_(t,"type","checkbox"),t.checked=n[0],_(i,"class","slider"),_(e,"class","switch")},m(a,l){h(a,e,l),m(e,t),m(e,r),m(e,i),o||(s=B(t,"change",n[1]),o=!0)},p(a,[l]){l&1&&(t.checked=a[0])},i:T,o:T,d(a){a&&g(e),o=!1,s()}}}function Cm(n,e,t){let r;oe(n,Xt,o=>t(0,r=o));function i(o){Xt.set(o.target.checked)}return[r,i]}class Sm extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=`.switch{position:relative;display:inline-block;height:1.25rem;width:2.5rem
}.switch input{height:0px;width:0px;opacity:0
}.slider{position:absolute;inset:0px;cursor:pointer;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(69 78 86 / var(--tw-bg-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms
}.slider:before{position:absolute;left:0.125rem;bottom:0.125rem;z-index:10;height:1rem;width:1rem;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(18 24 27 / var(--tw-bg-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;content:""
}input:checked+.slider{--tw-bg-opacity:1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))
}input:focus+.slider{--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}input:checked+.slider:before{--tw-translate-x:1.25rem;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}`,this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},Cm,Tm,X,{},null),e&&e.target&&h(e.target,this,e.anchor)}}customElements.define("autoplay-toggle",Sm);function xm(n){let e;return{c(){e=b("span"),e.textContent="Course not available for single purchase",_(e,"class","btn yellow")},m(t,r){h(t,e,r)},p:T,d(t){t&&g(e)}}}function Am(n){var w;let e,t,r=n[0]?"loading...":"buy this course",i,o,s,a,l=((w=n[2])==null?void 0:w.amount)+"",c,u,d,f,p=n[0]&&ho();return{c(){e=b("span"),p&&p.c(),t=S(),i=O(r),o=O(` 
      for `),s=b("strong"),a=O("$"),c=O(l),u=O("."),_(e,"class","btn"),_(s,"class","font-display")},m(v,y){h(v,e,y),p&&p.m(e,null),m(e,t),m(e,i),h(v,o,y),h(v,s,y),m(s,a),m(s,c),h(v,u,y),d||(f=B(e,"click",n[3]),d=!0)},p(v,y){var I;v[0]?p||(p=ho(),p.c(),p.m(e,t)):p&&(p.d(1),p=null),y&1&&r!==(r=v[0]?"loading...":"buy this course")&&H(i,r),y&4&&l!==(l=((I=v[2])==null?void 0:I.amount)+"")&&H(c,l)},d(v){v&&g(e),p&&p.d(),v&&g(o),v&&g(s),v&&g(u),d=!1,f()}}}function ho(n){let e;return{c(){e=b("loading-spinner")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function mo(n){let e,t;return{c(){e=b("a"),t=O("Open Checkout Page"),_(e,"target","_blank"),_(e,"href",n[1])},m(r,i){h(r,e,i),m(e,t)},p(r,i){i&2&&_(e,"href",r[1])},d(r){r&&g(e)}}}function Rm(n){let e,t;function r(a,l){var c;return(c=a[2])!=null&&c.price?Am:xm}let i=r(n),o=i(n),s=n[1]&&mo(n);return{c(){o.c(),e=S(),s&&s.c(),t=re(),this.c=T},m(a,l){o.m(a,l),h(a,e,l),s&&s.m(a,l),h(a,t,l)},p(a,[l]){i===(i=r(a))&&o?o.p(a,l):(o.d(1),o=i(a),o&&(o.c(),o.m(e.parentNode,e))),a[1]?s?s.p(a,l):(s=mo(a),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},i:T,o:T,d(a){o.d(a),a&&g(e),s&&s.d(a),a&&g(t)}}}function Om(n,e,t){let r;oe(n,Na,l=>t(2,r=l));var i=this&&this.__awaiter||function(l,c,u,d){function f(p){return p instanceof u?p:new u(function(w){w(p)})}return new(u||(u=Promise))(function(p,w){function v(E){try{I(d.next(E))}catch(k){w(k)}}function y(E){try{I(d.throw(E))}catch(k){w(k)}}function I(E){E.done?p(E.value):f(E.value).then(v,y)}I((d=d.apply(l,c||[])).next())})};let o=!1,s;function a(){var l;return i(this,void 0,void 0,function*(){t(0,o=!0),t(1,s=yield we({fn:"createPaymentSession",payload:{productId:r.id,price:r.price,productType:"course"}})),s&&((l=window.open(s,"_blank"))===null||l===void 0||l.focus()),t(0,o=!1)})}return[o,s,r,a]}class Nm extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=`.btn{cursor:pointer;font-family:cubano, sans-serif;font-size:1.25rem;line-height:1.75rem;--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity))
}.btn.yellow{cursor:default;--tw-text-opacity:1;color:rgb(234 179 8 / var(--tw-text-opacity))
}a{display:block;text-align:center;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity))
}`,this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},Om,Rm,X,{},null),e&&e.target&&h(e.target,this,e.anchor)}}customElements.define("buy-course",Nm);function go(n){let e;return{c(){e=b("loading-spinner")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function bo(n){let e,t;return{c(){e=b("a"),t=O("Open Checkout Page"),_(e,"target","_blank"),_(e,"href",n[1])},m(r,i){h(r,e,i),m(e,t)},p(r,i){i&2&&_(e,"href",r[1])},d(r){r&&g(e)}}}function Pm(n){let e,t,r=n[0]?"loading...":"subscribe",i,o,s,a,l,c=n[0]&&go(),u=n[1]&&bo(n);return{c(){e=b("button"),c&&c.c(),t=S(),i=O(r),o=S(),u&&u.c(),s=re(),this.c=T,_(e,"class","btn btn-blue"),e.disabled=n[0]},m(d,f){h(d,e,f),c&&c.m(e,null),m(e,t),m(e,i),h(d,o,f),u&&u.m(d,f),h(d,s,f),a||(l=B(e,"click",n[2]),a=!0)},p(d,[f]){d[0]?c||(c=go(),c.c(),c.m(e,t)):c&&(c.d(1),c=null),f&1&&r!==(r=d[0]?"loading...":"subscribe")&&H(i,r),f&1&&(e.disabled=d[0]),d[1]?u?u.p(d,f):(u=bo(d),u.c(),u.m(s.parentNode,s)):u&&(u.d(1),u=null)},i:T,o:T,d(d){d&&g(e),c&&c.d(),d&&g(o),u&&u.d(d),d&&g(s),a=!1,l()}}}function Lm(n,e,t){let r;oe(n,zt,l=>t(3,r=l));var i=this&&this.__awaiter||function(l,c,u,d){function f(p){return p instanceof u?p:new u(function(w){w(p)})}return new(u||(u=Promise))(function(p,w){function v(E){try{I(d.next(E))}catch(k){w(k)}}function y(E){try{I(d.throw(E))}catch(k){w(k)}}function I(E){E.done?p(E.value):f(E.value).then(v,y)}I((d=d.apply(l,c||[])).next())})};let o=!1,s;function a(){var l;return i(this,void 0,void 0,function*(){t(0,o=!0);const c=xt[r].price;t(1,s=yield we({fn:"createSubscriptionSession",payload:{price:c}})),s&&((l=window.open(s,"_blank"))===null||l===void 0||l.focus()),t(0,o=!1)})}return[o,s,a]}class Dm extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=`.btn{margin-top:0.125rem;margin-bottom:0.125rem;display:inline-flex;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));padding-left:1.25rem;padding-right:1.25rem;padding-top:0.5rem;padding-bottom:0.5rem;text-align:center;font-family:sofia-pro, sans-serif;font-size:0.875rem;line-height:1.25rem;font-weight:700;text-transform:uppercase;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));text-decoration-line:none;--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);outline:2px solid transparent;outline-offset:2px
}.btn:hover{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))
}.btn:disabled{cursor:not-allowed;opacity:0.7
}a{display:block;text-align:center;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity))
}`,this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},Lm,Pm,X,{},null),e&&e.target&&h(e.target,this,e.anchor)}}customElements.define("buy-pro",Dm);function wo(n){let e,t,r,i,o,s,a,l;return{c(){e=b("div"),t=b("button"),t.textContent="-",r=S(),i=b("input"),o=S(),s=b("button"),s.textContent="+",_(t,"class","btn-o"),_(i,"type","number"),_(i,"min","5"),_(i,"max","50"),_(s,"class","btn-o"),_(e,"class","controls")},m(c,u){h(c,e,u),m(e,t),m(e,r),m(e,i),fe(i,n[2]),m(e,o),m(e,s),a||(l=[B(t,"click",n[7]),B(i,"input",n[8]),B(i,"change",n[9]),B(s,"click",n[10])],a=!0)},p(c,u){u&4&&us(i.value)!==c[2]&&fe(i,c[2])},d(c){c&&g(e),a=!1,pe(l)}}}function _o(n){let e;return{c(){e=b("loading-spinner")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function yo(n){let e,t;return{c(){e=b("a"),t=O("Open Checkout Page"),_(e,"target","_blank"),_(e,"href",n[3])},m(r,i){h(r,e,i),m(e,t)},p(r,i){i&8&&_(e,"href",r[3])},d(r){r&&g(e)}}}function Mm(n){let e,t,r,i=(n[1]?"loading...":n[4])+"",o,s,a,l,c,u=n[0]&&wo(n),d=n[1]&&_o(),f=n[3]&&yo(n);return{c(){u&&u.c(),e=S(),t=b("button"),d&&d.c(),r=S(),o=O(i),s=S(),f&&f.c(),a=re(),this.c=T,_(t,"class","btn"),t.disabled=n[1],te(t,"btn-blue",n[0])},m(p,w){u&&u.m(p,w),h(p,e,w),h(p,t,w),d&&d.m(t,null),m(t,r),m(t,o),h(p,s,w),f&&f.m(p,w),h(p,a,w),l||(c=B(t,"click",n[6]),l=!0)},p(p,[w]){p[0]?u?u.p(p,w):(u=wo(p),u.c(),u.m(e.parentNode,e)):u&&(u.d(1),u=null),p[1]?d||(d=_o(),d.c(),d.m(t,r)):d&&(d.d(1),d=null),w&2&&i!==(i=(p[1]?"loading...":p[4])+"")&&H(o,i),w&2&&(t.disabled=p[1]),w&1&&te(t,"btn-blue",p[0]),p[3]?f?f.p(p,w):(f=yo(p),f.c(),f.m(a.parentNode,a)):f&&(f.d(1),f=null)},i:T,o:T,d(p){u&&u.d(p),p&&g(e),p&&g(t),d&&d.d(),p&&g(s),f&&f.d(p),p&&g(a),l=!1,c()}}}function Um(n,e,t){var r=this&&this.__awaiter||function(y,I,E,k){function C($){return $ instanceof E?$:new E(function(N){N($)})}return new(E||(E=Promise))(function($,N){function D(z){try{F(k.next(z))}catch(U){N(U)}}function P(z){try{F(k.throw(z))}catch(U){N(U)}}function F(z){z.done?$(z.value):C(z.value).then(D,P)}F((k=k.apply(y,I||[])).next())})};let i=!1,{enterprise:o=!1}=e,s=o?"upgrade my team":"upgrade for life",a=o?xt.enterprise.price:xt.lifetime.price,l=5,c="";function u(y){t(2,l=y),l<5&&(t(2,l=5),be.set({message:"This plan has a 5 seat minimum",type:"error"})),l>50&&(t(2,l=50),be.set({message:"Maximum 50 seats. Contact for larger plans",type:"error"}))}function d(){var y;return r(this,void 0,void 0,function*(){t(1,i=!0),t(3,c=yield we({fn:"createPaymentSession",payload:{productType:o?"enterprise":"lifetime",price:a,seats:o?l:1}})),c&&((y=window.open(c,"_blank"))===null||y===void 0||y.focus()),t(1,i=!1)})}const f=()=>u(l-1);function p(){l=us(this.value),t(2,l)}const w=y=>u(y.target.value),v=()=>u(l+1);return n.$$set=y=>{"enterprise"in y&&t(0,o=y.enterprise)},[o,i,l,c,s,u,d,f,p,w,v]}class Fm extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=`input{margin-left:auto;margin-right:auto;width:3rem;border-style:none;--tw-bg-opacity:1;background-color:rgb(18 24 27 / var(--tw-bg-opacity));padding:0.5rem;text-align:center;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px
}.btn{margin-top:0.125rem;margin-bottom:0.125rem;display:inline-flex;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgb(168 85 247 / var(--tw-bg-opacity));padding-left:1.25rem;padding-right:1.25rem;padding-top:0.5rem;padding-bottom:0.5rem;text-align:center;font-family:sofia-pro, sans-serif;font-size:0.875rem;line-height:1.25rem;font-weight:700;text-transform:uppercase;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));text-decoration-line:none;--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);outline:2px solid transparent;outline-offset:2px
}.btn:hover{--tw-bg-opacity:1;background-color:rgb(126 34 206 / var(--tw-bg-opacity))
}.btn:disabled{cursor:not-allowed;opacity:0.7
}.btn-blue{--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity))
}.btn-blue:hover{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))
}.btn-o{margin:0px;cursor:pointer;border-radius:0.125rem;border-width:1px;border-style:solid;--tw-border-opacity:1;border-color:rgb(249 115 22 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(42 46 53 / var(--tw-bg-opacity));padding:0.375rem;font-family:sofia-pro, sans-serif;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgb(178 190 205 / var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms
}.btn-o:hover{--tw-bg-opacity:1;background-color:rgb(249 115 22 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))
}.controls{margin-top:0.75rem;margin-bottom:0.75rem;text-align:center
}a{display:block;text-align:center;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity))
}`,this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},Um,Mm,X,{enterprise:0},null),e&&(e.target&&h(e.target,this,e.anchor),e.props&&(this.$set(e.props),J()))}static get observedAttributes(){return["enterprise"]}get enterprise(){return this.$$.ctx[0]}set enterprise(e){this.$$set({enterprise:e}),J()}}customElements.define("buy-lifetime",Fm);function vo(n){let e;return{c(){e=b("loading-spinner")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function zm(n){let e,t,r=n[0]?"loading...":"subscription & invoices",i,o,s,a=n[0]&&vo();return{c(){e=b("button"),a&&a.c(),t=S(),i=O(r),this.c=T},m(l,c){h(l,e,c),a&&a.m(e,null),m(e,t),m(e,i),o||(s=B(e,"click",n[1]),o=!0)},p(l,[c]){l[0]?a||(a=vo(),a.c(),a.m(e,t)):a&&(a.d(1),a=null),c&1&&r!==(r=l[0]?"loading...":"subscription & invoices")&&H(i,r)},i:T,o:T,d(l){l&&g(e),a&&a.d(),o=!1,s()}}}function Bm(n,e,t){var r=this&&this.__awaiter||function(s,a,l,c){function u(d){return d instanceof l?d:new l(function(f){f(d)})}return new(l||(l=Promise))(function(d,f){function p(y){try{v(c.next(y))}catch(I){f(I)}}function w(y){try{v(c.throw(y))}catch(I){f(I)}}function v(y){y.done?d(y.value):u(y.value).then(p,w)}v((c=c.apply(s,a||[])).next())})};let i=!1;function o(){var s;return r(this,void 0,void 0,function*(){t(0,i=!0);const a=yield we({fn:"createPortalSession",payload:{}});a&&((s=window.open(a,"_blank"))===null||s===void 0||s.focus()),t(0,i=!1)})}return[i,o]}class jm extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=`button{display:inline-flex;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));padding-left:1.25rem;padding-right:1.25rem;padding-top:0.5rem;padding-bottom:0.5rem;text-align:center;font-family:sofia-pro, sans-serif;font-size:0.875rem;line-height:1.25rem;font-weight:700;text-transform:uppercase;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));text-decoration-line:none
}button:hover{--tw-bg-opacity:1;background-color:rgb(37 99 235 / var(--tw-bg-opacity))
}button:active{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))
}`,this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},Bm,zm,X,{},null),e&&e.target&&h(e.target,this,e.anchor)}}customElements.define("customer-portal",jm);function ko(n,e,t){const r=n.slice();return r[5]=e[t],r}function Io(n){let e,t,r=n[0]?"loading...":"get receipts",i,o,s,a=n[0]&&Eo();return{c(){e=b("button"),a&&a.c(),t=S(),i=O(r)},m(l,c){h(l,e,c),a&&a.m(e,null),m(e,t),m(e,i),o||(s=B(e,"click",n[2]),o=!0)},p(l,c){l[0]?a||(a=Eo(),a.c(),a.m(e,t)):a&&(a.d(1),a=null),c&1&&r!==(r=l[0]?"loading...":"get receipts")&&H(i,r)},d(l){l&&g(e),a&&a.d(),o=!1,s()}}}function Eo(n){let e;return{c(){e=b("loading-spinner")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function To(n){let e,t,r,i,o,s,a,l=n[1],c=[];for(let d=0;d<l.length;d+=1)c[d]=Co(ko(n,l,d));let u=!n[1].length&&So();return{c(){e=b("button"),e.textContent="Hide Receipts",t=S(),r=b("ul");for(let d=0;d<c.length;d+=1)c[d].c();i=S(),u&&u.c(),o=re()},m(d,f){h(d,e,f),h(d,t,f),h(d,r,f);for(let p=0;p<c.length;p+=1)c[p]&&c[p].m(r,null);h(d,i,f),u&&u.m(d,f),h(d,o,f),s||(a=B(e,"click",n[3]),s=!0)},p(d,f){if(f&2){l=d[1];let p;for(p=0;p<l.length;p+=1){const w=ko(d,l,p);c[p]?c[p].p(w,f):(c[p]=Co(w),c[p].c(),c[p].m(r,null))}for(;p<c.length;p+=1)c[p].d(1);c.length=l.length}d[1].length?u&&(u.d(1),u=null):u||(u=So(),u.c(),u.m(o.parentNode,o))},d(d){d&&g(e),d&&g(t),d&&g(r),rt(c,d),d&&g(i),u&&u.d(d),d&&g(o),s=!1,a()}}}function Co(n){let e,t,r=n[5].id+"",i,o,s,a,l,c=n[5].amount/100+"",u,d,f=new Date(n[5].created*1e3).toLocaleDateString()+"",p,w;return{c(){e=b("li"),t=b("a"),i=O(r),s=O(` for
        `),a=b("strong"),l=O("$"),u=O(c),d=O(" on "),p=O(f),w=S(),_(t,"target","_blank"),_(t,"href",o=n[5].receipt_url)},m(v,y){h(v,e,y),m(e,t),m(t,i),m(e,s),m(e,a),m(a,l),m(a,u),m(e,d),m(e,p),m(e,w)},p(v,y){y&2&&r!==(r=v[5].id+"")&&H(i,r),y&2&&o!==(o=v[5].receipt_url)&&_(t,"href",o),y&2&&c!==(c=v[5].amount/100+"")&&H(u,c),y&2&&f!==(f=new Date(v[5].created*1e3).toLocaleDateString()+"")&&H(p,f)},d(v){v&&g(e)}}}function So(n){let e;return{c(){e=b("p"),e.textContent="No charges found"},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function $m(n){let e,t,r=!n[1]&&Io(n),i=n[1]&&To(n);return{c(){r&&r.c(),e=S(),i&&i.c(),t=re(),this.c=T},m(o,s){r&&r.m(o,s),h(o,e,s),i&&i.m(o,s),h(o,t,s)},p(o,[s]){o[1]?r&&(r.d(1),r=null):r?r.p(o,s):(r=Io(o),r.c(),r.m(e.parentNode,e)),o[1]?i?i.p(o,s):(i=To(o),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null)},i:T,o:T,d(o){r&&r.d(o),o&&g(e),i&&i.d(o),o&&g(t)}}}function Hm(n,e,t){var r=this&&this.__awaiter||function(l,c,u,d){function f(p){return p instanceof u?p:new u(function(w){w(p)})}return new(u||(u=Promise))(function(p,w){function v(E){try{I(d.next(E))}catch(k){w(k)}}function y(E){try{I(d.throw(E))}catch(k){w(k)}}function I(E){E.done?p(E.value):f(E.value).then(v,y)}I((d=d.apply(l,c||[])).next())})};let i=!1,o=null;function s(){var l;return r(this,void 0,void 0,function*(){t(0,i=!0);const c=(l=yield we({fn:"getCharges",payload:{}}))!==null&&l!==void 0?l:[];t(1,o=c.data||[]),t(0,i=!1)})}return[i,o,s,()=>t(1,o=null)]}class Vm extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=`button{display:inline-flex;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));padding-left:1.25rem;padding-right:1.25rem;padding-top:0.5rem;padding-bottom:0.5rem;text-align:center;font-family:sofia-pro, sans-serif;font-size:0.875rem;line-height:1.25rem;font-weight:700;text-transform:uppercase;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));text-decoration-line:none
}button:hover{--tw-bg-opacity:1;background-color:rgb(37 99 235 / var(--tw-bg-opacity))
}button:active{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))
}a{--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity))
}`,this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},Hm,$m,X,{},null),e&&e.target&&h(e.target,this,e.anchor)}}customElements.define("user-charges",Vm);function xo(n){let e=n[2][n[1]]+"",t,r,i,o;return{c(){t=O(e),r=b("span"),i=O("/"),o=O(n[1]),_(r,"class","period")},m(s,a){h(s,t,a),h(s,r,a),m(r,i),m(r,o)},p(s,a){a&2&&e!==(e=s[2][s[1]]+"")&&H(t,e),a&2&&H(o,s[1])},d(s){s&&g(t),s&&g(r)}}}function Ao(n){let e,t;return{c(){e=b("span"),t=O(n[1])},m(r,i){h(r,e,i),m(e,t)},p(r,i){i&2&&H(t,r[1])},d(r){r&&g(e)}}}function Ro(n){let e,t,r,i,o,s,a;return{c(){e=b("button"),e.textContent="Month",t=S(),r=b("button"),r.textContent="Quarter",i=S(),o=b("button"),o.textContent="Year",_(e,"class","btn"),te(e,"active",n[1]=="month"),_(r,"class","btn"),te(r,"active",n[1]=="quarter"),_(o,"class","btn"),te(o,"active",n[1]=="year")},m(l,c){h(l,e,c),h(l,t,c),h(l,r,c),h(l,i,c),h(l,o,c),s||(a=[B(e,"click",n[3]),B(r,"click",n[4]),B(o,"click",n[5])],s=!0)},p(l,c){c&2&&te(e,"active",l[1]=="month"),c&2&&te(r,"active",l[1]=="quarter"),c&2&&te(o,"active",l[1]=="year")},d(l){l&&g(e),l&&g(t),l&&g(r),l&&g(i),l&&g(o),s=!1,pe(a)}}}function qm(n){let e,t,r,i=n[0]=="amount"&&xo(n),o=n[0]=="period"&&Ao(n),s=n[0]=="control"&&Ro(n);return{c(){i&&i.c(),e=S(),o&&o.c(),t=S(),s&&s.c(),r=re(),this.c=T},m(a,l){i&&i.m(a,l),h(a,e,l),o&&o.m(a,l),h(a,t,l),s&&s.m(a,l),h(a,r,l)},p(a,[l]){a[0]=="amount"?i?i.p(a,l):(i=xo(a),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),a[0]=="period"?o?o.p(a,l):(o=Ao(a),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null),a[0]=="control"?s?s.p(a,l):(s=Ro(a),s.c(),s.m(r.parentNode,r)):s&&(s.d(1),s=null)},i:T,o:T,d(a){i&&i.d(a),a&&g(e),o&&o.d(a),a&&g(t),s&&s.d(a),a&&g(r)}}}function Wm(n,e,t){let r;oe(n,zt,c=>t(1,r=c));let{show:i="amount"}=e;const o={month:29,quarter:69,year:199},s=()=>zt.set("month"),a=()=>zt.set("quarter"),l=()=>zt.set("year");return n.$$set=c=>{"show"in c&&t(0,i=c.show)},[i,r,o,s,a,l]}class Gm extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=`.btn{margin:0px;cursor:pointer;border-radius:0.375rem;border-width:1px;border-style:solid;--tw-border-opacity:1;border-color:rgb(249 115 22 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(42 46 53 / var(--tw-bg-opacity));padding:0.375rem;font-family:sofia-pro, sans-serif;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgb(178 190 205 / var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms
}.btn:hover{--tw-bg-opacity:1;background-color:rgb(249 115 22 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))
}.btn.active{--tw-bg-opacity:1;background-color:rgb(249 115 22 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))
}.period{font-family:sofia-pro, sans-serif;font-size:1rem;line-height:1.5rem;--tw-text-opacity:1;color:rgb(219 225 232 / var(--tw-text-opacity))
}`,this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},Wm,qm,X,{show:0},null),e&&(e.target&&h(e.target,this,e.anchor),e.props&&(this.$set(e.props),J()))}static get observedAttributes(){return["show"]}get show(){return this.$$.ctx[0]}set show(e){this.$$set({show:e}),J()}}customElements.define("price-select",Gm);function Oo(n,e,t){const r=n.slice();return r[14]=e[t],r}function No(n){var z;let e,t,r,i,o=n[5].length+"",s,a,l=((z=n[0])==null?void 0:z.seats)+"",c,u,d,f,p,w,v,y,I,E,k,C,$;function N(U,M){return U[5]?Ym:Km}let D=N(n),P=D(n),F=n[1]&&Lo();return{c(){e=b("h2"),e.textContent="Assign Seats",t=S(),r=b("p"),i=O("You have used "),s=O(o),a=O(" of "),c=O(l),u=O(" seats"),d=S(),f=b("div"),P.c(),p=S(),w=b("div"),v=b("input"),y=S(),I=b("button"),F&&F.c(),E=O(`
            assign`),_(v,"type","email"),_(v,"placeholder","email"),v.required=!0,_(I,"class","btn"),I.disabled=k=n[1]||!n[2]||!n[3],_(w,"class","seat"),_(f,"class","wrap")},m(U,M){h(U,e,M),h(U,t,M),h(U,r,M),m(r,i),m(r,s),m(r,a),m(r,c),m(r,u),h(U,d,M),h(U,f,M),P.m(f,null),m(f,p),m(f,w),m(w,v),fe(v,n[3]),n[12](v),m(w,y),m(w,I),F&&F.m(I,null),m(I,E),C||($=[B(v,"input",n[11]),B(v,"input",n[7]),B(I,"click",n[8])],C=!0)},p(U,M){var V;M&32&&o!==(o=U[5].length+"")&&H(s,o),M&1&&l!==(l=((V=U[0])==null?void 0:V.seats)+"")&&H(c,l),D===(D=N(U))&&P?P.p(U,M):(P.d(1),P=D(U),P&&(P.c(),P.m(f,p))),M&8&&v.value!==U[3]&&fe(v,U[3]),U[1]?F||(F=Lo(),F.c(),F.m(I,E)):F&&(F.d(1),F=null),M&14&&k!==(k=U[1]||!U[2]||!U[3])&&(I.disabled=k)},d(U){U&&g(e),U&&g(t),U&&g(r),U&&g(d),U&&g(f),P.d(),n[12](null),F&&F.d(),C=!1,pe($)}}}function Km(n){let e;return{c(){e=b("p"),e.textContent="You have not assigned any seats yet"},m(t,r){h(t,e,r)},p:T,d(t){t&&g(e)}}}function Ym(n){let e,t=n[5],r=[];for(let i=0;i<t.length;i+=1)r[i]=Po(Oo(n,t,i));return{c(){for(let i=0;i<r.length;i+=1)r[i].c();e=re()},m(i,o){for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(i,o);h(i,e,o)},p(i,o){if(o&546){t=i[5];let s;for(s=0;s<t.length;s+=1){const a=Oo(i,t,s);r[s]?r[s].p(a,o):(r[s]=Po(a),r[s].c(),r[s].m(e.parentNode,e))}for(;s<r.length;s+=1)r[s].d(1);r.length=t.length}},d(i){rt(r,i),i&&g(e)}}}function Po(n){let e,t=n[14]+"",r,i,o,s="revoke",a,l,c,u;function d(){return n[10](n[14])}return{c(){e=b("div"),r=O(t),i=S(),o=b("button"),a=O(s),l=S(),_(o,"class","btn btn-red"),o.disabled=n[1],_(e,"class","seat")},m(f,p){h(f,e,p),m(e,r),m(e,i),m(e,o),m(o,a),m(e,l),c||(u=B(o,"click",d),c=!0)},p(f,p){n=f,p&32&&t!==(t=n[14]+"")&&H(r,t),p&2&&(o.disabled=n[1])},d(f){f&&g(e),c=!1,u()}}}function Lo(n){let e;return{c(){e=b("loading-spinner")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function Jm(n){var r;let e,t=((r=n[6])==null?void 0:r.enterprise)&&No(n);return{c(){t&&t.c(),e=re(),this.c=T},m(i,o){t&&t.m(i,o),h(i,e,o)},p(i,[o]){var s;(s=i[6])!=null&&s.enterprise?t?t.p(i,o):(t=No(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:T,o:T,d(i){t&&t.d(i),i&&g(e)}}}function Xm(n,e,t){let r,i,o;oe(n,lr,I=>t(0,i=I)),oe(n,pt,I=>t(6,o=I));var s=this&&this.__awaiter||function(I,E,k,C){function $(N){return N instanceof k?N:new k(function(D){D(N)})}return new(k||(k=Promise))(function(N,D){function P(U){try{z(C.next(U))}catch(M){D(M)}}function F(U){try{z(C.throw(U))}catch(M){D(M)}}function z(U){U.done?N(U.value):$(U.value).then(P,F)}z((C=C.apply(I,E||[])).next())})};let a=!1,l=!1,c,u;function d(){t(2,l=u.validity.valid)}function f(){return s(this,void 0,void 0,function*(){t(1,a=!0),yield we({fn:"seatAssign",payload:{email:c}}),t(1,a=!1),t(3,c="")})}function p(I){return s(this,void 0,void 0,function*(){t(1,a=!0),yield we({fn:"seatAssign",payload:{email:I,revoke:!0}}),t(1,a=!1)})}const w=I=>p(I);function v(){c=this.value,t(3,c)}function y(I){ct[I?"unshift":"push"](()=>{u=I,t(4,u)})}return n.$$.update=()=>{n.$$.dirty&1&&t(5,r=Object.keys((i==null?void 0:i.assigned)||{}))},[i,a,l,c,u,r,o,d,f,p,w,v,y]}class Zm extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=`.seat{margin-top:0.25rem;margin-bottom:0.25rem;display:flex;justify-content:space-between;--tw-bg-opacity:1;background-color:rgb(42 46 53 / var(--tw-bg-opacity));padding:0.75rem
}.btn{margin:0px;cursor:pointer;border-radius:0.125rem;border-width:1px;border-style:solid;--tw-border-opacity:1;border-color:rgb(59 130 246 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(42 46 53 / var(--tw-bg-opacity));padding:0.375rem;font-family:sofia-pro, sans-serif;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgb(178 190 205 / var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms
}.btn:hover{--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))
}.btn:disabled{cursor:not-allowed;opacity:0.6
}.btn-red{margin-left:0.5rem;--tw-border-opacity:1;border-color:rgb(239 68 68 / var(--tw-border-opacity))
}.btn-red:hover{--tw-bg-opacity:1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))
}input{margin-right:0.75rem;width:100%;border-style:none;--tw-bg-opacity:1;background-color:rgb(18 24 27 / var(--tw-bg-opacity));padding:0.75rem;font-family:sofia-pro, sans-serif;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px
}.wrap{display:flex;max-width:500px;flex-direction:column
}`,this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},Xm,Jm,X,{},null),e&&e.target&&h(e.target,this,e.anchor)}}customElements.define("seat-assign",Zm);function Do(n,e,t){const r=n.slice();return r[5]=e[t],r}function Mo(n){let e,t,r=n[0]?"loading...":"get invoices",i,o,s,a=n[0]&&Uo();return{c(){e=b("button"),a&&a.c(),t=S(),i=O(r)},m(l,c){h(l,e,c),a&&a.m(e,null),m(e,t),m(e,i),o||(s=B(e,"click",n[2]),o=!0)},p(l,c){l[0]?a||(a=Uo(),a.c(),a.m(e,t)):a&&(a.d(1),a=null),c&1&&r!==(r=l[0]?"loading...":"get invoices")&&H(i,r)},d(l){l&&g(e),a&&a.d(),o=!1,s()}}}function Uo(n){let e;return{c(){e=b("loading-spinner")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function Fo(n){let e,t,r,i,o,s,a,l=n[1],c=[];for(let d=0;d<l.length;d+=1)c[d]=zo(Do(n,l,d));let u=!n[1].length&&Bo();return{c(){e=b("button"),e.textContent="Hide Invoices",t=S(),r=b("ul");for(let d=0;d<c.length;d+=1)c[d].c();i=S(),u&&u.c(),o=re()},m(d,f){h(d,e,f),h(d,t,f),h(d,r,f);for(let p=0;p<c.length;p+=1)c[p]&&c[p].m(r,null);h(d,i,f),u&&u.m(d,f),h(d,o,f),s||(a=B(e,"click",n[3]),s=!0)},p(d,f){if(f&2){l=d[1];let p;for(p=0;p<l.length;p+=1){const w=Do(d,l,p);c[p]?c[p].p(w,f):(c[p]=zo(w),c[p].c(),c[p].m(r,null))}for(;p<c.length;p+=1)c[p].d(1);c.length=l.length}d[1].length?u&&(u.d(1),u=null):u||(u=Bo(),u.c(),u.m(o.parentNode,o))},d(d){d&&g(e),d&&g(t),d&&g(r),rt(c,d),d&&g(i),u&&u.d(d),d&&g(o),s=!1,a()}}}function zo(n){let e,t,r=n[5].id+"",i,o,s,a,l,c=n[5].amount_due/100+"",u,d,f=new Date(n[5].created*1e3).toLocaleDateString()+"",p,w;return{c(){e=b("li"),t=b("a"),i=O(r),s=O(` for
        `),a=b("strong"),l=O("$"),u=O(c),d=O(" on "),p=O(f),w=S(),_(t,"target","_blank"),_(t,"href",o=n[5].hosted_invoice_url)},m(v,y){h(v,e,y),m(e,t),m(t,i),m(e,s),m(e,a),m(a,l),m(a,u),m(e,d),m(e,p),m(e,w)},p(v,y){y&2&&r!==(r=v[5].id+"")&&H(i,r),y&2&&o!==(o=v[5].hosted_invoice_url)&&_(t,"href",o),y&2&&c!==(c=v[5].amount_due/100+"")&&H(u,c),y&2&&f!==(f=new Date(v[5].created*1e3).toLocaleDateString()+"")&&H(p,f)},d(v){v&&g(e)}}}function Bo(n){let e;return{c(){e=b("p"),e.textContent="No invoices found"},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function Qm(n){let e,t,r=!n[1]&&Mo(n),i=n[1]&&Fo(n);return{c(){r&&r.c(),e=S(),i&&i.c(),t=re(),this.c=T},m(o,s){r&&r.m(o,s),h(o,e,s),i&&i.m(o,s),h(o,t,s)},p(o,[s]){o[1]?r&&(r.d(1),r=null):r?r.p(o,s):(r=Mo(o),r.c(),r.m(e.parentNode,e)),o[1]?i?i.p(o,s):(i=Fo(o),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null)},i:T,o:T,d(o){r&&r.d(o),o&&g(e),i&&i.d(o),o&&g(t)}}}function eg(n,e,t){var r=this&&this.__awaiter||function(l,c,u,d){function f(p){return p instanceof u?p:new u(function(w){w(p)})}return new(u||(u=Promise))(function(p,w){function v(E){try{I(d.next(E))}catch(k){w(k)}}function y(E){try{I(d.throw(E))}catch(k){w(k)}}function I(E){E.done?p(E.value):f(E.value).then(v,y)}I((d=d.apply(l,c||[])).next())})};let i=!1,o=null;function s(){var l;return r(this,void 0,void 0,function*(){t(0,i=!0);const c=(l=yield we({fn:"getInvoices",payload:{}}))!==null&&l!==void 0?l:[];console.log(c),t(1,o=c.data||[]),t(0,i=!1)})}return[i,o,s,()=>t(1,o=null)]}class tg extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=`button{display:inline-flex;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));padding-left:1.25rem;padding-right:1.25rem;padding-top:0.5rem;padding-bottom:0.5rem;text-align:center;font-family:sofia-pro, sans-serif;font-size:0.875rem;line-height:1.25rem;font-weight:700;text-transform:uppercase;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));text-decoration-line:none
}button:hover{--tw-bg-opacity:1;background-color:rgb(37 99 235 / var(--tw-bg-opacity))
}button:active{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))
}a{--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity))
}`,this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},eg,Qm,X,{},null),e&&e.target&&h(e.target,this,e.anchor)}}customElements.define("user-invoices",tg);function jo(n,e,t){const r=n.slice();return r[9]=e[t],r}function $o(n){let e,t,r=n[0]?"loading...":"manage subscription",i,o,s,a=n[0]&&Ho();return{c(){e=b("button"),a&&a.c(),t=S(),i=O(r)},m(l,c){h(l,e,c),a&&a.m(e,null),m(e,t),m(e,i),o||(s=B(e,"click",n[2]),o=!0)},p(l,c){l[0]?a||(a=Ho(),a.c(),a.m(e,t)):a&&(a.d(1),a=null),c&1&&r!==(r=l[0]?"loading...":"manage subscription")&&H(i,r)},d(l){l&&g(e),a&&a.d(),o=!1,s()}}}function Ho(n){let e;return{c(){e=b("loading-spinner")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function Vo(n){let e,t,r,i,o;function s(c,u){return c[1].length?rg:ng}let a=s(n),l=a(n);return{c(){e=b("button"),e.textContent="Hide Subscriptions",t=S(),l.c(),r=re()},m(c,u){h(c,e,u),h(c,t,u),l.m(c,u),h(c,r,u),i||(o=B(e,"click",n[5]),i=!0)},p(c,u){a===(a=s(c))&&l?l.p(c,u):(l.d(1),l=a(c),l&&(l.c(),l.m(r.parentNode,r)))},d(c){c&&g(e),c&&g(t),l.d(c),c&&g(r),i=!1,o()}}}function ng(n){let e;return{c(){e=b("p"),e.textContent="No subscriptions found"},m(t,r){h(t,e,r)},p:T,d(t){t&&g(e)}}}function rg(n){let e,t=n[1],r=[];for(let i=0;i<t.length;i+=1)r[i]=Jo(jo(n,t,i));return{c(){for(let i=0;i<r.length;i+=1)r[i].c();e=re()},m(i,o){for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(i,o);h(i,e,o)},p(i,o){if(o&27){t=i[1];let s;for(s=0;s<t.length;s+=1){const a=jo(i,t,s);r[s]?r[s].p(a,o):(r[s]=Jo(a),r[s].c(),r[s].m(e.parentNode,e))}for(;s<r.length;s+=1)r[s].d(1);r.length=t.length}},d(i){rt(r,i),i&&g(e)}}}function qo(n){let e,t,r=n[9].discount.coupon.percent_off+"",i,o,s=n[9].discount.coupon.duration+"",a;return{c(){e=b("p"),t=O("Discount: %"),i=O(r),o=O(" off "),a=O(s)},m(l,c){h(l,e,c),m(e,t),m(e,i),m(e,o),m(e,a)},p(l,c){c&2&&r!==(r=l[9].discount.coupon.percent_off+"")&&H(i,r),c&2&&s!==(s=l[9].discount.coupon.duration+"")&&H(a,s)},d(l){l&&g(e)}}}function Wo(n){let e,t,r=En(n[9].current_period_end)+"",i,o,s,a,l,c,u=n[0]&&Go();function d(){return n[6](n[9])}return{c(){e=b("p"),t=O("Next payment "),i=O(r),o=S(),s=b("button"),u&&u.c(),a=O(`
            Cancel Subscription`),_(s,"class","cancel"),s.disabled=n[0]},m(f,p){h(f,e,p),m(e,t),m(e,i),h(f,o,p),h(f,s,p),u&&u.m(s,null),m(s,a),l||(c=B(s,"click",d),l=!0)},p(f,p){n=f,p&2&&r!==(r=En(n[9].current_period_end)+"")&&H(i,r),n[0]?u||(u=Go(),u.c(),u.m(s,a)):u&&(u.d(1),u=null),p&1&&(s.disabled=n[0])},d(f){f&&g(e),f&&g(o),f&&g(s),u&&u.d(),l=!1,c()}}}function Go(n){let e;return{c(){e=b("loading-spinner")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function Ko(n){let e,t,r=En(n[9].cancel_at)+"",i,o,s,a,l,c,u=n[0]&&Yo();function d(){return n[7](n[9])}return{c(){e=b("p"),t=O("Your subscription is canceled. PRO access will end "),i=O(r),o=S(),s=b("button"),u&&u.c(),a=O(`
            Undo Cancellation`),_(e,"class","warn"),_(s,"class","undo"),s.disabled=n[0]},m(f,p){h(f,e,p),m(e,t),m(e,i),h(f,o,p),h(f,s,p),u&&u.m(s,null),m(s,a),l||(c=B(s,"click",d),l=!0)},p(f,p){n=f,p&2&&r!==(r=En(n[9].cancel_at)+"")&&H(i,r),n[0]?u||(u=Yo(),u.c(),u.m(s,a)):u&&(u.d(1),u=null),p&1&&(s.disabled=n[0])},d(f){f&&g(e),f&&g(o),f&&g(s),u&&u.d(),l=!1,c()}}}function Yo(n){let e;return{c(){e=b("loading-spinner")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function Jo(n){let e,t,r,i=n[9].id+"",o,s,a,l,c=n[9].status+"",u,d,f,p,w=n[9].plan.amount/100+"",v,y,I=n[9].plan.interval_count+"",E,k,C=(n[9].plan.interval_count>1?n[9].plan.interval+"s":n[9].plan.interval)+"",$,N,D,P,F,z=n[9].discount&&qo(n),U=!n[9].canceled_at&&Wo(n),M=n[9].canceled_at&&n[9].status==="active"&&Ko(n);return{c(){e=b("section"),t=b("h3"),r=O("ID: "),o=O(i),s=S(),a=b("p"),l=O("PRO Status: "),u=O(c),d=S(),f=b("p"),p=O("Plan: $"),v=O(w),y=O(` 
          per `),E=O(I),k=S(),$=O(C),N=S(),z&&z.c(),D=S(),U&&U.c(),P=S(),M&&M.c(),F=S()},m(V,W){h(V,e,W),m(e,t),m(t,r),m(t,o),m(e,s),m(e,a),m(a,l),m(a,u),m(e,d),m(e,f),m(f,p),m(f,v),m(f,y),m(f,E),m(f,k),m(f,$),m(e,N),z&&z.m(e,null),m(e,D),U&&U.m(e,null),m(e,P),M&&M.m(e,null),m(e,F)},p(V,W){W&2&&i!==(i=V[9].id+"")&&H(o,i),W&2&&c!==(c=V[9].status+"")&&H(u,c),W&2&&w!==(w=V[9].plan.amount/100+"")&&H(v,w),W&2&&I!==(I=V[9].plan.interval_count+"")&&H(E,I),W&2&&C!==(C=(V[9].plan.interval_count>1?V[9].plan.interval+"s":V[9].plan.interval)+"")&&H($,C),V[9].discount?z?z.p(V,W):(z=qo(V),z.c(),z.m(e,D)):z&&(z.d(1),z=null),V[9].canceled_at?U&&(U.d(1),U=null):U?U.p(V,W):(U=Wo(V),U.c(),U.m(e,P)),V[9].canceled_at&&V[9].status==="active"?M?M.p(V,W):(M=Ko(V),M.c(),M.m(e,F)):M&&(M.d(1),M=null)},d(V){V&&g(e),z&&z.d(),U&&U.d(),M&&M.d()}}}function ig(n){let e,t,r=!n[1]&&$o(n),i=n[1]&&Vo(n);return{c(){r&&r.c(),e=S(),i&&i.c(),t=re(),this.c=T},m(o,s){r&&r.m(o,s),h(o,e,s),i&&i.m(o,s),h(o,t,s)},p(o,[s]){o[1]?r&&(r.d(1),r=null):r?r.p(o,s):(r=$o(o),r.c(),r.m(e.parentNode,e)),o[1]?i?i.p(o,s):(i=Vo(o),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null)},i:T,o:T,d(o){r&&r.d(o),o&&g(e),i&&i.d(o),o&&g(t)}}}function En(n){if(!n)return"never";let e=new Intl.RelativeTimeFormat("en",{numeric:"auto"}),t=-Math.floor((Date.now()-n*1e3)/1e3)/86400;return e.format(Math.floor(t),"day")}function og(n,e,t){var r=this&&this.__awaiter||function(f,p,w,v){function y(I){return I instanceof w?I:new w(function(E){E(I)})}return new(w||(w=Promise))(function(I,E){function k(N){try{$(v.next(N))}catch(D){E(D)}}function C(N){try{$(v.throw(N))}catch(D){E(D)}}function $(N){N.done?I(N.value):y(N.value).then(k,C)}$((v=v.apply(f,p||[])).next())})};let i=!1,o=null;function s(){return r(this,void 0,void 0,function*(){t(0,i=!0);const f=yield we({fn:"getSubscriptions",payload:{}});t(1,o=(f==null?void 0:f.data)||[]),console.log(o),t(0,i=!1)})}function a(f){return r(this,void 0,void 0,function*(){t(0,i=!0),(yield we({fn:"cancelSubscription",payload:{subscription:f}}))&&(yield s(),be.set({message:"Subscription canceled. It was fun while it lasted",type:"info"})),t(0,i=!1)})}function l(f){return r(this,void 0,void 0,function*(){t(0,i=!0),(yield we({fn:"unCancelSubscription",payload:{subscription:f}}))&&(yield s(),be.set({message:"Subscription reactivated!",type:"success"})),t(0,i=!1)})}return[i,o,s,a,l,()=>t(1,o=null),f=>a(f.id),f=>l(f.id)]}class sg extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=`section{margin-top:1rem;margin-bottom:1rem;border-radius:0.5rem;--tw-bg-opacity:1;background-color:rgb(42 46 53 / var(--tw-bg-opacity));padding:1.5rem
}button{display:inline-flex;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));padding-left:1.25rem;padding-right:1.25rem;padding-top:0.5rem;padding-bottom:0.5rem;text-align:center;font-family:sofia-pro, sans-serif;font-size:0.875rem;line-height:1.25rem;font-weight:700;text-transform:uppercase;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));text-decoration-line:none
}button:hover{--tw-bg-opacity:1;background-color:rgb(37 99 235 / var(--tw-bg-opacity))
}button:active{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))
}button:disabled{cursor:not-allowed;opacity:0.7
}.cancel{--tw-bg-opacity:1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))
}.cancel:hover{--tw-bg-opacity:1;background-color:rgb(220 38 38 / var(--tw-bg-opacity))
}.cancel:active{--tw-bg-opacity:1;background-color:rgb(185 28 28 / var(--tw-bg-opacity))
}.undo{--tw-bg-opacity:1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))
}.undo:hover{--tw-bg-opacity:1;background-color:rgb(22 163 74 / var(--tw-bg-opacity))
}.undo:active{--tw-bg-opacity:1;background-color:rgb(21 128 61 / var(--tw-bg-opacity))
}.warn{--tw-text-opacity:1;color:rgb(234 179 8 / var(--tw-text-opacity))
}`,this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},og,ig,X,{},null),e&&e.target&&h(e.target,this,e.anchor)}}customElements.define("manage-subscription",sg);function Xo(n,e,t){const r=n.slice();return r[9]=e[t],r}function Zo(n){let e,t,r=n[0]?"loading...":"update payment method",i,o,s,a=n[0]&&Qo();return{c(){e=b("button"),a&&a.c(),t=S(),i=O(r)},m(l,c){h(l,e,c),a&&a.m(e,null),m(e,t),m(e,i),o||(s=B(e,"click",n[3]),o=!0)},p(l,c){l[0]?a||(a=Qo(),a.c(),a.m(e,t)):a&&(a.d(1),a=null),c&1&&r!==(r=l[0]?"loading...":"update payment method")&&H(i,r)},d(l){l&&g(e),a&&a.d(),o=!1,s()}}}function Qo(n){let e;return{c(){e=b("loading-spinner")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function es(n){let e,t,r,i,o,s,a,l,c=n[0]?"loading...":"Add new card",u,d,f,p;function w(k,C){return k[1].length?lg:ag}let v=w(n),y=v(n),I=n[0]&&ns(),E=n[2]&&rs(n);return{c(){e=b("button"),e.textContent="Hide Payment Methods",t=S(),r=b("div"),i=b("h3"),i.textContent="Payment Methods",o=S(),y.c(),s=S(),a=b("button"),I&&I.c(),l=S(),u=O(c),d=S(),E&&E.c(),_(a,"class","update"),_(r,"class","wrap")},m(k,C){h(k,e,C),h(k,t,C),h(k,r,C),m(r,i),m(r,o),y.m(r,null),m(r,s),m(r,a),I&&I.m(a,null),m(a,l),m(a,u),m(r,d),E&&E.m(r,null),f||(p=[B(e,"click",n[6]),B(a,"click",n[5])],f=!0)},p(k,C){v===(v=w(k))&&y?y.p(k,C):(y.d(1),y=v(k),y&&(y.c(),y.m(r,s))),k[0]?I||(I=ns(),I.c(),I.m(a,l)):I&&(I.d(1),I=null),C&1&&c!==(c=k[0]?"loading...":"Add new card")&&H(u,c),k[2]?E?E.p(k,C):(E=rs(k),E.c(),E.m(r,null)):E&&(E.d(1),E=null)},d(k){k&&g(e),k&&g(t),k&&g(r),y.d(),I&&I.d(),E&&E.d(),f=!1,pe(p)}}}function ag(n){let e;return{c(){e=b("p"),e.textContent="No payment methods found"},m(t,r){h(t,e,r)},p:T,d(t){t&&g(e)}}}function lg(n){let e,t=n[1],r=[];for(let i=0;i<t.length;i+=1)r[i]=ts(Xo(n,t,i));return{c(){e=b("ul");for(let i=0;i<r.length;i+=1)r[i].c()},m(i,o){h(i,e,o);for(let s=0;s<r.length;s+=1)r[s]&&r[s].m(e,null)},p(i,o){if(o&18){t=i[1];let s;for(s=0;s<t.length;s+=1){const a=Xo(i,t,s);r[s]?r[s].p(a,o):(r[s]=ts(a),r[s].c(),r[s].m(e,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=t.length}},d(i){i&&g(e),rt(r,i)}}}function ts(n){let e,t=n[9].card.brand+"",r,i,o=n[9].card.last4+"",s,a,l=n[9].card.exp_month+"",c,u,d=n[9].card.exp_year+"",f,p,w,v,y,I;function E(){return n[7](n[9])}return{c(){e=b("li"),r=O(t),i=O(" ending in "),s=O(o),a=O(" expires "),c=O(l),u=O("/"),f=O(d),p=S(),w=b("span"),w.textContent="delete",v=S(),_(w,"class","warn")},m(k,C){h(k,e,C),m(e,r),m(e,i),m(e,s),m(e,a),m(e,c),m(e,u),m(e,f),m(e,p),m(e,w),m(e,v),y||(I=B(w,"click",E),y=!0)},p(k,C){n=k,C&2&&t!==(t=n[9].card.brand+"")&&H(r,t),C&2&&o!==(o=n[9].card.last4+"")&&H(s,o),C&2&&l!==(l=n[9].card.exp_month+"")&&H(c,l),C&2&&d!==(d=n[9].card.exp_year+"")&&H(f,d)},d(k){k&&g(e),y=!1,I()}}}function ns(n){let e;return{c(){e=b("loading-spinner")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function rs(n){let e,t;return{c(){e=b("a"),t=O("Card Update Screen"),_(e,"href",n[2])},m(r,i){h(r,e,i),m(e,t)},p(r,i){i&4&&_(e,"href",r[2])},d(r){r&&g(e)}}}function cg(n){let e,t,r=!n[1]&&Zo(n),i=n[1]&&es(n);return{c(){r&&r.c(),e=S(),i&&i.c(),t=re(),this.c=T},m(o,s){r&&r.m(o,s),h(o,e,s),i&&i.m(o,s),h(o,t,s)},p(o,[s]){o[1]?r&&(r.d(1),r=null):r?r.p(o,s):(r=Zo(o),r.c(),r.m(e.parentNode,e)),o[1]?i?i.p(o,s):(i=es(o),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null)},i:T,o:T,d(o){r&&r.d(o),o&&g(e),i&&i.d(o),o&&g(t)}}}function ug(n,e,t){var r=this&&this.__awaiter||function(f,p,w,v){function y(I){return I instanceof w?I:new w(function(E){E(I)})}return new(w||(w=Promise))(function(I,E){function k(N){try{$(v.next(N))}catch(D){E(D)}}function C(N){try{$(v.throw(N))}catch(D){E(D)}}function $(N){N.done?I(N.value):y(N.value).then(k,C)}$((v=v.apply(f,p||[])).next())})};let i=!1,o,s;function a(){return r(this,void 0,void 0,function*(){t(0,i=!0);const f=yield we({fn:"getPaymentMethods",payload:{}});t(1,o=(f==null?void 0:f.data)||[]),t(0,i=!1)})}function l(f){return r(this,void 0,void 0,function*(){t(0,i=!0),(yield we({fn:"deletePaymentMethod",payload:{pm:f}}))&&(yield a()),t(0,i=!1)})}function c(){var f;return r(this,void 0,void 0,function*(){t(0,i=!0),t(2,s=yield we({fn:"createSetupSession",payload:{}})),s&&((f=window.open(s,"_blank"))===null||f===void 0||f.focus()),t(0,i=!1)})}return[i,o,s,a,l,c,()=>t(1,o=null),f=>l(f.id)]}class dg extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=`button{display:inline-flex;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));padding-left:1.25rem;padding-right:1.25rem;padding-top:0.5rem;padding-bottom:0.5rem;text-align:center;font-family:sofia-pro, sans-serif;font-size:0.875rem;line-height:1.25rem;font-weight:700;text-transform:uppercase;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));text-decoration-line:none
}button:hover{--tw-bg-opacity:1;background-color:rgb(37 99 235 / var(--tw-bg-opacity))
}button:active{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))
}.update{--tw-bg-opacity:1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))
}.update:hover{--tw-bg-opacity:1;background-color:rgb(22 163 74 / var(--tw-bg-opacity))
}.update:active{--tw-bg-opacity:1;background-color:rgb(21 128 61 / var(--tw-bg-opacity))
}a{display:block;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity))
}.warn{cursor:pointer;--tw-text-opacity:1;color:rgb(239 68 68 / var(--tw-text-opacity))
}.wrap{margin-top:4rem;margin-bottom:6rem
}`,this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},ug,cg,X,{},null),e&&e.target&&h(e.target,this,e.anchor)}}customElements.define("update-payment",dg);function is(n){let e,t,r,i,o=n[1]&&os();return{c(){e=b("button"),o&&o.c(),t=O(`
    update address`)},m(s,a){h(s,e,a),o&&o.m(e,null),m(e,t),r||(i=B(e,"click",n[6]),r=!0)},p(s,a){s[1]?o||(o=os(),o.c(),o.m(e,t)):o&&(o.d(1),o=null)},d(s){s&&g(e),o&&o.d(),r=!1,i()}}}function os(n){let e;return{c(){e=b("loading-spinner")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function ss(n){let e,t,r,i,o,s,a,l,c,u,d,f,p,w,v,y,I,E,k,C,$,N,D,P,F,z,U,M,V,W,ie,he,Se,ue,Le,gt=n[1]?"updating...":"save address",Lt,bt,rn,Ie=n[1]&&as();return{c(){e=b("button"),e.textContent="Hide Address",t=S(),r=b("p"),r.textContent="This form will update your address in stripe and be reflected on invoices",i=S(),o=b("form"),s=b("label"),s.textContent="Name",a=S(),l=b("input"),c=S(),u=b("label"),u.textContent="Line 1",d=S(),f=b("input"),p=S(),w=b("label"),w.textContent="Line 2",v=S(),y=b("input"),I=S(),E=b("label"),E.textContent="City",k=S(),C=b("input"),$=S(),N=b("label"),N.textContent="State",D=S(),P=b("input"),F=S(),z=b("label"),z.textContent="Postal Code",U=S(),M=b("input"),V=S(),W=b("label"),W.textContent="Country Code (2 Digit)",ie=S(),he=b("input"),Se=S(),ue=b("button"),Ie&&Ie.c(),Le=S(),Lt=O(gt),_(s,"for","name"),_(l,"name","name"),_(l,"type","text"),_(l,"maxlength","100"),_(u,"for","line1"),_(f,"name","line1"),_(f,"type","text"),_(f,"maxlength","100"),_(w,"for","line2"),_(y,"name","line2"),_(y,"type","text"),_(y,"maxlength","100"),_(E,"for","city"),_(C,"name","city"),_(C,"type","text"),_(C,"maxlength","50"),_(N,"for","state"),_(P,"name","state"),_(P,"type","text"),_(P,"maxlength","50"),_(z,"for","postal_code"),_(M,"name","postal_code"),_(M,"type","text"),_(M,"maxlength","20"),_(W,"for","country"),_(he,"name","country"),_(he,"type","text"),_(he,"maxlength","2"),_(ue,"class","update")},m(ne,me){h(ne,e,me),h(ne,t,me),h(ne,r,me),h(ne,i,me),h(ne,o,me),m(o,s),m(o,a),m(o,l),fe(l,n[2]),m(o,c),m(o,u),m(o,d),m(o,f),fe(f,n[3].line1),m(o,p),m(o,w),m(o,v),m(o,y),fe(y,n[3].line2),m(o,I),m(o,E),m(o,k),m(o,C),fe(C,n[3].city),m(o,$),m(o,N),m(o,D),m(o,P),fe(P,n[3].state),m(o,F),m(o,z),m(o,U),m(o,M),fe(M,n[3].postal_code),m(o,V),m(o,W),m(o,ie),m(o,he),fe(he,n[3].country),h(ne,Se,me),h(ne,ue,me),Ie&&Ie.m(ue,null),m(ue,Le),m(ue,Lt),bt||(rn=[B(e,"click",n[8]),B(l,"input",n[9]),B(f,"input",n[10]),B(y,"input",n[11]),B(C,"input",n[12]),B(P,"input",n[13]),B(M,"input",n[14]),B(he,"input",n[15]),B(ue,"click",n[7])],bt=!0)},p(ne,me){me&4&&l.value!==ne[2]&&fe(l,ne[2]),me&8&&f.value!==ne[3].line1&&fe(f,ne[3].line1),me&8&&y.value!==ne[3].line2&&fe(y,ne[3].line2),me&8&&C.value!==ne[3].city&&fe(C,ne[3].city),me&8&&P.value!==ne[3].state&&fe(P,ne[3].state),me&8&&M.value!==ne[3].postal_code&&fe(M,ne[3].postal_code),me&8&&he.value!==ne[3].country&&fe(he,ne[3].country),ne[1]?Ie||(Ie=as(),Ie.c(),Ie.m(ue,Le)):Ie&&(Ie.d(1),Ie=null),me&2&&gt!==(gt=ne[1]?"updating...":"save address")&&H(Lt,gt)},d(ne){ne&&g(e),ne&&g(t),ne&&g(r),ne&&g(i),ne&&g(o),ne&&g(Se),ne&&g(ue),Ie&&Ie.d(),bt=!1,pe(rn)}}}function as(n){let e;return{c(){e=b("loading-spinner")},m(t,r){h(t,e,r)},d(t){t&&g(e)}}}function fg(n){let e,t,r=!n[0]&&is(n),i=n[0]&&ss(n);return{c(){r&&r.c(),e=S(),i&&i.c(),t=re(),this.c=T},m(o,s){r&&r.m(o,s),h(o,e,s),i&&i.m(o,s),h(o,t,s)},p(o,[s]){o[0]?r&&(r.d(1),r=null):r?r.p(o,s):(r=is(o),r.c(),r.m(e.parentNode,e)),o[0]?i?i.p(o,s):(i=ss(o),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null)},i:T,o:T,d(o){r&&r.d(o),o&&g(e),i&&i.d(o),o&&g(t)}}}function pg(n,e,t){let r,i;var o=this&&this.__awaiter||function(C,$,N,D){function P(F){return F instanceof N?F:new N(function(z){z(F)})}return new(N||(N=Promise))(function(F,z){function U(W){try{V(D.next(W))}catch(ie){z(ie)}}function M(W){try{V(D.throw(W))}catch(ie){z(ie)}}function V(W){W.done?F(W.value):P(W.value).then(U,M)}V((D=D.apply(C,$||[])).next())})};const s=Ce("");oe(n,s,C=>t(2,r=C));const a=Ce({line1:"",line2:"",city:"",state:"",postal_code:"",country:""});oe(n,a,C=>t(3,i=C));let l=!1,c=!1;function u(){return o(this,void 0,void 0,function*(){t(1,c=!0);const C=yield we({fn:"getCustomer",payload:{}});C!=null&&C.name&&s.set(C.name),C!=null&&C.address&&a.set(C.address),t(1,c=!1),t(0,l=!0)})}function d(){return o(this,void 0,void 0,function*(){t(1,c=!0),(yield we({fn:"changeAddress",payload:{address:i,name:r}}))&&(be.set({message:"Address updated",type:"success"}),t(0,l=!1)),t(1,c=!1)})}const f=()=>t(0,l=!1);function p(){r=this.value,s.set(r)}function w(){i.line1=this.value,a.set(i)}function v(){i.line2=this.value,a.set(i)}function y(){i.city=this.value,a.set(i)}function I(){i.state=this.value,a.set(i)}function E(){i.postal_code=this.value,a.set(i)}function k(){i.country=this.value,a.set(i)}return[l,c,r,i,s,a,u,d,f,p,w,v,y,I,E,k]}class hg extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=`button{display:inline-flex;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));padding-left:1.25rem;padding-right:1.25rem;padding-top:0.5rem;padding-bottom:0.5rem;text-align:center;font-family:sofia-pro, sans-serif;font-size:0.875rem;line-height:1.25rem;font-weight:700;text-transform:uppercase;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));text-decoration-line:none
}button:hover{--tw-bg-opacity:1;background-color:rgb(37 99 235 / var(--tw-bg-opacity))
}button:active{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))
}.update{margin-bottom:5rem;--tw-bg-opacity:1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))
}.update:hover{--tw-bg-opacity:1;background-color:rgb(22 163 74 / var(--tw-bg-opacity))
}.update:active{--tw-bg-opacity:1;background-color:rgb(21 128 61 / var(--tw-bg-opacity))
}input{margin-right:0.75rem;margin-bottom:1rem;width:100%;border-style:solid;--tw-border-opacity:1;border-color:rgb(42 46 53 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(18 24 27 / var(--tw-bg-opacity));padding:0.75rem;font-family:sofia-pro, sans-serif;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px
}`,this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},pg,fg,X,{},null),e&&e.target&&h(e.target,this,e.anchor)}}customElements.define("update-address",hg);function mg(n){let e,t,r;return{c(){e=Mn("svg"),t=Mn("circle"),r=Mn("path"),this.c=T,_(t,"cx","12"),_(t,"cy","12"),_(t,"r","10"),_(t,"stroke","currentColor"),_(t,"stroke-width","4"),_(r,"fill","currentColor"),_(r,"d","M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"),_(e,"xmlns","http://www.w3.org/2000/svg"),_(e,"fill","none"),_(e,"viewBox","0 0 24 24")},m(i,o){h(i,e,o),m(e,t),m(e,r)},p:T,i:T,o:T,d(i){i&&g(e)}}}class gg extends Z{constructor(e){super();const t=document.createElement("style");t.textContent=`svg{margin-left:0.25rem;margin-right:0.25rem;width:0.875rem
}@keyframes spin{to{transform:rotate(360deg)
    }}svg{animation:spin 1s linear infinite
}circle{opacity:0.25
}path{opacity:0.75
}`,this.shadowRoot.appendChild(t),ee(this,{target:this.shadowRoot,props:Q(this.attributes),customElement:!0},null,mg,X,{},null),e&&e.target&&h(e.target,this,e.anchor)}}customElements.define("loading-spinner",gg);console.log(`%c  

.d888 d8b                           888      d8b          
d88P"  Y8P                          888      Y8P          
888                                 888                   
888888 888 888d888 .d88b.  .d8888b  88888b.  888 88888b.  
888    888 888P"  d8P  Y8b 88K      888 "88b 888 888 "88b 
888    888 888    88888888 "Y8888b. 888  888 888 888  888 
888    888 888    Y8b.          X88 888  888 888 888 d88P 
888    888 888     "Y8888   88888P' 888  888 888 88888P"  
                                                 888      
                                                 888      
                                                 888      `,"font-family:monospace; color: orange;");window.addEventListener("flamethrower:router:end",n=>{gp()});kp();yp();const cr=Wa({prefetch:"hover",log:!1});export{Be as C,$e as F,ae as L,Sn as S,Rt as _,wg as a,Oc as b,Ge as c,_g as d,qt as e,vg as f,Pe as g,dr as h,ke as i,vs as j,yg as k,kg as l,Ue as r};
