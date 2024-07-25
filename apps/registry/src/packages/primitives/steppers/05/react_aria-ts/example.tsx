"use client";

import Button from "@/ui/Button";
import { Meter } from "@/packages/primitives/meter/01/react_aria-ts/Meter";
import { Label } from "react-aria-components";
import { useState } from "react";

export default function StepperImplementation() {
  const [activeStep, setActiveStep] = useState(0);
  const totalSteps = 4;
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handlePrev = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-20 px-6">
      <div className="max-w-60 @sm:max-w-full">
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
          className="@sm:h-4"
        >
          <div className="flex justify-between mb-3 text-foreground font-medium text-sm">
            <Label>Steps</Label>
            <span>
              {activeStep} of {totalSteps}
            </span>
          </div>
        </Meter>
      </div>

      <div className="flex gap-4">
        <Button onPress={handlePrev}>Prev</Button>
        <Button onPress={handleNext}>Next</Button>
      </div>
    </div>
  );
}
