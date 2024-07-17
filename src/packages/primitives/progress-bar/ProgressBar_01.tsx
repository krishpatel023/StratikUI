"use client";

import { Button } from "@/packages/ui/Button";
import { useState } from "react";
import {
  Label,
  ProgressBar as ReactAriaProgressBar,
  ProgressBarProps as ReactAriaProgressBarProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export interface ProgressBarProps extends ReactAriaProgressBarProps {
  variant?: "primary" | "destructive" | "outline" | "accent";
}

export function ProgressBar({
  children,
  className,
  variant = "primary",
  ...props
}: ProgressBarProps) {
  return (
    <ReactAriaProgressBar {...props}>
      {({ percentage }) => (
        <>
          {children}
          <div
            className={twMerge(
              "h-3 w-full rounded-full overflow-hidden",
              variant === "primary" && "bg-primary",
              variant === "destructive" &&
                "bg-primary border border-outline-secondary",
              variant === "outline" &&
                "bg-transparent border border-outline-secondary",
              variant === "accent" &&
                "bg-primary border border-outline-secondary",
              className as string
            )}
          >
            <div
              style={{ width: `${percentage}%`, minWidth: `${percentage}%` }}
              className={twMerge(
                "rounded-full min-h-full transition-all duration-300 ease-in",
                variant === "primary" &&
                  "bg-secondary border border-outline-secondary",
                variant === "destructive" && "bg-error",
                variant === "outline" && "bg-foreground",
                variant === "accent" && "bg-accent "
              )}
            />
          </div>
        </>
      )}
    </ReactAriaProgressBar>
  );
}

export function ProgressBarImplementation() {
  const [value, setValue] = useState(50);

  function Increment() {
    if (value > 75) return;
    setValue(value + 25);
  }

  function Decrement() {
    if (value < 25) return;
    setValue(value - 25);
  }

  return (
    <div className="grid grid-cols-1 @md:grid-cols gap-4">
      <div className="w-60 @md:w-80 flex flex-col gap-8 text-foreground">
        <ProgressBar value={value}>
          <Label>Primary</Label>
        </ProgressBar>
        <ProgressBar value={value} variant="destructive">
          <Label>Destructive</Label>
        </ProgressBar>
        <ProgressBar value={value} variant="outline">
          <Label>Outline</Label>
        </ProgressBar>
        <ProgressBar value={value} variant="accent">
          <Label>Accent</Label>
        </ProgressBar>

        <div className="flex gap-4 items-center justify-center">
          <Button onClick={Decrement}>Decrement</Button>
          <Button onClick={Increment}>Increment</Button>
        </div>
      </div>
    </div>
  );
}
