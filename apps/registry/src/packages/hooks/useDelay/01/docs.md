---
name: useDelay
description: The useDelay hook introduces a delay before executing a specified action, utilizing useTimeout and Promise for managing the delay.  This hook supports both synchronous and asynchronous functions, making it versatile for various use cases where deferred actions are needed, such as enhancing user experience or managing timed events.
tags: [useDelay, hooks, delay, timeout, setTimeout, clearTimeout]
version_included: 0.2.0
---

## Options Table

| Name      | Type      | Default | Description                                                            |
| --------- | --------- | ------- | ---------------------------------------------------------------------- |
| immediate | `boolean` | `false` | If `true`, the callback will be executed immediately before the delay. |

## Return Table

| Name       | Type                                                                       | Description                                                                  |
| ---------- | -------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| isDelaying | `boolean`                                                                  | Indicates whether the delay is currently active.                             |
| delay      | `(time: number, callback?: () => void, options?: UseDelayOptions) => void` | Initiates a delay for the specified time and optionally executes a callback. |
| clearDelay | `() => void`                                                               | Clears the current delay and stops the timer.                                |

### `delay`

| Name     | Type              | Default | Description                                                            |
| -------- | ----------------- | ------- | ---------------------------------------------------------------------- |
| time     | `number`          | -       | The time in milliseconds for which to delay.                           |
| callback | `() => void`      | -       | Optional function to execute after the delay is complete.              |
| options  | `UseDelayOptions` | `{}`    | Optional configuration for delay behavior (e.g., immediate execution). |
