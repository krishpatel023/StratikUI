"use client";

import { useRef } from "react";
import {
  ResizableContainer,
  ResizeBoundingElement,
} from "@/packages/primitives/resizable-containers/02/default-ts/Resizable";
import useResizable, {
  ResizableOptions,
} from "@/packages/hooks/useResizable/01/default-ts/useResizable";

export default function ResizeImplementation() {
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
        className="h-80 w-[35rem] max-w-[35rem] bg-accent flex"
      >
        <ResizableContainer
          minWidth={100}
          minHeight={100}
          direction={["right"]}
          className="h-full bg-secondary"
          handleResize={handleResize}
          resizableRef={resizableRef}
        >
          <div className="text-foreground h-80 text-center flex justify-center items-center">
            <h1>This is a resizable container</h1>
          </div>
        </ResizableContainer>
        <div className="w-full h-full bg-secondary text-secondary-foreground text-center flex justify-center items-center px-2">
          <h1>
            This is not a resizable div but will take the remaining width in the
            container.
          </h1>
        </div>
      </ResizeBoundingElement>
    </div>
  );
}
