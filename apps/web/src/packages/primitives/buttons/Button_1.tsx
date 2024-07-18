"use client";

import ArrowHeading from "@/components/ui/ArrowHeading";
import { IconProps } from "@/utils/constants";
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

export function Button({
  isProcessing = false,
  isDisabled,
  variant = "primary",
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <>
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
    </>
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

export function ButtonImplementation() {
  return (
    <div className="grid grid-cols-1 @md:grid-cols-2 gap-4">
      <div className="w-60 @md:w-80 flex flex-col gap-4">
        <ArrowHeading text="Primary" />
        <Button>Click</Button>
        <Button isDisabled>Disabled</Button>
        <Button isProcessing>Click</Button>
      </div>
      <div className="w-60 @md:w-80 flex flex-col gap-4">
        <ArrowHeading text="Secondary" />
        <Button variant="secondary">Click</Button>
        <Button variant="secondary" isDisabled>
          Disabled
        </Button>
        <Button variant="secondary" isProcessing>
          Click
        </Button>
      </div>
      <div className="w-60 @md:w-80 flex flex-col gap-4">
        <ArrowHeading text="Destructive" />
        <Button variant="destructive">Click</Button>
        <Button variant="destructive" isDisabled>
          Disabled
        </Button>
        <Button variant="destructive" isProcessing>
          Click
        </Button>
      </div>
      <div className="w-60 @md:w-80 flex flex-col gap-4">
        <ArrowHeading text="Outline" />
        <Button variant="outline">Click</Button>
        <Button variant="outline" isDisabled>
          Disabled
        </Button>
        <Button variant="outline" isProcessing>
          Click
        </Button>
      </div>
      <div className="w-60 @md:w-80 flex flex-col gap-4">
        <ArrowHeading text="Ghost" />
        <Button variant="ghost">Click</Button>
        <Button variant="ghost" isDisabled>
          Disabled
        </Button>
        <Button variant="ghost" isProcessing>
          Click
        </Button>
      </div>
      <div className="w-60 @md:w-80 flex flex-col gap-4">
        <ArrowHeading text="Accent" />
        <Button variant="accent">Click</Button>
        <Button variant="accent" isDisabled>
          Disabled
        </Button>
        <Button variant="accent" isProcessing>
          Click
        </Button>
      </div>
    </div>
  );
}
