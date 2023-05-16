(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{840:function(t,a,s){"use strict";s.r(a);var n=s(91),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"autofill-values"}},[s("span",{staticClass:"header-framework"},[t._v("React Data Grid")]),s("a",{staticClass:"header-anchor",attrs:{href:"#autofill-values"}}),t._v(" Autofill values")]),t._v(" "),s("p",[t._v("Copy a cell's value into multiple other cells, using the \"fill handle\" UI element. Configure the direction of copying, and more, through Handsontable's API.")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("div",{staticClass:"toc-container-header"},[t._v("In this article")]),s("ul",[s("li",[s("a",{attrs:{href:"#autofill-in-all-directions"}},[t._v("Autofill in all directions")])]),s("li",[s("a",{attrs:{href:"#autofill-in-a-vertical-direction-only-and-creating-new-rows"}},[t._v("Autofill in a vertical direction only and creating new rows")])]),s("li",[s("a",{attrs:{href:"#related-api-reference"}},[t._v("Related API reference")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"autofill-in-all-directions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#autofill-in-all-directions"}}),t._v(" Autofill in all directions")]),t._v(" "),s("p",[t._v("Using the tiny square known as the 'fill handle' in the corner of the selected cell, you can drag it (drag-down) to repeat the values from the cell. Double click the fill handle in "),s("code",[t._v("cell B4")]),t._v(" where the value is "),s("code",[t._v("30")]),t._v(" to fill the selection down to the last value in neighboring column, just like it would in Excel or Google Sheets.")]),t._v(" "),s("p"),t._v(" "),s("p"),t._v(" "),s("form",{staticClass:"form-jsfiddle-external",attrs:{action:"https://jsfiddle.net/api/post/library/pure/",method:"post",target:"_blank"}},[s("input",{attrs:{type:"hidden",name:"title",readOnly:"",value:"Handsontable example"}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"wrap",readOnly:"",value:"d"}}),t._v(" "),s("textarea",{pre:!0,attrs:{class:"hidden",name:"js",readOnly:""}},[t._v("import { HotTable } from '@handsontable/react';\nimport { registerAllModules } from 'handsontable/registry';\nimport 'handsontable/dist/handsontable.full.min.css';\n\n// register Handsontable's modules\nregisterAllModules();\n\nexport const ExampleComponent = () => {\n  const data = [\n    ['', 'Tesla', 'Nissan', 'Toyota', 'Honda'],\n    ['2017', 10, 11, 12, 13],\n    ['2018', 20, 11, 14, 13],\n    ['2019', 30, 15, 12, 13],\n    ['2020', '', '', '', ''],\n    ['2021', '', '', '', '']\n  ];\n\n  return (\n    <HotTable\n      data={data}\n      rowHeaders={true}\n      colHeaders={true}\n      fillHandle={true} // possible values: true, false, \"horizontal\", \"vertical\",\n      height=\"auto\"\n      licenseKey=\"non-commercial-and-evaluation\"\n    />\n  );\n};\n\nReactDOM.render(<ExampleComponent />, document.getElementById('example1'));\n")]),t._v(" "),s("textarea",{pre:!0,attrs:{class:"hidden",name:"html",readOnly:""}},[t._v('<script src="https://cdn.jsdelivr.net/npm/handsontable@latest/dist/handsontable.full.min.js"><\/script>\n<link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/handsontable@latest/dist/handsontable.full.min.css" /> \n<script src="https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js"><\/script>\n<script src="https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js"><\/script>\n<script src="https://cdn.jsdelivr.net/npm/@handsontable/react@latest/dist/react-handsontable.js"><\/script>\n<script src="http://localhost:8080/docs/scripts/fixer.js"><\/script>\n\n<div id="example1" class="hot "></div>\n      ')]),t._v(" "),s("textarea",{pre:!0,attrs:{class:"hidden",name:"css",readOnly:""}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"panel_css",value:"1",readOnly:""}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"panel_js",value:"3",readOnly:""}}),t._v(" "),s("div",{staticClass:"js-fiddle-link"},[s("button",{attrs:{type:"submit"}},[t._v("Edit\n          "),s("svg",{staticClass:"icon outbound",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"}},[s("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,\n            1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),t._v(" "),s("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})])])])]),t._v(" "),s("tabs",{class:t.$parent.$parent.addClassIfPreviewTabIsSelected("example1","selected-preview"),attrs:{options:{useUrlFragment:!1,defaultTabHash:"preview-tab-example1"},"cache-lifetime":"0"},on:{changed:function(a){for(var s,n=arguments.length,e=Array(n);n--;)e[n]=arguments[n];return(s=t.$parent.$parent).codePreviewTabChanged.apply(s,e.concat(["example1"]))}}},[s("tab",{attrs:{name:"Preview",id:"preview-tab-example1"}},[s("style",{pre:!0}),t._v(" "),t.$parent.$parent.isScriptLoaderActivated("example1")?[s("div",{pre:!0},[s("div",{pre:!0,attrs:{"data-preset-type":"react","data-example-id":"example1"}},[s("div",{pre:!0,attrs:{id:"example1",class:"hot "}})])])]:t._e(),t._v(" "),t.$parent.$parent.isScriptLoaderActivated("example1")?s("ScriptLoader",{attrs:{code:"useHandsontable('next',%20function()%7B%22use%20strict%22;%0A%0AObject.defineProperty(exports,%20%22__esModule%22,%20%7B%0A%20%20value:%20true%0A%7D);%0Aexports.ExampleComponent%20=%20void%200;%0A%0Avar%20_react%20=%20require(%22@handsontable/react%22);%0A%0Avar%20_registry%20=%20require(%22handsontable/registry%22);%0A%0Arequire(%22handsontable/dist/handsontable.full.min.css%22);%0A%0A//%20register%20Handsontable's%20modules%0A(0,%20_registry.registerAllModules)();%0A%0Avar%20ExampleComponent%20=%20function%20ExampleComponent()%20%7B%0A%20%20var%20data%20=%20%5B%5B'',%20'Tesla',%20'Nissan',%20'Toyota',%20'Honda'%5D,%20%5B'2017',%2010,%2011,%2012,%2013%5D,%20%5B'2018',%2020,%2011,%2014,%2013%5D,%20%5B'2019',%2030,%2015,%2012,%2013%5D,%20%5B'2020',%20'',%20'',%20'',%20''%5D,%20%5B'2021',%20'',%20'',%20'',%20''%5D%5D;%0A%20%20return%20/*#__PURE__*/React.createElement(_react.HotTable,%20%7B%0A%20%20%20%20data:%20data,%0A%20%20%20%20rowHeaders:%20true,%0A%20%20%20%20colHeaders:%20true,%0A%20%20%20%20fillHandle:%20true%20//%20possible%20values:%20true,%20false,%20%22horizontal%22,%20%22vertical%22,%0A%20%20%20%20,%0A%20%20%20%20height:%20%22auto%22,%0A%20%20%20%20licenseKey:%20%22non-commercial-and-evaluation%22%0A%20%20%7D);%0A%7D;%0A%0Aexports.ExampleComponent%20=%20ExampleComponent;%0AReactDOM.render(%20/*#__PURE__*/React.createElement(ExampleComponent,%20null),%20document.getElementById('example1'));%7D,%20'react')"}}):t._e()],2),t._v(" "),s("tab",{attrs:{id:"code-tab-example1",name:"Code"}},[s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" HotTable "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@handsontable/react'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" registerAllModules "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'handsontable/registry'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'handsontable/dist/handsontable.full.min.css'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// register Handsontable's modules")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerAllModules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("ExampleComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tesla'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Nissan'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Toyota'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Honda'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2017'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2018'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2019'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2020'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2021'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HotTable")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rowHeaders")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("colHeaders")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("fillHandle")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// possible values: true, false, "horizontal", "vertical",')]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("auto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("licenseKey")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("non-commercial-and-evaluation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])],1),s("p"),t._v(" "),s("h2",{attrs:{id:"autofill-in-a-vertical-direction-only-and-creating-new-rows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#autofill-in-a-vertical-direction-only-and-creating-new-rows"}}),t._v(" Autofill in a vertical direction only and creating new rows")]),t._v(" "),s("p",[t._v("In this configuration, the fill handle is restricted to move only vertically. New rows are automatically added to the bottom of the table by changing "),s("RouterLink",{attrs:{to:"/react-data-grid/api/options/#fillhandle"}},[s("code",[t._v("autoInsertRow")])]),t._v(" to "),s("code",[t._v("true")]),t._v(".")],1),t._v(" "),s("p"),t._v(" "),s("p"),t._v(" "),s("form",{staticClass:"form-jsfiddle-external",attrs:{action:"https://jsfiddle.net/api/post/library/pure/",method:"post",target:"_blank"}},[s("input",{attrs:{type:"hidden",name:"title",readOnly:"",value:"Handsontable example"}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"wrap",readOnly:"",value:"d"}}),t._v(" "),s("textarea",{pre:!0,attrs:{class:"hidden",name:"js",readOnly:""}},[t._v("import { HotTable } from '@handsontable/react';\nimport { registerAllModules } from 'handsontable/registry';\nimport 'handsontable/dist/handsontable.full.min.css';\n\n// register Handsontable's modules\nregisterAllModules();\n\nexport const ExampleComponent = () => {\n  const data = [\n    ['', 'Tesla', 'Nissan', 'Toyota', 'Honda'],\n    ['2017', 10, 11, 12, 13],\n    ['2018', 20, 11, 14, 13],\n    ['2019', 30, 15, 12, 13],\n    ['2020', '', '', '', ''],\n    ['2021', '', '', '', '']\n  ];\n\n  return (\n    <HotTable\n      data={data}\n      rowHeaders={true}\n      colHeaders={true}\n      fillHandle={{\n        direction: 'vertical',\n        autoInsertRow: true\n      }}\n      height=\"auto\"\n      licenseKey=\"non-commercial-and-evaluation\"\n    />\n  );\n};\n\nReactDOM.render(<ExampleComponent />, document.getElementById('example2'));\n")]),t._v(" "),s("textarea",{pre:!0,attrs:{class:"hidden",name:"html",readOnly:""}},[t._v('<script src="https://cdn.jsdelivr.net/npm/handsontable@latest/dist/handsontable.full.min.js"><\/script>\n<link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/handsontable@latest/dist/handsontable.full.min.css" /> \n<script src="https://cdn.jsdelivr.net/npm/react@17/umd/react.production.min.js"><\/script>\n<script src="https://cdn.jsdelivr.net/npm/react-dom@17/umd/react-dom.production.min.js"><\/script>\n<script src="https://cdn.jsdelivr.net/npm/@handsontable/react@latest/dist/react-handsontable.js"><\/script>\n<script src="http://localhost:8080/docs/scripts/fixer.js"><\/script>\n\n<div id="example2" class="hot "></div>\n      ')]),t._v(" "),s("textarea",{pre:!0,attrs:{class:"hidden",name:"css",readOnly:""}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"panel_css",value:"1",readOnly:""}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"panel_js",value:"3",readOnly:""}}),t._v(" "),s("div",{staticClass:"js-fiddle-link"},[s("button",{attrs:{type:"submit"}},[t._v("Edit\n          "),s("svg",{staticClass:"icon outbound",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"}},[s("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,\n            1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),t._v(" "),s("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})])])])]),t._v(" "),s("tabs",{class:t.$parent.$parent.addClassIfPreviewTabIsSelected("example2","selected-preview"),attrs:{options:{useUrlFragment:!1,defaultTabHash:"preview-tab-example2"},"cache-lifetime":"0"},on:{changed:function(a){for(var s,n=arguments.length,e=Array(n);n--;)e[n]=arguments[n];return(s=t.$parent.$parent).codePreviewTabChanged.apply(s,e.concat(["example2"]))}}},[s("tab",{attrs:{name:"Preview",id:"preview-tab-example2"}},[s("style",{pre:!0}),t._v(" "),t.$parent.$parent.isScriptLoaderActivated("example2")?[s("div",{pre:!0},[s("div",{pre:!0,attrs:{"data-preset-type":"react","data-example-id":"example2"}},[s("div",{pre:!0,attrs:{id:"example2",class:"hot "}})])])]:t._e(),t._v(" "),t.$parent.$parent.isScriptLoaderActivated("example2")?s("ScriptLoader",{attrs:{code:"useHandsontable('next',%20function()%7B%22use%20strict%22;%0A%0AObject.defineProperty(exports,%20%22__esModule%22,%20%7B%0A%20%20value:%20true%0A%7D);%0Aexports.ExampleComponent%20=%20void%200;%0A%0Avar%20_react%20=%20require(%22@handsontable/react%22);%0A%0Avar%20_registry%20=%20require(%22handsontable/registry%22);%0A%0Arequire(%22handsontable/dist/handsontable.full.min.css%22);%0A%0A//%20register%20Handsontable's%20modules%0A(0,%20_registry.registerAllModules)();%0A%0Avar%20ExampleComponent%20=%20function%20ExampleComponent()%20%7B%0A%20%20var%20data%20=%20%5B%5B'',%20'Tesla',%20'Nissan',%20'Toyota',%20'Honda'%5D,%20%5B'2017',%2010,%2011,%2012,%2013%5D,%20%5B'2018',%2020,%2011,%2014,%2013%5D,%20%5B'2019',%2030,%2015,%2012,%2013%5D,%20%5B'2020',%20'',%20'',%20'',%20''%5D,%20%5B'2021',%20'',%20'',%20'',%20''%5D%5D;%0A%20%20return%20/*#__PURE__*/React.createElement(_react.HotTable,%20%7B%0A%20%20%20%20data:%20data,%0A%20%20%20%20rowHeaders:%20true,%0A%20%20%20%20colHeaders:%20true,%0A%20%20%20%20fillHandle:%20%7B%0A%20%20%20%20%20%20direction:%20'vertical',%0A%20%20%20%20%20%20autoInsertRow:%20true%0A%20%20%20%20%7D,%0A%20%20%20%20height:%20%22auto%22,%0A%20%20%20%20licenseKey:%20%22non-commercial-and-evaluation%22%0A%20%20%7D);%0A%7D;%0A%0Aexports.ExampleComponent%20=%20ExampleComponent;%0AReactDOM.render(%20/*#__PURE__*/React.createElement(ExampleComponent,%20null),%20document.getElementById('example2'));%7D,%20'react')"}}):t._e()],2),t._v(" "),s("tab",{attrs:{id:"code-tab-example2",name:"Code"}},[s("div",{staticClass:"language-jsx extra-class"},[s("pre",{pre:!0,attrs:{class:"language-jsx"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" HotTable "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@handsontable/react'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" registerAllModules "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'handsontable/registry'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'handsontable/dist/handsontable.full.min.css'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// register Handsontable's modules")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerAllModules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("ExampleComponent")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Tesla'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Nissan'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Toyota'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Honda'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2017'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2018'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2019'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2020'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'2021'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HotTable")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("rowHeaders")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("colHeaders")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("fillHandle")]),s("span",{pre:!0,attrs:{class:"token script language-javascript"}},[s("span",{pre:!0,attrs:{class:"token script-punctuation punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("direction")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vertical'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("autoInsertRow")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("height")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("auto"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("licenseKey")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("non-commercial-and-evaluation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])])],1),s("p"),t._v(" "),s("h2",{attrs:{id:"related-api-reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#related-api-reference"}}),t._v(" Related API reference")]),t._v(" "),s("ul",[s("li",[t._v("Configuration options:\n"),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/react-data-grid/api/options/#fillhandle"}},[s("code",[t._v("fillHandle")])])],1)])]),t._v(" "),s("li",[t._v("Hooks:\n"),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/react-data-grid/api/hooks/#afterautofill"}},[s("code",[t._v("afterAutofill")])])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/react-data-grid/api/hooks/#beforeautofill"}},[s("code",[t._v("beforeAutofill")])])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/react-data-grid/api/hooks/#beforeautofillinsidepopulate"}},[s("code",[t._v("beforeAutofillInsidePopulate")])])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/react-data-grid/api/hooks/#modifyautofillrange"}},[s("code",[t._v("modifyAutofillRange")])])],1)])]),t._v(" "),s("li",[t._v("Plugins:\n"),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/react-data-grid/api/autofill/"}},[s("code",[t._v("Autofill")])])],1)])])])],1)}),[],!1,null,null,null);a.default=e.exports}}]);