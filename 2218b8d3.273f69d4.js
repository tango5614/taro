(window.webpackJsonp=window.webpackJsonp||[]).push([[219],{1629:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),l=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):b({},t,{},e)),r},d=function(e){var t=l(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},O=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(r),O=a,m=d["".concat(c,".").concat(O)]||d[O]||s[O]||i;return r?n.a.createElement(m,b({ref:t},p,{components:r})):n.a.createElement(m,b({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=O;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var p=2;p<i;p++)c[p]=r[p];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"},358:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return b})),r.d(t,"rightToc",(function(){return o})),r.d(t,"default",(function(){return l}));var a=r(1),n=r(9),i=(r(0),r(1629)),c={title:"Taro.hideTabBar(OBJECT)",sidebar_label:"hideTabBar"},b={id:"version-3.0.0-beta.5/apis/interface/tabbar/hideTabBar",title:"Taro.hideTabBar(OBJECT)",description:"\u4f7f\u7528\u65b9\u5f0f\u540c [`wx.hideTabBar`](https://developers.weixin.qq.com/miniprogram/dev/api/wx.hideTabBar.html)\uff0c\u652f\u6301 `Promise` \u5316\u4f7f\u7528\u3002",source:"@site/versioned_docs/version-3.0.0-beta.5/apis/interface/tabbar/hideTabBar.md",permalink:"/taro/docs/3.0.0-beta.5/apis/interface/tabbar/hideTabBar",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.0-beta.5/apis/interface/tabbar/hideTabBar.md",version:"3.0.0-beta.5",sidebar_label:"hideTabBar",sidebar:"version-3.0.0-beta.5/API",previous:{title:"Taro.showTabBar(OBJECT)",permalink:"/taro/docs/3.0.0-beta.5/apis/interface/tabbar/showTabBar"},next:{title:"Taro.setTopBarText(OBJECT)",permalink:"/taro/docs/3.0.0-beta.5/apis/interface/topbar/setTopBarText"}},o=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],p={rightToc:o};function l(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.hideTabBar.html"}),Object(i.b)("inlineCode",{parentName:"a"},"wx.hideTabBar")),"\uff0c\u652f\u6301 ",Object(i.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(i.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.hideTabBar(params).then(...)\n")),Object(i.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.hideTabBarRedDot"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"Taro.hideTabBar"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}l.isMDXComponent=!0}}]);