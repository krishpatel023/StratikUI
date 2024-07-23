"use client";

import { useEffect } from "react";

const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (
        !ref.current ||
        ref.current.contains(event.target ? event.target : null)
      ) {
        return;
      }
      handler();
    };
    const listenerTouch = (event) => {
      if (
        !ref.current ||
        ref.current.contains(event.target ? event.target : null)
      ) {
        return;
      }
      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listenerTouch);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listenerTouch);
    };
  }, [ref, handler]);
};

export default useClickOutside;
