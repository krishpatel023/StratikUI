"use client";
import ArrowHeading from "@/components/ui/ArrowHeading";
import { IconProps } from "@/utils/constants";
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

interface NumberFieldPropsExtended extends NumberFieldProps {
  label?: string;
  description?: string;
  errorMessage?: string | ((validation: ValidationResult) => string);
  placeholder?: string;
}

export const InputNumber = ({
  label,
  description,
  errorMessage,
  placeholder,
  className,
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
          className="px-2 border-r border-outline-secondary rounded-l-[inherit]"
        >
          <Icons.minus className="h-4 w-4 m-auto" />
        </Button>
        <Input
          placeholder={placeholder}
          className="focus:outline-none py-1 px-2 bg-transparent placeholder:text-secondary-foreground"
        />
        <Button
          slot="increment"
          className="px-2 border-l border-outline-secondary rounded-r-[inherit]"
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

export function InputImplementation() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8">
      <ArrowHeading text="Default Usage" />
      <InputNumber
        placeholder="Enter a value"
        label="Label"
        description="This is a description"
      />
      <ArrowHeading text=" Usage with different format." />
      <InputNumber
        placeholder="Enter a value"
        label="Price"
        description="Choose the amount you want to pay"
        formatOptions={{
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        }}
      />
    </div>
  );
}
