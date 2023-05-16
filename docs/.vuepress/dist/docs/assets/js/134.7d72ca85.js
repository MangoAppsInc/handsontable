(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{724:function(t,e,s){"use strict";s.r(e);var a=s(91),r=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"custom-editor-in-vue-2"}},[s("span",{staticClass:"header-framework"},[t._v("Vue 2 Data Grid")]),s("a",{staticClass:"header-anchor",attrs:{href:"#custom-editor-in-vue-2"}}),t._v(" Custom editor in Vue 2")]),t._v(" "),s("p",[t._v("Create a custom cell editor, and use it in your Vue 2 data grid by declaring it as a class.")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("div",{staticClass:"toc-container-header"},[t._v("In this article")]),s("ul",[s("li",[s("a",{attrs:{href:"#overview"}},[t._v("Overview")])]),s("li",[s("a",{attrs:{href:"#example-declaring-an-editor-as-a-class"}},[t._v("Example - Declaring an editor as a class")])]),s("li",[s("a",{attrs:{href:"#related-articles"}},[t._v("Related articles")]),s("ul",[s("li",[s("a",{attrs:{href:"#related-guides"}},[t._v("Related guides")])]),s("li",[s("a",{attrs:{href:"#related-api-reference"}},[t._v("Related API reference")])])])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"overview"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#overview"}}),t._v(" Overview")]),t._v(" "),s("p",[t._v("You can declare a custom editor for the "),s("code",[t._v("HotTable")]),t._v(" component by declaring it as a class and passing it to the Handsontable options or creating an editor component. You can use it many times and with different properties. To differentiate between editor instances, pass a "),s("code",[t._v("key")]),t._v(" attribute.")]),t._v(" "),s("h2",{attrs:{id:"example-declaring-an-editor-as-a-class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#example-declaring-an-editor-as-a-class"}}),t._v(" Example - Declaring an editor as a class")]),t._v(" "),s("p",[t._v("The following example implements the "),s("code",[t._v("@handsontable/vue")]),t._v(" component with a custom editor added, utilizing the "),s("code",[t._v("placeholder")]),t._v(" attribute in the editor's "),s("code",[t._v("input")]),t._v(" element.")]),t._v(" "),s("form",{staticClass:"form-jsfiddle-external",attrs:{action:"https://jsfiddle.net/api/post/library/pure/",method:"post",target:"_blank"}},[s("input",{attrs:{type:"hidden",name:"title",readOnly:"",value:"Handsontable example"}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"wrap",readOnly:"",value:"d"}}),t._v(" "),s("textarea",{pre:!0,attrs:{class:"hidden",name:"js",readOnly:""}},[t._v("import { HotTable } from '@handsontable/vue';\nimport { TextEditor } from 'handsontable/editors/textEditor';\nimport { registerAllModules } from 'handsontable/registry';\nimport 'handsontable/dist/handsontable.full.css';\n\n// register Handsontable's modules\nregisterAllModules();\n\nclass CustomEditor extends TextEditor {\n  createElements() {\n    super.createElements();\n\n    this.TEXTAREA = document.createElement('input');\n    this.TEXTAREA.setAttribute('placeholder', 'Custom placeholder');\n    this.TEXTAREA.setAttribute('data-hot-input', true);\n    this.textareaStyle = this.TEXTAREA.style;\n    this.TEXTAREA_PARENT.innerText = '';\n    this.TEXTAREA_PARENT.appendChild(this.TEXTAREA);\n  }\n}\n\nimport 'handsontable/dist/handsontable.full.css';\n\n// register Handsontable's modules\nregisterAllModules();\n\nconst ExampleComponent = {\n  data() {\n    return {\n      hotSettings: {\n        startRows: 5,\n        columns: [\n          {\n            editor: CustomEditor\n          }\n        ],\n        colHeaders: true,\n        colWidths: 200,\n        licenseKey: 'non-commercial-and-evaluation'\n      }\n    }\n  },\n  components: {\n    HotTable\n  }\n}\n\nexport default ExampleComponent;\n\nnew Vue({\n  ...ExampleComponent,\n  el: '#example1',\n});\n")]),t._v(" "),s("textarea",{pre:!0,attrs:{class:"hidden",name:"html",readOnly:""}},[t._v('<script src="https://cdn.jsdelivr.net/npm/handsontable@latest/dist/handsontable.full.min.js"><\/script>\n<link type="text/css" rel="stylesheet" href="https://cdn.jsdelivr.net/npm/handsontable@latest/dist/handsontable.full.min.css" /> \n<script src="https://cdn.jsdelivr.net/npm/vue@2/dist/vue.min.js"><\/script>\n<script src="https://cdn.jsdelivr.net/npm/@handsontable/vue@latest/dist/vue-handsontable.min.js"><\/script>\n<script src="http://localhost:8080/docs/scripts/fixer.js"><\/script>\n\n<div id="example1">\n  <hot-table :settings="hotSettings"></hot-table>\n</div>\n\n      ')]),t._v(" "),s("textarea",{pre:!0,attrs:{class:"hidden",name:"css",readOnly:""}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"panel_css",value:"1",readOnly:""}}),t._v(" "),s("input",{attrs:{type:"hidden",name:"panel_js",value:"3",readOnly:""}}),t._v(" "),s("div",{staticClass:"js-fiddle-link"},[s("button",{attrs:{type:"submit"}},[t._v("Edit\n          "),s("svg",{staticClass:"icon outbound",attrs:{xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",focusable:"false",x:"0px",y:"0px",viewBox:"0 0 100 100",width:"15",height:"15"}},[s("path",{attrs:{fill:"currentColor",d:"M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,\n            1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"}}),t._v(" "),s("polygon",{attrs:{fill:"currentColor",points:"45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"}})])])])]),t._v(" "),s("tabs",{class:t.$parent.$parent.addClassIfPreviewTabIsSelected("example1","selected-preview"),attrs:{options:{useUrlFragment:!1,defaultTabHash:"preview-tab-example1"},"cache-lifetime":"0"},on:{changed:function(e){for(var s,a=arguments.length,r=Array(a);a--;)r[a]=arguments[a];return(s=t.$parent.$parent).codePreviewTabChanged.apply(s,r.concat(["example1"]))}}},[s("tab",{attrs:{name:"Preview",id:"preview-tab-example1"}},[s("style",{pre:!0}),t._v(" "),t.$parent.$parent.isScriptLoaderActivated("example1")?[s("div",{pre:!0},[s("div",{pre:!0,attrs:{"data-preset-type":"vue","data-example-id":"example1"}},[s("div",{pre:!0,attrs:{id:"example1"}},[s("hot-table",{pre:!0,attrs:{":settings":"hotSettings"}})],1)])])]:t._e(),t._v(" "),t.$parent.$parent.isScriptLoaderActivated("example1")?s("ScriptLoader",{attrs:{code:"useHandsontable('next',%20function()%7B%22use%20strict%22;%0A%0Afunction%20_typeof(obj)%20%7B%20%22@babel/helpers%20-%20typeof%22;%20return%20_typeof%20=%20%22function%22%20==%20typeof%20Symbol%20&&%20%22symbol%22%20==%20typeof%20Symbol.iterator%20?%20function%20(obj)%20%7B%20return%20typeof%20obj;%20%7D%20:%20function%20(obj)%20%7B%20return%20obj%20&&%20%22function%22%20==%20typeof%20Symbol%20&&%20obj.constructor%20===%20Symbol%20&&%20obj%20!==%20Symbol.prototype%20?%20%22symbol%22%20:%20typeof%20obj;%20%7D,%20_typeof(obj);%20%7D%0A%0AObject.defineProperty(exports,%20%22__esModule%22,%20%7B%0A%20%20value:%20true%0A%7D);%0Aexports.default%20=%20void%200;%0A%0Avar%20_vue%20=%20require(%22@handsontable/vue%22);%0A%0Avar%20_textEditor%20=%20require(%22handsontable/editors/textEditor%22);%0A%0Avar%20_registry%20=%20require(%22handsontable/registry%22);%0A%0Arequire(%22handsontable/dist/handsontable.full.css%22);%0A%0Afunction%20ownKeys(object,%20enumerableOnly)%20%7B%20var%20keys%20=%20Object.keys(object);%20if%20(Object.getOwnPropertySymbols)%20%7B%20var%20symbols%20=%20Object.getOwnPropertySymbols(object);%20enumerableOnly%20&&%20(symbols%20=%20symbols.filter(function%20(sym)%20%7B%20return%20Object.getOwnPropertyDescriptor(object,%20sym).enumerable;%20%7D)),%20keys.push.apply(keys,%20symbols);%20%7D%20return%20keys;%20%7D%0A%0Afunction%20_objectSpread(target)%20%7B%20for%20(var%20i%20=%201;%20i%20%3C%20arguments.length;%20i++)%20%7B%20var%20source%20=%20null%20!=%20arguments%5Bi%5D%20?%20arguments%5Bi%5D%20:%20%7B%7D;%20i%20%25%202%20?%20ownKeys(Object(source),%20!0).forEach(function%20(key)%20%7B%20_defineProperty(target,%20key,%20source%5Bkey%5D);%20%7D)%20:%20Object.getOwnPropertyDescriptors%20?%20Object.defineProperties(target,%20Object.getOwnPropertyDescriptors(source))%20:%20ownKeys(Object(source)).forEach(function%20(key)%20%7B%20Object.defineProperty(target,%20key,%20Object.getOwnPropertyDescriptor(source,%20key));%20%7D);%20%7D%20return%20target;%20%7D%0A%0Afunction%20_defineProperty(obj,%20key,%20value)%20%7B%20if%20(key%20in%20obj)%20%7B%20Object.defineProperty(obj,%20key,%20%7B%20value:%20value,%20enumerable:%20true,%20configurable:%20true,%20writable:%20true%20%7D);%20%7D%20else%20%7B%20obj%5Bkey%5D%20=%20value;%20%7D%20return%20obj;%20%7D%0A%0Afunction%20_classCallCheck(instance,%20Constructor)%20%7B%20if%20(!(instance%20instanceof%20Constructor))%20%7B%20throw%20new%20TypeError(%22Cannot%20call%20a%20class%20as%20a%20function%22);%20%7D%20%7D%0A%0Afunction%20_defineProperties(target,%20props)%20%7B%20for%20(var%20i%20=%200;%20i%20%3C%20props.length;%20i++)%20%7B%20var%20descriptor%20=%20props%5Bi%5D;%20descriptor.enumerable%20=%20descriptor.enumerable%20%7C%7C%20false;%20descriptor.configurable%20=%20true;%20if%20(%22value%22%20in%20descriptor)%20descriptor.writable%20=%20true;%20Object.defineProperty(target,%20descriptor.key,%20descriptor);%20%7D%20%7D%0A%0Afunction%20_createClass(Constructor,%20protoProps,%20staticProps)%20%7B%20if%20(protoProps)%20_defineProperties(Constructor.prototype,%20protoProps);%20if%20(staticProps)%20_defineProperties(Constructor,%20staticProps);%20Object.defineProperty(Constructor,%20%22prototype%22,%20%7B%20writable:%20false%20%7D);%20return%20Constructor;%20%7D%0A%0Afunction%20_get()%20%7B%20if%20(typeof%20Reflect%20!==%20%22undefined%22%20&&%20Reflect.get)%20%7B%20_get%20=%20Reflect.get.bind();%20%7D%20else%20%7B%20_get%20=%20function%20_get(target,%20property,%20receiver)%20%7B%20var%20base%20=%20_superPropBase(target,%20property);%20if%20(!base)%20return;%20var%20desc%20=%20Object.getOwnPropertyDescriptor(base,%20property);%20if%20(desc.get)%20%7B%20return%20desc.get.call(arguments.length%20%3C%203%20?%20target%20:%20receiver);%20%7D%20return%20desc.value;%20%7D;%20%7D%20return%20_get.apply(this,%20arguments);%20%7D%0A%0Afunction%20_superPropBase(object,%20property)%20%7B%20while%20(!Object.prototype.hasOwnProperty.call(object,%20property))%20%7B%20object%20=%20_getPrototypeOf(object);%20if%20(object%20===%20null)%20break;%20%7D%20return%20object;%20%7D%0A%0Afunction%20_inherits(subClass,%20superClass)%20%7B%20if%20(typeof%20superClass%20!==%20%22function%22%20&&%20superClass%20!==%20null)%20%7B%20throw%20new%20TypeError(%22Super%20expression%20must%20either%20be%20null%20or%20a%20function%22);%20%7D%20subClass.prototype%20=%20Object.create(superClass%20&&%20superClass.prototype,%20%7B%20constructor:%20%7B%20value:%20subClass,%20writable:%20true,%20configurable:%20true%20%7D%20%7D);%20Object.defineProperty(subClass,%20%22prototype%22,%20%7B%20writable:%20false%20%7D);%20if%20(superClass)%20_setPrototypeOf(subClass,%20superClass);%20%7D%0A%0Afunction%20_setPrototypeOf(o,%20p)%20%7B%20_setPrototypeOf%20=%20Object.setPrototypeOf%20?%20Object.setPrototypeOf.bind()%20:%20function%20_setPrototypeOf(o,%20p)%20%7B%20o.__proto__%20=%20p;%20return%20o;%20%7D;%20return%20_setPrototypeOf(o,%20p);%20%7D%0A%0Afunction%20_createSuper(Derived)%20%7B%20var%20hasNativeReflectConstruct%20=%20_isNativeReflectConstruct();%20return%20function%20_createSuperInternal()%20%7B%20var%20Super%20=%20_getPrototypeOf(Derived),%20result;%20if%20(hasNativeReflectConstruct)%20%7B%20var%20NewTarget%20=%20_getPrototypeOf(this).constructor;%20result%20=%20Reflect.construct(Super,%20arguments,%20NewTarget);%20%7D%20else%20%7B%20result%20=%20Super.apply(this,%20arguments);%20%7D%20return%20_possibleConstructorReturn(this,%20result);%20%7D;%20%7D%0A%0Afunction%20_possibleConstructorReturn(self,%20call)%20%7B%20if%20(call%20&&%20(_typeof(call)%20===%20%22object%22%20%7C%7C%20typeof%20call%20===%20%22function%22))%20%7B%20return%20call;%20%7D%20else%20if%20(call%20!==%20void%200)%20%7B%20throw%20new%20TypeError(%22Derived%20constructors%20may%20only%20return%20object%20or%20undefined%22);%20%7D%20return%20_assertThisInitialized(self);%20%7D%0A%0Afunction%20_assertThisInitialized(self)%20%7B%20if%20(self%20===%20void%200)%20%7B%20throw%20new%20ReferenceError(%22this%20hasn't%20been%20initialised%20-%20super()%20hasn't%20been%20called%22);%20%7D%20return%20self;%20%7D%0A%0Afunction%20_isNativeReflectConstruct()%20%7B%20if%20(typeof%20Reflect%20===%20%22undefined%22%20%7C%7C%20!Reflect.construct)%20return%20false;%20if%20(Reflect.construct.sham)%20return%20false;%20if%20(typeof%20Proxy%20===%20%22function%22)%20return%20true;%20try%20%7B%20Boolean.prototype.valueOf.call(Reflect.construct(Boolean,%20%5B%5D,%20function%20()%20%7B%7D));%20return%20true;%20%7D%20catch%20(e)%20%7B%20return%20false;%20%7D%20%7D%0A%0Afunction%20_getPrototypeOf(o)%20%7B%20_getPrototypeOf%20=%20Object.setPrototypeOf%20?%20Object.getPrototypeOf.bind()%20:%20function%20_getPrototypeOf(o)%20%7B%20return%20o.__proto__%20%7C%7C%20Object.getPrototypeOf(o);%20%7D;%20return%20_getPrototypeOf(o);%20%7D%0A%0A//%20register%20Handsontable's%20modules%0A(0,%20_registry.registerAllModules)();%0A%0Avar%20CustomEditor%20=%20/*#__PURE__*/function%20(_TextEditor)%20%7B%0A%20%20_inherits(CustomEditor,%20_TextEditor);%0A%0A%20%20var%20_super%20=%20_createSuper(CustomEditor);%0A%0A%20%20function%20CustomEditor()%20%7B%0A%20%20%20%20_classCallCheck(this,%20CustomEditor);%0A%0A%20%20%20%20return%20_super.apply(this,%20arguments);%0A%20%20%7D%0A%0A%20%20_createClass(CustomEditor,%20%5B%7B%0A%20%20%20%20key:%20%22createElements%22,%0A%20%20%20%20value:%20function%20createElements()%20%7B%0A%20%20%20%20%20%20_get(_getPrototypeOf(CustomEditor.prototype),%20%22createElements%22,%20this).call(this);%0A%0A%20%20%20%20%20%20this.TEXTAREA%20=%20document.createElement('input');%0A%20%20%20%20%20%20this.TEXTAREA.setAttribute('placeholder',%20'Custom%20placeholder');%0A%20%20%20%20%20%20this.TEXTAREA.setAttribute('data-hot-input',%20true);%0A%20%20%20%20%20%20this.textareaStyle%20=%20this.TEXTAREA.style;%0A%20%20%20%20%20%20this.TEXTAREA_PARENT.innerText%20=%20'';%0A%20%20%20%20%20%20this.TEXTAREA_PARENT.appendChild(this.TEXTAREA);%0A%20%20%20%20%7D%0A%20%20%7D%5D);%0A%0A%20%20return%20CustomEditor;%0A%7D(_textEditor.TextEditor);%0A%0A//%20register%20Handsontable's%20modules%0A(0,%20_registry.registerAllModules)();%0Avar%20ExampleComponent%20=%20%7B%0A%20%20data:%20function%20data()%20%7B%0A%20%20%20%20return%20%7B%0A%20%20%20%20%20%20hotSettings:%20%7B%0A%20%20%20%20%20%20%20%20startRows:%205,%0A%20%20%20%20%20%20%20%20columns:%20%5B%7B%0A%20%20%20%20%20%20%20%20%20%20editor:%20CustomEditor%0A%20%20%20%20%20%20%20%20%7D%5D,%0A%20%20%20%20%20%20%20%20colHeaders:%20true,%0A%20%20%20%20%20%20%20%20colWidths:%20200,%0A%20%20%20%20%20%20%20%20licenseKey:%20'non-commercial-and-evaluation'%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D;%0A%20%20%7D,%0A%20%20components:%20%7B%0A%20%20%20%20HotTable:%20_vue.HotTable%0A%20%20%7D%0A%7D;%0Avar%20_default%20=%20ExampleComponent;%0Aexports.default%20=%20_default;%0Anew%20Vue(_objectSpread(_objectSpread(%7B%7D,%20ExampleComponent),%20%7B%7D,%20%7B%0A%20%20el:%20'#example1'%0A%7D));%7D,%20'vue')"}}):t._e()],2),t._v(" "),s("tab",{attrs:{id:"code-tab-example1",name:"Code"}},[s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" HotTable "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@handsontable/vue'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" TextEditor "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'handsontable/editors/textEditor'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" registerAllModules "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'handsontable/registry'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'handsontable/dist/handsontable.full.css'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// register Handsontable's modules")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerAllModules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CustomEditor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("TextEditor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElements")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("super")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElements")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TEXTAREA")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("createElement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'input'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TEXTAREA")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'placeholder'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Custom placeholder'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TEXTAREA")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("setAttribute")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'data-hot-input'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textareaStyle "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TEXTAREA")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("style"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TEXTAREA_PARENT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("innerText "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TEXTAREA_PARENT")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("appendChild")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("TEXTAREA")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'handsontable/dist/handsontable.full.css'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// register Handsontable's modules")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("registerAllModules")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" ExampleComponent "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("hotSettings")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("startRows")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("columns")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("editor")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" CustomEditor\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("colHeaders")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("colWidths")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("licenseKey")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'non-commercial-and-evaluation'")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("components")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    HotTable\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" ExampleComponent"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])])])]),s("tab",{attrs:{id:"html-tab-example1",name:"HTML"}},[s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("example1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("hot-table")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":settings")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hotSettings"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("hot-table")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])],1),s("h2",{attrs:{id:"related-articles"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#related-articles"}}),t._v(" Related articles")]),t._v(" "),s("h3",{attrs:{id:"related-guides"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#related-guides"}}),t._v(" Related guides")]),t._v(" "),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/javascript-data-grid/cell-editor/"}},[t._v("Cell editor")])],1)]),t._v(" "),s("h3",{attrs:{id:"related-api-reference"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#related-api-reference"}}),t._v(" Related API reference")]),t._v(" "),s("ul",[s("li",[t._v("APIs:\n"),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/javascript-data-grid/api/base-plugin/"}},[s("code",[t._v("BasePlugin")])])],1)])]),t._v(" "),s("li",[t._v("Configuration options:\n"),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/javascript-data-grid/api/options/#editor"}},[s("code",[t._v("editor")])])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/javascript-data-grid/api/options/#enterbeginsediting"}},[s("code",[t._v("enterBeginsEditing")])])],1)])]),t._v(" "),s("li",[t._v("Core methods:\n"),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/javascript-data-grid/api/core/#destroyeditor"}},[s("code",[t._v("destroyEditor()")])])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/javascript-data-grid/api/core/#getactiveeditor"}},[s("code",[t._v("getActiveEditor()")])])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/javascript-data-grid/api/core/#getcelleditor"}},[s("code",[t._v("getCellEditor()")])])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/javascript-data-grid/api/core/#getcellmeta"}},[s("code",[t._v("getCellMeta()")])])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/javascript-data-grid/api/core/#getcellmetaatrow"}},[s("code",[t._v("getCellMetaAtRow()")])])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/javascript-data-grid/api/core/#getcellsmeta"}},[s("code",[t._v("getCellsMeta()")])])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/javascript-data-grid/api/core/#setcellmeta"}},[s("code",[t._v("setCellMeta()")])])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/javascript-data-grid/api/core/#setcellmetaobject"}},[s("code",[t._v("setCellMetaObject()")])])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/javascript-data-grid/api/core/#removecellmeta"}},[s("code",[t._v("removeCellMeta()")])])],1)])]),t._v(" "),s("li",[t._v("Hooks:\n"),s("ul",[s("li",[s("RouterLink",{attrs:{to:"/javascript-data-grid/api/hooks/#afterbeginediting"}},[s("code",[t._v("afterBeginEditing")])])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/javascript-data-grid/api/hooks/#aftergetcellmeta"}},[s("code",[t._v("afterGetCellMeta")])])],1),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"/javascript-data-grid/api/hooks/#beforegetcellmeta"}},[s("code",[t._v("beforeGetCellMeta")])])],1)])])])],1)}),[],!1,null,null,null);e.default=r.exports}}]);