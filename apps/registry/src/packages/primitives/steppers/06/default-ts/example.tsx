"use client";
import { useState } from "react";
import {
  Stepper,
  Step,
} from "@registry/packages/primitives/steppers/06/default-ts/Stepper";
import { Meter } from "@registry/packages/primitives/meter/01/react_aria-ts/Meter";
import { Label } from "react-aria-components";
import Button from "@registry/ui/Button";

export default function StepperImplementation() {
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = 4;
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
    <div className="flex flex-col justify-center items-center gap-8">
      <div className="max-w-full px-6">
        <h1 className="text-foreground font-semibold text-xl mb-2">
          Getting Started
        </h1>
        <h2 className="text-primary-foreground font-medium mb-6">
          Follow the following steps to create your account.
        </h2>
        <Meter
          value={activeStep}
          maxValue={totalSteps}
          variant="accent"
          className="sm:h-4"
        >
          <div className="flex justify-between mb-3 text-foreground font-medium text-sm">
            <Label>Steps</Label>
            <span>
              {activeStep} of {totalSteps}
            </span>
          </div>
        </Meter>

        <Stepper
          currentStep={activeStep}
          onChange={handleStepChange}
          className="mt-8"
        >
          <Step>
            <div>
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
            <div>
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
            <div>
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
            <div>
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
      </div>
      <span className="text-foreground">Current step: {activeStep}</span>
      <div className="flex gap-4">
        <Button onPress={handlePrev}>Prev</Button>
        <Button onPress={handleNext}>Next</Button>
      </div>
    </div>
  );
}
