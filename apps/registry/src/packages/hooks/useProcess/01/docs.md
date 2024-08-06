---
name: useProcess
description: The `useProcess` hook provides a convenient way to manage the execution of asynchronous processes, with built-in state management to track whether a process is currently running. This is particularly useful for handling loading states in user interfaces during async and not async operations.
tags: [hooks, process, useProcess]
version_included: 0.2.0
---

### Return Values

| Name           | Type                                               | Description                                                                          |
| -------------- | -------------------------------------------------- | ------------------------------------------------------------------------------------ |
| isProcessing   | `boolean`                                          | Indicates whether the process is currently running.                                  |
| executeProcess | `(callback: () => Promise<void>) => Promise<void>` | Function to execute a provided asynchronous callback, managing its processing state. |
