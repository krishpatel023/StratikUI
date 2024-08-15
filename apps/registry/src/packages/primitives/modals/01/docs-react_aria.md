## Modal Props

| Name          | Type                                                                                                                                                    | Default           | Description                                                                        |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ---------------------------------------------------------------------------------- |
| children      | `React.ReactNode`                                                                                                                                       | `null`            | Content to be displayed inside the modal.                                          |
| className     | `string`                                                                                                                                                | `""`              | Additional classes to apply to the modal container.                                |
| isDismissable | `boolean`                                                                                                                                               | `true`            | Whether the modal can be dismissed by clicking outside or pressing the escape key. |
| position      | `"center center" \| "center top" \| "center bottom" \| "left top" \| "left center" \| "left bottom" \| "right top" \| "right bottom" \| "right center"` | `"center center"` | Position of the modal on the screen.                                               |
| isBGBlur      | `boolean`                                                                                                                                               | `true`            | Whether the background should have a blur effect when the modal is open.           |
| ...props      | `DialogProps`                                                                                                                                           |                   | Additional props to be passed to the underlying `Dialog` component.                |

## ModalTrigger

| Name     | Type                 | Default | Description                                                     |
| -------- | -------------------- | ------- | --------------------------------------------------------------- |
| ...props | `DialogTriggerProps` |         | Additional props to be passed to the `DialogTrigger` component. |

## ModalClickable

A hidden button used for accessibility to close the modal.

Checkout the official documentation of [React Aria Modal](https://react-spectrum.adobe.com/react-aria/Modal.html) for more information.
