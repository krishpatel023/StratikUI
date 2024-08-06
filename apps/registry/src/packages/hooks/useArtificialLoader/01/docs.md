---
name: useArtificialLoader
description: This hooks increases the value from 0 to 100 randomly in a given time. This helps us to give the loading effects and the increase is random thus making it more realistic. You can use it in various website loaders as well as loading page elements like top loading bars.
tags: ["hooks", "artificial", "loader"]
version_included: 0.3.0
---

### UseArtificialLoaderOptions

| Name         | Type     | Default | Description                                                   |
| ------------ | -------- | ------- | ------------------------------------------------------------- |
| duration     | `number` | 5000    | Total duration of the loading process in milliseconds.        |
| initialDelay | `number` | 0       | Delay before the loader starts in milliseconds.               |
| updateCount  | `number` | 10      | Number of updates to the progress during the loading process. |

### Return Values

| Name        | Type                                             | Description                                                |
| ----------- | ------------------------------------------------ | ---------------------------------------------------------- |
| isLoading   | `boolean`                                        | Indicates whether the loading process is currently active. |
| progress    | `number`                                         | Represents the current progress percentage of the loader.  |
| startLoader | `(options?: UseArtificialLoaderOptions) => void` | Function to start the loader with optional configuration.  |
| stopLoader  | `() => void`                                     | Function to stop the loader and reset the progress.        |
