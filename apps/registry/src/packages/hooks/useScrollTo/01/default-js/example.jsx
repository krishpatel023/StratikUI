"use client";

import Button from "@/ui/Button";
import useScrollTo from "@registry/hooks/useScrollTo/01/default-js/useScrollTo";
import { useRef } from "react";

export default function UseScrollToExample() {
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
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <Button onPress={handleScrollToTop}>Scroll To Top</Button>
    </div>
  );
}
