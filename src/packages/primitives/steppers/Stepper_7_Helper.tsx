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
      <div className="w-full mb-6">
        <h1 className="text-black dark:text-white font-semibold text-xl mb-2">
          Getting Started
        </h1>
        <h2 className="text-neutral-800 dark:text-neutral-400 font-medium mb-6">
          Follow the following steps to create your account.
        </h2>
        <BarStepper currentActive={currentStep} totalSteps={steps.length} />
      </div>
    </div>
  );
};

const BarStepper = ({
  currentActive,
  totalSteps,
}: {
  currentActive: number;
  totalSteps: number;
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((currentActive / totalSteps) * 100);
  }, [currentActive, totalSteps]);

  return (
    <div>
      <div className="flex justify-between mb-2 text-black dark:text-white font-medium text-sm">
        <span className="text-s_textPrimary font-medium text-sm">Steps</span>
        <span>
          {currentActive} of {totalSteps}
        </span>
      </div>
      <div className="w-full h-3 rounded-full bg-neutral-700/10 dark:bg-neutral-800/80">
        <div
          style={{ width: `${progress}%` }}
          className="min-h-full bg-blue-600 dark:bg-blue-700 rounded-full transition-all duration-300"
        ></div>
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
