"use client";
import { IconProps } from "@/utils/types";
import {
  Button,
  FieldError,
  Group,
  Input,
  Label,
  NumberField,
  NumberFieldProps,
  Text,
  ValidationResult,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export interface NumberFieldPropsExtended extends NumberFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  placeholder?: string;
  showButtons?: boolean;
}

export const InputNumber = ({
  label,
  description,
  errorMessage,
  placeholder,
  className,
  showButtons = true,
  ...props
}: NumberFieldPropsExtended) => {
  return (
    <NumberField {...props}>
      <Label className="text-secondary-foreground">{label}</Label>
      <Group
        className={twMerge(
          "border border-outline-secondary flex rounded h-10 text-foreground mb-1",
          "focus-within:outline-2 focus-within:outline-primary",
          className as string
        )}
      >
        <Button
          slot="decrement"
          className={twMerge(
            "px-2 border-r border-outline-secondary rounded-l-[inherit]",
            !showButtons && "hidden"
          )}
          aria-hidden={!showButtons}
        >
          <Icons.minus className="h-4 w-4 m-auto" />
        </Button>
        <Input
          placeholder={placeholder}
          className={twMerge(
            "focus:outline-none py-1 px-2 bg-transparent placeholder:text-secondary-foreground",
            !showButtons && "rounded"
          )}
        />
        <Button
          slot="increment"
          className={twMerge(
            "px-2 border-l border-outline-secondary rounded-r-[inherit]",
            !showButtons && "hidden"
          )}
          aria-hidden={!showButtons}
        >
          <Icons.plus className="h-4 w-4 m-auto" />
        </Button>
      </Group>
      {description && (
        <Text slot="description" className="text-secondary-foreground text-sm">
          {description}
        </Text>
      )}
      <FieldError className="text-error text-sm">{errorMessage}</FieldError>
    </NumberField>
  );
};

const Icons = {
  plus: (props: IconProps) => (
    <svg
      height="200"
      width="200"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.25 3a.5.5 0 0 1 .5.5v3.75h3.75a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5H8.75v3.75a.5.5 0 0 1-.5.5h-.5a.5.5 0 0 1-.5-.5V8.75H3.5a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5h3.75V3.5a.5.5 0 0 1 .5-.5z"
        fill="currentColor"
      />
    </svg>
  ),
  minus: (props: IconProps) => (
    <svg
      height="200"
      width="200"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        height="1.5"
        width="10"
        fill="currentColor"
        rx=".5"
        x="3"
        y="7.25"
      />
    </svg>
  ),
};
