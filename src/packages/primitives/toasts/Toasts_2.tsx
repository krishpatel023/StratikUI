export function NotificationDesignImplementation() {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      <div className="w-[25rem]">{NotificationDesign}</div>
    </div>
  );
}

// function ToastDemo() {
//   const { addToast } = useToast();
//   const createToasts = () => {
//     addToast({
//       toastId: v4(),
//       state: "info",
//       children: <>{NotificationDesign}</>,
//       visibility: true,
//       creationTime: Date.now(),
//       closeType: "timeout",
//       duration: 5000,
//     });
//   };

//   return (
//     <div>
//       <ToastGroup direction={direction} createStack={createStack} />
//     </div>
//   );
// }

const NotificationDesign = (
  <div className="flex gap-6 py-4 px-4 text-primary-foreground bg-primary border-2 border-outline-secondary rounded-lg">
    <div className="mt-1 ">
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
    <div className="flex flex-col gap-2 items-start justify-start">
      <h1 className="font-medium text-lg">App Notification</h1>
      <h3 className=" text-base">
        {
          "Notification that you want to be displayed. Please Don't make it annoying."
        }
      </h3>
      <span className="flex gap-4">
        <button className="text-accent hover:underline">Allow</button>
        <button className="text-accent hover:underline">{"Don't Allow"}</button>
      </span>
    </div>
  </div>
);
