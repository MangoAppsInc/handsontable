(window.webpackJsonp=window.webpackJsonp||[]).push([[185],{775:function(t,e,a){"use strict";a.r(e);var o=a(91),s=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"migrate-from-11-1-to-12-0"}},[a("span",{staticClass:"header-framework"},[t._v("JavaScript Data Grid")]),a("a",{staticClass:"header-anchor",attrs:{href:"#migrate-from-11-1-to-12-0"}}),t._v(" Migrate from 11.1 to 12.0")]),t._v(" "),a("p",[t._v("Migrate from Handsontable 11.1 to Handsontable 12.0, released on April 28, 2022.")]),t._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("div",{staticClass:"toc-container-header"},[t._v("In this article")]),a("ul",[a("li",[a("a",{attrs:{href:"#step-1-verify-your-updatesettings-calls"}},[t._v("Step 1: Verify your updateSettings() calls")])]),a("li",[a("a",{attrs:{href:"#step-2-adjust-to-the-updateplugin-changes"}},[t._v("Step 2: Adjust to the updatePlugin() changes")])]),a("li",[a("a",{attrs:{href:"#step-3-adjust-to-the-afterdocumentkeydown-changes"}},[t._v("Step 3: Adjust to the afterDocumentKeyDown changes")])]),a("li",[a("a",{attrs:{href:"#step-4-adjust-to-the-default-keyboard-shortcuts-changes"}},[t._v("Step 4: Adjust to the default keyboard shortcuts changes")])]),a("li",[a("a",{attrs:{href:"#step-5-avoid-referring-to-wt"}},[t._v("Step 5: Avoid referring to _wt")])])])]),a("p"),t._v(" "),a("h2",{attrs:{id:"step-1-verify-your-updatesettings-calls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-verify-your-updatesettings-calls"}}),t._v(" Step 1: Verify your "),a("code",[t._v("updateSettings()")]),t._v(" calls")]),t._v(" "),a("p",[t._v("Handsontable 12.0.0 changes how the "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/core/#updatesettings"}},[a("code",[t._v("updateSettings()")])]),t._v(" method handles your grid's "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/options/#data"}},[a("code",[t._v("data")])]),t._v(".")],1),t._v(" "),a("p",[t._v("Each "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/core/#updatesettings"}},[a("code",[t._v("updateSettings()")])]),t._v(" call with the "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/options/#data"}},[a("code",[t._v("data")])]),t._v(" option defined:")],1),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Before")]),t._v(" "),a("th",[t._v("After")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Replaces "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/options/#data"}},[a("code",[t._v("data")])])],1),t._v(" "),a("td",[t._v("Replaces "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/options/#data"}},[a("code",[t._v("data")])])],1)]),t._v(" "),a("tr",[a("td",[t._v("Triggers the same hooks as "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/core/#loaddata"}},[a("code",[t._v("loadData()")])])],1),t._v(" "),a("td",[t._v("Triggers the same hooks as "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/core/#updatedata"}},[a("code",[t._v("updateData()")])])],1)]),t._v(" "),a("tr",[a("td",[t._v("Resets configuration options to the initial state")]),t._v(" "),a("td",[t._v("Doesn't reset configuration options to the initial state")])]),t._v(" "),a("tr",[a("td",[t._v("Resets index mapper information")]),t._v(" "),a("td",[t._v("Doesn't reset index mapper information")])])])]),t._v(" "),a("h4",{attrs:{id:"migrating-to-handsontable-12-0"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrating-to-handsontable-12-0"}}),t._v(" Migrating to Handsontable 12.0")]),t._v(" "),a("p",[t._v("If you need to reset your index mapper information and configuration options  along with updating your "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/options/#data"}},[a("code",[t._v("data")])]),t._v(":")],1),t._v(" "),a("ul",[a("li",[t._v("Instead of passing the "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/options/#data"}},[a("code",[t._v("data")])]),t._v(" option to the "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/core/#updatesettings"}},[a("code",[t._v("updateSettings()")])]),t._v(" method, run "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/core/#loadData"}},[a("code",[t._v("loadData()")])]),t._v(" and provide the new dataset as its argument:")],1)]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Handsontable 12.0: this doesn't reset your configuration options and index mapper information")]),t._v("\nhotInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateSettings")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" newDataset\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Handsontable 12.0: this does reset your configuration options and index mapper information")]),t._v("\nhotInstance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("loadData")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newDataset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p"),t._v(" "),a("p"),t._v(" "),a("p"),t._v(" "),a("h4",{attrs:{id:"framework-wrappers"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#framework-wrappers"}}),t._v(" Framework wrappers")]),t._v(" "),a("p",[t._v("Updating your "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/options/#data"}},[a("code",[t._v("data")])]),t._v(" through a component property no longer resets your index mapper information and configuration options.")],1),t._v(" "),a("p",[t._v("To replace "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/options/#data"}},[a("code",[t._v("data")])]),t._v(" and reset the states, call the "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/core/#loadData"}},[a("code",[t._v("loadData()")])]),t._v(" method (the same way as above), referencing the Handsontable instance from the component.")],1),t._v(" "),a("p",[t._v("Read more on referencing the Handsontable instance:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/javascript-data-grid/angular-hot-reference/"}},[t._v("Referencing the Handsontable instance in Angular")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/react-data-grid/instance-methods/"}},[t._v("Referencing the Handsontable instance in React")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/javascript-data-grid/vue-hot-reference/"}},[t._v("Referencing the Handsontable instance in Vue 2")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/javascript-data-grid/vue3-hot-reference/"}},[t._v("Referencing the Handsontable instance in Vue 3")])],1)]),t._v(" "),a("h2",{attrs:{id:"step-2-adjust-to-the-updateplugin-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-adjust-to-the-updateplugin-changes"}}),t._v(" Step 2: Adjust to the "),a("code",[t._v("updatePlugin()")]),t._v(" changes")]),t._v(" "),a("p",[t._v("Handsontable 12.0.0 changes how the "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/auto-column-size/#updateplugin"}},[a("code",[t._v("updatePlugin()")])]),t._v(" method reacts to "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/core/#updatesettings"}},[a("code",[t._v("updateSettings()")])]),t._v(" calls.")],1),t._v(" "),a("p",[t._v("This change might affect your custom plugins.")]),t._v(" "),a("h4",{attrs:{id:"before"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#before"}}),t._v(" Before")]),t._v(" "),a("p",[t._v("Every "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/core/#updatesettings"}},[a("code",[t._v("updateSettings()")])]),t._v(" call (even with an empty object passed as new settings) triggered\nthe "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/auto-column-size/#updateplugin"}},[a("code",[t._v("updatePlugin()")])]),t._v(" method for each enabled plugin.")],1),t._v(" "),a("p",[t._v("As a result, whenever you called "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/core/#updatesettings"}},[a("code",[t._v("updateSettings()")])]),t._v(", all enabled plugins got updated.")],1),t._v(" "),a("h4",{attrs:{id:"after"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#after"}}),t._v(" After")]),t._v(" "),a("p",[t._v("A plugin's "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/auto-column-size/#updateplugin"}},[a("code",[t._v("updatePlugin()")])]),t._v(" method gets triggered only when the object passed to "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/core/#updatesettings"}},[a("code",[t._v("updateSettings()")])]),t._v(" contains at least one of the following:")],1),t._v(" "),a("ul",[a("li",[t._v("The plugin's "),a("RouterLink",{attrs:{to:"/javascript-data-grid/custom-plugins/#_2-extend-the-baseplugin"}},[a("code",[t._v("PLUGIN_KEY")])]),t._v(" (the plugin's main alias)")],1),t._v(" "),a("li",[t._v("An entry from the plugin's "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/base-plugin/#setting-keys"}},[a("code",[t._v("SETTING_KEYS")])]),t._v(" (a property that stores all additional settings relevant to the plugin)")],1)]),t._v(" "),a("p",[t._v("As a result, a plugin gets updated only if you update settings related to that particular plugin.")]),t._v(" "),a("h4",{attrs:{id:"migrating-to-handsontable-12-0-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrating-to-handsontable-12-0-2"}}),t._v(" Migrating to Handsontable 12.0")]),t._v(" "),a("p",[t._v("If you want your "),a("RouterLink",{attrs:{to:"/javascript-data-grid/custom-plugins/"}},[t._v("custom plugin")]),t._v(" to still get updated on every "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/core/#updatesettings"}},[a("code",[t._v("updateSettings()")])]),t._v(" call, set your plugin's "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/base-plugin/#setting-keys"}},[a("code",[t._v("SETTING_KEYS")])]),t._v(" to "),a("code",[t._v("true")]),t._v(":")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("SETTING_KEYS")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("However, in most cases, it's better to provide an explicit list of configuration options that your custom plugin observes. For details, see the "),a("RouterLink",{attrs:{to:"/javascript-data-grid/custom-plugins/"}},[t._v("Plugins")]),t._v(" guide.")],1),t._v(" "),a("h2",{attrs:{id:"step-3-adjust-to-the-afterdocumentkeydown-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-3-adjust-to-the-afterdocumentkeydown-changes"}}),t._v(" Step 3: Adjust to the "),a("code",[t._v("afterDocumentKeyDown")]),t._v(" changes")]),t._v(" "),a("p",[t._v("Handsontable 12.0.0 changes how the "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/hooks/#afterdocumentkeydown"}},[a("code",[t._v("afterDocumentKeyDown")])]),t._v(" hook works.")],1),t._v(" "),a("h4",{attrs:{id:"before-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#before-2"}}),t._v(" Before")]),t._v(" "),a("p",[t._v("When you used a keyboard to navigate an internal Handsontable instance (e.g., a context menu), the "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/hooks/#afterdocumentkeydown"}},[a("code",[t._v("afterDocumentKeyDown")])]),t._v(" hook got fired on every key press.")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("afterDocumentKeyDown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// when you navigate the grid, the console message gets logged on every key press")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// when you navigate the context menu, the console message also gets logged on every key press")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key pressed'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h4",{attrs:{id:"after-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#after-2"}}),t._v(" After")]),t._v(" "),a("p",[t._v("When you use a keyboard to navigate some internal instances of Handsontable (e.g., a context menu), the "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/hooks/#afterdocumentkeydown"}},[a("code",[t._v("afterDocumentKeyDown")])]),t._v(" hook may not get fired anymore.")],1),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("afterDocumentKeyDown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// when you navigate the grid, the console message gets logged on every key press")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// when you navigate the context menu, the console message doesn't get logged at all")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'key pressed'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("This change may affect the following areas of Handsontable:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/javascript-data-grid/api/context-menu/"}},[t._v("Context menu")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/javascript-data-grid/api/dropdown-menu/"}},[t._v("Dropdown menu")])],1)]),t._v(" "),a("h4",{attrs:{id:"migrating-to-handsontable-12-0-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrating-to-handsontable-12-0-3"}}),t._v(" Migrating to Handsontable 12.0")]),t._v(" "),a("p",[t._v("You can't change this behavior by using any of Handsontable's APIs.")]),t._v(" "),a("h2",{attrs:{id:"step-4-adjust-to-the-default-keyboard-shortcuts-changes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-4-adjust-to-the-default-keyboard-shortcuts-changes"}}),t._v(" Step 4: Adjust to the default keyboard shortcuts changes")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("These changes don't affect your custom keyboard shortcuts.")])]),t._v(" "),a("p",[t._v("Handsontable 12.0 introduces a new keyboard shortcuts API, "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/shortcut-manager/"}},[a("code",[t._v("ShortcutManager")])]),t._v(".")],1),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/javascript-data-grid/api/shortcut-manager/"}},[a("code",[t._v("ShortcutManager")])]),t._v(" lets you easily manage your custom keyboard shortcuts,\nbut also changes how Handsontable defines its default keyboard shortcuts.\nNow, nearly all default keyboard shortcuts are defined explicitly.")],1),t._v(" "),a("p",[t._v("We took this opportunity to improve the behavior of Handsontable's default keyboard shortcuts, so they:")]),t._v(" "),a("ul",[a("li",[t._v("Better match their counterparts in popular spreadsheet software")]),t._v(" "),a("li",[t._v("Improve the consistency of keyboard navigation")]),t._v(" "),a("li",[t._v("Create a more intuitive user experience")])]),t._v(" "),a("h4",{attrs:{id:"ctrl-vs-cmd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ctrl-vs-cmd"}}),t._v(" "),a("kbd",[a("strong",[t._v("Ctrl")])]),t._v(" vs "),a("kbd",[a("strong",[t._v("Cmd")])])]),t._v(" "),a("p",[t._v("Handsontable 12.0 splits a cross-platform modifier key ("),a("kbd",[a("strong",[t._v("Ctrl")])]),t._v("/"),a("kbd",[a("strong",[t._v("Cmd")])]),t._v(") into two separate keys.\nNow, the "),a("kbd",[a("strong",[t._v("Cmd")])]),t._v(" key triggers actions on macOS where the "),a("kbd",[a("strong",[t._v("Ctrl")])]),t._v(" key triggers actions on Windows.")]),t._v(" "),a("p",[t._v("For example, the table below shows how this change affects the "),a("kbd",[a("strong",[t._v("Ctrl")])]),t._v("/"),a("kbd",[a("strong",[t._v("Cmd")])]),t._v(" + "),a("kbd",[a("strong",[t._v("A")])]),t._v(" shortcut:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th",[t._v("Before")]),t._v(" "),a("th",[t._v("After")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Windows")]),t._v(" "),a("td",[a("kbd",[a("strong",[t._v("Ctrl")])]),t._v(" + "),a("kbd",[a("strong",[t._v("A")])]),t._v(" works"),a("br"),a("kbd",[a("strong",[t._v("Cmd")])]),t._v(" + "),a("kbd",[a("strong",[t._v("A")])]),t._v(" works")]),t._v(" "),a("td",[t._v("Only "),a("kbd",[a("strong",[t._v("Ctrl")])]),t._v(" + "),a("kbd",[a("strong",[t._v("A")])]),t._v(" works")])]),t._v(" "),a("tr",[a("td",[t._v("macOS")]),t._v(" "),a("td",[a("kbd",[a("strong",[t._v("Ctrl")])]),t._v(" + "),a("kbd",[a("strong",[t._v("A")])]),t._v(" works"),a("br"),a("kbd",[a("strong",[t._v("Cmd")])]),t._v(" + "),a("kbd",[a("strong",[t._v("A")])]),t._v(" works")]),t._v(" "),a("td",[t._v("Only "),a("kbd",[a("strong",[t._v("Cmd")])]),t._v(" + "),a("kbd",[a("strong",[t._v("A")])]),t._v(" works")])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("The default keyboard shortcut for "),a("a",{attrs:{href:"#keyboard-shortcuts-changes-cell-merging"}},[t._v("merging cells")]),t._v(" is an exception: "),a("kbd",[a("strong",[t._v("Cmd")])]),t._v(" + "),a("kbd",[a("strong",[t._v("M")])]),t._v(" doesn't work anymore, as it conflicted with macOS's shortcut for window minimizing.")])]),t._v(" "),a("h4",{attrs:{id:"keyboard-shortcuts-changes-navigation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyboard-shortcuts-changes-navigation"}}),t._v(" Keyboard shortcuts changes: Navigation")]),t._v(" "),a("p",[t._v("The table below summarizes default keyboard shortcuts changes related to navigation:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Windows")]),t._v(" "),a("th",[t._v("macOS")]),t._v(" "),a("th",[t._v("Before")]),t._v(" "),a("th",[t._v("After")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("kbd",[a("strong",[t._v("Ctrl")])]),t._v(" + "),a("kbd",[a("strong",[t._v("↑")])])]),t._v(" "),a("td",[a("kbd",[a("strong",[t._v("Cmd")])]),t._v(" + "),a("kbd",[a("strong",[t._v("↑")])])]),t._v(" "),a("td",[t._v("Extend the selection by one cell up")]),t._v(" "),a("td",[t._v("Move to the first cell of the current column")])]),t._v(" "),a("tr",[a("td",[a("kbd",[a("strong",[t._v("Ctrl")])]),t._v(" + "),a("kbd",[a("strong",[t._v("↓")])])]),t._v(" "),a("td",[a("kbd",[a("strong",[t._v("Cmd")])]),t._v(" + "),a("kbd",[a("strong",[t._v("↓")])])]),t._v(" "),a("td",[t._v("Extend the selection by one cell down")]),t._v(" "),a("td",[t._v("Move to the last cell of the current column")])]),t._v(" "),a("tr",[a("td",[a("kbd",[a("strong",[t._v("Ctrl")])]),t._v(" + "),a("kbd",[a("strong",[t._v("←")])])]),t._v(" "),a("td",[a("kbd",[a("strong",[t._v("Cmd")])]),t._v(" + "),a("kbd",[a("strong",[t._v("←")])])]),t._v(" "),a("td",[t._v("Extend the selection by one cell to the left")]),t._v(" "),a("td",[t._v("Move to the leftmost cell of the current row")])]),t._v(" "),a("tr",[a("td",[a("kbd",[a("strong",[t._v("Ctrl")])]),t._v(" + "),a("kbd",[a("strong",[t._v("→")])])]),t._v(" "),a("td",[a("kbd",[a("strong",[t._v("Cmd")])]),t._v(" + "),a("kbd",[a("strong",[t._v("→")])])]),t._v(" "),a("td",[t._v("Extend the selection by one cell to the right")]),t._v(" "),a("td",[t._v("Move to the rightmost cell of the current row")])]),t._v(" "),a("tr",[a("td",[a("kbd",[a("strong",[t._v("Home")])])]),t._v(" "),a("td",[a("kbd",[a("strong",[t._v("Home")])])]),t._v(" "),a("td",[t._v("Move to the first cell of the current row")]),t._v(" "),a("td",[t._v("Move to the first non-frozen cell of the current row"),a("sup",[t._v("*")])])]),t._v(" "),a("tr",[a("td",[a("kbd",[a("strong",[t._v("Ctrl")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Home")])])]),t._v(" "),a("td",[a("kbd",[a("strong",[t._v("Cmd")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Home")])])]),t._v(" "),a("td",[t._v("Move to the first cell of the current column")]),t._v(" "),a("td",[t._v("Move to the first non-frozen cell of the grid"),a("sup",[t._v("*")])])]),t._v(" "),a("tr",[a("td",[a("kbd",[a("strong",[t._v("End")])])]),t._v(" "),a("td",[a("kbd",[a("strong",[t._v("End")])])]),t._v(" "),a("td",[t._v("Move to the last cell of the current row")]),t._v(" "),a("td",[t._v("Move to the last non-frozen cell of the current row"),a("sup",[t._v("*")])])]),t._v(" "),a("tr",[a("td",[a("kbd",[a("strong",[t._v("Ctrl")])]),t._v(" + "),a("kbd",[a("strong",[t._v("End")])])]),t._v(" "),a("td",[a("kbd",[a("strong",[t._v("Cmd")])]),t._v(" + "),a("kbd",[a("strong",[t._v("End")])])]),t._v(" "),a("td",[t._v("Move to the last cell of the current column")]),t._v(" "),a("td",[t._v("Move to the last non-frozen cell of the grid"),a("sup",[t._v("*")])])])])]),t._v(" "),a("p",[a("sup",[t._v("*")]),t._v(" This action depends on your "),a("RouterLink",{attrs:{to:"/javascript-data-grid/layout-direction/"}},[t._v("layout direction")]),t._v(".")],1),t._v(" "),a("h4",{attrs:{id:"keyboard-shortcuts-changes-selection"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyboard-shortcuts-changes-selection"}}),t._v(" Keyboard shortcuts changes: Selection")]),t._v(" "),a("p",[t._v("The table below summarizes default keyboard shortcuts changes related to selection:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Windows")]),t._v(" "),a("th",[t._v("macOS")]),t._v(" "),a("th",[t._v("Before")]),t._v(" "),a("th",[t._v("After")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("kbd",[a("strong",[t._v("Ctrl")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Shift")])]),t._v(" + "),a("kbd",[a("strong",[t._v("↑")])])]),t._v(" "),a("td",[a("kbd",[a("strong",[t._v("Cmd")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Shift")])]),t._v(" + "),a("kbd",[a("strong",[t._v("↑")])])]),t._v(" "),a("td",[t._v("Extend the selection by one cell up")]),t._v(" "),a("td",[t._v("Extend the selection to the first cell of the current column"),a("sup",[t._v("**")])])]),t._v(" "),a("tr",[a("td",[a("kbd",[a("strong",[t._v("Ctrl")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Shift")])]),t._v(" + "),a("kbd",[a("strong",[t._v("↓")])])]),t._v(" "),a("td",[a("kbd",[a("strong",[t._v("Cmd")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Shift")])]),t._v(" + "),a("kbd",[a("strong",[t._v("↓")])])]),t._v(" "),a("td",[t._v("Extend the selection by one cell down")]),t._v(" "),a("td",[t._v("Extend the selection to the last cell of the current column"),a("sup",[t._v("**")])])]),t._v(" "),a("tr",[a("td",[a("kbd",[a("strong",[t._v("Ctrl")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Shift")])]),t._v(" + "),a("kbd",[a("strong",[t._v("←")])])]),t._v(" "),a("td",[a("kbd",[a("strong",[t._v("Cmd")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Shift")])]),t._v(" + "),a("kbd",[a("strong",[t._v("←")])])]),t._v(" "),a("td",[t._v("Extend the selection by one cell to the left")]),t._v(" "),a("td",[t._v("Extend the selection to the leftmost cell of the current row"),a("sup",[t._v("**")])])]),t._v(" "),a("tr",[a("td",[a("kbd",[a("strong",[t._v("Ctrl")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Shift")])]),t._v(" + "),a("kbd",[a("strong",[t._v("→")])])]),t._v(" "),a("td",[a("kbd",[a("strong",[t._v("Cmd")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Shift")])]),t._v(" + "),a("kbd",[a("strong",[t._v("→")])])]),t._v(" "),a("td",[t._v("Extend the selection by one cell to the right")]),t._v(" "),a("td",[t._v("Extend the selection to the rightmost cell of the current row"),a("sup",[t._v("**")])])]),t._v(" "),a("tr",[a("td",[a("kbd",[a("strong",[t._v("Ctrl")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Shift")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Home")])])]),t._v(" "),a("td",[a("kbd",[a("strong",[t._v("Cmd")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Shift")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Home")])])]),t._v(" "),a("td",[t._v("Extend the selection to the first cell of the current column")]),t._v(" "),a("td",[t._v("Doesn't work anymore (replaced by "),a("kbd",[a("strong",[t._v("Ctrl")])]),t._v("/"),a("kbd",[a("strong",[t._v("Cmd")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Shift")])]),t._v(" + "),a("kbd",[a("strong",[t._v("↑")])]),t._v(")")])]),t._v(" "),a("tr",[a("td",[a("kbd",[a("strong",[t._v("Ctrl")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Shift")])]),t._v(" + "),a("kbd",[a("strong",[t._v("End")])])]),t._v(" "),a("td",[a("kbd",[a("strong",[t._v("Cmd")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Shift")])]),t._v(" + "),a("kbd",[a("strong",[t._v("End")])])]),t._v(" "),a("td",[t._v("Extend the selection to the last cell of the current column")]),t._v(" "),a("td",[t._v("Doesn't work anymore (replaced by "),a("kbd",[a("strong",[t._v("Ctrl")])]),t._v("/"),a("kbd",[a("strong",[t._v("Cmd")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Shift")])]),t._v(" + "),a("kbd",[a("strong",[t._v("↓")])]),t._v(")")])]),t._v(" "),a("tr",[a("td",[a("kbd",[a("strong",[t._v("Shift")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Page Up")])])]),t._v(" "),a("td",[a("kbd",[a("strong",[t._v("Shift")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Page Up")])])]),t._v(" "),a("td",[t._v("Move one screen up")]),t._v(" "),a("td",[t._v("Extend the selection by one screen up")])]),t._v(" "),a("tr",[a("td",[a("kbd",[a("strong",[t._v("Shift")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Page Down")])])]),t._v(" "),a("td",[a("kbd",[a("strong",[t._v("Shift")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Page Down")])])]),t._v(" "),a("td",[t._v("Move one screen down")]),t._v(" "),a("td",[t._v("Extend the selection by one screen down")])]),t._v(" "),a("tr",[a("td",[a("kbd",[a("strong",[t._v("Ctrl")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Enter")])])]),t._v(" "),a("td",[a("kbd",[a("strong",[t._v("Cmd")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Enter")])])]),t._v(" "),a("td",[t._v("Enter the editing mode of the active cell")]),t._v(" "),a("td",[t._v("Fill the selected range of cells with the value of the active cell")])])])]),t._v(" "),a("p",[a("sup",[t._v("**")]),t._v(" In case of multiple selection layers, only the last selection layer gets extended.")]),t._v(" "),a("h4",{attrs:{id:"keyboard-shortcuts-changes-edition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyboard-shortcuts-changes-edition"}}),t._v(" Keyboard shortcuts changes: Edition")]),t._v(" "),a("p",[t._v("The table below summarizes default keyboard shortcuts changes related to edition:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Windows")]),t._v(" "),a("th",[t._v("macOS")]),t._v(" "),a("th",[t._v("Before")]),t._v(" "),a("th",[t._v("After")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("kbd",[a("strong",[t._v("Home")])])]),t._v(" "),a("td",[a("kbd",[a("strong",[t._v("Home")])])]),t._v(" "),a("td",[t._v("Native browser behavior for the entire window")]),t._v(" "),a("td",[t._v("Move the cursor to the beginning of the text"),a("sup",[t._v("*")])])]),t._v(" "),a("tr",[a("td",[a("kbd",[a("strong",[t._v("End")])])]),t._v(" "),a("td",[a("kbd",[a("strong",[t._v("End")])])]),t._v(" "),a("td",[t._v("Native browser behavior for the entire window")]),t._v(" "),a("td",[t._v("Move the cursor to the end of the text"),a("sup",[t._v("*")])])]),t._v(" "),a("tr",[a("td",[a("kbd",[a("strong",[t._v("Ctrl")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Z")])])]),t._v(" "),a("td",[a("kbd",[a("strong",[t._v("Cmd")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Z")])])]),t._v(" "),a("td",[t._v("Undo the last action")]),t._v(" "),a("td",[t._v("Undo the last action in the cell editor")])]),t._v(" "),a("tr",[a("td",[a("kbd",[a("strong",[t._v("Ctrl")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Shift")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Z")])])]),t._v(" "),a("td",[a("kbd",[a("strong",[t._v("Cmd")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Shift")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Z")])])]),t._v(" "),a("td",[t._v("Redo the last action")]),t._v(" "),a("td",[t._v("Redo the last action in the cell editor")])]),t._v(" "),a("tr",[a("td",[a("kbd",[a("strong",[t._v("Shift")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Page Up")])])]),t._v(" "),a("td",[a("kbd",[a("strong",[t._v("Shift")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Page Up")])])]),t._v(" "),a("td",[t._v("Move one screen up")]),t._v(" "),a("td",[t._v("Doesn't work when editing a cell")])]),t._v(" "),a("tr",[a("td",[a("kbd",[a("strong",[t._v("Shift")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Page Down")])])]),t._v(" "),a("td",[a("kbd",[a("strong",[t._v("Shift")])]),t._v(" + "),a("kbd",[a("strong",[t._v("Page Down")])])]),t._v(" "),a("td",[t._v("Move one screen down")]),t._v(" "),a("td",[t._v("Doesn't work when editing a cell")])])])]),t._v(" "),a("p",[a("sup",[t._v("*")]),t._v(" This action depends on your layout direction.")]),t._v(" "),a("h4",{attrs:{id:"keyboard-shortcuts-changes-cell-merging"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#keyboard-shortcuts-changes-cell-merging"}}),t._v(" Keyboard shortcuts changes: Cell merging")]),t._v(" "),a("p",[t._v("The table below summarizes default keyboard shortcuts changes related to cell merging:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th"),t._v(" "),a("th",[t._v("Before")]),t._v(" "),a("th",[t._v("After")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("Windows")]),t._v(" "),a("td",[a("kbd",[a("strong",[t._v("Ctrl")])]),t._v(" + "),a("kbd",[a("strong",[t._v("M")])]),t._v(" works "),a("kbd",[a("strong",[t._v("Cmd")])]),t._v(" + "),a("kbd",[a("strong",[t._v("M")])]),t._v(" works")]),t._v(" "),a("td",[t._v("Only "),a("kbd",[a("strong",[t._v("Ctrl")])]),t._v(" + "),a("kbd",[a("strong",[t._v("M")])]),t._v(" works")])]),t._v(" "),a("tr",[a("td",[t._v("macOS")]),t._v(" "),a("td",[a("kbd",[a("strong",[t._v("Ctrl")])]),t._v(" + "),a("kbd",[a("strong",[t._v("M")])]),t._v(" works "),a("kbd",[a("strong",[t._v("Cmd")])]),t._v(" + "),a("kbd",[a("strong",[t._v("M")])]),t._v(" works")]),t._v(" "),a("td",[t._v("Only "),a("kbd",[a("strong",[t._v("Ctrl")])]),t._v(" + "),a("kbd",[a("strong",[t._v("M")])]),t._v(" works"),a("br"),t._v("("),a("kbd",[a("strong",[t._v("Cmd")])]),t._v(" + "),a("kbd",[a("strong",[t._v("M")])]),t._v(" conflicted with macOS's shortcut for window minimizing)")])])])]),t._v(" "),a("h4",{attrs:{id:"migrating-to-handsontable-12-0-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrating-to-handsontable-12-0-4"}}),t._v(" Migrating to Handsontable 12.0")]),t._v(" "),a("p",[t._v("To keep the previous (pre-12.0) behavior of a default keyboard shortcut, use the new "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/shortcut-manager/"}},[a("code",[t._v("ShortcutManager")])]),t._v(" API to:")],1),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/javascript-data-grid/keyboard-shortcuts/#add-a-custom-keyboard-shortcut"}},[t._v("Add a custom keyboard shortcut")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/javascript-data-grid/keyboard-shortcuts/#remove-a-keyboard-shortcut"}},[t._v("Remove a default keyboard shortcut")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/javascript-data-grid/keyboard-shortcuts/#replace-a-keyboard-shortcut"}},[t._v("Replace a default keyboard shortcut")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/javascript-data-grid/keyboard-shortcuts/#block-a-keyboard-shortcut-s-actions"}},[t._v("Block a default keyboard shortcut's action")])],1)]),t._v(" "),a("h2",{attrs:{id:"step-5-avoid-referring-to-wt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-5-avoid-referring-to-wt"}}),t._v(" Step 5: Avoid referring to "),a("code",[t._v("_wt")])]),t._v(" "),a("p",[t._v("Handsontable 12.0.0 makes it clear that Handsontable's rendering engine ("),a("code",[t._v("_wt")]),t._v(', internally referred to as "Walkontable") is not a part of Handsontable\'s public API.')]),t._v(" "),a("p",[t._v("To emphasize this, we changed the following property name:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Before")]),t._v(" "),a("th",[t._v("After")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("handsontableInstance.view.wt")])]),t._v(" "),a("td",[a("code",[t._v("handsontableInstance.view._wt")])])])])]),t._v(" "),a("h4",{attrs:{id:"migrating-to-handsontable-12-0-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#migrating-to-handsontable-12-0-5"}}),t._v(" Migrating to Handsontable 12.0")]),t._v(" "),a("p",[a("code",[t._v("_wt")]),t._v(" has no public documentation and offers no guarantee against breaking changes.")]),t._v(" "),a("p",[t._v("If you use a private implementation of Handsontable, and you can't avoid referring to Walkontable (for example, in your custom editor or plugin), update your Walkontable references from "),a("code",[t._v("handsontableInstance.view.wt")]),t._v(" to "),a("code",[t._v("handsontableInstance.view._wt")]),t._v(".")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[a("strong",[t._v("New method: "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/base-editor/#geteditedcellrect"}},[a("code",[t._v("getEditedCellRect()")])])],1)]),t._v(" "),a("p",[t._v("If your custom editor needs to know the size and position of the edited cell,\nnow you can get them without referring to "),a("code",[t._v("_wt")]),t._v(". Instead, use the new "),a("RouterLink",{attrs:{to:"/javascript-data-grid/api/base-editor/#geteditedcellrect"}},[a("code",[t._v("getEditedCellRect()")])]),t._v(" method.")],1)])])}),[],!1,null,null,null);e.default=s.exports}}]);