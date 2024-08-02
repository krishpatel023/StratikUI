"use client";

import {
  OverlayArrow as OverlayArrowAria,
  Tooltip as TooltipAria,
  TooltipTrigger as TooltipTriggerAria,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export const TooltipTrigger = TooltipTriggerAria;

export function OverlayArrow({ position = "top", ...props }) {
  return (
    <OverlayArrowAria {...props}>
      <svg
        width={8}
        height={8}
        viewBox="0 0 8 8"
        className={twMerge(
          position?.split(" ")[0] === "bottom" && "rotate-180",
          position?.split(" ")[0] === "left" && "-rotate-90",
          position?.split(" ")[0] === "right" && "rotate-90"
        )}
      >
        <path
          d="M0 0 L4 4 L8 0"
          className="fill-primary stroke-outline-secondary"
        />
      </svg>
    </OverlayArrowAria>
  );
}

export function Tooltip({ children, className, ...props }) {
  return (
    <TooltipAria
      className={twMerge(
        "p-2 rounded border border-outline-secondary bg-primary text-primary-foreground text-sm",
        !props.placement?.split(" ")[0] && "mb-2",
        props.placement?.split(" ")[0] === "top" && "mb-2",
        props.placement?.split(" ")[0] === "bottom" && "mt-2",
        props.placement?.split(" ")[0] === "left" && "mr-2",
        props.placement?.split(" ")[0] === "right" && "ml-2",
        className
      )}
      {...props}
    >
      <>
        <OverlayArrow position={props.placement} />
        {children}
      </>
    </TooltipAria>
  );
}