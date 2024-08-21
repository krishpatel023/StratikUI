"use client";

import { IconProps } from "@registry/utils/types";
import React, { useEffect, useMemo, useState } from "react";
import { twMerge } from "tailwind-merge";

export interface StepperProps extends React.HTMLAttributes<HTMLDivElement> {}

export interface StepLineProps {
  className?: string;
  step: number;
  totalSteps: number;
  state: "active" | "complete" | "incomplete";
}

export interface StepProps {
  children?: React.ReactNode;
  className?: string;
  currentActiveStep: number;
  step: number;
  totalSteps: number;
}

export interface StepCircularProps {
  className?: string;
  step: number;
  state: "active" | "complete" | "incomplete";
}

export function Stepper({ className, ...props }: StepperProps) {
  return (
    <div
      className={twMerge(
        "w-full h-max flex flex-col md:flex-row gap-2",
        className
      )}
      {...props}
    />
  );
}

export function Step({
  children,
  className,
  currentActiveStep,
  step,
  totalSteps,
}: StepProps) {
  const [state, setState] = useState<"active" | "complete" | "incomplete">(
    "incomplete"
  );

  useEffect(() => {
    if (currentActiveStep === step) {
      setState("active");
    } else if (currentActiveStep > step) {
      setState("complete");
    } else {
      setState("incomplete");
    }
  }, [currentActiveStep, step]);

  return (
    <div
      className={twMerge(
        "group text-foreground flex md:flex-col gap-2 relative",
        className
      )}
      data-state={state}
    >
      <div
        className={twMerge(
          "min-h-full md:min-h-max md:h-auto md:w-full flex flex-col items-center md:flex-row md:justify-start md:items-center gap-2 relative md:left-[calc(50%-1.5rem)] ",
          step + 1 === totalSteps && "md:w-max"
        )}
      >
        <StepCircular step={step} state={state} />
        <StepLine step={step} totalSteps={totalSteps} state={state} />
      </div>
      <div>{children}</div>
    </div>
  );
}

export function StepLine({
  className,
  step,
  totalSteps,
  state,
}: StepLineProps) {
  const showConnectingLine = step >= 0 && step < totalSteps - 1;
  return (
    <>
      {showConnectingLine && (
        <div
          className={twMerge(
            "w-1 h-full md:h-1 md:w-full rounded-full bg-secondary overflow-hidden pointer-events-none ",
            className
          )}
        >
          <div
            className="h-full w-full bg-accent transition-all duration-500 -translate-y-full data-[show=complete]:translate-y-0 md:translate-y-0 md:-translate-x-full md:data-[show=complete]:translate-x-0"
            data-show={state}
          />
        </div>
      )}
    </>
  );
}

export function StepCircular({ className, step, state }: StepCircularProps) {
  return (
    <div
      className={twMerge(
        "min-h-8 min-w-8 md:min-w-12 md:min-h-12 rounded-full flex items-center justify-center border-[3px] text-lg md:text-2xl font-semibold transition-all delay-300 ",
        state === "active" && "border-accent text-accent",
        state === "complete" &&
          "bg-accent border-accent text-accent-foreground",
        state === "incomplete" && "border-outline text-outline-foreground",
        className
      )}
    >
      {state === "complete" ? (
        <Check className="w-3/4 h-3/4 text-accent-foreground" />
      ) : (
        step + 1
      )}
    </div>
  );
}

export const Check = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      d="M18.71 7.21a1 1 0 0 0-1.42 0l-7.45 7.46l-3.13-3.14A1 1 0 1 0 5.29 13l3.84 3.84a1 1 0 0 0 1.42 0l8.16-8.16a1 1 0 0 0 0-1.47Z"
    ></path>
  </svg>
);
