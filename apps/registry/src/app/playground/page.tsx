import { twMerge } from "tailwind-merge";

export default function Page() {
  return <Playground>Hello</Playground>;
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
      <h1 className="text-foreground my-20 text-center">Playground</h1>
      <div
        className={twMerge(
          "w-[90%] mx-auto h-max min-h-60 flex flex-col justify-center items-center @container border border-outline-secondary rounded-lg",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
