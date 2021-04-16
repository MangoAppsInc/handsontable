---
title: ExportFile
permalink: /next/api/export-file
canonicalUrl: /api/export-file
editLink: false
---

# ExportFile

[[toc]]

## Description


The plugin enables exporting table data to file. It allows to export data as a string, blob or a downloadable file in
CSV format.

See [the export file demo](https://handsontable.com/docs/demo-export-file.html) for examples.

**Example**  
```js
const container = document.getElementById('example');
const hot = new Handsontable(container, {
  data: getData()
});

// access to exportFile plugin instance
const exportPlugin = hot.getPlugin('exportFile');

// export as a string
exportPlugin.exportAsString('csv');

// export as a blob object
exportPlugin.exportAsBlob('csv');

// export to downloadable file (named: MyFile.csv)
exportPlugin.downloadFile('csv', {filename: 'MyFile'});

// export as a string (with specified data range):
exportPlugin.exportAsString('csv', {
  exportHiddenRows: true,     // default false
  exportHiddenColumns: true,  // default false
  columnHeaders: true,        // default false
  rowHeaders: true,           // default false
  columnDelimiter: ';',       // default ','
  range: [1, 1, 6, 6]         // [startRow, endRow, startColumn, endColumn]
});
```

## Members

### ExportOptions

_ExportFile.ExportOptions : object_

::: source-code-link https://github.com/handsontable/handsontable/blob/develop/src/plugins/exportFile/exportFile.js#L66


**Properties**

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| [exportHiddenRows] | <code>boolean</code> | <code>false</code> | Include hidden rows in the exported file. |
| [exportHiddenColumns] | <code>boolean</code> | <code>false</code> | Include hidden columns in the exported file. |
| [columnHeaders] | <code>boolean</code> | <code>false</code> | Include column headers in the exported file. |
| [rowHeaders] | <code>boolean</code> | <code>false</code> | Include row headers in the exported file. |
| [columnDelimiter] | <code>string</code> | <code>&quot;&#x27;,&#x27;&quot;</code> | Column delimiter. |
| [range] | <code>string</code> | <code>&quot;[]&quot;</code> | Cell range that will be exported to file. |

## Methods

### downloadFile

_exportFile.downloadFile(format, options)_

::: source-code-link https://github.com/handsontable/handsontable/blob/develop/src/plugins/exportFile/exportFile.js#L106

Exports table data as a downloadable file.


| Param | Type | Description |
| --- | --- | --- |
| format | `string` | Export format type eq. `'csv'`. |
| options | `ExportOptions` | Export options. |



### exportAsBlob

_exportFile.exportAsBlob(format, options) ⇒ Blob_

::: source-code-link https://github.com/handsontable/handsontable/blob/develop/src/plugins/exportFile/exportFile.js#L96

Exports table data as a blob object.


| Param | Type | Description |
| --- | --- | --- |
| format | `string` | Export format type eq. `'csv'`. |
| options | `ExportOptions` | Export options. |



### exportAsString

_exportFile.exportAsString(format, options) ⇒ string_

::: source-code-link https://github.com/handsontable/handsontable/blob/develop/src/plugins/exportFile/exportFile.js#L85

Exports table data as a string.


| Param | Type | Description |
| --- | --- | --- |
| format | `string` | Export format type eq. `'csv'`. |
| options | `ExportOptions` | Export options. |



### isEnabled

_exportFile.isEnabled() ⇒ boolean_

::: source-code-link https://github.com/handsontable/handsontable/blob/develop/src/plugins/exportFile/exportFile.js#L62

Checks if the plugin is enabled in the handsontable settings. This method is executed in [Hooks#beforeInit](./hooks/#beforeinit)
hook and if it returns `true` than the [ExportFile#enablePlugin](./export-file/#enableplugin) method is called.

