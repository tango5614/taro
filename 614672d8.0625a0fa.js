(window.webpackJsonp=window.webpackJsonp||[]).push([[577],{1629:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return O}));var r=n(0),l=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=l.a.createContext({}),s=function(e){var t=l.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},u=function(e){var t=s(e.components);return l.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.a.createElement(l.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=s(n),d=r,O=u["".concat(b,".").concat(d)]||u[d]||p[d]||c;return n?l.a.createElement(O,a({ref:t},i,{components:n})):l.a.createElement(O,a({ref:t},i))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,b=new Array(c);b[0]=d;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:r,b[1]=a;for(var i=2;i<c;i++)b[i]=n[i];return l.a.createElement.apply(null,b)}return l.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},716:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return s}));var r=n(1),l=n(9),c=(n(0),n(1629)),b={title:"Taro.login(option)",sidebar_label:"login"},a={id:"version-2.2.1/apis/open-api/login/login",title:"Taro.login(option)",description:"\u8c03\u7528\u63a5\u53e3\u83b7\u53d6\u767b\u5f55\u51ed\u8bc1\uff08code\uff09\u3002\u901a\u8fc7\u51ed\u8bc1\u8fdb\u800c\u6362\u53d6\u7528\u6237\u767b\u5f55\u6001\u4fe1\u606f\uff0c\u5305\u62ec\u7528\u6237\u7684\u552f\u4e00\u6807\u8bc6\uff08openid\uff09\u53ca\u672c\u6b21\u767b\u5f55\u7684\u4f1a\u8bdd\u5bc6\u94a5\uff08session_key\uff09\u7b49\u3002\u7528\u6237\u6570\u636e\u7684\u52a0\u89e3\u5bc6\u901a\u8baf\u9700\u8981\u4f9d\u8d56\u4f1a\u8bdd\u5bc6\u94a5\u5b8c\u6210\u3002\u66f4\u591a\u4f7f\u7528\u65b9\u6cd5\u8be6\u89c1 [\u5c0f\u7a0b\u5e8f\u767b\u5f55](https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html)\u3002",source:"@site/versioned_docs/version-2.2.1/apis/open-api/login/login.md",permalink:"/taro/docs/apis/open-api/login/login",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.2.1/apis/open-api/login/login.md",version:"2.2.1",sidebar_label:"login",sidebar:"version-2.2.1/API",previous:{title:"Stats",permalink:"/taro/docs/apis/files/Stats"},next:{title:"Taro.checkSession(option)",permalink:"/taro/docs/apis/open-api/login/checkSession"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:o};function s(e){var t=e.components,n=Object(l.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u8c03\u7528\u63a5\u53e3\u83b7\u53d6\u767b\u5f55\u51ed\u8bc1\uff08code\uff09\u3002\u901a\u8fc7\u51ed\u8bc1\u8fdb\u800c\u6362\u53d6\u7528\u6237\u767b\u5f55\u6001\u4fe1\u606f\uff0c\u5305\u62ec\u7528\u6237\u7684\u552f\u4e00\u6807\u8bc6\uff08openid\uff09\u53ca\u672c\u6b21\u767b\u5f55\u7684\u4f1a\u8bdd\u5bc6\u94a5\uff08session_key\uff09\u7b49\u3002\u7528\u6237\u6570\u636e\u7684\u52a0\u89e3\u5bc6\u901a\u8baf\u9700\u8981\u4f9d\u8d56\u4f1a\u8bdd\u5bc6\u94a5\u5b8c\u6210\u3002\u66f4\u591a\u4f7f\u7528\u65b9\u6cd5\u8be6\u89c1 ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/login.html"}),"\u5c0f\u7a0b\u5e8f\u767b\u5f55"),"\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/login/wx.login.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"(option?: Option) => Promise<SuccessCallbackResult>\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"option"},"Option"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"complete"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"fail"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"success"),Object(c.b)("td",null,Object(c.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"timeout"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4dms")))),Object(c.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"code"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u7528\u6237\u767b\u5f55\u51ed\u8bc1\uff08\u6709\u6548\u671f\u4e94\u5206\u949f\uff09\u3002\u5f00\u53d1\u8005\u9700\u8981\u5728\u5f00\u53d1\u8005\u670d\u52a1\u5668\u540e\u53f0\u8c03\u7528 ",Object(c.b)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/login/auth.code2Session.html"},"auth.code2Session"),"\uff0c\u4f7f\u7528 code \u6362\u53d6 openid \u548c session_key \u7b49\u4fe1\u606f")),Object(c.b)("tr",null,Object(c.b)("td",null,"errMsg"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.login({\n  success: function (res) {\n    if (res.code) {\n      //\u53d1\u8d77\u7f51\u7edc\u8bf7\u6c42\n      Taro.request({\n        url: 'https://test.com/onLogin',\n        data: {\n          code: res.code\n        }\n      })\n    } else {\n      console.log('\u767b\u5f55\u5931\u8d25\uff01' + res.errMsg)\n    }\n  }\n})\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"Taro.login"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}))))))}s.isMDXComponent=!0}}]);