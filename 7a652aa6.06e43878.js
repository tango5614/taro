(window.webpackJsonp=window.webpackJsonp||[]).push([[737],{1629:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return u}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=n.a.createContext({}),p=function(e){var t=n.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},m=function(e){var t=p(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},j=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=p(a),j=r,u=m["".concat(c,".").concat(j)]||m[j]||O[j]||b;return a?n.a.createElement(u,l({ref:t},o,{components:a})):n.a.createElement(u,l({ref:t},o))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=j;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var o=2;o<b;o++)c[o]=a[o];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},876:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return p}));var r=a(1),n=a(9),b=(a(0),a(1629)),c={title:"Taro.previewImage(param)",sidebar_label:"previewImage"},l={id:"version-3.0.0-beta.5/apis/multimedia/images/previewImage",title:"Taro.previewImage(param)",description:"\u5728\u65b0\u9875\u9762\u4e2d\u5168\u5c4f\u9884\u89c8\u56fe\u7247\u3002\u9884\u89c8\u7684\u8fc7\u7a0b\u4e2d\u7528\u6237\u53ef\u4ee5\u8fdb\u884c\u4fdd\u5b58\u56fe\u7247\u3001\u53d1\u9001\u7ed9\u670b\u53cb\u7b49\u64cd\u4f5c\u3002",source:"@site/versioned_docs/version-3.0.0-beta.5/apis/multimedia/images/previewImage.md",permalink:"/taro/docs/3.0.0-beta.5/apis/multimedia/images/previewImage",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.0.0-beta.5/apis/multimedia/images/previewImage.md",version:"3.0.0-beta.5",sidebar_label:"previewImage",sidebar:"version-3.0.0-beta.5/API",previous:{title:"Taro.chooseImage(OBJECT)",permalink:"/taro/docs/3.0.0-beta.5/apis/multimedia/images/chooseImage"},next:{title:"Taro.getImageInfo(OBJECT)",permalink:"/taro/docs/3.0.0-beta.5/apis/multimedia/images/getImageInfo"}},i=[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"object param",id:"object-param",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],o={rightToc:i};function p(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u5728\u65b0\u9875\u9762\u4e2d\u5168\u5c4f\u9884\u89c8\u56fe\u7247\u3002\u9884\u89c8\u7684\u8fc7\u7a0b\u4e2d\u7528\u6237\u53ef\u4ee5\u8fdb\u884c\u4fdd\u5b58\u56fe\u7247\u3001\u53d1\u9001\u7ed9\u670b\u53cb\u7b49\u64cd\u4f5c\u3002"),Object(b.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\u540c ",Object(b.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/wx.previewImage.html"}),Object(b.b)("inlineCode",{parentName:"a"},"wx.previewImage")),"\uff0c\u652f\u6301 ",Object(b.b)("inlineCode",{parentName:"p"},"Promise")," \u5316\u4f7f\u7528\u3002"),Object(b.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(b.b)("h3",{id:"object-param"},"object param"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Property"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"urls"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"Array.","<","string",">")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u9700\u8981\u9884\u89c8\u7684\u56fe\u7247\u94fe\u63a5\u5217\u8868\u3002")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[current]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"string")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,'"',"urls","[0]",'"')),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"urls\u7684\u7b2c\u4e00\u5f20 \u5f53\u524d\u663e\u793a\u56fe\u7247\u7684\u94fe\u63a5")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[success]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"function")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[fail]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"function")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"[complete]"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(b.b)("code",null,"function")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")))),Object(b.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.previewImage(params).then(...)\n")),Object(b.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.previewImage"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}p.isMDXComponent=!0}}]);