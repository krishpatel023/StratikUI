"use client";

import { useState } from "react";
import { ProgressBar } from "@registry/packages/primitives/progress-bar/01/react_aria-ts/ProgressBar";
import { Label } from "react-aria-components";
import Button from "@registry/ui/Button";

export default function ProgressBarImplementation() {
  const [value, setValue] = useState(50);

  function Increment() {
    if (value > 75) return;
    setValue(value + 25);
  }

  function Decrement() {
    if (value < 25) return;
    setValue(value - 25);
  }

  return (
    <div className="grid grid-cols-1 @md:grid-cols gap-4">
      <div className="w-60 @md:w-80 flex flex-col gap-8 text-foreground">
        <ProgressBar value={value}>
          <Label>Primary</Label>
        </ProgressBar>
        <ProgressBar value={value} variant="destructive">
          <Label>Destructive</Label>
        </ProgressBar>
        <ProgressBar value={value} variant="outline">
          <Label>Outline</Label>
        </ProgressBar>
        <ProgressBar value={value} variant="accent">
          <Label>Accent</Label>
        </ProgressBar>

        <div className="flex gap-4 items-center justify-center">
          <Button onPress={Decrement}>Decrement</Button>
          <Button onPress={Increment}>Increment</Button>
        </div>
      </div>
    </div>
  );
}
