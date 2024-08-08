---
name: Vertical Stepper
description: This is a vertical stepper component that displays a series of steps. It handles the state change and navigation between steps internally and can be controlled by the user. It is designed in such a way that it can used in many different contexts. It is responsive and has a data-state attribute that can be used to show the current state of the step.
tags: [Stepper, Steps, Navigation, Progress]
version_included: 0.2.0
---

## Stepper

| Name        | Type                     | Default | Description                                                              |
| ----------- | ------------------------ | ------- | ------------------------------------------------------------------------ |
| children    | `React.ReactNode`        | -       | The steps to be displayed within the stepper.                            |
| className   | `string`                 | -       | Additional classes to apply for custom styling.                          |
| currentStep | `number`                 | -       | The currently active step, allowing control over the stepper's progress. |
| onChange    | `(step: number) => void` | -       | A callback function that is triggered when the step changes.             |

## StepLine

| Name       | Type                                     | Default | Description                                                     |
| ---------- | ---------------------------------------- | ------- | --------------------------------------------------------------- |
| className  | `string`                                 | -       | Additional classes to apply for custom styling.                 |
| step       | `number`                                 | -       | The index of the current step.                                  |
| totalSteps | `number`                                 | -       | The total number of steps in the stepper.                       |
| state      | `"active" \| "complete" \| "incomplete"` | -       | The state of the step, determining its appearance and behavior. |

## Step

| Name      | Type              | Default | Description                                     |
| --------- | ----------------- | ------- | ----------------------------------------------- |
| children  | `React.ReactNode` | -       | The content to display within the step.         |
| className | `string`          | -       | Additional classes to apply for custom styling. |

## StepInternal

| Name              | Type              | Default | Description                                                |
| ----------------- | ----------------- | ------- | ---------------------------------------------------------- |
| children          | `React.ReactNode` | -       | The content to display within the internal step component. |
| className         | `string`          | -       | Additional classes to apply for custom styling.            |
| currentActiveStep | `number`          | -       | The index of the currently active step.                    |
| step              | `number`          | -       | The index of the current step.                             |
| totalSteps        | `number`          | -       | The total number of steps in the stepper.                  |

## StepCircular

| Name      | Type                                     | Default | Description                                                     |
| --------- | ---------------------------------------- | ------- | --------------------------------------------------------------- |
| className | `string`                                 | -       | Additional classes to apply for custom styling.                 |
| step      | `number`                                 | -       | The index of the current step.                                  |
| state     | `"active" \| "complete" \| "incomplete"` | -       | The state of the step, determining its appearance and behavior. |

## Check

The `Check` component renders an SVG check mark icon, used to indicate a completed step.
