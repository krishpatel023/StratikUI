"use client";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
import { v4 } from "uuid";
import { ToastProps, useToast } from "./Toast_1_Context_Helper";
import ArrowHeading from "@/components/ui/ArrowHeading";

type DirectionProps = "top-left" | "top-right" | "bottom-left" | "bottom-right";

function ToastGroup({
  direction,
  createStack,
}: {
  direction: DirectionProps;
  createStack?: boolean;
}) {
  const { toasts } = useToast();

  return (
    <div
      className={twMerge(
        "absolute flex flex-col gap-4 group/toast transition-all duration-300 ease-linear",
        direction === "top-right" && "top-4 right-4",
        direction === "bottom-right" && "bottom-4 right-4 flex-col-reverse",
        direction === "top-left" && "top-4 left-4",
        direction === "bottom-left" && "bottom-4 left-4 flex-col-reverse"
      )}
    >
      {toasts.map((toast) => (
        <Toast
          key={toast.toastId}
          toastId={toast.toastId}
          createStack={createStack}
          direction={direction}
        />
      ))}
    </div>
  );
}

function Toast({
  toastId,
  createStack,
  direction,
}: {
  toastId: string;
  createStack?: boolean;
  direction: DirectionProps;
}) {
  const gapBeteenCardsInGroup = 0.5;

  const { toasts, getToast, calculateHirarchy } = useToast();
  const toast = getToast(toastId);
  const [heirarchy, setHirarchy] = useState<number | null>(null);

  useEffect(() => {
    const index = calculateHirarchy(toastId);
    setHirarchy(index);
  }, [toasts]); // eslint-disable-line react-hooks/exhaustive-deps

  const directionDependentPositioning: {
    [key: string]: {
      top?: string;
      right?: string;
      bottom?: string;
      left?: string;
    };
  } = {
    "top-right": {
      top: `${heirarchy !== null ? gapBeteenCardsInGroup * heirarchy : 0}rem`,
      right: `${heirarchy !== null ? gapBeteenCardsInGroup * heirarchy : 0}rem`,
    },
    "bottom-right": {
      right: `${heirarchy !== null ? gapBeteenCardsInGroup * heirarchy : 0}rem`,
      bottom: `${heirarchy !== null ? gapBeteenCardsInGroup * heirarchy : 0}rem`,
    },
    "top-left": {
      top: `${heirarchy !== null ? gapBeteenCardsInGroup * heirarchy : 0}rem`,
      left: `${heirarchy !== null ? gapBeteenCardsInGroup * heirarchy : 0}rem`,
    },
    "bottom-left": {
      left: `${heirarchy !== null ? gapBeteenCardsInGroup * heirarchy : 0}rem`,
      bottom: `${heirarchy !== null ? gapBeteenCardsInGroup * heirarchy : 0}rem`,
    },
  };

  return (
    <>
      {toast && (
        <div
          className={twMerge(
            "overflow-hidden w-max flex flex-col justify-between group-hover/toast:static",
            createStack ? "absolute" : "static",
            heirarchy === null
              ? "hidden"
              : direction === "top-right" || direction === "bottom-right"
                ? "animate-toastEntryRight"
                : "animate-toastEntryLeft"
          )}
          style={{
            ...directionDependentPositioning[direction],
            zIndex: heirarchy !== null ? heirarchy : -1,
          }}
        >
          <ToastStyling toastId={toastId} />
        </div>
      )}
    </>
  );
}

const ToastStyling = ({ toastId }: { toastId: string }) => {
  const { getToast, removeToast } = useToast();

  const toast = getToast(toastId);

  return (
    <>
      {toast && (
        <div
          className={twMerge(
            "min-w-80 min-h-full rounded-md text-textPrimary flex justify-between font-semibold border-2 gap-6 py-2 px-4",
            toast.state === "success" &&
              "bg-green-500  border-green-900 text-green-900 ",
            toast.state === "error" && "bg-red-300 border-red-900 text-red-900",
            toast.state === "warning" &&
              "bg-yellow-200 border-yellow-900 text-yellow-900",
            toast.state === "info" &&
              "bg-blue-400 border-blue-900 text-blue-900"
          )}
        >
          {toast.children}
          <button
            onClick={() => removeToast(toastId)}
            className={twMerge(toast.closeType === "timeout" && "hidden")}
          >
            &#10005;
          </button>
        </div>
      )}
    </>
  );
};

