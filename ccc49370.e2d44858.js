(window.webpackJsonp=window.webpackJsonp||[]).push([[1200],{1628:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(1649),c=t(1664),i=t(1634);var m=function(e){var a=e.nextItem,t=e.prevItem;return l.a.createElement("nav",{className:"pagination-nav"},l.a.createElement("div",{className:"pagination-nav__item"},t&&l.a.createElement(i.a,{className:"pagination-nav__link",to:t.permalink},l.a.createElement("div",{className:"pagination-nav__link--sublabel"},"Previous Post"),l.a.createElement("div",{className:"pagination-nav__link--label"},"\xab ",t.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&l.a.createElement(i.a,{className:"pagination-nav__link",to:a.permalink},l.a.createElement("div",{className:"pagination-nav__link--sublabel"},"Next Post"),l.a.createElement("div",{className:"pagination-nav__link--label"},a.title," \xbb"))))};a.default=function(e){var a=e.content,t=a.frontMatter,n=a.metadata,i=n.title,s=n.description,o=n.nextItem,v=n.prevItem,h=n.editUrl;return l.a.createElement(r.a,{title:i,description:s},a&&l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--8 col--offset-2"},l.a.createElement(c.a,{frontMatter:t,metadata:n,isBlogPostPage:!0},l.a.createElement(a,null)),l.a.createElement("div",null,h&&l.a.createElement("a",{href:h,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("svg",{fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 40 40",style:{marginRight:"0.3em",verticalAlign:"sub"}},l.a.createElement("g",null,l.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),"Edit this page")),(o||v)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement(m,{nextItem:o,prevItem:v}))))))}},1651:function(e,a,t){"use strict";var n=t(1),l=(t(1637),t(52),t(78),t(1632),t(9)),r=(t(1638),t(1639),t(1644),t(0)),c=t.n(r),i=t(1631),m=t.n(i),s=t(1634),o=t(1630),v=t(1633),h=t(1635),_=t(1652),u=t(1653),d=t(1640),E=t(1655),b=t(1645),g=t(1646),p=t(131),f=t.n(p);function k(e){var a=e.activeBasePath,t=e.activeRegxp,r=e.to,i=e.href,m=e.label,_=(e.position,Object(l.a)(e,["activeBasePath","activeRegxp","to","href","label","position"])),u=function(){var e,a=Object(o.a)().siteConfig.customFields.versions,t=void 0===a?[]:a,n=t[0],l=Object(h.d)(),r=t.find((function(e){return l.pathname.includes(e)}));return l.pathname.includes("/docs/next")&&(r="next"),[n,null!=(e=r)?e:n]}(),d=u[0],E=u[1];if(d!==E&&_.version&&(m=("next"===E?"":"v")+E),r&&r.startsWith("docs/")&&d!==E){var b=r.split("/"),g=b[0],p=b.slice(1);r=[g,E].concat(p).join("/");var f=a.split("/"),k=f[0],N=f.slice(1);a=[k,E].concat(N).join("/")}var j=Object(v.a)(r),M=Object(v.a)(a);return c.a.createElement(s.a,Object(n.a)({},i?{target:"_blank",rel:"noopener noreferrer",href:i}:Object.assign({isNavLink:!0,activeClassName:"navbar__link--active",to:j},a?{isActive:function(e,n){return t?new RegExp(a).test(n.pathname):n.pathname.startsWith(M)}}:null),_),m)}function N(e){var a=e.items,t=e.position,r=Object(l.a)(e,["items","position"]);return a?c.a.createElement("div",{className:m()("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===t,"dropdown--right":"right"===t})},c.a.createElement(k,Object(n.a)({className:"navbar__item navbar__link"},r),r.label),c.a.createElement("ul",{className:"dropdown__menu"},a.map((function(e,a){return c.a.createElement("li",{key:a},c.a.createElement(k,Object(n.a)({className:"navbar__item navbar__link"},e)))})))):c.a.createElement(k,Object(n.a)({},r,{className:m()(["navbar__item","navbar__link",r.className])}))}function j(e){var a=e.items,t=Object(l.a)(e,["items"]);return a?c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(k,Object(n.a)({className:"menu__link menu__link--sublist"},t),t.label),c.a.createElement("ul",{className:"menu__list"},a.map((function(e,a){return c.a.createElement("li",{className:"menu__list-item",key:a},c.a.createElement(k,Object(n.a)({className:"menu__link"},e)))})))):c.a.createElement("li",{className:"menu__list-item"},c.a.createElement(k,Object(n.a)({className:"menu__link"},t)))}a.a=function(){var e,a,t=Object(o.a)(),l=t.siteConfig.themeConfig,i=l.navbar,v=(i=void 0===i?{}:i).title,h=i.links,p=void 0===h?[]:h,k=i.hideOnScroll,M=void 0!==k&&k,w=l.disableDarkMode,O=void 0!==w&&w,z=t.isClient,x=Object(r.useState)(!1),C=x[0],y=x[1],I=Object(r.useState)(!1),T=I[0],B=I[1],P=Object(d.a)(),A=P.isDarkTheme,R=P.setLightTheme,D=P.setDarkTheme,L=Object(E.a)(M),S=L.navbarRef,J=L.isNavbarVisible,U=Object(g.a)(),F=U.logoLink,q=U.logoLinkProps,H=U.logoImageUrl,W=U.logoAlt;Object(b.a)(C);var V=Object(r.useCallback)((function(){y(!0)}),[y]),Y=Object(r.useCallback)((function(){y(!1)}),[y]),G=Object(r.useCallback)((function(e){return e.target.checked?D():R()}),[R,D]);return c.a.createElement("nav",{ref:S,className:m()("navbar","navbar--light","navbar--fixed-top",(e={"navbar-sidebar--show":C},e[f.a.navbarHideable]=M,e[f.a.navbarHidden]=!J,e))},c.a.createElement("div",{className:"navbar__inner"},c.a.createElement("div",{className:"navbar__items"},c.a.createElement("div",{"aria-label":"Navigation bar toggle",className:"navbar__toggle",role:"button",tabIndex:0,onClick:V,onKeyDown:V},c.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",viewBox:"0 0 30 30",role:"img",focusable:"false"},c.a.createElement("title",null,"Menu"),c.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))),c.a.createElement(s.a,Object(n.a)({className:"navbar__brand",to:F},q),null!=H&&c.a.createElement("img",{key:z,className:"navbar__logo",src:H,alt:W}),null!=v&&c.a.createElement("strong",{className:m()("navbar__title",(a={},a[f.a.hideLogoText]=T,a))},v)),p.filter((function(e){return"left"===e.position})).map((function(e,a){return c.a.createElement(N,Object(n.a)({},e,{key:a}))}))),c.a.createElement("div",{className:"navbar__items navbar__items--right"},p.filter((function(e){return"right"===e.position})).map((function(e,a){return c.a.createElement(N,Object(n.a)({},e,{key:a}))})),!O&&c.a.createElement(u.a,{className:f.a.displayOnlyInLargeViewport,"aria-label":"Dark mode toggle",checked:A,onChange:G}),c.a.createElement(_.a,{handleSearchBarToggle:B,isSearchBarExpanded:T}))),c.a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:Y}),c.a.createElement("div",{className:"navbar-sidebar"},c.a.createElement("div",{className:"navbar-sidebar__brand"},c.a.createElement(s.a,Object(n.a)({className:"navbar__brand",onClick:Y,to:F},q),null!=H&&c.a.createElement("img",{key:z,className:"navbar__logo",src:H,alt:W}),null!=v&&c.a.createElement("strong",{className:"navbar__title"},v)),!O&&C&&c.a.createElement(u.a,{"aria-label":"Dark mode toggle in sidebar",checked:A,onChange:G})),c.a.createElement("div",{className:"navbar-sidebar__items"},c.a.createElement("div",{className:"menu"},c.a.createElement("ul",{className:"menu__list"},p.map((function(e,a){return c.a.createElement(j,Object(n.a)({},e,{onClick:Y,key:a}))})))))))}},1654:function(e,a,t){"use strict";var n=t(0),l=t.n(n);a.a=function(){return l.a.createElement("footer",{className:"footer",id:"footer"},l.a.createElement("div",{className:"grid_c1 footer_cont"},l.a.createElement("div",{className:"footer_logo_container"},l.a.createElement("div",{className:"footer_logo"}),l.a.createElement("span",{className:"footer_designedby"})),l.a.createElement("div",{className:"footer_link_container"},l.a.createElement("div",{className:"footer_link"},l.a.createElement("h3",{className:"footer_link_tit footer_link_tit1"},"\u76f8\u5173\u8d44\u6e90"),l.a.createElement("p",null,l.a.createElement("a",{className:"link",href:"https://taro.jd.com/",target:"_blank"},"Taro")),l.a.createElement("p",null,l.a.createElement("a",{className:"link",href:"https://taro-ui.jd.com/",target:"_blank"},"Taro UI")),l.a.createElement("p",null,l.a.createElement("a",{className:"link",href:"https://at-ui.github.io/at-ui/#/zh",target:"_blank"},"At-UI")),l.a.createElement("p",null,l.a.createElement("a",{className:"link",href:"https://nerv.aotu.io/",target:"_blank"},"Nerv")),l.a.createElement("p",null,l.a.createElement("a",{className:"link",href:"https://athena.aotu.io/",target:"_blank"},"Athena"))),l.a.createElement("div",{className:"footer_link"},l.a.createElement("h3",{className:"footer_link_tit footer_link_tit2"},"\u793e\u533a"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/NervJS/taro/issues",target:"_blank"},"GitHub")),l.a.createElement("p",null,l.a.createElement("a",{href:"https://taro-club.jd.com",target:"_blank"},"Taro BBS")),l.a.createElement("p",{className:"footer_link_connect_wrap"},l.a.createElement("span",{className:"footer_link_connect footer_link_wechat"},"\u5fae\u4fe1",l.a.createElement("span",{className:"wechat_qrcode_icon"},l.a.createElement("svg",{t:"1554966525626",className:"icon svgicon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"2588","data-spm-anchor-id":"a313x.7781069.0.i0"},l.a.createElement("path",{d:"M240.071 241.095h59.278v59.278h-59.278v-59.278z",fill:"","p-id":"2589"}),l.a.createElement("path",{d:"M405.959 134.485h-272.611v272.611h106.723v47.445h59.278v-47.445h106.723v-59.278h47.445v-47.445h-47.445l-0.114-165.888zM346.795 347.819h-154.169v-154.055h154.055v154.055h0.114zM240.071 727.154h59.278v59.278h-59.278v-59.278zM726.016 241.095h59.278v59.278h-59.278v-59.278zM512.683 509.042v63.943h59.278v-59.165h47.445v-59.278h-47.445v-47.445h-59.278v101.945zM512.683 725.789v60.643h59.278v-106.723h47.445v-59.278h-106.723v105.358zM571.961 786.432h47.445v47.445h-47.445v-47.445zM453.405 833.877v59.165h118.557v-59.165h-118.557z",fill:"","p-id":"2590"}),l.a.createElement("path",{d:"M678.685 679.709h-59.278v106.723h106.61v-59.278h-47.331v-47.445zM726.016 893.042h166.002v-59.165h-106.723v-47.445h-59.278v106.61zM892.018 513.821v-59.278h-106.723v59.278h106.723zM832.739 727.154h59.278v59.278h-59.278v-59.278zM453.405 347.819h59.278v59.278h-59.278v-59.278zM726.016 454.542v-47.445h166.002v-272.611h-272.611v59.278h-106.723v47.445h106.723v59.165h-47.445v47.445h47.445v59.278h59.278v47.445h47.331zM678.685 193.763h154.055v154.055h-154.055v-154.055zM678.685 572.985h47.331v47.445h-47.331v-47.445zM785.294 679.709h-59.278v47.445h106.723v-106.723h59.278v-47.445h-106.723v106.723zM453.405 241.095h59.278v59.278h-59.278v-59.278zM299.349 513.821h47.445v59.165h-47.445v-59.165zM453.405 454.542h-106.61v59.278h59.165v59.165h47.445v-118.443z",fill:"","p-id":"2591"}),l.a.createElement("path",{d:"M405.959 786.432v-106.723h47.445v-59.278h-213.333v-106.61h-106.723v59.278h59.278v47.445h-59.278v272.611h272.611v-59.278h47.445v-47.445h-47.445zM346.795 833.877h-154.169v-154.169h154.055v154.169h0.114zM453.405 572.985h59.278v47.445h-59.278v-47.445zM619.406 513.821h59.278v59.165h-59.278v-59.165zM726.016 513.821h59.278v59.165h-59.278v-59.165z",fill:"","p-id":"2592"})))),l.a.createElement("span",{className:"footer_link_wechat_img"},l.a.createElement("img",{src:"https://camo.githubusercontent.com/10834a234b99a5880b5dff7c0ca7235e2a0772e7/687474703a2f2f696d6732302e333630627579696d672e636f6d2f7562612f6a66732f7432303139372f3238332f313638373136383837342f3133363034322f32623464383131662f35623330613635634e39643166303366312e706e67"})))),l.a.createElement("div",{className:"footer_link"},l.a.createElement("h3",{className:"footer_link_tit footer_link_tit3"},"\u5173\u4e8e\u6211\u4eec"),l.a.createElement("p",null,l.a.createElement("a",{href:"https://aotu.io/",target:"_blank"},"\u51f9\u51f8\u5b9e\u9a8c\u5ba4")),l.a.createElement("p",null,l.a.createElement("a",{href:"https://aotu.io/join/",target:"_blank"},"\u52a0\u5165\u6211\u4eec")),l.a.createElement("p",null,l.a.createElement("a",{href:"mailto:taro@jd.com?subject=\u3010Taro \u5408\u4f5c\u3011\u5408\u4f5c\u6807\u9898"},"\u8054\u7cfb\u6211\u4eec"))),l.a.createElement("div",{className:"footer_link"},l.a.createElement("h3",{className:"footer_link_tit footer_link_tit4"},"\u611f\u8c22"),l.a.createElement("p",null,l.a.createElement("a",{href:"http://jdc.jd.com/",target:"_blank"},"\u7528\u6237\u4f53\u9a8c\u8bbe\u8ba1\u90e8")),l.a.createElement("p",null,l.a.createElement("a",{href:"https://github.com/nervjs/taro#%E8%B4%A1%E7%8C%AE%E8%80%85%E4%BB%AC",target:"_blank"},"Taro \u8d21\u732e\u8005\u4eec"))))),l.a.createElement("div",{className:"copyright"},l.a.createElement("div",{className:"in"},"Copyright \xa9 ",(new Date).getFullYear(),". All Rights Reserved. \u7ca4ICP\u590715077732\u53f7-2")))}},1664:function(e,a,t){"use strict";t(78);var n=t(0),l=t.n(n),r=t(1631),c=t.n(r),i=t(1629),m=t(1634),s=t(1667),o=t(132),v=t.n(o),h=["January","February","March","April","May","June","July","August","September","October","November","December"];a.a=function(e){var a,t,n,r,o,_=e.children,u=e.frontMatter,d=e.metadata,E=e.truncated,b=e.isBlogPostPage,g=void 0!==b&&b,p=d.date,f=d.permalink,k=d.tags,N=d.readingTime,j=u.author,M=u.title,w=u.author_url||u.authorURL,O=u.author_title||u.authorTitle,z=u.author_image_url||u.authorImageURL;return l.a.createElement("article",{className:g?void 0:"margin-bottom--xl"},(a=g?"h1":"h2",t=p.substring(0,10).split("-"),n=t[0],r=h[parseInt(t[1],10)-1],o=parseInt(t[2],10),l.a.createElement("header",null,l.a.createElement(a,{className:c()("margin-bottom--sm",v.a.blogPostTitle)},g?M:l.a.createElement(m.a,{to:f},M)),l.a.createElement("div",{className:"margin-vert--md"},l.a.createElement("time",{dateTime:p,className:v.a.blogPostDate},r," ",o,", ",n," ",N&&l.a.createElement(l.a.Fragment,null," \xb7 ",Math.ceil(N)," min read"))),l.a.createElement("div",{className:"avatar margin-vert--md"},z&&l.a.createElement("a",{className:"avatar__photo-link avatar__photo",href:w,target:"_blank",rel:"noreferrer noopener"},l.a.createElement("img",{src:z,alt:j})),l.a.createElement("div",{className:"avatar__intro"},j&&l.a.createElement(l.a.Fragment,null,l.a.createElement("h4",{className:"avatar__name"},l.a.createElement("a",{href:w,target:"_blank",rel:"noreferrer noopener"},j)),l.a.createElement("small",{className:"avatar__subtitle"},O)))))),l.a.createElement("section",{className:"markdown"},l.a.createElement(i.a,{components:s.a},_)),(k.length>0||E)&&l.a.createElement("footer",{className:"row margin-vert--lg"},k.length>0&&l.a.createElement("div",{className:"col"},l.a.createElement("strong",null,"Tags:"),k.map((function(e){var a=e.label,t=e.permalink;return l.a.createElement(m.a,{key:t,className:"margin-horiz--sm",to:t},a)}))),E&&l.a.createElement("div",{className:"col text--right"},l.a.createElement(m.a,{to:d.permalink,"aria-label":"Read more about "+M},l.a.createElement("strong",null,"Read More")))))}}}]);