(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{2167:function(e,t,r){"use strict";var n=r(3848);t.default=void 0;var o,i=(o=r(7294))&&o.__esModule?o:{default:o},a=r(1063),s=r(4651),c=r(7426);var l={};function u(e,t,r,n){if(e&&a.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,o=s.useRouter(),f=i.default.useMemo((function(){var t=a.resolveHref(o,e.href,!0),r=n(t,2),i=r[0],s=r[1];return{href:i,as:e.as?a.resolveHref(o,e.as):s||i}}),[o,e.href,e.as]),d=f.href,m=f.as,h=e.children,p=e.replace,g=e.shallow,v=e.scroll,b=e.locale;"string"===typeof h&&(h=i.default.createElement("a",null,h));var x=(t=i.default.Children.only(h))&&"object"===typeof t&&t.ref,w=c.useIntersection({rootMargin:"200px"}),y=n(w,2),_=y[0],j=y[1],k=i.default.useCallback((function(e){_(e),x&&("function"===typeof x?x(e):"object"===typeof x&&(x.current=e))}),[x,_]);i.default.useEffect((function(){var e=j&&r&&a.isLocalURL(d),t="undefined"!==typeof b?b:o&&o.locale,n=l[d+"%"+m+(t?"%"+t:"")];e&&!n&&u(o,d,m,{locale:t})}),[m,d,j,b,r,o]);var S={ref:k,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,i,s,c){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(r))&&(e.preventDefault(),null==s&&n.indexOf("#")>=0&&(s=!1),t[o?"replace":"push"](r,n,{shallow:i,locale:c,scroll:s}))}(e,o,d,m,p,g,v,b)},onMouseEnter:function(e){a.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,d,m,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof b?b:o&&o.locale,O=o&&o.isLocaleDomain&&a.getDomainLocale(m,N,o&&o.locales,o&&o.domainLocales);S.href=O||a.addBasePath(a.addLocale(m,N,o&&o.defaultLocale))}return i.default.cloneElement(t,S)};t.default=f},7426:function(e,t,r){"use strict";var n=r(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!a,c=o.useRef(),l=o.useState(!1),u=n(l,2),f=u[0],d=u[1],m=o.useCallback((function(e){c.current&&(c.current(),c.current=void 0),r||f||e&&e.tagName&&(c.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=s.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return s.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,i=n.observer,a=n.elements;return a.set(e,t),i.observe(e),function(){a.delete(e),i.unobserve(e),0===a.size&&(i.disconnect(),s.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return o.useEffect((function(){if(!a&&!f){var e=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[f]),[m,f]};var o=r(7294),i=r(3447),a="undefined"!==typeof IntersectionObserver;var s=new Map},8090:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],a=!0,s=!1;try{for(r=r.call(e);!(a=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);a=!0);}catch(c){s=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(s)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.r(t),r.d(t,{default:function(){return le}});var i=r(9163),a=r(9008),s=r(1163),c=r(914),l=r(1664),u=r(7719),f=r(7603),d=r(261),m=i.ZP.p.withConfig({displayName:"components__Field",componentId:"sc-hs4a65-0"})(["color:rgba(255,255,255,1);font-family:Pangolin;font-weight:Regular;font-size:20px;opacity:1;"]),h=i.ZP.p.withConfig({displayName:"components__Value",componentId:"sc-hs4a65-1"})(["color:rgba(166,250,255,1);font-family:Pangolin;font-weight:Regular;font-size:26px;opacity:1;"]),p=i.ZP.fieldset.withConfig({displayName:"components__FieldSet",componentId:"sc-hs4a65-2"})(["font-size:1em;padding:0.5em;border-radius:1em;border-width:0;"]),g=i.ZP.input.withConfig({displayName:"components__Input",componentId:"sc-hs4a65-3"})(["font-size:inherit;padding:0.3em 0.4em;margin:0.1em 0.2em;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;border:1px solid #f90;background-color:#fff;"]),v=i.ZP.select.withConfig({displayName:"components__Select",componentId:"sc-hs4a65-4"})(["color:rgba(51,51,51,1);background:rgba(255,255,255,1);border-radius:2px;border-width:0px;outline:none;transition:0.15s;text-align:center;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;&:active{background-color:#f1ac15;}"]),b=i.ZP.input.attrs({type:"submit"}).withConfig({displayName:"components__Submit",componentId:"sc-hs4a65-5"})(["color:rgba(51,51,51,1);background:rgba(255,255,255,1);border-radius:2px;border-width:0px;outline:none;transition:0.15s;text-align:center;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;&:active{background-color:#f1ac15;}"]),x=i.ZP.button.withConfig({displayName:"components__Button",componentId:"sc-hs4a65-6"})(["color:rgba(51,51,51,1);background:rgba(255,255,255,1);border-radius:2px;border-width:0px;outline:none;transition:0.15s;text-align:center;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;&:active{background-color:#f1ac15;}"]),w=(0,i.ZP)(g).withConfig({displayName:"components__LongInput",componentId:"sc-hs4a65-7"})(["width:35%;"]),y=r(5893),_=i.ZP.nav.withConfig({displayName:"NavBar__Nav",componentId:"sc-qwkt9c-0"})(["max-width:56em;margin:0 auto;padding:0.4em;"]),j=i.ZP.ul.withConfig({displayName:"NavBar__Ul",componentId:"sc-qwkt9c-1"})(["display:flex;padding:0;"]),k=i.ZP.li.withConfig({displayName:"NavBar__Li",componentId:"sc-qwkt9c-2"})(["display:block;padding:0.4em;"]),S=i.ZP.a.withConfig({displayName:"NavBar__A",componentId:"sc-qwkt9c-3"})(["&:hover{color:blue;}"]),N=function(){var e=(0,c.Ge)(),t=e.activate,r=e.error,n=o((0,u.ZP)(),2),i=n[0].state,a=(n[1],i===u.ZM.Ready);return r&&console.log(r),(0,y.jsxs)(_,{children:[(0,y.jsx)(j,{children:(0,y.jsx)(k,{children:(0,y.jsx)(l.default,{href:"/",passHref:!0,children:(0,y.jsx)(S,{children:"MemeNumbers"})})})}),(0,y.jsxs)(x,{disabled:a,onClick:function(){t(d.L)},children:[(0,y.jsx)("div",{style:{position:"absolute",top:"0",left:"0",height:"100%",display:"flex",alignItems:"center",color:"black",margin:"0 0 0 1rem"},children:i===u.ZM.ActivatingConnector&&(0,y.jsx)(f.$,{color:"black",style:{height:"25%",marginLeft:"-1rem"}})}),a?"Connected":"Connect Wallet"]},"connect")]})},O=r(4476),P=r.n(O),E=function(e){var t=e.children;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(N,{}),t,(0,y.jsxs)("footer",{className:P().footer,children:[(0,y.jsx)("a",{href:"https://www.discord.com",target:"_blank",rel:"noopener noreferrer",children:"Discord"}),(0,y.jsx)("a",{href:"https://www.github.com/NonFungibleSequences",target:"_blank",rel:"noopener noreferrer",children:"Github"})]})]})},C=r(266),F=r(809),I=r.n(F),A=r(7294),Z=r(2593),M=function(e){var t=e.contract,r=(0,A.useState)(""),n=r[0],o=r[1],i=(0,A.useState)(""),a=i[0],s=i[1],c=function(){var e=(0,C.Z)(I().mark((function e(r){var o;return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,e.next=4,t.ownerOf(Z.O$.from(n));case 4:o=e.sent,s("".concat(n," is owned by: ").concat(o)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),s("".concat(n," is available"));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}();return(0,y.jsxs)("div",{children:[(0,y.jsxs)("form",{onSubmit:c,children:[(0,y.jsx)(m,{children:"Availability:"}),(0,y.jsx)(w,{type:"text",value:n,onChange:function(e){return o(e.target.value)}}),(0,y.jsx)(b,{value:"Check"})]}),(0,y.jsx)("p",{children:a})]})},z=r(381),U=r.n(z),$=r(3286),R=r(711),L=r(8794);const D=new R.Yd(L.i),H={},T=Z.O$.from(0),B=Z.O$.from(-1);function Y(e,t,r,n){const o={fault:t,operation:r};return void 0!==n&&(o.value=n),D.throwError(e,R.Yd.errors.NUMERIC_FAULT,o)}let q="0";for(;q.length<256;)q+=q;function V(e){if("number"!==typeof e)try{e=Z.O$.from(e).toNumber()}catch(t){}return"number"===typeof e&&e>=0&&e<=256&&!(e%1)?"1"+q.substring(0,e):D.throwArgumentError("invalid decimal size","decimals",e)}function G(e,t){null==t&&(t=0);const r=V(t),n=(e=Z.O$.from(e)).lt(T);n&&(e=e.mul(B));let o=e.mod(r).toString();for(;o.length<r.length-1;)o="0"+o;o=o.match(/^([0-9]*[1-9]|0)(0*)/)[1];const i=e.div(r).toString();return e=1===r.length?i:i+"."+o,n&&(e="-"+e),e}function K(e,t){null==t&&(t=0);const r=V(t);"string"===typeof e&&e.match(/^-?[0-9.,]+$/)||D.throwArgumentError("invalid decimal value","value",e);const n="-"===e.substring(0,1);n&&(e=e.substring(1)),"."===e&&D.throwArgumentError("missing value","value",e);const o=e.split(".");o.length>2&&D.throwArgumentError("too many decimal points","value",e);let i=o[0],a=o[1];for(i||(i="0"),a||(a="0");"0"===a[a.length-1];)a=a.substring(0,a.length-1);for(a.length>r.length-1&&Y("fractional component exceeds decimals","underflow","parseFixed"),""===a&&(a="0");a.length<r.length-1;)a+="0";const s=Z.O$.from(i),c=Z.O$.from(a);let l=s.mul(r).add(c);return n&&(l=l.mul(B)),l}class W{constructor(e,t,r,n){e!==H&&D.throwError("cannot use FixedFormat constructor; use FixedFormat.from",R.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.signed=t,this.width=r,this.decimals=n,this.name=(t?"":"u")+"fixed"+String(r)+"x"+String(n),this._multiplier=V(n),Object.freeze(this)}static from(e){if(e instanceof W)return e;"number"===typeof e&&(e=`fixed128x${e}`);let t=!0,r=128,n=18;if("string"===typeof e)if("fixed"===e);else if("ufixed"===e)t=!1;else{const o=e.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);o||D.throwArgumentError("invalid fixed format","format",e),t="u"!==o[1],r=parseInt(o[2]),n=parseInt(o[3])}else if(e){const o=(t,r,n)=>null==e[t]?n:(typeof e[t]!==r&&D.throwArgumentError("invalid fixed format ("+t+" not "+r+")","format."+t,e[t]),e[t]);t=o("signed","boolean",t),r=o("width","number",r),n=o("decimals","number",n)}return r%8&&D.throwArgumentError("invalid fixed format width (not byte aligned)","format.width",r),n>80&&D.throwArgumentError("invalid fixed format (decimals too large)","format.decimals",n),new W(H,t,r,n)}}class J{constructor(e,t,r,n){D.checkNew(new.target,J),e!==H&&D.throwError("cannot use FixedNumber constructor; use FixedNumber.from",R.Yd.errors.UNSUPPORTED_OPERATION,{operation:"new FixedFormat"}),this.format=n,this._hex=t,this._value=r,this._isFixedNumber=!0,Object.freeze(this)}_checkFormat(e){this.format.name!==e.format.name&&D.throwArgumentError("incompatible format; use fixedNumber.toFormat","other",e)}addUnsafe(e){this._checkFormat(e);const t=K(this._value,this.format.decimals),r=K(e._value,e.format.decimals);return J.fromValue(t.add(r),this.format.decimals,this.format)}subUnsafe(e){this._checkFormat(e);const t=K(this._value,this.format.decimals),r=K(e._value,e.format.decimals);return J.fromValue(t.sub(r),this.format.decimals,this.format)}mulUnsafe(e){this._checkFormat(e);const t=K(this._value,this.format.decimals),r=K(e._value,e.format.decimals);return J.fromValue(t.mul(r).div(this.format._multiplier),this.format.decimals,this.format)}divUnsafe(e){this._checkFormat(e);const t=K(this._value,this.format.decimals),r=K(e._value,e.format.decimals);return J.fromValue(t.mul(this.format._multiplier).div(r),this.format.decimals,this.format)}floor(){const e=this.toString().split(".");1===e.length&&e.push("0");let t=J.from(e[0],this.format);const r=!e[1].match(/^(0*)$/);return this.isNegative()&&r&&(t=t.subUnsafe(X.toFormat(t.format))),t}ceiling(){const e=this.toString().split(".");1===e.length&&e.push("0");let t=J.from(e[0],this.format);const r=!e[1].match(/^(0*)$/);return!this.isNegative()&&r&&(t=t.addUnsafe(X.toFormat(t.format))),t}round(e){null==e&&(e=0);const t=this.toString().split(".");if(1===t.length&&t.push("0"),(e<0||e>80||e%1)&&D.throwArgumentError("invalid decimal count","decimals",e),t[1].length<=e)return this;const r=J.from("1"+q.substring(0,e),this.format),n=Q.toFormat(this.format);return this.mulUnsafe(r).addUnsafe(n).floor().divUnsafe(r)}isZero(){return"0.0"===this._value||"0"===this._value}isNegative(){return"-"===this._value[0]}toString(){return this._value}toHexString(e){if(null==e)return this._hex;e%8&&D.throwArgumentError("invalid byte width","width",e);const t=Z.O$.from(this._hex).fromTwos(this.format.width).toTwos(e).toHexString();return(0,$.$m)(t,e/8)}toUnsafeFloat(){return parseFloat(this.toString())}toFormat(e){return J.fromString(this._value,e)}static fromValue(e,t,r){return null!=r||null==t||(0,Z.Zm)(t)||(r=t,t=null),null==t&&(t=0),null==r&&(r="fixed"),J.fromString(G(e,t),W.from(r))}static fromString(e,t){null==t&&(t="fixed");const r=W.from(t),n=K(e,r.decimals);!r.signed&&n.lt(T)&&Y("unsigned value cannot be negative","overflow","value",e);let o=null;r.signed?o=n.toTwos(r.width).toHexString():(o=n.toHexString(),o=(0,$.$m)(o,r.width/8));const i=G(n,r.decimals);return new J(H,o,i,r)}static fromBytes(e,t){null==t&&(t="fixed");const r=W.from(t);if((0,$.lE)(e).length>r.width/8)throw new Error("overflow");let n=Z.O$.from(e);r.signed&&(n=n.fromTwos(r.width));const o=n.toTwos((r.signed?0:1)+r.width).toHexString(),i=G(n,r.decimals);return new J(H,o,i,r)}static from(e,t){if("string"===typeof e)return J.fromString(e,t);if((0,$._t)(e))return J.fromBytes(e,t);try{return J.fromValue(e,0,t)}catch(r){if(r.code!==R.Yd.errors.INVALID_ARGUMENT)throw r}return D.throwArgumentError("invalid FixedNumber value","value",e)}static isFixedNumber(e){return!(!e||!e._isFixedNumber)}}const X=J.from(1),Q=J.from("0.5"),ee=(new R.Yd("units/5.4.0"),["wei","kwei","mwei","gwei","szabo","finney","ether"]);function te(e){return function(e,t){if("string"===typeof t){const e=ee.indexOf(t);-1!==e&&(t=3*e)}return G(e,null!=t?t:18)}(e,18)}var re=i.ZP.div.withConfig({displayName:"AuctionItem__Num",componentId:"sc-jjxxkn-0"})(["display:inline-block;vertical-align:top;margin-right:20px;color:rgba(166,250,255,1);font-family:Pangolin;font-weight:Regular;font-size:36px;opacity:1;&:hover{opacity:0.4;}"]),ne=function(e){var t=e.contractState,r=t.auctionStarted,n=t.price,o=t.forSale,i=e.onSelect,a=U().unix(r.toNumber()).add(U().duration(1,"hour")),s=Math.max(0,a.diff(U()(),"minute")),c=o.map((function(e){var t=e.number.toString();return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(re,{onClick:function(){e.isAvailable&&i(t)},children:e.isAvailable?t:(0,y.jsx)("del",{children:t})},t)," "]})}));return(0,y.jsxs)("div",{children:[(0,y.jsx)(m,{children:"Time Left:"}),(0,y.jsxs)(h,{children:[s," minute(s)"]}),(0,y.jsx)(m,{children:"Price:"}),(0,y.jsx)(h,{children:te(n)}),(0,y.jsx)(m,{children:"For Sale:"}),c]})};var oe=function(e){var t=e.contract,r=e.contractState,n=e.account,o=r.forSale,i=r.price,a=(0,A.useState)(function(e){for(var t=e.forSale,r=0;r<t.length;r++){var n=t[r];if(n.isAvailable)return n.number.toString()}return}(r)),s=a[0],c=a[1],l=function(){var e=(0,C.Z)(I().mark((function e(r){var a,c,l,u;return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.preventDefault(),e.prev=1,a=Z.O$.from(s),c=!1,l=0;case 5:if(!(l<o.length)){e.next=12;break}if(!o[l].number.eq(a)){e.next=9;break}return c=!0,e.abrupt("break",12);case 9:l++,e.next=5;break;case 12:if(c){e.next=15;break}return alert("nope"),e.abrupt("return");case 15:return e.next=17,t.mint(n,a,{value:i});case 17:u=e.sent,console.log("mint result:",u),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(1),console.log("tx response: ".concat(e.t0));case 24:case"end":return e.stop()}}),e,null,[[1,21]])})));return function(t){return e.apply(this,arguments)}}(),u=function(){var e=(0,C.Z)(I().mark((function e(t){return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,y.jsxs)("div",{children:[(0,y.jsx)(ne,{contractState:r,onSelect:function(e){return c(e)}}),(0,y.jsx)("form",{onSubmit:l,children:(0,y.jsxs)(p,{children:[(0,y.jsx)(m,{children:"Mint Number:"}),(0,y.jsx)(w,{type:"text",value:s,onChange:function(e){return c(e.target.value)}}),(0,y.jsx)(b,{value:"Mint"}),(0,y.jsx)(x,{onClick:u,children:"Mint All"})]})})]})};function ie(e,t,r,n){return ae.apply(this,arguments)}function ae(){return(ae=(0,C.Z)(I().mark((function e(t,r,n,o){var i,a,s;return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.ownerOf(n),a=t.ownerOf(o),e.prev=2,e.next=5,Promise.all([i,a]);case 5:s=e.sent,e.t0=I().keys(s);case 7:if((e.t1=e.t0()).done){e.next=13;break}if(e.t1.value==r){e.next=11;break}return e.abrupt("return",!1);case 11:e.next=7;break;case 13:return e.abrupt("return",!0);case 16:return e.prev=16,e.t2=e.catch(2),console.log("chain query error: ".concat(e.t2)),e.abrupt("return",!1);case 20:case"end":return e.stop()}}),e,null,[[2,16]])})))).apply(this,arguments)}var se=function(e){var t=e.account,r=e.contract,n=(0,A.useState)(""),o=n[0],i=n[1],a=(0,A.useState)(""),s=a[0],c=a[1],l=(0,A.useState)("a"),u=l[0],f=l[1],d=(0,A.useState)(),h=d[0],p=d[1],g=function(){var e=(0,C.Z)(I().mark((function e(n){var i,a,c;return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.prev=1,i=Z.O$.from(o),a=Z.O$.from(s),e.next=6,ie(r,t,i,a);case 6:if(!e.sent){e.next=12;break}return e.next=10,r.operate(i,u,a);case 10:c=e.sent,p({firstNum:i,secondNum:a,preview:c,submitting:!1});case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log("tx response: ".concat(e.t0));case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),x=function(){var e=(0,C.Z)(I().mark((function e(n){var o,i,a;return I().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),e.prev=1,h&&!h.submitting){e.next=4;break}return e.abrupt("return");case 4:return o=h.firstNum,i=h.secondNum,e.next=7,r.burn(t,o,u,i);case 7:a=e.sent,console.log("burn result:",a.toString()),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("tx response: ".concat(e.t0));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return(0,y.jsxs)("div",{children:[(0,y.jsx)(m,{children:"Ops:"}),(0,y.jsxs)("form",{onSubmit:g,children:[(0,y.jsx)(w,{type:"text",value:o,onChange:function(e){return i(e.target.value)}}),(0,y.jsxs)(v,{id:"ops",name:"ops",value:u,onChange:function(e){return f(e.target.value)},children:[(0,y.jsx)("option",{value:"a",children:"Add"}),(0,y.jsx)("option",{value:"s",children:"Subtract"}),(0,y.jsx)("option",{value:"m",children:"Multiply"}),(0,y.jsx)("option",{value:"d",children:"Divide"})]}),(0,y.jsx)(w,{type:"text",value:s,onChange:function(e){return c(e.target.value)}}),(0,y.jsx)(b,{value:"Preview"})]}),h&&(0,y.jsxs)("button",{onClick:function(e){return x(e)},disabled:h.submitting,children:["Confirm Burn to ",h.preview.toString()]})]})},ce=function(){var e=(0,s.useRouter)().basePath,t=(0,c.Ge)().account,r=o((0,u.ZP)(),2),n=r[0],i=n.state,l=n.contract,f=r[1],d=i===u.ZM.Ready&&f&&t&&l;return(0,y.jsxs)("div",{children:[(0,y.jsxs)(a.default,{children:[(0,y.jsx)("title",{children:"MemeNumbers"}),(0,y.jsx)("meta",{name:"description",content:"eth"}),(0,y.jsx)("link",{rel:"icon",href:"/"===(null===e||void 0===e?void 0:e.charAt(0))?"".concat(e,"/favicon.ico"):"/favicon.ico"})]}),(0,y.jsxs)(ue,{children:[!d&&(0,y.jsx)(de,{}),d&&(0,y.jsxs)("div",{children:[(0,y.jsx)(oe,{contractState:f,contract:l,account:t}),(0,y.jsx)(fe,{}),l&&(0,y.jsx)(M,{contract:l}),(0,y.jsx)(fe,{}),l&&t&&(0,y.jsx)(se,{account:t,contract:l})]})]})]})};ce.layout=E;var le=ce,ue=i.ZP.main.withConfig({displayName:"pages__Main",componentId:"sc-1k2el6b-0"})([""]),fe=i.ZP.div.withConfig({displayName:"pages__Segment",componentId:"sc-1k2el6b-1"})(["width:100%;height:3px;background:rgba(196,196,196,1);opacity:1;overflow:hidden;"]),de=function(){return(0,y.jsxs)("div",{children:[(0,y.jsx)("h1",{children:"You don't have to be a mathematician to have a feel for numbers."}),(0,y.jsx)("p",{children:"- John Forbes Nash, Jr."})]})}},7603:function(e,t,r){"use strict";r.d(t,{$:function(){return l}});var n=r(2809);function o(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}r(7294);var i=r(5893),a=["color"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e){var t=e.color,r=o(e,a);return(0,i.jsx)("svg",c(c({width:"38",height:"38",viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:t},r),{},{children:(0,i.jsx)("g",{fill:"none",fillRule:"evenodd",children:(0,i.jsxs)("g",{transform:"translate(1 1)",strokeWidth:"2",children:[(0,i.jsx)("circle",{strokeOpacity:".5",cx:"18",cy:"18",r:"18"}),(0,i.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",children:(0,i.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})})]})})}))}},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(8090)}])},4476:function(e){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}},9008:function(e,t,r){e.exports=r(639)},1664:function(e,t,r){e.exports=r(2167)},1163:function(e,t,r){e.exports=r(4651)}},function(e){e.O(0,[885,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);