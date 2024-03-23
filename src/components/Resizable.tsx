import { DEFAULT_MODE } from "@/utils/utils";
import React, { useRef, useState, useEffect } from "react";

interface ResizableContainerProps {
  children: React.ReactNode;
  maxWidth: number;
  initialWidth: number;
  minWidth: number;
}

const ResizableContainer: React.FC<ResizableContainerProps> = ({
  children,
  maxWidth,
  initialWidth,
  minWidth,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(initialWidth);

  useEffect(() => {
    setContainerWidth(maxWidth);
  }, [maxWidth]);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;

      const container = containerRef.current;
      const handle = handleRef.current;

      if (!container || !handle) return;

      const containerRect = container.getBoundingClientRect();
      const handleRect = handle.getBoundingClientRect();

      let newWidth = e.clientX - containerRect.left;

      // Limit the container width to maxWidth
      newWidth = Math.min(newWidth, maxWidth);

      // Ensure the container width doesn't go below minWidth
      newWidth = Math.max(newWidth, minWidth);

      setContainerWidth(newWidth);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, maxWidth, minWidth]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    const handle = handleRef.current;

    if (!container || !handle) return;

    setIsDragging(true);
  };

  return (
    <div ref={containerRef} className="flex max-h-[800px]">
      <div
        style={{ width: `${containerWidth}px` }}
        className={`border-2 border-border rounded-lg @container py-1 max-h-[800px] overflow-y-auto scrollbar-horizontal scrollbar-vertical ${DEFAULT_MODE ? "darkComponent" : null}`}
        id="container"
      >
        {children}
      </div>
      <div
        ref={handleRef}
        onMouseDown={handleMouseDown}
        className="w-4 flex justify-center items-center cursor-col-resize z-10"
      >
        <div className="min-h-8 bg-primary rounded-full min-w-[0.25rem]"></div>
      </div>
    </div>
  );
};

export default ResizableContainer;