// const ToastProgressBar = ({ toastId }: { toastId: string }) => {
//   const { toasts, getToast } = useToast();
//   const toast = getToast(toastId);
//   if (!toast) return;

//   const [progressBarWidth, setProgressBarWidth] = useState<number>(0);

//   useEffect(() => {
//     if (toast.closeType === "manual") return;
//     if (progressBarWidth >= 100) return;

//     const animateProgressBar: any = () => {
//       const currentTime = new Date().getTime();
//       const elapsedTime = currentTime - toast.creationTime;
//       const progress = (elapsedTime / toast.duration) * 100;

//       setProgressBarWidth(progress);
//     };

//     animateProgressBar();

//     return () => {
//       setProgressBarWidth(100);
//       // Reset progress bar width when component unmounts
//     };
//   }, [progressBarWidth]);

//   return (
//     <>
//       {toast.closeType === "timeout" && (
//         <div className={twMerge("min-w-full min-h-2")}>
//           <div
//             className={twMerge(
//               "min-h-[4px]",
//               toast.state === "success" && "bg-green-900"
//             )}
//             style={{ width: `${progressBarWidth}%` }}
//           ></div>
//         </div>
//       )}
//     </>
//   );
// };

export const ToastImplementation = () => {
  const { addToast } = useToast();

  const [direction, setDirection] = useState<
    "top-right" | "bottom-right" | "top-left" | "bottom-left"
  >("top-right");
  const [createStack, setCreateStack] = useState<boolean>(false);
  const [state, setState] = useState<"success" | "error" | "warning" | "info">(
    "success"
  );
  const [closeType, setCloseType] = useState<"timeout" | "manual">("timeout");

  const createToasts = () => {
    addToast({
      toastId: v4(),
      state: state,
      children: <h1>Hello</h1>,
      visibility: true,
      creationTime: Date.now(),
      closeType: closeType,
      duration: 5000,
    });
  };

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <ToastGroup direction={direction} createStack={createStack} />
      <span className="flex justify-center items-center gap-4 text-red-500">
        {`Note : Adjust the bellow properties in advance and don't change in between.`}
      </span>
      <span className="flex justify-center items-center gap-4 text-textPrimary">
        <h1>Direction :</h1>
        <h2>{direction}</h2>
      </span>
      <div className="w-full flex justify-center gap-6">
        <button
          className="bg-neutral-800 border-2 border-neutral-700 rounded py-2 px-4 text-white"
          onClick={() => setDirection("top-right")}
        >
          Top-Right
        </button>
        <button
          className="bg-neutral-800 border-2 border-neutral-700 rounded py-2 px-4 text-white"
          onClick={() => setDirection("bottom-right")}
        >
          Bottom-Right
        </button>
        <button
          className="bg-neutral-800 border-2 border-neutral-700 rounded py-2 px-4 text-white"
          onClick={() => setDirection("top-left")}
        >
          Top-Left
        </button>
        <button
          className="bg-neutral-800 border-2 border-neutral-700 rounded py-2 px-4 text-white"
          onClick={() => setDirection("bottom-left")}
        >
          Bottom-Left
        </button>
      </div>
      <span className="flex justify-center items-center gap-4 text-textPrimary">
        <h1>Stack :</h1>
        <h2>{createStack ? "True" : "False"}</h2>
      </span>
      <div className="w-full flex justify-center gap-6">
        <button
          className="bg-neutral-800 border-2 border-neutral-700 rounded py-2 px-4 text-white"
          onClick={() => setCreateStack(true)}
        >
          True - Stack All
        </button>
        <button
          className="bg-neutral-800 border-2 border-neutral-700 rounded py-2 px-4 text-white"
          onClick={() => setCreateStack(false)}
        >
          False - Keep Individual
        </button>
      </div>
      <span className="flex justify-center items-center gap-4 text-textPrimary">
        <h1>State :</h1>
        <h2>{state}</h2>
      </span>
      <div className="w-full flex justify-center gap-6">
        <button
          className="bg-neutral-800 border-2 border-neutral-700 rounded py-2 px-4 text-white"
          onClick={() => setState("success")}
        >
          Success
        </button>
        <button
          className="bg-neutral-800 border-2 border-neutral-700 rounded py-2 px-4 text-white"
          onClick={() => setState("error")}
        >
          Error
        </button>
        <button
          className="bg-neutral-800 border-2 border-neutral-700 rounded py-2 px-4 text-white"
          onClick={() => setState("warning")}
        >
          Warning
        </button>
        <button
          className="bg-neutral-800 border-2 border-neutral-700 rounded py-2 px-4 text-white"
          onClick={() => setState("info")}
        >
          Info
        </button>
      </div>
      <span className="flex justify-center items-center gap-4 text-textPrimary">
        <h1>Close Type :</h1>
        <h2>{closeType}</h2>
      </span>
      <div className="w-full flex justify-center gap-6">
        <button
          className="bg-neutral-800 border-2 border-neutral-700 rounded py-2 px-4 text-white"
          onClick={() => setCloseType("manual")}
        >
          Manual
        </button>
        <button
          className="bg-neutral-800 border-2 border-neutral-700 rounded py-2 px-4 text-white"
          onClick={() => setCloseType("timeout")}
        >
          Timeout
        </button>
      </div>

      <button
        className="w-80 bg-neutral-800 border-2 border-neutral-700 rounded py-2 px-4 text-white"
        onClick={() => createToasts()}
      >
        Create Toast
      </button>
    </div>
  );
};

