"use client";
import { RefObject, useEffect, useState } from "react";

export default function useDisableScroll(
  isModalOpen: boolean,
  reference?: string | RefObject<HTMLElement>
) {
  const [item, setItem] = useState<HTMLElement | null>(null);
  useEffect(() => {
    if (reference && typeof reference === "string")
      setItem(document.getElementById(reference));
    else if (reference && typeof reference === "object")
      setItem(reference.current);
    else setItem(document.body);

    if (!item) return;
    item.style.overflow = isModalOpen ? "hidden" : "auto";

    return () => {
      if (item) {
        item.style.overflow = "auto";
      }
    };
  }, [isModalOpen, reference]);
}
