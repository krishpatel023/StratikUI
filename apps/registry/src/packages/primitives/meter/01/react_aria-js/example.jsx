"use client";

import { useState } from "react";
import { Meter } from "@registry/packages/primitives/meter/01/react_aria-js/Meter";
import { Label } from "react-aria-components";
import Button from "@registry/ui/Button";

export default function MeterImplementation() {
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
    <div className="grid grid-cols-1 md:grid-cols gap-4">
      <div className="w-60 md:w-80 flex flex-col gap-8 text-foreground">
        <Meter value={value}>
          <Label>Primary</Label>
        </Meter>
        <Meter value={value} variant="destructive">
          <Label>Destructive</Label>
        </Meter>
        <Meter value={value} variant="outline">
          <Label>Outline</Label>
        </Meter>
        <Meter value={value} variant="accent">
          <Label>Accent</Label>
        </Meter>

        <div className="flex gap-4 items-center justify-center">
          <Button onPress={Decrement}>Decrement</Button>
          <Button onPress={Increment}>Increment</Button>
        </div>
      </div>
    </div>
  );
}
