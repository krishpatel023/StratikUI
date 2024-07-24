"use client";

import React, { PropsWithChildren, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import useMousePosition from "@/packages/hooks/useMousePosition/01/default-ts/useMousePosition";
import ArrowHeading from "@/ui/ArrowHeading";
import "@/packages/primitives/containers/03/default-ts/Container.css";

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
