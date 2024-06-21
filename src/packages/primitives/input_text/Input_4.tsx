"use client";

import ArrowHeading from "@/components/ui/ArrowHeading";
import { IconProps } from "@/utils/constants";
import React from "react";
import {
  FieldError,
  FieldErrorProps,
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
export function InputError({ className, ...props }: FieldErrorProps) {
  return (
    <FieldError className={twMerge("text-error", className as string)}>
      {props.children}
    </FieldError>
  );
}

export function InputBox({ className, ...props }: InputProps) {
  return (
    <Input
      className={twMerge(
        twJoin(
          "w-full py-2 px-4 bg-transparent border-2 rounded focus:outline-none focus:ring-2 my-1",
          "text-foreground placeholder:text-secondary-foreground border-outline-secondary  hover:border-outline focus:border-accent",
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:border-muted-secondary disabled:hover:border-muted-secondary",
          "invalid:border-error invalid:hover:border-error-secondary invalid:focus:ring-error-secondary invalid:focus:border-error"
        ),
        className as string
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
  icon: React.ReactNode;
}

export function InputField({
  state = "default",
  label,
  isRequired,
  isReadOnly,
  icon,
  className,
  ...props
}: InputFieldProps) {
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
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-foreground">
          {icon}
        </div>
        <InputBox
          className={twMerge("pr-12", className as string)}
          {...props}
        />
      </div>
      <InputError>Error Message </InputError>
    </Field>
  );
}

export const InputWithRightIcon = () => {
  return (
    <div className="w-full flex flex-col items-center gap-6">
      <InputField
        name="Name"
        type="text"
        placeholder="Name"
        label="Name"
        icon={<Icon />}
      />
    </div>
  );
};

const Icon = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1.2em"
    height="1.2em"
    viewBox="0 0 1024 1024"
    {...props}
  >
    <path
      fill="currentColor"
      d="M512 0C229.232 0 0 229.232 0 512c0 282.784 229.232 512 512 512c282.784 0 512.017-229.216 512.017-512C1024.017 229.232 794.785 0 512 0zm0 961.008c-247.024 0-448-201.984-448-449.01c0-247.024 200.976-448 448-448s448.017 200.977 448.017 448S759.025 961.009 512 961.009zm-47.056-160.529h80.512v-81.248h-80.512zm46.112-576.944c-46.88 0-85.503 12.64-115.839 37.889c-30.336 25.263-45.088 75.855-44.336 117.775l1.184 2.336h73.44c0-25.008 8.336-60.944 25.008-73.84c16.656-12.88 36.848-19.328 60.56-19.328c27.328 0 48.336 7.424 63.073 22.271c14.72 14.848 22.063 36.08 22.063 63.664c0 23.184-5.44 42.976-16.368 59.376c-10.96 16.4-29.328 39.841-55.088 70.322c-26.576 23.967-42.992 43.231-49.232 57.807c-6.256 14.592-9.504 40.768-9.744 78.512h76.96c0-23.68 1.503-41.136 4.496-52.336c2.975-11.184 11.504-23.823 25.568-37.888c30.224-29.152 54.496-57.664 72.88-85.551c18.336-27.857 27.52-58.593 27.52-92.193c0-46.88-14.176-83.408-42.577-109.568c-28.416-26.176-68.272-39.248-119.568-39.248z"
    ></path>
  </svg>
);
