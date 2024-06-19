"use client";

import { useRef } from "react";
import { ResizableContainer, ResizeBoundingElement } from "./Resizable_Helper";
import useResizable, {
  ResizableOptions,
} from "@/packages/hooks/useResizable/useResizable";

export function ResizeExample2() {
  const containerRef = useRef<HTMLDivElement>(null);
  const resizableRef = useRef<HTMLDivElement>(null);

  const options: ResizableOptions = {
    minWidth: "100px",
    minHeight: "100px",
    maxWidth: "70%",
    maxHeight: "100%",
    expandBoundingElement: false,
  };

  const { handleResize } = useResizable(containerRef, resizableRef, options);

  return (
    <div className="flex justify-center items-center gap-4 w-full ">
      <ResizeBoundingElement
        containerRef={containerRef}
        className="h-80 w-[35rem] max-w-[35rem] bg-neutral-200 dark:bg-neutral-900 flex"
      >
        <ResizableContainer
          minWidth={100}
          minHeight={100}
          direction={["right"]}
          className="h-full bg-neutral-200 dark:bg-neutral-900"
          handleResize={handleResize}
          resizableRef={resizableRef}
        >
          <div className="dark:text-white h-80 text-center flex justify-center items-center">
            <h1>This is a resizable container</h1>
          </div>
        </ResizableContainer>
        <div className="w-full h-full bg-blue-400 dark:bg-sky-950 dark:text-white text-center flex justify-center items-center px-2">
          <h1>
            This is not a resizable div but will take the remaining width in the
            container.
          </h1>
        </div>
      </ResizeBoundingElement>
    </div>
  );
}

export const ExampleStringTsx = `import { useRef } from "react";
import { ResizableContainer, ResizeBoundingElement } from "./Resizable_Helper";
import useResizable, {
  ResizableOptions,
} from "@/packages/hooks/code/useResizable";

export function ResizeExample() {
  const containerRef = useRef<HTMLDivElement>(null);
  const resizableRef = useRef<HTMLDivElement>(null);

  const options: ResizableOptions = {
    minWidth: "100px",
    minHeight: "100px",
    maxWidth: "70%",
    maxHeight: "100%",
    expandBoundingElement: false,
  };

  const { handleResize } = useResizable(
    containerRef,
    resizableRef,
    options
  );

  return (
    <div className="flex justify-center items-center gap-4 w-full ">
      <ResizeBoundingElement
        containerRef={containerRef}
        className="h-80 w-[35rem] max-w-[35rem] bg-neutral-200 dark:bg-neutral-900 flex"
      >
        <ResizableContainer
          minWidth={100}
          minHeight={100}
          direction={["right"]}
          className="h-full bg-neutral-200 dark:bg-neutral-900"
          handleResize={handleResize}
          resizableRef={resizableRef}
        >
          <div className="dark:text-white h-80 text-center flex justify-center items-center">
            <h1>This is a resizable container</h1>
          </div>
        </ResizableContainer>
        <div className="w-full h-full bg-blue-400 dark:bg-sky-950 dark:text-white text-center flex justify-center items-center px-2">
          <h1>
            This is not a resizable div but will take the remaining width in the
            container.
          </h1>
        </div>
      </ResizeBoundingElement>
    </div>
  );
}`;

export const ExampleStringJsx = `import { useRef } from "react";
import { ResizableContainer, ResizeBoundingElement } from "./Resizable_Helper";
import useResizable, {
  ResizableOptions,
} from "@/packages/hooks/code/useResizable";

export function ResizeExample() {
  const containerRef = useRef(null);
  const resizableRef = useRef(null);

  const options: ResizableOptions = {
    minWidth: "100px",
    minHeight: "100px",
    maxWidth: "70%",
    maxHeight: "100%",
    expandBoundingElement: false,
  };

  const { handleResize } = useResizable(
    containerRef,
    resizableRef,
    options
  );

  return (
    <div className="flex justify-center items-center gap-4 w-full ">
      <ResizeBoundingElement
        containerRef={containerRef}
        className="h-80 w-[35rem] max-w-[35rem] bg-neutral-200 dark:bg-neutral-900 flex"
      >
        <ResizableContainer
          minWidth={100}
          minHeight={100}
          direction={["right"]}
          className="h-full bg-neutral-200 dark:bg-neutral-900"
          handleResize={handleResize}
          resizableRef={resizableRef}
        >
          <div className="dark:text-white h-80 text-center flex justify-center items-center">
            <h1>This is a resizable container</h1>
          </div>
        </ResizableContainer>
        <div className="w-full h-full bg-blue-400 dark:bg-sky-950 dark:text-white text-center flex justify-center items-center px-2">
          <h1>
            This is not a resizable div but will take the remaining width in the
            container.
          </h1>
        </div>
      </ResizeBoundingElement>
    </div>
  );
}`;
