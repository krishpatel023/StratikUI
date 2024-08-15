---
name: Resizable Container
description: A resizable container component that allows dynamic resizing in specified directions, with customizable minimum dimensions. It uses the `useResizable` hook from the library to perform the resizing. This primitive includes helper functions like Container, Handle, etc to make the entire process easy. It also has callback functions that can be used to show different messages to the user based on the current state of the hook.
tags: [Resizable Container, ResizeBoundingElement, React, Component]
version_included: 0.2.0
---

## Resizable Container Props

| Name         | Type                                                                                       | Default | Description                                                                       |
| ------------ | ------------------------------------------------------------------------------------------ | ------- | --------------------------------------------------------------------------------- |
| children     | `React.ReactNode`                                                                          |         | The content to be displayed inside the resizable container.                       |
| minWidth     | `number`                                                                                   |         | The minimum width of the container in pixels.                                     |
| minHeight    | `number`                                                                                   |         | The minimum height of the container in pixels.                                    |
| direction    | `("right" \| "bottom" \| "top" \| "left")[]`                                               |         | An array specifying the directions in which the container can be resized.         |
| className    | `string` (optional)                                                                        |         | Additional classes to apply for custom styling.                                   |
| handleResize | `(e: MouseEvent \| TouchEvent, direction: "right" \| "bottom" \| "top" \| "left") => void` |         | Function to handle resizing logic, triggered on mouse or touch events.            |
| resizableRef | `React.RefObject<HTMLDivElement>`                                                          |         | Reference to the resizable element, allowing direct manipulation and measurement. |

## ResizableBoundingElement Props

| Name         | Type                              | Default | Description                                                                         |
| ------------ | --------------------------------- | ------- | ----------------------------------------------------------------------------------- |
| containerRef | `React.RefObject<HTMLDivElement>` |         | Reference to the bounding container element, used to define the resize area limits. |
| className    | `string` (optional)               |         | Additional classes to apply for custom styling.                                     |
| children     | `React.ReactNode`                 |         | The content to be displayed inside the bounding element.                            |

## Handle Props

| Name         | Type                                                                                       | Default | Description                                                               |
| ------------ | ------------------------------------------------------------------------------------------ | ------- | ------------------------------------------------------------------------- |
| direction    | `"right" \| "bottom" \| "top" \| "left"`                                                   |         | The direction in which the handle allows resizing.                        |
| directionArr | `("right" \| "bottom" \| "top" \| "left")[]`                                               |         | An array specifying the directions in which the container can be resized. |
| handleResize | `(e: MouseEvent \| TouchEvent, direction: "right" \| "bottom" \| "top" \| "left") => void` |         | Function to handle resizing logic, triggered on mouse or touch events.    |
