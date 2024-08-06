---
name: useCookies
description: The useCookies hook a way to manage cookie preferences and operations in a React application. It allows you to toggle, reset, accept, or reject cookie categories, as well as set, edit, remove, and retrieve cookies with ease. This hook leverages localStorage to persist cookie preferences across sessions, ensuring a consistent user experience.
tags: [hooks, cookies, use-cookies]
version_included: 0.2.0
---

## Options Table

| Name     | Type                          | Default | Description                                                    |
| -------- | ----------------------------- | ------- | -------------------------------------------------------------- |
| path     | `string`                      | "/"     | Path within the domain that the cookie is accessible to.       |
| domain   | `string`                      | -       | Domain that the cookie is accessible to.                       |
| secure   | `boolean`                     | -       | Indicates if the cookie should be transmitted over HTTPS only. |
| sameSite | `"strict" \| "lax" \| "none"` | -       | Controls the cookie's same-site policy.                        |

## Return Table

| Name                       | Type                                                                                                     | Description                                                                 |
| -------------------------- | -------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| cookiePreferences          | `CookiePreferences`                                                                                      | The current user's cookie preferences.                                      |
| toggleCookieCategory       | `(category: CookieCategory) => void`                                                                     | Toggles the acceptance of cookies for a specific category.                  |
| resetCookiePreferences     | `() => void`                                                                                             | Resets the cookie preferences to the default values.                        |
| acceptAllCookiePreferences | `() => void`                                                                                             | Accepts all categories of cookies.                                          |
| rejectAllCookiePreferences | `() => void`                                                                                             | Rejects all categories of cookies.                                          |
| setCookie                  | `(name: string, value: string, time: number, category: CookieCategory, options?: CookieOptions) => void` | Sets a cookie with the specified name, value, expiration time, and options. |
| editCookie                 | `(category: CookieCategory, name: string, value: string, days: number, options?: CookieOptions) => void` | Edits an existing cookie with the specified details.                        |
| removeCookie               | `(name: string, category: CookieCategory) => void`                                                       | Removes a cookie by name for a specific category.                           |
| getCookie                  | `(name: string) => string \| null`                                                                       | Retrieves the value of a cookie by name.                                    |
| getAllCookies              | `() => Object`                                                                                           | Returns all cookies as an object with key-value pairs.                      |

## Cookie Category Enum

The `CookieCategory` type can be one of the following strings:

- `"essential"`
- `"functional"`
- `"analytics"`
- `"advertising"`

## Parameters Table for Functions

### `toggleCookieCategory`

| Name     | Type             | Description                        |
| -------- | ---------------- | ---------------------------------- |
| category | `CookieCategory` | The category of cookies to toggle. |

### `setCookie`

| Name     | Type             | Default         | Description                                                         |
| -------- | ---------------- | --------------- | ------------------------------------------------------------------- |
| name     | `string`         | -               | The name of the cookie to set.                                      |
| value    | `string`         | -               | The value to assign to the cookie.                                  |
| time     | `number`         | -               | The time in seconds for which the cookie is valid.                  |
| category | `CookieCategory` | -               | The category of the cookie to set.                                  |
| options  | `CookieOptions`  | `{ path: "/" }` | Optional settings for cookie attributes like `path`, `domain`, etc. |

### `editCookie`

| Name     | Type             | Default | Description                                                         |
| -------- | ---------------- | ------- | ------------------------------------------------------------------- |
| category | `CookieCategory` | -       | The category of the cookie to edit.                                 |
| name     | `string`         | -       | The name of the cookie to edit.                                     |
| value    | `string`         | -       | The new value to assign to the cookie.                              |
| days     | `number`         | -       | The number of days for which the cookie should be valid.            |
| options  | `CookieOptions`  | `{}`    | Optional settings for cookie attributes like `path`, `domain`, etc. |

### `removeCookie`

| Name     | Type             | Description                           |
| -------- | ---------------- | ------------------------------------- |
| name     | `string`         | The name of the cookie to remove.     |
| category | `CookieCategory` | The category of the cookie to remove. |

### `getCookie`

| Name | Type     | Description                         |
| ---- | -------- | ----------------------------------- |
| name | `string` | The name of the cookie to retrieve. |
