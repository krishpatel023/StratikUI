---
name: useHash
description: useHash is a custom React hook that simplifies working with URL hash values in Next.js applications. It allows you to easily retrieve and update the hash value, while ensuring proper hydration and avoiding mismatches between server-rendered and client-rendered HTML. The hook provides a seamless way to handle hash changes and keep your component in sync with the URL hash value.
tags: [hooks, useHash, hash key, url]
version_included: 0.2.0
---

## Return Values

| Name    | Type                     | Description                                                  |
| ------- | ------------------------ | ------------------------------------------------------------ |
| hash    | `string \| null`         | The current hash value from the URL, without the `#` prefix. |
| addHash | `(hash: string) => void` | Function to update the hash value in the URL.                |

### Key Features

- **Hash Retrieval**: The `hash` state provides the current hash value from the URL, excluding the `#` prefix. It automatically updates when the hash changes in the browser.
- **Hash Update**: The `addHash` function allows you to programmatically update the hash fragment of the URL.
- **Event Handling**: The hook listens for hash changes using the `hashchange` event and updates the `hash` state accordingly. It also cleans up the event listener when the component using the hook unmounts.
