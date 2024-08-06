---
name: useClickOutside
description: The useClickOutside hook detects clicks outside a specified element and triggers a callback function. It accepts two parameters - a reference to the target element and a callback function to execute when a click outside the element is detected. This hook is useful for handling interactions like closing dropdowns or modals when a user clicks outside of them.
tags: [useClickOutside, hooks, click, outside]
version_included: 0.3.0
---

## Properties

| Name    | Type                     | Default | Description                                                                                |
| ------- | ------------------------ | ------- | ------------------------------------------------------------------------------------------ |
| ref     | `RefObject<HTMLElement>` | -       | A reference to the DOM element that the hook should monitor for outside clicks.            |
| handler | `() => void`             | -       | A callback function to be invoked when a click outside the referenced element is detected. |
