(window.webpackJsonp=window.webpackJsonp||[]).push([[802],{1629:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var O=r.a.createContext({}),j=function(e){var t=r.a.useContext(O),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},o=function(e){var t=j(e.components);return r.a.createElement(O.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),o=j(n),d=a,m=o["".concat(b,".").concat(d)]||o[d]||p[d]||c;return n?r.a.createElement(m,l({ref:t},O,{components:n})):r.a.createElement(m,l({ref:t},O))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,b=new Array(c);b[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var O=2;O<c;O++)b[O]=n[O];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},941:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return j}));var a=n(1),r=n(9),c=(n(0),n(1629)),b={title:"PickerView",sidebar_label:"PickerView"},l={id:"version-2.2.1/components/forms/picker-view",title:"PickerView",description:"\u5d4c\u5165\u9875\u9762\u7684\u6eda\u52a8\u9009\u62e9\u5668",source:"@site/versioned_docs/version-2.2.1/components/forms/picker-view.md",permalink:"/taro/docs/components/forms/picker-view",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.2.1/components/forms/picker-view.md",version:"2.2.1",sidebar_label:"PickerView",sidebar:"version-2.2.1/components",previous:{title:"Picker",permalink:"/taro/docs/components/forms/picker"},next:{title:"Radio",permalink:"/taro/docs/components/forms/radio"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"PickerViewProps",id:"pickerviewprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"onChangeEventDetail",id:"onchangeeventdetail",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],O={rightToc:i};function j(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},O,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u5d4c\u5165\u9875\u9762\u7684\u6eda\u52a8\u9009\u62e9\u5668\n\u5176\u4e2d\u53ea\u53ef\u653e\u7f6e picker-view-column \u7ec4\u4ef6\uff0c\u5176\u5b83\u8282\u70b9\u4e0d\u4f1a\u663e\u793a"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/component/picker-view.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"ComponentType<PickerViewProps>\n")),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx"}),"export default class Picks extends Component {\n\n  constructor () {\n    super(...arguments)\n    const date = new Date()\n    const years = []\n    const months = []\n    const days = []\n    for (let i = 1990; i <= date.getFullYear(); i++) {\n      years.push(i)\n    }\n    for (let i = 1; i <= 12; i++) {\n      months.push(i)\n    }\n    for (let i = 1; i <= 31; i++) {\n      days.push(i)\n    }\n    this.state = {\n      years: years,\n      year: date.getFullYear(),\n      months: months,\n      month: 2,\n      days: days,\n      day: 2,\n      value: [9999, 1, 1]\n    }\n  }\n\n  onChange = e => {\n    const val = e.detail.value\n    this.setState({\n      year: this.state.years[val[0]],\n      month: this.state.months[val[1]],\n      day: this.state.days[val[2]],\n      value: val\n    })\n  }\n\n  render() {\n    return (\n      <View>\n        <View>{this.state.year}\u5e74{this.state.month}\u6708{this.state.day}\u65e5</View>\n        <PickerView indicatorStyle='height: 50px;' style='width: 100%; height: 300px;' value={this.state.value} onChange={this.onChange}>\n          <PickerViewColumn>\n            {this.state.years.map(item => {\n              return (\n                <View>{item}\u5e74</View>\n              );\n            })}\n          </PickerViewColumn>\n          <PickerViewColumn>\n            {this.state.months.map(item => {\n              return (\n                <View>{item}\u6708</View>\n              )\n            })}\n          </PickerViewColumn>\n          <PickerViewColumn>\n            {this.state.days.map(item => {\n              return (\n                <View>{item}\u65e5</View>\n              )\n            })}\n          </PickerViewColumn>\n        </PickerView>\n      </View>\n    )\n  }\n}\n\n")),Object(c.b)("h2",{id:"pickerviewprops"},"PickerViewProps"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"value"),Object(c.b)("td",null,Object(c.b)("code",null,"number[]")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u6570\u7ec4\u4e2d\u7684\u6570\u5b57\u4f9d\u6b21\u8868\u793a picker-view \u5185\u7684 picker-view-column \u9009\u62e9\u7684\u7b2c\u51e0\u9879\uff08\u4e0b\u6807\u4ece 0 \u5f00\u59cb\uff09\uff0c\u6570\u5b57\u5927\u4e8e picker-view-column \u53ef\u9009\u9879\u957f\u5ea6\u65f6\uff0c\u9009\u62e9\u6700\u540e\u4e00\u9879\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"indicatorStyle"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8bbe\u7f6e\u9009\u62e9\u5668\u4e2d\u95f4\u9009\u4e2d\u6846\u7684\u6837\u5f0f")),Object(c.b)("tr",null,Object(c.b)("td",null,"indicatorClass"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8bbe\u7f6e\u9009\u62e9\u5668\u4e2d\u95f4\u9009\u4e2d\u6846\u7684\u7c7b\u540d")),Object(c.b)("tr",null,Object(c.b)("td",null,"maskStyle"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8bbe\u7f6e\u8499\u5c42\u7684\u6837\u5f0f")),Object(c.b)("tr",null,Object(c.b)("td",null,"maskClass"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u8bbe\u7f6e\u8499\u5c42\u7684\u7c7b\u540d")),Object(c.b)("tr",null,Object(c.b)("td",null,"onChange"),Object(c.b)("td",null,Object(c.b)("code",null,"BaseEventOrigFunction<onChangeEventDetail>")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5f53\u6eda\u52a8\u9009\u62e9\uff0cvalue \u6539\u53d8\u65f6\u89e6\u53d1 change \u4e8b\u4ef6\uff0cevent.detail = ","{value: value}","\uff1bvalue\u4e3a\u6570\u7ec4\uff0c\u8868\u793a picker-view \u5185\u7684 picker-view-column \u5f53\u524d\u9009\u62e9\u7684\u662f\u7b2c\u51e0\u9879\uff08\u4e0b\u6807\u4ece 0 \u5f00\u59cb\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"onPickStart"),Object(c.b)("td",null,Object(c.b)("code",null,"BaseEventOrigFunction<any>")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5f53\u6eda\u52a8\u9009\u62e9\u5f00\u59cb\u65f6\u5019\u89e6\u53d1\u4e8b\u4ef6")),Object(c.b)("tr",null,Object(c.b)("td",null,"onPickEnd"),Object(c.b)("td",null,Object(c.b)("code",null,"BaseEventOrigFunction<any>")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u5f53\u6eda\u52a8\u9009\u62e9\u7ed3\u675f\u65f6\u5019\u89e6\u53d1\u4e8b\u4ef6")))),Object(c.b)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"PickerViewProps.value"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"PickerViewProps.indicatorStyle"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"PickerViewProps.indicatorClass"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"PickerViewProps.maskStyle"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"PickerViewProps.maskClass"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"PickerViewProps.onChange"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"PickerViewProps.onPickStart"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"PickerViewProps.onPickEnd"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))),Object(c.b)("h3",{id:"onchangeeventdetail"},"onChangeEventDetail"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"value"),Object(c.b)("td",null,Object(c.b)("code",null,"number[]"))))),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"PickerView"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}j.isMDXComponent=!0}}]);