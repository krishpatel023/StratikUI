---
name: Default Avatar
description: A versatile Avatar component that displays an image or initials based on the provided name. It supports customization through additional styles and can indicate a disabled state.
tags: [avatar, component, image]
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
