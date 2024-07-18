"use client";

import {
  Button,
  Dialog,
  DialogTrigger,
  DialogTriggerProps,
  PopoverProps as ReactAriaPopoverProps,
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
          "bg-primary p-4 rounded border border-outline-secondary",
          className as string
        )}
      >
        <>{children}</>
      </Dialog>
    </ReactAriaPopover>
  );
}

export function PopoverImplementation() {
  return (
    <PopoverTrigger>
      <Button> Open Popover</Button>
      <Popover>
        <div className="flex flex-col justify-center gap-2 max-w-40">
          <h1 className="text-xl font-bold">Popover</h1>
          <span>
            This is a popover where you can place anything like a message, a
            form, or anything else.
          </span>
        </div>
      </Popover>
    </PopoverTrigger>
  );
}
