"use client";
import React, { useEffect, useState, RefObject } from "react";

const useScrollToTop = (
  elementByRef?: RefObject<HTMLElement | null>,
  threshold = 300,
  elementById?: string
) => {
  const [isVisible, setIsVisible] = useState(false);

  const element = elementById
    ? document.getElementById(elementById)
    : elementByRef?.current;

  const toggleVisibility = () => {
    if (window.scrollY > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return [isVisible, scrollToTop] as const;
};

export default useScrollToTop;
