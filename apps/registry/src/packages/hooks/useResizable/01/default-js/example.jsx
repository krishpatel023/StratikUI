"use client";

import { useRef } from "react";
import {
  ResizableContainer,
  ResizeBoundingElement,
} from "@/packages/hooks/useResizable/01/default-js/Resizable";
import useResizable from "@/packages/hooks/useResizable/01/default-js/useResizable";
import ArrowHeading from "@/ui/ArrowHeading";

export default function ResizeImplementation() {
  const containerRef = useRef(null);
  const resizableRef = useRef(null);

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
          className="min-h-[400px] max-w-[90%] mx-auto bg-primary rounded-lg border-2 border-dashed border-outline"
        >
          <ResizableContainer
            minWidth={100}
            minHeight={100}
            direction={["right", "bottom", "top", "left"]}
            className="min-h-[600px] max-w-[95%] bg-secondary"
            handleResize={handleResize}
            resizableRef={resizableRef}
          >
            <div className="border text-foreground w-full h-full text-center flex justify-center items-center">
              <h1>This is a resizable container</h1>
            </div>
          </ResizableContainer>
        </ResizeBoundingElement>
      </div>
    </div>
  );
}
