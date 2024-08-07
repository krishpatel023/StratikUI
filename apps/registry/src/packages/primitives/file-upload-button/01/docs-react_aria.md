## FileUploadButton Props

| Name      | Type                      | Default     | Description                                                                                            |
| --------- | ------------------------- | ----------- | ------------------------------------------------------------------------------------------------------ |
| className | `string`                  | -           | Additional CSS classes for custom styling of the button.                                               |
| getFiles  | `(files: File[]) => void` | -           | A callback function that receives the selected files as an array.                                      |
| variant   | `ButtonProps["variant"]`  | `"primary"` | Specifies the variant of the button, allowing for different styles (e.g., `"primary"`, `"secondary"`). |
| children  | `React.ReactNode`         | -           | The content inside the `FileUploadButton` component, typically the button label.                       |
| ...props  | `FileTriggerProps`        | -           | Additional props to be passed to the `FileTrigger` component.                                          |

Check out the official documentation of [React Aria FileTrigger](https://react-spectrum.adobe.com/react-aria/FileTrigger.html) for more information.