export const ToastContextTsx = `// DO NOT MODIFY THESE COMPONENTS
export type ToastProps = {
  toastId: string;
  state: "success" | "error" | "warning" | "info";
  children: React.ReactNode;
  visibility: boolean;
  visibilityDuration?: number;
  creationTime: number;
  closeType: "timeout" | "manual";
  duration: number;
};

export type ToastProviderProps = {
  toasts: ToastProps[];
  addToast: (value: ToastProps) => void;
  removeToast: (id: string) => void;
  calculateHirarchy: (toastId: string) => number | null;
  getToast: (id: string) => ToastProps | null;
};

type ContextWrapperProps = {
  children: React.ReactNode;
};

export const ToastContext = createContext<ToastProviderProps>({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
  calculateHirarchy: () => {
    return null;
  },
  getToast: () => {
    return null;
  },
});

const ToastProvider: React.FC<ContextWrapperProps> = (props) => {
  const [toasts, setToasts] = useState<ToastProps[]>([]);

  const addToast = (value: ToastProps) => {
    setToasts([...toasts, value]);
  };
  const removeToast = (id: string) => {
    const newtoast = toasts.map((toast) => {
      if (toast.toastId === id) {
        return {
          ...toast,
          visibility: false,
        };
      } else {
        return toast;
      }
    });
    setToasts(newtoast);
  };

  const calculateHirarchy = (toastId: string) => {
    var count: number = -1;
    var flag = false;
    var selfvisible = false;

    toasts.forEach((toast) => {
      if (flag === false) {
        if (toast.visibility === true) {
          count++;
        }
      }
      if (toast.toastId === toastId) {
        if (toast.visibility === true) {
          flag = true;
        } else {
          selfvisible = true;
        }
      }
    });

    if (selfvisible) {
      return null;
    } else {
      if (count >= 0) {
        return count;
      } else {
        return null;
      }
    }
  };

  const getToast = (toastId: string) => {
    const toast = toasts.find((toast) => toast.toastId === toastId);
    if (toast) {
      return toast;
    } else return null;
  };

  useEffect(() => {
    console.log(toasts);
  }, [toasts]);

  // -----------------------------------------------------
  // TIMEOUT HANDLER
  // -----------------------------------------------------

  const timeoutsRef = useRef<{ [key: string]: ReturnType<typeof setTimeout> }>(
    {}
  );

  useEffect(() => {
    // Clear existing timeouts
    Object.values(timeoutsRef.current).forEach(clearTimeout);

    // Set new timeouts
    const newTimeouts: { [key: string]: ReturnType<typeof setTimeout> } = {};
    const currentTime = Date.now();

    toasts.forEach((toast) => {
      if (
        toast.visibility &&
        !timeoutsRef.current[toast.toastId] &&
        toast.closeType === "timeout"
      ) {
        const timeElapsed = currentTime - toast.creationTime;
        const remainingTime = toast.duration - timeElapsed;
        if (remainingTime > 0) {
          newTimeouts[toast.toastId] = setTimeout(
            () => removeToast(toast.toastId),
            remainingTime
          );
        } else {
          // If time has already elapsed, remove immediately
          removeToast(toast.toastId);
        }
      }
    });

    // Update timeoutsRef
    timeoutsRef.current = newTimeouts;

    return () => {
      // Clear timeouts on component unmount
      Object.values(timeoutsRef.current).forEach(clearTimeout);
    };
  }, [toasts, removeToast]);

  const value: ToastProviderProps = {
    toasts,
    addToast,
    removeToast,
    calculateHirarchy,
    getToast,
  };
  
  return (
    <ToastContext.Provider value={value}>
      {props.children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast Hook must be used within the Toast Provider");
  }
  return context;
};

export default ToastProvider;`;

