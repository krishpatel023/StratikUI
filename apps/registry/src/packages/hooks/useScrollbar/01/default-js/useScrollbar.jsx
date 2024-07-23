"use client";
import { useState, useEffect, useCallback } from "react";

const useScrollbar = (elementIdOrRef) => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
  const [directionX, setDirectionX] = useState(null);
  const [directionY, setDirectionY] = useState(null);

  const findPositionForElement = (element) => {
    const xpos = element.scrollLeft;
    const ypos = element.scrollTop;
    const prevXpos = scrollPosition.x;
    const prevYpos = scrollPosition.y;
    if (prevXpos <= xpos) setDirectionX(true);
    else setDirectionX(false);
    if (prevYpos <= ypos) setDirectionY(true);
    else setDirectionY(false);
    setScrollPosition({ x: xpos, y: ypos });
  };

  const findPositionForWindow = () => {
    const xpos = parseFloat(window.scrollX.toFixed(2));
    const ypos = parseFloat(window.scrollY.toFixed(2));
    const prevXpos = scrollPosition.x;
    const prevYpos = scrollPosition.y;
    if (prevXpos <= xpos) setDirectionX(true);
    else setDirectionX(false);
    if (prevYpos <= ypos) setDirectionY(true);
    else setDirectionY(false);
    setScrollPosition({ x: xpos, y: ypos });
  };

  const handleScroll = useCallback(() => {
    const element = getElement();
    if (element.type === "element" && element.element) {
      findPositionForElement(element.element);
    } else if (element.type === "window") {
      findPositionForWindow();
    }
  }, [scrollPosition]);

  const getElement = () => {
    if (elementIdOrRef && typeof elementIdOrRef === "string")
      return {
        type: "element",
        element: document.getElementById(elementIdOrRef),
      };
    else if (elementIdOrRef && typeof elementIdOrRef === "object")
      return { type: "element", element: elementIdOrRef.current };
    else
      return {
        type: "window",
        element: document.documentElement || document.body,
      };
  };

  useEffect(() => {
    const element = getElement();
    const handleScrollEvent = () => handleScroll();

    if (element.type === "window") {
      window.addEventListener("scroll", handleScrollEvent, { passive: true });
      return () => {
        window.removeEventListener("scroll", handleScrollEvent);
      };
    } else if (element.type === "element" && element.element) {
      element.element.addEventListener("scroll", handleScroll, {
        passive: true,
      });
      return () => {
        element.element?.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  return { scrollPosition, directionX, directionY };
};

export default useScrollbar;
