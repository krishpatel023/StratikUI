import { DataDescription, ImplementationNode } from "@/utils/constants";
import { Helper, HelperCode } from "./Helper";

const CodeTsx: string = `import { RefObject, useEffect, useState } from "react";

const useScrollTo = (threshold = 300) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scroll = (element: RefObject<HTMLElement | null> | string | null) => {
    let targetElem = null;

    if (typeof element === "string")
      targetElem = document.getElementById(element);
    else if (typeof element === "object") targetElem = element?.current;
    else targetElem = null;

    if (targetElem) {
      // Scroll to element
      targetElem.scrollIntoView({ behavior: "smooth" });
    } else {
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { isVisible, scroll };
};

export default useScrollTo;`;

const CodeJsx: string = `import { RefObject, useEffect, useState } from "react";

const useScrollTo = (threshold = 300) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > threshold) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scroll = (element) => {
    let targetElem = null;

    if (typeof element === "string")
      targetElem = document.getElementById(element);
    else if (typeof element === "object") targetElem = element?.current;
    else targetElem = null;

    if (targetElem) {
      // Scroll to element
      targetElem.scrollIntoView({ behavior: "smooth" });
    } else {
      // Scroll to top
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { isVisible, scroll };
};

export default useScrollTo;`;

const Implementation: ImplementationNode[] = [
  {
    type: "code",
    content: [
      {
        name: "useScrollTo",
        content: [
          { language: "tsx", code: CodeTsx },
          { language: "jsx", code: CodeJsx },
        ],
      },
      {
        name: "Implementation",
        content: [
          { language: "tsx", code: HelperCode },
          { language: "jsx", code: HelperCode },
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
          "isVisible",
          "boolean",
          "Boolean flag indicating if the scroll position is past the specified threshold.",
        ],
        [
          "scroll",
          "(element: RefObject<HTMLElement | null> | string | null) => void",
          "Function to smoothly scroll to the specified element or to the top of the page if no element is specified.",
        ],
      ],
    },
  },
];

const Data: DataDescription = {
  name: "useScrollTo",
  description:
    "The useScrollTo hook is a custom React hook that helps to scroll to the top of the page or a specified element based on the window's scroll position. It takes an optional threshold parameter to determine when to toggle visibility.",
  implementation: Implementation,
  component: <Helper />,
  version_included: "0.1.1",
  display: true,
};

export default Data;
