"use client";

import { twMerge } from "tailwind-merge";
import React, { useRef } from "react";
import useResizable from "@/packages/hooks/useResizable/01/default-ts/useResizable";

export interface ResizableBoundingElementProps
  extends React.HTMLAttributes<HTMLDivElement> {
  containerRef: React.RefObject<HTMLDivElement>;
}

export function ResizeBoundingElement({
  containerRef,
  className,
  children,
  ...props
}: ResizableBoundingElementProps) {
  return (
    <div
      ref={containerRef}
      className={twMerge("w-[90%] mx-auto", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export interface ResizableContainerProps {
  children: React.ReactNode;
  direction: ("right" | "bottom" | "top" | "left")[];
  className?: string;
  handleResize: (
    e:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.TouchEvent<HTMLDivElement>,
    direction: "right" | "bottom" | "top" | "left"
  ) => void;
  resizableRef: React.RefObject<HTMLDivElement>;
}

export function ResizableContainer({
  children,
  direction,
  handleResize,
  resizableRef,
  className,
}: ResizableContainerProps) {
  return (
    <>
      <Handle
        direction="top"
        directionArr={direction}
        handleResize={handleResize}
      />
      <div className="h-full w-full flex justify-center items-center">
        <Handle
          direction="left"
          directionArr={direction}
          handleResize={handleResize}
        />
        <div
          ref={resizableRef}
          className={className}
          style={{ maxWidth: "100%", minWidth: "22rem", width: "100%" }}
        >
          {children}
        </div>
        <Handle
          direction="right"
          directionArr={direction}
          handleResize={handleResize}
        />
      </div>
      <Handle
        direction="bottom"
        directionArr={direction}
        handleResize={handleResize}
      />
    </>
  );
}

export interface HandleProps {
  direction: "right" | "bottom" | "top" | "left";
  directionArr: ("right" | "bottom" | "top" | "left")[];
  handleResize: (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    directions: "right" | "left" | "top" | "bottom"
  ) => void;
}

export function Handle({ direction, directionArr, handleResize }: HandleProps) {
  return (
    <>
      {directionArr.includes(direction) && (
        <>
          {(direction === "right" || direction === "left") && (
            <div
              className="min-w-3 relative left-0 flex justify-center items-center cursor-col-resize z-10 "
              aria-label={`Resize ${direction}`}
              onMouseDown={(e) => handleResize(e, direction)}
              onTouchStart={(e) => handleResize(e, direction)}
            >
              <div className="min-h-8 bg-foreground rounded-full min-w-[0.25rem]"></div>
            </div>
          )}
          {(direction === "top" || direction === "bottom") && (
            <div
              className="h-4 flex justify-center items-center cursor-row-resize z-10"
              aria-label={`Resize ${direction}`}
              onMouseDown={(e) => handleResize(e, direction)}
              onTouchStart={(e) => handleResize(e, direction)}
            >
              <div className="min-w-8 bg-foreground rounded-full min-h-[0.25rem]"></div>
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

  const { handleResize, stopResize } = useResizable(containerRef, resizableRef);

  return (
    <div className="flex justify-center items-center flex-col gap-4 w-full mb-10">
      <ResizeBoundingElement
        containerRef={containerRef}
        onMouseLeave={(e) => stopResize()}
      >
        <ResizableContainer
          direction={["right"]}
          className="min-h-[700px] w-full border border-outline-secondary rounded-lg shadow-sm @container"
          handleResize={handleResize}
          resizableRef={resizableRef}
        >
          {children}
        </ResizableContainer>
      </ResizeBoundingElement>
    </div>
  );
}
