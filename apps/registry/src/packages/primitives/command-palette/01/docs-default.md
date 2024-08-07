## CommandPaletteTrigger Props

| Name      | Type                                    | Default | Description                                                  |
| --------- | --------------------------------------- | ------- | ------------------------------------------------------------ |
| keys      | `Key[]`                                 | -       | Array of key combinations to activate the command palette.   |
| setActive | `Dispatch<SetStateAction<boolean>>`     | -       | Function to control the active state of the command palette. |
| className | `string`                                | -       | Additional CSS classes for custom styling.                   |
| ...props  | `InputHTMLAttributes<HTMLInputElement>` | -       | Props passed to the underlying `<input>` element.            |

## CommandPaletteItem Props

| Name      | Type                                      | Default | Description                                        |
| --------- | ----------------------------------------- | ------- | -------------------------------------------------- |
| children  | `React.ReactNode`                         | -       | The content of the command palette item.           |
| className | `string`                                  | -       | Additional CSS classes for custom styling.         |
| ...props  | `ButtonHTMLAttributes<HTMLButtonElement>` | -       | Props passed to the underlying `<button>` element. |

## CommandPalette Props

| Name         | Type                     | Default | Description                                     |
| ------------ | ------------------------ | ------- | ----------------------------------------------- |
| isOpen       | `boolean`                | -       | Controls the open state of the command palette. |
| onOpenChange | `(val: boolean) => void` | -       | Callback for when the open state changes.       |
| children     | `React.ReactNode`        | -       | The content of the command palette.             |
| className    | `string`                 | -       | Additional CSS classes for custom styling.      |

## CommandPaletteMenu Props

| Name      | Type                             | Default | Description                                       |
| --------- | -------------------------------- | ------- | ------------------------------------------------- |
| children  | `React.ReactNode`                | -       | The menu items to display in the command palette. |
| isLoading | `boolean`                        | -       | Indicates if the command palette is loading.      |
| isEmpty   | `boolean`                        | -       | Indicates if there are no results to display.     |
| className | `string`                         | -       | Additional CSS classes for custom styling.        |
| ...props  | `HTMLAttributes<HTMLDivElement>` | -       | Props passed to the underlying `<div>` element.   |

## CommandPaletteSearchBar Props

| Name      | Type                                    | Default | Description                                       |
| --------- | --------------------------------------- | ------- | ------------------------------------------------- |
| className | `string`                                | -       | Additional CSS classes for custom styling.        |
| ...props  | `InputHTMLAttributes<HTMLInputElement>` | -       | Props passed to the underlying `<input>` element. |

## CommandPaletteGroup Props

| Name      | Type              | Default | Description                                     |
| --------- | ----------------- | ------- | ----------------------------------------------- |
| heading   | `string`          | -       | Optional heading for the command palette group. |
| children  | `React.ReactNode` | -       | The content of the command palette group.       |
| className | `string`          | -       | Additional CSS classes for custom styling.      |

## CommandPaletteDivider Props

| Name      | Type     | Default | Description                                |
| --------- | -------- | ------- | ------------------------------------------ |
| className | `string` | -       | Additional CSS classes for custom styling. |
