---
name: Detailed Stepper
description: This is a combination of the stepper and meter components. It is an example to show how to integrate both together to create a more complex but user-friendly UI.
tags: [Stepper, Progress, Navigation, Steps]
version_included: 0.2.0
---

## Stepper

| Name          | Type                     | Default | Description                                               |
| ------------- | ------------------------ | ------- | --------------------------------------------------------- |
| `children`    | `React.ReactNode`        | -       | The step components to render within the stepper.         |
| `className`   | `string`                 | -       | Additional CSS classes to apply to the stepper container. |
| `onChange`    | `(step: number) => void` | -       | Callback function called when the active step changes.    |
| `currentStep` | `number`                 | -       | The index of the current active step.                     |

## StepLineProps

| Name         | Type                                     | Default | Description                                                                  |
| ------------ | ---------------------------------------- | ------- | ---------------------------------------------------------------------------- |
| `className`  | `string`                                 | -       | Additional CSS classes to apply to the step line.                            |
| `step`       | `number`                                 | -       | The index of the step.                                                       |
| `totalSteps` | `number`                                 | -       | The total number of steps.                                                   |
| `state`      | `"active" \| "complete" \| "incomplete"` | -       | The current state of the step. Can be "active", "complete", or "incomplete". |

## StepProps

| Name        | Type              | Default | Description                                  |
| ----------- | ----------------- | ------- | -------------------------------------------- |
| `children`  | `React.ReactNode` | -       | The content to render within the step.       |
| `className` | `string`          | -       | Additional CSS classes to apply to the step. |

## StepInternalProps

| Name                | Type     | Default | Description                                          |
| ------------------- | -------- | ------- | ---------------------------------------------------- |
| `currentActiveStep` | `number` | -       | The index of the current active step in the stepper. |
| `step`              | `number` | -       | The index of the step.                               |
| `totalSteps`        | `number` | -       | The total number of steps in the stepper.            |

## StepCircularProps

| Name        | Type                                     | Default | Description                                                                  |
| ----------- | ---------------------------------------- | ------- | ---------------------------------------------------------------------------- |
| `className` | `string`                                 | -       | Additional CSS classes to apply to the circular step indicator.              |
| `step`      | `number`                                 | -       | The index of the step.                                                       |
| `state`     | `"active" \| "complete" \| "incomplete"` | -       | The current state of the step. Can be "active", "complete", or "incomplete". |
