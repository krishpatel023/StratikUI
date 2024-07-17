"use client";

import { Button as ButtonUI } from "@/packages/ui/Button";
import { IconProps } from "@/utils/constants";
import React, { useEffect, useMemo, useState } from "react";
import { Button } from "react-aria-components";
import { twMerge } from "tailwind-merge";

export interface StepperProps {
  children: React.ReactNode;
  className?: string;
  onChange?: (step: number) => void;
  currentStep?: number;
}

export interface StepLineProps {
  className?: string;
  step: number;
  totalSteps: number;
  state: "active" | "complete" | "incomplete";
}

export interface StepProps {
  children?: React.ReactNode;
  className?: string;
}

export interface StepInternalProps extends StepProps {
  currentActiveStep: number;
  step: number;
  totalSteps: number;
}

interface StepCircularProps {
  className?: string;
  step: number;
  state: "active" | "complete" | "incomplete";
}

export function Stepper({
  children,
  className,
  currentStep,
  onChange,
}: StepperProps) {
  const [currentActiveStep, setCurrentActiveStep] = useState(currentStep || 0);

  const totalSteps = useMemo(
    () => (Array.isArray(children) ? children.length : 0),
    [children]
  );

  const newChildren = useMemo(
    () => replaceChildren(children, currentStep || 0),
    [children]
  );

  function replaceChildren(children: React.ReactNode, currentStep: number) {
    if (!children || !Array.isArray(children)) return;
    return children.map((child, index) => {
      if (child.type?.name === "Step") {
        return (
          <StepInternal
            key={index}
            {...child.props}
            currentActiveStep={currentStep}
            step={index}
            totalSteps={totalSteps}
          />
        );
      }
    });
  }

  function handleStepChange(step: number) {
    const newStep = step < 0 || step > totalSteps ? currentActiveStep : step;
    setCurrentActiveStep(newStep);
    onChange && onChange(newStep);
  }

  useEffect(() => {
    if (currentStep === undefined) return;
    handleStepChange(currentStep);
  }, [currentStep]);

  return (
    <div className={twMerge("flex flex-col gap-2 ", className)}>
      {newChildren}
    </div>
  );
}

export function Step({ children, className }: StepProps) {
  return <div>{children}</div>;
}

export function StepInternal({
  children,
  className,
  currentActiveStep,
  step,
  totalSteps,
}: StepInternalProps) {
  const state = useMemo(() => {
    if (currentActiveStep === step) {
      return "active";
    }
    if (currentActiveStep > step) {
      return "complete";
    }
    return "incomplete";
  }, [currentActiveStep]);

  return (
    <div
      className={twMerge("group text-foreground flex gap-4 ", className)}
      data-state={state}
    >
      <div className="h-full flex flex-col items-center  gap-2 ">
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
            "w-1 h-full rounded-full bg-secondary overflow-hidden pointer-events-none ",
            className
          )}
        >
          {state === "complete" && (
            <div className="h-full w-full bg-accent animate-stepperGrow"></div>
          )}
        </div>
      )}
    </>
  );
}

export function StepCircular({ className, step, state }: StepCircularProps) {
  return (
    <div
      className={twMerge(
        "min-h-8 min-w-8 @sm:min-w-12 @sm:min-h-12  rounded-full flex items-center justify-center border-[3px] text-lg @sm:text-2xl font-semibold transition-all delay-300 ",
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

export const StepperImplementation = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handlePrev = () => {
    setActiveStep(activeStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-20">
      {/* <Stepper currentStep={activeStep} steps={steps} /> */}
      <Stepper currentStep={activeStep} onChange={handleStepChange}>
        <Step>
          <div className="max-w-60   ">
            <h1 className="text-lg">Login</h1>
            <p className="text-secondary-foreground">
              You need to login to you account
            </p>
            <span className="group-data-[state='incomplete']:block hidden text-error">
              Incomplete
            </span>
            <span className="group-data-[state='complete']:block hidden text-success">
              Complete
            </span>
            <span className="group-data-[state='active']:block hidden text-accent">
              Active
            </span>
          </div>
        </Step>
        <Step>
          <div className="max-w-60   ">
            <h1 className="text-lg">Add your wallet</h1>
            <p className="text-secondary-foreground">
              Add your wallet to your account
            </p>
            <span className="group-data-[state='incomplete']:block hidden text-error">
              Incomplete
            </span>
            <span className="group-data-[state='complete']:block hidden text-success">
              Complete
            </span>
            <span className="group-data-[state='active']:block hidden text-accent">
              Active
            </span>
          </div>
        </Step>
        <Step>
          <div className="max-w-60   ">
            <h1 className="text-lg">Verify the plan</h1>
            <p className="text-secondary-foreground">
              Verify the plan you want to subscribe
            </p>
            <span className="group-data-[state='incomplete']:block hidden text-error">
              Incomplete
            </span>
            <span className="group-data-[state='complete']:block hidden text-success">
              Complete
            </span>
            <span className="group-data-[state='active']:block hidden text-accent">
              Active
            </span>
          </div>
        </Step>
        <Step>
          <div className="max-w-60   ">
            <h1 className="text-lg">Purchase</h1>
            <p className="text-secondary-foreground">
              Make the purchase using multiple payment methods
            </p>
            <span className="group-data-[state='incomplete']:block hidden text-error">
              Incomplete
            </span>
            <span className="group-data-[state='complete']:block hidden text-success">
              Complete
            </span>
            <span className="group-data-[state='active']:block hidden text-accent">
              Active
            </span>
          </div>
        </Step>
      </Stepper>
      <span className="text-foreground">Current step: {activeStep}</span>
      <div className="flex gap-4">
        <ButtonUI onClick={handlePrev}>Prev</ButtonUI>
        <ButtonUI onClick={handleNext}>Next</ButtonUI>
      </div>
    </div>
  );
};
