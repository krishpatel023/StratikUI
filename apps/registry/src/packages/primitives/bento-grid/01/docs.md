---
name: Bento Grid
description: A flexible grid layout component for arranging children in a responsive grid. Includes a BentoGridItem component for individual grid items with responsive span control.
tags: [grid, bento grid]
version_included: 0.2.0
---

## BentoGrid Props

| Name      | Type              | Default | Description                                  |
| --------- | ----------------- | ------- | -------------------------------------------- |
| children  | `React.ReactNode` | -       | The content to be displayed inside the grid. |
| span      | `number`          | -       | Number of columns for medium-sized screens.  |
| className | `string`          | -       | Additional CSS classes for custom styling.   |

## BentoGridItem Props

| Name      | Type              | Default | Description                                         |
| --------- | ----------------- | ------- | --------------------------------------------------- |
| children  | `React.ReactNode` | -       | The content to be displayed inside the grid item.   |
| span      | `number`          | -       | Number of columns to span for medium-sized screens. |
| className | `string`          | -       | Additional CSS classes for custom styling.          |
