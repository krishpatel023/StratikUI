## Autocomplete

| Name         | Type     | Default | Description                                                            |
| ------------ | -------- | ------- | ---------------------------------------------------------------------- |
| label        | `string` |         | The label for the autocomplete input.                                  |
| description  | `string` |         | A description providing additional information about the autocomplete. |
| errorMessage | `string` |         | An error message to display if the autocomplete value is invalid.      |
| className    | `string` |         | Additional classes to apply for custom styling.                        |

## AutocompleteList

| Name      | Type     | Default | Description                                        |
| --------- | -------- | ------- | -------------------------------------------------- |
| items     | `any[]`  |         | The list of items to be displayed in the dropdown. |
| className | `string` |         | Additional classes to apply for custom styling.    |

## AutocompleteItem

| Name      | Type              | Default | Description                                     |
| --------- | ----------------- | ------- | ----------------------------------------------- |
| className | `string`          |         | Additional classes to apply for custom styling. |
| children  | `React.ReactNode` |         | The content to display within the item.         |

## AutocompleteHeader

| Name      | Type              | Default | Description                                     |
| --------- | ----------------- | ------- | ----------------------------------------------- |
| className | `string`          |         | Additional classes to apply for custom styling. |
| children  | `React.ReactNode` |         | The content to display within the header.       |

## AutocompleteDivider

| Name      | Type     | Default | Description                                     |
| --------- | -------- | ------- | ----------------------------------------------- |
| className | `string` |         | Additional classes to apply for custom styling. |

## AutocompleteSearch

| Name                 | Type      | Default | Description                                                                             |
| -------------------- | --------- | ------- | --------------------------------------------------------------------------------------- |
| listToggleWithButton | `boolean` | `false` | Determines whether the list is toggled with a button or by focusing on the input field. |

Check out the [React Aria Combobox](https://react-spectrum.adobe.com/react-aria/ComboBox.html) for more information.
