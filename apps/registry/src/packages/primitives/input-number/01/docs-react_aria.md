## InputNumber Props

| Name         | Type                                                   | Default | Description                                                                               |
| ------------ | ------------------------------------------------------ | ------- | ----------------------------------------------------------------------------------------- |
| label        | `string`                                               | -       | The label for the number input field.                                                     |
| description  | `string`                                               | -       | A description or helper text displayed below the input field.                             |
| errorMessage | `string \| ((validation: ValidationResult) => string)` | -       | The error message displayed when validation fails.                                        |
| placeholder  | `string`                                               | -       | The placeholder text for the input field.                                                 |
| className    | `string`                                               | -       | Additional CSS classes for custom styling of the input group.                             |
| showButtons  | `boolean`                                              | `true`  | Determines whether the increment and decrement buttons are displayed.                     |
| ...props     | `NumberFieldProps`                                     | -       | Additional props for the underlying `NumberField` component from `react-aria-components`. |

Checkout the official documentation of [React Aria NumberField](https://react-spectrum.adobe.com/react-aria/NumberField.html) for more information.
