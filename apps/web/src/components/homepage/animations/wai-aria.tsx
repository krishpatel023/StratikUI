import type { CSSProperties, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface AnimatedShinyTextProps {
  children: ReactNode;
  className?: string;
  shimmerWidth?: number;
}

export default function WAI_ARIA() {
  return (
    <AnimatedShinyText shimmerWidth={100} className="text-3xl font-medium">
      WAI ARIA
    </AnimatedShinyText>
  );
}

function AnimatedShinyText({ children, className, shimmerWidth = 100 }: AnimatedShinyTextProps) {
  return (
    <p
      className={twMerge(
        "max-w-md text-neutral-600/70 dark:text-neutral-400/70",
        // Shimmer effect
        "group-data-[visible=true]/bento-card:animate-shimmer group-hover/bento-card:animate-shimmer bg-clip-text bg-no-repeat [background-position:0_0] [background-size:var(--shimmer-width)_100%] [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]",

        // Shimmer gradient
        "bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent  dark:via-white/80",
        className,
      )}
      style={
        {
          "--shimmer-width": `${shimmerWidth}px`,
        } as CSSProperties
      }
    >
      {children}
    </p>
  );
}
