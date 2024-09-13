---
name: useClipboard
description: The useClipboard hook makes it easy to use clipboard with its two functions - copy and read.
tags: [copy, clipboard, read, useClipboard, hooks]
version_included: 0.2.0
---

## Functions Table

| Name | Parameters                              | Description                                                                              |
| ---- | --------------------------------------- | ---------------------------------------------------------------------------------------- |
| copy | `text: string`, `callback?: () => void` | Copies the provided text to the clipboard and optionally executes a callback on success. |
| read | -                                       | Reads and returns the current text from the clipboard.                                   |

## Copy parameters

| Name     | Type         | Default | Description                                                       |
| -------- | ------------ | ------- | ----------------------------------------------------------------- |
| text     | `string`     | -       | The text to be copied to the clipboard.                           |
| callback | `() => void` | -       | Optional function to execute after successfully copying the text. |
