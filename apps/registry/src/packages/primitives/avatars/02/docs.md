---
name: Avatar With Icon
description: An extension of the Avatar component that adds an optional icon overlay. It retains all features of the Avatar while allowing an icon to be displayed in the corner.
tags: [avatar, icon, component, image]
version_included: 0.2.0
---

## Props

| Name       | Type                        | Default    | Description                                                       |
| ---------- | --------------------------- | ---------- | ----------------------------------------------------------------- |
| src        | `string \| StaticImageData` | -          | The source of the avatar image.                                   |
| alt        | `string`                    | `"avatar"` | The alt text for the image.                                       |
| className  | `string`                    | -          | Additional CSS classes for custom styling.                        |
| name       | `string`                    | -          | The name from which to generate initials if no image is provided. |
| isDisabled | `boolean`                   | `false`    | Determines if the avatar is in a disabled state.                  |
| icon       | `JSX.Element`               | -          | An optional icon to display in the corner of the avatar.          |
