---
name: Pagination with only Next and Previous Buttons
description: This is a simple pagination component with only next and previous buttons. It has a default implementation of the buttons and a prop to pass the event handlers. It has no way to jump to a specific page, hence it is a simple pagination component.
tags: [Pagination, Navigation, pages]
version_included: 0.2.0
---

## Pagination

| Name              | Type                                | Default | Description                                                                 |
| ----------------- | ----------------------------------- | ------- | --------------------------------------------------------------------------- |
| initialPage       | `number`                            |         | The initial page to display.                                                |
| totalPage         | `number`                            |         | The total number of pages available.                                        |
| pageChangeHandler | `(page: number) => void` (optional) |         | A callback function invoked with the new page number when the page changes. |
