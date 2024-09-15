---
name: Decrypt Animation 2.0
description: A customizable text animation component that simulates a `decrypting` effect by progressively revealing text with randomized characters. This effect is different to the above animation as it can handle large texts.
tags: [animation, decrypt]
version_included: 0.2.0
---

## DecryptAnimation Props

|   Name       |   Type                                      |   Default           |   Description                                                                                                                                                    |
|--------------|---------------------------------------------|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  text        | `string`                                    | `"Default Text"`     | The text to be animated.                                                                                                                                        |
| play         | `boolean`                                   | `false`             | Controls whether the animation plays.                                                                                                                           |
| iteration    | `number`                                    | `15`                | Number of iterations for each character during the animation.                                                                                                    |
| animateStyle | `"progress" \| "linear"`                    | `"progress"`        | The style of animation. "progress" animates each character progressively, while "linear" animates all characters simultaneously.                                |
| className    | `string`                                    | `undefined`         | Additional CSS classes for custom styling.                                                                                                                      |
| interval     | `number`                                    | `50`                | The speed of the animation in milliseconds.                                                                                                                     |

## Word Props

|   Name       |   Type                                      |   Default           |   Description                                                                                                                                                    |
|--------------|---------------------------------------------|---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| text         | `string`                                    | `" "`               | The individual character to animate, including spaces.                                                                                                           |
| interval     | `number`                                    | `50`                | The interval between each animation frame (in milliseconds).                                                                                                     |
| reanimate    | `boolean`                                   | `false`             | Whether to re-trigger the animation when certain props change.                                                                                                   |
| className    | `string`                                    | `undefined`         | Additional CSS classes for custom styling.                                                                                                                      |
| animateStyle | `"progress" \| "linear"`                    | `"progress"`        | The animation style, affecting how characters are randomized and revealed.                                                                                       |
| limit        | `number`                                    | `1`                 | The maximum number of iterations for randomizing characters before the correct text is displayed.                                                                |
| index        | `number`                                    | `0`                 | The index of the character in the entire text, used for progressively animating characters when `animateStyle` is set to `"progress"`.                            |
