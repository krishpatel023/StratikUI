---
name: Switch
description: A customizable switch component with various style variants for toggling between states.
tags: [Switch, Toggle]
version_included: 0.2.0
---

## Switch Props

| Name       | Type                                                  | Default     | Description                                                                                                    |
| ---------- | ----------------------------------------------------- | ----------- | -------------------------------------------------------------------------------------------------------------- |
| variant    | `"primary" \| "accent" \| "destructive" \| "outline"` | `"primary"` | Determines the style of the switch. Options include `"primary"`, `"accent"`, `"destructive"`, and `"outline"`. |
| isDisabled | `boolean`                                             | `false`     | Disables the switch if set to `true`.                                                                          |
| isSelected | `boolean`                                             | `false`     | Indicates whether the switch is selected or not.                                                               |
| onChange   | `(value: boolean) => void`                            | -           | Callback function that is called when the switch is toggled. The new value is passed as an argument.           |
| className  | `string`                                              | -           | Additional classes to apply to the component.                                                                  |
| children   | `React.ReactNode`                                     | -           | The content to be rendered inside the switch component.                                                        |
