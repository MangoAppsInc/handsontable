(window.webpackJsonp=window.webpackJsonp||[]).push([[5,16],{540:function(e,t,n){},545:function(e,t,n){"use strict";n.r(t);n(63);var a={name:"CodeSandboxIframe",props:["id","title","selectedFile"],computed:{srcUrl:function(){var e=encodeURIComponent(this.selectedFile),t="?fontsize=13&hidenavigation=1&&module=".concat(e,"&theme=").concat("light","&view=preview&runonclick=1");return"".concat("https://codesandbox.io/embed/").concat(this.id).concat(t)}}},o=n(91),i=Object(o.a)(a,(function(){var e=this.$createElement;return(this._self._c||e)("iframe",{staticClass:"codeSandboxIframe",attrs:{src:this.srcUrl,title:this.title,allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone;\n    midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}})}),[],!1,null,null,null);t.default=i.exports},587:function(e,t,n){"use strict";n(540)},602:function(e,t,n){"use strict";n.r(t);n(24),n(65);var a={name:"HelloWorld",props:["demos"],components:{CodeSandboxIframe:n(545).default},data:function(){return{selected:"javascript"}},methods:{getTabId:function(e){return e.replace(/\s/g,"").toLowerCase()},tabClicked:function(e){this.selected=e.tab.id},isSelected:function(e){return this.selected===e}}},o=(n(587),n(91)),i=Object(o.a)(a,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("tabs",{attrs:{options:{useUrlFragment:!1}},on:{changed:e.tabClicked}},e._l(this.demos,(function(t){return n("tab",{attrs:{name:t.name,id:e.getTabId(t.name)}},[e.isSelected(e.getTabId(t.name))?n("CodeSandboxIframe",{attrs:{id:t.codeSandboxId,title:t.title,selectedFile:t.selectedFile}}):e._e()],1)})),1)],1)}),[],!1,null,"939808c8",null);t.default=i.exports}}]);