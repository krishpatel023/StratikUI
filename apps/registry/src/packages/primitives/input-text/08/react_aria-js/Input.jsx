"use client";

import { FieldError, Label, Input as ReactAriaInput, TextField } from "react-aria-components";
import { twJoin, twMerge } from "tailwind-merge";

export function Field({ className, ...props }) {
  return <TextField className={twMerge("flex flex-col", className)} {...props} />;
}

export function InputLabel({ className, ...props }) {
  return <Label className={twMerge("text-foreground text-sm font-medium", className)}>{props.children}</Label>;
}
export function InputError({ className, ...props }) {
  return <FieldError className={twMerge("text-error", className)}>{props.children}</FieldError>;
}

export function InputBox({ className, ...props }) {
  return (
    <ReactAriaInput
      className={twMerge(
        twJoin(
          "w-full py-2 px-1 bg-transparent border-b-2 focus:outline-none my-1",
          "text-foreground placeholder:text-secondary-foreground border-outline-secondary  hover:border-outline focus:border-accent",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:border-muted-secondary disabled:hover:border-muted-secondary",
          "invalid:border-error invalid:hover:border-error-secondary invalid:focus:ring-error-secondary invalid:focus:border-error",
        ),
        className,
      )}
      {...props}
    />
  );
}

export function Input({ state = "default", label, isRequired, isReadOnly, ...props }) {
  return (
    <Field
      name={props.name}
      type={props.type}
      className="w-80"
      isInvalid={state === "isInvalid"}
      isDisabled={state === "isDisabled"}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
    >
      <InputLabel>{label}</InputLabel>
      <InputBox {...props} />
      <InputError>Error Message </InputError>
    </Field>
  );
}