export const ToastContextJsx = `// DO NOT MODIFY THESE COMPONENTS
export const ToastContext = createContext({
  toasts: [],
  addToast: () => {},
  removeToast: () => {},
  calculateHirarchy: () => {
    return null;
  },
  getToast: () => {
    return null;
  },
});

const ToastProvider = () => {
  const [toasts, setToasts] = useState([]);

  const addToast = (value) => {
    setToasts([...toasts, value]);
  };
  const removeToast = (id) => {
    const newtoast = toasts.map((toast) => {
      if (toast.toastId === id) {
        return {
          ...toast,
          visibility: false,
        };
      } else {
        return toast;
      }
    });
    setToasts(newtoast);
  };

  const calculateHirarchy = (toastId) => {
    var count: number = -1;
    var flag = false;
    var selfvisible = false;

    toasts.forEach((toast) => {
      if (flag === false) {
        if (toast.visibility === true) {
          count++;
        }
      }
      if (toast.toastId === toastId) {
        if (toast.visibility === true) {
          flag = true;
        } else {
          selfvisible = true;
        }
      }
    });

    if (selfvisible) {
      return null;
    } else {
      if (count >= 0) {
        return count;
      } else {
        return null;
      }
    }
  };

  const getToast = (toastId) => {
    const toast = toasts.find((toast) => toast.toastId === toastId);
    if (toast) {
      return toast;
    } else return null;
  };

  useEffect(() => {
    console.log(toasts);
  }, [toasts]);

  // -----------------------------------------------------
  // TIMEOUT HANDLER
  // -----------------------------------------------------

  const timeoutsRef = useRef({});

  useEffect(() => {
    // Clear existing timeouts
    Object.values(timeoutsRef.current).forEach(clearTimeout);

    // Set new timeouts
    const newTimeouts = {};
    const currentTime = Date.now();

    toasts.forEach((toast) => {
      if (
        toast.visibility &&
        !timeoutsRef.current[toast.toastId] &&
        toast.closeType === "timeout"
      ) {
        const timeElapsed = currentTime - toast.creationTime;
        const remainingTime = toast.duration - timeElapsed;
        if (remainingTime > 0) {
          newTimeouts[toast.toastId] = setTimeout(
            () => removeToast(toast.toastId),
            remainingTime
          );
        } else {
          // If time has already elapsed, remove immediately
          removeToast(toast.toastId);
        }
      }
    });

    // Update timeoutsRef
    timeoutsRef.current = newTimeouts;

    return () => {
      // Clear timeouts on component unmount
      Object.values(timeoutsRef.current).forEach(clearTimeout);
    };
  }, [toasts, removeToast]);

  const value = {
    toasts,
    addToast,
    removeToast,
    calculateHirarchy,
    getToast,
  };

  return (
    <ToastContext.Provider value={value}>
      {props.children}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast Hook must be used within the Toast Provider");
  }
  return context;
};

export default ToastProvider;`;

export const ToastImplementationString = `export const ToastImplementation = () => {
  const { addToast } = useToast();
  const createToasts = () => {
    addToast({
      toastId: v4(),
      state: "success",
      children: <h1>Hello {Date.now()}</h1>,
      visibility: true,
      creationTime: Date.now(),
      closeType: "timeout",
      duration: 5000,
    });
  };
  return (
    <div>
      <button
        onClick={() => createToasts()}
        className="bg-neutral-700 rounded text-s_textPrimary py-2 px-4"
      >
        Click Here
      </button>
      <ToastGroup direction="top-right" createStack={true} />
    </div>
  );
};`;

