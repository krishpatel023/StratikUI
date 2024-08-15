"use client";

import useResizable from "@registry/packages/hooks/useResizable/01/default-js/useResizable";
import {
  ResizableContainer,
  ResizeBoundingElement,
} from "@registry/packages/primitives/resizable-containers/02/default-js/Resizable";
import { useRef } from "react";

export default function ResizeImplementation() {
  const containerRef = useRef(null);
  const resizableRef = useRef(null);

  const options = {
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
