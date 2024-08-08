## Field Props

| Name      | Type             | Default | Description                                               |
| --------- | ---------------- | ------- | --------------------------------------------------------- |
| className | `string`         | -       | Additional classes to apply to the `TextField` component. |
| ...props  | `TextFieldProps` | -       | Any additional props for the `TextField` component.       |

## InputLabel Props

| Name      | Type         | Default | Description                                           |
| --------- | ------------ | ------- | ----------------------------------------------------- |
| className | `string`     | -       | Additional classes to apply to the `Label` component. |
| ...props  | `LabelProps` | -       | Any additional props for the `Label` component.       |

## InputError Props

| Name      | Type              | Default | Description                                                |
| --------- | ----------------- | ------- | ---------------------------------------------------------- |
| className | `string`          | -       | Additional classes to apply to the `FieldError` component. |
| ...props  | `FieldErrorProps` | -       | Any additional props for the `FieldError` component.       |

## InputBox Props

| Name      | Type                  | Default | Description                                                    |
| --------- | --------------------- | ------- | -------------------------------------------------------------- |
| className | `string`              | -       | Additional classes to apply to the `ReactAriaInput` component. |
| ...props  | `ReactAriaInputProps` | -       | Any additional props for the `ReactAriaInput` component.       |

## Input Props

| Name         | Type                                         | Default     | Description                                                   |
| ------------ | -------------------------------------------- | ----------- | ------------------------------------------------------------- |
| state        | `"default" \| "isInvalid" \| "isDisabled"`   | `"default"` | The state of the input field (default, invalid, or disabled). |
| label        | `string`                                     | -           | The label for the input field.                                |
| isRequired   | `boolean`                                    | -           | Whether the input field is required.                          |
| isReadOnly   | `boolean`                                    | -           | Whether the input field is read-only.                         |
| errorMessage | `string`                                     | -           | The error message to display if the input is invalid.         |
| className    | `string`                                     | -           | Additional classes to apply to the `Field` component.         |
| ...props     | `InputProps` (extends `ReactAriaInputProps`) | -           | Any additional props for the `Field` component.               |

Checkout the default documentation of [React Aria Input](https://react-spectrum.adobe.com/react-aria/TextField.html)
