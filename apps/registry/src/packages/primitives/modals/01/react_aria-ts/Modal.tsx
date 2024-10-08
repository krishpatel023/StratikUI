"use client";

import {
  Button,
  Dialog,
  type DialogProps,
  DialogTrigger,
  type DialogTriggerProps,
  Modal as ModalAria,
  ModalOverlay,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export interface ModalProps extends DialogProps {
  position?:
    | "center center"
    | "center top"
    | "center bottom"
    | "left top"
    | "left center"
    | "left bottom"
    | "right top"
    | "right bottom"
    | "right center";
  isBGBlur?: boolean;
  isDismissable?: boolean;
}

export function Modal({
  children,
  isDismissable = true,
  position = "center center",
  isBGBlur = true,
  className,
  ...props
}: ModalProps) {
  return (
    <ModalOverlay
      isDismissable={isDismissable}
      className={twMerge(
        "w-[100dvw] h-[100dvh] top-0 fixed z-[9999] data-[entering=true]:animate-modal-fade-in data-[exiting=true]:animate-modal-fade-out",
        isBGBlur && "bg-blur",
      )}
    >
      <ModalAria className="outline-none ">
        <Dialog
          className={twMerge(
            "absolute w-full h-max py-6 px-6 rounded bg-primary border border-outline-secondary text-primary-foreground outline-none data-[entering=true]:animate-modal-zoom",
            position === "center center" && "top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2",
            position === "center top" && "top-6 left-1/2 -translate-x-1/2",
            position === "center bottom" && "bottom-6 left-1/2 -translate-x-1/2",
            position === "left top" && "top-6 left-6",
            position === "left center" && "top-1/2 left-6 -translate-y-1/2",
            position === "left bottom" && "bottom-6 left-6",
            position === "right top" && "top-6 right-6",
            position === "right bottom" && "bottom-6 right-6",
            position === "right center" && "top-1/2 right-6 -translate-y-1/2",
            className,
          )}
          {...props}
        >
          {children}
        </Dialog>
      </ModalAria>
    </ModalOverlay>
  );
}

export function ModalTrigger({ ...props }: DialogTriggerProps) {
  return (
    <DialogTrigger {...props}>
      <ModalClickable />
      {props.children}
    </DialogTrigger>
  );
}

export function ModalClickable() {
  return (
    <Button className="hidden" aria-hidden="true">
      Close
    </Button>
  );
}
