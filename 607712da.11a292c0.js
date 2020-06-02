(window.webpackJsonp=window.webpackJsonp||[]).push([[571],{1629:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return s}));var c=n(0),r=n.n(c);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);t&&(c=c.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,c)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,c,r=function(e,t){if(null==e)return{};var n,c,r={},a=Object.keys(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(c=0;c<a.length;c++)n=a[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},p=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=Object(c.forwardRef)((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,o=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),p=u(n),j=c,s=p["".concat(o,".").concat(j)]||p[j]||O[j]||a;return n?r.a.createElement(s,l({ref:t},i,{components:n})):r.a.createElement(s,l({ref:t},i))}));function s(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,o=new Array(a);o[0]=j;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:c,o[1]=l;for(var i=2;i<a;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"},710:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return u}));var c=n(1),r=n(9),a=(n(0),n(1629)),o={title:"Taro.onSocketClose(callback)",sidebar_label:"onSocketClose"},l={id:"apis/network/webSocket/onSocketClose",title:"Taro.onSocketClose(callback)",description:"\u76d1\u542c WebSocket \u8fde\u63a5\u5173\u95ed\u4e8b\u4ef6",source:"@site/docs/apis/network/webSocket/onSocketClose.md",permalink:"/taro/docs/next/apis/network/webSocket/onSocketClose",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/network/webSocket/onSocketClose.md",version:"next",sidebar_label:"onSocketClose",sidebar:"API",previous:{title:"Taro.onSocketError(callback)",permalink:"/taro/docs/next/apis/network/webSocket/onSocketError"},next:{title:"Taro.connectSocket(option)",permalink:"/taro/docs/next/apis/network/webSocket/connectSocket"}},b=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Callback",id:"callback",children:[]},{value:"CallbackResult",id:"callbackresult",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:b};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(c.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"\u76d1\u542c WebSocket \u8fde\u63a5\u5173\u95ed\u4e8b\u4ef6"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},Object(a.b)("a",Object(c.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/network/websocket/wx.onSocketClose.html"}),"\u53c2\u8003\u6587\u6863"))),Object(a.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(a.b)("pre",null,Object(a.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: Callback) => void\n")),Object(a.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(a.b)("h3",{id:"callback"},"Callback"),Object(a.b)("p",null,"WebSocket \u8fde\u63a5\u5173\u95ed\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(a.b)("pre",null,Object(a.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"(result: CallbackResult) => void\n")),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"result"),Object(a.b)("td",null,Object(a.b)("code",null,"CallbackResult"))))),Object(a.b)("h3",{id:"callbackresult"},"CallbackResult"),Object(a.b)("table",null,Object(a.b)("thead",null,Object(a.b)("tr",null,Object(a.b)("th",null,"\u53c2\u6570"),Object(a.b)("th",null,"\u7c7b\u578b"),Object(a.b)("th",null,"\u8bf4\u660e"))),Object(a.b)("tbody",null,Object(a.b)("tr",null,Object(a.b)("td",null,"code"),Object(a.b)("td",null,Object(a.b)("code",null,"number")),Object(a.b)("td",null,"\u4e00\u4e2a\u6570\u5b57\u503c\u8868\u793a\u5173\u95ed\u8fde\u63a5\u7684\u72b6\u6001\u53f7\uff0c\u8868\u793a\u8fde\u63a5\u88ab\u5173\u95ed\u7684\u539f\u56e0\u3002")),Object(a.b)("tr",null,Object(a.b)("td",null,"reason"),Object(a.b)("td",null,Object(a.b)("code",null,"string")),Object(a.b)("td",null,"\u4e00\u4e2a\u53ef\u8bfb\u7684\u5b57\u7b26\u4e32\uff0c\u8868\u793a\u8fde\u63a5\u88ab\u5173\u95ed\u7684\u539f\u56e0\u3002")))),Object(a.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(a.b)("pre",null,Object(a.b)("code",Object(c.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.connectSocket({\n  url: 'test.php'\n})\n//\u6ce8\u610f\u8fd9\u91cc\u6709\u65f6\u5e8f\u95ee\u9898\uff0c\n//\u5982\u679c Taro.connectSocket \u8fd8\u6ca1\u56de\u8c03 Taro.onSocketOpen\uff0c\u800c\u5148\u8c03\u7528 Taro.closeSocket\uff0c\u90a3\u4e48\u5c31\u505a\u4e0d\u5230\u5173\u95ed WebSocket \u7684\u76ee\u7684\u3002\n//\u5fc5\u987b\u5728 WebSocket \u6253\u5f00\u671f\u95f4\u8c03\u7528 Taro.closeSocket \u624d\u80fd\u5173\u95ed\u3002\nTaro.onSocketOpen(function () {\n  Taro.closeSocket()\n})\nTaro.onSocketClose(function (res) {\n  console.log('WebSocket \u5df2\u5173\u95ed\uff01')\n})\n")),Object(a.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"API"),Object(a.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(a.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"H5"),Object(a.b)("th",Object(c.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"Taro.onSocketClose"),Object(a.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(a.b)("td",Object(c.a)({parentName:"tr"},{align:"center"})),Object(a.b)("td",Object(c.a)({parentName:"tr"},{align:"center"}))))))}u.isMDXComponent=!0}}]);