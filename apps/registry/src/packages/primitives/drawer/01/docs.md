---
name: Default Drawer
description: A sliding drawer component that can open from the left or right side of the screen. It includes a close button and automatically closes when clicking outside the drawer area.
tags: [drawer, sliding panel, navigation]
version_included: 0.2.0
---

## Drawer Props

| Name      | Type                                | Default  | Description                                                                       |
| --------- | ----------------------------------- | -------- | --------------------------------------------------------------------------------- |
| active    | `boolean`                           | -        | Indicates whether the drawer is currently open.                                   |
| setActive | `Dispatch<SetStateAction<boolean>>` | -        | Function to set the active state of the drawer.                                   |
| direction | `"left" \| "right"`                 | `"left"` | The direction from which the drawer slides in. Options are `"left"` or `"right"`. |
| children  | `React.ReactNode`                   | -        | The content inside the `Drawer` component.                                        |
| className | `string`                            | -        | Additional CSS classes for custom styling of the drawer.                          |
