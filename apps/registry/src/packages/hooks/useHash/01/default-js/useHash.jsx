"use client";

import { useState, useEffect } from "react";

const useHash = () => {
  const [hash, setHash] = useState(null);

  const getHash = () => {
    if (typeof window === "undefined") return null;
    return window.location.hash.replace("#", "");
  };

  const addHash = (hash) => {
    window.location.hash = hash;
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: Addition of getHash will cause the component to re-render many times
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
