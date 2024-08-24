"use client";
import { twMerge } from "tailwind-merge";

export function ResizeBoundingElement({ containerRef, className, children }) {
  return (
    <div ref={containerRef} className={twMerge("w-full", className)}>
      {children}
    </div>
  );
}

export function ResizableContainer({
  children,
  minWidth,
  minHeight,
  direction,
  handleResize,
  resizableRef,
  className,
}) {
  return (
    <div className="w-max">
      <Handle direction="top" directionArr={direction} handleResize={handleResize} />
      <div className="h-full flex">
        <Handle direction="left" directionArr={direction} handleResize={handleResize} />
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
        <Handle direction="right" directionArr={direction} handleResize={handleResize} />
      </div>
      <Handle direction="bottom" directionArr={direction} handleResize={handleResize} />
    </div>
  );
}

export function Handle({ direction, directionArr, handleResize }) {
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
