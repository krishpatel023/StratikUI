"use client";

import {
  FieldError,
  InputProps,
  Label,
  LabelProps,
  Input as ReactAriaInput,
  TextField,
  TextFieldProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function Field({ className, ...props }: TextFieldProps) {
  return (
    <TextField
      className={twMerge("flex flex-col", className as string)}
      {...props}
    />
  );
}

export function InputLabel({ className, ...props }: LabelProps) {
  return (
    <Label
      className={twMerge(
        "text-foreground text-sm font-medium",
        className as string
      )}
    >
      {props.children}
    </Label>
  );
}

export function InputBox({ className, ...props }: InputProps) {
  return (
    <ReactAriaInput
      className={twMerge(
        "w-full py-2 px-4 bg-transparent border-2 rounded focus:outline-none focus:ring-2 mt-1",
        "text-foreground placeholder:text-secondary-foreground border-outline-secondary  hover:border-outline focus:border-accent",
        className as string
      )}
      {...props}
    />
  );
}

export interface InputFieldProps extends InputProps {
  label?: string;
  isRequired?: boolean;
  isReadOnly?: boolean;
}

export function Input({
  label,
  isRequired,
  isReadOnly,
  ...props
}: InputFieldProps) {
  return (
    <Field
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      name={props.name}
      type={props.type}
    >
      <InputLabel>{label}</InputLabel>
      <InputBox {...props} />
      <FieldError />
    </Field>
  );
}
