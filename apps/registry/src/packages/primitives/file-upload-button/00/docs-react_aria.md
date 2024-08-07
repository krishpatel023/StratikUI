## FileUploadButton Props

| Name      | Type                      | Default | Description                                                                                        |
| --------- | ------------------------- | ------- | -------------------------------------------------------------------------------------------------- |
| className | `string`                  | -       | Additional CSS classes for custom styling of the button.                                           |
| getFiles  | `(files: File[]) => void` | -       | Callback function that is called with the selected files.                                          |
| children  | `React.ReactNode`         | -       | The content inside the `FileUploadButton`, usually the button label.                               |
| ...props  | `FileTriggerProps`        | -       | Additional props to be passed to the `FileTrigger` component, including `accept`, `multiple`, etc. |

Check out the official documentation of [React Aria FileTrigger](https://react-spectrum.adobe.com/react-aria/FileTrigger.html) for more information.
