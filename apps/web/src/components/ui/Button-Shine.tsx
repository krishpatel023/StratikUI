"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button, ButtonProps } from "react-aria-components";
import { twMerge } from "tailwind-merge";

interface ShineButtonProps extends ButtonProps {
  animateInView?: boolean;
  options?: { once?: boolean; margin?: string };
}

export default function ShineButton({
  className,
  children,
  animateInView = true,
  options = { once: false, margin: "-300px" },
  ...props
}: ShineButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);
  const inView = useInView(ref, options);

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (inView) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 2000);
    }
  }, [inView]);

  return (
    <Button
      ref={ref}
      data-visible={animate && animateInView}
      className={twMerge(
        "group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-black border border-neutral-800 px-4 py-2 text-white transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none pressed:scale-95",
        className as string
      )}
      {...props}
    >
      <>{children}</>
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)] group-data-[visible=true]/button:[transform:skew(-13deg)_translateX(100%)] group-data-[visible=true]/button:duration-1000">
        <div className="relative h-full w-8 bg-white/20" />
      </div>
    </Button>
  );
}
