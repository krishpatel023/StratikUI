import { twMerge } from "tailwind-merge";

export default function Page() {
  return (
    <Playground>
      {/* Remove this div and add your component here */}
      <div className="min-h-60 flex justify-center items-center">
        <h1 className="text-foreground text-center">Playground</h1>
      </div>
    </Playground>
  );
}

export function Playground({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div>
      <h1 className="text-foreground mt-20 text-center">
        Welcome to the Playground
      </h1>
      <h2 className="text-secondary-foreground mt-2 mb-10 text-center">
        Please test the components here and DO NOT PUSH this page to production
      </h2>
      <div
        className={twMerge(
          "@container w-[90%] mx-auto h-max flex flex-col justify-center items-center border border-outline-secondary rounded-lg",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
