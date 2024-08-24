"use client";

import { useInView } from "framer-motion";
import { Link, type LinkProps } from "react-aria-components";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface ShineLinkProps extends LinkProps {
  animateInView?: boolean;
  options?: { once?: boolean; margin?: string };
}

export default function ShineLink({
  className,
  children,
  animateInView = true,
  options = { once: false, margin: "-300px" },
  ...props
}: ShineLinkProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const inView = useInView(ref, {
    margin: options.margin,
    once: options.once,
  });

  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    if (inView && animateInView) {
      setAnimate(true);
      setTimeout(() => setAnimate(false), 2000);
    }
  }, [inView, animateInView]);

  return (
    <Link
      ref={ref}
      data-visible={animate}
      className={twMerge(
        "z-10 group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-black border border-neutral-800 px-4 py-2 text-white transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none pressed:scale-95",
        className as string,
      )}
      {...props}
    >
      {children as React.ReactNode}
      <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)] group-data-[visible=true]/button:[transform:skew(-13deg)_translateX(100%)] group-data-[visible=true]/button:duration-1000">
        <div className="relative h-full w-8 bg-white/20" />
      </div>
    </Link>
  );
}
