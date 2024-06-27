import { twMerge } from "tailwind-merge";

export const ContainerGlassEffect = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={twMerge(
        "bg-neutral-100/30 dark:bg-neutral-900/40 backdrop-blur supports-[backdrop-filter]:bg-neutral-100/40 dark:supports-[backdrop-filter]:bg-neutral-900/40 z-50",
        className
      )}
    >
      {children}
    </div>
  );
};

export const ContainerImplementation = () => {
  return (
    <div className="w-full h-[25rem] relative overflow-hidden flex justify-center items-center">
      <ContainerGlassEffect className="rounded-lg border border-neutral-300 dark:border-neutral-700">
        <div className="px-10 py-20 text-foreground flex flex-col justify-center items-start gap-2 max-w-80 @md:max-w-[30rem]">
          <h1>
            This entire component has been made with TailwindCSS and is a part
            of Stratik UI Library.
          </h1>
          <button className="text-s_accent mt-4">
            Check out other components
          </button>
        </div>
      </ContainerGlassEffect>
      <h1 className="absolute text-7xl text-foreground">
        Sample text to see the effect in action
      </h1>
    </div>
  );
};
