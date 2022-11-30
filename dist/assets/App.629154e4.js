import{R as Ve,r as L,j as T,F as Pn,a as g}from"./index.a623e8f4.js";function ke(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ke(Object(n),!0).forEach(function(a){N(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ke(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Pt(t){return Pt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Pt(t)}function Cn(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function we(t,e){for(var n=0;n<e.length;n++){var a=e[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function In(t,e,n){return e&&we(t.prototype,e),n&&we(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function N(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function fe(t,e){return Mn(t)||Ln(t,e)||qe(t,e)||jn()}function pt(t){return Tn(t)||Rn(t)||qe(t)||Fn()}function Tn(t){if(Array.isArray(t))return Xt(t)}function Mn(t){if(Array.isArray(t))return t}function Rn(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Ln(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var a=[],r=!0,o=!1,i,s;try{for(n=n.call(t);!(r=(i=n.next()).done)&&(a.push(i.value),!(e&&a.length===e));r=!0);}catch(f){o=!0,s=f}finally{try{!r&&n.return!=null&&n.return()}finally{if(o)throw s}}return a}}function qe(t,e){if(!!t){if(typeof t=="string")return Xt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Xt(t,e)}}function Xt(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function Fn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function jn(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Ae=function(){},le={},Ke={},Qe=null,Je={mark:Ae,measure:Ae};try{typeof window<"u"&&(le=window),typeof document<"u"&&(Ke=document),typeof MutationObserver<"u"&&(Qe=MutationObserver),typeof performance<"u"&&(Je=performance)}catch{}var zn=le.navigator||{},_e=zn.userAgent,Oe=_e===void 0?"":_e,W=le,x=Ke,Ne=Qe,ht=Je;W.document;var D=!!x.documentElement&&!!x.head&&typeof x.addEventListener=="function"&&typeof x.createElement=="function",Ze=~Oe.indexOf("MSIE")||~Oe.indexOf("Trident/"),yt,xt,kt,wt,At,F="___FONT_AWESOME___",Ht=16,tn="fa",en="svg-inline--fa",J="data-fa-i2svg",Gt="data-fa-pseudo-element",Dn="data-fa-pseudo-element-pending",ce="data-prefix",ue="data-icon",Se="fontawesome-i2svg",Yn="async",$n=["HTML","HEAD","STYLE","SCRIPT"],nn=function(){try{return!0}catch{return!1}}(),y="classic",k="sharp",me=[y,k];function bt(t){return new Proxy(t,{get:function(n,a){return a in n?n[a]:n[y]}})}var ct=bt((yt={},N(yt,y,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),N(yt,k,{fa:"solid",fass:"solid","fa-solid":"solid"}),yt)),ut=bt((xt={},N(xt,y,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),N(xt,k,{solid:"fass"}),xt)),mt=bt((kt={},N(kt,y,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),N(kt,k,{fass:"fa-solid"}),kt)),Un=bt((wt={},N(wt,y,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),N(wt,k,{"fa-solid":"fass"}),wt)),Wn=/fa(s|r|l|t|d|b|k|ss)?[\-\ ]/,an="fa-layers-text",Bn=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Xn=bt((At={},N(At,y,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),N(At,k,{900:"fass"}),At)),rn=[1,2,3,4,5,6,7,8,9,10],Hn=rn.concat([11,12,13,14,15,16,17,18,19,20]),Gn=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],q={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},dt=new Set;Object.keys(ut[y]).map(dt.add.bind(dt));Object.keys(ut[k]).map(dt.add.bind(dt));var Vn=[].concat(me,pt(dt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",q.GROUP,q.SWAP_OPACITY,q.PRIMARY,q.SECONDARY]).concat(rn.map(function(t){return"".concat(t,"x")})).concat(Hn.map(function(t){return"w-".concat(t)})),ft=W.FontAwesomeConfig||{};function qn(t){var e=x.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Kn(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(x&&typeof x.querySelector=="function"){var Qn=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Qn.forEach(function(t){var e=fe(t,2),n=e[0],a=e[1],r=Kn(qn(n));r!=null&&(ft[a]=r)})}var on={styleDefault:"solid",familyDefault:"classic",cssPrefix:tn,replacementClass:en,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ft.familyPrefix&&(ft.cssPrefix=ft.familyPrefix);var it=u(u({},on),ft);it.autoReplaceSvg||(it.observeMutations=!1);var d={};Object.keys(on).forEach(function(t){Object.defineProperty(d,t,{enumerable:!0,set:function(n){it[t]=n,lt.forEach(function(a){return a(d)})},get:function(){return it[t]}})});Object.defineProperty(d,"familyPrefix",{enumerable:!0,set:function(e){it.cssPrefix=e,lt.forEach(function(n){return n(d)})},get:function(){return it.cssPrefix}});W.FontAwesomeConfig=d;var lt=[];function Jn(t){return lt.push(t),function(){lt.splice(lt.indexOf(t),1)}}var $=Ht,R={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Zn(t){if(!(!t||!D)){var e=x.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=x.head.childNodes,a=null,r=n.length-1;r>-1;r--){var o=n[r],i=(o.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(i)>-1&&(a=o)}return x.head.insertBefore(e,a),t}}var ta="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function vt(){for(var t=12,e="";t-- >0;)e+=ta[Math.random()*62|0];return e}function ot(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function de(t){return t.classList?ot(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function sn(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ea(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(sn(t[n]),'" ')},"").trim()}function Mt(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function ve(t){return t.size!==R.size||t.x!==R.x||t.y!==R.y||t.rotate!==R.rotate||t.flipX||t.flipY}function na(t){var e=t.transform,n=t.containerWidth,a=t.iconWidth,r={transform:"translate(".concat(n/2," 256)")},o="translate(".concat(e.x*32,", ").concat(e.y*32,") "),i="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(o," ").concat(i," ").concat(s)},c={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:c}}function aa(t){var e=t.transform,n=t.width,a=n===void 0?Ht:n,r=t.height,o=r===void 0?Ht:r,i=t.startCentered,s=i===void 0?!1:i,f="";return s&&Ze?f+="translate(".concat(e.x/$-a/2,"em, ").concat(e.y/$-o/2,"em) "):s?f+="translate(calc(-50% + ".concat(e.x/$,"em), calc(-50% + ").concat(e.y/$,"em)) "):f+="translate(".concat(e.x/$,"em, ").concat(e.y/$,"em) "),f+="scale(".concat(e.size/$*(e.flipX?-1:1),", ").concat(e.size/$*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var ra=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function fn(){var t=tn,e=en,n=d.cssPrefix,a=d.replacementClass,r=ra;if(n!==t||a!==e){var o=new RegExp("\\.".concat(t,"\\-"),"g"),i=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");r=r.replace(o,".".concat(n,"-")).replace(i,"--".concat(n,"-")).replace(s,".".concat(a))}return r}var Ee=!1;function zt(){d.autoAddCss&&!Ee&&(Zn(fn()),Ee=!0)}var ia={mixout:function(){return{dom:{css:fn,insertCss:zt}}},hooks:function(){return{beforeDOMElementCreation:function(){zt()},beforeI2svg:function(){zt()}}}},j=W||{};j[F]||(j[F]={});j[F].styles||(j[F].styles={});j[F].hooks||(j[F].hooks={});j[F].shims||(j[F].shims=[]);var M=j[F],ln=[],oa=function t(){x.removeEventListener("DOMContentLoaded",t),Ct=1,ln.map(function(e){return e()})},Ct=!1;D&&(Ct=(x.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(x.readyState),Ct||x.addEventListener("DOMContentLoaded",oa));function sa(t){!D||(Ct?setTimeout(t,0):ln.push(t))}function gt(t){var e=t.tag,n=t.attributes,a=n===void 0?{}:n,r=t.children,o=r===void 0?[]:r;return typeof t=="string"?sn(t):"<".concat(e," ").concat(ea(a),">").concat(o.map(gt).join(""),"</").concat(e,">")}function Pe(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var fa=function(e,n){return function(a,r,o,i){return e.call(n,a,r,o,i)}},Dt=function(e,n,a,r){var o=Object.keys(e),i=o.length,s=r!==void 0?fa(n,r):n,f,c,l;for(a===void 0?(f=1,l=e[o[0]]):(f=0,l=a);f<i;f++)c=o[f],l=s(l,e[c],c,e);return l};function la(t){for(var e=[],n=0,a=t.length;n<a;){var r=t.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var o=t.charCodeAt(n++);(o&64512)==56320?e.push(((r&1023)<<10)+(o&1023)+65536):(e.push(r),n--)}else e.push(r)}return e}function Vt(t){var e=la(t);return e.length===1?e[0].toString(16):null}function ca(t,e){var n=t.length,a=t.charCodeAt(e),r;return a>=55296&&a<=56319&&n>e+1&&(r=t.charCodeAt(e+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Ce(t){return Object.keys(t).reduce(function(e,n){var a=t[n],r=!!a.icon;return r?e[a.iconName]=a.icon:e[n]=a,e},{})}function qt(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,o=Ce(e);typeof M.hooks.addPack=="function"&&!r?M.hooks.addPack(t,Ce(e)):M.styles[t]=u(u({},M.styles[t]||{}),o),t==="fas"&&qt("fa",e)}var _t,Ot,Nt,et=M.styles,ua=M.shims,ma=(_t={},N(_t,y,Object.values(mt[y])),N(_t,k,Object.values(mt[k])),_t),pe=null,cn={},un={},mn={},dn={},vn={},da=(Ot={},N(Ot,y,Object.keys(ct[y])),N(Ot,k,Object.keys(ct[k])),Ot);function va(t){return~Vn.indexOf(t)}function pa(t,e){var n=e.split("-"),a=n[0],r=n.slice(1).join("-");return a===t&&r!==""&&!va(r)?r:null}var pn=function(){var e=function(o){return Dt(et,function(i,s,f){return i[f]=Dt(s,o,{}),i},{})};cn=e(function(r,o,i){if(o[3]&&(r[o[3]]=i),o[2]){var s=o[2].filter(function(f){return typeof f=="number"});s.forEach(function(f){r[f.toString(16)]=i})}return r}),un=e(function(r,o,i){if(r[i]=i,o[2]){var s=o[2].filter(function(f){return typeof f=="string"});s.forEach(function(f){r[f]=i})}return r}),vn=e(function(r,o,i){var s=o[2];return r[i]=i,s.forEach(function(f){r[f]=i}),r});var n="far"in et||d.autoFetchSvg,a=Dt(ua,function(r,o){var i=o[0],s=o[1],f=o[2];return s==="far"&&!n&&(s="fas"),typeof i=="string"&&(r.names[i]={prefix:s,iconName:f}),typeof i=="number"&&(r.unicodes[i.toString(16)]={prefix:s,iconName:f}),r},{names:{},unicodes:{}});mn=a.names,dn=a.unicodes,pe=Rt(d.styleDefault,{family:d.familyDefault})};Jn(function(t){pe=Rt(t.styleDefault,{family:d.familyDefault})});pn();function be(t,e){return(cn[t]||{})[e]}function ba(t,e){return(un[t]||{})[e]}function K(t,e){return(vn[t]||{})[e]}function bn(t){return mn[t]||{prefix:null,iconName:null}}function ga(t){var e=dn[t],n=be("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function B(){return pe}var ge=function(){return{prefix:null,iconName:null,rest:[]}};function Rt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,a=n===void 0?y:n,r=ct[a][t],o=ut[a][t]||ut[a][r],i=t in M.styles?t:null;return o||i||null}var Ie=(Nt={},N(Nt,y,Object.keys(mt[y])),N(Nt,k,Object.keys(mt[k])),Nt);function Lt(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,o=(e={},N(e,y,"".concat(d.cssPrefix,"-").concat(y)),N(e,k,"".concat(d.cssPrefix,"-").concat(k)),e),i=null,s=y;(t.includes(o[y])||t.some(function(c){return Ie[y].includes(c)}))&&(s=y),(t.includes(o[k])||t.some(function(c){return Ie[k].includes(c)}))&&(s=k);var f=t.reduce(function(c,l){var m=pa(d.cssPrefix,l);if(et[l]?(l=ma[s].includes(l)?Un[s][l]:l,i=l,c.prefix=l):da[s].indexOf(l)>-1?(i=l,c.prefix=Rt(l,{family:s})):m?c.iconName=m:l!==d.replacementClass&&l!==o[y]&&l!==o[k]&&c.rest.push(l),!r&&c.prefix&&c.iconName){var v=i==="fa"?bn(c.iconName):{},p=K(c.prefix,c.iconName);v.prefix&&(i=null),c.iconName=v.iconName||p||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!et.far&&et.fas&&!d.autoFetchSvg&&(c.prefix="fas")}return c},ge());return(t.includes("fa-brands")||t.includes("fab"))&&(f.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(f.prefix="fad"),!f.prefix&&s===k&&(et.fass||d.autoFetchSvg)&&(f.prefix="fass",f.iconName=K(f.prefix,f.iconName)||f.iconName),(f.prefix==="fa"||i==="fa")&&(f.prefix=B()||"fas"),f}var ha=function(){function t(){Cn(this,t),this.definitions={}}return In(t,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];var i=r.reduce(this._pullDefinitions,{});Object.keys(i).forEach(function(s){n.definitions[s]=u(u({},n.definitions[s]||{}),i[s]),qt(s,i[s]);var f=mt[y][s];f&&qt(f,i[s]),pn()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(o){var i=r[o],s=i.prefix,f=i.iconName,c=i.icon,l=c[2];n[s]||(n[s]={}),l.length>0&&l.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][f]=c}),n}}]),t}(),Te=[],nt={},rt={},ya=Object.keys(rt);function xa(t,e){var n=e.mixoutsTo;return Te=t,nt={},Object.keys(rt).forEach(function(a){ya.indexOf(a)===-1&&delete rt[a]}),Te.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(i){typeof r[i]=="function"&&(n[i]=r[i]),Pt(r[i])==="object"&&Object.keys(r[i]).forEach(function(s){n[i]||(n[i]={}),n[i][s]=r[i][s]})}),a.hooks){var o=a.hooks();Object.keys(o).forEach(function(i){nt[i]||(nt[i]=[]),nt[i].push(o[i])})}a.provides&&a.provides(rt)}),n}function Kt(t,e){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var o=nt[t]||[];return o.forEach(function(i){e=i.apply(null,[e].concat(a))}),e}function Z(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),a=1;a<e;a++)n[a-1]=arguments[a];var r=nt[t]||[];r.forEach(function(o){o.apply(null,n)})}function z(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return rt[t]?rt[t].apply(null,e):void 0}function Qt(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||B();if(!!e)return e=K(n,e)||e,Pe(gn.definitions,n,e)||Pe(M.styles,n,e)}var gn=new ha,ka=function(){d.autoReplaceSvg=!1,d.observeMutations=!1,Z("noAuto")},wa={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return D?(Z("beforeI2svg",e),z("pseudoElements2svg",e),z("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;d.autoReplaceSvg===!1&&(d.autoReplaceSvg=!0),d.observeMutations=!0,sa(function(){_a({autoReplaceSvgRoot:n}),Z("watch",e)})}},Aa={icon:function(e){if(e===null)return null;if(Pt(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:K(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],a=Rt(e[0]);return{prefix:a,iconName:K(a,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(d.cssPrefix,"-"))>-1||e.match(Wn))){var r=Lt(e.split(" "),{skipLookups:!0});return{prefix:r.prefix||B(),iconName:K(r.prefix,r.iconName)||r.iconName}}if(typeof e=="string"){var o=B();return{prefix:o,iconName:K(o,e)||e}}}},I={noAuto:ka,config:d,dom:wa,parse:Aa,library:gn,findIconDefinition:Qt,toHtml:gt},_a=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,a=n===void 0?x:n;(Object.keys(M.styles).length>0||d.autoFetchSvg)&&D&&d.autoReplaceSvg&&I.dom.i2svg({node:a})};function Ft(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(a){return gt(a)})}}),Object.defineProperty(t,"node",{get:function(){if(!!D){var a=x.createElement("div");return a.innerHTML=t.html,a.children}}}),t}function Oa(t){var e=t.children,n=t.main,a=t.mask,r=t.attributes,o=t.styles,i=t.transform;if(ve(i)&&n.found&&!a.found){var s=n.width,f=n.height,c={x:s/f/2,y:.5};r.style=Mt(u(u({},o),{},{"transform-origin":"".concat(c.x+i.x/16,"em ").concat(c.y+i.y/16,"em")}))}return[{tag:"svg",attributes:r,children:e}]}function Na(t){var e=t.prefix,n=t.iconName,a=t.children,r=t.attributes,o=t.symbol,i=o===!0?"".concat(e,"-").concat(d.cssPrefix,"-").concat(n):o;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:u(u({},r),{},{id:i}),children:a}]}]}function he(t){var e=t.icons,n=e.main,a=e.mask,r=t.prefix,o=t.iconName,i=t.transform,s=t.symbol,f=t.title,c=t.maskId,l=t.titleId,m=t.extra,v=t.watchable,p=v===void 0?!1:v,h=a.found?a:n,w=h.width,A=h.height,E=r==="fak",_=[d.replacementClass,o?"".concat(d.cssPrefix,"-").concat(o):""].filter(function(Y){return m.classes.indexOf(Y)===-1}).filter(function(Y){return Y!==""||!!Y}).concat(m.classes).join(" "),O={children:[],attributes:u(u({},m.attributes),{},{"data-prefix":r,"data-icon":o,class:_,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(A)})},C=E&&!~m.classes.indexOf("fa-fw")?{width:"".concat(w/A*16*.0625,"em")}:{};p&&(O.attributes[J]=""),f&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(l||vt())},children:[f]}),delete O.attributes.title);var S=u(u({},O),{},{prefix:r,iconName:o,main:n,mask:a,maskId:c,transform:i,symbol:s,styles:u(u({},C),m.styles)}),H=a.found&&n.found?z("generateAbstractMask",S)||{children:[],attributes:{}}:z("generateAbstractIcon",S)||{children:[],attributes:{}},G=H.children,jt=H.attributes;return S.children=G,S.attributes=jt,s?Na(S):Oa(S)}function Me(t){var e=t.content,n=t.width,a=t.height,r=t.transform,o=t.title,i=t.extra,s=t.watchable,f=s===void 0?!1:s,c=u(u(u({},i.attributes),o?{title:o}:{}),{},{class:i.classes.join(" ")});f&&(c[J]="");var l=u({},i.styles);ve(r)&&(l.transform=aa({transform:r,startCentered:!0,width:n,height:a}),l["-webkit-transform"]=l.transform);var m=Mt(l);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[e]}),o&&v.push({tag:"span",attributes:{class:"sr-only"},children:[o]}),v}function Sa(t){var e=t.content,n=t.title,a=t.extra,r=u(u(u({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),o=Mt(a.styles);o.length>0&&(r.style=o);var i=[];return i.push({tag:"span",attributes:r,children:[e]}),n&&i.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),i}var Yt=M.styles;function Jt(t){var e=t[0],n=t[1],a=t.slice(4),r=fe(a,1),o=r[0],i=null;return Array.isArray(o)?i={tag:"g",attributes:{class:"".concat(d.cssPrefix,"-").concat(q.GROUP)},children:[{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(q.SECONDARY),fill:"currentColor",d:o[0]}},{tag:"path",attributes:{class:"".concat(d.cssPrefix,"-").concat(q.PRIMARY),fill:"currentColor",d:o[1]}}]}:i={tag:"path",attributes:{fill:"currentColor",d:o}},{found:!0,width:e,height:n,icon:i}}var Ea={found:!1,width:512,height:512};function Pa(t,e){!nn&&!d.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Zt(t,e){var n=e;return e==="fa"&&d.styleDefault!==null&&(e=B()),new Promise(function(a,r){if(z("missingIconAbstract"),n==="fa"){var o=bn(t)||{};t=o.iconName||t,e=o.prefix||e}if(t&&e&&Yt[e]&&Yt[e][t]){var i=Yt[e][t];return a(Jt(i))}Pa(t,e),a(u(u({},Ea),{},{icon:d.showMissingIcons&&t?z("missingIconAbstract")||{}:{}}))})}var Re=function(){},te=d.measurePerformance&&ht&&ht.mark&&ht.measure?ht:{mark:Re,measure:Re},st='FA "6.2.1"',Ca=function(e){return te.mark("".concat(st," ").concat(e," begins")),function(){return hn(e)}},hn=function(e){te.mark("".concat(st," ").concat(e," ends")),te.measure("".concat(st," ").concat(e),"".concat(st," ").concat(e," begins"),"".concat(st," ").concat(e," ends"))},ye={begin:Ca,end:hn},St=function(){};function Le(t){var e=t.getAttribute?t.getAttribute(J):null;return typeof e=="string"}function Ia(t){var e=t.getAttribute?t.getAttribute(ce):null,n=t.getAttribute?t.getAttribute(ue):null;return e&&n}function Ta(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(d.replacementClass)}function Ma(){if(d.autoReplaceSvg===!0)return Et.replace;var t=Et[d.autoReplaceSvg];return t||Et.replace}function Ra(t){return x.createElementNS("http://www.w3.org/2000/svg",t)}function La(t){return x.createElement(t)}function yn(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,a=n===void 0?t.tag==="svg"?Ra:La:n;if(typeof t=="string")return x.createTextNode(t);var r=a(t.tag);Object.keys(t.attributes||[]).forEach(function(i){r.setAttribute(i,t.attributes[i])});var o=t.children||[];return o.forEach(function(i){r.appendChild(yn(i,{ceFn:a}))}),r}function Fa(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var Et={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(r){n.parentNode.insertBefore(yn(r),n)}),n.getAttribute(J)===null&&d.keepOriginalSource){var a=x.createComment(Fa(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(e){var n=e[0],a=e[1];if(~de(n).indexOf(d.replacementClass))return Et.replace(e);var r=new RegExp("".concat(d.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var o=a[0].attributes.class.split(" ").reduce(function(s,f){return f===d.replacementClass||f.match(r)?s.toSvg.push(f):s.toNode.push(f),s},{toNode:[],toSvg:[]});a[0].attributes.class=o.toSvg.join(" "),o.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",o.toNode.join(" "))}var i=a.map(function(s){return gt(s)}).join(`
`);n.setAttribute(J,""),n.innerHTML=i}};function Fe(t){t()}function xn(t,e){var n=typeof e=="function"?e:St;if(t.length===0)n();else{var a=Fe;d.mutateApproach===Yn&&(a=W.requestAnimationFrame||Fe),a(function(){var r=Ma(),o=ye.begin("mutate");t.map(r),o(),n()})}}var xe=!1;function kn(){xe=!0}function ee(){xe=!1}var It=null;function je(t){if(!!Ne&&!!d.observeMutations){var e=t.treeCallback,n=e===void 0?St:e,a=t.nodeCallback,r=a===void 0?St:a,o=t.pseudoElementsCallback,i=o===void 0?St:o,s=t.observeMutationsRoot,f=s===void 0?x:s;It=new Ne(function(c){if(!xe){var l=B();ot(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Le(m.addedNodes[0])&&(d.searchPseudoElements&&i(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&d.searchPseudoElements&&i(m.target.parentNode),m.type==="attributes"&&Le(m.target)&&~Gn.indexOf(m.attributeName))if(m.attributeName==="class"&&Ia(m.target)){var v=Lt(de(m.target)),p=v.prefix,h=v.iconName;m.target.setAttribute(ce,p||l),h&&m.target.setAttribute(ue,h)}else Ta(m.target)&&r(m.target)})}}),D&&It.observe(f,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function ja(){!It||It.disconnect()}function za(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(a,r){var o=r.split(":"),i=o[0],s=o.slice(1);return i&&s.length>0&&(a[i]=s.join(":").trim()),a},{})),n}function Da(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),a=t.innerText!==void 0?t.innerText.trim():"",r=Lt(de(t));return r.prefix||(r.prefix=B()),e&&n&&(r.prefix=e,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=ba(r.prefix,t.innerText)||be(r.prefix,Vt(t.innerText))),!r.iconName&&d.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=t.firstChild.data)),r}function Ya(t){var e=ot(t.attributes).reduce(function(r,o){return r.name!=="class"&&r.name!=="style"&&(r[o.name]=o.value),r},{}),n=t.getAttribute("title"),a=t.getAttribute("data-fa-title-id");return d.autoA11y&&(n?e["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(a||vt()):(e["aria-hidden"]="true",e.focusable="false")),e}function $a(){return{iconName:null,title:null,titleId:null,prefix:null,transform:R,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function ze(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Da(t),a=n.iconName,r=n.prefix,o=n.rest,i=Ya(t),s=Kt("parseNodeAttributes",{},t),f=e.styleParser?za(t):[];return u({iconName:a,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:r,transform:R,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:o,styles:f,attributes:i}},s)}var Ua=M.styles;function wn(t){var e=d.autoReplaceSvg==="nest"?ze(t,{styleParser:!1}):ze(t);return~e.extra.classes.indexOf(an)?z("generateLayersText",t,e):z("generateSvgReplacementMutation",t,e)}var X=new Set;me.map(function(t){X.add("fa-".concat(t))});Object.keys(ct[y]).map(X.add.bind(X));Object.keys(ct[k]).map(X.add.bind(X));X=pt(X);function De(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!D)return Promise.resolve();var n=x.documentElement.classList,a=function(m){return n.add("".concat(Se,"-").concat(m))},r=function(m){return n.remove("".concat(Se,"-").concat(m))},o=d.autoFetchSvg?X:me.map(function(l){return"fa-".concat(l)}).concat(Object.keys(Ua));o.includes("fa")||o.push("fa");var i=[".".concat(an,":not([").concat(J,"])")].concat(o.map(function(l){return".".concat(l,":not([").concat(J,"])")})).join(", ");if(i.length===0)return Promise.resolve();var s=[];try{s=ot(t.querySelectorAll(i))}catch{}if(s.length>0)a("pending"),r("complete");else return Promise.resolve();var f=ye.begin("onTree"),c=s.reduce(function(l,m){try{var v=wn(m);v&&l.push(v)}catch(p){nn||p.name==="MissingIcon"&&console.error(p)}return l},[]);return new Promise(function(l,m){Promise.all(c).then(function(v){xn(v,function(){a("active"),a("complete"),r("pending"),typeof e=="function"&&e(),f(),l()})}).catch(function(v){f(),m(v)})})}function Wa(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;wn(t).then(function(n){n&&xn([n],e)})}function Ba(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(e||{}).icon?e:Qt(e||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Qt(r||{})),t(a,u(u({},n),{},{mask:r}))}}var Xa=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?R:a,o=n.symbol,i=o===void 0?!1:o,s=n.mask,f=s===void 0?null:s,c=n.maskId,l=c===void 0?null:c,m=n.title,v=m===void 0?null:m,p=n.titleId,h=p===void 0?null:p,w=n.classes,A=w===void 0?[]:w,E=n.attributes,_=E===void 0?{}:E,O=n.styles,C=O===void 0?{}:O;if(!!e){var S=e.prefix,H=e.iconName,G=e.icon;return Ft(u({type:"icon"},e),function(){return Z("beforeDOMElementCreation",{iconDefinition:e,params:n}),d.autoA11y&&(v?_["aria-labelledby"]="".concat(d.replacementClass,"-title-").concat(h||vt()):(_["aria-hidden"]="true",_.focusable="false")),he({icons:{main:Jt(G),mask:f?Jt(f.icon):{found:!1,width:null,height:null,icon:{}}},prefix:S,iconName:H,transform:u(u({},R),r),symbol:i,title:v,maskId:l,titleId:h,extra:{attributes:_,styles:C,classes:A}})})}},Ha={mixout:function(){return{icon:Ba(Xa)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=De,n.nodeCallback=Wa,n}}},provides:function(e){e.i2svg=function(n){var a=n.node,r=a===void 0?x:a,o=n.callback,i=o===void 0?function(){}:o;return De(r,i)},e.generateSvgReplacementMutation=function(n,a){var r=a.iconName,o=a.title,i=a.titleId,s=a.prefix,f=a.transform,c=a.symbol,l=a.mask,m=a.maskId,v=a.extra;return new Promise(function(p,h){Promise.all([Zt(r,s),l.iconName?Zt(l.iconName,l.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(w){var A=fe(w,2),E=A[0],_=A[1];p([n,he({icons:{main:E,mask:_},prefix:s,iconName:r,transform:f,symbol:c,maskId:m,title:o,titleId:i,extra:v,watchable:!0})])}).catch(h)})},e.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.transform,s=n.styles,f=Mt(s);f.length>0&&(r.style=f);var c;return ve(i)&&(c=z("generateAbstractTransformGrouping",{main:o,transform:i,containerWidth:o.width,iconWidth:o.width})),a.push(c||o.icon),{children:a,attributes:r}}}},Ga={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,o=r===void 0?[]:r;return Ft({type:"layer"},function(){Z("beforeDOMElementCreation",{assembler:n,params:a});var i=[];return n(function(s){Array.isArray(s)?s.map(function(f){i=i.concat(f.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(d.cssPrefix,"-layers")].concat(pt(o)).join(" ")},children:i}]})}}}},Va={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,o=r===void 0?null:r,i=a.classes,s=i===void 0?[]:i,f=a.attributes,c=f===void 0?{}:f,l=a.styles,m=l===void 0?{}:l;return Ft({type:"counter",content:n},function(){return Z("beforeDOMElementCreation",{content:n,params:a}),Sa({content:n.toString(),title:o,extra:{attributes:c,styles:m,classes:["".concat(d.cssPrefix,"-layers-counter")].concat(pt(s))}})})}}}},qa={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,o=r===void 0?R:r,i=a.title,s=i===void 0?null:i,f=a.classes,c=f===void 0?[]:f,l=a.attributes,m=l===void 0?{}:l,v=a.styles,p=v===void 0?{}:v;return Ft({type:"text",content:n},function(){return Z("beforeDOMElementCreation",{content:n,params:a}),Me({content:n,transform:u(u({},R),o),title:s,extra:{attributes:m,styles:p,classes:["".concat(d.cssPrefix,"-layers-text")].concat(pt(c))}})})}}},provides:function(e){e.generateLayersText=function(n,a){var r=a.title,o=a.transform,i=a.extra,s=null,f=null;if(Ze){var c=parseInt(getComputedStyle(n).fontSize,10),l=n.getBoundingClientRect();s=l.width/c,f=l.height/c}return d.autoA11y&&!r&&(i.attributes["aria-hidden"]="true"),Promise.resolve([n,Me({content:n.innerHTML,width:s,height:f,transform:o,title:r,extra:i,watchable:!0})])}}},Ka=new RegExp('"',"ug"),Ye=[1105920,1112319];function Qa(t){var e=t.replace(Ka,""),n=ca(e,0),a=n>=Ye[0]&&n<=Ye[1],r=e.length===2?e[0]===e[1]:!1;return{value:Vt(r?e[0]:e),isSecondary:a||r}}function $e(t,e){var n="".concat(Dn).concat(e.replace(":","-"));return new Promise(function(a,r){if(t.getAttribute(n)!==null)return a();var o=ot(t.children),i=o.filter(function(G){return G.getAttribute(Gt)===e})[0],s=W.getComputedStyle(t,e),f=s.getPropertyValue("font-family").match(Bn),c=s.getPropertyValue("font-weight"),l=s.getPropertyValue("content");if(i&&!f)return t.removeChild(i),a();if(f&&l!=="none"&&l!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(f[2])?k:y,p=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(f[2])?ut[v][f[2].toLowerCase()]:Xn[v][c],h=Qa(m),w=h.value,A=h.isSecondary,E=f[0].startsWith("FontAwesome"),_=be(p,w),O=_;if(E){var C=ga(w);C.iconName&&C.prefix&&(_=C.iconName,p=C.prefix)}if(_&&!A&&(!i||i.getAttribute(ce)!==p||i.getAttribute(ue)!==O)){t.setAttribute(n,O),i&&t.removeChild(i);var S=$a(),H=S.extra;H.attributes[Gt]=e,Zt(_,p).then(function(G){var jt=he(u(u({},S),{},{icons:{main:G,mask:ge()},prefix:p,iconName:O,extra:H,watchable:!0})),Y=x.createElement("svg");e==="::before"?t.insertBefore(Y,t.firstChild):t.appendChild(Y),Y.outerHTML=jt.map(function(En){return gt(En)}).join(`
`),t.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Ja(t){return Promise.all([$e(t,"::before"),$e(t,"::after")])}function Za(t){return t.parentNode!==document.head&&!~$n.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Gt)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function Ue(t){if(!!D)return new Promise(function(e,n){var a=ot(t.querySelectorAll("*")).filter(Za).map(Ja),r=ye.begin("searchPseudoElements");kn(),Promise.all(a).then(function(){r(),ee(),e()}).catch(function(){r(),ee(),n()})})}var tr={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ue,n}}},provides:function(e){e.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?x:a;d.searchPseudoElements&&Ue(r)}}},We=!1,er={mixout:function(){return{dom:{unwatch:function(){kn(),We=!0}}}},hooks:function(){return{bootstrap:function(){je(Kt("mutationObserverCallbacks",{}))},noAuto:function(){ja()},watch:function(n){var a=n.observeMutationsRoot;We?ee():je(Kt("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Be=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(a,r){var o=r.toLowerCase().split("-"),i=o[0],s=o.slice(1).join("-");if(i&&s==="h")return a.flipX=!0,a;if(i&&s==="v")return a.flipY=!0,a;if(s=parseFloat(s),isNaN(s))return a;switch(i){case"grow":a.size=a.size+s;break;case"shrink":a.size=a.size-s;break;case"left":a.x=a.x-s;break;case"right":a.x=a.x+s;break;case"up":a.y=a.y-s;break;case"down":a.y=a.y+s;break;case"rotate":a.rotate=a.rotate+s;break}return a},n)},nr={mixout:function(){return{parse:{transform:function(n){return Be(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Be(r)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,o=n.containerWidth,i=n.iconWidth,s={transform:"translate(".concat(o/2," 256)")},f="translate(".concat(r.x*32,", ").concat(r.y*32,") "),c="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),l="rotate(".concat(r.rotate," 0 0)"),m={transform:"".concat(f," ").concat(c," ").concat(l)},v={transform:"translate(".concat(i/2*-1," -256)")},p={outer:s,inner:m,path:v};return{tag:"g",attributes:u({},p.outer),children:[{tag:"g",attributes:u({},p.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:u(u({},a.icon.attributes),p.path)}]}]}}}},$t={x:0,y:0,width:"100%",height:"100%"};function Xe(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function ar(t){return t.tag==="g"?t.children:[t]}var rr={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),o=r?Lt(r.split(" ").map(function(i){return i.trim()})):ge();return o.prefix||(o.prefix=B()),n.mask=o,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var a=n.children,r=n.attributes,o=n.main,i=n.mask,s=n.maskId,f=n.transform,c=o.width,l=o.icon,m=i.width,v=i.icon,p=na({transform:f,containerWidth:m,iconWidth:c}),h={tag:"rect",attributes:u(u({},$t),{},{fill:"white"})},w=l.children?{children:l.children.map(Xe)}:{},A={tag:"g",attributes:u({},p.inner),children:[Xe(u({tag:l.tag,attributes:u(u({},l.attributes),p.path)},w))]},E={tag:"g",attributes:u({},p.outer),children:[A]},_="mask-".concat(s||vt()),O="clip-".concat(s||vt()),C={tag:"mask",attributes:u(u({},$t),{},{id:_,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[h,E]},S={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:ar(v)},C]};return a.push(S,{tag:"rect",attributes:u({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(_,")")},$t)}),{children:a,attributes:r}}}},ir={provides:function(e){var n=!1;W.matchMedia&&(n=W.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},o={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:u(u({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var i=u(u({},o),{},{attributeName:"opacity"}),s={tag:"circle",attributes:u(u({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:u(u({},o),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:u(u({},i),{},{values:"1;0;1;1;0;1;"})}),a.push(s),a.push({tag:"path",attributes:u(u({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:u(u({},i),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:u(u({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:u(u({},i),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},or={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),o=r===null?!1:r===""?!0:r;return n.symbol=o,n}}}},sr=[ia,Ha,Ga,Va,qa,tr,er,nr,rr,ir,or];xa(sr,{mixoutsTo:I});I.noAuto;I.config;I.library;I.dom;var ne=I.parse;I.findIconDefinition;I.toHtml;var fr=I.icon;I.layer;I.text;I.counter;var b={exports:{}},lr="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",cr=lr,ur=cr;function An(){}function _n(){}_n.resetWarningCache=An;var mr=function(){function t(a,r,o,i,s,f){if(f!==ur){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:_n,resetWarningCache:An};return n.PropTypes=n,n};b.exports=mr();function He(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,a)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?He(Object(n),!0).forEach(function(a){at(t,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):He(Object(n)).forEach(function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(n,a))})}return t}function Tt(t){return Tt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Tt(t)}function at(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function dr(t,e){if(t==null)return{};var n={},a=Object.keys(t),r,o;for(o=0;o<a.length;o++)r=a[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function vr(t,e){if(t==null)return{};var n=dr(t,e),a,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)a=o[r],!(e.indexOf(a)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,a)||(n[a]=t[a]))}return n}function ae(t){return pr(t)||br(t)||gr(t)||hr()}function pr(t){if(Array.isArray(t))return re(t)}function br(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function gr(t,e){if(!!t){if(typeof t=="string")return re(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return re(t,e)}}function re(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function hr(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function yr(t){var e,n=t.beat,a=t.fade,r=t.beatFade,o=t.bounce,i=t.shake,s=t.flash,f=t.spin,c=t.spinPulse,l=t.spinReverse,m=t.pulse,v=t.fixedWidth,p=t.inverse,h=t.border,w=t.listItem,A=t.flip,E=t.size,_=t.rotation,O=t.pull,C=(e={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":o,"fa-shake":i,"fa-flash":s,"fa-spin":f,"fa-spin-reverse":l,"fa-spin-pulse":c,"fa-pulse":m,"fa-fw":v,"fa-inverse":p,"fa-border":h,"fa-li":w,"fa-flip":A===!0,"fa-flip-horizontal":A==="horizontal"||A==="both","fa-flip-vertical":A==="vertical"||A==="both"},at(e,"fa-".concat(E),typeof E<"u"&&E!==null),at(e,"fa-rotate-".concat(_),typeof _<"u"&&_!==null&&_!==0),at(e,"fa-pull-".concat(O),typeof O<"u"&&O!==null),at(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(C).map(function(S){return C[S]?S:null}).filter(function(S){return S})}function xr(t){return t=t-0,t===t}function On(t){return xr(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var kr=["style"];function wr(t){return t.charAt(0).toUpperCase()+t.slice(1)}function Ar(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var a=n.indexOf(":"),r=On(n.slice(0,a)),o=n.slice(a+1).trim();return r.startsWith("webkit")?e[wr(r)]=o:e[r]=o,e},{})}function Nn(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var a=(e.children||[]).map(function(f){return Nn(t,f)}),r=Object.keys(e.attributes||{}).reduce(function(f,c){var l=e.attributes[c];switch(c){case"class":f.attrs.className=l,delete e.attributes.class;break;case"style":f.attrs.style=Ar(l);break;default:c.indexOf("aria-")===0||c.indexOf("data-")===0?f.attrs[c.toLowerCase()]=l:f.attrs[On(c)]=l}return f},{attrs:{}}),o=n.style,i=o===void 0?{}:o,s=vr(n,kr);return r.attrs.style=U(U({},r.attrs.style),i),t.apply(void 0,[e.tag,U(U({},r.attrs),s)].concat(ae(a)))}var Sn=!1;try{Sn=!0}catch{}function _r(){if(!Sn&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Ge(t){if(t&&Tt(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(ne.icon)return ne.icon(t);if(t===null)return null;if(t&&Tt(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function Ut(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?at({},t,e):{}}var Q=Ve.forwardRef(function(t,e){var n=t.icon,a=t.mask,r=t.symbol,o=t.className,i=t.title,s=t.titleId,f=t.maskId,c=Ge(n),l=Ut("classes",[].concat(ae(yr(t)),ae(o.split(" ")))),m=Ut("transform",typeof t.transform=="string"?ne.transform(t.transform):t.transform),v=Ut("mask",Ge(a)),p=fr(c,U(U(U(U({},l),m),v),{},{symbol:r,title:i,titleId:s,maskId:f}));if(!p)return _r("Could not find icon",c),null;var h=p.abstract,w={ref:e};return Object.keys(t).forEach(function(A){Q.defaultProps.hasOwnProperty(A)||(w[A]=t[A])}),Or(h[0],w)});Q.displayName="FontAwesomeIcon";Q.propTypes={beat:b.exports.bool,border:b.exports.bool,beatFade:b.exports.bool,bounce:b.exports.bool,className:b.exports.string,fade:b.exports.bool,flash:b.exports.bool,mask:b.exports.oneOfType([b.exports.object,b.exports.array,b.exports.string]),maskId:b.exports.string,fixedWidth:b.exports.bool,inverse:b.exports.bool,flip:b.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:b.exports.oneOfType([b.exports.object,b.exports.array,b.exports.string]),listItem:b.exports.bool,pull:b.exports.oneOf(["right","left"]),pulse:b.exports.bool,rotation:b.exports.oneOf([0,90,180,270]),shake:b.exports.bool,size:b.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:b.exports.bool,spinPulse:b.exports.bool,spinReverse:b.exports.bool,symbol:b.exports.oneOfType([b.exports.bool,b.exports.string]),title:b.exports.string,titleId:b.exports.string,transform:b.exports.oneOfType([b.exports.string,b.exports.object]),swapOpacity:b.exports.bool};Q.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var Or=Nn.bind(null,Ve.createElement),Nr={prefix:"fab",iconName:"square-facebook",icon:[448,512,["facebook-square"],"f082","M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"]},Sr={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Er={prefix:"fab",iconName:"pinterest",icon:[496,512,[],"f0d2","M496 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3.8-3.4 5-20.3 6.9-28.1.6-2.5.3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2c-5 21.4-3 51.6-.9 71.2C65.4 450.9 0 361.1 0 256 0 119 111 8 248 8s248 111 248 248z"]};function Pr(t,e,n){if(!(t instanceof Function))throw new Error("invalid args provided");L.exports.useEffect(()=>{const a=window.setInterval(t,n!=null?n:1e3,...e);return()=>clearInterval(a)},[t,n,...e])}const Cr="data.json",V=180;let P=0,ie=0,oe=0,se=0,Wt,Bt,tt;function Rr(){const[t,e]=L.exports.useState(P),[n,a]=L.exports.useState(ie),[r,o]=L.exports.useState(oe),[i,s]=L.exports.useState(se),[f,c]=L.exports.useState(0),[l,m]=L.exports.useState(0),[v,p]=L.exports.useState(0),[h,w]=L.exports.useState(0);return Pr(Ir,[i,s,h,w,r,o,v,p,n,a,l,m,t,e,f,c],1e3),useEffect(async()=>{await Tr("date")},[]),T(Pn,{children:[g("div",{className:"stars"}),T("div",{className:"countdown-container",children:[g("div",{className:"header",children:"WE'RE LAUNCHING SOON"}),T("div",{className:"countdown-container__inner",children:[T("div",{className:"days",children:[T("div",{className:"card_day",children:[g("div",{className:"card_day_sup_inf",children:g("span",{children:t-1<0?0:t<10?"0"+(t-1):t-1})}),g("div",{className:"card_day_sup",children:g("span",{children:t<10?"0"+t:t})}),g("div",{className:"card_day_inf",children:g("span",{children:t<10?"0"+t:t})})]}),g("div",{className:"card_text",children:"DAYS"})]}),T("div",{className:"hours",children:[T("div",{className:"card_hour",children:[g("div",{className:"card_hour_sup_inf",children:g("span",{children:n-1<0?23:n<10?"0"+(n-1):n-1})}),g("div",{className:"card_hour_sup",children:g("span",{children:n<10?"0"+n:n})}),g("div",{className:"card_hour_inf",children:g("span",{children:n<10?"0"+n:n})})]}),g("div",{className:"card_text",children:"HOURS"})]}),T("div",{className:"minutes",children:[T("div",{className:"card_minute",children:[g("div",{className:"card_minute_sup_inf",children:g("span",{children:r-1<0?59:r<10?"0"+(r-1):r-1})}),g("div",{className:"card_minute_sup",children:g("span",{children:r<10?"0"+r:r})}),g("div",{className:"card_minute_inf",children:g("span",{children:r<10?"0"+r:r})})]}),g("div",{className:"card_text",children:"MINUTES"})]}),T("div",{className:"seconds",children:[T("div",{className:"card_second",children:[g("div",{className:"card_second_sup_inf",children:g("span",{children:i-1<0?59:i<10?"0"+(i-1):i-1})}),g("div",{className:"card_second_sup",children:g("span",{children:i<10?"0"+i:i})}),g("div",{className:"card_second_inf",children:g("span",{children:i<10?"0"+i:i})})]}),g("div",{className:"card_text",children:"SECONDS"})]})]})]}),g("div",{className:"hills",children:T("div",{className:"footer",children:[g("a",{href:"https://facebook.com",children:g(Q,{icon:Nr})}),g("a",{href:"https://pinterest.com",children:g(Q,{icon:Er})}),g("a",{href:"https://instagram.com",children:g(Q,{icon:Sr})})]})})]})}const Ir=(t,e,n,a,r,o,i,s,f,c,l,m,v,p,h,w)=>{v===0&&f===0&&r===0&&t===0||(t===0?(e(59),a(n+V),document.getElementsByClassName("card_second_sup")[0].style.setProperty("--deg",n),n%180===0&&n%360!==0?document.getElementsByClassName("card_second_sup")[0].children[0].style.transform="rotateX(180deg)":document.getElementsByClassName("card_second_sup")[0].children[0].style.transform="rotateX(0deg)",r===0?(o(59),s(i+V),document.getElementsByClassName("card_minute_sup")[0].style.setProperty("--deg",i),i%180===0&&i%360!==0?document.getElementsByClassName("card_minute_sup")[0].children[0].style.transform="rotateX(180deg)":document.getElementsByClassName("card_minute_sup")[0].children[0].style.transform="rotateX(0deg)",f===0?(c(23),m(l+V),document.getElementsByClassName("card_hour_sup")[0].style.setProperty("--deg",l),l%180===0&&l%360!==0?document.getElementsByClassName("card_hour_sup")[0].children[0].style.transform="rotateX(180deg)":document.getElementsByClassName("card_hour_sup")[0].children[0].style.transform="rotateX(0deg)",v!==0&&(p(v-1),w(h+V),document.getElementsByClassName("card_day_sup")[0].style.setProperty("--deg",h),h%180===0&&h%360!==0?document.getElementsByClassName("card_day_sup")[0].children[0].style.transform="rotateX(180deg)":document.getElementsByClassName("card_day_sup")[0].children[0].style.transform="rotateX(0deg)")):(c(f-1),m(l+V),document.getElementsByClassName("card_hour_sup")[0].style.setProperty("--deg",l),l%180===0&&l%360!==0?document.getElementsByClassName("card_hour_sup")[0].children[0].style.transform="rotateX(180deg)":document.getElementsByClassName("card_hour_sup")[0].children[0].style.transform="rotateX(0deg)")):(o(r-1),s(i+V),document.getElementsByClassName("card_minute_sup")[0].style.setProperty("--deg",i),i%180===0&&i%360!==0?document.getElementsByClassName("card_minute_sup")[0].children[0].style.transform="rotateX(180deg)":document.getElementsByClassName("card_minute_sup")[0].children[0].style.transform="rotateX(0deg)")):(e(t-1),a(n+V),document.getElementsByClassName("card_second_sup")[0].style.setProperty("--deg",n),n%180===0&&n%360!==0?document.getElementsByClassName("card_second_sup")[0].children[0].style.transform="rotateX(180deg)":document.getElementsByClassName("card_second_sup")[0].children[0].style.transform="rotateX(0deg)"))};async function Tr(t){await fetch(`/${Cr}`).then(e=>e.json()).then(e=>{if(t==="properties"&&(P=e[t].days,ie=e[t].hours,oe=e[t].minutes,se=e[t].seconds),t==="date"&&(Wt=e[t].day,Bt=e[t].month,tt=e[t].year),Wt&&Bt&&tt){let n=new Date(tt,Bt-1,Wt),a=new Date,r=new Date(n-a);if(r.getFullYear()<1970)return;let o=r.getFullYear()-1970;switch(r.getMonth()+1){case 12:P+=30;case 11:P+=31;case 10:P+=30;case 9:P+=31;case 8:P+=31;case 7:P+=30;case 6:P+=31;case 5:P+=30;case 4:P+=31;case 3:P+=tt%400==0||tt%4==0&&tt%100!=0?29:28;case 2:P+=31;case 1:P+=365*o+r.getDate()}ie=r.getHours(),oe=r.getMinutes(),se=r.getSeconds()}})}export{Rr as default};
