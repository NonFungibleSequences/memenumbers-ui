(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{3149:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return X}});var r=n(2809),a=n(266),i=n(809),s=n.n(i),o=n(7294),u=n(9008),c=n(4476),p=n.n(c),l=n(914),d=n(387),y=n(9163),f=n(1664),m=n(219),b=n(5893),v=["color"];function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e){var t=e.color,n=(0,m.Z)(e,v);return(0,b.jsx)("svg",x(x({width:"38",height:"38",viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:t},n),{},{children:(0,b.jsx)("g",{fill:"none",fillRule:"evenodd",children:(0,b.jsxs)("g",{transform:"translate(1 1)",strokeWidth:"2",children:[(0,b.jsx)("circle",{strokeOpacity:".5",cx:"18",cy:"18",r:"18"}),(0,b.jsx)("path",{d:"M36 18c0-9.94-8.06-18-18-18",children:(0,b.jsx)("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})})]})})}))}var g=n(8087),j=[1,3,42,4,31337,1337],T={contractAddress:"0xa373e957dc2c80ffddbedccd5a1eb652c5a74bca"},k={contractAddress:"0xa373e957dc2c80ffddbedccd5a1eb652c5a74bca"},O={contractAddress:"0xa373e957dc2c80ffddbedccd5a1eb652c5a74bca"},_={contractAddress:"0xa373e957dc2c80ffddbedccd5a1eb652c5a74bca"},S={contractAddress:"0xa373e957dc2c80ffddbedccd5a1eb652c5a74bca"},M={contractAddress:"0xa373e957dc2c80ffddbedccd5a1eb652c5a74bca"};function N(e){switch(e){case 1:return T;case 3:return k;case 42:return O;case 4:return _;case 31337:return S;case 1337:return M;default:throw new Error("unsupported chain id: ".concat(e))}}var I=new g._k({supportedChainIds:j});var C=y.ZP.nav.withConfig({displayName:"NavBar__Nav",componentId:"sc-qwkt9c-0"})(["max-width:56em;margin:0 auto;padding:0.4em;"]),A=y.ZP.ul.withConfig({displayName:"NavBar__Ul",componentId:"sc-qwkt9c-1"})(["display:flex;padding:0;"]),P=y.ZP.li.withConfig({displayName:"NavBar__Li",componentId:"sc-qwkt9c-2"})(["display:block;padding:0.4em;"]),D=y.ZP.a.withConfig({displayName:"NavBar__A",componentId:"sc-qwkt9c-3"})(["&:hover{color:blue;}"]),E=function(){var e=(0,o.useState)(),t=e[0],n=e[1],r=(0,l.Ge)(),a=(function(){var e=(0,l.Ge)(),t=e.activate,n=e.active,r=(0,o.useState)(!1),a=r[0],i=r[1];(0,o.useEffect)((function(){I.isAuthorized().then((function(e){e?t(I,void 0,!0).catch((function(){i(!0)})):i(!0)}))}),[]),(0,o.useEffect)((function(){!a&&n&&i(!0)}),[a,n])}(),r.connector),i=(r.library,r.chainId,r.account,r.activate),s=(r.deactivate,r.active),u=r.error;(0,o.useEffect)((function(){t&&t===a&&(console.log("setting undefined"),n(void 0))}),[t,a]);var c=I,p=c===t,d=c===a,y=!!t,m=d&&s;return u&&alert(u.toString()),(0,b.jsxs)(C,{children:[(0,b.jsx)(A,{children:(0,b.jsx)(P,{children:(0,b.jsx)(f.default,{href:"/",passHref:!0,children:(0,b.jsx)(D,{children:"Home"})})})}),(0,b.jsxs)("button",{style:{height:"3rem",borderRadius:"1rem",borderColor:p?"orange":d?"green":"unset",cursor:y?"unset":"pointer",position:"relative"},disabled:y,onClick:function(){n(c),i(I)},children:[(0,b.jsx)("div",{style:{position:"absolute",top:"0",left:"0",height:"100%",display:"flex",alignItems:"center",color:"black",margin:"0 0 0 1rem"},children:p&&(0,b.jsx)(w,{color:"black",style:{height:"25%",marginLeft:"-1rem"}})}),m?"Connected":"Connect Wallet"]},"injected")]})},Z=n(2593),H=function(e){var t=e.contract,n=(0,o.useState)(""),r=n[0],i=n[1],u=(0,o.useState)(""),c=u[0],p=u[1],l=function(){var e=(0,a.Z)(s().mark((function e(n){var a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),console.log("Submitting Number ".concat(r)),e.prev=2,e.next=5,t.ownerOf(Z.O$.from(r));case 5:a=e.sent,p("".concat(r," is owned by: ").concat(a)),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(2),p("".concat(r," is available")),console.log("tx response: ".concat(e.t0));case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}();return(0,b.jsxs)("div",{children:[(0,b.jsxs)("form",{onSubmit:l,children:[(0,b.jsxs)("label",{children:["availability:",(0,b.jsx)("input",{type:"text",value:r,onChange:function(e){return i(e.target.value)}})]}),(0,b.jsx)("input",{type:"submit",value:"Check"})]}),(0,b.jsx)("p",{children:c})]})},F=n(7616),R=function(e){var t=e.price,n=e.forSale,r=e.onSelect,a=n.map((function(e){var t=e.toString();return(0,b.jsx)("li",{onClick:function(){return r(t)},children:e.toString()},t)}));return(0,b.jsxs)("div",{children:[(0,b.jsxs)("p",{children:["price: ",(0,F.dF)(t)]}),(0,b.jsx)("ul",{children:a})]})},q=function(e){var t=e.price,n=e.forSale,r=e.contract,i=e.account,u=(0,o.useState)(n[0].toString()),c=u[0],p=u[1],l=function(){var e=(0,a.Z)(s().mark((function e(a){var o,u,p,l;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a.preventDefault(),e.prev=1,o=Z.O$.from(c),u=!1,p=0;case 5:if(!(p<n.length)){e.next=12;break}if(!n[p].eq(o)){e.next=9;break}return u=!0,e.abrupt("break",12);case 9:p++,e.next=5;break;case 12:if(u){e.next=15;break}return alert("nope"),e.abrupt("return");case 15:return e.next=17,r.mint(i,o,{value:t});case 17:l=e.sent,console.log("mint result:",l),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(1),console.log("tx response: ".concat(e.t0));case 24:case"end":return e.stop()}}),e,null,[[1,21]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,a.Z)(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault();case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,b.jsxs)("div",{children:[(0,b.jsx)(R,{price:t,forSale:n,onSelect:function(e){return p(e)}}),(0,b.jsxs)("form",{onSubmit:l,children:[(0,b.jsxs)("label",{children:["Number:",(0,b.jsx)("input",{type:"text",value:c,onChange:function(e){return p(e.target.value)}})]}),(0,b.jsx)("input",{type:"submit",value:"Mint"}),(0,b.jsx)("button",{onClick:d,children:"Mint All"})]})]})};function B(e,t,n,r){return U.apply(this,arguments)}function U(){return(U=(0,a.Z)(s().mark((function e(t,n,r,a){var i,o,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.ownerOf(r),o=t.ownerOf(a),e.prev=2,e.next=5,Promise.all([i,o]);case 5:u=e.sent,e.t0=s().keys(u);case 7:if((e.t1=e.t0()).done){e.next=13;break}if(e.t1.value==n){e.next=11;break}return e.abrupt("return",!1);case 11:e.next=7;break;case 13:return e.abrupt("return",!0);case 16:return e.prev=16,e.t2=e.catch(2),console.log("chain query error: ".concat(e.t2)),e.abrupt("return",!1);case 20:case"end":return e.stop()}}),e,null,[[2,16]])})))).apply(this,arguments)}var G=function(e){var t=e.account,n=e.contract,r=(0,o.useState)(""),i=r[0],u=r[1],c=(0,o.useState)(""),p=c[0],l=c[1],d=(0,o.useState)("a"),y=d[0],f=d[1],m=(0,o.useState)(),v=m[0],h=m[1],x=function(){var e=(0,a.Z)(s().mark((function e(r){var a,o,u;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.preventDefault(),e.prev=1,a=Z.O$.from(i),o=Z.O$.from(p),e.next=6,B(n,t,a,o);case 6:if(!e.sent){e.next=12;break}return e.next=10,n.operate(a,y,o);case 10:u=e.sent,h({firstNum:a,secondNum:o,preview:u,submitting:!1});case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),console.log("tx response: ".concat(e.t0));case 17:case"end":return e.stop()}}),e,null,[[1,14]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=(0,a.Z)(s().mark((function e(r){var a,i,o;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),e.prev=1,v&&!v.submitting){e.next=4;break}return e.abrupt("return");case 4:return a=v.firstNum,i=v.secondNum,e.next=7,n.burn(t,a,y,i);case 7:o=e.sent,console.log("burn result:",o.toString()),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),console.log("tx response: ".concat(e.t0));case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();return(0,b.jsxs)("div",{children:[(0,b.jsx)("p",{children:"Ops:"}),(0,b.jsxs)("form",{onSubmit:x,children:[(0,b.jsx)("label",{children:(0,b.jsx)("input",{type:"text",value:i,onChange:function(e){return u(e.target.value)}})}),(0,b.jsxs)("select",{id:"ops",name:"ops",value:y,onChange:function(e){return f(e.target.value)},children:[(0,b.jsx)("option",{value:"a",children:"Add"}),(0,b.jsx)("option",{value:"s",children:"Subtract"}),(0,b.jsx)("option",{value:"m",children:"Multiply"}),(0,b.jsx)("option",{value:"d",children:"Divide"})]}),(0,b.jsx)("label",{children:(0,b.jsx)("input",{type:"text",value:p,onChange:function(e){return l(e.target.value)}})}),(0,b.jsx)("input",{type:"submit",value:"Preview"})]}),v&&(0,b.jsxs)("button",{onClick:function(e){return w(e)},disabled:v.submitting,children:["Confirm Burn to ",v.preview.toString()]})]})};function W(e){return L.apply(this,arguments)}function L(){return(L=(0,a.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("querying state..."),e.next=3,t.currentPrice();case 3:return n=e.sent,e.next=6,t.getForSale();case 6:return r=e.sent,e.abrupt("return",{price:n,forSale:r});case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var $=JSON.parse('[{"inputs":[{"internalType":"address","name":"_renderer","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"AUCTION_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"AUCTION_START_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"BATCH_SIZE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"adminDisableRenderUpgrade","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_renderer","type":"address"}],"name":"adminSetRenderer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"to","type":"address"}],"name":"adminWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"auctionStarted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"num1","type":"uint256"},{"internalType":"string","name":"op","type":"string"},{"internalType":"uint256","name":"num2","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"currentPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getForSale","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"num","type":"uint256"}],"name":"isForSale","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"num","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"num1","type":"uint256"},{"internalType":"string","name":"op","type":"string"},{"internalType":"uint256","name":"num2","type":"uint256"}],"name":"operate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"refresh","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renderer","outputs":[{"internalType":"contract ITokenRenderer","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]');function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function Y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var X=function(){var e=(0,l.Ge)(),t=e.library,n=e.account,r=e.chainId,i=(0,o.useState)(),c=i[0],y=i[1],f=(0,o.useState)(),m=f[0],v=f[1];(0,o.useEffect)((function(){if(t&&r&&!c){var e=N(r),n=new d.CH(e.contractAddress,$,t.getSigner());return y(n),console.log("RELOADING WITH: ".concat(r)),(0,a.Z)(s().mark((function e(){var i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,W(n);case 3:i=e.sent,v(i),t.on("poll",(function(){(0,a.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("RELOADING WITH: ".concat(r)),e.prev=1,e.next=4,W(n);case 4:t=e.sent,v(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),alert(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))(),function(){t.removeAllListeners("block")}}}),[t,c,r]);var h=t&&m;return(0,b.jsxs)("div",{className:p().container,children:[(0,b.jsx)(E,{}),(0,b.jsxs)(u.default,{children:[(0,b.jsx)("title",{children:"MemeNumbers"}),(0,b.jsx)("meta",{name:"description",content:"eth"}),(0,b.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,b.jsxs)("main",{className:p().main,children:[!h&&(0,b.jsxs)("div",{children:[(0,b.jsx)("h1",{className:p().title,children:"You don't have to be a mathematician to have a feel for numbers."}),(0,b.jsx)("p",{className:p().description,children:"- John Forbes Nash, Jr."})]}),h&&(0,b.jsxs)("div",{children:[(0,b.jsx)(q,Y(Y({},m),{},{contract:c,account:n})),(0,b.jsx)("p",{}),c&&(0,b.jsx)(H,{contract:c}),c&&n&&(0,b.jsx)(G,{account:n,contract:c})]})]}),(0,b.jsxs)("footer",{className:p().footer,children:[(0,b.jsx)("a",{href:"https://www.discord.com",target:"_blank",rel:"noopener noreferrer",children:"Discord"}),(0,b.jsx)("a",{href:"https://www.github.com/NonFungibleSequences",target:"_blank",rel:"noopener noreferrer",children:"Github"})]})]})}},5301:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(3149)}])},4476:function(e){e.exports={container:"Home_container__1EcsU",main:"Home_main__1x8gC",footer:"Home_footer__1WdhD",title:"Home_title__3DjR7",description:"Home_description__17Z4F",code:"Home_code__axx2Y",grid:"Home_grid__2Ei2F",card:"Home_card__2SdtB",logo:"Home_logo__1YbrH"}}},function(e){e.O(0,[576,774,888,179],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);