"use client";

import { twMerge } from "tailwind-merge";
import type React from "react";
import { forwardRef, useRef } from "react";
import useResizable from "@/hooks/useResizable";

export interface ResizableBoundingElementProps extends React.HTMLAttributes<HTMLDivElement> {
  containerRef: React.RefObject<HTMLDivElement>;
}

export function ResizeBoundingElement({ containerRef, className, children, ...props }: ResizableBoundingElementProps) {
  return (
    <div ref={containerRef} className={twMerge("w-full", className)} {...props}>
      {children}
    </div>
  );
}

export interface ResizableContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  direction: ("right" | "bottom" | "top" | "left")[];
  handleResize: (
    e: React.MouseEvent<HTMLDivElement, MouseEvent> | React.TouchEvent<HTMLDivElement>,
    direction: "right" | "bottom" | "top" | "left",
  ) => void;
}

const ResizableContainer = forwardRef<HTMLDivElement, ResizableContainerProps>(
  ({ direction, handleResize, className, children, ...props }, ref) => {
    return (
      <>
        <Handle direction="top" directionArr={direction} handleResize={handleResize} />
        <div className="flex justify-center">
          <Handle direction="left" directionArr={direction} handleResize={handleResize} />
          <div className={className} ref={ref} {...props}>
            {children}
          </div>
          <Handle direction="right" directionArr={direction} handleResize={handleResize} />
        </div>
        <Handle direction="bottom" directionArr={direction} handleResize={handleResize} />
      </>
    );
  },
);

ResizableContainer.displayName = "ResizableContainer";

export interface HandleProps {
  direction: "right" | "bottom" | "top" | "left";
  directionArr: ("right" | "bottom" | "top" | "left")[];
  handleResize: (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    directions: "right" | "left" | "top" | "bottom",
  ) => void;
}

export function Handle({ direction, directionArr, handleResize }: HandleProps) {
  return (
    <>
      {directionArr.includes(direction) && (
        <>
          {(direction === "right" || direction === "left") && (
            <div
              className="min-w-3 relative left-0 flex justify-center items-center cursor-col-resize z-10"
              aria-label={`Resize ${direction}`}
              onMouseDown={(e) => handleResize(e, direction)}
              onTouchStart={(e) => handleResize(e, direction)}
            >
              <div className="min-h-8 bg-foreground rounded-full min-w-[0.25rem]" />
            </div>
          )}
          {(direction === "top" || direction === "bottom") && (
            <div
              className="h-4 flex justify-center items-center cursor-row-resize z-10"
              aria-label={`Resize ${direction}`}
              onMouseDown={(e) => handleResize(e, direction)}
              onTouchStart={(e) => handleResize(e, direction)}
            >
              <div className="min-w-8 bg-foreground rounded-full min-h-[0.25rem]" />
            </div>
          )}
        </>
      )}
    </>
  );
}

export default function ResizableDisplay({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const resizableRef = useRef<HTMLDivElement>(null);

  const { isResizing, handleResize, stopResize } = useResizable(containerRef, resizableRef);

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!resizableRef.current || !containerRef.current || !isResizing) return;
    e.preventDefault();

    // Get the bounding rectangle of the resizable element
    const rect = containerRef.current.getBoundingClientRect();

    // Get the mouse position
    const mouseX = e.clientX;

    // Reset the resizable element's width as needed
    if (mouseX <= rect.left || mouseX >= rect.right) {
      resizableRef.current.style.width = "100%";
      stopResize();
    }
  };

  return (
    <div className="h-max flex justify-center items-center flex-col gap-4 w-[calc(100%+0.75rem)] mb-10">
      <ResizeBoundingElement containerRef={containerRef} onMouseLeave={handleMouseLeave} className="h-max">
        <ResizableContainer
          direction={["right"]}
          className="h-max max-h-[700px] w-full border border-outline-secondary rounded-lg shadow-sm @container overflow-y-auto scrollbar-y scrollbar-x"
          handleResize={handleResize}
          style={{ maxWidth: "100%", minWidth: "22rem", width: "100%" }}
          ref={resizableRef}
        >
          {children}
        </ResizableContainer>
      </ResizeBoundingElement>
    </div>
  );
}
