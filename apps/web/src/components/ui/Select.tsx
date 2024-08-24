"use client";

import {
  Button,
  FieldError,
  Header,
  Label,
  ListBox,
  ListBoxItem,
  type ListBoxItemProps,
  type ListBoxProps,
  Popover,
  Select as ReactAriaSelect,
  type SelectProps,
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
  displayClassName?: string;
}

export function Select({ children, className, displayClassName, ...props }: SelectTriggerProps) {
  return (
    <ReactAriaSelect className={twMerge("flex flex-col w-full")} aria-label={props.label || "Select"} {...props}>
      <>
        {props.label && <Label className="text-primary-foreground text-sm">{props.label}</Label>}
        <SelectWrapper className={className} displayClassName={displayClassName}>
          {children}
        </SelectWrapper>
        {props.description && (
          <Text slot="description" className="text-primary-foreground text-sm">
            {props.description}
          </Text>
        )}
        <FieldError className="text-sm text-error">{props.errorMessage}</FieldError>
      </>
    </ReactAriaSelect>
  );
}
interface SelectWrapperProps extends ListBoxProps<any> {
  displayClassName?: string;
}

export function SelectWrapper({ items, children, className, displayClassName, ...props }: SelectWrapperProps) {
  return (
    <>
      <Button
        className={twMerge(
          "w-full text-start rounded border border-outline-secondary bg-primary open:bg-secondary text-primary-foreground my-1 outline-none px-2 py-0.5",
          displayClassName,
        )}
      >
        <SelectValue />
      </Button>
      <Popover>
        <ListBox
          items={items}
          className={twMerge(
            "w-full bg-primary border border-outline-secondary py-1 rounded focus:outline-none",
            className as string,
          )}
          {...props}
        >
          {children as React.ReactNode}
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
        className as string,
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
  return <Header className={twMerge("text-primary-foreground p-1 mx-1 mb-2", className)}>{children}</Header>;
}

export function SelectDivider({ className }: { className?: string }) {
  return <Separator className={twMerge("min-w-full  border-b-[1px] border-outline my-2", className)} />;
}
