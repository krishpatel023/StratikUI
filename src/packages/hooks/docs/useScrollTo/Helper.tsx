"use client";

import { Button } from "@/packages/ui/Button";
import useScrollTo from "../../code/useScrollTo";

export const Helper = () => {
  const { isVisible, scroll } = useScrollTo();

  const handleScrollToTop = () => {
    scroll(null);
  };

  // This way you can scroll to an element
  const handleScrollToElement = () => {
    scroll("element");
  };

  return (
    <div>
      <Button onClick={handleScrollToTop}>Scroll To Top</Button>
    </div>
  );
};

export const HelperCode = `export const Helper = () => {
  const { isVisible, scroll } = useScrollTo();

  const handleScrollToTop = () => {
    scroll(null);
  };

  // This way you can scroll to an element with element-id
  const handleScrollToElement = () => {
    scroll("element");
  };

  // This way you can scroll to an element with element-ref
  const ref = useRef(null);
  const handleScrollToRef = () => {
    scroll(ref);
  }

  return (
    <div>
      <Button onClick={handleScrollToTop}>Scroll To Top</Button>
    </div>
  );
};`;
