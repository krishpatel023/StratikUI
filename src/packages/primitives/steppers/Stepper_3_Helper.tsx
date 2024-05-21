"use client";

import { Button } from "@/packages/ui/Button";
import { IconProps } from "@/utils/constants";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";

type StepperProps = {
  name: string;
  description?: string;
};

type StepperWrapperProps = {
  currentStep: number;
  steps: StepperProps[];
};

export const StepperWrapper = ({ currentStep, steps }: StepperWrapperProps) => {
  return (
    <div className="flex items-center">
      <h1 className="text-black dark:text-white font-semibold mr-4">
        Step {currentStep} of {steps.length}
      </h1>
      {steps.map((step, index) => (
        <StepperIndividual
          key={index}
          name={step.name}
          description={step.description}
          currentActive={currentStep}
          rank={index}
          totalSteps={steps.length}
        />
      ))}
    </div>
  );
};

const StepperIndividual = ({
  name,
  description,
  currentActive,
  rank,
  totalSteps,
}: {
  name: string;
  description: string | undefined;
  currentActive: number;
  rank: number;
  totalSteps: number;
}) => {
  return (
    <div className="flex justify-center items-center">
      <div className="text-black dark:text-white flex flex-col gap-2 items-center justify-center">
        <div
          className={twMerge(
            "w-8 h-8 rounded-full flex items-center justify-center border-[3px] text-lg @md:text-2xl font-semibold transition-all delay-300",
            currentActive === rank && "border-blue-600 text-blue-600",
            currentActive > rank && "bg-blue-700 border-blue-700",
            currentActive < rank &&
              "border-neutral-500 text-neutral-500 dark:border-neutral-600 dark:text-neutral-600"
          )}
        >
          {currentActive > rank ? <Check className="w-6 h-6 text-white" /> : ""}
        </div>
      </div>
      {rank >= 0 && rank < totalSteps - 1 && (
        <div className="h-[2px] rounded-full bg-neutral-500 dark:bg-neutral-700 w-8 @md:w-12 overflow-hidden">
          {currentActive >= rank + 1 && (
            <div className="h-full w-full bg-blue-600 animate-stepperGrow"></div>
          )}
        </div>
      )}
    </div>
  );
};

export const Check = (props: IconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M13.488 3.43a.75.75 0 0 1 .081 1.058l-6 7a.75.75 0 0 1-1.1.042l-3.5-3.5A.75.75 0 0 1 4.03 6.97l2.928 2.927l5.473-6.385a.75.75 0 0 1 1.057-.081Z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export const ImplementStepper = () => {
  const steps = [
    { name: "Step 1", description: "This is step 1" },
    { name: "Step 2", description: "This is step 2" },
    { name: "Step 3", description: "This is step 3" },
    { name: "Step 4", description: "This is step 4" },
  ];

  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    // WE ARE PASSING AN ACTIVE STEP AND NOT THE COMPLETED STEP HENCE Nth ACTIVE WILL BE N-1 TH COMPLETED
    // THUS HERE steps.length IS CONSIDERED
    if (activeStep < steps.length) {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePrev = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-20">
      <StepperWrapper currentStep={activeStep} steps={steps} />

      <div className="flex gap-4">
        <Button onClick={handlePrev}>Prev</Button>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
};
