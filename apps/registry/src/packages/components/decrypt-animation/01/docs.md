---
name: Decrypt Animation
description: A customizable text animation component that simulates a `decrypting` effect by progressively revealing text with randomized characters.
tags: [animation, text, react, decrypt]
version_included: 0.2.0
---

## DecryptAnimation Props

| Name          | Type                               | Default                                                   | Description                                                                                                                                  |
| ------------- | ---------------------------------- | --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| text          | `string`                           | `"Default Text"`                                           | The text to be animated.                                                                                                                      |
| characters    | `string`                           | - | The set of characters used to randomize the text during the animation.                                                                        |
| interval      | `number`                           | `50`                                                      | The speed of the animation in milliseconds.                                                                                                   |
| reanimate     | `boolean`                          | `false`                                                   | If true, the animation will replay when this prop changes.                                                                                     |
| setReanimate  | `React.Dispatch<React.SetStateAction<boolean>>` | `undefined`                                                | A setter function to manually trigger the reanimation.                                                                                        |
| className     | `string`                           | `undefined`                                               | Additional CSS classes for custom styling.                                                                                                    |
| animateStyle  | `"progress" \| "linear"`           | `"progress"`                                              | The style of animation. "progress" iterates over the text, while "linear" uses a fixed limit to stop randomization.                            |
| iteration     | `number`                           | `1`                                                       | The number of characters to reveal in each iteration of the animation.                                                                         |
