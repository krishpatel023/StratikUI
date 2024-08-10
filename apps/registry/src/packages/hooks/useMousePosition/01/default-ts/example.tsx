"use client";

import useMousePosition from "@registry/hooks/useMousePosition/01/default-ts/useMousePosition";
import { useRef } from "react";

export function MousePositionWithoutRef() {
  const mousePosition = useMousePosition();

  return (
    <div className="w-80 min-h-40 p-6 rounded text-primary-foreground bg-primary flex flex-col gap-2 justify-center items-center text-center">
      <h1 className="underline underline-offset-2 mb-4">
        Mouse Position w.r.t Window
      </h1>
      Mouse position: {mousePosition.x}, {mousePosition.y}
    </div>
  );
}

export function MousePositionWithId() {
  const mousePosition = useMousePosition("element-id");

  return (
    <div
      className="w-80 min-h-40 p-6 rounded text-primary-foreground bg-primary flex flex-col gap-2 justify-center items-center text-center"
      id="element-id"
    >
      <h1 className="underline underline-offset-2 mb-4">
        Mouse Position With Id
      </h1>
      <h1>
        Mouse position: {mousePosition.x}, {mousePosition.y}
      </h1>
      <p>
        Move the mouse over the element to see the mouse position RELATIVE to
        the element
      </p>
    </div>
  );
}

export function MousePositionWithRef() {
  const elementRef = useRef(null);
  const mousePosition = useMousePosition(elementRef);

  return (
    <div
      className="w-80 min-h-40 p-6 rounded text-primary-foreground bg-primary flex flex-col gap-2 justify-center items-center text-center"
      ref={elementRef}
    >
      <h1 className="underline underline-offset-2 mb-4">
        Mouse Position With Ref
      </h1>
      <h1>
        Mouse position: {mousePosition.x}, {mousePosition.y}
      </h1>
      <p>
        Move the mouse over the element to see the mouse position RELATIVE to
        the element
      </p>
    </div>
  );
}

export default function MousePositionExample() {
  return (
    <div className="flex flex-col gap-2 justify-center items-center">
      <MousePositionWithoutRef />
      <MousePositionWithRef />
      <MousePositionWithId />
    </div>
  );
}
