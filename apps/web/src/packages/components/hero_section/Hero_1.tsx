"use client";
import { Background } from "@/packages/helper/Background";
import { Button } from "@/packages/primitives/buttons/Button_1";
import useMousePosition from "@/packages/primitives/containers/Container_3";
import { useEffect, useRef, useState } from "react";
import {
  Button as ReactAriaButton,
  ButtonProps as ReactAriaButtonProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export function BorderAnimationButton({
  children,
  className,
}: ReactAriaButtonProps) {
  const { x, y } = useMousePosition();
  const [relativeX, setRelativeX] = useState(0);

  const containerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();

      const dist = x - rect.left;
      if (y > rect.top && y < rect.bottom && dist > 0 && dist < rect.width)
        setRelativeX(dist);
    }
  }, [x]);

  return (
    <ReactAriaButton
      className="group relative  rounded-full text-foreground overflow-hidden p-0.5"
      ref={containerRef}
    >
      <div
        className={twMerge(
          "z-10 bg-background relative rounded-[inherit]",
          className as string
        )}
      >
        <>{children}</>
      </div>
      <div
        className="z-0 m-1 mx-auto my-auto w-full h-full  absolute top-0 -left-1/2   bg-gradient-to-r from-transparent via-accent to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-500"
        style={{ translate: relativeX ? `${relativeX}px` : "50%" }}
      />
    </ReactAriaButton>
  );
}
export function HeroSection() {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center  relative">
      <div className="flex flex-col justify-center items-center text-center gap-8">
        <BorderAnimationButton className="text-primary-foreground flex gap-2  rounded-full @lg:px-6 px-4 py-1 ">
          View all the latest components.
          <span className="text-accent hidden @lg:block">Read More</span>
        </BorderAnimationButton>
        <h1 className="text-5xl font-bold  w-[90%] @lg:w-1/2 text-primary-foreground">
          This is the best library for functional components.
        </h1>
        <span className="text-2xl font-medium w-[90%] @lg:w-3/4 text-secondary-foreground">
          Beautifully designed components that you can copy and paste into your
          apps. Accessible. Customizable. Developer Friendly.
        </span>
        <div className="flex gap-8">
          <Button variant="accent" className="w-32">
            Get Started
          </Button>
          <Button variant="ghost" className="w-32 h-full">
            Learn More
          </Button>
        </div>
      </div>
      <Background />
    </div>
  );
}
