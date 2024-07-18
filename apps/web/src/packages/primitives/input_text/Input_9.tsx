"use client";

import {
  FieldError,
  Input,
  InputProps,
  Label,
  LabelProps,
  TextField,
  TextFieldProps,
} from "react-aria-components";
import { twJoin, twMerge } from "tailwind-merge";

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
    <Input
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

export function InputField({
  label,
  isRequired,
  isReadOnly,
  className,
  ...props
}: InputFieldProps) {
  return (
    <Field
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      name={props.name}
      type={props.type}
    >
      <InputLabel className="absolute px-4 mt-4 text-xs">{label}</InputLabel>
      <InputBox
        {...props}
        className={twMerge("pt-6 h-[4.25rem] rounded-lg", className as string)}
      />
      <FieldError />
    </Field>
  );
}

export const DefaultLabelCoveredInputComponent = () => {
  return (
    <div className="w-full flex justify-center">
      <InputField
        label="Full Name"
        placeholder="Your Name"
        name="Name"
        type="text"
        className="w-80"
      />
    </div>
  );
};
