---
name: useFullscreen
description: The `useFullscreen` hook provides functionality for managing fullscreen mode in web applications. It allows you to request fullscreen mode for a specific element and exit fullscreen mode when needed. The hook also tracks whether the document is currently in fullscreen mode.
tags: [hooks, full screen, fullscreen]
version_included: 0.2.0
---

## Return Table

| Name              | Type                             | Description                                                       |
| ----------------- | -------------------------------- | ----------------------------------------------------------------- |
| isFullscreen      | `boolean`                        | Indicates whether the document is currently in fullscreen mode.   |
| requestFullscreen | `(element: HTMLElement) => void` | Requests fullscreen mode for a specified HTML element.            |
| exitFullscreen    | `() => void`                     | Exits fullscreen mode if the document is currently in fullscreen. |

### Key Features

- **Cross-Browser Support**: The hook handles differences in the fullscreen API across various browsers, including support for WebKit and Internet Explorer 11.
- **State Management**: The `isFullscreen` state reflects whether any element is currently in fullscreen mode, updating automatically when entering or exiting fullscreen.
- **Event Handling**: The hook listens for fullscreen change events and cleans up these listeners when the component using the hook unmounts.
