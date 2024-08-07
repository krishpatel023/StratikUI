---
name: Animated Button
description: A button component with customizable styles and animations. Includes a CircularAnimation component for visual effects on click and an internal Loader for indicating loading state.
tags: [button, animation, click animation]
version_included: 0.2.0
---

## Button Props

| Name               | Type                                                                                               | Default     | Description                                                                                                                           |
| ------------------ | -------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| animationClassName | `string`                                                                                           | -           | Additional CSS classes for the animation effect.                                                                                      |
| isProcessing       | `boolean`                                                                                          | `false`     | Indicates if the button is in a processing/loading state.                                                                             |
| isDisabled         | `boolean`                                                                                          | -           | Disables the button when true.                                                                                                        |
| variant            | `"primary" \| "secondary" \| "destructive" \| "outline" \| "ghost" \| "accent" \| "complementary"` | `"primary"` | Specifies the button style. Options include "primary", "secondary", "destructive", "outline", "ghost", "accent", and "complementary". |
| className          | `string`                                                                                           | -           | Additional CSS classes for custom styling.                                                                                            |
| children           | `React.ReactNode`                                                                                  | -           | The content inside the button.                                                                                                        |
| onClick            | `(e: React.MouseEvent<HTMLButtonElement>) => void`                                                 | -           | Callback function for button click events.                                                                                            |
