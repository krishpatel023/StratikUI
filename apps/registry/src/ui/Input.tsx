"use client";

import {
  FieldError,
  type FieldErrorProps,
  Input as InputAria,
  type InputProps,
  Label,
  type LabelProps,
  TextField,
  type TextFieldProps,
} from "react-aria-components";
import { twJoin, twMerge } from "tailwind-merge";

export function Field({ className, ...props }: TextFieldProps) {
  return <TextField className={twMerge("flex flex-col", className as string)} {...props} />;
}

export function InputLabel({ className, ...props }: LabelProps) {
  return (
    <Label className={twMerge("text-foreground text-sm font-medium", className as string)}>{props.children}</Label>
  );
}
export function InputError({ className, ...props }: FieldErrorProps) {
  return <FieldError className={twMerge("text-error", className as string)}>{props.children}</FieldError>;
}

export function InputBox({ className, ...props }: InputProps) {
  return (
    <InputAria
      className={twMerge(
        twJoin(
          "w-full py-2 px-4 bg-transparent border-2 rounded focus:outline-none focus:ring-2 my-1",
          "text-foreground placeholder:text-secondary-foreground border-outline-secondary  hover:border-outline focus:border-accent",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:border-muted-secondary disabled:hover:border-muted-secondary",
          "invalid:border-error invalid:hover:border-error-secondary invalid:focus:ring-error-secondary invalid:focus:border-error",
        ),
        className as string,
      )}
      {...props}
    />
  );
}

export interface InputFieldProps extends InputProps {
  state?: "default" | "isInvalid" | "isDisabled";
  label?: string;
  isRequired?: boolean;
  isReadOnly?: boolean;
}

export default function Input({ state = "default", label, isRequired, isReadOnly, ...props }: InputFieldProps) {
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
