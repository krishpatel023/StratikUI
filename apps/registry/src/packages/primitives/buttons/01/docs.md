---
name: Default Button
description: A customizable button component with different styles based on the provided variant and processing state. Includes an internal Loader component for indicating loading state.
tags: [button, simple]
version_included: 0.2.0
---

## Button Props

| Name         | Type                                                                            | Default     | Description                                                                                                          |
| ------------ | ------------------------------------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------------- |
| isProcessing | `boolean`                                                                       | `false`     | Indicates if the button is in a processing/loading state.                                                            |
| isDisabled   | `boolean`                                                                       | -           | Disables the button when true.                                                                                       |
| variant      | `"primary" \| "secondary" \| "destructive" \| "outline" \| "ghost" \| "accent"` | `"primary"` | Specifies the button style. Options include "primary", "secondary", "destructive", "outline", "ghost", and "accent". |
| className    | `string`                                                                        | -           | Additional CSS classes for custom styling.                                                                           |
| children     | `React.ReactNode`                                                               | -           | The content inside the button.                                                                                       |
