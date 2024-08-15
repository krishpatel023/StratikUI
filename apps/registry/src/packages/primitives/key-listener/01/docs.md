---
name: Key Listener
description: A set of components for handling keyboard shortcuts with custom key combinations and visual display support.
tags: [keyboard, key listener, shortcuts, events]
version_included: 0.2.0
---

## KeyListener Props

| Name           | Type                             | Default | Description                                                                                                                                |
| -------------- | -------------------------------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| keys           | `Key[]`                          | -       | An array of keys that need to be pressed simultaneously to trigger the `onKeyDown` event.                                                  |
| onKeyDown      | `(event: KeyboardEvent) => void` | -       | A callback function that is triggered when the specified key combination is pressed.                                                       |
| children       | `React.ReactNode`                | -       | The content inside the `KeyListener` component, typically nested components.                                                               |
| focusPermitted | `boolean`                        | `true`  | A flag indicating whether the key listener should be active or not. This can be helpful to disable the key listener for certain conditions |

## KeyListenerDisplay Props

| Name      | Type     | Default | Description                                                                           |
| --------- | -------- | ------- | ------------------------------------------------------------------------------------- |
| keys      | `Key[]`  | -       | An array of keys that are visually represented by the `KeyListenerDisplay` component. |
| className | `string` | -       | Additional CSS classes for custom styling of the key display elements.                |
