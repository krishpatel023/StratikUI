import {
  DataDescription,
  IconProps,
  ImplementationNode,
} from "@/utils/constants";
import { twMerge } from "tailwind-merge";

function Demo() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <div className="h-12">
        <ToastStyling toastId="info" />
      </div>
      <div className="h-12">
        <ToastStyling toastId="success" />
      </div>
      <div className="h-12">
        <ToastStyling toastId="error" />
      </div>
      <div className="h-12">
        <ToastStyling toastId="warning" />
      </div>
    </div>
  );
}

const ToastStyling = ({ toastId }: { toastId: string }) => {
  // const { getToast, removeToast } = useToast();
  // const toast = getToast(toastId);

  const toast = {
    state: toastId,
    children: <h1>Hello</h1>,
    closeType: "timeout",
  };
  const removeToast = (id: string) => {};

  return (
    <>
      {toast && (
        <div
          className={twMerge(
            "min-w-80 min-h-full rounded-md text-textPrimary flex justify-between items-center font-semibold border-2 border-neutral-200 dark:border-neutral-700 gap-6 py-2 px-4 shadow-md bg-white dark:bg-neutral-800",
            toast.state === "success" && "dark:text-green-500 text-green-900 ",
            toast.state === "error" && "dark:text-red-500 text-red-900 ",
            toast.state === "warning" &&
              "dark:text-yellow-500 text-yellow-700 ",
            toast.state === "info" && "dark:text-blue-500 text-blue-900 "
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

const ToastStylingTsx = `const ToastStyling = ({ toastId }: { toastId: string }) => {
  const { getToast, removeToast } = useToast();
  const toast = getToast(toastId);

  return (
    <>
      {toast && (
        <div
          className={twMerge(
            "min-w-80 min-h-full rounded-md text-textPrimary flex justify-between items-center font-semibold border-2 border-neutral-200 dark:border-neutral-700 gap-6 py-2 px-4 shadow-md bg-white dark:bg-neutral-800",
            toast.state === "success" && "dark:text-green-500 text-green-900 ",
            toast.state === "error" && "dark:text-red-500 text-red-900 ",
            toast.state === "warning" &&
              "dark:text-yellow-500 text-yellow-700 ",
            toast.state === "info" && "dark:text-blue-500 text-blue-900 "
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
};`;

const ToastStylingJsx = `const ToastStyling = ({ toastId }) => {
  const { getToast, removeToast } = useToast();
  const toast = getToast(toastId);

  return (
    <>
      {toast && (
        <div
          className={twMerge(
            "min-w-80 min-h-full rounded-md text-textPrimary flex justify-between items-center font-semibold border-2 border-neutral-200 dark:border-neutral-700 gap-6 py-2 px-4 shadow-md bg-white dark:bg-neutral-800",
            toast.state === "success" && "dark:text-green-500 text-green-900 ",
            toast.state === "error" && "dark:text-red-500 text-red-900 ",
            toast.state === "warning" &&
              "dark:text-yellow-500 text-yellow-700 ",
            toast.state === "info" && "dark:text-blue-500 text-blue-900 "
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

const Icon = {
  info: (props) => (
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
  success: (props) => (
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
  error: (props) => (
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
  warning: (props) => (
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
};`;

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

const Implementation: ImplementationNode[] = [
  {
    type: "technology_used",
    content: ["tailwind-css", "twMerge", "uuid"],
  },
  {
    type: "code",
    content: [
      {
        name: "ToastStyling",
        content: [
          { language: "tsx", code: ToastStylingTsx },
          { language: "jsx", code: ToastStylingJsx },
        ],
      },
    ],
  },
];

const Data: DataDescription = {
  name: "Toast withot dedicated background",
  description:
    "This is just the styling component changes of the toast. You can copy the entire code above and replace that styling with the code in the current component.",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.0.1",
  display: true,
};

export default Data;
