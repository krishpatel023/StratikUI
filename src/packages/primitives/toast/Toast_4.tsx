import {
  DataDescription,
  IconProps,
  ImplementationNode,
} from "@/utils/constants";
import { twMerge } from "tailwind-merge";

function Demo() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <div className="w-[25rem]">
        <ToastStyling toastId="info" />
      </div>
    </div>
  );
}

const NotificationDesign = (
  <div className="flex gap-6 py-2">
    <div className="mt-1 text-s_textPrimary">
      <svg
        width="24px"
        height="24px"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="currentColor"
      >
        <path
          d="M18 8.4C18 6.70261 17.3679 5.07475 16.2426 3.87452C15.1174 2.67428 13.5913 2 12 2C10.4087 2 8.88258 2.67428 7.75736 3.87452C6.63214 5.07475 6 6.70261 6 8.4C6 15.8667 3 18 3 18H21C21 18 18 15.8667 18 8.4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
    <div className="text-s_textPrimary flex flex-col gap-2 items-start justify-start">
      <h1 className="font-semibold text-lg">App Notification</h1>
      <h3 className="font-medium text-base">
        {
          "Notification that you want to be displayed. Please Don't make it annoying."
        }
      </h3>
      <span className="flex gap-4">
        <button className="text-blue-500 hover:underline">Allow</button>
        <button className="text-blue-500 hover:underline">
          {"Don't Allow"}
        </button>
      </span>
    </div>
  </div>
);

const ToastStyling = ({ toastId }: { toastId: string }) => {
  // const { getToast, removeToast } = useToast();
  // const toast = getToast(toastId);

  const toast = {
    state: toastId,
    children: NotificationDesign,
    closeType: "manual",
  };
  const removeToast = (id: string) => {};

  return (
    <>
      {toast && (
        <div
          className={twMerge(
            "min-w-80 min-h-full rounded-md text-textPrimary flex justify-between items-center font-semibold border-2 border-neutral-300 dark:border-neutral-500 gap-6 py-2 px-4 shadow-md bg-white dark:bg-neutral-800",
            toast.state === "success" && "text-green-500 dark:text-green-900 ",
            toast.state === "error" && "text-red-500 dark:text-red-900 ",
            toast.state === "warning" &&
              "text-yellow-500 dark:text-yellow-700 ",
            toast.state === "info" && "text-blue-500 dark:text-blue-900 "
          )}
        >
          {toast.children}
        </div>
      )}
    </>
  );
};

const ToastStylingTsx = `const NotificationDesign = (
  <div className="flex gap-6 py-2">
    <div className="mt-1 text-s_textPrimary">
      <svg
        width="24px"
        height="24px"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="currentColor"
      >
        <path
          d="M18 8.4C18 6.70261 17.3679 5.07475 16.2426 3.87452C15.1174 2.67428 13.5913 2 12 2C10.4087 2 8.88258 2.67428 7.75736 3.87452C6.63214 5.07475 6 6.70261 6 8.4C6 15.8667 3 18 3 18H21C21 18 18 15.8667 18 8.4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
    <div className="text-s_textPrimary flex flex-col gap-2 items-start justify-start">
      <h1 className="font-semibold text-lg">App Notification</h1>
      <h3 className="font-medium text-base">
        Notification that you want to be displayed. Please Don't make it
        annoying.
      </h3>
      <span className="flex gap-4">
        <button className="text-blue-500 hover:underline">Allow</button>
        <button className="text-blue-500 hover:underline">Don't Allow</button>
      </span>
    </div>
  </div>
);

const ToastStyling = ({ toastId }: { toastId: string }) => {
  const { getToast, removeToast } = useToast();
  const toast = getToast(toastId);

  return (
    <>
      {toast && (
        <div
          className={twMerge(
            "min-w-80 min-h-full rounded-md text-textPrimary flex justify-between items-center font-semibold border-2 border-neutral-300 dark:border-neutral-500 gap-6 py-2 px-4 shadow-md bg-white dark:bg-neutral-800",
            toast.state === "success" && "text-green-500 dark:text-green-900 ",
            toast.state === "error" && "text-red-500 dark:text-red-900 ",
            toast.state === "warning" &&
              "text-yellow-500 dark:text-yellow-700 ",
            toast.state === "info" && "text-blue-500 dark:text-blue-900 "
          )}
        >
          {toast.children}
        </div>
      )}
    </>
  );
};`;

const ToastStylingJsx = `const NotificationDesign = (
  <div className="flex gap-6 py-2">
    <div className="mt-1 text-s_textPrimary">
      <svg
        width="24px"
        height="24px"
        strokeWidth="1.5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        color="currentColor"
      >
        <path
          d="M18 8.4C18 6.70261 17.3679 5.07475 16.2426 3.87452C15.1174 2.67428 13.5913 2 12 2C10.4087 2 8.88258 2.67428 7.75736 3.87452C6.63214 5.07475 6 6.70261 6 8.4C6 15.8667 3 18 3 18H21C21 18 18 15.8667 18 8.4Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </div>
    <div className="text-s_textPrimary flex flex-col gap-2 items-start justify-start">
      <h1 className="font-semibold text-lg">App Notification</h1>
      <h3 className="font-medium text-base">
        Notification that you want to be displayed. Please Don't make it
        annoying.
      </h3>
      <span className="flex gap-4">
        <button className="text-blue-500 hover:underline">Allow</button>
        <button className="text-blue-500 hover:underline">Don't Allow</button>
      </span>
    </div>
  </div>
);

const ToastStyling = ({ toastId }) => {
  const { getToast, removeToast } = useToast();
  const toast = getToast(toastId);

  return (
    <>
      {toast && (
        <div
          className={twMerge(
            "min-w-80 min-h-full rounded-md text-textPrimary flex justify-between items-center font-semibold border-2 border-neutral-300 dark:border-neutral-500 gap-6 py-2 px-4 shadow-md bg-white dark:bg-neutral-800",
            toast.state === "success" && "text-green-500 dark:text-green-900 ",
            toast.state === "error" && "text-red-500 dark:text-red-900 ",
            toast.state === "warning" &&
              "text-yellow-500 dark:text-yellow-700 ",
            toast.state === "info" && "text-blue-500 dark:text-blue-900 "
          )}
        >
          {toast.children}
        </div>
      )}
    </>
  );
};`;

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
  name: "Empty toast section for full customizability in addToast function",
  description:
    "This is just the styling component changes of the toast. You can copy the entire code above and replace that styling with the code in the current component.",
  implementation: Implementation,
  component: <Demo />,
  version_included: "0.0.1",
  display: true,
};

export default Data;
