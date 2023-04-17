var Ca=Object.defineProperty;var Aa=(n,e,t)=>e in n?Ca(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var rn=(n,e,t)=>(Aa(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();function Or(n,e){if(["link","go"].includes(n))if(e){const t=document.querySelector(e);t?t.scrollIntoView({behavior:"smooth",block:"start"}):window.scrollTo({top:0})}else window.scrollTo({top:0})}function Yn(n){const e=new URL(n||window.location.href).href;return e.endsWith("/")||e.includes(".")||e.includes("#")?e:`${e}/`}function xa(n){(!window.history.state||window.history.state.url!==n)&&window.history.pushState({url:n},"internalLink",n)}function Ra(n){document.querySelector(n).scrollIntoView({behavior:"smooth",block:"start"})}function Oa(n){const e=Yn();return{type:"popstate",next:e}}function Pa(n){var e;let t;if(n.altKey||n.ctrlKey||n.metaKey||n.shiftKey)return{type:"disqualified"};for(let r=n.target;r.parentNode;r=r.parentNode)if(r.nodeName==="A"){t=r;break}if(t&&t.host!==location.host)return t.target="_blank",{type:"external"};if(t&&"cold"in(t==null?void 0:t.dataset))return{type:"disqualified"};if(t!=null&&t.hasAttribute("href")){const r=t.getAttribute("href"),i=new URL(r,location.href);if(n.preventDefault(),r!=null&&r.startsWith("#"))return Ra(r),{type:"scrolled"};const o=(e=r.match(/#([\w'-]+)\b/g))==null?void 0:e[0],s=Yn(i.href),a=Yn();return{type:"link",next:s,prev:a,scrollId:o}}else return{type:"noop"}}function La(n){return new DOMParser().parseFromString(n,"text/html")}function Pr(n){document.body.querySelectorAll("[flamethrower-preserve]").forEach(e=>{let t=n.body.querySelector('[flamethrower-preserve][id="'+e.id+'"]');if(t){const r=e.cloneNode(!0);t.replaceWith(r)}}),document.body.replaceWith(n.body)}function Na(n){const e=s=>Array.from(s.querySelectorAll('head>:not([rel="prefetch"]')),t=e(document),r=e(n),{staleNodes:i,freshNodes:o}=Ma(t,r);i.forEach(s=>s.remove()),document.head.append(...o)}function Ma(n,e){const t=[],r=[];let i=0,o=0;for(;i<n.length||o<e.length;){const s=n[i],a=e[o];if(s!=null&&s.isEqualNode(a)){i++,o++;continue}const l=s?r.findIndex(u=>u.isEqualNode(s)):-1;if(l!==-1){r.splice(l,1),i++;continue}const c=a?t.findIndex(u=>u.isEqualNode(a)):-1;if(c!==-1){t.splice(c,1),o++;continue}s&&t.push(s),a&&r.push(a),i++,o++}return{staleNodes:t,freshNodes:r}}function Lr(){document.head.querySelectorAll("[data-reload]").forEach(Nr),document.body.querySelectorAll("script").forEach(Nr)}function Nr(n){const e=document.createElement("script"),t=Array.from(n.attributes);for(const{name:r,value:i}of t)e[r]=i;e.append(n.textContent),n.replaceWith(e)}const Da={log:!1,pageTransitions:!1};class Ua{constructor(e){this.opts=e,this.enabled=!0,this.prefetched=new Set,this.opts={...Da,...e!=null?e:{}},window!=null&&window.history?(document.addEventListener("click",t=>this.onClick(t)),window.addEventListener("popstate",t=>this.onPop(t)),this.prefetch()):(console.warn("flamethrower router not supported in this browser or environment"),this.enabled=!1)}go(e){const t=window.location.href,r=new URL(e,location.origin).href;return this.reconstructDOM({type:"go",next:r,prev:t})}back(){window.history.back()}forward(){window.history.forward()}get allLinks(){return Array.from(document.links).filter(e=>e.href.includes(document.location.origin)&&!e.href.includes("#")&&e.href!==(document.location.href||document.location.href+"/")&&!this.prefetched.has(e.href))}log(...e){this.opts.log&&console.log(...e)}prefetch(){if(this.opts.prefetch==="visible")this.prefetchVisible();else if(this.opts.prefetch==="hover")this.prefetchOnHover();else return}prefetchOnHover(){this.allLinks.forEach(e=>{const t=e.getAttribute("href");e.addEventListener("pointerenter",()=>this.createLink(t),{once:!0})})}prefetchVisible(){const e={root:null,rootMargin:"0px",threshold:1};"IntersectionObserver"in window&&(this.observer||(this.observer=new IntersectionObserver((t,r)=>{t.forEach(i=>{const o=i.target.getAttribute("href");if(this.prefetched.has(o)){r.unobserve(i.target);return}i.isIntersecting&&(this.createLink(o),r.unobserve(i.target))})},e)),this.allLinks.forEach(t=>this.observer.observe(t)))}createLink(e){const t=document.createElement("link");t.rel="prefetch",t.href=e,t.as="document",t.onload=()=>this.log("\u{1F329}\uFE0F prefetched",e),t.onerror=r=>this.log("\u{1F915} can't prefetch",e,r),document.head.appendChild(t),this.prefetched.add(e)}onClick(e){this.reconstructDOM(Pa(e))}onPop(e){this.reconstructDOM(Oa())}async reconstructDOM({type:e,next:t,prev:r,scrollId:i}){if(!this.enabled){this.log("router disabled");return}try{if(this.log("\u26A1",e),["popstate","link","go"].includes(e)&&t!==r){this.opts.log&&console.time("\u23F1\uFE0F"),window.dispatchEvent(new CustomEvent("flamethrower:router:fetch")),e!="popstate"&&xa(t);const o=await(await fetch(t,{headers:{"X-Flamethrower":"1"}}).then(a=>{const l=a.body.getReader(),c=parseInt(a.headers.get("Content-Length"));let u=0;return new ReadableStream({start(d){function f(){l.read().then(({done:m,value:_})=>{if(m){d.close();return}u+=_.length,window.dispatchEvent(new CustomEvent("flamethrower:router:fetch-progress",{detail:{progress:Number.isNaN(c)?0:u/c*100,received:u,length:c||0}})),d.enqueue(_),f()})}f()}})}).then(a=>new Response(a,{headers:{"Content-Type":"text/html"}}))).text(),s=La(o);Na(s),this.opts.pageTransitions&&document.createDocumentTransition?document.createDocumentTransition().start(()=>{Pr(s),Lr(),Or(e,i)}):(Pr(s),Lr(),Or(e,i)),window.dispatchEvent(new CustomEvent("flamethrower:router:end")),setTimeout(()=>{this.prefetch()},200),this.opts.log&&console.timeEnd("\u23F1\uFE0F")}}catch(o){return window.dispatchEvent(new CustomEvent("flamethrower:router:error",o)),this.opts.log&&console.timeEnd("\u23F1\uFE0F"),console.error("\u{1F4A5} router fetch failed",o),!1}}}const Fa=n=>{const e=new Ua(n);if(n.log&&console.log("\u{1F525} flamethrower engaged"),window){const t=window;t.flamethrower=e}return e},za="modulepreload",Ha=function(n){return"/"+n},Mr={},st=function(e,t,r){return!t||t.length===0?e():Promise.all(t.map(i=>{if(i=Ha(i),i in Mr)return;Mr[i]=!0;const o=i.endsWith(".css"),s=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${s}`))return;const a=document.createElement("link");if(a.rel=o?"stylesheet":za,o||(a.as="script",a.crossOrigin=""),a.href=i,document.head.appendChild(a),o)return new Promise((l,c)=>{a.addEventListener("load",l),a.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>e())};function k(){}function ar(n){return n()}function Dr(){return Object.create(null)}function fe(n){n.forEach(ar)}function lr(n){return typeof n=="function"}function K(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let on;function It(n,e){return on||(on=document.createElement("a")),on.href=e,n===on.href}function Ba(n){return Object.keys(n).length===0}function os(n,...e){if(n==null)return k;const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function ie(n,e,t){n.$$.on_destroy.push(os(e,t))}function h(n,e){n.appendChild(e)}function p(n,e,t){n.insertBefore(e,t||null)}function g(n){n.parentNode.removeChild(n)}function tt(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function b(n){return document.createElement(n)}function Ln(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function x(n){return document.createTextNode(n)}function E(){return x(" ")}function ee(){return x("")}function P(n,e,t,r){return n.addEventListener(e,t,r),()=>n.removeEventListener(e,t,r)}function ja(n){return function(e){return e.preventDefault(),n.call(this,e)}}function Va(n){return function(e){return e.stopPropagation(),n.call(this,e)}}function w(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Ee(n,e,t){e in n?n[e]=typeof n[e]=="boolean"&&t===""?!0:t:w(n,e,t)}function ss(n){return n===""?null:+n}function $a(n){return Array.from(n.childNodes)}function U(n,e){e=""+e,n.wholeText!==e&&(n.data=e)}function de(n,e){n.value=e==null?"":e}function Ur(n,e,t,r){t===null?n.style.removeProperty(e):n.style.setProperty(e,t,r?"important":"")}function Z(n,e,t){n.classList[t?"add":"remove"](e)}function Y(n){const e={};for(const t of n)e[t.name]=t.value;return e}let jt;function Ft(n){jt=n}function qa(){if(!jt)throw new Error("Function called outside component initialization");return jt}function pt(n){qa().$$.on_mount.push(n)}function Wa(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(r=>r.call(this,e))}const Lt=[],at=[],ln=[],Fr=[],as=Promise.resolve();let Jn=!1;function ls(){Jn||(Jn=!0,as.then(W))}function Ka(){return ls(),as}function Xn(n){ln.push(n)}const Nn=new Set;let sn=0;function W(){const n=jt;do{for(;sn<Lt.length;){const e=Lt[sn];sn++,Ft(e),Ga(e.$$)}for(Ft(null),Lt.length=0,sn=0;at.length;)at.pop()();for(let e=0;e<ln.length;e+=1){const t=ln[e];Nn.has(t)||(Nn.add(t),t())}ln.length=0}while(Lt.length);for(;Fr.length;)Fr.pop()();Jn=!1,Nn.clear(),Ft(n)}function Ga(n){if(n.fragment!==null){n.update(),fe(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Xn)}}const Ya=new Set;function Ja(n,e){n&&n.i&&(Ya.delete(n),n.i(e))}const cs=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Xa(n,e,t,r){const{fragment:i,on_mount:o,on_destroy:s,after_update:a}=n.$$;i&&i.m(e,t),r||Xn(()=>{const l=o.map(ar).filter(lr);s?s.push(...l):fe(l),n.$$.on_mount=[]}),a.forEach(Xn)}function Za(n,e){const t=n.$$;t.fragment!==null&&(fe(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Qa(n,e){n.$$.dirty[0]===-1&&(Lt.push(n),ls(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function J(n,e,t,r,i,o,s,a=[-1]){const l=jt;Ft(n);const c=n.$$={fragment:null,ctx:null,props:o,update:k,not_equal:i,bound:Dr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:Dr(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};s&&s(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(d,f,...m)=>{const _=m.length?m[0]:f;return c.ctx&&i(c.ctx[d],c.ctx[d]=_)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](_),u&&Qa(n,d)),f}):[],c.update(),u=!0,fe(c.before_update),c.fragment=r?r(c.ctx):!1,e.target){if(e.hydrate){const d=$a(e.target);c.fragment&&c.fragment.l(d),d.forEach(g)}else c.fragment&&c.fragment.c();e.intro&&Ja(n.$$.fragment),Xa(n,e.target,e.anchor,e.customElement),W()}Ft(l)}let G;typeof HTMLElement=="function"&&(G=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){const{on_mount:n}=this.$$;this.$$.on_disconnect=n.map(ar).filter(lr);for(const e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(n,e,t){this[n]=t}disconnectedCallback(){fe(this.$$.on_disconnect)}$destroy(){Za(this,1),this.$destroy=k}$on(n,e){const t=this.$$.callbacks[n]||(this.$$.callbacks[n]=[]);return t.push(e),()=>{const r=t.indexOf(e);r!==-1&&t.splice(r,1)}}$set(n){this.$$set&&!Ba(n)&&(this.$$.skip_bound=!0,this.$$set(n),this.$$.skip_bound=!1)}});const _t=[];function el(n,e){return{subscribe:Te(n,e).subscribe}}function Te(n,e=k){let t;const r=new Set;function i(a){if(K(n,a)&&(n=a,t)){const l=!_t.length;for(const c of r)c[1](),_t.push(c,n);if(l){for(let c=0;c<_t.length;c+=2)_t[c][0](_t[c+1]);_t.length=0}}}function o(a){i(a(n))}function s(a,l=k){const c=[a,l];return r.add(c),r.size===1&&(t=e(i)||k),a(n),()=>{r.delete(c),r.size===0&&(t(),t=null)}}return{set:i,update:o,subscribe:s}}function us(n,e,t){const r=!Array.isArray(n),i=r?[n]:n,o=e.length<2;return el(t,s=>{let a=!1;const l=[];let c=0,u=k;const d=()=>{if(c)return;u();const m=e(r?l[0]:l,s);o?s(m):u=lr(m)?m:k},f=i.map((m,_)=>os(m,I=>{l[_]=I,c&=~(1<<_),a&&d()},()=>{c|=1<<_}));return a=!0,d(),function(){fe(f),u()}})}const me=Te(null);window.addEventListener("flamethrower:router:fetch",n=>{me.set(null)});const Ce=Te(null),kn=Te(null),tl="https://fireship.io";/**
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
 */const ds=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},nl=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=n[t++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=n[t++],s=n[t++],a=n[t++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=n[t++],s=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},fs={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const o=n[i],s=i+1<n.length,a=s?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,u=o>>2,d=(o&3)<<4|a>>4;let f=(a&15)<<2|c>>6,m=c&63;l||(m=64,s||(f=64)),r.push(t[u],t[d],t[f],t[m])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ds(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):nl(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const o=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const d=i<n.length?t[n.charAt(i)]:64;if(++i,o==null||a==null||c==null||d==null)throw Error();const f=o<<2|a>>4;if(r.push(f),c!==64){const m=a<<4&240|c>>2;if(r.push(m),d!==64){const _=c<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}},rl=function(n){const e=ds(n);return fs.encodeByteArray(e,!0)},pn=function(n){return rl(n).replace(/\./g,"")},il=function(n){try{return fs.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */class ol{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function Ym(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,o=n.sub||n.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[pn(JSON.stringify(t)),pn(JSON.stringify(s)),a].join(".")}/**
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
 */function be(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function sl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(be())}function al(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function ps(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function ll(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jm(){return be().indexOf("Electron/")>=0}function cl(){const n=be();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Xm(){return be().indexOf("MSAppHost/")>=0}function Zm(){return!al()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function hs(){return typeof indexedDB=="object"}function ms(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(t){e(t)}})}function ul(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const dl="FirebaseError";class ze extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=dl,Object.setPrototypeOf(this,ze.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ht.prototype.create)}}class ht{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?fl(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new ze(i,a,r)}}function fl(n,e){return n.replace(pl,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const pl=/\{\$([^}]+)}/g;function hl(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Vt(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const o=n[i],s=e[i];if(zr(o)&&zr(s)){if(!Vt(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function zr(n){return n!==null&&typeof n=="object"}/**
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
 */function Jt(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Nt(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Mt(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function ml(n,e){const t=new gl(n,e);return t.subscribe.bind(t)}class gl{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");bl(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Mn),i.error===void 0&&(i.error=Mn),i.complete===void 0&&(i.complete=Mn);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function bl(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Mn(){}/**
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
 */const wl=1e3,_l=2,yl=4*60*60*1e3,vl=.5;function Hr(n,e=wl,t=_l){const r=e*Math.pow(t,n),i=Math.round(vl*r*(Math.random()-.5)*2);return Math.min(yl,r+i)}/**
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
 */function Ge(n){return n&&n._delegate?n._delegate:n}class Ue{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const nt="[DEFAULT]";/**
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
 */class kl{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new ol;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(El(e))try{this.getOrInitializeService({instanceIdentifier:nt})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=nt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=nt){return this.instances.has(e)}getOptions(e=nt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,t){var r;const i=this.normalizeInstanceIdentifier(t),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(!!r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Il(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=nt){return this.component?this.component.multipleInstances?e:nt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Il(n){return n===nt?void 0:n}function El(n){return n.instantiationMode==="EAGER"}/**
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
 */class Tl{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new kl(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var se;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(se||(se={}));const Sl={debug:se.DEBUG,verbose:se.VERBOSE,info:se.INFO,warn:se.WARN,error:se.ERROR,silent:se.SILENT},Cl=se.INFO,Al={[se.DEBUG]:"log",[se.VERBOSE]:"log",[se.INFO]:"info",[se.WARN]:"warn",[se.ERROR]:"error"},xl=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=Al[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class cr{constructor(e){this.name=e,this._logLevel=Cl,this._logHandler=xl,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in se))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sl[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,se.DEBUG,...e),this._logHandler(this,se.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,se.VERBOSE,...e),this._logHandler(this,se.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,se.INFO,...e),this._logHandler(this,se.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,se.WARN,...e),this._logHandler(this,se.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,se.ERROR,...e),this._logHandler(this,se.ERROR,...e)}}const Rl=(n,e)=>e.some(t=>n instanceof t);let Br,jr;function Ol(){return Br||(Br=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Pl(){return jr||(jr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gs=new WeakMap,Zn=new WeakMap,bs=new WeakMap,Dn=new WeakMap,ur=new WeakMap;function Ll(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",o),n.removeEventListener("error",s)},o=()=>{t(et(n.result)),i()},s=()=>{r(n.error),i()};n.addEventListener("success",o),n.addEventListener("error",s)});return e.then(t=>{t instanceof IDBCursor&&gs.set(t,n)}).catch(()=>{}),ur.set(e,n),e}function Nl(n){if(Zn.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",o),n.removeEventListener("error",s),n.removeEventListener("abort",s)},o=()=>{t(),i()},s=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",o),n.addEventListener("error",s),n.addEventListener("abort",s)});Zn.set(n,e)}let Qn={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Zn.get(n);if(e==="objectStoreNames")return n.objectStoreNames||bs.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return et(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Ml(n){Qn=n(Qn)}function Dl(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Un(this),e,...t);return bs.set(r,e.sort?e.sort():[e]),et(r)}:Pl().includes(n)?function(...e){return n.apply(Un(this),e),et(gs.get(this))}:function(...e){return et(n.apply(Un(this),e))}}function Ul(n){return typeof n=="function"?Dl(n):(n instanceof IDBTransaction&&Nl(n),Rl(n,Ol())?new Proxy(n,Qn):n)}function et(n){if(n instanceof IDBRequest)return Ll(n);if(Dn.has(n))return Dn.get(n);const e=Ul(n);return e!==n&&(Dn.set(n,e),ur.set(e,n)),e}const Un=n=>ur.get(n);function ws(n,e,{blocked:t,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(n,e),a=et(s);return r&&s.addEventListener("upgradeneeded",l=>{r(et(s.result),l.oldVersion,l.newVersion,et(s.transaction))}),t&&s.addEventListener("blocked",()=>t()),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const Fl=["get","getKey","getAll","getAllKeys","count"],zl=["put","add","delete","clear"],Fn=new Map;function Vr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Fn.get(e))return Fn.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=zl.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Fl.includes(t)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return Fn.set(e,o),o}Ml(n=>({...n,get:(e,t,r)=>Vr(e,t)||n.get(e,t,r),has:(e,t)=>!!Vr(e,t)||n.has(e,t)}));/**
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
 */class Hl{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Bl(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function Bl(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const er="@firebase/app",$r="0.7.30";/**
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
 */const lt=new cr("@firebase/app"),jl="@firebase/app-compat",Vl="@firebase/analytics-compat",$l="@firebase/analytics",ql="@firebase/app-check-compat",Wl="@firebase/app-check",Kl="@firebase/auth",Gl="@firebase/auth-compat",Yl="@firebase/database",Jl="@firebase/database-compat",Xl="@firebase/functions",Zl="@firebase/functions-compat",Ql="@firebase/installations",ec="@firebase/installations-compat",tc="@firebase/messaging",nc="@firebase/messaging-compat",rc="@firebase/performance",ic="@firebase/performance-compat",oc="@firebase/remote-config",sc="@firebase/remote-config-compat",ac="@firebase/storage",lc="@firebase/storage-compat",cc="@firebase/firestore",uc="@firebase/firestore-compat",dc="firebase",fc="9.9.2";/**
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
 */const dr="[DEFAULT]",pc={[er]:"fire-core",[jl]:"fire-core-compat",[$l]:"fire-analytics",[Vl]:"fire-analytics-compat",[Wl]:"fire-app-check",[ql]:"fire-app-check-compat",[Kl]:"fire-auth",[Gl]:"fire-auth-compat",[Yl]:"fire-rtdb",[Jl]:"fire-rtdb-compat",[Xl]:"fire-fn",[Zl]:"fire-fn-compat",[Ql]:"fire-iid",[ec]:"fire-iid-compat",[tc]:"fire-fcm",[nc]:"fire-fcm-compat",[rc]:"fire-perf",[ic]:"fire-perf-compat",[oc]:"fire-rc",[sc]:"fire-rc-compat",[ac]:"fire-gcs",[lc]:"fire-gcs-compat",[cc]:"fire-fst",[uc]:"fire-fst-compat","fire-js":"fire-js",[dc]:"fire-js-all"};/**
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
 */const hn=new Map,tr=new Map;function hc(n,e){try{n.container.addComponent(e)}catch(t){lt.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function qe(n){const e=n.name;if(tr.has(e))return lt.debug(`There were multiple attempts to register component ${e}.`),!1;tr.set(e,n);for(const t of hn.values())hc(t,n);return!0}function Ct(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Qm(n,e,t=dr){Ct(n,e).clearInstance(t)}/**
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
 */const mc={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ct=new ht("app","Firebase",mc);/**
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
 */class gc{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Ue("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ct.create("app-deleted",{appName:this._name})}}/**
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
 */const In=fc;function bc(n,e={}){typeof e!="object"&&(e={name:e});const t=Object.assign({name:dr,automaticDataCollectionEnabled:!1},e),r=t.name;if(typeof r!="string"||!r)throw ct.create("bad-app-name",{appName:String(r)});const i=hn.get(r);if(i){if(Vt(n,i.options)&&Vt(t,i.config))return i;throw ct.create("duplicate-app",{appName:r})}const o=new Tl(r);for(const a of tr.values())o.addComponent(a);const s=new gc(n,t,o);return hn.set(r,s),s}function wc(n=dr){const e=hn.get(n);if(!e)throw ct.create("no-app",{appName:n});return e}function Ne(n,e,t){var r;let i=(r=pc[n])!==null&&r!==void 0?r:n;t&&(i+=`-${t}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),lt.warn(a.join(" "));return}qe(new Ue(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const _c="firebase-heartbeat-database",yc=1,$t="firebase-heartbeat-store";let zn=null;function _s(){return zn||(zn=ws(_c,yc,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore($t)}}}).catch(n=>{throw ct.create("idb-open",{originalErrorMessage:n.message})})),zn}async function vc(n){var e;try{return(await _s()).transaction($t).objectStore($t).get(ys(n))}catch(t){if(t instanceof ze)lt.warn(t.message);else{const r=ct.create("idb-get",{originalErrorMessage:(e=t)===null||e===void 0?void 0:e.message});lt.warn(r.message)}}}async function qr(n,e){var t;try{const i=(await _s()).transaction($t,"readwrite");return await i.objectStore($t).put(e,ys(n)),i.done}catch(r){if(r instanceof ze)lt.warn(r.message);else{const i=ct.create("idb-set",{originalErrorMessage:(t=r)===null||t===void 0?void 0:t.message});lt.warn(i.message)}}}function ys(n){return`${n.name}!${n.options.appId}`}/**
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
 */const kc=1024,Ic=30*24*60*60*1e3;class Ec{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Sc(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Wr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=Ic}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Wr(),{heartbeatsToSend:t,unsentEntries:r}=Tc(this._heartbeatsCache.heartbeats),i=pn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Wr(){return new Date().toISOString().substring(0,10)}function Tc(n,e=kc){const t=[];let r=n.slice();for(const i of n){const o=t.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Kr(t)>e){o.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Kr(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class Sc{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hs()?ms().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await vc(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return qr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return qr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Kr(n){return pn(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function Cc(n){qe(new Ue("platform-logger",e=>new Hl(e),"PRIVATE")),qe(new Ue("heartbeat",e=>new Ec(e),"PRIVATE")),Ne(er,$r,n),Ne(er,$r,"esm2017"),Ne("fire-js","")}Cc("");var Ac="firebase",xc="9.9.2";/**
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
 */Ne(Ac,xc,"app");function fr(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(t[r[i]]=n[r[i]]);return t}function vs(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rc=vs,ks=new ht("auth","Firebase",vs());/**
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
 */const Gr=new cr("@firebase/auth");function cn(n,...e){Gr.logLevel<=se.ERROR&&Gr.error(`Auth (${In}): ${n}`,...e)}/**
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
 */function Re(n,...e){throw pr(n,...e)}function Me(n,...e){return pr(n,...e)}function Is(n,e,t){const r=Object.assign(Object.assign({},Rc()),{[e]:t});return new ht("auth","Firebase",r).create(e,{appName:n.name})}function Oc(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Re(n,"argument-error"),Is(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function pr(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ks.create(n,...e)}function F(n,e,...t){if(!n)throw pr(e,...t)}function Ve(n){const e="INTERNAL ASSERTION FAILED: "+n;throw cn(e),new Error(e)}function We(n,e){n||Ve(e)}/**
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
 */const Yr=new Map;function $e(n){We(n instanceof Function,"Expected a class definition");let e=Yr.get(n);return e?(We(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Yr.set(n,e),e)}/**
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
 */function Pc(n,e){const t=Ct(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),o=t.getOptions();if(Vt(o,e!=null?e:{}))return i;Re(i,"already-initialized")}return t.initialize({options:e})}function Lc(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map($e);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function mn(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Nc(){return Jr()==="http:"||Jr()==="https:"}function Jr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Mc(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Nc()||ps()||"connection"in navigator)?navigator.onLine:!0}function Dc(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class Xt{constructor(e,t){this.shortDelay=e,this.longDelay=t,We(t>e,"Short delay should be less than long delay!"),this.isMobile=sl()||ll()}get(){return Mc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function hr(n,e){We(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Es{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ve("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ve("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ve("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Uc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Fc=new Xt(3e4,6e4);function Zt(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function At(n,e,t,r,i={}){return Ts(n,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=Jt(Object.assign({key:n.config.apiKey},s)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),Es.fetch()(Ss(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function Ts(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Uc),e);try{const i=new zc(n),o=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw an(n,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw an(n,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw an(n,"email-already-in-use",s);if(l==="USER_DISABLED")throw an(n,"user-disabled",s);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Is(n,u,c);Re(n,u)}}catch(i){if(i instanceof ze)throw i;Re(n,"network-request-failed")}}async function En(n,e,t,r,i={}){const o=await At(n,e,t,r,i);return"mfaPendingCredential"in o&&Re(n,"multi-factor-auth-required",{_serverResponse:o}),o}function Ss(n,e,t,r){const i=`${e}${t}?${r}`;return n.config.emulator?hr(n.config,i):`${n.config.apiScheme}://${i}`}class zc{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Me(this.auth,"network-request-failed")),Fc.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function an(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Me(n,e,r);return i.customData._tokenResponse=t,i}/**
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
 */async function Hc(n,e){return At(n,"POST","/v1/accounts:delete",e)}async function Bc(n,e){return At(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function zt(n){if(!!n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jc(n,e=!1){const t=Ge(n),r=await t.getIdToken(e),i=mr(r);F(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:zt(Hn(i.auth_time)),issuedAtTime:zt(Hn(i.iat)),expirationTime:zt(Hn(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function Hn(n){return Number(n)*1e3}function mr(n){var e;const[t,r,i]=n.split(".");if(t===void 0||r===void 0||i===void 0)return cn("JWT malformed, contained fewer than 3 sections"),null;try{const o=il(r);return o?JSON.parse(o):(cn("Failed to decode base64 JWT payload"),null)}catch(o){return cn("Caught error parsing JWT payload as JSON",(e=o)===null||e===void 0?void 0:e.toString()),null}}function Vc(n){const e=mr(n);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function qt(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof ze&&$c(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function $c({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class qc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){((e=t)===null||e===void 0?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Cs{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=zt(this.lastLoginAt),this.creationTime=zt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function gn(n){var e;const t=n.auth,r=await n.getIdToken(),i=await qt(n,Bc(t,{idToken:r}));F(i==null?void 0:i.users.length,t,"internal-error");const o=i.users[0];n._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?Gc(o.providerUserInfo):[],a=Kc(n.providerData,s),l=n.isAnonymous,c=!(n.email&&o.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Cs(o.createdAt,o.lastLoginAt),isAnonymous:u};Object.assign(n,d)}async function Wc(n){const e=Ge(n);await gn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kc(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Gc(n){return n.map(e=>{var{providerId:t}=e,r=fr(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Yc(n,e){const t=await Ts(n,{},async()=>{const r=Jt({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=n.config,s=Ss(n,i,"/v1/token",`key=${o}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Es.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class Wt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return F(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:o}=await Yc(e,t);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:o}=t,s=new Wt;return r&&(F(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(F(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(F(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Wt,this.toJSON())}_performRefresh(){return Ve("not implemented")}}/**
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
 */function Je(n,e){F(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ot{constructor(e){var{uid:t,auth:r,stsTokenManager:i}=e,o=fr(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Cs(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const t=await qt(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return jc(this,e)}reload(){return Wc(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new ot(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await gn(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await qt(this,Hc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,i,o,s,a,l,c,u;const d=(r=t.displayName)!==null&&r!==void 0?r:void 0,f=(i=t.email)!==null&&i!==void 0?i:void 0,m=(o=t.phoneNumber)!==null&&o!==void 0?o:void 0,_=(s=t.photoURL)!==null&&s!==void 0?s:void 0,I=(a=t.tenantId)!==null&&a!==void 0?a:void 0,y=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,S=(c=t.createdAt)!==null&&c!==void 0?c:void 0,L=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:v,emailVerified:R,isAnonymous:te,providerData:ne,stsTokenManager:D}=t;F(v&&D,e,"internal-error");const B=Wt.fromJSON(this.name,D);F(typeof v=="string",e,"internal-error"),Je(d,e.name),Je(f,e.name),F(typeof R=="boolean",e,"internal-error"),F(typeof te=="boolean",e,"internal-error"),Je(m,e.name),Je(_,e.name),Je(I,e.name),Je(y,e.name),Je(S,e.name),Je(L,e.name);const j=new ot({uid:v,auth:e,email:f,emailVerified:R,displayName:d,isAnonymous:te,photoURL:_,phoneNumber:m,tenantId:I,stsTokenManager:B,createdAt:S,lastLoginAt:L});return ne&&Array.isArray(ne)&&(j.providerData=ne.map(q=>Object.assign({},q))),y&&(j._redirectEventId=y),j}static async _fromIdTokenResponse(e,t,r=!1){const i=new Wt;i.updateFromServerResponse(t);const o=new ot({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await gn(o),o}}/**
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
 */class As{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}As.type="NONE";const Xr=As;/**
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
 */function un(n,e,t){return`firebase:${n}:${e}:${t}`}class vt{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=un(this.userKey,i.apiKey,o),this.fullPersistenceKey=un("persistence",i.apiKey,o),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ot._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new vt($e(Xr),e,r);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let o=i[0]||$e(Xr);const s=un(r,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(s);if(u){const d=ot._fromJSON(e,u);c!==o&&(a=d),o=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new vt(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==o)try{await c._remove(s)}catch{}})),new vt(o,e,r))}}/**
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
 */function Zr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Os(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xs(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ls(e))return"Blackberry";if(Ns(e))return"Webos";if(gr(e))return"Safari";if((e.includes("chrome/")||Rs(e))&&!e.includes("edge/"))return"Chrome";if(Ps(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function xs(n=be()){return/firefox\//i.test(n)}function gr(n=be()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Rs(n=be()){return/crios\//i.test(n)}function Os(n=be()){return/iemobile/i.test(n)}function Ps(n=be()){return/android/i.test(n)}function Ls(n=be()){return/blackberry/i.test(n)}function Ns(n=be()){return/webos/i.test(n)}function Tn(n=be()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Jc(n=be()){var e;return Tn(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Xc(){return cl()&&document.documentMode===10}function Ms(n=be()){return Tn(n)||Ps(n)||Ns(n)||Ls(n)||/windows phone/i.test(n)||Os(n)}function Zc(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Ds(n,e=[]){let t;switch(n){case"Browser":t=Zr(be());break;case"Worker":t=`${Zr(be())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${In}/${r}`}/**
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
 */class Qc{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const r=[];try{for(const i of this.queue)await i(e),i.onAbort&&r.push(i.onAbort)}catch(i){r.reverse();for(const o of r)try{o()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:(t=i)===null||t===void 0?void 0:t.message})}}}/**
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
 */class eu{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Qr(this),this.idTokenSubscription=new Qr(this),this.beforeStateQueue=new Qc(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ks,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=$e(t)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await vt.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l==null?void 0:l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await gn(e)}catch(r){if(((t=r)===null||t===void 0?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Dc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Ge(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence($e(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new ht("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&$e(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await vt.create(this,[$e(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const o=typeof t=="function"?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return F(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof t=="function"?e.addObserver(t,r,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ds(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function Sn(n){return Ge(n)}class Qr{constructor(e){this.auth=e,this.observer=null,this.addObserver=ml(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */class br{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ve("not implemented")}_getIdTokenResponse(e){return Ve("not implemented")}_linkToIdToken(e,t){return Ve("not implemented")}_getReauthenticationResolver(e){return Ve("not implemented")}}async function tu(n,e){return At(n,"POST","/v1/accounts:update",e)}/**
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
 */async function nu(n,e){return En(n,"POST","/v1/accounts:signInWithPassword",Zt(n,e))}async function ru(n,e){return At(n,"POST","/v1/accounts:sendOobCode",Zt(n,e))}async function iu(n,e){return ru(n,e)}/**
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
 */async function ou(n,e){return En(n,"POST","/v1/accounts:signInWithEmailLink",Zt(n,e))}async function su(n,e){return En(n,"POST","/v1/accounts:signInWithEmailLink",Zt(n,e))}/**
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
 */class Kt extends br{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Kt(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new Kt(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if((t==null?void 0:t.email)&&(t==null?void 0:t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return nu(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return ou(e,{email:this._email,oobCode:this._password});default:Re(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return tu(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return su(e,{idToken:t,email:this._email,oobCode:this._password});default:Re(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function kt(n,e){return En(n,"POST","/v1/accounts:signInWithIdp",Zt(n,e))}/**
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
 */const au="http://localhost";class Ke extends br{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ke(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Re("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=t,o=fr(t,["providerId","signInMethod"]);if(!r||!i)return null;const s=new Ke(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return kt(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,kt(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,kt(e,t)}buildRequest(){const e={requestUri:au,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Jt(t)}return e}}/**
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
 */function lu(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function cu(n){const e=Nt(Mt(n)).link,t=e?Nt(Mt(e)).deep_link_id:null,r=Nt(Mt(n)).deep_link_id;return(r?Nt(Mt(r)).link:null)||r||t||e||n}class Cn{constructor(e){var t,r,i,o,s,a;const l=Nt(Mt(e)),c=(t=l.apiKey)!==null&&t!==void 0?t:null,u=(r=l.oobCode)!==null&&r!==void 0?r:null,d=lu((i=l.mode)!==null&&i!==void 0?i:null);F(c&&u&&d,"argument-error"),this.apiKey=c,this.operation=d,this.code=u,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=cu(e);try{return new Cn(t)}catch{return null}}}/**
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
 */class xt{constructor(){this.providerId=xt.PROVIDER_ID}static credential(e,t){return Kt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=Cn.parseLink(t);return F(r,"argument-error"),Kt._fromEmailAndCode(e,r.code,r.tenantId)}}xt.PROVIDER_ID="password";xt.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class wr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Rt extends wr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Ht extends Rt{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return F("providerId"in t&&"signInMethod"in t,"argument-error"),Ke._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return F(e.idToken||e.accessToken,"argument-error"),Ke._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Ht.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Ht.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:o,nonce:s,providerId:a}=e;if(!r&&!i&&!t&&!o||!a)return null;try{return new Ht(a)._credential({idToken:t,accessToken:r,nonce:s,pendingToken:o})}catch{return null}}}/**
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
 */class Xe extends Rt{constructor(){super("facebook.com")}static credential(e){return Ke._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Xe.credential(e.oauthAccessToken)}catch{return null}}}Xe.FACEBOOK_SIGN_IN_METHOD="facebook.com";Xe.PROVIDER_ID="facebook.com";/**
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
 */class je extends Rt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ke._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return je.credential(t,r)}catch{return null}}}je.GOOGLE_SIGN_IN_METHOD="google.com";je.PROVIDER_ID="google.com";/**
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
 */class Ze extends Rt{constructor(){super("github.com")}static credential(e){return Ke._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ze.credential(e.oauthAccessToken)}catch{return null}}}Ze.GITHUB_SIGN_IN_METHOD="github.com";Ze.PROVIDER_ID="github.com";/**
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
 */class Qe extends Rt{constructor(){super("twitter.com")}static credential(e,t){return Ke._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Qe.credential(t,r)}catch{return null}}}Qe.TWITTER_SIGN_IN_METHOD="twitter.com";Qe.PROVIDER_ID="twitter.com";/**
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
 */class Et{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const o=await ot._fromIdTokenResponse(e,r,i),s=ei(r);return new Et({user:o,providerId:s,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=ei(r);return new Et({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function ei(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class bn extends ze{constructor(e,t,r,i){var o;super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,bn.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new bn(e,t,r,i)}}function Us(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?bn._fromErrorAndOperation(n,o,e,r):o})}async function uu(n,e,t=!1){const r=await qt(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Et._forOperation(n,"link",r)}/**
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
 */async function du(n,e,t=!1){var r;const{auth:i}=n,o="reauthenticate";try{const s=await qt(n,Us(i,o,e,n),t);F(s.idToken,i,"internal-error");const a=mr(s.idToken);F(a,i,"internal-error");const{sub:l}=a;return F(n.uid===l,i,"user-mismatch"),Et._forOperation(n,o,s)}catch(s){throw((r=s)===null||r===void 0?void 0:r.code)==="auth/user-not-found"&&Re(i,"user-mismatch"),s}}/**
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
 */async function Fs(n,e,t=!1){const r="signIn",i=await Us(n,r,e),o=await Et._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(o.user),o}async function fu(n,e){return Fs(Sn(n),e)}/**
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
 */function pu(n,e,t){var r;F(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),F(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(F(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(F(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function hu(n,e,t){const r=Ge(n),i={requestType:"EMAIL_SIGNIN",email:e};F(t.handleCodeInApp,r,"argument-error"),t&&pu(r,i,t),await iu(r,i)}function mu(n,e){const t=Cn.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function gu(n,e,t){const r=Ge(n),i=xt.credentialWithLink(e,t||mn());return F(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),fu(r,i)}function bu(n,e,t,r){return Ge(n).onAuthStateChanged(e,t,r)}function wu(n){return Ge(n).signOut()}const wn="__sak";/**
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
 */class zs{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(wn,"1"),this.storage.removeItem(wn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function _u(){const n=be();return gr(n)||Tn(n)}const yu=1e3,vu=10;class Hs extends zs{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_u()&&Zc(),this.fallbackToPolling=Ms(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const i=()=>{const s=this.storage.getItem(r);!t&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);Xc()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,vu):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},yu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Hs.type="LOCAL";const ku=Hs;/**
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
 */class Bs extends zs{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Bs.type="SESSION";const js=Bs;/**
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
 */function Iu(n){return Promise.all(n.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class An{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new An(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:o}=t.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async c=>c(t.origin,o)),l=await Iu(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}An.receivers=[];/**
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
 */function _r(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Eu{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const c=_r("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===c)switch(f.data.status){case"ack":clearTimeout(u),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(f.data.response);break;default:clearTimeout(u),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
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
 */function De(){return window}function Tu(n){De().location.href=n}/**
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
 */function Vs(){return typeof De().WorkerGlobalScope<"u"&&typeof De().importScripts=="function"}async function Su(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Cu(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Au(){return Vs()?self:null}/**
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
 */const $s="firebaseLocalStorageDb",xu=1,_n="firebaseLocalStorage",qs="fbase_key";class Qt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function xn(n,e){return n.transaction([_n],e?"readwrite":"readonly").objectStore(_n)}function Ru(){const n=indexedDB.deleteDatabase($s);return new Qt(n).toPromise()}function nr(){const n=indexedDB.open($s,xu);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(_n,{keyPath:qs})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(_n)?e(r):(r.close(),await Ru(),e(await nr()))})})}async function ti(n,e,t){const r=xn(n,!0).put({[qs]:e,value:t});return new Qt(r).toPromise()}async function Ou(n,e){const t=xn(n,!1).get(e),r=await new Qt(t).toPromise();return r===void 0?null:r.value}function ni(n,e){const t=xn(n,!0).delete(e);return new Qt(t).toPromise()}const Pu=800,Lu=3;class Ws{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nr(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Lu)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Vs()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=An._getInstance(Au()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Su(),!this.activeServiceWorker)return;this.sender=new Eu(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((t=r[0])===null||t===void 0?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Cu()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nr();return await ti(e,wn,"1"),await ni(e,wn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>ti(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Ou(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>ni(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=xn(i,!1).getAll();return new Qt(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pu)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ws.type="LOCAL";const Nu=Ws;/**
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
 */function Mu(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Du(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const o=Me("internal-error");o.customData=i,t(o)},r.type="text/javascript",r.charset="UTF-8",Mu().appendChild(r)})}function Uu(n){return`__${n}${Math.floor(Math.random()*1e6)}`}new Xt(3e4,6e4);/**
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
 */function Ks(n,e){return e?$e(e):(F(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class yr extends br{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return kt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return kt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return kt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Fu(n){return Fs(n.auth,new yr(n),n.bypassAuthState)}function zu(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),du(t,new yr(n),n.bypassAuthState)}async function Hu(n){const{auth:e,user:t}=n;return F(t,e,"internal-error"),uu(t,new yr(n),n.bypassAuthState)}/**
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
 */class Gs{constructor(e,t,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:t,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Fu;case"linkViaPopup":case"linkViaRedirect":return Hu;case"reauthViaPopup":case"reauthViaRedirect":return zu;default:Re(this.auth,"internal-error")}}resolve(e){We(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){We(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Bu=new Xt(2e3,1e4);async function Ys(n,e,t){const r=Sn(n);Oc(n,e,wr);const i=Ks(r,t);return new rt(r,"signInViaPopup",e,i).executeNotNull()}class rt extends Gs{constructor(e,t,r,i,o){super(e,t,i,o),this.provider=r,this.authWindow=null,this.pollId=null,rt.currentPopupAction&&rt.currentPopupAction.cancel(),rt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){We(this.filter.length===1,"Popup operations only handle one event");const e=_r();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Me(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Me(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,rt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Me(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Bu.get())};e()}}rt.currentPopupAction=null;/**
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
 */const ju="pendingRedirect",dn=new Map;class Vu extends Gs{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=dn.get(this.auth._key());if(!e){try{const r=await $u(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}dn.set(this.auth._key(),e)}return this.bypassAuthState||dn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $u(n,e){const t=Ku(e),r=Wu(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function qu(n,e){dn.set(n._key(),e)}function Wu(n){return $e(n._redirectPersistence)}function Ku(n){return un(ju,n.config.apiKey,n.name)}async function Gu(n,e,t=!1){const r=Sn(n),i=Ks(r,e),s=await new Vu(r,i,t).execute();return s&&!t&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}/**
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
 */const Yu=10*60*1e3;class Ju{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Xu(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Js(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Me(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Yu&&this.cachedEventUids.clear(),this.cachedEventUids.has(ri(e))}saveEventToCache(e){this.cachedEventUids.add(ri(e)),this.lastProcessedEventTime=Date.now()}}function ri(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Js({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Xu(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Js(n);default:return!1}}/**
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
 */async function Zu(n,e={}){return At(n,"GET","/v1/projects",e)}/**
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
 */const Qu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ed=/^https?/;async function td(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Zu(n);for(const t of e)try{if(nd(t))return}catch{}Re(n,"unauthorized-domain")}function nd(n){const e=mn(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const s=new URL(n);return s.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&s.hostname===r}if(!ed.test(t))return!1;if(Qu.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const rd=new Xt(3e4,6e4);function ii(){const n=De().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function id(n){return new Promise((e,t)=>{var r,i,o;function s(){ii(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ii(),t(Me(n,"network-request-failed"))},timeout:rd.get()})}if(!((i=(r=De().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=De().gapi)===null||o===void 0)&&o.load)s();else{const a=Uu("iframefcb");return De()[a]=()=>{gapi.load?s():t(Me(n,"network-request-failed"))},Du(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw fn=null,e})}let fn=null;function od(n){return fn=fn||id(n),fn}/**
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
 */const sd=new Xt(5e3,15e3),ad="__/auth/iframe",ld="emulator/auth/iframe",cd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ud=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function dd(n){const e=n.config;F(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?hr(e,ld):`https://${n.config.authDomain}/${ad}`,r={apiKey:e.apiKey,appName:n.name,v:In},i=ud.get(n.config.apiHost);i&&(r.eid=i);const o=n._getFrameworks();return o.length&&(r.fw=o.join(",")),`${t}?${Jt(r).slice(1)}`}async function fd(n){const e=await od(n),t=De().gapi;return F(t,n,"internal-error"),e.open({where:document.body,url:dd(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cd,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=Me(n,"network-request-failed"),a=De().setTimeout(()=>{o(s)},sd.get());function l(){De().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
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
 */const pd={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},hd=500,md=600,gd="_blank",bd="http://localhost";class oi{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function wd(n,e,t,r=hd,i=md){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},pd),{width:r.toString(),height:i.toString(),top:o,left:s}),c=be().toLowerCase();t&&(a=Rs(c)?gd:t),xs(c)&&(e=e||bd,l.scrollbars="yes");const u=Object.entries(l).reduce((f,[m,_])=>`${f}${m}=${_},`,"");if(Jc(c)&&a!=="_self")return _d(e||"",a),new oi(null);const d=window.open(e||"",a,u);F(d,n,"popup-blocked");try{d.focus()}catch{}return new oi(d)}function _d(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const yd="__/auth/handler",vd="emulator/auth/handler";function si(n,e,t,r,i,o){F(n.config.authDomain,n,"auth-domain-config-required"),F(n.config.apiKey,n,"invalid-api-key");const s={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:In,eventId:i};if(e instanceof wr){e.setDefaultLanguage(n.languageCode),s.providerId=e.providerId||"",hl(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,c]of Object.entries(o||{}))s[l]=c}if(e instanceof Rt){const l=e.getScopes().filter(c=>c!=="");l.length>0&&(s.scopes=l.join(","))}n.tenantId&&(s.tid=n.tenantId);const a=s;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${kd(n)}?${Jt(a).slice(1)}`}function kd({config:n}){return n.emulator?hr(n,vd):`https://${n.authDomain}/${yd}`}/**
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
 */const Bn="webStorageSupport";class Id{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=js,this._completeRedirectFn=Gu,this._overrideRedirectResult=qu}async _openPopup(e,t,r,i){var o;We((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=si(e,t,r,mn(),i);return wd(e,s,_r())}async _openRedirect(e,t,r,i){return await this._originValidation(e),Tu(si(e,t,r,mn(),i)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:o}=this.eventManagers[t];return i?Promise.resolve(i):(We(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await fd(e),r=new Ju(e);return t.register("authEvent",i=>(F(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Bn,{type:Bn},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[Bn];s!==void 0&&t(!!s),Re(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=td(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Ms()||gr()||Tn()}}const Ed=Id;var ai="@firebase/auth",li="0.20.5";/**
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
 */class Td{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);!t||(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Sd(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Cd(n){qe(new Ue("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:o,authDomain:s}=r.options;return((a,l)=>{F(o&&!o.includes(":"),"invalid-api-key",{appName:a.name}),F(!(s!=null&&s.includes(":")),"argument-error",{appName:a.name});const c={apiKey:o,authDomain:s,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ds(n)},u=new eu(a,l,c);return Lc(u,t),u})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),qe(new Ue("auth-internal",e=>{const t=Sn(e.getProvider("auth").getImmediate());return(r=>new Td(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ne(ai,li,Sd(n)),Ne(ai,li,"esm2017")}/**
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
 */function Ad(n=wc()){const e=Ct(n,"auth");return e.isInitialized()?e.getImmediate():Pc(n,{popupRedirectResolver:Ed,persistence:[Nu,ku,js]})}Cd("Browser");const Xs="@firebase/installations",vr="0.5.12";/**
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
 */const Zs=1e4,Qs=`w:${vr}`,ea="FIS_v2",xd="https://firebaseinstallations.googleapis.com/v1",Rd=60*60*1e3,Od="installations",Pd="Installations";/**
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
 */const Ld={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ut=new ht(Od,Pd,Ld);function ta(n){return n instanceof ze&&n.code.includes("request-failed")}/**
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
 */function na({projectId:n}){return`${xd}/projects/${n}/installations`}function ra(n){return{token:n.token,requestStatus:2,expiresIn:Md(n.expiresIn),creationTime:Date.now()}}async function ia(n,e){const r=(await e.json()).error;return ut.create("request-failed",{requestName:n,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function oa({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function Nd(n,{refreshToken:e}){const t=oa(n);return t.append("Authorization",Dd(e)),t}async function sa(n){const e=await n();return e.status>=500&&e.status<600?n():e}function Md(n){return Number(n.replace("s","000"))}function Dd(n){return`${ea} ${n}`}/**
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
 */async function Ud({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const r=na(n),i=oa(n),o=e.getImmediate({optional:!0});if(o){const c=await o.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const s={fid:t,authVersion:ea,appId:n.appId,sdkVersion:Qs},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await sa(()=>fetch(r,a));if(l.ok){const c=await l.json();return{fid:c.fid||t,registrationStatus:2,refreshToken:c.refreshToken,authToken:ra(c.authToken)}}else throw await ia("Create Installation",l)}/**
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
 */function aa(n){return new Promise(e=>{setTimeout(e,n)})}/**
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
 */function Fd(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const zd=/^[cdef][\w-]{21}$/,rr="";function Hd(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=Bd(n);return zd.test(t)?t:rr}catch{return rr}}function Bd(n){return Fd(n).substr(0,22)}/**
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
 */function Rn(n){return`${n.appName}!${n.appId}`}/**
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
 */const la=new Map;function ca(n,e){const t=Rn(n);ua(t,e),jd(t,e)}function ua(n,e){const t=la.get(n);if(!!t)for(const r of t)r(e)}function jd(n,e){const t=Vd();t&&t.postMessage({key:n,fid:e}),$d()}let it=null;function Vd(){return!it&&"BroadcastChannel"in self&&(it=new BroadcastChannel("[Firebase] FID Change"),it.onmessage=n=>{ua(n.data.key,n.data.fid)}),it}function $d(){la.size===0&&it&&(it.close(),it=null)}/**
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
 */const qd="firebase-installations-database",Wd=1,dt="firebase-installations-store";let jn=null;function kr(){return jn||(jn=ws(qd,Wd,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(dt)}}})),jn}async function yn(n,e){const t=Rn(n),i=(await kr()).transaction(dt,"readwrite"),o=i.objectStore(dt),s=await o.get(t);return await o.put(e,t),await i.done,(!s||s.fid!==e.fid)&&ca(n,e.fid),e}async function da(n){const e=Rn(n),r=(await kr()).transaction(dt,"readwrite");await r.objectStore(dt).delete(e),await r.done}async function On(n,e){const t=Rn(n),i=(await kr()).transaction(dt,"readwrite"),o=i.objectStore(dt),s=await o.get(t),a=e(s);return a===void 0?await o.delete(t):await o.put(a,t),await i.done,a&&(!s||s.fid!==a.fid)&&ca(n,a.fid),a}/**
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
 */async function Ir(n){let e;const t=await On(n.appConfig,r=>{const i=Kd(r),o=Gd(n,i);return e=o.registrationPromise,o.installationEntry});return t.fid===rr?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function Kd(n){const e=n||{fid:Hd(),registrationStatus:0};return fa(e)}function Gd(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const i=Promise.reject(ut.create("app-offline"));return{installationEntry:e,registrationPromise:i}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},r=Yd(n,t);return{installationEntry:t,registrationPromise:r}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:Jd(n)}:{installationEntry:e}}async function Yd(n,e){try{const t=await Ud(n,e);return yn(n.appConfig,t)}catch(t){throw ta(t)&&t.customData.serverCode===409?await da(n.appConfig):await yn(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function Jd(n){let e=await ci(n.appConfig);for(;e.registrationStatus===1;)await aa(100),e=await ci(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:r}=await Ir(n);return r||t}return e}function ci(n){return On(n,e=>{if(!e)throw ut.create("installation-not-found");return fa(e)})}function fa(n){return Xd(n)?{fid:n.fid,registrationStatus:0}:n}function Xd(n){return n.registrationStatus===1&&n.registrationTime+Zs<Date.now()}/**
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
 */async function Zd({appConfig:n,heartbeatServiceProvider:e},t){const r=Qd(n,t),i=Nd(n,t),o=e.getImmediate({optional:!0});if(o){const c=await o.getHeartbeatsHeader();c&&i.append("x-firebase-client",c)}const s={installation:{sdkVersion:Qs,appId:n.appId}},a={method:"POST",headers:i,body:JSON.stringify(s)},l=await sa(()=>fetch(r,a));if(l.ok){const c=await l.json();return ra(c)}else throw await ia("Generate Auth Token",l)}function Qd(n,{fid:e}){return`${na(n)}/${e}/authTokens:generate`}/**
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
 */async function Er(n,e=!1){let t;const r=await On(n.appConfig,o=>{if(!pa(o))throw ut.create("not-registered");const s=o.authToken;if(!e&&nf(s))return o;if(s.requestStatus===1)return t=ef(n,e),o;{if(!navigator.onLine)throw ut.create("app-offline");const a=of(o);return t=tf(n,a),a}});return t?await t:r.authToken}async function ef(n,e){let t=await ui(n.appConfig);for(;t.authToken.requestStatus===1;)await aa(100),t=await ui(n.appConfig);const r=t.authToken;return r.requestStatus===0?Er(n,e):r}function ui(n){return On(n,e=>{if(!pa(e))throw ut.create("not-registered");const t=e.authToken;return sf(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function tf(n,e){try{const t=await Zd(n,e),r=Object.assign(Object.assign({},e),{authToken:t});return await yn(n.appConfig,r),t}catch(t){if(ta(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await da(n.appConfig);else{const r=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await yn(n.appConfig,r)}throw t}}function pa(n){return n!==void 0&&n.registrationStatus===2}function nf(n){return n.requestStatus===2&&!rf(n)}function rf(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+Rd}function of(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function sf(n){return n.requestStatus===1&&n.requestTime+Zs<Date.now()}/**
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
 */async function af(n){const e=n,{installationEntry:t,registrationPromise:r}=await Ir(e);return r?r.catch(console.error):Er(e).catch(console.error),t.fid}/**
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
 */async function lf(n,e=!1){const t=n;return await cf(t),(await Er(t,e)).token}async function cf(n){const{registrationPromise:e}=await Ir(n);e&&await e}/**
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
 */function uf(n){if(!n||!n.options)throw Vn("App Configuration");if(!n.name)throw Vn("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Vn(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Vn(n){return ut.create("missing-app-config-values",{valueName:n})}/**
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
 */const ha="installations",df="installations-internal",ff=n=>{const e=n.getProvider("app").getImmediate(),t=uf(e),r=Ct(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},pf=n=>{const e=n.getProvider("app").getImmediate(),t=Ct(e,ha).getImmediate();return{getId:()=>af(t),getToken:i=>lf(t,i)}};function hf(){qe(new Ue(ha,ff,"PUBLIC")),qe(new Ue(df,pf,"PRIVATE"))}hf();Ne(Xs,vr);Ne(Xs,vr,"esm2017");/**
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
 */const ir="analytics",mf="firebase_id",gf="origin",bf=60*1e3,wf="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",ma="https://www.googletagmanager.com/gtag/js";/**
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
 */const Ae=new cr("@firebase/analytics");/**
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
 */function ga(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function _f(n,e){const t=document.createElement("script");t.src=`${ma}?l=${n}&id=${e}`,t.async=!0,document.head.appendChild(t)}function yf(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function vf(n,e,t,r,i,o){const s=r[i];try{if(s)await e[s];else{const l=(await ga(t)).find(c=>c.measurementId===i);l&&await e[l.appId]}}catch(a){Ae.error(a)}n("config",i,o)}async function kf(n,e,t,r,i){try{let o=[];if(i&&i.send_to){let s=i.send_to;Array.isArray(s)||(s=[s]);const a=await ga(t);for(const l of s){const c=a.find(d=>d.measurementId===l),u=c&&e[c.appId];if(u)o.push(u);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),n("event",r,i||{})}catch(o){Ae.error(o)}}function If(n,e,t,r){async function i(o,s,a){try{o==="event"?await kf(n,e,t,s,a):o==="config"?await vf(n,e,t,r,s,a):o==="consent"?n("consent","update",a):n("set",s)}catch(l){Ae.error(l)}}return i}function Ef(n,e,t,r,i){let o=function(...s){window[r].push(arguments)};return window[i]&&typeof window[i]=="function"&&(o=window[i]),window[i]=If(o,n,e,t),{gtagCore:o,wrappedGtag:window[i]}}function Tf(){const n=window.document.getElementsByTagName("script");for(const e of Object.values(n))if(e.src&&e.src.includes(ma))return e;return null}/**
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
 */const Sf={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},xe=new ht("analytics","Analytics",Sf);/**
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
 */const Cf=30,Af=1e3;class xf{constructor(e={},t=Af){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const ba=new xf;function Rf(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function Of(n){var e;const{appId:t,apiKey:r}=n,i={method:"GET",headers:Rf(r)},o=wf.replace("{app-id}",t),s=await fetch(o,i);if(s.status!==200&&s.status!==304){let a="";try{const l=await s.json();!((e=l.error)===null||e===void 0)&&e.message&&(a=l.error.message)}catch{}throw xe.create("config-fetch-failed",{httpStatus:s.status,responseMessage:a})}return s.json()}async function Pf(n,e=ba,t){const{appId:r,apiKey:i,measurementId:o}=n.options;if(!r)throw xe.create("no-app-id");if(!i){if(o)return{measurementId:o,appId:r};throw xe.create("no-api-key")}const s=e.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Mf;return setTimeout(async()=>{a.abort()},t!==void 0?t:bf),wa({appId:r,apiKey:i,measurementId:o},s,a,e)}async function wa(n,{throttleEndTimeMillis:e,backoffCount:t},r,i=ba){var o,s;const{appId:a,measurementId:l}=n;try{await Lf(r,e)}catch(c){if(l)return Ae.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${(o=c)===null||o===void 0?void 0:o.message}]`),{appId:a,measurementId:l};throw c}try{const c=await Of(n);return i.deleteThrottleMetadata(a),c}catch(c){const u=c;if(!Nf(u)){if(i.deleteThrottleMetadata(a),l)return Ae.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:l};throw c}const d=Number((s=u==null?void 0:u.customData)===null||s===void 0?void 0:s.httpStatus)===503?Hr(t,i.intervalMillis,Cf):Hr(t,i.intervalMillis),f={throttleEndTimeMillis:Date.now()+d,backoffCount:t+1};return i.setThrottleMetadata(a,f),Ae.debug(`Calling attemptFetch again in ${d} millis`),wa(n,f,r,i)}}function Lf(n,e){return new Promise((t,r)=>{const i=Math.max(e-Date.now(),0),o=setTimeout(t,i);n.addEventListener(()=>{clearTimeout(o),r(xe.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Nf(n){if(!(n instanceof ze)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class Mf{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Df(n,e,t,r,i){if(i&&i.global){n("event",t,r);return}else{const o=await e,s=Object.assign(Object.assign({},r),{send_to:o});n("event",t,s)}}/**
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
 */async function Uf(){var n;if(hs())try{await ms()}catch(e){return Ae.warn(xe.create("indexeddb-unavailable",{errorInfo:(n=e)===null||n===void 0?void 0:n.toString()}).message),!1}else return Ae.warn(xe.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Ff(n,e,t,r,i,o,s){var a;const l=Pf(n);l.then(m=>{t[m.measurementId]=m.appId,n.options.measurementId&&m.measurementId!==n.options.measurementId&&Ae.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${m.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(m=>Ae.error(m)),e.push(l);const c=Uf().then(m=>{if(m)return r.getId()}),[u,d]=await Promise.all([l,c]);Tf()||_f(o,u.measurementId),i("js",new Date);const f=(a=s==null?void 0:s.config)!==null&&a!==void 0?a:{};return f[gf]="firebase",f.update=!0,d!=null&&(f[mf]=d),i("config",u.measurementId,f),u.measurementId}/**
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
 */class zf{constructor(e){this.app=e}_delete(){return delete Bt[this.app.options.appId],Promise.resolve()}}let Bt={},di=[];const fi={};let $n="dataLayer",Hf="gtag",pi,_a,hi=!1;function Bf(){const n=[];if(ps()&&n.push("This is a browser extension environment."),ul()||n.push("Cookies are not available."),n.length>0){const e=n.map((r,i)=>`(${i+1}) ${r}`).join(" "),t=xe.create("invalid-analytics-context",{errorInfo:e});Ae.warn(t.message)}}function jf(n,e,t){Bf();const r=n.options.appId;if(!r)throw xe.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)Ae.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw xe.create("no-api-key");if(Bt[r]!=null)throw xe.create("already-exists",{id:r});if(!hi){yf($n);const{wrappedGtag:o,gtagCore:s}=Ef(Bt,di,fi,$n,Hf);_a=o,pi=s,hi=!0}return Bt[r]=Ff(n,di,fi,e,pi,$n,t),new zf(n)}function Vf(n,e={}){const t=Ct(n,ir);if(t.isInitialized()){const i=t.getImmediate();if(Vt(e,t.getOptions()))return i;throw xe.create("already-initialized")}return t.initialize({options:e})}function ya(n,e,t,r){n=Ge(n),Df(_a,Bt[n.app.options.appId],e,t,r).catch(i=>Ae.error(i))}const mi="@firebase/analytics",gi="0.8.0";function $f(){qe(new Ue(ir,(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("installations-internal").getImmediate();return jf(r,i,t)},"PUBLIC")),qe(new Ue("analytics-internal",n,"PRIVATE")),Ne(mi,gi),Ne(mi,gi,"esm2017");function n(e){try{const t=e.getProvider(ir).getImmediate();return{logEvent:(r,i,o)=>ya(t,r,i,o)}}catch(t){throw xe.create("interop-component-reg-failed",{reason:t})}}}$f();const qf={apiKey:"AIzaSyBns4UUCKIfb_3xOesTSezA9GbEyuIU7XA",authDomain:"fireship-app.firebaseapp.com",databaseURL:"https://fireship-app.firebaseio.com",projectId:"fireship-app",storageBucket:"fireship-app.appspot.com",messagingSenderId:"176605045081",appId:"1:176605045081:web:d87a63bd943e3032",measurementId:"G-VTJV5CVC6K"},va=bc(qf),Fe=Ad(va),Wf=Vf(va);function Kf(){ya(Wf,"page_view",{page_location:window.location.href})}async function Gf(){const n=Ys(Fe,new je);return Sr(n)}async function Yf(){const n=new Ht("apple.com"),e=Ys(Fe,n);return Sr(e)}async function Jf(n,e){const t={url:e!=null?e:`${tl}/dashboard`,handleCodeInApp:!0};let r,i;try{await hu(Fe,n,t),window.localStorage.setItem("emailForSignIn",n),r=`Magic signin link sent to ${n}`}catch(o){i=o.message}return{res:r,serverError:i}}async function Xf(){if(mu(Fe,window.location.href)){let n=window.localStorage.getItem("emailForSignIn");n||(n=window.prompt("Please provide your email for confirmation"));const e=gu(Fe,n,window.location.href);return window.localStorage.removeItem("emailForSignIn"),Sr(e)}else return{res:null,serverError:"Invalid link"}}async function Tr(){await wu(Fe),me.set({icon:"\u{1F44B}",message:"Thanks for hanging out, see ya around!"})}async function Sr(n){let e,t;try{e=await n,Ce.set(null),me.set({message:"Access granted! Logged into the mainframe!",type:"success"})}catch(r){t=r.message,console.error(r),me.set({message:t,type:"error"})}return{res:e,serverError:t}}async function ge(n){var e;try{if(!Fe.currentUser){Ce.set("signin"),me.set({message:"You must be signed in first",type:"info"});return}const{getFunctions:t,httpsCallable:r}=await st(()=>import("./index.esm.6090f816.js"),[]),i=t();return(await r(i,"userAPI")(n)).data}catch(t){console.log(t),me.set({message:(e=t==null?void 0:t.message)!=null?e:"Unknown Error. Contact hello@fireship.io for help",type:"error"})}}async function ka(n,e=0){const t=Fe.currentUser;if(!t){me.set({message:"You must be logged in to track progress",type:"error"});return}const{doc:r,setDoc:i,getFirestore:o}=await st(()=>import("./index.esm.f3058cc2.js"),[]),s=o(),a=r(s,`progress/${t.uid}`);i(a,{[n]:100+e},{merge:!0})}async function Zf(n){const e=Fe.currentUser,{doc:t,setDoc:r,deleteField:i,getFirestore:o}=await st(()=>import("./index.esm.f3058cc2.js"),[]),s=o(),a=t(s,`progress/${e.uid}`);r(a,{[n]:i()},{merge:!0})}function Qf(){let n;window.addEventListener("flamethrower:router:fetch",()=>{var e;n=(e=document.getElementById("sidebar"))==null?void 0:e.scrollTop}),window.addEventListener("flamethrower:router:end",()=>{const e=document.getElementById("sidebar");e==null||e.scrollTo({top:n})})}const Dt=Te(!0),qn="himom";let yt="";function ep(n){n.ctrlKey&&n.key==="b"&&(console.log("ctrlb"),n.preventDefault(),Dt.update(e=>!e)),n.key==="Escape"&&Ce.set(null),(n.key==="/"||n.ctrlKey&&n.key==="k")&&(n.preventDefault(),Ce.set("search")),qn.includes(n.key)?(yt+=n.key,yt===qn&&(console.log("HI MOM!"),Ce.set("himom"),yt=""),qn.includes(yt)||(yt="")):yt=""}window.addEventListener("keydown",ep);function tp(n){return{c(){this.c=k},m:k,p:k,i:k,o:k,d:k}}function np(n,e,t){let{permalink:r}=e,{next:i}=e,{prev:o}=e,{vimeo:s}=e,{youtube:a}=e,{free:l}=e;return pt(()=>{kn.set({permalink:r,next:i,prev:o,vimeo:s,free:l,youtube:a})}),n.$$set=c=>{"permalink"in c&&t(0,r=c.permalink),"next"in c&&t(1,i=c.next),"prev"in c&&t(2,o=c.prev),"vimeo"in c&&t(3,s=c.vimeo),"youtube"in c&&t(4,a=c.youtube),"free"in c&&t(5,l=c.free)},[r,i,o,s,a,l]}class rp extends G{constructor(e){super(),J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},np,tp,K,{permalink:0,next:1,prev:2,vimeo:3,youtube:4,free:5},null),e&&(e.target&&p(e.target,this,e.anchor),e.props&&(this.$set(e.props),W()))}static get observedAttributes(){return["permalink","next","prev","vimeo","youtube","free"]}get permalink(){return this.$$.ctx[0]}set permalink(e){this.$$set({permalink:e}),W()}get next(){return this.$$.ctx[1]}set next(e){this.$$set({next:e}),W()}get prev(){return this.$$.ctx[2]}set prev(e){this.$$set({prev:e}),W()}get vimeo(){return this.$$.ctx[3]}set vimeo(e){this.$$set({vimeo:e}),W()}get youtube(){return this.$$.ctx[4]}set youtube(e){this.$$set({youtube:e}),W()}get free(){return this.$$.ctx[5]}set free(e){this.$$set({free:e}),W()}}customElements.define("global-data",rp);const Tt={"react-next-firebase":{id:"react-next-firebase",price:"price_1Lkgo6BF7AptWZlcBFVoputL",amount:20,legacy_sku:"sku_ItHZfVSApb3xkT"},js:{id:"js",price:"price_1M6lsOBF7AptWZlcVCGjrDvX",amount:20},supabase:{id:"supabase",price:"price_1M7tSgBF7AptWZlcKAduj6Gr",amount:20},git:{id:"git",price:"price_1LkgzcBF7AptWZlcF5NJQgKd",amount:10,legacy_sku:"sku_KBHTYbTWv1Hmb7"},angular:{id:"angular",price:"price_1Lkh0WBF7AptWZlcYUEGDHLz",amount:20,legacy_sku:"sku_Fn7Ojng8TLwnC4"},"flutter-firebase":{id:"flutter-firebase",price:"price_1Lkh1TBF7AptWZlcrWJiK3PT",amount:20,legacy_sku:"sku_FJCsh7mvjI83Kz"},dart:{id:"dart",price:"price_1Lkh20BF7AptWZlcqyViQgv0",amount:10,legacy_sku:"sku_KOyOvlrmLikRz8"},"vscode-tricks":{id:"vscode-tricks",price:"price_1Lkh2mBF7AptWZlcR0GhtjwH",amount:10,legacy_sku:"sku_Kf57qdqUerVTUS"},"firestore-data-modeling":{id:"firestore-data-modeling",price:"price_1Lkh3VBF7AptWZlcNiWVmDLI",amount:10,legacy_sku:"sku_FJEdx5Tz9dPrvm"},"firebase-security":{id:"firebase-security",price:"price_1Lkh4EBF7AptWZlcFv4ZvmIR",amount:10,legacy_sku:"sku_IVIjaiCRlivYD3"},"stripe-js":{id:"stripe-js",price:"price_1LnAhnBF7AptWZlc3VgezH7X",amount:20,legacy_sku:"sku_HG8dqucZV4x6F2"},lifetime:{id:"lifetime",price:"price_1LkhByBF7AptWZlcIUg2TjVg",amount:399},enterprise:{id:"enterprise",price:"price_1LkhByBF7AptWZlcx5vOdAnG",amount:299},month:{id:"pro",price:"price_1LkhBxBF7AptWZlcJB2I2IUt",amount:29},quarter:{id:"pro",price:"price_1LkhByBF7AptWZlcg9Zjbmw6",amount:69},year:{id:"pro",price:"price_1LkhByBF7AptWZlcVY5TwKdS",amount:199}};function ip(n){var e;return(e=Object.values(Tt).find(t=>t.legacy_sku===n))==null?void 0:e.id}function Cr(n=window.location.pathname){const e=n.split("/"),t=e.findIndex(r=>r==="courses")+1;return e==null?void 0:e[t]}const Ar=Te(null),ft=Te(null),St=Te(null),or=Te(null);let Wn,Kn,Gn;bu(Fe,async n=>{if(Ar.set(n),n){const{doc:e,onSnapshot:t,getFirestore:r}=await st(()=>import("./index.esm.f3058cc2.js"),[]),i=r(),o=e(i,`users/${n.uid}`),s=e(i,`progress/${n.uid}`),a=e(i,`seats/${n.uid}`);Wn=t(o,l=>{var c;ft.set(l.data()),(c=l.data())!=null&&c.enterprise&&(Gn=t(a,u=>{or.set(u.data())}))}),Kn=t(s,l=>{St.set(l.data())})}else Wn&&Wn(),Kn&&Kn(),Gn&&Gn(),ft.set(null),St.set(null),or.set(null)});const Gt=us([ft,kn],([n,e])=>{var r,i,o;const t=Cr(e==null?void 0:e.permalink);return!!((n==null?void 0:n.is_pro)||((r=n==null?void 0:n.courses)==null?void 0:r[t])||((o=n==null?void 0:n.products)==null?void 0:o[(i=Tt[t])==null?void 0:i.legacy_sku]))});function bi(n,e,t){const r=n.slice();return r[7]=e[t],r}function wi(n){var r;let e=((r=n[4])==null?void 0:r.email)+"",t;return{c(){t=x(e)},m(i,o){p(i,t,o)},p(i,o){var s;o&16&&e!==(e=((s=i[4])==null?void 0:s.email)+"")&&U(t,e)},d(i){i&&g(t)}}}function _i(n){let e,t,r,i;return{c(){e=b("img"),It(e.src,t=n[2])||w(e,"src",t),w(e,"alt","avatar"),w(e,"referrerpolicy","no-referrer"),Ur(e,"max-width","100%"),Ur(e,"border-radius","9999px")},m(o,s){p(o,e,s),r||(i=P(e,"error",n[6]),r=!0)},p(o,s){s&4&&!It(e.src,t=o[2])&&w(e,"src",t)},d(o){o&&g(e),r=!1,i()}}}function yi(n){var r;let e=((r=n[4])==null?void 0:r.displayName)+"",t;return{c(){t=x(e)},m(i,o){p(i,t,o)},p(i,o){var s;o&16&&e!==(e=((s=i[4])==null?void 0:s.displayName)+"")&&U(t,e)},d(i){i&&g(t)}}}function vi(n){var r;let e=((r=n[4])==null?void 0:r.uid)+"",t;return{c(){t=x(e)},m(i,o){p(i,t,o)},p(i,o){var s;o&16&&e!==(e=((s=i[4])==null?void 0:s.uid)+"")&&U(t,e)},d(i){i&&g(t)}}}function ki(n){var r,i;let e=Ri((i=(r=n[5])==null?void 0:r.xp)!=null?i:0)+"",t;return{c(){t=x(e)},m(o,s){p(o,t,s)},p(o,s){var a,l;s&32&&e!==(e=Ri((l=(a=o[5])==null?void 0:a.xp)!=null?l:0)+"")&&U(t,e)},d(o){o&&g(t)}}}function Ii(n){var r,i,o;let e=((o=(i=(r=n[5])==null?void 0:r.xp)==null?void 0:i.toLocaleString())!=null?o:0)+"",t;return{c(){t=x(e)},m(s,a){p(s,t,a)},p(s,a){var l,c,u;a&32&&e!==(e=((u=(c=(l=s[5])==null?void 0:l.xp)==null?void 0:c.toLocaleString())!=null?u:0)+"")&&U(t,e)},d(s){s&&g(t)}}}function Ei(n){var r;let e,t=((r=n[1])==null?void 0:r.expires)&&Ti(n);return{c(){t&&t.c(),e=ee()},m(i,o){t&&t.m(i,o),p(i,e,o)},p(i,o){var s;(s=i[1])!=null&&s.expires?t?t.p(i,o):(t=Ti(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(i){t&&t.d(i),i&&g(e)}}}function Ti(n){var i;let e,t=Oi((i=n[1])==null?void 0:i.expires)+"",r;return{c(){e=x("Your PRO access expires "),r=x(t)},m(o,s){p(o,e,s),p(o,r,s)},p(o,s){var a;s&2&&t!==(t=Oi((a=o[1])==null?void 0:a.expires)+"")&&U(r,t)},d(o){o&&g(e),o&&g(r)}}}function Si(n){var r;let e,t=((r=n[3])==null?void 0:r.length)&&Ci(n);return{c(){t&&t.c(),e=ee()},m(i,o){t&&t.m(i,o),p(i,e,o)},p(i,o){var s;(s=i[3])!=null&&s.length?t?t.p(i,o):(t=Ci(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(i){t&&t.d(i),i&&g(e)}}}function Ci(n){let e,t,r,i=n[3],o=[];for(let s=0;s<i.length;s+=1)o[s]=Ai(bi(n,i,s));return{c(){e=b("h3"),e.textContent="Purchased Courses",t=E(),r=b("ul");for(let s=0;s<o.length;s+=1)o[s].c()},m(s,a){p(s,e,a),p(s,t,a),p(s,r,a);for(let l=0;l<o.length;l+=1)o[l].m(r,null)},p(s,a){if(a&8){i=s[3];let l;for(l=0;l<i.length;l+=1){const c=bi(s,i,l);o[l]?o[l].p(c,a):(o[l]=Ai(c),o[l].c(),o[l].m(r,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=i.length}},d(s){s&&g(e),s&&g(t),s&&g(r),tt(o,s)}}}function Ai(n){let e,t,r=n[7]+"",i,o;return{c(){e=b("li"),t=b("a"),i=x(r),w(t,"href",o=`/courses/${n[7]}`)},m(s,a){p(s,e,a),h(e,t),h(t,i)},p(s,a){a&8&&r!==(r=s[7]+"")&&U(i,r),a&8&&o!==(o=`/courses/${s[7]}`)&&w(t,"href",o)},d(s){s&&g(e)}}}function xi(n){var o,s;let e,t=((s=(o=n[1])==null?void 0:o.pro_status)!=null?s:"basic")+"",r,i;return{c(){var a,l;e=b("span"),r=x(t),w(e,"class",i=(l=(a=n[1])==null?void 0:a.pro_status)!=null?l:"basic")},m(a,l){p(a,e,l),h(e,r)},p(a,l){var c,u,d,f;l&2&&t!==(t=((u=(c=a[1])==null?void 0:c.pro_status)!=null?u:"basic")+"")&&U(r,t),l&2&&i!==(i=(f=(d=a[1])==null?void 0:d.pro_status)!=null?f:"basic")&&w(e,"class",i)},d(a){a&&g(e)}}}function op(n){let e,t,r,i,o,s,a,l,c,u=n[0]==="email"&&wi(n),d=n[0]==="photoURL"&&_i(n),f=n[0]==="displayName"&&yi(n),m=n[0]==="uid"&&vi(n),_=n[0]==="xp"&&ki(n),I=n[0]==="xp-raw"&&Ii(n),y=n[0]==="expires"&&Ei(n),S=n[0]==="courses"&&Si(n),L=n[0]==="status"&&xi(n);return{c(){u&&u.c(),e=E(),d&&d.c(),t=E(),f&&f.c(),r=E(),m&&m.c(),i=E(),_&&_.c(),o=E(),I&&I.c(),s=E(),y&&y.c(),a=E(),S&&S.c(),l=E(),L&&L.c(),c=ee(),this.c=k},m(v,R){u&&u.m(v,R),p(v,e,R),d&&d.m(v,R),p(v,t,R),f&&f.m(v,R),p(v,r,R),m&&m.m(v,R),p(v,i,R),_&&_.m(v,R),p(v,o,R),I&&I.m(v,R),p(v,s,R),y&&y.m(v,R),p(v,a,R),S&&S.m(v,R),p(v,l,R),L&&L.m(v,R),p(v,c,R)},p(v,[R]){v[0]==="email"?u?u.p(v,R):(u=wi(v),u.c(),u.m(e.parentNode,e)):u&&(u.d(1),u=null),v[0]==="photoURL"?d?d.p(v,R):(d=_i(v),d.c(),d.m(t.parentNode,t)):d&&(d.d(1),d=null),v[0]==="displayName"?f?f.p(v,R):(f=yi(v),f.c(),f.m(r.parentNode,r)):f&&(f.d(1),f=null),v[0]==="uid"?m?m.p(v,R):(m=vi(v),m.c(),m.m(i.parentNode,i)):m&&(m.d(1),m=null),v[0]==="xp"?_?_.p(v,R):(_=ki(v),_.c(),_.m(o.parentNode,o)):_&&(_.d(1),_=null),v[0]==="xp-raw"?I?I.p(v,R):(I=Ii(v),I.c(),I.m(s.parentNode,s)):I&&(I.d(1),I=null),v[0]==="expires"?y?y.p(v,R):(y=Ei(v),y.c(),y.m(a.parentNode,a)):y&&(y.d(1),y=null),v[0]==="courses"?S?S.p(v,R):(S=Si(v),S.c(),S.m(l.parentNode,l)):S&&(S.d(1),S=null),v[0]==="status"?L?L.p(v,R):(L=xi(v),L.c(),L.m(c.parentNode,c)):L&&(L.d(1),L=null)},i:k,o:k,d(v){u&&u.d(v),v&&g(e),d&&d.d(v),v&&g(t),f&&f.d(v),v&&g(r),m&&m.d(v),v&&g(i),_&&_.d(v),v&&g(o),I&&I.d(v),v&&g(s),y&&y.d(v),v&&g(a),S&&S.d(v),v&&g(l),L&&L.d(v),v&&g(c)}}}function Ri(n){return Intl.NumberFormat("en",{notation:"compact"}).format(n)}function Oi(n){if(!n)return"never";let e=new Intl.RelativeTimeFormat("en",{numeric:"auto"}),t=-Math.floor((Date.now()-n*1e3)/1e3)/86400;return e.format(Math.floor(t),"day")}function sp(n,e,t){var u;let r,i,o,s;ie(n,ft,d=>t(1,i=d)),ie(n,Ar,d=>t(4,o=d)),ie(n,St,d=>t(5,s=d));let{field:a}=e,l=(u=o==null?void 0:o.photoURL)!=null?u:"/img/ui/avatar.svg";const c=()=>t(2,l="/img/ui/avatar.svg");return n.$$set=d=>{"field"in d&&t(0,a=d.field)},n.$$.update=()=>{n.$$.dirty&2&&t(3,r=[...Object.keys((i==null?void 0:i.courses)||{}),...Object.keys((i==null?void 0:i.products)||{}).map(ip)].filter(Boolean))},[a,i,l,r,o,s,c]}class ap extends G{constructor(e){super(),this.shadowRoot.innerHTML=`<style>h3{font-family:cubano, sans-serif;font-weight:400;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))
}a{--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none
}ul{margin-bottom:2.5rem
}.basic{--tw-text-opacity:1;color:rgb(108 121 131 / var(--tw-text-opacity))
}.active{--tw-text-opacity:1;color:rgb(34 197 94 / var(--tw-text-opacity))
}.cancelled{--tw-text-opacity:1;color:rgb(234 179 8 / var(--tw-text-opacity))
}.enterprise{--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity))
}.lifetime{--tw-text-opacity:1;color:rgb(34 197 94 / var(--tw-text-opacity))
}</style>`,J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},sp,op,K,{field:0},null),e&&(e.target&&p(e.target,this,e.anchor),e.props&&(this.$set(e.props),W()))}static get observedAttributes(){return["field"]}get field(){return this.$$.ctx[0]}set field(e){this.$$set({field:e}),W()}}customElements.define("user-data",ap);function lp(n){let e,t,r;return{c(){e=b("button"),e.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><g transform="matrix(1, 0, 0, 1, 27.009001, -39.238998)"><path fill="#4285F4" d="M -3.264 51.509 C -3.264 50.719 -3.334 49.969 -3.454 49.239 L -14.754 49.239 L -14.754 53.749 L -8.284 53.749 C -8.574 55.229 -9.424 56.479 -10.684 57.329 L -10.684 60.329 L -6.824 60.329 C -4.564 58.239 -3.264 55.159 -3.264 51.509 Z"></path><path fill="#34A853" d="M -14.754 63.239 C -11.514 63.239 -8.804 62.159 -6.824 60.329 L -10.684 57.329 C -11.764 58.049 -13.134 58.489 -14.754 58.489 C -17.884 58.489 -20.534 56.379 -21.484 53.529 L -25.464 53.529 L -25.464 56.619 C -23.494 60.539 -19.444 63.239 -14.754 63.239 Z"></path><path fill="#FBBC05" d="M -21.484 53.529 C -21.734 52.809 -21.864 52.039 -21.864 51.239 C -21.864 50.439 -21.724 49.669 -21.484 48.949 L -21.484 45.859 L -25.464 45.859 C -26.284 47.479 -26.754 49.299 -26.754 51.239 C -26.754 53.179 -26.284 54.999 -25.464 56.619 L -21.484 53.529 Z"></path><path fill="#EA4335" d="M -14.754 43.989 C -12.984 43.989 -11.404 44.599 -10.154 45.789 L -6.734 42.369 C -8.804 40.429 -11.514 39.239 -14.754 39.239 C -19.444 39.239 -23.494 41.939 -25.464 45.859 L -21.484 48.949 C -20.534 46.099 -17.884 43.989 -14.754 43.989 Z"></path></g></svg>
    Sign in with Google`,this.c=k},m(i,o){p(i,e,o),t||(r=P(e,"click",Gf),t=!0)},p:k,i:k,o:k,d(i){i&&g(e),t=!1,r()}}}class cp extends G{constructor(e){super(),this.shadowRoot.innerHTML=`<style>button{margin-top:0.125rem;margin-bottom:0.125rem;display:inline-flex;width:100%;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:1rem;padding-right:1rem;padding-top:0.75rem;padding-bottom:0.75rem;font-family:sofia-pro, sans-serif;font-size:1rem;line-height:1.5rem;--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity));--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}svg{position:relative;top:0.25rem;margin-right:0.5rem;height:1.25rem;width:1.25rem
}</style>`,J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},null,lp,K,{},null),e&&e.target&&p(e.target,this,e.anchor)}}customElements.define("google-signin",cp);function up(n){let e,t,r;return{c(){e=b("button"),e.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" width="814px" height="1000px" viewBox="0 0 814 1000" enable-background="new 0 0 814 1000" xml:space="preserve"><path d="M788.1,340.9c-5.8,4.5-108.2,62.2-108.2,190.5c0,148.4,130.3,200.9,134.2,202.2c-0.6,3.2-20.7,71.9-68.7,141.9  c-42.8,61.6-87.5,123.1-155.5,123.1s-85.5-39.5-164-39.5c-76.5,0-103.7,40.8-165.9,40.8s-105.6-57-155.5-127  C46.7,790.7,0,663,0,541.8c0-194.4,126.4-297.5,250.8-297.5c66.1,0,121.2,43.4,162.7,43.4c39.5,0,101.1-46,176.3-46  C618.3,241.7,720.7,244.3,788.1,340.9z M554.1,159.4c31.1-36.9,53.1-88.1,53.1-139.3c0-7.1-0.6-14.3-1.9-20.1  c-50.6,1.9-110.8,33.7-147.1,75.8c-28.5,32.4-55.1,83.6-55.1,135.5c0,7.8,1.3,15.6,1.9,18.1c3.2,0.6,8.4,1.3,13.6,1.3  C464,230.7,521.1,200.3,554.1,159.4z"></path></svg>
    Sign in with Apple`,this.c=k},m(i,o){p(i,e,o),t||(r=P(e,"click",Yf),t=!0)},p:k,i:k,o:k,d(i){i&&g(e),t=!1,r()}}}class dp extends G{constructor(e){super(),this.shadowRoot.innerHTML=`<style>button{margin-top:0.125rem;margin-bottom:0.125rem;display:inline-flex;width:100%;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgb(255 255 255 / var(--tw-bg-opacity));padding-left:1rem;padding-right:1rem;padding-top:0.75rem;padding-bottom:0.75rem;font-family:sofia-pro, sans-serif;font-size:1rem;line-height:1.5rem;--tw-text-opacity:1;color:rgb(0 0 0 / var(--tw-text-opacity));--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}svg{position:relative;top:0.125rem;margin-right:0.5rem;height:1.25rem;width:1.25rem
}</style>`,J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},null,up,K,{},null),e&&e.target&&p(e.target,this,e.anchor)}}customElements.define("apple-signin",dp);function Pi(n){let e,t;return{c(){e=b("p"),t=x(n[5]),w(e,"class","error")},m(r,i){p(r,e,i),h(e,t)},p(r,i){i&32&&U(t,r[5])},d(r){r&&g(e)}}}function Li(n){let e,t;return{c(){e=b("p"),t=x(n[4]),w(e,"class","success")},m(r,i){p(r,e,i),h(e,t)},p(r,i){i&16&&U(t,r[4])},d(r){r&&g(e)}}}function fp(n){let e,t,r,i,o,s,a,l,c,u,d,f=n[5]&&Pi(n),m=n[4]&&Li(n);return{c(){e=b("form"),t=b("label"),t.textContent="Email",r=E(),i=b("input"),o=E(),f&&f.c(),s=E(),m&&m.c(),a=E(),l=b("input"),this.c=k,w(t,"for","email"),w(i,"class","input"),w(i,"type","email"),w(i,"name","email"),i.required=!0,Z(i,"touched",n[2]),w(l,"class","btn"),w(l,"type","submit"),l.value=c=n[3]?"sending...":"send",Z(l,"disabled",!n[1]||n[3])},m(_,I){p(_,e,I),h(e,t),h(e,r),h(e,i),n[8](i),h(e,o),f&&f.m(e,null),h(e,s),m&&m.m(e,null),h(e,a),h(e,l),u||(d=[P(i,"input",n[6]),P(i,"focus",n[9],{once:!0}),P(e,"submit",ja(n[7]))],u=!0)},p(_,[I]){I&4&&Z(i,"touched",_[2]),_[5]?f?f.p(_,I):(f=Pi(_),f.c(),f.m(e,s)):f&&(f.d(1),f=null),_[4]?m?m.p(_,I):(m=Li(_),m.c(),m.m(e,a)):m&&(m.d(1),m=null),I&8&&c!==(c=_[3]?"sending...":"send")&&(l.value=c),I&10&&Z(l,"disabled",!_[1]||_[3])},i:k,o:k,d(_){_&&g(e),n[8](null),f&&f.d(),m&&m.d(),u=!1,fe(d)}}}function pp(n,e,t){let r,i=!1,o=!1,s=!1,a,l;function c(){t(1,i=r.validity.valid)}async function u(m){const _=r.value,I=window.location.href;t(3,s=!0);const{res:y,serverError:S}=await Jf(_,I);t(3,s=!1),t(5,l=S),t(4,a=y)}function d(m){at[m?"unshift":"push"](()=>{r=m,t(0,r)})}return[r,i,o,s,a,l,c,u,d,()=>t(2,o=!0)]}class hp extends G{constructor(e){super(),this.shadowRoot.innerHTML=`<style>.input{display:block;width:100%;border-radius:0px;border-bottom-width:4px;border-top-width:0px;border-right-width:0px;border-left-width:0px;--tw-border-opacity:1;border-bottom-color:rgb(255 255 255 / var(--tw-border-opacity));background-color:rgb(18 24 27 / var(--tw-bg-opacity));--tw-bg-opacity:0.3;padding-top:0.75rem;padding-bottom:0.75rem;padding-left:0.25rem;padding-right:0.25rem;font-size:1.125rem;line-height:1.75rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px
}.input:focus-visible{outline:2px solid transparent;outline-offset:2px
}label{font-weight:700;--tw-text-opacity:1;color:rgb(178 190 205 / var(--tw-text-opacity))
}input[type='email']:valid{--tw-border-opacity:1;border-bottom-color:rgb(34 197 94 / var(--tw-border-opacity))
}.btn{margin-top:0.5rem;margin-bottom:0.5rem;display:inline-block;width:auto;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));padding-left:1rem;padding-right:1rem;padding-top:0.75rem;padding-bottom:0.75rem;text-align:center;font-family:sofia-pro, sans-serif;font-weight:700;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}.btn:hover{--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity))
}.disabled{cursor:not-allowed;opacity:0.5
}.touched{border-bottom-width:4px;--tw-border-opacity:1;border-bottom-color:rgb(59 130 246 / var(--tw-border-opacity))
}.error{font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(239 68 68 / var(--tw-text-opacity))
}.success{font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(34 197 94 / var(--tw-text-opacity))
}</style>`,J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},pp,fp,K,{},null),e&&e.target&&p(e.target,this,e.anchor)}}customElements.define("email-signin",hp);function mp(n){let e,t,r;return{c(){e=b("span"),e.innerHTML="<slot></slot>",this.c=k},m(i,o){p(i,e,o),t||(r=P(e,"click",Tr),t=!0)},p:k,i:k,o:k,d(i){i&&g(e),t=!1,r()}}}class gp extends G{constructor(e){super(),J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},null,mp,K,{},null),e&&e.target&&p(e.target,this,e.anchor)}}customElements.define("sign-out",gp);function bp(n){let e;return{c(){e=b("modal-dialog"),e.innerHTML=`<h1>Login</h1> 
  <p>With magic email link:</p> 
  <email-signin></email-signin> 
  <p>Or with account:</p> 
  <google-signin></google-signin> 
  <apple-signin></apple-signin> 
  <p class="footer">By signing up, you agree to Fireship&#39;s Terms of Service &amp; Privacy Policy.</p>`,this.c=k,Ee(e,"name","signin"),Ee(e,"esc","true")},m(t,r){p(t,e,r)},p:k,i:k,o:k,d(t){t&&g(e)}}}class wp extends G{constructor(e){super(),this.shadowRoot.innerHTML=`<style>.footer{font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(108 121 131 / var(--tw-text-opacity))
}</style>`,J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},null,bp,K,{},null),e&&e.target&&p(e.target,this,e.anchor)}}customElements.define("app-signin",wp);function Ni(n){let e;return{c(){e=b("slot"),w(e,"name","pro")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function Mi(n){let e;return{c(){e=b("slot"),w(e,"name","basic")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function Di(n){let e;return{c(){e=b("slot"),w(e,"name","lifetime")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function Ui(n){let e;return{c(){e=b("slot"),w(e,"name","enterprise")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function Fi(n){let e;return{c(){e=b("slot"),w(e,"name","canceled")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function _p(n){var d,f,m,_,I;let e,t,r,i,o,s=((d=n[0])==null?void 0:d.is_pro)&&Ni(),a=!((f=n[0])!=null&&f.is_pro)&&Mi(),l=((m=n[0])==null?void 0:m.pro_status)==="lifetime"&&Di(),c=((_=n[0])==null?void 0:_.enterprise)&&Ui(),u=((I=n[0])==null?void 0:I.pro_status)==="canceled"&&Fi();return{c(){s&&s.c(),e=E(),a&&a.c(),t=E(),l&&l.c(),r=E(),c&&c.c(),i=E(),u&&u.c(),o=ee(),this.c=k},m(y,S){s&&s.m(y,S),p(y,e,S),a&&a.m(y,S),p(y,t,S),l&&l.m(y,S),p(y,r,S),c&&c.m(y,S),p(y,i,S),u&&u.m(y,S),p(y,o,S)},p(y,[S]){var L,v,R,te,ne;(L=y[0])!=null&&L.is_pro?s||(s=Ni(),s.c(),s.m(e.parentNode,e)):s&&(s.d(1),s=null),(v=y[0])!=null&&v.is_pro?a&&(a.d(1),a=null):a||(a=Mi(),a.c(),a.m(t.parentNode,t)),((R=y[0])==null?void 0:R.pro_status)==="lifetime"?l||(l=Di(),l.c(),l.m(r.parentNode,r)):l&&(l.d(1),l=null),(te=y[0])!=null&&te.enterprise?c||(c=Ui(),c.c(),c.m(i.parentNode,i)):c&&(c.d(1),c=null),((ne=y[0])==null?void 0:ne.pro_status)==="canceled"?u||(u=Fi(),u.c(),u.m(o.parentNode,o)):u&&(u.d(1),u=null)},i:k,o:k,d(y){s&&s.d(y),y&&g(e),a&&a.d(y),y&&g(t),l&&l.d(y),y&&g(r),c&&c.d(y),y&&g(i),u&&u.d(y),y&&g(o)}}}function yp(n,e,t){let r;return ie(n,ft,i=>t(0,r=i)),[r]}class vp extends G{constructor(e){super(),J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},yp,_p,K,{},null),e&&e.target&&p(e.target,this,e.anchor)}}customElements.define("if-pro",vp);function kp(n){let e;return{c(){e=b("slot"),w(e,"name","signed-out")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function Ip(n){let e;return{c(){e=b("slot")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function Ep(n){let e;function t(o,s){return o[0]?Ip:kp}let r=t(n),i=r(n);return{c(){i.c(),e=ee(),this.c=k},m(o,s){i.m(o,s),p(o,e,s)},p(o,[s]){r!==(r=t(o))&&(i.d(1),i=r(o),i&&(i.c(),i.m(e.parentNode,e)))},i:k,o:k,d(o){i.d(o),o&&g(e)}}}function Tp(n,e,t){let r;return ie(n,Ar,i=>t(0,r=i)),[r]}class Sp extends G{constructor(e){super(),J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},Tp,Ep,K,{},null),e&&e.target&&p(e.target,this,e.anchor)}}customElements.define("if-user",Sp);function Cp(n){let e;return{c(){e=b("slot"),w(e,"name","denied")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function Ap(n){let e;return{c(){e=b("slot"),w(e,"name","granted")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function xp(n){let e;function t(o,s){return o[0]||o[1]?Ap:Cp}let r=t(n),i=r(n);return{c(){i.c(),e=ee(),this.c=k},m(o,s){i.m(o,s),p(o,e,s)},p(o,[s]){r!==(r=t(o))&&(i.d(1),i=r(o),i&&(i.c(),i.m(e.parentNode,e)))},i:k,o:k,d(o){i.d(o),o&&g(e)}}}function Rp(n,e,t){let r;ie(n,Gt,o=>t(1,r=o));let{free:i=!1}=e;return n.$$set=o=>{"free"in o&&t(0,i=o.free)},[i,r]}class Op extends G{constructor(e){super(),J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},Rp,xp,K,{free:0},null),e&&(e.target&&p(e.target,this,e.anchor),e.props&&(this.$set(e.props),W()))}static get observedAttributes(){return["free"]}get free(){return this.$$.ctx[0]}set free(e){this.$$set({free:e}),W()}}customElements.define("if-access",Op);function zi(n){let e;return{c(){e=b("span"),e.textContent="PRO",w(e,"class","label green"),w(e,"title","all access pass")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function Hi(n){let e;return{c(){e=b("span"),e.textContent="Lifer",w(e,"class","label green"),w(e,"title","you are a total chad")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function Bi(n){let e;return{c(){e=b("span"),e.textContent="SUDO",w(e,"class","label blue"),w(e,"title","enterprise account")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function ji(n){let e;return{c(){e=b("span"),e.textContent="Vet",w(e,"class","label orange"),w(e,"title","thank you for being a former member")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function Vi(n){let e;return{c(){e=b("span"),e.textContent="Basic",w(e,"class","label gray"),w(e,"title","upgrade for all access")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function Pp(n){var S,L,v,R,te,ne,D,B;let e,t,r,i,o,s,a,l,c,u=((v=(L=(S=n[1])==null?void 0:S.xp)==null?void 0:L.toLocaleString("en",{notation:"compact"}))!=null?v:0)+"",d,f=((R=n[0])==null?void 0:R.pro_status)==="active"&&zi(),m=((te=n[0])==null?void 0:te.pro_status)==="lifetime"&&Hi(),_=((ne=n[0])==null?void 0:ne.pro_status)==="enterprise"&&Bi(),I=((D=n[0])==null?void 0:D.pro_status)==="canceled"&&ji(),y=!((B=n[0])!=null&&B.pro_status)&&Vi();return{c(){e=b("div"),t=b("user-data"),r=E(),f&&f.c(),i=E(),m&&m.c(),o=E(),_&&_.c(),s=E(),I&&I.c(),a=E(),y&&y.c(),l=E(),c=b("span"),d=x(u),this.c=k,Ee(t,"field","photoURL"),w(e,"class","wrap"),w(c,"class","xp"),w(c,"title","experience points")},m(j,q){p(j,e,q),h(e,t),h(e,r),f&&f.m(e,null),h(e,i),m&&m.m(e,null),h(e,o),_&&_.m(e,null),h(e,s),I&&I.m(e,null),h(e,a),y&&y.m(e,null),p(j,l,q),p(j,c,q),h(c,d)},p(j,[q]){var z,M,X,re,ue,we,He,ke;((z=j[0])==null?void 0:z.pro_status)==="active"?f||(f=zi(),f.c(),f.m(e,i)):f&&(f.d(1),f=null),((M=j[0])==null?void 0:M.pro_status)==="lifetime"?m||(m=Hi(),m.c(),m.m(e,o)):m&&(m.d(1),m=null),((X=j[0])==null?void 0:X.pro_status)==="enterprise"?_||(_=Bi(),_.c(),_.m(e,s)):_&&(_.d(1),_=null),((re=j[0])==null?void 0:re.pro_status)==="canceled"?I||(I=ji(),I.c(),I.m(e,a)):I&&(I.d(1),I=null),(ue=j[0])!=null&&ue.pro_status?y&&(y.d(1),y=null):y||(y=Vi(),y.c(),y.m(e,null)),q&2&&u!==(u=((ke=(He=(we=j[1])==null?void 0:we.xp)==null?void 0:He.toLocaleString("en",{notation:"compact"}))!=null?ke:0)+"")&&U(d,u)},i:k,o:k,d(j){j&&g(e),f&&f.d(),m&&m.d(),_&&_.d(),I&&I.d(),y&&y.d(),j&&g(l),j&&g(c)}}}function Lp(n,e,t){let r,i;return ie(n,ft,o=>t(0,r=o)),ie(n,St,o=>t(1,i=o)),[r,i]}class Np extends G{constructor(e){super(),this.shadowRoot.innerHTML=`<style>.wrap{position:relative;top:0.25rem;width:3rem;overflow:clip
}.label{position:absolute;bottom:0px;left:50%;margin-left:auto;margin-right:auto;display:block;--tw-translate-x:-50%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));cursor:help;border-radius:0.125rem;padding-left:0.5rem;padding-right:0.5rem;text-align:center;font-family:cubano, sans-serif;font-size:0.75rem;line-height:1rem;--tw-shadow:0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}.label.green{--tw-bg-opacity:1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))
}.label.gray{--tw-bg-opacity:1;background-color:rgb(42 46 53 / var(--tw-bg-opacity))
}.label.blue{--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity))
}.label.orange{--tw-bg-opacity:1;background-color:rgb(249 115 22 / var(--tw-bg-opacity))
}.xp{position:absolute;top:0px;right:-2rem;min-width:5ch;cursor:help;border-radius:9999px;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity:0.5;padding:0.25rem;text-align:center;font-size:0.875rem;line-height:1.25rem;font-weight:700;--tw-text-opacity:1;color:rgb(34 197 94 / var(--tw-text-opacity));--tw-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}</style>`,J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},Lp,Pp,K,{},null),e&&e.target&&p(e.target,this,e.anchor)}}customElements.define("user-avatar",Np);var is;const Yt=Te(JSON.parse((is=localStorage==null?void 0:localStorage.autoplay)!=null?is:!0));Yt.subscribe(n=>{localStorage&&(localStorage.autoplay=n)});const xr=Te(!1);let Ia;window.addEventListener("flamethrower:router:fetch",n=>{Ia=setTimeout(()=>{xr.set(!0)},0)});window.addEventListener("flamethrower:router:end",n=>{clearTimeout(Ia),setTimeout(()=>{xr.set(!1)},400)});const Ut=Te("month"),Ea=us([kn],([n])=>{const e=Cr(n==null?void 0:n.permalink);return e&&Tt[e]});function Mp(n){let e,t,r;return{c(){e=b("span"),e.textContent="change email",w(e,"class","info")},m(i,o){p(i,e,o),t||(r=P(e,"click",n[12]),t=!0)},p:k,d(i){i&&g(e),t=!1,r()}}}function Dp(n){let e,t,r,i,o,s,a,l;function c(f,m){return f[2]?Fp:Up}let u=c(n),d=u(n);return{c(){e=b("input"),t=E(),d.c(),r=E(),i=b("p"),o=x(`Be careful. If you enter the wrong email, you will not be able to access
    your account.
    `),s=b("span"),s.textContent="nevermind",w(e,"type","email"),w(e,"placeholder","new email"),e.required=!0,w(s,"class","info"),w(i,"class","warn")},m(f,m){p(f,e,m),de(e,n[4]),n[9](e),p(f,t,m),d.m(f,m),p(f,r,m),p(f,i,m),h(i,o),h(i,s),a||(l=[P(e,"input",n[8]),P(e,"input",n[6]),P(s,"click",n[11])],a=!0)},p(f,m){m&16&&e.value!==f[4]&&de(e,f[4]),u===(u=c(f))&&d?d.p(f,m):(d.d(1),d=u(f),d&&(d.c(),d.m(r.parentNode,r)))},d(f){f&&g(e),n[9](null),f&&g(t),d.d(f),f&&g(r),f&&g(i),a=!1,fe(l)}}}function Up(n){let e,t,r,i,o;return{c(){e=b("button"),t=x("change"),w(e,"class","btn btn-blue"),e.disabled=r=n[0]||!n[3]||!n[4]},m(s,a){p(s,e,a),h(e,t),i||(o=P(e,"click",n[10]),i=!0)},p(s,a){a&25&&r!==(r=s[0]||!s[3]||!s[4])&&(e.disabled=r)},d(s){s&&g(e),i=!1,o()}}}function Fp(n){let e,t,r=n[0]?"loading...":"confirm change",i,o,s,a,l=n[0]&&$i();return{c(){e=b("button"),l&&l.c(),t=E(),i=x(r),w(e,"class","btn btn-blue"),e.disabled=o=n[0]||!n[3]||!n[4]},m(c,u){p(c,e,u),l&&l.m(e,null),h(e,t),h(e,i),s||(a=P(e,"click",n[7]),s=!0)},p(c,u){c[0]?l||(l=$i(),l.c(),l.m(e,t)):l&&(l.d(1),l=null),u&1&&r!==(r=c[0]?"loading...":"confirm change")&&U(i,r),u&25&&o!==(o=c[0]||!c[3]||!c[4])&&(e.disabled=o)},d(c){c&&g(e),l&&l.d(),s=!1,a()}}}function $i(n){let e;return{c(){e=b("loading-spinner")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function zp(n){let e;function t(o,s){return o[1]?Dp:Mp}let r=t(n),i=r(n);return{c(){i.c(),e=ee(),this.c=k},m(o,s){i.m(o,s),p(o,e,s)},p(o,[s]){r===(r=t(o))&&i?i.p(o,s):(i.d(1),i=r(o),i&&(i.c(),i.m(e.parentNode,e)))},i:k,o:k,d(o){i.d(o),o&&g(e)}}}function Hp(n,e,t){let r=!1,i=!1,o=!1,s=!1,a="",l;function c(){t(3,s=l.validity.valid)}async function u(){t(0,r=!0),await ge({fn:"changeEmail",payload:{email:a}})&&(await Tr(),me.set({message:"Email updated, please sign back in",type:"success"})),t(0,r=!1)}function d(){a=this.value,t(4,a)}function f(y){at[y?"unshift":"push"](()=>{l=y,t(5,l)})}return[r,i,o,s,a,l,c,u,d,f,()=>t(2,o=!0),()=>t(1,i=!1),()=>t(1,i=!0)]}class Bp extends G{constructor(e){super(),this.shadowRoot.innerHTML=`<style>button{margin-top:0.125rem;margin-bottom:0.125rem;display:inline-flex;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));padding-left:1.25rem;padding-right:1.25rem;padding-top:0.5rem;padding-bottom:0.5rem;text-align:center;font-family:sofia-pro, sans-serif;font-size:0.875rem;line-height:1.25rem;font-weight:700;text-transform:uppercase;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none;--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);outline:2px solid transparent;outline-offset:2px
}button:hover{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))
}button:disabled{cursor:not-allowed;opacity:0.7
}.info{cursor:pointer;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity))
}input{margin-top:1rem;margin-bottom:1rem;margin-right:0.75rem;width:100%;border-style:solid;--tw-border-opacity:1;border-color:rgb(42 46 53 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(18 24 27 / var(--tw-bg-opacity));padding:0.75rem;font-family:sofia-pro, sans-serif;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px
}.warn{font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(234 179 8 / var(--tw-text-opacity))
}</style>`,J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},Hp,zp,K,{},null),e&&e.target&&p(e.target,this,e.anchor)}}customElements.define("change-email",Bp);function jp(n){let e,t,r;return{c(){e=b("span"),e.textContent="Delete this Account",w(e,"class","info")},m(i,o){p(i,e,o),t||(r=P(e,"click",n[7]),t=!0)},p:k,d(i){i&&g(e),t=!1,r()}}}function Vp(n){let e,t,r=(n[1]?"terminating...":n[3])+"",i,o,s,a,l,c=n[1]&&qi(),u=n[0]&&Wi(n);return{c(){e=b("button"),c&&c.c(),t=E(),i=x(r),o=E(),u&&u.c(),s=ee(),w(e,"class","btn btn-red"),e.disabled=n[1]},m(d,f){p(d,e,f),c&&c.m(e,null),h(e,t),h(e,i),p(d,o,f),u&&u.m(d,f),p(d,s,f),a||(l=P(e,"click",n[6]),a=!0)},p(d,f){d[1]?c||(c=qi(),c.c(),c.m(e,t)):c&&(c.d(1),c=null),f&10&&r!==(r=(d[1]?"terminating...":d[3])+"")&&U(i,r),f&2&&(e.disabled=d[1]),d[0]?u?u.p(d,f):(u=Wi(d),u.c(),u.m(s.parentNode,s)):u&&(u.d(1),u=null)},d(d){d&&g(e),c&&c.d(),d&&g(o),u&&u.d(d),d&&g(s),a=!1,l()}}}function qi(n){let e;return{c(){e=b("loading-spinner")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function Wi(n){let e,t,r,i,o;return{c(){e=b("p"),t=x(`Final warning! Once you click this button there's no going back. All account data is lost forever. 
            `),r=b("span"),r.textContent="nevermind",w(r,"class","info"),w(e,"class","warn")},m(s,a){p(s,e,a),h(e,t),h(e,r),i||(o=P(r,"click",n[5]),i=!0)},p:k,d(s){s&&g(e),i=!1,o()}}}function $p(n){let e;function t(o,s){return o[2]?Vp:jp}let r=t(n),i=r(n);return{c(){i.c(),e=ee(),this.c=k},m(o,s){i.m(o,s),p(o,e,s)},p(o,[s]){r===(r=t(o))&&i?i.p(o,s):(i.d(1),i=r(o),i&&(i.c(),i.m(e.parentNode,e)))},i:k,o:k,d(o){i.d(o),o&&g(e)}}}function qp(n,e,t){let r,i=!1,o=!1,s=!1;async function a(){t(1,i=!0),await ge({fn:"deleteAccount",payload:{}})&&(await Tr(),me.set({message:"Account terminated, good luck in your future endeavors",type:"success"})),t(1,i=!1)}function l(){t(2,o=!1),t(0,s=!1)}const c=()=>s?a():t(0,s=!0),u=()=>t(2,o=!0);return n.$$.update=()=>{n.$$.dirty&1&&t(3,r=s?"confirm destruction":"delete account")},[s,i,o,r,a,l,c,u]}class Wp extends G{constructor(e){super(),this.shadowRoot.innerHTML=`<style>.btn{margin-top:0.125rem;margin-bottom:0.125rem;display:inline-flex;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgb(239 68 68 / var(--tw-bg-opacity));padding-left:1.25rem;padding-right:1.25rem;padding-top:0.5rem;padding-bottom:0.5rem;text-align:center;font-family:sofia-pro, sans-serif;font-size:0.875rem;line-height:1.25rem;font-weight:700;text-transform:uppercase;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none;--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);outline:2px solid transparent;outline-offset:2px
}.btn:hover{--tw-bg-opacity:1;background-color:rgb(185 28 28 / var(--tw-bg-opacity))
}.btn:disabled{cursor:not-allowed;opacity:0.7
}.info{cursor:pointer;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity))
}.warn{font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(234 179 8 / var(--tw-text-opacity))
}</style>`,J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},qp,$p,K,{},null),e&&e.target&&p(e.target,this,e.anchor)}}customElements.define("delete-account",Wp);function Kp(n){let e,t,r;return{c(){e=b("modal-action"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="svg-sm" viewBox="0 0 448 512"><path fill="currentColor" d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"></path></svg>',t=E(),r=b("span"),r.textContent="locked",Ee(e,"name","signin"),Ee(e,"type","open"),Ee(e,"class","purple"),w(r,"class","msg purple")},m(i,o){p(i,e,o),p(i,t,o),p(i,r,o)},p:k,d(i){i&&g(e),i&&g(t),i&&g(r)}}}function Gp(n){let e;function t(o,s){var a;return(a=o[4])!=null&&a[o[0]]?Jp:Yp}let r=t(n),i=r(n);return{c(){i.c(),e=ee()},m(o,s){i.m(o,s),p(o,e,s)},p(o,s){r===(r=t(o))&&i?i.p(o,s):(i.d(1),i=r(o),i&&(i.c(),i.m(e.parentNode,e)))},d(o){i.d(o),o&&g(e)}}}function Yp(n){let e,t,r,i=n[1]?"pop quiz":"incomplete",o,s,a;return{c(){e=b("button"),e.innerHTML='<svg viewBox="0 0 512 512"><path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path></svg>',t=E(),r=b("span"),o=x(i),w(e,"class","incomplete"),w(r,"class","msg"),Z(r,"pink",n[1])},m(l,c){p(l,e,c),p(l,t,c),p(l,r,c),h(r,o),s||(a=P(e,"click",n[7]),s=!0)},p(l,c){c&2&&i!==(i=l[1]?"pop quiz":"incomplete")&&U(o,i),c&2&&Z(r,"pink",l[1])},d(l){l&&g(e),l&&g(t),l&&g(r),s=!1,a()}}}function Jp(n){let e,t,r,i,o;return{c(){e=b("button"),e.innerHTML='<svg viewBox="0 0 512 512"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"></path></svg>',t=E(),r=b("span"),r.textContent="done",w(e,"class","complete"),w(r,"class","msg complete")},m(s,a){p(s,e,a),p(s,t,a),p(s,r,a),i||(o=P(e,"click",n[6]),i=!0)},p:k,d(s){s&&g(e),s&&g(t),s&&g(r),i=!1,o()}}}function Xp(n){let e;function t(o,s){return o[2]||o[3]?Gp:Kp}let r=t(n),i=r(n);return{c(){e=b("span"),i.c(),this.c=k,w(e,"class","wrap")},m(o,s){p(o,e,s),i.m(e,null)},p(o,[s]){r===(r=t(o))&&i?i.p(o,s):(i.d(1),i=r(o),i&&(i.c(),i.m(e,null)))},i:k,o:k,d(o){o&&g(e),i.d()}}}function Zp(n,e,t){let r,i;ie(n,Gt,d=>t(3,r=d)),ie(n,St,d=>t(4,i=d));let{route:o=window.location.pathname}=e,{quiz:s=!1}=e,{free:a=!1}=e;async function l(d){if(d){if(s){Ce.set("quiz");return}await ka(o)}else await Zf(o)}const c=()=>l(!1),u=()=>l(!0);return n.$$set=d=>{"route"in d&&t(0,o=d.route),"quiz"in d&&t(1,s=d.quiz),"free"in d&&t(2,a=d.free)},[o,s,a,r,i,l,c,u]}class Qp extends G{constructor(e){super(),this.shadowRoot.innerHTML="<style>button{background:none;cursor:pointer;border-radius:9999px;border-style:none;outline:2px solid transparent;outline-offset:2px;transition-property:transform;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}button:hover{--tw-translate-y:-0.125rem;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}svg{width:2rem}modal-action{cursor:pointer}.svg-sm{width:1.25rem}.msg{position:relative;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgb(234 179 8 / var(--tw-text-opacity))}.pink{--tw-text-opacity:1;color:rgb(236 72 153 / var(--tw-text-opacity))}.purple{--tw-text-opacity:1;color:rgb(168 85 247 / var(--tw-text-opacity))}.incomplete{fill:#b2becd}.incomplete:hover{fill:#22c55e}.complete{fill:#22c55e;--tw-text-opacity:1;color:rgb(34 197 94 / var(--tw-text-opacity))}.wrap{display:flex;min-width:48px;flex-direction:column;align-items:center;justify-content:center}</style>",J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},Zp,Xp,K,{route:0,quiz:1,free:2},null),e&&(e.target&&p(e.target,this,e.anchor),e.props&&(this.$set(e.props),W()))}static get observedAttributes(){return["route","quiz","free"]}get route(){return this.$$.ctx[0]}set route(e){this.$$set({route:e}),W()}get quiz(){return this.$$.ctx[1]}set quiz(e){this.$$set({quiz:e}),W()}get free(){return this.$$.ctx[2]}set free(e){this.$$set({free:e}),W()}}customElements.define("mark-complete",Qp);function Ki(n){let e;return{c(){e=b("span"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="16" height="16" class="purple"><path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"></path></svg>',w(e,"class","wrap")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function Gi(n){let e;function t(o,s){var a;return(a=o[3])!=null&&a[o[0]]?th:eh}let r=t(n),i=r(n);return{c(){i.c(),e=ee()},m(o,s){i.m(o,s),p(o,e,s)},p(o,s){r!==(r=t(o))&&(i.d(1),i=r(o),i&&(i.c(),i.m(e.parentNode,e)))},d(o){i.d(o),o&&g(e)}}}function eh(n){let e;return{c(){e=b("span"),e.innerHTML='<svg viewBox="0 0 512 512" width="18" height="18" class="gray"><path d="M512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256zM256 48C141.1 48 48 141.1 48 256C48 370.9 141.1 464 256 464C370.9 464 464 370.9 464 256C464 141.1 370.9 48 256 48z"></path></svg>',w(e,"class","wrap")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function th(n){let e;return{c(){e=b("span"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="green" width="18" height="18"><path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"></path></svg>',w(e,"class","wrap")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function nh(n){let e,t,r=!n[1]&&!n[2]&&Ki(),i=(n[1]||n[2])&&Gi(n);return{c(){r&&r.c(),e=E(),i&&i.c(),t=ee(),this.c=k},m(o,s){r&&r.m(o,s),p(o,e,s),i&&i.m(o,s),p(o,t,s)},p(o,[s]){!o[1]&&!o[2]?r||(r=Ki(),r.c(),r.m(e.parentNode,e)):r&&(r.d(1),r=null),o[1]||o[2]?i?i.p(o,s):(i=Gi(o),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null)},i:k,o:k,d(o){r&&r.d(o),o&&g(e),i&&i.d(o),o&&g(t)}}}function rh(n,e,t){let r,i;ie(n,Gt,a=>t(2,r=a)),ie(n,St,a=>t(3,i=a));let{route:o}=e,{free:s}=e;return n.$$set=a=>{"route"in a&&t(0,o=a.route),"free"in a&&t(1,s=a.free)},[o,s,r,i]}class ih extends G{constructor(e){super(),this.shadowRoot.innerHTML=`<style>svg{margin-right:0.5rem;margin-top:0.25rem
}.wrap{margin-top:auto;margin-bottom:auto;margin-right:0px
}.gray{fill:#454e56
}.green{fill:#22c55e
}.purple{fill:#a855f7
}</style>`,J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},rh,nh,K,{route:0,free:1},null),e&&(e.target&&p(e.target,this,e.anchor),e.props&&(this.$set(e.props),W()))}static get observedAttributes(){return["route","free"]}get route(){return this.$$.ctx[0]}set route(e){this.$$set({route:e}),W()}get free(){return this.$$.ctx[1]}set free(e){this.$$set({free:e}),W()}}customElements.define("complete-icon",ih);function Yi(n,e,t){const r=n.slice();return r[16]=e[t],r[18]=t,r}function oh(n){let e,t,r,i,o,s,a;return{c(){e=b("p"),t=b("span"),r=x("+"),i=x(n[4]),o=x(" XP"),s=E(),a=x(n[6]),w(t,"class","gain"),w(e,"class","green")},m(l,c){p(l,e,c),h(e,t),h(t,r),h(t,i),h(t,o),h(e,s),h(e,a)},p(l,c){c&16&&U(i,l[4]),c&64&&U(a,l[6])},d(l){l&&g(e)}}}function sh(n){let e,t,r,i,o,s=n[2]&&n[2]!==n[0]&&Ji(n),a=n[7],l=[];for(let c=0;c<a.length;c+=1)l[c]=Xi(Yi(n,a,c));return{c(){e=b("p"),s&&s.c(),t=E(),r=b("div"),r.innerHTML="<slot></slot>",i=E(),o=b("div");for(let c=0;c<l.length;c+=1)l[c].c();w(e,"class","red")},m(c,u){p(c,e,u),s&&s.m(e,null),p(c,t,u),p(c,r,u),p(c,i,u),p(c,o,u);for(let d=0;d<l.length;d+=1)l[d].m(o,null)},p(c,u){if(c[2]&&c[2]!==c[0]?s?s.p(c,u):(s=Ji(c),s.c(),s.m(e,null)):s&&(s.d(1),s=null),u&645){a=c[7];let d;for(d=0;d<a.length;d+=1){const f=Yi(c,a,d);l[d]?l[d].p(f,u):(l[d]=Xi(f),l[d].c(),l[d].m(o,null))}for(;d<l.length;d+=1)l[d].d(1);l.length=a.length}},d(c){c&&g(e),s&&s.d(),c&&g(t),c&&g(r),c&&g(i),c&&g(o),tt(l,c)}}}function Ji(n){let e;return{c(){e=x(n[5])},m(t,r){p(t,e,r)},p(t,r){r&32&&U(e,t[5])},d(t){t&&g(e)}}}function Xi(n){let e,t=n[16]+"",r,i,o,s;function a(){return n[12](n[16])}return{c(){e=b("div"),r=x(t),i=E(),w(e,"class","option"),Z(e,"correct",n[16]===n[2]&&n[2]===n[0]),Z(e,"incorrect",n[16]===n[2]&&n[2]!==n[0])},m(l,c){p(l,e,c),h(e,r),h(e,i),o||(s=P(e,"click",a),o=!0)},p(l,c){n=l,c&133&&Z(e,"correct",n[16]===n[2]&&n[2]===n[0]),c&133&&Z(e,"incorrect",n[16]===n[2]&&n[2]!==n[0])},d(l){l&&g(e),o=!1,s()}}}function Zi(n){let e,t,r,i;return{c(){e=b("footer"),t=b("span"),t.textContent="reset quiz",w(t,"class","reset")},m(o,s){p(o,e,s),h(e,t),r||(i=P(t,"click",n[10]),r=!0)},p:k,d(o){o&&g(e),r=!1,i()}}}function ah(n){let e,t,r,i,o,s;function a(d,f){return d[3]?oh:sh}let l=a(n),c=l(n),u=n[3]&&Zi(n);return{c(){e=b("modal-dialog"),t=b("div"),c.c(),r=E(),i=b("img"),s=E(),u&&u.c(),this.c=k,It(i.src,o=`/courses/${n[8]}/img/prizes/${n[1]}.webp`)||w(i,"src",o),w(i,"alt","programming meme"),Z(i,"show",n[3]),w(t,"class","wrap"),Ee(e,"esc","true"),Ee(e,"name","quiz")},m(d,f){p(d,e,f),h(e,t),c.m(t,null),h(t,r),h(t,i),h(t,s),u&&u.m(t,null)},p(d,[f]){l===(l=a(d))&&c?c.p(d,f):(c.d(1),c=l(d),c&&(c.c(),c.m(t,r))),f&2&&!It(i.src,o=`/courses/${d[8]}/img/prizes/${d[1]}.webp`)&&w(i,"src",o),f&8&&Z(i,"show",d[3]),d[3]?u?u.p(d,f):(u=Zi(d),u.c(),u.m(t,null)):u&&(u.d(1),u=null)},i:k,o:k,d(d){d&&g(e),c.d(),u&&u.d()}}}function Qi(n){return n[Math.floor(Math.random()*n.length)]}function lh(n,e,t){let{answer:r}=e,{options:i}=e,{prize:o}=e;const s=i.split(":");let a,l=!1,c=1,u,d=Cr(),f,m;function _(v){l||(t(2,a=v),v===r?y():I())}function I(){t(5,f=Qi(["lol, try Again","Yeah, that ain't it","Nah bro","Not even close","Nooooo!","try harder","you serious?","c'mon man!","I'm disappointed","I blame myself","no prize for you"])),c++}async function y(){const v=(await st(()=>import("./confetti.c65a864a.js"),[])).default;t(6,m=Qi(["well done sir","that's legit","crushed it","hella good job","bussin no cap fr","take this fancy prize","the best I can do is this meme","enjoy your winnings","hang this prize on your wall","you earned this!"]));let te=c<=2?50/c:5;t(4,u=100+te),ka(window.location.pathname,te),v(),t(3,l=!0)}function S(){t(2,a=null),t(3,l=!1),t(4,u=0)}const L=v=>_(v);return n.$$set=v=>{"answer"in v&&t(0,r=v.answer),"options"in v&&t(11,i=v.options),"prize"in v&&t(1,o=v.prize)},[r,o,a,l,u,f,m,s,d,_,S,i,L]}class ch extends G{constructor(e){super(),this.shadowRoot.innerHTML=`<style>.option{margin-top:0.5rem;margin-bottom:0.5rem;cursor:pointer;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity:0.5;padding:0.75rem
}.option:hover{--tw-bg-opacity:1;background-color:rgb(249 115 22 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))
}.correct{--tw-bg-opacity:1;background-color:rgb(34 197 94 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))
}.incorrect{--tw-bg-opacity:1;background-color:rgb(239 68 68 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))
}.incorrect:hover{--tw-bg-opacity:1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))
}.red{font-family:cubano, sans-serif;--tw-text-opacity:1;color:rgb(239 68 68 / var(--tw-text-opacity))
}.green{font-family:cubano, sans-serif;font-size:1.25rem;line-height:1.75rem;--tw-text-opacity:1;color:rgb(34 197 94 / var(--tw-text-opacity))
}.gain{position:relative;bottom:3px
}@-webkit-keyframes pulse{50%{opacity:.5
    }}@keyframes pulse{50%{opacity:.5
    }}.gain{-webkit-animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;border-radius:0.375rem;--tw-bg-opacity:1;background-color:rgb(34 197 94 / var(--tw-bg-opacity));padding-left:0.5rem;padding-right:0.5rem;padding-top:0.25rem;padding-bottom:0.25rem;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))
}img{margin-top:1.25rem;margin-bottom:1.25rem;margin-left:auto;margin-right:auto;display:block;height:0px;max-height:70vh;width:0px;--tw-rotate:180deg;--tw-scale-x:0;--tw-scale-y:0;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms
}.reset{margin-right:0.75rem;cursor:pointer;border-radius:0.25rem;border-width:1px;border-style:solid;--tw-border-opacity:1;border-color:rgb(59 130 246 / var(--tw-border-opacity));padding-top:0.25rem;padding-bottom:0.25rem;padding-left:0.5rem;padding-right:0.5rem;font-size:0.875rem;line-height:1.25rem;line-height:1;--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none
}.show{height:auto;width:auto;max-width:100%;--tw-rotate:0deg;--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1
}</style>`,J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},lh,ah,K,{answer:0,options:11,prize:1},null),e&&(e.target&&p(e.target,this,e.anchor),e.props&&(this.$set(e.props),W()))}static get observedAttributes(){return["answer","options","prize"]}get answer(){return this.$$.ctx[0]}set answer(e){this.$$set({answer:e}),W()}get options(){return this.$$.ctx[11]}set options(e){this.$$set({options:e}),W()}get prize(){return this.$$.ctx[1]}set prize(e){this.$$set({prize:e}),W()}}customElements.define("quiz-modal",ch);function uh(n){let e,t,r;return{c(){e=b("span"),e.innerHTML="<slot></slot>",this.c=k},m(i,o){p(i,e,o),t||(r=P(e,"click",n[0]),t=!0)},p:k,i:k,o:k,d(i){i&&g(e),t=!1,r()}}}function dh(n,e,t){let{type:r="open"}=e,{name:i="default"}=e;function o(){r==="open"&&Ce.set(i),r==="close"&&Ce.set(null)}return n.$$set=s=>{"type"in s&&t(1,r=s.type),"name"in s&&t(2,i=s.name)},[o,r,i]}class fh extends G{constructor(e){super(),J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},dh,uh,K,{type:1,name:2},null),e&&(e.target&&p(e.target,this,e.anchor),e.props&&(this.$set(e.props),W()))}static get observedAttributes(){return["type","name"]}get type(){return this.$$.ctx[1]}set type(e){this.$$set({type:e}),W()}get name(){return this.$$.ctx[2]}set name(e){this.$$set({name:e}),W()}}customElements.define("modal-action",fh);function eo(n){let e,t,r;return{c(){e=b("kbd"),e.textContent="esc",w(e,"class","esc")},m(i,o){p(i,e,o),t||(r=P(e,"click",n[3]),t=!0)},p:k,d(i){i&&g(e),t=!1,r()}}}function ph(n){let e,t,r,i,o,s,a=n[1]&&eo(n);return{c(){e=b("div"),t=b("div"),a&&a.c(),r=E(),i=b("slot"),this.c=k,w(t,"class","inner"),Z(t,"inner-show",n[2]===n[0]),w(e,"class","backdrop"),Z(e,"show",n[2]===n[0])},m(l,c){p(l,e,c),h(e,t),a&&a.m(t,null),h(t,r),h(t,i),o||(s=[P(t,"click",Va(n[4])),P(e,"click",n[3])],o=!0)},p(l,[c]){l[1]?a?a.p(l,c):(a=eo(l),a.c(),a.m(t,r)):a&&(a.d(1),a=null),c&5&&Z(t,"inner-show",l[2]===l[0]),c&5&&Z(e,"show",l[2]===l[0])},i:k,o:k,d(l){l&&g(e),a&&a.d(),o=!1,fe(s)}}}function hh(n,e,t){let r;ie(n,Ce,l=>t(2,r=l));let{name:i="default"}=e,{esc:o=!1}=e;function s(){Ce.set(null)}function a(l){Wa.call(this,n,l)}return n.$$set=l=>{"name"in l&&t(0,i=l.name),"esc"in l&&t(1,o=l.esc)},[i,o,r,s,a]}class mh extends G{constructor(e){super(),this.shadowRoot.innerHTML="<style>.backdrop{visibility:hidden;position:fixed;top:0px;right:0px;bottom:0px;left:0px;z-index:99;display:flex;flex-direction:column;align-items:center;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity:0.9;padding-top:5rem;opacity:0}.show{visibility:visible;opacity:1}.inner{margin-left:1.25rem;margin-right:1.25rem;height:auto;width:75%;max-width:100%;--tw-scale-x:.75;--tw-scale-y:.75;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));overflow-y:auto;border-radius:0.375rem;--tw-bg-opacity:1;background-color:rgb(42 46 53 / var(--tw-bg-opacity));padding-left:2rem;padding-right:2rem;padding-top:3rem;padding-bottom:3rem;opacity:0;--tw-shadow:0 5px 20px rgb(0 0 0 / 90%);--tw-shadow-colored:0 5px 20px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}@media(min-width: 768px){.inner{width:auto}}.inner-show{--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:200ms}.esc{position:absolute;top:1.5rem;right:1.5rem;cursor:pointer;border-radius:0.375rem;border-width:1px;border-style:solid;--tw-border-opacity:1;border-color:rgb(249 115 22 / var(--tw-border-opacity));--tw-bg-opacity:0.5;padding:0.375rem;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgb(178 190 205 / var(--tw-text-opacity));--tw-drop-shadow:drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.esc:hover{--tw-bg-opacity:1;background-color:rgb(249 115 22 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}</style>",J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},hh,ph,K,{name:0,esc:1},null),e&&(e.target&&p(e.target,this,e.anchor),e.props&&(this.$set(e.props),W()))}static get observedAttributes(){return["name","esc"]}get name(){return this.$$.ctx[0]}set name(e){this.$$set({name:e}),W()}get esc(){return this.$$.ctx[1]}set esc(e){this.$$set({esc:e}),W()}}customElements.define("modal-dialog",mh);function gh(n){let e;return{c(){e=b("div"),this.c=k,w(e,"class","gradient-loader"),Z(e,"show",n[0])},m(t,r){p(t,e,r)},p(t,[r]){r&1&&Z(e,"show",t[0])},i:k,o:k,d(t){t&&g(e)}}}function bh(n,e,t){let r;return ie(n,xr,i=>t(0,r=i)),[r]}class wh extends G{constructor(e){super(),this.shadowRoot.innerHTML="<style>div{position:fixed;top:0px;left:0px;height:0.375rem;width:100%;--tw-translate-x:-100%;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:0;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.show{--tw-translate-x:0px;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}.gradient-loader{background-image:linear-gradient(to right, var(--tw-gradient-stops));--tw-gradient-from:#f97316;--tw-gradient-to:rgb(249 115 22 / 0);--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to);--tw-gradient-to:rgb(168 85 247 / 0);--tw-gradient-stops:var(--tw-gradient-from), #a855f7, var(--tw-gradient-to);--tw-gradient-to:#ec4899;background-size:200% 200%;-webkit-animation:gradiant-move 1s infinite;animation:gradiant-move 1s infinite}@-webkit-keyframes gradiant-move{0%{background-position:left}50%{background-position:right}100%{background-position:left}}@keyframes gradiant-move{0%{background-position:left}50%{background-position:right}100%{background-position:left}}</style>",J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},bh,gh,K,{},null),e&&e.target&&p(e.target,this,e.anchor)}}customElements.define("route-loader",wh);function to(n){var f,m;let e,t,r=n[0].message+"",i,o,s,a=((m=n[0].icon)!=null?m:n[3][(f=n[0].type)!=null?f:"info"])+"",l,c,u,d;return{c(){e=b("div"),t=b("div"),i=x(r),o=E(),s=b("div"),l=x(a),w(t,"class","message"),w(s,"class","icon"),w(e,"class",c=`toast ${n[2]}`),Z(e,"active",n[1])},m(_,I){p(_,e,I),h(e,t),h(t,i),h(e,o),h(e,s),h(s,l),u||(d=P(e,"click",n[4]),u=!0)},p(_,I){var y,S;I&1&&r!==(r=_[0].message+"")&&U(i,r),I&1&&a!==(a=((S=_[0].icon)!=null?S:_[3][(y=_[0].type)!=null?y:"info"])+"")&&U(l,a),I&4&&c!==(c=`toast ${_[2]}`)&&w(e,"class",c),I&6&&Z(e,"active",_[1])},d(_){_&&g(e),u=!1,d()}}}function _h(n){let e,t=n[0]&&to(n);return{c(){t&&t.c(),e=ee(),this.c=k},m(r,i){t&&t.m(r,i),p(r,e,i)},p(r,[i]){r[0]?t?t.p(r,i):(t=to(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:k,o:k,d(r){t&&t.d(r),r&&g(e)}}}function yh(n,e,t){let r,i=!1,o,s,a={success:"\u2714\uFE0F",error:"\u2620\uFE0F",info:"\u{1F4A1}"};pt(()=>{me.subscribe(c=>{t(0,o=c),clearTimeout(s),c&&(s=setTimeout(()=>{me.set(null)},(c==null?void 0:c.delay)||1e4),t(1,i=!1),setTimeout(()=>{t(1,i=!0)},200))})});const l=()=>me.set(null);return n.$$.update=()=>{n.$$.dirty&1&&t(2,r=(o==null?void 0:o.type)||"info")},[o,i,r,a,l]}class vh extends G{constructor(e){super(),this.shadowRoot.innerHTML="<style>.toast{border:none;visibility:hidden;position:fixed;bottom:1.5rem;right:1.5rem;z-index:999;margin:1.5rem;display:flex;--tw-translate-x:20rem;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));cursor:pointer;opacity:0;transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.toast.active{visibility:visible;--tw-translate-x:0px;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1}.toast .icon{display:grid;width:2.5rem;place-items:center;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity:0.8;padding-left:0.5rem;padding-right:0.5rem;padding-top:0.25rem;padding-bottom:0.25rem;font-family:cubano, sans-serif;font-size:1.125rem;line-height:1.75rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));--tw-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.toast .message{background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity:0.5;padding:1rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));--tw-shadow:0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.toast .message:hover{-webkit-text-decoration-line:line-through;text-decoration-line:line-through}.toast.success .message{--tw-text-opacity:1;color:rgb(34 197 94 / var(--tw-text-opacity))}.toast.error .message{--tw-text-opacity:1;color:rgb(239 68 68 / var(--tw-text-opacity))}</style>",J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},yh,_h,K,{},null),e&&e.target&&p(e.target,this,e.anchor)}}customElements.define("toast-message",vh);function kh(n){let e,t,r,i,o,s;return{c(){e=b("div"),t=b("span"),t.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path></svg>',r=E(),i=b("span"),i.innerHTML='<slot name="collapse"></slot>',w(t,"class","btn"),w(e,"class","wrap")},m(a,l){p(a,e,l),h(e,t),p(a,r,l),p(a,i,l),o||(s=[P(t,"click",n[2]),P(i,"click",n[3])],o=!0)},p:k,d(a){a&&g(e),a&&g(r),a&&g(i),o=!1,fe(s)}}}function Ih(n){let e,t,r,i,o,s;return{c(){e=b("div"),t=b("span"),t.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"></path></svg> 
        <span class="text">ctrl+b</span>`,r=E(),i=b("slot"),w(t,"class","btn"),w(e,"class","wrap")},m(a,l){p(a,e,l),h(e,t),p(a,r,l),p(a,i,l),o||(s=P(t,"click",n[1]),o=!0)},p:k,d(a){a&&g(e),a&&g(r),a&&g(i),o=!1,s()}}}function Eh(n){let e;function t(o,s){return o[0]?Ih:kh}let r=t(n),i=r(n);return{c(){i.c(),e=ee(),this.c=k},m(o,s){i.m(o,s),p(o,e,s)},p(o,[s]){r===(r=t(o))&&i?i.p(o,s):(i.d(1),i=r(o),i&&(i.c(),i.m(e.parentNode,e)))},i:k,o:k,d(o){i.d(o),o&&g(e)}}}function Th(n,e,t){let r;return ie(n,Dt,a=>t(0,r=a)),[r,()=>Dt.set(!1),()=>Dt.set(!0),()=>Dt.set(!0)]}class Sh extends G{constructor(e){super(),this.shadowRoot.innerHTML=`<style>.wrap{margin-right:1rem;display:flex;justify-content:space-between;padding:0.5rem
}.btn{display:none;cursor:pointer;border-radius:0.375rem;border-width:1px;border-style:solid;--tw-border-opacity:1;border-color:rgb(108 121 131 / var(--tw-border-opacity));padding:0.25rem;padding-left:0.5rem;padding-right:0.5rem;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))
}@media(min-width: 768px){.btn{display:inline
    }}.btn svg{position:relative;top:1px;margin-left:0.25rem;margin-right:0.25rem;width:0.5rem
}</style>`,J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},Th,Eh,K,{},null),e&&e.target&&p(e.target,this,e.anchor)}}customElements.define("navbar-toggle",Sh);function no(n){let e,t,r;return{c(){e=b("img"),It(e.src,t=n[0])||w(e,"src",t),w(e,"alt","special effect"),w(e,"style",r=`transform: translateX(${n[2]||0}px);`)},m(i,o){p(i,e,o)},p(i,o){o&1&&!It(e.src,t=i[0])&&w(e,"src",t),o&4&&r!==(r=`transform: translateX(${i[2]||0}px);`)&&w(e,"style",r)},d(i){i&&g(e)}}}function Ch(n){let e,t,r,i,o,s=n[1]&&no(n);return{c(){e=b("span"),t=b("slot"),r=E(),s&&s.c(),this.c=k,w(e,"class","text")},m(a,l){p(a,e,l),h(e,t),h(e,r),s&&s.m(e,null),i||(o=[P(e,"mouseenter",n[5]),P(e,"mouseleave",n[3]),P(e,"mousemove",n[4])],i=!0)},p(a,[l]){a[1]?s?s.p(a,l):(s=no(a),s.c(),s.m(e,null)):s&&(s.d(1),s=null)},i:k,o:k,d(a){a&&g(e),s&&s.d(),i=!1,fe(o)}}}function Ah(n,e,t){let{src:r}=e,i=!1,o=0;function s(){t(1,i=!1),t(2,o=0)}function a(c){t(2,o+=c.movementX)}const l=()=>t(1,i=!0);return n.$$set=c=>{"src"in c&&t(0,r=c.src)},[r,i,o,s,a,l]}class xh extends G{constructor(e){super(),this.shadowRoot.innerHTML=`<style>.text{position:relative
}img{position:absolute;bottom:50%;right:0px;width:13rem
}</style>`,J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},Ah,Ch,K,{src:0},null),e&&(e.target&&p(e.target,this,e.anchor),e.props&&(this.$set(e.props),W()))}static get observedAttributes(){return["src"]}get src(){return this.$$.ctx[0]}set src(e){this.$$set({src:e}),W()}}customElements.define("img-reveal",xh);function Rh(n){let e,t,r;return{c(){e=b("div"),t=b("slot"),this.c=k,w(e,"class",n[1]),w(e,"style",r=`transition-delay: ${n[0]}ms`),Z(e,"visible",n[3])},m(i,o){p(i,e,o),h(e,t),n[5](e)},p(i,[o]){o&2&&w(e,"class",i[1]),o&1&&r!==(r=`transition-delay: ${i[0]}ms`)&&w(e,"style",r),o&10&&Z(e,"visible",i[3])},i:k,o:k,d(i){i&&g(e),n[5](null)}}}function Oh(n,e,t){let{delay:r=200}=e,{start:i="right"}=e,{repeat:o=!0}=e,s,a,l=!1;pt(()=>(s=new IntersectionObserver(u=>{u.forEach(d=>{d.isIntersecting?t(3,l=!0):o&&t(3,l=!1)})}),s.observe(a),()=>{s==null||s.disconnect()}));function c(u){at[u?"unshift":"push"](()=>{a=u,t(2,a)})}return n.$$set=u=>{"delay"in u&&t(0,r=u.delay),"start"in u&&t(1,i=u.start),"repeat"in u&&t(4,o=u.repeat)},[r,i,a,l,o,c]}class Ph extends G{constructor(e){super(),this.shadowRoot.innerHTML="<style>@media(prefers-reduced-motion: no-preference){.top{transform:translateY(-20px);filter:hue-rotate(90deg);opacity:0;position:relative;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:500ms}.right{transform:translateX(-20px);filter:hue-rotate(90deg);opacity:0;position:relative;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:500ms}.visible{transform:translateX(0);filter:hue-rotate(0);opacity:1}}</style>",J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},Oh,Rh,K,{delay:0,start:1,repeat:4},null),e&&(e.target&&p(e.target,this,e.anchor),e.props&&(this.$set(e.props),W()))}static get observedAttributes(){return["delay","start","repeat"]}get delay(){return this.$$.ctx[0]}set delay(e){this.$$set({delay:e}),W()}get start(){return this.$$.ctx[1]}set start(e){this.$$set({start:e}),W()}get repeat(){return this.$$.ctx[4]}set repeat(e){this.$$set({repeat:e}),W()}}customElements.define("scroll-show",Ph);function ro(n){let e,t,r,i=n[0].presence_count+"",o,s;return{c(){e=b("span"),e.innerHTML=`<span class="outer"></span> 
            <span class="inner"></span>`,t=E(),r=b("span"),o=x(i),s=x(" members online"),w(e,"class","ping"),w(r,"class","num")},m(a,l){p(a,e,l),p(a,t,l),p(a,r,l),h(r,o),p(a,s,l)},p(a,l){l&1&&i!==(i=a[0].presence_count+"")&&U(o,i)},d(a){a&&g(e),a&&g(t),a&&g(r),a&&g(s)}}}function Lh(n){let e,t=n[0]&&ro(n);return{c(){t&&t.c(),e=ee(),this.c=k},m(r,i){t&&t.m(r,i),p(r,e,i)},p(r,[i]){r[0]?t?t.p(r,i):(t=ro(r),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:k,o:k,d(r){t&&t.d(r),r&&g(e)}}}function Nh(n,e,t){let r;return pt(async()=>{let i=await fetch("https://discord.com/api/guilds/1015095797689360444/widget.json");t(0,r=await i.json())}),[r]}class Mh extends G{constructor(e){super(),this.shadowRoot.innerHTML=`<style>.ping{position:relative;display:inline-flex;height:0.75rem;width:0.75rem
}.outer{position:absolute;display:inline-flex;height:100%;width:100%
}@-webkit-keyframes ping{75%,100%{transform:scale(2);opacity:0
    }}@keyframes ping{75%,100%{transform:scale(2);opacity:0
    }}.outer{-webkit-animation:ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;animation:ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(74 222 128 / var(--tw-bg-opacity));opacity:0.75
}.inner{position:relative;display:inline-flex;height:0.75rem;width:0.75rem;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))
}.num{font-family:cubano, sans-serif;font-size:1.125rem;line-height:1.75rem;--tw-text-opacity:1;color:rgb(34 197 94 / var(--tw-text-opacity))
}</style>`,J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},Nh,Lh,K,{},null),e&&e.target&&p(e.target,this,e.anchor)}}customElements.define("discord-count",Mh);const{window:Dh}=cs;function Uh(n){let e,t,r;return{c(){e=b("button"),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"></path></svg>',this.c=k,Z(e,"show",n[0])},m(i,o){p(i,e,o),t||(r=[P(Dh,"scroll",n[1]),P(e,"click",Fh)],t=!0)},p(i,[o]){o&1&&Z(e,"show",i[0])},i:k,o:k,d(i){i&&g(e),t=!1,fe(r)}}}function Fh(){window.scrollTo({top:0,behavior:"smooth"})}function zh(n,e,t){let r=!1;function i(){t(0,r=window.scrollY>250)}return pt(()=>()=>{window.removeEventListener("scroll",i)}),[r,i]}class Hh extends G{constructor(e){super(),this.shadowRoot.innerHTML=`<style>button{position:fixed;bottom:1.25rem;right:1.25rem;display:grid;height:2.5rem;width:2.5rem;--tw-translate-y:2rem;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));cursor:pointer;place-items:center;border-radius:9999px;border-style:none;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity:0.5;padding:0px;--tw-text-opacity:1;color:rgb(108 121 131 / var(--tw-text-opacity));opacity:0;outline:2px solid transparent;outline-offset:2px;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms
}button:hover{--tw-text-opacity:1;color:rgb(249 115 22 / var(--tw-text-opacity))
}button svg{height:1.25rem;width:1.25rem
}.show{--tw-translate-y:0px;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));opacity:1
}</style>`,J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},zh,Uh,K,{},null),e&&e.target&&p(e.target,this,e.anchor)}}customElements.define("scroll-up",Hh);function Bh(n){let e;return{c(){e=b("modal-dialog"),e.innerHTML=`<h1>Hi Mom!</h1> 
    <img src="/img/himom.gif" alt="hi mom"/>`,this.c=k,Ee(e,"name","himom"),Ee(e,"esc","true")},m(t,r){p(t,e,r)},p:k,i:k,o:k,d(t){t&&g(e)}}}class jh extends G{constructor(e){super(),this.shadowRoot.innerHTML=`<style>h1{text-align:center;font-family:cubano, sans-serif;font-size:4.5rem;line-height:1;font-weight:400;--tw-text-opacity:1;color:rgb(236 72 153 / var(--tw-text-opacity))
}img{margin-left:auto;margin-right:auto;width:16rem
}</style>`,J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},null,Bh,K,{},null),e&&e.target&&p(e.target,this,e.anchor)}}customElements.define("hi-mom",jh);var Vh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function eg(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Ta={exports:{}};/*! algoliasearch-lite.umd.js | 4.14.2 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */(function(n,e){(function(t,r){n.exports=r()})(Vh,function(){function t(T,C,A){return C in T?Object.defineProperty(T,C,{value:A,enumerable:!0,configurable:!0,writable:!0}):T[C]=A,T}function r(T,C){var A=Object.keys(T);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(T);C&&(O=O.filter(function(N){return Object.getOwnPropertyDescriptor(T,N).enumerable})),A.push.apply(A,O)}return A}function i(T){for(var C=1;C<arguments.length;C++){var A=arguments[C]!=null?arguments[C]:{};C%2?r(Object(A),!0).forEach(function(O){t(T,O,A[O])}):Object.getOwnPropertyDescriptors?Object.defineProperties(T,Object.getOwnPropertyDescriptors(A)):r(Object(A)).forEach(function(O){Object.defineProperty(T,O,Object.getOwnPropertyDescriptor(A,O))})}return T}function o(T,C){if(T==null)return{};var A,O,N=function(V,$){if(V==null)return{};var ae,ce,_e={},Se=Object.keys(V);for(ce=0;ce<Se.length;ce++)ae=Se[ce],$.indexOf(ae)>=0||(_e[ae]=V[ae]);return _e}(T,C);if(Object.getOwnPropertySymbols){var H=Object.getOwnPropertySymbols(T);for(O=0;O<H.length;O++)A=H[O],C.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(T,A)&&(N[A]=T[A])}return N}function s(T,C){return function(A){if(Array.isArray(A))return A}(T)||function(A,O){if(Symbol.iterator in Object(A)||Object.prototype.toString.call(A)==="[object Arguments]"){var N=[],H=!0,V=!1,$=void 0;try{for(var ae,ce=A[Symbol.iterator]();!(H=(ae=ce.next()).done)&&(N.push(ae.value),!O||N.length!==O);H=!0);}catch(_e){V=!0,$=_e}finally{try{H||ce.return==null||ce.return()}finally{if(V)throw $}}return N}}(T,C)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function a(T){return function(C){if(Array.isArray(C)){for(var A=0,O=new Array(C.length);A<C.length;A++)O[A]=C[A];return O}}(T)||function(C){if(Symbol.iterator in Object(C)||Object.prototype.toString.call(C)==="[object Arguments]")return Array.from(C)}(T)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function l(T){var C,A="algoliasearch-client-js-".concat(T.key),O=function(){return C===void 0&&(C=T.localStorage||window.localStorage),C},N=function(){return JSON.parse(O().getItem(A)||"{}")};return{get:function(H,V){var $=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}};return Promise.resolve().then(function(){var ae=JSON.stringify(H),ce=N()[ae];return Promise.all([ce||V(),ce!==void 0])}).then(function(ae){var ce=s(ae,2),_e=ce[0],Se=ce[1];return Promise.all([_e,Se||$.miss(_e)])}).then(function(ae){return s(ae,1)[0]})},set:function(H,V){return Promise.resolve().then(function(){var $=N();return $[JSON.stringify(H)]=V,O().setItem(A,JSON.stringify($)),V})},delete:function(H){return Promise.resolve().then(function(){var V=N();delete V[JSON.stringify(H)],O().setItem(A,JSON.stringify(V))})},clear:function(){return Promise.resolve().then(function(){O().removeItem(A)})}}}function c(T){var C=a(T.caches),A=C.shift();return A===void 0?{get:function(O,N){var H=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}},V=N();return V.then(function($){return Promise.all([$,H.miss($)])}).then(function($){return s($,1)[0]})},set:function(O,N){return Promise.resolve(N)},delete:function(O){return Promise.resolve()},clear:function(){return Promise.resolve()}}:{get:function(O,N){var H=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}};return A.get(O,N,H).catch(function(){return c({caches:C}).get(O,N,H)})},set:function(O,N){return A.set(O,N).catch(function(){return c({caches:C}).set(O,N)})},delete:function(O){return A.delete(O).catch(function(){return c({caches:C}).delete(O)})},clear:function(){return A.clear().catch(function(){return c({caches:C}).clear()})}}}function u(){var T=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{serializable:!0},C={};return{get:function(A,O){var N=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{miss:function(){return Promise.resolve()}},H=JSON.stringify(A);if(H in C)return Promise.resolve(T.serializable?JSON.parse(C[H]):C[H]);var V=O(),$=N&&N.miss||function(){return Promise.resolve()};return V.then(function(ae){return $(ae)}).then(function(){return V})},set:function(A,O){return C[JSON.stringify(A)]=T.serializable?JSON.stringify(O):O,Promise.resolve(O)},delete:function(A){return delete C[JSON.stringify(A)],Promise.resolve()},clear:function(){return C={},Promise.resolve()}}}function d(T){for(var C=T.length-1;C>0;C--){var A=Math.floor(Math.random()*(C+1)),O=T[C];T[C]=T[A],T[A]=O}return T}function f(T,C){return C&&Object.keys(C).forEach(function(A){T[A]=C[A](T)}),T}function m(T){for(var C=arguments.length,A=new Array(C>1?C-1:0),O=1;O<C;O++)A[O-1]=arguments[O];var N=0;return T.replace(/%s/g,function(){return encodeURIComponent(A[N++])})}var _={WithinQueryParameters:0,WithinHeaders:1};function I(T,C){var A=T||{},O=A.data||{};return Object.keys(A).forEach(function(N){["timeout","headers","queryParameters","data","cacheable"].indexOf(N)===-1&&(O[N]=A[N])}),{data:Object.entries(O).length>0?O:void 0,timeout:A.timeout||C,headers:A.headers||{},queryParameters:A.queryParameters||{},cacheable:A.cacheable}}var y={Read:1,Write:2,Any:3},S=1,L=2,v=3;function R(T){var C=arguments.length>1&&arguments[1]!==void 0?arguments[1]:S;return i(i({},T),{},{status:C,lastUpdate:Date.now()})}function te(T){return typeof T=="string"?{protocol:"https",url:T,accept:y.Any}:{protocol:T.protocol||"https",url:T.url,accept:T.accept||y.Any}}var ne="GET",D="POST";function B(T,C){return Promise.all(C.map(function(A){return T.get(A,function(){return Promise.resolve(R(A))})})).then(function(A){var O=A.filter(function(V){return function($){return $.status===S||Date.now()-$.lastUpdate>12e4}(V)}),N=A.filter(function(V){return function($){return $.status===v&&Date.now()-$.lastUpdate<=12e4}(V)}),H=[].concat(a(O),a(N));return{getTimeout:function(V,$){return(N.length===0&&V===0?1:N.length+3+V)*$},statelessHosts:H.length>0?H.map(function(V){return te(V)}):C}})}function j(T,C,A,O){var N=[],H=function(ye,Pe){if(!(ye.method===ne||ye.data===void 0&&Pe.data===void 0)){var le=Array.isArray(ye.data)?ye.data:i(i({},ye.data),Pe.data);return JSON.stringify(le)}}(A,O),V=function(ye,Pe){var le=i(i({},ye.headers),Pe.headers),ve={};return Object.keys(le).forEach(function(Be){var Oe=le[Be];ve[Be.toLowerCase()]=Oe}),ve}(T,O),$=A.method,ae=A.method!==ne?{}:i(i({},A.data),O.data),ce=i(i(i({"x-algolia-agent":T.userAgent.value},T.queryParameters),ae),O.queryParameters),_e=0,Se=function ye(Pe,le){var ve=Pe.pop();if(ve===void 0)throw{name:"RetryError",message:"Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",transporterStackTrace:X(N)};var Be={data:H,headers:V,method:$,url:z(ve,A.path,ce),connectTimeout:le(_e,T.timeouts.connect),responseTimeout:le(_e,O.timeout)},Oe=function(he){var oe={request:Be,response:he,host:ve,triesLeft:Pe.length};return N.push(oe),oe},tn={onSuccess:function(he){return function(oe){try{return JSON.parse(oe.content)}catch(Le){throw function(Ye,wt){return{name:"DeserializationError",message:Ye,response:wt}}(Le.message,oe)}}(he)},onRetry:function(he){var oe=Oe(he);return he.isTimedOut&&_e++,Promise.all([T.logger.info("Retryable failure",re(oe)),T.hostsCache.set(ve,R(ve,he.isTimedOut?v:L))]).then(function(){return ye(Pe,le)})},onFail:function(he){throw Oe(he),function(oe,Le){var Ye=oe.content,wt=oe.status,Pt=Ye;try{Pt=JSON.parse(Ye).message}catch{}return function(nn,Pn,Sa){return{name:"ApiError",message:nn,status:Pn,transporterStackTrace:Sa}}(Pt,wt,Le)}(he,X(N))}};return T.requester.send(Be).then(function(he){return function(oe,Le){return function(Ye){var wt=Ye.status;return Ye.isTimedOut||function(Pt){var nn=Pt.isTimedOut,Pn=Pt.status;return!nn&&~~Pn==0}(Ye)||~~(wt/100)!=2&&~~(wt/100)!=4}(oe)?Le.onRetry(oe):~~(oe.status/100)==2?Le.onSuccess(oe):Le.onFail(oe)}(he,tn)})};return B(T.hostsCache,C).then(function(ye){return Se(a(ye.statelessHosts).reverse(),ye.getTimeout)})}function q(T){var C={value:"Algolia for JavaScript (".concat(T,")"),add:function(A){var O="; ".concat(A.segment).concat(A.version!==void 0?" (".concat(A.version,")"):"");return C.value.indexOf(O)===-1&&(C.value="".concat(C.value).concat(O)),C}};return C}function z(T,C,A){var O=M(A),N="".concat(T.protocol,"://").concat(T.url,"/").concat(C.charAt(0)==="/"?C.substr(1):C);return O.length&&(N+="?".concat(O)),N}function M(T){return Object.keys(T).map(function(C){return m("%s=%s",C,(A=T[C],Object.prototype.toString.call(A)==="[object Object]"||Object.prototype.toString.call(A)==="[object Array]"?JSON.stringify(T[C]):T[C]));var A}).join("&")}function X(T){return T.map(function(C){return re(C)})}function re(T){var C=T.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return i(i({},T),{},{request:i(i({},T.request),{},{headers:i(i({},T.request.headers),C)})})}var ue=function(T){var C=T.appId,A=function(N,H,V){var $={"x-algolia-api-key":V,"x-algolia-application-id":H};return{headers:function(){return N===_.WithinHeaders?$:{}},queryParameters:function(){return N===_.WithinQueryParameters?$:{}}}}(T.authMode!==void 0?T.authMode:_.WithinHeaders,C,T.apiKey),O=function(N){var H=N.hostsCache,V=N.logger,$=N.requester,ae=N.requestsCache,ce=N.responsesCache,_e=N.timeouts,Se=N.userAgent,ye=N.hosts,Pe=N.queryParameters,le={hostsCache:H,logger:V,requester:$,requestsCache:ae,responsesCache:ce,timeouts:_e,userAgent:Se,headers:N.headers,queryParameters:Pe,hosts:ye.map(function(ve){return te(ve)}),read:function(ve,Be){var Oe=I(Be,le.timeouts.read),tn=function(){return j(le,le.hosts.filter(function(oe){return(oe.accept&y.Read)!=0}),ve,Oe)};if((Oe.cacheable!==void 0?Oe.cacheable:ve.cacheable)!==!0)return tn();var he={request:ve,mappedRequestOptions:Oe,transporter:{queryParameters:le.queryParameters,headers:le.headers}};return le.responsesCache.get(he,function(){return le.requestsCache.get(he,function(){return le.requestsCache.set(he,tn()).then(function(oe){return Promise.all([le.requestsCache.delete(he),oe])},function(oe){return Promise.all([le.requestsCache.delete(he),Promise.reject(oe)])}).then(function(oe){var Le=s(oe,2);return Le[0],Le[1]})})},{miss:function(oe){return le.responsesCache.set(he,oe)}})},write:function(ve,Be){return j(le,le.hosts.filter(function(Oe){return(Oe.accept&y.Write)!=0}),ve,I(Be,le.timeouts.write))}};return le}(i(i({hosts:[{url:"".concat(C,"-dsn.algolia.net"),accept:y.Read},{url:"".concat(C,".algolia.net"),accept:y.Write}].concat(d([{url:"".concat(C,"-1.algolianet.com")},{url:"".concat(C,"-2.algolianet.com")},{url:"".concat(C,"-3.algolianet.com")}]))},T),{},{headers:i(i(i({},A.headers()),{"content-type":"application/x-www-form-urlencoded"}),T.headers),queryParameters:i(i({},A.queryParameters()),T.queryParameters)}));return f({transporter:O,appId:C,addAlgoliaAgent:function(N,H){O.userAgent.add({segment:N,version:H})},clearCache:function(){return Promise.all([O.requestsCache.clear(),O.responsesCache.clear()]).then(function(){})}},T.methods)},we=function(T){return function(C,A){return C.method===ne?T.transporter.read(C,A):T.transporter.write(C,A)}},He=function(T){return function(C){var A=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},O={transporter:T.transporter,appId:T.appId,indexName:C};return f(O,A.methods)}},ke=function(T){return function(C,A){var O=C.map(function(N){return i(i({},N),{},{params:M(N.params||{})})});return T.transporter.read({method:D,path:"1/indexes/*/queries",data:{requests:O},cacheable:!0},A)}},mt=function(T){return function(C,A){return Promise.all(C.map(function(O){var N=O.params,H=N.facetName,V=N.facetQuery,$=o(N,["facetName","facetQuery"]);return He(T)(O.indexName,{methods:{searchForFacetValues:bt}}).searchForFacetValues(H,V,i(i({},A),$))}))}},gt=function(T){return function(C,A,O){return T.transporter.read({method:D,path:m("1/answers/%s/prediction",T.indexName),data:{query:C,queryLanguages:A},cacheable:!0},O)}},Ot=function(T){return function(C,A){return T.transporter.read({method:D,path:m("1/indexes/%s/query",T.indexName),data:{query:C},cacheable:!0},A)}},bt=function(T){return function(C,A,O){return T.transporter.read({method:D,path:m("1/indexes/%s/facets/%s/query",T.indexName,C),data:{facetQuery:A},cacheable:!0},O)}},en=1,Ie=2,Q=3;function pe(T,C,A){var O,N={appId:T,apiKey:C,timeouts:{connect:1,read:2,write:30},requester:{send:function(H){return new Promise(function(V){var $=new XMLHttpRequest;$.open(H.method,H.url,!0),Object.keys(H.headers).forEach(function(Se){return $.setRequestHeader(Se,H.headers[Se])});var ae,ce=function(Se,ye){return setTimeout(function(){$.abort(),V({status:0,content:ye,isTimedOut:!0})},1e3*Se)},_e=ce(H.connectTimeout,"Connection timeout");$.onreadystatechange=function(){$.readyState>$.OPENED&&ae===void 0&&(clearTimeout(_e),ae=ce(H.responseTimeout,"Socket timeout"))},$.onerror=function(){$.status===0&&(clearTimeout(_e),clearTimeout(ae),V({content:$.responseText||"Network request failed",status:$.status,isTimedOut:!1}))},$.onload=function(){clearTimeout(_e),clearTimeout(ae),V({content:$.responseText,status:$.status,isTimedOut:!1})},$.send(H.data)})}},logger:(O=Q,{debug:function(H,V){return en>=O&&console.debug(H,V),Promise.resolve()},info:function(H,V){return Ie>=O&&console.info(H,V),Promise.resolve()},error:function(H,V){return console.error(H,V),Promise.resolve()}}),responsesCache:u(),requestsCache:u({serializable:!1}),hostsCache:c({caches:[l({key:"".concat("4.14.2","-").concat(T)}),u()]}),userAgent:q("4.14.2").add({segment:"Browser",version:"lite"}),authMode:_.WithinQueryParameters};return ue(i(i(i({},N),A),{},{methods:{search:ke,searchForFacetValues:mt,multipleQueries:ke,multipleSearchForFacetValues:mt,customRequest:we,initIndex:function(H){return function(V){return He(H)(V,{methods:{search:Ot,searchForFacetValues:bt,findAnswers:gt}})}}}}))}return pe.version="4.14.2",pe})})(Ta);const $h=Ta.exports,{window:qh}=cs;function io(n,e,t){const r=n.slice();return r[14]=e[t],r[16]=t,r}function oo(n){let e,t,r;return{c(){e=b("input"),w(e,"class","input"),w(e,"name","search"),w(e,"type","text"),e.autofocus=!0,w(e,"placeholder","Search")},m(i,o){p(i,e,o),e.focus(),t||(r=P(e,"input",n[4]),t=!0)},p:k,d(i){i&&g(e),t=!1,r()}}}function so(n){let e;return{c(){e=b("p"),e.textContent="No results yet",w(e,"class","no-results")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function ao(n){let e,t,r=n[14].title+"",i,o,s,a,l=n[14].type+"",c,u,d,f=n[14]._snippetResult.summary.value+"",m,_,I,y;function S(){return n[9](n[16])}function L(){return n[10](n[16])}return{c(){e=b("a"),t=b("span"),i=x(r),o=E(),s=b("span"),a=x("in "),c=x(l),u=E(),d=b("span"),m=E(),w(t,"class","hit-title"),w(s,"class","hit-type"),w(d,"class","hit-description"),w(e,"class","hit"),w(e,"href",_=n[14].relpermalink),Z(e,"active",n[16]===n[2])},m(v,R){p(v,e,R),h(e,t),h(t,i),h(e,o),h(e,s),h(s,a),h(s,c),h(e,u),h(e,d),d.innerHTML=f,h(e,m),I||(y=[P(e,"mouseover",S),P(e,"focus",L)],I=!0)},p(v,R){n=v,R&2&&r!==(r=n[14].title+"")&&U(i,r),R&2&&l!==(l=n[14].type+"")&&U(c,l),R&2&&f!==(f=n[14]._snippetResult.summary.value+"")&&(d.innerHTML=f),R&2&&_!==(_=n[14].relpermalink)&&w(e,"href",_),R&4&&Z(e,"active",n[16]===n[2])},d(v){v&&g(e),I=!1,fe(y)}}}function Wh(n){var z;let e,t,r,i,o,s,a,l,c,u,d,f,m,_,I,y,S,L,v,R,te,ne,D=n[3]==="search"&&oo(n),B=!((z=n[0])!=null&&z.nbHits)&&so(),j=n[1],q=[];for(let M=0;M<j.length;M+=1)q[M]=ao(io(n,j,M));return{c(){e=b("modal-dialog"),t=b("form"),D&&D.c(),r=E(),i=b("div"),B&&B.c(),o=E();for(let M=0;M<q.length;M+=1)q[M].c();s=E(),a=b("footer"),l=b("kbd"),l.textContent="\u21A9",c=E(),u=b("span"),u.textContent="select",d=E(),f=b("kbd"),f.textContent="\u2191",m=E(),_=b("kbd"),_.textContent="\u2193",I=E(),y=b("span"),y.textContent="navigate",S=E(),L=b("kbd"),L.textContent="esc",v=E(),R=b("span"),R.textContent="leave",this.c=k,w(i,"class","results"),w(u,"class","kbd-text"),w(y,"class","kbd-text"),w(R,"class","kbd-text"),Ee(e,"name","search")},m(M,X){p(M,e,X),h(e,t),D&&D.m(t,null),h(e,r),h(e,i),B&&B.m(i,null),h(i,o);for(let re=0;re<q.length;re+=1)q[re].m(i,null);h(e,s),h(e,a),h(a,l),h(a,c),h(a,u),h(a,d),h(a,f),h(a,m),h(a,_),h(a,I),h(a,y),h(a,S),h(a,L),h(a,v),h(a,R),te||(ne=[P(qh,"keydown",n[8]),P(l,"click",n[7]),P(f,"click",n[5]),P(_,"click",n[6]),P(L,"click",n[11])],te=!0)},p(M,[X]){var re;if(M[3]==="search"?D?D.p(M,X):(D=oo(M),D.c(),D.m(t,null)):D&&(D.d(1),D=null),(re=M[0])!=null&&re.nbHits?B&&(B.d(1),B=null):B||(B=so(),B.c(),B.m(i,o)),X&6){j=M[1];let ue;for(ue=0;ue<j.length;ue+=1){const we=io(M,j,ue);q[ue]?q[ue].p(we,X):(q[ue]=ao(we),q[ue].c(),q[ue].m(i,null))}for(;ue<q.length;ue+=1)q[ue].d(1);q.length=j.length}},i:k,o:k,d(M){M&&g(e),D&&D.d(),B&&B.d(),tt(q,M),te=!1,fe(ne)}}}const Kh="05VYZFXKNM",Gh="a0837b31f4379765240c2753fa141aa2";function Yh(n,e,t){let r;ie(n,Ce,S=>t(3,r=S));const o=$h(Kh,Gh).initIndex("content");let s,a=[],l=0;pt(()=>()=>{window.removeEventListener("keydown",m)});async function c(S){const L=S.target.value;t(0,s=await o.search(L,{hitsPerPage:7,attributesToSnippet:["summary"],highlightPreTag:'<mark class="high">',highlightPostTag:"</mark>"})),t(1,a=s.hits),t(2,l=0)}function u(){t(2,l=l<=0?l:l-1)}function d(){t(2,l=l>=a.length-1?l:l+1)}function f(){if(a[l]){const S=a[l].relpermalink;sr.go(S),Ce.set(null)}}function m(S){S.key==="ArrowUp"&&u(),S.key==="ArrowDown"&&d(),S.key==="Enter"&&f()}return[s,a,l,r,c,u,d,f,m,S=>t(2,l=S),S=>t(2,l=S),()=>Ce.set(null)]}class Jh extends G{constructor(e){super(),this.shadowRoot.innerHTML="<style>a,a:hover,a:focus,a:active{text-decoration:none;color:inherit}form{overflow:hidden}.input{margin-right:0.5rem;display:block;width:100%;border-radius:0px;border-width:4px;border-top-width:0px;border-right-width:0px;border-left-width:0px;border-style:solid;--tw-border-opacity:1;border-bottom-color:rgb(168 85 247 / var(--tw-border-opacity));background-color:rgb(18 24 27 / var(--tw-bg-opacity));--tw-bg-opacity:0.5;padding:0.75rem;font-family:sofia-pro, sans-serif;font-size:1.25rem;line-height:1.75rem;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px}.input:focus-visible{outline:2px solid transparent;outline-offset:2px}@media(min-width: 768px){.input{width:768px}}.results{min-height:200px;max-width:100%}.hit{margin-top:0.5rem;margin-bottom:0.5rem;display:block;border-width:1px;background-color:rgb(18 24 27 / var(--tw-bg-opacity));--tw-bg-opacity:0.5;padding:1rem;font-family:sofia-pro, sans-serif;-webkit-text-decoration-line:none;text-decoration-line:none;--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}.hit-description{display:block;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(178 190 205 / var(--tw-text-opacity))}.hit-title{font-size:1.125rem;line-height:1.75rem;font-weight:700}.hit-type{font-weight:300;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.no-results{text-align:center;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(178 190 205 / var(--tw-text-opacity))}.active{--tw-bg-opacity:1;background-color:rgb(249 115 22 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.active .hit-description{--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}footer{margin-top:1.5rem;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgb(178 190 205 / var(--tw-text-opacity))}kbd{cursor:pointer;border-radius:0.375rem;border-width:1px;border-style:solid;--tw-border-opacity:1;border-color:rgb(249 115 22 / var(--tw-border-opacity));background-color:transparent;--tw-bg-opacity:0.5;padding:0.375rem;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgb(178 190 205 / var(--tw-text-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms}kbd:hover{--tw-bg-opacity:1;background-color:rgb(249 115 22 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))}.kbd-text{margin-right:0.75rem}</style>",J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},Yh,Wh,K,{},null),e&&e.target&&p(e.target,this,e.anchor)}}customElements.define("algolia-search",Jh);class Rr{constructor(e,t,r){rn(this,"vimeoPlayer");rn(this,"ytPlayer");rn(this,"listener");this.video=e,this.el=t,this.type=r}async setupPlayer(){if(this.type==="youtube"){const e=(await st(()=>import("./index.ded9d2b1.js").then(t=>t.i),[])).default;this.ytPlayer=e(this.el),this.ytPlayer.cueVideoById(this.video)}else{const e=(await st(()=>import("./player.es.215cf96f.js"),[])).default;this.vimeoPlayer=new e(this.el,{id:this.video})}}static async create(e,t,r){const i=new Rr(e,t,r);return await i.setupPlayer(),i}play(){this.type==="youtube"?this.ytPlayer.playVideo():this.vimeoPlayer.play()}destroy(){this.type==="youtube"?(this.ytPlayer.off(this.listener),this.ytPlayer.destroy()):(this.vimeoPlayer.off("ended"),this.vimeoPlayer.destroy())}onEnded(e){this.type==="youtube"?this.listener=this.ytPlayer.on("stateChange",t=>{t.data===0&&e()}):this.listener=this.vimeoPlayer.on("ended",e)}}function Xh(n){var u;let e,t,r,i,o,s,a,l,c=((u=n[6])==null?void 0:u.price)&&lo();return{c(){e=b("div"),t=b("if-user"),r=b("h5"),r.textContent="Permission Denied",i=E(),c&&c.c(),o=E(),s=b("div"),s.innerHTML=`<p><a href="/pro/" class="text-pro">Upgrade to PRO</a></p> 
        <p class="text-light">Unlock all Fireship content &amp;&amp; bonus perks</p>`,a=E(),l=b("modal-action"),l.innerHTML='You must be <span class="hl-blue">signed in</span> to watch.',w(r,"class","denied"),w(s,"class","buy-box green"),Ee(l,"slot","signed-out"),Ee(l,"name","signin"),Ee(l,"type","open"),w(e,"class","upgrade-required")},m(d,f){p(d,e,f),h(e,t),h(t,r),h(t,i),c&&c.m(t,null),h(t,o),h(t,s),h(t,a),h(t,l)},p(d,f){var m;(m=d[6])!=null&&m.price?c||(c=lo(),c.c(),c.m(t,o)):c&&(c.d(1),c=null)},d(d){d&&g(e),c&&c.d()}}}function Zh(n){let e,t,r,i,o,s,a,l,c,u,d,f,m,_,I,y,S;return{c(){e=b("div"),t=b("div"),r=E(),i=b("div"),o=b("p"),s=x("Autoplaying next video in "),a=b("span"),l=x(n[3]),c=x(" seconds..."),u=E(),d=b("div"),f=b("button"),f.textContent="Cancel",m=E(),_=b("button"),_.textContent="Go",I=E(),w(t,"class","vid"),w(a,"class","big-text"),w(f,"class","btn"),w(_,"class","btn btn-blue"),w(i,"class","autoplay-cover"),Z(i,"active",n[2]),w(e,"class","wrapper")},m(L,v){p(L,e,v),h(e,t),n[11](t),h(e,r),h(e,i),h(i,o),h(o,s),h(o,a),h(a,l),h(o,c),h(i,u),h(i,d),h(d,f),h(d,m),h(d,_),h(e,I),y||(S=[P(f,"click",n[7]),P(_,"click",n[12])],y=!0)},p(L,v){v&8&&U(l,L[3]),v&4&&Z(i,"active",L[2])},d(L){L&&g(e),n[11](null),y=!1,fe(S)}}}function lo(n){let e,t,r;return{c(){e=b("div"),e.innerHTML=`<buy-course></buy-course> 
          <p class="text-light">Lifetime access for a blazingly low price</p>`,t=E(),r=b("h3"),r.textContent="OR",w(e,"class","buy-box")},m(i,o){p(i,e,o),p(i,t,o),p(i,r,o)},d(i){i&&g(e),i&&g(t),i&&g(r)}}}function Qh(n){let e;function t(o,s){return o[0]||o[5]?Zh:Xh}let r=t(n),i=r(n);return{c(){i.c(),e=ee(),this.c=k},m(o,s){i.m(o,s),p(o,e,s)},p(o,[s]){r===(r=t(o))&&i?i.p(o,s):(i.d(1),i=r(o),i&&(i.c(),i.m(e.parentNode,e)))},i:k,o:k,d(o){i.d(o),o&&g(e)}}}function em(n,e,t){let r,i,o,s;ie(n,kn,D=>t(4,r=D)),ie(n,Yt,D=>t(17,i=D)),ie(n,Gt,D=>t(5,o=D)),ie(n,Ea,D=>t(6,s=D));let{video:a}=e,{type:l}=e,{free:c=!1}=e,{single:u=!1}=e,d,f,m=!1,_,I,y=10,S;pt(()=>{t(8,a||(a=(r==null?void 0:r.vimeo)||(r==null?void 0:r.youtube))),t(9,l=r!=null&&r.vimeo?"vimeo":"youtube");const D=Gt.subscribe(async B=>{a&&!S&&(B||c)&&(await Ka(),L())});return()=>{S==null||S.destroy(),_&&clearTimeout(_),I&&clearInterval(I),f&&f(),D()}});async function L(){S=await Rr.create(a,d,l);const D=window.location.search.includes("autoplay");f=Yt.subscribe(B=>{B&&D&&S.play()}),S.onEnded(()=>{!u&&i&&(r==null?void 0:r.next)&&(t(2,m=!0),v(),_=setTimeout(()=>{sr.go(r.next+"?autoplay=true")},1e4)),!u&&!(r!=null&&r.next)&&me.set({message:"Well done! You reached the end of this course.",type:"success",icon:"\u{1F370}"})})}function v(){clearInterval(I),I=setInterval(()=>{t(3,y--,y)},1e3)}function R(){t(2,m=!1),t(3,y=10),clearTimeout(_),clearInterval(I)}function te(D){at[D?"unshift":"push"](()=>{d=D,t(1,d)})}const ne=()=>sr.go(r.next+"?autoplay=true");return n.$$set=D=>{"video"in D&&t(8,a=D.video),"type"in D&&t(9,l=D.type),"free"in D&&t(0,c=D.free),"single"in D&&t(10,u=D.single)},[c,d,m,y,r,o,s,R,a,l,u,te,ne]}class tm extends G{constructor(e){super(),this.shadowRoot.innerHTML=`<style>.wrapper{position:relative;aspect-ratio:16 / 9;width:100%;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity:0.5
}.autoplay-cover{position:absolute;top:0px;right:0px;bottom:0px;left:0px;display:none;flex-direction:column;align-items:center;justify-content:center;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity:0.95;font-size:1.125rem;line-height:1.75rem
}.active{display:flex
}.btn{margin-left:0.25rem;margin-right:0.25rem;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgb(239 68 68 / var(--tw-bg-opacity));padding-left:1rem;padding-right:1rem;padding-top:0.5rem;padding-bottom:0.5rem;font-family:cubano, sans-serif;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px
}.btn-blue{--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity))
}.upgrade-required{display:flex;aspect-ratio:16 / 9
}@-webkit-keyframes pulse{50%{opacity:.5
    }}@keyframes pulse{50%{opacity:.5
    }}.upgrade-required{-webkit-animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;animation:pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;flex-direction:column;align-items:center;justify-content:center;background-color:rgb(0 0 0 / var(--tw-bg-opacity));--tw-bg-opacity:0.75;text-align:center;font-size:1.25rem;line-height:1.75rem
}.hl-blue{cursor:pointer;font-family:cubano, sans-serif;--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity))
}.denied{display:none;--tw-text-opacity:1;color:rgb(239 68 68 / var(--tw-text-opacity))
}@media(min-width: 768px){.denied{display:block
    }}.big-text{font-family:cubano, sans-serif;font-size:2.25rem;line-height:2.5rem
}.buy-box{margin-left:auto;margin-right:auto;max-width:24rem;border-radius:0.5rem;border-width:1px;border-style:solid;--tw-border-opacity:1;border-color:rgb(59 130 246 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(18 24 27 / var(--tw-bg-opacity));padding:1.5rem;--tw-shadow:0 5px 20px rgb(0 0 0 / 30%);--tw-shadow-colored:0 5px 20px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}.buy-box.green{margin-top:1rem;--tw-border-opacity:1;border-color:rgb(34 197 94 / var(--tw-border-opacity))
}.buy-box p{margin-top:0px;margin-bottom:0px
}.text-light{margin-top:0px;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(108 121 131 / var(--tw-text-opacity))
}.text-pro{font-family:cubano, sans-serif;font-size:1.25rem;line-height:1.75rem;--tw-text-opacity:1;color:rgb(34 197 94 / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none
}h3{display:none;font-family:cubano, sans-serif;--tw-text-opacity:1;color:rgb(108 121 131 / var(--tw-text-opacity))
}@media(min-width: 768px){h3{display:block
    }}iframe{position:absolute;top:0px;left:0px;height:100%;width:100%
}</style>`,J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},em,Qh,K,{video:8,type:9,free:0,single:10},null),e&&(e.target&&p(e.target,this,e.anchor),e.props&&(this.$set(e.props),W()))}static get observedAttributes(){return["video","type","free","single"]}get video(){return this.$$.ctx[8]}set video(e){this.$$set({video:e}),W()}get type(){return this.$$.ctx[9]}set type(e){this.$$set({type:e}),W()}get free(){return this.$$.ctx[0]}set free(e){this.$$set({free:e}),W()}get single(){return this.$$.ctx[10]}set single(e){this.$$set({single:e}),W()}}customElements.define("video-player",tm);function nm(n){let e,t,r,i,o,s;return{c(){e=b("label"),t=b("input"),r=E(),i=b("span"),this.c=k,w(t,"type","checkbox"),t.checked=n[0],w(i,"class","slider"),w(e,"class","switch")},m(a,l){p(a,e,l),h(e,t),h(e,r),h(e,i),o||(s=P(t,"change",n[1]),o=!0)},p(a,[l]){l&1&&(t.checked=a[0])},i:k,o:k,d(a){a&&g(e),o=!1,s()}}}function rm(n,e,t){let r;ie(n,Yt,o=>t(0,r=o));function i(o){Yt.set(o.target.checked)}return[r,i]}class im extends G{constructor(e){super(),this.shadowRoot.innerHTML=`<style>.switch{position:relative;display:inline-block;height:1.25rem;width:2.5rem
}.switch input{height:0px;width:0px;opacity:0
}.slider{position:absolute;top:0px;right:0px;bottom:0px;left:0px;cursor:pointer;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(69 78 86 / var(--tw-bg-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms
}.slider:before{position:absolute;left:0.125rem;bottom:0.125rem;z-index:10;height:1rem;width:1rem;border-radius:9999px;--tw-bg-opacity:1;background-color:rgb(18 24 27 / var(--tw-bg-opacity));transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;content:""
}input:checked+.slider{--tw-bg-opacity:1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))
}input:focus+.slider{--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}input:checked+.slider:before{--tw-translate-x:1.25rem;transform:translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}</style>`,J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},rm,nm,K,{},null),e&&e.target&&p(e.target,this,e.anchor)}}customElements.define("autoplay-toggle",im);function om(n){let e;return{c(){e=b("span"),e.textContent="Course not available for single purchase",w(e,"class","btn yellow")},m(t,r){p(t,e,r)},p:k,d(t){t&&g(e)}}}function sm(n){var _;let e,t,r=n[0]?"loading...":"buy this course",i,o,s,a,l=((_=n[2])==null?void 0:_.amount)+"",c,u,d,f,m=n[0]&&co();return{c(){e=b("span"),m&&m.c(),t=E(),i=x(r),o=x(` 
      for `),s=b("strong"),a=x("$"),c=x(l),u=x("."),w(e,"class","btn"),w(s,"class","font-display")},m(I,y){p(I,e,y),m&&m.m(e,null),h(e,t),h(e,i),p(I,o,y),p(I,s,y),h(s,a),h(s,c),p(I,u,y),d||(f=P(e,"click",n[3]),d=!0)},p(I,y){var S;I[0]?m||(m=co(),m.c(),m.m(e,t)):m&&(m.d(1),m=null),y&1&&r!==(r=I[0]?"loading...":"buy this course")&&U(i,r),y&4&&l!==(l=((S=I[2])==null?void 0:S.amount)+"")&&U(c,l)},d(I){I&&g(e),m&&m.d(),I&&g(o),I&&g(s),I&&g(u),d=!1,f()}}}function co(n){let e;return{c(){e=b("loading-spinner")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function uo(n){let e,t;return{c(){e=b("a"),t=x("Open Checkout Page"),w(e,"target","_blank"),w(e,"href",n[1])},m(r,i){p(r,e,i),h(e,t)},p(r,i){i&2&&w(e,"href",r[1])},d(r){r&&g(e)}}}function am(n){let e,t;function r(a,l){var c;return(c=a[2])!=null&&c.price?sm:om}let i=r(n),o=i(n),s=n[1]&&uo(n);return{c(){o.c(),e=E(),s&&s.c(),t=ee(),this.c=k},m(a,l){o.m(a,l),p(a,e,l),s&&s.m(a,l),p(a,t,l)},p(a,[l]){i===(i=r(a))&&o?o.p(a,l):(o.d(1),o=i(a),o&&(o.c(),o.m(e.parentNode,e))),a[1]?s?s.p(a,l):(s=uo(a),s.c(),s.m(t.parentNode,t)):s&&(s.d(1),s=null)},i:k,o:k,d(a){o.d(a),a&&g(e),s&&s.d(a),a&&g(t)}}}function lm(n,e,t){let r;ie(n,Ea,a=>t(2,r=a));let i=!1,o;async function s(){var a;t(0,i=!0),t(1,o=await ge({fn:"createPaymentSession",payload:{productId:r.id,price:r.price,productType:"course"}})),o&&((a=window.open(o,"_blank"))==null||a.focus()),t(0,i=!1)}return[i,o,r,s]}class cm extends G{constructor(e){super(),this.shadowRoot.innerHTML=`<style>.btn{cursor:pointer;font-family:cubano, sans-serif;font-size:1.25rem;line-height:1.75rem;--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity))
}.btn.yellow{cursor:default;--tw-text-opacity:1;color:rgb(234 179 8 / var(--tw-text-opacity))
}a{display:block;text-align:center;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity))
}</style>`,J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},lm,am,K,{},null),e&&e.target&&p(e.target,this,e.anchor)}}customElements.define("buy-course",cm);function fo(n){let e;return{c(){e=b("loading-spinner")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function po(n){let e,t;return{c(){e=b("a"),t=x("Open Checkout Page"),w(e,"target","_blank"),w(e,"href",n[1])},m(r,i){p(r,e,i),h(e,t)},p(r,i){i&2&&w(e,"href",r[1])},d(r){r&&g(e)}}}function um(n){let e,t,r=n[0]?"loading...":"subscribe",i,o,s,a,l,c=n[0]&&fo(),u=n[1]&&po(n);return{c(){e=b("button"),c&&c.c(),t=E(),i=x(r),o=E(),u&&u.c(),s=ee(),this.c=k,w(e,"class","btn btn-blue"),e.disabled=n[0]},m(d,f){p(d,e,f),c&&c.m(e,null),h(e,t),h(e,i),p(d,o,f),u&&u.m(d,f),p(d,s,f),a||(l=P(e,"click",n[2]),a=!0)},p(d,[f]){d[0]?c||(c=fo(),c.c(),c.m(e,t)):c&&(c.d(1),c=null),f&1&&r!==(r=d[0]?"loading...":"subscribe")&&U(i,r),f&1&&(e.disabled=d[0]),d[1]?u?u.p(d,f):(u=po(d),u.c(),u.m(s.parentNode,s)):u&&(u.d(1),u=null)},i:k,o:k,d(d){d&&g(e),c&&c.d(),d&&g(o),u&&u.d(d),d&&g(s),a=!1,l()}}}function dm(n,e,t){let r;ie(n,Ut,a=>t(3,r=a));let i=!1,o;async function s(){var l;t(0,i=!0);const a=Tt[r].price;t(1,o=await ge({fn:"createSubscriptionSession",payload:{price:a}})),o&&((l=window.open(o,"_blank"))==null||l.focus()),t(0,i=!1)}return[i,o,s]}class fm extends G{constructor(e){super(),this.shadowRoot.innerHTML=`<style>.btn{margin-top:0.125rem;margin-bottom:0.125rem;display:inline-flex;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));padding-left:1.25rem;padding-right:1.25rem;padding-top:0.5rem;padding-bottom:0.5rem;text-align:center;font-family:sofia-pro, sans-serif;font-size:0.875rem;line-height:1.25rem;font-weight:700;text-transform:uppercase;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none;--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);outline:2px solid transparent;outline-offset:2px
}.btn:hover{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))
}.btn:disabled{cursor:not-allowed;opacity:0.7
}a{display:block;text-align:center;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity))
}</style>`,J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},dm,um,K,{},null),e&&e.target&&p(e.target,this,e.anchor)}}customElements.define("buy-pro",fm);function ho(n){let e,t,r,i,o,s,a,l;return{c(){e=b("div"),t=b("button"),t.textContent="-",r=E(),i=b("input"),o=E(),s=b("button"),s.textContent="+",w(t,"class","btn-o"),w(i,"type","number"),w(i,"min","5"),w(i,"max","50"),w(s,"class","btn-o"),w(e,"class","controls")},m(c,u){p(c,e,u),h(e,t),h(e,r),h(e,i),de(i,n[2]),h(e,o),h(e,s),a||(l=[P(t,"click",n[7]),P(i,"input",n[8]),P(i,"change",n[9]),P(s,"click",n[10])],a=!0)},p(c,u){u&4&&ss(i.value)!==c[2]&&de(i,c[2])},d(c){c&&g(e),a=!1,fe(l)}}}function mo(n){let e;return{c(){e=b("loading-spinner")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function go(n){let e,t;return{c(){e=b("a"),t=x("Open Checkout Page"),w(e,"target","_blank"),w(e,"href",n[3])},m(r,i){p(r,e,i),h(e,t)},p(r,i){i&8&&w(e,"href",r[3])},d(r){r&&g(e)}}}function pm(n){let e,t,r,i=(n[1]?"loading...":n[4])+"",o,s,a,l,c,u=n[0]&&ho(n),d=n[1]&&mo(),f=n[3]&&go(n);return{c(){u&&u.c(),e=E(),t=b("button"),d&&d.c(),r=E(),o=x(i),s=E(),f&&f.c(),a=ee(),this.c=k,w(t,"class","btn"),t.disabled=n[1],Z(t,"btn-blue",n[0])},m(m,_){u&&u.m(m,_),p(m,e,_),p(m,t,_),d&&d.m(t,null),h(t,r),h(t,o),p(m,s,_),f&&f.m(m,_),p(m,a,_),l||(c=P(t,"click",n[6]),l=!0)},p(m,[_]){m[0]?u?u.p(m,_):(u=ho(m),u.c(),u.m(e.parentNode,e)):u&&(u.d(1),u=null),m[1]?d||(d=mo(),d.c(),d.m(t,r)):d&&(d.d(1),d=null),_&2&&i!==(i=(m[1]?"loading...":m[4])+"")&&U(o,i),_&2&&(t.disabled=m[1]),_&1&&Z(t,"btn-blue",m[0]),m[3]?f?f.p(m,_):(f=go(m),f.c(),f.m(a.parentNode,a)):f&&(f.d(1),f=null)},i:k,o:k,d(m){u&&u.d(m),m&&g(e),m&&g(t),d&&d.d(),m&&g(s),f&&f.d(m),m&&g(a),l=!1,c()}}}function hm(n,e,t){let r=!1,{enterprise:i=!1}=e,o=i?"upgrade my team":"upgrade for life",s=i?Tt.enterprise.price:Tt.lifetime.price,a=5,l="";function c(I){t(2,a=I),a<5&&(t(2,a=5),me.set({message:"This plan has a 5 seat minimum",type:"error"})),a>50&&(t(2,a=50),me.set({message:"Maximum 50 seats. Contact for larger plans",type:"error"}))}async function u(){var I;t(1,r=!0),t(3,l=await ge({fn:"createPaymentSession",payload:{productType:i?"enterprise":"lifetime",price:s,seats:i?a:1}})),l&&((I=window.open(l,"_blank"))==null||I.focus()),t(1,r=!1)}const d=()=>c(a-1);function f(){a=ss(this.value),t(2,a)}const m=I=>c(I.target.value),_=()=>c(a+1);return n.$$set=I=>{"enterprise"in I&&t(0,i=I.enterprise)},[i,r,a,l,o,c,u,d,f,m,_]}class mm extends G{constructor(e){super(),this.shadowRoot.innerHTML=`<style>input{margin-left:auto;margin-right:auto;width:3rem;border-style:none;--tw-bg-opacity:1;background-color:rgb(18 24 27 / var(--tw-bg-opacity));padding:0.5rem;text-align:center;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px
}.btn{margin-top:0.125rem;margin-bottom:0.125rem;display:inline-flex;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgb(168 85 247 / var(--tw-bg-opacity));padding-left:1.25rem;padding-right:1.25rem;padding-top:0.5rem;padding-bottom:0.5rem;text-align:center;font-family:sofia-pro, sans-serif;font-size:0.875rem;line-height:1.25rem;font-weight:700;text-transform:uppercase;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none;--tw-shadow:0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);outline:2px solid transparent;outline-offset:2px
}.btn:hover{--tw-bg-opacity:1;background-color:rgb(126 34 206 / var(--tw-bg-opacity))
}.btn:disabled{cursor:not-allowed;opacity:0.7
}.btn-blue{--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity))
}.btn-blue:hover{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))
}.btn-o{margin:0px;cursor:pointer;border-radius:0.125rem;border-width:1px;border-style:solid;--tw-border-opacity:1;border-color:rgb(249 115 22 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(42 46 53 / var(--tw-bg-opacity));padding:0.375rem;font-family:sofia-pro, sans-serif;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgb(178 190 205 / var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms
}.btn-o:hover{--tw-bg-opacity:1;background-color:rgb(249 115 22 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))
}.controls{margin-top:0.75rem;margin-bottom:0.75rem;text-align:center
}a{display:block;text-align:center;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity))
}</style>`,J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},hm,pm,K,{enterprise:0},null),e&&(e.target&&p(e.target,this,e.anchor),e.props&&(this.$set(e.props),W()))}static get observedAttributes(){return["enterprise"]}get enterprise(){return this.$$.ctx[0]}set enterprise(e){this.$$set({enterprise:e}),W()}}customElements.define("buy-lifetime",mm);function bo(n){let e;return{c(){e=b("loading-spinner")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function gm(n){let e,t,r=n[0]?"loading...":"subscription & invoices",i,o,s,a=n[0]&&bo();return{c(){e=b("button"),a&&a.c(),t=E(),i=x(r),this.c=k},m(l,c){p(l,e,c),a&&a.m(e,null),h(e,t),h(e,i),o||(s=P(e,"click",n[1]),o=!0)},p(l,[c]){l[0]?a||(a=bo(),a.c(),a.m(e,t)):a&&(a.d(1),a=null),c&1&&r!==(r=l[0]?"loading...":"subscription & invoices")&&U(i,r)},i:k,o:k,d(l){l&&g(e),a&&a.d(),o=!1,s()}}}function bm(n,e,t){let r=!1;async function i(){var s;t(0,r=!0);const o=await ge({fn:"createPortalSession",payload:{}});o&&((s=window.open(o,"_blank"))==null||s.focus()),t(0,r=!1)}return[r,i]}class wm extends G{constructor(e){super(),this.shadowRoot.innerHTML=`<style>button{display:inline-flex;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));padding-left:1.25rem;padding-right:1.25rem;padding-top:0.5rem;padding-bottom:0.5rem;text-align:center;font-family:sofia-pro, sans-serif;font-size:0.875rem;line-height:1.25rem;font-weight:700;text-transform:uppercase;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none
}button:hover{--tw-bg-opacity:1;background-color:rgb(37 99 235 / var(--tw-bg-opacity))
}button:active{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))
}</style>`,J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},bm,gm,K,{},null),e&&e.target&&p(e.target,this,e.anchor)}}customElements.define("customer-portal",wm);function wo(n,e,t){const r=n.slice();return r[4]=e[t],r}function _o(n){let e,t,r=n[0]?"loading...":"get receipts",i,o,s,a=n[0]&&yo();return{c(){e=b("button"),a&&a.c(),t=E(),i=x(r)},m(l,c){p(l,e,c),a&&a.m(e,null),h(e,t),h(e,i),o||(s=P(e,"click",n[2]),o=!0)},p(l,c){l[0]?a||(a=yo(),a.c(),a.m(e,t)):a&&(a.d(1),a=null),c&1&&r!==(r=l[0]?"loading...":"get receipts")&&U(i,r)},d(l){l&&g(e),a&&a.d(),o=!1,s()}}}function yo(n){let e;return{c(){e=b("loading-spinner")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function vo(n){let e,t,r,i,o,s,a,l=n[1],c=[];for(let d=0;d<l.length;d+=1)c[d]=ko(wo(n,l,d));let u=!n[1].length&&Io();return{c(){e=b("button"),e.textContent="Hide Receipts",t=E(),r=b("ul");for(let d=0;d<c.length;d+=1)c[d].c();i=E(),u&&u.c(),o=ee()},m(d,f){p(d,e,f),p(d,t,f),p(d,r,f);for(let m=0;m<c.length;m+=1)c[m].m(r,null);p(d,i,f),u&&u.m(d,f),p(d,o,f),s||(a=P(e,"click",n[3]),s=!0)},p(d,f){if(f&2){l=d[1];let m;for(m=0;m<l.length;m+=1){const _=wo(d,l,m);c[m]?c[m].p(_,f):(c[m]=ko(_),c[m].c(),c[m].m(r,null))}for(;m<c.length;m+=1)c[m].d(1);c.length=l.length}d[1].length?u&&(u.d(1),u=null):u||(u=Io(),u.c(),u.m(o.parentNode,o))},d(d){d&&g(e),d&&g(t),d&&g(r),tt(c,d),d&&g(i),u&&u.d(d),d&&g(o),s=!1,a()}}}function ko(n){let e,t,r=n[4].id+"",i,o,s,a,l,c=n[4].amount/100+"",u,d,f=new Date(n[4].created*1e3).toLocaleDateString()+"",m,_;return{c(){e=b("li"),t=b("a"),i=x(r),s=x(` for
        `),a=b("strong"),l=x("$"),u=x(c),d=x(" on "),m=x(f),_=E(),w(t,"target","_blank"),w(t,"href",o=n[4].receipt_url)},m(I,y){p(I,e,y),h(e,t),h(t,i),h(e,s),h(e,a),h(a,l),h(a,u),h(e,d),h(e,m),h(e,_)},p(I,y){y&2&&r!==(r=I[4].id+"")&&U(i,r),y&2&&o!==(o=I[4].receipt_url)&&w(t,"href",o),y&2&&c!==(c=I[4].amount/100+"")&&U(u,c),y&2&&f!==(f=new Date(I[4].created*1e3).toLocaleDateString()+"")&&U(m,f)},d(I){I&&g(e)}}}function Io(n){let e;return{c(){e=b("p"),e.textContent="No charges found"},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function _m(n){let e,t,r=!n[1]&&_o(n),i=n[1]&&vo(n);return{c(){r&&r.c(),e=E(),i&&i.c(),t=ee(),this.c=k},m(o,s){r&&r.m(o,s),p(o,e,s),i&&i.m(o,s),p(o,t,s)},p(o,[s]){o[1]?r&&(r.d(1),r=null):r?r.p(o,s):(r=_o(o),r.c(),r.m(e.parentNode,e)),o[1]?i?i.p(o,s):(i=vo(o),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null)},i:k,o:k,d(o){r&&r.d(o),o&&g(e),i&&i.d(o),o&&g(t)}}}function ym(n,e,t){let r=!1,i=null;async function o(){var l;t(0,r=!0);const a=(l=await ge({fn:"getCharges",payload:{}}))!=null?l:[];t(1,i=a.data||[]),t(0,r=!1)}return[r,i,o,()=>t(1,i=null)]}class vm extends G{constructor(e){super(),this.shadowRoot.innerHTML=`<style>button{display:inline-flex;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));padding-left:1.25rem;padding-right:1.25rem;padding-top:0.5rem;padding-bottom:0.5rem;text-align:center;font-family:sofia-pro, sans-serif;font-size:0.875rem;line-height:1.25rem;font-weight:700;text-transform:uppercase;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none
}button:hover{--tw-bg-opacity:1;background-color:rgb(37 99 235 / var(--tw-bg-opacity))
}button:active{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))
}a{--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity))
}</style>`,J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},ym,_m,K,{},null),e&&e.target&&p(e.target,this,e.anchor)}}customElements.define("user-charges",vm);function Eo(n){let e=n[2][n[1]]+"",t,r,i,o;return{c(){t=x(e),r=b("span"),i=x("/"),o=x(n[1]),w(r,"class","period")},m(s,a){p(s,t,a),p(s,r,a),h(r,i),h(r,o)},p(s,a){a&2&&e!==(e=s[2][s[1]]+"")&&U(t,e),a&2&&U(o,s[1])},d(s){s&&g(t),s&&g(r)}}}function To(n){let e,t;return{c(){e=b("span"),t=x(n[1])},m(r,i){p(r,e,i),h(e,t)},p(r,i){i&2&&U(t,r[1])},d(r){r&&g(e)}}}function So(n){let e,t,r,i,o,s,a;return{c(){e=b("button"),e.textContent="Month",t=E(),r=b("button"),r.textContent="Quarter",i=E(),o=b("button"),o.textContent="Year",w(e,"class","btn"),Z(e,"active",n[1]=="month"),w(r,"class","btn"),Z(r,"active",n[1]=="quarter"),w(o,"class","btn"),Z(o,"active",n[1]=="year")},m(l,c){p(l,e,c),p(l,t,c),p(l,r,c),p(l,i,c),p(l,o,c),s||(a=[P(e,"click",n[3]),P(r,"click",n[4]),P(o,"click",n[5])],s=!0)},p(l,c){c&2&&Z(e,"active",l[1]=="month"),c&2&&Z(r,"active",l[1]=="quarter"),c&2&&Z(o,"active",l[1]=="year")},d(l){l&&g(e),l&&g(t),l&&g(r),l&&g(i),l&&g(o),s=!1,fe(a)}}}function km(n){let e,t,r,i=n[0]=="amount"&&Eo(n),o=n[0]=="period"&&To(n),s=n[0]=="control"&&So(n);return{c(){i&&i.c(),e=E(),o&&o.c(),t=E(),s&&s.c(),r=ee(),this.c=k},m(a,l){i&&i.m(a,l),p(a,e,l),o&&o.m(a,l),p(a,t,l),s&&s.m(a,l),p(a,r,l)},p(a,[l]){a[0]=="amount"?i?i.p(a,l):(i=Eo(a),i.c(),i.m(e.parentNode,e)):i&&(i.d(1),i=null),a[0]=="period"?o?o.p(a,l):(o=To(a),o.c(),o.m(t.parentNode,t)):o&&(o.d(1),o=null),a[0]=="control"?s?s.p(a,l):(s=So(a),s.c(),s.m(r.parentNode,r)):s&&(s.d(1),s=null)},i:k,o:k,d(a){i&&i.d(a),a&&g(e),o&&o.d(a),a&&g(t),s&&s.d(a),a&&g(r)}}}function Im(n,e,t){let r;ie(n,Ut,c=>t(1,r=c));let{show:i="amount"}=e;const o={month:29,quarter:69,year:199},s=()=>Ut.set("month"),a=()=>Ut.set("quarter"),l=()=>Ut.set("year");return n.$$set=c=>{"show"in c&&t(0,i=c.show)},[i,r,o,s,a,l]}class Em extends G{constructor(e){super(),this.shadowRoot.innerHTML=`<style>.btn{margin:0px;cursor:pointer;border-radius:0.375rem;border-width:1px;border-style:solid;--tw-border-opacity:1;border-color:rgb(249 115 22 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(42 46 53 / var(--tw-bg-opacity));padding:0.375rem;font-family:sofia-pro, sans-serif;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgb(178 190 205 / var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms
}.btn:hover{--tw-bg-opacity:1;background-color:rgb(249 115 22 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))
}.btn.active{--tw-bg-opacity:1;background-color:rgb(249 115 22 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))
}.period{font-family:sofia-pro, sans-serif;font-size:1rem;line-height:1.5rem;--tw-text-opacity:1;color:rgb(219 225 232 / var(--tw-text-opacity))
}</style>`,J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},Im,km,K,{show:0},null),e&&(e.target&&p(e.target,this,e.anchor),e.props&&(this.$set(e.props),W()))}static get observedAttributes(){return["show"]}get show(){return this.$$.ctx[0]}set show(e){this.$$set({show:e}),W()}}customElements.define("price-select",Em);function Co(n,e,t){const r=n.slice();return r[13]=e[t],r}function Ao(n){var q;let e,t,r,i,o=n[5].length+"",s,a,l=((q=n[0])==null?void 0:q.seats)+"",c,u,d,f,m,_,I,y,S,L,v,R,te;function ne(z,M){return z[5]?Sm:Tm}let D=ne(n),B=D(n),j=n[1]&&Ro();return{c(){e=b("h2"),e.textContent="Assign Seats",t=E(),r=b("p"),i=x("You have used "),s=x(o),a=x(" of "),c=x(l),u=x(" seats"),d=E(),f=b("div"),B.c(),m=E(),_=b("div"),I=b("input"),y=E(),S=b("button"),j&&j.c(),L=x(`
            assign`),w(I,"type","email"),w(I,"placeholder","email"),I.required=!0,w(S,"class","btn"),S.disabled=v=n[1]||!n[2]||!n[3],w(_,"class","seat"),w(f,"class","wrap")},m(z,M){p(z,e,M),p(z,t,M),p(z,r,M),h(r,i),h(r,s),h(r,a),h(r,c),h(r,u),p(z,d,M),p(z,f,M),B.m(f,null),h(f,m),h(f,_),h(_,I),de(I,n[3]),n[12](I),h(_,y),h(_,S),j&&j.m(S,null),h(S,L),R||(te=[P(I,"input",n[11]),P(I,"input",n[7]),P(S,"click",n[8])],R=!0)},p(z,M){var X;M&32&&o!==(o=z[5].length+"")&&U(s,o),M&1&&l!==(l=((X=z[0])==null?void 0:X.seats)+"")&&U(c,l),D===(D=ne(z))&&B?B.p(z,M):(B.d(1),B=D(z),B&&(B.c(),B.m(f,m))),M&8&&I.value!==z[3]&&de(I,z[3]),z[1]?j||(j=Ro(),j.c(),j.m(S,L)):j&&(j.d(1),j=null),M&14&&v!==(v=z[1]||!z[2]||!z[3])&&(S.disabled=v)},d(z){z&&g(e),z&&g(t),z&&g(r),z&&g(d),z&&g(f),B.d(),n[12](null),j&&j.d(),R=!1,fe(te)}}}function Tm(n){let e;return{c(){e=b("p"),e.textContent="You have not assigned any seats yet"},m(t,r){p(t,e,r)},p:k,d(t){t&&g(e)}}}function Sm(n){let e,t=n[5],r=[];for(let i=0;i<t.length;i+=1)r[i]=xo(Co(n,t,i));return{c(){for(let i=0;i<r.length;i+=1)r[i].c();e=ee()},m(i,o){for(let s=0;s<r.length;s+=1)r[s].m(i,o);p(i,e,o)},p(i,o){if(o&546){t=i[5];let s;for(s=0;s<t.length;s+=1){const a=Co(i,t,s);r[s]?r[s].p(a,o):(r[s]=xo(a),r[s].c(),r[s].m(e.parentNode,e))}for(;s<r.length;s+=1)r[s].d(1);r.length=t.length}},d(i){tt(r,i),i&&g(e)}}}function xo(n){let e,t=n[13]+"",r,i,o,s="revoke",a,l,c,u;function d(){return n[10](n[13])}return{c(){e=b("div"),r=x(t),i=E(),o=b("button"),a=x(s),l=E(),w(o,"class","btn btn-red"),o.disabled=n[1],w(e,"class","seat")},m(f,m){p(f,e,m),h(e,r),h(e,i),h(e,o),h(o,a),h(e,l),c||(u=P(o,"click",d),c=!0)},p(f,m){n=f,m&32&&t!==(t=n[13]+"")&&U(r,t),m&2&&(o.disabled=n[1])},d(f){f&&g(e),c=!1,u()}}}function Ro(n){let e;return{c(){e=b("loading-spinner")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function Cm(n){var r;let e,t=((r=n[6])==null?void 0:r.enterprise)&&Ao(n);return{c(){t&&t.c(),e=ee(),this.c=k},m(i,o){t&&t.m(i,o),p(i,e,o)},p(i,[o]){var s;(s=i[6])!=null&&s.enterprise?t?t.p(i,o):(t=Ao(i),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:k,o:k,d(i){t&&t.d(i),i&&g(e)}}}function Am(n,e,t){let r,i,o;ie(n,or,y=>t(0,i=y)),ie(n,ft,y=>t(6,o=y));let s=!1,a=!1,l,c;function u(){t(2,a=c.validity.valid)}async function d(){t(1,s=!0),await ge({fn:"seatAssign",payload:{email:l}}),t(1,s=!1),t(3,l="")}async function f(y){t(1,s=!0),await ge({fn:"seatAssign",payload:{email:y,revoke:!0}}),t(1,s=!1)}const m=y=>f(y);function _(){l=this.value,t(3,l)}function I(y){at[y?"unshift":"push"](()=>{c=y,t(4,c)})}return n.$$.update=()=>{n.$$.dirty&1&&t(5,r=Object.keys((i==null?void 0:i.assigned)||{}))},[i,s,a,l,c,r,o,u,d,f,m,_,I]}class xm extends G{constructor(e){super(),this.shadowRoot.innerHTML=`<style>.seat{margin-top:0.25rem;margin-bottom:0.25rem;display:flex;justify-content:space-between;--tw-bg-opacity:1;background-color:rgb(42 46 53 / var(--tw-bg-opacity));padding:0.75rem
}.btn{margin:0px;cursor:pointer;border-radius:0.125rem;border-width:1px;border-style:solid;--tw-border-opacity:1;border-color:rgb(59 130 246 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(42 46 53 / var(--tw-bg-opacity));padding:0.375rem;font-family:sofia-pro, sans-serif;font-size:0.75rem;line-height:1rem;--tw-text-opacity:1;color:rgb(178 190 205 / var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px;transition-property:all;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms
}.btn:hover{--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity))
}.btn:disabled{cursor:not-allowed;opacity:0.6
}.btn-red{margin-left:0.5rem;--tw-border-opacity:1;border-color:rgb(239 68 68 / var(--tw-border-opacity))
}.btn-red:hover{--tw-bg-opacity:1;background-color:rgb(239 68 68 / var(--tw-bg-opacity))
}input{margin-right:0.75rem;width:100%;border-style:none;--tw-bg-opacity:1;background-color:rgb(18 24 27 / var(--tw-bg-opacity));padding:0.75rem;font-family:sofia-pro, sans-serif;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px
}.wrap{display:flex;max-width:500px;flex-direction:column
}</style>`,J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},Am,Cm,K,{},null),e&&e.target&&p(e.target,this,e.anchor)}}customElements.define("seat-assign",xm);function Oo(n,e,t){const r=n.slice();return r[4]=e[t],r}function Po(n){let e,t,r=n[0]?"loading...":"get invoices",i,o,s,a=n[0]&&Lo();return{c(){e=b("button"),a&&a.c(),t=E(),i=x(r)},m(l,c){p(l,e,c),a&&a.m(e,null),h(e,t),h(e,i),o||(s=P(e,"click",n[2]),o=!0)},p(l,c){l[0]?a||(a=Lo(),a.c(),a.m(e,t)):a&&(a.d(1),a=null),c&1&&r!==(r=l[0]?"loading...":"get invoices")&&U(i,r)},d(l){l&&g(e),a&&a.d(),o=!1,s()}}}function Lo(n){let e;return{c(){e=b("loading-spinner")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function No(n){let e,t,r,i,o,s,a,l=n[1],c=[];for(let d=0;d<l.length;d+=1)c[d]=Mo(Oo(n,l,d));let u=!n[1].length&&Do();return{c(){e=b("button"),e.textContent="Hide Invoices",t=E(),r=b("ul");for(let d=0;d<c.length;d+=1)c[d].c();i=E(),u&&u.c(),o=ee()},m(d,f){p(d,e,f),p(d,t,f),p(d,r,f);for(let m=0;m<c.length;m+=1)c[m].m(r,null);p(d,i,f),u&&u.m(d,f),p(d,o,f),s||(a=P(e,"click",n[3]),s=!0)},p(d,f){if(f&2){l=d[1];let m;for(m=0;m<l.length;m+=1){const _=Oo(d,l,m);c[m]?c[m].p(_,f):(c[m]=Mo(_),c[m].c(),c[m].m(r,null))}for(;m<c.length;m+=1)c[m].d(1);c.length=l.length}d[1].length?u&&(u.d(1),u=null):u||(u=Do(),u.c(),u.m(o.parentNode,o))},d(d){d&&g(e),d&&g(t),d&&g(r),tt(c,d),d&&g(i),u&&u.d(d),d&&g(o),s=!1,a()}}}function Mo(n){let e,t,r=n[4].id+"",i,o,s,a,l,c=n[4].amount_due/100+"",u,d,f=new Date(n[4].created*1e3).toLocaleDateString()+"",m,_;return{c(){e=b("li"),t=b("a"),i=x(r),s=x(` for
        `),a=b("strong"),l=x("$"),u=x(c),d=x(" on "),m=x(f),_=E(),w(t,"target","_blank"),w(t,"href",o=n[4].hosted_invoice_url)},m(I,y){p(I,e,y),h(e,t),h(t,i),h(e,s),h(e,a),h(a,l),h(a,u),h(e,d),h(e,m),h(e,_)},p(I,y){y&2&&r!==(r=I[4].id+"")&&U(i,r),y&2&&o!==(o=I[4].hosted_invoice_url)&&w(t,"href",o),y&2&&c!==(c=I[4].amount_due/100+"")&&U(u,c),y&2&&f!==(f=new Date(I[4].created*1e3).toLocaleDateString()+"")&&U(m,f)},d(I){I&&g(e)}}}function Do(n){let e;return{c(){e=b("p"),e.textContent="No invoices found"},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function Rm(n){let e,t,r=!n[1]&&Po(n),i=n[1]&&No(n);return{c(){r&&r.c(),e=E(),i&&i.c(),t=ee(),this.c=k},m(o,s){r&&r.m(o,s),p(o,e,s),i&&i.m(o,s),p(o,t,s)},p(o,[s]){o[1]?r&&(r.d(1),r=null):r?r.p(o,s):(r=Po(o),r.c(),r.m(e.parentNode,e)),o[1]?i?i.p(o,s):(i=No(o),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null)},i:k,o:k,d(o){r&&r.d(o),o&&g(e),i&&i.d(o),o&&g(t)}}}function Om(n,e,t){let r=!1,i=null;async function o(){var l;t(0,r=!0);const a=(l=await ge({fn:"getInvoices",payload:{}}))!=null?l:[];console.log(a),t(1,i=a.data||[]),t(0,r=!1)}return[r,i,o,()=>t(1,i=null)]}class Pm extends G{constructor(e){super(),this.shadowRoot.innerHTML=`<style>button{display:inline-flex;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));padding-left:1.25rem;padding-right:1.25rem;padding-top:0.5rem;padding-bottom:0.5rem;text-align:center;font-family:sofia-pro, sans-serif;font-size:0.875rem;line-height:1.25rem;font-weight:700;text-transform:uppercase;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none
}button:hover{--tw-bg-opacity:1;background-color:rgb(37 99 235 / var(--tw-bg-opacity))
}button:active{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))
}a{--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity))
}</style>`,J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},Om,Rm,K,{},null),e&&e.target&&p(e.target,this,e.anchor)}}customElements.define("user-invoices",Pm);function Uo(n,e,t){const r=n.slice();return r[8]=e[t],r}function Fo(n){let e,t,r=n[0]?"loading...":"manage subscription",i,o,s,a=n[0]&&zo();return{c(){e=b("button"),a&&a.c(),t=E(),i=x(r)},m(l,c){p(l,e,c),a&&a.m(e,null),h(e,t),h(e,i),o||(s=P(e,"click",n[2]),o=!0)},p(l,c){l[0]?a||(a=zo(),a.c(),a.m(e,t)):a&&(a.d(1),a=null),c&1&&r!==(r=l[0]?"loading...":"manage subscription")&&U(i,r)},d(l){l&&g(e),a&&a.d(),o=!1,s()}}}function zo(n){let e;return{c(){e=b("loading-spinner")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function Ho(n){let e,t,r,i,o;function s(c,u){return c[1].length?Nm:Lm}let a=s(n),l=a(n);return{c(){e=b("button"),e.textContent="Hide Subscriptions",t=E(),l.c(),r=ee()},m(c,u){p(c,e,u),p(c,t,u),l.m(c,u),p(c,r,u),i||(o=P(e,"click",n[5]),i=!0)},p(c,u){a===(a=s(c))&&l?l.p(c,u):(l.d(1),l=a(c),l&&(l.c(),l.m(r.parentNode,r)))},d(c){c&&g(e),c&&g(t),l.d(c),c&&g(r),i=!1,o()}}}function Lm(n){let e;return{c(){e=b("p"),e.textContent="No subscriptions found"},m(t,r){p(t,e,r)},p:k,d(t){t&&g(e)}}}function Nm(n){let e,t=n[1],r=[];for(let i=0;i<t.length;i+=1)r[i]=Wo(Uo(n,t,i));return{c(){for(let i=0;i<r.length;i+=1)r[i].c();e=ee()},m(i,o){for(let s=0;s<r.length;s+=1)r[s].m(i,o);p(i,e,o)},p(i,o){if(o&27){t=i[1];let s;for(s=0;s<t.length;s+=1){const a=Uo(i,t,s);r[s]?r[s].p(a,o):(r[s]=Wo(a),r[s].c(),r[s].m(e.parentNode,e))}for(;s<r.length;s+=1)r[s].d(1);r.length=t.length}},d(i){tt(r,i),i&&g(e)}}}function Bo(n){let e,t,r=n[8].discount.coupon.percent_off+"",i,o,s=n[8].discount.coupon.duration+"",a;return{c(){e=b("p"),t=x("Discount: %"),i=x(r),o=x(" off "),a=x(s)},m(l,c){p(l,e,c),h(e,t),h(e,i),h(e,o),h(e,a)},p(l,c){c&2&&r!==(r=l[8].discount.coupon.percent_off+"")&&U(i,r),c&2&&s!==(s=l[8].discount.coupon.duration+"")&&U(a,s)},d(l){l&&g(e)}}}function jo(n){let e,t,r=vn(n[8].current_period_end)+"",i,o,s,a,l,c,u=n[0]&&Vo();function d(){return n[6](n[8])}return{c(){e=b("p"),t=x("Next payment "),i=x(r),o=E(),s=b("button"),u&&u.c(),a=x(`
            Cancel Subscription`),w(s,"class","cancel"),s.disabled=n[0]},m(f,m){p(f,e,m),h(e,t),h(e,i),p(f,o,m),p(f,s,m),u&&u.m(s,null),h(s,a),l||(c=P(s,"click",d),l=!0)},p(f,m){n=f,m&2&&r!==(r=vn(n[8].current_period_end)+"")&&U(i,r),n[0]?u||(u=Vo(),u.c(),u.m(s,a)):u&&(u.d(1),u=null),m&1&&(s.disabled=n[0])},d(f){f&&g(e),f&&g(o),f&&g(s),u&&u.d(),l=!1,c()}}}function Vo(n){let e;return{c(){e=b("loading-spinner")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function $o(n){let e,t,r=vn(n[8].cancel_at)+"",i,o,s,a,l,c,u=n[0]&&qo();function d(){return n[7](n[8])}return{c(){e=b("p"),t=x("Your subscription is canceled. PRO access will end "),i=x(r),o=E(),s=b("button"),u&&u.c(),a=x(`
            Undo Cancellation`),w(e,"class","warn"),w(s,"class","undo"),s.disabled=n[0]},m(f,m){p(f,e,m),h(e,t),h(e,i),p(f,o,m),p(f,s,m),u&&u.m(s,null),h(s,a),l||(c=P(s,"click",d),l=!0)},p(f,m){n=f,m&2&&r!==(r=vn(n[8].cancel_at)+"")&&U(i,r),n[0]?u||(u=qo(),u.c(),u.m(s,a)):u&&(u.d(1),u=null),m&1&&(s.disabled=n[0])},d(f){f&&g(e),f&&g(o),f&&g(s),u&&u.d(),l=!1,c()}}}function qo(n){let e;return{c(){e=b("loading-spinner")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function Wo(n){let e,t,r,i=n[8].id+"",o,s,a,l,c=n[8].status+"",u,d,f,m,_=n[8].plan.amount/100+"",I,y,S=n[8].plan.interval_count+"",L,v,R=(n[8].plan.interval_count>1?n[8].plan.interval+"s":n[8].plan.interval)+"",te,ne,D,B,j,q=n[8].discount&&Bo(n),z=!n[8].canceled_at&&jo(n),M=n[8].canceled_at&&n[8].status==="active"&&$o(n);return{c(){e=b("section"),t=b("h3"),r=x("ID: "),o=x(i),s=E(),a=b("p"),l=x("PRO Status: "),u=x(c),d=E(),f=b("p"),m=x("Plan: $"),I=x(_),y=x(` 
          per `),L=x(S),v=E(),te=x(R),ne=E(),q&&q.c(),D=E(),z&&z.c(),B=E(),M&&M.c(),j=E()},m(X,re){p(X,e,re),h(e,t),h(t,r),h(t,o),h(e,s),h(e,a),h(a,l),h(a,u),h(e,d),h(e,f),h(f,m),h(f,I),h(f,y),h(f,L),h(f,v),h(f,te),h(e,ne),q&&q.m(e,null),h(e,D),z&&z.m(e,null),h(e,B),M&&M.m(e,null),h(e,j)},p(X,re){re&2&&i!==(i=X[8].id+"")&&U(o,i),re&2&&c!==(c=X[8].status+"")&&U(u,c),re&2&&_!==(_=X[8].plan.amount/100+"")&&U(I,_),re&2&&S!==(S=X[8].plan.interval_count+"")&&U(L,S),re&2&&R!==(R=(X[8].plan.interval_count>1?X[8].plan.interval+"s":X[8].plan.interval)+"")&&U(te,R),X[8].discount?q?q.p(X,re):(q=Bo(X),q.c(),q.m(e,D)):q&&(q.d(1),q=null),X[8].canceled_at?z&&(z.d(1),z=null):z?z.p(X,re):(z=jo(X),z.c(),z.m(e,B)),X[8].canceled_at&&X[8].status==="active"?M?M.p(X,re):(M=$o(X),M.c(),M.m(e,j)):M&&(M.d(1),M=null)},d(X){X&&g(e),q&&q.d(),z&&z.d(),M&&M.d()}}}function Mm(n){let e,t,r=!n[1]&&Fo(n),i=n[1]&&Ho(n);return{c(){r&&r.c(),e=E(),i&&i.c(),t=ee(),this.c=k},m(o,s){r&&r.m(o,s),p(o,e,s),i&&i.m(o,s),p(o,t,s)},p(o,[s]){o[1]?r&&(r.d(1),r=null):r?r.p(o,s):(r=Fo(o),r.c(),r.m(e.parentNode,e)),o[1]?i?i.p(o,s):(i=Ho(o),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null)},i:k,o:k,d(o){r&&r.d(o),o&&g(e),i&&i.d(o),o&&g(t)}}}function vn(n){if(!n)return"never";let e=new Intl.RelativeTimeFormat("en",{numeric:"auto"}),t=-Math.floor((Date.now()-n*1e3)/1e3)/86400;return e.format(Math.floor(t),"day")}function Dm(n,e,t){let r=!1,i=null;async function o(){t(0,r=!0);const d=await ge({fn:"getSubscriptions",payload:{}});t(1,i=(d==null?void 0:d.data)||[]),console.log(i),t(0,r=!1)}async function s(d){t(0,r=!0),await ge({fn:"cancelSubscription",payload:{subscription:d}})&&(await o(),me.set({message:"Subscription canceled. It was fun while it lasted",type:"info"})),t(0,r=!1)}async function a(d){t(0,r=!0),await ge({fn:"unCancelSubscription",payload:{subscription:d}})&&(await o(),me.set({message:"Subscription reactivated!",type:"success"})),t(0,r=!1)}return[r,i,o,s,a,()=>t(1,i=null),d=>s(d.id),d=>a(d.id)]}class Um extends G{constructor(e){super(),this.shadowRoot.innerHTML=`<style>section{margin-top:1rem;margin-bottom:1rem;border-radius:0.5rem;--tw-bg-opacity:1;background-color:rgb(42 46 53 / var(--tw-bg-opacity));padding:1.5rem
}button{display:inline-flex;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));padding-left:1.25rem;padding-right:1.25rem;padding-top:0.5rem;padding-bottom:0.5rem;text-align:center;font-family:sofia-pro, sans-serif;font-size:0.875rem;line-height:1.25rem;font-weight:700;text-transform:uppercase;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none
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
}</style>`,J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},Dm,Mm,K,{},null),e&&e.target&&p(e.target,this,e.anchor)}}customElements.define("manage-subscription",Um);function Ko(n,e,t){const r=n.slice();return r[8]=e[t],r}function Go(n){let e,t,r=n[0]?"loading...":"update payment method",i,o,s,a=n[0]&&Yo();return{c(){e=b("button"),a&&a.c(),t=E(),i=x(r)},m(l,c){p(l,e,c),a&&a.m(e,null),h(e,t),h(e,i),o||(s=P(e,"click",n[3]),o=!0)},p(l,c){l[0]?a||(a=Yo(),a.c(),a.m(e,t)):a&&(a.d(1),a=null),c&1&&r!==(r=l[0]?"loading...":"update payment method")&&U(i,r)},d(l){l&&g(e),a&&a.d(),o=!1,s()}}}function Yo(n){let e;return{c(){e=b("loading-spinner")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function Jo(n){let e,t,r,i,o,s,a,l,c=n[0]?"loading...":"Add new card",u,d,f,m;function _(v,R){return v[1].length?zm:Fm}let I=_(n),y=I(n),S=n[0]&&Zo(),L=n[2]&&Qo(n);return{c(){e=b("button"),e.textContent="Hide Payment Methods",t=E(),r=b("div"),i=b("h3"),i.textContent="Payment Methods",o=E(),y.c(),s=E(),a=b("button"),S&&S.c(),l=E(),u=x(c),d=E(),L&&L.c(),w(a,"class","update"),w(r,"class","wrap")},m(v,R){p(v,e,R),p(v,t,R),p(v,r,R),h(r,i),h(r,o),y.m(r,null),h(r,s),h(r,a),S&&S.m(a,null),h(a,l),h(a,u),h(r,d),L&&L.m(r,null),f||(m=[P(e,"click",n[6]),P(a,"click",n[5])],f=!0)},p(v,R){I===(I=_(v))&&y?y.p(v,R):(y.d(1),y=I(v),y&&(y.c(),y.m(r,s))),v[0]?S||(S=Zo(),S.c(),S.m(a,l)):S&&(S.d(1),S=null),R&1&&c!==(c=v[0]?"loading...":"Add new card")&&U(u,c),v[2]?L?L.p(v,R):(L=Qo(v),L.c(),L.m(r,null)):L&&(L.d(1),L=null)},d(v){v&&g(e),v&&g(t),v&&g(r),y.d(),S&&S.d(),L&&L.d(),f=!1,fe(m)}}}function Fm(n){let e;return{c(){e=b("p"),e.textContent="No payment methods found"},m(t,r){p(t,e,r)},p:k,d(t){t&&g(e)}}}function zm(n){let e,t=n[1],r=[];for(let i=0;i<t.length;i+=1)r[i]=Xo(Ko(n,t,i));return{c(){e=b("ul");for(let i=0;i<r.length;i+=1)r[i].c()},m(i,o){p(i,e,o);for(let s=0;s<r.length;s+=1)r[s].m(e,null)},p(i,o){if(o&18){t=i[1];let s;for(s=0;s<t.length;s+=1){const a=Ko(i,t,s);r[s]?r[s].p(a,o):(r[s]=Xo(a),r[s].c(),r[s].m(e,null))}for(;s<r.length;s+=1)r[s].d(1);r.length=t.length}},d(i){i&&g(e),tt(r,i)}}}function Xo(n){let e,t=n[8].card.brand+"",r,i,o=n[8].card.last4+"",s,a,l=n[8].card.exp_month+"",c,u,d=n[8].card.exp_year+"",f,m,_,I,y,S;function L(){return n[7](n[8])}return{c(){e=b("li"),r=x(t),i=x(" ending in "),s=x(o),a=x(" expires "),c=x(l),u=x("/"),f=x(d),m=E(),_=b("span"),_.textContent="delete",I=E(),w(_,"class","warn")},m(v,R){p(v,e,R),h(e,r),h(e,i),h(e,s),h(e,a),h(e,c),h(e,u),h(e,f),h(e,m),h(e,_),h(e,I),y||(S=P(_,"click",L),y=!0)},p(v,R){n=v,R&2&&t!==(t=n[8].card.brand+"")&&U(r,t),R&2&&o!==(o=n[8].card.last4+"")&&U(s,o),R&2&&l!==(l=n[8].card.exp_month+"")&&U(c,l),R&2&&d!==(d=n[8].card.exp_year+"")&&U(f,d)},d(v){v&&g(e),y=!1,S()}}}function Zo(n){let e;return{c(){e=b("loading-spinner")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function Qo(n){let e,t;return{c(){e=b("a"),t=x("Card Update Screen"),w(e,"href",n[2])},m(r,i){p(r,e,i),h(e,t)},p(r,i){i&4&&w(e,"href",r[2])},d(r){r&&g(e)}}}function Hm(n){let e,t,r=!n[1]&&Go(n),i=n[1]&&Jo(n);return{c(){r&&r.c(),e=E(),i&&i.c(),t=ee(),this.c=k},m(o,s){r&&r.m(o,s),p(o,e,s),i&&i.m(o,s),p(o,t,s)},p(o,[s]){o[1]?r&&(r.d(1),r=null):r?r.p(o,s):(r=Go(o),r.c(),r.m(e.parentNode,e)),o[1]?i?i.p(o,s):(i=Jo(o),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null)},i:k,o:k,d(o){r&&r.d(o),o&&g(e),i&&i.d(o),o&&g(t)}}}function Bm(n,e,t){let r=!1,i,o;async function s(){t(0,r=!0);const d=await ge({fn:"getPaymentMethods",payload:{}});t(1,i=(d==null?void 0:d.data)||[]),t(0,r=!1)}async function a(d){t(0,r=!0),await ge({fn:"deletePaymentMethod",payload:{pm:d}})&&await s(),t(0,r=!1)}async function l(){var d;t(0,r=!0),t(2,o=await ge({fn:"createSetupSession",payload:{}})),o&&((d=window.open(o,"_blank"))==null||d.focus()),t(0,r=!1)}return[r,i,o,s,a,l,()=>t(1,i=null),d=>a(d.id)]}class jm extends G{constructor(e){super(),this.shadowRoot.innerHTML=`<style>button{display:inline-flex;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));padding-left:1.25rem;padding-right:1.25rem;padding-top:0.5rem;padding-bottom:0.5rem;text-align:center;font-family:sofia-pro, sans-serif;font-size:0.875rem;line-height:1.25rem;font-weight:700;text-transform:uppercase;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none
}button:hover{--tw-bg-opacity:1;background-color:rgb(37 99 235 / var(--tw-bg-opacity))
}button:active{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))
}.update{--tw-bg-opacity:1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))
}.update:hover{--tw-bg-opacity:1;background-color:rgb(22 163 74 / var(--tw-bg-opacity))
}.update:active{--tw-bg-opacity:1;background-color:rgb(21 128 61 / var(--tw-bg-opacity))
}a{display:block;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgb(59 130 246 / var(--tw-text-opacity))
}.warn{cursor:pointer;--tw-text-opacity:1;color:rgb(239 68 68 / var(--tw-text-opacity))
}.wrap{margin-top:4rem;margin-bottom:6rem
}</style>`,J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},Bm,Hm,K,{},null),e&&e.target&&p(e.target,this,e.anchor)}}customElements.define("update-payment",jm);function es(n){let e,t,r,i,o=n[1]&&ts();return{c(){e=b("button"),o&&o.c(),t=x(`
    update address`)},m(s,a){p(s,e,a),o&&o.m(e,null),h(e,t),r||(i=P(e,"click",n[6]),r=!0)},p(s,a){s[1]?o||(o=ts(),o.c(),o.m(e,t)):o&&(o.d(1),o=null)},d(s){s&&g(e),o&&o.d(),r=!1,i()}}}function ts(n){let e;return{c(){e=b("loading-spinner")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function ns(n){let e,t,r,i,o,s,a,l,c,u,d,f,m,_,I,y,S,L,v,R,te,ne,D,B,j,q,z,M,X,re,ue,we,He,ke,mt,gt=n[1]?"updating...":"save address",Ot,bt,en,Ie=n[1]&&rs();return{c(){e=b("button"),e.textContent="Hide Address",t=E(),r=b("p"),r.textContent="This form will update your address in stripe and be reflected on invoices",i=E(),o=b("form"),s=b("label"),s.textContent="Name",a=E(),l=b("input"),c=E(),u=b("label"),u.textContent="Line 1",d=E(),f=b("input"),m=E(),_=b("label"),_.textContent="Line 2",I=E(),y=b("input"),S=E(),L=b("label"),L.textContent="City",v=E(),R=b("input"),te=E(),ne=b("label"),ne.textContent="State",D=E(),B=b("input"),j=E(),q=b("label"),q.textContent="Postal Code",z=E(),M=b("input"),X=E(),re=b("label"),re.textContent="Country Code (2 Digit)",ue=E(),we=b("input"),He=E(),ke=b("button"),Ie&&Ie.c(),mt=E(),Ot=x(gt),w(s,"for","name"),w(l,"name","name"),w(l,"type","text"),w(l,"maxlength","100"),w(u,"for","line1"),w(f,"name","line1"),w(f,"type","text"),w(f,"maxlength","100"),w(_,"for","line2"),w(y,"name","line2"),w(y,"type","text"),w(y,"maxlength","100"),w(L,"for","city"),w(R,"name","city"),w(R,"type","text"),w(R,"maxlength","50"),w(ne,"for","state"),w(B,"name","state"),w(B,"type","text"),w(B,"maxlength","50"),w(q,"for","postal_code"),w(M,"name","postal_code"),w(M,"type","text"),w(M,"maxlength","20"),w(re,"for","country"),w(we,"name","country"),w(we,"type","text"),w(we,"maxlength","2"),w(ke,"class","update")},m(Q,pe){p(Q,e,pe),p(Q,t,pe),p(Q,r,pe),p(Q,i,pe),p(Q,o,pe),h(o,s),h(o,a),h(o,l),de(l,n[2]),h(o,c),h(o,u),h(o,d),h(o,f),de(f,n[3].line1),h(o,m),h(o,_),h(o,I),h(o,y),de(y,n[3].line2),h(o,S),h(o,L),h(o,v),h(o,R),de(R,n[3].city),h(o,te),h(o,ne),h(o,D),h(o,B),de(B,n[3].state),h(o,j),h(o,q),h(o,z),h(o,M),de(M,n[3].postal_code),h(o,X),h(o,re),h(o,ue),h(o,we),de(we,n[3].country),p(Q,He,pe),p(Q,ke,pe),Ie&&Ie.m(ke,null),h(ke,mt),h(ke,Ot),bt||(en=[P(e,"click",n[8]),P(l,"input",n[9]),P(f,"input",n[10]),P(y,"input",n[11]),P(R,"input",n[12]),P(B,"input",n[13]),P(M,"input",n[14]),P(we,"input",n[15]),P(ke,"click",n[7])],bt=!0)},p(Q,pe){pe&4&&l.value!==Q[2]&&de(l,Q[2]),pe&8&&f.value!==Q[3].line1&&de(f,Q[3].line1),pe&8&&y.value!==Q[3].line2&&de(y,Q[3].line2),pe&8&&R.value!==Q[3].city&&de(R,Q[3].city),pe&8&&B.value!==Q[3].state&&de(B,Q[3].state),pe&8&&M.value!==Q[3].postal_code&&de(M,Q[3].postal_code),pe&8&&we.value!==Q[3].country&&de(we,Q[3].country),Q[1]?Ie||(Ie=rs(),Ie.c(),Ie.m(ke,mt)):Ie&&(Ie.d(1),Ie=null),pe&2&&gt!==(gt=Q[1]?"updating...":"save address")&&U(Ot,gt)},d(Q){Q&&g(e),Q&&g(t),Q&&g(r),Q&&g(i),Q&&g(o),Q&&g(He),Q&&g(ke),Ie&&Ie.d(),bt=!1,fe(en)}}}function rs(n){let e;return{c(){e=b("loading-spinner")},m(t,r){p(t,e,r)},d(t){t&&g(e)}}}function Vm(n){let e,t,r=!n[0]&&es(n),i=n[0]&&ns(n);return{c(){r&&r.c(),e=E(),i&&i.c(),t=ee(),this.c=k},m(o,s){r&&r.m(o,s),p(o,e,s),i&&i.m(o,s),p(o,t,s)},p(o,[s]){o[0]?r&&(r.d(1),r=null):r?r.p(o,s):(r=es(o),r.c(),r.m(e.parentNode,e)),o[0]?i?i.p(o,s):(i=ns(o),i.c(),i.m(t.parentNode,t)):i&&(i.d(1),i=null)},i:k,o:k,d(o){r&&r.d(o),o&&g(e),i&&i.d(o),o&&g(t)}}}function $m(n,e,t){let r,i;const o=Te("");ie(n,o,v=>t(2,r=v));const s=Te({line1:"",line2:"",city:"",state:"",postal_code:"",country:""});ie(n,s,v=>t(3,i=v));let a=!1,l=!1;async function c(){t(1,l=!0);const v=await ge({fn:"getCustomer",payload:{}});v!=null&&v.name&&o.set(v.name),v!=null&&v.address&&s.set(v.address),t(1,l=!1),t(0,a=!0)}async function u(){t(1,l=!0),await ge({fn:"changeAddress",payload:{address:i,name:r}})&&(me.set({message:"Address updated",type:"success"}),t(0,a=!1)),t(1,l=!1)}const d=()=>t(0,a=!1);function f(){r=this.value,o.set(r)}function m(){i.line1=this.value,s.set(i)}function _(){i.line2=this.value,s.set(i)}function I(){i.city=this.value,s.set(i)}function y(){i.state=this.value,s.set(i)}function S(){i.postal_code=this.value,s.set(i)}function L(){i.country=this.value,s.set(i)}return[a,l,r,i,o,s,c,u,d,f,m,_,I,y,S,L]}class qm extends G{constructor(e){super(),this.shadowRoot.innerHTML=`<style>button{display:inline-flex;cursor:pointer;border-style:none;--tw-bg-opacity:1;background-color:rgb(59 130 246 / var(--tw-bg-opacity));padding-left:1.25rem;padding-right:1.25rem;padding-top:0.5rem;padding-bottom:0.5rem;text-align:center;font-family:sofia-pro, sans-serif;font-size:0.875rem;line-height:1.25rem;font-weight:700;text-transform:uppercase;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));-webkit-text-decoration-line:none;text-decoration-line:none
}button:hover{--tw-bg-opacity:1;background-color:rgb(37 99 235 / var(--tw-bg-opacity))
}button:active{--tw-bg-opacity:1;background-color:rgb(29 78 216 / var(--tw-bg-opacity))
}.update{margin-bottom:5rem;--tw-bg-opacity:1;background-color:rgb(34 197 94 / var(--tw-bg-opacity))
}.update:hover{--tw-bg-opacity:1;background-color:rgb(22 163 74 / var(--tw-bg-opacity))
}.update:active{--tw-bg-opacity:1;background-color:rgb(21 128 61 / var(--tw-bg-opacity))
}input{margin-right:0.75rem;margin-bottom:1rem;width:100%;border-style:solid;--tw-border-opacity:1;border-color:rgb(42 46 53 / var(--tw-border-opacity));--tw-bg-opacity:1;background-color:rgb(18 24 27 / var(--tw-bg-opacity));padding:0.75rem;font-family:sofia-pro, sans-serif;--tw-text-opacity:1;color:rgb(255 255 255 / var(--tw-text-opacity));outline:2px solid transparent;outline-offset:2px
}</style>`,J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},$m,Vm,K,{},null),e&&e.target&&p(e.target,this,e.anchor)}}customElements.define("update-address",qm);function Wm(n){let e,t,r;return{c(){e=Ln("svg"),t=Ln("circle"),r=Ln("path"),this.c=k,w(t,"cx","12"),w(t,"cy","12"),w(t,"r","10"),w(t,"stroke","currentColor"),w(t,"stroke-width","4"),w(r,"fill","currentColor"),w(r,"d","M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"),w(e,"xmlns","http://www.w3.org/2000/svg"),w(e,"fill","none"),w(e,"viewBox","0 0 24 24")},m(i,o){p(i,e,o),h(e,t),h(e,r)},p:k,i:k,o:k,d(i){i&&g(e)}}}class Km extends G{constructor(e){super(),this.shadowRoot.innerHTML=`<style>svg{margin-left:0.25rem;margin-right:0.25rem;width:0.875rem
}@-webkit-keyframes spin{to{transform:rotate(360deg)
    }}@keyframes spin{to{transform:rotate(360deg)
    }}svg{-webkit-animation:spin 1s linear infinite;animation:spin 1s linear infinite
}circle{opacity:0.25
}path{opacity:0.75
}</style>`,J(this,{target:this.shadowRoot,props:Y(this.attributes),customElement:!0},null,Wm,K,{},null),e&&e.target&&p(e.target,this,e.anchor)}}customElements.define("loading-spinner",Km);console.log(`%c  

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
                                                 888      `,"font-family:monospace; color: orange;");window.addEventListener("flamethrower:router:end",n=>{Kf()});Qf();Xf();const sr=Fa({prefetch:"hover",log:!1});export{Ue as C,ze as F,se as L,In as S,Ct as _,wc as a,qe as b,Ym as c,Vt as d,Qm as e,cr as f,Ge as g,be as h,hs as i,Zm as j,sl as k,ll as l,Jm as m,cl as n,Xm as o,ps as p,eg as q,Ne as r};
