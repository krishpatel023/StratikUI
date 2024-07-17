"use client";

import { Button } from "@/packages/primitives/buttons/Button_2";
import { GradientBackground } from "@/packages/primitives/containers/Container_1";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
export function Banner({
  open,
  setOpen,
  children,
  className,
}: {
  open: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "w-full absolute left-0 transition-all duration-300 ease-in-out",
        open ? "top-0" : "-top-full",
        className
      )}
    >
      {children}
    </div>
  );
}

export function BannerImplementation() {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full relative">
      <Banner
        className="flex justify-center items-center py-2 px-6 bg-foreground text-background gap-8"
        open={open}
        setOpen={setOpen}
      >
        <h1 className="font-semibold">
          Checkout the latest release of the components that are available for
          free.
        </h1>
        <GradientBackground className="absolute z-0">
          <button className="py-2 px-4 rounded-md bg-background text-foreground z-10 relative">
            Get Started
          </button>
        </GradientBackground>
      </Banner>
      <div className="min-w-full min-h-[40rem] flex justify-center items-center">
        <Button onClick={() => setOpen(!open)}>Toggle Banner</Button>
      </div>
    </div>
  );
}
