"use client";
import { useEffect, useState } from "react";

export default function useDisableScroll(isModalOpen, reference) {
  const [item, setItem] = useState(null);
  useEffect(() => {
    if (reference && typeof reference === "string")
      setItem(document.getElementById(reference));
    else if (reference && typeof reference === "object")
      setItem(reference.current);
    else setItem(document.body);

    if (!item) return;

    const handleScroll = () => {
      item.style.overflow = isModalOpen ? "hidden" : "auto";
    };

    handleScroll();

    return () => {
      if (item) {
        item.style.overflow = "auto";
      }
    };
  }, [isModalOpen, reference]);
}
