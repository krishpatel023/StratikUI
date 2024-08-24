"use client";
import { type RefObject, useEffect, useState } from "react";

interface UseScrollToProps {
  threshold?: number;
}

const useScrollTo = ({ threshold = 300 }: UseScrollToProps = {}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scroll = (element: RefObject<HTMLElement | null> | string | null) => {
    let targetElem = null;

    if (typeof element === "string") targetElem = document.getElementById(element);
    else if (typeof element === "object") targetElem = element?.current;
    else targetElem = null;

    if (targetElem) {
      // Scroll to element
      targetElem.scrollIntoView({ behavior: "smooth" });
    } else {
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: Addition of others will cause the component to re-render many times
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return { isVisible, scroll };
};

export default useScrollTo;
