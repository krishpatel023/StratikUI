"use client";

import { useEffect, useState } from "react";

const useResizable = (containerRef, resizableRef, options = {}) => {
  const {
    minWidth,
    minHeight,
    maxWidth,
    maxHeight,
    onResizeStart,
    onResize,
    onResizeEnd,
    expandBoundingElement = true,
  } = options;

  // Will convert minWidth, minHeight, maxWidth, maxHeight to pixels
  const handleValue = (value) => {
    if (value.includes("px")) {
      return Number(value.replace("px", ""));
    } else if (value.includes("%")) {
      const percentage = Number(value.replace("%", ""));
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (!containerRect) return 0;
      return (percentage * containerRect.width) / 100;
    }
    return 0;
  };

  const boundingDimensions = {
    minWidth: handleValue(minWidth || "0px"),
    minHeight: handleValue(minHeight || "0px"),
    maxWidth: handleValue(maxWidth || "100%"),
    maxHeight: handleValue(maxHeight || "100%"),
  };

  const [isResizing, setIsResizing] = useState(false);
  const [containerDimensions, setContainerDimensions] = useState({
    width: boundingDimensions.minWidth,
    height: boundingDimensions.minHeight,
  });
  const [activeHandle, setActiveHandle] = useState(null);
  const stopSelection = () => {
    if (containerRef.current) {
      containerRef.current.style.userSelect = "none";
    }
  };

  const startSelection = () => {
    if (containerRef.current) {
      containerRef.current.style.userSelect = "auto";
    }
  };

  const handleMove = (e) => {
    e.preventDefault();

    if (!activeHandle || !isResizing || !resizableRef.current) return;

    const currentX = "touches" in e ? e.touches[0].clientX : e.clientX;
    const currentY = "touches" in e ? e.touches[0].clientY : e.clientY;

    const containerRect = containerRef.current?.getBoundingClientRect();
    const resizableRect = resizableRef.current?.getBoundingClientRect();

    if (!resizableRect || !containerRect) return;

    const startX = resizableRect.left;
    const startY = resizableRect.top;

    const initialWidth = resizableRect.width;
    const initialHeight = resizableRect.height;

    let newWidth = initialWidth;
    let newHeight = initialHeight;

    if (activeHandle === "right") {
      const deltaX = currentX - startX - initialWidth;
      newWidth = Math.max(initialWidth + deltaX, boundingDimensions.minWidth);
    }

    if (activeHandle === "left") {
      const deltaX = startX - currentX;
      newWidth = Math.max(initialWidth + deltaX, boundingDimensions.minWidth);
    }

    if (activeHandle === "bottom") {
      const deltaY = currentY - startY - initialHeight;
      newHeight = Math.max(
        initialHeight + deltaY,
        boundingDimensions.minHeight
      );
    }

    if (activeHandle === "top") {
      const deltaY = startY - currentY;
      newHeight = Math.max(
        initialHeight + deltaY,
        boundingDimensions.minHeight
      );
    }

    const widthFinal = Math.min(
      newWidth,
      containerRef.current?.clientWidth || Infinity
    );
    const heightFinal = Math.min(
      newHeight,
      containerRef.current?.clientHeight || Infinity
    );

    // This will prevent the bounding element from being expanded.
    if (!expandBoundingElement && containerRef.current) {
      if (
        widthFinal >= boundingDimensions.maxWidth ||
        heightFinal >= boundingDimensions.maxHeight
      )
        return;
    }

    if (activeHandle === "right" || activeHandle === "left")
      resizableRef.current.style.width = `${widthFinal}px`;
    else if (activeHandle === "bottom" || activeHandle === "top")
      resizableRef.current.style.height = `${heightFinal}px`;

    setContainerDimensions({
      width: widthFinal,
      height: heightFinal,
    });

    if (onResize) onResize();
  };

  const handleResize = (e, direction) => {
    setActiveHandle(direction);
    setIsResizing(true);
    stopSelection();
    if (onResizeStart) onResizeStart();
  };

  const stopResize = () => {
    if (onResizeEnd) onResizeEnd();
    setActiveHandle(null);
    setIsResizing(false);
    startSelection();
  };

  useEffect(() => {
    containerRef.current?.addEventListener("touchmove", handleMove, {
      passive: false,
    });
    containerRef.current?.addEventListener("touchend", stopResize, {
      passive: false,
    });
    containerRef.current?.addEventListener("mousemove", handleMove);
    containerRef.current?.addEventListener("mouseup", stopResize);

    return () => {
      containerRef.current?.removeEventListener("touchmove", handleMove);
      containerRef.current?.removeEventListener("touchend", stopResize);
      containerRef.current?.removeEventListener("mousemove", handleMove);
      containerRef.current?.removeEventListener("mouseup", stopResize);
    };
  }, [handleMove, stopResize]);

  return {
    containerDimensions,
    isResizing,
    handleResize,
    stopResize,
    handleMove,
  };
};

export default useResizable;
