"use client";

import {
  FieldError,
  Label,
  Input as ReactAriaInput,
  TextField,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function Field({ className, ...props }) {
  return (
    <TextField className={twMerge("flex flex-col", className)} {...props} />
  );
}

export function InputLabel({ className, ...props }) {
  return (
    <Label
      className={twMerge("text-foreground text-sm font-medium", className)}
    >
      {props.children}
    </Label>
  );
}

export function InputBox({ className, ...props }) {
  return (
    <ReactAriaInput
      className={twMerge(
        "w-full py-2 px-4 bg-transparent border-2 rounded focus:outline-none focus:ring-2 mt-1",
        "text-foreground placeholder:text-secondary-foreground border-outline-secondary  hover:border-outline focus:border-accent",
        className
      )}
      {...props}
    />
  );
}

export function Input({ label, isRequired, isReadOnly, ...props }) {
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
