import { DataDescription, ImplementationNode } from "@/utils/constants";
import { DemoStrJsx, DemoStrTsx, ModalImplementation } from "./Demo_Helper";

const CodeTsx: string = `import { useEffect, RefObject } from "react";

const useClickOutside = (ref: RefObject<HTMLElement>, handler: () => void) => {
  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (
        !ref.current ||
        ref.current.contains(event.target ? (event.target as Node) : null)
      ) {
        return;
      }
      handler();
    };
    const listenerTouch = (event: TouchEvent) => {
      if (
        !ref.current ||
        ref.current.contains(event.target ? (event.target as Node) : null)
      ) {
        return;
      }
      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listenerTouch);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listenerTouch);
    };
  }, [ref, handler]);
};

export default useClickOutside;
`;

const CodeJsx: string = `import { useEffect, RefObject } from "react";

const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (
        !ref.current ||
        ref.current.contains(event.target ? (event.target) : null)
      ) {
        return;
      }
      handler();
    };
    const listenerTouch = (event) => {
      if (
        !ref.current ||
        ref.current.contains(event.target ? (event.target) : null)
      ) {
        return;
      }
      handler();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listenerTouch);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listenerTouch);
    };
  }, [ref, handler]);
};

export default useClickOutside;
`;

const Implementation: ImplementationNode[] = [
  {
    type: "code",
    content: [
      {
        name: "useClickOutside",
        content: [
          { language: "tsx", code: CodeTsx },
          { language: "jsx", code: CodeJsx },
        ],
      },
      {
        name: "Example",
        content: [
          { language: "tsx", code: DemoStrTsx },
          { language: "jsx", code: DemoStrJsx },
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
          "ref",
          "RefObject",
          "The reference to the target element. This is the element that the hook monitors for outside clicks.",
        ],
        [
          "handler",
          "() => void",
          "The callback function to execute when a click outside the element is detected. This function contains the logic to run in response to the outside click, such as hiding the element or performing other state updates.",
        ],
      ],
    },
  },
];

const Data: DataDescription = {
  name: "useClickOutside",
  description:
    "The useClickOutside hook detects clicks outside a specified element and triggers a callback function. It accepts two parameters: a reference to the target element and a callback function to execute when a click outside the element is detected. This hook is useful for handling interactions like closing dropdowns or modals when a user clicks outside of them.",
  implementation: Implementation,
  component: <ModalImplementation />,
  version_included: "0.1.1",
  display: true,
};

export default Data;
