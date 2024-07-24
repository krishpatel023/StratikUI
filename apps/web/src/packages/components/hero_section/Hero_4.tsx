"use client";

import Logo from "@/packages/helper/Logo";
import useMousePosition from "@/packages/primitives/containers/Container_3";
import { useEffect, useRef, useState } from "react";

import {
  Button as ReactAriaButton,
  ButtonProps as ReactAriaButtonProps,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { Background } from "@/packages/helper/Background";
import { Button } from "@/packages/primitives/buttons/Button_1";

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

export function Carousel({
  direction = "left",
}: {
  direction?: "left" | "right";
}) {
  const animateInDirection =
    direction === "right"
      ? "animate-infinite-scroll-right"
      : "animate-infinite-scroll-left";
  return (
    <>
      <div className="max-w-[80rem] h-28 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul
          className={`flex items-center justify-center md:justify-start [&_li]:mx-8 @md:[&_li]:mx-16  ${animateInDirection}`}
        >
          {Logo.map((item, i) => (
            <li key={i} className="p-4 hover:bg-secondary rounded-md">
              <item.logo className="w-10 h-10 text-primary-foreground" />
            </li>
          ))}
        </ul>
        <ul
          className={`flex items-center justify-center md:justify-start [&_li]:mx-8 @md:[&_li]:mx-16   ${animateInDirection}`}
        >
          {Logo.map((item, i) => (
            <li key={i} className="p-4 hover:bg-secondary rounded-md">
              <item.logo className="w-10 h-10 text-primary-foreground" />
            </li>
          ))}
        </ul>
      </div>
    </>
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
        <div>
          <h1 className="text-primary-foreground font-semibold text-2xl mt-8">
            Meet Our Partners
          </h1>
          <Carousel />
        </div>
      </div>
      <Background />
    </div>
  );
}