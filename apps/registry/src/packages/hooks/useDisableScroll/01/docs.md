---
name: useDisableScroll
description: The useDisableScroll hook is used to disable scrolling on a web page or a specific element. This hook is particularly useful in scenarios where you want to prevent the user from scrolling, such as when a modal or a full-screen menu is open.
tags: [hooks, useDisableScroll, scrollbar, disable]
version_included: 0.2.0
---

## Parameters

| Name        | Type                               | Default         | Description                                                                                                                                                                   |
| ----------- | ---------------------------------- | --------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| isModalOpen | `boolean`                          | -               | A flag indicating whether the modal is open, which determines if scrolling should be disabled on the target element.                                                          |
| reference   | `string \| RefObject<HTMLElement>` | `document.body` | An optional reference to the HTML element to apply scroll behavior. Can be an element ID as a string or a React ref object. If not provided, defaults to the `document.body`. |

### Additional Information

The `useDisableScroll` hook is designed to manage the scrolling behavior of a specified HTML element when a modal or other overlay component is open. When `isModalOpen` is `true`, scrolling is disabled on the target element by setting its `overflow` style to `"hidden"`. When `isModalOpen` is `false`, scrolling is enabled by setting `overflow` back to `"auto"`.

- **Element Selection**: The target element for disabling scroll can be specified through the `reference` parameter. This can either be:
  - A `string` representing the element's ID.
  - A `RefObject` pointing to the desired element.
  - If no reference is provided, the default target is `document.body`.
