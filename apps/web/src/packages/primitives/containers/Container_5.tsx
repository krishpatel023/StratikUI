import { twMerge } from "tailwind-merge";

export function ConicGradientContainer({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        "relative flex rounded-md border border-outline-secondary bg-background text-foreground overflow-hidden",
        className
      )}
    >
      <div
        aria-hidden="true"
        className="left-1/2 right-1 top-0 w-[300px] sm:left-auto user-select-none center pointer-events-none absolute h-px max-w-full  -translate-y-1/2 bg-gradient-to-r from-transparent via-neutral-900 dark:via-neutral-400 to-transparent"
      ></div>
      <div
        aria-hidden="true"
        className="hidden dark:block -top-1 left-1/2 right-1 h-[300px] w-[320px] sm:left-auto user-select-none center pointer-events-none absolute max-w-full -translate-y-1/2"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, #00000000 50%, #000 50%),radial-gradient(rgba(200,200,200,0.1) 0%, transparent 80%)",
        }}
      ></div>
      <div
        aria-hidden="true"
        className="dark:hidden -top-4 left-1/2 right-1 h-[300px] w-[320px] sm:left-auto user-select-none center pointer-events-none absolute max-w-full -translate-y-1/2"
        style={{
          background:
            "conic-gradient(from 90deg at 50% 50%, #ffffff00 50%, #fff 50%),radial-gradient(#D6E1FF90 0%, transparent 80%)",
        }}
      ></div>
      {children}
    </div>
  );
}

export const ContainerImplementation = () => {
  return (
    <div>
      <ConicGradientContainer>
        <div className="px-10 py-20 text-secondary-foreground flex flex-col justify-center items-start gap-2 max-w-80 @md:max-w-[30rem]">
          <h1>
            This entire component has been made with TailwindCSS and is a part
            of Stratik UI Library.
          </h1>
          <button className="text-accent mt-4">
            Check out other components
          </button>
        </div>
      </ConicGradientContainer>
    </div>
  );
};
