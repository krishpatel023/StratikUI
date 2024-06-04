import { DataDescription, ImplementationNode } from "@/utils/constants";
import OSComponent from "./Helper";

const CodeTsx: string = `import { useState, useEffect } from "react";

export type OS = "Windows" | "MacOS" | "Linux" | "Android" | "iOS" | "Unknown";

export const useOS = (): OS => {
  const [os, setOS] = useState<OS>("Unknown");

  useEffect(() => {
    const userAgent = window.navigator.userAgent;

    const detectOS = (): OS => {
      if (/Windows/i.test(userAgent)) {
        return "Windows";
      }
      if (/Macintosh|MacIntel|MacPPC|Mac68K/i.test(userAgent)) {
        return "MacOS";
      }
      if (/Linux/i.test(userAgent)) {
        return "Linux";
      }
      if (/Android/i.test(userAgent)) {
        return "Android";
      }
      if (/iPhone|iPad|iPod/i.test(userAgent)) {
        return "iOS";
      }
      return "Unknown";
    };

    setOS(detectOS());
  }, []);

  return os;
};`;

const CodeJsx: string = `import { useState, useEffect } from "react";

export const useOS = () => {
  const [os, setOS] = useState("Unknown");

  useEffect(() => {
    const userAgent = window.navigator.userAgent;

    const detectOS = (): OS => {
      if (/Windows/i.test(userAgent)) {
        return "Windows";
      }
      if (/Macintosh|MacIntel|MacPPC|Mac68K/i.test(userAgent)) {
        return "MacOS";
      }
      if (/Linux/i.test(userAgent)) {
        return "Linux";
      }
      if (/Android/i.test(userAgent)) {
        return "Android";
      }
      if (/iPhone|iPad|iPod/i.test(userAgent)) {
        return "iOS";
      }
      return "Unknown";
    };

    setOS(detectOS());
  }, []);

  return os;
};`;

const Example = `import React from "react";

const OSComponent = () => {
  const os = useOS();

  return (
    <div className="w-full h-80 flex flex-col justify-center items-center dark:text-white">
      <p>Your operating system is: {os}</p>
    </div>
  );
};

export default OSComponent;`;

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
        name: "Implementation",
        content: [
          { language: "tsx", code: Example },
          { language: "jsx", code: Example },
        ],
      },
    ],
  },
];

const Data: DataDescription = {
  name: "useOS",
  description: "Use the useOS hook to get the operating system of the user.",
  implementation: Implementation,
  component: <OSComponent />,
  version_included: "0.1.1",
  display: true,
};

export default Data;
