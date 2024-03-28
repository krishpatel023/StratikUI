import { useEffect, RefObject } from "react";

// const useClickOutside = () => {
//   const handleClick = (e: MouseEvent) => {
//     if (ref.current && !ref.current.contains(e.target as Node)) {
//       callback();
//     }
//   };

//   useEffect(() => {
//     document.addEventListener("click", handleClick);

//     return () => {
//       document.removeEventListener("click", handleClick);
//     };
//   }, [ref]);
// };

const useClickOutside = (ref: RefObject<HTMLElement>, handler: () => void) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        !ref.current ||
        ref.current.contains(event.target ? (event.target as Node) : null)
      ) {
        return;
      }
      handler();
    };
    const listenerTouch = (event: TouchEvent) => {
      if (
        !ref.current ||
        ref.current.contains(event.target ? (event.target as Node) : null)
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
