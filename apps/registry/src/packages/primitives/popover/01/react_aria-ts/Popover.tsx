"use client";

import {
  Dialog,
  DialogTrigger,
  type DialogTriggerProps,
  type PopoverProps as ReactAriaPopoverProps,
  Popover as ReactAriaPopover,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export interface PopoverTriggerProps extends DialogTriggerProps {}

export function PopoverTrigger({ children, ...props }: PopoverTriggerProps) {
  return <DialogTrigger {...props}>{children}</DialogTrigger>;
}

export interface PopoverProps extends ReactAriaPopoverProps {}

export function Popover({ children, className, ...props }: PopoverProps) {
  return (
    <ReactAriaPopover {...props}>
      <Dialog
        className={twMerge(
          "bg-primary p-4 rounded border border-outline-secondary text-primary-foreground outline-none",
          className as string,
        )}
      >
        {children as React.ReactElement}
      </Dialog>
    </ReactAriaPopover>
  );
}
