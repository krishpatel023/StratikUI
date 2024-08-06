---
name: useResizable
description: This hook is used to handle the resizing of an element. It can be used in multiple ways, such as pairing it with our helper functions to make the entire implementation easy or else can be used as a standalone hook. It also has callback functions that can be used to show different messages to the user based on the current state of the hook.
tags: [useResizable, component resize, drag, hooks]
version_included: 0.2.0
---

## Parameters

| Name         | Type                        | Description                                                                                   |
| ------------ | --------------------------- | --------------------------------------------------------------------------------------------- |
| containerRef | `RefObject<HTMLDivElement>` | A reference to the container element that bounds the resizable component.                     |
| resizableRef | `RefObject<HTMLDivElement>` | A reference to the element that will be resized.                                              |
| options      | `ResizableOptions`          | An optional object for configuring resize behavior, including callbacks and dimension limits. |

### `ResizableOptions`

| Name                  | Type         | Default  | Description                                                                          |
| --------------------- | ------------ | -------- | ------------------------------------------------------------------------------------ |
| minWidth              | `string`     | `"0px"`  | Minimum width of the resizable element.                                              |
| minHeight             | `string`     | `"0px"`  | Minimum height of the resizable element.                                             |
| maxWidth              | `string`     | `"100%"` | Maximum width of the resizable element.                                              |
| maxHeight             | `string`     | `"100%"` | Maximum height of the resizable element.                                             |
| onResizeStart         | `() => void` | `null`   | Callback function to execute when resizing starts.                                   |
| onResize              | `() => void` | `null`   | Callback function to execute while resizing is in progress.                          |
| onResizeEnd           | `() => void` | `null`   | Callback function to execute when resizing ends.                                     |
| expandBoundingElement | `boolean`    | `true`   | If false, prevents the resizable element from expanding beyond the container bounds. |

## Return Table

| Name                | Type                                | Description                                                        |
| ------------------- | ----------------------------------- | ------------------------------------------------------------------ | -------------------------------------------------------------- |
| containerDimensions | `{ width: number; height: number }` | Current dimensions of the resizable container.                     |
| isResizing          | `boolean`                           | Indicates if the element is currently being resized.               |
| handleResize        | `(e, direction) => void`            | Function to initiate the resize operation on mouse or touch start. |
| stopResize          | `() => void`                        | Function to stop the resize operation on mouse or touch end.       |
| handleMove          | `(e: TouchEvent                     | MouseEvent) => void`                                               | Function to handle mouse or touch move events during resizing. |
