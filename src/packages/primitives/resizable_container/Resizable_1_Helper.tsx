"use client";

import { useRef } from "react";
import { ResizableContainer, ResizeBoundingElement } from "./Resizable_Helper";
import useResizable from "@/packages/hooks/useResizable/useResizable";
import ArrowHeading from "@/components/ui/ArrowHeading";

export function ResizeExample1() {
  const containerRef = useRef<HTMLDivElement>(null);
  const resizableRef = useRef<HTMLDivElement>(null);

  const options = {
    minWidth: "100px",
    minHeight: "100px",
  };
  const { handleResize } = useResizable(containerRef, resizableRef, options);

  return (
    <div className="flex justify-center items-center flex-col gap-4 w-full">
      <ArrowHeading
        text="Bounding Element - can't resize outside this. However it can be expanded but the resize won't work outside this. This property can be adjusted in the options."
        className="text-center px-4"
      />
      <div className="w-full">
        <ResizeBoundingElement
          containerRef={containerRef}
          className="min-h-[400px] max-w-[90%] mx-auto bg-neutral-100 dark:bg-neutral-900 rounded-lg border-2 border-dashed dark:border-neutral-700"
        >
          <ResizableContainer
            minWidth={100}
            minHeight={100}
            direction={["right", "bottom", "top", "left"]}
            className="min-h-[600px] max-w-[95%] bg-neutral-300 dark:bg-neutral-900"
            handleResize={handleResize}
            resizableRef={resizableRef}
          >
            <div className="border dark:text-white w-full h-full text-center flex justify-center items-center">
              <h1>This is a resizable container</h1>
            </div>
          </ResizableContainer>
        </ResizeBoundingElement>
      </div>
    </div>
  );
}

export const ExampleTsx = `import { useRef } from "react";
import { ResizableContainer, ResizeBoundingElement } from "./Resizable_Helper";
import useResizable from "@/packages/hooks/code/useResizable";
import ArrowHeading from "@/components/ui/ArrowHeading";

export function ResizeExample1() {
  const containerRef = useRef<HTMLDivElement>(null);
  const resizableRef = useRef<HTMLDivElement>(null);

  const options = {
    minWidth: "100px",
    minHeight: "100px",
  };
  const { handleResize } = useResizable(
    containerRef,
    resizableRef,
    options
  );

  return (
    <div className="flex justify-center items-center flex-col gap-4 w-full">
      <ArrowHeading
        text="Bounding Element - can't resize outside this. However it can be expanded but the resize won't work outside this. This property can be adjusted in the options."
        className="text-center px-4"
      />
      <div className="w-full">
        <ResizeBoundingElement
          containerRef={containerRef}
          className="min-h-[400px] max-w-[90%] mx-auto bg-neutral-100 dark:bg-neutral-900 rounded-lg border-2 border-dashed dark:border-neutral-700"
        >
          <ResizableContainer
            minWidth={100}
            minHeight={100}
            direction={["right", "bottom", "top", "left"]}
            className="min-h-[600px] max-w-[95%] bg-neutral-300 dark:bg-neutral-900"
            handleResize={handleResize}
            resizableRef={resizableRef}
          >
            <div className="border dark:text-white w-full h-full text-center flex justify-center items-center">
              <h1>This is a resizable container</h1>
            </div>
          </ResizableContainer>
        </ResizeBoundingElement>
      </div>
    </div>
  );
}`;

export const ExampleJsx = `import { useRef } from "react";
import { ResizableContainer, ResizeBoundingElement } from "./Resizable_Helper";
import useResizable from "@/packages/hooks/code/useResizable";
import ArrowHeading from "@/components/ui/ArrowHeading";

export function ResizeExample1() {
  const containerRef = useRef(null);
  const resizableRef = useRef(null);

  const options = {
    minWidth: "100px",
    minHeight: "100px",
  };
  const { handleResize } = useResizable(
    containerRef,
    resizableRef,
    options
  );

  return (
    <div className="flex justify-center items-center flex-col gap-4 w-full">
      <ArrowHeading
        text="Bounding Element - can't resize outside this. However it can be expanded but the resize won't work outside this. This property can be adjusted in the options."
        className="text-center px-4"
      />
      <div className="w-full">
        <ResizeBoundingElement
          containerRef={containerRef}
          className="min-h-[400px] max-w-[90%] mx-auto bg-neutral-100 dark:bg-neutral-900 rounded-lg border-2 border-dashed dark:border-neutral-700"
        >
          <ResizableContainer
            minWidth={100}
            minHeight={100}
            direction={["right", "bottom", "top", "left"]}
            className="min-h-[600px] max-w-[95%] bg-neutral-300 dark:bg-neutral-900"
            handleResize={handleResize}
            resizableRef={resizableRef}
          >
            <div className="border dark:text-white w-full h-full text-center flex justify-center items-center">
              <h1>This is a resizable container</h1>
            </div>
          </ResizableContainer>
        </ResizeBoundingElement>
      </div>
    </div>
  );
}`;