export const ToastComponentsStringTsx = `// DO NOT MODIFY THESE COMPONENTS
type DirectionProps = "top-left" | "top-right" | "bottom-left" | "bottom-right";

function ToastGroup({
  direction,
  createStack,
}: {
  direction: DirectionProps;
  createStack?: boolean;
}) {
  const { toasts } = useToast();

  return (
    <div
      className={twMerge(
        "absolute flex flex-col gap-4 group/toast transition-all duration-300 ease-linear",
        direction === "top-right" && "top-4 right-4",
        direction === "bottom-right" && "bottom-4 right-4 flex-col-reverse",
        direction === "top-left" && "top-4 left-4",
        direction === "bottom-left" && "bottom-4 left-4 flex-col-reverse"
      )}
    >
      {toasts.map((toast) => (
        <Toast
          key={toast.toastId}
          toastId={toast.toastId}
          createStack={createStack}
          direction={direction}
        />
      ))}
    </div>
  );
}

function Toast({
  toastId,
  createStack,
  direction,
}: {
  toastId: string;
  createStack?: boolean;
  direction: DirectionProps;
}) {
  const gapBeteenCardsInGroup = 0.5;

  const { toasts, getToast, calculateHirarchy } = useToast();
  const toast = getToast(toastId);
  const [heirarchy, setHirarchy] = useState<number | null>(null);

  useEffect(() => {
    const index = calculateHirarchy(toastId);
    setHirarchy(index);
  }, [toasts]);

  const directionDependentPositioning: {
    [key: string]: {
      top?: string;
      right?: string;
      bottom?: string;
      left?: string;
    };
  } = {
    "top-right": {
      top: \`\${heirarchy !== null ? gapBeteenCardsInGroup * heirarchy : 0}rem\`,
      right: \`\${heirarchy !== null ? gapBeteenCardsInGroup * heirarchy : 0}rem\`,
    },
    "bottom-right": {
      right: \`\${heirarchy !== null ? gapBeteenCardsInGroup * heirarchy : 0}rem\`,
      bottom: \`\${heirarchy !== null ? gapBeteenCardsInGroup * heirarchy : 0}rem\`,
    },
    "top-left": {
      top: \`\${heirarchy !== null ? gapBeteenCardsInGroup * heirarchy : 0}rem\`,
      left: \`\${heirarchy !== null ? gapBeteenCardsInGroup * heirarchy : 0}rem\`,
    },
    "bottom-left": {
      left: \`\${heirarchy !== null ? gapBeteenCardsInGroup * heirarchy : 0}rem\`,
      bottom: \`\${heirarchy !== null ? gapBeteenCardsInGroup * heirarchy : 0}rem\`,
    },
  };

  return (
    <>
      {toast && (
        <div
          className={twMerge(
            "overflow-hidden w-max flex flex-col justify-between group-hover/toast:static",
            createStack ? "absolute" : "static",
            heirarchy === null
              ? "hidden"
              : direction === "top-right" || direction === "bottom-right"
                ? "animate-toastEntryRight"
                : "animate-toastEntryLeft"
          )}
          style={{
            ...directionDependentPositioning[direction],
            zIndex: heirarchy !== null ? heirarchy : -1,
          }}
        >
          <ToastStyling toastId={toastId} />
        </div>
      )}
    </>
  );
}`;

export const ToastComponentsStringJsx = `// DO NOT MODIFY THESE COMPONENTS
function ToastGroup({
  direction,
  createStack,
}) {
  const { toasts } = useToast();

  return (
    <div
      className={twMerge(
        "absolute flex flex-col gap-4 group/toast transition-all duration-300 ease-linear",
        direction === "top-right" && "top-4 right-4",
        direction === "bottom-right" && "bottom-4 right-4 flex-col-reverse",
        direction === "top-left" && "top-4 left-4",
        direction === "bottom-left" && "bottom-4 left-4 flex-col-reverse"
      )}
    >
      {toasts.map((toast) => (
        <Toast
          key={toast.toastId}
          toastId={toast.toastId}
          createStack={createStack}
          direction={direction}
        />
      ))}
    </div>
  );
}

function Toast({
  toastId,
  createStack,
  direction,
}) {
  const gapBeteenCardsInGroup = 0.5;

  const { toasts, getToast, calculateHirarchy } = useToast();
  const toast = getToast(toastId);
  const [heirarchy, setHirarchy] = useState(null);

  useEffect(() => {
    const index = calculateHirarchy(toastId);
    setHirarchy(index);
  }, [toasts]);

  const directionDependentPositioning = {
    "top-right": {
      top: \`\${heirarchy !== null ? gapBeteenCardsInGroup * heirarchy : 0}rem\`,
      right: \`\${heirarchy !== null ? gapBeteenCardsInGroup * heirarchy : 0}rem\`,
    },
    "bottom-right": {
      right: \`\${heirarchy !== null ? gapBeteenCardsInGroup * heirarchy : 0}rem\`,
      bottom: \`\${heirarchy !== null ? gapBeteenCardsInGroup * heirarchy : 0}rem\`,
    },
    "top-left": {
      top: \`\${heirarchy !== null ? gapBeteenCardsInGroup * heirarchy : 0}rem\`,
      left: \`\${heirarchy !== null ? gapBeteenCardsInGroup * heirarchy : 0}rem\`,
    },
    "bottom-left": {
      left: \`\${heirarchy !== null ? gapBeteenCardsInGroup * heirarchy : 0}rem\`,
      bottom: \`\${heirarchy !== null ? gapBeteenCardsInGroup * heirarchy : 0}rem\`,
    },
  };

  return (
    <>
      {toast && (
        <div
          className={twMerge(
            "overflow-hidden w-max flex flex-col justify-between group-hover/toast:static",
            createStack ? "absolute" : "static",
            heirarchy === null
              ? "hidden"
              : direction === "top-right" || direction === "bottom-right"
                ? "animate-toastEntryRight"
                : "animate-toastEntryLeft"
          )}
          style={{
            ...directionDependentPositioning[direction],
            zIndex: heirarchy !== null ? heirarchy : -1,
          }}
        >
          <ToastStyling toastId={toastId} />
        </div>
      )}
    </>
  );
}`;

