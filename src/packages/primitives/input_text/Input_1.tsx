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
import { twMerge } from "tailwind-merge";

export function Field({ name, type, isRequired, ...props }: TextFieldProps) {
  return (
    <TextField
      name={name}
      type={type}
      isRequired={isRequired}
      className={twMerge("flex flex-col", props.className as string)}
      {...props}
    >
      {props.children}
    </TextField>
  );
}

export function InputLabel({ children, ...props }: LabelProps) {
  return (
    <Label
      className={twMerge(
        "text-black dark:text-neutral-300 text-sm font-medium",
        props.className as string
      )}
    >
      {children}
    </Label>
  );
}

export function InputField({ ...props }: InputProps) {
  return (
    <Input
      className={twMerge(
        "w-full py-2 px-4 bg-transparent border-2 rounded focus:outline-none focus:ring-2 mt-1",
        "text-black placeholder:text-neutral-500 border-neutral-200  hover:border-neutral-300 focus:border-blue-600",
        "dark:text-white dark:placeholder:text-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700 dark:focus:ring-blue-500 dark:focus:border-blue-900",
        props.className as string
      )}
      {...props}
    />
  );
}

export const DefaultInputComponent = () => {
  return (
    <div className="w-full flex justify-center">
      <Field name="Name" type="text" className="w-80">
        <InputLabel>Name</InputLabel>
        <InputField placeholder="Name" />
        <FieldError />
      </Field>
    </div>
  );
};
