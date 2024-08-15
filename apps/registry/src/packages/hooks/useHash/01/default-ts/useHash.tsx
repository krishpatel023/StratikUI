"use client";

import { useState, useEffect } from "react";

const useHash = () => {
  const [hash, setHash] = useState<string | null>(null);

  const getHash = (): string | null => {
    if (typeof window === "undefined") return null;
    return window.location.hash.replace("#", "");
  };

  const addHash = (hash: string) => {
    window.location.hash = hash;
  };

  useEffect(() => {
    setHash(getHash());

    const handleHashChange = () => {
      setHash(getHash());
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return { hash, addHash };
};

export default useHash;
