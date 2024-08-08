---
name: Pagination with Page Buttons
description: The Pagination component features buttons for incrementing and decrementing pages, as well as direct access to specific page numbers, making it user-friendly and efficient. Additionally, it includes optional event handlers for custom behavior when pages change, enhancing its flexibility for various use cases.
tags: [Pagination, Navigation, pages]
version_included: 0.2.0
---

## Pagination

| Name              | Type                                | Default | Description                                                                 |
| ----------------- | ----------------------------------- | ------- | --------------------------------------------------------------------------- |
| initialPage       | `number`                            |         | The initial page to display.                                                |
| totalPage         | `number`                            |         | The total number of pages available.                                        |
| limit             | `number` (optional)                 | `5`     | The maximum number of page buttons to display at once.                      |
| pageChangeHandler | `(page: number) => void` (optional) |         | A callback function invoked with the new page number when the page changes. |
