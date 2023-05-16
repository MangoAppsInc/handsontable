(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{871:function(t,a,s){"use strict";s.r(a);var n=s(91),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"column-menu"}},[s("span",{staticClass:"header-framework"},[t._v("React Data Grid")]),s("a",{staticClass:"header-anchor",attrs:{href:"#column-menu"}}),t._v(" Column menu")]),t._v(" "),s("p",[t._v("Display a configurable dropdown menu, triggered by clicking on a button in a column header.")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("div",{staticClass:"toc-container-header"},[t._v("In this article")]),s("ul",[s("li",[s("a",{attrs:{href:"#overview"}},[t._v("Overview")])]),s("li",[s("a",{attrs:{href:"#quick-setup"}},[t._v("Quick setup")])]),s("li",[s("a",{attrs:{href:"#plugin-configuration"}},[t._v("Plugin configuration")])]),s("li",[s("a",{attrs:{href:"#related-articles"}},[t._v("Related articles")]),s("ul",[s("li",[s("a",{attrs:{href:"#related-guides"}},[t._v("Related guides")])]),s("li",[s("a",{attrs:{href:"#related-api-reference"}},[t._v("Related API reference")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}}),t._v(" Overview")]),t._v(" "),s("p",[t._v("The "),s("RouterLink",{attrs:{to:"/react-data-grid/api/dropdown-menu/"}},[s("code",[t._v("DropdownMenu")])]),t._v(" plugin enables you to add a configurable dropdown menu to the table's column headers.\nThe dropdown menu acts like the "),s("strong",[t._v("Context Menu")]),t._v(" but is triggered by clicking the button in the header.")],1),t._v(" "),s("h2",{attrs:{id:"quick-setup"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#quick-setup"}}),t._v(" Quick setup")]),t._v(" "),s("p",[t._v("To enable the plugin, set the "),s("RouterLink",{attrs:{to:"/react-data-grid/api/options/#dropdownmenu"}},[s("code",[t._v("dropdownMenu")])]),t._v(" configuration option to "),s("code",[t._v("true")]),t._v(" when initializing Handsontable.")],1),t._v(" "),s("p"),t._v(" "),s("p"),t._v(" "),s("form",{staticClass:"form-jsfiddle-external",attrs:{action:"https://jsfiddle.net/api/post/library/pure/",method:"post",target:"_blank"}},[s("input",{attrs:{type:"hidden",name:"title",readOnly:"",value:"Handsontable example"}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"wrap",readOnly:"",value:"d"}}),t._v(" "),s("textarea",{pre:!0,attrs:{class:"hidden",name:"js",readOnly:""}},[t._v("import { HotTable } from '@handsontable/react';\nimport { registerAllModules } from 'handsontable/registry';\nimport 'handsontable/dist/handsontable.full.min.css';\n\n// register Handsontable's modules\nregisterAllModules();\n\nexport const ExampleComponent = () => {\n  return (\n    <HotTable\n      data={[\n        ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1'],\n        ['A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2'],\n        ['A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3'],\n      ]}\n      colHeaders={true}\n      dropdownMenu={true}\n      height=\"auto\"\n      licenseKey=\"non-commercial-and-evaluation\"\n    />\n  );\n};\n\nReactDOM.render(<ExampleComponent />, document.getElementById('example1'));\n")]),t._v(" "),s("textarea",{pre:!0,attrs:{class:"hidden",name:"html",readOnly:""}},[t._v('<script src="https://cdn.jsdelivr.net/npm/handsontable@latest/dist/handsontable.full.min.js"><\/script>\n<link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/handsontable@latest/dist/handsontable.full.min.css" /> \n<script src="https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js"><\/script>\n<script src="https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js"><\/script>\n<script src="https://cdn.jsdelivr.net/npm/@handsontable/react@latest/dist/react-handsontable.js"><\/script>\n<script src="http://localhost:8080/docs/scripts/fixer.js"><\/script>\n\n<div id="example1" class="hot "></div>\n      ')]),t._v(" "),s("textarea",{pre:!0,attrs:{class:"hidden",name:"css",readOnly:""}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"panel_css",value:"1",readOnly:""}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"panel_js",value:"3",readOnly:""}}),t._v(" "),s("div",{staticClass:"js-fiddle-link"},[s("button",{attrs:{type:"submit"}},[t._v("Edit\n          "),s("svg",{staticClass:"icon outbound",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"}},[s("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,\n            1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),t._v(" "),s("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})])])])]),t._v(" "),s("tabs",{class:t.$parent.$parent.addClassIfPreviewTabIsSelected("example1","selected-preview"),attrs:{options:{useUrlFragment:!1,defaultTabHash:"preview-tab-example1"},"cache-lifetime":"0"},on:{changed:function(a){for(var s,n=arguments.length,e=Array(n);n--;)e[n]=arguments[n];return(s=t.$parent.$parent).codePreviewTabChanged.apply(s,e.concat(["example1"]))}}},[s("tab",{attrs:{name:"Preview",id:"preview-tab-example1"}},[s("style",{pre:!0}),t._v(" "),t.$parent.$parent.isScriptLoaderActivated("example1")?[s("div",{pre:!0},[s("div",{pre:!0,attrs:{"data-preset-type":"react","data-example-id":"example1"}},[s("div",{pre:!0,attrs:{id:"example1",class:"hot "}})])])]:t._e(),t._v(" "),t.$parent.$parent.isScriptLoaderActivated("example1")?s("ScriptLoader",{attrs:{code:"useHandsontable('next',%20function()%7B%22use%20strict%22;%0A%0AObject.defineProperty(exports,%20%22__esModule%22,%20%7B%0A%20%20value:%20true%0A%7D);%0Aexports.ExampleComponent%20=%20void%200;%0A%0Avar%20_react%20=%20require(%22@handsontable/react%22);%0A%0Avar%20_registry%20=%20require(%22handsontable/registry%22);%0A%0Arequire(%22handsontable/dist/handsontable.full.min.css%22);%0A%0A//%20register%20Handsontable's%20modules%0A(0,%20_registry.registerAllModules)();%0A%0Avar%20ExampleComponent%20=%20function%20ExampleComponent()%20%7B%0A%20%20return%20/*#__PURE__*/React.createElement(_react.HotTable,%20%7B%0A%20%20%20%20data:%20%5B%5B'A1',%20'B1',%20'C1',%20'D1',%20'E1',%20'F1',%20'G1'%5D,%20%5B'A2',%20'B2',%20'C2',%20'D2',%20'E2',%20'F2',%20'G2'%5D,%20%5B'A3',%20'B3',%20'C3',%20'D3',%20'E3',%20'F3',%20'G3'%5D%5D,%0A%20%20%20%20colHeaders:%20true,%0A%20%20%20%20dropdownMenu:%20true,%0A%20%20%20%20height:%20%22auto%22,%0A%20%20%20%20licenseKey:%20%22non-commercial-and-evaluation%22%0A%20%20%7D);%0A%7D;%0A%0Aexports.ExampleComponent%20=%20ExampleComponent;%0AReactDOM.render(%20/*#__PURE__*/React.createElement(ExampleComponent,%20null),%20document.getElementById('example1'));%7D,%20'react')"}}):t._e()],2),t._v(" "),s("tab",{attrs:{id:"code-tab-example1",name:"Code"}},[s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" HotTable "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@handsontable/react'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" registerAllModules "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'handsontable/registry'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'handsontable/dist/handsontable.full.min.css'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// register Handsontable's modules")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerAllModules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("ExampleComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HotTable")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'B1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'D1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'E1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'F1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'G1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'B2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'D2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'E2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'F2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'G2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'B3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'D3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'E3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'F3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'G3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("colHeaders")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("dropdownMenu")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("auto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("licenseKey")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("non-commercial-and-evaluation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])],1),s("p"),t._v(" "),s("h2",{attrs:{id:"plugin-configuration"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#plugin-configuration"}}),t._v(" Plugin configuration")]),t._v(" "),s("p",[t._v("To use the default dropdown contents, set it to "),s("code",[t._v("true")]),t._v(", or to customize it by setting it to use a custom list of actions. For the available entry options reference, see the "),s("RouterLink",{attrs:{to:"/react-data-grid/context-menu/#page-specific"}},[t._v("Context Menu demo")]),t._v(".")],1),t._v(" "),s("p"),t._v(" "),s("p"),t._v(" "),s("form",{staticClass:"form-jsfiddle-external",attrs:{action:"https://jsfiddle.net/api/post/library/pure/",method:"post",target:"_blank"}},[s("input",{attrs:{type:"hidden",name:"title",readOnly:"",value:"Handsontable example"}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"wrap",readOnly:"",value:"d"}}),t._v(" "),s("textarea",{pre:!0,attrs:{class:"hidden",name:"js",readOnly:""}},[t._v("import { HotTable } from '@handsontable/react';\nimport { registerAllModules } from 'handsontable/registry';\nimport 'handsontable/dist/handsontable.full.min.css';\n\n// register Handsontable's modules\nregisterAllModules();\n\nexport const ExampleComponent = () => {\n  return (\n    <HotTable\n      data={[\n        ['A1', 'B1', 'C1', 'D1', 'E1', 'F1', 'G1'],\n        ['A2', 'B2', 'C2', 'D2', 'E2', 'F2', 'G2'],\n        ['A3', 'B3', 'C3', 'D3', 'E3', 'F3', 'G3'],\n      ]}\n      colHeaders={true}\n      licenseKey=\"non-commercial-and-evaluation\"\n      height=\"auto\"\n      dropdownMenu={[\n        'remove_col',\n        '---------',\n        'make_read_only',\n        '---------',\n        'alignment'\n      ]}\n    />\n  );\n};\n\nReactDOM.render(<ExampleComponent />, document.getElementById('example2'));\n")]),t._v(" "),s("textarea",{pre:!0,attrs:{class:"hidden",name:"html",readOnly:""}},[t._v('<script src="https://cdn.jsdelivr.net/npm/handsontable@latest/dist/handsontable.full.min.js"><\/script>\n<link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/handsontable@latest/dist/handsontable.full.min.css" /> \n<script src="https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js"><\/script>\n<script src="https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js"><\/script>\n<script src="https://cdn.jsdelivr.net/npm/@handsontable/react@latest/dist/react-handsontable.js"><\/script>\n<script src="http://localhost:8080/docs/scripts/fixer.js"><\/script>\n\n<div id="example2" class="hot "></div>\n      ')]),t._v(" "),s("textarea",{pre:!0,attrs:{class:"hidden",name:"css",readOnly:""}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"panel_css",value:"1",readOnly:""}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"panel_js",value:"3",readOnly:""}}),t._v(" "),s("div",{staticClass:"js-fiddle-link"},[s("button",{attrs:{type:"submit"}},[t._v("Edit\n          "),s("svg",{staticClass:"icon outbound",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"}},[s("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,\n            1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),t._v(" "),s("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})])])])]),t._v(" "),s("tabs",{class:t.$parent.$parent.addClassIfPreviewTabIsSelected("example2","selected-preview"),attrs:{options:{useUrlFragment:!1,defaultTabHash:"preview-tab-example2"},"cache-lifetime":"0"},on:{changed:function(a){for(var s,n=arguments.length,e=Array(n);n--;)e[n]=arguments[n];return(s=t.$parent.$parent).codePreviewTabChanged.apply(s,e.concat(["example2"]))}}},[s("tab",{attrs:{name:"Preview",id:"preview-tab-example2"}},[s("style",{pre:!0}),t._v(" "),t.$parent.$parent.isScriptLoaderActivated("example2")?[s("div",{pre:!0},[s("div",{pre:!0,attrs:{"data-preset-type":"react","data-example-id":"example2"}},[s("div",{pre:!0,attrs:{id:"example2",class:"hot "}})])])]:t._e(),t._v(" "),t.$parent.$parent.isScriptLoaderActivated("example2")?s("ScriptLoader",{attrs:{code:"useHandsontable('next',%20function()%7B%22use%20strict%22;%0A%0AObject.defineProperty(exports,%20%22__esModule%22,%20%7B%0A%20%20value:%20true%0A%7D);%0Aexports.ExampleComponent%20=%20void%200;%0A%0Avar%20_react%20=%20require(%22@handsontable/react%22);%0A%0Avar%20_registry%20=%20require(%22handsontable/registry%22);%0A%0Arequire(%22handsontable/dist/handsontable.full.min.css%22);%0A%0A//%20register%20Handsontable's%20modules%0A(0,%20_registry.registerAllModules)();%0A%0Avar%20ExampleComponent%20=%20function%20ExampleComponent()%20%7B%0A%20%20return%20/*#__PURE__*/React.createElement(_react.HotTable,%20%7B%0A%20%20%20%20data:%20%5B%5B'A1',%20'B1',%20'C1',%20'D1',%20'E1',%20'F1',%20'G1'%5D,%20%5B'A2',%20'B2',%20'C2',%20'D2',%20'E2',%20'F2',%20'G2'%5D,%20%5B'A3',%20'B3',%20'C3',%20'D3',%20'E3',%20'F3',%20'G3'%5D%5D,%0A%20%20%20%20colHeaders:%20true,%0A%20%20%20%20licenseKey:%20%22non-commercial-and-evaluation%22,%0A%20%20%20%20height:%20%22auto%22,%0A%20%20%20%20dropdownMenu:%20%5B'remove_col',%20'---------',%20'make_read_only',%20'---------',%20'alignment'%5D%0A%20%20%7D);%0A%7D;%0A%0Aexports.ExampleComponent%20=%20ExampleComponent;%0AReactDOM.render(%20/*#__PURE__*/React.createElement(ExampleComponent,%20null),%20document.getElementById('example2'));%7D,%20'react')"}}):t._e()],2),t._v(" "),s("tab",{attrs:{id:"code-tab-example2",name:"Code"}},[s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" HotTable "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@handsontable/react'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" registerAllModules "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'handsontable/registry'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'handsontable/dist/handsontable.full.min.css'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// register Handsontable's modules")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerAllModules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("ExampleComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HotTable")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'B1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'D1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'E1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'F1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'G1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'B2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'D2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'E2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'F2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'G2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'A3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'B3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'C3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'D3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'E3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'F3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'G3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("colHeaders")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("licenseKey")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("non-commercial-and-evaluation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("auto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("dropdownMenu")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'remove_col'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'---------'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'make_read_only'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'---------'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'alignment'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])],1),s("p"),t._v(" "),s("h2",{attrs:{id:"related-articles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#related-articles"}}),t._v(" Related articles")]),t._v(" "),s("h3",{attrs:{id:"related-guides"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#related-guides"}}),t._v(" Related guides")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/react-data-grid/context-menu/"}},[t._v("Context menu")])],1)]),t._v(" "),s("h3",{attrs:{id:"related-api-reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#related-api-reference"}}),t._v(" Related API reference")]),t._v(" "),s("ul",[s("li",[t._v("Configuration options:\n"),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/react-data-grid/api/options/#dropdownmenu"}},[s("code",[t._v("dropdownMenu")])])],1)])]),t._v(" "),s("li",[t._v("Hooks:\n"),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/react-data-grid/api/hooks/#afterdropdownmenudefaultoptions"}},[s("code",[t._v("afterDropdownMenuDefaultOptions")])])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/react-data-grid/api/hooks/#afterdropdownmenuhide"}},[s("code",[t._v("afterDropdownMenuHide")])])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/react-data-grid/api/hooks/#afterdropdownmenushow"}},[s("code",[t._v("afterDropdownMenuShow")])])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/react-data-grid/api/hooks/#beforedropdownmenusetitems"}},[s("code",[t._v("beforeDropdownMenuSetItems")])])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/react-data-grid/api/hooks/#beforedropdownmenushow"}},[s("code",[t._v("beforeDropdownMenuShow")])])],1)])]),t._v(" "),s("li",[t._v("Plugins:\n"),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/react-data-grid/api/dropdown-menu/"}},[s("code",[t._v("DropdownMenu")])])],1)])])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);