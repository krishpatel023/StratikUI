"use client";

import { useState } from "react";
import { Banner } from "./Banner";
import { GradientBackground } from "@registry/packages/primitives/containers/01/default-ts/Container";
import { Button } from "@registry/packages/primitives/buttons/02/default-ts/Button";

export default function BannerImplementation() {
  const [open, setOpen] = useState(true);
  return (
    <div className="w-full relative">
      <Banner
        className="flex justify-center items-center h-16 py-2 px-6 bg-blur text-blur-foreground gap-8 border-b border-outline-secondary"
        open={open}
        type="fixed"
      >
        <h1 className="font-semibold">
          Checkout the latest release of the components that are available for
          free.
        </h1>
        <GradientBackground>
          <button className="py-2 px-4 rounded-md bg-background text-foreground z-10 relative">
            Get Started
          </button>
        </GradientBackground>
      </Banner>
      <div className="min-w-full min-h-[50rem] flex justify-center items-center">
        <Button onClick={() => setOpen(!open)}>Toggle Banner</Button>
      </div>
      <Background />
    </div>
  );
}

const Background = () => {
  return (
    <div className="absolute top-0 left-0 -z-10 h-full w-full bg-white dark:bg-black">
      <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] dark:bg-[rgba(73,89,123,0.5)] opacity-50 blur-[80px]"></div>
    </div>
  );
};
