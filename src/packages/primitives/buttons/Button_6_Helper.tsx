"use client";

import React, { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

interface CircleProps {
  x: number;
  y: number;
}

export function Button({
  children,
  clickedClassName,
  className,
  textClassName,
}: {
  children: React.ReactNode;
  clickedClassName?: string;
  className?: string;
  textClassName?: string;
}) {
  const [circle, setCircle] = useState<CircleProps | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setCircle({ x, y });

    // Clear the circle effect after 1 second
    setTimeout(() => {
      setCircle(null);
    }, 400);
  };

  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (buttonRef.current) {
      const buttonWidth = buttonRef.current.offsetWidth;
      const buttonHeight = buttonRef.current.offsetHeight;
      const maxRadius = Math.max(buttonWidth, buttonHeight);

      if (circle) {
        const circleElement = document.querySelector(
          ".circle"
        ) as HTMLDivElement;
        circleElement.style.width = `${maxRadius * 2}px`;
        circleElement.style.height = `${maxRadius * 2}px`;
        circleElement.style.top = `${circle.y - maxRadius}px`;
        circleElement.style.left = `${circle.x - maxRadius}px`;
      }
    }
  }, [circle, buttonRef]);

  return (
    <button
      className={twMerge(
        "relative focus:outline-none overflow-hidden data-[clicked=true]:scale-[0.98]",
        className
      )}
      onClick={handleClick}
      data-clicked={circle ? "true" : "false"}
      ref={buttonRef}
    >
      <span className="z-10 relative">
        <span className={textClassName}>{children}</span>
      </span>
      {circle && (
        <div
          className={twMerge(
            "absolute rounded-full circle animate-buttonGrow",
            clickedClassName
          )}
        />
      )}
    </button>
  );
}
