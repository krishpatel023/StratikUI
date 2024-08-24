"use client";
import { useEffect, useState } from "react";

const useScrollTo = ({ threshold = 300 } = {}) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scroll = (element) => {
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
