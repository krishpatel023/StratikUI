"use client";

import { useState, useEffect } from "react";

export type OS = "Windows" | "MacOS" | "Linux" | "Android" | "iOS" | "Unknown";

export const useOS = (): OS => {
  const [os, setOS] = useState<OS>("Unknown");

  useEffect(() => {
    const userAgent = window.navigator.userAgent;

    const detectOS = (): OS => {
      if (/Windows/i.test(userAgent)) {
        return "Windows";
      }
      if (/Macintosh|MacIntel|MacPPC|Mac68K/i.test(userAgent)) {
        return "MacOS";
      }
      if (/Linux/i.test(userAgent)) {
        return "Linux";
      }
      if (/Android/i.test(userAgent)) {
        return "Android";
      }
      if (/iPhone|iPad|iPod/i.test(userAgent)) {
        return "iOS";
      }
      return "Unknown";
    };

    setOS(detectOS());
  }, []);

  return os;
};
