"use client";

import { useEffect, useRef, useState } from "react";
import ResizableContainer from "../Resizable";
import { Skeleton } from "../ui/Skeleton";

export const ResizableDisplay = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const sizeRef = useRef<HTMLDivElement>(null);
  const [windowWidth, setWindowWidth] = useState<number>();
  const [divWidth, setDivWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      if (sizeRef.current) {
        setDivWidth(sizeRef.current.offsetWidth);
        setWindowWidth(window.innerWidth);
      }
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    if (sizeRef.current) {
      setDivWidth(sizeRef.current.offsetWidth);
    }
  }, []);
  return (
    <div
      className={`w-full flex flex-col items-center justify-center pt-4 gap-4 rounded-xl mx-auto`}
      ref={sizeRef}
    >
      {divWidth && divWidth !== 0 ? (
        <ResizableContainer
          maxWidth={divWidth - 15}
          minWidth={400}
          initialWidth={0}
        >
          {children}
        </ResizableContainer>
      ) : (
        <div className="flex w-full min-h-[800px]">
          <Skeleton className="min-h-full min-w-[calc(100%-1rem)] rounded-lg" />
          <div className="w-4 flex justify-center items-center cursor-col-resize z-10">
            <div className="min-h-8 bg-primary rounded-full min-w-[0.25rem]"></div>
          </div>
        </div>
      )}
    </div>
  );
};
