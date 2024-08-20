"use client";

import {
  Stepper,
  Step,
} from "@registry/packages/primitives/steppers/02/default-ts/Stepper";
import Button from "@registry/ui/Button";
import { useState } from "react";

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
      <div className="flex gap-4 flex-col md:flex-row items-center justify-center">
        <span className="text-foreground">Step {activeStep} of 4</span>
        <Stepper currentStep={activeStep} onChange={handleStepChange}>
          <Step className="min-h-20 md:min-h-max md:min-w-20" />
          <Step className="min-h-20 md:min-h-max md:min-w-20" />
          <Step className="min-h-20 md:min-h-max md:min-w-20" />
          <Step />
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
