import{l as Y}from"./index.e9891418.js";function L(o,r){for(var e=0;e<r.length;e++){const a=r[e];if(typeof a!="string"&&!Array.isArray(a)){for(const l in a)if(l!=="default"&&!(l in o)){const s=Object.getOwnPropertyDescriptor(a,l);s&&Object.defineProperty(o,l,s.get?s:{enumerable:!0,get:()=>a[l]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}var S={exports:{}},V;/**
* @link https://github.com/gajus/sister for the canonical source repository
* @license https://github.com/gajus/sister/blob/master/LICENSE BSD 3-Clause
*/V=function(){var o={},r={};return o.on=function(e,a){var l={name:e,handler:a};return r[e]=r[e]||[],r[e].unshift(l),l},o.off=function(e){var a=r[e.name].indexOf(e);a!==-1&&r[e.name].splice(a,1)},o.trigger=function(e,a){var l=r[e],s;if(l)for(s=l.length;s--;)l[s].handler(a)},o};var U=V,x={exports:{}},M={exports:{}},E,k;function q(){if(k)return E;k=1;var o=1e3,r=o*60,e=r*60,a=e*24,l=a*7,s=a*365.25;E=function(t,n){n=n||{};var i=typeof t;if(i==="string"&&t.length>0)return h(t);if(i==="number"&&isFinite(t))return n.long?u(t):g(t);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(t))};function h(t){if(t=String(t),!(t.length>100)){var n=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(t);if(!!n){var i=parseFloat(n[1]),f=(n[2]||"ms").toLowerCase();switch(f){case"years":case"year":case"yrs":case"yr":case"y":return i*s;case"weeks":case"week":case"w":return i*l;case"days":case"day":case"d":return i*a;case"hours":case"hour":case"hrs":case"hr":case"h":return i*e;case"minutes":case"minute":case"mins":case"min":case"m":return i*r;case"seconds":case"second":case"secs":case"sec":case"s":return i*o;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return i;default:return}}}}function g(t){var n=Math.abs(t);return n>=a?Math.round(t/a)+"d":n>=e?Math.round(t/e)+"h":n>=r?Math.round(t/r)+"m":n>=o?Math.round(t/o)+"s":t+"ms"}function u(t){var n=Math.abs(t);return n>=a?C(t,n,a,"day"):n>=e?C(t,n,e,"hour"):n>=r?C(t,n,r,"minute"):n>=o?C(t,n,o,"second"):t+" ms"}function C(t,n,i,f){var m=n>=i*1.5;return Math.round(t/i)+" "+f+(m?"s":"")}return E}function j(o){e.debug=e,e.default=e,e.coerce=u,e.disable=s,e.enable=l,e.enabled=h,e.humanize=q(),e.destroy=C,Object.keys(o).forEach(t=>{e[t]=o[t]}),e.names=[],e.skips=[],e.formatters={};function r(t){let n=0;for(let i=0;i<t.length;i++)n=(n<<5)-n+t.charCodeAt(i),n|=0;return e.colors[Math.abs(n)%e.colors.length]}e.selectColor=r;function e(t){let n,i=null,f,m;function d(...c){if(!d.enabled)return;const p=d,y=Number(new Date),v=y-(n||y);p.diff=v,p.prev=n,p.curr=y,n=y,c[0]=e.coerce(c[0]),typeof c[0]!="string"&&c.unshift("%O");let F=0;c[0]=c[0].replace(/%([a-zA-Z%])/g,(w,b)=>{if(w==="%%")return"%";F++;const P=e.formatters[b];if(typeof P=="function"){const _=c[F];w=P.call(p,_),c.splice(F,1),F--}return w}),e.formatArgs.call(p,c),(p.log||e.log).apply(p,c)}return d.namespace=t,d.useColors=e.useColors(),d.color=e.selectColor(t),d.extend=a,d.destroy=e.destroy,Object.defineProperty(d,"enabled",{enumerable:!0,configurable:!1,get:()=>i!==null?i:(f!==e.namespaces&&(f=e.namespaces,m=e.enabled(t)),m),set:c=>{i=c}}),typeof e.init=="function"&&e.init(d),d}function a(t,n){const i=e(this.namespace+(typeof n>"u"?":":n)+t);return i.log=this.log,i}function l(t){e.save(t),e.namespaces=t,e.names=[],e.skips=[];let n;const i=(typeof t=="string"?t:"").split(/[\s,]+/),f=i.length;for(n=0;n<f;n++)!i[n]||(t=i[n].replace(/\*/g,".*?"),t[0]==="-"?e.skips.push(new RegExp("^"+t.slice(1)+"$")):e.names.push(new RegExp("^"+t+"$")))}function s(){const t=[...e.names.map(g),...e.skips.map(g).map(n=>"-"+n)].join(",");return e.enable(""),t}function h(t){if(t[t.length-1]==="*")return!0;let n,i;for(n=0,i=e.skips.length;n<i;n++)if(e.skips[n].test(t))return!1;for(n=0,i=e.names.length;n<i;n++)if(e.names[n].test(t))return!0;return!1}function g(t){return t.toString().substring(2,t.toString().length-2).replace(/\.\*\?$/,"*")}function u(t){return t instanceof Error?t.stack||t.message:t}function C(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")}return e.enable(e.load()),e}var B=j;(function(o,r){r.formatArgs=a,r.save=l,r.load=s,r.useColors=e,r.storage=h(),r.destroy=(()=>{let u=!1;return()=>{u||(u=!0,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))}})(),r.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"];function e(){return typeof window<"u"&&window.process&&(window.process.type==="renderer"||window.process.__nwjs)?!0:typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)?!1:typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}function a(u){if(u[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+u[0]+(this.useColors?"%c ":" ")+"+"+o.exports.humanize(this.diff),!this.useColors)return;const C="color: "+this.color;u.splice(1,0,C,"color: inherit");let t=0,n=0;u[0].replace(/%[a-zA-Z%]/g,i=>{i!=="%%"&&(t++,i==="%c"&&(n=t))}),u.splice(n,0,C)}r.log=console.debug||console.log||(()=>{});function l(u){try{u?r.storage.setItem("debug",u):r.storage.removeItem("debug")}catch{}}function s(){let u;try{u=r.storage.getItem("debug")}catch{}return!u&&typeof process<"u"&&"env"in process&&(u={}.DEBUG),u}function h(){try{return localStorage}catch{}}o.exports=B(r);const{formatters:g}=o.exports;g.j=function(u){try{return JSON.stringify(u)}catch(C){return"[UnexpectedJSONParseError]: "+C.message}}})(M,M.exports);var O={exports:{}},D={exports:{}};(function(o,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default={BUFFERING:3,ENDED:0,PAUSED:2,PLAYING:1,UNSTARTED:-1,VIDEO_CUED:5},o.exports=r.default})(D,D.exports);(function(o,r){Object.defineProperty(r,"__esModule",{value:!0});var e=D.exports,a=l(e);function l(s){return s&&s.__esModule?s:{default:s}}r.default={pauseVideo:{acceptableStates:[a.default.ENDED,a.default.PAUSED],stateChangeRequired:!1},playVideo:{acceptableStates:[a.default.ENDED,a.default.PLAYING],stateChangeRequired:!1},seekTo:{acceptableStates:[a.default.ENDED,a.default.PLAYING,a.default.PAUSED],stateChangeRequired:!0,timeout:3e3}},o.exports=r.default})(O,O.exports);var N={exports:{}};(function(o,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=["ready","stateChange","playbackQualityChange","playbackRateChange","error","apiChange","volumeChange"],o.exports=r.default})(N,N.exports);var I={exports:{}};(function(o,r){Object.defineProperty(r,"__esModule",{value:!0}),r.default=["cueVideoById","loadVideoById","cueVideoByUrl","loadVideoByUrl","playVideo","pauseVideo","stopVideo","getVideoLoadedFraction","cuePlaylist","loadPlaylist","nextVideo","previousVideo","playVideoAt","setShuffle","setLoop","getPlaylist","getPlaylistIndex","setOption","mute","unMute","isMuted","setVolume","getVolume","seekTo","getPlayerState","getPlaybackRate","setPlaybackRate","getAvailablePlaybackRates","getPlaybackQuality","setPlaybackQuality","getAvailableQualityLevels","getCurrentTime","getDuration","removeEventListener","getVideoUrl","getVideoEmbedCode","getOptions","getOption","addEventListener","destroy","setSize","getIframe","getSphericalProperties","setSphericalProperties"],o.exports=r.default})(I,I.exports);(function(o,r){Object.defineProperty(r,"__esModule",{value:!0});var e=M.exports,a=t(e),l=O.exports,s=t(l),h=N.exports,g=t(h),u=I.exports,C=t(u);function t(f){return f&&f.__esModule?f:{default:f}}const n=(0,a.default)("youtube-player"),i={};i.proxyEvents=f=>{const m={};for(const d of g.default){const c="on"+d.slice(0,1).toUpperCase()+d.slice(1);m[c]=p=>{n('event "%s"',c,p),f.trigger(d,p)}}return m},i.promisifyPlayer=(f,m=!1)=>{const d={};for(const c of C.default)m&&s.default[c]?d[c]=(...p)=>f.then(y=>{const v=s.default[c],F=y.getPlayerState(),A=y[c].apply(y,p);return v.stateChangeRequired||Array.isArray(v.acceptableStates)&&!v.acceptableStates.includes(F)?new Promise(w=>{const b=()=>{const P=y.getPlayerState();let _;typeof v.timeout=="number"&&(_=setTimeout(()=>{y.removeEventListener("onStateChange",b),w()},v.timeout)),Array.isArray(v.acceptableStates)&&v.acceptableStates.includes(P)&&(y.removeEventListener("onStateChange",b),clearTimeout(_),w())};y.addEventListener("onStateChange",b)}).then(()=>A):A}):d[c]=(...p)=>f.then(y=>y[c].apply(y,p));return d},r.default=i,o.exports=r.default})(x,x.exports);var T={exports:{}},z=function(r,e,a){var l=document.head||document.getElementsByTagName("head")[0],s=document.createElement("script");typeof e=="function"&&(a=e,e={}),e=e||{},a=a||function(){},s.type=e.type||"text/javascript",s.charset=e.charset||"utf8",s.async="async"in e?!!e.async:!0,s.src=r,e.attrs&&$(s,e.attrs),e.text&&(s.text=""+e.text);var h="onload"in s?R:G;h(s,a),s.onload||R(s,a),l.appendChild(s)};function $(o,r){for(var e in r)o.setAttribute(e,r[e])}function R(o,r){o.onload=function(){this.onerror=this.onload=null,r(null,o)},o.onerror=function(){this.onerror=this.onload=null,r(new Error("Failed to load "+this.src),o)}}function G(o,r){o.onreadystatechange=function(){this.readyState!="complete"&&this.readyState!="loaded"||(this.onreadystatechange=null,r(null,o))}}(function(o,r){Object.defineProperty(r,"__esModule",{value:!0});var e=z,a=l(e);function l(s){return s&&s.__esModule?s:{default:s}}r.default=s=>new Promise(g=>{if(window.YT&&window.YT.Player&&window.YT.Player instanceof Function){g(window.YT);return}else{const C=window.location.protocol==="http:"?"http:":"https:";(0,a.default)(C+"//www.youtube.com/iframe_api",t=>{t&&s.trigger("error",t)})}const u=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=()=>{u&&u(),g(window.YT)}}),o.exports=r.default})(T,T.exports);(function(o,r){Object.defineProperty(r,"__esModule",{value:!0});var e=U,a=u(e),l=x.exports,s=u(l),h=T.exports,g=u(h);function u(t){return t&&t.__esModule?t:{default:t}}let C;r.default=(t,n={},i=!1)=>{const f=(0,a.default)();if(C||(C=(0,g.default)(f)),n.events)throw new Error("Event handlers cannot be overwritten.");if(typeof t=="string"&&!document.getElementById(t))throw new Error('Element "'+t+'" does not exist.');n.events=s.default.proxyEvents(f);const m=new Promise(c=>{typeof t=="object"&&t.playVideo instanceof Function?c(t):C.then(p=>{const y=new p.Player(t,n);return f.on("ready",()=>{c(y)}),null})}),d=s.default.promisifyPlayer(m,i);return d.on=f.on,d.off=f.off,d},o.exports=r.default})(S,S.exports);const Q=Y(S.exports),Z=L({__proto__:null,default:Q},[S.exports]);export{Z as i};
