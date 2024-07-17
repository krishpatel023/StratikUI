"use client";

import ArrowHeading from "@/components/ui/ArrowHeading";

import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

// -------------------
//MOUSE POSITION
//--------------------

interface MousePosition {
  x: number;
  y: number;
}

export default function useMousePosition(): MousePosition {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return mousePosition;
}

type HighlightGroupProps = {
  children: React.ReactNode;
  className?: string;
  refresh?: boolean;
};

export const HighlightGroup: React.FC<HighlightGroupProps> = ({
  children,
  className = "",
  refresh = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const [boxes, setBoxes] = useState<Array<HTMLElement>>([]);

  useEffect(() => {
    containerRef.current &&
      setBoxes(
        Array.from(containerRef.current.children).map((el) => el as HTMLElement)
      );
  }, []);

  useEffect(() => {
    initContainer();
    window.addEventListener("resize", initContainer);

    return () => {
      window.removeEventListener("resize", initContainer);
    };
  }, [setBoxes]);

  useEffect(() => {
    onMouseMove();
  }, [mousePosition]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    initContainer();
  }, []);

  const initContainer = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      containerSize.current.w = rect.width;
      containerSize.current.h = rect.height;
    }
  };

  const onMouseMove = () => {
    if (containerRef.current) {
      initContainer();
      const rect = containerRef.current.getBoundingClientRect();
      const { w, h } = containerSize.current;

      const x = mousePosition.x - rect.left;
      const y = mousePosition.y - rect.top;
      const inside = x < w && x > 0 && y < h && y > 0;
      if (inside) {
        mouse.current.x = x;
        mouse.current.y = y;
        boxes.forEach((box) => {
          const boxX = -(box.getBoundingClientRect().left - rect.left) + x;
          const boxY = -(box.getBoundingClientRect().top - rect.top) + y;
          box.style.setProperty("--mouse-x", `${boxX}px`);
          box.style.setProperty("--mouse-y", `${boxY}px`);
        });
      }
    }
  };

  return (
    <div className={twMerge("group", className)} ref={containerRef}>
      {children}
    </div>
  );
};

type HighlighterItemProps = {
  children: React.ReactNode;
  className?: string;
  backgroundProps?: string;
};

export const HighlighterItem: React.FC<
  PropsWithChildren<HighlighterItemProps>
> = ({ children, className = "" }) => {
  return (
    <>
      <div
        className={twMerge(
          `ContainerEffect relative rounded-xl before:absolute before:w-96 before:h-96 before:-left-48 before:-top-48  before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:hover:opacity-20 before:z-30 before:blur-[100px] after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:group-hover:opacity-100 after:z-10 overflow-hidden bg-[var(--container-border-initial)] p-[var(--container-border-size)] before:bg-[var(--container-gradient-color)] after:bg-[radial-gradient(250px_circle_at_var(--mouse-x)_var(--mouse-y),var(--container-border-active),transparent)]`,
          className
        )}
      >
        <div
          className={twMerge(
            "ContainerEffect h-full w-full rounded-[inherit] relative z-20 overflow-hidden bg-[var(--container-background)]"
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export function ContainerImplementation() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col gap-10">
      <h1 className="text-2xl text-foreground">Hover to see the magic!!!</h1>
      <div>
        <ArrowHeading text="Solo Button" className="mb-4" />
        <HighlightGroup className="h-full">
          <HighlighterItem className="rounded-full">
            <button className="px-8 py-2 text-foreground text-sm @md:text-base">
              Checkout the latest updates
            </button>
          </HighlighterItem>
        </HighlightGroup>
      </div>
      <div>
        <ArrowHeading text="Solo Container" className="mb-4" />
        <HighlightGroup className="h-full ">
          <HighlighterItem>
            <div className="min-h-60 min-w-60 @md:min-h-80 @md:min-w-80"></div>
          </HighlighterItem>
        </HighlightGroup>
      </div>
      <div className="w-full flex items-center flex-col">
        <ArrowHeading
          text="Multiple/Group Container"
          className="mb-4 mx-auto"
        />
        <HighlightGroup className="w-full flex gap-6 flex-wrap justify-center items-center">
          <HighlighterItem>
            <div className="min-h-60 min-w-60 @md:min-h-80 @md:min-w-80"></div>
          </HighlighterItem>
          <HighlighterItem>
            <div className="min-h-60 min-w-60 @md:min-h-80 @md:min-w-80"></div>
          </HighlighterItem>{" "}
          <HighlighterItem>
            <div className="min-h-60 min-w-60 @md:min-h-80 @md:min-w-80"></div>
          </HighlighterItem>
        </HighlightGroup>
      </div>
    </div>
  );
}
