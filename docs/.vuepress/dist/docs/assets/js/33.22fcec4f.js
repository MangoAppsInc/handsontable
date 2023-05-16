(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{622:function(t,e,a){"use strict";a.r(e);var n=a(91),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"contextmenu"}},[a("span",{staticClass:"header-framework"},[t._v("JavaScript Data Grid")]),a("a",{staticClass:"header-anchor",attrs:{href:"#contextmenu"}}),t._v(" ContextMenu")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("div",{staticClass:"toc-container-header"},[t._v("In this article")]),a("ul",[a("li",[a("a",{attrs:{href:"#description"}},[t._v("Description")])]),a("li",[a("a",{attrs:{href:"#options"}},[t._v("Options")]),a("ul",[a("li",[a("a",{attrs:{href:"#contextmenu"}},[t._v("contextMenu")])])])]),a("li",[a("a",{attrs:{href:"#members"}},[t._v("Members")]),a("ul",[a("li",[a("a",{attrs:{href:"#contextmenu"}},[t._v("ContextMenu")])]),a("li",[a("a",{attrs:{href:"#default-items"}},[t._v("DEFAULT_ITEMS")])])])]),a("li",[a("a",{attrs:{href:"#methods"}},[t._v("Methods")]),a("ul",[a("li",[a("a",{attrs:{href:"#close"}},[t._v("close")])]),a("li",[a("a",{attrs:{href:"#destroy"}},[t._v("destroy")])]),a("li",[a("a",{attrs:{href:"#disableplugin"}},[t._v("disablePlugin")])]),a("li",[a("a",{attrs:{href:"#enableplugin"}},[t._v("enablePlugin")])]),a("li",[a("a",{attrs:{href:"#executecommand"}},[t._v("executeCommand")])]),a("li",[a("a",{attrs:{href:"#isenabled"}},[t._v("isEnabled")])]),a("li",[a("a",{attrs:{href:"#open"}},[t._v("open")])]),a("li",[a("a",{attrs:{href:"#updateplugin"}},[t._v("updatePlugin")])])])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"description"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#description"}}),t._v(" Description")]),t._v(" "),a("p",[t._v("This plugin creates the Handsontable Context Menu. It allows to create a new row or column at any place in the\ngrid among "),a("RouterLink",{attrs:{to:"/javascript-data-grid/context-menu/#context-menu-with-specific-options"}},[t._v("other features")]),t._v(".\nPossible values:")],1),t._v(" "),a("ul",[a("li",[a("code",[t._v("true")]),t._v(" (to enable default options),")]),t._v(" "),a("li",[a("code",[t._v("false")]),t._v(" (to disable completely)")]),t._v(" "),a("li",[a("code",[t._v("{ uiContainer: containerDomElement }")]),t._v(" (to declare a container for all of the Context Menu's dom elements to be placed in).")]),t._v(" "),a("li",[t._v("An array of "),a("RouterLink",{attrs:{to:"/javascript-data-grid/context-menu/#context-menu-with-specific-options"}},[t._v("the available strings")])],1)]),t._v(" "),a("p",[t._v("See "),a("RouterLink",{attrs:{to:"/javascript-data-grid/context-menu/"}},[t._v("the context menu demo")]),t._v(" for examples.")],1),t._v(" "),a("p",[a("strong",[t._v("Example")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// as a boolean")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("contextMenu")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// as a array")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("contextMenu")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'row_above'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'row_below'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'---------'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'redo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("h2",{attrs:{id:"options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#options"}}),t._v(" Options")]),t._v(" "),a("h3",{attrs:{id:"contextmenu-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contextmenu-2"}}),t._v(" contextMenu")]),t._v(" "),a("a",{staticClass:"source-code-link",attrs:{href:"https://github.com/handsontable/handsontable/blob/94c16465924c6a7b1daf57e583d6b439e83de010/handsontable/src/dataMap/metaManager/metaSchema.js#L1155",target:"_blank"}},[t._v(" Source code "),a("OutboundLink")],1),a("p",[a("em",[t._v("contextMenu.contextMenu : boolean | Array<string> | object")])]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("contextMenu")]),t._v(" option configures the "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/context-menu/"}},[a("code",[t._v("ContextMenu")])]),t._v(" plugin.")],1),t._v(" "),a("p",[t._v("You can set the "),a("code",[t._v("contextMenu")]),t._v(" option to one of the following:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Setting")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Disable the "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/context-menu/"}},[a("code",[t._v("ContextMenu")])]),t._v(" plugin")],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("- Enable the "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/context-menu/"}},[a("code",[t._v("ContextMenu")])]),t._v(" plugin"),a("br"),t._v("- Use the "),a("RouterLink",{attrs:{to:"/javascript-data-grid/context-menu/#context-menu-with-default-options"}},[t._v("default context menu options")])],1)]),t._v(" "),a("tr",[a("td",[t._v("An array")]),t._v(" "),a("td",[t._v("- Enable the "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/context-menu/"}},[a("code",[t._v("ContextMenu")])]),t._v(" plugin"),a("br"),t._v("- Modify "),a("RouterLink",{attrs:{to:"/javascript-data-grid/context-menu/#context-menu-with-specific-options"}},[t._v("individual context menu options")])],1)]),t._v(" "),a("tr",[a("td",[t._v("An object")]),t._v(" "),a("td",[t._v("- Enable the "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/context-menu/"}},[a("code",[t._v("ContextMenu")])]),t._v(" plugin"),a("br"),t._v("- Apply a "),a("RouterLink",{attrs:{to:"/javascript-data-grid/context-menu/#context-menu-with-a-fully-custom-configuration"}},[t._v("custom context menu configuration")])],1)])])]),t._v(" "),a("p",[t._v("Read more:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/javascript-data-grid/context-menu/"}},[t._v("Context menu")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/javascript-data-grid/context-menu/#context-menu-with-default-options"}},[t._v("Context menu: Context menu with default options")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/javascript-data-grid/context-menu/#context-menu-with-specific-options"}},[t._v("Context menu: Context menu with specific options")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/javascript-data-grid/context-menu/#context-menu-with-a-fully-custom-configuration"}},[t._v("Context menu: Context menu with fully custom configuration options")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/javascript-data-grid/api/context-menu/"}},[t._v("Plugins: "),a("code",[t._v("ContextMenu")])])],1)]),t._v(" "),a("p",[a("strong",[t._v("Default")]),t._v(": "),a("code",[t._v("undefined")]),a("br"),t._v(" "),a("strong",[t._v("Example")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// enable the `ContextMenu` plugin")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// use the default context menu options")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("contextMenu")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// enable the `ContextMenu` plugin")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// and modify individual context menu options")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("contextMenu")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'row_above'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'row_below'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'---------'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'undo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'redo'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// enable the `ContextMenu` plugin")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// and apply a custom context menu configuration")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("contextMenu")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("items")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'option1'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'option1'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'option2'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'option2'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("submenu")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("items")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'option2:suboption1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'option2:suboption1'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("h2",{attrs:{id:"members"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#members"}}),t._v(" Members")]),t._v(" "),a("h3",{attrs:{id:"contextmenu-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contextmenu-3"}}),t._v(" ContextMenu")]),t._v(" "),a("a",{staticClass:"source-code-link",attrs:{href:"https://github.com/handsontable/handsontable/blob/94c16465924c6a7b1daf57e583d6b439e83de010/handsontable/src/plugins/contextMenu/contextMenu.js#L97",target:"_blank"}},[t._v(" Source code "),a("OutboundLink")],1),a("p",[a("em",[t._v("contextMenu."),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/context-menu/"}},[t._v("ContextMenu")])],1)]),t._v(" "),a("h3",{attrs:{id:"default-items"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-items"}}),t._v(" DEFAULT_ITEMS")]),t._v(" "),a("a",{staticClass:"source-code-link",attrs:{href:"https://github.com/handsontable/handsontable/blob/94c16465924c6a7b1daf57e583d6b439e83de010/handsontable/src/plugins/contextMenu/contextMenu.js#L78",target:"_blank"}},[t._v(" Source code "),a("OutboundLink")],1),a("p",[a("em",[t._v("ContextMenu.DEFAULT_ITEMS ⇒ Array<string>")])]),t._v(" "),a("p",[t._v("Context menu default items order when "),a("code",[t._v("contextMenu")]),t._v(" options is set as "),a("code",[t._v("true")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#methods"}}),t._v(" Methods")]),t._v(" "),a("h3",{attrs:{id:"close"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#close"}}),t._v(" close")]),t._v(" "),a("a",{staticClass:"source-code-link",attrs:{href:"https://github.com/handsontable/handsontable/blob/94c16465924c6a7b1daf57e583d6b439e83de010/handsontable/src/plugins/contextMenu/contextMenu.js#L236",target:"_blank"}},[t._v(" Source code "),a("OutboundLink")],1),a("p",[a("em",[t._v("contextMenu.close()")])]),t._v(" "),a("p",[t._v("Closes the menu.")]),t._v(" "),a("h3",{attrs:{id:"destroy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#destroy"}}),t._v(" destroy")]),t._v(" "),a("a",{staticClass:"source-code-link",attrs:{href:"https://github.com/handsontable/handsontable/blob/94c16465924c6a7b1daf57e583d6b439e83de010/handsontable/src/plugins/contextMenu/contextMenu.js#L381",target:"_blank"}},[t._v(" Source code "),a("OutboundLink")],1),a("p",[a("em",[t._v("contextMenu.destroy()")])]),t._v(" "),a("p",[t._v("Destroys the plugin instance.")]),t._v(" "),a("h3",{attrs:{id:"disableplugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#disableplugin"}}),t._v(" disablePlugin")]),t._v(" "),a("a",{staticClass:"source-code-link",attrs:{href:"https://github.com/handsontable/handsontable/blob/94c16465924c6a7b1daf57e583d6b439e83de010/handsontable/src/plugins/contextMenu/contextMenu.js#L185",target:"_blank"}},[t._v(" Source code "),a("OutboundLink")],1),a("p",[a("em",[t._v("contextMenu.disablePlugin()")])]),t._v(" "),a("p",[t._v("Disables the plugin functionality for this Handsontable instance.")]),t._v(" "),a("h3",{attrs:{id:"enableplugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enableplugin"}}),t._v(" enablePlugin")]),t._v(" "),a("a",{staticClass:"source-code-link",attrs:{href:"https://github.com/handsontable/handsontable/blob/94c16465924c6a7b1daf57e583d6b439e83de010/handsontable/src/plugins/contextMenu/contextMenu.js#L142",target:"_blank"}},[t._v(" Source code "),a("OutboundLink")],1),a("p",[a("em",[t._v("contextMenu.enablePlugin()")])]),t._v(" "),a("p",[t._v("Enables the plugin functionality for this Handsontable instance.")]),t._v(" "),a("h3",{attrs:{id:"executecommand"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#executecommand"}}),t._v(" executeCommand")]),t._v(" "),a("a",{staticClass:"source-code-link",attrs:{href:"https://github.com/handsontable/handsontable/blob/94c16465924c6a7b1daf57e583d6b439e83de010/handsontable/src/plugins/contextMenu/contextMenu.js#L275",target:"_blank"}},[t._v(" Source code "),a("OutboundLink")],1),a("p",[a("em",[t._v("contextMenu.executeCommand(commandName, ...params)")])]),t._v(" "),a("p",[t._v("Execute context menu command.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("executeCommand()")]),t._v(" method works only for selected cells.")]),t._v(" "),a("p",[t._v("When no cells are selected, "),a("code",[t._v("executeCommand()")]),t._v(" doesn't do anything.")]),t._v(" "),a("p",[t._v("You can execute all predefined commands:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("'row_above'")]),t._v(" - Insert row above")]),t._v(" "),a("li",[a("code",[t._v("'row_below'")]),t._v(" - Insert row below")]),t._v(" "),a("li",[a("code",[t._v("'col_left'")]),t._v(" - Insert column left")]),t._v(" "),a("li",[a("code",[t._v("'col_right'")]),t._v(" - Insert column right")]),t._v(" "),a("li",[a("code",[t._v("'clear_column'")]),t._v(" - Clear selected column")]),t._v(" "),a("li",[a("code",[t._v("'remove_row'")]),t._v(" - Remove row")]),t._v(" "),a("li",[a("code",[t._v("'remove_col'")]),t._v(" - Remove column")]),t._v(" "),a("li",[a("code",[t._v("'undo'")]),t._v(" - Undo last action")]),t._v(" "),a("li",[a("code",[t._v("'redo'")]),t._v(" - Redo last action")]),t._v(" "),a("li",[a("code",[t._v("'make_read_only'")]),t._v(" - Make cell read only")]),t._v(" "),a("li",[a("code",[t._v("'alignment:left'")]),t._v(" - Alignment to the left")]),t._v(" "),a("li",[a("code",[t._v("'alignment:top'")]),t._v(" - Alignment to the top")]),t._v(" "),a("li",[a("code",[t._v("'alignment:right'")]),t._v(" - Alignment to the right")]),t._v(" "),a("li",[a("code",[t._v("'alignment:bottom'")]),t._v(" - Alignment to the bottom")]),t._v(" "),a("li",[a("code",[t._v("'alignment:middle'")]),t._v(" - Alignment to the middle")]),t._v(" "),a("li",[a("code",[t._v("'alignment:center'")]),t._v(" - Alignment to the center (justify).")])]),t._v(" "),a("p",[t._v("Or you can execute command registered in settings where "),a("code",[t._v("key")]),t._v(" is your command name.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("commandName")]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",[t._v("The command name to be executed.")])]),t._v(" "),a("tr",[a("td",[t._v("...params")]),t._v(" "),a("td",[a("code",[t._v("*")])]),t._v(" "),a("td",[t._v("Additional parameters passed to command executor module.")])])])]),t._v(" "),a("h3",{attrs:{id:"isenabled"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#isenabled"}}),t._v(" isEnabled")]),t._v(" "),a("a",{staticClass:"source-code-link",attrs:{href:"https://github.com/handsontable/handsontable/blob/94c16465924c6a7b1daf57e583d6b439e83de010/handsontable/src/plugins/contextMenu/contextMenu.js#L135",target:"_blank"}},[t._v(" Source code "),a("OutboundLink")],1),a("p",[a("em",[t._v("contextMenu.isEnabled() ⇒ boolean")])]),t._v(" "),a("p",[t._v("Checks if the plugin is enabled in the handsontable settings. This method is executed in "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/hooks/#beforeinit"}},[t._v("Hooks#beforeInit")]),t._v("\nhook and if it returns "),a("code",[t._v("true")]),t._v(" then the "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/context-menu/#enableplugin"}},[t._v("ContextMenu#enablePlugin")]),t._v(" method is called.")],1),t._v(" "),a("h3",{attrs:{id:"open"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open"}}),t._v(" open")]),t._v(" "),a("a",{staticClass:"source-code-link",attrs:{href:"https://github.com/handsontable/handsontable/blob/94c16465924c6a7b1daf57e583d6b439e83de010/handsontable/src/plugins/contextMenu/contextMenu.js#L200",target:"_blank"}},[t._v(" Source code "),a("OutboundLink")],1),a("p",[a("em",[t._v("contextMenu.open(event)")])]),t._v(" "),a("p",[t._v("Opens menu and re-position it based on the passed coordinates.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Param")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("event")]),t._v(" "),a("td",[a("code",[t._v("Event")])]),t._v(" "),a("td",[t._v("The mouse event object.")])])])]),t._v(" "),a("h3",{attrs:{id:"updateplugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#updateplugin"}}),t._v(" updatePlugin")]),t._v(" "),a("a",{staticClass:"source-code-link",attrs:{href:"https://github.com/handsontable/handsontable/blob/94c16465924c6a7b1daf57e583d6b439e83de010/handsontable/src/plugins/contextMenu/contextMenu.js#L175",target:"_blank"}},[t._v(" Source code "),a("OutboundLink")],1),a("p",[a("em",[t._v("contextMenu.updatePlugin()")])]),t._v(" "),a("p",[t._v("Updates the plugin's state.")]),t._v(" "),a("p",[t._v("This method is executed when "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/core/#updatesettings"}},[a("code",[t._v("updateSettings()")])]),t._v(" is invoked with any of the following configuration options:")],1),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/javascript-data-grid/api/options/#contextmenu"}},[a("code",[t._v("contextMenu")])])],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);