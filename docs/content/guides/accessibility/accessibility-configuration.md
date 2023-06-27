---
id: 4fsb64w6
title: Accessibility configuration
metaTitle: Accessibility configuration - JavaScript Data Grid | Handsontable
description: Configure your grid for best compatibility with screen readers, and adjust other accessibility options.
permalink: /accessibility-configuration
canonicalUrl: /accessibility-configuration
tags:
  - accessibility
  - a11y
  - aria
  - jaws
  - nvda
  - voiceover
react:
  id: xwokdync
  metaTitle: Accessibility configuration - React Data Grid | Handsontable
searchCategory: Guides
---

# Accessibility configuration

Configure your grid for better compatibility with screen readers, and adjust other accessibility options.

[[toc]]

## Overview

Handsontable is designed to be accessible by default. However, you can adjust some of its accessibility options to better suit your users' needs.

## Enable tab key navigation

- Demo that showcases the `disableTabNavigation` option

## Enable navigation in headers

- Demo that showcases the `navigableHeaders` option

## Disable virtual rendering

TBD

## IME fast editing

- Demo that showcases the `imeFastEdit` option (TBD) [#10342](https://github.com/handsontable/handsontable/pull/10342)
- IME fast edit works only with JAWS

## Set explicit height of the grid

"nawigacja lepiej działa z określoną `height`, z `height: 'auto'` tak sobie"

## Styling for accessibility

## Related API reference

Configuration options:

- [`enterBeginsEditing`](@/api/options.md#enterbeginsediting)
- [`enterMoves`](@/api/options.md#entermoves)
- [`disableTabNavigation`](@/api/options.md#disabletabnavigation)
- [`navigableHeaders`](@/api/options.md#navigableheaders)
- [`tabMoves`](@/api/options.md#tabmoves)