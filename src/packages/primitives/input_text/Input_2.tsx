"use client";

import ArrowHeading from "@/components/ui/ArrowHeading";
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

export function Field({ name, type, isRequired, ...props }: TextFieldProps) {
  return (
    <TextField
      name={name}
      type={type}
      isRequired={isRequired}
      className={twMerge("flex flex-col", props.className as string)}
      {...props}
    />
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
export interface ItemPropsExtended extends InputProps {
  state?: "default" | "error" | "success" | "disabled";
}

export function InputField({ state = "default", ...props }: ItemPropsExtended) {
  return (
    <Input
      data-state={state}
      className={twMerge(
        twJoin(
          "w-full py-2 px-4 bg-transparent border-2 rounded focus:outline-none focus:ring-2 mt-1",
          "text-foreground placeholder:text-secondary-foreground border-outline-secondary  hover:border-outline focus:border-accent",
          // "dark:text-white dark:placeholder:text-neutral-300 dark:border-neutral-800 dark:hover:border-neutral-700 dark:focus:ring-blue-500 dark:focus:border-blue-900",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:border-muted-secondary disabled:hover:border-muted-secondary",
          "data-[state=error]:border-error data-[state=error]:hover:border-error-secondary data-[state=error]:focus:ring-error-secondary data-[state=error]:focus:border-error",
          "data-[state=success]:border-success data-[state=success]:hover:border-success-secondary data-[state=success]:focus:ring-success-secondary data-[state=success]:focus:border-success"
        ),
        props.className as string
      )}
      disabled={state === "disabled"}
      {...props}
    />
  );
}

export const StatefulInputComponent = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <ArrowHeading text="Default" className="mb-2" />

      <Field name="Name" type="text" className="w-80">
        <InputLabel>Name</InputLabel>
        <InputField placeholder="Name" />
        <FieldError />
      </Field>

      <ArrowHeading text="Success" className="mb-2" />

      <Field name="Name" type="text" className="w-80">
        <InputLabel>Name</InputLabel>
        <InputField placeholder="Name" state="success" />
        <FieldError />
      </Field>

      <ArrowHeading text="Error" className="mb-2" />

      <Field name="Name" type="text" className="w-80">
        <InputLabel>Name</InputLabel>
        <InputField placeholder="Name" state="error" />
        <FieldError />
      </Field>

      <ArrowHeading text="Disabled" className="mb-2" />

      <Field name="Name" type="text" className="w-80">
        <InputLabel>Name</InputLabel>
        <InputField placeholder="Name" state="disabled" />
        <FieldError />
      </Field>
    </div>
  );
};
