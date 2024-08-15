---
name: useMousePosition
description: The `useMousePosition` hook provides real-time tracking of the mouse position, either globally or relative to a specific HTML element. This is useful for applications needing precise cursor positioning, such as custom drag-and-drop interfaces, canvas drawing, or interactive visualizations.
tags: [hooks, mouse, position, useMousePosition]
version_included: 0.2.0
---

## Parameters Values

| Name    | Type                                     | Default | Description                                                                                                                       |
| ------- | ---------------------------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------- |
| element | `React.RefObject<HTMLElement> \| string` | -       | An optional reference or ID of the HTML element to calculate mouse position relative to. If not provided, defaults to the window. |

## Return Values

| Name          | Type                       | Description                                                    |
| ------------- | -------------------------- | -------------------------------------------------------------- |
| mousePosition | `{ x: number , y: number}` | An object containing the current mouse coordinates `{ x, y }`. |

### Usage

- **Global Mouse Position**: Call `useMousePosition()` without arguments to track the cursor position relative to the entire window.
- **Element-specific Mouse Position**: Pass a `RefObject` or element ID to `useMousePosition()` to track the cursor position relative to that element.
