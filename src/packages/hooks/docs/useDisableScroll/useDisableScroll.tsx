import { DataDescription, ImplementationNode } from "@/utils/constants";
import { Demo, DemoStrJsx, DemoStrTsx } from "./Helper";

const CodeTsx: string = `import { RefObject, useEffect, useState } from "react";

export default function useDisableScroll(
  isModalOpen: boolean,
  reference?: string | RefObject<HTMLElement>
) {
  const [item, setItem] = useState<HTMLElement | null>(null);
  useEffect(() => {
    if (reference && typeof reference === "string") setItem(document.getElementById(reference));
    else if (reference && typeof reference === "object") setItem(reference.current);
    else setItem(document.body);

    if (!item) return;
    item.style.overflow = isModalOpen ? "hidden" : "auto";

    return () => {
      if (item) {
        item.style.overflow = "auto";
      }
    };
  }, [isModalOpen, reference]);
}`;

const CodeJsx: string = `import { RefObject, useEffect, useState } from "react";

export default function useDisableScroll(
  isModalOpen,
  reference
) {
  const [item, setItem] = useState(null);
  useEffect(() => {
    if (reference && typeof reference === "string") setItem(document.getElementById(reference));
    else if (reference && typeof reference === "object") setItem(reference.current);
    else setItem(document.body);

    if (!item) return;
    item.style.overflow = isModalOpen ? "hidden" : "auto";

    return () => {
      if (item) {
        item.style.overflow = "auto";
      }
    };
  }, [isModalOpen, reference]);
}`;

const Implementation: ImplementationNode[] = [
  {
    type: "code",
    content: [
      {
        name: "useDelay",
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
];

const Data: DataDescription = {
  name: "useDisableScroll",
  description:
    "The useDisableScroll hook is used to disable scrolling on a web page or a specific element. This hook is particularly useful in scenarios where you want to prevent the user from scrolling, such as when a modal or a full-screen menu is open.",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.1.1",
  display: true,
};

export default Data;
