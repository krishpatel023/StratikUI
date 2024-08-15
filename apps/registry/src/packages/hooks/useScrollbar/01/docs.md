---
name: useScrollbar
description: The `useScrollbar` hook provides an easy way to track the scroll position and direction of either the window or a specific element on the page. It can be useful for triggering animations or loading content based on scroll behavior.
tags: [hooks, useScrollbar, scrollbar, scroll]
version_included: 0.2.0
---

## Parameters

| Name           | Type                                       | Default | Description                                                                                          |
| -------------- | ------------------------------------------ | ------- | ---------------------------------------------------------------------------------------------------- |
| elementIdOrRef | `string` \| `React.RefObject<HTMLElement>` | -       | A string representing the element's ID or a React ref to the target element. Defaults to the window. |

## Return Values

| Name           | Type                       | Description                                                                           |
| -------------- | -------------------------- | ------------------------------------------------------------------------------------- |
| scrollPosition | `{ x: number, y: number }` | An object representing the current scroll position along the x and y axes.            |
| directionX     | `boolean \| null`          | `true` if scrolling right, `false` if scrolling left, `null` if no movement detected. |
| directionY     | `boolean \| null`          | `true` if scrolling down, `false` if scrolling up, `null` if no movement detected.    |
