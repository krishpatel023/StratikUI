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
    <div className="flex items-center flex-col gap-4 max-w-[25rem]">
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
    <div
      className={twMerge(
        "flex gap-4 min-w-80 w-full rounded-lg py-3 px-4 bg-transparent border border-neutral-300 dark:border-neutral-800/80",
        currentActive == rank &&
          "bg-neutral-800 dark:bg-neutral-900 border-neutral-700 "
      )}
    >
      <div className=" flex flex-col gap-1 items-center justify-center">
        <div
          className={twMerge(
            "w-8 h-8 @md:w-10 @md:h-10 rounded-full flex items-center justify-center border-[3px] text-lg @md:text-md font-semibold transition-all duration-300",
            currentActive === rank && "border-blue-500 text-blue-500",
            currentActive > rank &&
              "bg-blue-600 border-blue-600 dark:bg-blue-700 dark:border-blue-700 text-white",
            currentActive < rank && "border-neutral-500 text-neutral-500"
          )}
        >
          {currentActive > rank ? <Check className="w-8 h-8" /> : rank + 1}
        </div>
      </div>
      <div
        className={twMerge(
          "font-semibold transition-all duration-300  text-black dark:text-white",
          currentActive == rank && " text-white dark:text-white"
        )}
      >
        {name}
        {description && (
          <p
            className={twMerge(
              "text-sm font-medium text-neutral-600 dark:text-neutral-500",
              currentActive == rank && "text-neutral-200 dark:text-neutral-400"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};

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

export const ImplementStepper = () => {
  const steps = [
    {
      name: "Personal Information",
      description: "Enter your basic information (name, email, password)",
    },
    {
      name: "Account Type",
      description: "Choose your account type (personal or business)",
    },
    {
      name: "Email Verification",
      description: "Verify your email address",
    },
    {
      name: "Complete Profile",
      description: "Complete your profile by adding additional details",
    },
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
