---
name: Theme Toggle Group
description: The `ThemeToggle` component allows users to switch between different theme modes and reflects the current theme with active state indicators.
tags: [Toggle, Group]
version_included: 0.2.0
---

## ToggleButton Props

| Name      | Type              | Default | Description                                                                                 |
| --------- | ----------------- | ------- | ------------------------------------------------------------------------------------------- |
| isActive  | `boolean`         | `false` | Determines if the button is in an active state, affecting its styling.                      |
| className | `string`          | -       | Additional classes to apply to the button.                                                  |
| children  | `React.ReactNode` | -       | The content to be rendered inside the button.                                               |
| ...props  | `ButtonProps`     | -       | Additional props to pass to the underlying `Button` component from `react-aria-components`. |

---

## ThemeToggle Props

| Name         | Type                            | Default   | Description                                            |
| ------------ | ------------------------------- | --------- | ------------------------------------------------------ |
| defaultTheme | `"light" \| "dark" \| "system"` | `"light"` | The initial theme to be set when the component mounts. |
