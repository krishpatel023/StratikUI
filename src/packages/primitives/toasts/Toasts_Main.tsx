"use client";
import { ButtonHTMLAttributes, useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { v4 } from "uuid";
import ToastProvider, { ToastProps, useToast } from "./Toasts_Context";

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
  const gapBetweenCardsInGroup = 0.5;

  const { toasts, getToast, calculateHierarchy } = useToast();
  const toast = getToast(toastId);
  const [hierarchy, setHierarchy] = useState<number | null>(null);

  const [isEntering, setIsEntering] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const index = calculateHierarchy(toastId);
    setHierarchy(index);

    if (!isOpen && toast?.visibility) {
      setIsEntering(true);
      setIsOpen(true);

      setTimeout(() => {
        setIsEntering(false);
      }, 500);
    } else if (isOpen && !toast?.visibility) {
      setIsExiting(true);

      setTimeout(() => {
        setIsOpen(false);
        setIsExiting(false);
      }, 300);
    }
  }, [toast]); // eslint-disable-line react-hooks/exhaustive-deps

  const directionDependentPositioning: {
    [key: string]: {
      top?: string;
      right?: string;
      bottom?: string;
      left?: string;
    };
  } = {
    "top-right": {
      top: `${hierarchy !== null ? gapBetweenCardsInGroup * hierarchy : 0}rem`,
      right: `${hierarchy !== null ? gapBetweenCardsInGroup * hierarchy : 0}rem`,
    },
    "bottom-right": {
      right: `${hierarchy !== null ? gapBetweenCardsInGroup * hierarchy : 0}rem`,
      bottom: `${hierarchy !== null ? gapBetweenCardsInGroup * hierarchy : 0}rem`,
    },
    "top-left": {
      top: `${hierarchy !== null ? gapBetweenCardsInGroup * hierarchy : 0}rem`,
      left: `${hierarchy !== null ? gapBetweenCardsInGroup * hierarchy : 0}rem`,
    },
    "bottom-left": {
      left: `${hierarchy !== null ? gapBetweenCardsInGroup * hierarchy : 0}rem`,
      bottom: `${hierarchy !== null ? gapBetweenCardsInGroup * hierarchy : 0}rem`,
    },
  };

  return (
    <>
      {isOpen && (
        <div
          className={twMerge(
            "overflow-hidden w-max flex flex-col justify-between group-hover/toast:static transition-all duration-300 ease-linear",
            createStack ? "absolute" : "static",
            direction === "top-right" || direction === "bottom-right"
              ? "data-[entering=true]:animate-toastEntryRight data-[exiting=true]:animate-toastExit duration-200"
              : "data-[entering=true]:animate-toastEntryLeft data-[exiting=true]:animate-toastExit duration-200"
          )}
          style={
            createStack
              ? {
                  ...directionDependentPositioning[direction],
                  zIndex: hierarchy !== null ? hierarchy : -1,
                }
              : {}
          }
          data-entering={isEntering}
          data-exiting={isExiting}
          data-open={isOpen}
        >
          <ToastStyling toast={toast} />
        </div>
      )}
    </>
  );
}

