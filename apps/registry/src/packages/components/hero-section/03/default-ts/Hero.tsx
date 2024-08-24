"use client";

import useMousePosition from "@registry/packages/hooks/useMousePosition/01/default-ts/useMousePosition";
import { type ReactNode, useEffect, useRef, useState } from "react";

import { Button as ReactAriaButton, type ButtonProps as ReactAriaButtonProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { Button } from "@registry/packages/primitives/buttons/02/default-ts/Button";
import { Carousel } from "@registry/packages/components/carousel/01/default-ts/Carousel";

export function Background() {
  return (
    <div className="absolute top-0 left-0 -z-10 h-full w-full bg-white dark:bg-black">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] dark:bg-[rgba(73,89,123,0.5)] opacity-50 blur-[80px]" />
    </div>
  );
}

export function BorderAnimationButton({ children, className }: ReactAriaButtonProps) {
  const { x, y } = useMousePosition();
  const [relativeX, setRelativeX] = useState(0);

  const containerRef = useRef<HTMLButtonElement>(null);

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
    <ReactAriaButton
      className="group relative  rounded-full text-foreground overflow-hidden p-0.5"
      ref={containerRef}
      onHoverEnd={handleMouseLeave}
    >
      <div className={twMerge("z-10 bg-background relative rounded-[inherit]", className as string)}>
        {children as ReactNode}
      </div>
      <div
        className="z-0 m-1 mx-auto my-auto w-full h-full  absolute top-0 -left-1/2   bg-gradient-to-r from-transparent via-accent to-transparent opacity-40 group-hover:opacity-100 group-hover:transition-opacity hover:duration-500 transition-all duration-500"
        style={{ translate: relativeX ? `${relativeX}px` : "50%" }}
      />
    </ReactAriaButton>
  );
}

export function HeroSection() {
  return (
    <div className="w-full overflow-hidden flex flex-col @md:flex-row gap-10 @md:gap-0 justify-center items-center relative py-20">
      <div className="w-full flex flex-col justify-center items-center text-center gap-8">
        <BorderAnimationButton className="text-primary-foreground flex gap-2  rounded-full @lg:px-6 px-4 py-1 ">
          View all the latest components.
          <span className="text-accent hidden @lg:block">Read More</span>
        </BorderAnimationButton>
        <h1 className="text-5xl font-bold  w-[90%] @lg:w-1/2 text-primary-foreground">
          This is the best library for functional components.
        </h1>
        <span className="text-2xl font-medium w-[90%] @lg:w-3/4 text-secondary-foreground">
          Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable.
          Developer Friendly.
        </span>
        <div className="flex gap-8">
          <Button variant="accent" className="w-32">
            Get Started
          </Button>
          <Button variant="ghost" className="w-32 h-full">
            Learn More
          </Button>
        </div>
        <div>
          <h1 className="text-primary-foreground font-semibold text-2xl mt-8">Meet Our Partners</h1>
          <Carousel />
        </div>
      </div>
      <Background />
    </div>
  );
}
