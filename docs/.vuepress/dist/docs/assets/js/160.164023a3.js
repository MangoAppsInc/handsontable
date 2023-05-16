(window.webpackJsonp=window.webpackJsonp||[]).push([[160],{748:function(t,a,e){"use strict";e.r(a);var s=e(91),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"locale"}},[e("span",{staticClass:"header-framework"},[t._v("JavaScript Data Grid")]),e("a",{staticClass:"header-anchor",attrs:{href:"#locale"}}),t._v(" Locale")]),t._v(" "),e("p",[t._v("Configure Handsontable's locale settings, to properly handle locale-related data and actions such as filtering, searching, or sorting.")]),t._v(" "),e("p"),e("div",{staticClass:"table-of-contents"},[e("div",{staticClass:"toc-container-header"},[t._v("In this article")]),e("ul",[e("li",[e("a",{attrs:{href:"#overview"}},[t._v("Overview")])]),e("li",[e("a",{attrs:{href:"#set-the-grid-s-locale"}},[t._v("Set the grid's locale")])]),e("li",[e("a",{attrs:{href:"#set-a-column-s-locale"}},[t._v("Set a column's locale")])]),e("li",[e("a",{attrs:{href:"#related-articles"}},[t._v("Related articles")]),e("ul",[e("li",[e("a",{attrs:{href:"#related-guides"}},[t._v("Related guides")])]),e("li",[e("a",{attrs:{href:"#related-api-reference"}},[t._v("Related API reference")])])])])])]),e("p"),t._v(" "),e("h2",{attrs:{id:"overview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#overview"}}),t._v(" Overview")]),t._v(" "),e("p",[t._v("Handsontable's locale settings affect certain actions performed on your data, such as:")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/javascript-data-grid/column-filter/"}},[t._v("Filtering")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/javascript-data-grid/searching-values/"}},[t._v("Searching")])],1),t._v(" "),e("li",[t._v("Comparing locale-based data")])]),t._v(" "),e("p",[t._v("Without a properly-set locale, the above operations can work incorrectly.")]),t._v(" "),e("p",[t._v("You can configure your locale settings, using the "),e("RouterLink",{attrs:{to:"/javascript-data-grid/api/options/#locale"}},[e("code",[t._v("locale")])]),t._v(" configuration option.")],1),t._v(" "),e("p",[t._v("You can set the "),e("RouterLink",{attrs:{to:"/javascript-data-grid/api/options/#locale"}},[e("code",[t._v("locale")])]),t._v(" option to any valid and canonicalized Unicode BCP 47 locale tag. By default, Handsontable's locale is "),e("code",[t._v("en-US")]),t._v(".")],1),t._v(" "),e("p",[t._v("You can configure the locale setting:")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"#set-the-grid-s-locale"}},[t._v("For the entire grid")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#set-a-column-s-locale"}},[t._v("For individual columns")])])]),t._v(" "),e("h2",{attrs:{id:"set-the-grid-s-locale"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-the-grid-s-locale"}}),t._v(" Set the grid's locale")]),t._v(" "),e("p",[t._v("To configure the locale of the entire grid, set the "),e("RouterLink",{attrs:{to:"/javascript-data-grid/api/options/#locale"}},[e("code",[t._v("locale")])]),t._v(" configuration option as a top-level grid option:")],1),t._v(" "),e("p"),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hot "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Handsontable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("container"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set the entire grid's locale to Polish")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("locale")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pl-PL'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p"),t._v(" "),e("p"),t._v(" "),e("p",[t._v("You can set the "),e("RouterLink",{attrs:{to:"/javascript-data-grid/api/options/#locale"}},[e("code",[t._v("locale")])]),t._v(" option to any valid and canonicalized Unicode BCP 47 locale tag.")],1),t._v(" "),e("h2",{attrs:{id:"set-a-column-s-locale"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#set-a-column-s-locale"}}),t._v(" Set a column's locale")]),t._v(" "),e("p",[t._v("To configure the locale of an individual column, set the "),e("RouterLink",{attrs:{to:"/javascript-data-grid/api/options/#locale"}},[e("code",[t._v("locale")])]),t._v(" configuration option as a mid-level column option:")],1),t._v(" "),e("p"),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" hot "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Handsontable")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("container"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("columns")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set the first column's locale to Polish")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("locale")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pl-PL'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set the second column's locale to German")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("locale")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'de-DE'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// set the third column's locale to Japanese")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("locale")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ja-JP'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p"),t._v(" "),e("p"),t._v(" "),e("h2",{attrs:{id:"related-articles"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#related-articles"}}),t._v(" Related articles")]),t._v(" "),e("h3",{attrs:{id:"related-guides"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#related-guides"}}),t._v(" Related guides")]),t._v(" "),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/javascript-data-grid/language/"}},[t._v("Language")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/javascript-data-grid/layout-direction/"}},[t._v("Layout direction")])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/javascript-data-grid/ime-support/"}},[t._v("IME support")])],1)]),t._v(" "),e("h3",{attrs:{id:"related-api-reference"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#related-api-reference"}}),t._v(" Related API reference")]),t._v(" "),e("ul",[e("li",[t._v("Configuration options:\n"),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/javascript-data-grid/api/options/#language"}},[e("code",[t._v("language")])])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/javascript-data-grid/api/options/#layoutdirection"}},[e("code",[t._v("layoutDirection")])])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/javascript-data-grid/api/options/#locale"}},[e("code",[t._v("locale")])])],1)])]),t._v(" "),e("li",[t._v("Core methods:\n"),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/javascript-data-grid/api/core/#getdirectionfactor"}},[e("code",[t._v("getDirectionFactor()")])])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/javascript-data-grid/api/core/#gettranslatedphrase"}},[e("code",[t._v("getTranslatedPhrase()")])])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/javascript-data-grid/api/core/#isltr"}},[e("code",[t._v("isLtr()")])])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/javascript-data-grid/api/core/#isrtl"}},[e("code",[t._v("isRtl()")])])],1)])]),t._v(" "),e("li",[t._v("Hooks:\n"),e("ul",[e("li",[e("RouterLink",{attrs:{to:"/javascript-data-grid/api/hooks/#afterlanguagechange"}},[e("code",[t._v("afterLanguageChange")])])],1),t._v(" "),e("li",[e("RouterLink",{attrs:{to:"/javascript-data-grid/api/hooks/#beforelanguagechange"}},[e("code",[t._v("beforeLanguageChange")])])],1)])])])])}),[],!1,null,null,null);a.default=r.exports}}]);