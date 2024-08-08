---
name: OTP Input
description: A component for handling OTP input with support for partitions, auto-focus, and input validation. It has a customizable and user-friendly input field for entering one-time passwords (OTP) in a React application.
tags: [otp, input, partition, focus]
version_included: 0.2.0
---

## OTPInput Props

| Name      | Type                                       | Default                  | Description                                                                |
| --------- | ------------------------------------------ | ------------------------ | -------------------------------------------------------------------------- |
| length    | `number`                                   | -                        | The total number of input fields for the OTP.                              |
| setOTP    | `Dispatch<SetStateAction<string \| null>>` | -                        | A callback function to set the OTP value once it is fully entered.         |
| partition | `number[]`                                 | [length] (Length of OTP) | An array defining the number of input fields in each partition of the OTP. |

## PartitionSymbol Props

| Name     | Type              | Default | Description                                                                  |
| -------- | ----------------- | ------- | ---------------------------------------------------------------------------- |
| children | `React.ReactNode` | -       | The content inside the `PartitionSymbol`, typically a separator like a dash. |
