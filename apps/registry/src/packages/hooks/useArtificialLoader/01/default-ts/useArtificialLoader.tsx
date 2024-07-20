"use client";

import { useEffect, useState } from "react";

interface UseArtificialLoaderOptions {
  duration?: number;
  initialDelay?: number;
  updateCount?: number;
}

interface UseArtificialLoaderReturn {
  isLoading: boolean;
  progress: number;
  startLoader: (options?: UseArtificialLoaderOptions) => void;
  stopLoader: () => void;
}

const useArtificialLoader = (): UseArtificialLoaderReturn => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [loaderTimeout, setLoaderTimeout] = useState<ReturnType<
    typeof setTimeout
  > | null>(null);

  useEffect(() => {
    return () => {
      if (loaderTimeout) {
        clearTimeout(loaderTimeout);
      }
    };
  }, [loaderTimeout]);

  const startLoader = (options: UseArtificialLoaderOptions = {}) => {
    const { duration = 5000, initialDelay = 0, updateCount = 10 } = options;

    setIsLoading(true);
    setProgress(0);

    const startTime = Date.now();
    const endTime = startTime + duration;
    const updateStep = 100 / updateCount;

    const updateProgress = () => {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      const newProgress = Math.min((elapsedTime * 100) / duration, 100);

      const randomJump = Math.floor(Math.random() * updateStep);
      const randomizedProgress = Math.min(newProgress + randomJump, 100);
      const intRandomizedProgress = Math.floor(randomizedProgress);
      setProgress(intRandomizedProgress);

      if (currentTime < endTime) {
        const timeout = setTimeout(updateProgress, Math.random() * 200);
        setLoaderTimeout(timeout);
      } else {
        setIsLoading(false);
        setProgress(100);
      }
    };

    const timeout = setTimeout(updateProgress, initialDelay);
    setLoaderTimeout(timeout);
  };

  const stopLoader = () => {
    if (loaderTimeout) {
      clearTimeout(loaderTimeout);
      setLoaderTimeout(null);
      setIsLoading(false);
      setProgress(0);
    }
  };

  return { isLoading, progress, startLoader, stopLoader };
};

export default useArtificialLoader;
