"use client";
import { useEffect } from "react";

export default function useDisableScroll(isModalOpen: boolean, idTag?: string) {
  useEffect(() => {
    const item = idTag ? document.getElementById(idTag) : document.body;

    if (!item) return;
    item.style.overflow = isModalOpen ? "hidden" : "auto";

    return () => {
      if (item) {
        item.style.overflow = "auto";
      }
    };
  }, [isModalOpen, idTag]);
}
