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
  SelectProps,
  SelectValue,
  Separator,
  Text,
  Section as ReactAriaSection,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export const Section = ReactAriaSection;

export interface SelectTriggerProps extends SelectProps<any> {
  label?: string;
  description?: string;
  errorMessage?: string;
  className?: string;
}

export function Select({ children, className, ...props }: SelectTriggerProps) {
  return (
    <ReactAriaSelect
      className={twMerge("flex flex-col", className)}
      aria-label={props.label || "Select"}
      {...props}
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
  className,
  ...props
}: ListBoxProps<any>) {
  return (
    <>
      <Button className="w-full text-start rounded border border-outline-secondary bg-primary open:bg-secondary text-primary-foreground my-1 max-w-80 outline-none px-2 py-0.5">
        <SelectValue />
      </Button>
      <Popover>
        <ListBox
          items={items}
          className={twMerge(
            "w-full bg-primary border border-outline-secondary py-1 rounded focus:outline-none",
            className as string
          )}
          {...props}
        >
          <>{children}</>
        </ListBox>
      </Popover>
    </>
  );
}

export function SelectItem({ className, ...props }: ListBoxItemProps) {
  return (
    <ListBoxItem
      className={twMerge(
        "p-1 mx-1 rounded hover:bg-secondary hover:outline-none focus:bg-secondary focus:outline-none text-primary-foreground disabled:opacity-50 hover:cursor-pointer",
        className as string
      )}
      {...props}
    >
      {props.children}
    </ListBoxItem>
  );
}

export function SelectHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Header
      className={twMerge("text-primary-foreground p-1 mx-1 mb-2", className)}
    >
      {children}
    </Header>
  );
}

export function SelectDivider({ className }: { className?: string }) {
  return (
    <Separator
      className={twMerge(
        "min-w-full  border-b-[1px] border-outline my-2",
        className
      )}
    />
  );
}