export const ToastStylingComponentStringTsx = `//CAN MODIFY THE STYLING
const ToastStyling = ({ toastId }: { toastId: string }) => {
  const { getToast, removeToast } = useToast();

  const toast = getToast(toastId);

  return (
    <>
      {toast && (
        <div
          className={twMerge(
            "min-w-80 min-h-full rounded-md text-textPrimary flex justify-between font-semibold border-2 gap-6 py-2 px-4",
            toast.state === "success" &&
              "bg-green-500  border-green-900 text-green-900 ",
            toast.state === "error" && "bg-red-300 border-red-900 text-red-900",
            toast.state === "warning" &&
              "bg-yellow-200 border-yellow-900 text-yellow-900",
            toast.state === "info" &&
              "bg-blue-400 border-blue-900 text-blue-900"
          )}
        >
          {toast.children}
          <button
            onClick={() => removeToast(toastId)}
            className={twMerge(toast.closeType === "timeout" && "hidden")}
          >
            &#10005;
          </button>
        </div>
      )}
    </>
  );
};`;

export const ToastStylingComponentStringJsx = `//CAN MODIFY THE STYLING
const ToastStyling = ({ toastId }) => {
  const { getToast, removeToast } = useToast();

  const toast = getToast(toastId);

  return (
    <>
      {toast && (
        <div
          className={twMerge(
            "min-w-80 min-h-full rounded-md text-textPrimary flex justify-between font-semibold border-2 gap-6 py-2 px-4",
            toast.state === "success" &&
              "bg-green-500  border-green-900 text-green-900 ",
            toast.state === "error" && "bg-red-300 border-red-900 text-red-900",
            toast.state === "warning" &&
              "bg-yellow-200 border-yellow-900 text-yellow-900",
            toast.state === "info" &&
              "bg-blue-400 border-blue-900 text-blue-900"
          )}
        >
          {toast.children}
          <button
            onClick={() => removeToast(toastId)}
            className={twMerge(toast.closeType === "timeout" && "hidden")}
          >
            &#10005;
          </button>
        </div>
      )}
    </>
  );
};`;

export const ToastAnimationsTsx = `import type { Config } from "tailwindcss";
const config: Config = {
  theme: {
    extend: {
      animation: {
        toastEntryRight: "toastEntryRight 0.2s linear",
        toastEntryLeft: "toastEntryLeft 0.2s linear",
      },
      keyframes: {
        // For @/packages/primitive/toast/Toast_1.tsx
        toastEntryRight: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        toastEntryLeft: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
    },
  },
};
export default config;`;

export const ToastAnimationsJsx = `const config = {
  theme: {
    extend: {
      animation: {
        toastEntryRight: "toastEntryRight 0.2s linear",
        toastEntryLeft: "toastEntryLeft 0.2s linear",
      },
      keyframes: {
        // For @/packages/primitive/toast/Toast_1.tsx
        toastEntryRight: {
          "0%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
        toastEntryLeft: {
          "0%": {
            transform: "translateX(-100%)",
          },
          "100%": {
            transform: "translateX(0%)",
          },
        },
      },
    },
  },
};
export default config;`;
