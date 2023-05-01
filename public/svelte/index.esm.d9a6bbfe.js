import{L as Bt,F as Sh,d as bh,g as oe,_ as gu,e as pu,b as xh,a as Dh,f as Ch,S as Ah,c as Nh,C as _h,r as Jo,h as kh,i as ti,j as Rh,k as Mh}from"./index.e9891418.js";var Lh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},S,Mi=Mi||{},A=Lh||self;function qs(){}function or(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function Yn(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function Fh(n){return Object.prototype.hasOwnProperty.call(n,$r)&&n[$r]||(n[$r]=++Oh)}var $r="closure_uid_"+(1e9*Math.random()>>>0),Oh=0;function Ph(n,e,t){return n.call.apply(n.bind,arguments)}function Vh(n,e,t){if(!n)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),n.apply(e,r)}}return function(){return n.apply(e,arguments)}}function me(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?me=Ph:me=Vh,me.apply(null,arguments)}function vs(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var s=t.slice();return s.push.apply(s,arguments),n.apply(this,s)}}function de(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[r].apply(s,o)}}function et(){this.s=this.s,this.o=this.o}var qh=0;et.prototype.s=!1;et.prototype.na=function(){!this.s&&(this.s=!0,this.M(),qh!=0)&&Fh(this)};et.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const yu=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Li(n){const e=n.length;if(0<e){const t=Array(e);for(let s=0;s<e;s++)t[s]=n[s];return t}return[]}function Zo(n,e){for(let t=1;t<arguments.length;t++){const s=arguments[t];if(or(s)){const r=n.length||0,i=s.length||0;n.length=r+i;for(let o=0;o<i;o++)n[r+o]=s[o]}else n.push(s)}}function ge(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}ge.prototype.h=function(){this.defaultPrevented=!0};var Uh=function(){if(!A.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{A.addEventListener("test",qs,e),A.removeEventListener("test",qs,e)}catch{}return n}();function Us(n){return/^[\s\xa0]*$/.test(n)}var ea=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function zr(n,e){return n<e?-1:n>e?1:0}function ar(){var n=A.navigator;return n&&(n=n.userAgent)?n:""}function Ae(n){return ar().indexOf(n)!=-1}function Fi(n){return Fi[" "](n),n}Fi[" "]=qs;function Bh(n){var e=Gh;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var $h=Ae("Opera"),$t=Ae("Trident")||Ae("MSIE"),wu=Ae("Edge"),ni=wu||$t,vu=Ae("Gecko")&&!(ar().toLowerCase().indexOf("webkit")!=-1&&!Ae("Edge"))&&!(Ae("Trident")||Ae("MSIE"))&&!Ae("Edge"),zh=ar().toLowerCase().indexOf("webkit")!=-1&&!Ae("Edge");function Iu(){var n=A.document;return n?n.documentMode:void 0}var Bs;e:{var Gr="",Kr=function(){var n=ar();if(vu)return/rv:([^\);]+)(\)|;)/.exec(n);if(wu)return/Edge\/([\d\.]+)/.exec(n);if($t)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(zh)return/WebKit\/(\S+)/.exec(n);if($h)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Kr&&(Gr=Kr?Kr[1]:""),$t){var jr=Iu();if(jr!=null&&jr>parseFloat(Gr)){Bs=String(jr);break e}}Bs=Gr}var Gh={};function Kh(){return Bh(function(){let n=0;const e=ea(String(Bs)).split("."),t=ea("9").split("."),s=Math.max(e.length,t.length);for(let o=0;n==0&&o<s;o++){var r=e[o]||"",i=t[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;n=zr(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||zr(r[2].length==0,i[2].length==0)||zr(r[2],i[2]),r=r[3],i=i[3]}while(n==0)}return 0<=n})}var si;if(A.document&&$t){var ta=Iu();si=ta||parseInt(Bs,10)||void 0}else si=void 0;var jh=si;function Rn(n,e){if(ge.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,s=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(vu){e:{try{Fi(e.nodeName);var r=!0;break e}catch{}r=!1}r||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:Qh[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Rn.X.h.call(this)}}de(Rn,ge);var Qh={2:"touch",3:"pen",4:"mouse"};Rn.prototype.h=function(){Rn.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Xn="closure_listenable_"+(1e6*Math.random()|0),Wh=0;function Hh(n,e,t,s,r){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!s,this.ha=r,this.key=++Wh,this.ba=this.ea=!1}function ur(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function Oi(n,e,t){for(const s in n)e.call(t,n[s],s,n)}function Tu(n){const e={};for(const t in n)e[t]=n[t];return e}const na="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Eu(n,e){let t,s;for(let r=1;r<arguments.length;r++){s=arguments[r];for(t in s)n[t]=s[t];for(let i=0;i<na.length;i++)t=na[i],Object.prototype.hasOwnProperty.call(s,t)&&(n[t]=s[t])}}function cr(n){this.src=n,this.g={},this.h=0}cr.prototype.add=function(n,e,t,s,r){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=ii(n,e,s,r);return-1<o?(e=n[o],t||(e.ea=!1)):(e=new Hh(e,this.src,i,!!s,r),e.ea=t,n.push(e)),e};function ri(n,e){var t=e.type;if(t in n.g){var s=n.g[t],r=yu(s,e),i;(i=0<=r)&&Array.prototype.splice.call(s,r,1),i&&(ur(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function ii(n,e,t,s){for(var r=0;r<n.length;++r){var i=n[r];if(!i.ba&&i.listener==e&&i.capture==!!t&&i.ha==s)return r}return-1}var Pi="closure_lm_"+(1e6*Math.random()|0),Qr={};function Su(n,e,t,s,r){if(s&&s.once)return xu(n,e,t,s,r);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Su(n,e[i],t,s,r);return null}return t=Ui(t),n&&n[Xn]?n.N(e,t,Yn(s)?!!s.capture:!!s,r):bu(n,e,t,!1,s,r)}function bu(n,e,t,s,r,i){if(!e)throw Error("Invalid event type");var o=Yn(r)?!!r.capture:!!r,a=qi(n);if(a||(n[Pi]=a=new cr(n)),t=a.add(e,t,s,o,i),t.proxy)return t;if(s=Yh(),t.proxy=s,s.src=n,s.listener=t,n.addEventListener)Uh||(r=o),r===void 0&&(r=!1),n.addEventListener(e.toString(),s,r);else if(n.attachEvent)n.attachEvent(Cu(e.toString()),s);else if(n.addListener&&n.removeListener)n.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return t}function Yh(){function n(t){return e.call(n.src,n.listener,t)}const e=Xh;return n}function xu(n,e,t,s,r){if(Array.isArray(e)){for(var i=0;i<e.length;i++)xu(n,e[i],t,s,r);return null}return t=Ui(t),n&&n[Xn]?n.O(e,t,Yn(s)?!!s.capture:!!s,r):bu(n,e,t,!0,s,r)}function Du(n,e,t,s,r){if(Array.isArray(e))for(var i=0;i<e.length;i++)Du(n,e[i],t,s,r);else s=Yn(s)?!!s.capture:!!s,t=Ui(t),n&&n[Xn]?(n=n.i,e=String(e).toString(),e in n.g&&(i=n.g[e],t=ii(i,t,s,r),-1<t&&(ur(i[t]),Array.prototype.splice.call(i,t,1),i.length==0&&(delete n.g[e],n.h--)))):n&&(n=qi(n))&&(e=n.g[e.toString()],n=-1,e&&(n=ii(e,t,s,r)),(t=-1<n?e[n]:null)&&Vi(t))}function Vi(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[Xn])ri(e.i,n);else{var t=n.type,s=n.proxy;e.removeEventListener?e.removeEventListener(t,s,n.capture):e.detachEvent?e.detachEvent(Cu(t),s):e.addListener&&e.removeListener&&e.removeListener(s),(t=qi(e))?(ri(t,n),t.h==0&&(t.src=null,e[Pi]=null)):ur(n)}}}function Cu(n){return n in Qr?Qr[n]:Qr[n]="on"+n}function Xh(n,e){if(n.ba)n=!0;else{e=new Rn(e,this);var t=n.listener,s=n.ha||n.src;n.ea&&Vi(n),n=t.call(s,e)}return n}function qi(n){return n=n[Pi],n instanceof cr?n:null}var Wr="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ui(n){return typeof n=="function"?n:(n[Wr]||(n[Wr]=function(e){return n.handleEvent(e)}),n[Wr])}function ae(){et.call(this),this.i=new cr(this),this.P=this,this.I=null}de(ae,et);ae.prototype[Xn]=!0;ae.prototype.removeEventListener=function(n,e,t,s){Du(this,n,e,t,s)};function le(n,e){var t,s=n.I;if(s)for(t=[];s;s=s.I)t.push(s);if(n=n.P,s=e.type||e,typeof e=="string")e=new ge(e,n);else if(e instanceof ge)e.target=e.target||n;else{var r=e;e=new ge(s,n),Eu(e,r)}if(r=!0,t)for(var i=t.length-1;0<=i;i--){var o=e.g=t[i];r=Is(o,s,!0,e)&&r}if(o=e.g=n,r=Is(o,s,!0,e)&&r,r=Is(o,s,!1,e)&&r,t)for(i=0;i<t.length;i++)o=e.g=t[i],r=Is(o,s,!1,e)&&r}ae.prototype.M=function(){if(ae.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],s=0;s<t.length;s++)ur(t[s]);delete n.g[e],n.h--}}this.I=null};ae.prototype.N=function(n,e,t,s){return this.i.add(String(n),e,!1,t,s)};ae.prototype.O=function(n,e,t,s){return this.i.add(String(n),e,!0,t,s)};function Is(n,e,t,s){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var r=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==t){var a=o.listener,u=o.ha||o.src;o.ea&&ri(n.i,o),r=a.call(u,s)!==!1&&r}}return r&&!s.defaultPrevented}var Bi=A.JSON.stringify;function Jh(){var n=_u;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class Zh{constructor(){this.h=this.g=null}add(e,t){const s=Au.get();s.set(e,t),this.h?this.h.next=s:this.g=s,this.h=s}}var Au=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new ed,n=>n.reset());class ed{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function td(n){A.setTimeout(()=>{throw n},0)}function Nu(n,e){oi||nd(),ai||(oi(),ai=!0),_u.add(n,e)}var oi;function nd(){var n=A.Promise.resolve(void 0);oi=function(){n.then(sd)}}var ai=!1,_u=new Zh;function sd(){for(var n;n=Jh();){try{n.h.call(n.g)}catch(t){td(t)}var e=Au;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}ai=!1}function lr(n,e){ae.call(this),this.h=n||1,this.g=e||A,this.j=me(this.lb,this),this.l=Date.now()}de(lr,ae);S=lr.prototype;S.ca=!1;S.R=null;S.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),le(this,"tick"),this.ca&&($i(this),this.start()))}};S.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function $i(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}S.M=function(){lr.X.M.call(this),$i(this),delete this.g};function zi(n,e,t){if(typeof n=="function")t&&(n=me(n,t));else if(n&&typeof n.handleEvent=="function")n=me(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:A.setTimeout(n,e||0)}function ku(n){n.g=zi(()=>{n.g=null,n.i&&(n.i=!1,ku(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class rd extends et{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:ku(this)}M(){super.M(),this.g&&(A.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Mn(n){et.call(this),this.h=n,this.g={}}de(Mn,et);var sa=[];function Ru(n,e,t,s){Array.isArray(t)||(t&&(sa[0]=t.toString()),t=sa);for(var r=0;r<t.length;r++){var i=Su(e,t[r],s||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function Mu(n){Oi(n.g,function(e,t){this.g.hasOwnProperty(t)&&Vi(e)},n),n.g={}}Mn.prototype.M=function(){Mn.X.M.call(this),Mu(this)};Mn.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function hr(){this.g=!0}hr.prototype.Aa=function(){this.g=!1};function id(n,e,t,s,r,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var l=c[0];c=c[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+c+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+s+") [attempt "+r+"]: "+e+`
`+t+`
`+o})}function od(n,e,t,s,r,i,o){n.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+r+"]: "+e+`
`+t+`
`+i+" "+o})}function Vt(n,e,t,s){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+ud(n,t)+(s?" "+s:"")})}function ad(n,e){n.info(function(){return"TIMEOUT: "+e})}hr.prototype.info=function(){};function ud(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var s=t[n];if(!(2>s.length)){var r=s[1];if(Array.isArray(r)&&!(1>r.length)){var i=r[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<r.length;o++)r[o]=""}}}}return Bi(t)}catch{return e}}var At={},ra=null;function dr(){return ra=ra||new ae}At.Pa="serverreachability";function Lu(n){ge.call(this,At.Pa,n)}de(Lu,ge);function Ln(n){const e=dr();le(e,new Lu(e))}At.STAT_EVENT="statevent";function Fu(n,e){ge.call(this,At.STAT_EVENT,n),this.stat=e}de(Fu,ge);function ye(n){const e=dr();le(e,new Fu(e,n))}At.Qa="timingevent";function Ou(n,e){ge.call(this,At.Qa,n),this.size=e}de(Ou,ge);function Jn(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return A.setTimeout(function(){n()},e)}var fr={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Pu={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Gi(){}Gi.prototype.h=null;function ia(n){return n.h||(n.h=n.i())}function Vu(){}var Zn={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Ki(){ge.call(this,"d")}de(Ki,ge);function ji(){ge.call(this,"c")}de(ji,ge);var ui;function mr(){}de(mr,Gi);mr.prototype.g=function(){return new XMLHttpRequest};mr.prototype.i=function(){return{}};ui=new mr;function es(n,e,t,s){this.l=n,this.j=e,this.m=t,this.U=s||1,this.S=new Mn(this),this.O=cd,n=ni?125:void 0,this.T=new lr(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new qu}function qu(){this.i=null,this.g="",this.h=!1}var cd=45e3,ci={},$s={};S=es.prototype;S.setTimeout=function(n){this.O=n};function li(n,e,t){n.K=1,n.v=pr(Fe(e)),n.s=t,n.P=!0,Uu(n,null)}function Uu(n,e){n.F=Date.now(),ts(n),n.A=Fe(n.v);var t=n.A,s=n.U;Array.isArray(s)||(s=[String(s)]),Wu(t.i,"t",s),n.C=0,t=n.l.H,n.h=new qu,n.g=gc(n.l,t?e:null,!n.s),0<n.N&&(n.L=new rd(me(n.La,n,n.g),n.N)),Ru(n.S,n.g,"readystatechange",n.ib),e=n.H?Tu(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),Ln(),id(n.j,n.u,n.A,n.m,n.U,n.s)}S.ib=function(n){n=n.target;const e=this.L;e&&Le(n)==3?e.l():this.La(n)};S.La=function(n){try{if(n==this.g)e:{const l=Le(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||ni||this.g&&(this.h.h||this.g.fa()||ca(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Ln(3):Ln(2)),gr(this);var t=this.g.aa();this.Y=t;t:if(Bu(this)){var s=ca(this.g);n="";var r=s.length,i=Le(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){dt(this),Dn(this);var o="";break t}this.h.i=new A.TextDecoder}for(e=0;e<r;e++)this.h.h=!0,n+=this.h.i.decode(s[e],{stream:i&&e==r-1});s.splice(0,r),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=t==200,od(this.j,this.u,this.A,this.m,this.U,l,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Us(a)){var c=a;break t}}c=null}if(t=c)Vt(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,hi(this,t);else{this.i=!1,this.o=3,ye(12),dt(this),Dn(this);break e}}this.P?($u(this,l,o),ni&&this.i&&l==3&&(Ru(this.S,this.T,"tick",this.hb),this.T.start())):(Vt(this.j,this.m,o,null),hi(this,o)),l==4&&dt(this),this.i&&!this.I&&(l==4?hc(this.l,this):(this.i=!1,ts(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,ye(12)):(this.o=0,ye(13)),dt(this),Dn(this)}}}catch{}finally{}};function Bu(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function $u(n,e,t){let s=!0,r;for(;!n.I&&n.C<t.length;)if(r=ld(n,t),r==$s){e==4&&(n.o=4,ye(14),s=!1),Vt(n.j,n.m,null,"[Incomplete Response]");break}else if(r==ci){n.o=4,ye(15),Vt(n.j,n.m,t,"[Invalid Chunk]"),s=!1;break}else Vt(n.j,n.m,r,null),hi(n,r);Bu(n)&&r!=$s&&r!=ci&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,ye(16),s=!1),n.i=n.i&&s,s?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),Zi(e),e.K=!0,ye(11))):(Vt(n.j,n.m,t,"[Invalid Chunked Response]"),dt(n),Dn(n))}S.hb=function(){if(this.g){var n=Le(this.g),e=this.g.fa();this.C<e.length&&(gr(this),$u(this,n,e),this.i&&n!=4&&ts(this))}};function ld(n,e){var t=n.C,s=e.indexOf(`
`,t);return s==-1?$s:(t=Number(e.substring(t,s)),isNaN(t)?ci:(s+=1,s+t>e.length?$s:(e=e.substr(s,t),n.C=s+t,e)))}S.cancel=function(){this.I=!0,dt(this)};function ts(n){n.V=Date.now()+n.O,zu(n,n.O)}function zu(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Jn(me(n.gb,n),e)}function gr(n){n.B&&(A.clearTimeout(n.B),n.B=null)}S.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(ad(this.j,this.A),this.K!=2&&(Ln(),ye(17)),dt(this),this.o=2,Dn(this)):zu(this,this.V-n)};function Dn(n){n.l.G==0||n.I||hc(n.l,n)}function dt(n){gr(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,$i(n.T),Mu(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function hi(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||di(t.h,n))){if(!n.J&&di(t.h,n)&&t.G==3){try{var s=t.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)Ks(t),vr(t);else break e;Ji(t),ye(18)}}else t.Ba=r[1],0<t.Ba-t.T&&37500>r[2]&&t.L&&t.A==0&&!t.v&&(t.v=Jn(me(t.cb,t),6e3));if(1>=Xu(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else ft(t,11)}else if((n.J||t.g==n)&&Ks(t),!Us(e))for(r=t.Fa.g.parse(e),e=0;e<r.length;e++){let c=r[e];if(t.T=c[0],c=c[1],t.G==2)if(c[0]=="c"){t.I=c[1],t.ka=c[2];const l=c[3];l!=null&&(t.ma=l,t.j.info("VER="+t.ma));const h=c[4];h!=null&&(t.Ca=h,t.j.info("SVER="+t.Ca));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(s=1.5*d,t.J=s,t.j.info("backChannelRequestTimeoutMs_="+s)),s=t;const g=n.g;if(g){const w=g.g?g.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var i=s.h;i.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Qi(i,i.h),i.h=null))}if(s.D){const T=g.g?g.g.getResponseHeader("X-HTTP-Session-Id"):null;T&&(s.za=T,U(s.F,s.D,T))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),s=t;var o=n;if(s.sa=mc(s,s.H?s.ka:null,s.V),o.J){Ju(s.h,o);var a=o,u=s.J;u&&a.setTimeout(u),a.B&&(gr(a),ts(a)),s.g=o}else cc(s);0<t.i.length&&Ir(t)}else c[0]!="stop"&&c[0]!="close"||ft(t,7);else t.G==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?ft(t,7):Xi(t):c[0]!="noop"&&t.l&&t.l.wa(c),t.A=0)}}Ln(4)}catch{}}function hd(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(or(n)){for(var e=[],t=n.length,s=0;s<t;s++)e.push(n[s]);return e}e=[],t=0;for(s in n)e[t++]=n[s];return e}function dd(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(or(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const s in n)e[t++]=s;return e}}}function Gu(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(or(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=dd(n),s=hd(n),r=s.length,i=0;i<r;i++)e.call(void 0,s[i],t&&t[i],n)}var Ku=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fd(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var s=n[t].indexOf("="),r=null;if(0<=s){var i=n[t].substring(0,s);r=n[t].substring(s+1)}else i=n[t];e(i,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function gt(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof gt){this.h=e!==void 0?e:n.h,zs(this,n.j),this.s=n.s,this.g=n.g,Gs(this,n.m),this.l=n.l,e=n.i;var t=new Fn;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),oa(this,t),this.o=n.o}else n&&(t=String(n).match(Ku))?(this.h=!!e,zs(this,t[1]||"",!0),this.s=En(t[2]||""),this.g=En(t[3]||"",!0),Gs(this,t[4]),this.l=En(t[5]||"",!0),oa(this,t[6]||"",!0),this.o=En(t[7]||"")):(this.h=!!e,this.i=new Fn(null,this.h))}gt.prototype.toString=function(){var n=[],e=this.j;e&&n.push(Sn(e,aa,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(Sn(e,aa,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(Sn(t,t.charAt(0)=="/"?pd:gd,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",Sn(t,wd)),n.join("")};function Fe(n){return new gt(n)}function zs(n,e,t){n.j=t?En(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Gs(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function oa(n,e,t){e instanceof Fn?(n.i=e,vd(n.i,n.h)):(t||(e=Sn(e,yd)),n.i=new Fn(e,n.h))}function U(n,e,t){n.i.set(e,t)}function pr(n){return U(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function En(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Sn(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,md),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function md(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var aa=/[#\/\?@]/g,gd=/[#\?:]/g,pd=/[#\?]/g,yd=/[#\?@]/g,wd=/#/g;function Fn(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function tt(n){n.g||(n.g=new Map,n.h=0,n.i&&fd(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}S=Fn.prototype;S.add=function(n,e){tt(this),this.i=null,n=nn(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function ju(n,e){tt(n),e=nn(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function Qu(n,e){return tt(n),e=nn(n,e),n.g.has(e)}S.forEach=function(n,e){tt(this),this.g.forEach(function(t,s){t.forEach(function(r){n.call(e,r,s,this)},this)},this)};S.oa=function(){tt(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let s=0;s<e.length;s++){const r=n[s];for(let i=0;i<r.length;i++)t.push(e[s])}return t};S.W=function(n){tt(this);let e=[];if(typeof n=="string")Qu(this,n)&&(e=e.concat(this.g.get(nn(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};S.set=function(n,e){return tt(this),this.i=null,n=nn(this,n),Qu(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};S.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function Wu(n,e,t){ju(n,e),0<t.length&&(n.i=null,n.g.set(nn(n,e),Li(t)),n.h+=t.length)}S.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var s=e[t];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),n.push(r)}}return this.i=n.join("&")};function nn(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function vd(n,e){e&&!n.j&&(tt(n),n.i=null,n.g.forEach(function(t,s){var r=s.toLowerCase();s!=r&&(ju(this,s),Wu(this,r,t))},n)),n.j=e}var Id=class{constructor(n,e){this.h=n,this.g=e}};function Hu(n){this.l=n||Td,A.PerformanceNavigationTiming?(n=A.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(A.g&&A.g.Ga&&A.g.Ga()&&A.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Td=10;function Yu(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Xu(n){return n.h?1:n.g?n.g.size:0}function di(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Qi(n,e){n.g?n.g.add(e):n.h=e}function Ju(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}Hu.prototype.cancel=function(){if(this.i=Zu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Zu(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return Li(n.i)}function Wi(){}Wi.prototype.stringify=function(n){return A.JSON.stringify(n,void 0)};Wi.prototype.parse=function(n){return A.JSON.parse(n,void 0)};function Ed(){this.g=new Wi}function Sd(n,e,t){const s=t||"";try{Gu(n,function(r,i){let o=r;Yn(r)&&(o=Bi(r)),e.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw e.push(s+"type="+encodeURIComponent("_badmap")),r}}function bd(n,e){const t=new hr;if(A.Image){const s=new Image;s.onload=vs(Ts,t,s,"TestLoadImage: loaded",!0,e),s.onerror=vs(Ts,t,s,"TestLoadImage: error",!1,e),s.onabort=vs(Ts,t,s,"TestLoadImage: abort",!1,e),s.ontimeout=vs(Ts,t,s,"TestLoadImage: timeout",!1,e),A.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=n}else e(!1)}function Ts(n,e,t,s,r){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,r(s)}catch{}}function ns(n){this.l=n.ac||null,this.j=n.jb||!1}de(ns,Gi);ns.prototype.g=function(){return new yr(this.l,this.j)};ns.prototype.i=function(n){return function(){return n}}({});function yr(n,e){ae.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=Hi,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}de(yr,ae);var Hi=0;S=yr.prototype;S.open=function(n,e){if(this.readyState!=Hi)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,On(this)};S.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||A).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};S.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ss(this)),this.readyState=Hi};S.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,On(this)),this.g&&(this.readyState=3,On(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof A.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ec(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function ec(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}S.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?ss(this):On(this),this.readyState==3&&ec(this)}};S.Va=function(n){this.g&&(this.response=this.responseText=n,ss(this))};S.Ua=function(n){this.g&&(this.response=n,ss(this))};S.ga=function(){this.g&&ss(this)};function ss(n){n.readyState=4,n.l=null,n.j=null,n.A=null,On(n)}S.setRequestHeader=function(n,e){this.v.append(n,e)};S.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};S.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function On(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(yr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var xd=A.JSON.parse;function K(n){ae.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=tc,this.K=this.L=!1}de(K,ae);var tc="",Dd=/^https?$/i,Cd=["POST","PUT"];S=K.prototype;S.Ka=function(n){this.L=n};S.da=function(n,e,t,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ui.g(),this.C=this.u?ia(this.u):ia(ui),this.g.onreadystatechange=me(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(i){ua(this,i);return}if(n=t||"",t=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)t.set(r,s[r]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const i of s.keys())t.set(i,s.get(i));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(t.keys()).find(i=>i.toLowerCase()=="content-type"),r=A.FormData&&n instanceof A.FormData,!(0<=yu(Cd,e))||s||r||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of t)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{rc(this),0<this.B&&((this.K=Ad(this.g))?(this.g.timeout=this.B,this.g.ontimeout=me(this.qa,this)):this.A=zi(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){ua(this,i)}};function Ad(n){return $t&&Kh()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}S.qa=function(){typeof Mi<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,le(this,"timeout"),this.abort(8))};function ua(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,nc(n),wr(n)}function nc(n){n.D||(n.D=!0,le(n,"complete"),le(n,"error"))}S.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,le(this,"complete"),le(this,"abort"),wr(this))};S.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),wr(this,!0)),K.X.M.call(this)};S.Ha=function(){this.s||(this.F||this.v||this.l?sc(this):this.fb())};S.fb=function(){sc(this)};function sc(n){if(n.h&&typeof Mi<"u"&&(!n.C[1]||Le(n)!=4||n.aa()!=2)){if(n.v&&Le(n)==4)zi(n.Ha,0,n);else if(le(n,"readystatechange"),Le(n)==4){n.h=!1;try{const a=n.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var s;if(s=a===0){var r=String(n.H).match(Ku)[1]||null;if(!r&&A.self&&A.self.location){var i=A.self.location.protocol;r=i.substr(0,i.length-1)}s=!Dd.test(r?r.toLowerCase():"")}t=s}if(t)le(n,"complete"),le(n,"success");else{n.m=6;try{var o=2<Le(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.aa()+"]",nc(n)}}finally{wr(n)}}}}function wr(n,e){if(n.g){rc(n);const t=n.g,s=n.C[0]?qs:null;n.g=null,n.C=null,e||le(n,"ready");try{t.onreadystatechange=s}catch{}}}function rc(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(A.clearTimeout(n.A),n.A=null)}function Le(n){return n.g?n.g.readyState:0}S.aa=function(){try{return 2<Le(this)?this.g.status:-1}catch{return-1}};S.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};S.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),xd(e)}};function ca(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case tc:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}S.Ea=function(){return this.m};S.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function ic(n){let e="";return Oi(n,function(t,s){e+=s,e+=":",e+=t,e+=`\r
`}),e}function Yi(n,e,t){e:{for(s in t){var s=!1;break e}s=!0}s||(t=ic(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):U(n,e,t))}function gn(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function oc(n){this.Ca=0,this.i=[],this.j=new hr,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=gn("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=gn("baseRetryDelayMs",5e3,n),this.bb=gn("retryDelaySeedMs",1e4,n),this.$a=gn("forwardChannelMaxRetries",2,n),this.ta=gn("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new Hu(n&&n.concurrentRequestLimit),this.Fa=new Ed,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}S=oc.prototype;S.ma=8;S.G=1;function Xi(n){if(ac(n),n.G==3){var e=n.U++,t=Fe(n.F);U(t,"SID",n.I),U(t,"RID",e),U(t,"TYPE","terminate"),rs(n,t),e=new es(n,n.j,e,void 0),e.K=2,e.v=pr(Fe(t)),t=!1,A.navigator&&A.navigator.sendBeacon&&(t=A.navigator.sendBeacon(e.v.toString(),"")),!t&&A.Image&&(new Image().src=e.v,t=!0),t||(e.g=gc(e.l,null),e.g.da(e.v)),e.F=Date.now(),ts(e)}fc(n)}function vr(n){n.g&&(Zi(n),n.g.cancel(),n.g=null)}function ac(n){vr(n),n.u&&(A.clearTimeout(n.u),n.u=null),Ks(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&A.clearTimeout(n.m),n.m=null)}function Ir(n){Yu(n.h)||n.m||(n.m=!0,Nu(n.Ja,n),n.C=0)}function Nd(n,e){return Xu(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=Jn(me(n.Ja,n,e),dc(n,n.C)),n.C++,!0)}S.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const r=new es(this,this.j,n,void 0);let i=this.s;if(this.S&&(i?(i=Tu(i),Eu(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var s=this.i[t];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=uc(this,r,e),t=Fe(this.F),U(t,"RID",n),U(t,"CVER",22),this.D&&U(t,"X-HTTP-Session-Id",this.D),rs(this,t),i&&(this.N?e="headers="+encodeURIComponent(String(ic(i)))+"&"+e:this.o&&Yi(t,this.o,i)),Qi(this.h,r),this.Ya&&U(t,"TYPE","init"),this.O?(U(t,"$req",e),U(t,"SID","null"),r.Z=!0,li(r,t,null)):li(r,t,e),this.G=2}}else this.G==3&&(n?la(this,n):this.i.length==0||Yu(this.h)||la(this))};function la(n,e){var t;e?t=e.m:t=n.U++;const s=Fe(n.F);U(s,"SID",n.I),U(s,"RID",t),U(s,"AID",n.T),rs(n,s),n.o&&n.s&&Yi(s,n.o,n.s),t=new es(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=uc(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),Qi(n.h,t),li(t,s,e)}function rs(n,e){n.ia&&Oi(n.ia,function(t,s){U(e,s,t)}),n.l&&Gu({},function(t,s){U(e,s,t)})}function uc(n,e,t){t=Math.min(n.i.length,t);var s=n.l?me(n.l.Ra,n.l,n):null;e:{var r=n.i;let i=-1;for(;;){const o=["count="+t];i==-1?0<t?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let u=0;u<t;u++){let c=r[u].h;const l=r[u].g;if(c-=i,0>c)i=Math.max(0,r[u].h-100),a=!1;else try{Sd(l,o,"req"+c+"_")}catch{s&&s(l)}}if(a){s=o.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,s}function cc(n){n.g||n.u||(n.Z=1,Nu(n.Ia,n),n.A=0)}function Ji(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=Jn(me(n.Ia,n),dc(n,n.A)),n.A++,!0)}S.Ia=function(){if(this.u=null,lc(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=Jn(me(this.eb,this),n)}};S.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ye(10),vr(this),lc(this))};function Zi(n){n.B!=null&&(A.clearTimeout(n.B),n.B=null)}function lc(n){n.g=new es(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=Fe(n.sa);U(e,"RID","rpc"),U(e,"SID",n.I),U(e,"CI",n.L?"0":"1"),U(e,"AID",n.T),U(e,"TYPE","xmlhttp"),rs(n,e),n.o&&n.s&&Yi(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=pr(Fe(e)),t.s=null,t.P=!0,Uu(t,n)}S.cb=function(){this.v!=null&&(this.v=null,vr(this),Ji(this),ye(19))};function Ks(n){n.v!=null&&(A.clearTimeout(n.v),n.v=null)}function hc(n,e){var t=null;if(n.g==e){Ks(n),Zi(n),n.g=null;var s=2}else if(di(n.h,e))t=e.D,Ju(n.h,e),s=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(s==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var r=n.C;s=dr(),le(s,new Ou(s,t)),Ir(n)}else cc(n);else if(r=e.o,r==3||r==0&&0<n.pa||!(s==1&&Nd(n,e)||s==2&&Ji(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),r){case 1:ft(n,5);break;case 4:ft(n,10);break;case 3:ft(n,6);break;default:ft(n,2)}}}function dc(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function ft(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var s=me(n.kb,n);t||(t=new gt("//www.google.com/images/cleardot.gif"),A.location&&A.location.protocol=="http"||zs(t,"https"),pr(t)),bd(t.toString(),s)}else ye(2);n.G=0,n.l&&n.l.va(e),fc(n),ac(n)}S.kb=function(n){n?(this.j.info("Successfully pinged google.com"),ye(2)):(this.j.info("Failed to ping google.com"),ye(1))};function fc(n){if(n.G=0,n.la=[],n.l){const e=Zu(n.h);(e.length!=0||n.i.length!=0)&&(Zo(n.la,e),Zo(n.la,n.i),n.h.i.length=0,Li(n.i),n.i.length=0),n.l.ua()}}function mc(n,e,t){var s=t instanceof gt?Fe(t):new gt(t,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),Gs(s,s.m);else{var r=A.location;s=r.protocol,e=e?e+"."+r.hostname:r.hostname,r=+r.port;var i=new gt(null,void 0);s&&zs(i,s),e&&(i.g=e),r&&Gs(i,r),t&&(i.l=t),s=i}return t=n.D,e=n.za,t&&e&&U(s,t,e),U(s,"VER",n.ma),rs(n,s),s}function gc(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new K(new ns({jb:!0})):new K(n.ra),e.Ka(n.H),e}function pc(){}S=pc.prototype;S.xa=function(){};S.wa=function(){};S.va=function(){};S.ua=function(){};S.Ra=function(){};function js(){if($t&&!(10<=Number(jh)))throw Error("Environmental error: no available transport.")}js.prototype.g=function(n,e){return new xe(n,e)};function xe(n,e){ae.call(this),this.g=new oc(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!Us(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Us(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new sn(this)}de(xe,ae);xe.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;ye(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=mc(n,null,n.V),Ir(n)};xe.prototype.close=function(){Xi(this.g)};xe.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Bi(n),n=t);e.i.push(new Id(e.ab++,n)),e.G==3&&Ir(e)};xe.prototype.M=function(){this.g.l=null,delete this.j,Xi(this.g),delete this.g,xe.X.M.call(this)};function yc(n){Ki.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}de(yc,Ki);function wc(){ji.call(this),this.status=1}de(wc,ji);function sn(n){this.g=n}de(sn,pc);sn.prototype.xa=function(){le(this.g,"a")};sn.prototype.wa=function(n){le(this.g,new yc(n))};sn.prototype.va=function(n){le(this.g,new wc)};sn.prototype.ua=function(){le(this.g,"b")};js.prototype.createWebChannel=js.prototype.g;xe.prototype.send=xe.prototype.u;xe.prototype.open=xe.prototype.m;xe.prototype.close=xe.prototype.close;fr.NO_ERROR=0;fr.TIMEOUT=8;fr.HTTP_ERROR=6;Pu.COMPLETE="complete";Vu.EventType=Zn;Zn.OPEN="a";Zn.CLOSE="b";Zn.ERROR="c";Zn.MESSAGE="d";ae.prototype.listen=ae.prototype.N;K.prototype.listenOnce=K.prototype.O;K.prototype.getLastError=K.prototype.Oa;K.prototype.getLastErrorCode=K.prototype.Ea;K.prototype.getStatus=K.prototype.aa;K.prototype.getResponseJson=K.prototype.Sa;K.prototype.getResponseText=K.prototype.fa;K.prototype.send=K.prototype.da;K.prototype.setWithCredentials=K.prototype.Ka;var _d=function(){return new js},kd=function(){return dr()},Hr=fr,Rd=Pu,Md=At,ha={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Ld=ns,Es=Vu,Fd=K;const da="@firebase/firestore";/**
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
 */class re{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}re.UNAUTHENTICATED=new re(null),re.GOOGLE_CREDENTIALS=new re("google-credentials-uid"),re.FIRST_PARTY=new re("first-party-uid"),re.MOCK_USER=new re("mock-user");/**
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
 */let rn="9.19.0";/**
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
 */const He=new kh("@firebase/firestore");function fi(){return He.logLevel}function hp(n){He.setLogLevel(n)}function y(n,...e){if(He.logLevel<=Bt.DEBUG){const t=e.map(eo);He.debug(`Firestore (${rn}): ${n}`,...t)}}function W(n,...e){if(He.logLevel<=Bt.ERROR){const t=e.map(eo);He.error(`Firestore (${rn}): ${n}`,...t)}}function Oe(n,...e){if(He.logLevel<=Bt.WARN){const t=e.map(eo);He.warn(`Firestore (${rn}): ${n}`,...t)}}function eo(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
*/var e}/**
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
 */function E(n="Unexpected state"){const e=`FIRESTORE (${rn}) INTERNAL ASSERTION FAILED: `+n;throw W(e),new Error(e)}function b(n,e){n||E()}function dp(n,e){n||E()}function I(n,e){return n}/**
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
 */const m={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class p extends Sh{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class te{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class vc{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Od{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(re.UNAUTHENTICATED))}shutdown(){}}class Pd{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Vd{constructor(e){this.t=e,this.currentUser=re.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let s=this.i;const r=u=>this.i!==s?(s=this.i,t(u)):Promise.resolve();let i=new te;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new te,e.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await r(this.currentUser)})},a=u=>{y("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(y("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new te)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(s=>this.i!==e?(y("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(b(typeof s.accessToken=="string"),new vc(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return b(e===null||typeof e=="string"),new re(e)}}class qd{constructor(e,t,s){this.h=e,this.l=t,this.m=s,this.type="FirstParty",this.user=re.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Ud{constructor(e,t,s){this.h=e,this.l=t,this.m=s}getToken(){return Promise.resolve(new qd(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(re.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Ic{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Bd{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const s=i=>{i.error!=null&&y("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,y("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>s(i))};const r=i=>{y("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):y("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(b(typeof t.token=="string"),this.T=t.token,new Ic(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}class fp{getToken(){return Promise.resolve(new Ic(""))}invalidateToken(){}start(e,t){}shutdown(){}}/**
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
 */function $d(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let s=0;s<n;s++)t[s]=Math.floor(256*Math.random());return t}/**
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
 */class Tc{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const r=$d(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<t&&(s+=e.charAt(r[i]%e.length))}return s}}function C(n,e){return n<e?-1:n>e?1:0}function zt(n,e,t){return n.length===e.length&&n.every((s,r)=>t(s,e[r]))}function Ec(n){return n+"\0"}/**
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
 */class ${constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new p(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new p(m.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new p(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new p(m.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return $.fromMillis(Date.now())}static fromDate(e){return $.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*t));return new $(t,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?C(this.nanoseconds,e.nanoseconds):C(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class x{constructor(e){this.timestamp=e}static fromTimestamp(e){return new x(e)}static min(){return new x(new $(0,0))}static max(){return new x(new $(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Pn{constructor(e,t,s){t===void 0?t=0:t>e.length&&E(),s===void 0?s=e.length-t:s>e.length-t&&E(),this.segments=e,this.offset=t,this.len=s}get length(){return this.len}isEqual(e){return Pn.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Pn?e.forEach(s=>{t.push(s)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,s=this.limit();t<s;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const s=Math.min(e.length,t.length);for(let r=0;r<s;r++){const i=e.get(r),o=t.get(r);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class M extends Pn{construct(e,t,s){return new M(e,t,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const s of e){if(s.indexOf("//")>=0)throw new p(m.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);t.push(...s.split("/").filter(r=>r.length>0))}return new M(t)}static emptyPath(){return new M([])}}const zd=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class H extends Pn{construct(e,t,s){return new H(e,t,s)}static isValidIdentifier(e){return zd.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),H.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new H(["__name__"])}static fromServerFormat(e){const t=[];let s="",r=0;const i=()=>{if(s.length===0)throw new p(m.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(s),s=""};let o=!1;for(;r<e.length;){const a=e[r];if(a==="\\"){if(r+1===e.length)throw new p(m.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[r+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new p(m.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new p(m.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new H(t)}static emptyPath(){return new H([])}}/**
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
 */class v{constructor(e){this.path=e}static fromPath(e){return new v(M.fromString(e))}static fromName(e){return new v(M.fromString(e).popFirst(5))}static empty(){return new v(M.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&M.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return M.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new v(new M(e.slice()))}}/**
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
 */class Qs{constructor(e,t,s,r){this.indexId=e,this.collectionGroup=t,this.fields=s,this.indexState=r}}function mi(n){return n.fields.find(e=>e.kind===2)}function at(n){return n.fields.filter(e=>e.kind!==2)}function Gd(n,e){let t=C(n.collectionGroup,e.collectionGroup);if(t!==0)return t;for(let s=0;s<Math.min(n.fields.length,e.fields.length);++s)if(t=Kd(n.fields[s],e.fields[s]),t!==0)return t;return C(n.fields.length,e.fields.length)}Qs.UNKNOWN_ID=-1;class _s{constructor(e,t){this.fieldPath=e,this.kind=t}}function Kd(n,e){const t=H.comparator(n.fieldPath,e.fieldPath);return t!==0?t:C(n.kind,e.kind)}class Vn{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Vn(0,De.min())}}function Sc(n,e){const t=n.toTimestamp().seconds,s=n.toTimestamp().nanoseconds+1,r=x.fromTimestamp(s===1e9?new $(t+1,0):new $(t,s));return new De(r,v.empty(),e)}function bc(n){return new De(n.readTime,n.key,-1)}class De{constructor(e,t,s){this.readTime=e,this.documentKey=t,this.largestBatchId=s}static min(){return new De(x.min(),v.empty(),-1)}static max(){return new De(x.max(),v.empty(),-1)}}function to(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=v.comparator(n.documentKey,e.documentKey),t!==0?t:C(n.largestBatchId,e.largestBatchId))}/**
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
 */const xc="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Dc{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function nt(n){if(n.code!==m.FAILED_PRECONDITION||n.message!==xc)throw n;y("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class f{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&E(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new f((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(t,i).next(s,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof f?t:f.resolve(t)}catch(t){return f.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):f.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):f.reject(t)}static resolve(e){return new f((t,s)=>{t(e)})}static reject(e){return new f((t,s)=>{s(e)})}static waitFor(e){return new f((t,s)=>{let r=0,i=0,o=!1;e.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&t()},u=>s(u))}),o=!0,i===r&&t()})}static or(e){let t=f.resolve(!1);for(const s of e)t=t.next(r=>r?f.resolve(r):s());return t}static forEach(e,t){const s=[];return e.forEach((r,i)=>{s.push(t.call(this,r,i))}),this.waitFor(s)}static mapArray(e,t){return new f((s,r)=>{const i=e.length,o=new Array(i);let a=0;for(let u=0;u<i;u++){const c=u;t(e[c]).next(l=>{o[c]=l,++a,a===i&&s(o)},l=>r(l))}})}static doWhile(e,t){return new f((s,r)=>{const i=()=>{e()===!0?t().next(()=>{i()},r):s()};i()})}}/**
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
 */class Tr{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.R=new te,this.transaction.oncomplete=()=>{this.R.resolve()},this.transaction.onabort=()=>{t.error?this.R.reject(new Cn(e,t.error)):this.R.resolve()},this.transaction.onerror=s=>{const r=no(s.target.error);this.R.reject(new Cn(e,r))}}static open(e,t,s,r){try{return new Tr(t,e.transaction(r,s))}catch(i){throw new Cn(t,i)}}get v(){return this.R.promise}abort(e){e&&this.R.reject(e),this.aborted||(y("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Qd(t)}}class Ce{constructor(e,t,s){this.name=e,this.version=t,this.V=s,Ce.S(ti())===12.2&&W("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return y("SimpleDb","Removing database:",e),ut(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Rh())return!1;if(Ce.C())return!0;const e=ti(),t=Ce.S(e),s=0<t&&t<10,r=Ce.N(e),i=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||s||i)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static O(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),s=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(s)}static N(e){const t=e.match(/Android ([\d.]+)/i),s=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(s)}async $(e){return this.db||(y("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,s)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=i=>{const o=i.target.result;t(o)},r.onblocked=()=>{s(new Cn(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=i=>{const o=i.target.error;o.name==="VersionError"?s(new p(m.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?s(new p(m.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):s(new Cn(e,o))},r.onupgradeneeded=i=>{y("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.V.M(o,r.transaction,i.oldVersion,this.version).next(()=>{y("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=t=>this.F(t)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,s,r){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=Tr.open(this.db,e,i?"readonly":"readwrite",s),u=r(a).next(c=>(a.P(),c)).catch(c=>(a.abort(c),f.reject(c))).toPromise();return u.catch(()=>{}),await a.v,u}catch(a){const u=a,c=u.name!=="FirebaseError"&&o<3;if(y("SimpleDb","Transaction failed with error:",u.message,"Retrying:",c),this.close(),!c)return Promise.reject(u)}}}close(){this.db&&this.db.close(),this.db=void 0}}class jd{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return ut(this.L.delete())}}class Cn extends p{constructor(e,t){super(m.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function st(n){return n.name==="IndexedDbTransactionError"}class Qd{constructor(e){this.store=e}put(e,t){let s;return t!==void 0?(y("SimpleDb","PUT",this.store.name,e,t),s=this.store.put(t,e)):(y("SimpleDb","PUT",this.store.name,"<auto-key>",e),s=this.store.put(e)),ut(s)}add(e){return y("SimpleDb","ADD",this.store.name,e,e),ut(this.store.add(e))}get(e){return ut(this.store.get(e)).next(t=>(t===void 0&&(t=null),y("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return y("SimpleDb","DELETE",this.store.name,e),ut(this.store.delete(e))}count(){return y("SimpleDb","COUNT",this.store.name),ut(this.store.count())}j(e,t){const s=this.options(e,t);if(s.index||typeof this.store.getAll!="function"){const r=this.cursor(s),i=[];return this.W(r,(o,a)=>{i.push(a)}).next(()=>i)}{const r=this.store.getAll(s.range);return new f((i,o)=>{r.onerror=a=>{o(a.target.error)},r.onsuccess=a=>{i(a.target.result)}})}}H(e,t){const s=this.store.getAll(e,t===null?void 0:t);return new f((r,i)=>{s.onerror=o=>{i(o.target.error)},s.onsuccess=o=>{r(o.target.result)}})}J(e,t){y("SimpleDb","DELETE ALL",this.store.name);const s=this.options(e,t);s.Y=!1;const r=this.cursor(s);return this.W(r,(i,o,a)=>a.delete())}Z(e,t){let s;t?s=e:(s={},t=e);const r=this.cursor(s);return this.W(r,t)}X(e){const t=this.cursor({});return new f((s,r)=>{t.onerror=i=>{const o=no(i.target.error);r(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():s()}):s()}})}W(e,t){const s=[];return new f((r,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void r();const u=new jd(a),c=t(a.primaryKey,a.value,u);if(c instanceof f){const l=c.catch(h=>(u.done(),f.reject(h)));s.push(l)}u.isDone?r():u.K===null?a.continue():a.continue(u.K)}}).next(()=>f.waitFor(s))}options(e,t){let s;return e!==void 0&&(typeof e=="string"?s=e:t=e),{index:s,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const s=this.store.index(e.index);return e.Y?s.openKeyCursor(e.range,t):s.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function ut(n){return new f((e,t)=>{n.onsuccess=s=>{const r=s.target.result;e(r)},n.onerror=s=>{const r=no(s.target.error);t(r)}})}let fa=!1;function no(n){const e=Ce.S(ti());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const s=new p("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return fa||(fa=!0,setTimeout(()=>{throw s},0)),s}}return n}class Wd{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){y("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{y("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(t){st(t)?y("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await nt(t)}await this.et(6e4)})}}class Hd{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.st(t,e))}st(e,t){const s=new Set;let r=t,i=!0;return f.doWhile(()=>i===!0&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!s.has(o))return y("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,r).next(a=>{r-=a,s.add(o)});i=!1})).next(()=>t-r)}it(e,t,s){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,s).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(r,i)).next(a=>(y("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}rt(e,t){let s=e;return t.changes.forEach((r,i)=>{const o=bc(i);to(o,s)>0&&(s=o)}),new De(s.readTime,s.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class Te{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>t.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Te.ct=-1;function is(n){return n==null}function qn(n){return n===0&&1/n==-1/0}function Cc(n){return typeof n=="number"&&Number.isInteger(n)&&!qn(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function we(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=ma(e)),e=Yd(n.get(t),e);return ma(e)}function Yd(n,e){let t=e;const s=n.length;for(let r=0;r<s;r++){const i=n.charAt(r);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function ma(n){return n+""}function Ne(n){const e=n.length;if(b(e>=2),e===2)return b(n.charAt(0)===""&&n.charAt(1)===""),M.emptyPath();const t=e-2,s=[];let r="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&E(),n.charAt(o+1)){case"":const a=n.substring(i,o);let u;r.length===0?u=a:(r+=a,u=r,r=""),s.push(u);break;case"":r+=n.substring(i,o),r+="\0";break;case"":r+=n.substring(i,o+1);break;default:E()}i=o+2}return new M(s)}/**
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
 */const ga=["userId","batchId"];/**
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
 */function ks(n,e){return[n,we(e)]}function Ac(n,e,t){return[n,we(e),t]}const Xd={},Jd=["prefixPath","collectionGroup","readTime","documentId"],Zd=["prefixPath","collectionGroup","documentId"],ef=["collectionGroup","readTime","prefixPath","documentId"],tf=["canonicalId","targetId"],nf=["targetId","path"],sf=["path","targetId"],rf=["collectionId","parent"],of=["indexId","uid"],af=["uid","sequenceNumber"],uf=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],cf=["indexId","uid","orderedDocumentKey"],lf=["userId","collectionPath","documentId"],hf=["userId","collectionPath","largestBatchId"],df=["userId","collectionGroup","largestBatchId"],Nc=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],ff=[...Nc,"documentOverlays"],_c=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],kc=_c,mf=[...kc,"indexConfiguration","indexState","indexEntries"];/**
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
 */class gi extends Dc{constructor(e,t){super(),this.at=e,this.currentSequenceNumber=t}}function ue(n,e){const t=I(n);return Ce.O(t.at,e)}/**
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
 */function pa(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Nt(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Rc(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class j{constructor(e,t){this.comparator=e,this.root=t||ce.EMPTY}insert(e,t){return new j(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ce.BLACK,null,null))}remove(e){return new j(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ce.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const s=this.comparator(e,t.key);if(s===0)return t.value;s<0?t=t.left:s>0&&(t=t.right)}return null}indexOf(e){let t=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(e,s.key);if(r===0)return t+s.left.size;r<0?s=s.left:(t+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,s)=>(e(t,s),!1))}toString(){const e=[];return this.inorderTraversal((t,s)=>(e.push(`${t}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ss(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ss(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ss(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ss(this.root,e,this.comparator,!0)}}class Ss{constructor(e,t,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?s(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ce{constructor(e,t,s,r,i){this.key=e,this.value=t,this.color=s!=null?s:ce.RED,this.left=r!=null?r:ce.EMPTY,this.right=i!=null?i:ce.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,s,r,i){return new ce(e!=null?e:this.key,t!=null?t:this.value,s!=null?s:this.color,r!=null?r:this.left,i!=null?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let r=this;const i=s(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,s),null):i===0?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return ce.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let s,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),t(e,r.key)===0){if(r.right.isEmpty())return ce.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ce.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ce.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw E();const e=this.left.check();if(e!==this.right.check())throw E();return e+(this.isRed()?0:1)}}ce.EMPTY=null,ce.RED=!0,ce.BLACK=!1;ce.EMPTY=new class{constructor(){this.size=0}get key(){throw E()}get value(){throw E()}get color(){throw E()}get left(){throw E()}get right(){throw E()}copy(n,e,t,s,r){return this}insert(n,e,t){return new ce(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class P{constructor(e){this.comparator=e,this.data=new j(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,s)=>(e(t),!1))}forEachInRange(e,t){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let s;for(s=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new ya(this.data.getIterator())}getIteratorFrom(e){return new ya(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(s=>{t=t.add(s)}),t}isEqual(e){if(!(e instanceof P)||this.size!==e.size)return!1;const t=this.data.getIterator(),s=e.data.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new P(this.comparator);return t.data=e,t}}class ya{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Lt(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class Ee{constructor(e){this.fields=e,e.sort(H.comparator)}static empty(){return new Ee([])}unionWith(e){let t=new P(H.comparator);for(const s of this.fields)t=t.add(s);for(const s of e)t=t.add(s);return new Ee(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return zt(this.fields,e.fields,(t,s)=>t.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class gf extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function mp(){return typeof atob<"u"}/**
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
 */class ne{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new gf("Invalid base64 string: "+r):r}}(e);return new ne(t)}static fromUint8Array(e){const t=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(e);return new ne(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return C(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ne.EMPTY_BYTE_STRING=new ne("");const pf=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ye(n){if(b(!!n),typeof n=="string"){let e=0;const t=pf.exec(n);if(b(!!t),t[1]){let r=t[1];r=(r+"000000000").substr(0,9),e=Number(r)}const s=new Date(n);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:G(n.seconds),nanos:G(n.nanos)}}function G(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function yt(n){return typeof n=="string"?ne.fromBase64String(n):ne.fromUint8Array(n)}/**
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
 */function so(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Mc(n){const e=n.mapValue.fields.__previous_value__;return so(e)?Mc(e):e}function Un(n){const e=Ye(n.mapValue.fields.__local_write_time__.timestampValue);return new $(e.seconds,e.nanos)}/**
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
 */class yf{constructor(e,t,s,r,i,o,a,u){this.databaseId=e,this.appId=t,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class wt{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new wt("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof wt&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Qe={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Rs={nullValue:"NULL_VALUE"};function vt(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?so(n)?4:Lc(n)?9007199254740991:10:E()}function Me(n,e){if(n===e)return!0;const t=vt(n);if(t!==vt(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Un(n).isEqual(Un(e));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Ye(s.timestampValue),o=Ye(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,r){return yt(s.bytesValue).isEqual(yt(r.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,r){return G(s.geoPointValue.latitude)===G(r.geoPointValue.latitude)&&G(s.geoPointValue.longitude)===G(r.geoPointValue.longitude)}(n,e);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return G(s.integerValue)===G(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=G(s.doubleValue),o=G(r.doubleValue);return i===o?qn(i)===qn(o):isNaN(i)&&isNaN(o)}return!1}(n,e);case 9:return zt(n.arrayValue.values||[],e.arrayValue.values||[],Me);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(pa(i)!==pa(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Me(i[a],o[a])))return!1;return!0}(n,e);default:return E()}}function Bn(n,e){return(n.values||[]).find(t=>Me(t,e))!==void 0}function Xe(n,e){if(n===e)return 0;const t=vt(n),s=vt(e);if(t!==s)return C(t,s);switch(t){case 0:case 9007199254740991:return 0;case 1:return C(n.booleanValue,e.booleanValue);case 2:return function(r,i){const o=G(r.integerValue||r.doubleValue),a=G(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return wa(n.timestampValue,e.timestampValue);case 4:return wa(Un(n),Un(e));case 5:return C(n.stringValue,e.stringValue);case 6:return function(r,i){const o=yt(r),a=yt(i);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let u=0;u<o.length&&u<a.length;u++){const c=C(o[u],a[u]);if(c!==0)return c}return C(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(r,i){const o=C(G(r.latitude),G(i.latitude));return o!==0?o:C(G(r.longitude),G(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let u=0;u<o.length&&u<a.length;++u){const c=Xe(o[u],a[u]);if(c)return c}return C(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(r,i){if(r===Qe.mapValue&&i===Qe.mapValue)return 0;if(r===Qe.mapValue)return 1;if(i===Qe.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),u=i.fields||{},c=Object.keys(u);a.sort(),c.sort();for(let l=0;l<a.length&&l<c.length;++l){const h=C(a[l],c[l]);if(h!==0)return h;const d=Xe(o[a[l]],u[c[l]]);if(d!==0)return d}return C(a.length,c.length)}(n.mapValue,e.mapValue);default:throw E()}}function wa(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return C(n,e);const t=Ye(n),s=Ye(e),r=C(t.seconds,s.seconds);return r!==0?r:C(t.nanos,s.nanos)}function Gt(n){return pi(n)}function pi(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(s){const r=Ye(s);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?yt(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,v.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=pi(o);return r+"]"}(n.arrayValue):"mapValue"in n?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${pi(s.fields[a])}`;return i+"}"}(n.mapValue):E();var e,t}function It(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function yi(n){return!!n&&"integerValue"in n}function $n(n){return!!n&&"arrayValue"in n}function va(n){return!!n&&"nullValue"in n}function Ia(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ms(n){return!!n&&"mapValue"in n}function An(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Nt(n.mapValue.fields,(t,s)=>e.mapValue.fields[t]=An(s)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=An(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Lc(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function wf(n){return"nullValue"in n?Rs:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?It(wt.empty(),v.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:E()}function vf(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?It(wt.empty(),v.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?Qe:E()}function Ta(n,e){const t=Xe(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Ea(n,e){const t=Xe(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class ie{constructor(e){this.value=e}static empty(){return new ie({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let s=0;s<e.length-1;++s)if(t=(t.mapValue.fields||{})[e.get(s)],!Ms(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=An(t)}setAll(e){let t=H.emptyPath(),s={},r=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const u=this.getFieldsMap(t);this.applyChanges(u,s,r),s={},r=[],t=a.popLast()}o?s[a.lastSegment()]=An(o):r.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,s,r)}delete(e){const t=this.field(e.popLast());Ms(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Me(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let s=0;s<e.length;++s){let r=t.mapValue.fields[e.get(s)];Ms(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(s)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,s){Nt(t,(r,i)=>e[r]=i);for(const r of s)delete e[r]}clone(){return new ie(An(this.value))}}function Fc(n){const e=[];return Nt(n.fields,(t,s)=>{const r=new H([t]);if(Ms(s)){const i=Fc(s.mapValue).fields;if(i.length===0)e.push(r);else for(const o of i)e.push(r.child(o))}else e.push(r)}),new Ee(e)}/**
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
 */class V{constructor(e,t,s,r,i,o,a){this.key=e,this.documentType=t,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new V(e,0,x.min(),x.min(),x.min(),ie.empty(),0)}static newFoundDocument(e,t,s,r){return new V(e,1,t,x.min(),s,r,0)}static newNoDocument(e,t){return new V(e,2,t,x.min(),x.min(),ie.empty(),0)}static newUnknownDocument(e,t){return new V(e,3,t,x.min(),x.min(),ie.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(x.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ie.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ie.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=x.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof V&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new V(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Je{constructor(e,t){this.position=e,this.inclusive=t}}function Sa(n,e,t){let s=0;for(let r=0;r<n.position.length;r++){const i=e[r],o=n.position[r];if(i.field.isKeyField()?s=v.comparator(v.fromName(o.referenceValue),t.key):s=Xe(o,t.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function ba(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Me(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class qt{constructor(e,t="asc"){this.field=e,this.dir=t}}function If(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Oc{}class _ extends Oc{constructor(e,t,s){super(),this.field=e,this.op=t,this.value=s}static create(e,t,s){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,s):new Tf(e,t,s):t==="array-contains"?new bf(e,s):t==="in"?new $c(e,s):t==="not-in"?new xf(e,s):t==="array-contains-any"?new Df(e,s):new _(e,t,s)}static createKeyFieldInFilter(e,t,s){return t==="in"?new Ef(e,s):new Sf(e,s)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Xe(t,this.value)):t!==null&&vt(this.value)===vt(t)&&this.matchesComparison(Xe(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return E()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class F extends Oc{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new F(e,t)}matches(e){return Kt(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(t=>t.isInequality());return e!==null?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function Kt(n){return n.op==="and"}function wi(n){return n.op==="or"}function ro(n){return Pc(n)&&Kt(n)}function Pc(n){for(const e of n.filters)if(e instanceof F)return!1;return!0}function vi(n){if(n instanceof _)return n.field.canonicalString()+n.op.toString()+Gt(n.value);if(ro(n))return n.filters.map(e=>vi(e)).join(",");{const e=n.filters.map(t=>vi(t)).join(",");return`${n.op}(${e})`}}function Vc(n,e){return n instanceof _?function(t,s){return s instanceof _&&t.op===s.op&&t.field.isEqual(s.field)&&Me(t.value,s.value)}(n,e):n instanceof F?function(t,s){return s instanceof F&&t.op===s.op&&t.filters.length===s.filters.length?t.filters.reduce((r,i,o)=>r&&Vc(i,s.filters[o]),!0):!1}(n,e):void E()}function qc(n,e){const t=n.filters.concat(e);return F.create(t,n.op)}function Uc(n){return n instanceof _?function(e){return`${e.field.canonicalString()} ${e.op} ${Gt(e.value)}`}(n):n instanceof F?function(e){return e.op.toString()+" {"+e.getFilters().map(Uc).join(" ,")+"}"}(n):"Filter"}class Tf extends _{constructor(e,t,s){super(e,t,s),this.key=v.fromName(s.referenceValue)}matches(e){const t=v.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ef extends _{constructor(e,t){super(e,"in",t),this.keys=Bc("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class Sf extends _{constructor(e,t){super(e,"not-in",t),this.keys=Bc("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Bc(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(s=>v.fromName(s.referenceValue))}class bf extends _{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return $n(t)&&Bn(t.arrayValue,this.value)}}class $c extends _{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Bn(this.value.arrayValue,t)}}class xf extends _{constructor(e,t){super(e,"not-in",t)}matches(e){if(Bn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Bn(this.value.arrayValue,t)}}class Df extends _{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!$n(t)||!t.arrayValue.values)&&t.arrayValue.values.some(s=>Bn(this.value.arrayValue,s))}}/**
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
 */class Cf{constructor(e,t=null,s=[],r=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Ii(n,e=null,t=[],s=[],r=null,i=null,o=null){return new Cf(n,e,t,s,r,i,o)}function Tt(n){const e=I(n);if(e.ft===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(s=>vi(s)).join(","),t+="|ob:",t+=e.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),is(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Gt(s)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Gt(s)).join(",")),e.ft=t}return e.ft}function os(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!If(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Vc(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!ba(n.startAt,e.startAt)&&ba(n.endAt,e.endAt)}function Ws(n){return v.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Hs(n,e){return n.filters.filter(t=>t instanceof _&&t.field.isEqual(e))}function xa(n,e,t){let s=Rs,r=!0;for(const i of Hs(n,e)){let o=Rs,a=!0;switch(i.op){case"<":case"<=":o=wf(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=Rs}Ta({value:s,inclusive:r},{value:o,inclusive:a})<0&&(s=o,r=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Ta({value:s,inclusive:r},{value:o,inclusive:t.inclusive})<0&&(s=o,r=t.inclusive);break}}return{value:s,inclusive:r}}function Da(n,e,t){let s=Qe,r=!0;for(const i of Hs(n,e)){let o=Qe,a=!0;switch(i.op){case">=":case">":o=vf(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=Qe}Ea({value:s,inclusive:r},{value:o,inclusive:a})>0&&(s=o,r=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Ea({value:s,inclusive:r},{value:o,inclusive:t.inclusive})>0&&(s=o,r=t.inclusive);break}}return{value:s,inclusive:r}}/**
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
 */class Pe{constructor(e,t=null,s=[],r=[],i=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=u,this.dt=null,this.wt=null,this.startAt,this.endAt}}function zc(n,e,t,s,r,i,o,a){return new Pe(n,e,t,s,r,i,o,a)}function on(n){return new Pe(n)}function Ca(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function io(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Er(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function oo(n){return n.collectionGroup!==null}function pt(n){const e=I(n);if(e.dt===null){e.dt=[];const t=Er(e),s=io(e);if(t!==null&&s===null)t.isKeyField()||e.dt.push(new qt(t)),e.dt.push(new qt(H.keyField(),"asc"));else{let r=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new qt(H.keyField(),i))}}}return e.dt}function ve(n){const e=I(n);if(!e.wt)if(e.limitType==="F")e.wt=Ii(e.path,e.collectionGroup,pt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of pt(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new qt(i.field,o))}const s=e.endAt?new Je(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Je(e.startAt.position,e.startAt.inclusive):null;e.wt=Ii(e.path,e.collectionGroup,t,e.filters,e.limit,s,r)}return e.wt}function Ti(n,e){e.getFirstInequalityField(),Er(n);const t=n.filters.concat([e]);return new Pe(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Ys(n,e,t){return new Pe(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function as(n,e){return os(ve(n),ve(e))&&n.limitType===e.limitType}function Gc(n){return`${Tt(ve(n))}|lt:${n.limitType}`}function Ei(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(s=>Uc(s)).join(", ")}]`),is(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(s=>Gt(s)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(s=>Gt(s)).join(",")),`Target(${t})`}(ve(n))}; limitType=${n.limitType})`}function us(n,e){return e.isFoundDocument()&&function(t,s){const r=s.key.path;return t.collectionGroup!==null?s.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(r):v.isDocumentKey(t.path)?t.path.isEqual(r):t.path.isImmediateParentOf(r)}(n,e)&&function(t,s){for(const r of pt(t))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(n,e)&&function(t,s){for(const r of t.filters)if(!r.matches(s))return!1;return!0}(n,e)&&function(t,s){return!(t.startAt&&!function(r,i,o){const a=Sa(r,i,o);return r.inclusive?a<=0:a<0}(t.startAt,pt(t),s)||t.endAt&&!function(r,i,o){const a=Sa(r,i,o);return r.inclusive?a>=0:a>0}(t.endAt,pt(t),s))}(n,e)}function Kc(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function jc(n){return(e,t)=>{let s=!1;for(const r of pt(n)){const i=Af(r,e,t);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function Af(n,e,t){const s=n.field.isKeyField()?v.comparator(e.key,t.key):function(r,i,o){const a=i.data.field(r),u=o.data.field(r);return a!==null&&u!==null?Xe(a,u):E()}(n.field,e,t);switch(n.dir){case"asc":return s;case"desc":return-1*s;default:return E()}}/**
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
 */class rt{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const s=this.mapKeyFn(e),r=this.inner[s];if(r===void 0)return this.inner[s]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),s=this.inner[t];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],e))return s.length===1?delete this.inner[t]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Nt(this.inner,(t,s)=>{for(const[r,i]of s)e(r,i)})}isEmpty(){return Rc(this.inner)}size(){return this.innerSize}}/**
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
 */const Nf=new j(v.comparator);function Se(){return Nf}const Qc=new j(v.comparator);function bn(...n){let e=Qc;for(const t of n)e=e.insert(t.key,t);return e}function Wc(n){let e=Qc;return n.forEach((t,s)=>e=e.insert(t,s.overlayedDocument)),e}function _e(){return Nn()}function Hc(){return Nn()}function Nn(){return new rt(n=>n.toString(),(n,e)=>n.isEqual(e))}const _f=new j(v.comparator),kf=new P(v.comparator);function N(...n){let e=kf;for(const t of n)e=e.add(t);return e}const Rf=new P(C);function Sr(){return Rf}/**
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
 */function Yc(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:qn(e)?"-0":e}}function Xc(n){return{integerValue:""+n}}function Jc(n,e){return Cc(e)?Xc(e):Yc(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */class br{constructor(){this._=void 0}}function Mf(n,e,t){return n instanceof jt?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(t,e):n instanceof Et?el(n,e):n instanceof St?tl(n,e):function(s,r){const i=Zc(s,r),o=Aa(i)+Aa(s._t);return yi(i)&&yi(s._t)?Xc(o):Yc(s.serializer,o)}(n,e)}function Lf(n,e,t){return n instanceof Et?el(n,e):n instanceof St?tl(n,e):t}function Zc(n,e){return n instanceof Qt?yi(t=e)||function(s){return!!s&&"doubleValue"in s}(t)?e:{integerValue:0}:null;var t}class jt extends br{}class Et extends br{constructor(e){super(),this.elements=e}}function el(n,e){const t=nl(e);for(const s of n.elements)t.some(r=>Me(r,s))||t.push(s);return{arrayValue:{values:t}}}class St extends br{constructor(e){super(),this.elements=e}}function tl(n,e){let t=nl(e);for(const s of n.elements)t=t.filter(r=>!Me(r,s));return{arrayValue:{values:t}}}class Qt extends br{constructor(e,t){super(),this.serializer=e,this._t=t}}function Aa(n){return G(n.integerValue||n.doubleValue)}function nl(n){return $n(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class cs{constructor(e,t){this.field=e,this.transform=t}}function Ff(n,e){return n.field.isEqual(e.field)&&function(t,s){return t instanceof Et&&s instanceof Et||t instanceof St&&s instanceof St?zt(t.elements,s.elements,Me):t instanceof Qt&&s instanceof Qt?Me(t._t,s._t):t instanceof jt&&s instanceof jt}(n.transform,e.transform)}class Of{constructor(e,t){this.version=e,this.transformResults=t}}class B{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new B}static exists(e){return new B(void 0,e)}static updateTime(e){return new B(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ls(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class xr{}function sl(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new un(n.key,B.none()):new an(n.key,n.data,B.none());{const t=n.data,s=ie.empty();let r=new P(H.comparator);for(let i of e.fields)if(!r.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new Ve(n.key,s,new Ee(r.toArray()),B.none())}}function Pf(n,e,t){n instanceof an?function(s,r,i){const o=s.value.clone(),a=_a(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Ve?function(s,r,i){if(!Ls(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=_a(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(rl(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(n,e,t):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,t)}function _n(n,e,t,s){return n instanceof an?function(r,i,o,a){if(!Ls(r.precondition,i))return o;const u=r.value.clone(),c=ka(r.fieldTransforms,a,i);return u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),null}(n,e,t,s):n instanceof Ve?function(r,i,o,a){if(!Ls(r.precondition,i))return o;const u=ka(r.fieldTransforms,a,i),c=i.data;return c.setAll(rl(r)),c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(l=>l.field))}(n,e,t,s):function(r,i,o){return Ls(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(n,e,t)}function Vf(n,e){let t=null;for(const s of n.fieldTransforms){const r=e.data.field(s.field),i=Zc(s.transform,r||null);i!=null&&(t===null&&(t=ie.empty()),t.set(s.field,i))}return t||null}function Na(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,s){return t===void 0&&s===void 0||!(!t||!s)&&zt(t,s,(r,i)=>Ff(r,i))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class an extends xr{constructor(e,t,s,r=[]){super(),this.key=e,this.value=t,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class Ve extends xr{constructor(e,t,s,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function rl(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const s=n.data.field(t);e.set(t,s)}}),e}function _a(n,e,t){const s=new Map;b(n.length===t.length);for(let r=0;r<t.length;r++){const i=n[r],o=i.transform,a=e.data.field(i.field);s.set(i.field,Lf(o,a,t[r]))}return s}function ka(n,e,t){const s=new Map;for(const r of n){const i=r.transform,o=t.data.field(r.field);s.set(r.field,Mf(i,o,e))}return s}class un extends xr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class ao extends xr{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class uo{constructor(e,t,s,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(e,t){const s=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(e.key)&&Pf(i,e,s[r])}}applyToLocalView(e,t){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(t=_n(s,e,t,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(t=_n(s,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const s=Hc();return this.mutations.forEach(r=>{const i=e.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(r.key)?null:a;const u=sl(o,a);u!==null&&s.set(r.key,u),o.isValidDocument()||o.convertToNoDocument(x.min())}),s}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),N())}isEqual(e){return this.batchId===e.batchId&&zt(this.mutations,e.mutations,(t,s)=>Na(t,s))&&zt(this.baseMutations,e.baseMutations,(t,s)=>Na(t,s))}}class co{constructor(e,t,s,r){this.batch=e,this.commitVersion=t,this.mutationResults=s,this.docVersions=r}static from(e,t,s){b(e.mutations.length===s.length);let r=_f;const i=e.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new co(e,t,s,r)}}/**
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
 */class lo{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */const qf=/^[_a-zA-Z][_a-zA-Z0-9]*(?:\.[_a-zA-Z][_a-zA-Z0-9]*)*$/;class ho{constructor(e){this.alias=e}static gt(e){return qf.test(e)}canonicalString(){let e=this.alias.replace(/\\/g,"\\\\").replace(/`/g,"\\`");return ho.gt(e)||(e="`"+e+"`"),e}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */class Uf{constructor(e,t,s){this.alias=e,this.yt=t,this.fieldPath=s}}/**
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
 */class Bf{constructor(e){this.count=e}}/**
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
 */var Z,R;function il(n){switch(n){default:return E();case m.CANCELLED:case m.UNKNOWN:case m.DEADLINE_EXCEEDED:case m.RESOURCE_EXHAUSTED:case m.INTERNAL:case m.UNAVAILABLE:case m.UNAUTHENTICATED:return!1;case m.INVALID_ARGUMENT:case m.NOT_FOUND:case m.ALREADY_EXISTS:case m.PERMISSION_DENIED:case m.FAILED_PRECONDITION:case m.ABORTED:case m.OUT_OF_RANGE:case m.UNIMPLEMENTED:case m.DATA_LOSS:return!0}}function ol(n){if(n===void 0)return W("GRPC error has no .code"),m.UNKNOWN;switch(n){case Z.OK:return m.OK;case Z.CANCELLED:return m.CANCELLED;case Z.UNKNOWN:return m.UNKNOWN;case Z.DEADLINE_EXCEEDED:return m.DEADLINE_EXCEEDED;case Z.RESOURCE_EXHAUSTED:return m.RESOURCE_EXHAUSTED;case Z.INTERNAL:return m.INTERNAL;case Z.UNAVAILABLE:return m.UNAVAILABLE;case Z.UNAUTHENTICATED:return m.UNAUTHENTICATED;case Z.INVALID_ARGUMENT:return m.INVALID_ARGUMENT;case Z.NOT_FOUND:return m.NOT_FOUND;case Z.ALREADY_EXISTS:return m.ALREADY_EXISTS;case Z.PERMISSION_DENIED:return m.PERMISSION_DENIED;case Z.FAILED_PRECONDITION:return m.FAILED_PRECONDITION;case Z.ABORTED:return m.ABORTED;case Z.OUT_OF_RANGE:return m.OUT_OF_RANGE;case Z.UNIMPLEMENTED:return m.UNIMPLEMENTED;case Z.DATA_LOSS:return m.DATA_LOSS;default:return E()}}(R=Z||(Z={}))[R.OK=0]="OK",R[R.CANCELLED=1]="CANCELLED",R[R.UNKNOWN=2]="UNKNOWN",R[R.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",R[R.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",R[R.NOT_FOUND=5]="NOT_FOUND",R[R.ALREADY_EXISTS=6]="ALREADY_EXISTS",R[R.PERMISSION_DENIED=7]="PERMISSION_DENIED",R[R.UNAUTHENTICATED=16]="UNAUTHENTICATED",R[R.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",R[R.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",R[R.ABORTED=10]="ABORTED",R[R.OUT_OF_RANGE=11]="OUT_OF_RANGE",R[R.UNIMPLEMENTED=12]="UNIMPLEMENTED",R[R.INTERNAL=13]="INTERNAL",R[R.UNAVAILABLE=14]="UNAVAILABLE",R[R.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
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
 */class fo{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return bs}static getOrCreateInstance(){return bs===null&&(bs=new fo),bs}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let bs=null;/**
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
 */class ls{constructor(e,t,s,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,s){const r=new Map;return r.set(e,hs.createSynthesizedTargetChangeForCurrentChange(e,t,s)),new ls(x.min(),r,Sr(),Se(),N())}}class hs{constructor(e,t,s,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,s){return new hs(s,t,N(),N(),N())}}/**
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
 */class Fs{constructor(e,t,s,r){this.It=e,this.removedTargetIds=t,this.key=s,this.Tt=r}}class al{constructor(e,t){this.targetId=e,this.Et=t}}class ul{constructor(e,t,s=ne.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=s,this.cause=r}}class Ra{constructor(){this.At=0,this.Rt=La(),this.vt=ne.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=N(),t=N(),s=N();return this.Rt.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:s=s.add(r);break;default:E()}}),new hs(this.vt,this.bt,e,t,s)}xt(){this.Pt=!1,this.Rt=La()}Nt(e,t){this.Pt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class $f{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Se(),this.qt=Ma(),this.Ut=new P(C)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}zt(e){this.forEachTarget(e,t=>{const s=this.jt(t);switch(e.state){case 0:this.Wt(t)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(t);break;case 3:this.Wt(t)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(t)&&(this.Ht(t),s.Dt(e.resumeToken));break;default:E()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((s,r)=>{this.Wt(r)&&t(r)})}Jt(e){var t;const s=e.targetId,r=e.Et.count,i=this.Yt(s);if(i){const o=i.target;if(Ws(o))if(r===0){const a=new v(o.path);this.Qt(s,a,V.newNoDocument(a,x.min()))}else b(r===1);else{const a=this.Zt(s);a!==r&&(this.Ht(s),this.Ut=this.Ut.add(s),(t=fo.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const t=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Ws(a.target)){const u=new v(a.target.path);this.Lt.get(u)!==null||this.te(o,u)||this.Qt(o,u,V.newNoDocument(u,e))}i.St&&(t.set(o,i.Ct()),i.xt())}});let s=N();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(u=>{const c=this.Yt(u);return!c||c.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const r=new ls(e,t,this.Ut,this.Lt,s);return this.Lt=Se(),this.qt=Ma(),this.Ut=new P(C),r}Gt(e,t){if(!this.Wt(e))return;const s=this.te(e,t.key)?2:0;this.jt(e).Nt(t.key,s),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,s){if(!this.Wt(e))return;const r=this.jt(e);this.te(e,t)?r.Nt(t,1):r.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),s&&(this.Lt=this.Lt.insert(t,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const t=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let t=this.Bt.get(e);return t||(t=new Ra,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new P(C),this.qt=this.qt.insert(e,t)),t}Wt(e){const t=this.Yt(e)!==null;return t||y("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new Ra),this.Ft.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.Ft.getRemoteKeysForTarget(e).has(t)}}function Ma(){return new j(v.comparator)}function La(){return new j(v.comparator)}/**
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
 */const zf=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Gf=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Kf=(()=>({and:"AND",or:"OR"}))();class jf{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Wt(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function cl(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function Qf(n,e){return Wt(n,e.toTimestamp())}function Y(n){return b(!!n),x.fromTimestamp(function(e){const t=Ye(e);return new $(t.seconds,t.nanos)}(n))}function mo(n,e){return function(t){return new M(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function ll(n){const e=M.fromString(n);return b(wl(e)),e}function zn(n,e){return mo(n.databaseId,e.path)}function ke(n,e){const t=ll(e);if(t.get(1)!==n.databaseId.projectId)throw new p(m.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new p(m.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new v(dl(t))}function Si(n,e){return mo(n.databaseId,e)}function hl(n){const e=ll(n);return e.length===4?M.emptyPath():dl(e)}function Gn(n){return new M(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function dl(n){return b(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Fa(n,e,t){return{name:zn(n,e),fields:t.value.mapValue.fields}}function fl(n,e,t){const s=ke(n,e.name),r=Y(e.updateTime),i=e.createTime?Y(e.createTime):x.min(),o=new ie({mapValue:{fields:e.fields}}),a=V.newFoundDocument(s,r,i,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function Wf(n,e){return"found"in e?function(t,s){b(!!s.found),s.found.name,s.found.updateTime;const r=ke(t,s.found.name),i=Y(s.found.updateTime),o=s.found.createTime?Y(s.found.createTime):x.min(),a=new ie({mapValue:{fields:s.found.fields}});return V.newFoundDocument(r,i,o,a)}(n,e):"missing"in e?function(t,s){b(!!s.missing),b(!!s.readTime);const r=ke(t,s.missing),i=Y(s.readTime);return V.newNoDocument(r,i)}(n,e):E()}function Hf(n,e){let t;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:E()}(e.targetChange.targetChangeType||"NO_CHANGE"),r=e.targetChange.targetIds||[],i=function(u,c){return u.useProto3Json?(b(c===void 0||typeof c=="string"),ne.fromBase64String(c||"")):(b(c===void 0||c instanceof Uint8Array),ne.fromUint8Array(c||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?m.UNKNOWN:ol(u.code);return new p(c,u.message||"")}(o);t=new ul(s,r,i,a||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const r=ke(n,s.document.name),i=Y(s.document.updateTime),o=s.document.createTime?Y(s.document.createTime):x.min(),a=new ie({mapValue:{fields:s.document.fields}}),u=V.newFoundDocument(r,i,o,a),c=s.targetIds||[],l=s.removedTargetIds||[];t=new Fs(c,l,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const r=ke(n,s.document),i=s.readTime?Y(s.readTime):x.min(),o=V.newNoDocument(r,i),a=s.removedTargetIds||[];t=new Fs([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const r=ke(n,s.document),i=s.removedTargetIds||[];t=new Fs([],i,r,null)}else{if(!("filter"in e))return E();{e.filter;const s=e.filter;s.targetId;const r=s.count||0,i=new Bf(r),o=s.targetId;t=new al(o,i)}}return t}function Kn(n,e){let t;if(e instanceof an)t={update:Fa(n,e.key,e.value)};else if(e instanceof un)t={delete:zn(n,e.key)};else if(e instanceof Ve)t={update:Fa(n,e.key,e.data),updateMask:tm(e.fieldMask)};else{if(!(e instanceof ao))return E();t={verify:zn(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(s=>function(r,i){const o=i.transform;if(o instanceof jt)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Et)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof St)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Qt)return{fieldPath:i.field.canonicalString(),increment:o._t};throw E()}(0,s))),e.precondition.isNone||(t.currentDocument=function(s,r){return r.updateTime!==void 0?{updateTime:Qf(s,r.updateTime)}:r.exists!==void 0?{exists:r.exists}:E()}(n,e.precondition)),t}function bi(n,e){const t=e.currentDocument?function(r){return r.updateTime!==void 0?B.updateTime(Y(r.updateTime)):r.exists!==void 0?B.exists(r.exists):B.none()}(e.currentDocument):B.none(),s=e.updateTransforms?e.updateTransforms.map(r=>function(i,o){let a=null;if("setToServerValue"in o)b(o.setToServerValue==="REQUEST_TIME"),a=new jt;else if("appendMissingElements"in o){const c=o.appendMissingElements.values||[];a=new Et(c)}else if("removeAllFromArray"in o){const c=o.removeAllFromArray.values||[];a=new St(c)}else"increment"in o?a=new Qt(i,o.increment):E();const u=H.fromServerFormat(o.fieldPath);return new cs(u,a)}(n,r)):[];if(e.update){e.update.name;const r=ke(n,e.update.name),i=new ie({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const u=a.fieldPaths||[];return new Ee(u.map(c=>H.fromServerFormat(c)))}(e.updateMask);return new Ve(r,i,o,t,s)}return new an(r,i,t,s)}if(e.delete){const r=ke(n,e.delete);return new un(r,t)}if(e.verify){const r=ke(n,e.verify);return new ao(r,t)}return E()}function Yf(n,e){return n&&n.length>0?(b(e!==void 0),n.map(t=>function(s,r){let i=s.updateTime?Y(s.updateTime):Y(r);return i.isEqual(x.min())&&(i=Y(r)),new Of(i,s.transformResults||[])}(t,e))):[]}function ml(n,e){return{documents:[Si(n,e.path)]}}function go(n,e){const t={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(t.parent=Si(n,s),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Si(n,s.popLast()),t.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(u){if(u.length!==0)return yl(F.create(u,"and"))}(e.filters);r&&(t.structuredQuery.where=r);const i=function(u){if(u.length!==0)return u.map(c=>function(l){return{field:Ge(l.field),direction:Jf(l.dir)}}(c))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=function(u,c){return u.useProto3Json||is(c)?c:{value:c}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),t}function gl(n){let e=hl(n.parent);const t=n.structuredQuery,s=t.from?t.from.length:0;let r=null;if(s>0){b(s===1);const l=t.from[0];l.allDescendants?r=l.collectionId:e=e.child(l.collectionId)}let i=[];t.where&&(i=function(l){const h=pl(l);return h instanceof F&&ro(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new qt(Ot(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,is(h)?null:h}(t.limit));let u=null;t.startAt&&(u=function(l){const h=!!l.before,d=l.values||[];return new Je(d,h)}(t.startAt));let c=null;return t.endAt&&(c=function(l){const h=!l.before,d=l.values||[];return new Je(d,h)}(t.endAt)),zc(e,r,o,i,a,"F",u,c)}function Xf(n,e){const t=function(s,r){switch(r){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return E()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function pl(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ot(e.unaryFilter.field);return _.create(t,"==",{doubleValue:NaN});case"IS_NULL":const s=Ot(e.unaryFilter.field);return _.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ot(e.unaryFilter.field);return _.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ot(e.unaryFilter.field);return _.create(i,"!=",{nullValue:"NULL_VALUE"});default:return E()}}(n):n.fieldFilter!==void 0?function(e){return _.create(Ot(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return E()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return F.create(e.compositeFilter.filters.map(t=>pl(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return E()}}(e.compositeFilter.op))}(n):E()}function Jf(n){return zf[n]}function Zf(n){return Gf[n]}function em(n){return Kf[n]}function Ge(n){return{fieldPath:n.canonicalString()}}function Ot(n){return H.fromServerFormat(n.fieldPath)}function yl(n){return n instanceof _?function(e){if(e.op==="=="){if(Ia(e.value))return{unaryFilter:{field:Ge(e.field),op:"IS_NAN"}};if(va(e.value))return{unaryFilter:{field:Ge(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ia(e.value))return{unaryFilter:{field:Ge(e.field),op:"IS_NOT_NAN"}};if(va(e.value))return{unaryFilter:{field:Ge(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ge(e.field),op:Zf(e.op),value:e.value}}}(n):n instanceof F?function(e){const t=e.getFilters().map(s=>yl(s));return t.length===1?t[0]:{compositeFilter:{op:em(e.op),filters:t}}}(n):E()}function tm(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function wl(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class We{constructor(e,t,s,r,i=x.min(),o=x.min(),a=ne.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new We(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new We(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new We(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class vl{constructor(e){this.se=e}}function nm(n,e){let t;if(e.document)t=fl(n.se,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const s=v.fromSegments(e.noDocument.path),r=xt(e.noDocument.readTime);t=V.newNoDocument(s,r),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return E();{const s=v.fromSegments(e.unknownDocument.path),r=xt(e.unknownDocument.version);t=V.newUnknownDocument(s,r)}}return e.readTime&&t.setReadTime(function(s){const r=new $(s[0],s[1]);return x.fromTimestamp(r)}(e.readTime)),t}function Oa(n,e){const t=e.key,s={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:Xs(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())s.document=function(r,i){return{name:zn(r,i.key),fields:i.data.value.mapValue.fields,updateTime:Wt(r,i.version.toTimestamp()),createTime:Wt(r,i.createTime.toTimestamp())}}(n.se,e);else if(e.isNoDocument())s.noDocument={path:t.path.toArray(),readTime:bt(e.version)};else{if(!e.isUnknownDocument())return E();s.unknownDocument={path:t.path.toArray(),version:bt(e.version)}}return s}function Xs(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function bt(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function xt(n){const e=new $(n.seconds,n.nanoseconds);return x.fromTimestamp(e)}function ct(n,e){const t=(e.baseMutations||[]).map(i=>bi(n.se,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const s=e.mutations.map(i=>bi(n.se,i)),r=$.fromMillis(e.localWriteTimeMs);return new uo(e.batchId,r,t,s)}function xn(n){const e=xt(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?xt(n.lastLimboFreeSnapshotVersion):x.min();let s;var r;return n.query.documents!==void 0?(b((r=n.query).documents.length===1),s=ve(on(hl(r.documents[0])))):s=function(i){return ve(gl(i))}(n.query),new We(s,n.targetId,0,n.lastListenSequenceNumber,e,t,ne.fromBase64String(n.resumeToken))}function Il(n,e){const t=bt(e.snapshotVersion),s=bt(e.lastLimboFreeSnapshotVersion);let r;r=Ws(e.target)?ml(n.se,e.target):go(n.se,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:Tt(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:s,query:r}}function po(n){const e=gl({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Ys(e,e.limit,"L"):e}function Yr(n,e){return new lo(e.largestBatchId,bi(n.se,e.overlayMutation))}function Pa(n,e){const t=e.path.lastSegment();return[n,we(e.path.popLast()),t]}function Va(n,e,t,s){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:bt(s.readTime),documentKey:we(s.documentKey.path),largestBatchId:s.largestBatchId}}/**
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
 */class sm{getBundleMetadata(e,t){return qa(e).get(t).next(s=>{if(s)return{id:(r=s).bundleId,createTime:xt(r.createTime),version:r.version};var r})}saveBundleMetadata(e,t){return qa(e).put({bundleId:(s=t).id,createTime:bt(Y(s.createTime)),version:s.version});var s}getNamedQuery(e,t){return Ua(e).get(t).next(s=>{if(s)return{name:(r=s).name,query:po(r.bundledQuery),readTime:xt(r.readTime)};var r})}saveNamedQuery(e,t){return Ua(e).put(function(s){return{name:s.name,readTime:bt(Y(s.readTime)),bundledQuery:s.bundledQuery}}(t))}}function qa(n){return ue(n,"bundles")}function Ua(n){return ue(n,"namedQueries")}/**
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
 */class Dr{constructor(e,t){this.serializer=e,this.userId=t}static ie(e,t){const s=t.uid||"";return new Dr(e,s)}getOverlay(e,t){return pn(e).get(Pa(this.userId,t)).next(s=>s?Yr(this.serializer,s):null)}getOverlays(e,t){const s=_e();return f.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){const r=[];return s.forEach((i,o)=>{const a=new lo(t,o);r.push(this.re(e,a))}),f.waitFor(r)}removeOverlaysForBatchId(e,t,s){const r=new Set;t.forEach(o=>r.add(we(o.getCollectionPath())));const i=[];return r.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,s],[this.userId,o,s+1],!1,!0);i.push(pn(e).J("collectionPathOverlayIndex",a))}),f.waitFor(i)}getOverlaysForCollection(e,t,s){const r=_e(),i=we(t),o=IDBKeyRange.bound([this.userId,i,s],[this.userId,i,Number.POSITIVE_INFINITY],!0);return pn(e).j("collectionPathOverlayIndex",o).next(a=>{for(const u of a){const c=Yr(this.serializer,u);r.set(c.getKey(),c)}return r})}getOverlaysForCollectionGroup(e,t,s,r){const i=_e();let o;const a=IDBKeyRange.bound([this.userId,t,s],[this.userId,t,Number.POSITIVE_INFINITY],!0);return pn(e).Z({index:"collectionGroupOverlayIndex",range:a},(u,c,l)=>{const h=Yr(this.serializer,c);i.size()<r||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>i)}re(e,t){return pn(e).put(function(s,r,i){const[o,a,u]=Pa(r,i.mutation.key);return{userId:r,collectionPath:a,documentId:u,collectionGroup:i.mutation.key.getCollectionGroup(),largestBatchId:i.largestBatchId,overlayMutation:Kn(s.se,i.mutation)}}(this.serializer,this.userId,t))}}function pn(n){return ue(n,"documentOverlays")}/**
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
 */class lt{constructor(){}oe(e,t){this.ue(e,t),t.ce()}ue(e,t){if("nullValue"in e)this.ae(t,5);else if("booleanValue"in e)this.ae(t,10),t.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(t,15),t.he(G(e.integerValue));else if("doubleValue"in e){const s=G(e.doubleValue);isNaN(s)?this.ae(t,13):(this.ae(t,15),qn(s)?t.he(0):t.he(s))}else if("timestampValue"in e){const s=e.timestampValue;this.ae(t,20),typeof s=="string"?t.le(s):(t.le(`${s.seconds||""}`),t.he(s.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,t),this.de(t);else if("bytesValue"in e)this.ae(t,30),t.we(yt(e.bytesValue)),this.de(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const s=e.geoPointValue;this.ae(t,45),t.he(s.latitude||0),t.he(s.longitude||0)}else"mapValue"in e?Lc(e)?this.ae(t,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,t),this.de(t)):"arrayValue"in e?(this.ge(e.arrayValue,t),this.de(t)):E()}fe(e,t){this.ae(t,25),this.ye(e,t)}ye(e,t){t.le(e)}me(e,t){const s=e.fields||{};this.ae(t,55);for(const r of Object.keys(s))this.fe(r,t),this.ue(s[r],t)}ge(e,t){const s=e.values||[];this.ae(t,50);for(const r of s)this.ue(r,t)}_e(e,t){this.ae(t,37),v.fromName(e).path.forEach(s=>{this.ae(t,60),this.ye(s,t)})}ae(e,t){e.he(t)}de(e){e.he(2)}}lt.pe=new lt;function rm(n){if(n===0)return 8;let e=0;return n>>4==0&&(e+=4,n<<=4),n>>6==0&&(e+=2,n<<=2),n>>7==0&&(e+=1),e}function Ba(n){const e=64-function(t){let s=0;for(let r=0;r<8;++r){const i=rm(255&t[r]);if(s+=i,i!==8)break}return s}(n);return Math.ceil(e/8)}class im{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ie(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.Te(s.value),s=t.next();this.Ee()}Ae(e){const t=e[Symbol.iterator]();let s=t.next();for(;!s.done;)this.Re(s.value),s=t.next();this.ve()}be(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.Te(s);else if(s<2048)this.Te(960|s>>>6),this.Te(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.Te(480|s>>>12),this.Te(128|63&s>>>6),this.Te(128|63&s);else{const r=t.codePointAt(0);this.Te(240|r>>>18),this.Te(128|63&r>>>12),this.Te(128|63&r>>>6),this.Te(128|63&r)}}this.Ee()}Pe(e){for(const t of e){const s=t.charCodeAt(0);if(s<128)this.Re(s);else if(s<2048)this.Re(960|s>>>6),this.Re(128|63&s);else if(t<"\uD800"||"\uDBFF"<t)this.Re(480|s>>>12),this.Re(128|63&s>>>6),this.Re(128|63&s);else{const r=t.codePointAt(0);this.Re(240|r>>>18),this.Re(128|63&r>>>12),this.Re(128|63&r>>>6),this.Re(128|63&r)}}this.ve()}Ve(e){const t=this.Se(e),s=Ba(t);this.De(1+s),this.buffer[this.position++]=255&s;for(let r=t.length-s;r<t.length;++r)this.buffer[this.position++]=255&t[r]}Ce(e){const t=this.Se(e),s=Ba(t);this.De(1+s),this.buffer[this.position++]=~(255&s);for(let r=t.length-s;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}xe(){this.Ne(255),this.Ne(255)}ke(){this.Oe(255),this.Oe(255)}reset(){this.position=0}seed(e){this.De(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Se(e){const t=function(r){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,r,!1),new Uint8Array(i.buffer)}(e),s=(128&t[0])!=0;t[0]^=s?255:128;for(let r=1;r<t.length;++r)t[r]^=s?255:0;return t}Te(e){const t=255&e;t===0?(this.Ne(0),this.Ne(255)):t===255?(this.Ne(255),this.Ne(0)):this.Ne(t)}Re(e){const t=255&e;t===0?(this.Oe(0),this.Oe(255)):t===255?(this.Oe(255),this.Oe(0)):this.Oe(e)}Ee(){this.Ne(0),this.Ne(1)}ve(){this.Oe(0),this.Oe(1)}Ne(e){this.De(1),this.buffer[this.position++]=e}Oe(e){this.De(1),this.buffer[this.position++]=~e}De(e){const t=e+this.position;if(t<=this.buffer.length)return;let s=2*this.buffer.length;s<t&&(s=t);const r=new Uint8Array(s);r.set(this.buffer),this.buffer=r}}class om{constructor(e){this.Me=e}we(e){this.Me.Ie(e)}le(e){this.Me.be(e)}he(e){this.Me.Ve(e)}ce(){this.Me.xe()}}class am{constructor(e){this.Me=e}we(e){this.Me.Ae(e)}le(e){this.Me.Pe(e)}he(e){this.Me.Ce(e)}ce(){this.Me.ke()}}class yn{constructor(){this.Me=new im,this.Fe=new om(this.Me),this.Be=new am(this.Me)}seed(e){this.Me.seed(e)}Le(e){return e===0?this.Fe:this.Be}$e(){return this.Me.$e()}reset(){this.Me.reset()}}/**
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
 */class ht{constructor(e,t,s,r){this.indexId=e,this.documentKey=t,this.arrayValue=s,this.directionalValue=r}qe(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,s=new Uint8Array(t);return s.set(this.directionalValue,0),t!==e?s.set([0],this.directionalValue.length):++s[s.length-1],new ht(this.indexId,this.documentKey,this.arrayValue,s)}}function $e(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=$a(n.arrayValue,e.arrayValue),t!==0?t:(t=$a(n.directionalValue,e.directionalValue),t!==0?t:v.comparator(n.documentKey,e.documentKey)))}function $a(n,e){for(let t=0;t<n.length&&t<e.length;++t){const s=n[t]-e[t];if(s!==0)return s}return n.length-e.length}/**
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
 */class um{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ue=e.orderBy,this.Ke=[];for(const t of e.filters){const s=t;s.isInequality()?this.Ge=s:this.Ke.push(s)}}Qe(e){b(e.collectionGroup===this.collectionId);const t=mi(e);if(t!==void 0&&!this.ze(t))return!1;const s=at(e);let r=0,i=0;for(;r<s.length&&this.ze(s[r]);++r);if(r===s.length)return!0;if(this.Ge!==void 0){const o=s[r];if(!this.je(this.Ge,o)||!this.We(this.Ue[i++],o))return!1;++r}for(;r<s.length;++r){const o=s[r];if(i>=this.Ue.length||!this.We(this.Ue[i++],o))return!1}return!0}ze(e){for(const t of this.Ke)if(this.je(t,e))return!0;return!1}je(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const s=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===s}We(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function Tl(n){var e,t;if(b(n instanceof _||n instanceof F),n instanceof _){if(n instanceof $c){const r=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>_.create(n.field,"==",i)))||[];return F.create(r,"or")}return n}const s=n.filters.map(r=>Tl(r));return F.create(s,n.op)}function cm(n){if(n.getFilters().length===0)return[];const e=Ci(Tl(n));return b(El(e)),xi(e)||Di(e)?[e]:e.getFilters()}function xi(n){return n instanceof _}function Di(n){return n instanceof F&&ro(n)}function El(n){return xi(n)||Di(n)||function(e){if(e instanceof F&&wi(e)){for(const t of e.getFilters())if(!xi(t)&&!Di(t))return!1;return!0}return!1}(n)}function Ci(n){if(b(n instanceof _||n instanceof F),n instanceof _)return n;if(n.filters.length===1)return Ci(n.filters[0]);const e=n.filters.map(s=>Ci(s));let t=F.create(e,n.op);return t=Js(t),El(t)?t:(b(t instanceof F),b(Kt(t)),b(t.filters.length>1),t.filters.reduce((s,r)=>yo(s,r)))}function yo(n,e){let t;return b(n instanceof _||n instanceof F),b(e instanceof _||e instanceof F),t=n instanceof _?e instanceof _?function(s,r){return F.create([s,r],"and")}(n,e):za(n,e):e instanceof _?za(e,n):function(s,r){if(b(s.filters.length>0&&r.filters.length>0),Kt(s)&&Kt(r))return qc(s,r.getFilters());const i=wi(s)?s:r,o=wi(s)?r:s,a=i.filters.map(u=>yo(u,o));return F.create(a,"or")}(n,e),Js(t)}function za(n,e){if(Kt(e))return qc(e,n.getFilters());{const t=e.filters.map(s=>yo(n,s));return F.create(t,"or")}}function Js(n){if(b(n instanceof _||n instanceof F),n instanceof _)return n;const e=n.getFilters();if(e.length===1)return Js(e[0]);if(Pc(n))return n;const t=e.map(r=>Js(r)),s=[];return t.forEach(r=>{r instanceof _?s.push(r):r instanceof F&&(r.op===n.op?s.push(...r.filters):s.push(r))}),s.length===1?s[0]:F.create(s,n.op)}/**
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
 */class lm{constructor(){this.He=new wo}addToCollectionParentIndex(e,t){return this.He.add(t),f.resolve()}getCollectionParents(e,t){return f.resolve(this.He.getEntries(t))}addFieldIndex(e,t){return f.resolve()}deleteFieldIndex(e,t){return f.resolve()}getDocumentsMatchingTarget(e,t){return f.resolve(null)}getIndexType(e,t){return f.resolve(0)}getFieldIndexes(e,t){return f.resolve([])}getNextCollectionGroupToUpdate(e){return f.resolve(null)}getMinOffset(e,t){return f.resolve(De.min())}getMinOffsetFromCollectionGroup(e,t){return f.resolve(De.min())}updateCollectionGroup(e,t,s){return f.resolve()}updateIndexEntries(e,t){return f.resolve()}}class wo{constructor(){this.index={}}add(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t]||new P(M.comparator),i=!r.has(s);return this.index[t]=r.add(s),i}has(e){const t=e.lastSegment(),s=e.popLast(),r=this.index[t];return r&&r.has(s)}getEntries(e){return(this.index[e]||new P(M.comparator)).toArray()}}/**
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
 */const xs=new Uint8Array(0);class hm{constructor(e,t){this.user=e,this.databaseId=t,this.Je=new wo,this.Ye=new rt(s=>Tt(s),(s,r)=>os(s,r)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Je.has(t)){const s=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.Je.add(t)});const i={collectionId:s,parent:we(r)};return Ga(e).put(i)}return f.resolve()}getCollectionParents(e,t){const s=[],r=IDBKeyRange.bound([t,""],[Ec(t),""],!1,!0);return Ga(e).j(r).next(i=>{for(const o of i){if(o.collectionId!==t)break;s.push(Ne(o.parent))}return s})}addFieldIndex(e,t){const s=Ds(e),r=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete r.indexId;const i=s.add(r);if(t.indexState){const o=vn(e);return i.next(a=>{o.put(Va(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const s=Ds(e),r=vn(e),i=wn(e);return s.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const s=wn(e);let r=!0;const i=new Map;return f.forEach(this.Ze(t),o=>this.Xe(e,o).next(a=>{r&&(r=!!a),i.set(o,a)})).next(()=>{if(r){let o=N();const a=[];return f.forEach(i,(u,c)=>{var l;y("IndexedDbIndexManager",`Using index ${l=u,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(O=>`${O.fieldPath}:${O.kind}`).join(",")}`} to execute ${Tt(t)}`);const h=function(O,pe){const J=mi(pe);if(J===void 0)return null;for(const z of Hs(O,J.fieldPath))switch(z.op){case"array-contains-any":return z.value.arrayValue.values||[];case"array-contains":return[z.value]}return null}(c,u),d=function(O,pe){const J=new Map;for(const z of at(pe))for(const be of Hs(O,z.fieldPath))switch(be.op){case"==":case"in":J.set(z.fieldPath.canonicalString(),be.value);break;case"not-in":case"!=":return J.set(z.fieldPath.canonicalString(),be.value),Array.from(J.values())}return null}(c,u),g=function(O,pe){const J=[];let z=!0;for(const be of at(pe)){const Be=be.kind===0?xa(O,be.fieldPath,O.startAt):Da(O,be.fieldPath,O.startAt);J.push(Be.value),z&&(z=Be.inclusive)}return new Je(J,z)}(c,u),w=function(O,pe){const J=[];let z=!0;for(const be of at(pe)){const Be=be.kind===0?Da(O,be.fieldPath,O.endAt):xa(O,be.fieldPath,O.endAt);J.push(Be.value),z&&(z=Be.inclusive)}return new Je(J,z)}(c,u),T=this.tn(u,c,g),D=this.tn(u,c,w),L=this.en(u,c,d),Q=this.nn(u.indexId,h,T,g.inclusive,D,w.inclusive,L);return f.forEach(Q,O=>s.H(O,t.limit).next(pe=>{pe.forEach(J=>{const z=v.fromSegments(J.documentKey);o.has(z)||(o=o.add(z),a.push(z))})}))}).next(()=>a)}return f.resolve(null)})}Ze(e){let t=this.Ye.get(e);return t||(e.filters.length===0?t=[e]:t=cm(F.create(e.filters,"and")).map(s=>Ii(e.path,e.collectionGroup,e.orderBy,s.getFilters(),e.limit,e.startAt,e.endAt)),this.Ye.set(e,t),t)}nn(e,t,s,r,i,o,a){const u=(t!=null?t.length:1)*Math.max(s.length,i.length),c=u/(t!=null?t.length:1),l=[];for(let h=0;h<u;++h){const d=t?this.sn(t[h/c]):xs,g=this.rn(e,d,s[h%c],r),w=this.on(e,d,i[h%c],o),T=a.map(D=>this.rn(e,d,D,!0));l.push(...this.createRange(g,w,T))}return l}rn(e,t,s,r){const i=new ht(e,v.empty(),t,s);return r?i:i.qe()}on(e,t,s,r){const i=new ht(e,v.empty(),t,s);return r?i.qe():i}Xe(e,t){const s=new um(t),r=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(i=>{let o=null;for(const a of i)s.Qe(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let s=2;const r=this.Ze(t);return f.forEach(r,i=>this.Xe(e,i).next(o=>{o?s!==0&&o.fields.length<function(a){let u=new P(H.comparator),c=!1;for(const l of a.filters)for(const h of l.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?c=!0:u=u.add(h.field));for(const l of a.orderBy)l.field.isKeyField()||(u=u.add(l.field));return u.size+(c?1:0)}(i)&&(s=1):s=0})).next(()=>function(i){return i.limit!==null}(t)&&r.length>1&&s===2?1:s)}un(e,t){const s=new yn;for(const r of at(e)){const i=t.data.field(r.fieldPath);if(i==null)return null;const o=s.Le(r.kind);lt.pe.oe(i,o)}return s.$e()}sn(e){const t=new yn;return lt.pe.oe(e,t.Le(0)),t.$e()}cn(e,t){const s=new yn;return lt.pe.oe(It(this.databaseId,t),s.Le(function(r){const i=at(r);return i.length===0?0:i[i.length-1].kind}(e))),s.$e()}en(e,t,s){if(s===null)return[];let r=[];r.push(new yn);let i=0;for(const o of at(e)){const a=s[i++];for(const u of r)if(this.an(t,o.fieldPath)&&$n(a))r=this.hn(r,o,a);else{const c=u.Le(o.kind);lt.pe.oe(a,c)}}return this.ln(r)}tn(e,t,s){return this.en(e,t,s.position)}ln(e){const t=[];for(let s=0;s<e.length;++s)t[s]=e[s].$e();return t}hn(e,t,s){const r=[...e],i=[];for(const o of s.arrayValue.values||[])for(const a of r){const u=new yn;u.seed(a.$e()),lt.pe.oe(o,u.Le(t.kind)),i.push(u)}return i}an(e,t){return!!e.filters.find(s=>s instanceof _&&s.field.isEqual(t)&&(s.op==="in"||s.op==="not-in"))}getFieldIndexes(e,t){const s=Ds(e),r=vn(e);return(t?s.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):s.j()).next(i=>{const o=[];return f.forEach(i,a=>r.get([a.indexId,this.uid]).next(u=>{o.push(function(c,l){const h=l?new Vn(l.sequenceNumber,new De(xt(l.readTime),new v(Ne(l.documentKey)),l.largestBatchId)):Vn.empty(),d=c.fields.map(([g,w])=>new _s(H.fromServerFormat(g),w));return new Qs(c.indexId,c.collectionGroup,d,h)}(a,u))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((s,r)=>{const i=s.indexState.sequenceNumber-r.indexState.sequenceNumber;return i!==0?i:C(s.collectionGroup,r.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,s){const r=Ds(e),i=vn(e);return this.fn(e).next(o=>r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>f.forEach(a,u=>i.put(Va(u.indexId,this.user,o,s)))))}updateIndexEntries(e,t){const s=new Map;return f.forEach(t,(r,i)=>{const o=s.get(r.collectionGroup);return(o?f.resolve(o):this.getFieldIndexes(e,r.collectionGroup)).next(a=>(s.set(r.collectionGroup,a),f.forEach(a,u=>this.dn(e,r,u).next(c=>{const l=this.wn(i,u);return c.isEqual(l)?f.resolve():this._n(e,i,u,c,l)}))))})}mn(e,t,s,r){return wn(e).put({indexId:r.indexId,uid:this.uid,arrayValue:r.arrayValue,directionalValue:r.directionalValue,orderedDocumentKey:this.cn(s,t.key),documentKey:t.key.path.toArray()})}gn(e,t,s,r){return wn(e).delete([r.indexId,this.uid,r.arrayValue,r.directionalValue,this.cn(s,t.key),t.key.path.toArray()])}dn(e,t,s){const r=wn(e);let i=new P($e);return r.Z({index:"documentKeyIndex",range:IDBKeyRange.only([s.indexId,this.uid,this.cn(s,t)])},(o,a)=>{i=i.add(new ht(s.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>i)}wn(e,t){let s=new P($e);const r=this.un(t,e);if(r==null)return s;const i=mi(t);if(i!=null){const o=e.data.field(i.fieldPath);if($n(o))for(const a of o.arrayValue.values||[])s=s.add(new ht(t.indexId,e.key,this.sn(a),r))}else s=s.add(new ht(t.indexId,e.key,xs,r));return s}_n(e,t,s,r,i){y("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,u,c,l,h){const d=a.getIterator(),g=u.getIterator();let w=Lt(d),T=Lt(g);for(;w||T;){let D=!1,L=!1;if(w&&T){const Q=c(w,T);Q<0?L=!0:Q>0&&(D=!0)}else w!=null?L=!0:D=!0;D?(l(T),T=Lt(g)):L?(h(w),w=Lt(d)):(w=Lt(d),T=Lt(g))}}(r,i,$e,a=>{o.push(this.mn(e,t,s,a))},a=>{o.push(this.gn(e,t,s,a))}),f.waitFor(o)}fn(e){let t=1;return vn(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(s,r,i)=>{i.done(),t=r.sequenceNumber+1}).next(()=>t)}createRange(e,t,s){s=s.sort((o,a)=>$e(o,a)).filter((o,a,u)=>!a||$e(o,u[a-1])!==0);const r=[];r.push(e);for(const o of s){const a=$e(o,e),u=$e(o,t);if(a===0)r[0]=e.qe();else if(a>0&&u<0)r.push(o),r.push(o.qe());else if(u>0)break}r.push(t);const i=[];for(let o=0;o<r.length;o+=2){if(this.yn(r[o],r[o+1]))return[];const a=[r[o].indexId,this.uid,r[o].arrayValue,r[o].directionalValue,xs,[]],u=[r[o+1].indexId,this.uid,r[o+1].arrayValue,r[o+1].directionalValue,xs,[]];i.push(IDBKeyRange.bound(a,u))}return i}yn(e,t){return $e(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Ka)}getMinOffset(e,t){return f.mapArray(this.Ze(t),s=>this.Xe(e,s).next(r=>r||E())).next(Ka)}}function Ga(n){return ue(n,"collectionParents")}function wn(n){return ue(n,"indexEntries")}function Ds(n){return ue(n,"indexConfiguration")}function vn(n){return ue(n,"indexState")}function Ka(n){b(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let s=1;s<n.length;s++){const r=n[s].indexState.offset;to(r,e)<0&&(e=r),t<r.largestBatchId&&(t=r.largestBatchId)}return new De(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
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
 */const ja={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ie{constructor(e,t,s){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=s}static withCacheSize(e){return new Ie(e,Ie.DEFAULT_COLLECTION_PERCENTILE,Ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function Sl(n,e,t){const s=n.store("mutations"),r=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const u=s.Z({range:o},(l,h,d)=>(a++,d.delete()));i.push(u.next(()=>{b(a===1)}));const c=[];for(const l of t.mutations){const h=Ac(e,l.key.path,t.batchId);i.push(r.delete(h)),c.push(l.key)}return f.waitFor(i).next(()=>c)}function Zs(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw E();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Ie.DEFAULT_COLLECTION_PERCENTILE=10,Ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ie.DEFAULT=new Ie(41943040,Ie.DEFAULT_COLLECTION_PERCENTILE,Ie.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ie.DISABLED=new Ie(-1,0,0);class Cr{constructor(e,t,s,r){this.userId=e,this.serializer=t,this.indexManager=s,this.referenceDelegate=r,this.pn={}}static ie(e,t,s,r){b(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Cr(i,t,s,r)}checkEmpty(e){let t=!0;const s=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return ze(e).Z({index:"userMutationsIndex",range:s},(r,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,s,r){const i=Pt(e),o=ze(e);return o.add({}).next(a=>{b(typeof a=="number");const u=new uo(a,t,s,r),c=function(d,g,w){const T=w.baseMutations.map(L=>Kn(d.se,L)),D=w.mutations.map(L=>Kn(d.se,L));return{userId:g,batchId:w.batchId,localWriteTimeMs:w.localWriteTime.toMillis(),baseMutations:T,mutations:D}}(this.serializer,this.userId,u),l=[];let h=new P((d,g)=>C(d.canonicalString(),g.canonicalString()));for(const d of r){const g=Ac(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(c)),l.push(i.put(g,Xd))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.pn[a]=u.keys()}),f.waitFor(l).next(()=>u)})}lookupMutationBatch(e,t){return ze(e).get(t).next(s=>s?(b(s.userId===this.userId),ct(this.serializer,s)):null)}In(e,t){return this.pn[t]?f.resolve(this.pn[t]):this.lookupMutationBatch(e,t).next(s=>{if(s){const r=s.keys();return this.pn[t]=r,r}return null})}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=IDBKeyRange.lowerBound([this.userId,s]);let i=null;return ze(e).Z({index:"userMutationsIndex",range:r},(o,a,u)=>{a.userId===this.userId&&(b(a.batchId>=s),i=ct(this.serializer,a)),u.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let s=-1;return ze(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(r,i,o)=>{s=i.batchId,o.done()}).next(()=>s)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return ze(e).j("userMutationsIndex",t).next(s=>s.map(r=>ct(this.serializer,r)))}getAllMutationBatchesAffectingDocumentKey(e,t){const s=ks(this.userId,t.path),r=IDBKeyRange.lowerBound(s),i=[];return Pt(e).Z({range:r},(o,a,u)=>{const[c,l,h]=o,d=Ne(l);if(c===this.userId&&t.path.isEqual(d))return ze(e).get(h).next(g=>{if(!g)throw E();b(g.userId===this.userId),i.push(ct(this.serializer,g))});u.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new P(C);const r=[];return t.forEach(i=>{const o=ks(this.userId,i.path),a=IDBKeyRange.lowerBound(o),u=Pt(e).Z({range:a},(c,l,h)=>{const[d,g,w]=c,T=Ne(g);d===this.userId&&i.path.isEqual(T)?s=s.add(w):h.done()});r.push(u)}),f.waitFor(r).next(()=>this.Tn(e,s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1,i=ks(this.userId,s),o=IDBKeyRange.lowerBound(i);let a=new P(C);return Pt(e).Z({range:o},(u,c,l)=>{const[h,d,g]=u,w=Ne(d);h===this.userId&&s.isPrefixOf(w)?w.length===r&&(a=a.add(g)):l.done()}).next(()=>this.Tn(e,a))}Tn(e,t){const s=[],r=[];return t.forEach(i=>{r.push(ze(e).get(i).next(o=>{if(o===null)throw E();b(o.userId===this.userId),s.push(ct(this.serializer,o))}))}),f.waitFor(r).next(()=>s)}removeMutationBatch(e,t){return Sl(e.at,this.userId,t).next(s=>(e.addOnCommittedListener(()=>{this.En(t.batchId)}),f.forEach(s,r=>this.referenceDelegate.markPotentiallyOrphaned(e,r))))}En(e){delete this.pn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return f.resolve();const s=IDBKeyRange.lowerBound([this.userId]),r=[];return Pt(e).Z({range:s},(i,o,a)=>{if(i[0]===this.userId){const u=Ne(i[1]);r.push(u)}else a.done()}).next(()=>{b(r.length===0)})})}containsKey(e,t){return bl(e,this.userId,t)}An(e){return xl(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function bl(n,e,t){const s=ks(e,t.path),r=s[1],i=IDBKeyRange.lowerBound(s);let o=!1;return Pt(n).Z({range:i,Y:!0},(a,u,c)=>{const[l,h,d]=a;l===e&&h===r&&(o=!0),c.done()}).next(()=>o)}function ze(n){return ue(n,"mutations")}function Pt(n){return ue(n,"documentMutations")}function xl(n){return ue(n,"mutationQueues")}/**
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
 */class Dt{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Dt(0)}static bn(){return new Dt(-1)}}/**
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
 */class dm{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Pn(e).next(t=>{const s=new Dt(t.highestTargetId);return t.highestTargetId=s.next(),this.Vn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Pn(e).next(t=>x.fromTimestamp(new $(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Pn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,s){return this.Pn(e).next(r=>(r.highestListenSequenceNumber=t,s&&(r.lastRemoteSnapshotVersion=s.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.Vn(e,r)))}addTargetData(e,t){return this.Sn(e,t).next(()=>this.Pn(e).next(s=>(s.targetCount+=1,this.Dn(t,s),this.Vn(e,s))))}updateTargetData(e,t){return this.Sn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Ft(e).delete(t.targetId)).next(()=>this.Pn(e)).next(s=>(b(s.targetCount>0),s.targetCount-=1,this.Vn(e,s)))}removeTargets(e,t,s){let r=0;const i=[];return Ft(e).Z((o,a)=>{const u=xn(a);u.sequenceNumber<=t&&s.get(u.targetId)===null&&(r++,i.push(this.removeTargetData(e,u)))}).next(()=>f.waitFor(i)).next(()=>r)}forEachTarget(e,t){return Ft(e).Z((s,r)=>{const i=xn(r);t(i)})}Pn(e){return Qa(e).get("targetGlobalKey").next(t=>(b(t!==null),t))}Vn(e,t){return Qa(e).put("targetGlobalKey",t)}Sn(e,t){return Ft(e).put(Il(this.serializer,t))}Dn(e,t){let s=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,s=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,s=!0),s}getTargetCount(e){return this.Pn(e).next(t=>t.targetCount)}getTargetData(e,t){const s=Tt(t),r=IDBKeyRange.bound([s,Number.NEGATIVE_INFINITY],[s,Number.POSITIVE_INFINITY]);let i=null;return Ft(e).Z({range:r,index:"queryTargetsIndex"},(o,a,u)=>{const c=xn(a);os(t,c.target)&&(i=c,u.done())}).next(()=>i)}addMatchingKeys(e,t,s){const r=[],i=Ke(e);return t.forEach(o=>{const a=we(o.path);r.push(i.put({targetId:s,path:a})),r.push(this.referenceDelegate.addReference(e,s,o))}),f.waitFor(r)}removeMatchingKeys(e,t,s){const r=Ke(e);return f.forEach(t,i=>{const o=we(i.path);return f.waitFor([r.delete([s,o]),this.referenceDelegate.removeReference(e,s,i)])})}removeMatchingKeysForTargetId(e,t){const s=Ke(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return s.delete(r)}getMatchingKeysForTargetId(e,t){const s=IDBKeyRange.bound([t],[t+1],!1,!0),r=Ke(e);let i=N();return r.Z({range:s,Y:!0},(o,a,u)=>{const c=Ne(o[1]),l=new v(c);i=i.add(l)}).next(()=>i)}containsKey(e,t){const s=we(t.path),r=IDBKeyRange.bound([s],[Ec(s)],!1,!0);let i=0;return Ke(e).Z({index:"documentTargetsIndex",Y:!0,range:r},([o,a],u,c)=>{o!==0&&(i++,c.done())}).next(()=>i>0)}ne(e,t){return Ft(e).get(t).next(s=>s?xn(s):null)}}function Ft(n){return ue(n,"targets")}function Qa(n){return ue(n,"targetGlobal")}function Ke(n){return ue(n,"targetDocuments")}/**
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
 */function Wa([n,e],[t,s]){const r=C(n,t);return r===0?C(e,s):r}class fm{constructor(e){this.Cn=e,this.buffer=new P(Wa),this.xn=0}Nn(){return++this.xn}kn(e){const t=[e,this.Nn()];if(this.buffer.size<this.Cn)this.buffer=this.buffer.add(t);else{const s=this.buffer.last();Wa(t,s)<0&&(this.buffer=this.buffer.delete(s).add(t))}}get maxValue(){return this.buffer.last()[0]}}class mm{constructor(e,t,s){this.garbageCollector=e,this.asyncQueue=t,this.localStore=s,this.On=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.$n(6e4)}stop(){this.On&&(this.On.cancel(),this.On=null)}get started(){return this.On!==null}$n(e){y("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.On=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.On=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){st(t)?y("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await nt(t)}await this.$n(3e5)})}}class gm{constructor(e,t){this.Mn=e,this.params=t}calculateTargetCount(e,t){return this.Mn.Fn(e).next(s=>Math.floor(t/100*s))}nthSequenceNumber(e,t){if(t===0)return f.resolve(Te.ct);const s=new fm(t);return this.Mn.forEachTarget(e,r=>s.kn(r.sequenceNumber)).next(()=>this.Mn.Bn(e,r=>s.kn(r))).next(()=>s.maxValue)}removeTargets(e,t,s){return this.Mn.removeTargets(e,t,s)}removeOrphanedDocuments(e,t){return this.Mn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(y("LruGarbageCollector","Garbage collection skipped; disabled"),f.resolve(ja)):this.getCacheSize(e).next(s=>s<this.params.cacheSizeCollectionThreshold?(y("LruGarbageCollector",`Garbage collection skipped; Cache size ${s} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),ja):this.Ln(e,t))}getCacheSize(e){return this.Mn.getCacheSize(e)}Ln(e,t){let s,r,i,o,a,u,c;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(y("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),r=this.params.maximumSequenceNumbersToCollect):r=h,o=Date.now(),this.nthSequenceNumber(e,r))).next(h=>(s=h,a=Date.now(),this.removeTargets(e,s,t))).next(h=>(i=h,u=Date.now(),this.removeOrphanedDocuments(e,s))).next(h=>(c=Date.now(),fi()<=Bt.DEBUG&&y("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${r} in `+(a-o)+`ms
	Removed ${i} targets in `+(u-a)+`ms
	Removed ${h} documents in `+(c-u)+`ms
Total Duration: ${c-l}ms`),f.resolve({didRun:!0,sequenceNumbersCollected:r,targetsRemoved:i,documentsRemoved:h})))}}/**
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
 */class pm{constructor(e,t){this.db=e,this.garbageCollector=function(s,r){return new gm(s,r)}(this,t)}Fn(e){const t=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(s=>t.next(r=>s+r))}qn(e){let t=0;return this.Bn(e,s=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Bn(e,t){return this.Un(e,(s,r)=>t(r))}addReference(e,t,s){return Cs(e,s)}removeReference(e,t,s){return Cs(e,s)}removeTargets(e,t,s){return this.db.getTargetCache().removeTargets(e,t,s)}markPotentiallyOrphaned(e,t){return Cs(e,t)}Kn(e,t){return function(s,r){let i=!1;return xl(s).X(o=>bl(s,o,r).next(a=>(a&&(i=!0),f.resolve(!a)))).next(()=>i)}(e,t)}removeOrphanedDocuments(e,t){const s=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let i=0;return this.Un(e,(o,a)=>{if(a<=t){const u=this.Kn(e,o).next(c=>{if(!c)return i++,s.getEntry(e,o).next(()=>(s.removeEntry(o,x.min()),Ke(e).delete([0,we(o.path)])))});r.push(u)}}).next(()=>f.waitFor(r)).next(()=>s.apply(e)).next(()=>i)}removeTarget(e,t){const s=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,s)}updateLimboDocument(e,t){return Cs(e,t)}Un(e,t){const s=Ke(e);let r,i=Te.ct;return s.Z({index:"documentTargetsIndex"},([o,a],{path:u,sequenceNumber:c})=>{o===0?(i!==Te.ct&&t(new v(Ne(r)),i),i=c,r=u):i=Te.ct}).next(()=>{i!==Te.ct&&t(new v(Ne(r)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Cs(n,e){return Ke(n).put(function(t,s){return{targetId:0,path:we(t.path),sequenceNumber:s}}(e,n.currentSequenceNumber))}/**
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
 */class Dl{constructor(){this.changes=new rt(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,V.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const s=this.changes.get(t);return s!==void 0?f.resolve(s):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class ym{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,s){return ot(e).put(s)}removeEntry(e,t,s){return ot(e).delete(function(r,i){const o=r.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],Xs(i),o[o.length-1]]}(t,s))}updateMetadata(e,t){return this.getMetadata(e).next(s=>(s.byteSize+=t,this.Gn(e,s)))}getEntry(e,t){let s=V.newInvalidDocument(t);return ot(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(In(t))},(r,i)=>{s=this.Qn(t,i)}).next(()=>s)}zn(e,t){let s={size:0,document:V.newInvalidDocument(t)};return ot(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(In(t))},(r,i)=>{s={document:this.Qn(t,i),size:Zs(i)}}).next(()=>s)}getEntries(e,t){let s=Se();return this.jn(e,t,(r,i)=>{const o=this.Qn(r,i);s=s.insert(r,o)}).next(()=>s)}Wn(e,t){let s=Se(),r=new j(v.comparator);return this.jn(e,t,(i,o)=>{const a=this.Qn(i,o);s=s.insert(i,a),r=r.insert(i,Zs(o))}).next(()=>({documents:s,Hn:r}))}jn(e,t,s){if(t.isEmpty())return f.resolve();let r=new P(Xa);t.forEach(u=>r=r.add(u));const i=IDBKeyRange.bound(In(r.first()),In(r.last())),o=r.getIterator();let a=o.getNext();return ot(e).Z({index:"documentKeyIndex",range:i},(u,c,l)=>{const h=v.fromSegments([...c.prefixPath,c.collectionGroup,c.documentId]);for(;a&&Xa(a,h)<0;)s(a,null),a=o.getNext();a&&a.isEqual(h)&&(s(a,c),a=o.hasNext()?o.getNext():null),a?l.G(In(a)):l.done()}).next(()=>{for(;a;)s(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,s,r){const i=t.path,o=[i.popLast().toArray(),i.lastSegment(),Xs(s.readTime),s.documentKey.path.isEmpty()?"":s.documentKey.path.lastSegment()],a=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return ot(e).j(IDBKeyRange.bound(o,a,!0)).next(u=>{let c=Se();for(const l of u){const h=this.Qn(v.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&(us(t,h)||r.has(h.key))&&(c=c.insert(h.key,h))}return c})}getAllFromCollectionGroup(e,t,s,r){let i=Se();const o=Ya(t,s),a=Ya(t,De.max());return ot(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(u,c,l)=>{const h=this.Qn(v.fromSegments(c.prefixPath.concat(c.collectionGroup,c.documentId)),c);i=i.insert(h.key,h),i.size===r&&l.done()}).next(()=>i)}newChangeBuffer(e){return new wm(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return Ha(e).get("remoteDocumentGlobalKey").next(t=>(b(!!t),t))}Gn(e,t){return Ha(e).put("remoteDocumentGlobalKey",t)}Qn(e,t){if(t){const s=nm(this.serializer,t);if(!(s.isNoDocument()&&s.version.isEqual(x.min())))return s}return V.newInvalidDocument(e)}}function Cl(n){return new ym(n)}class wm extends Dl{constructor(e,t){super(),this.Jn=e,this.trackRemovals=t,this.Yn=new rt(s=>s.toString(),(s,r)=>s.isEqual(r))}applyChanges(e){const t=[];let s=0,r=new P((i,o)=>C(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.Yn.get(i);if(t.push(this.Jn.removeEntry(e,i,a.readTime)),o.isValidDocument()){const u=Oa(this.Jn.serializer,o);r=r.add(i.path.popLast());const c=Zs(u);s+=c-a.size,t.push(this.Jn.addEntry(e,i,u))}else if(s-=a.size,this.trackRemovals){const u=Oa(this.Jn.serializer,o.convertToNoDocument(x.min()));t.push(this.Jn.addEntry(e,i,u))}}),r.forEach(i=>{t.push(this.Jn.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.Jn.updateMetadata(e,s)),f.waitFor(t)}getFromCache(e,t){return this.Jn.zn(e,t).next(s=>(this.Yn.set(t,{size:s.size,readTime:s.document.readTime}),s.document))}getAllFromCache(e,t){return this.Jn.Wn(e,t).next(({documents:s,Hn:r})=>(r.forEach((i,o)=>{this.Yn.set(i,{size:o,readTime:s.get(i).readTime})}),s))}}function Ha(n){return ue(n,"remoteDocumentGlobal")}function ot(n){return ue(n,"remoteDocumentsV14")}function In(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Ya(n,e){const t=e.documentKey.path.toArray();return[n,Xs(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Xa(n,e){const t=n.path.toArray(),s=e.path.toArray();let r=0;for(let i=0;i<t.length-2&&i<s.length-2;++i)if(r=C(t[i],s[i]),r)return r;return r=C(t.length,s.length),r||(r=C(t[t.length-2],s[s.length-2]),r||C(t[t.length-1],s[s.length-1]))}/**
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
 */class vm{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Al{constructor(e,t,s,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=s,this.indexManager=r}getDocument(e,t){let s=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(s=r,this.remoteDocumentCache.getEntry(e,t))).next(r=>(s!==null&&_n(s.mutation,r,Ee.empty(),$.now()),r))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.getLocalViewOfDocuments(e,s,N()).next(()=>s))}getLocalViewOfDocuments(e,t,s=N()){const r=_e();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,s).next(i=>{let o=bn();return i.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const s=_e();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,N()))}populateOverlays(e,t,s){const r=[];return s.forEach(i=>{t.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(e,r).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,s,r){let i=Se();const o=Nn(),a=Nn();return t.forEach((u,c)=>{const l=s.get(c.key);r.has(c.key)&&(l===void 0||l.mutation instanceof Ve)?i=i.insert(c.key,c):l!==void 0?(o.set(c.key,l.mutation.getFieldMask()),_n(l.mutation,c,l.mutation.getFieldMask(),$.now())):o.set(c.key,Ee.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((c,l)=>o.set(c,l)),t.forEach((c,l)=>{var h;return a.set(c,new vm(l,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const s=Nn();let r=new j((o,a)=>o-a),i=N();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(u=>{const c=t.get(u);if(c===null)return;let l=s.get(u)||Ee.empty();l=a.applyToLocalView(c,l),s.set(u,l);const h=(r.get(a.batchId)||N()).add(u);r=r.insert(a.batchId,h)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),c=u.key,l=u.value,h=Hc();l.forEach(d=>{if(!i.has(d)){const g=sl(t.get(d),s.get(d));g!==null&&h.set(d,g),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return f.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,t,s){return function(r){return v.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):oo(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,s):this.getDocumentsMatchingCollectionQuery(e,t,s)}getNextDocuments(e,t,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,s.largestBatchId,r-i.size):f.resolve(_e());let a=-1,u=i;return o.next(c=>f.forEach(c,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?f.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{u=u.insert(l,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,u,c,N())).next(l=>({batchId:a,changes:Wc(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new v(t)).next(s=>{let r=bn();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(e,t,s){const r=t.collectionGroup;let i=bn();return this.indexManager.getCollectionParents(e,r).next(o=>f.forEach(o,a=>{const u=function(c,l){return new Pe(l,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(t,a.child(r));return this.getDocumentsMatchingCollectionQuery(e,u,s).next(c=>{c.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,s){let r;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,s,r))).next(i=>{r.forEach((a,u)=>{const c=u.getKey();i.get(c)===null&&(i=i.insert(c,V.newInvalidDocument(c)))});let o=bn();return i.forEach((a,u)=>{const c=r.get(a);c!==void 0&&_n(c.mutation,u,Ee.empty(),$.now()),us(t,u)&&(o=o.insert(a,u))}),o})}}/**
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
 */class Im{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return f.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var s;return this.Zn.set(t.id,{id:(s=t).id,version:s.version,createTime:Y(s.createTime)}),f.resolve()}getNamedQuery(e,t){return f.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(s){return{name:s.name,query:po(s.bundledQuery),readTime:Y(s.readTime)}}(t)),f.resolve()}}/**
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
 */class Tm{constructor(){this.overlays=new j(v.comparator),this.ts=new Map}getOverlay(e,t){return f.resolve(this.overlays.get(t))}getOverlays(e,t){const s=_e();return f.forEach(t,r=>this.getOverlay(e,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(e,t,s){return s.forEach((r,i)=>{this.re(e,t,i)}),f.resolve()}removeOverlaysForBatchId(e,t,s){const r=this.ts.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ts.delete(s)),f.resolve()}getOverlaysForCollection(e,t,s){const r=_e(),i=t.length+1,o=new v(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,c=u.getKey();if(!t.isPrefixOf(c.path))break;c.path.length===i&&u.largestBatchId>s&&r.set(u.getKey(),u)}return f.resolve(r)}getOverlaysForCollectionGroup(e,t,s,r){let i=new j((c,l)=>c-l);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===t&&c.largestBatchId>s){let l=i.get(c.largestBatchId);l===null&&(l=_e(),i=i.insert(c.largestBatchId,l)),l.set(c.getKey(),c)}}const a=_e(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((c,l)=>a.set(c,l)),!(a.size()>=r)););return f.resolve(a)}re(e,t,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ts.get(r.largestBatchId).delete(s.key);this.ts.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new lo(t,s));let i=this.ts.get(t);i===void 0&&(i=N(),this.ts.set(t,i)),this.ts.set(t,i.add(s.key))}}/**
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
 */class vo{constructor(){this.es=new P(se.ns),this.ss=new P(se.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,t){const s=new se(e,t);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,t){e.forEach(s=>this.addReference(s,t))}removeReference(e,t){this.us(new se(e,t))}cs(e,t){e.forEach(s=>this.removeReference(s,t))}hs(e){const t=new v(new M([])),s=new se(t,e),r=new se(t,e+1),i=[];return this.ss.forEachInRange([s,r],o=>{this.us(o),i.push(o.key)}),i}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const t=new v(new M([])),s=new se(t,e),r=new se(t,e+1);let i=N();return this.ss.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new se(e,0),s=this.es.firstAfterOrEqual(t);return s!==null&&e.isEqual(s.key)}}class se{constructor(e,t){this.key=e,this.ds=t}static ns(e,t){return v.comparator(e.key,t.key)||C(e.ds,t.ds)}static rs(e,t){return C(e.ds,t.ds)||v.comparator(e.key,t.key)}}/**
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
 */class Em{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this._s=new P(se.ns)}checkEmpty(e){return f.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new uo(i,t,s,r);this.mutationQueue.push(o);for(const a of r)this._s=this._s.add(new se(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return f.resolve(o)}lookupMutationBatch(e,t){return f.resolve(this.gs(t))}getNextMutationBatchAfterBatchId(e,t){const s=t+1,r=this.ys(s),i=r<0?0:r;return f.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return f.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return f.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const s=new se(t,0),r=new se(t,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([s,r],o=>{const a=this.gs(o.ds);i.push(a)}),f.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let s=new P(C);return t.forEach(r=>{const i=new se(r,0),o=new se(r,Number.POSITIVE_INFINITY);this._s.forEachInRange([i,o],a=>{s=s.add(a.ds)})}),f.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,t){const s=t.path,r=s.length+1;let i=s;v.isDocumentKey(i)||(i=i.child(""));const o=new se(new v(i),0);let a=new P(C);return this._s.forEachWhile(u=>{const c=u.key.path;return!!s.isPrefixOf(c)&&(c.length===r&&(a=a.add(u.ds)),!0)},o),f.resolve(this.ps(a))}ps(e){const t=[];return e.forEach(s=>{const r=this.gs(s);r!==null&&t.push(r)}),t}removeMutationBatch(e,t){b(this.Is(t.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return f.forEach(t.mutations,r=>{const i=new se(r.key,t.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,t){const s=new se(t,0),r=this._s.firstAfterOrEqual(s);return f.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,f.resolve()}Is(e,t){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const t=this.ys(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Sm{constructor(e){this.Ts=e,this.docs=new j(v.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const s=t.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ts(t);return this.docs=this.docs.insert(s,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const s=this.docs.get(t);return f.resolve(s?s.document.mutableCopy():V.newInvalidDocument(t))}getEntries(e,t){let s=Se();return t.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():V.newInvalidDocument(r))}),f.resolve(s)}getDocumentsMatchingQuery(e,t,s,r){let i=Se();const o=t.path,a=new v(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:c,value:{document:l}}=u.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||to(bc(l),s)<=0||(r.has(l.key)||us(t,l))&&(i=i.insert(l.key,l.mutableCopy()))}return f.resolve(i)}getAllFromCollectionGroup(e,t,s,r){E()}Es(e,t){return f.forEach(this.docs,s=>t(s))}newChangeBuffer(e){return new bm(this)}getSize(e){return f.resolve(this.size)}}class bm extends Dl{constructor(e){super(),this.Jn=e}applyChanges(e){const t=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?t.push(this.Jn.addEntry(e,r)):this.Jn.removeEntry(s)}),f.waitFor(t)}getFromCache(e,t){return this.Jn.getEntry(e,t)}getAllFromCache(e,t){return this.Jn.getEntries(e,t)}}/**
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
 */class xm{constructor(e){this.persistence=e,this.As=new rt(t=>Tt(t),os),this.lastRemoteSnapshotVersion=x.min(),this.highestTargetId=0,this.Rs=0,this.vs=new vo,this.targetCount=0,this.bs=Dt.vn()}forEachTarget(e,t){return this.As.forEach((s,r)=>t(r)),f.resolve()}getLastRemoteSnapshotVersion(e){return f.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return f.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),f.resolve(this.highestTargetId)}setTargetsMetadata(e,t,s){return s&&(this.lastRemoteSnapshotVersion=s),t>this.Rs&&(this.Rs=t),f.resolve()}Sn(e){this.As.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.bs=new Dt(t),this.highestTargetId=t),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,t){return this.Sn(t),this.targetCount+=1,f.resolve()}updateTargetData(e,t){return this.Sn(t),f.resolve()}removeTargetData(e,t){return this.As.delete(t.target),this.vs.hs(t.targetId),this.targetCount-=1,f.resolve()}removeTargets(e,t,s){let r=0;const i=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=t&&s.get(a.targetId)===null&&(this.As.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),f.waitFor(i).next(()=>r)}getTargetCount(e){return f.resolve(this.targetCount)}getTargetData(e,t){const s=this.As.get(t)||null;return f.resolve(s)}addMatchingKeys(e,t,s){return this.vs.os(t,s),f.resolve()}removeMatchingKeys(e,t,s){this.vs.cs(t,s);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(o=>{i.push(r.markPotentiallyOrphaned(e,o))}),f.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.vs.hs(t),f.resolve()}getMatchingKeysForTargetId(e,t){const s=this.vs.fs(t);return f.resolve(s)}containsKey(e,t){return f.resolve(this.vs.containsKey(t))}}/**
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
 */class Nl{constructor(e,t){this.Ps={},this.overlays={},this.Vs=new Te(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new xm(this),this.indexManager=new lm,this.remoteDocumentCache=function(s){return new Sm(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new vl(t),this.xs=new Im(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Tm,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let s=this.Ps[e.toKey()];return s||(s=new Em(t,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,t,s){y("MemoryPersistence","Starting transaction:",e);const r=new Dm(this.Vs.next());return this.referenceDelegate.Ns(),s(r).next(i=>this.referenceDelegate.ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(e,t){return f.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,t)))}}class Dm extends Dc{constructor(e){super(),this.currentSequenceNumber=e}}class Ar{constructor(e){this.persistence=e,this.$s=new vo,this.Ms=null}static Fs(e){return new Ar(e)}get Bs(){if(this.Ms)return this.Ms;throw E()}addReference(e,t,s){return this.$s.addReference(s,t),this.Bs.delete(s.toString()),f.resolve()}removeReference(e,t,s){return this.$s.removeReference(s,t),this.Bs.add(s.toString()),f.resolve()}markPotentiallyOrphaned(e,t){return this.Bs.add(t.toString()),f.resolve()}removeTarget(e,t){this.$s.hs(t.targetId).forEach(r=>this.Bs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,t.targetId).next(r=>{r.forEach(i=>this.Bs.add(i.toString()))}).next(()=>s.removeTargetData(e,t))}Ns(){this.Ms=new Set}ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return f.forEach(this.Bs,s=>{const r=v.fromPath(s);return this.Ls(e,r).next(i=>{i||t.removeEntry(r,x.min())})}).next(()=>(this.Ms=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ls(e,t).next(s=>{s?this.Bs.delete(t.toString()):this.Bs.add(t.toString())})}Cs(e){return 0}Ls(e,t){return f.or([()=>f.resolve(this.$s.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}}/**
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
 */class Cm{constructor(e){this.serializer=e}M(e,t,s,r){const i=new Tr("createOrUpgrade",t);s<1&&r>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ga,{unique:!0}),a.createObjectStore("documentMutations")}(e),Ja(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=f.resolve();return s<3&&r>=3&&(s!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),Ja(e)),o=o.next(()=>function(a){const u=a.store("targetGlobal"),c={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:x.min().toTimestamp(),targetCount:0};return u.put("targetGlobalKey",c)}(i))),s<4&&r>=4&&(s!==0&&(o=o.next(()=>function(a,u){return u.store("mutations").j().next(c=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",ga,{unique:!0});const l=u.store("mutations"),h=c.map(d=>l.put(d));return f.waitFor(h)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),s<5&&r>=5&&(o=o.next(()=>this.qs(i))),s<6&&r>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Us(i)))),s<7&&r>=7&&(o=o.next(()=>this.Ks(i))),s<8&&r>=8&&(o=o.next(()=>this.Gs(e,i))),s<9&&r>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),s<10&&r>=10&&(o=o.next(()=>this.Qs(i))),s<11&&r>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),s<12&&r>=12&&(o=o.next(()=>{(function(a){const u=a.createObjectStore("documentOverlays",{keyPath:lf});u.createIndex("collectionPathOverlayIndex",hf,{unique:!1}),u.createIndex("collectionGroupOverlayIndex",df,{unique:!1})})(e)})),s<13&&r>=13&&(o=o.next(()=>function(a){const u=a.createObjectStore("remoteDocumentsV14",{keyPath:Jd});u.createIndex("documentKeyIndex",Zd),u.createIndex("collectionGroupIndex",ef)}(e)).next(()=>this.zs(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),s<14&&r>=14&&(o=o.next(()=>this.js(e,i))),s<15&&r>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:of}).createIndex("sequenceNumberIndex",af,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:uf}).createIndex("documentKeyIndex",cf,{unique:!1})}(e))),o}Us(e){let t=0;return e.store("remoteDocuments").Z((s,r)=>{t+=Zs(r)}).next(()=>{const s={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",s)})}qs(e){const t=e.store("mutationQueues"),s=e.store("mutations");return t.j().next(r=>f.forEach(r,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return s.j("userMutationsIndex",o).next(a=>f.forEach(a,u=>{b(u.userId===i.userId);const c=ct(this.serializer,u);return Sl(e,i.userId,c).next(()=>{})}))}))}Ks(e){const t=e.store("targetDocuments"),s=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(r=>{const i=[];return s.Z((o,a)=>{const u=new M(o),c=function(l){return[0,we(l)]}(u);i.push(t.get(c).next(l=>l?f.resolve():(h=>t.put({targetId:0,path:we(h),sequenceNumber:r.highestListenSequenceNumber}))(u)))}).next(()=>f.waitFor(i))})}Gs(e,t){e.createObjectStore("collectionParents",{keyPath:rf});const s=t.store("collectionParents"),r=new wo,i=o=>{if(r.add(o)){const a=o.lastSegment(),u=o.popLast();return s.put({collectionId:a,parent:we(u)})}};return t.store("remoteDocuments").Z({Y:!0},(o,a)=>{const u=new M(o);return i(u.popLast())}).next(()=>t.store("documentMutations").Z({Y:!0},([o,a,u],c)=>{const l=Ne(a);return i(l.popLast())}))}Qs(e){const t=e.store("targets");return t.Z((s,r)=>{const i=xn(r),o=Il(this.serializer,i);return t.put(o)})}zs(e,t){const s=t.store("remoteDocuments"),r=[];return s.Z((i,o)=>{const a=t.store("remoteDocumentsV14"),u=(c=o,c.document?new v(M.fromString(c.document.name).popFirst(5)):c.noDocument?v.fromSegments(c.noDocument.path):c.unknownDocument?v.fromSegments(c.unknownDocument.path):E()).path.toArray();var c;/**
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
*/const l={prefixPath:u.slice(0,u.length-2),collectionGroup:u[u.length-2],documentId:u[u.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};r.push(a.put(l))}).next(()=>f.waitFor(r))}js(e,t){const s=t.store("mutations"),r=Cl(this.serializer),i=new Nl(Ar.Fs,this.serializer.se);return s.j().next(o=>{const a=new Map;return o.forEach(u=>{var c;let l=(c=a.get(u.userId))!==null&&c!==void 0?c:N();ct(this.serializer,u).keys().forEach(h=>l=l.add(h)),a.set(u.userId,l)}),f.forEach(a,(u,c)=>{const l=new re(c),h=Dr.ie(this.serializer,l),d=i.getIndexManager(l),g=Cr.ie(l,this.serializer,d,i.referenceDelegate);return new Al(r,g,h,d).recalculateAndSaveOverlaysForDocumentKeys(new gi(t,Te.ct),u).next()})})}}function Ja(n){n.createObjectStore("targetDocuments",{keyPath:nf}).createIndex("documentTargetsIndex",sf,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",tf,{unique:!0}),n.createObjectStore("targetGlobal")}const Xr="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class Io{constructor(e,t,s,r,i,o,a,u,c,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=s,this.Ws=i,this.window=o,this.document=a,this.Hs=c,this.Js=l,this.Ys=h,this.Vs=null,this.Ss=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.Xs=null,this.ti=null,this.ei=Number.NEGATIVE_INFINITY,this.ni=d=>Promise.resolve(),!Io.D())throw new p(m.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new pm(this,r),this.si=t+"main",this.serializer=new vl(u),this.ii=new Ce(this.si,this.Ys,new Cm(this.serializer)),this.Ds=new dm(this.referenceDelegate,this.serializer),this.remoteDocumentCache=Cl(this.serializer),this.xs=new sm,this.window&&this.window.localStorage?this.ri=this.window.localStorage:(this.ri=null,l===!1&&W("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.oi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new p(m.FAILED_PRECONDITION,Xr);return this.ui(),this.ci(),this.ai(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ds.getHighestSequenceNumber(e))}).then(e=>{this.Vs=new Te(e,this.Hs)}).then(()=>{this.Ss=!0}).catch(e=>(this.ii&&this.ii.close(),Promise.reject(e)))}hi(e){return this.ni=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ii.B(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ws.enqueueAndForget(async()=>{this.started&&await this.oi()}))}oi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>As(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.li(e).next(t=>{t||(this.isPrimary=!1,this.Ws.enqueueRetryable(()=>this.ni(!1)))})}).next(()=>this.fi(e)).next(t=>this.isPrimary&&!t?this.di(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(st(e))return y("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return y("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ws.enqueueRetryable(()=>this.ni(e)),this.isPrimary=e})}li(e){return Tn(e).get("owner").next(t=>f.resolve(this._i(t)))}mi(e){return As(e).delete(this.clientId)}async gi(){if(this.isPrimary&&!this.yi(this.ei,18e5)){this.ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const s=ue(t,"clientMetadata");return s.j().next(r=>{const i=this.pi(r,18e5),o=r.filter(a=>i.indexOf(a)===-1);return f.forEach(o,a=>s.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.ri)for(const t of e)this.ri.removeItem(this.Ii(t.clientId))}}ai(){this.ti=this.Ws.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.oi().then(()=>this.gi()).then(()=>this.ai()))}_i(e){return!!e&&e.ownerId===this.clientId}fi(e){return this.Js?f.resolve(!0):Tn(e).get("owner").next(t=>{if(t!==null&&this.yi(t.leaseTimestampMs,5e3)&&!this.Ti(t.ownerId)){if(this._i(t)&&this.networkEnabled)return!0;if(!this._i(t)){if(!t.allowTabSynchronization)throw new p(m.FAILED_PRECONDITION,Xr);return!1}}return!(!this.networkEnabled||!this.inForeground)||As(e).j().next(s=>this.pi(s,5e3).find(r=>{if(this.clientId!==r.clientId){const i=!this.networkEnabled&&r.networkEnabled,o=!this.inForeground&&r.inForeground,a=this.networkEnabled===r.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&y("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ss=!1,this.Ei(),this.ti&&(this.ti.cancel(),this.ti=null),this.Ai(),this.Ri(),await this.ii.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new gi(e,Te.ct);return this.di(t).next(()=>this.mi(t))}),this.ii.close(),this.vi()}pi(e,t){return e.filter(s=>this.yi(s.updateTimeMs,t)&&!this.Ti(s.clientId))}bi(){return this.runTransaction("getActiveClients","readonly",e=>As(e).j().next(t=>this.pi(t,18e5).map(s=>s.clientId)))}get started(){return this.Ss}getMutationQueue(e,t){return Cr.ie(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new hm(e,this.serializer.se.databaseId)}getDocumentOverlayCache(e){return Dr.ie(this.serializer,e)}getBundleCache(){return this.xs}runTransaction(e,t,s){y("IndexedDbPersistence","Starting transaction:",e);const r=t==="readonly"?"readonly":"readwrite",i=(o=this.Ys)===15?mf:o===14?kc:o===13?_c:o===12?ff:o===11?Nc:void E();var o;let a;return this.ii.runTransaction(e,r,i,u=>(a=new gi(u,this.Vs?this.Vs.next():Te.ct),t==="readwrite-primary"?this.li(a).next(c=>!!c||this.fi(a)).next(c=>{if(!c)throw W(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ws.enqueueRetryable(()=>this.ni(!1)),new p(m.FAILED_PRECONDITION,xc);return s(a)}).next(c=>this.wi(a).next(()=>c)):this.Pi(a).next(()=>s(a)))).then(u=>(a.raiseOnCommittedEvent(),u))}Pi(e){return Tn(e).get("owner").next(t=>{if(t!==null&&this.yi(t.leaseTimestampMs,5e3)&&!this.Ti(t.ownerId)&&!this._i(t)&&!(this.Js||this.allowTabSynchronization&&t.allowTabSynchronization))throw new p(m.FAILED_PRECONDITION,Xr)})}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Tn(e).put("owner",t)}static D(){return Ce.D()}di(e){const t=Tn(e);return t.get("owner").next(s=>this._i(s)?(y("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):f.resolve())}yi(e,t){const s=Date.now();return!(e<s-t)&&(!(e>s)||(W(`Detected an update time that is in the future: ${e} > ${s}`),!1))}ui(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Xs=()=>{this.Ws.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.oi()))},this.document.addEventListener("visibilitychange",this.Xs),this.inForeground=this.document.visibilityState==="visible")}Ai(){this.Xs&&(this.document.removeEventListener("visibilitychange",this.Xs),this.Xs=null)}ci(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ei();const t=/(?:Version|Mobile)\/1[456]/;Mh()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ws.enterRestrictedMode(!0),this.Ws.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}Ri(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ti(e){var t;try{const s=((t=this.ri)===null||t===void 0?void 0:t.getItem(this.Ii(e)))!==null;return y("IndexedDbPersistence",`Client '${e}' ${s?"is":"is not"} zombied in LocalStorage`),s}catch(s){return W("IndexedDbPersistence","Failed to get zombied client id.",s),!1}}Ei(){if(this.ri)try{this.ri.setItem(this.Ii(this.clientId),String(Date.now()))}catch(e){W("Failed to set zombie client id.",e)}}vi(){if(this.ri)try{this.ri.removeItem(this.Ii(this.clientId))}catch{}}Ii(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Tn(n){return ue(n,"owner")}function As(n){return ue(n,"clientMetadata")}function To(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class Eo{constructor(e,t,s,r){this.targetId=e,this.fromCache=t,this.Vi=s,this.Si=r}static Di(e,t){let s=N(),r=N();for(const i of t.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Eo(e,t.fromCache,s,r)}}/**
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
 */class _l{constructor(){this.Ci=!1}initialize(e,t){this.xi=e,this.indexManager=t,this.Ci=!0}getDocumentsMatchingQuery(e,t,s,r){return this.Ni(e,t).next(i=>i||this.ki(e,t,r,s)).next(i=>i||this.Oi(e,t))}Ni(e,t){if(Ca(t))return f.resolve(null);let s=ve(t);return this.indexManager.getIndexType(e,s).next(r=>r===0?null:(t.limit!==null&&r===1&&(t=Ys(t,null,"F"),s=ve(t)),this.indexManager.getDocumentsMatchingTarget(e,s).next(i=>{const o=N(...i);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,s).next(u=>{const c=this.$i(t,a);return this.Mi(t,c,o,u.readTime)?this.Ni(e,Ys(t,null,"F")):this.Fi(e,c,t,u)}))})))}ki(e,t,s,r){return Ca(t)||r.isEqual(x.min())?this.Oi(e,t):this.xi.getDocuments(e,s).next(i=>{const o=this.$i(t,i);return this.Mi(t,o,s,r)?this.Oi(e,t):(fi()<=Bt.DEBUG&&y("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ei(t)),this.Fi(e,o,t,Sc(r,-1)))})}$i(e,t){let s=new P(jc(e));return t.forEach((r,i)=>{us(e,i)&&(s=s.add(i))}),s}Mi(e,t,s,r){if(e.limit===null)return!1;if(s.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(e,t){return fi()<=Bt.DEBUG&&y("QueryEngine","Using full collection scan to execute query:",Ei(t)),this.xi.getDocumentsMatchingQuery(e,t,De.min())}Fi(e,t,s,r){return this.xi.getDocumentsMatchingQuery(e,s,r).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class Am{constructor(e,t,s,r){this.persistence=e,this.Bi=t,this.serializer=r,this.Li=new j(C),this.qi=new rt(i=>Tt(i),os),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Al(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Li))}}function kl(n,e,t,s){return new Am(n,e,t,s)}async function Rl(n,e){const t=I(n);return await t.persistence.runTransaction("Handle user change","readonly",s=>{let r;return t.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,t.Gi(e),t.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let u=N();for(const c of r){o.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}for(const c of i){a.push(c.batchId);for(const l of c.mutations)u=u.add(l.key)}return t.localDocuments.getDocuments(s,u).next(c=>({Qi:c,removedBatchIds:o,addedBatchIds:a}))})})}function Nm(n,e){const t=I(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const r=e.batch.keys(),i=t.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,u,c){const l=u.batch,h=l.keys();let d=f.resolve();return h.forEach(g=>{d=d.next(()=>c.getEntry(a,g)).next(w=>{const T=u.docVersions.get(g);b(T!==null),w.version.compareTo(T)<0&&(l.applyToRemoteDocument(w,u),w.isValidDocument()&&(w.setReadTime(u.commitVersion),c.addEntry(w)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(t,s,e,i).next(()=>i.apply(s)).next(()=>t.mutationQueue.performConsistencyCheck(s)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(s,r,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let a=N();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(a=a.add(o.batch.mutations[u].key));return a}(e))).next(()=>t.localDocuments.getDocuments(s,r))})}function Ml(n){const e=I(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ds.getLastRemoteSnapshotVersion(t))}function _m(n,e){const t=I(n),s=e.snapshotVersion;let r=t.Li;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Ki.newChangeBuffer({trackRemovals:!0});r=t.Li;const a=[];e.targetChanges.forEach((l,h)=>{const d=r.get(h);if(!d)return;a.push(t.Ds.removeMatchingKeys(i,l.removedDocuments,h).next(()=>t.Ds.addMatchingKeys(i,l.addedDocuments,h)));let g=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?g=g.withResumeToken(ne.EMPTY_BYTE_STRING,x.min()).withLastLimboFreeSnapshotVersion(x.min()):l.resumeToken.approximateByteSize()>0&&(g=g.withResumeToken(l.resumeToken,s)),r=r.insert(h,g),function(w,T,D){return w.resumeToken.approximateByteSize()===0||T.snapshotVersion.toMicroseconds()-w.snapshotVersion.toMicroseconds()>=3e8?!0:D.addedDocuments.size+D.modifiedDocuments.size+D.removedDocuments.size>0}(d,g,l)&&a.push(t.Ds.updateTargetData(i,g))});let u=Se(),c=N();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Ll(i,o,e.documentUpdates).next(l=>{u=l.zi,c=l.ji})),!s.isEqual(x.min())){const l=t.Ds.getLastRemoteSnapshotVersion(i).next(h=>t.Ds.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(l)}return f.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,c)).next(()=>u)}).then(i=>(t.Li=r,i))}function Ll(n,e,t){let s=N(),r=N();return t.forEach(i=>s=s.add(i)),e.getEntries(n,s).next(i=>{let o=Se();return t.forEach((a,u)=>{const c=i.get(a);u.isFoundDocument()!==c.isFoundDocument()&&(r=r.add(a)),u.isNoDocument()&&u.version.isEqual(x.min())?(e.removeEntry(a,u.readTime),o=o.insert(a,u)):!c.isValidDocument()||u.version.compareTo(c.version)>0||u.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(u),o=o.insert(a,u)):y("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",u.version)}),{zi:o,ji:r}})}function km(n,e){const t=I(n);return t.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function Ht(n,e){const t=I(n);return t.persistence.runTransaction("Allocate target","readwrite",s=>{let r;return t.Ds.getTargetData(s,e).next(i=>i?(r=i,f.resolve(r)):t.Ds.allocateTargetId(s).next(o=>(r=new We(e,o,0,s.currentSequenceNumber),t.Ds.addTargetData(s,r).next(()=>r))))}).then(s=>{const r=t.Li.get(s.targetId);return(r===null||s.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(t.Li=t.Li.insert(s.targetId,s),t.qi.set(e,s.targetId)),s})}async function Yt(n,e,t){const s=I(n),r=s.Li.get(e),i=t?"readwrite":"readwrite-primary";try{t||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!st(o))throw o;y("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(r.target)}function er(n,e,t){const s=I(n);let r=x.min(),i=N();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,u,c){const l=I(a),h=l.qi.get(c);return h!==void 0?f.resolve(l.Li.get(h)):l.Ds.getTargetData(u,c)}(s,o,ve(e)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(u=>{i=u})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,t?r:x.min(),t?i:N())).next(a=>(Pl(s,Kc(e),a),{documents:a,Wi:i})))}function Fl(n,e){const t=I(n),s=I(t.Ds),r=t.Li.get(e);return r?Promise.resolve(r.target):t.persistence.runTransaction("Get target data","readonly",i=>s.ne(i,e).next(o=>o?o.target:null))}function Ol(n,e){const t=I(n),s=t.Ui.get(e)||x.min();return t.persistence.runTransaction("Get new document changes","readonly",r=>t.Ki.getAllFromCollectionGroup(r,e,Sc(s,-1),Number.MAX_SAFE_INTEGER)).then(r=>(Pl(t,e,r),r))}function Pl(n,e,t){let s=n.Ui.get(e)||x.min();t.forEach((r,i)=>{i.readTime.compareTo(s)>0&&(s=i.readTime)}),n.Ui.set(e,s)}async function Rm(n,e,t,s){const r=I(n);let i=N(),o=Se();for(const c of t){const l=e.Hi(c.metadata.name);c.document&&(i=i.add(l));const h=e.Ji(c);h.setReadTime(e.Yi(c.metadata.readTime)),o=o.insert(l,h)}const a=r.Ki.newChangeBuffer({trackRemovals:!0}),u=await Ht(r,function(c){return ve(on(M.fromString(`__bundle__/docs/${c}`)))}(s));return r.persistence.runTransaction("Apply bundle documents","readwrite",c=>Ll(c,a,o).next(l=>(a.apply(c),l)).next(l=>r.Ds.removeMatchingKeysForTargetId(c,u.targetId).next(()=>r.Ds.addMatchingKeys(c,i,u.targetId)).next(()=>r.localDocuments.getLocalViewOfDocuments(c,l.zi,l.ji)).next(()=>l.zi)))}async function Mm(n,e,t=N()){const s=await Ht(n,ve(po(e.bundledQuery))),r=I(n);return r.persistence.runTransaction("Save named query","readwrite",i=>{const o=Y(e.readTime);if(s.snapshotVersion.compareTo(o)>=0)return r.xs.saveNamedQuery(i,e);const a=s.withResumeToken(ne.EMPTY_BYTE_STRING,o);return r.Li=r.Li.insert(a.targetId,a),r.Ds.updateTargetData(i,a).next(()=>r.Ds.removeMatchingKeysForTargetId(i,s.targetId)).next(()=>r.Ds.addMatchingKeys(i,t,s.targetId)).next(()=>r.xs.saveNamedQuery(i,e))})}function Za(n,e){return`firestore_clients_${n}_${e}`}function eu(n,e,t){let s=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(s+=`_${e.uid}`),s}function Jr(n,e){return`firestore_targets_${n}_${e}`}class tr{constructor(e,t,s,r){this.user=e,this.batchId=t,this.state=s,this.error=r}static Zi(e,t,s){const r=JSON.parse(s);let i,o=typeof r=="object"&&["pending","acknowledged","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return o&&r.error&&(o=typeof r.error.message=="string"&&typeof r.error.code=="string",o&&(i=new p(r.error.code,r.error.message))),o?new tr(e,t,r.state,i):(W("SharedClientState",`Failed to parse mutation state for ID '${t}': ${s}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class kn{constructor(e,t,s){this.targetId=e,this.state=t,this.error=s}static Zi(e,t){const s=JSON.parse(t);let r,i=typeof s=="object"&&["not-current","current","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return i&&s.error&&(i=typeof s.error.message=="string"&&typeof s.error.code=="string",i&&(r=new p(s.error.code,s.error.message))),i?new kn(e,s.state,r):(W("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class nr{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const s=JSON.parse(t);let r=typeof s=="object"&&s.activeTargetIds instanceof Array,i=Sr();for(let o=0;r&&o<s.activeTargetIds.length;++o)r=Cc(s.activeTargetIds[o]),i=i.add(s.activeTargetIds[o]);return r?new nr(e,i):(W("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class So{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new So(t.clientId,t.onlineState):(W("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Ai{constructor(){this.activeTargetIds=Sr()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Zr{constructor(e,t,s,r,i){this.window=e,this.Ws=t,this.persistenceKey=s,this.nr=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.sr=this.ir.bind(this),this.rr=new j(C),this.started=!1,this.ur=[];const o=s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.cr=Za(this.persistenceKey,this.nr),this.ar=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.rr=this.rr.insert(this.nr,new Ai),this.hr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.lr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.dr=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this._r=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.sr)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.bi();for(const s of e){if(s===this.nr)continue;const r=this.getItem(Za(this.persistenceKey,s));if(r){const i=nr.Zi(s,r);i&&(this.rr=this.rr.insert(i.clientId,i))}}this.mr();const t=this.storage.getItem(this.wr);if(t){const s=this.gr(t);s&&this.yr(s)}for(const s of this.ur)this.ir(s);this.ur=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ar,JSON.stringify(e))}getAllActiveQueryTargets(){return this.pr(this.rr)}isActiveQueryTarget(e){let t=!1;return this.rr.forEach((s,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ir(e,"pending")}updateMutationState(e,t,s){this.Ir(e,t,s),this.Tr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const s=this.storage.getItem(Jr(this.persistenceKey,e));if(s){const r=kn.Zi(e,s);r&&(t=r.state)}}return this.Er.tr(e),this.mr(),t}removeLocalQueryTarget(e){this.Er.er(e),this.mr()}isLocalQueryTarget(e){return this.Er.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Jr(this.persistenceKey,e))}updateQueryState(e,t,s){this.Ar(e,t,s)}handleUserChange(e,t,s){t.forEach(r=>{this.Tr(r)}),this.currentUser=e,s.forEach(r=>{this.addPendingMutation(r)})}setOnlineState(e){this.Rr(e)}notifyBundleLoaded(e){this.vr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.sr),this.removeItem(this.cr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return y("SharedClientState","READ",e,t),t}setItem(e,t){y("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){y("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ir(e){const t=e;if(t.storageArea===this.storage){if(y("SharedClientState","EVENT",t.key,t.newValue),t.key===this.cr)return void W("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ws.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.hr.test(t.key)){if(t.newValue==null){const s=this.br(t.key);return this.Pr(s,null)}{const s=this.Vr(t.key,t.newValue);if(s)return this.Pr(s.clientId,s)}}else if(this.lr.test(t.key)){if(t.newValue!==null){const s=this.Sr(t.key,t.newValue);if(s)return this.Dr(s)}}else if(this.dr.test(t.key)){if(t.newValue!==null){const s=this.Cr(t.key,t.newValue);if(s)return this.Nr(s)}}else if(t.key===this.wr){if(t.newValue!==null){const s=this.gr(t.newValue);if(s)return this.yr(s)}}else if(t.key===this.ar){const s=function(r){let i=Te.ct;if(r!=null)try{const o=JSON.parse(r);b(typeof o=="number"),i=o}catch(o){W("SharedClientState","Failed to read sequence number from WebStorage",o)}return i}(t.newValue);s!==Te.ct&&this.sequenceNumberHandler(s)}else if(t.key===this._r){const s=this.kr(t.newValue);await Promise.all(s.map(r=>this.syncEngine.Or(r)))}}}else this.ur.push(t)})}}get Er(){return this.rr.get(this.nr)}mr(){this.setItem(this.cr,this.Er.Xi())}Ir(e,t,s){const r=new tr(this.currentUser,e,t,s),i=eu(this.persistenceKey,this.currentUser,e);this.setItem(i,r.Xi())}Tr(e){const t=eu(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Rr(e){const t={clientId:this.nr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Ar(e,t,s){const r=Jr(this.persistenceKey,e),i=new kn(e,t,s);this.setItem(r,i.Xi())}vr(e){const t=JSON.stringify(Array.from(e));this.setItem(this._r,t)}br(e){const t=this.hr.exec(e);return t?t[1]:null}Vr(e,t){const s=this.br(e);return nr.Zi(s,t)}Sr(e,t){const s=this.lr.exec(e),r=Number(s[1]),i=s[2]!==void 0?s[2]:null;return tr.Zi(new re(i),r,t)}Cr(e,t){const s=this.dr.exec(e),r=Number(s[1]);return kn.Zi(r,t)}gr(e){return So.Zi(e)}kr(e){return JSON.parse(e)}async Dr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.$r(e.batchId,e.state,e.error);y("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Nr(e){return this.syncEngine.Mr(e.targetId,e.state,e.error)}Pr(e,t){const s=t?this.rr.insert(e,t):this.rr.remove(e),r=this.pr(this.rr),i=this.pr(s),o=[],a=[];return i.forEach(u=>{r.has(u)||o.push(u)}),r.forEach(u=>{i.has(u)||a.push(u)}),this.syncEngine.Fr(o,a).then(()=>{this.rr=s})}yr(e){this.rr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}pr(e){let t=Sr();return e.forEach((s,r)=>{t=t.unionWith(r.activeTargetIds)}),t}}class Vl{constructor(){this.Br=new Ai,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,t,s){this.Lr[e]=t}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Ai,Promise.resolve()}handleUserChange(e,t,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class Lm{qr(e){}shutdown(){}}/**
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
 */class tu{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){y("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){y("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
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
 */let Ns=null;function ei(){return Ns===null?Ns=268435456+Math.round(2147483648*Math.random()):Ns++,"0x"+Ns.toString(16)}/**
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
 */const Fm={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class Om{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const fe="WebChannelConnection";class Pm extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.ro=t+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,t,s,r,i){const o=ei(),a=this.ao(e,t);y("RestConnection",`Sending RPC '${e}' ${o}:`,a,s);const u={};return this.ho(u,r,i),this.lo(e,a,u,s).then(c=>(y("RestConnection",`Received RPC '${e}' ${o}: `,c),c),c=>{throw Oe("RestConnection",`RPC '${e}' ${o} failed with error: `,c,"url: ",a,"request:",s),c})}fo(e,t,s,r,i,o){return this.co(e,t,s,r,i)}ho(e,t,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+rn,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((r,i)=>e[i]=r),s&&s.headers.forEach((r,i)=>e[i]=r)}ao(e,t){const s=Fm[e];return`${this.ro}/v1/${t}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,t,s,r){const i=ei();return new Promise((o,a)=>{const u=new Fd;u.setWithCredentials(!0),u.listenOnce(Rd.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Hr.NO_ERROR:const l=u.getResponseJson();y(fe,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(l)),o(l);break;case Hr.TIMEOUT:y(fe,`RPC '${e}' ${i} timed out`),a(new p(m.DEADLINE_EXCEEDED,"Request time out"));break;case Hr.HTTP_ERROR:const h=u.getStatus();if(y(fe,`RPC '${e}' ${i} failed with status:`,h,"response text:",u.getResponseText()),h>0){let d=u.getResponseJson();Array.isArray(d)&&(d=d[0]);const g=d==null?void 0:d.error;if(g&&g.status&&g.message){const w=function(T){const D=T.toLowerCase().replace(/_/g,"-");return Object.values(m).indexOf(D)>=0?D:m.UNKNOWN}(g.status);a(new p(w,g.message))}else a(new p(m.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new p(m.UNAVAILABLE,"Connection failed."));break;default:E()}}finally{y(fe,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(r);y(fe,`RPC '${e}' ${i} sending request:`,r),u.send(t,"POST",c,s,15)})}wo(e,t,s){const r=ei(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=_d(),a=kd(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(u.xmlHttpFactory=new Ld({})),this.ho(u.initMessageHeaders,t,s),u.encodeInitMessageHeaders=!0;const c=i.join("");y(fe,`Creating RPC '${e}' stream ${r}: ${c}`,u);const l=o.createWebChannel(c,u);let h=!1,d=!1;const g=new Om({Wr:T=>{d?y(fe,`Not sending because RPC '${e}' stream ${r} is closed:`,T):(h||(y(fe,`Opening RPC '${e}' stream ${r} transport.`),l.open(),h=!0),y(fe,`RPC '${e}' stream ${r} sending:`,T),l.send(T))},Hr:()=>l.close()}),w=(T,D,L)=>{T.listen(D,Q=>{try{L(Q)}catch(O){setTimeout(()=>{throw O},0)}})};return w(l,Es.EventType.OPEN,()=>{d||y(fe,`RPC '${e}' stream ${r} transport opened.`)}),w(l,Es.EventType.CLOSE,()=>{d||(d=!0,y(fe,`RPC '${e}' stream ${r} transport closed`),g.so())}),w(l,Es.EventType.ERROR,T=>{d||(d=!0,Oe(fe,`RPC '${e}' stream ${r} transport errored:`,T),g.so(new p(m.UNAVAILABLE,"The operation could not be completed")))}),w(l,Es.EventType.MESSAGE,T=>{var D;if(!d){const L=T.data[0];b(!!L);const Q=L,O=Q.error||((D=Q[0])===null||D===void 0?void 0:D.error);if(O){y(fe,`RPC '${e}' stream ${r} received error:`,O);const pe=O.status;let J=function(be){const Be=Z[be];if(Be!==void 0)return ol(Be)}(pe),z=O.message;J===void 0&&(J=m.INTERNAL,z="Unknown error status: "+pe+" with message "+O.message),d=!0,g.so(new p(J,z)),l.close()}else y(fe,`RPC '${e}' stream ${r} received:`,L),g.io(L)}}),w(a,Md.STAT_EVENT,T=>{T.stat===ha.PROXY?y(fe,`RPC '${e}' stream ${r} detected buffering proxy`):T.stat===ha.NOPROXY&&y(fe,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{g.no()},0),g}}/**
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
 *//**
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
 */function ql(){return typeof window<"u"?window:null}function Os(){return typeof document<"u"?document:null}/**
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
 */function ds(n){return new jf(n,!0)}/**
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
 */class bo{constructor(e,t,s=1e3,r=1.5,i=6e4){this.Ws=e,this.timerId=t,this._o=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,t-s);r>0&&y("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class Ul{constructor(e,t,s,r,i,o,a,u){this.Ws=e,this.bo=s,this.Po=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new bo(e,t)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,t){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():t&&t.code===m.RESOURCE_EXHAUSTED?(W(t.toString()),W("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):t&&t.code===m.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Vo===t&&this.Ko(s,r)},s=>{e(()=>{const r=new p(m.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(r)})})}Ko(e,t){const s=this.Uo(this.Vo);this.stream=this.Qo(e,t),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(r=>{s(()=>this.Go(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return y("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Ws.enqueueAndForget(()=>this.Vo===e?t():(y("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Vm extends Ul{constructor(e,t,s,r,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i}Qo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Co.reset();const t=Hf(this.serializer,e),s=function(r){if(!("targetChange"in r))return x.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?x.min():i.readTime?Y(i.readTime):x.min()}(e);return this.listener.zo(t,s)}jo(e){const t={};t.database=Gn(this.serializer),t.addTarget=function(r,i){let o;const a=i.target;return o=Ws(a)?{documents:ml(r,a)}:{query:go(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=cl(r,i.resumeToken):i.snapshotVersion.compareTo(x.min())>0&&(o.readTime=Wt(r,i.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=Xf(this.serializer,e);s&&(t.labels=s),this.Fo(t)}Wo(e){const t={};t.database=Gn(this.serializer),t.removeTarget=e,this.Fo(t)}}class qm extends Ul{constructor(e,t,s,r,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,s,r,o),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(b(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const t=Yf(e.writeResults,e.commitTime),s=Y(e.commitTime);return this.listener.Zo(s,t)}return b(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Gn(this.serializer),this.Fo(e)}Yo(e){const t={streamToken:this.lastStreamToken,writes:e.map(s=>Kn(this.serializer,s))};this.Fo(t)}}/**
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
 */class Um extends class{}{constructor(e,t,s,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=s,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new p(m.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.co(e,t,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new p(m.UNKNOWN,r.toString())})}fo(e,t,s,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.fo(e,t,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===m.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new p(m.UNKNOWN,i.toString())})}terminate(){this.eu=!0}}async function Bm(n,e,t){const s=I(n),r=function(c,l,h){const d=go(c,l),g=[];return h.forEach(w=>{w.yt==="count"?g.push({alias:w.alias.canonicalString(),count:{}}):w.yt==="avg"?g.push({alias:w.alias.canonicalString(),avg:{field:Ge(w.fieldPath)}}):w.yt==="sum"&&g.push({alias:w.alias.canonicalString(),sum:{field:Ge(w.fieldPath)}})}),{structuredAggregationQuery:{aggregations:g,structuredQuery:d.structuredQuery},parent:d.parent}}(s.serializer,ve(e),t),i=r.parent;s.connection.uo||delete r.parent;const o=(await s.fo("RunAggregationQuery",i,r,1)).filter(c=>!!c.result);return b(o.length===1),(a=o[0]).result,a.result.aggregateFields,new ie({mapValue:{fields:(u=a.result)===null||u===void 0?void 0:u.aggregateFields}});var a,u}class $m{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(W(t),this.ru=!1):y("OnlineStateTracker",t)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class zm{constructor(e,t,s,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(o=>{s.enqueueAndForget(async()=>{qe(this)&&(y("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=I(a);u.du.add(4),await cn(u),u.mu.set("Unknown"),u.du.delete(4),await fs(u)}(this))})}),this.mu=new $m(s,r)}}async function fs(n){if(qe(n))for(const e of n.wu)await e(!0)}async function cn(n){for(const e of n.wu)await e(!1)}function Nr(n,e){const t=I(n);t.fu.has(e.targetId)||(t.fu.set(e.targetId,e),Co(t)?Do(t):hn(t).No()&&xo(t,e))}function jn(n,e){const t=I(n),s=hn(t);t.fu.delete(e),s.No()&&Bl(t,e),t.fu.size===0&&(s.No()?s.$o():qe(t)&&t.mu.set("Unknown"))}function xo(n,e){n.gu.Ot(e.targetId),hn(n).jo(e)}function Bl(n,e){n.gu.Ot(e),hn(n).Wo(e)}function Do(n){n.gu=new $f({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>n.fu.get(e)||null}),hn(n).start(),n.mu.ou()}function Co(n){return qe(n)&&!hn(n).xo()&&n.fu.size>0}function qe(n){return I(n).du.size===0}function $l(n){n.gu=void 0}async function Gm(n){n.fu.forEach((e,t)=>{xo(n,e)})}async function Km(n,e){$l(n),Co(n)?(n.mu.au(e),Do(n)):n.mu.set("Unknown")}async function jm(n,e,t){if(n.mu.set("Online"),e instanceof ul&&e.state===2&&e.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.fu.delete(o),s.gu.removeTarget(o))}(n,e)}catch(s){y("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await sr(n,s)}else if(e instanceof Fs?n.gu.Kt(e):e instanceof al?n.gu.Jt(e):n.gu.zt(e),!t.isEqual(x.min()))try{const s=await Ml(n.localStore);t.compareTo(s)>=0&&await function(r,i){const o=r.gu.Xt(i);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const c=r.fu.get(u);c&&r.fu.set(u,c.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const u=r.fu.get(a);if(!u)return;r.fu.set(a,u.withResumeToken(ne.EMPTY_BYTE_STRING,u.snapshotVersion)),Bl(r,a);const c=new We(u.target,a,1,u.sequenceNumber);xo(r,c)}),r.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(s){y("RemoteStore","Failed to raise snapshot:",s),await sr(n,s)}}async function sr(n,e,t){if(!st(e))throw e;n.du.add(1),await cn(n),n.mu.set("Offline"),t||(t=()=>Ml(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{y("RemoteStore","Retrying IndexedDB access"),await t(),n.du.delete(1),await fs(n)})}function zl(n,e){return e().catch(t=>sr(n,t,e))}async function ln(n){const e=I(n),t=Ze(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;Qm(e);)try{const r=await km(e.localStore,s);if(r===null){e.lu.length===0&&t.$o();break}s=r.batchId,Wm(e,r)}catch(r){await sr(e,r)}Gl(e)&&Kl(e)}function Qm(n){return qe(n)&&n.lu.length<10}function Wm(n,e){n.lu.push(e);const t=Ze(n);t.No()&&t.Jo&&t.Yo(e.mutations)}function Gl(n){return qe(n)&&!Ze(n).xo()&&n.lu.length>0}function Kl(n){Ze(n).start()}async function Hm(n){Ze(n).tu()}async function Ym(n){const e=Ze(n);for(const t of n.lu)e.Yo(t.mutations)}async function Xm(n,e,t){const s=n.lu.shift(),r=co.from(s,e,t);await zl(n,()=>n.remoteSyncer.applySuccessfulWrite(r)),await ln(n)}async function Jm(n,e){e&&Ze(n).Jo&&await async function(t,s){if(r=s.code,il(r)&&r!==m.ABORTED){const i=t.lu.shift();Ze(t).Oo(),await zl(t,()=>t.remoteSyncer.rejectFailedWrite(i.batchId,s)),await ln(t)}var r}(n,e),Gl(n)&&Kl(n)}async function nu(n,e){const t=I(n);t.asyncQueue.verifyOperationInProgress(),y("RemoteStore","RemoteStore received new credentials");const s=qe(t);t.du.add(3),await cn(t),s&&t.mu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.du.delete(3),await fs(t)}async function Ni(n,e){const t=I(n);e?(t.du.delete(2),await fs(t)):e||(t.du.add(2),await cn(t),t.mu.set("Unknown"))}function hn(n){return n.yu||(n.yu=function(e,t,s){const r=I(e);return r.nu(),new Vm(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(n.datastore,n.asyncQueue,{Jr:Gm.bind(null,n),Zr:Km.bind(null,n),zo:jm.bind(null,n)}),n.wu.push(async e=>{e?(n.yu.Oo(),Co(n)?Do(n):n.mu.set("Unknown")):(await n.yu.stop(),$l(n))})),n.yu}function Ze(n){return n.pu||(n.pu=function(e,t,s){const r=I(e);return r.nu(),new qm(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(n.datastore,n.asyncQueue,{Jr:Hm.bind(null,n),Zr:Jm.bind(null,n),Xo:Ym.bind(null,n),Zo:Xm.bind(null,n)}),n.wu.push(async e=>{e?(n.pu.Oo(),await ln(n)):(await n.pu.stop(),n.lu.length>0&&(y("RemoteStore",`Stopping write stream with ${n.lu.length} pending writes`),n.lu=[]))})),n.pu}/**
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
 */class Ao{constructor(e,t,s,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new te,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,s,r,i){const o=Date.now()+s,a=new Ao(e,t,o,r,i);return a.start(s),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new p(m.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dn(n,e){if(W("AsyncQueue",`${e}: ${n}`),st(n))return new p(m.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Ut{constructor(e){this.comparator=e?(t,s)=>e(t,s)||v.comparator(t.key,s.key):(t,s)=>v.comparator(t.key,s.key),this.keyedMap=bn(),this.sortedSet=new j(this.comparator)}static emptySet(e){return new Ut(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,s)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ut)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;t.hasNext();){const r=t.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const s=new Ut;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=t,s}}/**
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
 */class su{constructor(){this.Iu=new j(v.comparator)}track(e){const t=e.doc.key,s=this.Iu.get(t);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(t,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(t,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(t,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(t):e.type===1&&s.type===2?this.Iu=this.Iu.insert(t,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):E():this.Iu=this.Iu.insert(t,e)}Tu(){const e=[];return this.Iu.inorderTraversal((t,s)=>{e.push(s)}),e}}class Xt{constructor(e,t,s,r,i,o,a,u,c){this.query=e,this.docs=t,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=c}static fromInitialDocuments(e,t,s,r,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Xt(e,t,Ut.emptySet(t),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&as(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,s=e.docChanges;if(t.length!==s.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==s[r].type||!t[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
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
 */class Zm{constructor(){this.Eu=void 0,this.listeners=[]}}class eg{constructor(){this.queries=new rt(e=>Gc(e),as),this.onlineState="Unknown",this.Au=new Set}}async function No(n,e){const t=I(n),s=e.query;let r=!1,i=t.queries.get(s);if(i||(r=!0,i=new Zm),r)try{i.Eu=await t.onListen(s)}catch(o){const a=dn(o,`Initialization of query '${Ei(e.query)}' failed`);return void e.onError(a)}t.queries.set(s,i),i.listeners.push(e),e.Ru(t.onlineState),i.Eu&&e.vu(i.Eu)&&ko(t)}async function _o(n,e){const t=I(n),s=e.query;let r=!1;const i=t.queries.get(s);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),r=i.listeners.length===0)}if(r)return t.queries.delete(s),t.onUnlisten(s)}function tg(n,e){const t=I(n);let s=!1;for(const r of e){const i=r.query,o=t.queries.get(i);if(o){for(const a of o.listeners)a.vu(r)&&(s=!0);o.Eu=r}}s&&ko(t)}function ng(n,e,t){const s=I(n),r=s.queries.get(e);if(r)for(const i of r.listeners)i.onError(t);s.queries.delete(e)}function ko(n){n.Au.forEach(e=>{e.next()})}class Ro{constructor(e,t,s){this.query=e,this.bu=t,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const r of e.docChanges)r.type!==3&&s.push(r);e=new Xt(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),t=!0):this.Du(e,this.onlineState)&&(this.Cu(e),t=!0),this.Vu=e,t}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),t=!0),t}Du(e,t){if(!e.fromCache)return!0;const s=t!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Cu(e){e=Xt.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
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
 */class sg{constructor(e,t){this.Nu=e,this.byteLength=t}ku(){return"metadata"in this.Nu}}/**
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
 */class ru{constructor(e){this.serializer=e}Hi(e){return ke(this.serializer,e)}Ji(e){return e.metadata.exists?fl(this.serializer,e.document,!1):V.newNoDocument(this.Hi(e.metadata.name),this.Yi(e.metadata.readTime))}Yi(e){return Y(e)}}class rg{constructor(e,t,s){this.Ou=e,this.localStore=t,this.serializer=s,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=jl(e)}$u(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Nu.namedQuery)this.queries.push(e.Nu.namedQuery);else if(e.Nu.documentMetadata){this.documents.push({metadata:e.Nu.documentMetadata}),e.Nu.documentMetadata.exists||++t;const s=M.fromString(e.Nu.documentMetadata.name);this.collectionGroups.add(s.get(s.length-2))}else e.Nu.document&&(this.documents[this.documents.length-1].document=e.Nu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Mu(e){const t=new Map,s=new ru(this.serializer);for(const r of e)if(r.metadata.queries){const i=s.Hi(r.metadata.name);for(const o of r.metadata.queries){const a=(t.get(o)||N()).add(i);t.set(o,a)}}return t}async complete(){const e=await Rm(this.localStore,new ru(this.serializer),this.documents,this.Ou.id),t=this.Mu(this.documents);for(const s of this.queries)await Mm(this.localStore,s,t.get(s.name));return this.progress.taskState="Success",{progress:this.progress,Fu:this.collectionGroups,Bu:e}}}function jl(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class Ql{constructor(e){this.key=e}}class Wl{constructor(e){this.key=e}}class Hl{constructor(e,t){this.query=e,this.Lu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=N(),this.mutatedKeys=N(),this.Ku=jc(e),this.Gu=new Ut(this.Ku)}get Qu(){return this.Lu}zu(e,t){const s=t?t.ju:new su,r=t?t.Gu:this.Gu;let i=t?t.mutatedKeys:this.mutatedKeys,o=r,a=!1;const u=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,c=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((l,h)=>{const d=r.get(l),g=us(this.query,h)?h:null,w=!!d&&this.mutatedKeys.has(d.key),T=!!g&&(g.hasLocalMutations||this.mutatedKeys.has(g.key)&&g.hasCommittedMutations);let D=!1;d&&g?d.data.isEqual(g.data)?w!==T&&(s.track({type:3,doc:g}),D=!0):this.Wu(d,g)||(s.track({type:2,doc:g}),D=!0,(u&&this.Ku(g,u)>0||c&&this.Ku(g,c)<0)&&(a=!0)):!d&&g?(s.track({type:0,doc:g}),D=!0):d&&!g&&(s.track({type:1,doc:d}),D=!0,(u||c)&&(a=!0)),D&&(g?(o=o.add(g),i=T?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),s.track({type:1,doc:l})}return{Gu:o,ju:s,Mi:a,mutatedKeys:i}}Wu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,s){const r=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort((c,l)=>function(h,d){const g=w=>{switch(w){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return E()}};return g(h)-g(d)}(c.type,l.type)||this.Ku(c.doc,l.doc)),this.Hu(s);const o=t?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,u=a!==this.qu;return this.qu=a,i.length!==0||u?{snapshot:new Xt(this.query,e.Gu,r,i,e.mutatedKeys,a===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new su,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(t=>this.Lu=this.Lu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Lu=this.Lu.delete(t)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=N(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const t=[];return e.forEach(s=>{this.Uu.has(s)||t.push(new Wl(s))}),this.Uu.forEach(s=>{e.has(s)||t.push(new Ql(s))}),t}Xu(e){this.Lu=e.Wi,this.Uu=N();const t=this.zu(e.documents);return this.applyChanges(t,!0)}tc(){return Xt.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class ig{constructor(e,t,s){this.query=e,this.targetId=t,this.view=s}}class og{constructor(e){this.key=e,this.ec=!1}}class ag{constructor(e,t,s,r,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new rt(a=>Gc(a),as),this.ic=new Map,this.rc=new Set,this.oc=new j(v.comparator),this.uc=new Map,this.cc=new vo,this.ac={},this.hc=new Map,this.lc=Dt.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function ug(n,e){const t=Po(n);let s,r;const i=t.sc.get(e);if(i)s=i.targetId,t.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await Ht(t.localStore,ve(e));t.isPrimaryClient&&Nr(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await Mo(t,e,s,a==="current",o.resumeToken)}return r}async function Mo(n,e,t,s,r){n.dc=(h,d,g)=>async function(w,T,D,L){let Q=T.view.zu(D);Q.Mi&&(Q=await er(w.localStore,T.query,!1).then(({documents:J})=>T.view.zu(J,Q)));const O=L&&L.targetChanges.get(T.targetId),pe=T.view.applyChanges(Q,w.isPrimaryClient,O);return _i(w,T.targetId,pe.Yu),pe.snapshot}(n,h,d,g);const i=await er(n.localStore,e,!0),o=new Hl(e,i.Wi),a=o.zu(i.documents),u=hs.createSynthesizedTargetChangeForCurrentChange(t,s&&n.onlineState!=="Offline",r),c=o.applyChanges(a,n.isPrimaryClient,u);_i(n,t,c.Yu);const l=new ig(e,t,o);return n.sc.set(e,l),n.ic.has(t)?n.ic.get(t).push(e):n.ic.set(t,[e]),c.snapshot}async function cg(n,e){const t=I(n),s=t.sc.get(e),r=t.ic.get(s.targetId);if(r.length>1)return t.ic.set(s.targetId,r.filter(i=>!as(i,e))),void t.sc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(s.targetId),t.sharedClientState.isActiveQueryTarget(s.targetId)||await Yt(t.localStore,s.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(s.targetId),jn(t.remoteStore,s.targetId),Jt(t,s.targetId)}).catch(nt)):(Jt(t,s.targetId),await Yt(t.localStore,s.targetId,!0))}async function lg(n,e,t){const s=Vo(n);try{const r=await function(i,o){const a=I(i),u=$.now(),c=o.reduce((d,g)=>d.add(g.key),N());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let g=Se(),w=N();return a.Ki.getEntries(d,c).next(T=>{g=T,g.forEach((D,L)=>{L.isValidDocument()||(w=w.add(D))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,g)).next(T=>{l=T;const D=[];for(const L of o){const Q=Vf(L,l.get(L.key).overlayedDocument);Q!=null&&D.push(new Ve(L.key,Q,Fc(Q.value.mapValue),B.exists(!0)))}return a.mutationQueue.addMutationBatch(d,u,D,o)}).next(T=>{h=T;const D=T.applyToLocalDocumentSet(l,w);return a.documentOverlayCache.saveOverlays(d,T.batchId,D)})}).then(()=>({batchId:h.batchId,changes:Wc(l)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let u=i.ac[i.currentUser.toKey()];u||(u=new j(C)),u=u.insert(o,a),i.ac[i.currentUser.toKey()]=u}(s,r.batchId,t),await Ue(s,r.changes),await ln(s.remoteStore)}catch(r){const i=dn(r,"Failed to persist write");t.reject(i)}}async function Yl(n,e){const t=I(n);try{const s=await _m(t.localStore,e);e.targetChanges.forEach((r,i)=>{const o=t.uc.get(i);o&&(b(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?b(o.ec):r.removedDocuments.size>0&&(b(o.ec),o.ec=!1))}),await Ue(t,s,e)}catch(s){await nt(s)}}function iu(n,e,t){const s=I(n);if(s.isPrimaryClient&&t===0||!s.isPrimaryClient&&t===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.Ru(e);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=I(i);a.onlineState=o;let u=!1;a.queries.forEach((c,l)=>{for(const h of l.listeners)h.Ru(o)&&(u=!0)}),u&&ko(a)}(s.eventManager,e),r.length&&s.nc.zo(r),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function hg(n,e,t){const s=I(n);s.sharedClientState.updateQueryState(e,"rejected",t);const r=s.uc.get(e),i=r&&r.key;if(i){let o=new j(v.comparator);o=o.insert(i,V.newNoDocument(i,x.min()));const a=N().add(i),u=new ls(x.min(),new Map,new P(C),o,a);await Yl(s,u),s.oc=s.oc.remove(i),s.uc.delete(e),Oo(s)}else await Yt(s.localStore,e,!1).then(()=>Jt(s,e,t)).catch(nt)}async function dg(n,e){const t=I(n),s=e.batch.batchId;try{const r=await Nm(t.localStore,e);Fo(t,s,null),Lo(t,s),t.sharedClientState.updateMutationState(s,"acknowledged"),await Ue(t,r)}catch(r){await nt(r)}}async function fg(n,e,t){const s=I(n);try{const r=await function(i,o){const a=I(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return a.mutationQueue.lookupMutationBatch(u,o).next(l=>(b(l!==null),c=l.keys(),a.mutationQueue.removeMutationBatch(u,l))).next(()=>a.mutationQueue.performConsistencyCheck(u)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(u,c,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>a.localDocuments.getDocuments(u,c))})}(s.localStore,e);Fo(s,e,t),Lo(s,e),s.sharedClientState.updateMutationState(e,"rejected",t),await Ue(s,r)}catch(r){await nt(r)}}async function mg(n,e){const t=I(n);qe(t.remoteStore)||y("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const s=await function(i){const o=I(i);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(s===-1)return void e.resolve();const r=t.hc.get(s)||[];r.push(e),t.hc.set(s,r)}catch(s){const r=dn(s,"Initialization of waitForPendingWrites() operation failed");e.reject(r)}}function Lo(n,e){(n.hc.get(e)||[]).forEach(t=>{t.resolve()}),n.hc.delete(e)}function Fo(n,e,t){const s=I(n);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(e);i&&(t?i.reject(t):i.resolve(),r=r.remove(e)),s.ac[s.currentUser.toKey()]=r}}function Jt(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const s of n.ic.get(e))n.sc.delete(s),t&&n.nc.wc(s,t);n.ic.delete(e),n.isPrimaryClient&&n.cc.hs(e).forEach(s=>{n.cc.containsKey(s)||Xl(n,s)})}function Xl(n,e){n.rc.delete(e.path.canonicalString());const t=n.oc.get(e);t!==null&&(jn(n.remoteStore,t),n.oc=n.oc.remove(e),n.uc.delete(t),Oo(n))}function _i(n,e,t){for(const s of t)s instanceof Ql?(n.cc.addReference(s.key,e),gg(n,s)):s instanceof Wl?(y("SyncEngine","Document no longer in limbo: "+s.key),n.cc.removeReference(s.key,e),n.cc.containsKey(s.key)||Xl(n,s.key)):E()}function gg(n,e){const t=e.key,s=t.path.canonicalString();n.oc.get(t)||n.rc.has(s)||(y("SyncEngine","New document in limbo: "+t),n.rc.add(s),Oo(n))}function Oo(n){for(;n.rc.size>0&&n.oc.size<n.maxConcurrentLimboResolutions;){const e=n.rc.values().next().value;n.rc.delete(e);const t=new v(M.fromString(e)),s=n.lc.next();n.uc.set(s,new og(t)),n.oc=n.oc.insert(t,s),Nr(n.remoteStore,new We(ve(on(t.path)),s,2,Te.ct))}}async function Ue(n,e,t){const s=I(n),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,u)=>{o.push(s.dc(u,e,t).then(c=>{if((c||t)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,c!=null&&c.fromCache?"not-current":"current"),c){r.push(c);const l=Eo.Di(u.targetId,c);i.push(l)}}))}),await Promise.all(o),s.nc.zo(r),await async function(a,u){const c=I(a);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>f.forEach(u,h=>f.forEach(h.Vi,d=>c.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>f.forEach(h.Si,d=>c.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!st(l))throw l;y("LocalStore","Failed to update sequence numbers: "+l)}for(const l of u){const h=l.targetId;if(!l.fromCache){const d=c.Li.get(h),g=d.snapshotVersion,w=d.withLastLimboFreeSnapshotVersion(g);c.Li=c.Li.insert(h,w)}}}(s.localStore,i))}async function pg(n,e){const t=I(n);if(!t.currentUser.isEqual(e)){y("SyncEngine","User change. New user:",e.toKey());const s=await Rl(t.localStore,e);t.currentUser=e,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new p(m.CANCELLED,i))})}),r.hc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await Ue(t,s.Qi)}}function yg(n,e){const t=I(n),s=t.uc.get(e);if(s&&s.ec)return N().add(s.key);{let r=N();const i=t.ic.get(e);if(!i)return r;for(const o of i){const a=t.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}async function wg(n,e){const t=I(n),s=await er(t.localStore,e.query,!0),r=e.view.Xu(s);return t.isPrimaryClient&&_i(t,e.targetId,r.Yu),r}async function vg(n,e){const t=I(n);return Ol(t.localStore,e).then(s=>Ue(t,s))}async function Ig(n,e,t,s){const r=I(n),i=await function(o,a){const u=I(o),c=I(u.mutationQueue);return u.persistence.runTransaction("Lookup mutation documents","readonly",l=>c.In(l,a).next(h=>h?u.localDocuments.getDocuments(l,h):f.resolve(null)))}(r.localStore,e);i!==null?(t==="pending"?await ln(r.remoteStore):t==="acknowledged"||t==="rejected"?(Fo(r,e,s||null),Lo(r,e),function(o,a){I(I(o).mutationQueue).En(a)}(r.localStore,e)):E(),await Ue(r,i)):y("SyncEngine","Cannot apply mutation batch with id: "+e)}async function Tg(n,e){const t=I(n);if(Po(t),Vo(t),e===!0&&t.fc!==!0){const s=t.sharedClientState.getAllActiveQueryTargets(),r=await ou(t,s.toArray());t.fc=!0,await Ni(t.remoteStore,!0);for(const i of r)Nr(t.remoteStore,i)}else if(e===!1&&t.fc!==!1){const s=[];let r=Promise.resolve();t.ic.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?s.push(o):r=r.then(()=>(Jt(t,o),Yt(t.localStore,o,!0))),jn(t.remoteStore,o)}),await r,await ou(t,s),function(i){const o=I(i);o.uc.forEach((a,u)=>{jn(o.remoteStore,u)}),o.cc.ls(),o.uc=new Map,o.oc=new j(v.comparator)}(t),t.fc=!1,await Ni(t.remoteStore,!1)}}async function ou(n,e,t){const s=I(n),r=[],i=[];for(const o of e){let a;const u=s.ic.get(o);if(u&&u.length!==0){a=await Ht(s.localStore,ve(u[0]));for(const c of u){const l=s.sc.get(c),h=await wg(s,l);h.snapshot&&i.push(h.snapshot)}}else{const c=await Fl(s.localStore,o);a=await Ht(s.localStore,c),await Mo(s,Jl(c),o,!1,a.resumeToken)}r.push(a)}return s.nc.zo(i),r}function Jl(n){return zc(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function Eg(n){const e=I(n);return I(I(e.localStore).persistence).bi()}async function Sg(n,e,t,s){const r=I(n);if(r.fc)return void y("SyncEngine","Ignoring unexpected query state notification.");const i=r.ic.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await Ol(r.localStore,Kc(i[0])),a=ls.createSynthesizedRemoteEventForCurrentChange(e,t==="current",ne.EMPTY_BYTE_STRING);await Ue(r,o,a);break}case"rejected":await Yt(r.localStore,e,!0),Jt(r,e,s);break;default:E()}}async function bg(n,e,t){const s=Po(n);if(s.fc){for(const r of e){if(s.ic.has(r)){y("SyncEngine","Adding an already active target "+r);continue}const i=await Fl(s.localStore,r),o=await Ht(s.localStore,i);await Mo(s,Jl(i),o.targetId,!1,o.resumeToken),Nr(s.remoteStore,o)}for(const r of t)s.ic.has(r)&&await Yt(s.localStore,r,!1).then(()=>{jn(s.remoteStore,r),Jt(s,r)}).catch(nt)}}function Po(n){const e=I(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=Yl.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=yg.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=hg.bind(null,e),e.nc.zo=tg.bind(null,e.eventManager),e.nc.wc=ng.bind(null,e.eventManager),e}function Vo(n){const e=I(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=dg.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=fg.bind(null,e),e}function xg(n,e,t){const s=I(n);(async function(r,i,o){try{const a=await i.getMetadata();if(await function(h,d){const g=I(h),w=Y(d.createTime);return g.persistence.runTransaction("hasNewerBundle","readonly",T=>g.xs.getBundleMetadata(T,d.id)).then(T=>!!T&&T.createTime.compareTo(w)>=0)}(r.localStore,a))return await i.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(jl(a));const u=new rg(a,r.localStore,i.serializer);let c=await i._c();for(;c;){const h=await u.$u(c);h&&o._updateProgress(h),c=await i._c()}const l=await u.complete();return await Ue(r,l.Bu,void 0),await function(h,d){const g=I(h);return g.persistence.runTransaction("Save bundle","readwrite",w=>g.xs.saveBundleMetadata(w,d))}(r.localStore,a),o._completeWith(l.progress),Promise.resolve(l.Fu)}catch(a){return Oe("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(s,e,t).then(r=>{s.sharedClientState.notifyBundleLoaded(r)})}class rr{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ds(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return kl(this.persistence,new _l,e.initialUser,this.serializer)}createPersistence(e){return new Nl(Ar.Fs,this.serializer)}createSharedClientState(e){return new Vl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class qo extends rr{constructor(e,t,s){super(),this.mc=e,this.cacheSizeBytes=t,this.forceOwnership=s,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.mc.initialize(this,e),await Vo(this.mc.syncEngine),await ln(this.mc.remoteStore),await this.persistence.hi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return kl(this.persistence,new _l,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const s=this.persistence.referenceDelegate.garbageCollector;return new mm(s,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const s=new Hd(t,this.persistence);return new Wd(e.asyncQueue,s)}createPersistence(e){const t=To(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),s=this.cacheSizeBytes!==void 0?Ie.withCacheSize(this.cacheSizeBytes):Ie.DEFAULT;return new Io(this.synchronizeTabs,t,e.clientId,s,e.asyncQueue,ql(),Os(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new Vl}}class Zl extends qo{constructor(e,t){super(e,t,!1),this.mc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.mc.syncEngine;this.sharedClientState instanceof Zr&&(this.sharedClientState.syncEngine={$r:Ig.bind(null,t),Mr:Sg.bind(null,t),Fr:bg.bind(null,t),bi:Eg.bind(null,t),Or:vg.bind(null,t)},await this.sharedClientState.start()),await this.persistence.hi(async s=>{await Tg(this.mc.syncEngine,s),this.gcScheduler&&(s&&!this.gcScheduler.started?this.gcScheduler.start():s||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(s&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():s||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=ql();if(!Zr.D(t))throw new p(m.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const s=To(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Zr(t,e.asyncQueue,s,e.clientId,e.initialUser)}}class fn{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>iu(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=pg.bind(null,this.syncEngine),await Ni(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new eg}createDatastore(e){const t=ds(e.databaseInfo.databaseId),s=(r=e.databaseInfo,new Pm(r));var r;return function(i,o,a,u){return new Um(i,o,a,u)}(e.authCredentials,e.appCheckCredentials,s,t)}createRemoteStore(e){return t=this.localStore,s=this.datastore,r=e.asyncQueue,i=a=>iu(this.syncEngine,a,0),o=tu.D()?new tu:new Lm,new zm(t,s,r,i,o);var t,s,r,i,o}createSyncEngine(e,t){return function(s,r,i,o,a,u,c){const l=new ag(s,r,i,o,a,u);return c&&(l.fc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=I(e);y("RemoteStore","RemoteStore shutting down."),t.du.add(5),await cn(t),t._u.shutdown(),t.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */function au(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const s={value:n.slice(t,t+e),done:!1};return t+=e,s}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class _r{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):W("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class Dg{constructor(e,t){this.Ic=e,this.serializer=t,this.metadata=new te,this.buffer=new Uint8Array,this.Tc=new TextDecoder("utf-8"),this.Ec().then(s=>{s&&s.ku()?this.metadata.resolve(s.Nu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(s==null?void 0:s.Nu)}`))},s=>this.metadata.reject(s))}close(){return this.Ic.cancel()}async getMetadata(){return this.metadata.promise}async _c(){return await this.getMetadata(),this.Ec()}async Ec(){const e=await this.Ac();if(e===null)return null;const t=this.Tc.decode(e),s=Number(t);isNaN(s)&&this.Rc(`length string (${t}) is not valid number`);const r=await this.vc(s);return new sg(JSON.parse(r),e.length+s)}bc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Ac(){for(;this.bc()<0&&!await this.Pc(););if(this.buffer.length===0)return null;const e=this.bc();e<0&&this.Rc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async vc(e){for(;this.buffer.length<e;)await this.Pc()&&this.Rc("Reached the end of bundle when more is expected.");const t=this.Tc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Rc(e){throw this.Ic.cancel(),new Error(`Invalid bundle format: ${e}`)}async Pc(){const e=await this.Ic.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class Cg{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new p(m.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(s,r){const i=I(s),o=Gn(i.serializer)+"/documents",a={documents:r.map(h=>zn(i.serializer,h))},u=await i.fo("BatchGetDocuments",o,a,r.length),c=new Map;u.forEach(h=>{const d=Wf(i.serializer,h);c.set(d.key.toString(),d)});const l=[];return r.forEach(h=>{const d=c.get(h.toString());b(!!d),l.push(d)}),l}(this.datastore,e);return t.forEach(s=>this.recordVersion(s)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(s){this.lastWriteError=s}this.writtenDocs.add(e.toString())}delete(e){this.write(new un(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,s)=>{const r=v.fromPath(s);this.mutations.push(new ao(r,this.precondition(r)))}),await async function(t,s){const r=I(t),i=Gn(r.serializer)+"/documents",o={writes:s.map(a=>Kn(r.serializer,a))};await r.co("Commit",i,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw E();t=x.min()}const s=this.readVersions.get(e.key.toString());if(s){if(!t.isEqual(s))throw new p(m.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(x.min())?B.exists(!1):B.updateTime(t):B.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(x.min()))throw new p(m.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return B.updateTime(t)}return B.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class Ag{constructor(e,t,s,r,i){this.asyncQueue=e,this.datastore=t,this.options=s,this.updateFunction=r,this.deferred=i,this.Vc=s.maxAttempts,this.Co=new bo(this.asyncQueue,"transaction_retry")}run(){this.Vc-=1,this.Sc()}Sc(){this.Co.Ao(async()=>{const e=new Cg(this.datastore),t=this.Dc(e);t&&t.then(s=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(s)}).catch(r=>{this.Cc(r)}))}).catch(s=>{this.Cc(s)})})}Dc(e){try{const t=this.updateFunction(e);return!is(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Cc(e){this.Vc>0&&this.xc(e)?(this.Vc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Sc(),Promise.resolve()))):this.deferred.reject(e)}xc(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!il(t)}return!1}}/**
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
 */class Ng{constructor(e,t,s,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=s,this.databaseInfo=r,this.user=re.UNAUTHENTICATED,this.clientId=Tc.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{y("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(y("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new p(m.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new te;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const s=dn(t,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Ps(n,e){n.asyncQueue.verifyOperationInProgress(),y("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let s=t.initialUser;n.setCredentialChangeListener(async r=>{s.isEqual(r)||(await Rl(e.localStore,r),s=r)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function ki(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Uo(n);y("FirestoreClient","Initializing OnlineComponentProvider");const s=await n.getConfiguration();await e.initialize(t,s),n.setCredentialChangeListener(r=>nu(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,i)=>nu(e.remoteStore,i)),n._onlineComponents=e}function eh(n){return n.name==="FirebaseError"?n.code===m.FAILED_PRECONDITION||n.code===m.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Uo(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){y("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ps(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!eh(t))throw t;Oe("Error using user provided cache. Falling back to memory cache: "+t),await Ps(n,new rr)}}else y("FirestoreClient","Using default OfflineComponentProvider"),await Ps(n,new rr);return n._offlineComponents}async function kr(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(y("FirestoreClient","Using user provided OnlineComponentProvider"),await ki(n,n._uninitializedComponentsProvider._online)):(y("FirestoreClient","Using default OnlineComponentProvider"),await ki(n,new fn))),n._onlineComponents}function th(n){return Uo(n).then(e=>e.persistence)}function Rr(n){return Uo(n).then(e=>e.localStore)}function Bo(n){return kr(n).then(e=>e.remoteStore)}function $o(n){return kr(n).then(e=>e.syncEngine)}function nh(n){return kr(n).then(e=>e.datastore)}async function Zt(n){const e=await kr(n),t=e.eventManager;return t.onListen=ug.bind(null,e.syncEngine),t.onUnlisten=cg.bind(null,e.syncEngine),t}function _g(n){return n.asyncQueue.enqueue(async()=>{const e=await th(n),t=await Bo(n);return e.setNetworkEnabled(!0),function(s){const r=I(s);return r.du.delete(0),fs(r)}(t)})}function kg(n){return n.asyncQueue.enqueue(async()=>{const e=await th(n),t=await Bo(n);return e.setNetworkEnabled(!1),async function(s){const r=I(s);r.du.add(0),await cn(r),r.mu.set("Offline")}(t)})}function Rg(n,e){const t=new te;return n.asyncQueue.enqueueAndForget(async()=>async function(s,r,i){try{const o=await function(a,u){const c=I(a);return c.persistence.runTransaction("read document","readonly",l=>c.localDocuments.getDocument(l,u))}(s,r);o.isFoundDocument()?i.resolve(o):o.isNoDocument()?i.resolve(null):i.reject(new p(m.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=dn(o,`Failed to get document '${r} from cache`);i.reject(a)}}(await Rr(n),e,t)),t.promise}function sh(n,e,t={}){const s=new te;return n.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,u){const c=new _r({next:h=>{i.enqueueAndForget(()=>_o(r,l));const d=h.docs.has(o);!d&&h.fromCache?u.reject(new p(m.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?u.reject(new p(m.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),l=new Ro(on(o.path),c,{includeMetadataChanges:!0,xu:!0});return No(r,l)}(await Zt(n),n.asyncQueue,e,t,s)),s.promise}function Mg(n,e){const t=new te;return n.asyncQueue.enqueueAndForget(async()=>async function(s,r,i){try{const o=await er(s,r,!0),a=new Hl(r,o.Wi),u=a.zu(o.documents),c=a.applyChanges(u,!1);i.resolve(c.snapshot)}catch(o){const a=dn(o,`Failed to execute query '${r} against cache`);i.reject(a)}}(await Rr(n),e,t)),t.promise}function rh(n,e,t={}){const s=new te;return n.asyncQueue.enqueueAndForget(async()=>function(r,i,o,a,u){const c=new _r({next:h=>{i.enqueueAndForget(()=>_o(r,l)),h.fromCache&&a.source==="server"?u.reject(new p(m.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),l=new Ro(o,c,{includeMetadataChanges:!0,xu:!0});return No(r,l)}(await Zt(n),n.asyncQueue,e,t,s)),s.promise}function Lg(n,e){const t=new _r(e);return n.asyncQueue.enqueueAndForget(async()=>function(s,r){I(s).Au.add(r),r.next()}(await Zt(n),t)),()=>{t.yc(),n.asyncQueue.enqueueAndForget(async()=>function(s,r){I(s).Au.delete(r)}(await Zt(n),t))}}function Fg(n,e,t,s){const r=function(i,o){let a;return a=typeof i=="string"?new TextEncoder().encode(i):i,function(u,c){return new Dg(u,c)}(function(u,c){if(u instanceof Uint8Array)return au(u,c);if(u instanceof ArrayBuffer)return au(new Uint8Array(u),c);if(u instanceof ReadableStream)return u.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,ds(e));n.asyncQueue.enqueueAndForget(async()=>{xg(await $o(n),r,s)})}function Og(n,e){return n.asyncQueue.enqueue(async()=>function(t,s){const r=I(t);return r.persistence.runTransaction("Get named query","readonly",i=>r.xs.getNamedQuery(i,s))}(await Rr(n),e))}function Pg(n,e){return n.asyncQueue.enqueue(async()=>async function(t,s){const r=I(t),i=r.indexManager,o=[];return r.persistence.runTransaction("Configure indexes","readwrite",a=>i.getFieldIndexes(a).next(u=>function(c,l,h,d,g){c=[...c],l=[...l],c.sort(h),l.sort(h);const w=c.length,T=l.length;let D=0,L=0;for(;D<T&&L<w;){const Q=h(c[L],l[D]);Q<0?g(c[L++]):Q>0?d(l[D++]):(D++,L++)}for(;D<T;)d(l[D++]);for(;L<w;)g(c[L++])}(u,s,Gd,c=>{o.push(i.addFieldIndex(a,c))},c=>{o.push(i.deleteFieldIndex(a,c))})).next(()=>f.waitFor(o)))}(await Rr(n),e))}/**
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
 */const uu=new Map;/**
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
 */function zo(n,e,t){if(!t)throw new p(m.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Vg(n,e,t,s){if(e===!0&&s===!0)throw new p(m.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function cu(n){if(!v.isDocumentKey(n))throw new p(m.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function lu(n){if(v.isDocumentKey(n))throw new p(m.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Mr(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":E()}function k(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new p(m.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Mr(n);throw new p(m.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function ih(n,e){if(e<=0)throw new p(m.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class hu{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new p(m.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new p(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Vg("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class ms{constructor(e,t,s,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new hu({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new p(m.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new p(m.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new hu(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new Od;switch(t.type){case"firstParty":return new Ud(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new p(m.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=uu.get(e);t&&(y("ComponentProvider","Removing Datastore"),uu.delete(e),t.terminate())}(this),Promise.resolve()}}function qg(n,e,t,s={}){var r;const i=(n=k(n,ms))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Oe("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${t}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=re.MOCK_USER;else{o=bh(s.mockUserToken,(r=n._app)===null||r===void 0?void 0:r.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new p(m.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new re(u)}n._authCredentials=new Pd(new vc(o,a))}}/**
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
 */class X{constructor(e,t,s){this.converter=t,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Re(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new X(this.firestore,e,this._key)}}class he{constructor(e,t,s){this.converter=t,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new he(this.firestore,e,this._query)}}class Re extends he{constructor(e,t,s){super(e,t,on(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new X(this.firestore,null,new v(e))}withConverter(e){return new Re(this.firestore,e,this._path)}}function gp(n,e,...t){if(n=oe(n),zo("collection","path",e),n instanceof ms){const s=M.fromString(e,...t);return lu(s),new Re(n,null,s)}{if(!(n instanceof X||n instanceof Re))throw new p(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(M.fromString(e,...t));return lu(s),new Re(n.firestore,null,s)}}function pp(n,e){if(n=k(n,ms),zo("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new p(m.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new he(n,null,function(t){return new Pe(M.emptyPath(),t)}(e))}function Ug(n,e,...t){if(n=oe(n),arguments.length===1&&(e=Tc.A()),zo("doc","path",e),n instanceof ms){const s=M.fromString(e,...t);return cu(s),new X(n,null,new v(s))}{if(!(n instanceof X||n instanceof Re))throw new p(m.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=n._path.child(M.fromString(e,...t));return cu(s),new X(n.firestore,n instanceof Re?n.converter:null,new v(s))}}function yp(n,e){return n=oe(n),e=oe(e),(n instanceof X||n instanceof Re)&&(e instanceof X||e instanceof Re)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function oh(n,e){return n=oe(n),e=oe(e),n instanceof he&&e instanceof he&&n.firestore===e.firestore&&as(n._query,e._query)&&n.converter===e.converter}/**
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
 */class Bg{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new bo(this,"async_queue_retry"),this.qc=()=>{const t=Os();t&&y("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Co.vo()};const e=Os();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const t=Os();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const t=new te;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!st(e))throw e;y("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const t=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw W("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Fc=!1,s))));return this.Nc=t,t}enqueueAfterDelay(e,t,s){this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);const r=Ao.createAndSchedule(this,e,t,s,i=>this.Qc(i));return this.$c.push(r),r}Uc(){this.Mc&&E()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((t,s)=>t.targetTimeMs-s.targetTimeMs);for(const t of this.$c)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}function Ri(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const s=e;for(const r of t)if(r in s&&typeof s[r]=="function")return!0;return!1}(n,["next","error","complete"])}class $g{constructor(){this._progressObserver={},this._taskCompletionResolver=new te,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,s){this._progressObserver={next:e,error:t,complete:s}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const wp=-1;class q extends ms{constructor(e,t,s,r){super(e,t,s,r),this.type="firestore",this._queue=new Bg,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||ah(this),this._firestoreClient.terminate()}}function vp(n,e,t){t||(t="(default)");const s=gu(n,"firestore");if(s.isInitialized(t)){const r=s.getImmediate({identifier:t}),i=s.getOptions(t);if(pu(i,e))return r;throw new p(m.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(e.cacheSizeBytes!==void 0&&e.localCache!==void 0)throw new p(m.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(e.cacheSizeBytes!==void 0&&e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new p(m.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return s.initialize({options:e,instanceIdentifier:t})}function Ip(n,e){const t=typeof n=="object"?n:xh(),s=typeof n=="string"?n:e||"(default)",r=gu(t,"firestore").getImmediate({identifier:s});if(!r._initialized){const i=Dh("firestore");i&&qg(r,...i)}return r}function ee(n){return n._firestoreClient||ah(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function ah(n){var e,t,s;const r=n._freezeSettings(),i=function(o,a,u,c){return new yf(o,a,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,c.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,r);n._firestoreClient=new Ng(n._authCredentials,n._appCheckCredentials,n._queue,i),((t=r.cache)===null||t===void 0?void 0:t._offlineComponentProvider)&&((s=r.cache)===null||s===void 0?void 0:s._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}function Tp(n,e){ch(n=k(n,q));const t=ee(n);if(t._uninitializedComponentsProvider)throw new p(m.FAILED_PRECONDITION,"SDK cache is already specified.");Oe("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const s=n._freezeSettings(),r=new fn;return uh(t,r,new qo(r,s.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function Ep(n){ch(n=k(n,q));const e=ee(n);if(e._uninitializedComponentsProvider)throw new p(m.FAILED_PRECONDITION,"SDK cache is already specified.");Oe("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),s=new fn;return uh(e,s,new Zl(s,t.cacheSizeBytes))}function uh(n,e,t){const s=new te;return n.asyncQueue.enqueue(async()=>{try{await Ps(n,t),await ki(n,e),s.resolve()}catch(r){const i=r;if(!eh(i))throw i;Oe("Error enabling indexeddb cache. Falling back to memory cache: "+i),s.reject(i)}}).then(()=>s.promise)}function Sp(n){if(n._initialized&&!n._terminated)throw new p(m.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new te;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!Ce.D())return Promise.resolve();const s=t+"main";await Ce.delete(s)}(To(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function bp(n){return function(e){const t=new te;return e.asyncQueue.enqueueAndForget(async()=>mg(await $o(e),t)),t.promise}(ee(n=k(n,q)))}function xp(n){return _g(ee(n=k(n,q)))}function Dp(n){return kg(ee(n=k(n,q)))}function Cp(n){return Ch(n.app,"firestore",n._databaseId.database),n._delete()}function Ap(n,e){const t=ee(n=k(n,q)),s=new $g;return Fg(t,n._databaseId,e,s),s}function Np(n,e){return Og(ee(n=k(n,q)),e).then(t=>t?new he(n,null,t.query):null)}function ch(n){if(n._initialized||n._terminated)throw new p(m.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 *//**
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
 */class Qn{constructor(e="count",t){this._aggregateType=e,this._internalFieldPath=t,this.type="AggregateField"}}class zg{constructor(e,t,s){this._userDataWriter=t,this._data=s,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertValue(this._data.value)}}/**
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
 */class Ct{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ct(ne.fromBase64String(e))}catch(t){throw new p(m.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ct(ne.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class _t{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new p(m.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new H(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function _p(){return new _t("__name__")}/**
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
 */class kt{constructor(e){this._methodName=e}}/**
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
 */class Go{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new p(m.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new p(m.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return C(this._lat,e._lat)||C(this._long,e._long)}}/**
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
 */const Gg=/^__.*__$/;class Kg{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return this.fieldMask!==null?new Ve(e,this.data,this.fieldMask,t,this.fieldTransforms):new an(e,this.data,t,this.fieldTransforms)}}class lh{constructor(e,t,s){this.data=e,this.fieldMask=t,this.fieldTransforms=s}toMutation(e,t){return new Ve(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function hh(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw E()}}class Lr{constructor(e,t,s,r,i,o){this.settings=e,this.databaseId=t,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Lr(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Zc({path:s,ta:!1});return r.ea(e),r}na(e){var t;const s=(t=this.path)===null||t===void 0?void 0:t.child(e),r=this.Zc({path:s,ta:!1});return r.Jc(),r}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return ir(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(hh(this.Yc)&&Gg.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class jg{constructor(e,t,s){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=s||ds(e)}ua(e,t,s,r=!1){return new Lr({Yc:e,methodName:t,oa:s,path:H.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Rt(n){const e=n._freezeSettings(),t=ds(n._databaseId);return new jg(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Fr(n,e,t,s,r,i={}){const o=n.ua(i.merge||i.mergeFields?2:0,e,t,r);Wo("Data must be an object, but it was:",o,s);const a=mh(s,o);let u,c;if(i.merge)u=new Ee(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=Wn(e,h,t);if(!o.contains(d))throw new p(m.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);ph(l,d)||l.push(d)}u=new Ee(l),c=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,c=o.fieldTransforms;return new Kg(new ie(a),u,c)}class gs extends kt{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof gs}}function dh(n,e,t){return new Lr({Yc:3,oa:e.settings.oa,methodName:n._methodName,ta:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Ko extends kt{_toFieldTransform(e){return new cs(e.path,new jt)}isEqual(e){return e instanceof Ko}}class Qg extends kt{constructor(e,t){super(e),this.ca=t}_toFieldTransform(e){const t=dh(this,e,!0),s=this.ca.map(i=>Mt(i,t)),r=new Et(s);return new cs(e.path,r)}isEqual(e){return this===e}}class Wg extends kt{constructor(e,t){super(e),this.ca=t}_toFieldTransform(e){const t=dh(this,e,!0),s=this.ca.map(i=>Mt(i,t)),r=new St(s);return new cs(e.path,r)}isEqual(e){return this===e}}class Hg extends kt{constructor(e,t){super(e),this.aa=t}_toFieldTransform(e){const t=new Qt(e.serializer,Jc(e.serializer,this.aa));return new cs(e.path,t)}isEqual(e){return this===e}}function jo(n,e,t,s){const r=n.ua(1,e,t);Wo("Data must be an object, but it was:",r,s);const i=[],o=ie.empty();Nt(s,(u,c)=>{const l=Or(e,u,t);c=oe(c);const h=r.na(l);if(c instanceof gs)i.push(l);else{const d=Mt(c,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new Ee(i);return new lh(o,a,r.fieldTransforms)}function Qo(n,e,t,s,r,i){const o=n.ua(1,e,t),a=[Wn(e,s,t)],u=[r];if(i.length%2!=0)throw new p(m.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Wn(e,i[d])),u.push(i[d+1]);const c=[],l=ie.empty();for(let d=a.length-1;d>=0;--d)if(!ph(c,a[d])){const g=a[d];let w=u[d];w=oe(w);const T=o.na(g);if(w instanceof gs)c.push(g);else{const D=Mt(w,T);D!=null&&(c.push(g),l.set(g,D))}}const h=new Ee(c);return new lh(l,h,o.fieldTransforms)}function fh(n,e,t,s=!1){return Mt(t,n.ua(s?4:3,e))}function Mt(n,e){if(gh(n=oe(n)))return Wo("Unsupported field value:",e,n),mh(n,e);if(n instanceof kt)return function(t,s){if(!hh(s.Yc))throw s.ia(`${t._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${t._methodName}() is not currently supported inside arrays`);const r=t._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(t,s){const r=[];let i=0;for(const o of t){let a=Mt(o,s.sa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(n,e)}return function(t,s){if((t=oe(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return Jc(s.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const r=$.fromDate(t);return{timestampValue:Wt(s.serializer,r)}}if(t instanceof $){const r=new $(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Wt(s.serializer,r)}}if(t instanceof Go)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Ct)return{bytesValue:cl(s.serializer,t._byteString)};if(t instanceof X){const r=s.databaseId,i=t.firestore._databaseId;if(!i.isEqual(r))throw s.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:mo(t.firestore._databaseId||s.databaseId,t._key.path)}}throw s.ia(`Unsupported field value: ${Mr(t)}`)}(n,e)}function mh(n,e){const t={};return Rc(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Nt(n,(s,r)=>{const i=Mt(r,e.Xc(s));i!=null&&(t[s]=i)}),{mapValue:{fields:t}}}function gh(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof $||n instanceof Go||n instanceof Ct||n instanceof X||n instanceof kt)}function Wo(n,e,t){if(!gh(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const s=Mr(t);throw s==="an object"?e.ia(n+" a custom object"):e.ia(n+" "+s)}}function Wn(n,e,t){if((e=oe(e))instanceof _t)return e._internalPath;if(typeof e=="string")return Or(n,e);throw ir("Field path arguments must be of type string or ",n,!1,void 0,t)}const Yg=new RegExp("[~\\*/\\[\\]]");function Or(n,e,t){if(e.search(Yg)>=0)throw ir(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new _t(...e.split("."))._internalPath}catch{throw ir(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function ir(n,e,t,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${s}`),o&&(u+=` in document ${r}`),u+=")"),new p(m.INVALID_ARGUMENT,a+n+u)}function ph(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Hn{constructor(e,t,s,r,i){this._firestore=e,this._userDataWriter=t,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new X(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Xg(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Pr("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class Xg extends Hn{data(){return super.data()}}function Pr(n,e){return typeof e=="string"?Or(n,e):e instanceof _t?e._internalPath:e._delegate._internalPath}/**
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
 */function yh(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new p(m.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ho{}class ps extends Ho{}function kp(n,e,...t){let s=[];e instanceof Ho&&s.push(e),s=s.concat(t),function(r){const i=r.filter(a=>a instanceof mn).length,o=r.filter(a=>a instanceof ys).length;if(i>1||i>0&&o>0)throw new p(m.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const r of s)n=r._apply(n);return n}class ys extends ps{constructor(e,t,s){super(),this._field=e,this._op=t,this._value=s,this.type="where"}static _create(e,t,s){return new ys(e,t,s)}_apply(e){const t=this._parse(e);return vh(e._query,t),new he(e.firestore,e.converter,Ti(e._query,t))}_parse(e){const t=Rt(e.firestore);return function(r,i,o,a,u,c,l){let h;if(u.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new p(m.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){fu(l,c);const d=[];for(const g of l)d.push(du(a,r,g));h={arrayValue:{values:d}}}else h=du(a,r,l)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||fu(l,c),h=fh(o,i,l,c==="in"||c==="not-in");return _.create(u,c,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function Rp(n,e,t){const s=e,r=Pr("where",n);return ys._create(r,s,t)}class mn extends Ho{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new mn(e,t)}_parse(e){const t=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return t.length===1?t[0]:F.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)vh(i,a),i=Ti(i,a)}(e._query,t),new he(e.firestore,e.converter,Ti(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function Mp(...n){return n.forEach(e=>Th("or",e)),mn._create("or",n)}function Lp(...n){return n.forEach(e=>Th("and",e)),mn._create("and",n)}class Yo extends ps{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Yo(e,t)}_apply(e){const t=function(s,r,i){if(s.startAt!==null)throw new p(m.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new p(m.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new qt(r,i);return function(a,u){if(io(a)===null){const c=Er(a);c!==null&&Ih(a,c,u.field)}}(s,o),o}(e._query,this._field,this._direction);return new he(e.firestore,e.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new Pe(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,t))}}function Fp(n,e="asc"){const t=e,s=Pr("orderBy",n);return Yo._create(s,t)}class Vr extends ps{constructor(e,t,s){super(),this.type=e,this._limit=t,this._limitType=s}static _create(e,t,s){return new Vr(e,t,s)}_apply(e){return new he(e.firestore,e.converter,Ys(e._query,this._limit,this._limitType))}}function Op(n){return ih("limit",n),Vr._create("limit",n,"F")}function Pp(n){return ih("limitToLast",n),Vr._create("limitToLast",n,"L")}class qr extends ps{constructor(e,t,s){super(),this.type=e,this._docOrFields=t,this._inclusive=s}static _create(e,t,s){return new qr(e,t,s)}_apply(e){const t=wh(e,this.type,this._docOrFields,this._inclusive);return new he(e.firestore,e.converter,function(s,r){return new Pe(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,r,s.endAt)}(e._query,t))}}function Vp(...n){return qr._create("startAt",n,!0)}function qp(...n){return qr._create("startAfter",n,!1)}class Ur extends ps{constructor(e,t,s){super(),this.type=e,this._docOrFields=t,this._inclusive=s}static _create(e,t,s){return new Ur(e,t,s)}_apply(e){const t=wh(e,this.type,this._docOrFields,this._inclusive);return new he(e.firestore,e.converter,function(s,r){return new Pe(s.path,s.collectionGroup,s.explicitOrderBy.slice(),s.filters.slice(),s.limit,s.limitType,s.startAt,r)}(e._query,t))}}function Up(...n){return Ur._create("endBefore",n,!1)}function Bp(...n){return Ur._create("endAt",n,!0)}function wh(n,e,t,s){if(t[0]=oe(t[0]),t[0]instanceof Hn)return function(r,i,o,a,u){if(!a)throw new p(m.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const c=[];for(const l of pt(r))if(l.field.isKeyField())c.push(It(i,a.key));else{const h=a.data.field(l.field);if(so(h))throw new p(m.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new p(m.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}c.push(h)}return new Je(c,u)}(n._query,n.firestore._databaseId,e,t[0]._document,s);{const r=Rt(n.firestore);return function(i,o,a,u,c,l){const h=i.explicitOrderBy;if(c.length>h.length)throw new p(m.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let g=0;g<c.length;g++){const w=c[g];if(h[g].field.isKeyField()){if(typeof w!="string")throw new p(m.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof w}`);if(!oo(i)&&w.indexOf("/")!==-1)throw new p(m.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${w}' contains a slash.`);const T=i.path.child(M.fromString(w));if(!v.isDocumentKey(T))throw new p(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${T}' is not because it contains an odd number of segments.`);const D=new v(T);d.push(It(o,D))}else{const T=fh(a,u,w);d.push(T)}}return new Je(d,l)}(n._query,n.firestore._databaseId,r,e,t,s)}}function du(n,e,t){if(typeof(t=oe(t))=="string"){if(t==="")throw new p(m.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!oo(e)&&t.indexOf("/")!==-1)throw new p(m.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const s=e.path.child(M.fromString(t));if(!v.isDocumentKey(s))throw new p(m.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return It(n,new v(s))}if(t instanceof X)return It(n,t._key);throw new p(m.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Mr(t)}.`)}function fu(n,e){if(!Array.isArray(n)||n.length===0)throw new p(m.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function vh(n,e){if(e.isInequality()){const s=Er(n),r=e.field;if(s!==null&&!s.isEqual(r))throw new p(m.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=io(n);i!==null&&Ih(n,r,i)}const t=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new p(m.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new p(m.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function Ih(n,e,t){if(!t.isEqual(e))throw new p(m.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}function Th(n,e){if(!(e instanceof ys||e instanceof mn))throw new p(m.INVALID_ARGUMENT,`Function ${n}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class Eh{convertValue(e,t="none"){switch(vt(e)){case 0:return null;case 1:return e.booleanValue;case 2:return G(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(yt(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw E()}}convertObject(e,t){const s={};return Nt(e.fields,(r,i)=>{s[r]=this.convertValue(i,t)}),s}convertGeoPoint(e){return new Go(G(e.latitude),G(e.longitude))}convertArray(e,t){return(e.values||[]).map(s=>this.convertValue(s,t))}convertServerTimestamp(e,t){switch(t){case"previous":const s=Mc(e);return s==null?null:this.convertValue(s,t);case"estimate":return this.convertTimestamp(Un(e));default:return null}}convertTimestamp(e){const t=Ye(e);return new $(t.seconds,t.nanos)}convertDocumentKey(e,t){const s=M.fromString(e);b(wl(s));const r=new wt(s.get(1),s.get(3)),i=new v(s.popFirst(5));return r.isEqual(t)||W(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function Br(n,e,t){let s;return s=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,s}class Jg extends Eh{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ct(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new X(this.firestore,null,t)}}/**
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
 */function $p(n){return new Qn("sum",Wn("sum",n))}function zp(n){return new Qn("avg",Wn("average",n))}function Zg(){return new Qn("count")}function Gp(n,e){var t,s;return n instanceof Qn&&e instanceof Qn&&n._aggregateType===e._aggregateType&&((t=n._internalFieldPath)===null||t===void 0?void 0:t.canonicalString())===((s=e._internalFieldPath)===null||s===void 0?void 0:s.canonicalString())}function Kp(n,e){return oh(n.query,e.query)&&pu(n.data(),e.data())}/**
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
 */class mt{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class en extends Hn{constructor(e,t,s,r,i,o){super(e,t,s,r,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Vs(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const s=this._document.data.field(Pr("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,t.serverTimestamps)}}}class Vs extends en{data(e={}){return super.data(e)}}class tn{constructor(e,t,s,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new mt(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(s=>{e.call(t,new Vs(this._firestore,this._userDataWriter,s.key,s,new mt(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new p(m.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Vs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new mt(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Vs(s._firestore,s._userDataWriter,o.doc.key,o.doc,new mt(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,c=-1;return o.type!==0&&(u=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),c=i.indexOf(o.doc.key)),{type:ep(o.type),doc:a,oldIndex:u,newIndex:c}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function ep(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return E()}}function jp(n,e){return n instanceof en&&e instanceof en?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof tn&&e instanceof tn&&n._firestore===e._firestore&&oh(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function Qp(n){n=k(n,X);const e=k(n.firestore,q);return sh(ee(e),n._key).then(t=>Xo(e,n,t))}class it extends Eh{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ct(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new X(this.firestore,null,t)}}function Wp(n){n=k(n,X);const e=k(n.firestore,q),t=ee(e),s=new it(e);return Rg(t,n._key).then(r=>new en(e,s,n._key,r,new mt(r!==null&&r.hasLocalMutations,!0),n.converter))}function Hp(n){n=k(n,X);const e=k(n.firestore,q);return sh(ee(e),n._key,{source:"server"}).then(t=>Xo(e,n,t))}function Yp(n){n=k(n,he);const e=k(n.firestore,q),t=ee(e),s=new it(e);return yh(n._query),rh(t,n._query).then(r=>new tn(e,s,n,r))}function Xp(n){n=k(n,he);const e=k(n.firestore,q),t=ee(e),s=new it(e);return Mg(t,n._query).then(r=>new tn(e,s,n,r))}function Jp(n){n=k(n,he);const e=k(n.firestore,q),t=ee(e),s=new it(e);return rh(t,n._query,{source:"server"}).then(r=>new tn(e,s,n,r))}function Zp(n,e,t){n=k(n,X);const s=k(n.firestore,q),r=Br(n.converter,e,t);return ws(s,[Fr(Rt(s),"setDoc",n._key,r,n.converter!==null,t).toMutation(n._key,B.none())])}function ey(n,e,t,...s){n=k(n,X);const r=k(n.firestore,q),i=Rt(r);let o;return o=typeof(e=oe(e))=="string"||e instanceof _t?Qo(i,"updateDoc",n._key,e,t,s):jo(i,"updateDoc",n._key,e),ws(r,[o.toMutation(n._key,B.exists(!0))])}function ty(n){return ws(k(n.firestore,q),[new un(n._key,B.none())])}function ny(n,e){const t=k(n.firestore,q),s=Ug(n),r=Br(n.converter,e);return ws(t,[Fr(Rt(n.firestore),"addDoc",s._key,r,n.converter!==null,{}).toMutation(s._key,B.exists(!1))]).then(()=>s)}function sy(n,...e){var t,s,r;n=oe(n);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Ri(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Ri(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(s=h.error)===null||s===void 0?void 0:s.bind(h),e[o+2]=(r=h.complete)===null||r===void 0?void 0:r.bind(h)}let u,c,l;if(n instanceof X)c=k(n.firestore,q),l=on(n._key.path),u={next:h=>{e[o]&&e[o](Xo(c,n,h))},error:e[o+1],complete:e[o+2]};else{const h=k(n,he);c=k(h.firestore,q),l=h._query;const d=new it(c);u={next:g=>{e[o]&&e[o](new tn(c,d,h,g))},error:e[o+1],complete:e[o+2]},yh(n._query)}return function(h,d,g,w){const T=new _r(w),D=new Ro(d,T,g);return h.asyncQueue.enqueueAndForget(async()=>No(await Zt(h),D)),()=>{T.yc(),h.asyncQueue.enqueueAndForget(async()=>_o(await Zt(h),D))}}(ee(c),l,a,u)}function ry(n,e){return Lg(ee(n=k(n,q)),Ri(e)?e:{next:e})}function ws(n,e){return function(t,s){const r=new te;return t.asyncQueue.enqueueAndForget(async()=>lg(await $o(t),s,r)),r.promise}(ee(n),e)}function Xo(n,e,t){const s=t.docs.get(e._key),r=new it(n);return new en(n,r,e._key,s,new mt(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */function iy(n){return tp(n,{count:Zg()})}function tp(n,e){const t=k(n.firestore,q),s=ee(t),r=function(i,o){const a=[];for(const u in i)Object.prototype.hasOwnProperty.call(i,u)&&a.push(o(i[u],u,i));return a}(e,(i,o)=>new Uf(new ho(o),i._aggregateType,i._internalFieldPath));return function(i,o,a){const u=new te;return i.asyncQueue.enqueueAndForget(async()=>{try{if(qe(await Bo(i))){const c=await nh(i);u.resolve(Bm(c,o,a))}else u.reject(new p(m.UNAVAILABLE,"Failed to get aggregate result because the client is offline."))}catch(c){u.reject(c)}}),u.promise}(s,n._query,r).then(i=>function(o,a,u){const c=new it(o);return new zg(a,c,u)}(t,n,i))}class np{constructor(){this.kind="memory",this._onlineComponentProvider=new fn,this._offlineComponentProvider=new rr}toJSON(){return{kind:this.kind}}}class sp{constructor(e){let t;this.kind="persistent",e!=null&&e.tabManager?(e.tabManager._initialize(e),t=e.tabManager):(t=op(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}function oy(){return new np}function ay(n){return new sp(n)}class rp{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=new fn,this._offlineComponentProvider=new qo(this._onlineComponentProvider,e==null?void 0:e.cacheSizeBytes,this.forceOwnership)}}class ip{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=new fn,this._offlineComponentProvider=new Zl(this._onlineComponentProvider,e==null?void 0:e.cacheSizeBytes)}}function op(n){return new rp(n==null?void 0:n.forceOwnership)}function uy(){return new ip}/**
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
 */const ap={maxAttempts:5};/**
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
 */class up{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Rt(e)}set(e,t,s){this._verifyNotCommitted();const r=je(e,this._firestore),i=Br(r.converter,t,s),o=Fr(this._dataReader,"WriteBatch.set",r._key,i,r.converter!==null,s);return this._mutations.push(o.toMutation(r._key,B.none())),this}update(e,t,s,...r){this._verifyNotCommitted();const i=je(e,this._firestore);let o;return o=typeof(t=oe(t))=="string"||t instanceof _t?Qo(this._dataReader,"WriteBatch.update",i._key,t,s,r):jo(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,B.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=je(e,this._firestore);return this._mutations=this._mutations.concat(new un(t._key,B.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new p(m.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function je(n,e){if((n=oe(n)).firestore!==e)throw new p(m.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 *//**
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
 */class cp extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Rt(e)}get(e){const t=je(e,this._firestore),s=new Jg(this._firestore);return this._transaction.lookup([t._key]).then(r=>{if(!r||r.length!==1)return E();const i=r[0];if(i.isFoundDocument())return new Hn(this._firestore,s,i.key,i,t.converter);if(i.isNoDocument())return new Hn(this._firestore,s,t._key,null,t.converter);throw E()})}set(e,t,s){const r=je(e,this._firestore),i=Br(r.converter,t,s),o=Fr(this._dataReader,"Transaction.set",r._key,i,r.converter!==null,s);return this._transaction.set(r._key,o),this}update(e,t,s,...r){const i=je(e,this._firestore);let o;return o=typeof(t=oe(t))=="string"||t instanceof _t?Qo(this._dataReader,"Transaction.update",i._key,t,s,r):jo(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=je(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=je(e,this._firestore),s=new it(this._firestore);return super.get(e).then(r=>new en(this._firestore,s,t._key,r._document,new mt(!1,!1),t.converter))}}function cy(n,e,t){n=k(n,q);const s=Object.assign(Object.assign({},ap),t);return function(r){if(r.maxAttempts<1)throw new p(m.INVALID_ARGUMENT,"Max attempts must be at least 1")}(s),function(r,i,o){const a=new te;return r.asyncQueue.enqueueAndForget(async()=>{const u=await nh(r);new Ag(r.asyncQueue,u,o,i,a).run()}),a.promise}(ee(n),r=>e(new cp(n,r)),s)}/**
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
 */function ly(){return new gs("deleteField")}function hy(){return new Ko("serverTimestamp")}function dy(...n){return new Qg("arrayUnion",n)}function fy(...n){return new Wg("arrayRemove",n)}function my(n){return new Hg("increment",n)}/**
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
 */function gy(n){return ee(n=k(n,q)),new up(n,e=>ws(n,e))}/**
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
 */function py(n,e){var t;const s=ee(n=k(n,q));if(!s._uninitializedComponentsProvider||((t=s._uninitializedComponentsProvider)===null||t===void 0?void 0:t._offlineKind)==="memory")return Oe("Cannot enable indexes when persistence is disabled"),Promise.resolve();const r=function(i){const o=typeof i=="string"?function(u){try{return JSON.parse(u)}catch(c){throw new p(m.INVALID_ARGUMENT,"Failed to parse JSON: "+(c==null?void 0:c.message))}}(i):i,a=[];if(Array.isArray(o.indexes))for(const u of o.indexes){const c=mu(u,"collectionGroup"),l=[];if(Array.isArray(u.fields))for(const h of u.fields){const d=Or("setIndexConfiguration",mu(h,"fieldPath"));h.arrayConfig==="CONTAINS"?l.push(new _s(d,2)):h.order==="ASCENDING"?l.push(new _s(d,0)):h.order==="DESCENDING"&&l.push(new _s(d,1))}a.push(new Qs(Qs.UNKNOWN_ID,c,l,Vn.empty()))}return a}(e);return Pg(s,r)}function mu(n,e){if(typeof n[e]!="string")throw new p(m.INVALID_ARGUMENT,"Missing string value for: "+e);return n[e]}(function(n,e=!0){(function(t){rn=t})(Ah),Nh(new _h("firestore",(t,{instanceIdentifier:s,options:r})=>{const i=t.getProvider("app").getImmediate(),o=new q(new Vd(t.getProvider("auth-internal")),new Bd(t.getProvider("app-check-internal")),function(a,u){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new p(m.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new wt(a.options.projectId,u)}(i,s),i);return r=Object.assign({useFetchStreams:e},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),Jo(da,"3.10.0",n),Jo(da,"3.10.0","esm2017")})();export{Eh as AbstractUserDataWriter,Qn as AggregateField,zg as AggregateQuerySnapshot,Ct as Bytes,wp as CACHE_SIZE_UNLIMITED,Re as CollectionReference,X as DocumentReference,en as DocumentSnapshot,_t as FieldPath,kt as FieldValue,q as Firestore,p as FirestoreError,Go as GeoPoint,$g as LoadBundleTask,he as Query,mn as QueryCompositeFilterConstraint,ps as QueryConstraint,Vs as QueryDocumentSnapshot,Ur as QueryEndAtConstraint,ys as QueryFieldFilterConstraint,Vr as QueryLimitConstraint,Yo as QueryOrderByConstraint,tn as QuerySnapshot,qr as QueryStartAtConstraint,mt as SnapshotMetadata,$ as Timestamp,cp as Transaction,up as WriteBatch,wt as _DatabaseId,v as _DocumentKey,fp as _EmptyAppCheckTokenProvider,Od as _EmptyAuthCredentialsProvider,H as _FieldPath,fo as _TestingHooks,k as _cast,dp as _debugAssert,mp as _isBase64Available,Oe as _logWarn,Vg as _validateIsNotUsedTogether,ny as addDoc,Gp as aggregateFieldEqual,Kp as aggregateQuerySnapshotEqual,Lp as and,fy as arrayRemove,dy as arrayUnion,zp as average,Sp as clearIndexedDbPersistence,gp as collection,pp as collectionGroup,qg as connectFirestoreEmulator,Zg as count,ty as deleteDoc,ly as deleteField,Dp as disableNetwork,Ug as doc,_p as documentId,Tp as enableIndexedDbPersistence,Ep as enableMultiTabIndexedDbPersistence,xp as enableNetwork,Bp as endAt,Up as endBefore,ee as ensureFirestoreConfigured,ws as executeWrite,tp as getAggregateFromServer,iy as getCountFromServer,Qp as getDoc,Wp as getDocFromCache,Hp as getDocFromServer,Yp as getDocs,Xp as getDocsFromCache,Jp as getDocsFromServer,Ip as getFirestore,my as increment,vp as initializeFirestore,Op as limit,Pp as limitToLast,Ap as loadBundle,oy as memoryLocalCache,Np as namedQuery,sy as onSnapshot,ry as onSnapshotsInSync,Mp as or,Fp as orderBy,ay as persistentLocalCache,uy as persistentMultipleTabManager,op as persistentSingleTabManager,kp as query,oh as queryEqual,yp as refEqual,cy as runTransaction,hy as serverTimestamp,Zp as setDoc,py as setIndexConfiguration,hp as setLogLevel,jp as snapshotEqual,qp as startAfter,Vp as startAt,$p as sum,Cp as terminate,ey as updateDoc,bp as waitForPendingWrites,Rp as where,gy as writeBatch};
