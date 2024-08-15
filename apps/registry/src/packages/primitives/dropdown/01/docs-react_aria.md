## DropdownTrigger Props

| Name         | Type               | Default | Description                                                             |
| ------------ | ------------------ | ------- | ----------------------------------------------------------------------- |
| label        | `string`           | -       | The label for the dropdown trigger.                                     |
| description  | `string`           | -       | A description text for the dropdown trigger, displayed below the label. |
| errorMessage | `string`           | -       | An error message displayed when there's a validation error.             |
| ...props     | `MenuTriggerProps` | -       | Additional props to be passed to the `MenuTriggerAria` component.       |

## Dropdown Props

| Name      | Type              | Default | Description                                                     |
| --------- | ----------------- | ------- | --------------------------------------------------------------- |
| items     | `any`             | -       | The items to be rendered in the dropdown menu.                  |
| children  | `React.ReactNode` | -       | The content inside the `Dropdown` component.                    |
| className | `string`          | -       | Additional CSS classes for custom styling of the dropdown menu. |
| ...props  | `MenuProps<any>`  | -       | Additional props to be passed to the `Menu` component.          |

## DropdownItem Props

| Name      | Type            | Default | Description                                                     |
| --------- | --------------- | ------- | --------------------------------------------------------------- |
| className | `string`        | -       | Additional CSS classes for custom styling of the dropdown item. |
| ...props  | `MenuItemProps` | -       | Additional props to be passed to the `MenuItem` component.      |

## DropdownHeader Props

| Name      | Type              | Default | Description                                                       |
| --------- | ----------------- | ------- | ----------------------------------------------------------------- |
| children  | `React.ReactNode` | -       | The content inside the `DropdownHeader` component.                |
| className | `string`          | -       | Additional CSS classes for custom styling of the dropdown header. |

## DropdownDivider Props

| Name      | Type     | Default | Description                                                        |
| --------- | -------- | ------- | ------------------------------------------------------------------ |
| className | `string` | -       | Additional CSS classes for custom styling of the dropdown divider. |

## SubmenuTrigger Props

| Name     | Type                  | Default | Description                                                          |
| -------- | --------------------- | ------- | -------------------------------------------------------------------- |
| ...props | `SubmenuTriggerProps` | -       | Additional props to be passed to the `SubmenuTriggerAria` component. |

Checkout the official documentation of [React Aria Menu](https://react-spectrum.adobe.com/react-aria/Menu.html)
