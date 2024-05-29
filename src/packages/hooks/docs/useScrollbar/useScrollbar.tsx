import { DataDescription, ImplementationNode } from "@/utils/constants";
import { Demo, DemoStringJsx, DemoStringTsx } from "./Helper";

const CodeTsx: string = `import { useState, useEffect, useCallback } from "react";

const useScrollbar = (
  elementIdOrRef?: string | React.RefObject<HTMLElement>
) => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
  const [directionX, setDirectionX] = useState<boolean | null>(null);
  const [directionY, setDirectionY] = useState<boolean | null>(null);

  const handleScroll = useCallback(() => {
    const element = getElement();
    if (element) {
      const xpos = parseFloat(window.scrollX.toFixed(2));
      const ypos = parseFloat(window.scrollY.toFixed(2));
      const prevXpos = scrollPosition.x;
      const prevYpos = scrollPosition.y;
      if (prevXpos <= xpos) setDirectionX(true);
      else setDirectionX(false);
      if (prevYpos <= ypos) setDirectionY(true);
      else setDirectionY(false);
      setScrollPosition({ x: xpos, y: ypos });
    }
  }, [scrollPosition]);

  const getElement = () => {
    if (elementIdOrRef && typeof elementIdOrRef === "string") return document.getElementById(elementIdOrRef);
    else if (elementIdOrRef && typeof elementIdOrRef === "object") return elementIdOrRef.current;
    else return document.documentElement || document.body;
  };

  useEffect(() => {
    const element = getElement();
    const handleScrollEvent = () => handleScroll();

    if (element === document.documentElement || element === document.body) {
      window.addEventListener("scroll", handleScrollEvent, { passive: true });
      return () => {
        window.removeEventListener("scroll", handleScrollEvent);
      };
    } else if (element) {
      element.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        element.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  return { scrollPosition, directionX, directionY };
};

export default useScrollbar;`;

const CodeJsx: string = `import { useState, useEffect, useCallback } from "react";

const useScrollbar = (
  elementIdOrRef
) => {
  const [scrollPosition, setScrollPosition] = useState({ x: 0, y: 0 });
  const [directionX, setDirectionX] = useState(null);
  const [directionY, setDirectionY] = useState(null);

  const handleScroll = useCallback(() => {
    const element = getElement();
    if (element) {
      const xpos = parseFloat(window.scrollX.toFixed(2));
      const ypos = parseFloat(window.scrollY.toFixed(2));
      const prevXpos = scrollPosition.x;
      const prevYpos = scrollPosition.y;
      if (prevXpos <= xpos) setDirectionX(true);
      else setDirectionX(false);
      if (prevYpos <= ypos) setDirectionY(true);
      else setDirectionY(false);
      setScrollPosition({ x: xpos, y: ypos });
    }
  }, [scrollPosition]);

  const getElement = () => {
    if (elementIdOrRef && typeof elementIdOrRef === "string") return document.getElementById(elementIdOrRef);
    else if (elementIdOrRef && typeof elementIdOrRef === "object") return elementIdOrRef.current;
    else return document.documentElement || document.body;
  };

  useEffect(() => {
    const element = getElement();
    const handleScrollEvent = () => handleScroll();

    if (element === document.documentElement || element === document.body) {
      window.addEventListener("scroll", handleScrollEvent, { passive: true });
      return () => {
        window.removeEventListener("scroll", handleScrollEvent);
      };
    } else if (element) {
      element.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        element.removeEventListener("scroll", handleScroll);
      };
    }
  }, [handleScroll]);

  return { scrollPosition, directionX, directionY };
};

export default useScrollbar;`;

const Implementation: ImplementationNode[] = [
  {
    type: "code",
    content: [
      {
        name: "useScrollbar",
        content: [
          { language: "tsx", code: CodeTsx },
          { language: "jsx", code: CodeJsx },
        ],
      },
      {
        name: "Example",
        content: [
          { language: "tsx", code: DemoStringTsx },
          { language: "jsx", code: DemoStringJsx },
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
          "scrollPosition",
          "{ x: number, y: number }",
          "An object containing the current scroll position of the tracked element or document body. The `x` property represents the horizontal scroll position, and the `y` property represents the vertical scroll position. Both values are fixed to two decimal places.",
        ],
        [
          "directionX",
          "boolean | null",
          "A value indicating the horizontal scroll direction. If `true`, the user is scrolling to the right. If `false`, the user is scrolling to the left. If `null`, the user has not scrolled horizontally yet.",
        ],
        [
          "directionY",
          "boolean | null",
          "A value indicating the vertical scroll direction. If `true`, the user is scrolling down. If `false`, the user is scrolling up. If `null`, the user has not scrolled vertically yet.",
        ],
      ],
    },
  },
];

const Data: DataDescription = {
  name: "useScrollbar",
  description:
    "The useScrollbar is a React hook that provides an easy way to track scroll position and direction of an HTML element or the entire document. It returns an object with scrollPosition, directionX, and directionY properties, allowing for seamless implementation of scroll-based behaviors.",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.1.1",
  display: true,
};

export default Data;
