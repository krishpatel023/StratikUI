"use client";

import { useState, useEffect, useCallback, useRef } from "react";

const useScrollbar = (elementId: string) => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });

  const [directionX, setDirectionX] = useState<boolean | null>(null);
  const [directionY, setDirectionY] = useState<boolean | null>(null);

  const elementRef = useRef<HTMLElement | null>(null);

  const handleScroll = useCallback(() => {
    const element = elementRef.current;

    if (element) {
      const xpos = element.scrollLeft;
      const ypos = element.scrollTop;

      const prevXpos = scrollPosition.x;
      const prevYpos = scrollPosition.y;

      if (prevXpos <= xpos) setDirectionX(true);
      else setDirectionX(false);

      if (prevYpos <= ypos) setDirectionY(true);
      else setDirectionY(false);

      setScrollPosition({ x: xpos, y: ypos });
    }
  }, [scrollPosition]);

  useEffect(() => {
    const element = document.getElementById(elementId);

    if (element) {
      elementRef.current = element;
      element.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        element.removeEventListener("scroll", handleScroll);
      };
    }
  }, [elementId, handleScroll]);

  return { scrollPosition, directionX, directionY };
};

export default useScrollbar;
