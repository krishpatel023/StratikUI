import { DataDescription, ImplementationNode } from "@/utils/constants";
import { ScrollToTop } from "./Helper_1";

function Demo() {
  return (
    <div className="w-full min-h-[40rem]">
      <ScrollToTop />
    </div>
  );
}

const CodeTsx: string = `import { twMerge } from "tailwind-merge";

export const ScrollToTop = ({ className }: { className?: string }) => {
  const { isVisible, scroll } = useScrollTo();

  const handleScrollToTop = () => {
    scroll(null);
  };

  return (
    <button
      onClick={handleScrollToTop}
      className={twMerge(
        "p-2 absolute right-4 bottom-4 text-black dark:text-white bg-neutral-200 dark:bg-neutral-800 rounded-lg border border-neutral-400 dark:border-neutral-700",
        isVisible ? "" : "hidden",
        className
      )}
    >
      <UpIcon className="w-6 h-6" />
    </button>
  );
};

export const UpIcon = (props: IconProps) => (
  <svg
    height="200"
    width="200"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06L5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);`;

const CodeJsx: string = `import { twMerge } from "tailwind-merge";

export const ScrollToTop = ({ className }) => {
  const { isVisible, scroll } = useScrollTo();

  const handleScrollToTop = () => {
    scroll(null);
  };

  return (
    <button
      onClick={handleScrollToTop}
      className={twMerge(
        "p-2 absolute right-4 bottom-4 text-black dark:text-white bg-neutral-200 dark:bg-neutral-800 rounded-lg border border-neutral-400 dark:border-neutral-700",
        isVisible ? "" : "hidden",
        className
      )}
    >
      <UpIcon className="w-6 h-6" />
    </button>
  );
};

export const UpIcon = (props) => (
  <svg
    height="200"
    width="200"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06L5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06"
      fill="currentColor"
      fillRule="evenodd"
    />
  </svg>
);`;

const DemoString: string = `function Demo() {
  return (
    <div className="w-full min-h-[40rem]">
      <ScrollToTop />
    </div>
  );
}`;

const HookTsx: string = `import { RefObject, useEffect, useState } from "react";

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

const HookJsx: string = `import { RefObject, useEffect, useState } from "react";

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
    type: "technology_used",
    content: ["tailwind-css", "twMerge"],
  },
  {
    type: "code",
    content: [
      {
        name: "ScrollToTop",
        content: [
          { language: "tsx", code: CodeTsx },
          { language: "jsx", code: CodeJsx },
        ],
      },
      {
        name: "Implementation",
        content: [
          { language: "tsx", code: DemoString },
          { language: "jsx", code: DemoString },
        ],
      },
      {
        name: "Hook",
        content: [
          { language: "tsx", code: HookTsx },
          { language: "jsx", code: HookJsx },
        ],
      },
    ],
  },
];

const Data: DataDescription = {
  name: "Scroll To Top",
  description:
    "This component is used to scroll to the top of the page. Just include the component in your page and you're good to go!",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.1.1",
  display: true,
};

export default Data;
