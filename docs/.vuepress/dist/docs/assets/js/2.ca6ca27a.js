(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{510:function(t,e,n){"use strict";n.d(e,"d",(function(){return r})),n.d(e,"a",(function(){return a})),n.d(e,"i",(function(){return o})),n.d(e,"f",(function(){return u})),n.d(e,"g",(function(){return c})),n.d(e,"h",(function(){return l})),n.d(e,"b",(function(){return f})),n.d(e,"e",(function(){return h})),n.d(e,"k",(function(){return p})),n.d(e,"l",(function(){return d})),n.d(e,"c",(function(){return g})),n.d(e,"j",(function(){return b}));n(24),n(65),n(273),n(66),n(172),n(170),n(64),n(40),n(5),n(41),n(51),n(54),n(274);var r=/#.*$/,i=/\.(md|html)$/,a=/\/$/,o=/^[a-z]+:/i;function s(t){return decodeURI(t).replace(r,"").replace(i,"")}function u(t){return o.test(t)}function c(t){return/^mailto:/.test(t)}function l(t){return/^tel:/.test(t)}function f(t){if(u(t))return t;var e=t.match(r),n=e?e[0]:"",i=s(t);return a.test(i)?t:i+".html"+n}function h(t,e){var n=decodeURIComponent(t.hash),i=function(t){var e=t.match(r);if(e)return e[0]}(e);return(!i||n===i)&&s(t.path)===s(e)}function p(t,e,n){if(u(e))return{type:"external",path:e};n&&(e=function(t,e,n){var r=t.charAt(0);if("/"===r)return t;if("?"===r||"#"===r)return e+t;var i=e.split("/");n&&i[i.length-1]||i.pop();for(var a=t.replace(/^\//,"").split("/"),o=0;o<a.length;o++){var s=a[o];".."===s?i.pop():"."!==s&&i.push(s)}""!==i[0]&&i.unshift("");return i.join("/")}(e,n));for(var r=s(e),i=0;i<t.length;i++)if(s(t[i].regularPath)===r)return Object.assign({},t[i],{type:"page",path:f(t[i].path)});return console.error('[vuepress] No matching page found for sidebar item "'.concat(e,'"')),{}}function d(t,e,n,r){var i=n.pages,a=n.themeConfig,o=r&&a.locales&&a.locales[r]||a;if("auto"===(t.frontmatter.sidebar||o.sidebar||a.sidebar))return v(t);var s=o.sidebar||a.sidebar;if(s){var u=function(t,e){if(Array.isArray(e))return{base:"/",config:e};for(var n in e)if(0===(r=t,/(\.html|\/)$/.test(r)?r:r+"/").indexOf(encodeURI(n)))return{base:n,config:e[n]};var r;return{}}(e,s),c=u.base,l=u.config;return"auto"===l?v(t):l?l.map((function(t){return function t(e,n,r){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;if("string"==typeof e)return p(n,e,r);if(Array.isArray(e))return Object.assign(p(n,e[0],r),{title:e[1]});var a=e.children||[];return 0===a.length&&e.path?Object.assign(p(n,e.path,r),{title:e.title}):{type:"group",path:e.path,title:e.title,sidebarDepth:e.sidebarDepth,initialOpenGroupIndex:e.initialOpenGroupIndex,children:a.map((function(e){return t(e,n,r,i+1)})),collapsable:!1!==e.collapsable}}(t,i,c)})):[]}return[]}function v(t){var e=g(t.headers||[]);return[{type:"group",collapsable:!1,title:t.title,path:null,children:e.map((function(e){return{type:"auto",title:e.title,basePath:t.path,path:t.path+"#"+e.slug,children:e.children||[]}}))}]}function g(t){var e;return(t=t.map((function(t){return Object.assign({},t)}))).forEach((function(t){2===t.level?e=t:e&&(e.children||(e.children=[])).push(t)})),t.filter((function(t){return 2===t.level}))}function b(t){return Object.assign(t,{type:t.items&&t.items.length?"links":"link"})}},513:function(t,e,n){"use strict";var r=n(1),i=n(514);r({target:"String",proto:!0,forced:n(515)("link")},{link:function(t){return i(this,"a","href",t)}})},514:function(t,e,n){var r=n(3),i=n(39),a=n(19),o=/"/g,s=r("".replace);t.exports=function(t,e,n,r){var u=a(i(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+s(a(r),o,"&quot;")+'"'),c+">"+u+"</"+e+">"}},515:function(t,e,n){var r=n(2);t.exports=function(t){return r((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},520:function(t,e,n){},521:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},523:function(t,e,n){},524:function(t,e,n){},530:function(t,e){t.exports=function(t){return null==t}},532:function(t,e,n){},534:function(t,e,n){},544:function(t,e,n){"use strict";n.r(e);n(171),n(5);var r=n(595),i=(n(580),n(24),n(66),n(64),n(510));function a(t,e,n,r,i){var a={props:{to:e,activeClass:"",exactActiveClass:""},class:{active:r,"sidebar-link":!0}};return i>2&&(a.style={"padding-left":i+"rem"}),t("RouterLink",a,n)}function o(t,e,n,r,s){var u=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1;return!e||u>s?null:t("ul",{class:"sidebar-sub-headers"},e.map((function(e){var c=Object(i.e)(r,n+"#"+e.slug);return t("li",{class:"sidebar-sub-header"},[a(t,n+"#"+e.slug,e.title,c,e.level-1),o(t,e.children,n,r,s,u+1)])})))}var s={functional:!0,props:["item","sidebarDepth"],render:function(t,e){var n=e.parent,r=n.$page,s=(n.$site,n.$route),u=n.$themeConfig,c=n.$themeLocaleConfig,l=e.props,f=l.item,h=l.sidebarDepth,p=Object(i.e)(s,f.path),d="auto"===f.type?p||f.children.some((function(t){return Object(i.e)(s,f.basePath+"#"+t.slug)})):p,v="external"===f.type?function(t,e,n){return t("a",{attrs:{href:e,target:"_blank",rel:"noopener noreferrer"},class:{"sidebar-link":!0}},[n,t("OutboundLink")])}(t,f.path,f.title||f.path):a(t,f.path,f.title||f.path,d),g=[r.frontmatter.sidebarDepth,h,c.sidebarDepth,u.sidebarDepth,1].find((function(t){return void 0!==t})),b=c.displayAllHeaders||u.displayAllHeaders;return"auto"===f.type?[v,o(t,f.children,f.basePath,s,g)]:(d||b)&&f.headers&&!i.d.test(f.path)?[v,o(t,Object(i.c)(f.headers),f.path,s,g)]:v}},u=(n(581),n(91)),c=Object(u.a)(s,void 0,void 0,!1,null,null,null).exports;function l(t,e){if("group"===e.type){var n=e.path&&Object(i.e)(t,e.path),r=e.children.some((function(e){return"group"===e.type?l(t,e):"page"===e.type&&Object(i.e)(t,e.path)}));return n||r}return!1}var f={name:"SidebarLinks",components:{SidebarGroup:r.a,SidebarLink:c},props:["items","depth","sidebarDepth","initialOpenGroupIndex"],data:function(){return{openGroupIndex:this.initialOpenGroupIndex||0}},watch:{$route:function(){this.refreshIndex()}},created:function(){this.refreshIndex()},methods:{refreshIndex:function(){var t=function(t,e){for(var n=0;n<e.length;n++){var r=e[n];if(l(t,r))return n}return-1}(this.$route,this.items);t>-1&&(this.openGroupIndex=t)},toggleGroup:function(t){this.openGroupIndex=t===this.openGroupIndex?-1:t},isActive:function(t){return Object(i.e)(this.$route,t.regularPath)}}},h=Object(u.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.items.length?n("ul",{staticClass:"sidebar-links"},t._l(t.items,(function(e,r){return n("li",{key:r},["group"===e.type?n("SidebarGroup",{attrs:{item:e,open:r===t.openGroupIndex,collapsable:e.collapsable||e.collapsible,depth:t.depth},on:{toggle:function(e){return t.toggleGroup(r)}}}):n("SidebarLink",{attrs:{"sidebar-depth":t.sidebarDepth,item:e}})],1)})),0):t._e()}),[],!1,null,null,null);e.default=h.exports},551:function(t,e,n){"use strict";var r={name:"DropdownTransition",methods:{setHeight:function(t){t.style.height=t.scrollHeight+"px"},unsetHeight:function(t){t.style.height=""}}},i=(n(568),n(91)),a=Object(i.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("transition",{attrs:{name:"dropdown"},on:{enter:this.setHeight,"after-enter":this.unsetHeight,"before-leave":this.setHeight}},[this._t("default")],2)}),[],!1,null,null,null);e.a=a.exports},553:function(t,e,n){"use strict";n(520)},554:function(t,e,n){var r=n(1),i=n(2),a=n(26),o=n(52).f,s=n(7),u=i((function(){o(1)}));r({target:"Object",stat:!0,forced:!s||u,sham:!s},{getOwnPropertyDescriptor:function(t,e){return o(a(t),e)}})},555:function(t,e,n){var r=n(1),i=n(7),a=n(178).f;r({target:"Object",stat:!0,forced:Object.defineProperties!==a,sham:!i},{defineProperties:a})},556:function(t,e,n){"use strict";var r=n(1),i=n(557).trim;r({target:"String",proto:!0,forced:n(558)("trim")},{trim:function(){return i(this)}})},557:function(t,e,n){var r=n(3),i=n(39),a=n(19),o=n(521),s=r("".replace),u="["+o+"]",c=RegExp("^"+u+u+"*"),l=RegExp(u+u+"*$"),f=function(t){return function(e){var n=a(i(e));return 1&t&&(n=s(n,c,"")),2&t&&(n=s(n,l,"")),n}};t.exports={start:f(1),end:f(2),trim:f(3)}},558:function(t,e,n){var r=n(94).PROPER,i=n(2),a=n(521);t.exports=function(t){return i((function(){return!!a[t]()||"​᠎"!=="​᠎"[t]()||r&&a[t].name!==t}))}},559:function(t,e,n){"use strict";var r,i=n(1),a=n(3),o=n(52).f,s=n(70),u=n(19),c=n(182),l=n(39),f=n(183),h=n(23),p=a("".endsWith),d=a("".slice),v=Math.min,g=f("endsWith");i({target:"String",proto:!0,forced:!!(h||g||(r=o(String.prototype,"endsWith"),!r||r.writable))&&!g},{endsWith:function(t){var e=u(l(this));c(t);var n=arguments.length>1?arguments[1]:void 0,r=e.length,i=void 0===n?r:v(s(n),r),a=u(t);return p?p(e,a,i):d(e,i-a.length,i)===a}})},560:function(t,e,n){"use strict";var r=n(1),i=n(3),a=n(31),o=n(25),s=n(42),u=n(19),c=n(2),l=n(561),f=n(73),h=n(562),p=n(563),d=n(69),v=n(564),g=[],b=i(g.sort),m=i(g.push),x=c((function(){g.sort(void 0)})),y=c((function(){g.sort(null)})),_=f("sort"),O=!c((function(){if(d)return d<70;if(!(h&&h>3)){if(p)return!0;if(v)return v<603;var t,e,n,r,i="";for(t=65;t<76;t++){switch(e=String.fromCharCode(t),t){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)g.push({k:e+r,v:n})}for(g.sort((function(t,e){return e.v-t.v})),r=0;r<g.length;r++)e=g[r].k.charAt(0),i.charAt(i.length-1)!==e&&(i+=e);return"DGBEFHACIJK"!==i}}));r({target:"Array",proto:!0,forced:x||!y||!_||!O},{sort:function(t){void 0!==t&&a(t);var e=o(this);if(O)return void 0===t?b(e):b(e,t);var n,r,i=[],c=s(e);for(r=0;r<c;r++)r in e&&m(i,e[r]);for(l(i,function(t){return function(e,n){return void 0===n?-1:void 0===e?1:void 0!==t?+t(e,n)||0:u(e)>u(n)?1:-1}}(t)),n=i.length,r=0;r<n;)e[r]=i[r++];for(;r<c;)delete e[r++];return e}})},561:function(t,e,n){var r=n(179),i=Math.floor,a=function(t,e){var n=t.length,u=i(n/2);return n<8?o(t,e):s(t,a(r(t,0,u),e),a(r(t,u),e),e)},o=function(t,e){for(var n,r,i=t.length,a=1;a<i;){for(r=a,n=t[a];r&&e(t[r-1],n)>0;)t[r]=t[--r];r!==a++&&(t[r]=n)}return t},s=function(t,e,n,r){for(var i=e.length,a=n.length,o=0,s=0;o<i||s<a;)t[o+s]=o<i&&s<a?r(e[o],n[s])<=0?e[o++]:n[s++]:o<i?e[o++]:n[s++];return t};t.exports=a},562:function(t,e,n){var r=n(67).match(/firefox\/(\d+)/i);t.exports=!!r&&+r[1]},563:function(t,e,n){var r=n(67);t.exports=/MSIE|Trident/.test(r)},564:function(t,e,n){var r=n(67).match(/AppleWebKit\/(\d+)\./);t.exports=!!r&&+r[1]},565:function(t,e,n){"use strict";var r=n(1),i=n(0),a=n(130),o=n(93),s=n(42),u=n(25),c=n(180),l=n(71),f=n(95)("splice"),h=i.TypeError,p=Math.max,d=Math.min;r({target:"Array",proto:!0,forced:!f},{splice:function(t,e){var n,r,i,f,v,g,b=u(this),m=s(b),x=a(t,m),y=arguments.length;if(0===y?n=r=0:1===y?(n=0,r=m-x):(n=y-2,r=d(p(o(e),0),m-x)),m+n-r>9007199254740991)throw h("Maximum allowed length exceeded");for(i=c(b,r),f=0;f<r;f++)(v=x+f)in b&&l(i,f,b[v]);if(i.length=r,n<r){for(f=x;f<m-r;f++)g=f+n,(v=f+r)in b?b[g]=b[v]:delete b[g];for(f=m;f>m-r+n;f--)delete b[f-1]}else if(n>r)for(f=m-r;f>x;f--)g=f+n-1,(v=f+r-1)in b?b[g]=b[v]:delete b[g];for(f=0;f<n;f++)b[f+x]=arguments[f+2];return b.length=m-r+n,i}})},567:function(t,e,n){"use strict";n(523)},568:function(t,e,n){"use strict";n(524)},573:function(t,e,n){var r=n(3),i=n(16),a=Date.prototype,o=r(a.toString),s=r(a.getTime);"Invalid Date"!=String(new Date(NaN))&&i(a,"toString",(function(){var t=s(this);return t==t?o(this):"Invalid Date"}))},574:function(t,e,n){var r=n(1),i=n(0),a=n(3),o=i.Date,s=a(o.prototype.getTime);r({target:"Date",stat:!0},{now:function(){return s(new o)}})},577:function(t,e,n){var r=n(74),i=n(33),a=n(55);t.exports=function(t){return"string"==typeof t||!i(t)&&a(t)&&"[object String]"==r(t)}},578:function(t,e,n){"use strict";n(532)},580:function(t,e,n){"use strict";var r=n(1),i=n(72).find,a=n(177),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),r({target:"Array",proto:!0,forced:o},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),a("find")},581:function(t,e,n){"use strict";n(534)},592:function(t,e,n){"use strict";var r={name:"Home",components:{NavLink:n(511).a},computed:{data:function(){return this.$page.frontmatter},actionLink:function(){return{link:this.data.actionLink,text:this.data.actionText}}}},i=(n(553),n(91)),a=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"home",attrs:{"aria-labelledby":null!==t.data.heroText?"main-title":null}},[n("header",{staticClass:"hero"},[t.data.heroImage?n("img",{attrs:{src:t.$withBase(t.data.heroImage),alt:t.data.heroAlt||"hero"}}):t._e(),t._v(" "),null!==t.data.heroText?n("h1",{attrs:{id:"main-title"}},[t._v("\n      "+t._s(t.data.heroText||t.$title||"Hello")+"\n    ")]):t._e(),t._v(" "),null!==t.data.tagline?n("p",{staticClass:"description"},[t._v("\n      "+t._s(t.data.tagline||t.$description||"Welcome to your VuePress site")+"\n    ")]):t._e(),t._v(" "),t.data.actionText&&t.data.actionLink?n("p",{staticClass:"action"},[n("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()]),t._v(" "),t.data.features&&t.data.features.length?n("div",{staticClass:"features"},t._l(t.data.features,(function(e,r){return n("div",{key:r,staticClass:"feature"},[n("h2",[t._v(t._s(e.title))]),t._v(" "),n("p",[t._v(t._s(e.details))])])})),0):t._e(),t._v(" "),n("Content",{staticClass:"theme-default-content custom"}),t._v(" "),t.data.footer?n("div",{staticClass:"footer"},[t._v("\n    "+t._s(t.data.footer)+"\n  ")]):n("Content",{staticClass:"footer",attrs:{"slot-key":"footer"}})],1)}),[],!1,null,null,null).exports,o=n(591),s=n(593),u=n(546),c=n(510),l={name:"Layout",components:{Home:a,Page:s.a,Sidebar:u.a,Navbar:o.a},data:function(){return{isSidebarOpen:!1}},computed:{shouldShowNavbar:function(){var t=this.$site.themeConfig;return!1!==this.$page.frontmatter.navbar&&!1!==t.navbar&&(this.$title||t.logo||t.repo||t.nav||this.$themeLocaleConfig.nav)},shouldShowSidebar:function(){var t=this.$page.frontmatter;return!t.home&&!1!==t.sidebar&&this.sidebarItems.length},sidebarItems:function(){return Object(c.l)(this.$page,this.$page.regularPath,this.$site,this.$localePath)},pageClasses:function(){var t=this.$page.frontmatter.pageClass;return[{"no-navbar":!this.shouldShowNavbar,"sidebar-open":this.isSidebarOpen,"no-sidebar":!this.shouldShowSidebar},t]}},mounted:function(){var t=this;this.$router.afterEach((function(){t.isSidebarOpen=!1}))},methods:{toggleSidebar:function(t){this.isSidebarOpen="boolean"==typeof t?t:!this.isSidebarOpen,this.$emit("toggle-sidebar",this.isSidebarOpen)},onTouchStart:function(t){this.touchStart={x:t.changedTouches[0].clientX,y:t.changedTouches[0].clientY}},onTouchEnd:function(t){var e=t.changedTouches[0].clientX-this.touchStart.x,n=t.changedTouches[0].clientY-this.touchStart.y;Math.abs(e)>Math.abs(n)&&Math.abs(e)>40&&(e>0&&this.touchStart.x<=80?this.toggleSidebar(!0):this.toggleSidebar(!1))}}},f=Object(i.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"theme-container",class:t.pageClasses,on:{touchstart:t.onTouchStart,touchend:t.onTouchEnd}},[t.shouldShowNavbar?n("Navbar",{on:{"toggle-sidebar":t.toggleSidebar}}):t._e(),t._v(" "),n("div",{staticClass:"sidebar-mask",on:{click:function(e){return t.toggleSidebar(!1)}}}),t._v(" "),n("Sidebar",{attrs:{items:t.sidebarItems},on:{"toggle-sidebar":t.toggleSidebar},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("sidebar-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("sidebar-bottom")]},proxy:!0}],null,!0)}),t._v(" "),t.$page.frontmatter.home?n("Home"):n("Page",{attrs:{"sidebar-items":t.sidebarItems},scopedSlots:t._u([{key:"top",fn:function(){return[t._t("page-top")]},proxy:!0},{key:"bottom",fn:function(){return[t._t("page-bottom")]},proxy:!0}],null,!0)})],1)}),[],!1,null,null,null);e.a=f.exports},594:function(t,e,n){"use strict";var r=n(510),i=n(577),a=n.n(i),o=n(530),s=n.n(o),u={name:"PageNav",props:["sidebarItems"],computed:{prev:function(){return l(c.PREV,this)},next:function(){return l(c.NEXT,this)}}};var c={NEXT:{resolveLink:function(t,e){return f(t,e,1)},getThemeLinkConfig:function(t){return t.nextLinks},getPageLinkConfig:function(t){return t.frontmatter.next}},PREV:{resolveLink:function(t,e){return f(t,e,-1)},getThemeLinkConfig:function(t){return t.prevLinks},getPageLinkConfig:function(t){return t.frontmatter.prev}}};function l(t,e){var n=e.$themeConfig,i=e.$page,o=e.$route,u=e.$site,c=e.sidebarItems,l=t.resolveLink,f=t.getThemeLinkConfig,h=t.getPageLinkConfig,p=f(n),d=h(i),v=s()(d)?p:d;return!1===v?void 0:a()(v)?Object(r.k)(u.pages,v,o.path):l(i,c)}function f(t,e,n){var r=[];!function t(e,n){for(var r=0,i=e.length;r<i;r++)"group"===e[r].type?t(e[r].children||[],n):n.push(e[r])}(e,r);for(var i=0;i<r.length;i++){var a=r[i];if("page"===a.type&&a.path===decodeURIComponent(t.path))return r[i+n]}}var h=u,p=(n(578),n(91)),d=Object(p.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.prev||t.next?n("div",{staticClass:"page-nav"},[n("p",{staticClass:"inner"},[t.prev?n("span",{staticClass:"prev"},[t._v("\n      ←\n      "),"external"===t.prev.type?n("a",{staticClass:"prev",attrs:{href:t.prev.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n        "+t._s(t.prev.title||t.prev.path)+"\n      ")])],1):t._e(),t._v(" "),t.next?n("span",{staticClass:"next"},["external"===t.next.type?n("a",{attrs:{href:t.next.path,target:"_blank",rel:"noopener noreferrer"}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n\n        "),n("OutboundLink")],1):n("RouterLink",{attrs:{to:t.next.path}},[t._v("\n        "+t._s(t.next.title||t.next.path)+"\n      ")]),t._v("\n      →\n    ")],1):t._e()])]):t._e()}),[],!1,null,null,null);e.a=d.exports},596:function(t,e,n){"use strict";n(567);var r=n(91),i=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar-button",on:{click:function(e){return t.$emit("toggle-sidebar")}}},[n("svg",{staticClass:"icon",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",viewBox:"0 0 448 512"}},[n("path",{attrs:{fill:"currentColor",d:"M436 124H12c-6.627 0-12-5.373-12-12V80c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12zm0 160H12c-6.627 0-12-5.373-12-12v-32c0-6.627 5.373-12 12-12h424c6.627 0 12 5.373 12 12v32c0 6.627-5.373 12-12 12z"}})])])}),[],!1,null,null,null);e.a=i.exports},597:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n(173),n(32),n(51),n(5),n(554),n(40),n(41),n(279),n(555),n(92);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}}}]);