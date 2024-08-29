"use client";

import useMousePosition from "@registry/packages/hooks/useMousePosition/01/default-ts/useMousePosition";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  movingGradientClassName?: string;
}

export function Container({ children, className, movingGradientClassName, ...props }: ContainerProps) {
  const { x, y } = useMousePosition();
  const [relativeX, setRelativeX] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  function handleMouseLeave() {
    setRelativeX(0);
  }

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();

      const dist = x - rect.left;
      if (y > rect.top && y < rect.bottom && dist > 0 && dist < rect.width) setRelativeX(dist);
    }
  }, [x, y]);

  return (
    <div
      className="group relative  rounded-md text-foreground overflow-hidden p-0.5"
      ref={containerRef}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div className={twMerge("z-10 bg-background relative rounded-[inherit]", className)}>
        {children as React.ReactNode}
      </div>
      <div
        className={twMerge(
          "z-0 m-1 mx-auto my-auto w-full h-full  absolute top-0 -left-1/2   bg-gradient-to-r from-transparent via-accent to-transparent opacity-40 group-hover:opacity-100 group-hover:transition-opacity hover:duration-500 transition-all duration-500",
          movingGradientClassName,
        )}
        style={{ translate: relativeX ? `${relativeX}px` : "50%" }}
      />
    </div>
  );
}
