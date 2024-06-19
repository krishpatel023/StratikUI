"use client";

import React from "react";
import { twMerge } from "tailwind-merge";

export const ResizeBoundingElement = ({
  containerRef,
  className,
  children,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div ref={containerRef} className={twMerge("w-full", className)}>
      {children}
    </div>
  );
};

export const ResizableContainer = ({
  children,
  minWidth,
  minHeight,
  direction,
  handleResize,
  resizableRef,
  className,
}: {
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
}) => {
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
};

const Handle = ({
  direction,
  directionArr,
  handleResize,
}: {
  direction: "right" | "bottom" | "top" | "left";
  directionArr: ("right" | "bottom" | "top" | "left")[];
  handleResize: (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    directions: "right" | "left" | "top" | "bottom"
  ) => void;
}) => {
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
              <div className="min-h-8 bg-secondary-foreground rounded-full min-w-[0.25rem]"></div>
            </div>
          )}
          {(direction === "top" || direction === "bottom") && (
            <div
              className="h-4 flex justify-center items-center cursor-row-resize z-10"
              aria-label={`Resize ${direction}`}
              onMouseDown={(e) => handleResize(e, direction)}
              onTouchStart={(e) => handleResize(e, direction)}
            >
              <div className="min-w-8 bg-secondary-foreground rounded-full min-h-[0.25rem]"></div>
            </div>
          )}
        </>
      )}
    </>
  );
};

export const HelperFunctionsTsx = `import React from "react";
import { twMerge } from "tailwind-merge";

export const ResizeBoundingElement = ({
  containerRef,
  className,
  children,
}: {
  containerRef: React.RefObject<HTMLDivElement>;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div ref={containerRef} className={twMerge("w-full", className)}>
      {children}
    </div>
  );
};

export const ResizableContainer = ({
  children,
  minWidth,
  minHeight,
  direction,
  handleResize,
  resizableRef,
  className,
}: {
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
}) => {
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
            minWidth: \`\${minWidth}px\`,
            minHeight: \`\${minHeight}px\`,
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
};

const Handle = ({
  direction,
  directionArr,
  handleResize,
}: {
  direction: "right" | "bottom" | "top" | "left";
  directionArr: ("right" | "bottom" | "top" | "left")[];
  handleResize: (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    directions: "right" | "left" | "top" | "bottom"
  ) => void;
}) => {
  return (
    <>
      {directionArr.includes(direction) && (
        <>
          {(direction === "right" || direction === "left") && (
            <div
              className="w-4 flex justify-center items-center cursor-col-resize z-10"
              aria-label={\`Resize \${direction}\`}
              onMouseDown={(e) => handleResize(e, direction)}
              onTouchStart={(e) => handleResize(e, direction)}
            >
              <div className="min-h-8 bg-primary rounded-full min-w-[0.25rem]"></div>
            </div>
          )}
          {(direction === "top" || direction === "bottom") && (
            <div
              className="h-4 flex justify-center items-center cursor-row-resize z-10"
              aria-label={\`Resize \${direction}\`}
              onMouseDown={(e) => handleResize(e, direction)}
              onTouchStart={(e) => handleResize(e, direction)}
            >
              <div className="min-w-8 bg-primary rounded-full min-h-[0.25rem]"></div>
            </div>
          )}
        </>
      )}
    </>
  );
};`;

export const HelperFunctionsJsx = `import React from "react";
import { twMerge } from "tailwind-merge";

export const ResizeBoundingElement = ({
  containerRef,
  className,
  children,
}) => {
  return (
    <div ref={containerRef} className={twMerge("w-full", className)}>
      {children}
    </div>
  );
};

export const ResizableContainer = ({
  children,
  minWidth,
  minHeight,
  direction,
  handleResize,
  resizableRef,
  className,
}) => {
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
            minWidth: \`\${minWidth}px\`,
            minHeight: \`\${minHeight}px\`,
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
};

const Handle = ({
  direction,
  directionArr,
  handleResize,
}) => {
  return (
    <>
      {directionArr.includes(direction) && (
        <>
          {(direction === "right" || direction === "left") && (
            <div
              className="w-4 flex justify-center items-center cursor-col-resize z-10"
              aria-label={\`Resize \${direction}\`}
              onMouseDown={(e) => handleResize(e, direction)}
              onTouchStart={(e) => handleResize(e, direction)}
            >
              <div className="min-h-8 bg-primary rounded-full min-w-[0.25rem]"></div>
            </div>
          )}
          {(direction === "top" || direction === "bottom") && (
            <div
              className="h-4 flex justify-center items-center cursor-row-resize z-10"
              aria-label={\`Resize \${direction}\`}
              onMouseDown={(e) => handleResize(e, direction)}
              onTouchStart={(e) => handleResize(e, direction)}
            >
              <div className="min-w-8 bg-primary rounded-full min-h-[0.25rem]"></div>
            </div>
          )}
        </>
      )}
    </>
  );
};`;
