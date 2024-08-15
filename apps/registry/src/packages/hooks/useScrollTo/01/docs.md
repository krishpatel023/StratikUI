---
name: useScrollTo
description: The `useScrollTo` hook allows you to scroll smoothly to a specific element or to the top of the page and manages the visibility of elements based on scroll position. This is useful for implementing features like "Back to Top" buttons or revealing elements when the user scrolls down the page.
tags: [hooks, scroll, scrollTo, useScrollTo]
version_included: 0.2.0
---

## Parameters

| Name      | Type     | Default | Description                                          |
| --------- | -------- | ------- | ---------------------------------------------------- |
| threshold | `number` | `300`   | The scroll position threshold for visibility toggle. |

## Return Values

| Name      | Type       | Description                                                                     |
| --------- | ---------- | ------------------------------------------------------------------------------- |
| isVisible | `boolean`  | `true` if the current scroll position exceeds the threshold, otherwise `false`. |
| scroll    | `function` | A function to scroll to a specified element or to the top of the page.          |
