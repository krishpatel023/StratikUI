"use client";

import React, { useRef } from "react";
import { useFullscreen } from "./useFullscreen";
import { Button } from "@/packages/ui/Button";

export const Demo: React.FC = () => {
  const { isFullscreen, requestFullscreen, exitFullscreen } = useFullscreen();
  const elementRef = useRef<HTMLDivElement>(null);

  const handleEnterFullscreen = () => {
    if (elementRef.current) {
      requestFullscreen(elementRef.current);
    }
  };

  return (
    <div className="w-full h-80 flex flex-col justify-center items-center gap-8 dark:text-white">
      <div
        ref={elementRef}
        className="w-1/2 min-w-60 h-60 bg-slate-300 dark:bg-neutral-900 dark:text-white flex flex-col justify-center items-center text-center gap-6"
      >
        <p>This content can be viewed in full-screen mode.</p>
        <p>Fullscreen status: {isFullscreen ? "Enabled" : "Disabled"}</p>
        <Button onClick={exitFullscreen}>Exit Fullscreen</Button>
      </div>
      <div className="flex gap-4">
        <Button onClick={handleEnterFullscreen}>Enter Fullscreen</Button>
      </div>
    </div>
  );
};
