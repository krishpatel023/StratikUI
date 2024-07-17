"use client";

import {
  Button,
  OverlayArrow as OverlayArrowAria,
  OverlayArrowProps as OverlayArrowPropsAria,
  Tooltip as TooltipAria,
  TooltipProps,
  TooltipTrigger,
} from "react-aria-components";
import { twMerge } from "tailwind-merge";

export interface OverlayArrowProps extends OverlayArrowPropsAria {
  position: TooltipProps["placement"];
}
export function OverlayArrow({
  position = "top",
  ...props
}: OverlayArrowProps) {
  return (
    <OverlayArrowAria {...props}>
      <svg
        width={8}
        height={8}
        viewBox="0 0 8 8"
        className={twMerge(
          (position as string)?.split(" ")[0] === "bottom" && "rotate-180",
          (position as string)?.split(" ")[0] === "left" && "-rotate-90",
          (position as string)?.split(" ")[0] === "right" && "rotate-90"
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

export function Tooltip({ children, className, ...props }: TooltipProps) {
  return (
    <TooltipAria
      className={twMerge(
        "p-2 rounded border border-outline-secondary bg-primary text-primary-foreground text-sm",
        !(props.placement as string)?.split(" ")[0] && "mb-2",
        (props.placement as string)?.split(" ")[0] === "top" && "mb-2",
        (props.placement as string)?.split(" ")[0] === "bottom" && "mt-2",
        (props.placement as string)?.split(" ")[0] === "left" && "mr-2",
        (props.placement as string)?.split(" ")[0] === "right" && "ml-2",
        className as string
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

export function TooltipImplementation() {
  return (
    <div className="w-80 min-h-[30rem] mx-auto flex flex-col justify-center items-center gap-10">
      <TooltipTrigger delay={0}>
        <Button className="text-primary-foreground bg-primary  px-4 py-2 rounded-md border border-outline-secondary">
          Hover Me
        </Button>
        <Tooltip>
          <h1>This is a tooltip message</h1>
        </Tooltip>
      </TooltipTrigger>

      <TooltipTrigger>
        <Button className="text-primary-foreground bg-primary  px-4 py-2 rounded-md border border-outline-secondary">
          Hover Me
        </Button>
        <Tooltip placement="right">
          <h1>
            This is a tooltip message to demonstrate it can deal with long text
            messages easily. Making this message a little bit longer.
          </h1>
        </Tooltip>
      </TooltipTrigger>

      <TooltipTrigger>
        <Button className="text-primary-foreground bg-primary  px-4 py-2 rounded-md border border-outline-secondary">
          Hover Me
        </Button>
        <Tooltip placement="left">
          <h1>This is a tooltip</h1>
        </Tooltip>
      </TooltipTrigger>

      <TooltipTrigger>
        <Button className="text-primary-foreground bg-primary  px-4 py-2 rounded-md border border-outline-secondary">
          Hover Me
        </Button>
        <Tooltip placement="bottom">
          <h1>
            This is a tooltip message to demonstrate it can deal with long text
            messages easily. Making this message a little bit longer.
          </h1>
        </Tooltip>
      </TooltipTrigger>
    </div>
  );
}
