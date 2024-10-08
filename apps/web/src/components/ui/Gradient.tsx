"use client";

import type React from "react";
import { useRef, useState, useEffect, type PropsWithChildren } from "react";
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

export const HighlightGroup: React.FC<HighlightGroupProps> = ({ children, className = "", refresh = false }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useMousePosition();
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const containerSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const [boxes, setBoxes] = useState<Array<HTMLElement>>([]);

  useEffect(() => {
    containerRef.current && setBoxes(Array.from(containerRef.current.children).map((el) => el as HTMLElement));
  }, []);

  useEffect(() => {
    initContainer();
    window.addEventListener("resize", initContainer);

    return () => {
      window.removeEventListener("resize", initContainer);
    };
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: needed
  useEffect(() => {
    onMouseMove();
  }, [mousePosition]);

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
        for (const box of boxes) {
          const boxX = -(box.getBoundingClientRect().left - rect.left) + x;
          const boxY = -(box.getBoundingClientRect().top - rect.top) + y;
          box.style.setProperty("--mouse-x", `${boxX}px`);
          box.style.setProperty("--mouse-y", `${boxY}px`);
        }
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
  style?: React.CSSProperties;
};

export const HighlighterItem: React.FC<PropsWithChildren<HighlighterItemProps>> = ({
  children,
  className = "",
  style,
}) => {
  return (
    <>
      <div
        className={twMerge(
          // biome-ignore lint/style/noUnusedTemplateLiteral: Needed for dynamic styling
          `HomepageEffect relative [--container-rad:0.75rem] rounded-[var(--container-rad)] before:absolute before:w-96 before:h-96 before:-left-48 before:-top-48  before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:hover:opacity-20 before:z-30 before:blur-[100px] after:absolute after:inset-0 after:rounded-[inherit] after:opacity-0 after:transition-opacity after:duration-500 after:group-hover:opacity-100 after:z-10 overflow-hidden bg-[var(--container-border-initial)] p-[var(--container-border-size)] before:bg-[var(--container-gradient-color)] after:bg-[radial-gradient(var(--size)_circle_at_var(--mouse-x)_var(--mouse-y),var(--container-border-active),transparent)] `,
          className,
        )}
        style={{ ...style }}
      >
        <div
          className={twMerge(
            "HomepageEffect h-full w-full rounded-[calc(var(--container-rad)-var(--container-border-size))] relative  z-20 overflow-hidden bg-[var(--container-background)] ",
          )}
        >
          {children}
        </div>
      </div>
    </>
  );
};
