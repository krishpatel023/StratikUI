"use client";
import { useState, useEffect, useCallback } from "react";

const useScrollbar = (
  elementIdOrRef?: string | React.RefObject<HTMLElement>
) => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
  const [directionX, setDirectionX] = useState<boolean | null>(null);
  const [directionY, setDirectionY] = useState<boolean | null>(null);

  const handleScroll = useCallback(() => {
    const element = getElement();
    if (element) {
      const xpos = parseFloat(window.scrollX.toFixed(2));
      const ypos = parseFloat(window.scrollY.toFixed(2));
      const prevXpos = scrollPosition.x;
      const prevYpos = scrollPosition.y;
      if (prevXpos <= xpos) setDirectionX(true);
      else setDirectionX(false);
      if (prevYpos <= ypos) setDirectionY(true);
      else setDirectionY(false);
      setScrollPosition({ x: xpos, y: ypos });
    }
  }, [scrollPosition]);

  const getElement = () => {
    if (elementIdOrRef && typeof elementIdOrRef === "string")
      return document.getElementById(elementIdOrRef);
    else if (elementIdOrRef && typeof elementIdOrRef === "object")
      return elementIdOrRef.current;
    else return document.documentElement || document.body;
  };

  useEffect(() => {
    const element = getElement();
    const handleScrollEvent = () => handleScroll();

    if (element === document.documentElement || element === document.body) {
      window.addEventListener("scroll", handleScrollEvent, { passive: true });
      return () => {
        window.removeEventListener("scroll", handleScrollEvent);
      };
    } else if (element) {
      element.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        element.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  return { scrollPosition, directionX, directionY };
};

export default useScrollbar;
