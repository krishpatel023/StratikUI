---
name: File Dropbox
description: A dropbox component for uploading files by dragging and dropping, with validation for file size, type, and number of files.
tags: [dropbox, file upload, drag and drop]
version_included: 0.2.0
---

## Dropbox Props

| Name               | Type                                   | Default | Description                                                                                                |
| ------------------ | -------------------------------------- | ------- | ---------------------------------------------------------------------------------------------------------- |
| className          | `string`                               | -       | Additional CSS classes for custom styling of the dropbox.                                                  |
| children           | `React.ReactNode`                      | -       | The content inside the `Dropbox` component, typically instructional text or iconography for the drop zone. |
| limitSize          | `number`                               | -       | Maximum allowed file size in megabytes.                                                                    |
| limitNumberOfFiles | `number`                               | -       | Maximum number of files that can be uploaded at a time.                                                    |
| allowedFileTypes   | `string[]`                             | -       | Array of allowed file types (e.g., `["image/*", ".png"]`).                                                 |
| getFiles           | `(files: File[]) => void`              | -       | A callback function that receives the valid files as an array.                                             |
| getError           | `(err: string) => void`                | -       | A callback function that receives error messages generated during validation.                              |
| ...props           | `React.HTMLAttributes<HTMLDivElement>` | -       | Additional props to be passed to the div element containing the dropbox functionality.                     |
