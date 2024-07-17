import { IconProps } from "@/utils/constants";
import { twMerge } from "tailwind-merge";
import { ToastProps } from "./Toasts_Context";
import { v4 } from "uuid";
import React from "react";

const ToastStyling = ({ toast }: { toast: ToastProps | null }) => {
  // const { removeToast } = useToast();

  return (
    <>
      {toast && (
        <div
          className={twMerge(
            "min-w-80 min-h-full rounded-md text-textPrimary flex justify-between items-center font-semibold border-2 border-outline gap-6 py-2 px-4 bg-primary",
            toast.state === "success" && "text-success ",
            toast.state === "error" && "text-error ",
            toast.state === "warning" && "text-alert ",
            toast.state === "info" && "text-accent "
          )}
        >
          <span className="flex items-center gap-3">
            {toast.state === "success" && <Icon.success className="w-5 h-5" />}
            {toast.state === "info" && <Icon.info className="w-5 h-5" />}
            {toast.state === "warning" && <Icon.warning className="w-5 h-5" />}
            {toast.state === "error" && <Icon.error className="w-5 h-5" />}

            {toast.children}
          </span>
          <button
            //   onClick={() => removeToast(toastId)}
            className={twMerge(toast.closeType === "timeout" && "hidden")}
          >
            &#10005;
          </button>
        </div>
      )}
    </>
  );
};

const Icon = {
  info: (props: IconProps) => (
    <svg
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 11.5V16.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      ></path>
      <path
        d="M12 7.51L12.01 7.49889"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
  success: (props: IconProps) => (
    <svg
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 12.5L10 15.5L17 8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
  error: (props: IconProps) => (
    <svg
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.17218 14.8284L12.0006 12M14.829 9.17157L12.0006 12M12.0006 12L9.17218 9.17157M12.0006 12L14.829 14.8284"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
  warning: (props: IconProps) => (
    <svg
      strokeWidth="1.5"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 7L12 13"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12 17.01L12.01 16.9989"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
      <path
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  ),
};

interface DemoProps {
  toastId: ToastProps["toastId"];
  visibility: ToastProps["visibility"];
  creationTime: ToastProps["creationTime"];
  children: ToastProps["children"];
  closeType: ToastProps["closeType"];
  duration: ToastProps["duration"];
}

export function ToastStyleImplementation() {
  const toast: DemoProps = {
    toastId: v4(),
    visibility: true,
    creationTime: Date.now(),
    children: <h1>Hello</h1>,
    closeType: "timeout",
    duration: 5000,
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <div className="h-12">
        <ToastStyling toast={{ state: "success", ...toast }} />
      </div>
      <div className="h-12">
        <ToastStyling toast={{ state: "error", ...toast }} />
      </div>
      <div className="h-12">
        <ToastStyling toast={{ state: "warning", ...toast }} />
      </div>
      <div className="h-12">
        <ToastStyling toast={{ state: "info", ...toast }} />
      </div>
    </div>
  );
}
