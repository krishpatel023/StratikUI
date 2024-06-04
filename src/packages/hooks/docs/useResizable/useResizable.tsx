import {
  ExampleJsx,
  ExampleTsx,
  ResizeExample1,
} from "@/packages/primitives/resizable_container/Resizable_1_Helper";
import { DataDescription, ImplementationNode } from "@/utils/constants";

export const useResizableCodeTsx: string = `import { RefObject, useEffect, useState } from "react";

export interface ResizableOptions {
  minWidth?: string;
  minHeight?: string;
  maxWidth?: string;
  maxHeight?: string;
  onResizeStart?: () => void;
  onResize?: () => void;
  onResizeEnd?: () => void;
  expandBoundingElement?: boolean;
}

const useResizable = (
  containerRef: RefObject<HTMLDivElement>,
  resizableRef: RefObject<HTMLDivElement>,
  options: ResizableOptions = {}
) => {
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
  const handleValue = (value: string) => {
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
  const [activeHandle, setActiveHandle] = useState<
    "right" | "left" | "top" | "bottom" | null
  >(null);

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

  const handleMove = (e: TouchEvent | MouseEvent) => {
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

    resizableRef.current.style.width = \`\${widthFinal}px\`;
    resizableRef.current.style.height = \`\${heightFinal}px\`;

    setContainerDimensions({
      width: widthFinal,
      height: heightFinal,
    });

    if (onResize) onResize();
  };

  const handleResize = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>,
    direction: "right" | "left" | "top" | "bottom"
  ) => {
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

export default useResizable;`;

export const useResizableCodeJsx: string = `import { RefObject, useEffect, useState } from "react";

const useResizable = (
  containerRef,
  resizableRef,
  options
) => {
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
  const handleValue = (value: string) => {
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

  const handleMove = () => {
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

    resizableRef.current.style.width = \`\${widthFinal}px\`;
    resizableRef.current.style.height = \`\${heightFinal}px\`;

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

export default useResizable;`;

const Implementation: ImplementationNode[] = [
  {
    type: "code",
    content: [
      {
        name: "useProcess",
        content: [
          { language: "tsx", code: useResizableCodeTsx },
          { language: "jsx", code: useResizableCodeJsx },
        ],
      },
      {
        name: "Example",
        content: [
          { language: "tsx", code: ExampleTsx },
          { language: "jsx", code: ExampleJsx },
        ],
      },
    ],
  },
  {
    type: "properties",
    content: {
      name: "Properties",
      dimensions: [1, 1, 2],
      data: [
        ["Property", "Type", "Description"],
        [
          "containerRef",
          "RefObject<HTMLDivElement>",
          "A React ref object pointing to the container element that the resizable element is within.",
        ],
        [
          "resizableRef",
          "RefObject<HTMLDivElement>",
          "A React ref object pointing to the element that is to be resized.",
        ],
        [
          "options",
          "ResizableOptions",
          "An object containing various optional properties to configure the behavior of the hook.",
        ],
        [
          "minWidth",
          "string",
          "The minimum width the resizable element can be, defined in pixels or percentage.",
        ],
        [
          "minHeight",
          "string",
          "The minimum height the resizable element can be, defined in pixels or percentage.",
        ],
        [
          "maxWidth",
          "string",
          "The maximum width the resizable element can be, defined in pixels or percentage.",
        ],
        [
          "maxHeight",
          "string",
          "The maximum height the resizable element can be, defined in pixels or percentage.",
        ],
        [
          "onResizeStart",
          "() => void",
          "A callback function that is called when the resize action starts.",
        ],
        [
          "onResize",
          "() => void",
          "A callback function that is called when the resizing is occurring.",
        ],
        [
          "onResizeEnd",
          "() => void",
          "A callback function that is called when the resize action ends.",
        ],
        [
          "expandBoundingElement",
          "boolean",
          "A boolean that determines whether the bounding element can be expanded beyond its initial size.",
        ],
      ],
    },
  },
  {
    type: "properties",
    content: {
      name: "Methods",
      dimensions: [1, 1, 2],
      data: [
        ["Return Value", "Type", "Description"],
        [
          "containerDimensions",
          "{ width: number; height: number }",
          "A state variable that holds the current dimensions (width and height) of the container element.",
        ],
        [
          "isResizing",
          "boolean",
          "A state variable indicating whether the resizing action is currently active (true) or not (false).",
        ],
        [
          "handleResize",
          '(e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>, direction: "right" | "left" | "top" | "bottom") => void',
          'A function that should be called when the user initiates a resize action. It takes the event object and the direction of resizing ("right," "left," "top," or "bottom") as arguments.',
        ],
        [
          "stopResize",
          "() => void",
          "A function that should be called when the resize action ends. It performs cleanup tasks and resets the state related to resizing.",
        ],
        [
          "handleMove",
          "(e: TouchEvent | MouseEvent) => void",
          "A function that handles the movement during resizing. It calculates the new dimensions based on the active handle and user input.",
        ],
      ],
    },
  },
];

const Data: DataDescription = {
  name: "useProcess",
  description:
    "The useProcess hook is a custom React hook that provides a way to manage asynchronous processes in a React component. It returns an object with two properties: isProcessing and executeProcess. This hook is designed to help track the state of an asynchronous process and make subtle UI actions accordingly. By knowing whether a certain process is being executed or not, you can update the UI to provide a better user experience, such as displaying loading indicators, disabling buttons, etc.",
  implementation: Implementation,
  component: <ResizeExample1 />,
  version_included: "0.1.1",
  display: true,
};

export default Data;
