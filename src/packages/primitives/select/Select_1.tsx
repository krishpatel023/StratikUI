"use client";

import {
  Button,
  FieldError,
  Header,
  Label,
  ListBox,
  ListBoxItem,
  ListBoxItemProps,
  ListBoxProps,
  Popover,
  Select as ReactAriaSelect,
  Section,
  SelectProps,
  SelectValue,
  Text,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export interface SelectTriggerProps extends SelectProps<any> {
  label?: string;
  description?: string;
  errorMessage?: string;
  className?: string;
}

export function Select({ children, className, ...props }: SelectTriggerProps) {
  return (
    <ReactAriaSelect
      {...props}
      aria-label={props.label || "Select"}
      className={twMerge("flex flex-col", className)}
    >
      <>
        {props.label && (
          <Label className="text-primary-foreground text-sm">
            {props.label}
          </Label>
        )}
        <SelectWrapper>{children}</SelectWrapper>
        {props.description && (
          <Text slot="description" className="text-primary-foreground text-sm">
            {props.description}
          </Text>
        )}
        <FieldError className="text-sm text-error">
          {props.errorMessage}
        </FieldError>
      </>
    </ReactAriaSelect>
  );
}

export function SelectWrapper({
  items,
  children,
  ...props
}: ListBoxProps<any>) {
  return (
    <>
      <Button className="w-full text-start px-2 py-1 rounded border border-outline-secondary bg-primary open:bg-secondary text-primary-foreground my-1 max-w-80">
        <SelectValue />
      </Button>
      <Popover>
        <ListBox
          items={items}
          className={twMerge(
            "w-full bg-secondary border border-outline-secondary py-1 rounded"
          )}
          {...props}
        >
          <Section>
            <>{children}</>
          </Section>
        </ListBox>
      </Popover>
    </>
  );
}

export function SelectItem({ className, ...props }: ListBoxItemProps) {
  return (
    <ListBoxItem
      className={twMerge(
        "p-1 mx-1 rounded hover:bg-primary hover:outline-none focus:bg-primary focus:outline-none text-primary-foreground disabled:opacity-50",
        className as string
      )}
      {...props}
    >
      {props.children}
    </ListBoxItem>
  );
}

export function SelectHeader({ children }: { children: React.ReactNode }) {
  return (
    <Header className={twMerge("text-primary-foreground p-1 mx-1 mb-2")}>
      {children}
    </Header>
  );
}

export function SelectDivider() {
  return <Header className="min-w-full min-h-[2px] bg-outline my-2" />;
}

export function SelectImplementation() {
  return (
    <Select
      label="Ice cream flavor"
      description="Select your favorite ice cream flavor"
    >
      <SelectHeader>Ice-cream flavor</SelectHeader>
      <SelectItem textValue="mint">Mint</SelectItem>
      <SelectItem textValue="strawberry" isDisabled>
        Strawberry
      </SelectItem>
      <SelectDivider />
      <SelectItem textValue="vanilla">Vanilla</SelectItem>
      <SelectItem textValue="chocolate">Chocolate</SelectItem>
    </Select>
  );
}
