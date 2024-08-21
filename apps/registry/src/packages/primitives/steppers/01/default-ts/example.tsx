"use client";

import { useState } from "react";
import {
  Stepper,
  Step,
} from "@registry/packages/primitives/steppers/01/default-ts/Stepper";
import Button from "@registry/ui/Button";

export default function StepperImplementation() {
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = 4;

  const handleNext = () => {
    if (activeStep >= totalSteps) return;
    setActiveStep(activeStep + 1);
  };

  const handlePrev = () => {
    if (activeStep <= 0) return;
    setActiveStep(activeStep - 1);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-10 h-[40rem] relative">
      <Stepper>
        <Step currentActiveStep={activeStep} step={0} totalSteps={totalSteps}>
          <div className="max-w-40  text-center ">
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
        <Step currentActiveStep={activeStep} step={1} totalSteps={totalSteps}>
          <div className="max-w-40  text-center ">
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
        <Step currentActiveStep={activeStep} step={2} totalSteps={totalSteps}>
          <div className="max-w-40  text-center ">
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
        <Step currentActiveStep={activeStep} step={3} totalSteps={totalSteps}>
          <div className="max-w-40  text-center ">
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
