import { DataDescription, ImplementationNode } from "@/utils/constants";
import { Demo, DemoStrJsx, DemoStrTsx } from "./Helper";

const CodeTsx: string = `import { useCallback, useEffect, useRef, useState } from "react";

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
  }, []);

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
`;

const CodeJsx: string = `js {1} import { useCallback, useEffect, useRef, useState } from "react";

const useDelay = (): UseDelayReturn => {
  const timerRef = useRef(null);
  const [isDelaying, setIsDelaying] = useState(false);

  useEffect(() => {
    return () => {
      clearDelay();
    };
  }, []);

  const delay = async (
    time: number,
    callback?: () => void,
    options = {}
  ) => {
    const { immediate = false } = options;
    const executableFunc = callback || (() => {});

    if (immediate) {
      executableFunc();
    }

    return new Promise((resolve) => {
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
`;

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
  {
    type: "properties",
    content: {
      name: "Properties",
      dimensions: [1, 1, 2],
      data: [
        ["Property", "Type", "Description"],
        [
          "isDelaying",
          "boolean",
          "It will tell you if there is delay in progress or not",
        ],
        [
          "delay",
          "(time: number, callback?: () => void, options?: UseDelayOptions) => Promise<void>",
          "Delay function that returns a promise. If a callback is passed it will be executed and there will be no need of awaiting it. If not then it will delay the process and execute whatever is next, but will need async-await for it.",
        ],
        [
          "clearDelay",
          "() => void",
          "Clear delay will stop the delay process.",
        ],
      ],
    },
  },
];

const Data: DataDescription = {
  name: "useDelay",
  description:
    "The useDelay hook introduces a delay before executing a specified action, utilizing useTimeout and Promise for managing the delay.  This hook supports both synchronous and asynchronous functions, making it versatile for various use cases where deferred actions are needed, such as enhancing user experience or managing timed events.",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.1.1",
  display: true,
};

export default Data;
