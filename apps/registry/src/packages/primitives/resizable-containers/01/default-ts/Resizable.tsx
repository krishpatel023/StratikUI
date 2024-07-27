"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

export interface ResizableBoundingElementProps {
  containerRef: React.RefObject<HTMLDivElement>;
  className?: string;
  children: React.ReactNode;
}
export function ResizeBoundingElement({
  containerRef,
  className,
  children,
}: ResizableBoundingElementProps) {
  return (
    <div ref={containerRef} className={twMerge("w-full", className)}>
      {children}
    </div>
  );
}

export interface ResizableContainerProps {
  children: React.ReactNode;
  minWidth: number;
  minHeight: number;
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
  minWidth,
  minHeight,
  direction,
  handleResize,
  resizableRef,
  className,
}: ResizableContainerProps) {
  return (
    <div className="w-max">
      <Handle
        direction="top"
        directionArr={direction}
        handleResize={handleResize}
      />
      <div className="h-full flex">
        <Handle
          direction="left"
          directionArr={direction}
          handleResize={handleResize}
        />
        <div
          ref={resizableRef}
          style={{
            minWidth: `${minWidth}px`,
            minHeight: `${minHeight}px`,
          }}
          className={className}
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
    </div>
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
              className="w-4 flex justify-center items-center cursor-col-resize z-10"
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
