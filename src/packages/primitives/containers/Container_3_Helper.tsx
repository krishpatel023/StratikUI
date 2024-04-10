"use client";

import React, { useRef, useState, useEffect, PropsWithChildren } from "react";
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
  }, [mousePosition]);

  useEffect(() => {
    initContainer();
  }, [refresh]);

  const initContainer = () => {
    if (containerRef.current) {
      containerSize.current.w = containerRef.current.offsetWidth;
      containerSize.current.h = containerRef.current.offsetHeight;
    }
  };

  const onMouseMove = () => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const { w, h } = containerSize.current;
      const x = mousePosition.x - rect.left;
      const y = mousePosition.y - rect.top;
      const inside = x < w && x > 0 && y < h && y > 0;
      if (inside) {
        mouse.current.x = x;
        mouse.current.y = y;
        boxes.forEach((box) => {
          const boxX =
            -(box.getBoundingClientRect().left - rect.left) + mouse.current.x;
          const boxY =
            -(box.getBoundingClientRect().top - rect.top) + mouse.current.y;
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
};

export const HighlighterItem: React.FC<
  PropsWithChildren<HighlighterItemProps>
> = ({ children, className = "" }) => {
  // SETTINGS - MODIFY HERE
  const settings = {
    light: {
      gradientColor: "#1d4ed8",
      borderWidth: "1px",
      backgroundColor: "#cbd5e1",
      borderColor: "#94a3b8",
    },
    dark: {
      gradientColor: "rgb(255 255 255)",
      borderWidth: "1px",
      backgroundColor: "rgb(24 24 27 )",
      borderColor: "rgb(39 39 42 )",
    },
  };

  // DO NOT CHANGE
  const css = `
  .parent-box{
    background-color: ${settings.light.borderColor};
    padding: ${settings.light.borderWidth};
  }
  .dark .parent-box{
    background-color: ${settings.dark.borderColor};
    padding: ${settings.dark.borderWidth};
  }
  .parent-box::before{
    content: var(--tw-content);
    background-color: ${settings.light.gradientColor};
  }
  .dark .parent-box::before{
    content: var(--tw-content);
    background-color: ${settings.dark.gradientColor};
  }
  .parent-box::after{
    content: var(--tw-content);
    background: radial-gradient(250px circle at var(--mouse-x) var(--mouse-y), ${settings.light.gradientColor} ,transparent)
  }
  .dark .parent-box::after{
    content: var(--tw-content);
    background: radial-gradient(250px circle at var(--mouse-x) var(--mouse-y), ${settings.dark.gradientColor} ,transparent)
  }
  .child-box{
    background-color: ${settings.light.backgroundColor};
  }
  .dark .child-box{
    background-color: ${settings.dark.backgroundColor};
  }`;

  return (
    <>
      <style>{css}</style>
      <div
        className={twMerge(
          `parent-box relative rounded-xl before:absolute before:w-96 before:h-96 before:-left-48 before:-top-48  before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:hover:opacity-20 before:z-30 before:blur-[100px] after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:group-hover:opacity-100 after:z-10 overflow-hidden`,
          className
        )}
      >
        <div className="child-box relative h-full w-full  rounded-[inherit] z-20 overflow-hidden">
          {children}
        </div>
      </div>
    </>
  );
};
