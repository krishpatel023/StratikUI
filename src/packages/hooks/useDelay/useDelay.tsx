"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface UseDelayOptions {
  immediate?: boolean;
}

interface UseDelayReturn {
  isDelaying: boolean;
  delay: (
    time: number,
    callback?: () => void,
    options?: UseDelayOptions
  ) => void;
  clearDelay: () => void;
}

const useDelay = (): UseDelayReturn => {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isDelaying, setIsDelaying] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      clearDelay();
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const delay = async (
    time: number,
    callback?: () => void,
    options: UseDelayOptions = {}
  ): Promise<void> => {
    const { immediate = false } = options;
    const executableFunc = callback || (() => {});

    if (immediate) {
      executableFunc();
    }

    return new Promise<void>((resolve) => {
      clearDelay();

      timerRef.current = setTimeout(() => {
        if (!immediate) {
          executableFunc();
        }
        setIsDelaying(false);
        resolve();
      }, time);

      setIsDelaying(true);
    });
  };

  const clearDelay = useCallback(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
      setIsDelaying(false);
    }
  }, []);

  return { isDelaying, delay, clearDelay };
};

export default useDelay;
