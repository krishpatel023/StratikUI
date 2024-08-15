---
name: Avatar Stack
description: A component that displays a stack of Avatar components, with optional extension for additional avatars. The Avatar component is used internally to render individual avatars.
tags: [avatar, stack, component, ui]
version_included: 0.2.0
---

## Avatar Props

| Name       | Type                        | Default    | Description                                                       |
| ---------- | --------------------------- | ---------- | ----------------------------------------------------------------- |
| src        | `string \| StaticImageData` | -          | The source of the avatar image.                                   |
| alt        | `string`                    | `"avatar"` | The alt text for the image.                                       |
| className  | `string`                    | -          | Additional CSS classes for custom styling.                        |
| name       | `string`                    | -          | The name from which to generate initials if no image is provided. |
| isDisabled | `boolean`                   | `false`    | Determines if the avatar is in a disabled state.                  |

## AvatarStack Props

| Name          | Type            | Default | Description                                                                 |
| ------------- | --------------- | ------- | --------------------------------------------------------------------------- |
| avatars       | `AvatarProps[]` | -       | Array of AvatarProps objects to display in the stack.                       |
| limit         | `number`        | `5`     | Maximum number of avatars to display before showing an extension.           |
| withExtension | `boolean`       | -       | Determines whether to show an extension avatar indicating additional items. |
