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
      SelectionStatus(true);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging) return;

      const container = containerRef.current;
      const handle = handleRef.current;

      if (!container || !handle) return;

      const containerRect = container.getBoundingClientRect();
      const handleRect = handle.getBoundingClientRect();

      let newWidth = e.touches[0].clientX - containerRect.left;
      // let newWidth = e.clientX - containerRect.left;

      // Limit the container width to maxWidth
      newWidth = Math.min(newWidth, maxWidth);

      // Ensure the container width doesn't go below minWidth
      newWidth = Math.max(newWidth, minWidth);

      setContainerWidth(newWidth);
    };

    const handleTouchUp = () => {
      setIsDragging(false);
      SelectionStatus(true);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchUp);
    };
  }, [isDragging, maxWidth, minWidth]);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = containerRef.current;
    const handle = handleRef.current;

    if (!container || !handle) return;

    SelectionStatus(false);
    setIsDragging(true);
  };

  const SelectionStatus = (value: boolean) => {
    document.body.onselectstart = document.body.onselectstart = function () {
      return value;
    };
  };

  return (
    <div
      ref={containerRef}
      className="flex justify-center max-h-[800px] w-full "
    >
      <div
        style={{
          width: `${containerWidth ? containerWidth + "px" : "100%"}`,
        }}
        className={`border-2 border-border rounded-lg @container max-h-[800px] overflow-y-auto scrollbar-horizontal scrollbar-vertical`}
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
