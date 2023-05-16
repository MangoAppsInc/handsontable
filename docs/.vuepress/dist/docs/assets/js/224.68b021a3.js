(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{813:function(e,a,t){"use strict";t.r(a);var s=t(91),n=Object(s.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"linkedphysicalindextovaluemap"}},[t("span",{staticClass:"header-framework"},[e._v("React Data Grid")]),t("a",{staticClass:"header-anchor",attrs:{href:"#linkedphysicalindextovaluemap"}}),e._v(" LinkedPhysicalIndexToValueMap")]),e._v(" "),t("p"),t("div",{staticClass:"table-of-contents"},[t("div",{staticClass:"toc-container-header"},[e._v("In this article")]),t("ul",[t("li",[t("a",{attrs:{href:"#description"}},[e._v("Description")])]),t("li",[t("a",{attrs:{href:"#methods"}},[e._v("Methods")]),t("ul",[t("li",[t("a",{attrs:{href:"#clearvalue"}},[e._v("clearValue")])]),t("li",[t("a",{attrs:{href:"#getentries"}},[e._v("getEntries")])]),t("li",[t("a",{attrs:{href:"#getlength"}},[e._v("getLength")])]),t("li",[t("a",{attrs:{href:"#getvalues"}},[e._v("getValues")])]),t("li",[t("a",{attrs:{href:"#setvalueatindex"}},[e._v("setValueAtIndex")])]),t("li",[t("a",{attrs:{href:"#setvalues"}},[e._v("setValues")])])])])])]),t("p"),e._v(" "),t("h2",{attrs:{id:"description"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#description"}}),e._v(" Description")]),e._v(" "),t("p",[e._v("Map for storing mappings from an physical index to a value. Those entries are linked and stored in a certain order.")]),e._v(" "),t("p",[e._v("It does not update stored values on remove/add row or column action. Otherwise, order of entries is updated after\nsuch changes.")]),e._v(" "),t("h2",{attrs:{id:"methods"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#methods"}}),e._v(" Methods")]),e._v(" "),t("h3",{attrs:{id:"clearvalue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#clearvalue"}}),e._v(" clearValue")]),e._v(" "),t("a",{staticClass:"source-code-link",attrs:{href:"https://github.com/handsontable/handsontable/blob/94c16465924c6a7b1daf57e583d6b439e83de010/handsontable/src/translations/maps/linkedPhysicalIndexToValueMap.js#L78",target:"_blank"}},[e._v(" Source code "),t("OutboundLink")],1),t("p",[t("em",[e._v("linkedPhysicalIndexToValueMap.clearValue(physicalIndex)")])]),e._v(" "),t("p",[e._v("Clear value for particular index.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Param")]),e._v(" "),t("th",[e._v("Type")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("physicalIndex")]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td",[e._v("Physical index.")])])])]),e._v(" "),t("h3",{attrs:{id:"getentries"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getentries"}}),e._v(" getEntries")]),e._v(" "),t("a",{staticClass:"source-code-link",attrs:{href:"https://github.com/handsontable/handsontable/blob/94c16465924c6a7b1daf57e583d6b439e83de010/handsontable/src/translations/maps/linkedPhysicalIndexToValueMap.js#L150",target:"_blank"}},[e._v(" Source code "),t("OutboundLink")],1),t("p",[t("em",[e._v("linkedPhysicalIndexToValueMap.getEntries() ⇒ Array")])]),e._v(" "),t("p",[e._v("Get every entry containing index and value, respecting order of indexes.")]),e._v(" "),t("h3",{attrs:{id:"getlength"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getlength"}}),e._v(" getLength")]),e._v(" "),t("a",{staticClass:"source-code-link",attrs:{href:"https://github.com/handsontable/handsontable/blob/94c16465924c6a7b1daf57e583d6b439e83de010/handsontable/src/translations/maps/linkedPhysicalIndexToValueMap.js#L94",target:"_blank"}},[e._v(" Source code "),t("OutboundLink")],1),t("p",[t("em",[e._v("linkedPhysicalIndexToValueMap.getLength() ⇒ number")])]),e._v(" "),t("p",[e._v("Get length of the index map.")]),e._v(" "),t("h3",{attrs:{id:"getvalues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getvalues"}}),e._v(" getValues")]),e._v(" "),t("a",{staticClass:"source-code-link",attrs:{href:"https://github.com/handsontable/handsontable/blob/94c16465924c6a7b1daf57e583d6b439e83de010/handsontable/src/translations/maps/linkedPhysicalIndexToValueMap.js#L29",target:"_blank"}},[e._v(" Source code "),t("OutboundLink")],1),t("p",[t("em",[e._v("linkedPhysicalIndexToValueMap.getValues() ⇒ Array")])]),e._v(" "),t("p",[e._v("Get full list of ordered values for particular indexes.")]),e._v(" "),t("h3",{attrs:{id:"setvalueatindex"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setvalueatindex"}}),e._v(" setValueAtIndex")]),e._v(" "),t("a",{staticClass:"source-code-link",attrs:{href:"https://github.com/handsontable/handsontable/blob/94c16465924c6a7b1daf57e583d6b439e83de010/handsontable/src/translations/maps/linkedPhysicalIndexToValueMap.js#L57",target:"_blank"}},[e._v(" Source code "),t("OutboundLink")],1),t("p",[t("em",[e._v("linkedPhysicalIndexToValueMap.setValueAtIndex(index, value, position) ⇒ boolean")])]),e._v(" "),t("p",[e._v("Set value at index and add it to the linked list of entries. Entries are stored in a certain order.")]),e._v(" "),t("p",[e._v("Note: Value will be added at the end of the queue.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Param")]),e._v(" "),t("th",[e._v("Type")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("index")]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td",[e._v("The index.")])]),e._v(" "),t("tr",[t("td",[e._v("value")]),e._v(" "),t("td",[t("code",[e._v("*")])]),e._v(" "),t("td",[e._v("The value to save.")])]),e._v(" "),t("tr",[t("td",[e._v("position")]),e._v(" "),t("td",[t("code",[e._v("number")])]),e._v(" "),t("td",[e._v("Position to which entry will be added.")])])])]),e._v(" "),t("h3",{attrs:{id:"setvalues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#setvalues"}}),e._v(" setValues")]),e._v(" "),t("a",{staticClass:"source-code-link",attrs:{href:"https://github.com/handsontable/handsontable/blob/94c16465924c6a7b1daf57e583d6b439e83de010/handsontable/src/translations/maps/linkedPhysicalIndexToValueMap.js#L40",target:"_blank"}},[e._v(" Source code "),t("OutboundLink")],1),t("p",[t("em",[e._v("linkedPhysicalIndexToValueMap.setValues(values)")])]),e._v(" "),t("p",[e._v("Set new values for particular indexes. Entries are linked and stored in a certain order.")]),e._v(" "),t("p",[e._v("Note: Please keep in mind that "),t("code",[e._v("change")]),e._v(" hook triggered by the method may not update cache of a collection immediately.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Param")]),e._v(" "),t("th",[e._v("Type")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("values")]),e._v(" "),t("td",[t("code",[e._v("Array")])]),e._v(" "),t("td",[e._v("List of set values.")])])])])])}),[],!1,null,null,null);a.default=n.exports}}]);