// This is the only that you need to change in the code if you want custom styling
const ToastStyling = ({ toast }: { toast: ToastProps | null }) => {
  const { removeToast } = useToast();

  return (
    <>
      {toast && (
        <div
          className={twMerge(
            "min-w-80 min-h-full rounded-md text-textPrimary flex justify-between font-semibold border-2 gap-6 py-2 px-4",
            toast.state === "success" &&
              "bg-success-secondary border-success text-success-foreground ",
            toast.state === "error" &&
              "bg-error-secondary border-error text-error-foreground",
            toast.state === "warning" &&
              "bg-alert-secondary border-alert text-alert-foreground",
            toast.state === "info" &&
              "bg-accent-secondary border-accent text-accent-foreground"
          )}
        >
          {toast.children}
          <button
            onClick={() => removeToast(toast.toastId)}
            className={twMerge(toast.closeType === "timeout" && "hidden")}
          >
            &#10005;
          </button>
        </div>
      )}
    </>
  );
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

const Button = ({ className, isActive, ...props }: ButtonProps) => {
  return (
    <button
      data-active={isActive}
      className={twMerge(
        "bg-primary border-2 border-outline-secondary rounded py-2 px-4 text-primary-foreground hover:bg-secondary data-[active=true]:ring-2 ring-accent",
        className
      )}
      {...props}
    />
  );
};

const ToastDemo = () => {
  // FOR DEMO PURPOSE ONLY
  const [direction, setDirection] = useState<
    "top-right" | "bottom-right" | "top-left" | "bottom-left"
  >("top-right");
  const [createStack, setCreateStack] = useState<boolean>(true);
  const [state, setState] = useState<"success" | "error" | "warning" | "info">(
    "success"
  );
  const [closeType, setCloseType] = useState<"timeout" | "manual">("timeout");

  const { addToast } = useToast();
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
    <div className="w-full flex flex-col items-center gap-8 text-foreground">
      <ToastGroup direction={direction} createStack={createStack} />
      <span className="flex justify-center items-center gap-4 text-red-500">
        {`Note : Adjust the bellow properties in advance and don't change in between.`}
      </span>
      <span className="flex justify-center items-center gap-4 text-textPrimary">
        <h1>Direction :</h1>
        <h2>{direction}</h2>
      </span>
      <div className="w-full flex justify-center gap-6">
        <Button
          onClick={() => setDirection("top-right")}
          isActive={direction === "top-right"}
        >
          Top-Right
        </Button>
        <Button
          onClick={() => setDirection("bottom-right")}
          isActive={direction === "bottom-right"}
        >
          Bottom-Right
        </Button>
        <Button
          onClick={() => setDirection("top-left")}
          isActive={direction === "top-left"}
        >
          Top-Left
        </Button>
        <Button
          onClick={() => setDirection("bottom-left")}
          isActive={direction === "bottom-left"}
        >
          Bottom-Left
        </Button>
      </div>
      <span className="flex justify-center items-center gap-4 text-textPrimary">
        <h1>Stack :</h1>
        <h2>{createStack ? "True" : "False"}</h2>
      </span>
      <div className="w-full flex justify-center gap-6">
        <Button onClick={() => setCreateStack(true)} isActive={createStack}>
          True - Stack All
        </Button>
        <Button onClick={() => setCreateStack(false)} isActive={!createStack}>
          False - Keep Individual
        </Button>
      </div>
      <span className="flex justify-center items-center gap-4 text-textPrimary">
        <h1>State :</h1>
        <h2>{state}</h2>
      </span>
      <div className="w-full flex justify-center gap-6">
        <Button
          onClick={() => setState("success")}
          isActive={state === "success"}
        >
          Success
        </Button>
        <Button onClick={() => setState("error")} isActive={state === "error"}>
          Error
        </Button>
        <Button
          onClick={() => setState("warning")}
          isActive={state === "warning"}
        >
          Warning
        </Button>
        <Button onClick={() => setState("info")} isActive={state === "info"}>
          {" "}
          Info
        </Button>
      </div>
      <span className="flex justify-center items-center gap-4 text-textPrimary">
        <h1>Close Type :</h1>
        <h2>{closeType}</h2>
      </span>
      <div className="w-full flex justify-center gap-6">
        <Button
          onClick={() => setCloseType("manual")}
          isActive={closeType === "manual"}
        >
          Manual
        </Button>
        <Button
          onClick={() => setCloseType("timeout")}
          isActive={closeType === "timeout"}
        >
          Timeout
        </Button>
      </div>

      <Button onClick={() => createToasts()} className="w-60">
        Create Toast
      </Button>
    </div>
  );
};

export const ToastImplementation = () => {
  return (
    <div className="w-full h-full relative overflow-x-hidden -my-10 py-10">
      <ToastProvider>
        <ToastDemo />
      </ToastProvider>
    </div>
  );
};
