---
name: Tooltip
description: The tooltip component enhances user interaction by providing contextual information when hovering over or focusing on an element.
tags: [Tooltip]
version_included: 0.2.0
---

## OverlayArrow Props

| Name     | Type                        | Default | Description                                                                                         |
| -------- | --------------------------- | ------- | --------------------------------------------------------------------------------------------------- |
| position | `TooltipProps["placement"]` | `"top"` | The position of the tooltip relative to the trigger element, which affects the arrow's orientation. |
| ...props | `OverlayArrowPropsAria`     | -       | Additional props to pass to the `OverlayArrowAria` component from `react-aria-components`.          |

## Tooltip Props

| Name      | Type              | Default | Description                                                                           |
| --------- | ----------------- | ------- | ------------------------------------------------------------------------------------- |
| className | `string`          | -       | Additional classes to apply to the tooltip.                                           |
| children  | `React.ReactNode` | -       | The content to be displayed inside the tooltip.                                       |
| ...props  | `TooltipProps`    | -       | Additional props to pass to the `TooltipAria` component from `react-aria-components`. |
