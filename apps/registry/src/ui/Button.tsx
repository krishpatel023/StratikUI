"use client";

import { IconProps } from "@registry/utils/types";
import {
  Button as ReactAriaButton,
  ButtonProps as ReactAriaButtonProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends ReactAriaButtonProps {
  isProcessing?: boolean;
  variant?:
    | "primary"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "accent";
}

export default function Button({
  isProcessing = false,
  isDisabled,
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <ReactAriaButton
      data-processing={isProcessing}
      className={twMerge(
        "p-2 rounded transition-all duration-100 ease-in-out disabled:cursor-not-allowed disabled:opacity-60",
        variant === "primary" &&
          "bg-primary hover:bg-secondary pressed:bg-primary border border-outline text-primary-foreground",
        variant === "secondary" &&
          "bg-secondary hover:bg-primary pressed:bg-secondary border border-outline-secondary text-secondary-foreground",
        variant === "destructive" &&
          "bg-error text-error-foreground hover:bg-error-secondary pressed:bg-error",
        variant === "outline" &&
          "border border-outline hover:bg-primary pressed:bg-secondary text-foreground",
        variant === "ghost" &&
          " hover:bg-primary pressed:bg-secondary text-foreground",
        variant === "accent" &&
          "bg-accent hover:bg-accent-secondary pressed:bg-accent text-accent-foreground",
        isProcessing && "cursor-not-allowed",
        className as string
      )}
      isDisabled={isDisabled || isProcessing}
      {...props}
    >
      {isProcessing ? (
        <Loader className="animate-spin w-6 h-6 mx-auto" />
      ) : (
        <> {children}</>
      )}
    </ReactAriaButton>
  );
}

const Loader = (props: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 3a9 9 0 0 1 9 9h-2a7 7 0 0 0-7-7V3Z"
      ></path>
    </svg>
  );
};
