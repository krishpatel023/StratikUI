"use client";

import { useState } from "react";
import {
  Stepper,
  Step,
} from "@registry/primitives/steppers/03/default-ts/Stepper";
import Button from "@/ui/Button";

export default function StepperImplementation() {
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
    <div className="flex flex-col justify-center items-center gap-10">
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
        <Button onPress={handlePrev}>Prev</Button>
        <Button onPress={handleNext}>Next</Button>
      </div>
    </div>
  );
}
