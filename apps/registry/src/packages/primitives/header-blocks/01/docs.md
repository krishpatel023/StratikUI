---
name: Default Header Block
description: A set of components for building a navigational header with items and dropdown functionality.
tags: [header, navigation, dropdown]
version_included: 0.2.0
---

## Header Props

| Name      | Type                                                          | Default | Description                                                     |
| --------- | ------------------------------------------------------------- | ------- | --------------------------------------------------------------- |
| className | `string`                                                      | -       | Additional CSS classes for custom styling of the header.        |
| children  | `React.ReactNode`                                             | -       | The content inside the `Header` component, typically nav items. |
| ...props  | `DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>` | -       | Additional props for the header element.                        |

## HeaderItem Props

| Name         | Type                                               | Default | Description                                                          |
| ------------ | -------------------------------------------------- | ------- | -------------------------------------------------------------------- |
| className    | `string`                                           | -       | Additional CSS classes for custom styling of the header item.        |
| open         | `boolean`                                          | `false` | Initial open state of the header item.                               |
| onChange     | `(open: boolean) => void`                          | -       | Callback function invoked when the open state changes.               |
| ref          | `LegacyRef<HTMLButtonElement>`                     | -       | Ref forwarded to the button element of the header item.              |
| onPress      | `(e: React.MouseEvent<HTMLButtonElement>) => void` | -       | Callback function invoked when the header item is pressed.           |
| onHoverStart | `(e: React.MouseEvent<HTMLButtonElement>) => void` | -       | Callback function invoked when hovering over the header item starts. |
| onHoverEnd   | `(e: React.MouseEvent<HTMLButtonElement>) => void` | -       | Callback function invoked when hovering over the header item ends.   |
| onFocus      | `(e: React.FocusEvent<HTMLButtonElement>) => void` | -       | Callback function invoked when the header item receives focus.       |
| onBlur       | `(e: React.FocusEvent<HTMLButtonElement>) => void` | -       | Callback function invoked when the header item loses focus.          |
| children     | `React.ReactNode`                                  | -       | The content inside the `HeaderItem`, typically text or an icon.      |

## HeaderDropdown Props

| Name      | Type                                                                | Default | Description                                                    |
| --------- | ------------------------------------------------------------------- | ------- | -------------------------------------------------------------- |
| className | `string`                                                            | -       | Additional CSS classes for custom styling of the dropdown.     |
| children  | `React.ReactNode`                                                   | -       | The content inside the `HeaderDropdown`, typically menu items. |
| ...props  | `DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>` | -       | Additional props for the dropdown div element.                 |
