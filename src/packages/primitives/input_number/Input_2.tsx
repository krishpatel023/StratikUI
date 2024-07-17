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
        <Input
          placeholder={placeholder}
          className="focus:outline-none py-1 px-2 bg-transparent placeholder:text-secondary-foreground"
        />
        <Group className="flex flex-col border-l border-outline-secondary">
          <Button
            slot="increment"
            className="h-1/2 px-2 border-b border-outline-secondary rounded-r-[inherit]"
          >
            <Icons.plus className="h-4 w-4 m-auto" />
          </Button>
          <Button slot="decrement" className="h-1/2 px-2  rounded-r-[inherit]">
            <Icons.minus className="h-4 w-4 m-auto" />
          </Button>
        </Group>
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
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.707 7.05L10 6.343L4.343 12l1.414 1.414L10 9.172l4.243 4.242L15.657 12z"
        fill="currentColor"
      />
    </svg>
  ),
  minus: (props: IconProps) => (
    <svg
      height="200"
      width="200"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828L5.757 6.586L4.343 8z"
        fill="currentColor"
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
