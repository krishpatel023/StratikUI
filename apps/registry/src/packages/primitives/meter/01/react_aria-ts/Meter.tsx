"use client";

import { Meter as ReactAriaMeter, type MeterProps as ReactAriaMeterProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export interface MeterProps extends ReactAriaMeterProps {
  variant?: "primary" | "destructive" | "outline" | "accent";
}

export function Meter({ children, className, variant = "primary", ...props }: MeterProps) {
  return (
    <ReactAriaMeter {...props}>
      {({ percentage }) => (
        <>
          {children}
          <div
            className={twMerge(
              "h-3 w-full rounded-full overflow-hidden",
              variant === "primary" && "bg-primary",
              variant === "destructive" && "bg-primary border border-outline-secondary",
              variant === "outline" && "bg-transparent border border-outline-secondary",
              variant === "accent" && "bg-primary border border-outline-secondary",
              className as string,
            )}
          >
            <div
              style={{ width: `${percentage}%`, minWidth: `${percentage}%` }}
              className={twMerge(
                "rounded-full min-h-full transition-all duration-300 ease-in",
                variant === "primary" && "bg-secondary border border-outline-secondary",
                variant === "destructive" && "bg-error",
                variant === "outline" && "bg-foreground",
                variant === "accent" && "bg-accent ",
              )}
            />
          </div>
        </>
      )}
    </ReactAriaMeter>
  );
}
