## FileUploadButton Props

| Name              | Type                                                                         | Default | Description                                                                               |
| ----------------- | ---------------------------------------------------------------------------- | ------- | ----------------------------------------------------------------------------------------- |
| getFiles          | `(files: File[]) => void`                                                    | -       | A callback function that receives the selected files as an array.                         |
| allowsMultiple    | `boolean`                                                                    | `false` | If `true`, multiple files can be selected.                                                |
| acceptedFileTypes | `InputHTMLAttributes<HTMLInputElement>["accept"][]`                          | -       | An array of accepted file types, used to set the `accept` attribute on the input element. |
| className         | `string`                                                                     | -       | Additional CSS classes for custom styling of the button.                                  |
| children          | `React.ReactNode`                                                            | -       | The content inside the `FileUploadButton` component, typically the button label.          |
| ...props          | `DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>` | -       | Additional props to be passed to the input element.                                       |
