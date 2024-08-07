---
name: Spotlight Container
description: The component provides a sophisticated interactive effect that responds to mouse movements. When a user moves their cursor over the HighlightGroup, the HighlighterItem elements within it glow and animate dynamically, creating a visually engaging experience. This effect is ideal for drawing attention to specific areas of your application or website, enhancing user interaction through seamless integration and customizable styling. It is not suitable for `small screens`, thus it is recommended to have an alternative for the mobile version.
tags: [highlight, mouse effect, container, spotlight]
version_included: 0.2.0
---

## HighlightGroup Props

| Name      | Type              | Default | Description                                                 |
| --------- | ----------------- | ------- | ----------------------------------------------------------- |
| children  | `React.ReactNode` | -       | The content inside the `HighlightGroup` component.          |
| className | `string`          | `""`    | Additional CSS classes for custom styling of the container. |

## HighlighterItem Props

| Name            | Type              | Default | Description                                                                |
| --------------- | ----------------- | ------- | -------------------------------------------------------------------------- |
| children        | `React.ReactNode` | -       | The content inside the `HighlighterItem` component.                        |
| className       | `string`          | `""`    | Additional CSS classes for custom styling of the item.                     |
| backgroundProps | `string`          | -       | CSS properties to style the background of the `HighlighterItem` component. |
